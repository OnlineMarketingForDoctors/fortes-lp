import Image from "next/image";
import { Star } from "lucide-react";
import { accreditations, clinic } from "@/lib/assets";

const reviews = [
  {
    initial: "M",
    color: "bg-rose-100 text-rose-700",
    body: "I was excited to hear of a more natural treatment for my receding hair. Dr Saeed is a brilliant hair specialist who was recommended to me by a friend. He suggested platelet rich plasma PRP injection. His injecting technique is extremely smooth. I hardly felt a thing and the session was rather relaxing.",
  },
  {
    initial: "J",
    color: "bg-amber-100 text-amber-700",
    body: "Dr Ahmad Saeed was great throughout. I was reassured by him at my initial consultation, where he was knowledgeable but also didn't pressure me into any decisions. I continue going there to receive PRP, which is a testament to how reliable they are.",
  },
  {
    initial: "S",
    color: "bg-sky-100 text-sky-700",
    body: "The team were honest, reassuring, and made sure I understood every step before we went ahead. You can tell they really care about their work and their patients.",
  },
];

export default function NsReviews() {
  return (
    <section id="reviews" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-heading font-black text-4xl text-ink">
              {clinic.rating}
            </span>
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold-bright text-gold-bright" />
              ))}
            </span>
          </div>
          <p className="eyebrow mb-4">
            From {clinic.reviewCount}+ Google reviews
          </p>
          <h2 className="h-display text-[1.9rem] lg:text-[2.6rem] !leading-[1.14] text-ink">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article
              key={r.initial}
              className="bg-bg-lighter border border-line rounded-[10px] p-7 flex flex-col shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-bold ${r.color}`}
                >
                  {r.initial}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-ink text-sm">
                    Verified patient review
                  </div>
                  <div className="text-xs text-gray-soft">Google</div>
                </div>
                <GoogleG />
              </div>
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-gold-bright text-gold-bright" />
                ))}
              </div>
              <p className="text-[0.92rem] leading-relaxed text-gray-mid flex-1">
                “{r.body}”
              </p>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href={clinic.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Read all reviews on Google
          </a>
        </div>
        <p className="text-xs text-gray-soft text-center mt-6">
          Reviews are shown as published. Individual experiences and outcomes
          vary.
        </p>

        <div className="mt-20 pt-14 border-t border-line">
          <p className="text-center eyebrow mb-12">Regulated &amp; accredited</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 items-center justify-items-center">
            {accreditations.map((a) => (
              <div key={a.label} className="relative h-16 lg:h-20 w-full max-w-[180px]">
                <Image
                  src={a.src}
                  alt={a.label}
                  fill
                  unoptimized
                  sizes="200px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5" aria-label="Google">
      <path fill="#4285F4" d="M22.5 12.2c0-.8-.07-1.6-.2-2.36H12.2v4.46h5.78a4.94 4.94 0 01-2.14 3.24v2.7h3.46c2.03-1.87 3.2-4.62 3.2-8.04z" />
      <path fill="#34A853" d="M12.2 22.5c2.9 0 5.32-.96 7.1-2.6l-3.46-2.7c-.96.65-2.2 1.03-3.64 1.03-2.8 0-5.16-1.89-6.01-4.42H2.62v2.78A10.5 10.5 0 0012.2 22.5z" />
      <path fill="#FBBC05" d="M6.2 13.81a6.3 6.3 0 010-4.02V7.01H2.62a10.5 10.5 0 000 9.58l3.58-2.78z" />
      <path fill="#EA4335" d="M12.2 5.37c1.57 0 2.99.54 4.1 1.6l3.07-3.07C17.53 2.2 15.1 1.25 12.2 1.25a10.5 10.5 0 00-9.59 5.76l3.58 2.78c.85-2.53 3.22-4.42 6.01-4.42z" />
    </svg>
  );
}
