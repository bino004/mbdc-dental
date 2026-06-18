"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  ClipboardCheck,
  Target,
  LineChart,
  GraduationCap,
  Users,
  FileEdit,
  Heart,
  Building2,
  Award,
  FileText,
  Download,
} from "lucide-react";

// --- EXTRACTED DATA ---
const objectives = [
  {
    title: "Fair & Objective System",
    desc: "To formulate a fair and objective System for the functioning of the Academic Monitoring Cell of the University.",
    icon: Scale,
  },
  {
    title: "Scientific Criteria",
    desc: "To develop scientific criteria and strategies for its effective implementation across all academic functions.",
    icon: Target,
  },
];

const domains = [
  { title: "Training", icon: GraduationCap },
  { title: "Faculty Development", icon: Users },
  { title: "Student Assessment", icon: FileEdit },
  { title: "Student Welfare", icon: Heart },
  { title: "KUHS Parameters", icon: Building2 },
  { title: "Institutional Excellence", icon: Award },
];

// Helper icon for the objectives
function Scale(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

export default function AcademicMonitoringCellPage() {
  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-cyan-500/30 selection:text-cyan-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Academic Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <ClipboardCheck className="w-4 h-4" />
              Curriculum Committee
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                Academic Monitoring{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Cell
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl">
              Upholding the quality of health science education by providing
              specific guidelines regarding teaching, learning, and assessment.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-24">
            {/* =============================================================== */}
            {/* OVERVIEW BOX                                                    */}
            {/* =============================================================== */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-950/40 to-[#050b1a] border border-cyan-500/20 p-8 md:p-12 shadow-[0_20px_50px_rgba(6,182,212,0.1)] flex flex-col md:flex-row items-center gap-8 backdrop-blur-xl group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform duration-500">
                <LineChart className="w-10 h-10 text-cyan-400" />
              </div>
              <div className="flex-grow space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">
                  Overview
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  Fundamental Functions of the University
                </h3>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg max-w-4xl">
                  The Academic Monitoring Cell is one of the fundamental
                  functions of a University to provide specific guidelines
                  regarding teaching, learning and assessment and ensuring that
                  these are properly materialized. The Kerala University of
                  Health Sciences (KUHS) is committed to ensuring and upholding
                  the quality of health science education in its affiliated
                  Institutions.
                </p>
              </div>
            </div>

            {/* =============================================================== */}
            {/* OBJECTIVES GRID                                                 */}
            {/* =============================================================== */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Our Objectives
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {objectives.map((obj, idx) => {
                  const Icon = obj.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg hover:-translate-y-2 flex flex-col gap-4 items-center text-center md:items-start md:text-left"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-500 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {obj.title}
                      </h3>
                      <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                        {obj.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =============================================================== */}
            {/* DOMAINS OF MONITORING GRID                                      */}
            {/* =============================================================== */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Focus Domains
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4"></div>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  The cell meticulously monitors the following key domains to
                  ensure comprehensive academic excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {domains.map((domain, idx) => {
                  const Icon = domain.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-5 p-6 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-white/5 hover:border-blue-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 shrink-0">
                        <Icon className="w-5 h-5 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                        {domain.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =============================================================== */}
            {/* DOWNLOAD DOCUMENTS / VIEW MORE SECTION                          */}
            {/* =============================================================== */}
            <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
              {/* Button 1: Committee Members */}
              <Link
                href="/assets/pdf/institutional-academic-committee-members.pdf" // Adjust to your actual PDF path
                target="_blank"
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-cyan-500 text-[#02050f] font-black text-sm tracking-widest uppercase hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                Institutional Academic Committee Members
              </Link>

              {/* Button 2: View More Details */}
              <Link
                href="/assets/pdf/academic-monitoring-details.pdf" // Adjust to your actual PDF path
                target="_blank"
                className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-blue-500 hover:border-blue-400 hover:text-white transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1"
              >
                <Download className="w-5 h-5" />
                View More Details
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </PageBackground>
    </main>
  );
}
