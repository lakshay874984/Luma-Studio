import Image from "next/image";
import { Button } from "@/components/ui/button"
import { HomeHeroSection } from "@/components/HomeHeroSection";
import { GalleryShowcaseSection } from "@/components/GalleryShowcaseSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PricingSection } from "@/components/PricingSection"; 
import Testimonials from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
       <main className="min-h-screen bg-background p-3 sm:p-4 lg:p-5">
      <HomeHeroSection />
      <GalleryShowcaseSection />
      <HowItWorksSection  />
      <PricingSection />  
    <Testimonials />
    <Footer />
      
    </main>
  );
}
