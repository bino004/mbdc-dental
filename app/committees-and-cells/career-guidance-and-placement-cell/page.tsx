"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  Briefcase,
  Compass,
  Award,
  Stethoscope,
  Building,
  Globe,
  BookOpen,
  Users,
  FileText,
  ArrowRight,
} from "lucide-react";

// --- EXTRACTED DATA ---
const objectives = [
  {
    title: "Value-Added Courses",
    desc: "To provide and encourage students to participate in add-on and value-added courses.",
    icon: Award,
  },
  {
    title: "Employment Support",
    desc: "Guidance and information related to employment and self-employment.",
    icon: Briefcase,
  },
  {
    title: "Skill Enhancement",
    desc: "To encourage students to sharpen their clinical skills.",
    icon: Stethoscope,
  },
  {
    title: "Practice Setup",
    desc: "To provide guidance related to the setting up of clinics.",
    icon: Building,
  },
  {
    title: "Global Opportunities",
    desc: "Providing information on foreign degrees and relevant competitive exams.",
    icon: Globe,
  },
  {
    title: "Higher Education",
    desc: "To guide students to opportunities for higher education in India and abroad.",
    icon: BookOpen,
  },
];

const committeeMembers = [
  { id: 1, name: "Dr. Byju Paul Kurian" },
  { id: 2, name: "Dr. Elsa Thenumkal" },
  { id: 3, name: "Dr. Jacob Kuruvila" },
  { id: 4, name: "Dr. Feby Kuriakose" },
  { id: 5, name: "Dr. Basil Joy" },
  { id: 6, name: "Dr. Lekshmi A J" },
  { id: 7, name: "Mrs. Raji" },
];

export default function CareerGuidancePage() {
  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-violet-500/30 selection:text-violet-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Career Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <Compass className="w-4 h-4" />
              Future & Opportunities
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-violet-400 via-indigo-500 to-purple-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                Career Guidance &{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                Placement Cell
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl">
              Empowering students to make informed career decisions, acquire
              relevant skills, and transition successfully from academia to the
              professional world.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-24">
            {/* =============================================================== */}
            {/* OVERVIEW SECTION                                                */}
            {/* =============================================================== */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-950/40 to-[#050b1a] border border-violet-500/20 p-8 md:p-12 shadow-[0_20px_50px_rgba(139,92,246,0.1)] flex flex-col md:flex-row items-center gap-8 md:gap-12 backdrop-blur-xl group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Briefcase className="w-10 h-10 md:w-12 md:h-12 text-violet-400" />
              </div>

              <div className="flex-grow space-y-6 text-center md:text-left">
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  In an age where career queries are not uncommon, it’s
                  important to answer queries related to career guidance or
                  career, in general. It can be referred to as a comprehensive,
                  developmental program designed to assist individuals in making
                  and implementing informed educational and occupational
                  choices. There are vast career options after BDS from which a
                  student can choose. Moreover, it totally depends on one’s
                  interests and priorities, making it crucial to thoroughly
                  explore every option before making future decisions.
                </p>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  The{" "}
                  <strong className="text-white">
                    Mar Baselios Career Guidance and Placement Cell
                  </strong>{" "}
                  at MBDC serves as a crucial resource for students to explore
                  career options, develop essential skills, and make informed
                  decisions. They organize workshops and training sessions to
                  enhance students’ employability skills, covering areas such as
                  resume writing, interview preparation, communication skills,
                  time management, and entrepreneurship. They facilitate
                  networking opportunities with alumni and provide regular
                  coaching classes for competitive exams, including NEET.
                </p>
              </div>
            </div>

            {/* =============================================================== */}
            {/* OBJECTIVES GRID                                                 */}
            {/* =============================================================== */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Cell Objectives
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {objectives.map((obj, idx) => {
                  const Icon = obj.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg hover:-translate-y-2 flex flex-col gap-4"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:text-violet-300 transition-all duration-500 shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.15)]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {obj.title}
                      </h3>
                      <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                        {obj.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =============================================================== */}
            {/* COMMITTEE MEMBERS SECTION                                       */}
            {/* =============================================================== */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-black tracking-widest uppercase mb-4">
                  <Users className="w-4 h-4" />
                  Leadership
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Committee Members
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {committeeMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col items-center justify-center p-6 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-white/5 hover:border-violet-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] text-center"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-violet-400/50 transition-all duration-500">
                      <Users className="w-5 h-5 text-slate-400 group-hover:text-violet-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                      {member.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* =============================================================== */}
            {/* DOWNLOAD DOCUMENTS / VIEW MORE SECTION                          */}
            {/* =============================================================== */}
            <div className="pt-10 flex flex-col items-center justify-center">
              <Link
                href="/assets/pdf/career-guidance-details.pdf" // Adjust to your actual PDF path
                target="_blank"
                className="group flex items-center justify-center gap-3 w-full sm:w-[480px] px-8 py-5 rounded-full bg-violet-500 text-[#02050f] font-black text-sm tracking-widest uppercase hover:bg-violet-400 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                View Cell Details & Policies
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ml-2" />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </PageBackground>
    </main>
  );
}
