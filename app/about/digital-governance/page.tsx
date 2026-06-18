"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { FileText, Terminal, Download, ArrowUpRight } from "lucide-react";

export default function DigitalGovernancePage() {
  return (
    <main className="overflow-x-hidden bg-[#030712] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      <PageBackground>
        {/* ================= HERO CONTAINER WITH SYMMETRICAL ALIGNMENT ================= */}
        <section className="relative pt-56 pb-40 px-6 md:px-12 xl:px-20 max-w-[1650px] mx-auto min-h-[85vh] flex flex-col justify-center">
          {/* HEADER ROW: Spans elegantly across the top */}
          <div className="w-full space-y-6 text-left mb-8">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-slate-900 border border-white/10 font-mono text-[10px] tracking-[0.3em] text-cyan-400 uppercase">
              <Terminal className="w-3 h-3 text-cyan-400" />
              E-GOVERNANCE MANAGEMENT ENGINE
            </div>

            <h1 className="text-4xl font-black uppercase tracking-tight sm:text-6xl lg:text-[5.5rem] text-white leading-none">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 font-mono font-light">
                GOVERNANCE
              </span>
            </h1>
          </div>

          {/* SPLIT ROW: Core introduction and the PDF trigger side-by-side with matched heights */}
          <div className="grid gap-8 lg:grid-cols-12 items-stretch w-full">
            {/* LEFT 7-COLUMNS: CORE CONTEXT SUMMARY */}
            <div className="lg:col-span-7 relative p-8 rounded-2xl border border-white/10 bg-slate-950/60 backdrop-blur-xl shadow-xl space-y-5 flex flex-col justify-center text-left">
              <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
              <p className="text-sm md:text-base leading-relaxed text-slate-300">
                Mar Baselios Dental College (MBDC) deploys a modern, integrated
                digital framework to automate institutional workflows,
                streamline academic processes, and improve information
                transmission. Our smart campus infrastructure links
                administration, academic modules, and patient care diagnostics
                into a secure digital network.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-slate-300">
                To maintain transparency, operational accountability, and
                continuous technical upgrades, the comprehensive implementation
                strategies and operation reports have been consolidated into our
                official institutional directive.
              </p>
            </div>

            {/* RIGHT 5-COLUMNS: MATCHED PDF E-GOVERNANCE CARD */}
            <div className="lg:col-span-5 w-full flex">
              <div className="relative group rounded-2xl border border-white/10 bg-slate-950/80 p-8 backdrop-blur-3xl shadow-[0_40px_60px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between h-full w-full text-left">
                {/* Visual Glow Laser Highlights */}
                <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-transparent" />
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-[100px] transition duration-500 group-hover:bg-cyan-500/20" />

                {/* Card Header and Metadata */}
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-slate-900 border border-white/10 rounded-2xl text-cyan-400 shadow-inner shrink-0">
                    <FileText className="w-8 h-8" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="inline-block px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-mono font-bold uppercase tracking-wider">
                      SYSTEM DOCUMENTATION
                    </span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">
                      E-Governance Report
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mt-2">
                      Access the complete institutional blueprint detailing our
                      digital infrastructure, portal configurations, and
                      technical framework.
                    </p>
                  </div>
                </div>

                {/* Main Action Trigger Component: Aligned to match the left block's exact base boundary */}
                <div className="mt-6 pt-4">
                  <a
                    href="/assets/e-governance.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden w-full inline-flex items-center justify-between gap-3 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-mono text-xs font-bold uppercase tracking-wider shadow-lg hover:from-cyan-400 hover:to-indigo-500 transition-all duration-300 group/btn"
                  >
                    <div className="absolute inset-0 bg-white/[0.08] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                    <span className="flex items-center gap-2">
                      <Download className="w-4 h-4 animate-pulse" />
                      click here to read more
                    </span>
                    <ArrowUpRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </PageBackground>
    </main>
  );
}
