import { HeroData, NavItem, ResearchMap } from "@/lib/types";

export const navItems: NavItem[] = [
  { key: "home", label: "Home", page: "home", sectionId: "home-top" },
  { key: "research", label: "Research", page: "research" },
  { key: "compass", label: "Compass", page: "home", sectionId: "compass" },
  { key: "edukasi", label: "Edukasi", page: "home", sectionId: "edukasi" },
  { key: "track-record", label: "Track Record", page: "home", sectionId: "track-record" },
  { key: "tentang", label: "Tentang Kami", page: "home", sectionId: "tentang-kami" }
];

export const heroData: HeroData = {
  tag: "Riset & Strategi Investasi",
  title: "Riset yang membantu kamu memutuskan, bukan sekadar menambah bingung.",
  subtitle:
    "Untuk investor yang portofolionya sudah mulai terbentuk, tapi belum punya framework jelas untuk kapan masuk, keluar, dan rotasi aset."
};

const baseRows = [
  { ticker: "BBCA", name: "Bank Central Asia", price: "Rp9,700", g: 88, r: 84, o: 80, v: 79, e: 90, score: 84, stance: "OW", sector: "banking" },
  { ticker: "TLKM", name: "Telkom Indonesia", price: "Rp3,220", g: 80, r: 76, o: 73, v: 78, e: 75, score: 76, stance: "NT", sector: "telco" },
  { ticker: "ASII", name: "Astra International", price: "Rp5,125", g: 74, r: 69, o: 70, v: 71, e: 68, score: 70, stance: "NT", sector: "auto" },
  { ticker: "UNVR", name: "Unilever Indonesia", price: "Rp2,560", g: 61, r: 64, o: 66, v: 58, e: 62, score: 62, stance: "UW", sector: "consumer" }
] as const;

const mutate = (offset: number) =>
  baseRows.map((row) => ({
    ...row,
    g: Math.max(40, Math.min(95, row.g + offset)),
    r: Math.max(40, Math.min(95, row.r + offset)),
    o: Math.max(40, Math.min(95, row.o + offset)),
    v: Math.max(40, Math.min(95, row.v + offset)),
    e: Math.max(40, Math.min(95, row.e + offset)),
    score: Math.max(40, Math.min(95, row.score + offset))
  }));

export const researchData: ResearchMap = {
  stocks: { lt: mutate(2), mt: mutate(0), st: mutate(-3) },
  us: { lt: mutate(4), mt: mutate(1), st: mutate(-2) },
  global: { lt: mutate(1), mt: mutate(0), st: mutate(-4) },
  bonds: { lt: mutate(3), mt: mutate(1), st: mutate(-1) },
  mmf: { lt: mutate(2), mt: mutate(0), st: mutate(-1) }
};
