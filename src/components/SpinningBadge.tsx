import Image from "next/image";
import { logos } from "@/lib/assets";

export default function SpinningBadge({
  size = 96,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }} aria-hidden>
      <Image
        src={logos.spinning}
        alt=""
        width={size}
        height={size}
        unoptimized
        className="spin-slow w-full h-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.35)]"
      />
    </div>
  );
}

/** Sits centred on the seam between two sections, straddling the junction. */
export function SpinningDivider({ size = 104 }: { size?: number }) {
  return (
    <div className="relative z-30 h-0">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        <SpinningBadge size={size} />
      </div>
    </div>
  );
}
