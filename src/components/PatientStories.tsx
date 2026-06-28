"use client";

import Image from "next/image";
import { useState } from "react";
import { Quote } from "lucide-react";
import { ai } from "@/lib/assets";

type Story = {
  image: string;
  quote: string;
  name: string;
  detail: string;
};

const stories: Story[] = [
  {
    image: ai.womanSouthAsian,
    quote:
      "I spent three years researching, second-guessing, hiding behind a parting. The day I walked into Fortes Clinic for my consultation, Dr Saeed talked to me as a woman, not a case study. I’m fourteen months in and I no longer think about my hair before I leave the house.",
    name: "Priya, 42",
    detail: "FUE for parting &amp; crown · 1,950 grafts · London",
  },
  {
    image: ai.womanBlondeWindow,
    quote:
      "I’d worn extensions for so long that the traction damage at my temples was permanent, or so I’d been told. The team didn’t promise miracles. They explained exactly what they could do, and that’s exactly what they delivered. Quiet, professional, no fuss.",
    name: "Sophie, 36",
    detail: "FUT for hairline &amp; temples · 2,420 grafts · Surrey",
  },
  {
    image: ai.womanMaturePortrait,
    quote:
      "At fifty-three I thought I was past the point of doing anything about it. Dr Saeed showed me that with female-pattern thinning, there was still very much something he could do. The result is mine. It looks like mine. That’s exactly what I wanted.",
    name: "Margaret, 53",
    detail: "FUE for diffuse thinning · 1,680 grafts · Buckinghamshire",
  },
];

export default function PatientStories() {
  const [active, setActive] = useState(0);
  const s = stories[active];

  return (
    <section className="py-24 lg:py-32 bg-[--bg-cream-2] relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-[0.06]" aria-hidden />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="eyebrow mb-5">Voices from our patients</p>
          <h2 className="h-display text-[2.4rem] lg:text-[3.4rem] max-w-3xl mx-auto !leading-[1.08]">
            What it’s like to be a <em className="italic font-light text-[--rose-deep]">Fortes</em> patient.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={s.image}
                alt={s.name}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <Quote className="w-12 h-12 text-[--rose] mb-6" strokeWidth={1} />
            <blockquote className="font-serif text-[1.6rem] lg:text-[2.1rem] leading-[1.3] text-[--ink] mb-8">
              “{s.quote}”
            </blockquote>
            <div className="mb-10">
              <p className="font-semibold text-[--ink]">{s.name}</p>
              <p
                className="text-sm text-[--muted] mt-1"
                dangerouslySetInnerHTML={{ __html: s.detail }}
              />
            </div>

            <div className="flex gap-3">
              {stories.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-1 transition-all ${
                    active === i
                      ? "bg-[--ink] w-12"
                      : "bg-[--ink]/20 w-8 hover:bg-[--ink]/40"
                  }`}
                  aria-label={`Story ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
