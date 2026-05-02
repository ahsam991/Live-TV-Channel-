import type { SourceMeta, SourceId } from "./types";

export const SOURCES: SourceMeta[] = [
  { id: "bd", label: "BD Live", emoji: "🇧🇩", description: "Bangladeshi TV (digijadoo CDN)" },
  { id: "iptv", label: "Global IPTV", emoji: "📡", description: "Curated international free-to-air channels" },
  { id: "biostar", label: "Biostar", emoji: "⭐", description: "Embedded Biostar player feed" },
  { id: "hexa", label: "HEXA PRO", emoji: "🔥", description: "Mixed BD + international HLS" },
  { id: "tsports", label: "T-Sports", emoji: "🏏", description: "Live sports playlist (auto-updated)" },
  { id: "sunplex", label: "Sunplex", emoji: "☀️", description: "Sunplex network playlist" },
  { id: "toffee", label: "Toffee", emoji: "🍬", description: "Toffee live channels (proxy required)", requiresProxy: true },
  { id: "jago", label: "JagoBD", emoji: "🎥", description: "JagoBD diaspora feed (proxy required)", requiresProxy: true },
  { id: "ayna", label: "Ayna OTT", emoji: "🪞", description: "Ayna OTT feed (geo-restricted)", requiresProxy: true },
  { id: "megapack", label: "Mega Pack", emoji: "📦", description: "190+ BD/Indian/Sports/News HLS channels" },
  { id: "iptvidn", label: "IPTVDN", emoji: "📺", description: "IPTVDN Live - Scraped from iptvidn.com" },
  { id: "custom", label: "Custom", emoji: "✨", description: "Your own channels from src/data/customChannels.ts" },
];

export const SOURCE_BY_ID: Record<SourceId, SourceMeta> = SOURCES.reduce(
  (acc, s) => {
    acc[s.id] = s;
    return acc;
  },
  {} as Record<SourceId, SourceMeta>,
);
