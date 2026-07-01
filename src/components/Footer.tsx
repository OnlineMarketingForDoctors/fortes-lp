import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { logos, clinic } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70">
      {/* Map */}
      <div className="w-full h-[320px] lg:h-[380px]">
        <iframe
          title="Fortes Clinic location"
          src="https://www.google.com/maps?q=22+Clifton+Road,+Little+Venice,+London+W9+1ST&output=embed"
          className="w-full h-full grayscale-[0.2]"
          loading="lazy"
        />
      </div>

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
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.5-1.5h1.6V3.6c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.3H7.6V13h2.6v8h3.3z" /></svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-gold hover:text-gold transition">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
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
