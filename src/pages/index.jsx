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
import { useTSports } from '../hooks/useTSports';
import { useSunplex } from '../hooks/useSunplex';
import { useStore } from '../store/useStore';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';
import SourceSwitcher from '../components/SourceSwitcher';
import BD_CHANNELS, { getBDCategories } from '../data/bdChannels';
import HEXA_CHANNELS, { getHexaCategories } from '../data/hexaChannels';
import { TOFFEE_CHANNELS } from '../data/toffeeChannels';

// Dynamic imports for client-only components
const Player = dynamic(() => import('../components/Player'), { ssr: false });
const ChannelList = dynamic(() => import('../components/ChannelList'), { ssr: false });

// Static categories
const toffeeCategories = [...new Set(TOFFEE_CHANNELS.map(c => c.group))];

export default function Home() {
  const { channels: iptvChannels, categories: iptvCategories, loading: iptvLoading, error: iptvError, status } = usePlaylist();
  const { channels: biostarChannels, categories: biostarCategories, loading: biostarLoading, error: biostarError } = useBiostar();
  const { channels: tSportsChannels, categories: tSportsCategories, loading: tSportsLoading, error: tSportsError } = useTSports();
  const { channels: sunplexChannels, categories: sunplexCategories, loading: sunplexLoading, error: sunplexError } = useSunplex();

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
                   : source === 'toffee'  ? TOFFEE_CHANNELS
                   : source === 'tsports' ? tSportsChannels
                   : source === 'sunplex' ? sunplexChannels
                   : iptvChannels;
  const categories = source === 'biostar' ? biostarCategories
                   : source === 'bd'      ? bdCategories
                   : source === 'hexa'    ? hexaCategories
                   : source === 'toffee'  ? toffeeCategories
                   : source === 'tsports' ? tSportsCategories
                   : source === 'sunplex' ? sunplexCategories
                   : iptvCategories;
  const loading    = source === 'biostar' ? biostarLoading
                   : source === 'bd'      ? false
                   : source === 'hexa'    ? false
                   : source === 'toffee'  ? false
                   : source === 'tsports' ? tSportsLoading
                   : source === 'sunplex' ? sunplexLoading
                   : iptvLoading;
  const error      = source === 'biostar' ? biostarError
                   : source === 'bd'      ? null
                   : source === 'hexa'    ? null
                   : source === 'toffee'  ? null
                   : source === 'tsports' ? tSportsError
                   : source === 'sunplex' ? sunplexError
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

  // ── Loading screen ──────────
  if (loading && channels.length === 0) {
    const label = source === 'biostar' ? '⭐ Biostar' : source === 'tsports' ? '🏏 T-Sports' : source === 'sunplex' ? '☀️ Sunplex' : '📺 StreamFlow';
    const sub   = source === 'biostar' ? 'Loading Biostar channels...' : source === 'tsports' ? 'Loading Live Sports...' : source === 'sunplex' ? 'Loading Sunplex Network...' : 'IPTV Web Player';
    return (
      <div className="fixed inset-0 bg-[#030712] flex flex-col items-center justify-center overflow-hidden z-50">
        {/* Animated background blobs for loader */}
        <div className="absolute top-[20%] left-[30%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[30%] w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s'}} />
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="text-4xl font-extrabold mb-3 tracking-tight drop-shadow-xl text-gradient">
            {label}
          </div>
          <p className="text-gray-400 font-medium mb-8 uppercase tracking-widest text-sm drop-shadow-md">{sub}</p>
          <div className="w-64 h-1.5 bg-gray-800/80 rounded-full overflow-hidden shadow-inner">
            <div className="h-full rounded-full animate-pulse bg-gradient-to-r from-purple-500 via-pink-500 to-red-500" style={{ width: '60%' }} />
          </div>
          {source === 'iptv' && <p className="text-gray-600 text-xs mt-4 font-mono">{status}</p>}
        </div>
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

      <div className="relative flex flex-col h-screen bg-[#030712] text-gray-100 overflow-hidden font-sans">
        
        {/* --- Global Background glow blobs --- */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute -top-64 -left-64 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[150px] -translate-y-1/2" />
        </div>

        {/* Header */}
        <header className="relative z-20 flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-4 px-4 md:px-6 py-2 md:py-3 border-b border-white/5 glass-panel flex-shrink-0 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          <div className="flex items-center gap-2 md:gap-3 text-base md:text-lg font-extrabold tracking-tight flex-shrink-0 w-full md:w-auto justify-between md:justify-start">
            <div className="flex items-center gap-2 md:gap-3">
              <span className="w-8 h-8 md:w-9 md:h-9 rounded-xl flex items-center justify-center text-sm md:text-lg shadow-[0_0_15px_rgba(168,85,247,0.5)] bg-gradient-to-br from-purple-500 to-pink-500">
                <span className="drop-shadow-md">📺</span>
              </span>
              <span className="text-gradient">StreamFlow</span>
            </div>
            
            {/* Quick mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className="md:hidden w-8 h-8 rounded-full glass-panel flex items-center justify-center shadow-sm"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Source switcher (scrollable on mobile) */}
          <div className="w-full md:w-auto overflow-x-auto scrollbar-hide py-1 md:py-0 md:ml-4">
            <SourceSwitcher source={source} onSwitch={setSource} />
          </div>

          <div className="hidden md:block w-full md:w-auto">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <div className="hidden md:flex items-center gap-3 ml-auto text-sm text-gray-500 flex-shrink-0 font-medium">
            <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 shadow-inner">{filtered.length} CH</span>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:bg-white/10 transition-colors shadow-sm"
              title="Toggle Theme"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </header>

        {/* Mobile Search Bar padding row */}
        <div className="md:hidden px-4 py-2 border-b border-white/5 glass-panel z-10 flex gap-2 items-center justify-between">
            <div className="flex-1">
                <SearchBar value={search} onChange={setSearch} />
            </div>
            <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 shadow-inner text-xs text-gray-500 flex-shrink-0 font-bold">{filtered.length} CH</span>
        </div>

        {/* Error / info banner */}
        {error && (
          <div className="relative z-20 px-6 py-2.5 bg-red-950/80 backdrop-blur-md border-b border-red-900/50 text-red-300 text-sm font-medium flex items-center gap-3 flex-shrink-0">
            <span className="text-lg shadow-sm">⚠️</span> {error}
          </div>
        )}

        {source === 'bd' && (
          <div className="relative z-20 px-6 py-2 border-b border-white/5 flex items-center gap-3 flex-shrink-0 shadow-sm"
            style={{ background: 'linear-gradient(90deg, rgba(34,197,94,0.15), rgba(16,185,129,0.05))' }}>
            <span className="text-sm font-bold tracking-wide" style={{ color: '#34d399', textShadow: '0 0 10px rgba(52,211,153,0.4)' }}>🇧🇩 BD Live</span>
            <span className="text-sm text-gray-400/90 font-medium">— {BD_CHANNELS.length} channels · Direct HLS streams</span>
          </div>
        )}

        {source === 'hexa' && (
          <div className="relative z-20 px-6 py-2 border-b border-white/5 flex items-center gap-3 flex-shrink-0 shadow-sm"
            style={{ background: 'linear-gradient(90deg, rgba(251,146,60,0.15), rgba(239,68,68,0.05))' }}>
            <span className="text-sm font-bold tracking-wide" style={{ color: '#fb923c', textShadow: '0 0 10px rgba(251,146,60,0.4)' }}>🔥 HEXA PRO</span>
            <span className="text-sm text-gray-400/90 font-medium">— {HEXA_CHANNELS.length} channels · by ABU SAEEiD × Rifaz</span>
          </div>
        )}

        {source === 'biostar' && !error && (
          <div className="relative z-20 px-6 py-2 border-b border-white/5 flex items-center gap-3 flex-shrink-0 shadow-sm"
            style={{ background: 'linear-gradient(90deg, rgba(168,85,247,0.15), rgba(236,72,153,0.05))' }}>
            <span className="text-sm font-bold tracking-wide text-gradient">⭐ Biostar</span>
            <span className="text-sm text-gray-400/90 font-medium">— {channels.length} channels · Live from GitHub</span>
          </div>
        )}

        {source === 'tsports' && !error && (
          <div className="relative z-20 px-6 py-2 border-b border-white/5 flex items-center gap-3 flex-shrink-0 shadow-sm"
            style={{ background: 'linear-gradient(90deg, rgba(59,130,246,0.15), rgba(14,165,233,0.05))' }}>
            <span className="text-sm font-bold tracking-wide" style={{ color: '#38bdf8', textShadow: '0 0 10px rgba(56,189,248,0.4)' }}>🏏 T-Sports Auto-Update</span>
            <span className="text-sm text-gray-400/90 font-medium">— {channels.length} live feeds</span>
          </div>
        )}

        {source === 'sunplex' && !error && (
          <div className="relative z-20 px-6 py-2 border-b border-white/5 flex items-center gap-3 flex-shrink-0 shadow-sm"
            style={{ background: 'linear-gradient(90deg, rgba(234,179,8,0.15), rgba(245,158,11,0.05))' }}>
            <span className="text-sm font-bold tracking-wide" style={{ color: '#facc15', textShadow: '0 0 10px rgba(250,204,21,0.4)' }}>☀️ Sunplex IPS</span>
            <span className="text-sm text-gray-400/90 font-medium">— {channels.length} internal feeds extracted</span>
          </div>
        )}

        {source === 'toffee' && !error && (
          <div className="relative z-20 px-6 py-2 border-b border-white/5 flex items-center gap-3 flex-shrink-0 shadow-sm"
            style={{ background: 'linear-gradient(90deg, rgba(244,114,182,0.15), rgba(219,39,119,0.05))' }}>
            <span className="text-sm font-bold tracking-wide" style={{ color: '#f472b6', textShadow: '0 0 10px rgba(244,114,182,0.4)' }}>🍬 Toffee Live</span>
            <span className="text-sm text-gray-400/90 font-medium">— {channels.length} Premium Channels (Signed URLs)</span>
          </div>
        )}

        {/* Main content */}
        <div className="relative z-10 flex flex-col lg:flex-row flex-1 overflow-hidden">

          {/* Player + info (Top on Mobile, Right on Desktop) */}
          <main className="order-1 lg:order-2 flex-1 flex flex-col overflow-hidden relative border-b lg:border-b-0 border-white/10 min-h-[40vh] lg:min-h-0">
            <div className="relative z-10 shadow-2xl bg-black flex-shrink-0">
              <Player />
            </div>

            {/* Now playing bar */}
            {currentChannel && (
              <div className="relative z-20 flex items-center gap-3 md:gap-4 px-4 md:px-6 py-3 md:py-4 glass-panel border-y border-white/10 flex-shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-black/50 p-1 flex items-center justify-center overflow-hidden flex-shrink-0 text-xs md:text-sm font-bold text-gray-400 shadow-inner ring-1 ring-white/10">
                  {currentChannel.logo
                    ? <img src={currentChannel.logo} alt="" className="w-full h-full object-contain drop-shadow" onError={e => { e.currentTarget.style.display = 'none'; }} />
                    : initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base md:text-lg font-bold text-white truncate drop-shadow-md tracking-tight">{currentChannel.name}</p>
                  <p className="text-xs md:text-sm text-gray-400 flex flex-wrap items-center gap-1.5 md:gap-2 mt-0.5 font-medium uppercase tracking-wider">
                    <span className="inline-flex items-center gap-1 md:gap-1.5 px-1.5 py-0.5 rounded-md text-red-100 text-[10px] md:text-xs font-bold animate-pulse" style={{ background: 'linear-gradient(90deg, #ef4444, #dc2626)', boxShadow: '0 0 10px rgba(239,68,68,0.5)' }}>
                      <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-white animate-ping" /> LIVE
                    </span>
                    <span className="opacity-75">{currentChannel.group}</span>
                    {source === 'bd' && (
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold shadow-sm" style={{ background: 'rgba(34,197,94,0.2)', color: '#34d399', border: '1px solid rgba(34,197,94,0.3)' }}>BD LIVE</span>
                    )}
                    {source === 'biostar' && (
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold shadow-sm" style={{ background: 'rgba(168,85,247,0.2)', color: '#d8b4fe', border: '1px solid rgba(168,85,247,0.3)' }}>BIOSTAR</span>
                    )}
                    {source === 'hexa' && (
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold shadow-sm" style={{ background: 'rgba(251,146,60,0.2)', color: '#fdba74', border: '1px solid rgba(251,146,60,0.3)' }}>HEXA PRO</span>
                    )}
                    {source === 'tsports' && (
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold shadow-sm" style={{ background: 'rgba(56,189,248,0.2)', color: '#7dd3fc', border: '1px solid rgba(56,189,248,0.3)' }}>T-SPORTS</span>
                    )}
                    {source === 'sunplex' && (
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold shadow-sm" style={{ background: 'rgba(250,204,21,0.2)', color: '#fef08a', border: '1px solid rgba(250,204,21,0.3)' }}>SUNPLEX</span>
                    )}
                    {source === 'toffee' && (
                      <span className="px-2 py-0.5 rounded-md text-xs font-bold shadow-sm" style={{ background: 'rgba(244,114,182,0.2)', color: '#fbcfe8', border: '1px solid rgba(244,114,182,0.3)' }}>TOFFEE</span>
                    )}
                  </p>
                </div>
              </div>
            )}

            {/* Info panel (Hidden on small mobile screens to save space, visible on tablet+) */}
            <div className="hidden sm:flex relative z-10 flex-1 overflow-y-auto p-4 lg:p-6 flex-col space-y-6 lg:space-y-8 bg-gradient-to-b from-transparent to-black/60">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: 'Channels', val: channels.length, color: 'from-purple-500/20 to-pink-500/20' },
                  { label: 'Categories', val: categories.length, color: 'from-blue-500/20 to-cyan-500/20' },
                  { label: 'Favorites', val: favorites.length, color: 'from-yellow-500/20 to-orange-500/20' },
                ].map(s => (
                  <div key={s.label} className={`rounded-2xl p-5 border border-white/10 glass-panel bg-gradient-to-br ${s.color} hover:-translate-y-1 hover:shadow-xl hover:border-white/20 transition-all duration-300`}>
                    <p className="text-xs text-white/50 font-bold uppercase tracking-widest">{s.label}</p>
                    <p className="text-3xl font-black text-white mt-1 drop-shadow-lg">{s.val}</p>
                  </div>
                ))}
              </div>

              {/* Recently watched */}
              {recentlyWatched.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-white/20 rounded-full"></span>
                    Recently Watched
                    <span className="flex-1 h-0.5 bg-gradient-to-r from-white/20 to-transparent rounded-full"></span>
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {recentlyWatched.map((ch, i) => (
                      <button
                        key={ch.url + i}
                        onClick={() => { setCurrentChannel(ch); addToRecent(ch); }}
                        className="group w-full flex items-center gap-4 px-4 py-3 rounded-xl glass-panel hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg hover:border-white/20 transition-all duration-300 text-left border border-white/5"
                      >
                        <div className="w-8 h-8 rounded bg-black/40 flex items-center justify-center p-0.5 shadow-inner">
                            {ch.logo ? <img src={ch.logo} className="w-full h-full object-contain" alt="" /> : <span className="text-xs font-bold text-gray-500">{i+1}</span>}
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block text-sm font-bold text-gray-200 truncate group-hover:text-white transition-colors">{ch.name}</span>
                          <span className="block text-xs font-medium text-gray-500 uppercase tracking-wider">{ch.group}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Legal notice */}
              <p className="text-xs font-medium text-gray-600 pt-6 border-t border-white/5 mt-auto pb-4">
                <span className="text-white/40 font-bold">Disclaimer:</span> StreamFlow aggregates publicly available IPTV streams. Ensure compliance with your local streaming and copyright laws before use. No streams are hosted on this infrastructure.
              </p>
            </div>
          </main>

          {/* Sidebar (Bottom on Mobile, Left on Desktop) */}
          <aside className="order-2 lg:order-1 w-full lg:w-80 flex flex-col lg:border-r border-white/5 bg-black/40 backdrop-blur-xl flex-1 lg:flex-shrink-0 shadow-[4px_0_24px_rgba(0,0,0,0.3)] min-h-[40vh]">
            <CategoryFilter
              categories={categories}
              active={activeCategory}
              onChange={setActiveCategory}
            />
            <div className="flex-1 overflow-hidden relative">
              {/* Force height 100% via AutoSizer in the future, for now rely on client height block */}
              <div className="absolute inset-0">
                 <ChannelList channels={filtered} height={typeof window !== 'undefined' && window.innerWidth < 1024 ? listHeight + 400 : listHeight + 200} />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
