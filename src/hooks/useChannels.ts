import { useEffect, useState } from "react";
import type { Channel, SourceId } from "@/lib/types";
import { DEMO_CHANNELS, fetchRemoteChannels, getStaticChannels } from "@/lib/channels";

interface State {
  channels: Channel[];
  loading: boolean;
  error: string | null;
}

export function useChannels(source: SourceId): State {
  const [state, setState] = useState<State>(() => {
    const stat = getStaticChannels(source);
    return {
      channels: stat ?? [],
      loading: !stat,
      error: null,
    };
  });

  useEffect(() => {
    const stat = getStaticChannels(source);
    if (stat) {
      setState({ channels: stat, loading: false, error: null });
      return;
    }

    let cancelled = false;
    setState({ channels: [], loading: true, error: null });

    fetchRemoteChannels(source)
      .then((channels) => {
        if (cancelled) return;
        if (channels.length === 0 && source === "iptv") {
          setState({ channels: DEMO_CHANNELS, loading: false, error: null });
        } else {
          setState({ channels, loading: false, error: null });
        }
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const msg = err instanceof Error ? err.message : "Failed to load channels";
        if (source === "iptv") {
          setState({ channels: DEMO_CHANNELS, loading: false, error: `${msg} — showing demo channels.` });
        } else {
          setState({ channels: [], loading: false, error: msg });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [source]);

  return state;
}
