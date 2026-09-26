"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useIntro } from "@/components/providers";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";

const LINES = [
  { text: "> avvio del sistema…", tag: "" },
  { text: "> apertura file: portfolio.exe", tag: "OK" },
  { text: "> identità del proprietario", tag: "CRIPTATA" },
  { text: "> livello di accesso", tag: "OSPITE" },
  { text: "> accesso consentito", tag: "" },
];

const STEP_MS = 340;
const STORAGE_KEY = "intro-vista";

export function BootIntro() {
  const { finish } = useIntro();
  const reduce = usePrefersReducedMotion();
  const [visible, setVisible] = useState(true);
  const [shown, setShown] = useState(0);

  const close = useCallback(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {}
    setVisible(false);
    finish();
  }, [finish]);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {}

    // Chi ha già visto l'intro (o preferisce meno animazioni) entra subito
    if (reduce || seen) {
      const id = requestAnimationFrame(close);
      return () => cancelAnimationFrame(id);
    }

    // La storia parte sempre dall'inizio
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const timers = LINES.map((_, i) => setTimeout(() => setShown(i + 1), 200 + i * STEP_MS));
    timers.push(setTimeout(close, 200 + LINES.length * STEP_MS + 500));
    return () => timers.forEach(clearTimeout);
  }, [reduce, close]);

  useEffect(() => {
    if (!visible) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    return () => {
      root.style.overflow = prev;
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="boot"
          className="boot-intro fixed inset-0 z-[70] flex flex-col justify-between bg-background px-4 py-6 font-mono text-sm md:px-10 md:py-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between text-xs tracking-[0.2em] text-muted-foreground uppercase">
            <span>I&apos;m Gabriele — file n° 001</span>
            <span className="flex items-center gap-2">
              <span className="size-2 animate-blink rounded-full bg-rec" aria-hidden="true" />
              Rec
            </span>
          </div>

          <div className="mx-auto w-full max-w-xl space-y-3" aria-hidden="true">
            {LINES.slice(0, shown).map((line, i) => (
              <motion.p
                key={line.text}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-baseline gap-3 text-foreground/90"
              >
                <span className="shrink-0">{line.text}</span>
                {line.tag && (
                  <>
                    <span className="min-w-4 flex-1 border-b border-dotted border-foreground/20" />
                    <span className={i === 2 ? "text-rec" : "text-signal"}>[{line.tag}]</span>
                  </>
                )}
                {i === LINES.length - 1 && <span className="animate-blink text-signal">_</span>}
              </motion.p>
            ))}
          </div>

          <div className="flex items-end justify-between gap-6">
            <div className="h-px flex-1 overflow-hidden bg-border">
              <motion.div
                className="h-full origin-left bg-signal"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: shown / LINES.length }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <button
              type="button"
              onClick={close}
              className="min-h-11 cursor-pointer rounded-full border border-border px-4 text-xs tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:border-signal hover:text-signal"
            >
              Salta intro
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
