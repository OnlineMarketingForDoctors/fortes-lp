import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import EmotionalHook from "@/components/EmotionalHook";
import PressStrip from "@/components/PressStrip";
import WhyChooseUs from "@/components/WhyChooseUs";
import Techniques from "@/components/Techniques";
import Process from "@/components/Process";
import Results from "@/components/Results";
import MeetDoctor from "@/components/MeetDoctor";
import Aftercare from "@/components/Aftercare";
import Accreditations from "@/components/Accreditations";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import PatientStories from "@/components/PatientStories";
import ClinicCallout from "@/components/ClinicCallout";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ReviewsCarousel />
        <EmotionalHook />
        <PressStrip />
        <WhyChooseUs />
        <Techniques />
        <Process />
        <Results />
        <ClinicCallout />
        <MeetDoctor />
        <PatientStories />
        <Aftercare />
        <Accreditations />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
