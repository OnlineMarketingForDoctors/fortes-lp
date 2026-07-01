import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PressStrip from "@/components/PressStrip";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import EmotionalHook from "@/components/EmotionalHook";
import Results from "@/components/Results";
import WhatSetsUsApart from "@/components/WhatSetsUsApart";
import WhyChoose from "@/components/WhyChoose";
import FeaturedStory from "@/components/FeaturedStory";
import SocialProof from "@/components/SocialProof";
import MeetDoctor from "@/components/MeetDoctor";
import Process from "@/components/Process";
import Aftercare from "@/components/Aftercare";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { SpinningDivider } from "@/components/SpinningBadge";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingCTA />
      <main>
        <Hero />
        <PressStrip />
        <ReviewsCarousel />
        <SpinningDivider />
        <EmotionalHook />
        <Results />
        <SpinningDivider />
        <WhatSetsUsApart />
        <WhyChoose />
        <SpinningDivider />
        <FeaturedStory />
        <SocialProof />
        <MeetDoctor />
        <SpinningDivider />
        <Process />
        <Aftercare />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
