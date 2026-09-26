import { ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/brand-icons";
import { Reveal } from "@/components/reveal";
import { links } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Finale() {
  return (
    <section id="finale" className="relative isolate overflow-hidden px-4 pt-20 md:px-10 md:pt-40">
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -z-10 size-[48rem] -translate-x-1/2 translate-y-1/2 rounded-full bg-signal/10 blur-[140px]"
      />
      <Reveal className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
          Fine? <span className="text-signal">No.</span>
        </p>
        <h2 className="mt-6 font-heading text-5xl font-bold tracking-[-0.04em] text-balance md:text-8xl">
          Adesso tocca a te.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Apri Piattino, fotografa quello che hai nel piatto e guarda cosa riconosce. Poi passa su
          GitHub: ci trovi tutti i miei progetti.
        </p>
        <div className="mt-10 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href={links.piattino}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants(), "h-14 cursor-pointer rounded-full px-8 text-lg font-semibold")}
          >
            Prova Piattino
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "h-14 cursor-pointer rounded-full px-8 text-lg")}
          >
            <GithubIcon className="size-5" />
            Seguimi su GitHub
          </a>
        </div>
      </Reveal>

      <p
        aria-hidden="true"
        className="mt-24 text-center font-heading text-[17vw] leading-[0.8] font-bold tracking-[-0.06em] whitespace-nowrap text-transparent select-none [-webkit-text-stroke:1px_rgb(255_255_255/0.18)] md:mt-32"
      >
        I&apos;m Gabriele
      </p>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-4 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 I&apos;m Gabriele · Fatto da me, con Next.js e Tailwind.</p>
        <a
          href={links.thisRepo}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-4" />
          Il codice di questo sito
        </a>
      </div>
    </footer>
  );
}
