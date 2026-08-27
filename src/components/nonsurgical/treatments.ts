import { ns } from "@/lib/assets";

export type Treatment = {
  id: string;
  /** Square still life used in the comparison table header. */
  icon: string;
  num: string;
  /** Short label used on the treatment picker tiles. */
  tile: { title: string; blurb: string; cta: string };
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  /** Callout box — used where a treatment needs an availability note. */
  callout?: { lead: string; body: string };
  benefits: { lead: string; rest: string }[];
  tags: string[];
  spec: { label: string; value: string }[];
};

export const treatments: Treatment[] = [
  {
    id: "prp",
    icon: ns.iconPrp,
    num: "01",
    tile: {
      title: "PRP Hair Treatment",
      blurb:
        "Platelet rich plasma from your own blood, injected into thinning areas of the scalp. The most established of the four.",
      cta: "PRP for thinning hair",
    },
    eyebrow: "Treatment 01",
    title: "PRP Hair Treatment London",
    image: ns.prpInjection,
    imageAlt: "Platelet rich plasma being injected into a man's thinning crown",
    paragraphs: [
      "PRP hair treatment — platelet rich plasma hair treatment — uses the platelets in your own blood to support follicle activity in areas of thinning. It is the most established non-surgical hair loss treatment we offer, and for most people it is the sensible place to start.",
      "A sample of blood is taken from your arm and spun in a centrifuge to separate it into layers. The platelet-rich layer is prepared and injected into the affected areas of the scalp. Platelets carry growth factors and cytokines involved in repair, and the aim of PRP for hair growth is to use those signals to support density and hair quality in a natural, non-surgical way.",
      "PRP for thinning hair and PRP for hair regrowth are used most often for early-stage, diffuse loss — the widening parting, the softening temple, the crown that has thinned gradually. PRP injections for hair loss can also be used after a hair transplant to support the transplanted follicles.",
    ],
    benefits: [
      { lead: "Uses your own blood", rest: "no external substances involved in the PRP itself" },
      { lead: "Supports density and quality", rest: "the aim is thicker, healthier-looking hair, not new follicles" },
      { lead: "Around one hour per session", rest: "practical to schedule around work" },
      { lead: "Suits early thinning", rest: "most useful while the follicle is still active" },
      { lead: "Can support a transplant", rest: "used alongside surgical hair restoration where appropriate" },
    ],
    tags: [
      "PRP hair loss treatment",
      "Plasma hair treatment",
      "Plasma therapy for hair",
      "PRP hair restoration",
      "Hair PRP London",
    ],
    spec: [
      { label: "What it uses", value: "Your own platelets" },
      { label: "Session length", value: "About 1 hour" },
      { label: "Typical course", value: "Monthly, minimum 3 sessions" },
      { label: "Anaesthetic", value: "Topical only" },
      { label: "Downtime", value: "None expected" },
      { label: "Best suited to", value: "Early / diffuse thinning" },
    ],
  },
  {
    id: "prf",
    icon: ns.iconPrf,
    num: "02",
    tile: {
      title: "PRF Hair Treatment",
      blurb:
        "Platelet rich fibrin — a slower spin, no anticoagulant, and a fibrin scaffold that releases growth factors gradually.",
      cta: "PRF for hair loss",
    },
    eyebrow: "Treatment 02 · few London clinics offer this",
    title: "PRF Hair Treatment — Platelet Rich Fibrin",
    image: ns.prfCentrifuge,
    imageAlt: "A blood centrifuge and spun tubes prepared for PRF treatment",
    paragraphs: [
      "PRF hair treatment is the second generation of the same idea. Platelet rich fibrin hair treatment uses your own blood, but it is spun more slowly and without anticoagulant. What that produces is different: as well as platelets, PRF retains white cells and fibrin, which forms a soft scaffold in the tissue.",
      "That scaffold is the point. Rather than releasing growth factors all at once, PRF for hair loss releases them gradually as the fibrin matrix breaks down. PRF for hair and PRF hair restoration are therefore often discussed where a slower, more sustained release is preferred, or where someone has already had PRP and wants to try a different preparation.",
    ],
    callout: {
      lead: "Not widely available in London.",
      body: "PRF requires different tubes and a different spin protocol to PRP, so relatively few London clinics offer platelet rich fibrin for hair loss as a distinct treatment. Fortes Clinic offers both, which means the choice between them is a clinical one rather than a matter of what happens to be available.",
    },
    benefits: [
      { lead: "No anticoagulant or additives", rest: "nothing is added to the blood before it is prepared" },
      { lead: "Gradual release", rest: "the fibrin matrix releases growth factors over time rather than immediately" },
      { lead: "Retains white cells", rest: "a different biological profile to standard PRP" },
      { lead: "Same session format", rest: "a blood sample, preparation, then scalp injection" },
      { lead: "An option after PRP", rest: "where response to PRP has been limited" },
    ],
    tags: ["PRF hair", "PRF treatment for hair", "PRF hair growth", "PRF hair loss treatment"],
    spec: [
      { label: "What it uses", value: "Your own blood, no additives" },
      { label: "Key difference", value: "Slower spin, fibrin scaffold" },
      { label: "Session length", value: "About 1 hour" },
      { label: "Typical course", value: "Discussed at consultation" },
      { label: "Downtime", value: "None expected" },
      { label: "Availability", value: "Uncommon in London" },
    ],
  },
  {
    id: "exosomes",
    icon: ns.iconExosomes,
    num: "03",
    tile: {
      title: "Exosome Hair Treatment",
      blurb:
        "Exosome therapy delivers concentrated signalling molecules to the follicle. Often considered when PRP response has been limited.",
      cta: "Exosomes for hair loss",
    },
    eyebrow: "Treatment 03",
    title: "Exosome Hair Treatment London",
    image: ns.exosomeVials,
    imageAlt: "Exosome solution being drawn from a vial into a syringe",
    paragraphs: [
      "Exosomes are extracellular vesicles — very small packages that cells use to signal to one another. They carry proteins, lipids and genetic signalling material. Exosome hair therapy applies that signalling directly to the scalp, and exosomes for hair loss have become one of the most discussed developments in regenerative hair medicine.",
      "Where PRP and PRF concentrate what is already in your blood, exosome treatment for hair delivers a prepared, standardised concentration of signalling material. That is the practical distinction, and it is why exosomes for hair are often raised where someone has had a limited response to platelet-based treatment, or where platelet quality may be reduced.",
      "We will be straightforward with you about the evidence. Exosome therapy for hair loss is a newer field than PRP, the published research is still developing, and it is not a licensed medicine for hair loss in the UK. What we can tell you is who tends to be considered suitable, what a course involves, and what it is reasonable to expect — which is a conversation to have at your consultation, not a promise to make on a web page.",
    ],
    benefits: [
      { lead: "Concentrated signalling", rest: "a prepared, consistent preparation rather than one derived from your own blood on the day" },
      { lead: "No surgery", rest: "delivered by scalp injection in clinic" },
      { lead: "Often considered after PRP", rest: "where response has been limited" },
      { lead: "Suits diffuse thinning", rest: "including female-pattern and post-partum hair loss" },
      { lead: "Honest expectation-setting", rest: "we will tell you if we do not think it is right for you" },
    ],
    tags: [
      "Exosomes hair",
      "Hair exosomes",
      "Exosomes for hair growth",
      "Exosome hair treatment London",
    ],
    spec: [
      { label: "What it uses", value: "Prepared exosome solution" },
      { label: "Delivery", value: "Scalp injection" },
      { label: "Session length", value: "About 1 hour" },
      { label: "Typical course", value: "Discussed at consultation" },
      { label: "Downtime", value: "None expected" },
      { label: "Evidence base", value: "Newer than PRP" },
    ],
  },
  {
    id: "regenera",
    icon: ns.iconRegenera,
    num: "04",
    tile: {
      title: "Regenera Activa",
      blurb:
        "Autologous micrografting. A small punch of your own scalp tissue is processed and re-injected in a single session.",
      cta: "Regenera Activa treatment",
    },
    eyebrow: "Treatment 04 · available in clinic",
    title: "Regenera Activa",
    image: ns.regeneraPunch,
    imageAlt: "A small punch of scalp tissue taken from behind a patient's ear",
    paragraphs: [
      "Regenera Activa is different from the other three, because it does not start with blood. Regenera Activa treatment takes a small punch of scalp tissue — usually from behind the ear, under local anaesthetic — and processes it in a dedicated device to produce a suspension of your own cells, which is then injected into the thinning areas.",
      "It is a micrografting technique, and the practical appeal is that Regenera hair treatment is delivered in a single session rather than a monthly course. For people who want to act on hair loss but cannot commit to repeated monthly appointments, that matters. Regenera for hair loss is generally discussed for early to moderate thinning, in the same window where the other non-surgical options are most useful.",
      "Dr Saeed performs Regenera Activa at our Little Venice clinic. As with everything else on this page, whether Regenera hair treatment suits you depends on your assessment.",
    ],
    benefits: [
      { lead: "Single session", rest: "not a monthly course" },
      { lead: "Uses your own tissue", rest: "processed and re-injected the same day" },
      { lead: "Local anaesthetic", rest: "for the small donor punch behind the ear" },
      { lead: "Suits early to moderate loss", rest: "where follicles remain active" },
      { lead: "Performed by Dr Saeed", rest: "in clinic, not referred elsewhere" },
    ],
    tags: ["Regenera treatment", "Regenera hair", "Hair Regenera", "Regenera for hair loss"],
    spec: [
      { label: "What it uses", value: "Your own scalp tissue" },
      { label: "Technique", value: "Autologous micrografting" },
      { label: "Sessions", value: "Single session" },
      { label: "Anaesthetic", value: "Local" },
      { label: "Downtime", value: "Minimal" },
      { label: "Best suited to", value: "Early / moderate thinning" },
    ],
  },
];
