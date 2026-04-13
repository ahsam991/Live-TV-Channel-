/**
 * ChannelList.jsx
 * Virtualized scrollable channel list using react-window.
 */

import { useCallback } from 'react';
import { FixedSizeList as List } from 'react-window';
import { useStore } from '../store/useStore';

const ITEM_HEIGHT = 56;

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
      style={style}
      onClick={() => onSelect(ch)}
      className={`flex items-center gap-3 px-3 cursor-pointer transition-colors relative group ${
        isActive ? 'bg-indigo-950' : 'hover:bg-gray-800'
      }`}
    >
      {isActive && (
        <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r" style={{ background: '#6c63ff' }} />
      )}

      {/* Logo */}
      <div className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0 text-xs font-semibold text-gray-400">
        {ch.logo ? (
          <img
            src={ch.logo}
            alt=""
            className="w-full h-full object-contain"
            loading="lazy"
            onError={e => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
        ) : null}
        <span className={ch.logo ? 'hidden' : 'flex w-full h-full items-center justify-center'}>{initials}</span>
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <p className={`text-sm font-medium truncate ${isActive ? 'text-indigo-300' : 'text-gray-200'}`}>
          {ch.name || 'Unknown'}
        </p>
        <p className="text-xs text-gray-500 truncate">{ch.group || ''}</p>
      </div>

      {/* Favorite button */}
      <button
        onClick={e => { e.stopPropagation(); toggleFavorite(ch); }}
        className={`text-sm flex-shrink-0 transition-opacity ${
          isFav ? 'opacity-100 text-pink-400' : 'opacity-0 group-hover:opacity-100 text-gray-500'
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
