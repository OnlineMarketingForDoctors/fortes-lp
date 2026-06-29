import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Assets are curated and pre-sized (brand PNG logos + remote AI imagery),
    // so we serve them as-is rather than through the optimizer — the palette
    // PNG logos don't round-trip cleanly through on-the-fly WebP/AVIF encoding.
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
