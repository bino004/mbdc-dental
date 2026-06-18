"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  FileText,
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Download,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

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

export default function DORAPage() {
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

          {/* ================= DYNAMIC HERO ================= */}
          <header className="relative z-10 border-b border-white/10 pb-20 mb-10 text-left">
            <motion.div variants={itemVariants}>
              <p className="mb-6 text-[10px] md:text-xs uppercase tracking-[0.3em] text-cyan-400 font-mono font-bold">
                Paramedical Portal // DORA Matrix
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.9] uppercase mb-8">
                Dental Operating <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                  Room Assistance
                </span>
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed border-l-2 border-cyan-500/50 pl-6">
                Official academic guidelines, clinical syllabus structures, and
                regulatory admission parameters for the DORA program.
              </p>
            </motion.div>
          </header>

          {/* ================= DYNAMIC BENTO GRID ================= */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {/* COURSE DURATION CARD */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 p-10 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                  Course Duration & Syllabus
                </h2>
              </div>
              <div className="space-y-4 text-[15px] md:text-base text-slate-300 leading-relaxed">
                <p>
                  Duration of the course is{" "}
                  <strong className="text-white font-bold">2 years</strong>. The
                  course consists of two parts:{" "}
                  <strong className="text-cyan-400">Primary (1st year)</strong>{" "}
                  and{" "}
                  <strong className="text-cyan-400">Final (2nd year)</strong>.
                </p>
                <ul className="space-y-3 pl-4 border-l-2 border-white/10">
                  <li>
                    <strong className="text-white">Primary:</strong> (i)
                    Anatomy, Physiology, Histology, Pathology and Bacteriology,
                    (ii) Basic Nursing Food and nutrition, (iii) Computer,
                    Office Management, Biomedical Waste Disposal and
                    Sterilization.
                  </li>
                  <li>
                    <strong className="text-white">Final:</strong> (i) Oral
                    Anatomy & Physiology, Diseases of Teeth and Gums & Dental
                    Materials, (ii) Operating Room Techniques Chair Side
                    Assistance, Dental Lab Routine, (iii) Maxillofacial Surgery
                    Assistance, Dental Radiology, Dental Ethics & Jurisprudence,
                    Orientation in Dentistry.
                  </li>
                </ul>
                <p className="pt-2">
                  A{" "}
                  <strong className="text-white font-bold border-b border-cyan-500/50">
                    minimum of 50% marks
                  </strong>{" "}
                  in each of the subjects is required for a pass.
                </p>
              </div>
            </motion.div>

            {/* ELIGIBILITY CARD */}
            <motion.div
              variants={itemVariants}
              className="p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-cyan-950/30 to-transparent border border-white/10 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
                  Eligibility Criteria
                </h2>
              </div>
              <ul className="space-y-4 text-[15px] md:text-base text-slate-300 leading-relaxed">
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />{" "}
                  <span>
                    Only Indian citizens are eligible for admission to
                    professional courses unless otherwise notified.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />{" "}
                  <span>
                    Must have completed{" "}
                    <strong className="text-white">17 years of age</strong>.
                    Upper age limit for service candidates is 49 years. No upper
                    age limit for General Candidates.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />{" "}
                  <span>
                    Passed Higher Secondary or VHSE with{" "}
                    <strong className="text-white">40% marks</strong> in
                    Physics, Chemistry and Biology put together.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />{" "}
                  <span>
                    Relaxation of 5% marks will be allowed to SC/ST candidates.
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* ADMISSION PROCESS CARD */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 p-10 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="shrink-0 p-6 bg-cyan-500/10 rounded-3xl">
                <ClipboardCheck className="w-12 h-12 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-4">
                  Admission Process
                </h2>
                <p className="text-[15px] md:text-base text-slate-300 leading-relaxed">
                  Candidates are requested to visit the official website of the{" "}
                  <strong className="text-white font-bold">
                    LBS Centre for Science and Technology
                  </strong>{" "}
                  at{" "}
                  <Link
                    href="https://www.lbscentre.kerala.gov.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
                  >
                    www.lbscentre.kerala.gov.in
                  </Link>{" "}
                  regularly for official notifications, paramedical
                  announcements, and application procedures.
                </p>
              </div>
            </motion.div>
          </div>

          {/* ================= ACTIONS & CONTACT BENTO ================= */}
          <motion.section
            variants={itemVariants}
            className="mt-12 grid lg:grid-cols-2 gap-6 relative z-10"
          >
            {/* DOCUMENTS & FEES */}
            <div className="p-10 md:p-14 rounded-[2.5rem] bg-gradient-to-br from-cyan-900/50 to-indigo-950/50 border border-cyan-500/20 flex flex-col justify-center shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-4">
                Documents & Financials
              </h3>
              <p className="mb-10 text-[15px] md:text-lg text-slate-300 leading-relaxed">
                Access the official fee ledger for the Dental Operating Room
                Assistance program and download the complete paramedical
                prospectus for detailed academic policies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/admissions/fee-structure"
                  className="group flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-bold uppercase tracking-wider text-sm hover:bg-cyan-400 transition-colors shadow-xl"
                >
                  <FileText className="w-5 h-5" /> View Fee Ledger
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link
                  href="/admissions/paramedical-prospectus.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-8 py-5 rounded-2xl font-bold uppercase tracking-wider text-sm hover:bg-cyan-500 hover:text-white transition-colors"
                >
                  <Download className="w-5 h-5" /> Paramedical Prospectus
                </Link>
              </div>
            </div>

            {/* INSTITUTIONAL REGISTRY */}
            <div className="p-10 md:p-14 rounded-[2.5rem] bg-white/[0.02] border border-white/10 space-y-8 backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight">
                Institutional Registry
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <MapPin className="text-cyan-400 shrink-0 mt-1 w-6 h-6" />
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Campus Location
                    </p>
                    <span className="text-[15px] text-slate-200 font-medium">
                      MAR BASELIOS DENTAL COLLEGE, KOTHAMANGALAM, KERALA
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <Phone className="text-cyan-400 shrink-0 mt-1 w-6 h-6" />
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Official Helplines
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-[15px] text-slate-200 font-medium">
                      <a
                        href="tel:048502817500"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        04850 2817500
                      </a>
                      <span className="text-slate-600 hidden sm:inline">|</span>
                      <a
                        href="tel:+918078236301"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        +91 8078236301
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <Mail className="text-cyan-400 shrink-0 mt-1 w-6 h-6" />
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                      Email Endpoints
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-[15px] text-slate-200 font-medium">
                      <a
                        href="mailto:mbdc2002@gmail.com"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        mbdc2002@gmail.com
                      </a>
                      <span className="text-slate-600 hidden sm:inline">|</span>
                      <a
                        href="mailto:reach@mbdc.edu.in"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        reach@mbdc.edu.in
                      </a>
                    </div>
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
