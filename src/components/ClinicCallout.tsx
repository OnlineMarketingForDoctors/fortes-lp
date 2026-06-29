import Image from "next/image";
import { ai } from "@/lib/assets";

export default function ClinicCallout() {
  return (
    <section className="relative h-[60vh] min-h-[420px] lg:h-[80vh] overflow-hidden">
      <Image
        src={ai.clinicInterior}
        alt="Fortes Clinic Little Venice consultation room"
        fill
        sizes="100vw"
        className="object-cover"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
      <div className="relative h-full flex items-center">
        <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-12">
          <div className="max-w-2xl text-white">
            <p className="eyebrow !text-(--rose) mb-5">Inside the clinic</p>
            <h2 className="h-display text-[2.4rem] lg:text-[3.6rem] !text-white !leading-[1.06] mb-6">
              A calm, unmarked townhouse in Little Venice.
            </h2>
            <p className="lead !text-white/85 max-w-xl">
              Set on a quiet residential street, our private clinic is intentionally discreet. No clinical glare, no pressure, no queue. Just an unhurried hour with the surgeon who will look after your hair for the next twelve months and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
