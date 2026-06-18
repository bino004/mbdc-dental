"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  Layers,
  Clock,
  BookOpen,
  Activity,
  Microscope,
  Download,
  CheckCircle2,
  BrainCircuit,
  Stethoscope,
} from "lucide-react";

// Framer Motion: Explicitly typed structural variant configurations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

export default function BDSProgramPage() {
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
          {/* ================= BACKGROUND GLOW SPHERES ================= */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />
          <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[180px] pointer-events-none" />

          {/* ================= DYNAMIC HERO TITLE HEADER ================= */}
          <header className="relative z-10 border-b border-white/10 pb-20 mb-20 text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] text-cyan-400/80 uppercase font-bold">
                Academic Portal // Programs Offered
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-[7rem] font-black tracking-tighter uppercase text-white leading-[0.9]"
                >
                  Bachelor of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                    Dental Surgery
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-5">
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                >
                  The undergraduate course involves the organization of a
                  year-wise teaching program designed to seamlessly integrate
                  basic sciences, clinical dentistry, and practical laboratory
                  skills.
                </motion.p>
              </div>
            </div>
          </header>

          {/* ================= INTERACTIVE BENTO GRID ================= */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch mb-6">
            {/* CARD 1: GENERAL OUTLINE (Spans 2 columns) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-cyan-500/40 text-left overflow-hidden"
            >
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-cyan-500/[0.03] blur-3xl transition-all duration-500 group-hover:bg-cyan-500/[0.08]" />

              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <Layers className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                  General Outline
                </h2>
              </div>

              <div className="space-y-6 text-[15px] md:text-base leading-relaxed text-slate-300 font-normal">
                <p>
                  The course is designed and integrated to permit smooth
                  progression from the{" "}
                  <strong className="text-white">
                    pre-clinical to clinical phase
                  </strong>
                  . It consists of three main components:
                </p>
                <div className="grid sm:grid-cols-3 gap-6 pt-2">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <Activity className="w-6 h-6 text-cyan-400 mb-3" />
                    <h4 className="font-bold text-white mb-2">Phase I</h4>
                    <p className="text-sm text-slate-400">
                      Subjects common to modern medicine and dentistry (Anatomy,
                      Physiology, Biochemistry, Pharmacology, Pathology,
                      Microbiology, General Medicine & Surgery).
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <Microscope className="w-6 h-6 text-blue-400 mb-3" />
                    <h4 className="font-bold text-white mb-2">Phase II</h4>
                    <p className="text-sm text-slate-400">
                      Runs concurrently with the first and deals with special
                      aspects of oral and dental tissues, oral biology, and oral
                      pathology.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                    <Stethoscope className="w-6 h-6 text-indigo-400 mb-3" />
                    <h4 className="font-bold text-white mb-2">Phase III</h4>
                    <p className="text-sm text-slate-400">
                      Based on the foundations of the first two, dealing with
                      the clinical and technical aspects of dentistry required
                      for general practice.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: PROGRAM DURATION */}
            <motion.div
              variants={itemVariants}
              className="group relative rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-indigo-950/30 to-transparent p-10 md:p-12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-indigo-500/40 text-left overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-indigo-500/10 rounded-2xl">
                    <Clock className="w-8 h-8 text-indigo-400" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                    Program Duration
                  </h2>
                </div>

                <div className="mb-8">
                  <h3 className="text-5xl font-black text-white mb-2">
                    4.5{" "}
                    <span className="text-xl text-slate-400 font-medium">
                      Years
                    </span>
                  </h3>
                  <p className="text-indigo-400 font-bold uppercase tracking-widest text-xs">
                    + 1 Year Internship
                  </p>
                </div>

                <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300 font-normal">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span>
                      Includes a one-year{" "}
                      <strong className="text-white">
                        compulsory paid rotating internship
                      </strong>
                      .
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span>
                      Students are required to engage in{" "}
                      <strong className="text-white">full-time study</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                    <span>
                      Instruction in clinical subjects is at least{" "}
                      <strong className="text-white">
                        two and a half years
                      </strong>
                      .
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* CARD 3: BASIC MEDICAL & DENTAL SUBJECTS (Spans full width) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-blue-500/40 items-center text-left overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-50" />

              <div className="flex flex-col lg:flex-row gap-12 items-start">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-blue-500/10 rounded-2xl">
                      <BookOpen className="w-8 h-8 text-blue-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                      Basic Medical & Dental Subjects
                    </h2>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    At the end of this period the student should be in a
                    position to understand and comprehend in general the
                    development, structure and function of the human body in
                    both health and disease.
                  </p>
                </div>

                <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6 text-[15px] leading-relaxed text-slate-300">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <BrainCircuit className="w-5 h-5 text-cyan-400 shrink-0" />
                      <span>
                        <strong className="text-white block mb-1">
                          Core Sciences
                        </strong>{" "}
                        Anatomy (Gross & Microscopic), Physiology, Biochemistry,
                        Pharmacology, Oral Biology, and Dental Materials.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <Activity className="w-5 h-5 text-indigo-400 shrink-0" />
                      <span>
                        <strong className="text-white block mb-1">
                          Community & Behavior
                        </strong>{" "}
                        Behavioral sciences (to develop communication skills)
                        and Public Health Dentistry (commitment to community).
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <Microscope className="w-5 h-5 text-blue-400 shrink-0" />
                      <span>
                        <strong className="text-white block mb-1">
                          Laboratory Skills
                        </strong>{" "}
                        Pre-clinical Prosthodontics, Crown and Bridge,
                        Conservative dentistry, and Orthodontics.
                      </span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <Layers className="w-5 h-5 text-purple-400 shrink-0" />
                      <span>
                        <strong className="text-white block mb-1">
                          Initial Training
                        </strong>{" "}
                        Studying detailed dental morphology as a fundamental
                        part of the introductory curriculum.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= SYLLABUS DOWNLOAD PANEL ================= */}
          <motion.section
            variants={itemVariants}
            className="relative mt-12 z-10"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-cyan-400 to-indigo-600" />

              <div className="text-left space-y-3 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs">
                  <Download className="w-4 h-4" /> Academic Resources
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                  Complete BDS Syllabus
                </h3>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed font-normal">
                  Download the official, comprehensive syllabus outlining
                  year-by-year coursework, clinical requirements, and
                  examination structures.
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0">
                <Link
                  href="/academics/bds-syllabus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-wider shadow-xl hover:bg-cyan-400 transition-colors w-full md:w-auto"
                >
                  <Download className="w-5 h-5" />
                  <span>Download PDF</span>
                </Link>
              </div>
            </div>
          </motion.section>
        </motion.div>

        <Footer />
      </PageBackground>
    </main>
  );
}
