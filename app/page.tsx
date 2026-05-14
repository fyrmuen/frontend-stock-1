import { HeroSection } from "@/components/home/HeroSection";
import { PainPointsSection } from "@/components/home/PainPointsSection";
import { ValuePropositionSection } from "@/components/home/ValuePropositionSection";
import { TrackRecordTeaser } from "@/components/home/TrackRecordTeaser";
import { VisionMissionCards } from "@/components/home/VisionMissionCards";
import { AssetCoverageGrid } from "@/components/home/AssetCoverageGrid";
import { ResearchApproachGrid } from "@/components/home/ResearchApproachGrid";
import { StatsBand } from "@/components/home/StatsBand";
import { PricingTiers } from "@/components/home/PricingTiers";
import { PillarCards } from "@/components/home/PillarCards";
import { FeaturedTestimonials } from "@/components/home/FeaturedTestimonials";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { BottomCTA } from "@/components/home/BottomCTA";
import { FooterDisclaimer } from "@/components/home/FooterDisclaimer";

export default function HomePage() {
  return (
    <main className="container-shell home-v8 animate-fadeUp">
      <HeroSection />
      <PainPointsSection />
      <ValuePropositionSection />
      <TrackRecordTeaser />
      <VisionMissionCards />
      <AssetCoverageGrid />
      <ResearchApproachGrid />
      <StatsBand />
      <PricingTiers />
      <PillarCards />
      <FeaturedTestimonials />
      <FAQAccordion />
      <BottomCTA />
      <FooterDisclaimer />
    </main>
  );
}
