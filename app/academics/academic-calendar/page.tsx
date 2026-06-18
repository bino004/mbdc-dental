"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  CalendarDays,
  Download,
  Flag,
  Music,
  Heart,
  Dna,
  Building2,
  Syringe,
  Mic,
  MapPin,
  Clock,
  Info,
  Calendar as CalendarIcon,
  BookOpen,
  Trophy,
} from "lucide-react";

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const panelVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

// --- Available Years ---
const availableYears = [2024, 2025, 2026];

// --- Academic Events Data (Mapped to Year, Month(0-11), Day) ---
const eventsData = [
  // --- 2026 EVENTS ---
  {
    dateKey: "2026-0-26", // Jan 26
    dateDisplay: "January 26, 2026",
    title: "77th Republic Day Celebrations",
    description:
      "Official institutional flag hoisting and college-wide patriotic celebrations.",
    category: "Holiday / Event",
    time: "08:30 AM",
    venue: "Main Campus Courtyard",
    icon: Flag,
    color: "text-orange-400",
    bg: "bg-orange-500/20",
    border: "border-orange-500/50",
    glow: "shadow-[0_0_15px_rgba(249,115,22,0.4)]",
  },
  {
    dateKey: "2026-0-30", // Jan 30
    dateDisplay: "January 30, 2026",
    title: "Tharang 2026",
    description:
      "Annual College Day celebration featuring chief guest and playback singer Sreya Jayadeep.",
    category: "Celebration",
    time: "05:00 PM Onwards",
    venue: "College Auditorium",
    icon: Music,
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/20",
    border: "border-fuchsia-500/50",
    glow: "shadow-[0_0_15px_rgba(232,121,249,0.4)]",
  },
  {
    dateKey: "2026-1-4", // Feb 4
    dateDisplay: "February 4, 2026",
    title: "World Cancer Day",
    description:
      "Professional awareness event operating under the theme 'United by Unique'.",
    category: "Awareness",
    time: "10:00 AM",
    venue: "Synergy Hall",
    icon: Heart,
    color: "text-rose-400",
    bg: "bg-rose-500/20",
    border: "border-rose-500/50",
    glow: "shadow-[0_0_15px_rgba(244,63,94,0.4)]",
  },
  {
    dateKey: "2026-1-17", // Feb 17
    dateDisplay: "February 17, 2026",
    title: "Scientia 2026 Workshop (Day 1)",
    description:
      "Illuminating the Genome: Advances in Molecular Biology and Microscopic Insights.",
    category: "Workshop",
    time: "09:00 AM - 04:00 PM",
    venue: "Molecular Biology Lab",
    icon: Dna,
    color: "text-blue-400",
    bg: "bg-blue-500/20",
    border: "border-blue-500/50",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.4)]",
  },
  {
    dateKey: "2026-1-18", // Feb 18
    dateDisplay: "February 18, 2026",
    title: "Scientia 2026 Workshop (Day 2)",
    description:
      "Hands-on microscopic evaluation and advanced molecular diagnostic techniques.",
    category: "Workshop",
    time: "09:00 AM - 04:00 PM",
    venue: "Molecular Biology Lab",
    icon: Dna,
    color: "text-blue-400",
    bg: "bg-blue-500/20",
    border: "border-blue-500/50",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.4)]",
  },
  {
    dateKey: "2026-2-10", // Mar 10
    dateDisplay: "March 10, 2026",
    title: "KUHS Approval Announcement",
    description:
      "Official inauguration of the new Research Centres for PhD programs in Conservative Dentistry & Periodontics.",
    category: "Academic Milestone",
    time: "11:00 AM",
    venue: "Administrative Block",
    icon: Building2,
    color: "text-indigo-400",
    bg: "bg-indigo-500/20",
    border: "border-indigo-500/50",
    glow: "shadow-[0_0_15px_rgba(99,102,241,0.4)]",
  },
  {
    dateKey: "2026-2-26", // Mar 26
    dateDisplay: "March 26, 2026",
    title: "Free HPV Vaccination Drive",
    description:
      "Health and wellness drive for students. Pre-registration required.",
    category: "Health & Wellness",
    time: "10:00 AM - 02:00 PM",
    venue: "Campus Medical Center",
    icon: Syringe,
    color: "text-emerald-400",
    bg: "bg-emerald-500/20",
    border: "border-emerald-500/50",
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.4)]",
  },
  {
    dateKey: "2026-3-1", // Apr 1
    dateDisplay: "April 1, 2026",
    title: "Healthy Aging Seminar",
    description: "Guest Speaker: Dr. Sam Paul discusses oral health longevity.",
    category: "Seminar",
    time: "02:00 PM",
    venue: "Synergy Hall",
    icon: Mic,
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
    border: "border-cyan-500/50",
    glow: "shadow-[0_0_15px_rgba(6,182,212,0.4)]",
  },

  // --- 2025 EVENTS (Sample Data) ---
  {
    dateKey: "2025-0-26", // Jan 26
    dateDisplay: "January 26, 2025",
    title: "76th Republic Day Celebrations",
    description: "Annual institutional flag hoisting.",
    category: "Holiday / Event",
    time: "08:30 AM",
    venue: "Main Campus Courtyard",
    icon: Flag,
    color: "text-orange-400",
    bg: "bg-orange-500/20",
    border: "border-orange-500/50",
    glow: "shadow-[0_0_15px_rgba(249,115,22,0.4)]",
  },
  {
    dateKey: "2025-4-15", // May 15
    dateDisplay: "May 15, 2025",
    title: "Dental Research Symposium",
    description:
      "Annual gathering of dental researchers presenting clinical findings.",
    category: "Academic Milestone",
    time: "10:00 AM - 03:00 PM",
    venue: "Synergy Hall",
    icon: BookOpen,
    color: "text-indigo-400",
    bg: "bg-indigo-500/20",
    border: "border-indigo-500/50",
    glow: "shadow-[0_0_15px_rgba(99,102,241,0.4)]",
  },

  // --- 2024 EVENTS (Sample Data) ---
  {
    dateKey: "2024-8-5", // Sep 5
    dateDisplay: "September 5, 2024",
    title: "Teachers' Day Felicitation",
    description:
      "Honoring the esteemed faculty of Mar Baselios Dental College.",
    category: "Celebration",
    time: "03:00 PM",
    venue: "College Auditorium",
    icon: Trophy,
    color: "text-amber-400",
    bg: "bg-amber-500/20",
    border: "border-amber-500/50",
    glow: "shadow-[0_0_15px_rgba(251,191,36,0.4)]",
  },
  {
    dateKey: "2024-10-14", // Nov 14
    dateDisplay: "November 14, 2024",
    title: "Pediatric Dentistry Camp",
    description: "Free dental checkup camp for school children.",
    category: "Health & Wellness",
    time: "09:00 AM - 01:00 PM",
    venue: "Pedodontics Department",
    icon: Heart,
    color: "text-rose-400",
    bg: "bg-rose-500/20",
    border: "border-rose-500/50",
    glow: "shadow-[0_0_15px_rgba(244,63,94,0.4)]",
  },
];

