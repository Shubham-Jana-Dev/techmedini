"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HostingPillars from "@/components/HostingPillars";
import WhyChooseUs from "@/components/WhyChooseUs";
import PricingSection from "@/components/PricingSection";
import ContactFormSection from "@/components/ContactFormSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* TOP NAVIGATION */}
      <Navbar />

      {/* HERO SECTION */}
      <Hero />

      {/* THREE CORE SERVICE CARDS */}
      <HostingPillars />

      {/* WHY CHOOSE TECHMEDINI */}
      <WhyChooseUs />

      {/* PRICING PLANS */}
      <PricingSection />

      {/* CONTACT & INQUIRY FORM */}
      <ContactFormSection />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
