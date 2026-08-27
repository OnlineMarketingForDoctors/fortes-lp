import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { treatments } from "./treatments";

/** Editorial index of the four treatments — numbered rows rather than a card
 *  grid, each row previewing its own photography on hover. */
export default function NsTreatmentPicker() {
  return (
    <section id="treatments" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-4">Choose your treatment</p>
            <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.14] text-ink">
              Four Non-Surgical Hair Growth Treatments
            </h2>
          </div>
          <p className="lg:col-span-5 lead text-gray-mid">
            Each one suits a different pattern and stage of hair loss. Your
            consultation decides which, or which combination.
          </p>
        </div>

        <ol className="border-t border-gold/25">
          {treatments.map((t) => (
            <li key={t.id} className="border-b border-gold/25">
              <a
                href={`#${t.id}`}
                className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_1.1fr_1.4fr_auto] items-center gap-x-5 sm:gap-x-8 gap-y-3 py-7 lg:py-8 transition-colors"
              >
                <span className="font-display text-gold text-sm tracking-[0.24em] self-start sm:self-center pt-1 sm:pt-0">
                  {t.num}
                </span>

                <span className="min-w-0">
                  <span className="block h-display text-[1.35rem] lg:text-[1.75rem] !leading-[1.15] text-ink transition-colors group-hover:text-gold">
                    {t.tile.title}
                  </span>
                  <span className="mt-2 block text-[0.78rem] font-ui font-semibold uppercase tracking-[0.14em] text-gold/80">
                    {t.tile.cta}
                  </span>
                </span>

                <span className="col-span-3 sm:col-span-1 flex items-center gap-6">
                  <span className="relative w-24 h-20 lg:w-36 lg:h-24 flex-shrink-0 overflow-hidden rounded-[8px] ring-1 ring-black/5">
                    <Image
                      src={t.image}
                      alt=""
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 144px, 96px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      aria-hidden
                    />
                  </span>
                  <span className="text-gray text-[0.9rem] leading-relaxed">
                    {t.tile.blurb}
                  </span>
                </span>

                <span className="hidden sm:flex w-11 h-11 flex-shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold transition-all group-hover:bg-gold group-hover:text-white group-hover:border-gold">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.2} />
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
