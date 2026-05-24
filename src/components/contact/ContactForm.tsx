"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState<"general" | "project">("general");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // Add inquiry type explicitly
    data.inquiryType = inquiryType;

    // Call our internal Next.js API route to bypass browser CORS limitations
    const API_URL = "/api/contact";

    try {


      const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("API request failed");

      // The API route handles everything securely
      setStatus("success");
      (e.target as HTMLFormElement).reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again or email me directly.");
    }
  };

  return (
    <div className="w-full p-6 sm:p-8 rounded-2xl glass border border-white/10 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />
      
      <div className="relative z-10">
        <h3 className="text-xl font-bold text-white font-[var(--font-poppins)] mb-6">Send a Message</h3>

        {/* Inquiry Type Tabs */}
        <div className="flex items-center gap-2 mb-8 p-1 rounded-xl bg-[#07070e] border border-white/10 w-fit">
          <button
            type="button"
            onClick={() => setInquiryType("general")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 font-[var(--font-inter)] ${
              inquiryType === "general" 
                ? "bg-white/10 text-white shadow-lg" 
                : "text-[#9ca3af] hover:text-white"
            }`}
          >
            General
          </button>
          <button
            type="button"
            onClick={() => setInquiryType("project")}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 font-[var(--font-inter)] ${
              inquiryType === "project" 
                ? "bg-indigo-500/20 text-indigo-300 shadow-lg" 
                : "text-[#9ca3af] hover:text-white"
            }`}
          >
            Project Inquiry
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Name Input */}
            <div className="relative group">
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full bg-[#0d0d1a] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all duration-300 peer placeholder-transparent"
                placeholder="John Doe"
              />
              <label 
                htmlFor="name" 
                className="absolute left-4 top-2 text-[10px] uppercase tracking-wider text-[#9ca3af] font-semibold transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-indigo-400"
              >
                Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative group">
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full bg-[#0d0d1a] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all duration-300 peer placeholder-transparent"
                placeholder="john@example.com"
              />
              <label 
                htmlFor="email" 
                className="absolute left-4 top-2 text-[10px] uppercase tracking-wider text-[#9ca3af] font-semibold transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-indigo-400"
              >
                Email
              </label>
            </div>
          </div>

          <AnimatePresence>
            {inquiryType === "project" && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 overflow-hidden"
              >
                {/* Project Type Input */}
                <div className="relative group">
                  <input
                    type="text"
                    name="projectType"
                    id="projectType"
                    required={inquiryType === "project"}
                    className="w-full bg-[#0d0d1a] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all duration-300 peer placeholder-transparent"
                    placeholder="e.g. AI Integration, Web App"
                  />
                  <label 
                    htmlFor="projectType" 
                    className="absolute left-4 top-2 text-[10px] uppercase tracking-wider text-[#9ca3af] font-semibold transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-indigo-400"
                  >
                    Project Type
                  </label>
                </div>

                {/* Timeline Input */}
                <div className="relative group">
                  <select
                    name="timeline"
                    id="timeline"
                    required={inquiryType === "project"}
                    className="w-full bg-[#0d0d1a] border border-white/10 rounded-xl px-4 pt-6 pb-2 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all duration-300 peer appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-500 hidden">Select timeline</option>
                    <option value="ASAP" className="bg-[#07070e] text-white">ASAP</option>
                    <option value="1-3 months" className="bg-[#07070e] text-white">1-3 Months</option>
                    <option value="3-6 months" className="bg-[#07070e] text-white">3-6 Months</option>
                    <option value="Flexible" className="bg-[#07070e] text-white">Flexible</option>
                  </select>
                  <label 
                    htmlFor="timeline" 
                    className="absolute left-4 top-2 text-[10px] uppercase tracking-wider text-indigo-400 font-semibold"
                  >
                    Timeline
                  </label>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Message Input */}
          <div className="relative group">
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="w-full bg-[#0d0d1a] border border-white/10 rounded-xl px-4 pt-6 pb-4 text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all duration-300 peer placeholder-transparent resize-none"
              placeholder="Tell me about your idea..."
            />
            <label 
              htmlFor="message" 
              className="absolute left-4 top-2 text-[10px] uppercase tracking-wider text-[#9ca3af] font-semibold transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:normal-case peer-placeholder-shown:tracking-normal peer-focus:top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-wider peer-focus:text-indigo-400"
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="w-full py-4 rounded-xl bg-white text-[#07070e] font-bold font-[var(--font-poppins)] hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#07070e] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group relative overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <div className="flex items-center justify-center gap-2 relative z-10">
              {status === "idle" && (
                <>
                  <span>Send Message</span>
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </>
              )}
              {status === "loading" && (
                <>
                  <Loader2 size={18} className="animate-spin text-indigo-600" />
                  <span className="text-indigo-600">Sending...</span>
                </>
              )}
              {status === "success" && (
                <>
                  <CheckCircle2 size={18} className="text-emerald-600" />
                  <span className="text-emerald-600">Message Sent!</span>
                </>
              )}
              {status === "error" && (
                <>
                  <AlertCircle size={18} className="text-rose-600" />
                  <span className="text-rose-600">Failed to send</span>
                </>
              )}
            </div>
          </button>
          
          {/* Error message text */}
          {status === "error" && (
            <p className="text-xs text-rose-500 text-center font-[var(--font-inter)]">{errorMessage}</p>
          )}

        </form>
      </div>
    </div>
  );
}
