# I'm Gabriele

Il mio portfolio: app, siti e video. Scorri fino in fondo: c'è una sorpresa.

**Sito:** https://gabriele2314.github.io/i-m-gabriele/

## Cosa c'è dentro

- **Intro** in stile terminale (solo quando apri il sito)
- **La rivelazione**: una storia che si svela mentre scorri
- **Capitolo 01 – Piattino**, la mia prima app ([provala](https://gabriele2314.github.io/piattino/) · [codice](https://github.com/Gabriele2314/piattino))
- **Capitolo 02 – Altri siti**, come [YT Downloader PRO](https://github.com/Gabriele2314/yt-downloader)
- **Capitolo 03 – Video**: editor e manager di [Loris Bike](https://www.youtube.com/@Loris_Bikezz) e [Bike Life Peppe](https://www.youtube.com/@BikeLifePeppe)

Funziona su telefono, tablet e computer, e rispetta l'impostazione «Riduci movimento».

## Tecnologie

Next.js (export statico) · TypeScript · Tailwind CSS · shadcn/ui · framer-motion / motion · lucide-react

Componenti in `components/ui`: `shimmer-text.tsx` (titolo che luccica) e `container-scroll-animation.tsx` (la card 3D di Piattino che si raddrizza allo scroll).

## Provarlo sul computer

```bash
npm install
npm run dev
```

Poi apri http://localhost:3000. I link del sito sono tutti in `lib/site.ts`.

## Pubblicazione

A ogni push su `main`, GitHub Actions costruisce il sito e lo pubblica su GitHub Pages (`.github/workflows/deploy.yml`).
