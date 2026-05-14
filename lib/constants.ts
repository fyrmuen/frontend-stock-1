import { RatingStatus } from "@/lib/types";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/compass", label: "Compass" },
  { href: "/education", label: "Education" },
  { href: "/track-record", label: "Track Record" },
  { href: "/about", label: "About" }
] as const;

export const STATUS_CLASS_MAP: Record<RatingStatus, string> = {
  "OW+": "border-[#22C97A]/35 bg-[#22C97A]/12 text-[#22C97A]",
  OW: "border-grove-primary/35 bg-grove-primary/10 text-grove-primary",
  NT: "border-grove-amber/35 bg-grove-amber/10 text-grove-amber",
  UW: "border-[#D99660]/35 bg-[#D99660]/10 text-[#D99660]",
  "UW-": "border-grove-red/35 bg-grove-red/10 text-grove-red"
};

export const SECTORS = [
  "All",
  "Banking",
  "Consumer",
  "Energy",
  "Telecom",
  "Healthcare",
  "Industrial",
  "Property"
] as const;
