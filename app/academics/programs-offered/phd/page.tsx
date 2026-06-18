"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Microscope,
  Award,
  Users,
  FileText,
  ExternalLink,
  ChevronRight,
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

export default function PhDProgramPage() {
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
                Academic Portal // Doctoral Studies
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <motion.h1
                  variants={itemVariants}
                  className="text-6xl md:text-7xl lg:text-[7.5rem] font-black uppercase text-white tracking-tighter leading-[0.9]"
                >
                  Doctor of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                    Philosophy (PhD)
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-5">
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                >
                  The Department of Oral Pathology is a recognized research
                  center for Ph.D. studies by the Kerala University of Health
                  Sciences (KUHS).
                </motion.p>
              </div>
            </div>
          </header>

          {/* BENTO GRID */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {/* OVERVIEW */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                  Program Overview
                </h2>
              </div>
              <p className="text-[15px] md:text-lg text-slate-300 leading-relaxed mb-6">
                The KUHS Ph.D. program at Mar Baselios Dental College is a{" "}
                <strong className="text-white">
                  part-time research program
                </strong>{" "}
                designed to encourage and facilitate scholarly research in Oral
                Pathology. It is specifically tailored to cater to the needs of
                faculty members of the college who wish to contribute to the
                field of oral pathology through their research endeavors.
              </p>
            </motion.div>

            {/* RECOGNITION & APPROVAL */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-b from-cyan-950/30 to-transparent p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-cyan-500/40"
            >
              <Award className="w-8 h-8 text-cyan-400 mb-6" />
              <h2 className="text-xl md:text-2xl font-black uppercase text-white mb-4">
                Research Center Approval
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                The Department of Oral Pathology at Mar Baselios Dental College
                has been approved by KUHS as a recognized research center,
                operating under its aegis.
              </p>
              <div className="bg-white/[0.05] p-4 rounded-xl border border-white/5 text-xs text-cyan-200 font-mono tracking-wide">
                Ref. Circular No. 4563/DeanR/KUHS/2013 Dt.23.03.2017
              </div>
            </motion.div>

            {/* RESEARCH FACILITIES & AREAS */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-indigo-500/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-indigo-500/10 rounded-2xl">
                  <Microscope className="w-8 h-8 text-indigo-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                  Facilities & Areas of Study
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 text-[15px] leading-relaxed text-slate-300">
                <div>
                  <h3 className="font-bold text-white mb-3 text-lg">
                    Research Areas
                  </h3>
                  <p>
                    The PhD program covers a wide range of research areas within
                    oral pathology, including but not limited to the study of{" "}
                    <strong className="text-indigo-300">oral diseases</strong>,{" "}
                    <strong className="text-indigo-300">
                      diagnostic procedures
                    </strong>
                    , and{" "}
                    <strong className="text-indigo-300">
                      treatment modalities
                    </strong>
                    .
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-white mb-3 text-lg">
                    Research Facilities
                  </h3>
                  <p>
                    Mar Baselios Dental College offers comprehensive facilities
                    to enhance scholarly activities, including well-equipped
                    laboratories, a comprehensive dental library, and access to
                    advanced technology.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* SCHOLARS & FACULTY */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-purple-500/30"
            >
              <Users className="w-8 h-8 text-purple-400 mb-6" />
              <h2 className="text-xl md:text-2xl font-black uppercase text-white mb-6">
                Scholars & Faculty
              </h2>
              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-sm font-bold text-white mb-1">
                    Doctoral Scholars
                  </p>
                  <p className="text-sm text-slate-400">
                    We currently have two doctoral scholars enrolled in this
                    part-time PhD program.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                  <p className="text-sm font-bold text-white mb-1">
                    Experienced Faculty
                  </p>
                  <p className="text-sm text-slate-400">
                    We have several experienced faculty members approved by KUHS
                    for guiding research scholars.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* OFFICIAL LINKS & RESOURCES */}
          <motion.section
            variants={itemVariants}
            className="mt-12 grid lg:grid-cols-3 gap-6"
          >
            {/* INTERNAL LINKS */}
            <div className="lg:col-span-2 flex flex-col sm:flex-row gap-6">
              <Link
                href="/academics/approved-research-centres"
                className="group flex-1 p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <FileText className="w-6 h-6 text-cyan-400 mb-6" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 pr-8">
                    Consolidated list of approved research centres of KUHS
                  </h3>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    View Registry <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>

              <Link
                href="/academics/phd-supervising-guides"
                className="group flex-1 p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 hover:border-indigo-500/40 transition-all flex flex-col justify-between"
              >
                <Users className="w-6 h-6 text-indigo-400 mb-6" />
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 pr-8">
                    Consolidated list of Ph.D. supervising guides under KUHS
                  </h3>
                  <div className="flex items-center gap-2 text-indigo-400 text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                    View Guides <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </div>

            {/* EXTERNAL LINK */}
            <a
              href="http://www.kuhs.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-[2rem] bg-cyan-950/20 border border-cyan-500/30 hover:bg-cyan-500 hover:text-black transition-colors flex flex-col justify-center items-center text-center"
            >
              <ExternalLink className="w-8 h-8 text-cyan-400 group-hover:text-black mb-4 transition-colors" />
              <h3 className="text-xl font-black uppercase text-white group-hover:text-black mb-2">
                Kerala University of Health Sciences
              </h3>
              <p className="text-sm text-cyan-200 group-hover:text-black/70">
                For more details, visit the official KUHS website.
              </p>
            </a>
          </motion.section>
        </motion.div>
        <Footer />
      </PageBackground>
    </main>
  );
}
