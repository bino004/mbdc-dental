"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  ShieldAlert,
  Phone,
  Mail,
  Globe,
  FileText,
  Users,
  AlertTriangle,
} from "lucide-react";

// --- EXTRACTED DATA ---
const arcData = [
  {
    id: 1,
    name: "Dr. Byju Paul Kurian",
    designation: "Principal",
    phone: "8281298740",
  },
  {
    id: 2,
    name: "Mr. Shaji P P",
    designation: "Administrator In Charge",
    phone: "9539325167",
  },
  {
    id: 3,
    name: "Dr. Pramod Philip Mathews",
    designation: "Secretary of Committee / Nodal Officer",
    phone: "9446333571",
  },
  {
    id: 4,
    name: "Mr. M J Thankachen",
    designation: "Vice President PTA",
    phone: "9446867001",
  },
  {
    id: 5,
    name: "Dr. Anu Vijayan",
    designation: "Joint Secretary PTA",
    phone: "9995526633",
  },
  {
    id: 6,
    name: "Dr. Usha Narayanan",
    designation: "Students Counsellor",
    phone: "9526844911",
  },
  {
    id: 7,
    name: "Mr. P. T. Johny",
    designation: "Local media",
    phone: "9846050075",
  },
  {
    id: 8,
    name: "Dr. Ektah Khosla",
    designation: "Chief Warden- Girl's Hostel",
    phone: "9947564657",
  },
  {
    id: 9,
    name: "Dr. Joy R. Das",
    designation: "Chief Warden- Boy's Hostel",
    phone: "7907666097",
  },
  {
    id: 10,
    name: "Dr. Joseph Sebastian C.",
    designation: "First BDS student Coordinator",
    phone: "9400606414",
  },
  {
    id: 11,
    name: "Mrs. Serin Kurian",
    designation: "PTA Member",
    phone: "9447464910",
  },
  {
    id: 12,
    name: "Adv. Johny Methippara",
    designation: "Legal Advisor",
    phone: "9447164550",
  },
  {
    id: 13,
    name: "Station House Officer",
    designation: "Kothamangalam Police Station",
    phone: "0485 2862328",
  },
  {
    id: 14,
    name: "Dr. Arun Bosco Jerald",
    designation: "Clinical Staff/NSS Cordinator",
    phone: "8714193319",
  },
  {
    id: 15,
    name: "Aravind",
    designation: "Students Union Chairman",
    phone: "9207209847",
  },
  {
    id: 16,
    name: "Fathima Sanam",
    designation: "Students Union Chair Person",
    phone: "9496267995",
  },
  {
    id: 17,
    name: "Sandra K S",
    designation: "Students Union Chair Person",
    phone: "9846108174",
  },
  {
    id: 18,
    name: "Joe Geo",
    designation: "Students Union Gen. Sec.",
    phone: "9446450845",
  },
  {
    id: 19,
    name: "M J Thankachen",
    designation: "Vice President PTA",
    phone: "9446867001",
  },
];

const arsData = [
  { id: 1, name: "Dr. Byju Paul Kurian", phone: "9447049455" },
  { id: 2, name: "Dr. Eby Aluckal", phone: "9496097570" },
  { id: 3, name: "Dr. Salil G", phone: "9446516467" },
  { id: 4, name: "Dr. Vidya KC", phone: "9447984592" },
  { id: 5, name: "Dr. Manju Korath", phone: "9446785899" },
  { id: 6, name: "Dr. Ektah Khosla", phone: "9947564657" },
  { id: 7, name: "Dr. Reeja Baby", phone: "9447820441" },
  { id: 8, name: "Dr. Anu Kuriakose", phone: "9048403604" },
  { id: 9, name: "Dr. Joy R Das", phone: "7907666097" },
  { id: 10, name: "Dr. Arun Bosco Jerald", phone: "8714193319" },
  { id: 11, name: "Dr. Sara Paul", phone: "8289836890" },
  { id: 12, name: "Dr. Jinu Elizabeth", phone: "6282421930" },
  { id: 13, name: "Dr. Pramod Philip Mathews", phone: "9446333571" },
  { id: 14, name: "Dr. Joy Mathew", phone: "9446350557" },
  { id: 15, name: "Dr. Majo Ambooken", phone: "9447268750" },
  { id: 16, name: "Dr. Sankar Vinod", phone: "9895064657" },
  { id: 17, name: "Dr. Korath Abraham", phone: "9447900416" },
];

