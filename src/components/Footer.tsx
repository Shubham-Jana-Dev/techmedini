"use client";

import React from "react";
import { PhoneCall, Mail } from "lucide-react";
import Logo, { ServerRackGraphic } from "./Logo";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#0f172a] border-t border-slate-800 text-slate-300 text-xs pt-16 pb-12 overflow-hidden">
      
      {/* SUBTLE BACKGROUND WATERMARK */}
      <div className="absolute right-2 sm:right-6 lg:right-16 top-1/2 -translate-y-1/2 w-[140px] h-[230px] sm:w-[220px] sm:h-[360px] lg:w-[320px] lg:h-[500px] text-blue-400 opacity-[0.05] pointer-events-none select-none z-0">
        <ServerRackGraphic className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <Logo lightText className="w-10 h-10 text-blue-400" />
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-950/80 text-blue-300 border border-blue-800/80 font-mono">
                techmedini.in
              </span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Reliable, fast, and secure cloud server hosting tailored for Indian School ERPs, Restaurant POS billing systems, and Small Business software.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Made with care for Indian Businesses 🇮🇳</span>
            </div>
          </div>

          {/* QUICK SERVICES */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">
              Our Hosting Solutions
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#school-erp" className="hover:text-blue-400 transition-colors">
                  School ERP Platform Hosting
                </a>
              </li>
              <li>
                <a href="#restaurant-pos" className="hover:text-blue-400 transition-colors">
                  Restaurant POS & Billing Cloud
                </a>
              </li>
              <li>
                <a href="#business-hosting" className="hover:text-blue-400 transition-colors">
                  Small Business Cloud ERP
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-400 transition-colors">
                  Monthly Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-sans">
              Contact & Support
            </h4>
            <ul className="space-y-2.5 text-slate-300">
              <li className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="tel:+918046809920" className="hover:text-blue-400 font-semibold text-white">
                  +91 80 4680 9920
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a href="mailto:support@techmedini.in" className="hover:text-blue-400">
                  support@techmedini.in
                </a>
              </li>
              <li className="text-slate-400 pt-1 text-[11px] font-mono">
                Data Centers: Bhubaneswar • Kolkata • Bengaluru
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} TechMedini Solutions (techmedini.in). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">GST Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
