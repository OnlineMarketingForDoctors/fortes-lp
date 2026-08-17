const cases = [
  {
    title: "Early thinning, still mostly covered",
    body: "A softening hairline, a crown that has thinned gradually, or a parting that looks wider in photographs. The follicles are usually still active, which is the point at which non-surgical hair regrowth has the most to work with.",
    rec: "Usually PRP or PRF first",
  },
  {
    title: "Diffuse thinning, often in women",
    body: "Reduced volume across the whole scalp rather than a defined bald patch — frequently post-partum, peri-menopausal or following illness or stress. Often the group told they are not hair transplant candidates.",
    rec: "Assessment first, then PRP, PRF or exosomes",
  },
  {
    title: "Tried something already, limited response",
    body: "You have had PRP elsewhere, or been on medication, and not seen the change you hoped for. That is worth reassessing properly rather than simply repeating.",
    rec: "Often exosome therapy or PRF",
  },
  {
    title: "You cannot commit to monthly visits",
    body: "Travel, shift work or family commitments make a monthly course difficult to sustain — and a course you cannot finish is not worth starting.",
    rec: "Regenera Activa is a single session",
  },
  {
    title: "Advanced loss with bare areas",
    body: "Where the follicles in an area have gone, no non-invasive hair loss treatment will bring them back. We would rather tell you that at consultation than sell you a course that cannot deliver.",
    rec: "A hair transplant conversation instead",
  },
  {
    title: "You do not know the cause",
    body: "Thyroid, iron, stress, medication and scalp conditions all cause hair loss and all need different management. Treating the wrong thing wastes both time and money.",
    rec: "Trichology assessment first",
  },
];

export default function NsTriage() {
  return (
    <section id="suits" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-4">Which option suits you</p>
          <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.14] text-ink mb-4">
            Start With the Cause, Not the Treatment
          </h2>
          <p className="lead text-gray-mid">
            Hair loss treatment without surgery works best in a particular window.
            These are the situations we see most often — and what we would usually
            discuss in each.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cases.map((c) => (
            <div
              key={c.title}
              className="flex flex-col rounded-[10px] border border-line bg-white p-7 shadow-[var(--shadow-soft)]"
            >
              <h3 className="heading-sans text-[1.05rem] text-ink mb-3">
                {c.title}
              </h3>
              <p className="text-gray text-[0.92rem] leading-relaxed">{c.body}</p>
              <span className="mt-auto pt-6">
                <span className="inline-block rounded-[8px] border border-gold/50 bg-cream px-4 py-2 text-[0.8rem] font-semibold text-gold">
                  {c.rec}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
