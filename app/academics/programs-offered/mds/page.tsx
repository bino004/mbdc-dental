"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  Clock,
  BookOpen,
  Stethoscope,
  Users,
  Download,
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

const mdsDepartments = [
  { name: "Orthodontics and Dentofacial Orthopedics", seats: 3 },
  { name: "Oral Medicine and Radiology", seats: 3 },
  { name: "Conservative Dentistry and Endodontics", seats: 3 },
  { name: "Prosthodontics and Crown & Bridge and Oral Implantology", seats: 2 },
  { name: "Oral & Maxillofacial Surgery", seats: 2 },
  { name: "Periodontology", seats: 3 },
  { name: "Pedodontics and Preventive Dentistry", seats: 3 },
];

export default function MDSProgramPage() {
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

          {/* HERO */}
          <header className="relative z-10 border-b border-white/10 pb-20 mb-20 text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] text-cyan-400/80 uppercase font-bold">
                Academic Portal // MDS Matrix
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-[7.5rem] font-black uppercase text-white tracking-tighter leading-[0.9]"
            >
              Master of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                Dental Surgery
              </span>
            </motion.h1>
          </header>

          {/* BENTO GRID */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-12 backdrop-blur-md shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl font-black uppercase text-white tracking-tight">
                  Program Overview
                </h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed">
                The MDS program is offered to those BDS candidates who want to
                augment their dental education and pursue advanced training in
                different dental specialties. The MDS program is for three
                academic years. Our institution is recognized by the Dental
                Council of India and affiliated with the Kerala University of
                Health Science, Thrissur.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-indigo-950/40 to-transparent p-12 backdrop-blur-md shadow-2xl"
            >
              <Clock className="w-8 h-8 text-indigo-400 mb-6" />
              <h2 className="text-2xl font-black uppercase text-white mb-4">
                Duration
              </h2>
              <div className="text-5xl font-black text-white">
                3{" "}
                <span className="text-xl text-slate-400 font-medium">
                  Years
                </span>
              </div>
              <p className="mt-4 text-slate-300">
                Dedicated academic years for advanced specialty training.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="lg:col-span-3 rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-12 backdrop-blur-md shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-12">
                <div className="p-4 bg-blue-500/10 rounded-2xl">
                  <Stethoscope className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-3xl font-black uppercase text-white">
                  Departments & Available Seats
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mdsDepartments.map((dept, index) => (
                  <div
                    key={index}
                    className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 flex flex-col justify-between hover:border-cyan-500/30 transition-colors"
                  >
                    <h3 className="text-lg font-bold text-white mb-6">
                      {dept.name}
                    </h3>
                    <div className="flex items-center gap-2 text-cyan-400 font-bold bg-cyan-500/10 px-4 py-2 rounded-full w-fit text-sm">
                      <Users className="w-4 h-4" />
                      {dept.seats} Seats Available
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* SYLLABUS DOWNLOAD */}
          <motion.section variants={itemVariants} className="mt-12">
            <div className="p-12 rounded-[2.5rem] bg-gradient-to-br from-cyan-900/50 to-indigo-950/50 border border-cyan-500/20 inline-block">
              <h3 className="text-2xl font-black uppercase text-white mb-6">
                Academic Resources
              </h3>
              <Link
                href="/academics/mds-syllabus.pdf"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded-2xl font-bold uppercase tracking-wider text-sm hover:bg-cyan-400 transition-colors shadow-xl w-fit"
              >
                <Download className="w-5 h-5" /> Download MDS Syllabus
              </Link>
            </div>
          </motion.section>
        </motion.div>
        <Footer />
      </PageBackground>
    </main>
  );
}
