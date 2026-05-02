import { Link } from "@tanstack/react-router";
import { Heart, Play } from "lucide-react";
import type { Channel, SourceId } from "@/lib/types";
import { useStore } from "@/store/useStore";

interface Props {
  channel: Channel;
  source: SourceId;
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export function ChannelCard({ channel, source }: Props) {
  const { isFavorite, toggleFavorite } = useStore();
  const fav = isFavorite(channel.url);

  return (
    <Link
      to="/watch"
      search={{ src: source, u: channel.url }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-card transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow animate-fade-in"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-secondary to-muted">
        {channel.logo ? (
          <img
            src={channel.logo}
            alt={channel.name}
            loading="lazy"
            className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              const el = e.currentTarget;
              el.style.display = "none";
              const fb = el.nextElementSibling as HTMLElement | null;
              if (fb) fb.style.display = "flex";
            }}
          />
        ) : null}
        <div
          className={`${channel.logo ? "hidden" : "flex"} absolute inset-0 items-center justify-center text-3xl font-black text-gradient`}
        >
          {initials(channel.name || "?")}
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute bottom-2 left-2 flex translate-y-2 items-center gap-1.5 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-primary-foreground opacity-0 shadow-glow transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <Play className="h-3 w-3 fill-current" /> Watch
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite(channel);
          }}
          aria-label={fav ? "Remove from favorites" : "Add to favorites"}
          className={`absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full backdrop-blur transition-all ${
            fav
              ? "bg-primary text-primary-foreground shadow-glow"
              : "bg-black/40 text-white opacity-0 hover:bg-black/60 group-hover:opacity-100"
          }`}
        >
          <Heart className={`h-4 w-4 ${fav ? "fill-current" : ""}`} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-1 px-3 py-2.5">
        <div className="truncate text-sm font-semibold">{channel.name}</div>
        {channel.group && (
          <div className="truncate text-[11px] uppercase tracking-wider text-muted-foreground">
            {channel.group}
          </div>
        )}
      </div>
    </Link>
  );
}
