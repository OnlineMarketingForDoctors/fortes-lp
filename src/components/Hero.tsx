import { Check } from "lucide-react";
import SpinningBadge from "./SpinningBadge";
import { video } from "@/lib/assets";

const bullets = [
  "No full head shave — discreet FUE & FUT techniques keep your length",
  "Surgeon-led care from a GMC-registered specialist",
  "Natural, lasting results tailored to your hair",
  "Free, no-pressure consultation",
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end lg:items-center overflow-hidden bg-(--ink)">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src={video.hero}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80 lg:bg-gradient-to-r lg:from-black/70 lg:via-black/40 lg:to-black/20"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] w-full px-6 lg:px-12 pt-32 pb-16 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-white">
            <p className="eyebrow !text-white/80 mb-6">
              Award-Winning Hair Restoration · Central London
            </p>
            <h1 className="h-display text-[2.6rem] sm:text-[3.2rem] lg:text-[4.4rem] xl:text-[5rem] !leading-[1.02] text-white mb-8 max-w-[20ch]">
              Natural Hair Restoration,
              <br />
              <em className="italic font-light text-(--rose)">Designed for Women.</em>
            </h1>
            <p className="lead !text-white/85 max-w-xl mb-10">
              Surgeon-led female hair transplants at our private Little Venice clinic. Restore density to a thinning parting, hairline or crown using discreet techniques that keep your existing hair intact. Treatments from £1,999.
            </p>

            <ul className="space-y-3 mb-12 max-w-xl">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-white/95">
                  <span className="mt-1 flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-(--rose)/90">
                    <Check className="w-3.5 h-3.5 text-(--ink)" strokeWidth={3} />
                  </span>
                  <span className="text-[0.97rem] leading-relaxed font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <a href="#consult" className="cta-primary !bg-(--rose) !text-(--ink) !border-(--rose) hover:!bg-white hover:!border-white">
                Book Your Free Consultation
              </a>
              <a href="#results" className="cta-secondary !text-white !border-white/60 hover:!text-(--rose) hover:!border-(--rose)">
                See Real Results
              </a>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 justify-end items-center">
            <SpinningBadge size={180} className="opacity-90" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center pointer-events-none">
        <div className="text-white/60 text-[0.65rem] tracking-[0.4em] uppercase font-semibold">
          Scroll
        </div>
      </div>
    </section>
  );
}
