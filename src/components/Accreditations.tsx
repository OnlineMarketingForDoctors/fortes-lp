const items = [
  { abbr: "GMC", label: "General Medical Council" },
  { abbr: "CQC", label: "Care Quality Commission" },
  { abbr: "ISHRS", label: "International Society of Hair Restoration Surgery" },
  { abbr: "SFP", label: "Save Face Practitioner" },
  { abbr: "TIOT", label: "The Institute of Trichologists" },
  { abbr: "ICO", label: "Information Commissioner’s Office" },
];

export default function Accreditations() {
  return (
    <section className="py-16 lg:py-20 bg-[--bg-cream-2] border-y border-[--line]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <p className="eyebrow text-center mb-10">
          Regulated &amp; accredited
        </p>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-10">
          {items.map((i) => (
            <div
              key={i.abbr}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 border border-[--ink]/40 rounded-full flex items-center justify-center font-serif text-lg lg:text-xl text-[--ink]">
                {i.abbr}
              </div>
              <span className="text-[0.7rem] uppercase tracking-[0.18em] text-[--muted] leading-tight">
                {i.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
