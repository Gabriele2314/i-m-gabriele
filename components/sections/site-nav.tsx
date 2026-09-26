"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { GithubIcon } from "@/components/brand-icons";
import { links } from "@/lib/site";

const CHAPTERS = [
  { href: "#piattino", n: "01", label: "Piattino" },
  { href: "#siti", n: "02", label: "Siti" },
  { href: "#video", n: "03", label: "Video" },
];

export function SiteNav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40, restDelta: 0.001 });

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-signal"
        style={{ scaleX: progress }}
      />
      <nav
        aria-label="Principale"
        className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 md:px-10"
      >
        <a
          href="#top"
          className="flex min-h-11 items-center gap-2 font-mono text-xs font-medium tracking-[0.2em] uppercase"
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
            aria-label="Il mio profilo GitHub"
            className="flex size-11 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <GithubIcon className="size-5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