export default function AntiRaggingPage() {
  const [activeTab, setActiveTab] = useState<"ARC" | "ARS">("ARC");

  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-rose-500/30 selection:text-rose-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Warning Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-rose-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO & WARNING SECTION                                          */}
          {/* =============================================================== */}
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="text-center flex flex-col items-center mb-12">
              <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(244,63,94,0.15)]">
                <ShieldAlert className="w-4 h-4" />
                Zero Tolerance Policy
              </div>

              <h1 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter mb-6 relative">
                <span className="relative z-10 text-white drop-shadow-md">
                  Anti-Ragging{" "}
                </span>
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">
                  Cell
                </span>
              </h1>
            </div>

            {/* CRIMINAL OFFENCE WARNING BANNER */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-950/80 to-red-900/40 border border-rose-500/30 p-8 md:p-10 shadow-[0_20px_50px_rgba(225,29,72,0.15)] flex flex-col md:flex-row items-center gap-6 text-center md:text-left mb-16 backdrop-blur-xl group">
              <div className="w-16 h-16 rounded-full bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(244,63,94,0.4)] group-hover:scale-110 transition-transform duration-500">
                <AlertTriangle className="w-8 h-8 text-rose-400" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl md:text-2xl font-black text-white mb-2 tracking-wide">
                  RAGGING IS A CRIMINAL OFFENCE
                </h3>
                <p className="text-rose-200/80 font-medium text-sm md:text-base leading-relaxed mb-4">
                  The culprits will attract punitive action as mentioned in the
                  UGC Regulations. Mar Baselios Dental College maintains a
                  strict zero-tolerance policy towards any form of ragging.
                </p>
                <Link
                  href="/assets/pdf/Annexure-I.pdf" // Update with your actual internal PDF path
                  target="_blank"
                  className="inline-flex items-center gap-2 text-rose-300 hover:text-white text-sm font-bold tracking-widest uppercase transition-colors duration-300"
                >
                  <FileText className="w-4 h-4" />
                  Read UGC Regulations
                </Link>
              </div>
            </div>

            {/* NATIONAL HELPLINE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
              {/* National Helpline */}
              <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 backdrop-blur-md hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-500 shadow-xl flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-2">
                  National Ragging Prevention Programme
                </h4>
                <h3 className="text-2xl font-black text-white mb-6">
                  Anti-Ragging Helpline
                </h3>

                <div className="space-y-3 w-full">
                  <div className="flex items-center justify-center gap-3 text-cyan-300 font-bold text-lg bg-cyan-500/10 py-3 rounded-xl border border-cyan-500/20">
                    <Phone className="w-4 h-4" />
                    1800-180-5522 (24×7 Toll Free)
                  </div>
                  <a
                    href="mailto:helpline@antiragging.in"
                    className="flex items-center justify-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors py-2"
                  >
                    <Mail className="w-4 h-4" /> helpline@antiragging.in
                  </a>
                  <a
                    href="https://www.antiragging.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-slate-300 hover:text-cyan-300 transition-colors py-2"
                  >
                    <Globe className="w-4 h-4" /> www.antiragging.in
                  </a>
                </div>
              </div>

              {/* UGC Monitoring */}
              <div className="rounded-3xl bg-white/[0.03] border border-white/10 p-8 backdrop-blur-md hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-500 shadow-xl flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-6">
                  <ShieldAlert className="w-6 h-6 text-indigo-400" />
                </div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-2">
                  UGC Monitoring Agency
                </h4>
                <h3 className="text-2xl font-black text-white mb-6">
                  Centre for Youth (C4Y)
                </h3>

                <div className="space-y-3 w-full mt-auto">
                  <a
                    href="mailto:antiragging@c4yindia.org"
                    className="flex items-center justify-center gap-3 text-indigo-300 font-bold text-base bg-indigo-500/10 py-3 rounded-xl border border-indigo-500/20 hover:bg-indigo-500/20 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> antiragging@c4yindia.org
                  </a>
                  <a
                    href="https://www.c4yindia.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-slate-300 hover:text-indigo-300 transition-colors py-2"
                  >
                    <Globe className="w-4 h-4" /> www.c4yindia.org
                  </a>
                  <a
                    href="https://www.ugc.ac.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-slate-300 hover:text-indigo-300 transition-colors py-2"
                  >
                    <Globe className="w-4 h-4" /> www.ugc.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* =============================================================== */}
            {/* INTERACTIVE TABS & TABLES                                       */}
            {/* =============================================================== */}
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                Nodal Officers Contact Details (2023-2024)
              </h2>
              <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                Select a tab below to view the official members and contact
                numbers of the institutional committee and squad.
              </p>
            </div>

            {/* Tab Controls */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab("ARC")}
                className={`relative px-8 py-4 rounded-2xl font-bold tracking-widest text-sm uppercase transition-all duration-300 overflow-hidden ${
                  activeTab === "ARC"
                    ? "text-[#02050f] shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {activeTab === "ARC" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 z-0"></div>
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Users className="w-4 h-4" /> Anti-Ragging Committee (ARC)
                </span>
              </button>

              <button
                onClick={() => setActiveTab("ARS")}
                className={`relative px-8 py-4 rounded-2xl font-bold tracking-widest text-sm uppercase transition-all duration-300 overflow-hidden ${
                  activeTab === "ARS"
                    ? "text-[#02050f] shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                    : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
                }`}
              >
                {activeTab === "ARS" && (
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-red-500 z-0"></div>
                )}
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <ShieldAlert className="w-4 h-4" /> Anti-Ragging Squad (ARS)
                </span>
              </button>
            </div>

            {/* Glassmorphism Table Container */}
            <div className="rounded-[2rem] border border-white/10 bg-[#050b1a]/60 backdrop-blur-2xl shadow-2xl overflow-hidden animate-in fade-in duration-500">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  {/* Table Header */}
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] text-slate-400">
                      <th className="px-8 py-6 font-bold w-20 text-center">
                        Sl. No
                      </th>
                      <th className="px-8 py-6 font-bold">Name</th>
                      {activeTab === "ARC" && (
                        <th className="px-8 py-6 font-bold">Designation</th>
                      )}
                      <th className="px-8 py-6 font-bold text-right">
                        Phone Number
                      </th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="text-sm md:text-base font-medium text-slate-200 divide-y divide-white/5">
                    {/* Render ARC Data */}
                    {activeTab === "ARC" &&
                      arcData.map((row) => (
                        <tr
                          key={`arc-${row.id}`}
                          className="hover:bg-white/[0.03] transition-colors group"
                        >
                          <td className="px-8 py-5 text-center text-slate-500 font-bold">
                            {row.id}
                          </td>
                          <td className="px-8 py-5 text-white group-hover:text-cyan-300 transition-colors">
                            {row.name}
                          </td>
                          <td className="px-8 py-5 text-slate-400">
                            {row.designation}
                          </td>
                          <td className="px-8 py-5 text-right font-mono tracking-wider text-cyan-200">
                            {row.phone}
                          </td>
                        </tr>
                      ))}

                    {/* Render ARS Data */}
                    {activeTab === "ARS" &&
                      arsData.map((row) => (
                        <tr
                          key={`ars-${row.id}`}
                          className="hover:bg-white/[0.03] transition-colors group"
                        >
                          <td className="px-8 py-5 text-center text-slate-500 font-bold">
                            {row.id}
                          </td>
                          <td className="px-8 py-5 text-white group-hover:text-rose-300 transition-colors">
                            {row.name}
                          </td>
                          <td className="px-8 py-5 text-right font-mono tracking-wider text-rose-200">
                            {row.phone}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </PageBackground>
    </main>
  );
}
