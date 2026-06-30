import type { Metadata } from "next";
import { Roboto, Montserrat, Open_Sans, Marcellus } from "next/font/google";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

// Real Fortes brand display face (caps titling) used for headings.
const kinfolk = localFont({
  src: [
    { path: "../../public/fonts/Kinfolk-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Kinfolk-Regular.otf", weight: "400", style: "normal" },
  ],
  variable: "--font-kinfolk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fortes-lp.vercel.app"),
  title: "Female Hair Transplant in London — Fortes Clinic",
  description:
    "Surgeon-led female hair transplants at our private Little Venice clinic. Discreet FUE & FUT techniques keep your length. Natural, lasting results from £1,999.",
  openGraph: {
    title: "Natural Hair Restoration, Designed for Women — Fortes Clinic",
    description:
      "Surgeon-led female hair transplants in Central London. Discreet techniques that keep your existing hair intact. Free, no-pressure consultation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${montserrat.variable} ${openSans.variable} ${marcellus.variable} ${kinfolk.variable}`}
    >
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
