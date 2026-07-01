import Image from "next/image";
import { mediaLogos } from "@/lib/assets";

export default function PressStrip() {
  return (
    <section className="bg-charcoal lattice py-10 lg:py-12">
      <div className="mx-auto max-w-[1180px] px-5 lg:px-8">
        <p className="text-center eyebrow !text-gold-light mb-7">
          As featured in &amp; awarded
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 lg:gap-x-24">
          {mediaLogos.map((m, i) => (
            <li
              key={i}
              className="relative h-14 lg:h-[4.5rem] w-40 lg:w-56 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Image
                src={m.src}
                alt={m.alt}
                fill
                unoptimized
                sizes="160px"
                className="object-contain object-center [filter:brightness(0)_invert(1)]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
