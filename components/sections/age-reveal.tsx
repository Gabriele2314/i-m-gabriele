"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ease } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const LINES = [
  "Ho creato un'app che riconosce oltre 2.000 piatti da una foto.",
  "Ho messo online i miei siti, con tutto il codice su GitHub.",
  "Monto video e gestisco due canali YouTube.",
  "E adesso la parte che nessuno si aspetta…",
];

// punto dello scroll (0 → 1) in cui parte ogni passo; l'ultimo è la rivelazione
const THRESHOLDS = [0, 0.15, 0.3, 0.45, 0.62];
const TOTAL = THRESHOLDS.length;

export function AgeReveal() {
  const reduce = usePrefersReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [step, setStep] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    let next = 0;
    THRESHOLDS.forEach((t, i) => {
      if (v >= t) next = i;
    });
    setStep(next);
  });

  if (reduce) return <AgeRevealStatic />;

  const revealed = step === TOTAL - 1;

  return (
    <section id="segreto" ref={ref} className="relative h-[420vh]" aria-label="Una cosa su di me">
      <p className="sr-only">
        {LINES.join(" ")} Ho 12 anni, e ho appena iniziato.
      </p>

      <div className="sticky top-0 flex h-dvh items-center overflow-hidden px-4 md:px-10" aria-hidden="true">
        <div className="mx-auto grid w-full max-w-6xl gap-8 md:grid-cols-[8rem_1fr] md:gap-16">
          {/* contatore */}
          <div className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            <p>
              <span className="text-foreground">{String(step + 1).padStart(2, "0")}</span> / {String(TOTAL).padStart(2, "0")}
            </p>
            <div className="mt-3 h-px w-32 overflow-hidden bg-border">
              <motion.div className="h-full origin-left bg-signal" style={{ scaleX: scrollYProgress }} />
            </div>
          </div>

          <motion.ol
            className="space-y-5 md:space-y-8 [@media(max-height:560px)]:space-y-3"
            animate={{ opacity: revealed ? 0 : 1, filter: revealed ? "blur(14px)" : "blur(0px)" }}
            transition={{ duration: 0.5, ease }}
          >
            {LINES.map((line, i) => (
              <motion.li
                key={line}
                className="font-heading text-[1.65rem] leading-[1.15] font-medium tracking-tight text-balance md:text-5xl [@media(max-height:560px)]:text-2xl"
                animate={{
                  opacity: i < step ? 0.22 : i === step ? 1 : 0,
                  y: i > step ? 28 : 0,
                }}
                transition={{ duration: 0.6, ease }}
              >
                {i === LINES.length - 1 ? <span className="text-signal">{line}</span> : line}
              </motion.li>
            ))}
          </motion.ol>
        </div>

        {/* la rivelazione */}
        <AnimatePresence>
          {revealed && (
            <motion.div
              key="eta"
              className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
            >
              <motion.p
                className="font-heading text-3xl font-medium tracking-tight md:text-5xl [@media(max-height:560px)]:text-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
              >
                Ho solo
              </motion.p>
              <div className="flex items-end gap-3 md:gap-6">
                <motion.span
                  className="font-heading text-[62vw] leading-[0.8] font-bold tracking-[-0.08em] text-signal md:text-[26rem] [@media(max-height:560px)]:text-[52vh]"
                  initial={{ opacity: 0, scale: 0.6, filter: "blur(24px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.9, ease, delay: 0.15 }}
                >
                  12
                </motion.span>
                <motion.span
                  className="pb-[0.2em] font-heading text-4xl font-bold tracking-tight md:text-8xl [@media(max-height:560px)]:text-5xl"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.55 }}
                >
                  anni.
                </motion.span>
              </div>
              <motion.p
                className="mt-4 font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase md:mt-8 [@media(max-height:560px)]:mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                — e ho appena iniziato.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.p
          className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-2 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase"
          animate={{ opacity: revealed ? 0 : 1 }}
        >
          Continua a scorrere
          <ChevronDown className="size-4 motion-safe:animate-bounce" />
        </motion.p>
      </div>
    </section>
  );
}

/* Versione senza animazioni per chi le ha disattivate nel sistema */
function AgeRevealStatic() {
  return (
    <section id="segreto" className="px-4 py-32 md:px-10">
      <div className="mx-auto max-w-6xl">
        <ol className="space-y-6">
          {LINES.map((line) => (
            <li key={line} className="font-heading text-3xl font-medium tracking-tight md:text-5xl">
              {line}
            </li>
          ))}
        </ol>
        <p className="mt-16 flex items-end gap-4 font-heading font-bold">
          <span className="text-[10rem] leading-[0.8] tracking-[-0.08em] text-signal md:text-[18rem]">12</span>
          <span className="pb-4 text-5xl md:text-7xl">anni.</span>
        </p>
        <p className="mt-6 font-mono text-sm tracking-[0.2em] text-muted-foreground uppercase">
          — e ho appena iniziato.
        </p>
      </div>
    </section>
  );
}
