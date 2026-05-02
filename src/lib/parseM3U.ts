import type { Channel } from "./types";

export function parseM3U(text: string, limit = 2000): Channel[] {
  const lines = text.split("\n");
  const channels: Channel[] = [];
  let meta: Partial<Channel> = {};

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("#EXTINF:")) {
      meta = {};
      const nameMatch = line.match(/,(.+)$/);
      if (nameMatch) meta.name = nameMatch[1].trim();
      const tvgName = line.match(/tvg-name="([^"]*)"/);
      if (tvgName && tvgName[1]) meta.name = tvgName[1];
      const logoMatch = line.match(/tvg-logo="([^"]*)"/);
      if (logoMatch) meta.logo = logoMatch[1] || "";
      const groupMatch = line.match(/group-title="([^"]*)"/);
      meta.group = groupMatch ? groupMatch[1] || "General" : "General";
      const countryMatch = line.match(/tvg-country="([^"]*)"/);
      if (countryMatch) meta.country = countryMatch[1];
      const langMatch = line.match(/tvg-language="([^"]*)"/);
      if (langMatch) meta.language = langMatch[1];
    } else if (line.startsWith("http") && meta.name) {
      channels.push({ ...(meta as Channel), url: line });
      meta = {};
      if (channels.length >= limit) break;
    }
  }
  return channels;
}

export function extractCategories(channels: Channel[]): string[] {
  const set = new Set<string>();
  for (const c of channels) if (c.group) set.add(c.group);
  return [...set].sort();
}

export function slugifyCategory(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
