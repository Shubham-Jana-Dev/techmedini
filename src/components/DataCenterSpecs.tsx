"use client";

import React from "react";
import { 
  Server, 
  ShieldCheck, 
  Activity, 
  Cpu, 
  HardDrive, 
  Clock, 
  Network, 
  FileCheck,
  CheckCircle2,
  Lock,
  Flame,
  Check
} from "lucide-react";

export default function DataCenterSpecs() {
  return (
    <section id="datacenter-specs" className="py-24 bg-[#0f172a] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950/60 border border-emerald-800/60 text-xs font-mono text-emerald-400">
              <Activity className="w-3.5 h-3.5" />
              INFRASTRUCTURE SPECIFICATIONS & METRICS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Built for Enterprise Performance & Compliance
            </h2>
            <p className="text-slate-400 text-sm">
              Our micro data centers feature carrier-neutral fiber routing, dual power grids, and enterprise NVMe RAID arrays designed to maintain 99.98% uptime for high-demand business applications.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 font-mono text-xs">
            <div className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-md text-slate-300">
              <span className="text-slate-500 block text-[10px]">FACILITY SPEC</span>
              <span className="font-bold text-white">Tier-3 Micro DC Standard</span>
            </div>
            <div className="px-3 py-2 bg-slate-900 border border-slate-800 rounded-md text-slate-300">
              <span className="text-slate-500 block text-[10px]">CURRENT UPTIME</span>
              <span className="font-bold text-emerald-400">99.98% Past 365 Days</span>
            </div>
          </div>
        </div>

        {/* 4 CORE METRICS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-md space-y-3">
            <div className="w-10 h-10 rounded bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/60">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">99.9% Target</div>
              <div className="text-xs font-semibold text-blue-400 font-mono">Financial Uptime SLA</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Strict SLA guarantees backed by financial SLA credit reimbursements if downtime ever exceeds monthly allowances.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-md space-y-3">
            <div className="w-10 h-10 rounded bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/60">
              <Network className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">&lt; 10ms Ping</div>
              <div className="text-xs font-semibold text-blue-400 font-mono">Low-Latency Indian Routing</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Direct fiber peering with major Indian ISPs (Airtel, Jio, BSNL, RailTel) bypassing overseas transit hops.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-md space-y-3">
            <div className="w-10 h-10 rounded bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/60">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">Automated Daily</div>
              <div className="text-xs font-semibold text-blue-400 font-mono">Offsite Encrypted Backups</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              AES-256 encrypted continuous snapshots stored across isolated geographical nodes for instant disaster recovery.
            </p>
          </div>

          <div className="p-6 bg-slate-900/80 border border-slate-800 rounded-md space-y-3">
            <div className="w-10 h-10 rounded bg-blue-950 text-blue-400 flex items-center justify-center border border-blue-800/60">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-white">Enterprise GST</div>
              <div className="text-xs font-semibold text-blue-400 font-mono">Indian Regulatory Compliance</div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Fully compliant GST B2B tax invoicing, ISO 27001 security controls, and Indian data residency verification.
            </p>
          </div>

        </div>

        {/* DETAILED TECHNICAL HARDWARE & FACILITY SPECIFICATION TABLE */}
        <div className="tech-card p-6 md:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
            <div>
              <h3 className="text-xl font-bold text-white font-mono">TECHNICAL DATA CENTER MATRIX</h3>
              <p className="text-xs text-slate-400">Enterprise Hardware Architecture & Facility Safeguards</p>
            </div>
            <div className="text-[11px] font-mono text-emerald-400 bg-slate-950 px-3 py-1 rounded border border-slate-800">
              VERIFIED TIER-3 ARCHITECTURE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono text-xs">
            
            {/* HARDWARE SPEC */}
            <div className="p-4 bg-slate-950 rounded-md border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Cpu className="w-4 h-4 text-blue-400" />
                Compute & Hardware Stack
              </div>
              <ul className="space-y-2 text-slate-300 font-sans text-xs">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Dual AMD EPYC 9004 / Intel Xeon Scalable
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  DDR5 ECC Error-Correcting Memory
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Enterprise NVMe PCIe 4.0 SSD (RAID-10)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Dedicated IPMI / Out-of-band Management
                </li>
              </ul>
            </div>

            {/* POWER & COOLING */}
            <div className="p-4 bg-slate-950 rounded-md border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Server className="w-4 h-4 text-blue-400" />
                Power & Thermal Redundancy
              </div>
              <ul className="space-y-2 text-slate-300 font-sans text-xs">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Dual Independent Utility Feeds (2N)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Online Double-Conversion UPS (N+1)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Diesel Generator Backup with 48h Fuel
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Precision Hot/Cold Aisle Containment
                </li>
              </ul>
            </div>

            {/* SECURITY & NETWORK */}
            <div className="p-4 bg-slate-950 rounded-md border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Lock className="w-4 h-4 text-blue-400" />
                Security & Connectivity
              </div>
              <ul className="space-y-2 text-slate-300 font-sans text-xs">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  24/7 CCTV & Biometric Rack Access
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Inline DDoS Filtering (Up to 100 Gbps)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Carrier-Neutral Redundant 10G Uplinks
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  ISO 27001 & CERT-In Security Standards
                </li>
              </ul>
            </div>

          </div>

          {/* HISTORICAL UPTIME BAR DISPLAY */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div className="flex items-center justify-between font-mono text-xs">
              <span className="text-slate-300">HISTORICAL SYSTEM UPTIME (LAST 90 DAYS)</span>
              <span className="text-emerald-400 font-bold">100.0% Operational</span>
            </div>

            <div className="grid grid-cols-30 gap-1 h-6">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-emerald-500/80 hover:bg-emerald-400 rounded-xs transition-colors relative group cursor-pointer"
                  title={`Day ${30 - i}: 100% Uptime`}
                >
                  <div className="opacity-0 group-hover:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-slate-900 text-[10px] text-white font-mono rounded border border-slate-700 whitespace-nowrap pointer-events-none z-20">
                    Day {30 - i}: 100% (0 Incidents)
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>90 Days Ago</span>
              <span>30 Days Ago</span>
              <span className="text-emerald-400">Today (All Services Normal)</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
