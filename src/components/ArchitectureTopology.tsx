"use client";

import React from "react";
import { 
  Network, 
  Server, 
  ShieldCheck, 
  Smartphone, 
  GraduationCap, 
  UtensilsCrossed, 
  Building2, 
  HardDrive, 
  Zap, 
  ArrowRight,
  Database,
  Lock
} from "lucide-react";

export default function ArchitectureTopology() {
  return (
    <section id="architecture" className="py-24 bg-[#0b0f19] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/60 text-xs font-mono text-blue-400">
            <Network className="w-3.5 h-3.5" />
            END-TO-END LOW-LATENCY TOPOLOGY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Isolated Network Architecture
          </h2>
          <p className="text-slate-400 text-sm">
            How TechMedini connects school management portals, restaurant billing terminals, and enterprise ERP clients directly to zero-bottleneck Indian micro data center clusters.
          </p>
        </div>

        {/* NETWORK TOPOLOGY DIAGRAM CONTAINER */}
        <div className="tech-card p-6 md:p-10 bg-tech-grid">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            
            {/* STAGE 1: CLIENT EDGE WORKLOADS */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                01. Client Edge Terminals
              </div>

              {/* Workload Item 1 */}
              <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-md hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-950 text-blue-400 rounded">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">School ERP Portals</div>
                    <div className="text-[10px] text-slate-400 font-mono">10,000+ Concurrent Parents</div>
                  </div>
                </div>
              </div>

              {/* Workload Item 2 */}
              <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-md hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-950 text-blue-400 rounded">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Restaurant Billing Terminals</div>
                    <div className="text-[10px] text-slate-400 font-mono">Offline-First KOT Edge Sync</div>
                  </div>
                </div>
              </div>

              {/* Workload Item 3 */}
              <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-md hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-950 text-blue-400 rounded">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">SMB Custom ERP Users</div>
                    <div className="text-[10px] text-slate-400 font-mono">Tally / Odoo / Custom Web</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CONNECTING ARROW 1 */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="flex flex-col items-center gap-1 text-slate-600">
                <span className="text-[10px] font-mono text-emerald-400 animate-pulse">&lt;8ms Ping</span>
                <ArrowRight className="w-6 h-6 text-blue-500" />
              </div>
            </div>

            {/* STAGE 2: TECHMEDINI EDGE GATEWAY & DDOS SHIELD */}
            <div className="lg:col-span-4 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                02. TechMedini Regional Edge
              </div>

              <div className="p-5 bg-slate-950 border border-blue-600/40 rounded-md shadow-xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2 text-xs font-bold font-mono text-white">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    HARDWARE DDOS & FIREWALL GATEWAY
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                    PROTECTED
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono text-slate-300">
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">Local IX Peering:</span>
                    <span className="text-white">Direct Airtel/Jio Fiber</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">SSL Offloading:</span>
                    <span className="text-white">TLS 1.3 Hardware Accelerator</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-900">
                    <span className="text-slate-500">DDoS Mitigation:</span>
                    <span className="text-emerald-400">100 Gbps scrubbing</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Load Balancer:</span>
                    <span className="text-white">Zero-Packet-Drop HA Proxy</span>
                  </div>
                </div>

                <div className="p-2.5 bg-blue-950/40 border border-blue-900/60 rounded text-[11px] font-mono text-blue-300 flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  Sub-10ms Indian Edge Hop Routing Enabled
                </div>
              </div>
            </div>

            {/* CONNECTING ARROW 2 */}
            <div className="hidden lg:flex lg:col-span-1 justify-center">
              <div className="flex flex-col items-center gap-1 text-slate-600">
                <span className="text-[10px] font-mono text-blue-400">High-Bus</span>
                <ArrowRight className="w-6 h-6 text-blue-500" />
              </div>
            </div>

            {/* STAGE 3: ISOLATED DATACENTER COMPUTE & BACKUP */}
            <div className="lg:col-span-3 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                03. Isolated Compute Racks
              </div>

              {/* Node Cluster A */}
              <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-blue-400" /> Dedicated vCPU Nodes
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">AMD EPYC</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Hardware-level tenant container isolation with zero noisy neighbor effect.
                </p>
              </div>

              {/* Storage & Disaster Recovery */}
              <div className="p-3.5 bg-slate-900 border border-slate-800 rounded-md">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white font-mono flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-purple-400" /> NVMe RAID-10 + DR
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">AES-256</span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans">
                  Continuous point-in-time database snapshotting to secondary offsite micro DC.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
