/**
 * hooks/useBiostar.js
 * Fetches the live Biostar channels.json from GitHub on every session.
 * Falls back to an empty list if the fetch fails.
 *
 * Source: https://github.com/md-shinha-sarder/Biostar-TV-World-jk
 */

import { useState, useEffect } from 'react';

const BIOSTAR_JSON_URL =
  'https://raw.githubusercontent.com/md-shinha-sarder/Biostar-TV-World-jk/main/channels.json';
const CACHE_KEY = 'streamflow_biostar_channels';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes

export function useBiostar() {
  const [channels, setChannels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      // Try session cache with TTL
      try {
        const raw = sessionStorage.getItem(CACHE_KEY);
        if (raw) {
          const { data, ts } = JSON.parse(raw);
          if (Date.now() - ts < CACHE_TTL_MS && Array.isArray(data) && data.length > 0) {
            if (!cancelled) {
              setChannels(data);
              setCategories(extractCategories(data));
              setLoading(false);
            }
            return;
          }
        }
      } catch (_) { /* ignore */ }

      try {
        const res = await fetch(BIOSTAR_JSON_URL, {
          signal: AbortSignal.timeout(15000),
          cache: 'no-store',
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (cancelled) return;

        // Normalise: the JSON uses "category" key; map to "group" for consistency
        const normalised = data.map(ch => ({
          ...ch,
          group: ch.category || ch.group || 'Other',
        }));

        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ data: normalised, ts: Date.now() }));
        setChannels(normalised);
        setCategories(extractCategories(normalised));
      } catch (err) {
        if (cancelled) return;
        console.warn('[Biostar] fetch failed:', err.message);
        setError('Could not load Biostar channels. Check your connection.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => { cancelled = true; };
  }, []);

  return { channels, categories, loading, error };
}

function extractCategories(channels) {
  const seen = new Set();
  return channels
    .map(c => c.group)
    .filter(g => g && !seen.has(g) && seen.add(g))
    .sort();
}
