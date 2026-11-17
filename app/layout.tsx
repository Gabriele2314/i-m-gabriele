import type { Metadata, Viewport } from "next";
import { Archivo, Geist_Mono, Space_Grotesk } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { site } from "@/lib/site";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const OG_ALT = "I'm Gabriele: sviluppo app, creo siti, monto video e gestisco canali YouTube";

const HEAD_SCRIPT = `(function(){var c=document.documentElement.classList;c.add('js');try{if(sessionStorage.getItem('intro-vista')==='1'||location.hash.length>1||matchMedia('(prefers-reduced-motion: reduce)').matches)c.add('intro-skip')}catch(e){}})()`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "I'm Gabriele",
  description:
    "Sviluppo app, creo siti, monto video e gestisco canali YouTube. Il resto lo scopri scorrendo.",
  openGraph: {
    title: "I'm Gabriele",
    description: "App, siti e video. Ma c'è una cosa che non ti ho ancora detto…",
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: "I'm Gabriele",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: OG_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: "I'm Gabriele",
    description: "App, siti e video. Ma c'è una cosa che non ti ho ancora detto…",
    images: [{ url: "/og.png", alt: OG_ALT }],
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      // lo script qui sotto aggiunge la classe "js" prima che React prenda la pagina
      suppressHydrationWarning
      className={`dark ${archivo.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/*
          Prima del primo paint: con JavaScript la pagina può nascondere le cose da animare
          (senza, resta tutto visibile) e l'intro non copre lo schermo a chi l'ha già vista,
          arriva da un link a un capitolo o preferisce meno animazioni.
        */}
        <script dangerouslySetInnerHTML={{ __html: HEAD_SCRIPT }} />
      </head>
      <body className="grain min-h-full flex flex-col">{children}</body>
      {/* solo sul sito pubblicato, così le prove sul computer non finiscono nelle statistiche */}
      {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={site.gaId} />}
    </html>
  );
}
