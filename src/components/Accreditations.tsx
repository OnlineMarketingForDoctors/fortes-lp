import Image from "next/image";
import { accreditations } from "@/lib/assets";

const items = [
  { src: accreditations.gmc, label: "General Medical Council" },
  { src: accreditations.cqc, label: "Care Quality Commission" },
  { src: accreditations.ishrs, label: "Int. Society of Hair Restoration Surgery" },
  { src: accreditations.tiot, label: "The Institute of Trichologists" },
  { src: accreditations.ico, label: "Information Commissioner’s Office" },
];

export default function Accreditations() {
  return (
    <section className="py-16 lg:py-20 bg-(--bg-cream-2) border-y border-(--line)">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <p className="eyebrow text-center mb-12">Regulated &amp; accredited</p>
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 items-center">
          {items.map((i) => (
            <div
              key={i.label}
              className="flex flex-col items-center text-center gap-4"
            >
              <div className="relative h-16 lg:h-[4.5rem] w-full">
                <Image
                  src={i.src}
                  alt={i.label}
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
              <span className="text-[0.66rem] uppercase tracking-[0.16em] text-(--muted) leading-snug max-w-[14ch]">
                {i.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
