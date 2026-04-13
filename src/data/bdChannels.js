/**
 * data/bdChannels.js
 * Direct HLS streams for Bangladeshi TV channels (digijadoo CDN).
 * These play natively through hls.js — no iframe required.
 */

const BD_CHANNELS = [
  // ── Entertainment / General ───────────────────────────────────────────────
  { id: 'gazi-tv',       name: 'Gazi TV',         group: 'Bangla', logo: 'https://tvassets.roarzone.info/images/gazitv.png',         url: 'https://itpolly.iptv.digijadoo.net/live/gazi_tv/chunks.m3u8' },
  { id: 'maasranga',     name: 'Maasranga',        group: 'Bangla', logo: 'https://i.postimg.cc/WbnjN67C/20250529-104926.png',         url: 'https://itpolly.iptv.digijadoo.net/live/maasranga/chunks.m3u8' },
  { id: 'asian-tv',      name: 'Asian TV',          group: 'Bangla', logo: 'https://s3.aynaott.com/storage/5282cec3a2e9349b750540d658cf1b6c', url: 'https://itpolly.iptv.digijadoo.net/live/asian_tv/chunks.m3u8' },
  { id: 'atn-bangla',    name: 'ATN Bangla',        group: 'Bangla', logo: 'https://i.postimg.cc/FHBMzPkW/20250529-102502.png',         url: 'https://itpolly.iptv.digijadoo.net/live/atn_bangla/chunks.m3u8' },
  { id: 'banglavision',  name: 'Banglavision TV',   group: 'Bangla', logo: 'https://tvassets.roarzone.info/images/3.png',              url: 'https://itpolly.iptv.digijadoo.net/live/bangla_vision/chunks.m3u8' },
  { id: 'boishakhi-tv',  name: 'Boishakhi TV',      group: 'Bangla', logo: 'https://tvassets.roarzone.info/images/61.png',             url: 'https://itpolly.iptv.digijadoo.net/live/boishakhi_tv/chunks.m3u8' },
  { id: 'btv-world',     name: 'BTV World',          group: 'Bangla', logo: 'https://tvassets.roarzone.info/images/84.png',             url: 'https://itpolly.iptv.digijadoo.net/live/btv_world/chunks.m3u8' },
  { id: 'channel-9',     name: 'Channel 9',          group: 'Bangla', logo: 'https://s3.aynaott.com/storage/affd223f023a705e3a1c5df263d0a7ef', url: 'https://itpolly.iptv.digijadoo.net/live/channel_9/chunks.m3u8' },
  { id: 'channel-i',     name: 'Channel I',           group: 'Bangla', logo: 'https://i.postimg.cc/J47vqwbY/20250529-101717.png',       url: 'https://itpolly.iptv.digijadoo.net/live/channel_i/chunks.m3u8' },
  { id: 'deepto-tv',     name: 'Deepto TV',           group: 'Bangla', logo: 'https://tvassets.roarzone.info/images/8.png',             url: 'https://itpolly.iptv.digijadoo.net/live/deepto_tv/chunks.m3u8' },
  { id: 'desh-tv',       name: 'Desh TV',             group: 'Bangla', logo: 'https://tvassets.roarzone.info/images/9.png',             url: 'https://itpolly.iptv.digijadoo.net/live/desh_tv/chunks.m3u8' },
  { id: 'duronto-tv',    name: 'Duronto TV',           group: 'Bangla', logo: 'https://tvassets.roarzone.info/images/10.png',            url: 'https://itpolly.iptv.digijadoo.net/live/duronto_tv/chunks.m3u8' },
  { id: 'ekushey-tv',    name: 'Ekushey TV',           group: 'Bangla', logo: 'https://tvassets.roarzone.info/images/65.png',            url: 'https://itpolly.iptv.digijadoo.net/live/ekushey_tv/chunks.m3u8' },
  { id: 'independent-tv',name: 'Independent TV',       group: 'Bangla', logo: 'https://tvassets.roarzone.info/images/12.png',            url: 'https://itpolly.iptv.digijadoo.net/live/independent_tv/chunks.m3u8' },
  { id: 'nagorik-tv',    name: 'Nagorik TV',           group: 'Bangla', logo: 'https://i.postimg.cc/8zQ0DYBH/20250720_201346.png',       url: 'https://itpolly.iptv.digijadoo.net/live/nagorik_tv/chunks.m3u8' },
  { id: 'ntv',           name: 'NTV',                  group: 'Bangla', logo: 'https://i.postimg.cc/kgzHqBLL/20250529-072107.png',       url: 'https://itpolly.iptv.digijadoo.net/live/ntv/chunks.m3u8' },
  { id: 'rtv',           name: 'RTV',                  group: 'Bangla', logo: 'https://tvassets.roarzone.info/images/14.png',            url: 'https://itpolly.iptv.digijadoo.net/live/rtv/playlist.m3u8' },
  { id: 'sa-tv',         name: 'SA TV',                group: 'Bangla', logo: 'https://s3.aynaott.com/storage/f710d2ff532cb7e7b75566232c5b72d3', url: 'https://itpolly.iptv.digijadoo.net/live/sa_tv/playlist.m3u8' },

  // ── News ──────────────────────────────────────────────────────────────────
  { id: 'atn-news',      name: 'ATN News',            group: 'News', logo: 'https://tvassets.roarzone.info/images/49.png',              url: 'https://itpolly.iptv.digijadoo.net/live/atn_news/chunks.m3u8' },
  { id: 'channel-24',    name: 'Channel 24',           group: 'News', logo: 'https://i.postimg.cc/nLmPznJr/20250529-071852.png',         url: 'https://itpolly.iptv.digijadoo.net/live/channel_24/chunks.m3u8' },
  { id: 'dbc-news',      name: 'DBC News',             group: 'News', logo: 'https://s3.aynaott.com/storage/e8bb743022a2b6b0ee714bbdb2715cbe', url: 'https://itpolly.iptv.digijadoo.net/live/dbc_news/chunks.m3u8' },
  { id: 'ekattor-tv',    name: 'Ekattor TV',           group: 'News', logo: 'https://i.postimg.cc/D0xCDZqj/20250529-071258.png',         url: 'https://itpolly.iptv.digijadoo.net/live/ekattor_tv/chunks.m3u8' },
  { id: 'jamuna-tv',     name: 'Jamuna TV',            group: 'News', logo: 'https://i.postimg.cc/L4D0hyrt/20250529-071035.png',         url: 'https://itpolly.iptv.digijadoo.net/live/jamuna_tv/chunks.m3u8' },
  { id: 'somoy-news',    name: 'Somoy News',           group: 'News', logo: 'https://i.postimg.cc/Qxn4JFNV/20250529-071147.png',         url: 'https://itpolly.iptv.digijadoo.net/live/somoy_news/chunks.m3u8' },

  // ── Indian Bangla ─────────────────────────────────────────────────────────
  { id: 'colors-bangla',      name: 'Colors Bangla',       group: 'Indian Bangla', logo: 'https://tvassets.roarzone.info/images/66.png', url: 'https://itpolly.iptv.digijadoo.net/live/colors_bangla_hd/playlist.m3u8' },
  { id: 'star-jalsha-movies', name: 'Star Jalsha Movies',  group: 'Indian Bangla', logo: 'https://tvassets.roarzone.info/images/31.png', url: 'https://itpolly.iptv.digijadoo.net/live/jalsha_movies/chunks.m3u8' },
];

export default BD_CHANNELS;

export function getBDCategories() {
  const seen = new Set();
  return BD_CHANNELS
    .map(c => c.group)
    .filter(g => !seen.has(g) && seen.add(g));
}
