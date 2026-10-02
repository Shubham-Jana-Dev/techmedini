"use client";

import React, { useState } from "react";
import { 
  Sliders, 
  Cpu, 
  HardDrive, 
  Database, 
  Check, 
  Zap, 
  ArrowRight,
  ShieldCheck,
  Server,
  Calculator
} from "lucide-react";

interface InteractiveConfiguratorProps {
  onSelectConfig: (configSummary: string) => void;
}

export default function InteractiveConfigurator({ onSelectConfig }: InteractiveConfiguratorProps) {
  const [workloadType, setWorkloadType] = useState<"school" | "pos" | "smb">("school");
  const [vCPU, setVCPU] = useState<number>(4);
  const [ramGB, setRamGB] = useState<number>(16);
  const [storageGB, setStorageGB] = useState<number>(250);
  const [regionNode, setRegionNode] = useState<string>("BBI-1 (Bhubaneswar Edge)");

  // Price calculations in INR
  const basePriceMap = {
    school: 2800,
    pos: 2200,
    smb: 1900,
  };

  const vCPUPrice = vCPU * 450;
  const ramPrice = ramGB * 120;
  const storagePrice = Math.floor(storageGB * 2.5);
  const totalMonthlyPrice = basePriceMap[workloadType] + vCPUPrice + ramPrice + storagePrice;

  const handleDeployClick = () => {
    const summary = `${workloadType.toUpperCase()} ERP Server: ${vCPU} vCPU, ${ramGB}GB RAM, ${storageGB}GB NVMe SSD, Region: ${regionNode} (Est. ₹${totalMonthlyPrice.toLocaleString('en-IN')}/mo)`;
    onSelectConfig(summary);
  };

  return (
    <section id="pricing-calculator" className="py-24 bg-[#0f172a] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-blue-950/60 border border-blue-800/60 text-xs font-mono text-blue-400">
            <Calculator className="w-3.5 h-3.5" />
            TRANSPARENT ENTERPRISE ESTIMATOR
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Custom Server Resource & Cost Estimator
          </h2>
          <p className="text-slate-400 text-sm">
            Calculate your exact compute requirements with zero hidden bandwidth traps or surprise cloud egress fees. Clear INR pricing with full B2B GST tax credit invoicing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: SLIDERS & CONTROLS */}
          <div className="lg:col-span-7 tech-card p-6 md:p-8 space-y-6">
            
            {/* 1. WORKLOAD SELECTOR */}
            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                1. Select Specialized Workload Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setWorkloadType("school");
                    setVCPU(8);
                    setRamGB(32);
                    setStorageGB(500);
                  }}
                  className={`p-3 rounded-md text-xs font-mono font-semibold transition-all border flex flex-col items-center gap-1.5 ${
                    workloadType === "school"
                      ? "bg-blue-600/20 text-blue-400 border-blue-500"
                      : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <Server className="w-4 h-4" />
                  School ERP Platform
                </button>

                <button
                  onClick={() => {
                    setWorkloadType("pos");
                    setVCPU(4);
                    setRamGB(16);
                    setStorageGB(250);
                  }}
                  className={`p-3 rounded-md text-xs font-mono font-semibold transition-all border flex flex-col items-center gap-1.5 ${
                    workloadType === "pos"
                      ? "bg-blue-600/20 text-blue-400 border-blue-500"
                      : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  Restaurant POS Cloud
                </button>

                <button
                  onClick={() => {
                    setWorkloadType("smb");
                    setVCPU(2);
                    setRamGB(8);
                    setStorageGB(120);
                  }}
                  className={`p-3 rounded-md text-xs font-mono font-semibold transition-all border flex flex-col items-center gap-1.5 ${
                    workloadType === "smb"
                      ? "bg-blue-600/20 text-blue-400 border-blue-500"
                      : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  <Database className="w-4 h-4" />
                  SMB ERP / Tally Cloud
                </button>
              </div>
            </div>

            {/* 2. vCPU SLIDER */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-blue-400" /> Dedicated vCPU Cores:
                </span>
                <span className="text-white font-bold text-sm">{vCPU} Dedicated vCPU</span>
              </div>
              <input
                type="range"
                min="2"
                max="32"
                step="2"
                value={vCPU}
                onChange={(e) => setVCPU(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-blue-500 border border-slate-800"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>2 vCPU (Light)</span>
                <span>16 vCPU (Heavy)</span>
                <span>32 vCPU (High Load Cluster)</span>
              </div>
            </div>

            {/* 3. RAM SLIDER */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <Database className="w-4 h-4 text-blue-400" /> Dedicated ECC DDR5 RAM:
                </span>
                <span className="text-white font-bold text-sm">{ramGB} GB RAM</span>
              </div>
              <input
                type="range"
                min="4"
                max="128"
                step="4"
                value={ramGB}
                onChange={(e) => setRamGB(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-blue-500 border border-slate-800"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>4 GB</span>
                <span>32 GB (Standard)</span>
                <span>128 GB (Enterprise DB)</span>
              </div>
            </div>

            {/* 4. STORAGE SLIDER */}
            <div className="space-y-2 pt-2 border-t border-slate-800/80">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-300 flex items-center gap-1.5">
                  <HardDrive className="w-4 h-4 text-blue-400" /> Enterprise NVMe SSD Storage:
                </span>
                <span className="text-white font-bold text-sm">{storageGB} GB NVMe (RAID-10)</span>
              </div>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={storageGB}
                onChange={(e) => setStorageGB(Number(e.target.value))}
                className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-blue-500 border border-slate-800"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>100 GB</span>
                <span>1 TB (1000 GB)</span>
                <span>2 TB NVMe</span>
              </div>
            </div>

            {/* 5. REGION SELECTION */}
            <div className="pt-2 border-t border-slate-800/80">
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                5. Select Primary Indian Datacenter Node
              </label>
              <select
                value={regionNode}
                onChange={(e) => setRegionNode(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs font-mono text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="BBI-1 (Bhubaneswar Micro DC)">BBI-1: Bhubaneswar Micro Data Center (Sub-5ms East Edge)</option>
                <option value="CCU-1 (Kolkata Exchange Node)">CCU-1: Kolkata Edge Node (East-Northeast Peering)</option>
                <option value="BLR-1 (Bengaluru Core DC)">BLR-1: Bengaluru Primary Enterprise Cluster</option>
              </select>
            </div>

          </div>

          {/* RIGHT: PRICING SUMMARY CARD */}
          <div className="lg:col-span-5 bg-slate-950 p-6 md:p-8 rounded-md border border-blue-600/40 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">MONTHLY INVESTMENT ESTIMATE</span>
                <h3 className="text-2xl font-bold font-mono text-white">
                  ₹{totalMonthlyPrice.toLocaleString('en-IN')}{" "}
                  <span className="text-xs text-slate-400 font-normal">/ month</span>
                </h3>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-1 rounded border border-emerald-800">
                99.98% SLA
              </span>
            </div>

            {/* SPEC SUMMARY LIST */}
            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="text-slate-400 text-[11px] uppercase tracking-wider font-semibold">
                Configured Server Specs:
              </div>

              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500">Target Workload:</span>
                <span className="font-semibold text-white capitalize">{workloadType} Dedicated Server</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500">vCPU Compute:</span>
                <span className="font-semibold text-white">{vCPU} Cores (AMD EPYC)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500">System Memory:</span>
                <span className="font-semibold text-white">{ramGB} GB ECC DDR5</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500">RAID Storage:</span>
                <span className="font-semibold text-white">{storageGB} GB Enterprise NVMe</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span className="text-slate-500">Datacenter Location:</span>
                <span className="font-semibold text-blue-400">{regionNode.split(" ")[0]}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Egress Bandwidth:</span>
                <span className="font-semibold text-emerald-400">UNMETERED 1 Gbps</span>
              </div>
            </div>

            {/* INCLUDED SERVICES CHECKLIST */}
            <div className="space-y-2 pt-2 border-t border-slate-800 font-sans text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Midnight Automated Offsite Snapshots Included</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Dedicated IPv4 Static IP Address Included</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Hardware DDoS Filtering & SSL Shield Included</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Check className="w-4 h-4 text-blue-400 shrink-0" />
                <span>B2B Tax Credit GST Invoice Provided</span>
              </div>
            </div>

            {/* DEPLOY / REQUEST SPEC BUTTON */}
            <button
              onClick={handleDeployClick}
              className="w-full py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-md transition-all shadow-md shadow-blue-900/40 flex items-center justify-center gap-2"
            >
              Reserve Configuration & Request Demo
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-slate-400 font-mono text-center">
              No credit card required. Engineering team responds within 2 business hours.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
