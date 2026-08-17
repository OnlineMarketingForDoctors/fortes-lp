import Image from "next/image";
import Script from "next/script";
import { Phone, Mail, MapPin } from "lucide-react";
import { ai, clinic } from "@/lib/assets";

/** Copy defaults to the female hair transplant LP; other landing pages pass
 *  their own headline, intro and consultation-suite image. */
export default function ContactForm({
  eyebrow = "Begin privately",
  heading = "Request a Consultation with Dr Saeed",
  blurb = "A private, clinician-led conversation about your hair, your goals and the realistic outcomes available to you. There is never any pressure to proceed.",
  image = ai.contactRoom,
  imageAlt = "The Fortes Clinic consultation suite in Little Venice",
}: {
  eyebrow?: string;
  heading?: string;
  blurb?: string;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section id="consult" className="bg-cream py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left: image + details */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative flex-1 min-h-[280px] rounded-[10px] overflow-hidden ring-1 ring-black/5">
              <Image
                src={image}
                alt={imageAlt}
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
                <p className="eyebrow mb-3">{eyebrow}</p>
                <h2 className="h-display text-[1.7rem] lg:text-[2.3rem] !leading-[1.12] text-ink">
                  {heading}
                </h2>
                <p className="text-gray text-sm mt-3 max-w-md mx-auto">{blurb}</p>
              </div>

              <iframe
                src="https://api.leadconnectorhq.com/widget/form/ion7XMiW9PV0kjAZFkEH"
                style={{ width: "100%", height: "685px", border: "none", borderRadius: "0px" }}
                id="inline-ion7XMiW9PV0kjAZFkEH"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="LP Form (Female)"
                data-height="600"
                data-layout-iframe-id="inline-ion7XMiW9PV0kjAZFkEH"
                data-form-id="ion7XMiW9PV0kjAZFkEH"
                title="LP Form (Female)"
              />
              <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
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

