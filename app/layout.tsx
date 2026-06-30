import type { Metadata, Viewport } from "next";
import { Orbitron, Space_Grotesk, Prompt } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  variable: "--font-orbitron",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-grotesk",
  display: "swap",
});

const prompt = Prompt({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-prompt",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BIG ONE ELECTRIC — Rotary Warning Light | Engineered for Absolute Safety",
  description:
    "Re-imagining the future of warning systems. Premium AC 220V LED rotary warning beacons in four spectrum signals — Amber, Blue, Green and Red. Made in Thailand.",
  keywords: [
    "BIG ONE ELECTRIC",
    "rotary warning light",
    "LED beacon",
    "safety light",
    "signal beacon",
    "ไฟหมุน",
    "ไฟวิ่ง",
  ],
  openGraph: {
    title: "BIG ONE ELECTRIC — Rotary Warning Light",
    description:
      "Engineered for Absolute Safety. Re-imagining the Future of Warning Systems.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${orbitron.variable} ${grotesk.variable} ${prompt.variable}`}
    >
      <body className="bg-void text-white antialiased selection:bg-navy-glow/30 selection:text-white">
        <a
          href="#innovation"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-navy focus:px-4 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
