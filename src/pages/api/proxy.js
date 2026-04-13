/**
 * pages/api/proxy.js
 * Server-side CORS proxy for fetching M3U playlists that block direct browser requests.
 * Usage: /api/proxy?url=<encoded_url>
 */

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  // Basic URL validation
  let targetUrl;
  try {
    targetUrl = new URL(decodeURIComponent(url));
  } catch {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  // Only allow http/https
  if (!['http:', 'https:'].includes(targetUrl.protocol)) {
    return res.status(400).json({ error: 'Only HTTP/HTTPS URLs are allowed' });
  }

  try {
    const upstream = await fetch(targetUrl.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; StreamFlow/1.0)',
        'Accept': '*/*',
      },
      signal: AbortSignal.timeout(20000),
    });

    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: `Upstream error: ${upstream.status}` });
    }

    const contentType = upstream.headers.get('content-type') || 'text/plain';
    const body = await upstream.text();

    res.setHeader('Content-Type', contentType);
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(body);
  } catch (err) {
    console.error('[proxy] error:', err.message);
    res.status(502).json({ error: 'Failed to fetch upstream resource', detail: err.message });
  }
}
