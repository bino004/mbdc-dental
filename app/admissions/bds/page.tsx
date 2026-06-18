"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  FileSpreadsheet,
  ArrowUpRight,
  Sparkles,
  Layers,
  ShieldAlert,
  Compass,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Clock,
  CheckCircle2,
  GraduationCap,
  ClipboardCheck,
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

export default function BDSAdmissionPage() {
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
                Academic Portal // BDS Matrix
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <motion.h1
                  variants={itemVariants}
                  className="text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter uppercase text-white leading-[0.9]"
                >
                  B.D.S. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                    ADMISSIONS
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-5">
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                >
                  Welcome to the undergraduate architecture of Mar Baselios
                  Dental College. Explore system timelines, regulatory process
                  rules, and financial matrices compiled below.
                </motion.p>
              </div>
            </div>
          </header>

          {/* ================= INTERACTIVE BENTO GRID ================= */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {/* CARD 1: DURATION (Spans 2 columns on large screens) */}
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
                  Course Duration
                </h2>
              </div>

              <div className="space-y-6 text-[15px] md:text-lg leading-relaxed text-slate-300 font-normal">
                <p>
                  The undergraduate dental training program leading to a B.D.S.
                  degree shall be of{" "}
                  <strong className="text-white font-bold">
                    four and a half years duration
                  </strong>{" "}
                  in addition to{" "}
                  <strong className="text-cyan-400 font-bold">
                    one year compulsory paid rotating internship
                  </strong>
                  .
                </p>
                <p className="pt-6 border-t border-white/10 text-sm md:text-base text-slate-400">
                  Students are required to engage in{" "}
                  <strong className="text-white font-semibold">
                    full-time study
                  </strong>{" "}
                  at a Dental college recognized or approved by the Dental
                  Council of India. Instruction in clinical subjects spans at
                  least two and a half years.
                </p>
              </div>
            </motion.div>

            {/* CARD 2: ELIGIBILITY CRITERIA */}
            <motion.div
              variants={itemVariants}
              className="group relative rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-indigo-950/30 to-transparent p-10 md:p-12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-indigo-500/40 text-left overflow-hidden"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-indigo-500/10 rounded-2xl">
                  <GraduationCap className="w-8 h-8 text-indigo-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">
                  Eligibility
                </h2>
              </div>

              <ul className="space-y-4 text-[15px] leading-relaxed text-slate-300 font-normal">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>
                    Passed the 10+2 qualifying exam or equivalent with a{" "}
                    <strong className="text-white">
                      minimum of 50% aggregate
                    </strong>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>
                    Requires compulsory core parameters in{" "}
                    <strong className="text-indigo-300">
                      Physics, Chemistry, and Biology
                    </strong>
                    .
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>
                    Admissions strictly aligned to verified results and{" "}
                    <strong className="text-white">cut-offs of NEET</strong>.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                  <span>
                    Active participation across{" "}
                    <strong className="text-white">
                      three sequential counseling
                    </strong>{" "}
                    verification rounds.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* CARD 3: ADMISSION PROCESS (Spans full width) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 group relative rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-blue-500/40 flex flex-col md:flex-row gap-10 items-center text-left overflow-hidden"
            >
              <div className="shrink-0 p-8 bg-blue-500/10 rounded-full">
                <ClipboardCheck className="w-12 h-12 text-blue-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-6">
                  Admission Process
                </h2>
                <div className="grid sm:grid-cols-2 gap-6 text-[15px] md:text-base leading-relaxed text-slate-300">
                  <div className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                    <span>
                      Admissions usually take place through the national level{" "}
                      <strong className="text-blue-400 font-bold">
                        NEET exam
                      </strong>{" "}
                      conducted across the country.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                    <span>
                      <strong className="text-white">
                        Mandatory since 2016
                      </strong>{" "}
                      for medical and dental undergraduate courses.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                    <span>
                      To be eligible, the student must attain a{" "}
                      <strong className="text-white border-b border-blue-500/50">
                        minimum of 50%
                      </strong>{" "}
                      in the 10+2 qualifying examination.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-blue-400 mt-1 shrink-0" />
                    <span>
                      Counseling sessions proceed sequentially once students
                      clear designated{" "}
                      <strong className="text-blue-400">
                        cut-off configurations
                      </strong>
                      .
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= FEE STRUCTURE ACTION PANEL ================= */}
          <motion.section
            variants={itemVariants}
            className="relative mt-12 mb-12 z-10"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 to-indigo-950/40 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="text-left space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs">
                  <FileSpreadsheet className="w-4 h-4" /> Financial Disclosure
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                  BDS Academic Fee Framework
                </h3>
                <p className="text-base md:text-lg text-slate-400 leading-relaxed font-normal">
                  Having finalized your assessment of the course structure,
                  enrollment pipelines, and legal parameters, explore the full
                  financial ledger and fee breakdown for the B.D.S. program.
                </p>
              </div>

              <div className="w-full md:w-auto shrink-0">
                <Link
                  href="/admissions/fee-structure"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-wider shadow-xl hover:bg-cyan-400 transition-colors w-full md:w-auto"
                >
                  <span>View Fee Ledger</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>
          </motion.section>

          {/* ================= CAMPUS REGISTRY ================= */}
          <motion.section
            variants={itemVariants}
            className="relative mt-24 border-t border-white/10 pt-20 mb-10"
          >
            <div className="grid gap-12 lg:grid-cols-12 items-start text-left">
              <div className="lg:col-span-4 space-y-4 sticky top-32">
                <div className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-cyan-400 uppercase font-bold">
                  <Compass className="w-4 h-4" />
                  Registry Info
                </div>
                <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9]">
                  CAMPUS <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                    REGISTRY
                  </span>
                </h2>
                <p className="text-slate-400 text-lg max-w-sm leading-relaxed">
                  Official institutional contact hub for all academic and
                  admission-related inquiries.
                </p>
              </div>

              <div className="lg:col-span-8 grid gap-6 sm:grid-cols-2">
                <div className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-cyan-500/40">
                  <MapPin className="w-8 h-8 text-cyan-400 mb-6" />
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Location
                  </h4>
                  <p className="text-xl font-bold text-white mb-2">
                    Mar Baselios Dental College
                  </p>
                  <p className="text-slate-400 font-medium">
                    Kothamangalam, Ernakulam District, Kerala
                  </p>
                </div>

                <div className="p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-cyan-500/40">
                  <Phone className="w-8 h-8 text-cyan-400 mb-6" />
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Helplines
                  </h4>
                  <div className="flex flex-col gap-3 mb-4">
                    <a
                      href="tel:048502817500"
                      className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      0485 2817500
                    </a>
                    <a
                      href="tel:+918078236301"
                      className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      +91 8078236301
                    </a>
                  </div>
                  <p className="text-slate-400 font-medium flex items-center gap-2">
                    <Clock className="w-4 h-4" /> 8:00 AM - 4:00 PM (Mon-Sat)
                  </p>
                </div>

                <div className="sm:col-span-2 p-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm transition-all hover:border-cyan-500/40">
                  <Mail className="w-8 h-8 text-cyan-400 mb-6" />
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">
                    Email Endpoints
                  </h4>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <a
                      href="mailto:mbdc2002@gmail.com"
                      className="text-lg font-medium text-white hover:text-cyan-400 transition-colors"
                    >
                      mbdc2002@gmail.com
                    </a>
                    <a
                      href="mailto:reach@mbdc.edu.in"
                      className="text-lg font-medium text-white hover:text-cyan-400 transition-colors"
                    >
                      reach@mbdc.edu.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        </motion.div>

        <Footer />
      </PageBackground>
    </main>
  );
}
