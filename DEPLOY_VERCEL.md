# Deploy to Vercel

This project ships with both a TanStack Start server route (`src/routes/api.proxy.ts`,
used on Lovable / Cloudflare) and a Vercel Edge Function (`api/proxy.ts`) so the
HLS proxy works no matter where you deploy.

## Steps

1. Push the repo to GitHub.
2. On vercel.com → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite. Confirm:
   - **Build Command**: `vite build`
   - **Output Directory**: `dist/client`
   - **Install Command**: `npm install` (or `bun install`)
4. Click **Deploy**.

`vercel.json` already wires:
- `/api/proxy` → Edge Function (`api/proxy.ts`) for stream proxying
- everything else → SPA fallback to `index.html`

## Notes

- No environment variables are required.
- The proxy uses the Vercel **Edge Runtime** (free tier friendly, low latency).
- Streams that previously needed Cloudflare (`/api/proxy`) keep working on Vercel.
