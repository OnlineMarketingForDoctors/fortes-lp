// Central asset registry for the Fortes Clinic — Female Hair Transplant LP.
// Real brand assets live under /public/assets (from the Drive "Assets" folder).
// AI imagery is generated with Higgsfield nano_banana_pro and referenced from
// the Higgsfield CDN (publicly served, so kept as remote URLs + unoptimized).

const HF =
  "https://d8j0ntlcm91z4.cloudfront.net/user_3Ary2g06ZSWzxFoVWIP644Wm9ZG/";

export const logos = {
  fortes: "/assets/logos/fortes-clinic-logo.png",
  spinning: "/assets/logos/spinning-logo.png",
};

export const video = {
  hero: "/assets/hero-video.mp4",
};

export const doctor = {
  // Real photograph of Dr Ahmad Saeed in front of the gold Fortes ring.
  saeed: "/assets/doctor/dr-saeed-real.png",
};

export const photos = {
  femalePattern: "/assets/photos/female-pattern-hair-loss.jpg",
};

export const reviewsScreenshot = "/assets/reviews/google-reviews-screenshot.png";

// Real consented before/after composites (labels + Fortes mark baked in).
export const beforeAfter = {
  frontalHairline: "/assets/results/before-after-1.png",
  hairlineTemples: "/assets/results/before-after-2.png",
};

// Real regulatory / membership marks.
export const accreditations = [
  { src: "/assets/accreditations/gmc.png", label: "General Medical Council" },
  { src: "/assets/accreditations/cqc.png", label: "Care Quality Commission" },
  { src: "/assets/accreditations/ishrs.png", label: "ISHRS" },
  { src: "/assets/accreditations/tiot.png", label: "Institute of Trichologists" },
  { src: "/assets/accreditations/ico.png", label: "ICO Registered" },
];

// Real press / award marks for the trust strip.
export const mediaLogos = [
  { src: "/assets/media-logos/press-2.png", alt: "Daily Mail" },
  { src: "/assets/media-logos/press-3.png", alt: "LDN Fashion" },
  { src: "/assets/media-logos/press-4.png", alt: "The Guardian" },
];

// AI imagery (Higgsfield nano_banana_pro) — detailed, skin-texture-realistic.
export const ai = {
  emotionalHook: HF + "hf_20260630_233936_21e9f321-67a4-46f5-b8c3-e1271628afb1.png",
  womanHero: HF + "hf_20260630_233940_c0a518e1-6ef7-468d-8f44-f86155c21a79.png",
  clinicInterior: HF + "hf_20260630_233942_1814ec02-7241-4fb1-99eb-beb7de66fd03.png",
  fueTechnique: HF + "hf_20260630_233944_1298a54c-01fd-4e3c-be94-be1581e71f60.png",
  densityCloseup: HF + "hf_20260630_233947_093447a4-a6d1-4f38-9a1a-b867410a1d86.png",
  patientSouthAsian: HF + "hf_20260630_233948_0f9bd282-6e09-4721-b19d-e622fe9fa6b1.png",
  patientBlonde: HF + "hf_20260630_233950_bf2f9fb4-8131-4a6f-9a9a-3379ecc9f470.png",
  patientMature: HF + "hf_20260630_233952_db26bf91-a661-4e26-967d-061f2b6c499b.png",
  aftercare: HF + "hf_20260630_233954_41d85b4a-2d3c-4e73-ae7d-af1d50d22222.png",
};

export const clinic = {
  phone: "020 3962 0303",
  phoneHref: "tel:+442039620303",
  email: "hello@fortesclinic.co.uk",
  whatsapp: "https://wa.me/442039620303",
  address: "22 Clifton Road, Little Venice, London W9 1ST",
  reviewsUrl: "https://maps.app.goo.gl/r5RWkVwTsqsCDrK56",
  rating: "4.8",
  reviewCount: "116",
};
