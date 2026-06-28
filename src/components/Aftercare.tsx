import Image from "next/image";
import { ai } from "@/lib/assets";

const items = [
  "Initial in-clinic post-procedure hair wash with the surgical team",
  "Premium aftercare products and clear written guidance posted home",
  "Surgeon-led clinical reviews scheduled at 6 and 12 months",
  "Direct WhatsApp line to the team throughout recovery",
  "Documented regrowth timeline so you can see your progress",
  "Long-term hair health advice tailored to your female pattern",
];

export default function Aftercare() {
  return (
    <section className="py-24 lg:py-32 bg-[--bg-cream]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="eyebrow mb-5">Aftercare, redefined</p>
            <h2 className="h-display text-[2.4rem] lg:text-[3.2rem] !leading-[1.08] mb-8 max-w-[18ch]">
              The care doesn’t end when you leave the clinic.
            </h2>
            <p className="lead mb-10 max-w-[55ch]">
              A hair transplant is a year-long process, not a single afternoon. We treat aftercare with the same precision as the procedure itself, because the result you wear is shaped just as much by what happens after.
            </p>
            <ul className="space-y-4">
              {items.map((i) => (
                <li key={i} className="flex items-start gap-4 text-[--ink-soft]">
                  <span className="mt-2 w-6 h-px bg-[--gold-dark] flex-shrink-0" />
                  <span className="text-[0.95rem] leading-relaxed">{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 grid grid-cols-2 gap-4 lg:gap-6">
            <div className="relative aspect-[3/4] overflow-hidden mt-12">
              <Image
                src={ai.handThroughHair}
                alt="Healthy hair after female hair transplant recovery"
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={ai.womanBlackPortrait}
                alt="Patient one year after female hair transplant"
                fill
                sizes="(min-width: 1024px) 30vw, 50vw"
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
