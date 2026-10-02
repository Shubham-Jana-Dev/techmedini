"use client";

import React, { useState } from "react";
import { Server, PhoneCall, Menu, X, ChevronRight } from "lucide-react";

import Logo from "./Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* LEFT: PROMINENT BRAND LOGO (ICON + STACKED TECH MEDINI TEXT) */}
          <a href="#" className="flex items-center gap-3.5 shrink-0 group py-1">
            <Logo className="w-11 h-11 text-[#1E5285] transition-transform group-hover:scale-105 shrink-0" />
            <div className="hidden sm:flex flex-col justify-center border-l border-slate-200 pl-3 py-0.5">
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/80 font-mono w-fit">
                techmedini.in
              </span>
              <span className="text-[11px] text-slate-500 font-medium mt-0.5 whitespace-nowrap">
                Data Center & Business Solutions
              </span>
            </div>
          </a>

          {/* CENTER: SINGLE-LINE NAV LINKS (FOR LARGE SCREENS) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#school-erp"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              School ERP
            </a>
            <a
              href="#restaurant-pos"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Restaurant POS
            </a>
            <a
              href="#business-hosting"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              SMB Hosting
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Pricing
            </a>
            <a
              href="#why-us"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Why Choose Us
            </a>
            <a
              href="#contact-section"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              Contact Us
            </a>
          </nav>

          {/* RIGHT: PHONE & INQUIRY CTA BUTTON */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="tel:+918046809920"
              className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-blue-600 hover:bg-slate-100 rounded-md transition-colors whitespace-nowrap border border-transparent hover:border-slate-200"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
              <span>+91 80 4680 9920</span>
            </a>

            <button
              onClick={scrollToContact}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all shadow-sm flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Inquiry / Call Us</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={scrollToContact}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 rounded-md whitespace-nowrap"
            >
              Inquiry
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-md border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE NAV MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-md">
          <a
            href="#school-erp"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1.5"
          >
            School ERP Hosting
          </a>
          <a
            href="#restaurant-pos"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1.5"
          >
            Restaurant POS & Billing
          </a>
          <a
            href="#business-hosting"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1.5"
          >
            Small Business Cloud ERP
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1.5"
          >
            Simple Pricing Plans
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1.5"
          >
            Why Choose TechMedini
          </a>
          <a
            href="#contact-section"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-700 hover:text-blue-600 py-1.5"
          >
            Contact & Inquiry
          </a>

          <div className="pt-3 border-t border-slate-200 space-y-2">
            <a
              href="tel:+918046809920"
              className="flex items-center justify-center gap-2 py-2 text-xs font-semibold text-slate-700 bg-slate-100 rounded-md"
            >
              <PhoneCall className="w-3.5 h-3.5 text-blue-600" />
              <span>Call Us: +91 80 4680 9920</span>
            </a>

            <button
              onClick={scrollToContact}
              className="w-full py-2.5 text-xs font-semibold text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md"
            >
              Get Started / Submit Inquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
