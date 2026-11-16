"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "@/components/brand-icons";
import { anchors, links } from "@/lib/site";

const CHAPTERS = [
  { href: `#${anchors.ch1}`, n: "01", label: "Piattino" },
  { href: `#${anchors.ch2}`, n: "02", label: "Progetti" },
  { href: `#${anchors.ch3}`, n: "03", label: "Video" },
];

const MENU_ID = "menu-capitoli";

export function SiteNav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Menu aperto: il focus va sul primo capitolo; Esc o un clic fuori lo chiudono
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      buttonRef.current?.focus();
    };
    const onPointer = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      // se il focus esce dall'header (Tab dopo l'ultimo link) il menu si chiude
      onBlur={(e) => {
        if (open && !e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(false);
      }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-signal"
        style={{ scaleX: progress }}
      />
      <nav aria-label="Principale">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-2 px-4 md:px-10">
          <a
            href={`#${anchors.top}`}
            className="flex min-h-11 items-center gap-2 rounded-full font-mono text-xs font-medium tracking-[0.2em] uppercase"
          >
            <span className="size-2 rounded-full bg-signal" aria-hidden="true" />
            I&apos;m Gabriele
          </a>

          <div className="flex items-center gap-1">
            <ul className="hidden items-center gap-1 sm:flex">
              {CHAPTERS.map((c) => (
                <li key={c.href}>
                  <a
                    href={c.href}
                    className="flex min-h-11 items-center gap-1.5 rounded-full px-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <span className="font-mono text-[11px] text-signal">{c.n}</span>
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Il mio profilo GitHub (si apre in una nuova scheda)"
              className="flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
            <button
              ref={buttonRef}
              type="button"
              aria-expanded={open}
              aria-controls={MENU_ID}
              aria-label={open ? "Chiudi il menu dei capitoli" : "Apri il menu dei capitoli"}
              onClick={() => setOpen((v) => !v)}
              className="js-only flex size-11 cursor-pointer items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary sm:hidden"
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* telefono, con JavaScript: menu a scomparsa */}
        <div
          ref={panelRef}
          id={MENU_ID}
          hidden={!open}
          className="border-t border-border/60 px-4 pb-3 sm:hidden"
        >
          <ul className="flex flex-col">
            {CHAPTERS.map((c) => (
              <li key={c.href}>
                <a
                  href={c.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center gap-3 rounded-lg px-2 font-heading text-xl"
                >
                  <span className="font-mono text-xs text-signal">{c.n}</span>
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* telefono, senza JavaScript: barra compatta sempre visibile */}
        <ul className="nojs-only flex justify-between border-t border-border/60 px-2 sm:hidden">
          {CHAPTERS.map((c) => (
            <li key={c.href}>
              <a href={c.href} className="flex min-h-11 items-center gap-1.5 px-2 text-sm text-muted-foreground">
                <span className="font-mono text-[11px] text-signal">{c.n}</span>
                {c.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
