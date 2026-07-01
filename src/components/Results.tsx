"use client";

import Image from "next/image";
import { useState } from "react";
import { beforeAfter } from "@/lib/assets";

type Case = {
  image: string;
  photo: string;
  procedure: string;
  grafts: string;
};

const cases: Case[] = [
  {
    image: beforeAfter.frontalHairline,
    photo: "After 12 months",
    procedure: "FUE — frontal hairline restoration",
    grafts: "1,850 grafts",
  },
  {
    image: beforeAfter.hairlineTemples,
    photo: "After 14 months",
    procedure: "FUT — hairline & temple rebuild",
    grafts: "2,420 grafts",
  },
];

export default function Results() {
  const [active, setActive] = useState(0);
  const c = cases[active];

  return (
    <section id="results" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-4">Results that matter</p>
          <h2 className="h-display text-[2.2rem] lg:text-[3rem] text-ink">
            Real Women. Real Regrowth.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-8">
            <figure className="relative bg-white p-3 lg:p-4 rounded-[10px] border border-line shadow-[var(--shadow-soft)]">
              <div className="relative aspect-[580/400] overflow-hidden rounded-[6px] bg-bg-light">
                <Image
                  key={c.image}
                  src={c.image}
                  alt={`Before and after — ${c.procedure}, ${c.grafts}`}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 64vw, 100vw"
                  className="object-cover"
                />
              </div>
            </figure>
          </div>

          <div className="lg:col-span-4">
            <div className="flex gap-2 mb-6">
              {cases.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`px-4 py-2.5 text-xs tracking-[0.18em] uppercase font-bold rounded-[8px] border transition ${
                    active === i
                      ? "bg-ink text-white border-ink"
                      : "border-line text-gray hover:border-ink hover:text-ink"
                  }`}
                >
                  Case {String(i + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
            <h3 className="font-display uppercase tracking-wide text-xl text-ink mb-5">
              {c.procedure}
            </h3>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 text-sm border-t border-line pt-5">
              <dt className="text-gray">Grafts placed</dt>
              <dd className="font-semibold text-ink">{c.grafts}</dd>
              <dt className="text-gray">Photo</dt>
              <dd className="font-semibold text-ink">{c.photo}</dd>
              <dt className="text-gray">Technique</dt>
              <dd className="font-semibold text-ink">Surgeon-led, no full shave</dd>
            </dl>
            <a href="#consult" className="btn btn-ghost mt-7">
              Discuss your result
            </a>
          </div>
        </div>

        <p className="text-xs text-gray-soft leading-relaxed max-w-3xl mx-auto text-center mt-12">
          The images above are displayed with the consent of the patients. The
          outcomes shown are only relevant for these patients and do not
          necessarily reflect the results other patients may experience. Our
          team will discuss any factors that could influence the results you may
          get.
        </p>
        <p className="heading-sans text-lg lg:text-xl text-ink text-center max-w-2xl mx-auto mt-8">
          Take the first step towards feeling completely yourself again.
        </p>
        <div className="text-center mt-8">
          <a href="#consult" className="btn btn-primary">
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
