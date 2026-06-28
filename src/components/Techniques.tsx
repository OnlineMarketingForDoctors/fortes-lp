import Image from "next/image";
import { ai } from "@/lib/assets";

const techniques = [
  {
    tag: "FUE for Women",
    title: "Follicular Unit Extraction",
    body: "Individual healthy follicles are taken one at a time from the back of the scalp and placed precisely into thinning areas. No linear scar, no stitches, and crucially for women, only the small donor strip needs to be trimmed. The hair above keeps its full length and falls naturally over the area.",
    points: [
      "Up to 3,500 grafts in a single session",
      "Dot-like marks invisible once hair regrows",
      "Back to work within days",
      "Suits diffuse thinning, parting, hairline and temples",
    ],
    image: ai.surgeonHands,
  },
  {
    tag: "FUT for Women",
    title: "Follicular Unit Transplantation",
    body: "Where greater density is needed, a thin strip is taken from a low donor area completely hidden beneath your existing hair. No visible trimming, no change to your everyday appearance, even immediately after the procedure. Often the best choice for women who want the maximum number of grafts in one sitting.",
    points: [
      "Highest graft yield per session",
      "Donor area concealed under existing length",
      "No visible shave anywhere on the head",
      "Ideal for advanced female-pattern thinning",
    ],
    image: ai.scalpDensity,
  },
];

export default function Techniques() {
  return (
    <section id="techniques" className="py-24 lg:py-32 bg-[--bg-cream]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="eyebrow mb-5">Two surgical techniques. One specialist.</p>
          <h2 className="h-display text-[2.4rem] lg:text-[3.4rem] max-w-3xl mx-auto !leading-[1.08]">
            Techniques chosen <em className="italic font-light text-[--rose-deep]">for you,</em> not for us.
          </h2>
          <p className="lead mt-6 max-w-2xl mx-auto">
            Many women are told they have to choose between a scar and a shave. We don’t accept that. Dr Saeed will recommend the technique, or the combined approach, that protects your privacy, your length, and your long-term result.
          </p>
        </div>

        <div className="space-y-24">
          {techniques.map((t, i) => (
            <div
              key={t.title}
              className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/5] lg:aspect-[5/6] overflow-hidden bg-[--bg-cream-2]">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <p className="eyebrow mb-4">{t.tag}</p>
                <h3 className="h-display text-[2rem] lg:text-[2.8rem] mb-6 !leading-[1.08]">
                  {t.title}
                </h3>
                <p className="lead mb-8">{t.body}</p>
                <ul className="space-y-3 mb-2">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[--ink-soft]">
                      <span className="mt-2 w-1.5 h-1.5 bg-[--gold] rounded-full flex-shrink-0" />
                      <span className="text-[0.95rem] leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
