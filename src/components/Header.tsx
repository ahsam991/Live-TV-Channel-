import { Link, useRouterState } from "@tanstack/react-router";
import { Tv, Heart, Info, Mail, Search } from "lucide-react";

const links = [
  { to: "/", label: "Home", icon: Tv },
  { to: "/categories", label: "Categories", icon: Search },
  { to: "/favorites", label: "Favorites", icon: Heart },
  { to: "/about", label: "About", icon: Info },
  { to: "/contact", label: "Contact", icon: Mail },
] as const;

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="sticky top-0 z-40 glass border-b border-border/50">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:px-6">
        <Link to="/" className="flex items-center gap-2 font-extrabold tracking-tight">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
            <Tv className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="text-lg text-gradient">StreamFlow</span>
        </Link>

        <nav className="ml-auto flex items-center gap-1 overflow-x-auto scrollbar-hide">
          {links.map(({ to, label, icon: Icon }) => {
            const active = to === "/" ? path === "/" : path.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
                  active
                    ? "bg-gradient-brand text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
