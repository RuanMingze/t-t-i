import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ScreenshotCarousel } from "@/components/screenshot-carousel"
import { FeaturesSection } from "@/components/features-section"
import { HighlightsSection } from "@/components/highlights-section"
import { PWASection } from "@/components/pwa-section"
import { InstallGuideSection } from "@/components/install-guide-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ScreenshotCarousel />
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="highlights">
        <HighlightsSection />
      </section>
      <section id="pwa">
        <PWASection />
      </section>
      <section id="install">
        <InstallGuideSection />
      </section>
      <section id="tech">
        <TechStackSection />
      </section>
      <FooterSection />
    </main>
  )
}
