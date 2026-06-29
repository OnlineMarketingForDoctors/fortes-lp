"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { logos } from "@/lib/assets";

const nav = [
  { href: "#results", label: "Before & After" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#techniques", label: "Techniques" },
  { href: "#doctor", label: "Meet Dr Saeed" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-(--bg-cream)/95 backdrop-blur border-b border-(--line)" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="flex h-20 lg:h-24 items-center justify-between gap-6">
          <Link href="#" className="flex items-center" aria-label="Fortes Clinic">
            <Image
              src={logos.fortes}
              alt="Fortes Clinic"
              width={140}
              height={48}
              className="h-9 lg:h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-9">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="menu-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:gap-6">
            <a
              href="tel:+442039620303"
              className="hidden md:flex items-center gap-2 text-(--ink) hover:text-(--gold-dark) transition-colors"
            >
              <Phone className="h-5 w-5 text-(--gold-dark)" strokeWidth={2.2} />
              <span className="font-sans font-extrabold tracking-wide text-[1.05rem] lg:text-[1.25rem]">
                020 3962 0303
              </span>
            </a>
            <a href="#consult" className="cta-primary hidden md:inline-flex !py-3 !px-5 text-[0.62rem]">
              Book Consultation
            </a>
            <button
              type="button"
              className="lg:hidden p-2 -mr-2 text-(--ink)"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-(--line) py-6 space-y-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block menu-link"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+442039620303"
              className="flex items-center gap-2 text-(--ink)"
            >
              <Phone className="h-5 w-5 text-(--gold-dark)" strokeWidth={2.2} />
              <span className="font-extrabold text-lg">020 3962 0303</span>
            </a>
            <a
              href="#consult"
              onClick={() => setOpen(false)}
              className="cta-primary w-full justify-center"
            >
              Book Free Consultation
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
