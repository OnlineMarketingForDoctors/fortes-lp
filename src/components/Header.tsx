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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/95 backdrop-blur border-b border-line text-ink"
          : "bg-transparent text-white"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="flex h-20 lg:h-24 items-center justify-between gap-4">
          {/* Left nav (desktop) */}
          <nav className="hidden lg:flex items-center gap-7 flex-1">
            {leftNav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className={`nav-link transition-colors hover:text-gold ${
                  solid ? "text-ink" : "text-white"
                }`}
              >
                {i.label}
              </a>
            ))}
          </nav>

          {/* Center logo */}
          <a href="#" aria-label="Fortes Clinic" className="flex items-center justify-center shrink-0">
            <Image
              src={logos.fortes}
              alt="Fortes Clinic"
              width={170}
              height={64}
              priority
              unoptimized
              className={`h-11 lg:h-14 w-auto ${solid ? "" : "brightness-0 invert"}`}
            />
          </a>

          {/* Right: nav + phone */}
          <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
            {rightNav.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className={`nav-link transition-colors hover:text-gold ${
                  solid ? "text-ink" : "text-white"
                }`}
              >
                {i.label}
              </a>
            ))}
            <a
              href={clinic.phoneHref}
              className="flex items-center gap-2 group"
            >
              <Phone className="h-5 w-5 text-gold" strokeWidth={2.4} />
              <span
                className={`font-heading font-black text-xl xl:text-2xl tracking-tight transition-colors group-hover:text-gold ${
                  solid ? "text-ink" : "text-white"
                }`}
              >
                {clinic.phone}
              </span>
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-3">
            <a href={clinic.phoneHref} aria-label="Call" className="flex items-center gap-1.5">
              <Phone className="h-5 w-5 text-gold" strokeWidth={2.4} />
              <span className={`font-heading font-black text-base ${solid ? "text-ink" : "text-white"}`}>
                {clinic.phone}
              </span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className={solid ? "text-ink" : "text-white"}
            >
              {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-line py-5 space-y-4 text-ink">
            {[...leftNav, ...rightNav].map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="block nav-link text-ink"
              >
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
