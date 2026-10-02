"use client";

import React from "react";
import { Server, DollarSign, Wrench, PhoneCall, CheckCircle2 } from "lucide-react";
import { ServerRackGraphic } from "./Logo";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      
      {/* LEFT FADING RACK MOUNT SERVER VISUAL */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-[300px] h-[480px] lg:w-[360px] lg:h-[560px] text-[#1E5285] opacity-[0.07] pointer-events-none select-none z-0 hidden lg:block">
        <ServerRackGraphic className="w-full h-full" />
      </div>

      {/* RIGHT FADING RACK MOUNT SERVER VISUAL */}
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 w-[300px] h-[480px] lg:w-[360px] lg:h-[560px] text-[#1E5285] opacity-[0.07] pointer-events-none select-none z-0 hidden lg:block">
        <ServerRackGraphic className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 px-3 py-1 bg-blue-100 rounded-full border border-blue-200">
            Built For Peace Of Mind
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose TechMedini?
          </h2>
          <p className="text-slate-600 text-base">
            We eliminate the complexity of cloud hosting so you can focus on running your school, restaurant, or business.
          </p>
        </div>

        {/* 4 HIGHLIGHT CARDS (WITH HOVER SCALE & ELEVATED SHADOW) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* HIGHLIGHT 1 */}
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-sm space-y-3 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-300 group">
            <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold transition-transform group-hover:scale-110">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Fast Local Servers in India
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Your software runs on local Indian data centers, ensuring ultra-fast loading speed for your staff and customers across India.
            </p>
          </div>

          {/* HIGHLIGHT 2 */}
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-sm space-y-3 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-300 group">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold transition-transform group-hover:scale-110">
              <DollarSign className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Affordable & Fixed Monthly Pricing
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No hidden currency conversion fees or unexpected bills. Clear Indian Rupee pricing with official GST invoices for tax savings.
            </p>
          </div>

          {/* HIGHLIGHT 3 */}
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-sm space-y-3 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-300 group">
            <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold transition-transform group-hover:scale-110">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Zero Technical Knowledge Needed
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We handle server setup, security updates, and daily data backups completely. You don't need an IT department.
            </p>
          </div>

          {/* HIGHLIGHT 4 */}
          <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-6 shadow-sm space-y-3 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-300 group">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center font-bold transition-transform group-hover:scale-110">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Dedicated Phone & WhatsApp Support
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Whenever you need assistance, reach a real human support engineer instantly via Phone or WhatsApp in India.
            </p>
          </div>

        </div>

        {/* SIMPLE TRUST COMPARISON BOX */}
        <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-slate-900">
              How TechMedini Compares to Overseas Cloud Hosts
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Made for local Indian operational requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* OTHER OVERSEAS CLOUD */}
            <div className="p-5 rounded-lg bg-red-50/50 border border-red-200 space-y-3 text-xs transition-all duration-300 hover:border-red-300">
              <div className="font-bold text-red-900 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500" />
                Generic Overseas Cloud Providers
              </div>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">✕</span> Unpredictable bills in USD ($) with exchange rate fluctuations
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">✕</span> Automated email tickets with days of waiting
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-600 font-bold">✕</span> Complex technical control panels meant for software coders
                </li>
              </ul>
            </div>

            {/* TECHMEDINI */}
            <div className="p-5 rounded-lg bg-emerald-50/60 border border-emerald-200 space-y-3 text-xs transition-all duration-300 hover:border-emerald-300 hover:shadow-md">
              <div className="font-bold text-emerald-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                TechMedini Managed Indian Hosting
              </div>
              <ul className="space-y-2 text-slate-800">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Fixed monthly INR (₹) bills with full GST tax credit
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Direct Phone & WhatsApp resolution with local Indian team
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-600 font-bold">✓</span> Fully managed setup so you only focus on your business
                </li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
