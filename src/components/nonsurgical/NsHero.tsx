import Image from "next/image";
import { Check } from "lucide-react";
import { video, mediaLogos } from "@/lib/assets";
import GoogleBadge from "./GoogleBadge";

const bullets = [
  "Doctor-led throughout — never a salesperson",
  "PRP, PRF, exosomes and Regenera Activa under one roof",
  "No surgery, no stitches, no downtime",
  "For men and women, including diffuse thinning",
];

export default function NsHero() {
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
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-black/10"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/45 lg:hidden"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] w-full px-5 lg:px-8 pt-28 pb-16 lg:py-32">
        <div className="max-w-3xl text-white">
          <p className="eyebrow !text-gold-light mb-6">
            PRP · PRF · Exosomes · Regenera Activa
          </p>
          <h1 className="h-display text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem] !leading-[1.1] text-white mb-7">
            Non-Surgical Hair Loss
            <br />
            Treatment in <span className="gold-text">London</span>
          </h1>
          <p className="lead text-white/85 max-w-xl mb-9">
            Four doctor-led treatments for thinning hair — without surgery and
            without downtime. Your consultation starts with finding out what is
            actually causing your hair loss, then choosing the treatment that
            fits it.
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

          <div className="flex flex-wrap items-center gap-5">
            <a href="#consult" className="btn btn-primary">
              Book Your Free Consultation
            </a>
            <GoogleBadge dark />
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
                    className="h-12 lg:h-14 w-auto object-contain [filter:brightness(0)_invert(1)]"
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
