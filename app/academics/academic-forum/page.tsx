"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  Presentation,
  Microscope,
  Users,
  Mail,
  Download,
  GraduationCap,
  FileText,
  Clock,
} from "lucide-react";

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

export default function AcademicForumPage() {
  return (
    <main className="overflow-x-hidden bg-[#02040a] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-white pb-32 min-h-screen flex flex-col">
      <Navbar />

      <PageBackground>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative mx-auto max-w-[1500px] px-6 pt-48 md:px-12 xl:px-20"
        >
          {/* DEEP GLOW EFFECTS */}
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none mix-blend-screen" />
          <div className="absolute top-[50%] right-[10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[250px] pointer-events-none mix-blend-screen" />

          {/* HERO SECTION */}
          <header className="relative z-10 border-b border-white/10 pb-16 mb-16 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div>
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="font-mono text-xs tracking-[0.3em] text-cyan-300 uppercase font-bold">
                  Committees & Forums // AFSA
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase text-white tracking-tighter leading-[0.85]"
              >
                Academic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                  Forum
                </span>
              </motion.h1>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start lg:items-end gap-6 max-w-lg"
            >
              <p className="text-lg text-slate-400 font-medium leading-relaxed border-l-2 lg:border-l-0 lg:border-r-2 border-cyan-500/50 pl-6 lg:pl-0 lg:pr-6 backdrop-blur-sm lg:text-right">
                The Academic Forum for Scientific Activities (AFSA MBDC)
                coordinates continuing education, seminars, and technological
                advancements in health sciences.
              </p>
            </motion.div>
          </header>

          {/* BENTO GRID LAYOUT */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {/* OVERVIEW / MISSION CARD (Spans 2 columns) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 group rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10 md:p-14 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/[0.03] flex flex-col justify-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

              <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <Microscope className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">
                  Our Commitment
                </h2>
              </div>

              <p className="text-slate-300/90 leading-relaxed relative z-10 text-lg md:text-xl font-medium mb-8">
                Our institution is committed to updating and upgrading to the
                new developments in health sciences and technology through our
                Continuing Education Series (CDE). These comprehensive programs
                are meticulously designed to foster continuous professional
                growth.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mt-auto">
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <Presentation className="w-6 h-6 text-blue-400" />
                  <span className="font-bold text-white tracking-wide">
                    Seminars & CDEs
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <GraduationCap className="w-6 h-6 text-indigo-400" />
                  <span className="font-bold text-white tracking-wide">
                    Hands-on Trainings
                  </span>
                </div>
              </div>
            </motion.div>

            {/* COMMITTEE STRUCTURE CARD */}
            <motion.div
              variants={itemVariants}
              className="group rounded-[2.5rem] border border-indigo-500/20 bg-gradient-to-br from-indigo-950/40 to-[#02040a] p-10 flex flex-col shadow-2xl transition-all duration-500 hover:border-indigo-500/50 hover:-translate-y-2"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-8 h-8 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                  AFSA Panel
                </h3>
              </div>

              <div className="space-y-6 relative z-10 flex-grow">
                <div className="border-l-2 border-indigo-500/50 pl-4">
                  <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest mb-1">
                    Chairman
                  </p>
                  <p className="text-lg font-black text-white">The Principal</p>
                </div>
                <div className="border-l-2 border-white/10 pl-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Executive Roles
                  </p>
                  <p className="text-base font-bold text-slate-300">
                    Convener & Secretary
                  </p>
                </div>
                <div className="border-l-2 border-white/10 pl-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Advisory Board
                  </p>
                  <p className="text-base font-bold text-slate-300">
                    All Heads of Departments
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 font-bold text-sm tracking-wider uppercase">
                  <Clock className="w-4 h-4" /> Committee Tenure: 2 Years
                </div>
              </div>
            </motion.div>

            {/* CONTACT & PARTNERSHIPS CARD */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 group rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-r from-cyan-950/30 to-transparent p-10 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl transition-all duration-500 hover:border-cyan-500/50 hover:-translate-y-2 overflow-hidden relative"
            >
              <div className="absolute right-0 top-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 max-w-xl">
                <h3 className="text-3xl font-black uppercase text-white tracking-tight mb-4">
                  Academic Partnerships
                </h3>
                <p className="text-slate-400 font-medium text-lg leading-relaxed">
                  For enquiries related to academic collaborations, continuing
                  education programs, and cross-institutional scientific
                  activities, kindly reach out to our coordination team.
                </p>
              </div>

              <a
                href="mailto:afsa@mbdc.edu.in"
                className="relative z-10 shrink-0 group/btn flex items-center gap-4 px-8 py-5 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500 hover:border-cyan-400 hover:text-black transition-all duration-300 shadow-xl"
              >
                <Mail className="w-6 h-6 text-cyan-400 group-hover/btn:text-black" />
                <span className="font-bold tracking-widest text-lg">
                  afsa@mbdc.edu.in
                </span>
              </a>
            </motion.div>

            {/* DOWNLOAD ACTION CARD */}
            <motion.div
              variants={itemVariants}
              className="group rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10 flex flex-col items-center justify-center text-center shadow-2xl transition-all duration-500 hover:border-white/30 hover:bg-white/[0.04] hover:-translate-y-2"
            >
              <div className="p-5 bg-white/5 border border-white/10 rounded-full mb-6 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-black text-white tracking-wide mb-2">
                Official Documents
              </h3>
              <p className="text-slate-400 text-sm font-medium mb-8">
                Download the latest AFSA guidelines, schedules, or event
                details.
              </p>

              <Link
                href="/academics/afsa-documents.pdf"
                target="_blank"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-cyan-400 transition-colors duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)]"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        <Footer />
      </PageBackground>
    </main>
  );
}
