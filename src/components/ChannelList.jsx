/**
 * ChannelList.jsx
 * Virtualized scrollable channel list using react-window.
 */

import { useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import { useStore } from '../store/useStore';

const ITEM_HEIGHT = 68;

function ChannelRow({ index, style, data }) {
  const { channels, onSelect, currentUrl } = data;
  const ch = channels[index];
  const { isFavorite, toggleFavorite } = useStore();
  const isActive = currentUrl === ch.url;
  const isFav = isFavorite(ch.url);

  const initials = (ch.name || '?')
    .split(' ')
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();

  return (
    <div
      style={{
        ...style,
        top: `${parseFloat(style.top) + 4}px`, // Add slight gap between items
        height: `${parseFloat(style.height) - 8}px`,
      }}
      onClick={() => onSelect(ch)}
      className={`group flex items-center gap-3 px-4 rounded-xl cursor-pointer transition-all duration-300 ease-out border ${
        isActive
          ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/30 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.3)]'
          : 'glass-panel border-transparent hover:border-gray-600/50 hover:bg-gray-800/40 hover:scale-[1.01]'
      }`}
    >
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-3/4 rounded-r-full bg-gradient-to-b from-purple-400 to-pink-500 shadow-[0_0_10px_#a855f7]" />
      )}

      {/* Logo Container - Slightly larger and sleeker */}
      <div className={`w-11 h-11 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0 text-sm font-bold shadow-inner ${
        isActive ? 'bg-black/40 ring-1 ring-purple-500/30' : 'bg-gray-900/80 ring-1 ring-gray-700/50'
      }`}>
        {ch.logo ? (
          <img
            src={ch.logo}
            alt=""
            className="w-full h-full object-contain p-1 transition-transform group-hover:scale-110"
            loading="lazy"
            onError={e => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <span className={`${ch.logo ? 'hidden' : 'flex'} w-full h-full items-center justify-center text-gradient opacity-80 group-hover:opacity-100 transition-opacity`}>
          {initials}
        </span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-semibold truncate transition-colors ${isActive ? 'text-white drop-shadow-md' : 'text-gray-200 group-hover:text-white'}`}>
          {ch.name || 'Unknown'}
        </p>
        <p className="text-xs text-gray-500 truncate mt-0.5 tracking-wide uppercase opacity-80">{ch.group || ''}</p>
      </div>

      {/* Favorite button */}
      <button
        onClick={e => { e.stopPropagation(); toggleFavorite(ch); }}
        className={`text-lg p-2 rounded-full flex-shrink-0 transition-all ${
          isFav 
            ? 'opacity-100 text-yellow-400 drop-shadow-[0_0_5px_rgba(250,204,21,0.6)]' 
            : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 text-gray-500 hover:text-yellow-400 hover:bg-gray-800/50'
        }`}
        title={isFav ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFav ? '★' : '☆'}
      </button>
    </div>
  );
}

export default function ChannelList({ channels, height = 500 }) {
  const { currentChannel, setCurrentChannel, addToRecent } = useStore();

  const handleSelect = useCallback((ch) => {
    setCurrentChannel(ch);
    addToRecent(ch);
  }, [setCurrentChannel, addToRecent]);

  if (!channels.length) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-gray-500 text-sm">
        <span className="text-3xl mb-3">📭</span>
        No channels found
      </div>
    );
  }

  return (
    <List
      height={height}
      itemCount={channels.length}
      itemSize={ITEM_HEIGHT}
      itemData={{ channels, onSelect: handleSelect, currentUrl: currentChannel?.url }}
      overscanCount={10}
    >
      {ChannelRow}
    </List>
  );
}
