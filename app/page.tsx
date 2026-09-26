import { Providers } from "@/components/providers";
import { BootIntro } from "@/components/sections/boot-intro";
import { SiteNav } from "@/components/sections/site-nav";
import { Hero } from "@/components/sections/hero";
import { AgeReveal } from "@/components/sections/age-reveal";
import { PiattinoChapter } from "@/components/sections/piattino-chapter";
import { SitesChapter } from "@/components/sections/sites-chapter";
import { VideoChapter } from "@/components/sections/video-chapter";
import { Finale, SiteFooter } from "@/components/sections/finale";

export default function Home() {
  return (
    <Providers>
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
