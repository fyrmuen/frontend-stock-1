import { MacroDimensionCards } from "@/components/compass/MacroDimensionCards";
import { RotationCards } from "@/components/compass/RotationCards";
import { SectorCards } from "@/components/compass/SectorCards";
import { InvestorStrategyCards } from "@/components/compass/InvestorStrategyCards";
import { MacroDetailPanel } from "@/components/compass/MacroDetailPanel";

export default function CompassPage() {
  return (
    <main className="container-shell py-8 animate-fadeUp">
      <header className="mb-6 text-center">
        <h1 className="mb-2 font-serif text-[28px]">Portfolio <em className="text-grove-primary">Compass</em></h1>
        <p className="mx-auto max-w-[600px] text-[13px] leading-[1.75] text-grove-muted2">Macro dimension, rotation map, dan strategi alokasi untuk profil investor berbeda.</p>
      </header>
      <MacroDimensionCards />
      <RotationCards />
      <SectorCards />
      <InvestorStrategyCards />
      <MacroDetailPanel />
    </main>
  );
}
