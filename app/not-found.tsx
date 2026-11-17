import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pagina non trovata · I'm Gabriele",
  robots: { index: false },
};

// Stessa voce del sito: un file del «sistema» che non si apre
export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-dvh flex-col justify-between overflow-hidden px-4 py-6 md:px-10 md:py-10">
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_30%_40%,black_20%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 -z-10 size-[42rem] rounded-full bg-signal/10 blur-[120px]"
      />

      <p className="flex items-center justify-between font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
        <span>I&apos;m Gabriele — errore</span>
        <span className="flex items-center gap-2">
          <span className="size-2 animate-blink rounded-full bg-rec" aria-hidden="true" />
          Rec
        </span>
      </p>

      <div className="mx-auto w-full max-w-5xl">
        <div className="space-y-3 font-mono text-sm text-foreground/90" aria-hidden="true">
          <p>&gt; apertura file richiesto…</p>
          <p className="flex items-baseline gap-3">
            <span className="shrink-0">&gt; ricerca nel portfolio</span>
            <span className="min-w-4 flex-1 border-b border-dotted border-foreground/20" />
            <span className="text-rec">[NON TROVATO]</span>
          </p>
        </div>

        <h1 className="mt-10 font-heading font-bold tracking-[-0.06em]">
          <span className="block text-[clamp(7rem,32vw,20rem)] leading-[0.8] text-signal">404</span>
          <span className="mt-4 block text-4xl tracking-tight md:text-6xl">Questa pagina non esiste.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          Il link è sbagliato o il file è stato spostato. La storia vera comincia dall&apos;inizio.
        </p>

        <Link
          href="/"
          className={cn(buttonVariants(), "mt-10 h-12 cursor-pointer rounded-full px-6 text-base font-semibold")}
        >
          <ArrowLeft className="size-5" aria-hidden="true" />
          Torna all&apos;inizio
        </Link>
      </div>

      <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">File n° 404</p>
    </main>
  );
}
