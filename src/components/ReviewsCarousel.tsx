"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { reviewsScreenshot } from "@/lib/assets";

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
    body: "It's been a year since my eyebrow transplant with Dr. Ahmad and his team, and I finally feel ready to share my review. I'm so happy with the results. Dr. Ahmad offered plenty of follow-up sessions to check on growth, which made me feel really supported. A year later, my eyebrows look full and natural. If you're thinking about treatment, I would 100% recommend Dr. Ahmad and his team.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    name: "Caitlin Spooner",
    initial: "C",
    date: "Recent",
    body: "I had such a good experience at Fortes Clinic. The consultation process was really straightforward and reassuring, as I got to talk directly with Dr Ahmad Saeed, rather than a sales-type person. I was kept informed about everything and didn't feel a thing. The results are amazing and I cannot wait to see the end result.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "Roby Linda",
    initial: "R",
    date: "Recent",
    body: "I'm so happy with my result. A lot of compliments from everyone about my eyebrows. Thanks Dr Ahmad. I'm really happy.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Nicola Cucciniello",
    initial: "N",
    date: "6 months ago",
    body: "From the first consultation to the day of the procedure, the whole experience was genuinely faultless. The team is professional, calm and clearly very experienced. The clinic is beautiful and the aftercare has been first-class.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    name: "Tim Z.",
    initial: "T",
    date: "8 months ago",
    body: "Six months on since my FUE hair transplant of over three thousand grafts from the back of my head to the front, I am astounded by the results. Thick natural-looking hair where I'd lost confidence for years.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    name: "Hassan Habib",
    initial: "H",
    date: "7 months ago",
    body: "Well explained about the procedure. Would definitely recommend as the whole team are amazing.",
    color: "bg-orange-100 text-orange-700",
  },
];

export default function ReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
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
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const id = setInterval(() => emblaApi.scrollNext(), 6500);
    return () => clearInterval(id);
  }, [emblaApi]);

  return (
    <section className="py-20 lg:py-28 bg-(--bg-cream-2) border-y border-(--line) relative overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
          <div>
            <p className="eyebrow mb-4">What our patients say</p>
            <h2 className="h-display text-[2.2rem] lg:text-[3rem] max-w-3xl">
              Loved by patients across London and beyond
            </h2>
          </div>

          <a
            href="https://maps.app.goo.gl/r5RWkVwTsqsCDrK56"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-5 group"
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-(--gold) text-(--gold)"
                  />
                ))}
              </div>
              <span className="font-extrabold text-2xl text-(--ink)">4.8</span>
            </div>
            <div className="text-sm font-medium text-(--muted) group-hover:text-(--ink) transition-colors">
              Based on 116+ Google reviews
              <br />
              <span className="text-(--gold-dark) underline underline-offset-4">
                Read them on Google →
              </span>
            </div>
          </a>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 lg:gap-7 -ml-6 lg:-ml-7">
            {reviews.map((r, i) => (
              <article
                key={i}
                className="flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_32%] pl-6 lg:pl-7"
              >
                <div className="bg-(--bg-cream) border border-(--line) p-8 h-full flex flex-col shadow-[0_4px_24px_-12px_rgba(31,26,20,0.15)]">
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${r.color}`}
                    >
                      {r.initial}
                    </div>
                    <div>
                      <div className="font-semibold text-(--ink) text-sm">
                        {r.name}
                      </div>
                      <div className="text-xs text-(--muted)">{r.date}</div>
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      className="ml-auto w-5 h-5"
                      aria-label="Google"
                    >
                      <path
                        fill="#4285F4"
                        d="M22.501 12.233c0-.819-.073-1.605-.21-2.359H12.214v4.464h5.78a4.94 4.94 0 01-2.143 3.241v2.696h3.466c2.027-1.867 3.184-4.617 3.184-8.042z"
                      />
                      <path
                        fill="#34A853"
                        d="M12.214 22.5c2.892 0 5.317-.96 7.103-2.6l-3.466-2.696c-.96.645-2.193 1.026-3.637 1.026-2.796 0-5.165-1.888-6.011-4.423H2.622v2.78A10.5 10.5 0 0012.214 22.5z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M6.203 13.807a6.31 6.31 0 010-4.014v-2.78H2.622a10.5 10.5 0 000 9.574l3.581-2.78z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12.214 5.37c1.573 0 2.985.541 4.095 1.602l3.073-3.073C17.527 2.207 15.102 1.25 12.214 1.25a10.5 10.5 0 00-9.592 5.763l3.58 2.78c.847-2.536 3.216-4.423 6.012-4.423z"
                      />
                    </svg>
                  </div>
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-(--gold) text-(--gold)"
                      />
                    ))}
                  </div>
                  <p className="text-(--ink-soft) text-[0.95rem] leading-relaxed line-clamp-7 flex-1">
                    “{r.body}”
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            className="w-11 h-11 rounded-full border border-(--ink) flex items-center justify-center text-(--ink) hover:bg-(--ink) hover:text-(--bg-cream) transition disabled:opacity-30"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            className="w-11 h-11 rounded-full border border-(--ink) flex items-center justify-center text-(--ink) hover:bg-(--ink) hover:text-(--bg-cream) transition disabled:opacity-30"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-16 lg:mt-20 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Straight from Google</p>
            <h3 className="h-display text-[1.7rem] lg:text-[2.2rem] !leading-[1.12] mb-4">
              Unedited, and easy to verify.
            </h3>
            <p className="lead max-w-[44ch]">
              We don’t cherry-pick. Every review above is public on our Google
              Business profile — here’s the live snapshot, exactly as you’ll find
              it.
            </p>
            <a
              href="https://maps.app.goo.gl/r5RWkVwTsqsCDrK56"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary mt-7"
            >
              Verify on Google
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white p-2.5 lg:p-3 border border-(--line) shadow-[0_30px_60px_-30px_rgba(31,26,20,0.35)]">
              <Image
                src={reviewsScreenshot}
                alt="Screenshot of Fortes Clinic’s verified Google reviews"
                width={1466}
                height={864}
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
