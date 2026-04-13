export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Missing required "url" parameter' });
  }

  try {
    // Inject the generic Referer that JagoBD explicitly requires
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Accept': '*/*',
      'Accept-Language': 'en-US,en;q=0.9',
      'Referer': 'https://www.jagobd.com/',
      'Origin': 'https://www.jagobd.com'
    };

    let targetUrl = decodeURIComponent(url);

    const response = await fetch(targetUrl, { headers });

    if (!response.ok) {
      return res.status(response.status).json({ error: `Downstream Error`, details: response.status });
    }

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Content-Type', response.headers.get('content-type') || 'application/vnd.apple.mpegurl');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

    if (targetUrl.includes('.m3u') || targetUrl.includes('.m3u8')) {
      let bodyText = await response.text();
      const baseUrl = targetUrl.substring(0, targetUrl.lastIndexOf('/') + 1);

      const lines = bodyText.split('\n');
      for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        if (line && !line.startsWith('#')) {
          if (!line.startsWith('http')) {
            line = baseUrl + line;
          }
          // Proxy chunks too just to be safe about Referer checks
          lines[i] = `/api/jago?url=${encodeURIComponent(line)}`;
        }
      }

      return res.status(200).send(lines.join('\n'));
    }

    // Binary TS chunks
    const buffer = await response.arrayBuffer();
    return res.status(200).send(Buffer.from(buffer));

  } catch (error) {
    console.error('Jago Proxy Exception:', error);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}
