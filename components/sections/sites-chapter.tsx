import { ArrowUpRight, Lock } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { ChapterLabel, Reveal } from "@/components/reveal";
import { anchors, links } from "@/lib/site";

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

// sulle 525 foto di prova di Piattino: cibo giusto al primo posto (%)
const SCAN_BARS = [
  { label: "PiattinoScan", value: 59.4, main: true },
  { label: "Modelli di Google", value: 20, main: false },
];

export function SitesChapter() {
  return (
    <section id={anchors.ch2} className="relative scroll-mt-14 px-4 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <ChapterLabel number="02">Non mi sono fermato</ChapterLabel>
          <h2 className="mt-5 max-w-3xl font-heading text-4xl font-medium tracking-tight text-balance md:text-6xl">
            Altri progetti. <span className="text-muted-foreground">Stessa fame.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {/* PiattinoScan */}
          <Reveal className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex h-44 flex-col justify-center gap-4 border-b border-border bg-[radial-gradient(circle_at_30%_20%,rgba(200,255,61,0.14),transparent_60%)] p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Cibo giusto al primo posto
              </p>
              <ul className="space-y-3 font-mono text-xs" aria-label="Confronto di precisione sulle foto di prova">
                {SCAN_BARS.map((b) => (
                  <li key={b.label}>
                    <div className="mb-1 flex justify-between">
                      <span className={b.main ? "text-foreground" : "text-muted-foreground"}>{b.label}</span>
                      <span className={b.main ? "text-signal" : "text-muted-foreground"}>{b.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/[0.06]">
                      <div
                        className={b.main ? "h-full rounded-full bg-signal" : "h-full rounded-full bg-white/30"}
                        style={{ width: `${b.value}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
                Intelligenza artificiale
              </p>
              <h3 className="font-heading text-2xl font-medium">PiattinoScan</h3>
              <p className="flex-1 text-muted-foreground">
                Il riconoscimento dei cibi di Piattino, addestrato da me su circa 36.000 foto. Pesa 4,5 MB,
                gira sul telefono senza internet e impara dalle tue correzioni.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <CardLink href={links.piattino}>
                  Provalo in Piattino <ArrowUpRight className="size-4" aria-hidden="true" />
                </CardLink>
                <CardLink href={links.piattinoRepo}>
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
