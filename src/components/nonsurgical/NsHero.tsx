import Image from "next/image";
import { Check } from "lucide-react";
import { video, mediaLogos } from "@/lib/assets";

const bullets = [
  "Assessment and treatment with a GMC-registered doctor — no salespeople, ever",
  "PRP, PRF, exosome therapy and Regenera Activa all under one roof",
  "No surgery, no stitches, no visible downtime — most people return to work the same day",
  "For men and women, including diffuse and female-pattern thinning",
];

const stats = [
  { k: "60 minutes", v: "Typical in-clinic session" },
  { k: "Same day", v: "Back to normal activity" },
  { k: "Men & women", v: "Including diffuse thinning" },
  { k: "Doctor-led", v: "Assessment and treatment" },
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
        className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/70 to-black/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/45 lg:hidden"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] w-full px-5 lg:px-8 pt-28 pb-16 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7 text-white">
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

            <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
              <a href="#consult" className="btn btn-primary">
                Book Your Free Consultation
              </a>
              <a href="#treatments" className="btn-text !text-white hover:!text-gold-light">
                Compare the Four Treatments →
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
                      className="h-14 lg:h-16 w-auto object-contain [filter:brightness(0)_invert(1)]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-[12px] border border-gold/30 bg-white/[0.06] backdrop-blur-sm p-7 lg:p-9 shadow-[var(--shadow-soft)]">
              <p className="eyebrow !text-gold-light mb-4">Start here</p>
              <h2 className="h-display text-[1.5rem] lg:text-[1.9rem] !leading-[1.15] text-white mb-5">
                Not Sure Which Treatment You Need?
              </h2>
              <p className="text-white/75 text-[0.95rem] leading-relaxed">
                That is the normal starting point. Very few people arrive knowing
                whether they need PRP, PRF, exosomes or Regenera Activa — and the
                honest answer depends on the cause and stage of your hair loss,
                not on which treatment is newest.
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div
                    key={s.k}
                    className="rounded-[10px] border border-white/12 bg-white/[0.05] px-4 py-3.5"
                  >
                    <dt className="font-heading font-black text-gold-light text-[0.95rem] tracking-tight">
                      {s.k}
                    </dt>
                    <dd className="text-white/65 text-[0.78rem] leading-snug mt-0.5">
                      {s.v}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="text-white/50 text-[0.75rem] mt-7">
                Free consultation · CQC-registered · ISHRS member
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
