"use client";

import React from "react";
import { Server, PhoneCall, Mail, Heart } from "lucide-react";

import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-200">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <Logo className="w-8 h-8" />
              <span className="text-lg font-bold tracking-tight text-slate-900">
                Tech<span className="text-blue-600">Medini</span>
                <span className="text-[11px] font-normal ml-2 text-slate-500">
                  (techmedini.in)
                </span>
              </span>
            </div>

            <p className="text-slate-600 text-xs leading-relaxed max-w-md">
              Reliable, fast, and secure cloud server hosting tailored for Indian School ERPs, Restaurant POS billing systems, and Small Business software.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Made with care for Indian Businesses 🇮🇳</span>
            </div>
          </div>

          {/* QUICK SERVICES */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Our Hosting Solutions
            </h4>
            <ul className="space-y-1.5 text-slate-600">
              <li>
                <a href="#school-erp" className="hover:text-blue-600 transition-colors">
                  School ERP Platform Hosting
                </a>
              </li>
              <li>
                <a href="#restaurant-pos" className="hover:text-blue-600 transition-colors">
                  Restaurant POS & Billing Cloud
                </a>
              </li>
              <li>
                <a href="#business-hosting" className="hover:text-blue-600 transition-colors">
                  Small Business Cloud ERP
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-600 transition-colors">
                  Monthly Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
              Contact & Support
            </h4>
            <ul className="space-y-1.5 text-slate-600">
              <li className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <a href="tel:+918046809920" className="hover:text-blue-600 font-semibold text-slate-900">
                  +91 80 4680 9920
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <a href="mailto:support@techmedini.in" className="hover:text-blue-600">
                  support@techmedini.in
                </a>
              </li>
              <li className="text-slate-500 pt-1">
                Data Centers: Bhubaneswar • Kolkata • Bengaluru
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT & LEGAL BAR */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} TechMedini Solutions (techmedini.in). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-900 transition-colors">GST Compliance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
