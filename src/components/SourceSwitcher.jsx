/**
 * SourceSwitcher.jsx
 * Toggle between IPTV, BD Live, Biostar, and HEXA PRO sources.
 */

export default function SourceSwitcher({ source, onSwitch }) {
  const options = [
    { id: 'iptv',    label: '📡 IPTV' },
    { id: 'bd',      label: '🇧🇩 BD Live' },
    { id: 'biostar', label: '⭐ Biostar' },
    { id: 'hexa',    label: '🔥 HEXA PRO' },
    { id: 'tsports', label: '🏏 T-Sports' },
    { id: 'sunplex', label: '☀️ Sunplex' },
    { id: 'toffee',  label: '🍬 Toffee' },
    { id: 'jago',    label: '🎥 Jago BD' },
  ];

  return (
    <div className="flex items-center gap-1 rounded-full p-1 glass-panel flex-shrink-0 shadow-inner">
      {options.map(opt => {
        const isActive = source === opt.id;
        return (
          <button
            key={opt.id}
            onClick={() => onSwitch(opt.id)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-300 whitespace-nowrap min-w-[90px] text-center ${
              isActive
                ? 'text-white bg-gradient-to-r from-purple-500 to-pink-500 shadow-md scale-100 ring-1 ring-white/20'
                : 'text-gray-400 hover:text-white hover:bg-white/10 scale-95'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
