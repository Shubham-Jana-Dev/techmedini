"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, PhoneCall, Mail, MapPin, ShieldCheck } from "lucide-react";
import Logo from "./Logo";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    businessName: "",
    serviceNeeded: "School ERP Hosting",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact-section" className="relative py-24 bg-white border-t border-b border-slate-200 overflow-hidden">
      
      {/* WATERMARK FADED LOGO BACKGROUND (5-7% OPACITY) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] sm:w-[650px] sm:h-[650px] lg:w-[750px] lg:h-[750px] text-blue-600 opacity-[0.06] pointer-events-none select-none z-0">
        <Logo className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: HEADLINE & DIRECT CONTACT DETAILS */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 px-3.5 py-1 bg-blue-50 rounded-full border border-blue-100">
              Get In Touch With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-[1.2]">
              Ready to Upgrade Your Software Hosting?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-normal">
              Fill out the simple form or call our support line directly. Our local Indian team will discuss your business needs and set up your server hassle-free.
            </p>

            {/* DIRECT CONTACT CARDS */}
            <div className="space-y-4 pt-2">
              
              <div className="p-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Phone / WhatsApp Support</div>
                  <a href="tel:+918046809920" className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    +91 80 4680 9920
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Mon - Sat (9:00 AM - 8:00 PM IST)</p>
                </div>
              </div>

              <div className="p-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Direct Business Email</div>
                  <a href="mailto:support@techmedini.in" className="text-base font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    support@techmedini.in
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">Quick responses within 2 hours</p>
                </div>
              </div>

              <div className="p-4 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-lg shadow-sm flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Local Data Center Locations</div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    Bhubaneswar • Kolkata • Bengaluru
                  </div>
                  <p className="text-xs text-slate-500">100% Indian Data Sovereignty</p>
                </div>
              </div>

            </div>

            <div className="p-4 bg-blue-50/80 border border-blue-200 rounded-lg flex items-center gap-3 text-xs text-blue-900">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <span>We value your privacy. Your contact info is strictly confidential and never spammed.</span>
            </div>
          </div>

          {/* RIGHT SIDE: HIGH-TRUST CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 backdrop-blur-sm border border-slate-200 rounded-xl p-6 sm:p-8 shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our TechMedini support specialist will call you at <strong className="text-blue-600">{formData.phoneNumber}</strong> within 2 hours to answer your questions.
                  </p>
                  
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1">
                    <div><span className="font-semibold text-slate-900">Service Requested:</span> {formData.serviceNeeded}</div>
                    <div><span className="font-semibold text-slate-900">Business Name:</span> {formData.businessName || "Not provided"}</div>
                  </div>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-md transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-xl font-bold text-slate-900">
                      Send Us an Inquiry
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill in your details below and we will get back to you right away.
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Ramesh Mohanty"
                      className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                        Business / School / Restaurant Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Modern Public School / Tasty Bites"
                        className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Needed Dropdown */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Service Needed *
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                    >
                      <option value="School ERP Hosting">School ERP Hosting</option>
                      <option value="Restaurant POS & Billing">Restaurant POS & Billing</option>
                      <option value="Small Business Cloud ERP">Small Business Cloud ERP (Tally / Odoo)</option>
                      <option value="Custom Hosting Consultation">Custom Hosting Consultation</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Message / Specific Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us a bit about your current setup or how many users/students/outlets you have..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-md px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:border-blue-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                        Submitting Inquiry...
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry (Get Quick Call)
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    Prefer calling? Reach us directly at <a href="tel:+918046809920" className="text-blue-600 font-semibold underline">+91 80 4680 9920</a>
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
