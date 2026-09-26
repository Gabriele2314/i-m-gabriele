"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { ShimmerText } from "@/components/ui/shimmer-text";
import { useIntro } from "@/components/providers";
import { ease } from "@/lib/site";

const ROLES = ["Sviluppo app", "Creo siti", "Monto video", "Gestisco canali YouTube"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export function Hero() {
  const { done } = useIntro();

  return (
    <section
      id="top"
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

      <motion.div
        className="mx-auto w-full max-w-7xl"
        variants={container}
        initial="hidden"
        animate={done ? "show" : "hidden"}
      >
        <motion.div
          variants={rise}
          className="mb-6 flex items-center justify-between font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase md:mb-10"
        >
          <span>File n° 001 · Portfolio</span>
          <span className="flex items-center gap-2">
            <span className="size-2 animate-blink rounded-full bg-rec" aria-hidden="true" />
            Rec
          </span>
        </motion.div>

        <h1 className="sr-only">I&apos;m Gabriele</h1>
        <motion.div variants={rise} aria-hidden="true">
          <ShimmerText
            duration={2.2}
            delay={1.2}
            className="font-heading text-[clamp(4rem,19vw,15rem)] leading-[0.85] font-bold tracking-[-0.05em] text-foreground dark:[--shimmer-contrast:var(--signal)]"
          >
            I&apos;m <br className="md:hidden" />
            Gabriele
          </ShimmerText>
        </motion.div>

        <div className="mt-10 grid gap-10 border-t border-border pt-8 md:mt-14 md:grid-cols-2 md:items-end">
          <motion.ul variants={rise} className="flex flex-wrap gap-x-3 gap-y-2 text-lg md:text-xl">
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
          </motion.ul>

          <motion.div variants={rise} className="md:text-right">
            <p className="text-xl text-muted-foreground md:text-2xl">
              Ma c&apos;è una cosa che non ti ho ancora detto<span className="text-signal">…</span>
            </p>
            <a
              href="#segreto"
              className="group mt-5 inline-flex min-h-11 items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase"
            >
              Scorri per scoprirlo
              <span className="flex size-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-signal group-hover:text-signal">
                <ArrowDown className="size-4 motion-safe:animate-bounce" aria-hidden="true" />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
