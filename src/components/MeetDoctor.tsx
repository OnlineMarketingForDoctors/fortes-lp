import Image from "next/image";
import { doctor } from "@/lib/assets";

const credentials = [
  "MBChB Medicine &amp; Surgery, 1997",
  "Member, International Society of Hair Restoration Surgery (ISHRS) since 2016",
  "Qualified in PRP Treatment under Dr Daniel Sister",
  "GMC registered, Care Quality Commission inspected",
];

export default function MeetDoctor() {
  return (
    <section id="doctor" className="py-24 lg:py-32 bg-[--bg-cream-2] relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-[0.05]" aria-hidden />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={doctor.saeed}
                alt="Dr Ahmad Saeed, Founder and Lead Practitioner at Fortes Clinic"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-20">
                <p className="text-white text-xs uppercase tracking-[0.32em] font-bold mb-1">
                  Dr Ahmad Saeed
                </p>
                <p className="text-white/80 text-sm">Founder &amp; Lead Practitioner</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Meet your surgeon</p>
            <h2 className="h-display text-[2.4rem] lg:text-[3.4rem] !leading-[1.05] mb-8">
              The same surgeon
              <br />
              <em className="italic font-light text-[--rose-deep]">from beginning to end.</em>
            </h2>
            <div className="space-y-5 lead max-w-[60ch]">
              <p>
                Dr Saeed graduated in Medicine and Surgery in 1997 before specialising in anaesthetics. He trained professionally as a hair surgeon and trichologist and has been a member of the International Society of Hair Restoration Surgery since 2016.
              </p>
              <p>
                His work with female patients is what defines Fortes Clinic today. Where most clinics see female hair loss as a smaller version of the male procedure, Dr Saeed treats it as its own discipline, with hairline design, density, technique selection and aftercare all approached differently.
              </p>
            </div>

            <ul className="mt-10 grid sm:grid-cols-2 gap-4">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-[--ink-soft]">
                  <span className="mt-1.5 w-2 h-2 bg-[--gold] rounded-full flex-shrink-0" />
                  <span
                    className="text-[0.95rem] leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: c }}
                  />
                </li>
              ))}
            </ul>

            <a href="#consult" className="cta-primary mt-10">
              Request a Private Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
