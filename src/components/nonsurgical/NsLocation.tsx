import { clinic } from "@/lib/assets";

const cards = [
  {
    title: "Getting here",
    body: "Warwick Avenue (Bakerloo) is a five-minute walk and Paddington is one stop away, which makes us straightforward to reach for appointments booked around a working day. Metered parking is available on Clifton Road.",
    note: clinic.address,
  },
  {
    title: "Who we see",
    body: "Most people booking PRP hair loss treatment London-side come to us from Central and West London, but we also see patients travelling from across the UK for treatments that are harder to find — PRF in particular.",
    note: "Men and women, all hair types",
  },
  {
    title: "What to expect on the day",
    body: "Whether you are booked for hair plasma treatment, exosome therapy or Regenera Activa, allow about an hour. Come hydrated, and you can go straight back to work afterwards.",
    note: "About 1 hour in clinic",
  },
];

export default function NsLocation() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-4">Finding us</p>
          <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.14] text-ink mb-4">
            Hair PRP Treatment in Central London
          </h2>
          <p className="lead text-gray-mid">
            Our clinic is at 22 Clifton Road in Little Venice, a few minutes from
            Warwick Avenue and Maida Vale, and within easy reach of Paddington,
            Marylebone and the Harley Street medical district.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
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
                  {c.note}
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
