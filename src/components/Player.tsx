import { useEffect, useMemo, useRef, useState } from "react";
import Hls from "hls.js";
import { AlertTriangle, ExternalLink, Loader2, RefreshCw } from "lucide-react";
import type { Channel } from "@/lib/types";

interface Props {
  channel: Channel;
}

function isIframeUrl(url: string) {
  return url.includes("biostar-tv-world.vercel.app") || url.endsWith(".html") || url.includes("/embed/");
}

/** True when the page is HTTPS but the stream is plain HTTP — browsers block this. */
function isMixedContent(url: string) {
  if (typeof window === "undefined") return false;
  return window.location.protocol === "https:" && url.startsWith("http://");
}

/** Streams that need server-side header injection (Referer/Origin) to play. */
function needsProxy(url: string): boolean {
  return /jagobd|jagobd\.com\.bd|digijadoo|toffeelive|aynaott|bozztv|ncare\.live|ekusheyserver|deshitv24|gpcdn|tangotv|airtel|rkdyiptv|gammacdn|streamhoster|amagi/i.test(
    url,
  );
}

/**
 * Route through the proxy whenever:
 *  - the page is HTTPS but the stream is HTTP (mixed content — browsers block it)
 *  - the origin is known to require Referer/Origin headers
 *  - any plain http:// stream (most free IPTV origins block CORS for browsers)
 */
function proxify(url: string): string {
  if (typeof window === "undefined") return url;
  if (needsProxy(url) || isMixedContent(url) || url.startsWith("http://")) {
    return `/api/proxy?url=${encodeURIComponent(url)}`;
  }
  return url;
}

export function Player({ channel }: Props) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hlsRef = useRef<Hls | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retry, setRetry] = useState(0);

  const iframe = isIframeUrl(channel.url);
  const mixed = useMemo(() => isMixedContent(channel.url), [channel.url]);

  useEffect(() => {
    if (iframe) return;
    const video = videoRef.current;
    if (!video) return;

    setLoading(true);
    setError(null);

    let cancelled = false;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const cleanup = () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
      if (timeout) clearTimeout(timeout);
    };

    cleanup();
    const url = proxify(channel.url);

    if (Hls.isSupported()) {
      const hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        backBufferLength: 30,
        maxLoadingDelay: 10,
      });
      hlsRef.current = hls;
      hls.loadSource(url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (cancelled) return;
        setLoading(false);
        video.play().catch(() => {});
      });
      hls.on(Hls.Events.ERROR, (_e, data) => {
        if (data.fatal && !cancelled) {
          setLoading(false);
          setError(
            data.type === Hls.ErrorTypes.NETWORK_ERROR
              ? "Network error. The stream may be offline, geo-restricted, or blocking browser playback (CORS)."
              : "Stream failed to load. Try another channel.",
          );
        }
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = url;
      const onLoad = () => {
        if (!cancelled) {
          setLoading(false);
          video.play().catch(() => {});
        }
      };
      const onErr = () => {
        if (!cancelled) {
          setLoading(false);
          setError("Stream failed to load.");
        }
      };
      video.addEventListener("loadedmetadata", onLoad, { once: true });
      video.addEventListener("error", onErr, { once: true });
    } else {
      setLoading(false);
      setError("HLS playback is not supported in this browser.");
    }

    timeout = setTimeout(() => {
      if (!cancelled) {
        setLoading((wasLoading) => {
          if (wasLoading) setError("Stream timed out. Try another channel.");
          return false;
        });
      }
    }, 20000);

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [channel.url, iframe, mixed, retry]);

  if (iframe) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-card">
        <iframe
          src={channel.url}
          title={channel.name}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  const vlcUrl = `vlc://${channel.url}`;
  const potUrl = `potplayer://${channel.url}`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-black shadow-card">
      <video ref={videoRef} controls playsInline autoPlay className="h-full w-full" />
      {loading && !error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/60 text-white">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
          <p className="text-sm font-medium">Loading stream...</p>
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/85 px-6 text-center text-white">
          <AlertTriangle className="h-10 w-10 text-destructive" />
          <p className="max-w-md text-sm leading-relaxed">{error}</p>
          <div className="flex flex-wrap items-center justify-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => setRetry((r) => r + 1)}
              className="flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow"
            >
              <RefreshCw className="h-4 w-4" /> Retry
            </button>
            <a
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              <ExternalLink className="h-4 w-4" /> Open .m3u8
            </a>
            <a
              href={vlcUrl}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              VLC
            </a>
            <a
              href={potUrl}
              className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white hover:bg-white/10"
            >
              PotPlayer
            </a>
          </div>
          <p className="max-w-md pt-1 text-xs text-white/60">
            Many free IPTV streams only work from Bangladesh/India IPs or require a desktop player like VLC.
          </p>
        </div>
      )}
    </div>
  );
}
