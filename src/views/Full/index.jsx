import HeroSection from "../../componnent/section/HeroSection";
import AboutSection from "../../componnent/section/AboutSection";
import ServiceSection from "../../componnent/section/serviceService";
import PriceSection from "../../componnent/section/priceSection";
import FaqsSection from "../../componnent/section/faqSection";
import EventBanner from "../../componnent/section/EventsBanner";

export default function FullPage() {

  return (
    <> 
      <HeroSection />
      <EventBanner />
      <AboutSection />
      <ServiceSection />
      <PriceSection />
      <FaqsSection />
    </>
  );
}
