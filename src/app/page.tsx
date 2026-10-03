"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HostingPillars from "@/components/HostingPillars";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";
import StickyBackgroundServers from "@/components/StickyBackgroundServers";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white overflow-x-clip">
      {/* PERSISTENT STICKY BACKGROUND SERVER SVGS */}
      <StickyBackgroundServers />

      {/* TOP NAVIGATION */}
      <Navbar />

      {/* PAGE SECTIONS */}
      <div className="relative z-10">
        <Hero />
        <HostingPillars />
        <WhyChooseUs />
        <PricingSection />
        <ContactFormSection />
      </div>

      {/* FOOTER (HIDES STICKY BACKGROUND SVGS BEHIND IT) */}
      <Footer />
    </main>
  );
}
