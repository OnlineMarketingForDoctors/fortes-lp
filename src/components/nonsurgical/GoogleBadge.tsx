import { Star } from "lucide-react";
import { clinic } from "@/lib/assets";

export function GoogleG({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="#4285F4" d="M22.5 12.2c0-.8-.07-1.6-.2-2.36H12.2v4.46h5.78a4.94 4.94 0 01-2.14 3.24v2.7h3.46c2.03-1.87 3.2-4.62 3.2-8.04z" />
      <path fill="#34A853" d="M12.2 22.5c2.9 0 5.32-.96 7.1-2.6l-3.46-2.7c-.96.65-2.2 1.03-3.64 1.03-2.8 0-5.16-1.89-6.01-4.42H2.62v2.78A10.5 10.5 0 0012.2 22.5z" />
      <path fill="#FBBC05" d="M6.2 13.81a6.3 6.3 0 010-4.02V7.01H2.62a10.5 10.5 0 000 9.58l3.58-2.78z" />
      <path fill="#EA4335" d="M12.2 5.37c1.57 0 2.99.54 4.1 1.6l3.07-3.07C17.53 2.2 15.1 1.25 12.2 1.25a10.5 10.5 0 00-9.59 5.76l3.58 2.78c.85-2.53 3.22-4.42 6.01-4.42z" />
    </svg>
  );
}

/** Google rating badge. `dark` styles it for the hero's video background. */
export default function GoogleBadge({ dark = false }: { dark?: boolean }) {
  return (
    <a
      href={clinic.reviewsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3.5 rounded-full py-2.5 pl-3.5 pr-5 transition ${
        dark
          ? "border border-white/20 bg-white/[0.07] backdrop-blur-sm hover:bg-white/[0.12]"
          : "border border-line bg-white hover:border-gold"
      }`}
    >
      <GoogleG className="w-6 h-6 flex-shrink-0" />
      <span className="flex items-baseline gap-2">
        <span
          className={`font-heading font-black text-lg leading-none ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {clinic.rating}
        </span>
        <span className="flex gap-0.5 self-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-gold-bright text-gold-bright" />
          ))}
        </span>
      </span>
      <span
        className={`text-[0.78rem] leading-tight ${dark ? "text-white/70" : "text-gray"}`}
      >
        {clinic.reviewCount}+ Google
        <br />
        reviews
      </span>
    </a>
  );
}
