# StreamFlow — Modern IPTV Web Player

A clean, fast, dark-themed live-TV web app. Bangladeshi favorites, international news,
live sports, and entertainment in one player. Built with TanStack Start, React 19,
Tailwind CSS v4, hls.js and Zustand.

## Features

- 9 channel sources: BD Live, Global IPTV, Biostar, HEXA PRO, T-Sports, Sunplex, Toffee, JagoBD, Ayna OTT, Custom
- Native HLS playback via [hls.js](https://github.com/video-dev/hls.js) + iframe fallback for embed sources
- Category browsing, instant search, favorites (localStorage), recently-watched
- Mobile-first responsive grid with channel logos
- Skeleton loading states, retry/error fallback when a stream is offline
- Per-page SEO metadata + structured data (JSON-LD) on the watch page
- SSR-friendly routing — every page is its own URL with its own meta tags

## Pages

| Route          | Purpose                                                          |
| -------------- | ---------------------------------------------------------------- |
| `/`            | Home — hero, source switcher, recent + favorites, featured grid  |
| `/categories`  | Browse all channels grouped/filterable by category               |
| `/watch`       | Channel player page (search params: `?src=bd&u=<stream-url>`)    |
| `/favorites`   | Your saved favorite channels                                     |
| `/about`       | About StreamFlow + the developer                                 |
| `/contact`     | Contact form + social links                                      |

## Folder Structure

```
src/
├── components/         Reusable UI (Header, Footer, Player, ChannelCard, ...)
├── data/               Channel datasets (one file per source)
│   ├── bdChannels.ts
│   ├── hexaChannels.ts
│   ├── toffeeChannels.ts
│   ├── jagoChannels.ts
│   ├── aynaChannels.ts
│   └── customChannels.ts   ← edit this to add your own channels
├── hooks/
│   └── useChannels.ts  Source-aware channel loader (static + remote, with caching)
├── lib/
│   ├── channels.ts     Static + remote (M3U/JSON) aggregator
│   ├── parseM3U.ts     M3U playlist parser
│   ├── sources.ts      Source registry (id, label, emoji, requiresProxy)
│   └── types.ts        Channel + SourceId types
├── routes/             File-based routes (TanStack Router auto-generates routeTree)
│   ├── __root.tsx      Root layout (header, footer, global meta, 404)
│   ├── index.tsx       /
│   ├── categories.tsx  /categories
│   ├── watch.tsx       /watch
│   ├── favorites.tsx   /favorites
│   ├── about.tsx       /about
│   └── contact.tsx     /contact
├── store/
│   └── useStore.ts     Zustand store: source, favorites, recentlyWatched
└── styles.css          Design system: tokens, gradients, animations
```

## Adding Your Own Channels

Open `src/data/customChannels.ts` and add entries to the array:

```ts
{
  name: "My Channel",
  url:  "https://example.com/stream.m3u8",   // HLS .m3u8 URL
  logo: "https://example.com/logo.png",      // optional
  group: "Entertainment",                    // optional
}
```

Save → reload. The channels appear under the **Custom** source in the source switcher.

For bulk imports, drop an M3U playlist into `src/data/`, then add a remote-source entry in
`src/lib/channels.ts` under `REMOTE_SOURCES` and a matching entry in `src/lib/sources.ts`.

## Deployment

This project runs on Lovable Cloud out of the box. To publish:

1. Click **Publish** in the top-right of the Lovable editor.
2. (Optional) Connect a custom domain via **Project Settings → Domains**.

The app is also Vercel/Netlify compatible — `bun run build` produces a standard output
in `dist/`.

## Legal

StreamFlow does not host, store, or stream any content. All channels link to publicly
listed third-party streams. Availability and legality of each stream depend on your
region. Please respect copyright laws in your country and only use this player for
authorized content.
