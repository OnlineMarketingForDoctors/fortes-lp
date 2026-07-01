import { CalendarCheck } from "lucide-react";

export default function FloatingCTA() {
  return (
    <a
      href="#consult"
      aria-label="Book your free consultation"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 w-[86px] py-4 px-2
                 bg-[linear-gradient(160deg,#b28b45_0%,#f1c77a_100%)] text-white text-center
                 rounded-tl-[16px] rounded-bl-[16px]
                 shadow-[-6px_8px_22px_-6px_rgba(0,0,0,0.4)] hover:brightness-105 transition
                 flex flex-col items-center gap-1.5"
    >
      <CalendarCheck className="w-6 h-6" strokeWidth={2} />
      <span className="font-ui uppercase text-[10px] leading-[1.3] font-bold tracking-[0.02em]">
        Free
        <br />
        Consultation
      </span>
    </a>
  );
}
