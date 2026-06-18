"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  Gavel,
  ShieldAlert,
  Search,
  BookOpen,
  ClipboardCheck,
  Scale,
  Users,
} from "lucide-react";

// --- EXTRACTED DATA ---
const objectives = [
  {
    title: "Exemplary Actions",
    desc: "To initiate exemplary actions against students involved in disciplinary infractions.",
    icon: Gavel,
  },
  {
    title: "Thorough Investigations",
    desc: "To conduct thorough investigations into reports of disciplinary misconduct among students.",
    icon: Search,
  },
  {
    title: "Conducive Atmosphere",
    desc: "To ensure a calm and conducive academic atmosphere in the college campus.",
    icon: BookOpen,
  },
  {
    title: "Prevent Confrontations",
    desc: "To proactively prevent physical confrontations among students.",
    icon: ShieldAlert,
  },
  {
    title: "Maintain Compliance",
    desc: "To maintain the activities of college joint venture in regards to disciplinary act.",
    icon: ClipboardCheck,
  },
];

const committeeMembers = [
  { id: 1, name: "Dr. Byju Paul Kurian" },
  { id: 2, name: "Dr. Sankar Vinod" },
  { id: 3, name: "Dr. P.M. Mani" },
  { id: 4, name: "Dr. Anu Vijayan" },
  { id: 5, name: "Mrs. Serin Kurian" },
];

export default function DisciplinaryCommitteePage() {
  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-amber-500/30 selection:text-amber-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Authority Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Scale className="w-4 h-4" />
              Order & Integrity
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                Disciplinary{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Committee
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl">
              Ensuring compliance with the Code of Discipline and Conduct. We
              strive to maintain a calm, structured, and conducive academic
              atmosphere across the college campus.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-24">
            {/* =============================================================== */}
            {/* OVERVIEW BOX                                                    */}
            {/* =============================================================== */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-950/40 to-[#050b1a] border border-amber-500/20 p-8 md:p-12 shadow-[0_20px_50px_rgba(245,158,11,0.1)] flex flex-col md:flex-row items-center gap-8 backdrop-blur-xl group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              <div className="w-20 h-20 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(245,158,11,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Gavel className="w-10 h-10 text-amber-400" />
              </div>
              <div className="flex-grow space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-bold tracking-[0.2em] uppercase">
                  Overview
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  Empowered to Take Action
                </h3>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg max-w-4xl">
                  The Disciplinary Committee will ensure compliance of the Code
                  of Discipline and Conduct for students and will suggest
                  suitable action in case of its violation. In case of matters
                  concerning events on the campus, the Disciplinary Committee is
                  empowered to take definitive decisions.
                </p>
              </div>
            </div>

            {/* =============================================================== */}
            {/* OBJECTIVES GRID                                                 */}
            {/* =============================================================== */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Committee Objectives
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {objectives.map((obj, idx) => {
                  const Icon = obj.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-amber-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg hover:-translate-y-2 flex flex-col gap-4"
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:text-amber-300 transition-all duration-500 shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                          {obj.title}
                        </h3>
                      </div>
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
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-black tracking-widest uppercase mb-4">
                  <Users className="w-4 h-4" />
                  Official Panel
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Committee Members
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-5xl">
                {committeeMembers.map((member) => (
                  <div
                    key={member.id}
                    className="flex flex-col items-center justify-center p-8 rounded-3xl bg-slate-900/50 backdrop-blur-md border border-white/5 hover:border-amber-500/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-[0_10px_30px_rgba(245,158,11,0.15)] text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-500">
                      <Users className="w-6 h-6 text-slate-400 group-hover:text-amber-400 transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">
                      {member.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </PageBackground>
    </main>
  );
}
