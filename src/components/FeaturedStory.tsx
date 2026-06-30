import Image from "next/image";
import { Quote } from "lucide-react";
import { ai } from "@/lib/assets";

export default function FeaturedStory() {
  return (
    <section className="bg-bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden shadow-[var(--shadow-soft)]">
              <Image
                src={ai.aftercare}
                alt="A woman enjoying her restored, healthy hair"
                fill
                unoptimized
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">What our patients say</p>
            <Quote className="w-12 h-12 text-gold mb-5" strokeWidth={1.4} />
            <blockquote className="font-display uppercase tracking-wide text-[1.4rem] lg:text-[2rem] !leading-[1.3] text-ink mb-8">
              &ldquo;The consultation process was really straightforward and
              reassuring. I got to talk directly with Dr Ahmad Saeed, rather than
              a sales-type person. I was kept informed about everything and
              didn&rsquo;t feel a thing. The results are amazing.&rdquo;
            </blockquote>
            <div>
              <p className="heading-sans text-ink">Caitlin Spooner</p>
              <p className="text-sm text-gray mt-1">Verified Google review · Fortes Clinic patient</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
