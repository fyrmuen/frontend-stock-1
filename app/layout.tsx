import "./globals.css";
import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Grove · Research Platform",
  description: "Grow together. Invest smarter."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
