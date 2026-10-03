"use client";

import React from "react";
import { 
  ShieldCheck, 
  CheckCircle2, 
  PhoneCall, 
  Database, 
  Clock, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { ServerRackGraphic } from "./Logo";

export default function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    const el = document.getElementById("services-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-transparent border-b border-slate-200 py-16 md:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: DIRECT BUSINESS HEADLINE & CTAS */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold border border-blue-200 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Reliable Local Hosting in India</span>
            </div>

            {/* HEADLINE */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Simple & Secure Cloud Hosting for Your{" "}
              <span className="text-blue-600">School, Restaurant, or Business</span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              We provide fast, reliable server hosting and custom ERP software so your business operations run smoothly 24/7 without technical headaches.
            </p>

            {/* ACTION BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={scrollToContact}
                className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-600/20 flex items-center gap-2"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={scrollToServices}
                className="px-6 py-3 text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-all duration-300 hover:scale-[1.03]"
              >
                View Services
              </button>
            </div>

            {/* QUICK HIGHLIGHT BADGES */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">99.9%</div>
                <div className="text-xs text-slate-500 font-medium">Target Uptime</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">Indian DC</div>
                <div className="text-xs text-slate-500 font-medium">Local Data Storage</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900">24/7</div>
                <div className="text-xs text-slate-500 font-medium">Phone & WhatsApp Support</div>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: CLEAN FRIENDLY VISUAL CARD (3 KEY PROMISES - WITH HOVER EFFECT) */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/15 hover:border-blue-300 group">
              
              <div className="border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-4 h-4" />
                  Our Core Guarantee to You
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Why Indian Businesses Trust TechMedini
                </h3>
              </div>

              {/* PROMISE 1 */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-blue-50/60 border border-blue-100 transition-all duration-300 group-hover:border-blue-200">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 font-bold transition-transform group-hover:scale-110">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    1. 99.9% Reliable Uptime
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Your software and billing portal never go down during critical business hours.
                  </p>
                </div>
              </div>

              {/* PROMISE 2 */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-emerald-50/60 border border-emerald-100 transition-all duration-300 group-hover:border-emerald-200">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 font-bold transition-transform group-hover:scale-110">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    2. Local Indian Support
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Speak directly with real people in India for fast resolution via Phone or WhatsApp.
                  </p>
                </div>
              </div>

              {/* PROMISE 3 */}
              <div className="flex items-start gap-4 p-4 rounded-lg bg-purple-50/60 border border-purple-100 transition-all duration-300 group-hover:border-purple-200">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center shrink-0 font-bold transition-transform group-hover:scale-110">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    3. Daily Automatic Backups
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Your student records, billing data, and financial books are backed up safely every single night.
                  </p>
                </div>
              </div>

              {/* TRUST FOOTNOTE */}
              <div className="pt-2 text-center text-xs text-slate-500 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero complex tech setup required • We manage everything for you</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
