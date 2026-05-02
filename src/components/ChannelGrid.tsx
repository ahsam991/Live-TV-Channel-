import type { Channel, SourceId } from "@/lib/types";
import { ChannelCard } from "./ChannelCard";
import { Tv } from "lucide-react";

interface Props {
  channels: Channel[];
  source: SourceId;
  emptyMessage?: string;
}

export function ChannelGrid({ channels, source, emptyMessage }: Props) {
  if (channels.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-20 text-muted-foreground">
        <Tv className="h-10 w-10 opacity-50" />
        <p>{emptyMessage ?? "No channels found"}</p>
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {channels.map((c) => (
        <ChannelCard key={c.url} channel={c} source={source} />
      ))}
    </div>
  );
}

export function ChannelGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card animate-pulse"
        >
          <div className="aspect-video w-full bg-muted" />
          <div className="space-y-2 p-3">
            <div className="h-3 w-3/4 rounded bg-muted" />
            <div className="h-2 w-1/2 rounded bg-muted" />
          </div>
        </div>
      ))}
    </div>
  );
}
