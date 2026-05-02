import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Channel, SourceId } from "@/lib/types";

interface State {
  source: SourceId;
  setSource: (s: SourceId) => void;
  favorites: Channel[];
  toggleFavorite: (c: Channel) => void;
  isFavorite: (url: string) => boolean;
  recentlyWatched: Channel[];
  addToRecent: (c: Channel) => void;
}

export const useStore = create<State>()(
  persist(
    (set, get) => ({
      source: "bd",
      setSource: (s) => set({ source: s }),

      favorites: [],
      toggleFavorite: (c) => {
        const favs = get().favorites;
        const exists = favs.some((f) => f.url === c.url);
        set({ favorites: exists ? favs.filter((f) => f.url !== c.url) : [c, ...favs] });
      },
      isFavorite: (url) => get().favorites.some((f) => f.url === url),

      recentlyWatched: [],
      addToRecent: (c) => {
        const recent = get().recentlyWatched.filter((r) => r.url !== c.url);
        set({ recentlyWatched: [c, ...recent].slice(0, 12) });
      },
    }),
    {
      name: "streamflow-storage",
      partialize: (s) => ({
        favorites: s.favorites,
        recentlyWatched: s.recentlyWatched,
        source: s.source,
      }),
    },
  ),
);
