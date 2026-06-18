"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  Scale,
  ShieldCheck,
  HeartHandshake,
  UserCheck,
  MessageSquareWarning,
  FileSignature,
  ArrowRight,
} from "lucide-react";

// --- EXTRACTED DATA ---
const objectives = [
  {
    icon: HeartHandshake,
    text: "To uphold dignity of the college by ensuring stress-free atmosphere in the college by promoting.",
  },
  {
    icon: MessageSquareWarning,
    text: "Encourage the students to express their grievances problems freely without any fear of being victimized.",
  },
  {
    icon: UserCheck,
    text: "Advising students of the college to respect the right and dignity of one another.",
  },
  {
    icon: ShieldCheck,
    text: "Advising all the students to refrain from inciting students against other students, teachers and college administration.",
  },
  {
    icon: Scale,
    text: "Advising all staff to behave in a manner which is not vindictive to the student.",
  },
];

const committeeMembers = [
  { name: "Dr. Joy Mathew", role: "Chairman" },
  { name: "Mrs. Sreenidhi Antharjanam", role: "Secretary" },
  { name: "Mr. Aravind Shaji", role: "College Union Chairman" },
  { name: "Mr. Joegeo", role: "College Union Secretary" },
  { name: "Ms. Anjali Susan", role: "University Union Counsellor" },
  { name: "Mrs. Bindhu", role: "Hostel Wardens / Deputy Wardens" },
  { name: "Dr. Jimmy George", role: "SSGP Nodal Officer" },
  { name: "Mr. Thankachan M J", role: "PTA Representative" },
];

const guidelines = [
  "Any concern/grievance regarding college/class/hostel/food and students can be submitted before the committee with evidence.",
  "This committee should address the complaint/concern and necessary rectifications and recommendations should be made so that the student is provided with a healthy and conductive academic environment.",
  "The principal of the college must ensure that necessary action has been taken and the rectifications/actions must be conveyed to the complainant.",
  "Complaints with evidence can be submitted in person/via e-mail, by post or can be dropped in the complaint box placed in college/hospital.",
  "The committee should hold regular meetings at monthly intervals to discuss the complaints and to address the complaints in the complaint box.",
  "Complaints which cannot be resolved by the GRCS should be taken up by the Institutional council.",
  "Anonymous complaints must be addressed with utmost concern.",
];

export default function GrievanceRedressalPage() {
  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-teal-500/30 selection:text-teal-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Trust Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-teal-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-teal-500/30 bg-teal-500/10 text-teal-300 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(20,184,166,0.2)]">
              <Scale className="w-4 h-4" />
              Justice & Equality
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-teal-400 via-emerald-500 to-cyan-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                Grievance Redressal{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Committee
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl">
              Ensuring a stress-free, supportive, and fair academic environment.
              We are here to listen, address, and resolve student concerns with
              utmost confidentiality and care.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-24">
            {/* =============================================================== */}
            {/* INTRODUCTION BOX                                                */}
            {/* =============================================================== */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-950/40 to-[#050b1a] border border-teal-500/20 p-8 md:p-12 shadow-[0_20px_50px_rgba(20,184,166,0.1)] flex flex-col md:flex-row items-center gap-8 backdrop-blur-xl group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              <div className="w-20 h-20 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(20,184,166,0.3)] group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-10 h-10 text-teal-400" />
              </div>
              <div className="flex-grow space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-teal-300 text-xs font-bold tracking-[0.2em] uppercase">
                  Formation & Purpose
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  Established Academic Year 2021-2022
                </h3>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg max-w-4xl">
                  Formed as per the directives of KUHS (e-mail dated
                  26.04.2021), the Grievance Redressal Committee aims to look
                  into the grievances and concerns lodged by any student and
                  redress it timely as and when they arise.
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
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {objectives.map((obj, idx) => {
                  const Icon = obj.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg hover:-translate-y-2 flex flex-col gap-4"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:scale-110 group-hover:text-teal-300 transition-all duration-500">
                        <Icon className="w-6 h-6" />
                      </div>
                      <p className="text-slate-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                        {obj.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =============================================================== */}
            {/* COMMITTEE MEMBERS TABLE                                         */}
            {/* =============================================================== */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Committee Members (GRCS)
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400 mx-auto mb-4"></div>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  The Grievance Redressal Committee for Students comprises the
                  following official members.
                </p>
              </div>

              <div className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-[#050b1a]/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] text-teal-400">
                        <th className="px-8 py-5 font-bold">Name</th>
                        <th className="px-8 py-5 font-bold">
                          Designation / Role
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm md:text-base">
                      {committeeMembers.map((member, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-white/[0.03] transition-colors group"
                        >
                          <td className="px-8 py-5 text-white font-medium group-hover:text-teal-300 transition-colors">
                            {member.name}
                          </td>
                          <td className="px-8 py-5 text-slate-400">
                            {member.role}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* =============================================================== */}
            {/* GUIDELINES & PROCESS                                            */}
            {/* =============================================================== */}
            <div className="relative p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                    Guidelines & Process
                  </h2>
                  <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-teal-400 to-emerald-400"></div>
                </div>
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-300 font-mono text-sm tracking-widest shadow-inner">
                  <FileSignature className="w-4 h-4 text-teal-400" />
                  CNo.12764/2020/A1/DSA/KAS
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {guidelines.map((rule, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="shrink-0 mt-1">
                      <div className="w-8 h-8 rounded-full bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-[#02050f] transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                        {idx + 1}
                      </div>
                    </div>
                    <p className="text-slate-300 leading-relaxed group-hover:text-white transition-colors">
                      {rule}
                    </p>
                  </div>
                ))}
              </div>

              {/* =============================================================== */}
              {/* SUBMIT GRIEVANCE ONLINE FORM CTA                                */}
              {/* =============================================================== */}
              <div className="mt-16 p-8 md:p-10 rounded-[2rem] bg-gradient-to-r from-teal-950/40 to-emerald-950/20 border border-teal-500/30 flex flex-col items-center justify-center gap-6 text-center shadow-[0_20px_50px_rgba(20,184,166,0.1)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-teal-500/5 group-hover:bg-teal-500/10 transition-colors duration-500 pointer-events-none"></div>

                <h3 className="text-2xl md:text-3xl font-black text-white tracking-wide relative z-10">
                  Need to file a grievance?
                </h3>
                <p className="text-slate-300 text-sm md:text-base max-w-xl relative z-10">
                  We encourage students to express their problems freely. You
                  can easily submit your concerns or complaints securely through
                  our online submission form.
                </p>

                {/* Change href to your actual form route */}
                <Link
                  href="/submit-grievance"
                  className="relative z-10 mt-2 flex items-center gap-3 px-8 py-4 rounded-full bg-teal-500 text-[#02050f] font-black text-sm tracking-widest uppercase hover:bg-teal-400 transition-all duration-300 shadow-[0_0_20px_rgba(20,184,166,0.4)] cursor-pointer hover:scale-105"
                >
                  Submit Grievance Form
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </PageBackground>
    </main>
  );
}
