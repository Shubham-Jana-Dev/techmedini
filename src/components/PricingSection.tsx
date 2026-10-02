"use client";

import React from "react";
import { Check, ArrowRight, HelpCircle } from "lucide-react";

export default function PricingSection() {
  const scrollToContact = () => {
    const el = document.getElementById("contact-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 px-3 py-1 bg-blue-50 rounded-full border border-blue-100">
            Simple & Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Affordable Monthly Packages
          </h2>
          <p className="text-slate-600 text-base">
            No hidden setup fees, no complex usage traps. Clear Indian Rupee pricing with official GST invoices included.
          </p>
        </div>

        {/* 3 PRICING CARDS (WITH HOVER SCALE & SHADOW) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* PLAN 1: SCHOOL ERP */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-300">
            <div className="space-y-4">
              <div className="inline-block px-2.5 py-1 rounded bg-blue-100 text-blue-800 font-semibold text-xs">
                FOR SCHOOLS & COLLEGES
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                School ERP Hosting
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">₹2,499</span>
                <span className="text-xs text-slate-500 font-medium">/ month</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Designed for high student record traffic, fee payments, and report card publications.
              </p>

              <ul className="pt-2 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>High Concurrency Admission Peak Handling</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>UPI / Netbanking Fee Gateway Support</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Daily Midnight Automated Backups</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Free Initial Migration & Server Setup</span>
                </li>
              </ul>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-sm flex items-center justify-center gap-1.5"
            >
              Inquire School Plan
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* PLAN 2: RESTAURANT POS (POPULAR) */}
          <div className="bg-white border-2 border-blue-600 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xl relative transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.025] hover:shadow-2xl hover:shadow-blue-600/20">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-[11px] uppercase tracking-wider shadow-sm">
              MOST POPULAR CHOICE
            </div>

            <div className="space-y-4 pt-1">
              <div className="inline-block px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-semibold text-xs">
                FOR RESTAURANTS & RETAIL
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Restaurant POS Cloud
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">₹1,999</span>
                <span className="text-xs text-slate-500 font-medium">/ month</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fast receipt printing, kitchen order dispatches (KOT), and offline bill reconciliation.
              </p>

              <ul className="pt-2 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Sub-10ms Instant Billing Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Offline-First Billing Cache Recovery</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Multi-Outlet Central Inventory Sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Priority Phone & WhatsApp Support</span>
                </li>
              </ul>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-md flex items-center justify-center gap-1.5"
            >
              Inquire POS Plan
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* PLAN 3: SMALL BUSINESS ERP */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-900/10 hover:border-purple-300">
            <div className="space-y-4">
              <div className="inline-block px-2.5 py-1 rounded bg-purple-100 text-purple-800 font-semibold text-xs">
                FOR LOCAL BUSINESSES
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Small Business ERP
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-slate-900">₹1,499</span>
                <span className="text-xs text-slate-500 font-medium">/ month</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated cloud environment for Tally Multi-User, Odoo, stock tracking, and GST billing.
              </p>

              <ul className="pt-2 space-y-2.5 text-xs text-slate-700">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Tally on Cloud & Odoo ERP Supported</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Secure SSL & Private Data Encryption</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Full B2B GST Invoice Provided</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Managed Server Maintenance & Updates</span>
                </li>
              </ul>
            </div>

            <button
              onClick={scrollToContact}
              className="w-full py-2.5 text-xs font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-300 rounded-md transition-colors flex items-center justify-center gap-1.5"
            >
              Inquire Business Plan
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* CUSTOM REQUIREMENT NOTE */}
        <div className="mt-12 p-4 rounded-lg bg-blue-50/70 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs transition-all duration-300 hover:shadow-md hover:border-blue-300">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
            <span className="text-slate-700 font-medium">
              Need a custom multi-server setup or hosting for multiple school campuses / restaurant chains?
            </span>
          </div>
          <button
            onClick={scrollToContact}
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors shrink-0 text-xs"
          >
            Get Custom Quote
          </button>
        </div>

      </div>
    </section>
  );
}
