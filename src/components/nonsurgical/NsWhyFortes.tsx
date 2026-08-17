import Image from "next/image";
import { ai } from "@/lib/assets";

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
    <section id="why" className="relative py-20 lg:py-28 text-white overflow-hidden">
      <Image
        src={ai.densityCloseup}
        alt=""
        fill
        unoptimized
        sizes="100vw"
        className="object-cover"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/82" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="eyebrow !text-gold-light mb-4">Why Fortes Clinic</p>
          <h2 className="h-display text-[2rem] lg:text-[2.9rem] !leading-[1.12] mb-6">
            A Clinic That Performs the Surgery, Telling You That You Don&rsquo;t Need It Yet
          </h2>
          <p className="lead text-white/70 max-w-[62ch]">
            We are a hair transplant clinic. That is precisely why our advice on
            non-surgical treatment is worth something — we have no reason to
            stretch a non-surgical course past the point where it helps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {items.map((it, i) => (
            <div
              key={it.t}
              className="rounded-[10px] border border-white/12 bg-white/[0.04] backdrop-blur-sm p-7"
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
