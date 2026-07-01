"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { logos, clinic } from "@/lib/assets";

const leftNav = [
  { href: "#results", label: "Before & After" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#techniques", label: "Techniques" },
];
const rightNav = [
  { href: "#doctor", label: "Meet Dr Saeed" },
  { href: "#reviews", label: "Reviews" },
  { href: "#consult", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;
  const linkColor = solid ? "text-ink" : "text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-white/95 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        {/* Desktop */}
        <div
          className={`hidden lg:grid grid-cols-[1fr_auto_1fr] items-center transition-all duration-300 ${
            solid ? "h-20" : "h-28"
          }`}
        >
          <nav className="flex items-center gap-x-7 xl:gap-x-9 justify-start">
            {leftNav.map((i) => (
              <a key={i.href} href={i.href} className={`nav-link transition-colors hover:text-gold ${linkColor}`}>
                {i.label}
              </a>
            ))}
          </nav>

          <a href="#" aria-label="Fortes Clinic" className="flex items-center justify-center px-4">
            <Image
              src={logos.fortes}
              alt="Fortes Clinic"
              width={220}
              height={90}
              priority
              unoptimized
              className={`w-auto transition-all duration-300 ${solid ? "h-12" : "h-[4.4rem]"} ${
                solid ? "" : "brightness-0 invert"
              }`}
            />
          </a>

          <div className="flex items-center gap-x-5 xl:gap-x-7 justify-end">
            {rightNav.map((i) => (
              <a key={i.href} href={i.href} className={`nav-link transition-colors hover:text-gold ${linkColor}`}>
                {i.label}
              </a>
            ))}
            <a href={clinic.phoneHref} className="flex items-center gap-2 group shrink-0">
              <Phone className="h-5 w-5 text-gold shrink-0" strokeWidth={2.4} />
              <span className={`font-heading font-black text-lg xl:text-2xl tracking-tight whitespace-nowrap transition-colors group-hover:text-gold ${linkColor}`}>
                {clinic.phone}
              </span>
            </a>
          </div>
        </div>

        {/* Mobile */}
        <div className={`flex lg:hidden items-center justify-between transition-all duration-300 ${solid ? "h-[68px]" : "h-20"}`}>
          <a href="#" aria-label="Fortes Clinic" className="flex items-center">
            <Image
              src={logos.fortes}
              alt="Fortes Clinic"
              width={160}
              height={64}
              priority
              unoptimized
              className={`w-auto ${solid ? "h-10" : "h-12"} ${solid ? "" : "brightness-0 invert"}`}
            />
          </a>
          <div className="flex items-center gap-3">
            <a href={clinic.phoneHref} aria-label="Call" className="flex items-center gap-1.5">
              <Phone className="h-5 w-5 text-gold" strokeWidth={2.4} />
              <span className={`font-heading font-black text-base ${linkColor}`}>{clinic.phone}</span>
            </a>
            <button type="button" onClick={() => setOpen((v) => !v)} aria-label="Menu" className={linkColor}>
              {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-line py-5 space-y-4">
            {[...leftNav, ...rightNav].map((i) => (
              <a key={i.href} href={i.href} onClick={() => setOpen(false)} className="block nav-link text-ink">
                {i.label}
              </a>
            ))}
            <a href="#consult" onClick={() => setOpen(false)} className="btn btn-primary w-full">
              Book Your Free Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
