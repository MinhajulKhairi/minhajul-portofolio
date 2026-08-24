import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Minhajul Yusri Khairi — AI Evaluator & Data Analyst",
  description:
    "Portfolio Minhajul Yusri Khairi: NLP & ABSA, AI Evaluation & Metrics, Data Pipeline & EDA. Lulusan Sistem Informasi Universitas Hasanuddin.",
  metadataBase: new URL("https://khairi-portfolio.vercel.app"),
  openGraph: {
    title: "Minhajul Yusri Khairi — AI Evaluator & Data Analyst",
    description:
      "NLP & ABSA · AI Evaluation & Metrics · Data Pipeline & EDA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
