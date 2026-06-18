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

export default function BDSExaminationPage() {
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
                Academic Portal // Examination Matrix
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-[7rem] font-black uppercase text-white tracking-tighter leading-[0.9]"
                >
                  BDS Evaluation <br />
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
                  Evaluation is a continuous process based upon established
                  criteria to assess learner performance, indirectly helping
                  measure the effectiveness and quality of the B.D.S. programme.
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
                  The Two-Step Process
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-all">
                  <Activity className="w-6 h-6 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Formative Evaluation
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Also known as Internal Assessment. This is conducted through
                    a series of tests and examinations administered periodically
                    by the institution throughout the academic year.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/20 transition-all">
                  <BookCheck className="w-6 h-6 text-indigo-400 mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">
                    Summative Evaluation
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Conducted directly by the university. These are the final,
                    comprehensive examinations held at the end of the specified
                    course period.
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
                Tested Methods
              </h2>
              <p className="text-slate-300 text-sm mb-6">
                Evaluation is achieved using the following core testing methods:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 bg-white/[0.05] p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-slate-200 uppercase tracking-wide text-sm">
                    Written Test
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/[0.05] p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-slate-200 uppercase tracking-wide text-sm">
                    Practical Examination
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/[0.05] p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-slate-200 uppercase tracking-wide text-sm">
                    Clinical Examination
                  </span>
                </li>
                <li className="flex items-center gap-3 bg-white/[0.05] p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                  <span className="font-bold text-slate-200 uppercase tracking-wide text-sm">
                    Viva Voce
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* ELIGIBILITY CRITERIA */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-indigo-500/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-indigo-500/10 rounded-2xl">
                  <ShieldAlert className="w-8 h-8 text-indigo-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                  Eligibility Criteria
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-[15px] leading-relaxed text-slate-300">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">
                    First-Time Examination
                  </h3>
                  <p>
                    To be eligible to write the university examination for the
                    first time, a candidate must secure:
                  </p>
                  <ul className="space-y-2 mt-4 pl-4 border-l-2 border-indigo-500/50">
                    <li>
                      <strong className="text-white">
                        Minimum 80% attendance
                      </strong>{" "}
                      in all the subjects in which the examination is being
                      held.
                    </li>
                    <li>
                      <strong className="text-white">
                        Minimum 70% attendance
                      </strong>{" "}
                      in Lectures and Practical/Clinical separately in all
                      non-exam subjects.
                    </li>
                    <li>
                      <strong className="text-white">Minimum 40% marks</strong>{" "}
                      in internal assessments to attempt the university
                      examination in those specific subjects.
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-white uppercase tracking-wide border-b border-white/10 pb-2">
                    Supplementary / Re-Appearance
                  </h3>
                  <p>
                    A candidate can reappear for the university examination in
                    failed subjects provided they meet the following baseline
                    requirements during the supplementary period:
                  </p>
                  <ul className="space-y-2 mt-4 pl-4 border-l-2 border-cyan-500/50">
                    <li>
                      <strong className="text-white">
                        Minimum 70% attendance
                      </strong>{" "}
                      (theory & practical calculated separately).
                    </li>
                    <li>
                      <strong className="text-white">Minimum 40% marks</strong>{" "}
                      in the internal assessment conducted for that specific
                      subject.
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
