import { createFileRoute, Link } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Heart } from "lucide-react";
import type { Channel, SourceId } from "@/lib/types";
import { useChannels } from "@/hooks/useChannels";
import { useStore } from "@/store/useStore";
import { Player } from "@/components/Player";
import { ChannelCard } from "@/components/ChannelCard";
import { SOURCE_BY_ID } from "@/lib/sources";

const sourceSchema = z.enum([
  "iptv",
  "bd",
  "biostar",
  "hexa",
  "tsports",
  "sunplex",
  "toffee",
  "jago",
  "ayna",
  "megapack",
  "custom",
]);

const searchSchema = z.object({
  src: fallback(sourceSchema, "bd").default("bd"),
  u: fallback(z.string(), "").default(""),
});

export const Route = createFileRoute("/watch")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Now Playing — StreamFlow" },
      { name: "description", content: "Live TV channel playback on StreamFlow." },
      { property: "og:title", content: "Now Playing — StreamFlow" },
      { property: "og:description", content: "Live TV streaming on StreamFlow." },
    ],
  }),
  component: WatchPage,
});

function WatchPage() {
  const { src, u } = Route.useSearch();
  const source = src as SourceId;
  const { channels, loading } = useChannels(source);
  const addToRecent = useStore((s) => s.addToRecent);
  const toggleFavorite = useStore((s) => s.toggleFavorite);
  const isFavorite = useStore((s) => s.isFavorite);
  const [search, setSearch] = useState("");

  const channel = useMemo<Channel | null>(() => {
    if (!u) return null;
    return channels.find((c) => c.url === u) ?? null;
  }, [channels, u]);

  useEffect(() => {
    if (channel) addToRecent(channel);
  }, [channel, addToRecent]);

  // Dynamic title + JSON-LD for SEO once the channel is resolved client-side
  useEffect(() => {
    if (!channel || typeof document === "undefined") return;
    const prevTitle = document.title;
    document.title = `${channel.name} — Live on StreamFlow`;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BroadcastEvent",
      name: channel.name,
      isLiveBroadcast: true,
      description: `Watch ${channel.name} live on StreamFlow${channel.group ? ` — ${channel.group}` : ""}.`,
      image: channel.logo || undefined,
      videoFormat: "HLS",
    });
    script.dataset.streamflow = "channel-jsonld";
    document.head.appendChild(script);
    return () => {
      document.title = prevTitle;
      script.remove();
    };
  }, [channel]);

  const related = useMemo(() => {
    if (!channel) return channels.slice(0, 12);
    return channels
      .filter((c) => c.url !== channel.url && c.group === channel.group)
      .slice(0, 12);
  }, [channel, channels]);

  const filteredRelated = search
    ? related.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()))
    : related;

  if (loading && !channel) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="aspect-video w-full animate-pulse rounded-xl bg-card" />
      </div>
    );
  }

  if (!channel) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Channel not found</h1>
        <p className="mt-2 text-muted-foreground">
          We couldn't find the requested channel in the {SOURCE_BY_ID[source].label} source.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    );
  }

  const fav = isFavorite(channel.url);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-8">
      <Link
        to="/"
        className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </Link>

      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div>
          <Player channel={channel} />
          <div className="mt-4 flex flex-wrap items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                {SOURCE_BY_ID[source].label} • {channel.group ?? "Live TV"}
              </div>
              <h1 className="mt-1 text-2xl font-black tracking-tight md:text-3xl">
                {channel.name}
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Streaming live via HLS. If playback fails, try Retry or pick another channel.
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggleFavorite(channel)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                fav
                  ? "border-transparent bg-gradient-brand text-primary-foreground shadow-glow"
                  : "border-border bg-card hover:bg-secondary"
              }`}
            >
              <Heart className={`h-4 w-4 ${fav ? "fill-current" : ""}`} />
              {fav ? "Favorited" : "Add to favorites"}
            </button>
          </div>
        </div>

        <aside className="lg:max-h-[80vh] lg:overflow-y-auto lg:pr-2">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">
            More in {channel.group ?? "this source"}
          </h2>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter related..."
            className="mb-3 w-full rounded-lg border border-border bg-card/60 px-3 py-2 text-sm outline-none focus:border-primary"
          />
          <div className="grid grid-cols-2 gap-3">
            {filteredRelated.map((c) => (
              <ChannelCard key={c.url} channel={c} source={source} />
            ))}
          </div>
          {filteredRelated.length === 0 && (
            <p className="text-sm text-muted-foreground">No related channels.</p>
          )}
        </aside>
      </div>
    </div>
  );
}
