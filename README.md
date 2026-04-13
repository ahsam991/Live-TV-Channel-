# 📺 StreamFlow — IPTV Web Player

A modern, responsive IPTV web application built with **Next.js**, **hls.js**, **Zustand**, and **Tailwind CSS**.

## Features

- 🎥 **HLS Streaming** — powered by hls.js with native Safari fallback
- 📋 **M3U Playlist Parsing** — fetches & parses from iptv-org (500+ channels)
- 🔍 **Instant Search** — real-time channel name filtering
- 🗂️ **Category Filter** — tabs auto-generated from `group-title`
- ⭐ **Favorites** — persisted across sessions via localStorage
- 🕐 **Recently Watched** — quick-access to last 10 channels
- ⚠️ **Error Handling** — retry button, loading states, stream timeouts
- 🌙 **Dark / Light Theme** — toggle with persistence
- 📱 **Responsive** — desktop & mobile layouts
- ⚡ **Virtualized List** — react-window for smooth 500+ channel rendering
- 🔁 **CORS Proxy** — built-in `/api/proxy` route for playlist fetching

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── components/
│   ├── Player.jsx          # HLS video player
│   ├── ChannelList.jsx     # Virtualized channel list
│   ├── CategoryFilter.jsx  # Category tab bar
│   └── SearchBar.jsx       # Search input
├── hooks/
│   └── usePlaylist.js      # M3U fetch + parse hook
├── store/
│   └── useStore.js         # Zustand global state
├── utils/
│   └── parseM3U.js         # M3U parser utility
├── pages/
│   ├── index.jsx           # Main app page
│   ├── _app.jsx            # App wrapper
│   └── api/
│       └── proxy.js        # CORS proxy endpoint
└── styles/
    └── globals.css
```

## Environment Variables

```env
NEXT_PUBLIC_PLAYLIST_URL=https://iptv-org.github.io/iptv/index.m3u
NEXT_PUBLIC_PROXY_BASE=/api/proxy
```

## Legal Notice

StreamFlow aggregates publicly available IPTV streams. Ensure compliance with your local streaming and copyright laws before use. The developers are not responsible for content streamed through this application.
