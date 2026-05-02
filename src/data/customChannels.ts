/**
 * Custom Channels Config
 * ----------------------
 * Add or edit your own channels here without touching component code.
 * Anything you put in this array shows up under the "Custom" source in the UI.
 *
 * Each entry must have at least: name and url. The url should point to an
 * .m3u8 (HLS) stream that allows CORS playback in the browser.
 *
 * Example formats:
 *
 *   {
 *     "name": "My Channel",
 *     "url": "https://example.com/stream.m3u8",
 *     "logo": "https://example.com/logo.png",
 *     "group": "Entertainment"
 *   }
 *
 * After editing, the changes are picked up on the next page reload.
 */

import type { Channel } from "@/lib/types";

const CUSTOM_CHANNELS: Channel[] = [
  {
    id: "demo-aljazeera",
    name: "Al Jazeera English",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/120px-Aljazeera_eng.svg.png",
    group: "News",
    url: "https://live-hls-web-aje.getaj.net/AJE/index.m3u8",
  },
  {
    id: "demo-france24",
    name: "France 24 English",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/France24_logo.svg/120px-France24_logo.svg.png",
    group: "News",
    url: "https://stream.france24.com/hls/live/2037996/F24_EN_LO_HLS/master.m3u8",
  },
  {
    id: "demo-dw",
    name: "DW English",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/100px-Deutsche_Welle_symbol_2012.svg.png",
    group: "News",
    url: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8",
  },
  {
    id: "demo-redbull",
    name: "Red Bull TV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Red_Bull.svg/120px-Red_Bull.svg.png",
    group: "Entertainment",
    url: "https://rbmn-live.akamaized.net/hls/live/590964/BoRB-AT/master.m3u8",
  },
];

export default CUSTOM_CHANNELS;
