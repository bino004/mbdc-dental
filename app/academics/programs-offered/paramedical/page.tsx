"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  Stethoscope,
  Activity,
  ShieldPlus,
  Wrench,
  Clock,
  GraduationCap,
  CheckCircle2,
  Download,
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

export default function ParamedicalProgramsPage() {
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
                Academic Portal // Allied Health
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-[7.5rem] font-black uppercase text-white tracking-tighter leading-[0.9]"
                >
                  Paramedical <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                    Diploma Courses
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-5">
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                >
                  Equipping students with specialized clinical, technical, and
                  operational skills to support comprehensive dental healthcare
                  and laboratory services.
                </motion.p>
              </div>
            </div>
          </header>

          {/* COMMON ELIGIBILITY & DURATION */}
          <motion.section
            variants={itemVariants}
            className="relative z-10 grid md:grid-cols-2 gap-6 mb-6"
          >
            <div className="rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-indigo-950/40 to-transparent p-10 backdrop-blur-md flex items-center gap-6">
              <div className="p-5 bg-indigo-500/10 rounded-3xl shrink-0">
                <Clock className="w-10 h-10 text-indigo-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[3px] text-indigo-400 font-bold mb-1">
                  Standard Duration
                </p>
                <h3 className="text-3xl font-black text-white">
                  2 Academic Years
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  Applies to all paramedical diploma programs.
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-950/30 to-transparent p-10 backdrop-blur-md flex items-center gap-6">
              <div className="p-5 bg-cyan-500/10 rounded-3xl shrink-0">
                <GraduationCap className="w-10 h-10 text-cyan-400" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[3px] text-cyan-400 font-bold mb-1">
                  Basic Eligibility
                </p>
                <h3 className="text-2xl font-black text-white leading-tight">
                  10+2 Science (PCB)
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  Minimum 50% aggregate required for admission.
                </p>
              </div>
            </div>
          </motion.section>

          {/* COURSE BENTO GRID */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {/* COURSE 1: DENTAL HYGIENIST */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-all hover:border-cyan-500/40 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <ShieldPlus className="w-8 h-8 text-cyan-400" />
                </div>
                <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase border border-cyan-500/30 px-3 py-1 rounded-full">
                  DH
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-4 tracking-tight">
                Dental Hygienist
              </h2>
              <p className="text-[15px] text-slate-300 leading-relaxed mb-8 flex-grow">
                Trains students in preventive dental care, oral hygiene,
                scaling, root planing, and patient education. Dental hygienists
                play a crucial role in preventing oral diseases and promoting
                community dental health.
              </p>
              <ul className="space-y-3 text-sm text-slate-400 mt-auto border-t border-white/10 pt-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />{" "}
                  Preventive Dentistry & Prophylaxis
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />{" "}
                  Periodontal Maintenance
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />{" "}
                  Patient Oral Health Education
                </li>
              </ul>
            </motion.div>

            {/* COURSE 2: DENTAL MECHANICS */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-all hover:border-blue-500/40 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-blue-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <Wrench className="w-8 h-8 text-blue-400" />
                </div>
                <span className="text-xs font-mono tracking-widest text-blue-400 uppercase border border-blue-500/30 px-3 py-1 rounded-full">
                  DM
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-4 tracking-tight">
                Dental Mechanics
              </h2>
              <p className="text-[15px] text-slate-300 leading-relaxed mb-8 flex-grow">
                Focuses on the laboratory and technical aspects of dentistry.
                Students learn to fabricate dental prosthetics, including
                complete dentures, partial dentures, crowns, bridges, and
                customized orthodontic appliances.
              </p>
              <ul className="space-y-3 text-sm text-slate-400 mt-auto border-t border-white/10 pt-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />{" "}
                  Fabrication of Dental Prosthetics
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />{" "}
                  Dental Materials Science
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />{" "}
                  Orthodontic Appliance Design
                </li>
              </ul>
            </motion.div>

            {/* COURSE 3: DORA */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-all hover:border-indigo-500/40 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-indigo-500/10 rounded-2xl group-hover:scale-110 transition-transform">
                  <Activity className="w-8 h-8 text-indigo-400" />
                </div>
                <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase border border-indigo-500/30 px-3 py-1 rounded-full">
                  DORA
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase text-white mb-4 tracking-tight">
                Dental Operating Room Assistant
              </h2>
              <p className="text-[15px] text-slate-300 leading-relaxed mb-8 flex-grow">
                Prepares students to assist dental surgeons during procedures.
                The curriculum emphasizes infection control, instrument
                sterilization, four-handed dentistry, and comprehensive clinic
                management.
              </p>
              <ul className="space-y-3 text-sm text-slate-400 mt-auto border-t border-white/10 pt-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />{" "}
                  Chair-side Clinical Assistance
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />{" "}
                  Sterilization & Infection Control
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />{" "}
                  Patient Preparation & Care
                </li>
              </ul>
            </motion.div>
          </div>

          {/* ACTION SECTION */}
          <motion.section variants={itemVariants} className="mt-12">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-cyan-400 to-indigo-600" />

              <div className="text-left space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 text-cyan-400 font-bold uppercase tracking-widest text-xs">
                  <Download className="w-4 h-4" /> Academic Resources
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                  Paramedical Prospectus
                </h3>
                <p className="text-base text-slate-400 leading-relaxed font-normal">
                  Download the comprehensive guide containing detailed syllabus
                  structures, regulatory parameters, and full admission rules
                  for all diploma courses.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link
                  href="/admissions/paramedical-courses"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.05] border border-white/10 text-white font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
                >
                  <span>Admission Details</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/academics/paramedical-prospectus.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold uppercase tracking-wider shadow-xl hover:bg-cyan-400 transition-colors"
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
