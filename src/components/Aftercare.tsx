import Image from "next/image";
import { Check } from "lucide-react";
import { ai, photos } from "@/lib/assets";

const items = [
  "Your first post-procedure hair wash performed in clinic to support optimal healing",
  "A premium aftercare package with clear, written clinical guidance posted to you",
  "Surgeon-led clinical reviews scheduled at 6 and 12 months to monitor your progress",
  "A direct line to our team for reassurance throughout your recovery",
  "A documented regrowth timeline so you can see your progress month by month",
  "Visible results typically begin at 4 to 6 months, with full outcomes by 12 months",
];

export default function Aftercare() {
  return (
    <section className="bg-brand-dark py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <p className="eyebrow !text-gold-light mb-4">Aftercare, redefined</p>
            <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.12] mb-7 max-w-[18ch]">
              Care That Continues Long After You Leave
            </h2>
            <p className="lead text-white/70 max-w-[55ch] mb-9">
              A hair transplant is a year-long process, not a single afternoon.
              We treat aftercare with the same precision as the procedure itself,
              because the result you wear is shaped just as much by what happens
              next.
            </p>
            <ul className="space-y-4">
              {items.map((i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[linear-gradient(45deg,#b28b45,#f1c77a)] flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-white/80 text-[0.95rem] leading-relaxed">{i}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden ring-1 ring-white/10 shadow-[var(--shadow-soft)] mt-8">
                <Image src={ai.densityCloseup} alt="Healthy, dense restored hair" fill unoptimized sizes="22vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden ring-1 ring-white/10 shadow-[var(--shadow-soft)]">
                <Image src={ai.patientMature} alt="A patient one year after her transplant" fill unoptimized sizes="22vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden ring-1 ring-white/10 shadow-[var(--shadow-soft)]">
                <Image src={photos.femalePattern} alt="Trichology assessment of female hair loss" fill unoptimized sizes="22vw" className="object-cover" />
              </div>
              <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden ring-1 ring-white/10 shadow-[var(--shadow-soft)] -mt-8">
                <Image src={ai.clinicInterior} alt="The Fortes aftercare suite" fill unoptimized sizes="22vw" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
