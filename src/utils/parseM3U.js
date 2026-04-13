/**
 * parseM3U.js
 * Parses raw M3U playlist text into structured channel objects.
 */

/**
 * @param {string} text - Raw M3U file content
 * @param {number} [limit=1000] - Max channels to parse
 * @returns {Array<{name,logo,group,url}>}
 */
export function parseM3U(text, limit = 1000) {
  const lines = text.split('\n');
  const channels = [];
  let meta = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith('#EXTINF:')) {
      meta = {};

      // Channel name (after last comma)
      const nameMatch = line.match(/,(.+)$/);
      if (nameMatch) meta.name = nameMatch[1].trim();

      // tvg-name overrides display name if present
      const tvgName = line.match(/tvg-name="([^"]*)"/);
      if (tvgName && tvgName[1]) meta.name = tvgName[1];

      // Logo URL
      const logoMatch = line.match(/tvg-logo="([^"]*)"/);
      if (logoMatch) meta.logo = logoMatch[1] || '';

      // Group / category
      const groupMatch = line.match(/group-title="([^"]*)"/);
      meta.group = groupMatch ? (groupMatch[1] || 'General') : 'General';

      // Country
      const countryMatch = line.match(/tvg-country="([^"]*)"/);
      if (countryMatch) meta.country = countryMatch[1];

      // Language
      const langMatch = line.match(/tvg-language="([^"]*)"/);
      if (langMatch) meta.language = langMatch[1];

    } else if (line.startsWith('http') && meta.name) {
      channels.push({ ...meta, url: line });
      meta = {};
      if (channels.length >= limit) break;
    }
  }

  return channels;
}

/**
 * Extract unique sorted categories from channel list
 * @param {Array} channels
 * @returns {string[]}
 */
export function extractCategories(channels) {
  const cats = [...new Set(channels.map(c => c.group).filter(Boolean))];
  return cats.sort();
}
