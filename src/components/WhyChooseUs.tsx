import Image from "next/image";
import { photos } from "@/lib/assets";
import { Scissors, Heart, Sparkles, ShieldCheck, Clock, UserCheck } from "lucide-react";

const reasons = [
  {
    icon: Scissors,
    title: "No Full Head Shave",
    body: "Discreet FUE and FUT techniques work around your existing length, so you can return to work and life without a dramatic change in appearance.",
  },
  {
    icon: UserCheck,
    title: "Surgeon-Led, Always",
    body: "Every consultation, design and procedure is performed by Dr Ahmad Saeed himself. Never a salesperson, never a delegated technician.",
  },
  {
    icon: Heart,
    title: "Designed for Female Hair Loss",
    body: "Diffuse thinning, widening partings, traction alopecia and hormonal change demand a specialist approach. We have spent a decade refining ours.",
  },
  {
    icon: Sparkles,
    title: "Natural, Undetectable Results",
    body: "Hairline design is an art. We replicate your natural pattern, density and direction so the result blends seamlessly with your remaining hair.",
  },
  {
    icon: ShieldCheck,
    title: "Private &amp; Discreet",
    body: "Our Little Venice clinic is intentionally calm and unmarked. You will not bump into anyone in the waiting room, ever.",
  },
  {
    icon: Clock,
    title: "Aftercare for a Full Year",
    body: "Surgeon-led reviews at 6 and 12 months, premium aftercare products and a dedicated team on call whenever you need reassurance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24 lg:py-32 bg-[--bg-cream-2] relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-[0.05]" aria-hidden />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-16 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Why Fortes Clinic</p>
            <h2 className="h-display text-[2.4rem] lg:text-[3.5rem] !leading-[1.06] max-w-[18ch]">
              A clinic that
              <br />
              <em className="italic font-light text-[--rose-deep]">understands</em> women’s hair.
            </h2>
          </div>
          <div className="lg:col-span-5 lead max-w-xl lg:text-right lg:ml-auto">
            Women come to us after years of trying everything else. Shampoos. Supplements. PRP. Extensions. They want a permanent answer that doesn’t demand a buzz cut or a fortnight in hiding. That’s what we built.
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[--line]">
          {reasons.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-[--bg-cream] p-10 flex flex-col gap-5">
              <Icon className="w-8 h-8 text-[--gold-dark]" strokeWidth={1.6} />
              <h3 className="font-serif text-2xl text-[--ink] leading-tight" dangerouslySetInnerHTML={{ __html: title }} />
              <p className="text-[--ink-soft] leading-relaxed text-[0.95rem]" dangerouslySetInnerHTML={{ __html: body }} />
            </div>
          ))}
        </div>

        <div className="mt-20 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden">
            <Image
              src={photos.femalePatternHairLoss}
              alt="Hair loss treatment for women at Fortes Clinic"
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Surgeon-led, every step</p>
            <h3 className="h-display text-[1.8rem] lg:text-[2.4rem] mb-6 !leading-[1.1]">
              The same hands from consultation to aftercare.
            </h3>
            <p className="lead mb-8">
              Most clinics hand you to a different person at every stage. At Fortes, Dr Saeed personally designs your hairline and performs every graft. The same surgeon reviews your results at 6 and 12 months. Continuity, accountability, and an unhurried standard of care.
            </p>
            <a href="#consult" className="cta-primary">
              Speak with Dr Saeed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
