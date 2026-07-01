import Image from "next/image";
import { Star } from "lucide-react";
import { accreditations, clinic } from "@/lib/assets";

const cards = [
  {
    name: "Ibtissam Lafrid",
    initial: "I",
    date: "5 months ago",
    color: "bg-rose-100 text-rose-700",
    body: "It's been a year since my eyebrow transplant with Dr. Ahmad and his team, and I finally feel ready to share my review! Honestly, I'm so happy with the results. Dr. Ahmad offered plenty of follow-up sessions to check on the growth, which made me feel really supported throughout. At first the growth was slow, but now, a year later, my eyebrows look full and natural. The difference is huge compared to before! I would 100% recommend Dr. Ahmad and his team.",
  },
  {
    name: "Caitlin Spooner",
    initial: "C",
    date: "4 years ago",
    color: "bg-amber-100 text-amber-700",
    body: "I had such a good experience at Fortes Clinic. The consultation process was really straightforward and reassuring, as I got to talk directly with Dr Ahmad Saeed, rather than a sales type person. I had my eyebrow transplant today and it was fantastic. I was kept informed about everything and didn't feel a thing. The results are amazing, I'm very happy with my eyebrows and cannot wait to see the end results!",
  },
  {
    name: "Roby Linda",
    initial: "R",
    date: "2 years ago",
    color: "bg-sky-100 text-sky-700",
    body: "Am so happy for my result. A lot of compliments from everyone about my eyebrows, thanks Ahmed. I'm really happy with my results.",
  },
];

export default function SocialProof() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-4">Straight from Google</p>
          <h2 className="h-display text-[1.9rem] lg:text-[2.6rem] !leading-[1.14] text-ink mb-4">
            Unedited, and Easy to Verify
          </h2>
          <p className="lead text-gray-mid">
            We don&rsquo;t cherry-pick. Every review is public on our Google
            Business profile, rated {clinic.rating} from {clinic.reviewCount}+
            patients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((r) => (
            <article
              key={r.name}
              className="bg-bg-lighter border border-line rounded-[10px] p-7 flex flex-col shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold ${r.color}`}>
                  {r.initial}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-ink text-sm">{r.name}</div>
                  <div className="text-xs text-gray-soft">{r.date}</div>
                </div>
                <GoogleG />
              </div>
              <div className="flex mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-gold-bright text-gold-bright" />
                ))}
              </div>
              <p className="text-[0.92rem] leading-relaxed text-gray-mid flex-1">“{r.body}”</p>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href={clinic.reviewsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            Read all reviews on Google
          </a>
        </div>

        <div className="mt-20 pt-14 border-t border-line">
          <p className="text-center eyebrow mb-12">Regulated &amp; accredited</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 items-center justify-items-center">
            {accreditations.map((a) => (
              <div key={a.label} className="relative h-16 lg:h-20 w-full max-w-[180px]">
                <Image src={a.src} alt={a.label} fill unoptimized sizes="200px" className="object-contain" />
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
