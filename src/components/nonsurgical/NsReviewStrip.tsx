"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { clinic } from "@/lib/assets";
import { reviews } from "./reviews";
import GoogleBadge, { GoogleG } from "./GoogleBadge";

/** Auto-advancing strip of the clinic's Google reviews, sitting directly under
 *  the hero. Deliberately has no section headline — the badge and the reviews
 *  carry it. */
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
          <ul className="flex gap-5 items-stretch">
            {reviews.map((r) => (
              <li
                key={r.name}
                className="flex-[0_0_86%] sm:flex-[0_0_47%] lg:flex-[0_0_32%]"
              >
                <article className="relative h-full flex flex-col rounded-[10px] border border-line bg-white p-7 shadow-[var(--shadow-soft)]">
                  <Quote
                    className="absolute top-6 right-6 w-8 h-8 text-gold/15"
                    strokeWidth={1.5}
                    aria-hidden
                  />

                  <header className="flex items-center gap-3 mb-4">
                    <span
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${r.color}`}
                      aria-hidden
                    >
                      {r.initial}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold text-ink text-[0.92rem] truncate">
                        {r.name}
                      </span>
                      <span className="block text-[0.72rem] text-gray-soft truncate">
                        {r.meta}
                      </span>
                    </span>
                  </header>

                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="flex gap-0.5" aria-label="Rated 5 out of 5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-gold-bright text-gold-bright"
                        />
                      ))}
                    </span>
                    <span className="text-[0.72rem] text-gray-soft">{r.date}</span>
                  </div>

                  <p className="flex-1 text-[0.9rem] leading-relaxed text-gray-mid line-clamp-[9]">
                    {r.body}
                  </p>

                  <footer className="flex items-center gap-2 mt-6 pt-4 border-t border-line">
                    <GoogleG className="w-4 h-4" />
                    <span className="text-[0.72rem] text-gray-soft">
                      Verified Google review
                    </span>
                  </footer>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between gap-6 mt-8">
          <div className="flex gap-1.5">
            {reviews.map((r, i) => (
              <button
                key={r.name}
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
