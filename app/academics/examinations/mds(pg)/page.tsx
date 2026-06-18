"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  BookOpen,
  ClipboardCheck,
  FileSpreadsheet,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
} from "lucide-react";

// Framer Motion Variants
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

export default function MDSExaminationPage() {
  return (
    <main className="overflow-x-hidden bg-[#02040a] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      <PageBackground>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative mx-auto max-w-[1700px] px-6 pt-52 pb-32 md:px-12 xl:px-20"
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[180px] pointer-events-none" />

          {/* HERO SECTION */}
          <header className="relative z-10 border-b border-white/10 pb-20 mb-20 text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] text-cyan-400/80 uppercase font-bold">
                Academic Portal // PG Examination
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-[7rem] font-black uppercase text-white tracking-tighter leading-[0.9]"
                >
                  MDS Evaluation <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                    & Eligibility
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-5">
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                >
                  Comprehensive guidelines, eligibility criteria, and structural
                  breakdown for the Master of Dental Surgery final examinations.
                </motion.p>
              </div>
            </div>
          </header>

          {/* BENTO GRID */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {/* ELIGIBILITY CRITERIA (Spans 2 columns) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <ShieldCheck className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                  Eligibility Criteria
                </h2>
              </div>

              <p className="text-slate-300 mb-8 leading-relaxed">
                The following core requirements must be strictly fulfilled by
                the candidate to become eligible for the final university
                examinations:
              </p>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-all">
                  <ClipboardCheck className="w-6 h-6 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Attendance
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Every candidate must secure a minimum of{" "}
                    <strong className="text-white">80% attendance</strong>{" "}
                    during each academic year.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/20 transition-all">
                  <GraduationCap className="w-6 h-6 text-indigo-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Progress & Conduct
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Mandatory participation in seminars, journal review
                    meetings, symposia, conferences, case presentations, and
                    didactic lectures.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/20 transition-all">
                  <BookOpen className="w-6 h-6 text-blue-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Work Diary
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Maintain a verified log book (Annexure-I) recording
                    participation, certified by the Head of the Department.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* THESIS / DISSERTATION */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-indigo-500/20 bg-gradient-to-b from-indigo-950/30 to-transparent p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-indigo-500/40 flex flex-col justify-center"
            >
              <FileSpreadsheet className="w-10 h-10 text-indigo-400 mb-6" />
              <h2 className="text-xl md:text-2xl font-black uppercase text-white mb-4">
                Dissertation Protocol
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                A critical component of the MDS program. Acceptance of the
                submitted dissertation by external examiners is a strict
                pre-requisite before a candidate is allowed to appear for the
                Part II final university examination.
              </p>
              <div className="bg-indigo-500/10 p-4 rounded-xl border border-indigo-500/20">
                <p className="text-xs text-indigo-200 font-medium uppercase tracking-wider text-center">
                  Mandatory Submission
                </p>
              </div>
            </motion.div>

            {/* EXAMINATION STRUCTURE (Spans full width) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                  University Examination Structure
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[15px] leading-relaxed text-slate-300">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-3">
                    Part I: Basic Sciences
                  </h3>
                  <p className="mb-4">
                    Conducted at the end of the{" "}
                    <strong className="text-white">first academic year</strong>.
                    It focuses on the applied basic sciences relevant to the
                    chosen dental specialty.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        Evaluates foundational knowledge necessary for advanced
                        clinical practice.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide border-b border-white/10 pb-3">
                    Part II: Clinical Specialty
                  </h3>
                  <p className="mb-4">
                    Conducted at the end of the{" "}
                    <strong className="text-white">third academic year</strong>.
                    This is the final comprehensive examination for the MDS
                    degree.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        Consists of{" "}
                        <strong className="text-white">
                          Written Theory Papers
                        </strong>{" "}
                        on core specialty subjects.
                      </span>
                    </li>
                    <li className="flex items-start gap-3 bg-white/[0.02] p-3 rounded-xl border border-white/5">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        Includes rigorous{" "}
                        <strong className="text-white">
                          Practical/Clinical testing
                        </strong>{" "}
                        and <strong className="text-white">Viva Voce</strong>.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ACTION / ROUTING SECTION */}
          <motion.section
            variants={itemVariants}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/academics/examinations"
              className="group flex items-center gap-4 px-10 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black uppercase tracking-widest shadow-[0_0_40px_rgba(6,182,212,0.4)] hover:shadow-[0_0_60px_rgba(6,182,212,0.6)] transition-all hover:scale-[1.02]"
            >
              For More Details
              <div className="bg-white/20 p-2 rounded-full group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </Link>
          </motion.section>
        </motion.div>
        <Footer />
      </PageBackground>
    </main>
  );
}
