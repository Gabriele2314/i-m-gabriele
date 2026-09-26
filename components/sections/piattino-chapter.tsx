"use client";

import Image, { type StaticImageData } from "next/image";
import {
  ArrowUpRight,
  Camera,
  MessageCircleQuestion,
  Scale,
  WifiOff,
} from "lucide-react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/brand-icons";
import { ChapterLabel, Reveal } from "@/components/reveal";
import { links } from "@/lib/site";
import { usePrefersReducedMotion } from "@/lib/use-reduced-motion";
import { cn } from "@/lib/utils";
import benvenuto from "@/assets/piattino-benvenuto.jpg";
import installa from "@/assets/piattino-installa.jpg";
import icona from "@/assets/piattino-icona.png";

const FEATURES = [
  {
    icon: Camera,
    title: "Fotografa il piatto",
    text: "Due modelli di Google lavorano direttamente sul telefono e riconoscono oltre 2.000 piatti, dalla carbonara al sushi.",
  },
  {
    icon: Scale,
    title: "I grammi li calcola lei",
    text: "Misura quanta parte del piatto è coperta dal cibo e stima la porzione. Niente bilancia.",
  },
  {
    icon: MessageCircleQuestion,
    title: "Coach «Cosa faccio ora?»",
    text: "Legge il diario delle ultime due settimane e ti dà consigli con i tuoi numeri.",
  },
  {
    icon: WifiOff,
    title: "Niente account, niente server",
    text: "Funziona anche offline e i dati restano sul tuo telefono. Pensata dai 9 anni in su.",
  },
];

function Phone({
  src,
  alt,
  className,
}: {
  src: StaticImageData;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[780/1688] shrink-0 overflow-hidden rounded-[2rem] border-[5px] border-zinc-800 bg-black shadow-2xl shadow-black/60",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="260px"
        className="object-cover object-top"
      />
    </div>
  );
}

function PiattinoScreen() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-[#0b0b10]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,140,40,0.28),transparent_45%),radial-gradient(circle_at_60%_85%,rgba(60,200,90,0.22),transparent_45%)]"
      />
      <div className="relative grid h-full items-center gap-8 p-4 md:grid-cols-[1fr_auto] md:p-8 lg:p-12">
        <div className="hidden flex-col gap-5 md:flex">
          <Image
            src={icona}
            alt=""
            width={72}
            height={72}
            className="rounded-[1.1rem]"
          />
          <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Web app · iPhone · Offline
          </p>
          <p className="bg-gradient-to-r from-orange-400 via-amber-300 to-green-400 bg-clip-text font-heading text-5xl font-bold tracking-tight text-transparent lg:text-7xl">
            Piattino
          </p>
          <p className="max-w-sm text-lg text-zinc-300">
            Il diario del cibo che guarda il tuo piatto e capisce cosa c&apos;è
            dentro.
          </p>
          <ul className="flex flex-wrap gap-2 text-sm">
            {["2.024 piatti", "Senza internet", "Dai 9 anni"].map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-white/15 px-3 py-1 text-zinc-200"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-full items-center justify-center gap-4 md:gap-6">
          <Phone
            src={benvenuto}
            alt="Schermata di benvenuto di Piattino con il cubo di frutta in 3D"
            className="h-[25rem] md:h-[30rem]"
          />
          <Phone
            src={installa}
            alt="Piattino spiega come aggiungerla alla schermata Home dell'iPhone"
            className="hidden h-[22rem] translate-y-10 sm:block md:hidden lg:block lg:h-[26rem]"
          />
        </div>
      </div>
    </div>
  );
}

const title = (
  <div className="mb-16 flex flex-col items-center gap-5 px-2 md:mb-20">
    <ChapterLabel number="01">La mia prima app</ChapterLabel>
    <h2 className="font-heading text-4xl font-medium tracking-tight text-balance md:text-6xl">
      Si chiama{" "}
      <span className="block text-[5rem] leading-none font-bold tracking-[-0.05em] text-signal md:text-[9rem]">
        Piattino.
      </span>
    </h2>
  </div>
);

export function PiattinoChapter() {
  const reduce = usePrefersReducedMotion();

  return (
    <section
      id="piattino"
      className="relative -mt-24 scroll-mt-14 overflow-hidden md:-mt-48"
    >
      {reduce ? (
        <div className="px-4 py-24 md:px-10">
          {title}
          <div className="mx-auto h-[30rem] max-w-5xl rounded-[30px] border-4 border-[#6C6C6C] bg-[#222222] p-2 md:h-[40rem] md:p-6">
            <PiattinoScreen />
          </div>
        </div>
      ) : (
        <ContainerScroll titleComponent={title}>
          <PiattinoScreen />
        </ContainerScroll>
      )}

      <div className="relative -mt-16 px-4 pb-8 md:-mt-24 md:px-10 md:pb-12">
        <div className="mx-auto max-w-6xl">
          <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f, i) => (
              <li key={f.title} className="bg-background">
                <Reveal
                  delay={i * 0.06}
                  className="flex h-full flex-col gap-3 p-6"
                >
                  <f.icon className="size-6 text-signal" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-medium">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground">{f.text}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <Reveal className="mt-10 flex flex-col gap-8 rounded-2xl border border-signal/30 bg-signal/[0.04] p-6 md:p-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-heading text-3xl font-medium tracking-tight md:text-4xl">
                Non fidarti delle mie parole.{" "}
                <span className="text-signal">Provala.</span>
              </p>
              <p className="mt-3 max-w-xl text-muted-foreground">
                Si installa sulla schermata Home dell&apos;iPhone in un minuto.
                Al primo avvio ti chiede una parola d&apos;ordine: chiedila a
                me.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href={links.piattino}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants(),
                  "h-12 cursor-pointer rounded-full px-6 text-base font-semibold",
                )}
              >
                Prova Piattino
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </a>
              <a
                href={links.piattinoRepo}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 cursor-pointer rounded-full px-6 text-base",
                )}
              >
                <GithubIcon className="size-5" />
                Guarda il codice
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
