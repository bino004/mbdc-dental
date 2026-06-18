"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  Lightbulb,
  Rocket,
  Target,
  Download,
  CheckCircle2,
  Award,
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

export default function InnovationCouncilPage() {
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
                Committees & Cells // IIC-MBDC
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-[6.5rem] font-black uppercase text-white tracking-tighter leading-[0.9]"
                >
                  Institution's <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                    Innovation Council
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-4">
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                >
                  Established under the norms of the Innovation Cell, Ministry
                  of Education, Government of India.
                </motion.p>
              </div>
            </div>
          </header>

          {/* BENTO GRID: OVERVIEW & OBJECTIVES */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12 items-stretch">
            {/* OVERVIEW CARD (Spans 2 columns) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-cyan-500/30 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <Lightbulb className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                  Program Overview
                </h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                As per the norms of the{" "}
                <strong className="text-white">
                  Innovation Cell, Ministry of Education, Govt. of India
                </strong>
                , Mar Baselios Dental College has established the Institution’s
                Innovation Council (IIC). The main objective is to actively
                involve a significant number of faculty, students, and other
                staff in a wide range of innovation and entrepreneurship-related
                activities.
              </p>
            </motion.div>

            {/* ULTIMATE GOAL CARD */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-indigo-500/20 bg-gradient-to-b from-indigo-950/30 to-transparent p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-indigo-500/40"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-indigo-500/10 rounded-2xl">
                  <Target className="w-8 h-8 text-indigo-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight">
                  The Vision
                </h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                The ultimate goal is to establish and solidify a robust{" "}
                <strong className="text-white">
                  ecosystem of innovation and entrepreneurship
                </strong>{" "}
                within Higher Education Institutions (HEIs).
              </p>
            </motion.div>

            {/* KEY ACTIVITIES LIST (Spans full width) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-500/10 rounded-2xl">
                  <Rocket className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                  Core Activities & Focus Areas
                </h2>
              </div>
              <p className="text-slate-400 mb-8 max-w-3xl">
                The IIC focuses on driving comprehensive engagement through
                specialized stages of the entrepreneurial lifecycle:
              </p>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Idea Generation
                  </h3>
                  <p className="text-sm text-slate-400">
                    Fostering creative problem-solving and foundational ideation
                    among students and faculty.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/20 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-indigo-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    Design Thinking & POC
                  </h3>
                  <p className="text-sm text-slate-400">
                    Applying Design Thinking principles and developing viable
                    Proof of Concepts (POCs).
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-purple-500/20 transition-all">
                  <CheckCircle2 className="w-6 h-6 text-purple-400 mb-4" />
                  <h3 className="text-lg font-bold text-white mb-2">
                    IPR & Incubation
                  </h3>
                  <p className="text-sm text-slate-400">
                    Managing intellectual property rights and overseeing
                    projects through pre-incubation and incubation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ACTION / CERTIFICATE DOWNLOAD SECTION */}
          <motion.section variants={itemVariants} className="relative z-10">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-cyan-400 to-indigo-600" />

              <div className="flex items-center gap-6">
                <div className="p-5 bg-white/5 rounded-full border border-white/10 shrink-0">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
                    Official Recognition
                  </h3>
                  <p className="text-slate-400">
                    View the official documentation and certification for the
                    IIC.
                  </p>
                </div>
              </div>

              <Link
                href="/academics/iic-certificate.pdf"
                target="_blank"
                className="group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-wider shadow-xl hover:bg-cyan-400 transition-colors w-full md:w-auto shrink-0"
              >
                <Download className="w-5 h-5" />
                <span>Download PDF</span>
              </Link>
            </div>
          </motion.section>
        </motion.div>
        <Footer />
      </PageBackground>
    </main>
  );
}
