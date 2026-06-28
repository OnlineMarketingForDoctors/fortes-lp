export default function PressStrip() {
  const press = [
    "Mail Online",
    "LDN Fashion",
    "The Guardian",
    "The Times",
    "Tatler",
    "Vogue",
  ];

  return (
    <section className="py-16 lg:py-24 bg-[--ink] text-[--bg-cream] overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="text-center mb-12">
          <p className="eyebrow !text-[--rose] mb-4">Strive for perfection</p>
          <h2 className="h-display text-[2rem] lg:text-[2.6rem] max-w-2xl mx-auto">
            Featured in publications women trust
          </h2>
        </div>
        <div className="relative">
          <div className="marquee text-[--bg-cream]/80">
            {[...press, ...press].map((p, i) => (
              <div
                key={i}
                className="flex-shrink-0 font-serif italic text-3xl lg:text-5xl whitespace-nowrap opacity-80"
                aria-hidden={i >= press.length}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
