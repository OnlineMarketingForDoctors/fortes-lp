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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5CF7FP4W');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5CF7FP4W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
