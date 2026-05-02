// Vercel Serverless Function — mirrors src/routes/api.proxy.ts
export const config = { runtime: "edge" };

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Range",
  "Access-Control-Expose-Headers": "Content-Length, Content-Range",
};

function headersForUrl(url) {
  const base = {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
  };
  if (/jagobd|jagobd\.com\.bd/i.test(url)) {
    base.Referer = "https://www.jagobd.com/";
    base.Origin = "https://www.jagobd.com";
  } else if (/digijadoo|toffeelive/i.test(url)) {
    base.Referer = "https://toffeelive.com/";
    base.Origin = "https://toffeelive.com";
  } else if (/aynaott/i.test(url)) {
    base.Referer = "https://ayna-ott.com/";
    base.Origin = "https://ayna-ott.com";
  } else if (/bozztv|bozz\.tv/i.test(url)) {
    base.Referer = "https://bozztv.com/";
  } else if (/ncare\.live/i.test(url)) {
    base.Referer = "https://app.ncare.live/";
  }
  return base;
}

function toProxyUrl(absoluteUrl) {
  return `/api/proxy?url=${encodeURIComponent(absoluteUrl)}`;
}

export default async function handler(request) {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS_HEADERS });
  }

  const reqUrl = new URL(request.url);
  const target = reqUrl.searchParams.get("url");
  if (!target) {
    return new Response(JSON.stringify({ error: "Missing url parameter" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  }

  let targetUrl;
  try {
    targetUrl = new URL(decodeURIComponent(target));
  } catch {
    return new Response(JSON.stringify({ error: "Invalid url" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  }
  if (!["http:", "https:"].includes(targetUrl.protocol)) {
    return new Response(JSON.stringify({ error: "Only http/https allowed" }), {
      status: 400,
      headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
  }

  const upstreamHeaders = headersForUrl(targetUrl.toString());
  const range = request.headers.get("range");
  if (range) upstreamHeaders.Range = range;

  let upstream;
  try {
    if (targetUrl.hostname === "iptvidn.com" && targetUrl.pathname === "/play.php") {
      const pageRes = await fetch(targetUrl.toString(), {
        headers: {
          ...upstreamHeaders,
          Referer: "http://iptvidn.com/",
        },
        signal: AbortSignal.timeout(10000),
      });
      if (!pageRes.ok) throw new Error(`IPTVIDN page fetch failed: ${pageRes.status}`);
      const html = await pageRes.text();
      const iframeMatch = html.match(/<iframe[^>]+src="([^"]+)"/i);
      if (!iframeMatch) throw new Error("Could not find iframe in IPTVIDN player page");

      let iframeUrl = iframeMatch[1];
      const m3u8Url = iframeUrl.replace("/embed.html", "/index.m3u8");
      targetUrl = new URL(m3u8Url);
    }

    upstream = await fetch(targetUrl.toString(), {
      headers: upstreamHeaders,
      signal: AbortSignal.timeout(20000),
      redirect: "follow",
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Upstream fetch failed", detail: err.message }),
      { status: 502, headers: { "Content-Type": "application/json", ...CORS_HEADERS } },
    );
  }

  const contentType = upstream.headers.get("content-type") || "";
  const looksLikePlaylist =
    targetUrl.pathname.endsWith(".m3u") ||
    targetUrl.pathname.endsWith(".m3u8") ||
    /mpegurl/i.test(contentType);

  if (looksLikePlaylist) {
    const text = await upstream.text();
    const baseUrl = targetUrl.toString().substring(0, targetUrl.toString().lastIndexOf("/") + 1);
    const lines = text.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (trimmed.startsWith("#")) {
        lines[i] = line.replace(/URI="([^"]+)"/g, (_m, uri) => {
          const abs = uri.startsWith("http") ? uri : baseUrl + uri;
          return `URI="${toProxyUrl(abs)}"`;
        });
        continue;
      }
      const abs = trimmed.startsWith("http") ? trimmed : baseUrl + trimmed;
      lines[i] = toProxyUrl(abs);
    }
    return new Response(lines.join("\n"), {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.apple.mpegurl",
        "Cache-Control": "no-store",
        ...CORS_HEADERS,
      },
    });
  }

  const passthroughHeaders = {
    "Content-Type": contentType || "application/octet-stream",
    ...CORS_HEADERS,
  };
  const cl = upstream.headers.get("content-length");
  if (cl) passthroughHeaders["Content-Length"] = cl;
  const cr = upstream.headers.get("content-range");
  if (cr) passthroughHeaders["Content-Range"] = cr;

  return new Response(upstream.body, {
    status: upstream.status,
    headers: passthroughHeaders,
  });
}
