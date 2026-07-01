import Image from "next/image";
import { Check } from "lucide-react";
import { video, mediaLogos } from "@/lib/assets";

const bullets = [
  "No full head shave — discreet FUE & FUT techniques keep your length",
  "Surgeon-led care from a GMC-registered specialist",
  "Natural, lasting results tailored to your hair",
  "Free, no-pressure consultation",
];

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden bg-charcoal">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video.hero}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/25"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 lg:hidden"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] w-full px-5 lg:px-8 pt-28 pb-16 lg:py-32">
        <div className="max-w-2xl text-white">
          <p className="eyebrow !text-gold-light mb-6">
            Award-Winning Hair Restoration · Central London
          </p>
          <h1 className="h-display text-[2.3rem] sm:text-[3rem] lg:text-[3.9rem] !leading-[1.1] text-white mb-7">
            Natural Hair Restoration,
            <br />
            <span className="gold-text">Designed for Women</span>
          </h1>
          <p className="lead text-white/85 max-w-xl mb-9">
            Surgeon-led female hair transplants at our private Little Venice
            clinic. Restore density to a thinning parting, hairline or crown
            using discreet techniques that keep your existing hair intact.
            Treatments from £1,999.
          </p>

          <ul className="space-y-3.5 mb-10 max-w-xl">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[linear-gradient(45deg,#b28b45,#f1c77a)]">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3.5} />
                </span>
                <span className="text-[0.98rem] leading-relaxed text-white/95 font-medium">
                  {b}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
            <a href="#consult" className="btn btn-primary">
              Book Your Free Consultation
            </a>
            <a href="#results" className="btn-text !text-white hover:!text-gold-light">
              See Real Results →
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/15">
            <p className="text-[0.62rem] uppercase tracking-[0.28em] text-white/55 mb-5">
              As featured in &amp; awarded
            </p>
            <ul className="flex flex-wrap items-center gap-x-6 lg:gap-x-8 gap-y-5">
              {mediaLogos.map((m, i) => (
                <li key={i} className="opacity-85 hover:opacity-100 transition-opacity">
                  <Image
                    src={m.src}
                    alt={m.alt}
                    width={200}
                    height={80}
                    unoptimized
                    className="h-16 lg:h-20 w-auto object-contain [filter:brightness(0)_invert(1)]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
