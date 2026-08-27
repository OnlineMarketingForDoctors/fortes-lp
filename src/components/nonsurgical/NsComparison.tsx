import Image from "next/image";
import { treatments } from "./treatments";

const columns = [
  { label: "PRP", icon: treatments[0].icon },
  { label: "PRF", icon: treatments[1].icon },
  { label: "Exosomes", icon: treatments[2].icon },
  { label: "Regenera Activa", icon: treatments[3].icon },
];

const rows: { label: string; values: [string, string, string, string] }[] = [
  {
    label: "Source",
    values: [
      "Your own blood",
      "Your own blood",
      "Prepared exosome solution",
      "Your own scalp tissue",
    ],
  },
  {
    label: "Preparation",
    values: [
      "Centrifuged with anticoagulant",
      "Slower spin, no additives",
      "Prepared in advance",
      "Punch biopsy, processed in clinic",
    ],
  },
  {
    label: "How it acts",
    values: [
      "Growth factors released on delivery",
      "Fibrin scaffold, gradual release",
      "Concentrated cell signalling",
      "Cell suspension from your own tissue",
    ],
  },
  {
    label: "Visits",
    values: [
      "Monthly, minimum 3",
      "Course discussed at consultation",
      "Course discussed at consultation",
      "Single session",
    ],
  },
  {
    label: "Anaesthetic",
    values: ["Topical", "Topical", "Topical", "Local, for the donor punch"],
  },
  {
    label: "Downtime",
    values: ["None expected", "None expected", "None expected", "Minimal"],
  },
  {
    label: "Often considered for",
    values: [
      "Early thinning; first treatment; post-transplant support",
      "Preference for gradual release; limited response to PRP",
      "Limited response to platelet-based treatment",
      "Wanting a single session rather than a course",
    ],
  },
  {
    label: "Availability in London",
    values: ["Widely offered", "Uncommon", "Increasingly offered", "Limited"],
  },
];

export default function NsComparison() {
  return (
    <section id="compare" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1280px] px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-4">Side by side</p>
          <h2 className="h-display text-[2rem] lg:text-[2.8rem] !leading-[1.14] text-ink mb-4">
            PRP vs PRF vs Exosomes vs Regenera Activa
          </h2>
          <p className="lead text-gray-mid">
            The differences that actually affect your decision: what each
            treatment uses, how many visits it takes, and who it tends to suit.
          </p>
        </div>

        {/* From md up the real table; below it, one card per treatment, so
            nothing depends on sideways scrolling. */}
        <div className="hidden md:block overflow-x-auto rounded-[12px] border border-line shadow-[var(--shadow-soft)]">
          <table className="w-full min-w-[860px] border-collapse text-left">
            <caption className="sr-only">
              A comparison of PRP, PRF, exosome therapy and Regenera Activa at
              Fortes Clinic
            </caption>
            <thead>
              <tr>
                <th scope="col" className="bg-slate w-[190px]">
                  <span className="sr-only">Treatment attribute</span>
                </th>
                {columns.map((c) => (
                  <th
                    key={c.label}
                    scope="col"
                    className="bg-charcoal text-white font-ui uppercase tracking-[0.1em] text-[0.78rem] font-semibold px-5 pt-5 pb-4 align-bottom"
                  >
                    <span className="flex flex-col items-start gap-3">
                      <span className="relative w-14 h-14 rounded-[8px] overflow-hidden ring-1 ring-white/15">
                        <Image
                          src={c.icon}
                          alt=""
                          fill
                          unoptimized
                          sizes="56px"
                          className="object-cover"
                          aria-hidden
                        />
                      </span>
                      {c.label}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-line">
                  <th
                    scope="row"
                    className="bg-cream text-ink font-semibold text-[0.88rem] px-5 py-4 align-top"
                  >
                    {r.label}
                  </th>
                  {r.values.map((v, i) => (
                    <td
                      key={columns[i].label}
                      className="px-5 py-4 align-top text-[0.9rem] text-gray-mid bg-white"
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-5">
          {columns.map((c, ci) => (
            <div
              key={c.label}
              className="rounded-[12px] border border-line overflow-hidden shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center gap-4 bg-charcoal px-5 py-4">
                <span className="relative w-12 h-12 flex-shrink-0 rounded-[8px] overflow-hidden ring-1 ring-white/15">
                  <Image
                    src={c.icon}
                    alt=""
                    fill
                    unoptimized
                    sizes="48px"
                    className="object-cover"
                    aria-hidden
                  />
                </span>
                <h3 className="text-white font-ui uppercase tracking-[0.1em] text-[0.82rem] font-semibold">
                  {c.label}
                </h3>
              </div>
              <dl className="bg-white">
                {rows.map((r) => (
                  <div
                    key={r.label}
                    className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-line px-5 py-3.5"
                  >
                    <dt className="text-[0.82rem] font-semibold text-ink">{r.label}</dt>
                    <dd className="text-[0.88rem] text-gray-mid">{r.values[ci]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-soft leading-relaxed max-w-3xl mt-6">
          This table compares how the treatments work and what they involve. It is
          not a ranking. None of these is better than the others in the abstract,
          and which one suits you depends on the cause and stage of your hair
          loss.
        </p>
      </div>
    </section>
  );
}
