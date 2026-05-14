export type PageKey = "home" | "research";

export type NavItem = {
  key: string;
  label: string;
  page: PageKey;
  sectionId?: string;
};

export type HeroData = {
  tag: string;
  title: string;
  subtitle: string;
};

export type AssetClass = "stocks" | "us" | "global" | "bonds" | "mmf";
export type Horizon = "lt" | "mt" | "st";

export type ResearchRow = {
  ticker: string;
  name: string;
  price: string;
  g: number;
  r: number;
  o: number;
  v: number;
  e: number;
  score: number;
  stance: "OW" | "NT" | "UW";
  sector: string;
};

export type ResearchMap = Record<AssetClass, Record<Horizon, ResearchRow[]>>;
