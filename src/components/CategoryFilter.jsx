/**
 * CategoryFilter.jsx
 */
export default function CategoryFilter({ categories, active, onChange }) {
  const all = ['All', 'Favorites', ...categories];
  return (
    <div className="flex gap-1.5 px-3 py-2 overflow-x-auto scrollbar-hide flex-shrink-0 border-b border-gray-800">
      {all.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-3 py-1 rounded-full text-xs whitespace-nowrap border transition-all ${
            active === cat
              ? 'border-indigo-500 text-white'
              : 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-gray-200'
          }`}
          style={active === cat ? { background: '#6c63ff', borderColor: '#6c63ff' } : {}}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
