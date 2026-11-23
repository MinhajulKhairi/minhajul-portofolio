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
  title: "Minhajul Yusri Khairi — Data Analyst & Data Scientist",
  description:
    "Portfolio of Minhajul Yusri Khairi: Data Analyst & Data Scientist focused on banking and credit card analytics, churn modeling, and NLP. Information Systems graduate of Universitas Hasanuddin.",
  metadataBase: new URL("https://minhajul-portofolio.vercel.app"),
  openGraph: {
    title: "Minhajul Yusri Khairi — Data Analyst & Data Scientist",
    description:
      "Banking & Credit Card Analytics · Churn & Spend Modeling · NLP",
    url: "https://minhajul-portofolio.vercel.app",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plexMono.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}