// Aggregates all in-repo channel datasets and provides remote-fetch helpers.
import type { Channel, SourceId } from "./types";
import BD_CHANNELS from "@/data/bdChannels";
import HEXA_CHANNELS from "@/data/hexaChannels";
import { TOFFEE_CHANNELS } from "@/data/toffeeChannels";
import JAGO_CHANNELS from "@/data/jagoChannels";
import AYNA_CHANNELS from "@/data/aynaChannels";
import CUSTOM_CHANNELS from "@/data/customChannels";
import MEGAPACK_CHANNELS from "@/data/megapackChannels";
import IPTVIDN_CHANNELS from "@/data/iptvidnChannels";
import { parseM3U } from "./parseM3U";

export const STATIC_CHANNELS: Record<string, Channel[]> = {
  bd: BD_CHANNELS as Channel[],
  hexa: HEXA_CHANNELS as Channel[],
  toffee: TOFFEE_CHANNELS as Channel[],
  jago: JAGO_CHANNELS as Channel[],
  ayna: AYNA_CHANNELS as Channel[],
  megapack: MEGAPACK_CHANNELS,
  iptvidn: IPTVIDN_CHANNELS,
  custom: CUSTOM_CHANNELS,
};

const REMOTE_SOURCES: Partial<Record<SourceId, { url: string; type: "m3u" | "json" }>> = {
  iptv: { url: "https://iptv-org.github.io/iptv/index.m3u", type: "m3u" },
  tsports: {
    url: "https://raw.githubusercontent.com/abusaeeidx/T-Sports-Playlist-Auto-Update/main/combine_playlist.m3u",
    type: "m3u",
  },
  sunplex: {
    url: "https://gist.githubusercontent.com/sefatanam/b73998c6626b3c993e52370e9dbb78f6/raw",
    type: "m3u",
  },
  biostar: {
    url: "https://raw.githubusercontent.com/md-shinha-sarder/Biostar-TV-World-jk/main/channels.json",
    type: "json",
  },
};

const memCache = new Map<SourceId, Channel[]>();

export function getStaticChannels(source: SourceId): Channel[] | null {
  if (source === "all") {
    // Aggregate all static channels into one big list
    return Object.values(STATIC_CHANNELS).flat();
  }
  return STATIC_CHANNELS[source] ?? null;
}

export async function fetchRemoteChannels(source: SourceId): Promise<Channel[]> {
  if (memCache.has(source)) return memCache.get(source)!;
  if (typeof window !== "undefined") {
    const cached = sessionStorage.getItem(`sf-${source}`);
    if (cached) {
      try {
        const parsed = JSON.parse(cached) as Channel[];
        memCache.set(source, parsed);
        return parsed;
      } catch {
        // ignore
      }
    }
  }

  const cfg = REMOTE_SOURCES[source];
  if (!cfg) return [];

  const res = await fetch(cfg.url, { signal: AbortSignal.timeout(20000) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);

  let channels: Channel[] = [];
  if (cfg.type === "m3u") {
    const text = await res.text();
    channels = parseM3U(text, source === "iptv" ? 600 : 2000);
  } else {
    const data = (await res.json()) as Array<Record<string, unknown>>;
    channels = data.map((ch) => ({
      name: String(ch.name ?? "Unknown"),
      logo: (ch.logo as string) || "",
      url: String(ch.url ?? ""),
      group: String(ch.category ?? ch.group ?? "Other"),
    }));
  }

  memCache.set(source, channels);
  if (typeof window !== "undefined") {
    try {
      sessionStorage.setItem(`sf-${source}`, JSON.stringify(channels));
    } catch {
      // quota — ignore
    }
  }
  return channels;
}

export function getCategories(channels: Channel[]): string[] {
  const set = new Set<string>();
  for (const c of channels) if (c.group) set.add(c.group);
  return [...set].sort();
}

export function findChannelByUrl(channels: Channel[], url: string): Channel | null {
  return channels.find((c) => c.url === url) ?? null;
}

/** Demo channels to show when remote fetch fails. */
export const DEMO_CHANNELS: Channel[] = [
  {
    name: "NASA TV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/100px-NASA_logo.svg.png",
    group: "Science",
    url: "https://ntv1.akamaized.net/hls/live/2014075/NASA-NTV1-HLS/master.m3u8",
  },
  {
    name: "Al Jazeera English",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/120px-Aljazeera_eng.svg.png",
    group: "News",
    url: "https://live-hls-web-aje.getaj.net/AJE/index.m3u8",
  },
  {
    name: "France 24 English",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/France24_logo.svg/120px-France24_logo.svg.png",
    group: "News",
    url: "https://stream.france24.com/hls/live/2037996/F24_EN_LO_HLS/master.m3u8",
  },
  {
    name: "DW English",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/100px-Deutsche_Welle_symbol_2012.svg.png",
    group: "News",
    url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8",
  },
];
