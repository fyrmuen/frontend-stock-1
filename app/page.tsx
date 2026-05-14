import { HeroSection } from "@/components/home/HeroSection";
import { PainPointsSection } from "@/components/home/PainPointsSection";
import { ValuePropositionSection } from "@/components/home/ValuePropositionSection";
import { VisionMissionCards } from "@/components/home/VisionMissionCards";
import { AssetCoverageSection } from "@/components/home/AssetCoverageSection";
import { ResearchApproachGrid } from "@/components/home/ResearchApproachGrid";
import { StatsBand } from "@/components/home/StatsBand";
import { CTASection } from "@/components/home/CTASection";
import { FooterDisclaimer } from "@/components/home/FooterDisclaimer";

export default function HomePage() {
  return (
    <main className="container-shell animate-fadeUp">
      <HeroSection />
      <PainPointsSection />
      <ValuePropositionSection />
      <VisionMissionCards />
      <AssetCoverageSection />
      <ResearchApproachGrid />
      <StatsBand />
      <CTASection />
      <FooterDisclaimer />
    </main>
  );
}
