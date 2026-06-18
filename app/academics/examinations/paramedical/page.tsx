"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  ClipboardList,
  BookCheck,
  Activity,
  FileText,
  CheckCircle2,
  ShieldAlert,
  ArrowRight,
  GraduationCap,
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

export default function ParamedicalExaminationPage() {
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
                Academic Portal // Paramedical Evaluation
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-[7rem] font-black uppercase text-white tracking-tighter leading-[0.9]"
                >
                  Paramedical <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                    Exams & Eligibility
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-5">
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                >
                  Standardized examination guidelines, evaluation criteria, and
                  structural frameworks for Diploma courses in Dental Hygiene,
                  Dental Mechanics, and DORA.
                </motion.p>
              </div>
            </div>
          </header>

          {/* BENTO GRID */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {/* EVALUATION PROCESSES */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <ClipboardList className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                  Assessment Framework
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-all">
                  <Activity className="w-6 h-6 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Internal Assessment
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Continuous evaluation conducted periodically by the
                    institution. Includes practical assignments, ward/clinic
                    performance, and regular class tests to monitor student
                    progress.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/20 transition-all">
                  <BookCheck className="w-6 h-6 text-indigo-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Final Board Examination
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Summative examinations conducted at the end of the Primary
                    (1st Year) and Final (2nd Year) by the Directorate of
                    Medical Education (DME) / Paramedical Board.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* METHODS OF EVALUATION */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-b from-cyan-950/30 to-transparent p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-cyan-500/40"
            >
              <FileText className="w-8 h-8 text-cyan-400 mb-6" />
              <h2 className="text-xl md:text-2xl font-black uppercase text-white mb-6">
                Evaluation Methods
              </h2>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 bg-white/[0.05] p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="font-bold text-slate-200 uppercase tracking-wide text-sm">
                    Written Theory Papers
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/[0.05] p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="font-bold text-slate-200 uppercase tracking-wide text-sm">
                    Practical/Lab Exams
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/[0.05] p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="font-bold text-slate-200 uppercase tracking-wide text-sm">
                    Clinical Case Assessment
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/[0.05] p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="font-bold text-slate-200 uppercase tracking-wide text-sm">
                    Oral Viva Voce
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* ELIGIBILITY & PASSING CRITERIA */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-indigo-500/30"
            >
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-indigo-500/10 rounded-2xl">
                      <ShieldAlert className="w-8 h-8 text-indigo-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                      Eligibility & Passing Criteria
                    </h2>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Candidates must meet strict attendance and performance
                    benchmarks to be eligible to appear for the final diploma
                    examinations.
                  </p>
                </div>

                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8 text-[15px] leading-relaxed text-slate-300">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">
                      Exam Eligibility
                    </h3>
                    <ul className="space-y-3 mt-4 pl-4 border-l-2 border-indigo-500/50">
                      <li>
                        <strong className="text-white">80% Attendance:</strong>{" "}
                        Mandatory in both theoretical and practical/clinical
                        postings.
                      </li>
                      <li>
                        <strong className="text-white">Record Books:</strong>{" "}
                        Satisfactory completion and submission of lab work and
                        clinical quota logbooks.
                      </li>
                      <li>
                        <strong className="text-white">Internal Marks:</strong>{" "}
                        Minimum baseline score in institutional assessments.
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">
                      Passing Requirements
                    </h3>
                    <ul className="space-y-3 mt-4 pl-4 border-l-2 border-cyan-500/50">
                      <li>
                        <strong className="text-white">
                          50% Minimum Mark:
                        </strong>{" "}
                        Candidates must secure at least 50% marks separately in
                        both Theory and Practical/Viva Voce to pass a subject.
                      </li>
                      <li>
                        <strong className="text-white">
                          Supplementary Exams:
                        </strong>{" "}
                        Available for candidates who fail to clear subjects in
                        the primary attempt, subject to attendance rules.
                      </li>
                    </ul>
                  </div>
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
