import Image from "next/image";
import { Plus } from "lucide-react";
import { ns } from "@/lib/assets";

const cases = [
  {
    title: "Early thinning, still mostly covered",
    body: "A softening hairline, a crown that has thinned gradually, or a parting that looks wider in photographs. The follicles are usually still active, which is the point at which non-surgical hair regrowth has the most to work with.",
    rec: "Usually PRP or PRF first",
  },
  {
    title: "Diffuse thinning across the whole scalp",
    body: "Reduced volume everywhere rather than a defined bald patch — following illness, stress, medication or hormonal change. In women this is frequently post-partum or peri-menopausal, and it is often the group told they are not hair transplant candidates.",
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
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">Which option suits you</p>
              <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.14] text-ink mb-6">
                Start With the Cause, Not the Treatment
              </h2>
              <p className="lead text-gray-mid max-w-[46ch] mb-9">
                Hair loss treatment without surgery works best in a particular
                window. These are the situations we see most often — open the one
                that sounds like you.
              </p>
              <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden ring-1 ring-black/5 shadow-[var(--shadow-soft)]">
                <Image
                  src={ns.scalpAnalysis}
                  alt="A trichology scalp analysis being reviewed with a patient"
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="border-t border-line">
              {cases.map((c, i) => (
                <details
                  key={c.title}
                  className="group border-b border-line"
                  open={i === 0}
                >
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none py-6 [&::-webkit-details-marker]:hidden">
                    <span className="flex items-baseline gap-4">
                      <span className="font-display text-gold text-[0.7rem] tracking-[0.22em]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="heading-sans text-[1.05rem] lg:text-[1.15rem] text-ink transition-colors group-hover:text-gold">
                        {c.title}
                      </span>
                    </span>
                    <Plus
                      className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold transition-transform duration-200 group-open:rotate-45"
                      strokeWidth={2}
                    />
                  </summary>
                  <div className="pb-7 pl-0 sm:pl-11">
                    <p className="text-gray text-[0.95rem] leading-relaxed mb-5">
                      {c.body}
                    </p>
                    <span className="inline-block rounded-[8px] border border-gold/50 bg-white px-4 py-2 text-[0.8rem] font-semibold text-gold">
                      {c.rec}
                    </span>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
