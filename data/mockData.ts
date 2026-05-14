import {
  IncomeStatementRow,
  InvestorStrategy,
  KeyStat,
  MacroDimension,
  RotationItem,
  SegmentItem,
  SummaryStock
} from "@/lib/types";

export const heroContent = {
  tag: "Riset & Strategi Investasi",
  title: "Riset yang membantu kamu memutuskan, bukan sekadar menambah bingung.",
  subtitle:
    "Untuk investor yang portofolionya sudah mulai terbentuk — tapi belum punya framework jelas untuk memutuskan kapan masuk, kapan keluar, dan kapan pindah antar aset."
};

export const painPoints = [
  '"Saham saya merah, tapi nggak tahu harus hold, cut loss, atau pindah ke mana."',
  '"Dengar obligasi lagi menarik, tapi nggak ngerti FR itu apa dan mulainya dari mana."',
  '"Saya follow banyak akun saham, tapi ujungnya saling bertentangan. Siapa yang benar?"',
  '"Uang saya nganggur di deposito. Mau pindah ke investasi, tapi takut timing-nya salah."',
  '"Dapat rekomendasi saham dari mana-mana, tapi nggak ada yang jelasin kenapa dan kapan keluarnya."',
  '"Market lagi turun. Saya mau average down, tapi nggak yakin fundamentalnya masih bagus."'
];

export const statsBand = [
  { value: "+38.4%", label: "Return Total" },
  { value: "+24.1%", label: "Alpha vs IHSG" },
  { value: "67%", label: "Win Rate" },
  { value: "97", label: "Tracked Stocks" }
];

export const summaryStocks: SummaryStock[] = [
  { rank: 1, ticker: "BBCA", name: "Bank Central Asia", price: "Rp 9,700", change: "+1.04%", score: 87, status: "OW+", sector: "Banking" },
  { rank: 2, ticker: "TLKM", name: "Telkom Indonesia", price: "Rp 3,220", change: "+0.63%", score: 78, status: "OW", sector: "Telecom" },
  { rank: 3, ticker: "ASII", name: "Astra International", price: "Rp 5,125", change: "-0.41%", score: 71, status: "NT", sector: "Industrial" },
  { rank: 4, ticker: "UNVR", name: "Unilever Indonesia", price: "Rp 2,560", change: "-1.10%", score: 62, status: "UW", sector: "Consumer" }
];

export const keyStats: KeyStat[] = [
  { label: "Market Cap", value: "Rp 1,205T" },
  { label: "P/E", value: "20.3x" },
  { label: "ROE", value: "22.7%" },
  { label: "Dividend Yield", value: "2.1%" }
];

export const incomeStatementRows: IncomeStatementRow[] = [
  { item: "Revenue", values: ["95.2", "101.4", "107.8", "114.6"], isBold: true },
  { item: "Gross Profit", values: ["53.0", "56.8", "60.4", "64.1"] },
  { item: "Operating Profit", values: ["37.7", "40.2", "43.0", "45.5"] },
  { item: "Net Profit", values: ["34.9", "37.1", "39.8", "42.4"], isBold: true }
];

export const segments: SegmentItem[] = [
  { name: "Consumer Banking", revenue: "46.1T", share: 42, growth: "+8.4%" },
  { name: "Corporate", revenue: "29.8T", share: 28, growth: "+6.1%" },
  { name: "SME", revenue: "18.7T", share: 17, growth: "+10.9%" },
  { name: "Treasury", revenue: "12.4T", share: 13, growth: "+4.2%" }
];

export const rotations: RotationItem[] = [
  { status: "OW+", label: "Domestic Banks", note: "Liquidity and earnings trend remain strongest." },
  { status: "OW", label: "Telecom", note: "Defensive cash flow with selective upside catalyst." },
  { status: "NT", label: "Property", note: "Neutral while waiting for rate-cut follow-through." },
  { status: "UW", label: "Staples", note: "Margin pressure and weak volume growth." },
  { status: "UW-", label: "Coal", note: "Price normalization and cyclical downside risk." }
];

export const macroDimensions: MacroDimension[] = [
  { title: "Growth", score: "72", trend: "+2.1", summary: "Domestic demand stays resilient." },
  { title: "Inflation", score: "66", trend: "-0.4", summary: "Core inflation remains anchored." },
  { title: "Policy", score: "74", trend: "+0.8", summary: "Policy stance still supportive." },
  { title: "Liquidity", score: "69", trend: "+1.3", summary: "FX stability improved risk appetite." },
  { title: "Sentiment", score: "64", trend: "+0.2", summary: "Selective risk-on rotation continues." }
];

export const investorStrategies: InvestorStrategy[] = [
  { profile: "Conservative", badge: "CONS", note: "Capital preservation first", allocation: [{ label: "Stocks", value: 25 }, { label: "Bonds", value: 45 }, { label: "Cash", value: 30 }] },
  { profile: "Moderate Conservative", badge: "M-CONS", note: "Balanced income and growth", allocation: [{ label: "Stocks", value: 40 }, { label: "Bonds", value: 35 }, { label: "Cash", value: 25 }] },
  { profile: "Moderate", badge: "MOD", note: "Core growth allocation", allocation: [{ label: "Stocks", value: 55 }, { label: "Bonds", value: 30 }, { label: "Cash", value: 15 }] },
  { profile: "Moderate Aggressive", badge: "M-AGG", note: "Higher equity conviction", allocation: [{ label: "Stocks", value: 68 }, { label: "Bonds", value: 22 }, { label: "Cash", value: 10 }] },
  { profile: "Aggressive", badge: "AGG", note: "Maximum growth with active risk", allocation: [{ label: "Stocks", value: 80 }, { label: "Bonds", value: 12 }, { label: "Cash", value: 8 }] }
];
