import { MessagesSquare, ClipboardList, CalendarCheck, HeartPulse, Sprout, BadgeCheck } from "lucide-react";

const steps = [
  { icon: MessagesSquare, title: "Free Initial Consultation", body: "An unhurried conversation with Dr Saeed himself: a trichology assessment of your scalp, a review of your history, and a candid discussion of what is realistically achievable for your hair." },
  { icon: ClipboardList, title: "Personalised Treatment Plan", body: "Bespoke hairline or density design, a precise graft count, your recommended technique (FUE, FUT or combined), a realistic timeline and fully transparent pricing. No pressure, ever." },
  { icon: CalendarCheck, title: "Pre-Procedure Preparation", body: "Clear pre-op instructions, medication guidance and a private welcome appointment, so every question is answered and you arrive on the day completely relaxed." },
  { icon: HeartPulse, title: "Your Procedure Day", body: "A calm, single-session day under local anaesthetic. Dr Saeed performs the extraction, design and placement personally, with no full head shave and no overnight stay." },
  { icon: Sprout, title: "Recovery & Regrowth", body: "Visible regrowth typically begins around four months, with meaningful density by six months and your full result at twelve. We walk every step of that journey with you." },
  { icon: BadgeCheck, title: "6 & 12 Month Reviews", body: "Two surgeon-led follow-ups are included as standard, documenting your regrowth and protecting the result you came to us for." },
];

export default function Process() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">A clear path, beautifully paced</p>
              <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.12] text-ink mb-6">
                Simple Steps to Natural Hair Restoration
              </h2>
              <p className="lead text-gray-mid max-w-[46ch] mb-8">
                From your first consultation to your full result, we guide you
                through every stage with expert care, transparent communication
                and complete aftercare support.
              </p>
              <a href="#consult" className="btn btn-primary">
                Book Your Free Consultation
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="rounded-[12px] border border-line shadow-[var(--shadow-soft)] divide-y divide-line overflow-hidden">
              {steps.map(({ icon: Icon, title, body }, i) => (
                <li key={title} className="flex gap-5 p-7 lg:p-8 bg-white">
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <span className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold">
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </span>
                    <span className="font-display text-gold text-xs tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="heading-sans text-lg text-ink mb-1.5">{title}</h3>
                    <p className="text-gray text-[0.95rem] leading-relaxed">{body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
