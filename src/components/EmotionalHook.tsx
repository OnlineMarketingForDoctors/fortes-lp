import Image from "next/image";
import { ai } from "@/lib/assets";

export default function EmotionalHook() {
  return (
    <section className="relative py-24 lg:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-[0.08] pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={ai.womanPartingHero}
                alt="Woman examining her hair parting in soft window light"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
                priority
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-(--bg-cream)/80 to-transparent pointer-events-none" />
            </div>
            <p className="mt-4 text-[0.7rem] uppercase tracking-[0.32em] text-(--muted)">
              Real concern, treated with care
            </p>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="eyebrow mb-5">Noticing more scalp than you used to?</p>
            <h2 className="h-display text-[2.4rem] sm:text-[3rem] lg:text-[3.8rem] !leading-[1.05] mb-3 max-w-[20ch]">
              It doesn’t start with going bald.
            </h2>
            <h3 className="font-serif italic text-[1.8rem] lg:text-[2.4rem] text-(--rose-deep) mb-10">
              It starts like this.
            </h3>

            <div className="space-y-6 lead max-w-[58ch]">
              <p>
                For women, hair loss rarely looks like a receding hairline. It’s subtler, and somehow harder to talk about. A parting that keeps getting wider. More scalp showing in bright light or in photos. A ponytail that feels thinner in your hand. Styling around the same sparse spots every morning, hoping no one notices.
              </p>
              <p>
                You’re not imagining it, and you’re far from alone. Whether it’s female-pattern thinning, hormonal change, stress, or years of tight styling and extensions, the result feels the same: hair that no longer feels like yours.
              </p>
              <p className="font-medium text-(--ink)">
                The good news? It’s treatable. And you don’t have to lose your length, or your privacy, to do something about it.
              </p>
            </div>

            <a href="#consult" className="cta-secondary mt-10">
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
