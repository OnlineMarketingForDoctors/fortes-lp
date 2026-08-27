import Image from "next/image";
import { ns } from "@/lib/assets";

const items = [
  {
    t: "Doctor-Led From the First Appointment",
    b: "Your assessment and your treatment are carried out by a GMC-registered doctor. No technicians, no sales consultation dressed up as a clinical one.",
  },
  {
    t: "All Four Treatments in One Place",
    b: "PRP, PRF, exosome therapy and Regenera Activa are all offered here — so the recommendation can follow your assessment rather than our equipment list.",
  },
  {
    t: "PRF, Which Few London Clinics Offer",
    b: "Platelet rich fibrin needs different tubes and a different protocol. Offering both PRP and PRF makes the choice between them clinical rather than practical.",
  },
  {
    t: "Trichology, Not Just Injections",
    b: "If the cause of your hair loss is medical rather than genetic, that changes the treatment. Assessment covers scalp condition, history and lifestyle.",
  },
  {
    t: "CQC-Registered, in Little Venice",
    b: "A custom-built clinic in Central London, registered with and inspected by the Care Quality Commission.",
  },
  {
    t: "We Will Tell You When to Stop",
    b: "If a treatment is not working for you, the right advice is to change it or stop — not to sell you another course of the same thing.",
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
            non-surgical treatment is worth something — we have no reason to
            stretch a non-surgical course past the point where it helps.
          </p>
        </div>

        {/* Bento: the photograph anchors the grid, the reasons build around it */}
        <div className="grid gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
          <figure className="relative sm:col-span-2 lg:row-span-2 min-h-[280px] lg:min-h-0 rounded-[10px] overflow-hidden ring-1 ring-white/10">
            <Image
              src={ns.consultDermatoscope}
              alt="Dr Saeed examining a male patient's scalp with a dermatoscope"
              fill
              unoptimized
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent"
              aria-hidden
            />
            <figcaption className="absolute inset-x-0 bottom-0 p-7 lg:p-9">
              <p className="eyebrow !text-gold-light mb-2">The assessment</p>
              <p className="h-display text-[1.3rem] lg:text-[1.7rem] !leading-[1.2] text-white max-w-[22ch]">
                Every Plan Starts With a Doctor Looking at Your Scalp
              </p>
            </figcaption>
          </figure>

          {items.map((it, i) => (
            <div
              key={it.t}
              className={`rounded-[10px] border border-white/12 bg-white/[0.04] backdrop-blur-sm p-7 ${
                i === 0 ? "lg:row-span-2 flex flex-col justify-center" : ""
              }`}
            >
              <span className="font-display text-gold-light text-sm tracking-[0.2em]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="heading-sans text-lg text-white mt-3 mb-2">{it.t}</h3>
              <p className="text-white/65 text-[0.9rem] leading-relaxed">{it.b}</p>
            </div>
          ))}
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
