// Central asset registry.
// Local assets live under /public. AI-generated images are referenced via
// remote URL (CDN), since the Higgsfield CDN isn't fetchable from the build
// environment but is publicly accessible in browsers.

export const logos = {
  fortes: "/assets/logos/fortes-clinic-logo.png",
  spinning: "/assets/logos/spinning-logo.png",
};

export const branding = {
  pattern: "/assets/branding/back-5.png",
  patternSoft: "/assets/branding/back-4.png",
};

export const video = {
  hero: "/assets/hero-video.mp4",
};

export const photos = {
  femalePatternHairLoss: "/assets/photos/female-pattern-hair-loss.jpg",
};

export const doctor = {
  // Real photograph of Dr Ahmad Saeed (from Drive › Mr Saeed Photos).
  saeed: "/assets/doctor/dr-saeed-real.png",
  saeedAlt: "/assets/doctor/dr-saeed-portrait.png",
};

export const reviewsScreenshot = "/assets/reviews/google-reviews-screenshot.png";

// Real, consented before/after composites (from Drive › Before & After).
// Each PNG is a single side-by-side panel with "Before"/"After" labels and the
// Fortes wordmark already baked in, so do not overlay our own captions.
export const beforeAfter = {
  frontalHairline: "/assets/results/before-after-1.png",
  hairlineTemples: "/assets/results/before-after-2.png",
};

// Real regulatory / membership marks (from Drive › Associations and
// Accreditations Logos). Replaces the earlier text-circle placeholders.
export const accreditations = {
  gmc: "/assets/accreditations/gmc.png",
  cqc: "/assets/accreditations/cqc.png",
  ishrs: "/assets/accreditations/ishrs.png",
  sfp: "/assets/accreditations/sfp.png",
  tiot: "/assets/accreditations/tiot.png",
  ico: "/assets/accreditations/ico.png",
};

// Real press / media marks (from Drive › Media Logos). Replaces the text marquee.
// press-1 is the Rolls-Royce Enthusiasts' Club partner badge, not a publication,
// so it is shown separately (as a partnership mark) rather than in the press row.
export const mediaLogos = [
  { src: "/assets/media-logos/press-2.png", alt: "Daily Mail" },
  { src: "/assets/media-logos/press-3.png", alt: "LDN Fashion" },
  { src: "/assets/media-logos/press-4.png", alt: "The Guardian" },
];

// Higgsfield CDN — AI-generated, nano_banana_pro/2, served remotely.
const HF =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3Ary2g06ZSWzxFoVWIP644Wm9ZG";

export const ai = {
  womanPartingHero: `${HF}/hf_20260628_223859_b2a5bf16-be60-4581-bd34-bd042c082b33.png`,
  womanBlackPortrait: `${HF}/hf_20260628_223903_0f0bc05c-9252-4865-bceb-b55b96669f7f.png`,
  womanMaturePortrait: `${HF}/hf_20260628_223907_50b399aa-55d8-4d57-8e25-8e48963361fe.png`,
  scalpDensity: `${HF}/hf_20260628_223911_2ab19cf1-fd17-4e8f-b252-332bb7dc32d5.png`,
  womanSouthAsian: `${HF}/hf_20260628_224221_5413189d-e252-4607-9dd8-628f79c0b66e.png`,
  clinicInterior: `${HF}/hf_20260628_224226_530b3201-903f-4301-a432-346d12bdfffe.png`,
  womanBlondeWindow: `${HF}/hf_20260628_224232_c6dc69c6-dcd9-43db-a562-38050f98f989.png`,
  surgeonHands: `${HF}/hf_20260628_224236_7b620c04-b816-4cc6-8c81-a55158920ca3.png`,
  handThroughHair: `${HF}/hf_20260628_224238_29634735-c283-4842-abf4-d2ac6c91bd7f.png`,
};
