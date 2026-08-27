"use client";

import { useEffect } from "react";

/** Height of the compact (scrolled) header, which is what sits over the page
 *  once a jump has happened. */
const headerOffset = () => (window.innerWidth >= 1024 ? 80 : 68);

/**
 * Makes the in-page anchors reliable.
 *
 * The browser only scrolls when the hash actually changes, so tapping "Book
 * Now" a second time after returning to the top did nothing. This does the
 * scrolling itself, and clears the fixed header so the target is not tucked
 * underneath it.
 */
export default function AnchorScroll() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const link = (e.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!href || !href.startsWith("#") || href.length < 2) return;

      const target = document.getElementById(decodeURIComponent(href.slice(1)));
      if (!target) return;

      e.preventDefault();
      const top =
        target.getBoundingClientRect().top + window.scrollY - headerOffset();
      window.scrollTo({
        top,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
      history.replaceState(null, "", href);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
