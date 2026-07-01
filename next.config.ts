import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Canonical URLs carry a trailing slash (e.g. /female-hair-transplant/).
  trailingSlash: true,
  images: {
    // Assets are curated and pre-sized (brand PNG logos + remote AI imagery),
    // so we serve them as-is rather than through the optimizer — the palette
    // PNG logos don't round-trip cleanly through on-the-fly WebP/AVIF encoding.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
  async redirects() {
    return [
      // The landing page now lives at /female-hair-transplant/; send the root there.
      {
        source: "/",
        destination: "/female-hair-transplant",
        permanent: true,
      },
      // The thank-you page moved to /thank-you-enquiry/.
      {
        source: "/thank-you",
        destination: "/thank-you-enquiry",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
