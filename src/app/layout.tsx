import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const kinfolk = localFont({
  src: [
    {
      path: "../../public/fonts/Kinfolk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Kinfolk-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lp.fortesclinic.co.uk"),
  title: "Female Hair Transplant in London — Fortes Clinic",
  description:
    "Surgeon-led female hair transplants at our private Little Venice clinic. Discreet FUE & FUT techniques keep your length. Treatments from £1,999.",
  openGraph: {
    title: "Female Hair Transplant in London — Fortes Clinic",
    description:
      "Surgeon-led female hair transplants at our private Little Venice clinic. Treatments from £1,999.",
    images: ["/assets/photos/female-pattern-hair-loss.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${kinfolk.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[--bg-cream] text-[--ink] font-sans">{children}</body>
    </html>
  );
}
