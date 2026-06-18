"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";

export default function IQACInitiativesPage() {
  // State to manage the internal PDF viewer overlay
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  // Placeholder path for your PDF file (Place your actual PDF in the public folder)
  const pdfFilePath = "/assets/iqac-initiatives-report.pdf";

  return (
    <main className="min-h-screen bg-[#040d1a] text-white flex flex-col overflow-hidden relative selection:bg-purple-500/30">
      <PageBackground>
        <Navbar />

        {/* Dynamic Ambient Background Glows */}
        <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>

        {/* Main Content Wrapper */}
        <div className="flex-grow pt-40 pb-32 px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-center justify-center min-h-[85vh]">
          {/* Page Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-block px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-black tracking-[4px] uppercase mb-2 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
              Quality Enhancement
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white tracking-tighter">
              IQAC <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Strategic Initiatives
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
              Showcasing the deliberate, coherent, and transformative programs
              implemented by the Internal Quality Assurance Cell to foster a
              pervasive culture of academic and administrative excellence.
            </p>
          </div>

          {/* Premium Document Card */}
          <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-150">
            <div className="group relative bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-14 hover:bg-white/[0.04] hover:border-purple-500/40 transition-all duration-500 shadow-2xl hover:shadow-[0_20px_60px_rgba(168,85,247,0.15)] overflow-hidden">
              {/* Hover Accent Glow inside Card */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 text-center md:text-left">
                {/* Document Icon Graphic */}
                <div className="flex-shrink-0 w-28 h-28 rounded-[2rem] bg-gradient-to-br from-purple-500/20 to-blue-600/20 border border-purple-500/30 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
                  <svg
                    className="w-12 h-12 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12h6m-6 4h6"
                    />
                  </svg>
                </div>

                {/* Document Info & Button */}
                <div className="flex-grow space-y-6">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 text-xs font-bold tracking-widest uppercase">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Latest Initiatives Compiled
                    </div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-purple-300 transition-colors">
                      Consolidated IQAC Initiatives Report
                    </h2>
                    <p className="text-gray-400 font-medium leading-relaxed">
                      Review our comprehensive documentation of workshops,
                      academic audits, feedback analyses, and quality
                      enhancement protocols.
                    </p>
                  </div>

                  {/* Internal PDF Trigger Button */}
                  <div className="pt-2">
                    <button
                      onClick={() => setIsPdfOpen(true)}
                      className="cursor-pointer w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-400 hover:to-cyan-400 text-white text-sm font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] hover:-translate-y-1"
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
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.5"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                      Read Internal Report
                    </button>
                  </div>
                </div>
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
            {/* Frosted Glass Backdrop */}
            <div
              className="absolute inset-0 bg-[#020813]/90 backdrop-blur-xl cursor-pointer"
              onClick={() => setIsPdfOpen(false)}
            ></div>

            {/* PDF Container */}
            <div className="relative w-full max-w-6xl h-[90vh] mx-4 bg-[#0a192f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-5 h-5 text-purple-400"
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
                  <span className="text-white font-bold tracking-wide">
                    IQAC_Initiatives_Report.pdf
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Fallback Direct Link in case browser blocks iframe */}
                  <Link
                    href={pdfFilePath}
                    target="_blank"
                    className="text-xs font-bold text-purple-400 uppercase tracking-widest hover:text-white transition-colors cursor-pointer hidden md:block"
                  >
                    Open in New Tab ↗
                  </Link>
                  <button
                    onClick={() => setIsPdfOpen(false)}
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
                  src={`${pdfFilePath}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-none"
                  title="IQAC Initiatives Document Viewer"
                >
                  {/* Fallback if browser doesn't support iframes */}
                  <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4">
                    <p className="text-gray-400">
                      Your browser does not support embedded PDFs.
                    </p>
                    <Link
                      href={pdfFilePath}
                      target="_blank"
                      className="px-6 py-3 bg-purple-500 hover:bg-purple-400 transition-colors text-white font-bold rounded-xl shadow-lg"
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
