import Image from "next/image";
import { Camera } from "lucide-react";

/**
 * Consented before/after photography from non-surgical treatment.
 * The clinic's existing library is surgical (hair transplant) work, which must
 * not be shown as a non-surgical outcome — so this stays empty until PRP / PRF /
 * exosome / Regenera photography is supplied, and the section renders labelled
 * slots in the meantime.
 */
const results: { image: string; treatment: string; detail: string }[] = [];

const slots = [
  "PRP · course of 3 sessions",
  "PRF · course discussed at consultation",
  "Exosome therapy · 12-month review",
  "Regenera Activa · single session",
];

export default function NsResults() {
  return (
    <section id="results" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-4">Results</p>
          <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.14] text-ink mb-4">
            Patient Results
          </h2>
          <p className="lead text-gray-mid">
            Consented before-and-after photography from non-surgical hair loss
            treatment at Fortes Clinic, taken under standardised lighting at
            review appointments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.length > 0
            ? results.map((r) => (
                <figure
                  key={r.image}
                  className="rounded-[10px] border border-line bg-white overflow-hidden shadow-[var(--shadow-soft)]"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={r.image}
                      alt={`Before and after — ${r.treatment}, ${r.detail}`}
                      fill
                      unoptimized
                      sizes="(min-width: 1024px) 24vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-5">
                    <p className="heading-sans text-[0.95rem] text-ink">
                      {r.treatment}
                    </p>
                    <p className="text-gray text-[0.85rem] mt-1">{r.detail}</p>
                  </figcaption>
                </figure>
              ))
            : slots.map((s) => (
                <div
                  key={s}
                  className="flex flex-col items-center justify-center text-center rounded-[10px] border border-dashed border-gold/45 bg-white aspect-[4/5] p-6"
                >
                  <Camera className="w-7 h-7 text-gold mb-4" strokeWidth={1.6} />
                  <p className="eyebrow mb-2">Photography to follow</p>
                  <p className="text-gray text-[0.85rem] leading-relaxed">{s}</p>
                </div>
              ))}
        </div>

        <p className="text-xs text-gray-soft leading-relaxed max-w-3xl mx-auto text-center mt-10">
          Images are displayed with the consent of the patients. The outcomes
          shown are only relevant for those patients and do not necessarily
          reflect the results other patients may experience. Our team will
          discuss any factors that could influence the results you may get.
        </p>

        <div className="text-center mt-9">
          <a href="#consult" className="btn btn-primary">
            Book Your Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
