import Image from "next/image";
import { ai } from "@/lib/assets";

export default function EmotionalHook() {
  return (
    <section className="bg-brand-dark py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-gold-light mb-5">
              Noticing more scalp than you used to?
            </p>
            <h2 className="h-display text-[2rem] lg:text-[3rem] !leading-[1.12] mb-8 max-w-[20ch]">
              It Doesn&rsquo;t Start With Going Bald.
              <br />
              <span className="gold-text">It Starts Like This.</span>
            </h2>
            <div className="space-y-5 text-white/80 lead max-w-[60ch]">
              <p>
                For women, hair loss rarely looks like a receding hairline. It&rsquo;s
                subtler, and somehow harder to talk about. A parting that keeps
                getting wider. More scalp showing in bright light or in photos. A
                ponytail that feels thinner in your hand. Styling around the same
                sparse spots every morning, hoping no one notices.
              </p>
              <p>
                You&rsquo;re not imagining it, and you&rsquo;re far from alone. Whether it&rsquo;s
                female-pattern thinning, hormonal change, stress, or years of tight
                styling and extensions, the result feels the same: hair that no
                longer feels like yours.
              </p>
              <p className="text-white">
                The good news is that it&rsquo;s treatable. And you don&rsquo;t have to lose
                your length, or your privacy, to do something about it.
              </p>
            </div>
            <a href="#consult" className="btn-text !text-gold-light mt-9">
              Book a Consultation →
            </a>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] shadow-[var(--shadow-soft)] ring-1 ring-white/10">
              <Image
                src={ai.emotionalHook}
                alt="A woman noticing her widening parting in the mirror"
                fill
                unoptimized
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
