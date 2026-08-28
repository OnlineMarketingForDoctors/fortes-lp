import Image from "next/image";
import { Check } from "lucide-react";
import { video, mediaLogos } from "@/lib/assets";

const bullets = [
  "Doctor-led throughout, never a salesperson",
  "PRP, PRF, exosomes and Regenera Activa under one roof",
  "No surgery, no stitches, no downtime",
  "For men and women, including diffuse thinning",
];

/**
 * One film, two presentations. From lg up it is the full-bleed background it
 * has always been, under the usual dark overlay. Below lg it drops into the
 * flow between the headline and the body copy, where it is actually visible on
 * a phone, and the section falls back to a grey-to-gold gradient.
 *
 * The copy is split either side of the film so a single <video> can serve both
 * layouts; from lg up the two halves sit flush and read as one column.
 */
export default function NsHero() {
  return (
    <section
      className="relative overflow-hidden lg:min-h-[100svh] lg:flex lg:flex-col lg:justify-center lg:py-32
                 bg-[linear-gradient(140deg,#23272a_0%,#33383c_45%,#6b5730_80%,#b28b45_100%)]
                 lg:bg-none lg:bg-charcoal"
    >
      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-5 lg:px-8 pt-28 lg:pt-0 text-white">
        <div className="lg:max-w-none">
          <p className="eyebrow !text-gold-light mb-6">
            PRP · PRF · Exosomes · Regenera Activa
          </p>
          {/* Two fixed lines from lg up: the condition, then the offer. */}
          <h1 className="h-display text-[2rem] sm:text-[2.5rem] lg:text-[2.75rem] xl:text-[3.1rem] !leading-[1.12] text-white">
            Non-Surgical Hair Loss
            <br />
            Treatment in <span className="gold-text">London</span>
          </h1>
        </div>
      </div>

      {/* In flow on a phone; the section background from lg up */}
      <div className="mx-auto max-w-[1280px] w-full px-5 my-8 lg:absolute lg:inset-0 lg:z-0 lg:m-0 lg:max-w-none lg:px-0">
        <div className="relative aspect-video w-full overflow-hidden rounded-[12px] bg-charcoal ring-1 ring-white/15 shadow-[var(--shadow-soft)] lg:h-full lg:aspect-auto lg:rounded-none lg:ring-0 lg:shadow-none">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={video.hero}
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />
        </div>
      </div>

      <div
        className="hidden lg:block absolute inset-0 z-[1] bg-gradient-to-r from-black/90 via-black/55 to-black/10"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1280px] w-full px-5 lg:px-8 pb-16 lg:pb-0 lg:pt-9 text-white">
        <div className="lg:max-w-3xl">
          <p className="lead text-white/85 max-w-xl mb-9">
            Four doctor-led treatments for thinning hair, without surgery and
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

          <a href="#consult" className="btn btn-primary">
            Book Your Free Consultation
          </a>

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
                    className="h-[4.5rem] lg:h-[5.25rem] w-auto object-contain [filter:brightness(0)_invert(1)]"
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
