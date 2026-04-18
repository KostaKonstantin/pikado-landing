import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WhatIsPikado from "@/sections/WhatIsPikado";
import CoreFeatures from "@/sections/CoreFeatures";
import HowItWorks from "@/sections/HowItWorks";
import SystemOverview from "@/sections/SystemOverview";
import RealTimeDemo from "@/sections/RealTimeDemo";
import TrustSection from "@/sections/TrustSection";
import FinalCTA from "@/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WhatIsPikado />
        <CoreFeatures />
        <HowItWorks />
        <SystemOverview />
        <RealTimeDemo />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}
