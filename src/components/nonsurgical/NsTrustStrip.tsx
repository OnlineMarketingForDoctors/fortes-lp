import { clinic } from "@/lib/assets";

const points = [
  { k: clinic.rating, v: `average from ${clinic.reviewCount}+ Google reviews` },
  { k: "CQC", v: "registered clinic" },
  { k: "ISHRS", v: "member since 2016" },
  { k: "Little Venice", v: "Central London, W9" },
  { k: "Free", v: "initial consultation" },
];

export default function NsTrustStrip() {
  return (
    <div className="bg-cream border-b border-line">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8 py-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
          {points.map((p) => (
            <li key={p.k} className="text-[0.88rem] text-gray-mid">
              <span className="font-heading font-black text-ink mr-1.5">{p.k}</span>
              {p.v}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
