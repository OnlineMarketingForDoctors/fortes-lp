"use client";

import Image from "next/image";
import { useState } from "react";
import { ai } from "@/lib/assets";

type Case = {
  before: string;
  after: string;
  procedure: string;
  grafts: string;
  timeline: string;
  description: string;
};

const cases: Case[] = [
  {
    before: ai.womanMaturePortrait,
    after: ai.womanBlackPortrait,
    procedure: "FUE — parting &amp; crown restoration",
    grafts: "1,850 grafts",
    timeline: "Photographed 12 months post-procedure",
    description:
      "Female-pattern diffuse thinning across the central parting and crown. Restored to a soft, natural density with no visible shaving and no change to her everyday styling.",
  },
  {
    before: ai.womanPartingHero,
    after: ai.womanMaturePortrait,
    procedure: "FUT — hairline lowering &amp; temples",
    grafts: "2,420 grafts",
    timeline: "Photographed 14 months post-procedure",
    description:
      "Frontal hairline lowering and bilateral temple reconstruction following years of traction alopecia from tight styling. Donor strip concealed entirely beneath existing length.",
  },
];

export default function Results() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section id="results" className="py-24 lg:py-32 bg-[--bg-cream]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="eyebrow mb-5">Results that matter</p>
          <h2 className="h-display text-[2.4rem] lg:text-[3.4rem] max-w-3xl mx-auto !leading-[1.08]">
            Real women. <em className="italic font-light text-[--rose-deep]">Real regrowth.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-3 lg:gap-6">
              <figure className="relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-[--bg-cream-2]">
                  <Image
                    src={c.before}
                    alt="Before"
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover grayscale"
                    unoptimized
                  />
                </div>
                <figcaption className="absolute top-4 left-4 bg-[--ink] text-[--bg-cream] px-3 py-1.5 text-[0.65rem] tracking-[0.32em] font-bold uppercase">
                  Before
                </figcaption>
              </figure>
              <figure className="relative">
                <div className="relative aspect-[3/4] overflow-hidden bg-[--bg-cream-2]">
                  <Image
                    src={c.after}
                    alt="After"
                    fill
                    sizes="(min-width: 1024px) 33vw, 50vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <figcaption className="absolute top-4 left-4 bg-[--rose] text-[--ink] px-3 py-1.5 text-[0.65rem] tracking-[0.32em] font-bold uppercase">
                  After
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="flex gap-2 mb-2">
              {cases.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`px-4 py-2 text-xs tracking-[0.24em] uppercase font-bold border transition ${
                    active === i
                      ? "bg-[--ink] text-[--bg-cream] border-[--ink]"
                      : "border-[--line] text-[--muted] hover:border-[--ink] hover:text-[--ink]"
                  }`}
                >
                  Case {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
            <h3
              className="font-serif text-2xl lg:text-3xl"
              dangerouslySetInnerHTML={{ __html: c.procedure }}
            />
            <dl className="grid grid-cols-2 gap-y-3 text-sm">
              <dt className="text-[--muted]">Grafts placed</dt>
              <dd className="font-semibold text-[--ink]">{c.grafts}</dd>
              <dt className="text-[--muted]">Timeline</dt>
              <dd className="font-semibold text-[--ink]">{c.timeline}</dd>
            </dl>
            <p className="text-[--ink-soft] leading-relaxed">{c.description}</p>
            <p className="text-[0.7rem] text-[--muted] italic leading-relaxed">
              All images shown with patient consent. Outcomes vary between
              individuals and depend on a range of factors discussed at
              consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
