"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/*
  Il contenuto è visibile di partenza (anche senza JavaScript o con «Riduci movimento»).
  Solo con JavaScript attivo il CSS lo nasconde finché non entra nello schermo,
  poi lo fa salire con opacity + transform (vedi .reveal in globals.css).
*/
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<false | "instant" | "anim">(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let first = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Scorrendo normalmente un blocco entra dal basso e sale con l'animazione.
          // Se invece compare già in alto (refresh a metà, ancora, tasto Fine, salto)
          // si mostra subito: niente schermo vuoto ad aspettare.
          const jumped = first || entry.boundingClientRect.top < window.innerHeight * 0.7;
          setShown(jumped ? "instant" : "anim");
          io.disconnect();
        }
        first = false;
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      data-shown={shown || undefined}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

export function ChapterLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
      <span className="text-signal">Capitolo {number}</span>
      <span aria-hidden="true" className="h-px w-8 bg-border" />
      {children}
    </p>
  );
}
