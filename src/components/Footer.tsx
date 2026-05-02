import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-2 text-lg font-extrabold text-gradient">StreamFlow</div>
            <p className="text-sm text-muted-foreground">
              Modern IPTV web player for Bangladeshi & international free-to-air channels.
            </p>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Explore</div>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-foreground">Home</Link></li>
              <li><Link to="/categories" className="hover:text-foreground">Categories</Link></li>
              <li><Link to="/favorites" className="hover:text-foreground">Favorites</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-2 text-sm font-semibold">Legal</div>
            <p className="text-xs text-muted-foreground">
              StreamFlow does not host any content. All streams come from publicly listed sources.
              Channel availability and legality depend on your region. Please respect copyright laws
              in your country.
            </p>
          </div>
        </div>
        <div className="mt-6 border-t border-border/50 pt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} StreamFlow — Built with TanStack Start.
        </div>
      </div>
    </footer>
  );
}
