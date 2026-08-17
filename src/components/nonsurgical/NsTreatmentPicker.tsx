import { treatments } from "./treatments";

export default function NsTreatmentPicker() {
  return (
    <section id="treatments" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-4">Choose your treatment</p>
          <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.14] text-ink mb-4">
            Four Non-Surgical Hair Growth Treatments
          </h2>
          <p className="lead text-gray-mid">
            Each one suits a different pattern and stage of hair loss. Your
            consultation decides which — or which combination.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {treatments.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              className="group flex flex-col rounded-[10px] border border-line bg-bg-lighter p-7 shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:border-gold hover:shadow-[var(--shadow-gold)]"
            >
              <span className="font-display text-gold text-sm tracking-[0.2em]">
                {t.num}
              </span>
              <h3 className="heading-sans text-lg text-ink mt-3 mb-2">
                {t.tile.title}
              </h3>
              <p className="text-gray text-[0.9rem] leading-relaxed">
                {t.tile.blurb}
              </p>
              <span className="mt-auto pt-6 text-[0.72rem] font-ui font-bold uppercase tracking-[0.14em] text-gold group-hover:text-gold-light transition-colors">
                {t.tile.cta} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
