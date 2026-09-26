import { ArrowUpRight, Lock } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { ChapterLabel, Reveal } from "@/components/reveal";
import { links } from "@/lib/site";

function CardLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm transition-colors hover:border-signal hover:text-signal"
    >
      {children}
    </a>
  );
}

export function SitesChapter() {
  return (
    <section id="siti" className="relative scroll-mt-14 px-4 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <ChapterLabel number="02">Non mi sono fermato</ChapterLabel>
          <h2 className="mt-5 max-w-3xl font-heading text-4xl font-medium tracking-tight text-balance md:text-6xl">
            Altri siti. <span className="text-muted-foreground">Stessa fame.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* YT Downloader PRO */}
          <Reveal className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex h-44 flex-col justify-center gap-3 border-b border-border bg-[radial-gradient(circle_at_30%_20%,rgba(255,69,58,0.18),transparent_60%)] p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">Qualità</p>
              <ul className="flex flex-wrap gap-2" aria-label="Qualità disponibili">
                {["4K HDR", "1440p", "1080p", "720p"].map((q, i) => (
                  <li
                    key={q}
                    className={
                      i === 0
                        ? "rounded-md bg-foreground px-2.5 py-1 font-mono text-xs font-semibold text-background"
                        : "rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    }
                  >
                    {q}
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs text-muted-foreground">
                60 fps · H.264 · VP9 · AV1
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">Sito web</p>
              <h3 className="font-heading text-2xl font-medium">YT Downloader PRO</h3>
              <p className="flex-1 text-muted-foreground">
                Scarica video fino al 4K HDR a 60fps. L&apos;interfaccia sta online, il motore gira sul Mac
                con yt-dlp e ffmpeg.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <CardLink href={links.ytDownloader}>
                  Apri il sito <ArrowUpRight className="size-4" aria-hidden="true" />
                </CardLink>
                <CardLink href={links.ytDownloaderRepo}>
                  <GithubIcon className="size-4" /> Codice
                </CardLink>
              </div>
            </div>
          </Reveal>

          {/* Questo sito */}
          <Reveal delay={0.08} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex h-44 flex-col justify-center border-b border-border bg-[radial-gradient(circle_at_70%_20%,rgba(200,255,61,0.14),transparent_60%)] p-6 font-mono text-[13px] leading-relaxed">
              <p>
                <span className="text-muted-foreground">&lt;</span>
                <span className="text-signal">ShimmerText</span>
                <span className="text-muted-foreground">&gt;</span>
              </p>
              <p className="pl-4">I&apos;m Gabriele</p>
              <p>
                <span className="text-muted-foreground">&lt;/</span>
                <span className="text-signal">ShimmerText</span>
                <span className="text-muted-foreground">&gt;</span>
              </p>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">Portfolio</p>
              <h3 className="font-heading text-2xl font-medium">Questo sito</h3>
              <p className="flex-1 text-muted-foreground">
                Next.js, Tailwind, shadcn e animazioni allo scroll. Sì: anche la pagina che stai
                guardando l&apos;ho fatta io.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <CardLink href={links.thisRepo}>
                  <GithubIcon className="size-4" /> Codice
                </CardLink>
              </div>
            </div>
          </Reveal>

          {/* Progetto segreto */}
          <Reveal
            delay={0.16}
            className="relative flex flex-col overflow-hidden rounded-2xl border border-dashed border-white/20 bg-card sm:col-span-2 lg:col-span-1"
          >
            <div className="flex h-44 flex-col justify-center gap-3 border-b border-dashed border-white/20 p-6" aria-hidden="true">
              <div className="redacted h-3 w-3/4 rounded-sm" />
              <div className="redacted h-3 w-1/2 rounded-sm" />
              <div className="redacted h-3 w-2/3 rounded-sm" />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-rec uppercase">
                <Lock className="size-3.5" aria-hidden="true" /> Top secret
              </p>
              <h3 className="font-heading text-2xl font-medium">Progetto n° 004</h3>
              <p className="flex-1 text-muted-foreground">
                Non posso dirti niente. <span className="text-foreground">Per ora.</span>
              </p>
              <p className="mt-2 inline-flex min-h-11 items-center font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                In arrivo<span className="animate-blink">_</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
