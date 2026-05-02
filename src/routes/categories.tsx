import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useChannels } from "@/hooks/useChannels";
import { useStore } from "@/store/useStore";
import { SourceSwitcher } from "@/components/SourceSwitcher";
import { SearchBar } from "@/components/SearchBar";
import { ChannelGrid, ChannelGridSkeleton } from "@/components/ChannelGrid";
import { CategoryChips } from "@/components/CategoryChips";
import { getCategories } from "@/lib/channels";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Browse Channels by Category — StreamFlow" },
      { name: "description", content: "Browse live TV channels by category: sports, news, entertainment, Bangla, international." },
      { property: "og:title", content: "Browse Channels — StreamFlow" },
      { property: "og:description", content: "Find your favorite live TV channels by category." },
    ],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  const source = useStore((s) => s.source);
  const { channels, loading, error } = useChannels(source);
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const categories = useMemo(() => getCategories(channels), [channels]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof channels>();
    for (const c of channels) {
      const k = c.group || "Other";
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(c);
    }
    return map;
  }, [channels]);

  const filtered = useMemo(() => {
    let list = channels;
    if (activeCat !== "All") list = list.filter((c) => c.group === activeCat);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }
    return list;
  }, [channels, activeCat, search]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
      <h1 className="mb-2 text-3xl font-black md:text-4xl">Browse by Category</h1>
      <p className="mb-6 text-muted-foreground">
        Filter the live channel grid by category, or jump into a single category page.
      </p>

      <div className="mb-5">
        <SourceSwitcher />
      </div>

      <div className="mb-4 flex flex-col gap-3">
        <SearchBar value={search} onChange={setSearch} />
        <CategoryChips categories={categories} active={activeCat} onChange={setActiveCat} />
      </div>

      {/* Quick category chips with counts */}
      {!loading && (
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {[...grouped.entries()].map(([cat, list]) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCat(cat)}
              className={`rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/60 ${
                activeCat === cat ? "border-primary bg-card shadow-glow" : "border-border bg-card/40"
              }`}
            >
              <div className="text-sm font-bold">{cat}</div>
              <div className="text-xs text-muted-foreground">{list.length} channels</div>
            </button>
          ))}
        </div>
      )}

      {error && (
        <div className="mb-4 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm">
          {error}
        </div>
      )}

      {loading ? (
        <ChannelGridSkeleton count={18} />
      ) : (
        <ChannelGrid
          channels={filtered}
          source={source}
          emptyMessage="No channels match your filter."
        />
      )}

      <div className="mt-8 text-center text-sm text-muted-foreground">
        Looking for a specific channel? <Link to="/" className="text-primary underline">Try the home page</Link>.
      </div>
    </div>
  );
}
