import { Providers } from "@/components/providers";
import { BootIntro } from "@/components/sections/boot-intro";
import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { AgeReveal } from "@/components/sections/age-reveal";
import { PiattinoChapter } from "@/components/sections/piattino-chapter";
import { SitesChapter } from "@/components/sections/sites-chapter";
import { VideoChapter } from "@/components/sections/video-chapter";
import { Finale, SiteFooter } from "@/components/sections/finale";
import { links, site } from "@/lib/site";

// Dati strutturati per i motori di ricerca: solo nome di battesimo, sito e GitHub.
// Niente età, scuola, città, email o foto.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#sito`,
      url: `${site.url}/`,
      name: "I'm Gabriele",
      inLanguage: "it",
      author: { "@id": `${site.url}/#persona` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#persona`,
      name: "Gabriele",
      url: `${site.url}/`,
      sameAs: [links.github],
      knowsAbout: ["Sviluppo di app", "Siti web", "Montaggio video", "Gestione di canali YouTube"],
    },
  ],
};

export default function Home() {
  return (
    <Providers>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <BootIntro />
      <SiteNav />
      <main>
        <Hero />
        <AgeReveal />
        <PiattinoChapter />
        <SitesChapter />
        <VideoChapter />
        <Finale />
      </main>
      <SiteFooter />
    </Providers>
  );
}
