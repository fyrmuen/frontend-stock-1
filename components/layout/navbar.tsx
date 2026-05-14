import { NavItem, PageKey } from "@/lib/types";

type NavbarProps = {
  items: NavItem[];
  active: PageKey;
  onSelect: (item: NavItem) => void;
};

export function Navbar({ items, active, onSelect }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-grove-border bg-grove-bg/95 backdrop-blur">
      <div className="mx-auto flex h-[58px] w-full max-w-[1600px] items-center justify-between px-7">
        <button onClick={() => onSelect(items[0])} className="flex items-center gap-2.5">
          <span className="flex h-[30px] w-[30px] items-center justify-center">
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <path d="M 50 10 C 80 10, 100 35, 100 70 C 100 90, 85 105, 60 105 C 35 105, 15 90, 15 65 C 15 35, 30 10, 50 10 Z" fill="#5FB88A" />
              <path d="M 50 10 C 80 10, 100 35, 100 70 C 100 90, 85 105, 60 105 L 55 60 L 50 10 Z" fill="#7DCDA3" />
              <path d="M 40 80 L 55 60 L 65 70 L 82 42" stroke="#0A0E0B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M 75 40 L 82 42 L 80 49" stroke="#0A0E0B" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </span>
          <span className="font-serif text-[19px] leading-none">
            Grove<em className="not-italic text-grove-primary">.</em>
          </span>
        </button>

        <div className="mx-8 hidden flex-1 items-center justify-center gap-6 md:flex">
          {items.map((item) => (
            <button
              key={item.key}
              onClick={() => onSelect(item)}
              className={`text-xs transition ${active === item.page ? "text-grove-primary" : "text-grove-muted hover:text-grove-text"}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 text-[10px] text-[#6B7F72] md:flex">
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-grove-primary shadow-[0_0_8px_rgba(95,184,138,0.5)]" />
            Live
          </span>
          <span className="text-grove-border">·</span>
          <span>Apr 2026</span>
        </div>
      </div>
    </nav>
  );
}

