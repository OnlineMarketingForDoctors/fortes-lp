import Image from "next/image";
import { Award, UserCheck, Scissors, HeartHandshake } from "lucide-react";
import { ai, doctor } from "@/lib/assets";

const points = [
  {
    icon: Award,
    title: "Award-Winning Excellence in Central London",
    body: "A recognised name in hair restoration, with thousands of successful procedures performed from our private clinic in the heart of Little Venice, moments from Harley Street.",
  },
  {
    icon: UserCheck,
    title: "GMC-Registered, Surgeon-Led Care",
    body: "Led by Dr Ahmad Saeed, a member of the International Society of Hair Restoration Surgery since 2016. The same surgeon designs and performs your procedure. No salespeople, ever.",
  },
  {
    icon: Scissors,
    title: "Discreet Techniques That Keep Your Length",
    body: "Female hair loss is its own discipline. Our FUE and FUT methods work around your existing hair with no full head shave, so you can return to life without a dramatic change.",
  },
  {
    icon: HeartHandshake,
    title: "Complete Aftercare Support",
    body: "A free aftercare package, your first hair wash performed in clinic, and surgeon-led follow-up reviews at 6 and 12 months to protect your long-term result.",
  },
];

export default function WhatSetsUsApart() {
  return (
    <section id="why" className="bg-charcoal lattice text-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Collage */}
          <div className="lg:col-span-6">
            <div className="relative grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden shadow-[var(--shadow-soft)] ring-1 ring-white/10 mt-10">
                <Image src={ai.womanHero} alt="A confident woman with restored hair" fill unoptimized sizes="22vw" className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden shadow-[var(--shadow-soft)] ring-1 ring-white/10">
                <Image src={doctor.saeed} alt="Dr Ahmad Saeed" fill unoptimized sizes="22vw" className="object-cover object-top" />
              </div>
              <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden shadow-[var(--shadow-soft)] ring-1 ring-white/10">
                <Image src={ai.fueTechnique} alt="Precision FUE hair restoration" fill unoptimized sizes="22vw" className="object-cover" />
              </div>
              <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden shadow-[var(--shadow-soft)] ring-1 ring-white/10 -mt-10">
                <Image src={ai.clinicInterior} alt="The Fortes Clinic in Little Venice" fill unoptimized sizes="22vw" className="object-cover" />
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="lg:col-span-6">
            <p className="eyebrow !text-gold-light mb-4">Why women choose Fortes</p>
            <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.12] mb-10">
              What Sets Us Apart
            </h2>
            <div className="space-y-8">
              {points.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex gap-5">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[linear-gradient(45deg,#b28b45,#f1c77a)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="heading-sans text-lg text-white mb-1.5">{title}</h3>
                    <p className="text-white/70 text-[0.95rem] leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
