import { SOURCES } from "@/lib/sources";
import { useStore } from "@/store/useStore";
import type { SourceId } from "@/lib/types";

interface Props {
  value?: SourceId;
  onChange?: (s: SourceId) => void;
}

export function SourceSwitcher({ value, onChange }: Props) {
  const storeSource = useStore((s) => s.source);
  const setSource = useStore((s) => s.setSource);
  const active = value ?? storeSource;
  const handle = (id: SourceId) => {
    if (onChange) onChange(id);
    else setSource(id);
  };

  return (
    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
      {SOURCES.map((s) => {
        const isActive = active === s.id;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => handle(s.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
              isActive
                ? "border-transparent bg-gradient-brand text-primary-foreground shadow-glow"
                : "border-border bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
            }`}
          >
            <span>{s.emoji}</span>
            <span>{s.label}</span>
          </button>
        );
      })}
    </div>
  );
}
