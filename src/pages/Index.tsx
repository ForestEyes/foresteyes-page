import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import CitizenScienceSection from "@/components/CitizenScienceSection";
import PublicationsSection from "@/components/PublicationsSection";
import PartnersSection from "@/components/PartnersSection";
import TeamSection from "@/components/TeamSection";
import WorkshopSection from "@/components/WorkshopSection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <CitizenScienceSection />
        <VideoSection />
        <PublicationsSection />
        <WorkshopSection />
        <TeamSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
