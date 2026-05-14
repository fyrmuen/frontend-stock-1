export type RatingStatus = "OW+" | "OW" | "NT" | "UW" | "UW-";

export type AssetTab = "indonesia" | "us" | "global" | "bonds" | "mmf";

export type Horizon = "long" | "medium" | "short";

export interface NavLink {
  href: string;
  label: string;
}

export interface SummaryStock {
  ticker: string;
  name: string;
  price: string;
  change: string;
  rank: number;
  score: number;
  status: RatingStatus;
  sector: string;
}

export interface ReportTag {
  label: string;
}

export interface KeyStat {
  label: string;
  value: string;
}

export interface IncomeStatementRow {
  item: string;
  values: string[];
  isBold?: boolean;
}

export interface SegmentItem {
  name: string;
  revenue: string;
  share: number;
  growth: string;
}

export interface RotationItem {
  status: RatingStatus;
  label: string;
  note: string;
}

export interface MacroDimension {
  title: string;
  score: string;
  trend: string;
  summary: string;
}

export interface InvestorStrategy {
  profile: string;
  badge: string;
  note: string;
  allocation: Array<{ label: string; value: number }>;
}
