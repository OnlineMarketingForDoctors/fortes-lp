import Image from "next/image";
import { treatments } from "./treatments";

/**
 * Published starting prices. `from` is intentionally null until the clinic
 * confirms its figures — a null renders "On consultation" rather than a
 * placeholder that could go live looking unfinished.
 */
const prices: { id: string; name: string; from: string | null; note: string }[] = [
  {
    id: "prp",
    name: "PRP Hair Treatment",
    from: null,
    note: "Per session, normally a course of three. Written quote for the full course at consultation.",
  },
  {
    id: "prf",
    name: "PRF Hair Treatment",
    from: null,
    note: "Per session. Platelet rich fibrin course pricing confirmed at consultation.",
  },
  {
    id: "exosomes",
    name: "Exosome Hair Therapy",
    from: null,
    note: "Per session. Exosome treatment course pricing confirmed at consultation.",
  },
  {
    id: "regenera",
    name: "Regenera Activa",
    from: null,
    note: "Single session rather than a course. Price confirmed at consultation.",
  },
];

const icons = Object.fromEntries(treatments.map((t) => [t.id, t.icon]));

export default function NsPricing() {
  return (
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">Pricing</p>
              <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.14] text-ink mb-6">
                PRP Hair Treatment Cost &amp; Course Pricing
              </h2>
              <p className="lead text-gray-mid max-w-[46ch] mb-8">
                What a PRP hair treatment costs depends on how many sessions you
                need, which is decided at your assessment rather than before it.
                Your consultation is free, and you will have a written quote
                before you commit to anything.
              </p>
              <div className="rounded-[10px] bg-charcoal text-white/80 p-7">
                <p className="text-[0.93rem] leading-relaxed">
                  <span className="text-gold-light font-semibold">
                    Why we quote at consultation.
                  </span>{" "}
                  The cost that matters is the cost of a full course, not a
                  single session, and it varies with how many areas are being
                  treated. Rather than publish a figure that changes the moment
                  we assess you, we give you a written quote covering the whole
                  course, including whether we think a course is worth doing at
                  all.
                </p>
              </div>
              <a href="#consult" className="btn btn-primary mt-8">
                Get a Personalised Quote
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="border-t border-line">
              {prices.map((p) => (
                <li
                  key={p.id}
                  className="flex items-center gap-5 sm:gap-7 border-b border-line py-6"
                >
                  <span className="relative w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded-[8px] overflow-hidden ring-1 ring-black/5">
                    <Image
                      src={icons[p.id]}
                      alt=""
                      fill
                      unoptimized
                      sizes="80px"
                      className="object-cover"
                      aria-hidden
                    />
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="block heading-sans text-[1.02rem] text-ink mb-1">
                      {p.name}
                    </span>
                    <span className="block text-gray text-[0.86rem] leading-relaxed">
                      {p.note}
                    </span>
                  </span>
                  <span className="font-display uppercase tracking-[0.06em] text-[0.95rem] sm:text-[1.15rem] text-gold text-right flex-shrink-0 max-w-[7.5rem]">
                    {p.from ? `From ${p.from}` : "On consultation"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
