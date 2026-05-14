import { HeroSection } from "@/components/home/HeroSection";
import { PainPointsSection } from "@/components/home/PainPointsSection";
import { ValuePropositionSection } from "@/components/home/ValuePropositionSection";
import { TrackRecordTeaser } from "@/components/home/TrackRecordTeaser";
import { ResearchApproachGrid } from "@/components/home/ResearchApproachGrid";
import { PricingTiers } from "@/components/home/PricingTiers";
import { PillarCards } from "@/components/home/PillarCards";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { CtaBanner } from "@/components/home/Ctabanner";
import { FooterDisclaimer } from "@/components/home/FooterDisclaimer";
import { Footer } from "@/components/layout/Footer";
import { Navigation } from "@/components/layout/Navigation";

export default function HomePage() {
  return (
    <div className="relative">
      <Navigation />

      <main className="container-shell home-v8 animate-fadeUp">
        <HeroSection />
        <PainPointsSection />
        <ValuePropositionSection />
        <TrackRecordTeaser />
        <ResearchApproachGrid />
        <PillarCards />
        <PricingTiers />
        <FAQAccordion />
        <CtaBanner />
        <FooterDisclaimer />
      </main>
      <Footer />

    </div>
  );
}
