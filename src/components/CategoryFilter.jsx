/**
 * CategoryFilter.jsx
 */
export default function CategoryFilter({ categories, active, onChange }) {
  const all = ['All', 'Favorites', ...categories];
  return (
    <div className="flex gap-2.5 px-4 py-3 overflow-x-auto scrollbar-hide flex-shrink-0 border-b border-white/5 bg-black/20">
      {all.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 ease-out shadow-sm ${
            active === cat
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_10px_rgba(168,85,247,0.4)] scale-[1.05]'
              : 'glass-panel text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-lg hover:border-gray-500/50 hover:-translate-y-0.5'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
