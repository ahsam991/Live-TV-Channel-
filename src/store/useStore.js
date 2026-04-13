/**
 * store/useStore.js
 * Global state via Zustand — selected channel, favorites, recently watched, theme, source.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      // Currently playing channel
      currentChannel: null,
      setCurrentChannel: (channel) => set({ currentChannel: channel }),

      // Active source: 'iptv' | 'biostar' | 'bd' | 'hexa' | 'tsports' | 'sunplex' | 'toffee'
      source: 'iptv',
      setSource: (src) => set({ source: src, currentChannel: null }),

      // Geo Proxy Toggle
      useGeoProxy: false,
      toggleGeoProxy: () => set((s) => ({ useGeoProxy: !s.useGeoProxy })),

      // Favorites — stored as Set of URLs (serialized as array)
      favorites: [],
      toggleFavorite: (channel) => {
        const favs = get().favorites;
        const exists = favs.some(f => f.url === channel.url);
        set({ favorites: exists ? favs.filter(f => f.url !== channel.url) : [channel, ...favs] });
      },
      isFavorite: (url) => get().favorites.some(f => f.url === url),

      // Recently watched (max 10)
      recentlyWatched: [],
      addToRecent: (channel) => {
        const recent = get().recentlyWatched.filter(r => r.url !== channel.url);
        set({ recentlyWatched: [channel, ...recent].slice(0, 10) });
      },

      // Theme
      theme: 'dark',
      toggleTheme: () => set((s) => ({ theme: s.theme === 'dark' ? 'light' : 'dark' })),

      // Player error state
      playerError: null,
      setPlayerError: (err) => set({ playerError: err }),
      clearPlayerError: () => set({ playerError: null }),
    }),
    {
      name: 'streamflow-storage',
      partialize: (state) => ({
        favorites: state.favorites,
        recentlyWatched: state.recentlyWatched,
        theme: state.theme,
        source: state.source,
      }),
    }
  )
);
