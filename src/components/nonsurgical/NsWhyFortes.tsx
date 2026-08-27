import Image from "next/image";
import { ai } from "@/lib/assets";

type Tile =
  | { kind: "text"; span: string; n: string; t: string; b: string }
  | { kind: "image"; span: string; src: string; alt: string; eyebrow: string; caption: string };

/**
 * Bento: four real clinic photographs interleaved with five reasons, laid
 * out as four columns by three rows at lg. The CQC tile was dropped because
 * the reception photograph's caption already carries it. Below lg the grid
 * falls back to one and then two even columns, and rows grow past their
 * minimum so no card clips its copy.
 */
const tiles: Tile[] = [
  {
    kind: "image",
    span: "lg:col-span-2",
    src: ai.clinicRoom,
    alt: "The Fortes Clinic reception in Little Venice",
    eyebrow: "The clinic",
    caption: "Custom-built and CQC-registered, in Little Venice",
  },
  {
    kind: "text",
    span: "lg:col-span-1",
    n: "01",
    t: "Doctor-Led From the First Appointment",
    b: "Your assessment and your treatment are carried out by a GMC-registered doctor. No technicians, no sales consultation dressed up as a clinical one.",
  },
  {
    kind: "image",
    span: "lg:col-span-1",
    src: ai.drSaeedPortrait,
    alt: "Dr Ahmad Saeed at the Fortes Clinic reception",
    eyebrow: "Dr Ahmad Saeed",
    caption: "Founder and lead practitioner",
  },
  {
    kind: "text",
    span: "lg:col-span-1",
    n: "02",
    t: "All Four Treatments in One Place",
    b: "PRP, PRF, exosome therapy and Regenera Activa are all offered here, so the recommendation can follow your assessment rather than our equipment list.",
  },
  {
    kind: "text",
    span: "lg:col-span-1",
    n: "03",
    t: "PRF, Which Few London Clinics Offer",
    b: "Platelet rich fibrin needs different tubes and a different protocol. Offering both PRP and PRF makes the choice between them clinical rather than practical.",
  },
  {
    kind: "image",
    span: "lg:col-span-2",
    src: ai.clinicTreatment,
    alt: "A scalp being assessed with a dermatoscope at Fortes Clinic",
    eyebrow: "Trichology",
    caption: "The scalp is examined before any treatment is recommended",
  },
  {
    kind: "image",
    span: "lg:col-span-2",
    src: ai.drSaeedConsult,
    alt: "Dr Ahmad Saeed going through a treatment plan with a colleague",
    eyebrow: "Your plan",
    caption: "Sessions, costs and a realistic result, in writing",
  },
  {
    kind: "text",
    span: "lg:col-span-1",
    n: "04",
    t: "Trichology, Not Just Injections",
    b: "If the cause of your hair loss is medical rather than genetic, that changes the treatment. Assessment covers scalp condition, history and lifestyle.",
  },
  {
    kind: "text",
    span: "lg:col-span-1",
    n: "05",
    t: "We Will Tell You When to Stop",
    b: "If a treatment is not working for you, the right advice is to change it or stop, not to sell you another course of the same thing.",
  },
];

export default function NsWhyFortes() {
  return (
    <section id="why" className="bg-brand-dark py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-gold-light mb-4">Why Fortes Clinic</p>
            <h2 className="h-display text-[2rem] lg:text-[2.9rem] !leading-[1.12]">
              A Clinic That Performs the Surgery, Telling You That You Don&rsquo;t Need It Yet
            </h2>
          </div>
          <p className="lg:col-span-5 lead text-white/70">
            We are a hair transplant clinic. That is precisely why our advice on
            non-surgical treatment is worth something. We have no reason to
            stretch a non-surgical course past the point where it helps.
          </p>
        </div>

        <div className="grid gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(260px,auto)]">
          {tiles.map((tile) =>
            tile.kind === "image" ? (
              <figure
                key={tile.src + tile.eyebrow}
                className={`relative aspect-[4/3] lg:aspect-auto rounded-[10px] overflow-hidden ring-1 ring-white/10 ${tile.span}`}
              >
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
                  <p className="eyebrow !text-gold-light mb-1.5">{tile.eyebrow}</p>
                  <p className="text-white text-[0.95rem] lg:text-[1.02rem] leading-snug font-medium max-w-[26ch]">
                    {tile.caption}
                  </p>
                </figcaption>
              </figure>
            ) : (
              <div
                key={tile.n}
                className={`flex flex-col justify-center rounded-[10px] border border-white/12 bg-white/[0.04] backdrop-blur-sm p-6 lg:p-7 ${tile.span}`}
              >
                <span className="font-display text-gold-light text-sm tracking-[0.2em]">
                  {tile.n}
                </span>
                <h3 className="heading-sans text-lg text-white mt-3 mb-2">{tile.t}</h3>
                <p className="text-white/65 text-[0.9rem] leading-relaxed">{tile.b}</p>
              </div>
            ),
          )}
        </div>

        <div className="text-center mt-14">
          <a href="#consult" className="btn btn-primary">
            Book a Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
