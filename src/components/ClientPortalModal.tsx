"use client";

import React, { useState } from "react";
import { X, Server, Lock, ArrowRight, ShieldCheck, Key, RefreshCw, CheckCircle2 } from "lucide-react";

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientPortalModal({ isOpen, onClose }: ClientPortalModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthenticating(true);
    setTimeout(() => {
      setAuthenticating(false);
      setAuthenticated(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#0f172a] border border-slate-800 rounded-md max-w-md w-full p-6 shadow-2xl relative">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-md bg-slate-900 border border-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        {/* HEADER */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded bg-blue-600 flex items-center justify-center text-white font-mono font-bold">
            <Server className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white font-mono">TechMedini Client Console</h3>
            <p className="text-xs text-slate-400">Secure SSO & Instance Management Portal</p>
          </div>
        </div>

        {authenticated ? (
          <div className="space-y-4 py-4 font-mono text-xs text-center">
            <div className="w-12 h-12 bg-emerald-950 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-800">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Authentication Successful</h4>
              <p className="text-slate-400 text-xs mt-1">Redirecting to TechMedini Control Panel for {email || "admin@client.in"}...</p>
            </div>

            <div className="p-3 bg-slate-950 rounded border border-slate-800 text-left space-y-1.5 text-[11px]">
              <div className="flex justify-between">
                <span className="text-slate-500">Target Rack Node:</span>
                <span className="text-white">BBI-1-RACK-04</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Security Clearance:</span>
                <span className="text-emerald-400">Admin SSH & IPMI Allowed</span>
              </div>
            </div>

            <button
              onClick={() => {
                setAuthenticated(false);
                onClose();
              }}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded"
            >
              Close Portal Preview &rarr;
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="space-y-4 font-sans">
            <div>
              <label className="block text-xs font-mono text-slate-300 mb-1">
                Account Email / Client ID
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client-admin@schoolerp.in"
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none font-mono"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-mono text-slate-300">
                  Password
                </label>
                <a href="#" className="text-[10px] font-mono text-blue-400 hover:underline">
                  Reset SSH Key / Pass?
                </a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-xs text-white placeholder-slate-600 focus:border-blue-500 focus:outline-none font-mono"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
              <label className="flex items-center gap-2 cursor-pointer font-mono text-[11px]">
                <input type="checkbox" defaultChecked className="rounded bg-slate-900 border-slate-800 text-blue-600" />
                Remember 2FA Device
              </label>
              <span className="text-[10px] font-mono text-slate-500">TLS 1.3 Strict</span>
            </div>

            <button
              type="submit"
              disabled={authenticating}
              className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-md transition-all shadow-md flex items-center justify-center gap-2"
            >
              {authenticating ? (
                <span className="flex items-center gap-2 font-mono">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" /> Verifying Hardware Token...
                </span>
              ) : (
                <>
                  <Lock className="w-3.5 h-3.5" /> Log In to Infrastructure Console
                </>
              )}
            </button>

            <div className="pt-3 border-t border-slate-800/80 text-[11px] font-mono text-slate-400 text-center">
              Don't have an active datacenter rack instance?{" "}
              <button
                type="button"
                onClick={onClose}
                className="text-blue-400 hover:underline"
              >
                Request New Instance Deployment &rarr;
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
