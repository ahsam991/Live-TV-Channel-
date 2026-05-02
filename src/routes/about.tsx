import { createFileRoute, Link } from "@tanstack/react-router";
import { Code2, Heart, Tv, Zap } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Developer — StreamFlow" },
      { name: "description", content: "About StreamFlow, an open IPTV-style live TV web player built with TanStack Start, hls.js and Tailwind CSS." },
      { property: "og:title", content: "About StreamFlow" },
      { property: "og:description", content: "An open IPTV-style live TV web player." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-16">
      <div className="text-center">
        <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-3xl bg-gradient-brand shadow-glow">
          <Tv className="h-8 w-8 text-primary-foreground" />
        </div>
        <h1 className="text-4xl font-black tracking-tight md:text-5xl">
          About <span className="text-gradient">StreamFlow</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          A modern, open IPTV-style web player for Bangladeshi and international live TV channels.
          Built for speed, designed for the screen you're on right now.
        </p>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          { icon: Zap, title: "Fast", desc: "Lightweight HLS playback via hls.js, lazy-loaded everywhere." },
          { icon: Code2, title: "Open", desc: "TanStack Start, React 19, Tailwind v4. Easy to fork & extend." },
          { icon: Heart, title: "Yours", desc: "Favorites + recently watched stored locally on your device." },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-border/60 bg-card/50 p-5">
            <Icon className="mb-3 h-6 w-6 text-primary" />
            <div className="font-bold">{title}</div>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>

      <section className="mt-12 rounded-2xl border border-border/60 bg-card/50 p-6 md:p-8">
        <h2 className="text-2xl font-bold">Developer</h2>
        <p className="mt-3 text-muted-foreground">
          StreamFlow is a hobby project showcasing what a clean, modern IPTV web app can look like
          using only browser-native tech. Drop your own M3U/JSON channel list in
          <code className="mx-1 rounded bg-muted px-1.5 py-0.5 text-xs">src/data/</code>
          and it'll show up in the grid.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-muted/40 p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Stack</div>
            <div className="mt-1 text-sm">TanStack Start • React 19 • Tailwind v4 • hls.js • Zustand</div>
          </div>
          <div className="rounded-xl bg-muted/40 p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Channels</div>
            <div className="mt-1 text-sm">BD Live • Global IPTV • T-Sports • Sunplex • Biostar • HEXA</div>
          </div>
        </div>
      </section>

      <section className="mt-8 rounded-2xl border border-destructive/30 bg-destructive/5 p-6">
        <h2 className="text-lg font-bold">Legal</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          StreamFlow does not host, store, or stream any content itself. All channels link to
          publicly listed third-party streams. Availability and legality of each stream depend on
          your region. Please respect copyright laws in your country and avoid using the app for any
          unauthorized content.
        </p>
      </section>

      <div className="mt-10 text-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow"
        >
          Start watching
        </Link>
      </div>
    </div>
  );
}
