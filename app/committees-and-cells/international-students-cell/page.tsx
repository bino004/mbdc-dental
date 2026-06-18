"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  Globe2,
  HeartHandshake,
  BookOpen,
  PlaneTakeoff,
  PhoneCall,
  FileText,
  FileCheck, // Replaced Passport with FileCheck
  BadgeCheck,
  Users,
} from "lucide-react";

// --- EXTRACTED DATA ---
const commitments = [
  {
    title: "Admissions Assistance",
    desc: "Comprehensive support regarding eligibility criteria, permission letters, VISA processes, and passport assistance to facilitate a seamless experience for Foreign citizens, PIO, OCI, and NRI candidates.",
    icon: PlaneTakeoff,
  },
  {
    title: "Quality of Living & Support",
    desc: "Adjusting to a new environment can be challenging. Our cell offers mental and emotional support to international students, helping them navigate the academic and cultural transition.",
    icon: HeartHandshake,
  },
  {
    title: "Academic Assistance",
    desc: "We address any academic or administrative issues that foreign students may encounter during their course of study. Our members are approachable and ready to assist with any queries.",
    icon: BookOpen,
  },
];

const admissionSteps = [
  {
    step: 1,
    title: "Contacting Admissions Committee",
    desc: "Reach out to the Admissions Committee at the Administrative wing of Mar Baselios Dental College to initiate the admission process.",
    icon: PhoneCall,
  },
  {
    step: 2,
    title: "Provisional Admission Offer Letter",
    desc: "Obtain the Provisional Admission Offer Letter from the Academic Executive Office, upon payment of a non-refundable advance amount of 30% of the total annual fee. This letter is essential for obtaining the student VISA.",
    icon: FileText,
  },
  {
    step: 3,
    title: "VISA Application",
    desc: "Submit the Provisional Admission Offer Letter to the Indian Embassy of your respective country to obtain the student VISA.",
    icon: FileCheck, // Replaced Passport with FileCheck
  },
  {
    step: 4,
    title: "Finalizing Admission",
    desc: "Once you arrive at MBDC, submit necessary documents for verification and complete medical fitness tests. Admissions are confirmed after verification of originals, medical tests, and fee payment.",
    icon: BadgeCheck,
  },
];

const cellMembers = [
  { id: 1, name: "Dr. Byju Paul Kurian", role: "Chairman" },
  { id: 2, name: "Mr. Binu Kaippillil", role: "Management Representative" },
  { id: 3, name: "Dr. Deena Elizabeth", role: "Convener" },
  { id: 4, name: "Mr. Shaji P P", role: "Office Representative" },
  { id: 5, name: "Mr. Basil C Mathew", role: "Public Relations Officer" },
  { id: 6, name: "Dr. Usha Narayan", role: "Student Counsellor" },
  { id: 7, name: "Dr. Joel Mathew", role: "Faculty Representative (female)" },
  { id: 8, name: "Dr. Arun Bosco", role: "Faculty Representative (Male)" },
];

export default function InternationalStudentCellPage() {
  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-sky-500/30 selection:text-sky-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Global Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-sky-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(14,165,233,0.2)]">
              <Globe2 className="w-4 h-4" />
              Global Community
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                International Students’{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                Cell
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl">
              Dedicated to supporting and guiding international students through
              their educational journey, ensuring a smooth transition into our
              vibrant college environment.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-24">
            {/* =============================================================== */}
            {/* OVERVIEW SECTION                                                */}
            {/* =============================================================== */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-sky-950/40 to-[#050b1a] border border-sky-500/20 p-8 md:p-12 shadow-[0_20px_50px_rgba(14,165,233,0.1)] flex flex-col md:flex-row items-center gap-8 md:gap-12 backdrop-blur-xl group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(14,165,233,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Globe2 className="w-10 h-10 md:w-12 md:h-12 text-sky-400" />
              </div>

              <div className="flex-grow space-y-6 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  Welcome to Mar Baselios Dental College!
                </h3>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  Our exclusive committee, the International Students’ Cell, is
                  dedicated to supporting and guiding international students
                  through their educational journey at Mar Baselios Dental
                  College. We understand the unique challenges and opportunities
                  that international students face and strive to ensure a smooth
                  transition into the college environment. Discover more about
                  our commitment to international students and the vibrant
                  academic community at MBDC!
                </p>
              </div>
            </div>

            {/* =============================================================== */}
            {/* OUR COMMITMENT GRID                                             */}
            {/* =============================================================== */}
            <div>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Our Commitment
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {commitments.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-sky-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg hover:-translate-y-2 flex flex-col gap-4"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:text-sky-300 transition-all duration-500 shrink-0 shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =============================================================== */}
            {/* ADMISSION PROCEDURE TIMELINE                                    */}
            {/* =============================================================== */}
            <div className="relative p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Admission Procedure
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {admissionSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={idx}
                      className="relative flex gap-6 group p-6 rounded-2xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5"
                    >
                      <div className="shrink-0 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-[#02050f] transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.2)]">
                          <span className="font-black text-lg">
                            {step.step}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-sky-400" />
                          <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* =============================================================== */}
            {/* CELL MEMBERS TABLE                                              */}
            {/* =============================================================== */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-black tracking-widest uppercase mb-4">
                  <Users className="w-4 h-4" />
                  Leadership
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Cell Members
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400 mx-auto mb-4"></div>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  The International Students’ Cell consists of the following
                  members dedicated to its smooth functioning.
                </p>
              </div>

              <div className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-[#050b1a]/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] text-sky-400">
                        <th className="px-8 py-5 font-bold w-20 text-center">
                          Sl. No
                        </th>
                        <th className="px-8 py-5 font-bold">Name</th>
                        <th className="px-8 py-5 font-bold">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm md:text-base">
                      {cellMembers.map((member) => (
                        <tr
                          key={member.id}
                          className="hover:bg-white/[0.03] transition-colors group"
                        >
                          <td className="px-8 py-5 text-center text-slate-500 font-bold">
                            {member.id}
                          </td>
                          <td className="px-8 py-5 text-white font-medium group-hover:text-sky-300 transition-colors">
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
          </div>
        </div>
        <Footer />
      </PageBackground>
    </main>
  );
}
