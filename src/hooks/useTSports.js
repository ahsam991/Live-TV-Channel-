import { useState, useEffect } from 'react';
import { parseM3U } from '../utils/parseM3U';

const T_SPORTS_URL = 'https://raw.githubusercontent.com/abusaeeidx/T-Sports-Playlist-Auto-Update/main/combine_playlist.m3u';
const CACHE_KEY = 'tsports_channels_cache';
const CACHE_TIME = 10 * 60 * 1000; // 10 minutes

export function useTSports() {
  const [channels, setChannels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTSports() {
      try {
        setLoading(true);
        setError(null);

        // Check cache first
        const cached = sessionStorage.getItem(CACHE_KEY);
        if (cached) {
          const { timestamp, data } = JSON.parse(cached);
          if (Date.now() - timestamp < CACHE_TIME) {
            setChannels(data.channels);
            setCategories(data.categories);
            setLoading(false);
            return;
          }
        }

        // Fetch fresh M3U
        const response = await fetch(T_SPORTS_URL);
        if (!response.ok) throw new Error('Failed to fetch T-Sports playlist');
        
        const m3uText = await response.text();
        const parsedChannels = parseM3U(m3uText);

        // Process channels to set group names properly if missing
        const processed = parsedChannels.map(ch => ({
          ...ch,
          group: ch.group || 'T-Sports',
          id: ch.url, // URL as unique ID
        }));

        // Extract categories
        const uniqueCategories = [...new Set(processed.map(c => c.group))].filter(Boolean);

        setChannels(processed);
        setCategories(uniqueCategories);

        // Save to cache
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({
          timestamp: Date.now(),
          data: { channels: processed, categories: uniqueCategories }
        }));

      } catch (err) {
        console.error('Error fetching T-Sports:', err);
        setError('Could not load T-Sports live feed. Try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchTSports();
  }, []);

  return { channels, categories, loading, error };
}
