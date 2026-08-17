import Image from "next/image";
import { ai } from "@/lib/assets";

export default function NsEmotionalHook() {
  return (
    <section className="bg-brand-dark py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7">
            <p className="eyebrow !text-gold-light mb-5">Acting early matters</p>
            <h2 className="h-display text-[2rem] lg:text-[3rem] !leading-[1.12] mb-8 max-w-[20ch]">
              Noticing More Scalp
              <br />
              <span className="gold-text">Than You Used To?</span>
            </h2>
            <div className="space-y-5 text-white/80 lead max-w-[62ch]">
              <p>
                Thinning hair rarely announces itself. It shows up in a
                photograph, in bright bathroom lighting, or in a parting that has
                quietly widened over a year. The follicles in those areas are
                usually still alive — which is exactly why non-surgical hair loss
                treatment works best when it starts early, before the hair is gone
                rather than after.
              </p>
              <p>
                At Fortes Clinic we offer four non-surgical hair loss solutions:
                PRP hair treatment, PRF, exosome hair therapy and Regenera Activa.
                All four aim to support the follicles you still have. None of them
                requires surgery, stitches or time off, so they fit around work
                rather than interrupting it.
              </p>
              <p className="text-white">
                What decides which one suits you is the cause and stage of your
                hair loss — which is what your free consultation is for.
              </p>
            </div>
            <a href="#consult" className="btn-text !text-gold-light mt-9">
              Book a Free Consultation →
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
