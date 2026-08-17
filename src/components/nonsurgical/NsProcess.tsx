import {
  MessagesSquare,
  ClipboardList,
  CalendarCheck,
  Syringe,
  HeartPulse,
  LineChart,
} from "lucide-react";

const steps = [
  {
    icon: MessagesSquare,
    title: "Free Consultation",
    body: "Dr Saeed assesses your scalp, hair loss pattern and history to work out what is driving the loss and whether non-surgical treatment is appropriate at all.",
  },
  {
    icon: ClipboardList,
    title: "Your Treatment Plan",
    body: "You are told which treatment is recommended and why, how many sessions it involves, what it costs, and what a realistic result looks like.",
  },
  {
    icon: CalendarCheck,
    title: "Preparation",
    body: "Straightforward guidance before your session. For blood-derived treatments this usually means being well hydrated and avoiding certain medications.",
  },
  {
    icon: Syringe,
    title: "Your Session",
    body: "About an hour in clinic. Blood sample or donor punch, preparation, then scalp injection. Most people go straight back to their day afterwards.",
  },
  {
    icon: HeartPulse,
    title: "Aftercare",
    body: "Mild tenderness, redness or slight swelling at the injection sites is common and usually settles within a day. You get clear written aftercare guidance.",
  },
  {
    icon: LineChart,
    title: "Review",
    body: "Progress is reviewed across the course with standardised photography, so change is measured rather than guessed at.",
  },
];

export default function NsProcess() {
  return (
    <section id="process" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow mb-4">What happens</p>
              <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.12] text-ink mb-6">
                From Consultation to Results
              </h2>
              <p className="lead text-gray-mid max-w-[46ch] mb-8">
                The same pathway whichever treatment you end up having — because
                the assessment comes first and the treatment follows from it.
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
