"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  LayoutDashboard,
  Target,
  GraduationCap,
  Users,
  FileCheck,
  Building2,
  TrendingUp,
  Download,
  FileText,
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

// --- Domains Data ---
const domains = [
  { name: "Training", icon: GraduationCap },
  { name: "Faculty Development", icon: Users },
  { name: "Student Assessment", icon: FileCheck },
  { name: "Student Welfare", icon: Users },
  { name: "KUHS Parameters", icon: LayoutDashboard },
  { name: "Institutional Excellence", icon: TrendingUp },
];

export default function AcademicMonitoringCellPage() {
  return (
    <main className="overflow-x-hidden bg-[#02040a] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-white pb-32 min-h-screen flex flex-col">
      <Navbar />

      <PageBackground>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative mx-auto max-w-[1400px] px-6 pt-48 md:px-12"
        >
          {/* BACKGROUND GLOWS */}
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none mix-blend-screen" />

          {/* HERO SECTION */}
          <header className="relative z-10 border-b border-white/10 pb-16 mb-16">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]"
            >
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.3em] text-cyan-300 uppercase font-bold">
                Academic Governance // Monitoring Cell
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase text-white tracking-tighter leading-[0.85]"
            >
              Academic <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
                Monitoring Cell
              </span>
            </motion.h1>
          </header>

          <div className="grid lg:grid-cols-12 gap-12 relative z-10">
            {/* LEFT COLUMN: Overview & Objectives */}
            <div className="lg:col-span-7 space-y-12">
              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-black uppercase text-white tracking-widest mb-6 flex items-center gap-3">
                  <Building2 className="text-cyan-400" /> Overview
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Academic monitoring is a fundamental function of the
                  University, providing specific guidelines regarding teaching,
                  learning, and assessment while ensuring these processes are
                  properly materialized[cite: 8]. The Kerala University of
                  Health Sciences is committed to ensuring and upholding the
                  quality of health science education in its affiliated
                  institutions[cite: 8].
                </p>
              </motion.section>

              <motion.section variants={itemVariants}>
                <h2 className="text-2xl font-black uppercase text-white tracking-widest mb-6 flex items-center gap-3">
                  <Target className="text-indigo-400" /> Objectives
                </h2>
                <ul className="space-y-4 text-lg text-slate-300 list-none">
                  <li className="flex gap-3">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>
                      To formulate a fair and objective system for the
                      functioning of the Academic Monitoring Cell of the
                      University[cite: 8].
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>
                      To develop scientific criteria and strategies for its
                      effective implementation[cite: 8].
                    </span>
                  </li>
                </ul>
              </motion.section>
            </div>

            {/* RIGHT COLUMN: Domains & Actions */}
            <div className="lg:col-span-5 space-y-10">
              <motion.section
                variants={itemVariants}
                className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 backdrop-blur-xl"
              >
                <h2 className="text-xl font-black uppercase text-white tracking-widest mb-8 text-center">
                  Core Domains
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {domains.map((domain, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-all duration-300"
                    >
                      <domain.icon className="w-8 h-8 text-cyan-400" />
                      <span className="text-xs font-bold uppercase text-center">
                        {domain.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.section>

              {/* ACTION BUTTONS */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-4"
              >
                <Link
                  href="/academics/academic-committee-members.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-black font-black uppercase tracking-widest text-sm hover:bg-cyan-400 transition-colors shadow-xl"
                >
                  <Download className="w-5 h-5" /> Institutional Academic
                  Committee Members
                </Link>
                <Link
                  href="/academics/monitoring-cell-details.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-black uppercase tracking-widest text-sm hover:bg-cyan-500 hover:text-black transition-colors"
                >
                  <FileText className="w-5 h-5" /> More Details
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
        <Footer />
      </PageBackground>
    </main>
  );
}
