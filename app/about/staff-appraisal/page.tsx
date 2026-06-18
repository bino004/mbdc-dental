"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Terminal, FileText, Eye, UserCheck, Layers } from "lucide-react";

export default function FacultyExcellencePage() {
  return (
    <main className="overflow-x-hidden bg-[#030712] text-white antialiased selection:bg-cyan-500/30">
      <Navbar />

      <PageBackground>
        {/* ================= HIGH-END HERO HEADER (PADDING ADJUSTED FOR NAVBAR CLEARANCE) ================= */}
        <section className="relative pt-56 pb-16 px-6 md:px-12 xl:px-20 max-w-[1650px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/[0.06]">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-slate-900 border border-white/10 font-mono text-[10px] tracking-[0.3em] text-cyan-400 uppercase">
              <Terminal className="w-3 h-3" />
              ADMINISTRATIVE MATRIX // CONTROL_PANEL
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tight sm:text-5xl text-white">
              STAFF APPRAISAL{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono font-light">
                SYSTEM
              </span>
            </h1>
          </div>

          {/* Institutional Identity Node */}
          <div className="flex items-center gap-3.5 bg-slate-950 p-3.5 rounded-xl border border-white/10 backdrop-blur-2xl shadow-xl">
            <div className="relative w-9 h-9 bg-white rounded-lg p-1">
              <Image
                src="/assets/baselioslogo.webp"
                alt="MBDC Insignia"
                fill
                className="object-contain"
              />
            </div>
            <div className="font-mono text-left leading-none">
              <div className="text-xs font-bold text-white tracking-wider">
                MAR BASELIOS
              </div>
              <div className="text-[9px] text-slate-500 mt-1 uppercase tracking-tight">
                Dental College Matrix
              </div>
            </div>
          </div>
        </section>

        {/* ================= CENTRAL APPRAISAL PORTAL ================= */}
        <section className="relative px-6 md:px-12 xl:px-20 max-w-[1650px] mx-auto pt-12 pb-36">
          <div className="p-6 md:p-10 rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.7)] text-left relative overflow-hidden">
            {/* Dynamic Laser Border Track Accent */}
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-transparent" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/[0.08] pb-6 mb-8">
              <div className="space-y-1.5">
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
                  Performance Evaluation Registry
                </h2>
              </div>
              <div className="text-[10px] font-mono text-slate-400 bg-white/[0.02] border border-white/5 px-3 py-1 rounded-md shrink-0">
                STATUS: LIVE_DOCUMENT_FEED
              </div>
            </div>

            {/* THE TWO TARGET ACTION CARDS */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* TERMINAL 1: TEACHING FACULTY */}
              <motion.a
                href="/path-to-your-teaching-appraisal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-6 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-slate-950 via-slate-950 to-cyan-500/[0.03] overflow-hidden shadow-lg transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-cyan-400 transition-transform origin-bottom scale-y-70 group-hover:scale-y-100" />
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-400/5 blur-2xl transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shadow-inner group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300 shrink-0">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <div className="space-y-1 text-left">
                      <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                        Teaching Faculty Self Appraisal
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans pr-4">
                        Click to view, review, and analyze the structured
                        scholastic verification metrics dashboard.
                      </p>

                      {/* Interactive Blueprint Tag */}
                      <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 group-hover:text-cyan-400 transition-colors">
                        <FileText className="w-3.5 h-3.5" />
                        <span>OPEN_OFFICIAL_DOCUMENT.PDF</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-slate-500 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all shrink-0 flex items-center gap-1 font-mono text-[9px]">
                    <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                      PREVIEW
                    </span>
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.a>

              {/* TERMINAL 2: NON-TEACHING */}
              <motion.a
                href="/path-to-your-non-teaching-appraisal.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block p-6 rounded-2xl border border-indigo-500/20 bg-gradient-to-br from-slate-950 via-slate-950 to-indigo-500/[0.03] overflow-hidden shadow-lg transition-all duration-300 hover:border-indigo-400 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]"
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-indigo-400 transition-transform origin-bottom scale-y-70 group-hover:scale-y-100" />
                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-indigo-500/5 blur-2xl transition-opacity group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 shadow-inner group-hover:bg-indigo-400 group-hover:text-black transition-all duration-300 shrink-0">
                      <Layers className="w-6 h-6" />
                    </div>
                    <div className="space-y-1 text-left">
                      <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-indigo-300 transition-colors">
                        Non-Teaching Appraisal
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed font-sans pr-4">
                        Click to load and verify administrative performance
                        registers and operational logs.
                      </p>

                      {/* Interactive Blueprint Tag */}
                      <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono text-slate-500 group-hover:text-indigo-400 transition-colors">
                        <FileText className="w-3.5 h-3.5" />
                        <span>OPEN_OFFICIAL_DOCUMENT.PDF</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-slate-500 group-hover:text-indigo-400 group-hover:border-indigo-400/30 transition-all shrink-0 flex items-center gap-1 font-mono text-[9px]">
                    <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">
                      PREVIEW
                    </span>
                    <Eye className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        <Footer />
      </PageBackground>
    </main>
  );
}
