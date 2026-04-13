/**
 * usePlaylist.js
 * Custom hook to fetch and parse the M3U playlist.
 * Caches result in sessionStorage for the session lifetime.
 */

import { useState, useEffect } from 'react';
import { parseM3U, extractCategories } from '../utils/parseM3U';

const CACHE_KEY = 'streamflow_playlist';
const PLAYLIST_URL = process.env.NEXT_PUBLIC_PLAYLIST_URL || 'https://iptv-org.github.io/iptv/index.m3u';
const PROXY = '/api/proxy?url=';

export function usePlaylist() {
  const [channels, setChannels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('Initializing...');

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // Try session cache first
      try {
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const parsed = JSON.parse(cached);
          if (!cancelled) {
            setChannels(parsed);
            setCategories(extractCategories(parsed));
            setLoading(false);
            setStatus('Loaded from cache');
          }
          return;
        }
      } catch (_) { /* ignore */ }

      setStatus('Fetching playlist...');

      try {
        // Try via local proxy first
        const res = await fetch(`${PROXY}${encodeURIComponent(PLAYLIST_URL)}`, {
          signal: AbortSignal.timeout(20000),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        setStatus('Parsing channels...');
        const text = await res.text();
        const parsed = parseM3U(text, 500);

        if (cancelled) return;
        sessionStorage.setItem(CACHE_KEY, JSON.stringify(parsed));
        setChannels(parsed);
        setCategories(extractCategories(parsed));
        setStatus(`Loaded ${parsed.length} channels`);
      } catch (err) {
        if (cancelled) return;
        console.warn('Playlist fetch failed, using demo channels:', err.message);
        setError('Could not fetch live playlist. Showing demo channels.');
        const demo = getDemoChannels();
        setChannels(demo);
        setCategories(extractCategories(demo));
        setStatus('Demo mode');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return { channels, categories, loading, error, status };
}

function getDemoChannels() {
  return [
    { name: 'BBC News', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BBC_News_2019.svg/120px-BBC_News_2019.svg.png', group: 'News', url: 'https://vs-hls-push-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_news_channel_hd/pc_hd_abr_v2.m3u8' },
    { name: 'CNN International', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/CNN.svg/120px-CNN.svg.png', group: 'News', url: 'https://cnn-cnninternational-1-eu.rakuten.wurl.tv/playlist.m3u8' },
    { name: 'Al Jazeera English', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Aljazeera_eng.svg/120px-Aljazeera_eng.svg.png', group: 'News', url: 'https://live-hls-web-aje.getaj.net/AJE/index.m3u8' },
    { name: 'NASA TV', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/100px-NASA_logo.svg.png', group: 'Science', url: 'https://nasa-i.akamaihd.net/hls/live/253565/NASA-NTV1-HLS/master.m3u8' },
    { name: 'France 24 English', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/France24_logo.svg/120px-France24_logo.svg.png', group: 'News', url: 'https://stream.france24.com/hls/live/2037996/F24_EN_LO_HLS/master.m3u8' },
    { name: 'DW Documentary', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Deutsche_Welle_symbol_2012.svg/100px-Deutsche_Welle_symbol_2012.svg.png', group: 'Documentary', url: 'https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8' },
    { name: 'Euronews', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Euronews_logo.svg/120px-Euronews_logo.svg.png', group: 'News', url: 'https://euronews-euronews-world-1-fr.rakuten.wurl.tv/playlist.m3u8' },
    { name: 'TRT World', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/TRT_World_logo.svg/120px-TRT_World_logo.svg.png', group: 'News', url: 'https://tv-trtworld.live.trt.com.tr/master.m3u8' },
    { name: 'Sky News', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Sky_News_International_logo_2016.svg/120px-Sky_News_International_logo_2016.svg.png', group: 'News', url: 'https://skynews-skynewsintl-1-gb.samsung.wurl.tv/playlist.m3u8' },
    { name: 'CNA', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b8/CNA_logo.svg/100px-CNA_logo.svg.png', group: 'Asia', url: 'https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43ccb9b9535ffa1cb7ac/index.m3u8' },
  ];
}
