export interface Channel {
  id?: string;
  name: string;
  logo?: string;
  group?: string;
  url: string;
  userAgent?: string;
  cookie?: string;
  country?: string;
  language?: string;
}

export type SourceId =
  | "iptv"
  | "bd"
  | "biostar"
  | "hexa"
  | "tsports"
  | "sunplex"
  | "toffee"
  | "jago"
  | "ayna"
  | "megapack"
  | "custom";

export interface SourceMeta {
  id: SourceId;
  label: string;
  emoji: string;
  description: string;
  /** True if streams require a server-side proxy and won't play directly in the browser */
  requiresProxy?: boolean;
}
