export default async function handler(req, res) {
  const { url, cookie } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing required "url" parameter' });
  }

  try {
    // Inject the Android app User-Agent that Toffee explicitly requires to bypass 403 Forbidden
    const headers = {
      'User-Agent': 'Toffee Eamin Talukdar (Linux;Android 14)',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': 'https://bldcmprod-cdn.toffeelive.com/',
      'Origin': 'https://bldcmprod-cdn.toffeelive.com'
    };

    // Construct the actual URL to fetch from Toffee
    let targetUrl = decodeURIComponent(url);
    if (cookie) {
      if (targetUrl.includes('?')) targetUrl += '&' + decodeURIComponent(cookie);
      else targetUrl += '?' + decodeURIComponent(cookie);
    }

    const response = await fetch(targetUrl, { headers });

    if (!response.ok) {
      const text = await response.text();
      console.error(`Toffee Proxy Error (${response.status}):`, text);
      return res.status(response.status).json({ error: `Toffee CDN Error: ${response.status}`, details: text });
    }

    // Set open CORS so your frontend player can read the proxy
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/vnd.apple.mpegurl');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    // If it's the playlist or manifest (.m3u8), we MUST rewrite the inside URLs
    if (targetUrl.includes('.m3u') || targetUrl.includes('.m3u8')) {
      let bodyText = await response.text();
      const baseUrl = targetUrl.substring(0, targetUrl.lastIndexOf('/') + 1);

      const lines = bodyText.split('\n');
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        
        // Target valid media lines (not comments or empty lines)
        if (line && !line.startsWith('#')) {
          
          // Make relative paths absolute directly to Toffee's CDN
          if (!line.startsWith('http')) {
            line = baseUrl + line;
          }
          
          // CRUCIAL: We append the Edge-Cache-Cookie to EVERY chunk URL so Toffee authorizes it directly from the browser!
          // This saves massive Vercel bandwidth by letting the browser handle TS chunks directly.
          if (cookie && !line.includes('Edge-Cache-Cookie')) {
            if (line.includes('?')) line += '&' + decodeURIComponent(cookie);
            else line += '?' + decodeURIComponent(cookie);
          }

          // We purposefully let the browser handle video chunks directly to prevent your Vercel bandwidth from exploding!
          // Almost all CDNs only enforce User-Agent on the main M3U8 file request. 
          lines[i] = line;
        }
      }

      return res.status(200).send(lines.join('\n'));
    }

    // If it's a TS video chunk (binary file), stream it directly back to the player
    const buffer = await response.arrayBuffer();
    return res.status(200).send(Buffer.from(buffer));

  } catch (error) {
    console.error('Toffee Proxy Exception:', error);
    return res.status(500).json({ error: 'Internal Server Error Proxying Stream', message: error.message });
  }
}
