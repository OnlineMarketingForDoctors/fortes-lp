/**
 * Published starting prices. `from` is intentionally null until the clinic
 * confirms its figures — a null renders "On consultation" rather than a
 * placeholder that could go live looking unfinished.
 */
const prices: { name: string; from: string | null; note: string }[] = [
  {
    name: "PRP Hair Treatment",
    from: null,
    note: "Per session, normally a course of three. Written quote for the full course at consultation.",
  },
  {
    name: "PRF Hair Treatment",
    from: null,
    note: "Per session. Platelet rich fibrin course pricing confirmed at consultation.",
  },
  {
    name: "Exosome Hair Therapy",
    from: null,
    note: "Per session. Exosome treatment course pricing confirmed at consultation.",
  },
  {
    name: "Regenera Activa",
    from: null,
    note: "Single session rather than a course. Price confirmed at consultation.",
  },
];

export default function NsPricing() {
  return (
    <section id="pricing" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.14] text-ink mb-4">
            PRP Hair Treatment Cost &amp; Course Pricing
          </h2>
          <p className="lead text-gray-mid">
            What a PRP hair treatment costs depends on how many sessions you
            need, which is decided at your assessment rather than before it. Your
            consultation is free, and you will have a written quote before you
            commit to anything.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {prices.map((p) => (
            <div
              key={p.name}
              className="rounded-[10px] border border-line bg-bg-lighter p-7 text-center shadow-[var(--shadow-soft)]"
            >
              <h3 className="heading-sans text-[1.02rem] text-ink mb-4">
                {p.name}
              </h3>
              <p className="font-display uppercase tracking-[0.06em] text-[1.5rem] text-gold mb-4">
                {p.from ? `From ${p.from}` : "On consultation"}
              </p>
              <p className="text-gray text-[0.85rem] leading-relaxed">{p.note}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[10px] bg-charcoal text-white/80 p-7 lg:p-8">
          <p className="text-[0.95rem] leading-relaxed max-w-[80ch]">
            <span className="text-gold-light font-semibold">
              Why we quote at consultation.
            </span>{" "}
            The cost that matters is the cost of a full course, not a single
            session, and it varies with how many areas are being treated. Rather
            than publish a figure that changes the moment we assess you, we give
            you a written quote covering the whole course — including whether we
            think a course is worth doing at all.
          </p>
        </div>

        <div className="text-center mt-10">
          <a href="#consult" className="btn btn-primary">
            Get a Personalised Quote
          </a>
        </div>
      </div>
    </section>
  );
}
