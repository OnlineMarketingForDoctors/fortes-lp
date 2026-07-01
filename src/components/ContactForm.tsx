"use client";

import Image from "next/image";
import { useState } from "react";
import { Check, Phone, Mail, MapPin } from "lucide-react";
import { ai, clinic } from "@/lib/assets";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="consult" className="bg-cream py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left: image + details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[280px] rounded-[10px] overflow-hidden ring-1 ring-black/5">
              <Image
                src={ai.contactRoom}
                alt="The Fortes Clinic consultation suite in Little Venice"
                fill
                unoptimized
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-8 space-y-4 text-ink/80 text-sm">
              <Detail icon={MapPin} label="Clinic">{clinic.address}</Detail>
              <Detail icon={Phone} label="Call">
                <a href={clinic.phoneHref} className="font-heading font-black text-xl text-ink hover:text-gold">
                  {clinic.phone}
                </a>
              </Detail>
              <Detail icon={Mail} label="Email">
                <a href={`mailto:${clinic.email}`} className="hover:text-gold">{clinic.email}</a>
              </Detail>
            </div>
          </div>

          {/* Right: form card */}
          <div className="lg:col-span-7">
            <div className="bg-white text-ink rounded-[12px] p-7 lg:p-10 shadow-[var(--shadow-soft)]">
              <div className="text-center mb-8">
                <p className="eyebrow mb-3">Begin privately</p>
                <h2 className="h-display text-[1.7rem] lg:text-[2.3rem] !leading-[1.12] text-ink">
                  Request a Consultation with Dr Saeed
                </h2>
                <p className="text-gray text-sm mt-3 max-w-md mx-auto">
                  A private, clinician-led conversation about your hair, your goals
                  and the realistic outcomes available to you. There is never any
                  pressure to proceed.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-14">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[linear-gradient(45deg,#b28b45,#f1c77a)] flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" strokeWidth={3} />
                  </div>
                  <h3 className="h-display text-2xl text-ink mb-3">Thank You</h3>
                  <p className="text-gray">
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
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <Field label="First name" name="first" required />
                  <Field label="Last name" name="last" required />
                  <Field label="Phone" name="phone" type="tel" required />
                  <Field label="Email" name="email" type="email" required />
                  <label className="sm:col-span-2 flex flex-col gap-2">
                    <span className="text-[0.68rem] uppercase tracking-[0.18em] font-bold text-gray">
                      How did you find us?
                    </span>
                    <select
                      name="source"
                      className="bg-bg-light border border-line rounded-[8px] focus:border-gold focus:outline-none p-3.5 text-ink"
                      defaultValue=""
                    >
                      <option value="" disabled>Please select</option>
                      <option>Google search</option>
                      <option>Instagram or Facebook</option>
                      <option>A friend or family member</option>
                      <option>Press or an article</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="sm:col-span-2 flex flex-col gap-2">
                    <span className="text-[0.68rem] uppercase tracking-[0.18em] font-bold text-gray">
                      Tell us about your hair
                    </span>
                    <textarea
                      name="message"
                      rows={4}
                      className="bg-bg-light border border-line rounded-[8px] focus:border-gold focus:outline-none p-3.5 text-ink resize-none"
                    />
                  </label>
                  <p className="sm:col-span-2 text-xs text-gray-soft leading-relaxed">
                    Your information is held in strict confidence and used only to
                    arrange your private consultation. We never share, sell or send
                    marketing on it.
                  </p>
                  <div className="sm:col-span-2">
                    <button type="submit" className="btn btn-primary w-full">
                      Request Consultation
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ElementType;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" strokeWidth={2} />
      <div>
        <span className="block text-gold uppercase tracking-[0.2em] text-[0.6rem] font-bold mb-0.5">
          {label}
        </span>
        {children}
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[0.68rem] uppercase tracking-[0.18em] font-bold text-gray">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="bg-bg-light border border-line rounded-[8px] focus:border-gold focus:outline-none p-3.5 text-ink"
      />
    </label>
  );
}
