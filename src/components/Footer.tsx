import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { logos, clinic } from "@/lib/assets";

/** The location map is shown by default; landing pages that already cover
 *  "finding us" in a section of their own pass showMap={false}. */
export default function Footer({ showMap = true }: { showMap?: boolean }) {
  return (
    <footer className="bg-charcoal text-white/70">
      {showMap && (
        <div className="w-full h-[320px] lg:h-[380px]">
          <iframe
            title="Fortes Clinic location"
            src="https://www.google.com/maps?q=22+Clifton+Road,+Little+Venice,+London+W9+1ST&output=embed"
            className="w-full h-full grayscale-[0.2]"
            loading="lazy"
          />
        </div>
      )}

      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-14 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <Image
              src={logos.fortes}
              alt="Fortes Clinic"
              width={190}
              height={70}
              unoptimized
              className="h-14 w-auto brightness-0 invert mb-5"
            />
            <p className="text-sm leading-relaxed max-w-xs">
              An award-winning private clinic specialising in surgeon-led hair
              restoration for women, in the heart of Little Venice, London.
            </p>
          </div>

          <div>
            <h4 className="eyebrow !text-gold-light mb-5">Visit &amp; contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <span>{clinic.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={clinic.phoneHref} className="font-heading font-black text-lg text-white hover:text-gold-light">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={`mailto:${clinic.email}`} className="hover:text-gold-light">{clinic.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-gold-light mb-5">Clinic hours</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-gold flex-shrink-0" /> Mon – Fri: 9:30am – 5:30pm</li>
              <li className="pl-7">Sat: 10:30am – 3:00pm</li>
              <li className="pl-7">Sun: Closed</li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-gold-light mb-5">Follow</h4>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/Fortesclinic/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.5-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H7.6V13h2.6v8h3.3z" /></svg>
              </a>
              <a href="https://www.instagram.com/fortes.clinic/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              </a>
              <a href={clinic.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
            <a href="#consult" className="btn btn-primary mt-7 !py-3.5 !px-5 text-xs">
              Book Consultation
            </a>
          </div>
        </div>

        <div className="mt-12 pt-7 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Fortes Clinic. All Rights Reserved · Privacy Policy</p>
          <p>
            Powered by{" "}
            <a
              href="https://onlinemarketingfordoctors.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white/80 hover:text-gold underline underline-offset-4"
            >
              Online Marketing for Doctors
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
