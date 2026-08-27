"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/** Fades in once the hero is out of the way and returns to the top of the page. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toTop = () =>
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-5 right-5 z-40 flex items-center justify-center
                  w-14 h-14 rounded-full text-white
                  bg-[linear-gradient(160deg,#b28b45_0%,#f1c77a_100%)]
                  shadow-[0_10px_28px_-6px_rgba(0,0,0,0.45)]
                  transition-all duration-300 hover:brightness-105 hover:scale-105 ${
                    visible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
    >
      <ArrowUp className="w-6 h-6" strokeWidth={2.4} />
    </button>
  );
}
