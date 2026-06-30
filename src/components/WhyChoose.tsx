import Image from "next/image";
import { ai } from "@/lib/assets";

const items = [
  { t: "No Full Head Shave", b: "Only a small donor area is trimmed and stays hidden beneath your own length. No dramatic change to how you look." },
  { t: "Keeps Your Existing Hair", b: "FUE and FUT are worked carefully around the hair you already have, so your everyday styling is never disrupted." },
  { t: "Natural-Looking Density", b: "Each follicle is placed to match your own growth direction, pattern and parting for a result that simply looks like you." },
  { t: "Designed for Female Patterns", b: "Diffuse thinning, a widening parting, traction alopecia and hormonal change each need their own approach. We have refined ours." },
  { t: "Precision Hairline Design", b: "Soft, age-appropriate hairlines and temples designed by hand for a feminine, undetectable finish." },
  { t: "Permanent Restoration", b: "Transplanted follicles are genetically resistant to thinning, so your new density is built to last." },
  { t: "Minimal Downtime", b: "A single calm day under local anaesthetic, with most women back to normal life within days, not weeks." },
  { t: "Local Anaesthetic Only", b: "A comfortable procedure with no general anaesthesia and no hospital stay required." },
  { t: "Suitable for All Hair Types", b: "Excellent results across straight, wavy, curly and Afro-textured hair." },
];

export default function WhyChoose() {
  return (
    <section id="techniques" className="relative py-20 lg:py-28 text-white overflow-hidden">
      <Image
        src={ai.densityCloseup}
        alt=""
        fill
        unoptimized
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/82" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow !text-gold-light mb-4">FUE &amp; FUT, tailored to women</p>
          <h2 className="h-display text-[2rem] lg:text-[2.9rem] !leading-[1.12]">
            Why Women Choose a Fortes Transplant
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="rounded-[10px] border border-white/12 bg-white/[0.04] backdrop-blur-sm p-7"
            >
              <span className="font-display text-gold-light text-sm tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="heading-sans text-lg text-white mt-3 mb-2">{it.t}</h3>
              <p className="text-white/65 text-[0.9rem] leading-relaxed">{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
