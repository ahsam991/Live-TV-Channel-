/**
 * SourceSwitcher.jsx
 * Toggle between IPTV, BD Live, and Biostar sources.
 */

export default function SourceSwitcher({ source, onSwitch }) {
  const options = [
    { id: 'iptv',    label: '📡 IPTV' },
    { id: 'bd',      label: '🇧🇩 BD Live' },
    { id: 'biostar', label: '⭐ Biostar' },
  ];

  return (
    <div className="flex items-center gap-0.5 rounded-lg p-0.5 border border-gray-700 bg-gray-900 flex-shrink-0">
      {options.map(opt => (
        <button
          key={opt.id}
          onClick={() => onSwitch(opt.id)}
          className={`px-3 py-1 rounded-md text-xs font-semibold transition-all whitespace-nowrap ${
            source === opt.id
              ? 'text-white shadow-sm'
              : 'text-gray-400 hover:text-gray-200'
          }`}
          style={source === opt.id ? { background: 'linear-gradient(135deg,#6c63ff,#a855f7)' } : {}}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
