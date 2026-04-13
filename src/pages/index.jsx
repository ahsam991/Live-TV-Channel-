/**
 * pages/index.jsx
 * Main IPTV app page — StreamFlow
 * Sources: 'iptv' (live M3U), 'bd' (BD Live HLS), 'biostar' (GitHub embed player).
 */

import { useState, useMemo, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { usePlaylist } from '../hooks/usePlaylist';
import { useBiostar } from '../hooks/useBiostar';
import { useStore } from '../store/useStore';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import SourceSwitcher from '../components/SourceSwitcher';
import BD_CHANNELS, { getBDCategories } from '../data/bdChannels';
import HEXA_CHANNELS, { getHexaCategories } from '../data/hexaChannels';

// Dynamic imports for client-only components
const Player = dynamic(() => import('../components/Player'), { ssr: false });
const ChannelList = dynamic(() => import('../components/ChannelList'), { ssr: false });

export default function Home() {
  const { channels: iptvChannels, categories: iptvCategories, loading: iptvLoading, error: iptvError, status } = usePlaylist();
  const { channels: biostarChannels, categories: biostarCategories, loading: biostarLoading, error: biostarError } = useBiostar();

  const {
    currentChannel, favorites, recentlyWatched,
    theme, toggleTheme, addToRecent, setCurrentChannel,
    source, setSource,
  } = useStore();

  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [listHeight, setListHeight] = useState(500);

  // Reset filter when switching sources
  useEffect(() => {
    setActiveCategory('All');
    setSearch('');
  }, [source]);

  // Responsive list height
  useEffect(() => {
    function update() {
      const headerH = 52;
      const playerH = Math.min(window.innerHeight * 0.62, 520);
      const nowH = currentChannel ? 64 : 0;
      const remaining = window.innerHeight - headerH - playerH - nowH - 120;
      setListHeight(Math.max(200, remaining));
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [currentChannel]);

  // Apply theme class to html
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  // ── Resolve channels & categories for active source ──────────────────────
  const bdCategories   = useMemo(() => getBDCategories(), []);
  const hexaCategories = useMemo(() => getHexaCategories(), []);

  const channels   = source === 'biostar' ? biostarChannels
                   : source === 'bd'      ? BD_CHANNELS
                   : source === 'hexa'    ? HEXA_CHANNELS
                   : iptvChannels;
  const categories = source === 'biostar' ? biostarCategories
                   : source === 'bd'      ? bdCategories
                   : source === 'hexa'    ? hexaCategories
                   : iptvCategories;
  const loading    = source === 'biostar' ? biostarLoading
                   : source === 'bd'      ? false
                   : source === 'hexa'    ? false
                   : iptvLoading;
  const error      = source === 'biostar' ? biostarError
                   : source === 'bd'      ? null
                   : source === 'hexa'    ? null
                   : iptvError;

  // Filtered channels
  const filtered = useMemo(() => {
    let src = channels;
    if (activeCategory === 'Favorites') {
      src = favorites;
    } else if (activeCategory !== 'All') {
      src = channels.filter(c => c.group === activeCategory);
    }
    if (search) {
      const q = search.toLowerCase();
      src = src.filter(c => c.name && c.name.toLowerCase().includes(q));
    }
    return src;
  }, [channels, favorites, activeCategory, search]);

  const initials = currentChannel
    ? (currentChannel.name || '?').split(' ').slice(0, 2).map(w => w[0]).join('').toUpperCase()
    : '';

  // ── Loading screen (IPTV and Biostar only; BD is static/instant) ──────────
  if (loading && channels.length === 0) {
    const label = source === 'biostar' ? '⭐ Biostar' : '📺 StreamFlow';
    const sub   = source === 'biostar' ? 'Loading Biostar channels...' : 'IPTV Web Player';
    return (
      <div className="fixed inset-0 bg-gray-950 flex flex-col items-center justify-center">
        <div className="text-3xl font-black mb-2" style={{ background: 'linear-gradient(135deg,#6c63ff,#ff6584)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {label}
        </div>
        <p className="text-gray-500 text-sm mb-6">{sub}</p>
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full rounded-full animate-pulse" style={{ background: 'linear-gradient(90deg,#6c63ff,#ff6584)', width: '60%' }} />
        </div>
        {source === 'iptv' && <p className="text-gray-600 text-xs mt-3">{status}</p>}
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>StreamFlow — IPTV Player</title>
        <meta name="description" content="Stream live TV channels from around the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col h-screen bg-gray-950 text-gray-100 overflow-hidden">

        {/* Header */}
        <header className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-800 bg-gray-900 flex-shrink-0">
          <div className="flex items-center gap-2 text-sm font-bold flex-shrink-0">
            <span className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ background: 'linear-gradient(135deg,#6c63ff,#ff6584)' }}>📺</span>
            StreamFlow
          </div>

          {/* Source switcher */}
          <SourceSwitcher source={source} onSwitch={setSource} />

          <SearchBar value={search} onChange={setSearch} />

          <div className="flex items-center gap-2 ml-auto text-xs text-gray-500 flex-shrink-0">
            <span>{filtered.length} ch</span>
            <button
              onClick={toggleTheme}
              className="px-2 py-1 rounded bg-gray-800 border border-gray-700 text-gray-400 hover:text-gray-200 transition-colors"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </header>

        {/* Error / info banner */}
        {error && (
          <div className="px-4 py-2 bg-red-950 border-b border-red-900 text-red-400 text-xs flex items-center gap-2 flex-shrink-0">
            ⚠️ {error}
          </div>
        )}

        {source === 'bd' && (
          <div className="px-4 py-1.5 border-b border-gray-800 flex items-center gap-2 flex-shrink-0"
            style={{ background: 'linear-gradient(90deg,rgba(34,197,94,0.1),rgba(16,185,129,0.06))' }}>
            <span className="text-xs font-semibold" style={{ color: '#34d399' }}>🇧🇩 BD Live</span>
            <span className="text-xs text-gray-500">— {BD_CHANNELS.length} channels · direct HLS streams</span>
          </div>
        )}

        {source === 'hexa' && (
          <div className="px-4 py-1.5 border-b border-gray-800 flex items-center gap-2 flex-shrink-0"
            style={{ background: 'linear-gradient(90deg,rgba(251,146,60,0.12),rgba(239,68,68,0.07))' }}>
            <span className="text-xs font-semibold" style={{ color: '#fb923c' }}>🔥 HEXA PRO</span>
            <span className="text-xs text-gray-500">— {HEXA_CHANNELS.length} channels · by ABU SAEEiD × Rifaz</span>
          </div>
        )}

        {source === 'biostar' && !error && (
          <div className="px-4 py-1.5 border-b border-gray-800 flex items-center gap-2 flex-shrink-0"
            style={{ background: 'linear-gradient(90deg,rgba(108,99,255,0.12),rgba(168,85,247,0.08))' }}>
            <span className="text-xs font-semibold" style={{ color: '#a78bfa' }}>⭐ Biostar</span>
            <span className="text-xs text-gray-500">— {channels.length} channels · live from GitHub</span>
          </div>
        )}

        {/* Main content */}
        <div className="flex flex-1 overflow-hidden">

          {/* Sidebar */}
          <aside className="w-64 sm:w-72 flex flex-col border-r border-gray-800 bg-gray-900 flex-shrink-0">
            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
            <div className="flex-1 overflow-hidden">
              <ChannelList channels={filtered} height={listHeight + 200} />
            </div>
          </aside>

          {/* Player + info */}
          <main className="flex-1 flex flex-col overflow-hidden">
            <Player />

            {/* Now playing bar */}
            {currentChannel && (
              <div className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-800 bg-gray-900 flex-shrink-0">
                <div className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0 text-xs font-semibold text-gray-400">
                  {currentChannel.logo
                    ? <img src={currentChannel.logo} alt="" className="w-full h-full object-contain" onError={e => { e.currentTarget.style.display = 'none'; }} />
                    : initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-100 truncate">{currentChannel.name}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1.5">
                    <span className="inline-block px-1.5 py-0.5 rounded text-red-300 text-xs font-bold animate-pulse" style={{ background: 'rgba(220,38,38,0.2)' }}>LIVE</span>
                    {currentChannel.group}
                    {source === 'bd' && (
                      <span className="px-1.5 py-0.5 rounded text-xs font-bold" style={{ background: 'rgba(34,197,94,0.15)', color: '#34d399' }}>BD LIVE</span>
                    )}
                    {source === 'biostar' && (
                      <span className="px-1.5 py-0.5 rounded text-xs font-bold" style={{ background: 'rgba(108,99,255,0.2)', color: '#a78bfa' }}>BIOSTAR</span>
                    )}
                    {source === 'hexa' && (
                      <span className="px-1.5 py-0.5 rounded text-xs font-bold" style={{ background: 'rgba(251,146,60,0.2)', color: '#fb923c' }}>HEXA PRO</span>
                    )}
                  </p>
                </div>
              </div>
            )}

            {/* Info panel */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: 'Channels', val: channels.length },
                  { label: 'Categories', val: categories.length },
                  { label: 'Favorites', val: favorites.length },
                ].map(s => (
                  <div key={s.label} className="rounded-lg p-3 border border-gray-800 bg-gray-900">
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{s.label}</p>
                    <p className="text-xl font-bold text-gray-100 mt-0.5">{s.val}</p>
                  </div>
                ))}
              </div>

              {/* Recently watched */}
              {recentlyWatched.length > 0 && (
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Recently Watched</p>
                  <div className="space-y-1.5">
                    {recentlyWatched.map((ch, i) => (
                      <button
                        key={ch.url}
                        onClick={() => { setCurrentChannel(ch); addToRecent(ch); }}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-900 border border-gray-800 hover:border-gray-700 transition-colors text-left"
                      >
                        <span className="text-xs text-gray-600 w-4">{i + 1}</span>
                        <span className="text-sm text-gray-300 flex-1 truncate">{ch.name}</span>
                        <span className="text-xs text-gray-600">{ch.group}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Legal notice */}
              <p className="text-xs text-gray-700 pt-2 border-t border-gray-900">
                StreamFlow aggregates publicly available IPTV streams. Ensure compliance with your local streaming and copyright laws before use.
              </p>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
