"use client";

import React from "react";
import { 
  Building, 
  GraduationCap, 
  UtensilsCrossed, 
  Quote, 
  CheckCircle2, 
  TrendingUp,
  Server,
  Zap
} from "lucide-react";

export default function TestimonialsCaseStudies() {
  return (
    <section className="py-24 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/60 text-xs font-mono text-blue-400">
            <TrendingUp className="w-3.5 h-3.5" />
            FIELD-TESTED INFRASTRUCTURE CASE STUDIES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Trusted by Enterprise Software Vendors & Institutions
          </h2>
          <p className="text-slate-400 text-sm">
            See how regional education platforms, restaurant chains, and SMB enterprises rely on TechMedini micro data centers for high performance and low latency.
          </p>
        </div>

        {/* 3 CASE STUDY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CASE STUDY 1: EDUCATION TRUST */}
          <div className="tech-card p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-950 text-blue-400 rounded">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  EDUCATION ERP
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Apex Educational Trust (45+ Schools)
                </h3>
                <p className="text-xs text-slate-400">
                  School ERP Platform & Parents Portal
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Result Day Peak:</span>
                  <span className="text-emerald-400 font-bold">5,200 req/s</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">DB Latency Drop:</span>
                  <span className="text-white">140ms &rarr; 6ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Uptime Record:</span>
                  <span className="text-emerald-400 font-bold">100% (3+ Years)</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 italic leading-relaxed">
                &ldquo;During quarterly fee collections and annual board result publishing, our previous cloud host crashed regularly. TechMedini’s dedicated Postgres cluster handled 12,000 parents simultaneously without a single drop.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">CTO, Apex EdTech</span>
              <span className="text-blue-400">BLR-1 Node</span>
            </div>
          </div>

          {/* CASE STUDY 2: RESTAURANT POS CHAIN */}
          <div className="tech-card p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-950 text-blue-400 rounded">
                  <UtensilsCrossed className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  RESTAURANT POS
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  FeastCraft Dining Chain (38 Outlets)
                </h3>
                <p className="text-xs text-slate-400">
                  Multi-Branch POS & Kitchen Display System
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Billing Edge Ping:</span>
                  <span className="text-emerald-400 font-bold">4.2 ms</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Offline Recovery:</span>
                  <span className="text-white">Zero Missing Bills</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">GST Invoice Sync:</span>
                  <span className="text-emerald-400 font-bold">Instant API</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 italic leading-relaxed">
                &ldquo;TechMedini’s sub-10ms ping eliminated the 3-second delay on kitchen order ticket printing. Our cashiers print receipts instantly even during peak dinner rushes.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Head of IT, FeastCraft</span>
              <span className="text-blue-400">BBI-1 / CCU-1 Node</span>
            </div>
          </div>

          {/* CASE STUDY 3: SMB LOGISTICS */}
          <div className="tech-card p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-2 bg-blue-950 text-blue-400 rounded">
                  <Building className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  ENTERPRISE SMB
                </span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white mb-1">
                  Kalinga Logistics Enterprise
                </h3>
                <p className="text-xs text-slate-400">
                  Custom Odoo ERP & Tally Multi-User Cloud
                </p>
              </div>

              <div className="p-3 bg-slate-950 rounded border border-slate-800 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Cloud Cost Saved:</span>
                  <span className="text-emerald-400 font-bold">42% vs AWS</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Storage Stack:</span>
                  <span className="text-white">NVMe RAID-10</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Disaster Restore:</span>
                  <span className="text-emerald-400 font-bold">&lt; 15 Mins</span>
                </div>
              </div>

              <p className="text-xs text-slate-300 italic leading-relaxed">
                &ldquo;We migrated our 80-user Tally and Odoo setup to TechMedini’s dedicated vCPU nodes. The fixed monthly INR billing with GST tax credits saved us over ₹3.5 Lakhs annually.&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">VP Operations, Kalinga</span>
              <span className="text-blue-400">CCU-1 Node</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
