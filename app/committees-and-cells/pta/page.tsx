"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  Users,
  HeartHandshake,
  BookOpen,
  Building,
  Target,
  GraduationCap,
  ShieldCheck,
} from "lucide-react";

// --- EXTRACTED DATA ---
const objectives = [
  {
    title: "Foster Positive Relationships",
    desc: "Fostering positive relationships among teachers, students, staff, and parents/guardians.",
    icon: HeartHandshake,
  },
  {
    title: "High Academic Standards",
    desc: "Ensuring high academic standards and facilitating smooth college operations.",
    icon: BookOpen,
  },
  {
    title: "Infrastructure Enhancement",
    desc: "Enhancing infrastructural facilities within the college for a better learning environment.",
    icon: Building,
  },
  {
    title: "Monitor Development",
    desc: "Monitoring student performance and their overall developmental activities.",
    icon: Target,
  },
  {
    title: "Shared Commitment",
    desc: "Cultivating a shared commitment to maintaining discipline and academic excellence.",
    icon: ShieldCheck,
  },
];

// Extracted from image_36da23.png
const ptaMembers = [
  // Core Members
  { id: 1, name: "Dr. Byju Paul Kurian (Principal)", role: "President" },
  { id: 2, name: "Mr. Thankachan M J", role: "Vice President" },
  { id: 3, name: "Dr. Pramod Philip Mathews", role: "Secretary" },
  { id: 4, name: "Dr. Anu Vijayan", role: "Joint Secretary" },
  { id: 5, name: "Dr. Jayan Jacob Mathew", role: "IQAC Coordinator" },

  // Ex-officio members
  { category: "Ex-officio members" },
  { id: 6, name: "Adv. C I Baby", role: "Secretary MBMM Association" },
  { id: 7, name: "Mr. Shaji P P", role: "Administrator in Charge" },

  // Faculty Representatives
  { category: "Faculty Representatives" },
  { id: 8, name: "Dr. Manju Korath", role: "Faculty in charge of I BDS" },
  { id: 9, name: "Dr. Vidya K C", role: "Faculty in charge of II BDS" },
  {
    id: 10,
    name: "Dr. Soma Susan Varghese",
    role: "Faculty in charge of III BDS",
  },
  {
    id: 11,
    name: "Dr. Anu Vijayan",
    role: "Faculty in charge of final BDS part A",
  },
  {
    id: 12,
    name: "Dr. Ektah Khosla",
    role: "Faculty in charge of final BDS part B",
  },

  // Chief Warden
  { category: "Chief Warden" },
  { id: 13, name: "Dr. Joy P Das", role: "Boys Hostel" },
  { id: 14, name: "Dr. Ektah Khosla", role: "Girls Hostel" },

  // Parent Representatives
  { category: "Parent Representatives" },
  { id: 15, name: "Mr. Thankachan MJ", role: "First Year Representatives" },
  { id: 16, name: "Mrs. Saji Jayaraj", role: "First Year Representatives" },
  { id: 17, name: "Mr. Manoj M S", role: "Second Year Representatives" },
  { id: 18, name: "Mrs. Rani Anto", role: "Second Year Representatives" },
  { id: 19, name: "Mr. Anil Varghese", role: "Third Year Representatives" },
  { id: 20, name: "Mrs. Sobha Saji", role: "Third Year Representatives" },
  { id: 21, name: "Mr. James E X", role: "Final year Part A Representative" },
  { id: 22, name: "Mrs. Shaijy Joy", role: "Final year Part A Representative" },
  {
    id: 23,
    name: "Mr. Susanthan E G",
    role: "Final year Part B Representative",
  },
  {
    id: 24,
    name: "Mrs. Surya Jayan",
    role: "Final year Part B Representative",
  },
];

export default function PtaPage() {
  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-cyan-500/30 selection:text-cyan-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Community Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <Users className="w-4 h-4" />
              Collaboration & Support
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                Parent-Teacher{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Association
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl">
              Playing a pivotal role in enhancing college operations and
              supporting the holistic development of our students through shared
              commitment.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-24">
            {/* =============================================================== */}
            {/* OVERVIEW SECTION                                                */}
            {/* =============================================================== */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-950/40 to-[#050b1a] border border-cyan-500/20 p-8 md:p-12 shadow-[0_20px_50px_rgba(6,182,212,0.1)] flex flex-col md:flex-row items-center gap-8 md:gap-12 backdrop-blur-xl group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="w-10 h-10 md:w-12 md:h-12 text-cyan-400" />
              </div>

              <div className="flex-grow space-y-6 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-cyan-300 text-xs font-bold tracking-[0.2em] uppercase">
                  Overview
                </div>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  Our dental college is supported by an active Parent-Teacher
                  Association (PTA), which plays a pivotal role in enhancing the
                  college’s operations. Comprising executive committee members,
                  with the principal serving as the ex officio president and a
                  faculty member as the secretary, the PTA also elects a parent
                  as its vice president.
                </p>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  This committee is instrumental in supporting the holistic
                  development of our students, providing financial and
                  logistical assistance across curricular, co-curricular, and
                  extracurricular activities. At the onset of each academic
                  year, the PTA convenes its first general body meeting to elect
                  executive committee members and outline its agenda.
                  Additionally, year-specific PTA meetings are held periodically
                  to address student progress and related academic affairs.
                </p>
              </div>
            </div>

            {/* =============================================================== */}
            {/* OBJECTIVES GRID                                                 */}
            {/* =============================================================== */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Our Objectives
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {objectives.map((obj, idx) => {
                  const Icon = obj.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg hover:-translate-y-2 flex flex-col gap-4"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-500 shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
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
            {/* PTA EXECUTIVE COMMITTEE TABLE                                   */}
            {/* =============================================================== */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-black tracking-widest uppercase mb-4">
                  <Users className="w-4 h-4" />
                  Leadership
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  PTA Executive Committee
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 mx-auto mb-4"></div>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  This is to inform that the PTA executive committee of our
                  college for the years 2023-2024 is as follows:
                </p>
              </div>

              <div className="w-full max-w-5xl rounded-[2rem] border border-white/10 bg-[#050b1a]/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] text-cyan-400">
                        <th className="px-8 py-5 font-bold w-20 text-center">
                          Sl. No
                        </th>
                        <th className="px-8 py-5 font-bold">Name</th>
                        <th className="px-8 py-5 font-bold">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm md:text-base">
                      {ptaMembers.map((member, idx) => {
                        // Render Category Header Row
                        if (member.category) {
                          return (
                            <tr key={`cat-${idx}`} className="bg-white/[0.04]">
                              <td
                                colSpan={3}
                                className="px-8 py-4 text-center font-bold text-indigo-300 tracking-widest uppercase text-xs md:text-sm shadow-inner"
                              >
                                {member.category}
                              </td>
                            </tr>
                          );
                        }

                        // Render Standard Row
                        return (
                          <tr
                            key={`member-${member.id}`}
                            className="hover:bg-white/[0.03] transition-colors group"
                          >
                            <td className="px-8 py-4 text-center text-slate-500 font-bold">
                              {member.id}
                            </td>
                            <td className="px-8 py-4 text-white font-medium group-hover:text-cyan-300 transition-colors">
                              {member.name}
                            </td>
                            <td className="px-8 py-4 text-slate-400">
                              {member.role}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </PageBackground>
    </main>
  );
}
