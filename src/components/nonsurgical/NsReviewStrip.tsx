"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviewShots, clinic } from "@/lib/assets";
import GoogleBadge, { GoogleG } from "./GoogleBadge";

/** Auto-advancing strip of real Google review screenshots, sitting directly
 *  under the hero. Deliberately has no section headline — the badge and the
 *  screenshots carry it. */
export default function NsReviewStrip() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || paused) return;
    const id = setInterval(() => emblaApi.scrollNext(), 4500);
    return () => clearInterval(id);
  }, [emblaApi, paused]);

  return (
    <section className="bg-cream border-y border-line py-12 lg:py-16">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="flex items-center justify-between gap-6 mb-8">
          <GoogleBadge />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Previous review"
              className="w-10 h-10 rounded-full border border-line bg-white text-ink flex items-center justify-center transition hover:border-gold hover:text-gold"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Next review"
              className="w-10 h-10 rounded-full border border-line bg-white text-ink flex items-center justify-center transition hover:border-gold hover:text-gold"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="flex gap-5">
            {reviewShots.map((r) => (
              <figure
                key={r.src}
                className="relative flex-[0_0_86%] sm:flex-[0_0_47%] lg:flex-[0_0_32%]
                           rounded-[10px] border border-line bg-white overflow-hidden shadow-[var(--shadow-soft)]"
              >
                <div className="relative h-[420px] overflow-hidden">
                  <Image
                    src={r.src}
                    alt={`Five-star Google review of Fortes Clinic from ${r.name}`}
                    width={760}
                    height={r.height}
                    unoptimized
                    loading="eager"
                    className="w-full h-auto"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent"
                    aria-hidden
                  />
                </div>
                <figcaption className="flex items-center gap-2 border-t border-line px-5 py-3">
                  <GoogleG className="w-4 h-4" />
                  <span className="text-[0.75rem] text-gray-soft">
                    Verified Google review
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between gap-6 mt-8">
          <div className="flex gap-1.5">
            {reviewShots.map((r, i) => (
              <button
                key={r.src}
                type="button"
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  selected === i ? "w-6 bg-gold" : "w-1.5 bg-gold/30 hover:bg-gold/60"
                }`}
              />
            ))}
          </div>
          <a
            href={clinic.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-text !text-[0.72rem]"
          >
            Read all reviews on Google →
          </a>
        </div>
      </div>
    </section>
  );
}
