import Image from "next/image";
import { treatments, type Treatment } from "./treatments";

export default function NsTreatments() {
  return (
    <>
      {treatments.map((t, i) => (
        <TreatmentBlock key={t.id} treatment={t} flipped={i % 2 === 1} />
      ))}
    </>
  );
}

function TreatmentBlock({
  treatment: t,
  flipped,
}: {
  treatment: Treatment;
  flipped: boolean;
}) {
  return (
    <section
      id={t.id}
      className={`py-20 lg:py-28 ${flipped ? "bg-cream" : "bg-white"}`}
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Copy */}
          <div className={`lg:col-span-7 ${flipped ? "lg:order-2" : ""}`}>
            <p className="eyebrow mb-4">{t.eyebrow}</p>
            <h2 className="h-display text-[1.9rem] lg:text-[2.6rem] !leading-[1.14] text-ink mb-7">
              {t.title}
            </h2>
            <div className="space-y-5 lead text-gray-mid max-w-[64ch]">
              {t.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>

            {t.callout && (
              <div className="mt-8 rounded-[10px] bg-charcoal text-white/80 p-6 lg:p-7">
                <p className="text-[0.95rem] leading-relaxed">
                  <span className="text-gold-light font-semibold">
                    {t.callout.lead}
                  </span>{" "}
                  {t.callout.body}
                </p>
              </div>
            )}

            <ul className="mt-9 space-y-3.5">
              {t.benefits.map((b) => (
                <li key={b.lead} className="flex items-start gap-3">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-[0.95rem] leading-relaxed text-ink/80">
                    <span className="font-semibold text-ink">{b.lead}</span>: {b.rest}
                  </span>
                </li>
              ))}
            </ul>

            <ul className="mt-8 flex flex-wrap gap-2.5">
              {t.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line bg-white px-4 py-1.5 text-[0.78rem] text-gray-mid"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <a href="#consult" className="btn btn-ghost mt-9">
              Ask about {t.tile.title}
            </a>
          </div>

          {/* At a glance */}
          <aside className={`lg:col-span-5 ${flipped ? "lg:order-1" : ""}`}>
            <div className="lg:sticky lg:top-28 rounded-[12px] border border-line bg-white overflow-hidden shadow-[var(--shadow-soft)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={t.image}
                  alt={t.imageAlt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <p className="eyebrow mb-5">At a glance</p>
                <dl className="divide-y divide-line">
                  {t.spec.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-baseline justify-between gap-6 py-3"
                    >
                      <dt className="text-gray text-[0.88rem]">{s.label}</dt>
                      <dd className="text-ink font-semibold text-[0.88rem] text-right">
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
