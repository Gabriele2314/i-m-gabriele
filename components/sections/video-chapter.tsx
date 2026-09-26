"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Clapperboard } from "lucide-react";
import { YoutubeIcon } from "@/components/brand-icons";
import { ChapterLabel, Reveal } from "@/components/reveal";
import { links } from "@/lib/site";

const CHANNELS = [
  {
    n: "01",
    name: "Loris Bike",
    href: links.lorisBike,
    image:
      "https://images.unsplash.com/photo-1511994298241-608e28f14fde?auto=format&fit=crop&w=1200&q=70",
    alt: "Bici da viaggio carica di borse al tramonto in montagna",
  },
  {
    n: "02",
    name: "Bike Life Peppe",
    href: links.bikeLifePeppe,
    image:
      "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1200&q=70",
    alt: "Bici da corsa appoggiata a una parete di legno arancione",
  },
];

// clip finti della timeline: [inizio %, larghezza %]
const TRACKS = [
  { label: "V2", color: "bg-signal/70", clips: [[8, 14], [40, 10], [72, 18]] },
  { label: "V1", color: "bg-sky-400/70", clips: [[0, 22], [23, 30], [54, 20], [75, 25]] },
  { label: "A1", color: "bg-rec/60", clips: [[0, 48], [50, 50]] },
];

function formatTimecode(v: number) {
  const frames = Math.round(v * 12 * 25); // arriva a 12 secondi, 25 fotogrammi al secondo
  const s = Math.floor(frames / 25);
  const f = frames % 25;
  return `00:00:${String(s).padStart(2, "0")}:${String(f).padStart(2, "0")}`;
}

export function VideoChapter() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const playhead = useTransform(scrollYProgress, [0.15, 0.85], ["0%", "100%"], { clamp: true });
  const timecode = useTransform(scrollYProgress, (v) =>
    formatTimecode(Math.min(1, Math.max(0, (v - 0.15) / 0.7))),
  );

  return (
    <section id="video" ref={ref} className="relative scroll-mt-14 px-4 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <ChapterLabel number="03">Dietro le quinte</ChapterLabel>
          <h2 className="mt-5 max-w-3xl font-heading text-4xl font-medium tracking-tight text-balance md:text-6xl">
            Monto video. <span className="block text-muted-foreground">E gestisco due canali.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Tagli, ritmo, musica e titoli: sono il video editor e il manager di due canali YouTube sul
            mondo delle bici.
          </p>
        </Reveal>

        <Reveal className="mt-14 overflow-hidden rounded-2xl border border-border bg-card">
          {/* barra dell'editor */}
          <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3 font-mono text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
                <span className="size-2.5 rounded-full bg-white/15" />
              </span>
              <Clapperboard className="ml-2 size-4" aria-hidden="true" />
              <span className="hidden sm:inline">montaggio_finale.mp4</span>
            </span>
            <motion.span className="tabular-nums text-signal" aria-hidden="true">
              {timecode}
            </motion.span>
          </div>

          {/* i due "monitor" */}
          <div className="grid gap-px bg-border md:grid-cols-2">
            {CHANNELS.map((c) => (
              <a
                key={c.name}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group relative block aspect-video overflow-hidden bg-card"
              >
                <Image
                  src={c.image}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 font-mono text-xs tracking-[0.2em] text-white/80 uppercase">
                  <span>Canale {c.n}</span>
                  <span className="flex items-center gap-2">
                    <span className="size-2 animate-blink rounded-full bg-rec" aria-hidden="true" />
                    Rec
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                  <div>
                    <p className="font-heading text-3xl font-bold tracking-tight text-white md:text-2xl lg:text-4xl">
                      {c.name}
                    </p>
                    <p className="mt-1 text-sm text-white/75">Video editor · Channel manager</p>
                  </div>
                  <span className="flex shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-black transition-transform group-hover:-translate-y-0.5">
                    <YoutubeIcon className="size-4 text-[#ff0000]" />
                    <span className="hidden sm:inline md:hidden lg:inline">Guarda il canale</span>
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* timeline che avanza con lo scroll */}
          <div className="relative space-y-2 border-t border-border p-4" aria-hidden="true">
            {TRACKS.map((t) => (
              <div key={t.label} className="flex items-center gap-3">
                <span className="w-6 font-mono text-[11px] text-muted-foreground">{t.label}</span>
                <div className="relative h-6 flex-1 rounded bg-white/[0.03]">
                  {t.clips.map(([start, width]) => (
                    <span
                      key={start}
                      className={`absolute inset-y-0.5 rounded-sm ${t.color}`}
                      style={{ left: `${start}%`, width: `calc(${width}% - 3px)` }}
                    />
                  ))}
                </div>
              </div>
            ))}
            <div className="pointer-events-none absolute inset-y-2 right-4 left-[3.25rem]">
              <motion.div className="absolute inset-y-0 w-0.5 bg-foreground" style={{ left: playhead }}>
                <span className="absolute -top-1 -left-[5px] size-3 rotate-45 rounded-[2px] bg-foreground" />
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
