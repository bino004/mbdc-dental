"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  ShieldAlert,
  Scale,
  BookOpen,
  EyeOff,
  Heart,
  FileText,
  CheckCircle,
  Users,
  Shield,
  Mail,
} from "lucide-react";

// --- EXTRACTED DATA ---
const functionsData = [
  {
    title: "Complaint Handling",
    desc: "Receiving, investigating, and resolving complaints of sexual harassment promptly and impartially.",
    icon: Scale,
  },
  {
    title: "Awareness & Prevention",
    desc: "Organizing workshops, seminars, and awareness programs to educate the college community about the prevention of sexual harassment.",
    icon: BookOpen,
  },
  {
    title: "Policy Implementation",
    desc: "Ensuring compliance with relevant laws and college policies related to sexual harassment.",
    icon: CheckCircle,
  },
  {
    title: "Confidentiality",
    desc: "Maintaining strict confidentiality during the complaint process to protect the privacy of all parties involved.",
    icon: EyeOff,
  },
  {
    title: "Support Services",
    desc: "Offering support and guidance to survivors of harassment, ensuring their well-being and access to resources.",
    icon: Heart,
  },
  {
    title: "Documentation",
    desc: "Maintaining records of complaints and resolutions to track progress and trends.",
    icon: FileText,
  },
  {
    title: "Preventing Retaliation",
    desc: "Ensuring that no retaliation occurs against those who report harassment.",
    icon: ShieldAlert,
  },
];

const iccMembers = [
  {
    id: 1,
    name: "Dr. Beena Kumari T P",
    role: "Chairperson",
    email: "beenakumarytp@mbdc.edu.in",
  },
  {
    id: 2,
    name: "Mrs. Serin Kurien",
    role: "Secretary",
    email: "serinkurian@mbdc.edu.in",
  },
  {
    id: 3,
    name: "Dr. Jinsa P.Devassy",
    role: "Member",
    email: "Jinsapdevassy@mbdc.edu.in",
  },
  {
    id: 4,
    name: "Dr. Anju Elizabeth Thomas",
    role: "Member",
    email: "anjuelizabeth@mbdc.edu.in",
  },
  {
    id: 5,
    name: "Dr. Anu Vijayan",
    role: "Member",
    email: "anuvijayan@mbdc.edu.in",
  },
  { id: 6, name: "Mrs. Limi Kuriakose", role: "External Member", email: "-" },
  { id: 7, name: "Mr. Aravind", role: "Student Member", email: "-" },
  { id: 8, name: "Mr. Joegeo", role: "Student Member", email: "-" },
];

export default function InternalComplaintCommitteePage() {
  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-violet-500/30 selection:text-violet-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Safety Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
              <Shield className="w-4 h-4" />
              Safety & Dignity
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-violet-400 via-indigo-500 to-purple-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                Internal Complaint{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">
                Committee (ICC)
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl">
              Promoting a safe, respectful, and inclusive campus environment. We
              are dedicated to addressing grievances related to sexual
              harassment with utmost confidentiality and impartiality.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-24">
            {/* =============================================================== */}
            {/* OVERVIEW BOX                                                    */}
            {/* =============================================================== */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-violet-950/40 to-[#050b1a] border border-violet-500/20 p-8 md:p-12 shadow-[0_20px_50px_rgba(139,92,246,0.1)] flex flex-col md:flex-row items-center gap-8 backdrop-blur-xl group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              <div className="w-20 h-20 rounded-full bg-violet-500/10 border border-violet-500/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(139,92,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                <ShieldAlert className="w-10 h-10 text-violet-400" />
              </div>
              <div className="flex-grow space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-violet-300 text-xs font-bold tracking-[0.2em] uppercase">
                  Overview
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  A Crucial Role in Campus Safety
                </h3>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg max-w-4xl">
                  The Internal Complaint Committee (ICC) at Mar Baselios Dental
                  College plays a crucial role in addressing grievances related
                  to sexual harassment and promoting a safe, respectful, and
                  inclusive campus environment for all students and staff.
                </p>
              </div>
            </div>

            {/* =============================================================== */}
            {/* FUNCTIONS GRID                                                  */}
            {/* =============================================================== */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Core Functions & Duties
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {functionsData.map((func, idx) => {
                  const Icon = func.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg hover:-translate-y-2 flex flex-col gap-4"
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:text-violet-300 transition-all duration-500 shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                          {func.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                        {func.desc}
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
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-black tracking-widest uppercase mb-4">
                  <Users className="w-4 h-4" />
                  Leadership
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Committee Members
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-violet-400 to-indigo-400 mx-auto"></div>
              </div>

              <div className="w-full max-w-5xl rounded-[2rem] border border-white/10 bg-[#050b1a]/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[700px]">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] text-violet-400">
                        <th className="px-8 py-5 font-bold w-20 text-center">
                          Sl. No
                        </th>
                        <th className="px-8 py-5 font-bold">Name</th>
                        <th className="px-8 py-5 font-bold">Designation</th>
                        <th className="px-8 py-5 font-bold text-right">
                          Contact (Email)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm md:text-base">
                      {iccMembers.map((member) => (
                        <tr
                          key={member.id}
                          className="hover:bg-white/[0.03] transition-colors group"
                        >
                          <td className="px-8 py-5 text-center text-slate-500 font-bold">
                            {member.id}
                          </td>
                          <td className="px-8 py-5 text-white font-medium group-hover:text-violet-300 transition-colors">
                            {member.name}
                          </td>
                          <td className="px-8 py-5 text-slate-400 font-medium">
                            {member.role}
                          </td>
                          <td className="px-8 py-5 text-right font-mono text-indigo-300">
                            {member.email !== "-" ? (
                              <a
                                href={`mailto:${member.email}`}
                                className="hover:text-white flex items-center justify-end gap-2 transition-colors"
                              >
                                <Mail className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                                {member.email}
                              </a>
                            ) : (
                              <span className="text-slate-600">-</span>
                            )}
                          </td>
                        </tr>
                      ))}
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
