"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";
import { GroveLogo } from "@/components/ui/GroveLogo";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-grove-border bg-grove-bg/95 backdrop-blur-[20px]">
      <div className="mx-auto flex h-[58px] max-w-[1600px] items-center justify-between px-4 md:px-7">
        <Link href="/" className="flex items-center gap-2.5">
          <GroveLogo className="h-[30px] w-[30px]" />
          <span className="font-serif text-[19px] leading-none">Grove<em className="not-italic text-grove-primary">.</em></span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link key={item.href} href={item.href} className={`text-xs transition ${active ? "text-grove-primary" : "text-grove-muted2 hover:text-grove-text"}`}>
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 text-[10px] text-grove-muted md:flex">
          <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-grove-primary shadow-[0_0_8px_rgba(95,184,138,0.5)] animate-blink" />Live</span>
          <span className="text-grove-border2">·</span>
          <span>Apr 2026</span>
        </div>
      </div>
    </nav>
  );
}
