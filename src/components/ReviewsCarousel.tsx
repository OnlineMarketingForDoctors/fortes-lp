"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { clinic } from "@/lib/assets";

type Review = {
  name: string;
  initial: string;
  date: string;
  body: string;
  color: string;
};

const reviews: Review[] = [
  {
    name: "Ibtissam Lafrid",
    initial: "I",
    date: "5 months ago",
    body: "It's been a year since my eyebrow transplant with Dr. Ahmad and his team, and I finally feel ready to share my review! Honestly, I'm so happy with the results. Dr. Ahmad offered plenty of follow-up sessions to check on the growth, which made me feel really supported throughout. At first, the growth was slow, but now, a year later, my eyebrows look full and natural. The difference is huge compared to before! If you're thinking about getting an eyebrow transplant, I would 100% recommend Dr. Ahmad and his team.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    name: "Caitlin Spooner",
    initial: "C",
    date: "4 years ago",
    body: "I had such a good experience at Fortes Clinic. The consultation process was really straightforward and reassuring, as I got to talk directly with Dr Ahmad Saeed, rather than a sales type person. I had my eyebrow transplant today and it was fantastic. I was kept informed about everything and didn't feel a thing. The results are amazing, I'm very happy with my eyebrows and cannot wait to see the end results!",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Roby Linda",
    initial: "R",
    date: "2 years ago",
    body: "Am so happy for my result. A lot of compliments from everyone about my eyebrows, thanks Ahmed. I'm really happy with my results.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    name: "Nicola Cucciniello",
    initial: "N",
    date: "6 months ago",
    body: "From the first consultation to the day of the procedure, the whole experience was genuinely faultless. The team is professional, calm and clearly very experienced. The clinic is beautiful and the aftercare has been first-class.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Hassan Habib",
    initial: "H",
    date: "7 months ago",
    body: "Everything was well explained about the procedure from start to finish. Would definitely recommend, the whole team are amazing and made me feel completely at ease.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Tim Z.",
    initial: "T",
    date: "8 months ago",
    body: "Amazing clinic. The team are all super professional and Dr Ahmad Saeed is the best. The results speak for themselves and the care throughout was outstanding.",
    color: "bg-orange-100 text-orange-700",
  },
];

export default function ReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section id="reviews" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">
          <a
            href={clinic.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 group"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-4xl text-ink">{clinic.rating}</span>
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-bright text-gold-bright" />
                  ))}
                </span>
              </div>
              <p className="text-sm text-gray mt-1 group-hover:text-ink transition-colors">
                Based on {clinic.reviewCount}+ Google reviews ·{" "}
                <span className="text-gold underline underline-offset-4">review us on Google</span>
              </p>
            </div>
          </a>
          <div>
            <p className="eyebrow mb-2">Loved by women across London</p>
            <h2 className="h-display text-2xl lg:text-[2rem] text-ink">
              Real stories, real confidence
            </h2>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 -ml-6">
            {reviews.map((r, i) => (
              <article key={i} className="flex-[0_0_88%] sm:flex-[0_0_46%] lg:flex-[0_0_32%] pl-6">
                <ReviewCard review={r} />
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-9">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous"
            className="w-11 h-11 rounded-full border border-ink/30 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition disabled:opacity-30"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Next"
            className="w-11 h-11 rounded-full border border-ink/30 flex items-center justify-center text-ink hover:bg-ink hover:text-white transition disabled:opacity-30"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function ReviewCard({ review: r }: { review: Review }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = r.body.length > 170;

  return (
    <div className="bg-bg-lighter border border-line rounded-[10px] p-7 h-full flex flex-col shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold ${r.color}`}>
          {r.initial}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-ink text-sm">{r.name}</div>
          <div className="text-xs text-gray-soft">{r.date}</div>
        </div>
        <GoogleG />
      </div>
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, s) => (
          <Star key={s} className="w-4 h-4 fill-gold-bright text-gold-bright" />
        ))}
      </div>
      <p
        className={`text-[0.93rem] leading-relaxed text-gray-mid ${
          !expanded && isLong ? "line-clamp-4" : ""
        }`}
      >
        “{r.body}”
      </p>
      <span className="flex-1" aria-hidden="true" />
      {isLong && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 self-start text-[0.72rem] font-ui font-bold uppercase tracking-[0.14em] text-gold hover:text-gold-light transition-colors"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
      <path fill="#4285F4" d="M22.5 12.2c0-.8-.07-1.6-.2-2.36H12.2v4.46h5.78a4.94 4.94 0 01-2.14 3.24v2.7h3.46c2.03-1.87 3.2-4.62 3.2-8.04z" />
      <path fill="#34A853" d="M12.2 22.5c2.9 0 5.32-.96 7.1-2.6l-3.46-2.7c-.96.65-2.2 1.03-3.64 1.03-2.8 0-5.16-1.89-6.01-4.42H2.62v2.78A10.5 10.5 0 0012.2 22.5z" />
      <path fill="#FBBC05" d="M6.2 13.81a6.3 6.3 0 010-4.02V7.01H2.62a10.5 10.5 0 000 9.58l3.58-2.78z" />
      <path fill="#EA4335" d="M12.2 5.37c1.57 0 2.99.54 4.1 1.6l3.07-3.07C17.53 2.2 15.1 1.25 12.2 1.25a10.5 10.5 0 00-9.59 5.76l3.58 2.78c.85-2.53 3.22-4.42 6.01-4.42z" />
    </svg>
  );
}
