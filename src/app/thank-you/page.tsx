import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Check, Phone, ArrowLeft, CalendarClock, PhoneCall, ShieldCheck } from "lucide-react";
import { logos, clinic } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Thank You · Fortes Clinic",
  description:
    "Your consultation request has been received. A member of the Fortes Clinic team will be in touch shortly.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    icon: PhoneCall,
    title: "We'll call you within one working day",
    body: "A member of our team will reach out personally to answer any questions and find a time that suits you.",
  },
  {
    icon: CalendarClock,
    title: "A private consultation with Dr Saeed",
    body: "You'll speak directly with the surgeon who would design and perform your procedure, never a salesperson.",
  },
  {
    icon: ShieldCheck,
    title: "An honest, no-pressure assessment",
    body: "A clear view of your options and realistic outcomes. The decision is always entirely yours.",
  },
];

export default function ThankYouPage() {
  return (
    <main className="min-h-[100svh] bg-cream flex flex-col">
      <header className="mx-auto w-full max-w-[1280px] px-5 lg:px-8 py-7">
        <Link href="/" aria-label="Fortes Clinic" className="inline-flex">
          <Image
            src={logos.fortes}
            alt="Fortes Clinic"
            width={200}
            height={80}
            unoptimized
            priority
            className="h-12 w-auto"
          />
        </Link>
      </header>

      <section className="flex-1 flex items-center">
        <div className="mx-auto w-full max-w-[720px] px-5 lg:px-8 py-14 lg:py-20 text-center">
          <span className="inline-flex w-20 h-20 rounded-full bg-[linear-gradient(45deg,#b28b45,#f1c77a)] items-center justify-center shadow-[var(--shadow-gold)] mb-8">
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          </span>

          <p className="eyebrow mb-4">Request received</p>
          <h1 className="h-display text-[2.4rem] lg:text-[3.4rem] !leading-[1.1] text-ink mb-6">
            Thank You
          </h1>
          <p className="lead text-gray-mid max-w-[52ch] mx-auto">
            Your consultation request has reached us safely. We know that
            reaching out is a big step, and we treat it with the care and
            discretion it deserves.
          </p>

          <div className="mt-12 grid gap-5 text-left">
            {steps.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="flex gap-4 items-start bg-white rounded-[12px] p-5 lg:p-6 shadow-[var(--shadow-soft)] ring-1 ring-black/5"
              >
                <span className="flex-shrink-0 w-11 h-11 rounded-full bg-[linear-gradient(45deg,#b28b45,#f1c77a)] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-white" strokeWidth={2} />
                </span>
                <div>
                  <h2 className="heading-sans text-ink text-[1.05rem] mb-1">{title}</h2>
                  <p className="text-gray-mid text-[0.95rem] leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-line">
            <p className="text-gray-mid text-[0.95rem] mb-5">
              Prefer to speak with us now? We're happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={clinic.phoneHref} className="btn btn-primary">
                <Phone className="w-4 h-4" strokeWidth={2.4} />
                Call {clinic.phone}
              </a>
              <a
                href={clinic.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Message us on WhatsApp
              </a>
            </div>

            <Link
              href="/"
              className="inline-flex items-center gap-2 mt-9 nav-link !text-gray hover:!text-gold transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to homepage
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-charcoal text-white/60 text-center text-xs py-6 px-5">
        <p>
          © {new Date().getFullYear()} Fortes Clinic. All Rights Reserved · Powered by{" "}
          <a
            href="https://onlinemarketingfordoctors.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/80 hover:text-gold underline underline-offset-4"
          >
            Online Marketing for Doctors
          </a>
        </p>
      </footer>
    </main>
  );
}
