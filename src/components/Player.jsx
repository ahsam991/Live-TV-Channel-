/**
 * Player.jsx
 * HLS video player with iframe fallback for Biostar embed channels.
 */

import { useEffect, useRef, useState } from 'react';
import { useStore } from '../store/useStore';

/** Detect if a URL is a Biostar embed page */
function isBiostarUrl(url) {
  return typeof url === 'string' && url.includes('biostar-tv-world.vercel.app');
}

export default function Player() {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);
  const { currentChannel, setPlayerError, clearPlayerError, playerError, useGeoProxy, toggleGeoProxy } = useStore();
  const [loading, setLoading] = useState(false);
  const [retrying, setRetrying] = useState(false);

  const isBiostar = currentChannel && isBiostarUrl(currentChannel.url);

  useEffect(() => {
    if (!currentChannel) return;
    if (isBiostarUrl(currentChannel.url)) {
      // Biostar channels render as iframes — no HLS needed
      destroyHls();
      clearPlayerError();
      setLoading(false);
      return;
    }

    // Combine Edge-Cache-Cookie to URL query for Toffee channels
    // Route it strictly through our Server-Side Proxy to bypass User-Agent/CORS blocks!
    let playUrl = currentChannel.url;
    if (currentChannel.cookie) {
      playUrl = `/api/toffee?url=${encodeURIComponent(currentChannel.url)}&cookie=${encodeURIComponent(currentChannel.cookie)}`;
    } else if (currentChannel.group === 'JagoBD') {
      playUrl = `/api/jago?url=${encodeURIComponent(currentChannel.url)}`;
    } else if (useGeoProxy && !playUrl.includes('172.') && !playUrl.includes('localhost') && !playUrl.includes('127.0.0.1')) {
      // Route through generic Cloud proxy to bypass CORS / Geo-blocks
      playUrl = `/api/proxy?url=${encodeURIComponent(currentChannel.url)}`;
    }

    initPlayer(playUrl, currentChannel);
    return () => destroyHls();
  }, [currentChannel, useGeoProxy]);

  function destroyHls() {
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }
  }

  async function initPlayer(url, channelObj = null) {
    const video = videoRef.current;
    if (!video) return;

    destroyHls();
    clearPlayerError();
    setLoading(true);

    // Dynamically import hls.js (client-only)
    const Hls = (await import('hls.js')).default;

    if (Hls.isSupported()) {
      const hlsConfig = {
        enableWorker: false,
        lowLatencyMode: true,
        backBufferLength: 30,
        maxLoadingDelay: 10,
      };

      // Try appending custom headers if provided (User-Agent might throw warning on strict browsers)
      if (channelObj && channelObj.userAgent) {
        hlsConfig.xhrSetup = function(xhr) {
          try {
            xhr.setRequestHeader('User-Agent', channelObj.userAgent);
          } catch(e) { /* ignore forbidden header error */ }
        };
      }

      const hls = new Hls(hlsConfig);
      hlsRef.current = hls;
      hls.loadSource(url);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setLoading(false);
        video.play().catch(() => {});
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          setLoading(false);
          setPlayerError('Stream failed. The channel may be offline or geo-restricted.');
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS
      video.src = url;
      video.addEventListener('loadedmetadata', () => {
        setLoading(false);
        video.play().catch(() => {});
      }, { once: true });
      video.addEventListener('error', () => {
        setLoading(false);
        setPlayerError('Stream failed to load.');
      }, { once: true });
    } else {
      setLoading(false);
      setPlayerError('HLS is not supported in this browser.');
    }

    // Timeout fallback
    const timeout = setTimeout(() => {
      if (loading) {
        setLoading(false);
        setPlayerError('Stream timed out. Try another channel.');
      }
    }, 15000);

    return () => clearTimeout(timeout);
  }

  function handleRetry() {
    if (!currentChannel) return;
    setRetrying(true);
    setTimeout(() => {
      setRetrying(false);
      let playUrl = currentChannel.url;
      if (currentChannel.cookie) {
        playUrl = `/api/toffee?url=${encodeURIComponent(currentChannel.url)}&cookie=${encodeURIComponent(currentChannel.cookie)}`;
      } else if (currentChannel.group === 'JagoBD') {
        playUrl = `/api/jago?url=${encodeURIComponent(currentChannel.url)}`;
      } else if (useGeoProxy) {
        playUrl = `/api/proxy?url=${encodeURIComponent(currentChannel.url)}`;
      }
      initPlayer(playUrl, currentChannel);
    }, 500);
  }

  // ── Biostar iframe player ──────────────────────────────────────────────────
  if (isBiostar) {
    return (
      <div className="relative bg-black w-full aspect-video sm:h-auto md:max-h-[65vh]">
        <iframe
          key={currentChannel.url}
          src={currentChannel.url}
          className="w-full h-full block border-0"
          style={{ background: '#000' }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={currentChannel.name}
        />
        {/* Biostar badge */}
        <div
          className="absolute top-3 right-3 px-3 py-1 rounded text-xs font-bold text-white shadow-lg pointer-events-none"
          style={{ background: 'linear-gradient(135deg,#6c63ff,#ff6584)', opacity: 0.9 }}
        >
          BIOSTAR
        </div>
      </div>
    );
  }

  // ── HLS video player ───────────────────────────────────────────────────────
  return (
    <div className="relative bg-black w-full aspect-video sm:h-auto md:max-h-[65vh] flex items-center justify-center">
      <video
        ref={videoRef}
        className="w-full h-full block"
        style={{ objectFit: 'contain', background: '#000' }}
        controls
        autoPlay
        playsInline
      />
      
      {/* Geo-Proxy Overlay Badge (Only show if a channel is selected and it's not a local stream) */}
      {currentChannel && !currentChannel.cookie && (
        <div className="absolute top-4 right-4 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={toggleGeoProxy}
            title={useGeoProxy ? "Click to disable Geo-Proxy" : "Click to enable Cloud Proxy (Fixes Geo/CORS Blocks)"}
            className={`px-3 py-1.5 text-xs font-bold rounded shadow-lg backdrop-blur transition border ${
              useGeoProxy
                ? 'bg-emerald-500/80 text-white border-emerald-400'
                : 'bg-black/60 text-white hover:bg-black/80 border-white/20'
            }`}
          >
            {useGeoProxy ? '🌐 Geo-Proxy: ON' : '🌐 Geo-Proxy: OFF'}
          </button>
        </div>
      )}

      {/* Empty state */}
      {!currentChannel && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80">
          <div className="text-5xl mb-4">📺</div>
          <p className="text-gray-400 text-sm">Select a channel to start watching</p>
        </div>
      )}

      {/* Loading overlay */}
      {currentChannel && loading && !playerError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-80 pointer-events-none">
          <div className="w-10 h-10 border-4 border-gray-700 border-t-accent rounded-full animate-spin mb-4" style={{ borderTopColor: '#6c63ff' }} />
          <p className="text-gray-400 text-sm">Loading {currentChannel.name}...</p>
        </div>
      )}

      {/* Error overlay */}
      {playerError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-85">
          <div className="text-4xl mb-3">⚠️</div>
          <p className="text-red-400 text-sm mb-5 text-center px-6">{playerError}</p>
          <button
            onClick={handleRetry}
            disabled={retrying}
            className="px-5 py-2 rounded-lg text-sm font-semibold text-white transition-opacity"
            style={{ background: '#6c63ff', opacity: retrying ? 0.6 : 1 }}
          >
            {retrying ? 'Retrying...' : 'Retry Stream'}
          </button>
        </div>
      )}
    </div>
  );
}
