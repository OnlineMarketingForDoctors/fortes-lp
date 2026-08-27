import Image from "next/image";
import { MapPin, Train, Clock } from "lucide-react";
import { ai, clinic } from "@/lib/assets";

const points = [
  {
    icon: Train,
    title: "Getting here",
    body: "Warwick Avenue (Bakerloo) is a five-minute walk and Paddington is one stop away, which makes us straightforward to reach for appointments booked around a working day. Metered parking is available on Clifton Road.",
  },
  {
    icon: MapPin,
    title: "Who we see",
    body: "Most people booking PRP hair loss treatment London-side come to us from Central and West London, but we also see patients travelling from across the UK for treatments that are harder to find, PRF in particular.",
  },
  {
    icon: Clock,
    title: "What to expect on the day",
    body: "Whether you are booked for hair plasma treatment, exosome therapy or Regenera Activa, allow about an hour. Come hydrated, and you can go straight back to work afterwards.",
  },
];

export default function NsLocation() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden ring-1 ring-black/5 shadow-[var(--shadow-soft)]">
              <Image
                src={ai.clinicRoom}
                alt="The Fortes Clinic treatment room in Little Venice"
                fill
                unoptimized
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <a
              href="https://maps.app.goo.gl/r5RWkVwTsqsCDrK56"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-3 rounded-[10px] border border-line bg-white px-5 py-4 transition hover:border-gold"
            >
              <MapPin className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={2} />
              <span className="text-[0.92rem] text-ink font-semibold">
                {clinic.address}
              </span>
            </a>
          </div>

          <div className="lg:col-span-6">
            <p className="eyebrow mb-4">Finding us</p>
            <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.14] text-ink mb-6">
              Hair PRP Treatment in Central London
            </h2>
            <p className="lead text-gray-mid max-w-[52ch] mb-9">
              Our clinic is at 22 Clifton Road in Little Venice, a few minutes
              from Warwick Avenue and Maida Vale, and within easy reach of
              Paddington, Marylebone and the Harley Street medical district.
            </p>

            <dl className="border-t border-line">
              {points.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex gap-5 border-b border-line py-6"
                >
                  <dt className="flex-shrink-0">
                    <span className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center text-gold">
                      <Icon className="w-4.5 h-4.5" strokeWidth={1.8} />
                    </span>
                    <span className="sr-only">{title}</span>
                  </dt>
                  <dd>
                    <span className="block heading-sans text-[1rem] text-ink mb-1.5">
                      {title}
                    </span>
                    <span className="block text-gray text-[0.92rem] leading-relaxed">
                      {body}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
