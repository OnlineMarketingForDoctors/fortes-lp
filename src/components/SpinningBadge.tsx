import Image from "next/image";
import { logos } from "@/lib/assets";

export default function SpinningBadge({
  className = "",
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <Image
        src={logos.spinning}
        alt=""
        width={size}
        height={size}
        className="spin-slower"
      />
    </div>
  );
}
