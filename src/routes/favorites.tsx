import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { useStore } from "@/store/useStore";
import { ChannelGrid } from "@/components/ChannelGrid";

export const Route = createFileRoute("/favorites")({
  head: () => ({
    meta: [
      { title: "My Favorite Channels — StreamFlow" },
      { name: "description", content: "Your saved favorite live TV channels on StreamFlow." },
    ],
  }),
  component: FavoritesPage,
});

function FavoritesPage() {
  const favorites = useStore((s) => s.favorites);
  const source = useStore((s) => s.source);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 md:px-6 md:py-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand shadow-glow">
          <Heart className="h-6 w-6 text-primary-foreground" />
        </span>
        <div>
          <h1 className="text-3xl font-black">My Favorites</h1>
          <p className="text-sm text-muted-foreground">{favorites.length} saved channel{favorites.length === 1 ? "" : "s"}</p>
        </div>
      </div>

      {favorites.length === 0 ? (
        <div className="rounded-2xl border border-border/60 bg-card/40 p-12 text-center">
          <Heart className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />
          <p className="text-lg font-semibold">No favorites yet</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tap the heart on any channel to save it here.
          </p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-brand px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow"
          >
            Browse channels
          </Link>
        </div>
      ) : (
        <ChannelGrid channels={favorites} source={source} />
      )}
    </div>
  );
}
