import Image from "next/image";
import { logos } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="bg-[--bg-cream-2] border-t border-[--line]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Image
              src={logos.fortes}
              alt="Fortes Clinic"
              width={180}
              height={60}
              className="h-10 w-auto mb-6"
            />
            <p className="text-[--ink-soft] text-sm leading-relaxed max-w-md">
              An award-winning private clinic specialising in surgeon-led hair restoration for women, in the heart of Little Venice, London.
            </p>
            <div className="flex flex-col gap-2 mt-8 text-sm text-[--ink-soft]">
              <a href="tel:+442039620303" className="font-bold text-lg text-[--ink] hover:text-[--gold-dark]">
                020 3962 0303
              </a>
              <a href="mailto:hello@fortesclinic.co.uk" className="hover:text-[--gold-dark]">
                hello@fortesclinic.co.uk
              </a>
              <span>22 Clifton Road, Little Venice, London W9 1ST</span>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-5">Explore</h4>
            <ul className="space-y-2.5 text-[--ink-soft] text-[0.95rem]">
              <li><a href="#results" className="hover:text-[--ink]">Before &amp; After</a></li>
              <li><a href="#techniques" className="hover:text-[--ink]">Techniques</a></li>
              <li><a href="#why" className="hover:text-[--ink]">Why Choose Us</a></li>
              <li><a href="#doctor" className="hover:text-[--ink]">Meet Dr Saeed</a></li>
              <li><a href="#consult" className="hover:text-[--ink]">Consultation</a></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="eyebrow mb-5">Clinic Hours</h4>
            <ul className="space-y-2 text-[--ink-soft] text-[0.95rem]">
              <li className="flex justify-between"><span>Monday – Friday</span><span>9:30 – 17:30</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>10:30 – 15:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>Closed</span></li>
            </ul>
            <div className="mt-8 aspect-video overflow-hidden border border-[--line]">
              <iframe
                title="Fortes Clinic location map"
                src="https://www.google.com/maps?q=22+Clifton+Road,+Little+Venice,+London+W9+1ST&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-[--line] flex flex-col lg:flex-row gap-4 items-center justify-between text-xs text-[--muted]">
          <p>&copy; {new Date().getFullYear()} Fortes Clinic. All Rights Reserved. Privacy Policy.</p>
          <p>
            Powered by{" "}
            <a
              href="https://onlinemarketingfordoctors.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[--ink] hover:text-[--gold-dark] underline underline-offset-4"
            >
              Online Marketing for Doctors
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
