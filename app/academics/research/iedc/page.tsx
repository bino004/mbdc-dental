"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  Rocket,
  Eye,
  Target,
  Compass,
  Download,
  Lightbulb,
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

export default function IEDCPage() {
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
                Committees & Cells // Innovation
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-[7rem] font-black uppercase text-white tracking-tighter leading-[0.9]"
                >
                  IEDC @ <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                    MBDC
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-4">
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                >
                  A flagship initiative of the Kerala Startup Mission to promote
                  innovation and entrepreneurship among the academic fraternity.
                </motion.p>
              </div>
            </div>
          </header>

          {/* BENTO GRID: OVERVIEW, VISION, MISSION & PURPOSE */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12 items-stretch">
            {/* OVERVIEW CARD (Spans 2 columns) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-cyan-500/30 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <Rocket className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                  Program Overview
                </h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                The Innovation and Entrepreneurship Development Centre (IEDC) is
                an umbrella program instrumental in fostering an innovation
                culture within academic institutions. It develops institutional
                mechanisms to foster techno-entrepreneurship to generate wealth
                and employment.{" "}
                <strong className="text-white">
                  At present, Mar Baselios Dental College is one of the few
                  dental colleges in Kerala to have started an IEDC.
                </strong>
              </p>
            </motion.div>

            {/* MISSION CARD */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-indigo-500/20 bg-gradient-to-b from-indigo-950/30 to-transparent p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-indigo-500/40 flex flex-col justify-center"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-indigo-500/10 rounded-2xl">
                  <Target className="w-8 h-8 text-indigo-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight">
                  Our Mission
                </h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To create IEDC as an Innovation Platform and to develop future
                founders by promoting{" "}
                <strong className="text-white">
                  Innovation, Technology, and Business Learning
                </strong>{" "}
                among the student community.
              </p>
            </motion.div>

            {/* VISION CARD */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-blue-500/30"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-blue-500/10 rounded-2xl">
                  <Eye className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight">
                  Our Vision
                </h2>
              </div>
              <p className="text-slate-300 leading-relaxed">
                To create an innovation culture among innovators by introducing
                them to state-of-the-art technologies and positioning the
                Institution as a{" "}
                <strong className="text-white">
                  Learning and Innovation Platform
                </strong>{" "}
                by delivering technically competent and skilled entrepreneurs.
              </p>
            </motion.div>

            {/* PURPOSE CARD (Spans 2 columns) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-purple-500/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-purple-500/10 rounded-2xl">
                  <Compass className="w-8 h-8 text-purple-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                  Core Purpose
                </h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                The IEDC acts as an aspirational platform for student
                entrepreneurs and tech-savvy innovators to sharpen their
                entrepreneurial skill sets. Selected innovators are exposed to
                innovation culture, emerging technologies, and business aspects.
                <br />
                <br />
                <span className="text-purple-300 font-medium">
                  The implicit assumption is that the delta will become
                  entrepreneurs, and all other skilled talents will secure
                  high-end jobs due to the exposure and skills they acquire.
                </span>
              </p>
            </motion.div>
          </div>

          {/* ACTION / DOCUMENT DOWNLOAD SECTION */}
          <motion.section variants={itemVariants} className="relative z-10">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-cyan-400 to-indigo-600" />

              <div className="flex items-center gap-6">
                <div className="p-5 bg-white/5 rounded-full border border-white/10 shrink-0">
                  <Lightbulb className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
                    Official Documentation
                  </h3>
                  <p className="text-slate-400">
                    View or download the official IEDC guidelines and related
                    documents.
                  </p>
                </div>
              </div>

              <Link
                href="/academics/iedc-document.pdf"
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
