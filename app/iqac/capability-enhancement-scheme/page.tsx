"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";

// TypeScript Interface for Enhancement Schemes
interface SchemeItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode; // Fixed: Changed from JSX.Element to React.ReactNode
  colorTheme: string;
  glowTheme: string;
}

export default function CapabilityEnhancementPage() {
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  // Placeholder path for your PDF file
  const pdfFilePath = "/assets/capability-enhancement-schemes.pdf";

  // Data for Capability Enhancement Schemes
  const schemesData: SchemeItem[] = [
    {
      id: 1,
      title: "Soft Skills Development",
      description:
        "Programs designed to improve interpersonal relations, teamwork, leadership, and emotional intelligence for clinical practice.",
      colorTheme: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      glowTheme:
        "group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:border-cyan-500/50",
      icon: (
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Language & Communication",
      description:
        "Enhancing linguistic proficiency and patient communication strategies to ensure clear, empathetic, and effective clinical interactions.",
      colorTheme: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      glowTheme:
        "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] group-hover:border-purple-500/50",
      icon: (
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
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Yoga & Wellness",
      description:
        "Holistic health sessions focusing on mental well-being, stress management, and physical ergonomics specifically tailored for dental professionals.",
      colorTheme: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      glowTheme:
        "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/50",
      icon: (
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Analytical Skill Development",
      description:
        "Workshops emphasizing critical thinking, evidence-based dentistry, and advanced problem-solving in complex clinical scenarios.",
      colorTheme: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      glowTheme:
        "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] group-hover:border-amber-500/50",
      icon: (
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Human Value Development",
      description:
        "Fostering ethical practices, bioethics, social responsibility, and compassionate care within the medical and dental community.",
      colorTheme: "text-rose-400 border-rose-500/30 bg-rose-500/10",
      glowTheme:
        "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] group-hover:border-rose-500/50",
      icon: (
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
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "Employability & Professionalism",
      description:
        "Career guidance, resume building, practice management strategies, and professional networking to prepare students for the global healthcare industry.",
      colorTheme: "text-blue-400 border-blue-500/30 bg-blue-500/10",
      glowTheme:
        "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:border-blue-500/50",
      icon: (
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
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col overflow-hidden relative selection:bg-cyan-500/30">
      <PageBackground>
        <Navbar />

        {/* Ambient Tech Glows */}
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-24 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-24 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-black tracking-[0.3em] uppercase mb-8 shadow-[0_0_30px_rgba(34,211,238,0.2)] relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)] animate-pulse"></span>
              Student Development
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-6 relative">
              <span className="absolute -inset-2 blur-2xl opacity-20 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 z-0"></span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 drop-shadow-sm">
                Capability Enhancement
              </span>
              <br />
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Schemes & Programs
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium max-w-3xl">
              Empowering our students beyond the clinical curriculum through
              targeted initiatives that build leadership, communication, ethics,
              and holistic wellness.
            </p>
          </div>

          {/* =============================================================== */}
          {/* SCHEMES GRID                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-32 relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
              {schemesData.map((scheme, idx) => (
                <div
                  key={scheme.id}
                  className={`group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-[2rem] p-8 md:p-10 hover:-translate-y-2 transition-all duration-500 overflow-hidden ${scheme.glowTheme}`}
                >
                  {/* Subtle Background Glow per card */}
                  <div
                    className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none ${scheme.colorTheme.split(" ")[2]}`}
                  ></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div
                      className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-inner ${scheme.colorTheme}`}
                    >
                      {scheme.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-300 transition-colors">
                      {scheme.title}
                    </h3>

                    <p className="text-slate-400 font-medium leading-relaxed mb-8 flex-grow">
                      {scheme.description}
                    </p>

                    <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between mt-auto">
                      <span className="text-[10px] font-black tracking-widest text-slate-500 uppercase group-hover:text-cyan-400 transition-colors">
                        Explore Module
                      </span>
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors">
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
                </div>
              ))}
            </div>
          </div>

          {/* =============================================================== */}
          {/* ACTION BANNER & PDF VIEWER LAUNCHER                               */}
          {/* =============================================================== */}
          <div className="max-w-5xl mx-auto px-6 w-full animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <div className="relative bg-gradient-to-br from-slate-900/80 to-[#020617] backdrop-blur-2xl border border-cyan-500/30 rounded-[3rem] p-10 md:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_0_50px_rgba(34,211,238,0.1)] group hover:border-cyan-500/50 transition-colors duration-700">
              {/* Massive Abstract Glow */}
              <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-400/30 transition-colors duration-700"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center text-center md:text-left gap-8 w-full">
                <div className="w-24 h-24 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                  <svg
                    className="w-10 h-10 text-cyan-400"
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

                <div className="space-y-3 flex-grow">
                  <h2 className="text-3xl font-black text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                    Official Schemes Document
                  </h2>
                  <p className="text-slate-400 font-medium leading-relaxed max-w-lg">
                    Access the complete, consolidated report detailing all
                    capability enhancement initiatives, schedules, and
                    implementation frameworks.
                  </p>
                </div>

                <button
                  onClick={() => setIsPdfOpen(true)}
                  className="cursor-pointer w-full md:w-auto flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#020617] text-sm font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] hover:-translate-y-1 flex-shrink-0"
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
                      strokeWidth="2.5"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  View Internal PDF
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        {/* ========================================================================= */}
        {/* INTERNAL PDF VIEWER OVERLAY MODAL                                         */}
        {/* ========================================================================= */}
        {isPdfOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center animate-in fade-in duration-300">
            <div
              className="absolute inset-0 bg-[#020617]/95 backdrop-blur-3xl cursor-pointer"
              onClick={() => setIsPdfOpen(false)}
            ></div>

            <div className="relative w-full max-w-6xl h-[90vh] mx-4 bg-slate-900 border border-cyan-500/30 rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col animate-in zoom-in-95 duration-500">
              <div className="flex items-center justify-between px-8 py-5 bg-slate-950 border-b border-slate-800 shadow-lg relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30 shadow-inner">
                    <svg
                      className="w-5 h-5 text-cyan-400"
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
                  <span className="text-white font-bold tracking-wide text-lg">
                    Capability_Enhancement_Schemes.pdf
                  </span>
                </div>

                <div className="flex items-center gap-6">
                  <Link
                    href={pdfFilePath}
                    target="_blank"
                    className="text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-cyan-400 transition-colors cursor-pointer hidden md:flex items-center gap-2"
                  >
                    Open in New Tab
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                  <button
                    onClick={() => setIsPdfOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-rose-500 hover:text-white text-slate-300 transition-colors cursor-pointer border border-slate-700"
                  >
                    <svg
                      className="w-6 h-6"
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

              <div className="flex-grow w-full h-full relative bg-[#0f172a]">
                <iframe
                  src={`${pdfFilePath}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-none"
                  title="Capability Enhancement Schemes Document Viewer"
                >
                  <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-5">
                    <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mb-4">
                      <svg
                        className="w-10 h-10 text-slate-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <p className="text-slate-300 text-lg font-medium">
                      Your browser does not support embedded PDFs.
                    </p>
                    <Link
                      href={pdfFilePath}
                      target="_blank"
                      className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 transition-colors text-slate-950 font-black uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    >
                      Download Document
                    </Link>
                  </div>
                </iframe>
              </div>
            </div>
          </div>
        )}
      </PageBackground>

      {/* Global CSS for shimmer effect */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `,
        }}
      />
    </main>
  );
}
