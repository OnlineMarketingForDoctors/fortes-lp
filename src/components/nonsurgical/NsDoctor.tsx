import Image from "next/image";
import { ai } from "@/lib/assets";

const credentials = [
  "MBChB Medicine & Surgery, 1997",
  "Member, International Society of Hair Restoration Surgery since 2016",
  "Qualified in PRP treatment under Dr Daniel Sister",
  "Hair surgeon and trichologist",
  "Performs Regenera Activa in clinic",
  "GMC registered · Care Quality Commission inspected",
];

export default function NsDoctor() {
  return (
    <section id="doctor" className="bg-cream py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <p className="eyebrow mb-3">Founder &amp; Lead Practitioner</p>
            <h2 className="h-display text-[2rem] lg:text-[2.9rem] !leading-[1.12] text-ink mb-8">
              Meet Dr Ahmad Saeed
            </h2>
            <div className="space-y-5 lead text-gray-mid max-w-[60ch]">
              <p>
                Dr Saeed graduated in Medicine and Surgery (MBChB) in 1997 and
                later specialised as an anaesthetist, before training as a hair
                surgeon and trichologist. He has been a member of the
                International Society of Hair Restoration Surgery since 2016.
              </p>
              <p>
                He qualified in PRP treatment with Dr Daniel Sister, a specialist
                in platelet rich plasma and author of{" "}
                <em>
                  Platelet Rich Plasma, The New Frontier in Regenerative and
                  Aesthetic Medicine
                </em>
                , and performs Regenera Activa at the clinic. He sees
                non-surgical treatment as the first conversation to have with
                most patients, not the consolation prize when surgery is ruled
                out.
              </p>
            </div>

            <ul className="mt-9 grid sm:grid-cols-2 gap-4">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-3 text-ink/80">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="text-[0.92rem] leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>

            <a href="#consult" className="btn btn-primary mt-10">
              Book a Consultation with Dr Saeed
            </a>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="w-full max-w-md mx-auto overflow-hidden rounded-[10px]">
              <Image
                src={ai.drSaeedMeet}
                alt="Dr Ahmad Saeed, Founder and Lead Practitioner at Fortes Clinic"
                width={0}
                height={0}
                unoptimized
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
