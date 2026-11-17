"use client";

import { ArrowDown } from "lucide-react";
import { ShimmerText } from "@/components/ui/shimmer-text";
import { useIntro } from "@/components/providers";
import { AGE, anchors } from "@/lib/site";

const ROLES = ["Sviluppo app", "Creo siti", "Monto video", "Gestisco canali YouTube"];

// ritardo di ogni blocco quando l'hero entra (dopo l'intro)
const rise = (i: number) => ({ "--rise-delay": `${0.15 + i * 0.12}s` }) as React.CSSProperties;

export function Hero() {
  const { done, played } = useIntro();

  return (
    <section
      id={anchors.top}
      className="relative isolate flex min-h-dvh flex-col justify-end overflow-hidden px-4 pt-24 pb-10 md:px-10 md:pb-14"
    >
      {/* sfondo: griglia che svanisce + bagliore */}
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_30%_40%,black_20%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 -z-10 size-[42rem] rounded-full bg-signal/10 blur-[120px]"
      />

      {/*
        L'hero è visibile da subito (anche senza JavaScript): sta sotto l'intro.
        Solo quando l'intro è stata davvero mostrata, alla sua uscita i blocchi salgono.
      */}
      <div className="mx-auto w-full max-w-7xl" data-rise={done && played ? "play" : undefined}>
        <div
          style={rise(0)}
          className="hero-rise mb-6 flex items-center justify-between font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase md:mb-10"
        >
          <span>File n° 001 · Portfolio</span>
          <span className="flex items-center gap-2">
            <span className="size-2 animate-blink rounded-full bg-rec" aria-hidden="true" />
            Rec
          </span>
        </div>

        <h1 className="sr-only">I&apos;m Gabriele</h1>
        <div style={rise(1)} className="hero-rise" aria-hidden="true">
          <ShimmerText
            duration={2.2}
            delay={1.2}
            className="font-heading text-[clamp(4rem,19vw,15rem)] leading-[0.85] font-bold tracking-[-0.05em] text-foreground"
          >
            I&apos;m <br className="md:hidden" />
            Gabriele
          </ShimmerText>
        </div>

        <div className="mt-10 grid gap-10 border-t border-border pt-8 md:mt-14 md:grid-cols-2 md:items-end">
          <ul style={rise(2)} className="hero-rise flex flex-wrap gap-x-3 gap-y-2 text-lg md:text-xl">
            {ROLES.map((role, i) => (
              <li key={role} className="flex items-center gap-3">
                {role}
                {i < ROLES.length - 1 && (
                  <span aria-hidden="true" className="text-signal">
                    /
                  </span>
                )}
              </li>
            ))}
          </ul>

          <div style={rise(3)} className="hero-rise md:text-right">
            {AGE !== null && (
              <p className="text-xl text-muted-foreground md:text-2xl">
                Ma c&apos;è una cosa che non ti ho ancora detto<span className="text-signal">…</span>
              </p>
            )}
            <a
              href={`#${AGE !== null ? anchors.story : anchors.ch1}`}
              className="group mt-5 inline-flex min-h-11 items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase"
            >
              {AGE !== null ? "Scorri per scoprirlo" : "Scorri per vedere cosa faccio"}
              <span className="flex size-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-signal group-hover:text-signal">
                <ArrowDown className="size-4 motion-safe:animate-bounce" aria-hidden="true" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
