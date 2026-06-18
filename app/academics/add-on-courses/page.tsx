"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  BookPlus,
  Calendar,
  ExternalLink,
  FileText,
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

// Available Academic Years
const academicYears = [
  "2018-19",
  "2019-20",
  "2020-21",
  "2021-22",
  "2022-23",
  "2023-24",
  "2024-25",
  "2025-26",
  "2026-27",
];

// Dynamic Course Generator based on selected year
const getCoursesForYear = (yearStr: string) => {
  const baseYear = yearStr.split("-")[0]; // Extracts the starting year (e.g., "2018" from "2018-19")

  return [
    { slNo: 1, name: "Health Research Methodology and Biostatistics" },
    { slNo: 2, name: `Stoma National Workshop ${baseYear}` },
    { slNo: 3, name: "Certificate course on applied Anatomy" },
    { slNo: 4, name: "Emergency care in dentistry" },
    { slNo: 5, name: "Magnification in Dental Trinity" },
    { slNo: 6, name: "Asepsis in dentistry" },
    { slNo: 7, name: "Laboratory investigations in Dental Practice" },
    { slNo: 8, name: "CBCT-Grey and white Shadows of the future dentistry" },
  ];
};

export default function AddOnCoursesPage() {
  const [activeYear, setActiveYear] = useState(academicYears[0]);
  const currentCourses = getCoursesForYear(activeYear);

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
          <header className="relative z-10 border-b border-white/10 pb-20 mb-16 text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] text-cyan-400/80 uppercase font-bold">
                Academic Portal // Value Additions
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-[7rem] font-black uppercase text-white tracking-tighter leading-[0.9]"
                >
                  Add-On <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                    Courses
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-4">
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                >
                  Enhance your core dental education with specialized,
                  skill-oriented certificate courses and workshops offered
                  across different academic years.
                </motion.p>
              </div>
            </div>
          </header>

          {/* INTERACTIVE YEAR SELECTOR */}
          <motion.div variants={itemVariants} className="relative z-10 mb-8">
            <div className="flex items-center gap-3 mb-4 px-2">
              <Calendar className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-300">
                Select Academic Year
              </h3>
            </div>

            <div
              className="flex overflow-x-auto pb-4 gap-3 snap-x no-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {academicYears.map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`shrink-0 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 snap-start ${
                    activeYear === year
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      : "bg-white/[0.03] border border-white/10 text-slate-400 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </motion.div>

          {/* DYNAMIC COURSE TABLE AREA */}
          <motion.section variants={itemVariants} className="relative z-10">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden min-h-[500px]">
              {/* TABLE HEADER */}
              <div className="p-8 md:p-10 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 bg-gradient-to-r from-white/[0.02] to-transparent">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-indigo-500/10 rounded-2xl shrink-0">
                    <BookPlus className="w-8 h-8 text-indigo-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
                      Course Overview
                    </h2>
                    <p className="text-cyan-400 font-mono tracking-widest text-sm mt-1">
                      Academic Year: {activeYear}
                    </p>
                  </div>
                </div>
              </div>

              {/* TABLE BODY (ANIMATED ON YEAR CHANGE) */}
              <div className="overflow-x-auto p-6 md:p-10">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr>
                      <th className="pb-6 px-4 text-sm font-bold uppercase tracking-widest text-slate-400 border-b border-white/10 w-24 text-center">
                        SI.No
                      </th>
                      <th className="pb-6 px-4 text-sm font-bold uppercase tracking-widest text-slate-400 border-b border-white/10">
                        Add On Courses
                      </th>
                      <th className="pb-6 px-4 text-sm font-bold uppercase tracking-widest text-slate-400 border-b border-white/10 w-32 text-center">
                        Link
                      </th>
                    </tr>
                  </thead>

                  {/* AnimatePresence allows smooth transitions when changing years */}
                  <AnimatePresence mode="wait">
                    <motion.tbody
                      key={activeYear}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="divide-y divide-white/5"
                    >
                      {currentCourses.map((course) => (
                        <tr
                          key={course.slNo}
                          className="group hover:bg-white/[0.02] transition-colors"
                        >
                          <td className="py-6 px-4 text-center">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/[0.05] text-slate-300 font-mono text-sm border border-white/10 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors">
                              {course.slNo}
                            </span>
                          </td>

                          <td className="py-6 px-4">
                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-100 transition-colors">
                              {course.name}
                            </h3>
                          </td>

                          <td className="py-6 px-4 text-center">
                            <Link
                              href={`/academics/addon-courses/${activeYear}/course-${course.slNo}.pdf`}
                              target="_blank"
                              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold uppercase tracking-wider text-xs hover:bg-cyan-500 hover:text-black hover:border-cyan-500 transition-all shadow-lg"
                            >
                              <FileText className="w-4 h-4" />
                              View
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </motion.tbody>
                  </AnimatePresence>
                </table>
              </div>
            </div>
          </motion.section>
        </motion.div>
        <Footer />
      </PageBackground>
    </main>
  );
}
