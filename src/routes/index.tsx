import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Tv } from "lucide-react";
import { useChannels } from "@/hooks/useChannels";
import { useStore } from "@/store/useStore";
import { SourceSwitcher } from "@/components/SourceSwitcher";
import { SearchBar } from "@/components/SearchBar";
import { ChannelGrid, ChannelGridSkeleton } from "@/components/ChannelGrid";
import { ChannelCard } from "@/components/ChannelCard";
import { CategoryChips } from "@/components/CategoryChips";
import { getCategories } from "@/lib/channels";
import { SOURCE_BY_ID } from "@/lib/sources";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StreamFlow — Live TV Streaming" },
      { name: "description", content: "Watch live Bangladeshi & international TV channels online. News, sports, entertainment." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const source = useStore((s) => s.source);
  const favorites = useStore((s) => s.favorites);
  const recents = useStore((s) => s.recentlyWatched);

  const { channels, loading, error } = useChannels(source);
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const categories = useMemo(() => getCategories(channels), [channels]);

  const filtered = useMemo(() => {
    let list = channels;
    if (activeCat !== "All") list = list.filter((c) => c.group === activeCat);
    if (search) {
      const q = search.toLowerCase();
      list = list.filter((c) => c.name.toLowerCase().includes(q));
    }
    return list;
  }, [channels, activeCat, search]);

  const meta = SOURCE_BY_ID[source];
  const featured = filtered.slice(0, 6);
  const rest = filtered.slice(6);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
      {/* Hero */}
      <section className="relative mb-10 overflow-hidden rounded-3xl border border-border/60 bg-card/40 px-6 py-10 md:px-12 md:py-16 animate-slide-up grid-bg">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-flag opacity-25 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-brand opacity-25 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        <div className="relative">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" /> LIVE NOW
            </span>
            <span className="sticker inline-flex items-center gap-1 rounded-full bg-gradient-flag px-3 py-1 text-xs font-black uppercase tracking-wider text-primary-foreground shadow-glow">
              🇧🇩 Made for Bangladesh
            </span>
          </div>
          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">
            Stream live TV.<br />
            <span className="text-gradient">No cap. No buffering.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            Bangladeshi favorites, cricket, K-dramas, news & global hits — all in one
            ridiculously fast browser player. <span className="font-semibold text-foreground">Zero installs.</span> Zero signups. Just vibes. ✨
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              to="/categories"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-black uppercase tracking-wider text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              Start watching <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/favorites"
              className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-card/60 px-6 py-3 text-sm font-bold hover:border-primary hover:bg-secondary"
            >
              ❤️ My favorites
            </Link>
          </div>
        </div>
      </section>

      {/* Source switcher */}
      <section className="mb-6">
        <div className="mb-3 flex items-baseline justify-between">
          <h2 className="text-lg font-bold">Pick a source</h2>
          <p className="text-xs text-muted-foreground">{meta.description}</p>
        </div>
        <SourceSwitcher />
      </section>

      {/* Recent + Favorites strips */}
      {(recents.length > 0 || favorites.length > 0) && (
        <section className="mb-8 grid gap-6 md:grid-cols-2">
          {recents.length > 0 && (
            <div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Recently watched
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {recents.slice(0, 3).map((c) => (
                  <ChannelCard key={c.url} channel={c} source={source} />
                ))}
              </div>
            </div>
          )}
          {favorites.length > 0 && (
            <div>
              <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Favorites
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {favorites.slice(0, 3).map((c) => (
                  <ChannelCard key={c.url} channel={c} source={source} />
                ))}
              </div>
            </div>
          )}
        </section>
      )}

      {/* Search + categories */}
      <section className="mb-6 flex flex-col gap-4">
        <SearchBar value={search} onChange={setSearch} placeholder={`Search ${meta.label} channels...`} />
        {categories.length > 0 && (
          <CategoryChips categories={categories} active={activeCat} onChange={setActiveCat} />
        )}
      </section>

      {error && (
        <div className="mb-4 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive-foreground">
          {error}
        </div>
      )}

      {/* Featured */}
      {!loading && featured.length > 0 && (
        <section className="mb-8 animate-fade-in">
          <h2 className="mb-3 flex items-center gap-2 text-lg font-bold">
            <Tv className="h-5 w-5 text-primary" /> Featured channels
          </h2>
          <ChannelGrid channels={featured} source={source} />
        </section>
      )}

      {/* All */}
      <section>
        <h2 className="mb-3 text-lg font-bold">
          {activeCat === "All" ? "All channels" : activeCat}{" "}
          <span className="text-sm font-normal text-muted-foreground">({filtered.length})</span>
        </h2>
        {loading ? (
          <ChannelGridSkeleton count={12} />
        ) : (
          <ChannelGrid
            channels={rest.length > 0 ? rest : filtered}
            source={source}
            emptyMessage={`No ${meta.label} channels match your search.`}
          />
        )}
      </section>
    </div>
  );
}
