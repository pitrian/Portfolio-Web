import { SiteHeader } from "@/components/site-header";
import {
  AboutSection,
  FeaturedSection,
  HeroSection,
  LatestPostsSection,
  ResumeSection,
  SiteFooter,
} from "@/components/home-sections";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturedSection />
        <LatestPostsSection />
        <ResumeSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </div>
  );
}
