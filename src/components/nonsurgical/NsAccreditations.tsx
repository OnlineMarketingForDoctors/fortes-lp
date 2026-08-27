import Image from "next/image";
import { accreditations } from "@/lib/assets";

export default function NsAccreditations() {
  return (
    <section className="bg-white border-t border-line py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <p className="text-center eyebrow mb-12">Regulated &amp; accredited</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10 items-center justify-items-center">
          {accreditations.map((a) => (
            <div key={a.label} className="relative h-16 lg:h-20 w-full max-w-[180px]">
              <Image
                src={a.src}
                alt={a.label}
                fill
                unoptimized
                sizes="200px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
