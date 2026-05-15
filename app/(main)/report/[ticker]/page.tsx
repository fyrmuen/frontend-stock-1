import { ReportClient } from "@/app/(main)/report/[ticker]/ReportClient";

export default async function ReportPage({ params }: { params: Promise<{ ticker: string }> }) {
  const { ticker } = await params;
  return <ReportClient ticker={ticker} />;
}