// Generate Calendar Structure for a specific Year
const generateYearData = (year: number) => {
  return Array.from({ length: 12 }, (_, monthIndex) => {
    const date = new Date(year, monthIndex, 1);
    return {
      monthIndex,
      name: date.toLocaleString("default", { month: "long" }),
      firstDay: date.getDay(), // 0 (Sun) to 6 (Sat)
      daysInMonth: new Date(year, monthIndex + 1, 0).getDate(),
    };
  });
};

export default function FullYearCalendarPage() {
  const [activeYear, setActiveYear] = useState<number>(2026);
  const [selectedDateKey, setSelectedDateKey] = useState<string | null>(
    "2026-0-26",
  ); // Default selection

  const yearData = generateYearData(activeYear);

  const getEventForDate = (year: number, month: number, day: number) => {
    return eventsData.find((e) => e.dateKey === `${year}-${month}-${day}`);
  };

  const selectedEvent = eventsData.find((e) => e.dateKey === selectedDateKey);

  // Handle year toggle
  const handleYearChange = (year: number) => {
    setActiveYear(year);
    setSelectedDateKey(null); // Clear inspector when changing years to prevent confusion
  };

  return (
    <main className="overflow-x-hidden bg-[#02040a] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-white pb-32 min-h-screen flex flex-col">
      <Navbar />

      <PageBackground>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative mx-auto max-w-[1800px] px-4 md:px-8 xl:px-12 pt-44"
        >
          {/* DEEP GLOW EFFECTS */}
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none mix-blend-screen" />
          <div className="absolute top-[60%] right-[10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[250px] pointer-events-none mix-blend-screen" />

          {/* HERO SECTION */}
          <header className="relative z-10 border-b border-white/10 pb-12 mb-12 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
            <div>
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <CalendarIcon className="w-5 h-5 text-cyan-400" />
                <span className="font-mono text-xs tracking-[0.3em] text-cyan-300 uppercase font-bold">
                  Institutional Matrix
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-6xl lg:text-[6.5rem] font-black uppercase text-white tracking-tighter leading-[0.85]"
              >
                Academic <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                  Calendar
                </span>
              </motion.h1>
            </div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-start lg:items-end gap-6 max-w-lg"
            >
              <p className="text-lg text-slate-400 font-medium leading-relaxed border-l-2 lg:border-l-0 lg:border-r-2 border-cyan-500/50 pl-6 lg:pl-0 lg:pr-6 backdrop-blur-sm lg:text-right">
                Explore the complete schedule of institutional events,
                workshops, and milestones. Select a year and click any
                highlighted date to view specific details.
              </p>

              <Link
                href={`/academics/academic-calendar-${activeYear}.pdf`}
                target="_blank"
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-black uppercase tracking-widest text-sm hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)] hover:shadow-[0_0_40px_rgba(6,182,212,0.4)]"
              >
                <Download className="w-5 h-5" />
                <span>Download {activeYear} PDF</span>
              </Link>
            </motion.div>
          </header>

          {/* DASHBOARD LAYOUT */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-start">
            {/* FULL YEAR GRID & SELECTOR (LEFT) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-8 xl:col-span-9 flex flex-col gap-8"
            >
              {/* YEAR SELECTOR BAR */}
              <div className="flex items-center gap-4 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3 mr-4">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-black uppercase tracking-widest text-white">
                    Select Year
                  </h3>
                </div>

                <div className="flex overflow-x-auto gap-4 snap-x px-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {availableYears.map((year) => (
                    <button
                      key={year}
                      onClick={() => handleYearChange(year)}
                      className={`shrink-0 cursor-pointer px-10 py-3 rounded-full text-base font-black uppercase tracking-widest transition-all duration-300 snap-start hover:-translate-y-1 ${
                        activeYear === year
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_10px_30px_rgba(6,182,212,0.5)]"
                          : "bg-white/[0.03] border border-white/10 text-slate-400 hover:bg-white/[0.1] hover:text-white hover:border-cyan-500/50"
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {/* 12-MONTH MATRIX GRID */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeYear}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                >
                  {yearData.map((month) => (
                    <div
                      key={month.monthIndex}
                      className="rounded-[2rem] border border-white/5 bg-white/[0.01] backdrop-blur-xl p-6 shadow-xl hover:bg-white/[0.02] hover:border-white/10 transition-colors"
                    >
                      <h3 className="text-lg font-black uppercase tracking-widest text-white mb-6 flex items-center justify-between">
                        {month.name}
                        <span className="text-xs font-mono text-slate-500">
                          {activeYear}
                        </span>
                      </h3>

                      {/* Days of Week Header */}
                      <div className="grid grid-cols-7 mb-3">
                        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
                          <div
                            key={i}
                            className="text-center text-xs font-bold text-slate-500"
                          >
                            {d}
                          </div>
                        ))}
                      </div>

                      {/* Calendar Grid */}
                      <div className="grid grid-cols-7 gap-1.5">
                        {/* Empty cells for offset */}
                        {Array.from({ length: month.firstDay }).map((_, i) => (
                          <div
                            key={`empty-${i}`}
                            className="w-full aspect-square"
                          />
                        ))}

                        {/* Days */}
                        {Array.from({ length: month.daysInMonth }).map(
                          (_, i) => {
                            const day = i + 1;
                            const dateKey = `${activeYear}-${month.monthIndex}-${day}`;
                            const event = getEventForDate(
                              activeYear,
                              month.monthIndex,
                              day,
                            );
                            const isSelected = selectedDateKey === dateKey;

                            return (
                              <div
                                key={day}
                                onClick={() => {
                                  if (event) setSelectedDateKey(dateKey);
                                }}
                                className={`
                                relative w-full aspect-square flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300
                                ${event ? `cursor-pointer font-bold ${event.bg} ${event.color} ${event.border} border ${event.glow} hover:scale-110 z-10` : "text-slate-400 hover:bg-white/5 cursor-default"}
                                ${isSelected && event ? "ring-2 ring-offset-2 ring-offset-[#02040a] ring-cyan-400 scale-110" : ""}
                              `}
                              >
                                {day}
                                {/* Dot indicator for small screens or extra pop */}
                                {event && !isSelected && (
                                  <span
                                    className={`absolute bottom-0.5 w-1 h-1 rounded-full bg-current`}
                                  />
                                )}
                              </div>
                            );
                          },
                        )}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* EVENT INSPECTOR PANEL (RIGHT) */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-4 xl:col-span-3 lg:sticky lg:top-32"
            >
              <div className="rounded-[2.5rem] border border-white/10 bg-[#050b14]/80 backdrop-blur-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden relative min-h-[400px]">
                {/* Background effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-sm font-black uppercase tracking-widest text-slate-300">
                    Event Inspector
                  </h3>
                </div>

                <AnimatePresence mode="wait">
                  {selectedEvent ? (
                    <motion.div
                      key={selectedEvent.dateKey}
                      variants={panelVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="relative z-10 flex flex-col h-full"
                    >
                      {/* Category Tag */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border w-fit mb-6 ${selectedEvent.bg} ${selectedEvent.border} ${selectedEvent.color}`}
                      >
                        <selectedEvent.icon className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {selectedEvent.category}
                        </span>
                      </div>

                      {/* Date & Title */}
                      <p className="text-cyan-400 font-mono text-sm mb-3 tracking-widest uppercase">
                        {selectedEvent.dateDisplay}
                      </p>
                      <h2 className="text-3xl font-black text-white leading-tight mb-6">
                        {selectedEvent.title}
                      </h2>

                      {/* Description */}
                      <p className="text-slate-400 leading-relaxed font-medium mb-8 text-lg border-l-2 border-white/10 pl-4">
                        {selectedEvent.description}
                      </p>

                      {/* Meta Info */}
                      <div className="mt-auto space-y-4 bg-white/[0.02] p-5 rounded-2xl border border-white/5">
                        <div className="flex items-start gap-4">
                          <Clock
                            className={`w-5 h-5 mt-0.5 ${selectedEvent.color}`}
                          />
                          <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                              Time
                            </p>
                            <p className="text-sm font-medium text-white">
                              {selectedEvent.time}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <MapPin
                            className={`w-5 h-5 mt-0.5 ${selectedEvent.color}`}
                          />
                          <div>
                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                              Venue
                            </p>
                            <p className="text-sm font-medium text-white">
                              {selectedEvent.venue}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center text-center h-64 text-slate-500"
                    >
                      <Info className="w-12 h-12 mb-4 opacity-50" />
                      <p className="text-lg font-medium">
                        Select a highlighted date
                        <br />
                        to view event details.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Quick Legend */}
              <div className="mt-6 flex flex-wrap gap-3 px-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <span className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>{" "}
                  Academic
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <span className="w-3 h-3 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/50 shadow-[0_0_10px_rgba(232,121,249,0.5)]"></span>{" "}
                  Events
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <span className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>{" "}
                  Health
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        <Footer />
      </PageBackground>
    </main>
  );
}
