"use client";

import Image from "next/image";
import { useState } from "react";
import { beforeAfter } from "@/lib/assets";
import Reveal from "./Reveal";

type Case = {
  image: string;
  procedure: string;
  grafts: string;
  timeline: string;
  description: string;
};

const cases: Case[] = [
  {
    image: beforeAfter.frontalHairline,
    procedure: "FUE — frontal hairline restoration",
    grafts: "1,850 grafts",
    timeline: "Photographed 12 months post-procedure",
    description:
      "A receded frontal hairline rebuilt and gently lowered. The new hairline is mapped by hand at consultation, then rebuilt follicle by follicle to follow her natural growth direction — full at the front, soft at the edges.",
  },
  {
    image: beforeAfter.hairlineTemples,
    procedure: "FUT — hairline & temple rebuild",
    grafts: "2,420 grafts",
    timeline: "Photographed 14 months post-procedure",
    description:
      "Years of tight styling had thinned the hairline and hollowed the temples. Density was restored across both, with the donor strip concealed entirely beneath her existing length — no visible shave, no change to how she wears her hair.",
  },
];

export default function Results() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section id="results" className="py-24 lg:py-32 bg-(--bg-cream)">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal className="text-center mb-16">
          <p className="eyebrow mb-5">Results that matter</p>
          <h2 className="h-display text-[2.4rem] lg:text-[3.4rem] max-w-3xl mx-auto !leading-[1.08]">
            Real women.{" "}
            <em className="italic font-light text-(--rose-deep)">Real regrowth.</em>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-8">
            <figure className="relative bg-white p-3 lg:p-4 border border-(--line) shadow-[0_30px_60px_-30px_rgba(31,26,20,0.35)]">
              <div className="relative aspect-[580/400] overflow-hidden bg-(--bg-cream-2)">
                <Image
                  key={c.image}
                  src={c.image}
                  alt={`Before and after — ${c.procedure}, ${c.grafts}`}
                  fill
                  sizes="(min-width: 1024px) 64vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
            <p className="mt-4 text-[0.7rem] tracking-[0.18em] uppercase text-(--muted) text-center">
              Actual Fortes Clinic patient · shown with consent
            </p>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="flex gap-2">
              {cases.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`px-4 py-2 text-xs tracking-[0.24em] uppercase font-bold border transition ${
                    active === i
                      ? "bg-(--ink) text-(--bg-cream) border-(--ink)"
                      : "border-(--line) text-(--muted) hover:border-(--ink) hover:text-(--ink)"
                  }`}
                >
                  Case {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
            <h3 className="font-serif text-2xl lg:text-3xl">{c.procedure}</h3>
            <dl className="grid grid-cols-2 gap-y-3 text-sm border-t border-(--line) pt-5">
              <dt className="text-(--muted)">Grafts placed</dt>
              <dd className="font-semibold text-(--ink)">{c.grafts}</dd>
              <dt className="text-(--muted)">Timeline</dt>
              <dd className="font-semibold text-(--ink)">{c.timeline}</dd>
            </dl>
            <p className="text-(--ink-soft) leading-relaxed">{c.description}</p>
            <p className="text-[0.7rem] text-(--muted) italic leading-relaxed">
              All images shown with patient consent. Outcomes vary between
              individuals and depend on a range of factors discussed at
              consultation.
            </p>
            <a href="#consult" className="cta-secondary">
              Discuss your result
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
