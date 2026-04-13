import { useState, useEffect } from 'react';
import { parseM3U } from '../utils/parseM3U';

const SUNPLEX_URL = 'https://gist.githubusercontent.com/sefatanam/b73998c6626b3c993e52370e9dbb78f6/raw';
const CACHE_KEY = 'sunplex_channels_cache';
const CACHE_TIME = 10 * 60 * 1000; // 10 minutes

export function useSunplex() {
  const [channels, setChannels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchSunplex() {
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
        const response = await fetch(SUNPLEX_URL);
        if (!response.ok) throw new Error('Failed to fetch Sunplex playlist');
        
        const m3uText = await response.text();
        const parsedChannels = parseM3U(m3uText);

        // Process channels to set group names properly if missing
        const processed = parsedChannels.map(ch => ({
          ...ch,
          group: ch.group || 'Sunplex Live',
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
        console.error('Error fetching Sunplex TV:', err);
        setError('Could not load Sunplex ISP feed. Check network.');
      } finally {
        setLoading(false);
      }
    }

    fetchSunplex();
  }, []);

  return { channels, categories, loading, error };
}
