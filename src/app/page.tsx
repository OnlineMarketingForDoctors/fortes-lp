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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PressStrip />
        <ReviewsCarousel />
        <EmotionalHook />
        <Results />
        <WhatSetsUsApart />
        <WhyChoose />
        <FeaturedStory />
        <SocialProof />
        <MeetDoctor />
        <Process />
        <Aftercare />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
