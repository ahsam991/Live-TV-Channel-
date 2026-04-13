/**
 * SearchBar.jsx
 */
export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative flex-1 max-w-sm">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">🔍</span>
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Search channels..."
        className="w-full pl-8 pr-3 py-1.5 text-sm rounded-lg border border-gray-700 bg-gray-800 text-gray-200 placeholder-gray-500 outline-none focus:border-indigo-500 transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 text-xs"
        >✕</button>
      )}
    </div>
  );
}
