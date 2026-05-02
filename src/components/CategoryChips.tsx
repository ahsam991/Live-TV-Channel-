interface Props {
  categories: string[];
  active: string;
  onChange: (c: string) => void;
  extras?: string[];
}

export function CategoryChips({ categories, active, onChange, extras = [] }: Props) {
  const all = ["All", ...extras, ...categories];
  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
      {all.map((c) => {
        const isActive = active === c;
        return (
          <button
            key={c}
            type="button"
            onClick={() => onChange(c)}
            className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
              isActive
                ? "bg-gradient-brand text-primary-foreground shadow-glow"
                : "bg-card/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {c}
          </button>
        );
      })}
    </div>
  );
}
