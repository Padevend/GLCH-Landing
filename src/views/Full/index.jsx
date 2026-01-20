// import image
import { useState } from "react";
import HeroSection from "../../componnent/section/HeroSection";
import AboutSection from "../../componnent/section/AboutSection";
import ServiceSection from "../../componnent/section/serviceService";
import PriceSection from "../../componnent/section/priceSection";
import FaqsSection from "../../componnent/section/faqSection";

export default function FullPage() {
  
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <PriceSection />
      <FaqsSection />
    </>
  );
}
