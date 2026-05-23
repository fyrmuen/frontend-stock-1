import { ResearchAsset, ResearchHorizon, ResearchStance } from "@/lib/types";

const GROVE_WEIGHTS: Record<
  ResearchHorizon,
  Record<"g" | "r" | "o" | "v" | "e", number>
> = {
  lt: { g: 0.62, r: 0.12, o: 0.12, v: 0.05, e: 0.09 },
  mt: { g: 0.4, r: 0.15, o: 0.15, v: 0.12, e: 0.18 },
  st: { g: 0.15, r: 0.22, o: 0.23, v: 0.15, e: 0.25 },
};

const STABLE_BLUE_CHIPS = new Set([
  "BBCA",
  "BMRI",
  "BBRI",
  "BBNI",
  "TLKM",
  "ASII",
]);
const GROWTH_TECH = new Set(["GOTO", "BUKA", "BREN", "AMMN", "BRIS"]);

const US_SECTOR_MAP: Record<string, string> = {
  AAPL: "tech",
  MSFT: "tech",
  NVDA: "tech",
  GOOG: "tech",
  GOOGL: "tech",
  META: "tech",
  AMZN: "consumer",
  TSLA: "consumer",
  "BRK.B": "finance",
  JPM: "finance",
  V: "finance",
  MA: "finance",
  JNJ: "health",
  LLY: "health",
  UNH: "health",
  MRK: "health",
  XOM: "energy",
  CVX: "energy",
  SHEL: "energy",
  CAT: "industrial",
  BA: "industrial",
  GE: "industrial",
  NFLX: "comm",
  DIS: "comm",
  T: "comm",
  VZ: "comm",
  WMT: "consumer",
  PG: "consumer",
  KO: "consumer",
};

export const COLOR_MAP: Record<string, string> = {
  banking: "#3A9EE8",
  energy: "#F0A030",
  consumer: "#22C97A",
  telco: "#9A72E8",
  mining: "#E8884A",
  property: "#E04848",
  auto: "#6B8DE8",
  infra: "#4AE8C8",
  agri: "#8AE84A",
  health: "#E84A8C",
  tech: "#5FB88A",
  intl: "#3A9EE8",
  bond: "#C8A84B",
  etf: "#7DCDA3",
};

export const STOCK_SECTOR_OPTIONS = [
  { key: "all", label: "Semua sektor" },
  { key: "banking", label: "Perbankan" },
  { key: "consumer", label: "Konsumer" },
  { key: "telco", label: "Telekomunikasi" },
  { key: "commodity", label: "Komoditas" },
  { key: "auto", label: "Otomotif" },
  { key: "health", label: "Healthcare" },
  { key: "infra", label: "Infrastruktur" },
  { key: "energy", label: "Energi & Petrokimia" },
  { key: "smallcap", label: "Small & Mid Cap ✦" },
];

export const US_SECTOR_OPTIONS = [
  { key: "all", label: "Semua sektor" },
  { key: "tech", label: "Technology" },
  { key: "finance", label: "Financials" },
  { key: "health", label: "Healthcare" },
  { key: "consumer", label: "Consumer" },
  { key: "energy", label: "Energy" },
  { key: "industrial", label: "Industrials" },
  { key: "comm", label: "Communication" },
];

export const GLOBAL_FILTER_OPTIONS = [
  { key: "all", label: "Semua" },
  { key: "europe", label: "Eropa" },
  { key: "japan", label: "Jepang" },
  { key: "china", label: "China" },
  { key: "asean", label: "ASEAN" },
  { key: "tech", label: "Technology" },
  { key: "luxury", label: "Luxury" },
  { key: "energy", label: "Energy" },
];

