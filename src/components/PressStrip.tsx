import Image from "next/image";
import { mediaLogos } from "@/lib/assets";
import Reveal from "./Reveal";

// Real masthead marks (from Drive › Media Logos): Daily Mail, LDN Fashion, The Guardian.
const press = mediaLogos;

export default function PressStrip() {
  return (
    <section className="py-16 lg:py-24 bg-(--ink) text-(--bg-cream) overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <Reveal className="text-center mb-12 lg:mb-16">
          <p className="eyebrow !text-(--rose) mb-4">As featured in</p>
          <h2 className="h-display text-[2rem] lg:text-[2.6rem] max-w-2xl mx-auto !text-(--bg-cream)">
            The press women trust, on the clinic they trust
          </h2>
        </Reveal>

        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 lg:gap-x-16">
          {press.map((p, i) => (
            <li
              key={i}
              className="relative h-9 lg:h-11 w-28 lg:w-40 opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
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
