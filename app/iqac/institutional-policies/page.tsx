"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

// TypeScript Interface for Policy Documents
interface PolicyDocument {
  id: number;
  title: string;
  filename: string;
  color: "cyan" | "blue" | "emerald" | "rose" | "purple";
  description: string;
}

export default function InstitutionalPoliciesPage() {
  // State to manage the internal PDF viewer overlay
  const [activePdf, setActivePdf] = useState<PolicyDocument | null>(null);

  // Policy Documents Data
  const policies: PolicyDocument[] = [
    {
      id: 1,
      title: "DIVYANGJAN POLICY",
      filename: "divyangjan-policy.pdf",
      color: "blue",
      description:
        "Guidelines and frameworks for ensuring an inclusive, barrier-free, and supportive environment for differently-abled individuals.",
    },
    {
      id: 2,
      title: "E-GOVERNANCE POLICY",
      filename: "e-governance-policy.pdf",
      color: "cyan",
      description:
        "Strategic framework for implementing digital governance across administration, finance, admissions, and academic records.",
    },
    {
      id: 3,
      title: "GREEN CAMPUS POLICY",
      filename: "green-campus-policy.pdf",
      color: "emerald",
      description:
        "Our commitment to sustainable practices, eco-friendly campus management, waste reduction, and environmental awareness.",
    },
    {
      id: 4,
      title: "PATIENT CARE POLICY",
      filename: "patient-care-policy.pdf",
      color: "rose",
      description:
        "Comprehensive protocols ensuring the highest standards of ethical, compassionate, and advanced dental healthcare delivery.",
    },
    {
      id: 5,
      title: "RESOURCE MOBILIZATION POLICY",
      filename: "resource-mobilization-policy.pdf",
      color: "purple",
      description:
        "Detailed strategies for optimal fund utilization, infrastructure maintenance, and transparent resource allocation.",
    },
  ];

  // Helper functions for dynamic styling based on color theme
  const getCardHoverStyle = (color: string) => {
    switch (color) {
      case "cyan":
        return "hover:border-cyan-500/50 hover:shadow-[0_15px_35px_rgba(34,211,238,0.15)] group-hover:bg-cyan-500/[0.02]";
      case "blue":
        return "hover:border-blue-500/50 hover:shadow-[0_15px_35px_rgba(59,130,246,0.15)] group-hover:bg-blue-500/[0.02]";
      case "emerald":
        return "hover:border-emerald-500/50 hover:shadow-[0_15px_35px_rgba(16,185,129,0.15)] group-hover:bg-emerald-500/[0.02]";
      case "rose":
        return "hover:border-rose-500/50 hover:shadow-[0_15px_35px_rgba(244,63,94,0.15)] group-hover:bg-rose-500/[0.02]";
      case "purple":
        return "hover:border-purple-500/50 hover:shadow-[0_15px_35px_rgba(168,85,247,0.15)] group-hover:bg-purple-500/[0.02]";
      default:
        return "";
    }
  };

  const getIconStyle = (color: string) => {
    switch (color) {
      case "cyan":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/30 group-hover:bg-cyan-500/20";
      case "blue":
        return "text-blue-400 bg-blue-500/10 border-blue-500/30 group-hover:bg-blue-500/20";
      case "emerald":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30 group-hover:bg-emerald-500/20";
      case "rose":
        return "text-rose-400 bg-rose-500/10 border-rose-500/30 group-hover:bg-rose-500/20";
      case "purple":
        return "text-purple-400 bg-purple-500/10 border-purple-500/30 group-hover:bg-purple-500/20";
      default:
        return "";
    }
  };

  const getTextColorStyle = (color: string) => {
    switch (color) {
      case "cyan":
        return "group-hover:text-cyan-300 text-white";
      case "blue":
        return "group-hover:text-blue-300 text-white";
      case "emerald":
        return "group-hover:text-emerald-300 text-white";
      case "rose":
        return "group-hover:text-rose-300 text-white";
      case "purple":
        return "group-hover:text-purple-300 text-white";
      default:
        return "text-white";
    }
  };

  const getGlowStyle = (color: string) => {
    switch (color) {
      case "cyan":
        return "bg-cyan-500/20";
      case "blue":
        return "bg-blue-500/20";
      case "emerald":
        return "bg-emerald-500/20";
      case "rose":
        return "bg-rose-500/20";
      case "purple":
        return "bg-purple-500/20";
      default:
        return "";
    }
  };

  return (
    <main className="min-h-screen bg-[#040d1a] text-white flex flex-col overflow-hidden relative selection:bg-blue-500/30">
      <PageBackground>
        <Navbar />

        {/* Dynamic Ambient Background Glows */}
        <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        {/* Main Content Wrapper */}
        <div className="flex-grow pt-40 pb-32 px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-center min-h-[85vh]">
          {/* Page Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-block px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-xs font-black tracking-[4px] uppercase mb-2 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              Governance & Framework
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white tracking-tighter">
              Institutional <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Policies & Guidelines
              </span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed font-medium max-w-2xl mx-auto">
              Access the foundational documents and strategic policies that
              guide our commitment to excellence, inclusivity, and sustainable
              growth.
            </p>
          </div>

          {/* Policy Document Grid */}
          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
              {policies.map((policy) => (
                <div
                  key={policy.id}
                  onClick={() => setActivePdf(policy)}
                  className={`group relative bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[300px] ${getCardHoverStyle(policy.color)}`}
                >
                  {/* Hover Accent Glow inside Card */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${getGlowStyle(policy.color)}`}
                  ></div>

                  <div className="relative z-10 space-y-6">
                    {/* Document Icon Graphic */}
                    <div
                      className={`w-16 h-16 rounded-2xl border flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ${getIconStyle(policy.color)}`}
                    >
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>

                    {/* Document Info */}
                    <div>
                      <h2
                        className={`text-xl font-extrabold tracking-wide mb-3 transition-colors duration-300 ${getTextColorStyle(policy.color)}`}
                      >
                        {policy.title}
                      </h2>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed">
                        {policy.description}
                      </p>
                    </div>
                  </div>

                  {/* Call to Action Footer */}
                  <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors duration-300">
                      View Document
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />

        {/* ========================================================================= */}
        {/* INTERNAL PDF VIEWER OVERLAY MODAL                                         */}
        {/* ========================================================================= */}
        {activePdf && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center animate-in fade-in duration-300">
            {/* Frosted Glass Backdrop */}
            <div
              className="absolute inset-0 bg-[#020813]/90 backdrop-blur-xl cursor-pointer"
              onClick={() => setActivePdf(null)}
            ></div>

            {/* PDF Container */}
            <div className="relative w-full max-w-6xl h-[90vh] mx-4 bg-[#0a192f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center border ${getIconStyle(activePdf.color)}`}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-white font-bold tracking-wide">
                    {activePdf.title}.pdf
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Fallback Direct Link in case browser blocks iframe */}
                  <Link
                    href={`/assets/${activePdf.filename}`}
                    target="_blank"
                    className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer hidden md:block"
                  >
                    Open in New Tab ↗
                  </Link>
                  <button
                    onClick={() => setActivePdf(null)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500/20 hover:text-red-400 text-white transition-colors cursor-pointer"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Iframe Document Viewer */}
              <div className="flex-grow w-full h-full relative bg-[#040d1a]">
                <iframe
                  src={`/assets/${activePdf.filename}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-none"
                  title={`${activePdf.title} Document Viewer`}
                >
                  {/* Fallback if browser doesn't support iframes */}
                  <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4">
                    <p className="text-gray-400">
                      Your browser does not support embedded PDFs.
                    </p>
                    <Link
                      href={`/assets/${activePdf.filename}`}
                      target="_blank"
                      className="px-6 py-3 bg-blue-500 hover:bg-blue-400 transition-colors text-white font-bold rounded-xl shadow-lg"
                    >
                      Download PDF Instead
                    </Link>
                  </div>
                </iframe>
              </div>
            </div>
          </div>
        )}
      </PageBackground>
    </main>
  );
}