export function hashTicker(ticker: string) {
  let h = 0;
  for (let i = 0; i < ticker.length; i += 1) {
    h = (h << 5) - h + ticker.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export function getGrovePillars(asset: ResearchAsset, hz: ResearchHorizon) {
  const d = asset[hz];
  const target = d.score;
  const w = GROVE_WEIGHTS[hz];
  const h = hashTicker(`${asset.ticker}${hz}`);

  const isStableBlueChip = STABLE_BLUE_CHIPS.has(asset.ticker);
  const isCommodity =
    asset.color === "coal" ||
    asset.color === "commodity" ||
    asset.sector.includes("Pertambangan") ||
    asset.sector.includes("CPO") ||
    asset.sector.includes("Batu Bara");
  const isGrowthTech = GROWTH_TECH.has(asset.ticker);
  const isSmallCap = asset.isSmallCap === true;

  const spread = 18;
  const r1 = ((h % 100) / 100) * 2 - 1;
  const r2 = (((h >> 3) % 100) / 100) * 2 - 1;
  const r3 = (((h >> 6) % 100) / 100) * 2 - 1;
  const r4 = (((h >> 9) % 100) / 100) * 2 - 1;

  let g: number;
  let r: number;
  let o: number;
  let v: number;
  let e: number;

  if (isStableBlueChip) {
    g = target + 8 + r1 * 5;
    r = target + 2 + r2 * 8;
    o = target + 5 + r3 * 6;
    v = Math.min(95, target + 12 + r4 * 4);
    e = Math.min(98, target + 10 + r1 * 4);
  } else if (isCommodity) {
    g = target - 5 + r1 * 10;
    r = target - 8 + r2 * 12;
    o = target + 3 + r3 * 10;
    v = target + r4 * 8;
    e = target - 3 + r1 * 10;
  } else if (isGrowthTech) {
    g = target - 12 + r1 * 10;
    r = target + 10 + r2 * 6;
    o = target + 8 + r3 * 6;
    v = target - 5 + r4 * 8;
    e = target + 5 + r1 * 6;
  } else if (isSmallCap) {
    g = target + r1 * 10;
    r = target + r2 * 12;
    o = target + r3 * 12;
    v = Math.max(30, target - 18 + r4 * 5);
    e = target - 5 + r1 * 10;
  } else {
    g = target + r1 * spread * 0.6;
    r = target + r2 * spread * 0.8;
    o = target + r3 * spread * 0.7;
    v = target + r4 * spread * 0.5;
    e = target + r1 * spread * 0.7;
  }

  g = Math.max(10, Math.min(98, Math.round(g)));
  r = Math.max(10, Math.min(98, Math.round(r)));
  o = Math.max(10, Math.min(98, Math.round(o)));
  v = Math.max(10, Math.min(98, Math.round(v)));
  e = Math.max(10, Math.min(98, Math.round(e)));

  const wSumSq = w.g * w.g + w.r * w.r + w.o * w.o + w.v * w.v + w.e * w.e;
  for (let iter = 0; iter < 5; iter += 1) {
    const currentWeighted = w.g * g + w.r * r + w.o * o + w.v * v + w.e * e;
    const adj = target - currentWeighted;
    if (Math.abs(adj) < 0.3) break;
    const factor = adj / wSumSq;
    g = Math.max(10, Math.min(98, Math.round(g + factor * w.g)));
    r = Math.max(10, Math.min(98, Math.round(r + factor * w.r)));
    o = Math.max(10, Math.min(98, Math.round(o + factor * w.o)));
    v = Math.max(10, Math.min(98, Math.round(v + factor * w.v)));
    e = Math.max(10, Math.min(98, Math.round(e + factor * w.e)));
  }

  return { g, r, o, v, e };
}

export function getSectorGroup(asset: ResearchAsset) {
  if (asset.assetClass !== "stocks") return null;
  if (asset.color === "mining" || asset.color === "agri") return "commodity";
  if (asset.color === "energy") return "energy";
  return asset.color;
}

export function getUSSectorGroup(asset: ResearchAsset) {
  if (asset.assetClass !== "us") return null;
  return asset.intlSector || US_SECTOR_MAP[asset.ticker] || "tech";
}

export function getGlobalSectorGroup(asset: ResearchAsset) {
  if (asset.assetClass !== "global") return null;
  return asset.intlSector || "tech";
}

export function getGlobalRegionGroup(asset: ResearchAsset) {
  if (asset.assetClass !== "global") return null;
  return asset.region || "europe";
}

export function scoreColor(score: number) {
  if (score >= 75) return "var(--green)";
  if (score >= 60) return "var(--amber)";
  return "var(--red)";
}

export function probColor(prob: number) {
  if (prob >= 60) return "var(--green)";
  if (prob >= 45) return "var(--amber)";
  return "var(--red)";
}

export function grovePillarColor(score: number) {
  if (score >= 80) return "#22C97A";
  if (score >= 65) return "var(--grove)";
  if (score >= 50) return "var(--amber)";
  return "var(--muted2)";
}

export function stanceLabel(stance: ResearchStance) {
  return { ow: "Overweight", nt: "Neutral", uw: "Underweight" }[stance];
}

export function stanceClass(stance: ResearchStance) {
  return { ow: "vp-ow", nt: "vp-nt", uw: "vp-uw" }[stance];
}
