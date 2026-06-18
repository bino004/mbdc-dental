"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Compass,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

// Framer Motion Variants
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

export default function FeeStructurePage() {
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
          <header className="relative z-10 border-b border-white/10 pb-20 mb-16 text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] text-cyan-400/80 uppercase font-bold">
                Admissions // Financials
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-7xl lg:text-[7.5rem] font-black tracking-tighter uppercase text-white leading-[0.9]"
                >
                  Transparent <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">
                    Fee Structure
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-5">
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                >
                  Clear and transparent tuition information for undergraduate,
                  postgraduate, and paramedical programs.
                </motion.p>
              </div>
            </div>
          </header>

          {/* ================= INTERNAL PAGE NAVIGATION ================= */}
          <motion.section
            variants={itemVariants}
            className="relative z-10 mb-20"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/admissions/bds"
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition-all hover:border-cyan-500/40 hover:bg-white/[0.04] flex items-center justify-between"
              >
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">
                    BDS Matrix
                  </h3>
                  <p className="text-sm text-cyan-400 font-mono tracking-widest uppercase">
                    Undergraduate
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </Link>

              <Link
                href="/admissions/mds"
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition-all hover:border-blue-500/40 hover:bg-white/[0.04] flex items-center justify-between"
              >
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">
                    MDS Matrix
                  </h3>
                  <p className="text-sm text-blue-400 font-mono tracking-widest uppercase">
                    Postgraduate
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-black transition-colors">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </Link>

              <Link
                href="/admissions/paramedical-courses"
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 backdrop-blur-md transition-all hover:border-indigo-500/40 hover:bg-white/[0.04] flex items-center justify-between"
              >
                <div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-1">
                    Paramedical
                  </h3>
                  <p className="text-sm text-indigo-400 font-mono tracking-widest uppercase">
                    Diploma Courses
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </Link>
            </div>
          </motion.section>

          {/* ================= CAMPUS REGISTRY ================= */}
          <motion.section
            variants={itemVariants}
            className="relative z-10 border-t border-white/10 pt-20 mb-10"
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
                  Official institutional contact hub for all financial,
                  academic, and admission-related inquiries.
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
                      04850 2817500
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
      </PageBackground>

      <Footer />
    </main>
  );
}
