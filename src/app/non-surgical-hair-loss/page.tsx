import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import { SpinningDivider } from "@/components/SpinningBadge";
import NsHero from "@/components/nonsurgical/NsHero";
import NsTrustStrip from "@/components/nonsurgical/NsTrustStrip";
import NsEmotionalHook from "@/components/nonsurgical/NsEmotionalHook";
import NsTreatmentPicker from "@/components/nonsurgical/NsTreatmentPicker";
import NsTreatments from "@/components/nonsurgical/NsTreatments";
import NsComparison from "@/components/nonsurgical/NsComparison";
import NsTriage from "@/components/nonsurgical/NsTriage";
import NsWhyFortes from "@/components/nonsurgical/NsWhyFortes";
import NsProcess from "@/components/nonsurgical/NsProcess";
import NsResults from "@/components/nonsurgical/NsResults";
import NsReviews from "@/components/nonsurgical/NsReviews";
import NsDoctor from "@/components/nonsurgical/NsDoctor";
import NsPricing from "@/components/nonsurgical/NsPricing";
import NsLocation from "@/components/nonsurgical/NsLocation";
import NsFaq from "@/components/nonsurgical/NsFaq";
import NsDisclaimer from "@/components/nonsurgical/NsDisclaimer";
import { ai } from "@/lib/assets";

export const metadata: Metadata = {
  title:
    "Non-Surgical Hair Loss Treatment London | PRP, PRF, Exosomes & Regenera Activa — Fortes Clinic",
  description:
    "Doctor-led non-surgical hair loss treatment in London. PRP hair treatment, PRF, exosome hair therapy and Regenera Activa at our CQC-registered clinic. Book a free consultation.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Non-Surgical Hair Loss Treatment in London — Fortes Clinic",
    description:
      "Four doctor-led treatments for thinning hair without surgery or downtime: PRP, PRF, exosome therapy and Regenera Activa. Free consultation in Little Venice.",
    type: "website",
  },
};

const leftNav = [
  { href: "#treatments", label: "Treatments" },
  { href: "#compare", label: "Compare" },
  { href: "#suits", label: "Which Suits Me" },
];
const rightNav = [
  { href: "#doctor", label: "Meet Dr Saeed" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQs" },
];

export default function NonSurgicalHairLossPage() {
  return (
    <>
      <Header leftNav={leftNav} rightNav={rightNav} />
      <FloatingCTA />
      <WhatsAppButton />
      <main>
        <NsHero />
        <NsTrustStrip />
        <NsEmotionalHook />
        <SpinningDivider />
        <NsTreatmentPicker />
        <NsTreatments />
        <SpinningDivider />
        <NsComparison />
        <NsTriage />
        <SpinningDivider />
        <NsWhyFortes />
        <NsProcess />
        <NsResults />
        <NsReviews />
        <SpinningDivider />
        <NsDoctor />
        <NsPricing />
        <NsLocation />
        <NsFaq />
        <ContactForm
          eyebrow="Book"
          heading="Request a Consultation with Dr Saeed"
          blurb="A private, clinician-led conversation about what is driving your hair loss and which non-surgical treatment — if any — is right for it. The initial consultation is free and there is no obligation to book treatment."
          image={ai.clinicRoom}
          imageAlt="The treatment room at Fortes Clinic in Little Venice"
        />
        <NsDisclaimer />
      </main>
      <Footer showMap={false} />
    </>
  );
}
