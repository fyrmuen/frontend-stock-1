"use client";

import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/lib/data";
import { NavItem, PageKey } from "@/lib/types";
import { Navbar } from "@/components/layout/navbar";
import { HomePage } from "@/components/home/home-page";
import { ResearchPage } from "@/components/research/research-page";

export default function Page() {
  const [activePage, setActivePage] = useState<PageKey>("home");
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  const handleNavSelect = (item: NavItem) => {
    setActivePage(item.page);
    setPendingSection(item.sectionId ?? null);
  };

  useEffect(() => {
    if (!pendingSection) {
      return;
    }

    const timeout = setTimeout(() => {
      const target = document.getElementById(pendingSection);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
      setPendingSection(null);
    }, 60);

    return () => clearTimeout(timeout);
  }, [pendingSection, activePage]);

  const content = useMemo(() => {
    if (activePage === "research") {
      return <ResearchPage />;
    }

    return <HomePage onStartResearch={() => setActivePage("research")} />;
  }, [activePage]);

  return (
    <div className="min-h-screen bg-grove-bg text-grove-text">
      <Navbar items={navItems} active={activePage} onSelect={handleNavSelect} />
      {content}
    </div>
  );
}

