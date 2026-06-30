import Image from "next/image";
import { reviewsScreenshot, accreditations, clinic } from "@/lib/assets";

export default function SocialProof() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">Straight from Google</p>
            <h2 className="h-display text-[1.8rem] lg:text-[2.4rem] !leading-[1.14] text-ink mb-5">
              Unedited, and Easy to Verify
            </h2>
            <p className="lead text-gray-mid max-w-[44ch] mb-8">
              We don&rsquo;t cherry-pick. Every review is public on our Google
              Business profile, rated {clinic.rating} from {clinic.reviewCount}+
              patients. Here is the live snapshot, exactly as you&rsquo;ll find it.
            </p>
            <a
              href={clinic.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              Verify on Google
            </a>
          </div>
          <div className="lg:col-span-7">
            <div className="bg-white p-2.5 lg:p-3 rounded-[10px] border border-line shadow-[var(--shadow-soft)]">
              <Image
                src={reviewsScreenshot}
                alt="Screenshot of verified Google reviews for Fortes Clinic"
                width={1466}
                height={864}
                unoptimized
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="w-full h-auto rounded-[6px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 pt-14 border-t border-line">
          <p className="text-center eyebrow mb-10">Regulated &amp; accredited</p>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 items-center">
            {accreditations.map((a) => (
              <div key={a.label} className="flex flex-col items-center text-center gap-3">
                <div className="relative h-14 lg:h-16 w-full">
                  <Image src={a.src} alt={a.label} fill unoptimized sizes="160px" className="object-contain" />
                </div>
                <span className="text-[0.62rem] uppercase tracking-[0.16em] text-gray-soft leading-snug max-w-[14ch]">
                  {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
