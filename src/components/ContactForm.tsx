"use client";

import { useState } from "react";
import { Check } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="consult" className="py-24 lg:py-32 bg-(--ink) text-(--bg-cream) relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern opacity-[0.06]" aria-hidden />
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <p className="eyebrow !text-(--rose) mb-5">Begin privately</p>
            <h2 className="h-display text-[2.4rem] lg:text-[3.4rem] !leading-[1.05] !text-(--bg-cream) mb-8">
              Request a consultation with <em className="italic font-light text-(--rose)">Dr Saeed.</em>
            </h2>
            <p className="lead !text-(--bg-cream)/80 max-w-[50ch] mb-10">
              A private, clinician-led conversation about your hair, your goals and the realistic outcomes available to you. There is never any pressure to proceed.
            </p>
            <div className="space-y-4 text-(--bg-cream)/85 text-sm">
              <div>
                <span className="block text-(--rose) uppercase tracking-[0.24em] text-[0.65rem] font-bold mb-1">
                  Clinic
                </span>
                Fortes Clinic, 22 Clifton Road, Little Venice, London W9 1ST
              </div>
              <div>
                <span className="block text-(--rose) uppercase tracking-[0.24em] text-[0.65rem] font-bold mb-1">
                  Call
                </span>
                <a href="tel:+442039620303" className="text-xl font-bold tracking-wide hover:text-(--rose)">
                  020 3962 0303
                </a>
              </div>
              <div>
                <span className="block text-(--rose) uppercase tracking-[0.24em] text-[0.65rem] font-bold mb-1">
                  Email
                </span>
                <a href="mailto:hello@fortesclinic.co.uk" className="hover:text-(--rose)">
                  hello@fortesclinic.co.uk
                </a>
              </div>
              <div>
                <span className="block text-(--rose) uppercase tracking-[0.24em] text-[0.65rem] font-bold mb-1">
                  Hours
                </span>
                Mon–Fri 9:30am – 5:30pm
                <br />
                Sat 10:30am – 3:00pm · Sun closed
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-(--bg-cream) text-(--ink) p-8 lg:p-12">
            {submitted ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-(--rose) flex items-center justify-center">
                  <Check className="w-8 h-8 text-(--ink)" strokeWidth={3} />
                </div>
                <h3 className="h-display text-2xl mb-3">Thank you.</h3>
                <p className="text-(--ink-soft)">
                  Your request has been received. A member of the team will be in
                  touch within one working day to arrange your consultation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                <Field label="First name" name="first" required />
                <Field label="Last name" name="last" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
                <Field
                  label="How did you find us?"
                  name="source"
                  className="sm:col-span-2"
                />
                <label className="sm:col-span-2 flex flex-col gap-2">
                  <span className="text-[0.7rem] uppercase tracking-[0.28em] font-bold text-(--muted)">
                    Tell us about your hair
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    className="bg-(--bg-cream-2) border border-(--line) focus:border-(--ink) focus:outline-none p-4 text-(--ink) resize-none"
                  />
                </label>
                <p className="sm:col-span-2 text-xs text-(--muted) leading-relaxed">
                  Your information is held in strict confidence and used only to
                  arrange your private consultation. We never share, sell or send
                  marketing on it.
                </p>
                <div className="sm:col-span-2">
                  <button type="submit" className="cta-primary w-full sm:w-auto">
                    Request Consultation
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-2 ${className}`}>
      <span className="text-[0.7rem] uppercase tracking-[0.28em] font-bold text-(--muted)">
        {label}
        {required && <span className="text-(--rose-deep) ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="bg-(--bg-cream-2) border border-(--line) focus:border-(--ink) focus:outline-none p-3.5 text-(--ink)"
      />
    </label>
  );
}
