"use client";

import React from "react";
import { GraduationCap, UtensilsCrossed, Building2, CheckCircle2, ArrowRight } from "lucide-react";

export default function HostingPillars() {
  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services-section" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            Tailored Business Hosting
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our 3 Core Hosting Solutions
          </h2>
          <p className="text-slate-600 text-base">
            Simple, high-speed cloud hosting designed specifically for Indian educational institutions, food outlets, and local small businesses.
          </p>
        </div>

        {/* 3 CORE SERVICE CARDS (WITH HOVER SCALE & SHADOW) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARD 1: SCHOOL ERP HOSTING */}
          <div id="school-erp" className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold shadow-md transition-transform group-hover:scale-110">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                School ERP Hosting
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Manage student records, online fee payments, report cards, and staff attendance on a fast, secure portal.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Handles high traffic during result publications</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Smooth Razorpay & UPI fee gateway integration</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Automatic student data protection & backups</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={scrollToContact}
                className="w-full py-2.5 text-xs font-semibold text-blue-700 bg-white hover:bg-blue-600 hover:text-white border border-blue-200 rounded-md transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                Inquire About School ERP Hosting
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 2: RESTAURANT POS & BILLING */}
          <div id="restaurant-pos" className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-emerald-900/10 hover:border-emerald-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold shadow-md transition-transform group-hover:scale-110">
                <UtensilsCrossed className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Restaurant POS & Billing
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fast billing, kitchen order printing (KOT), inventory tracking, and daily sales reports that work even with internet hiccups.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant receipt printing without lag</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Works offline during internet drops</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Multi-outlet inventory management</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={scrollToContact}
                className="w-full py-2.5 text-xs font-semibold text-emerald-700 bg-white hover:bg-emerald-600 hover:text-white border border-emerald-200 rounded-md transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                Inquire About Restaurant POS
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 3: SMALL BUSINESS ERP */}
          <div id="business-hosting" className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/10 hover:border-purple-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-600 text-white flex items-center justify-center font-bold shadow-md transition-transform group-hover:scale-110">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Small Business ERP
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Custom cloud hosting for GST billing, stock management, and customer records tailored for Indian businesses.
              </p>

              <div className="pt-2 space-y-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pre-configured for Tally & Odoo setups</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Full GST tax credit invoicing provided</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Affordable fixed monthly pricing</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={scrollToContact}
                className="w-full py-2.5 text-xs font-semibold text-purple-700 bg-white hover:bg-purple-600 hover:text-white border border-purple-200 rounded-md transition-all flex items-center justify-center gap-1.5 shadow-xs"
              >
                Inquire About Business ERP
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
