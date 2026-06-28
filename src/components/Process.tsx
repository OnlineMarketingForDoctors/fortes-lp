const steps = [
  {
    n: "01",
    title: "Free Consultation",
    body: "An unhurried conversation with Dr Saeed himself. Trichology assessment of your scalp, a full review of medical history, and a candid discussion of what is and isn’t achievable for your hair.",
  },
  {
    n: "02",
    title: "Personalised Plan",
    body: "Bespoke hairline or density design, precise graft count, technique recommendation (FUE, FUT or combined), realistic timeline and a fully transparent cost. No pressure, ever.",
  },
  {
    n: "03",
    title: "Pre-Procedure Preparation",
    body: "Clear pre-op instructions, medication guidance and a private welcome appointment. We answer every question so you arrive on the day relaxed.",
  },
  {
    n: "04",
    title: "Your Procedure Day",
    body: "A calm, single-session day under local anaesthetic. Dr Saeed performs the extraction, design and placement personally. You leave with comprehensive aftercare and a direct line to the team.",
  },
  {
    n: "05",
    title: "Recovery &amp; Regrowth",
    body: "Visible regrowth begins around 4 months. Most patients see meaningful density by 6 months and the full result at 12 months. We walk every step of that journey with you.",
  },
  {
    n: "06",
    title: "6 &amp; 12 Month Reviews",
    body: "Two surgeon-led follow-ups included as standard. We document your regrowth, advise on long-term care, and make sure the result you wanted is the result you’re wearing.",
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 bg-[--ink] text-[--bg-cream] relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-[0.06]" aria-hidden />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="eyebrow !text-[--rose] mb-5">A clear path, beautifully paced</p>
          <h2 className="h-display text-[2.4rem] lg:text-[3.4rem] !text-[--bg-cream] max-w-3xl mx-auto !leading-[1.08]">
            Six considered steps to your most natural hair.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[--bg-cream]/10">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-[--ink] p-10 flex flex-col gap-5 hover:bg-[#27201a] transition-colors"
            >
              <span className="font-serif italic text-5xl text-[--rose]/90">
                {s.n}
              </span>
              <h3
                className="font-serif text-2xl leading-tight"
                dangerouslySetInnerHTML={{ __html: s.title }}
              />
              <p
                className="text-[--bg-cream]/75 leading-relaxed text-[0.95rem]"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href="#consult" className="cta-primary !bg-[--rose] !text-[--ink] !border-[--rose] hover:!bg-white hover:!border-white">
            Begin with a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
