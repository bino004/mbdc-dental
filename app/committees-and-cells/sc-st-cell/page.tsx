"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  HeartHandshake,
  Scale,
  Landmark,
  GraduationCap,
  Megaphone,
  Library,
  AlertCircle,
  FileText,
  Sparkles,
  Shield,
  FileSignature,
  Search,
  Gavel,
  EyeOff,
  Users,
  Mail,
} from "lucide-react";

// --- EXTRACTED DATA ---
const objectives = [
  {
    title: "Promote Equal Access",
    desc: "Ensure equal opportunities for admission and participation in all academic and extracurricular activities for SC/ST students.",
    icon: Scale,
  },
  {
    title: "Financial Support",
    desc: "Facilitate access to scholarships, grants, and financial assistance programs to alleviate the economic burden on SC/ST students.",
    icon: Landmark,
  },
  {
    title: "Academic Support",
    desc: "Provide academic counseling, tutoring, and mentorship programs to enhance the educational performance and retention rates of SC/ST students.",
    icon: GraduationCap,
  },
  {
    title: "Awareness & Sensitization",
    desc: "Conduct workshops, seminars, and awareness programs to sensitize the college community about the unique challenges and concerns faced by SC/ST students.",
    icon: Megaphone,
  },
  {
    title: "Resource Center",
    desc: "Establish and maintain a resource center with relevant study materials, books, and resources to assist SC/ST students in their studies.",
    icon: Library,
  },
  {
    title: "Grievance Redressal",
    desc: "Serve as a platform for SC/ST students to address any grievances related to discrimination, harassment, or unfair treatment and ensure timely resolution.",
    icon: AlertCircle,
  },
  {
    title: "Reporting & Documentation",
    desc: "Maintain records of SC/ST student admissions, scholarships awarded, and their academic progress to track and evaluate the effectiveness of support programs.",
    icon: FileText,
  },
  {
    title: "Celebrate Diversity",
    desc: "Organize events and cultural activities that celebrate the rich cultural diversity and heritage of SC/ST communities to promote inclusivity.",
    icon: Sparkles,
  },
  {
    title: "Advocacy & Representation",
    desc: "Act as advocates for SC/ST students within the college administration and work towards policy changes that promote inclusivity and diversity within the institution.",
    icon: Shield,
  },
];

const committeeMembers = [
  { id: 1, name: "Dr. Byju Paul Kurian", role: "Principal" },
  { id: 2, name: "Mrs. Nisha S", role: "Co-ordinator" },
  { id: 3, name: "Dr. Brijesh S", role: "Faculty" },
  { id: 4, name: "Dr. Sreeparvathy S", role: "Faculty" },
  { id: 5, name: "Dr. Arun Bosco Jerald", role: "Faculty" },
  { id: 6, name: "Mr. Jenson P Eldhose", role: "Administrative Staff" },
];

const complaintSteps = [
  {
    step: 1,
    title: "Submit Complaint",
    desc: "A written complaint may be submitted to the committee. Any student or employee of the college can approach the cell in person.",
    icon: FileSignature,
  },
  {
    step: 2,
    title: "Investigation",
    desc: "The cell will thoroughly investigate the matter and give its official recommendation based on the findings.",
    icon: Search,
  },
  {
    step: 3,
    title: "Action Taken",
    desc: "Suitable and appropriate action shall be taken based on the recommendation of the committee.",
    icon: Gavel,
  },
  {
    step: 4,
    title: "Confidentiality",
    desc: "Strict confidentiality shall be maintained in all appropriate matters to protect the privacy of those involved.",
    icon: EyeOff,
  },
];

export default function ScStCellPage() {
  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-rose-500/30 selection:text-rose-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Warm Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-rose-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
              <HeartHandshake className="w-4 h-4" />
              Inclusivity & Support
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-rose-400 via-orange-500 to-red-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                SC/ST{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">
                Cell
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl">
              Dedicated to supporting the academic and social progress of
              students from Scheduled Castes (SC) and Scheduled Tribes (ST)
              backgrounds.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-24">
            {/* =============================================================== */}
            {/* OVERVIEW SECTION                                                */}
            {/* =============================================================== */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-950/40 to-[#050b1a] border border-rose-500/20 p-8 md:p-12 shadow-[0_20px_50px_rgba(244,63,94,0.1)] flex flex-col md:flex-row items-center gap-8 md:gap-12 backdrop-blur-xl group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(244,63,94,0.3)] group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-10 h-10 md:w-12 md:h-12 text-rose-400" />
              </div>

              <div className="flex-grow space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-rose-300 text-xs font-bold tracking-[0.2em] uppercase">
                  Overview
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  Fostering an Inclusive Environment
                </h3>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                  The SC/ST Cell at Mar Baselios Dental College is dedicated to
                  supporting the academic and social progress of students from
                  Scheduled Castes (SC) and Scheduled Tribes (ST) backgrounds.
                  Its functions include facilitating scholarships, mentorship,
                  counseling, and advocacy to ensure equal opportunities,
                  addressing their specific concerns, and fostering an inclusive
                  and supportive campus environment.
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
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-rose-400 to-orange-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {objectives.map((obj, idx) => {
                  const Icon = obj.icon;
                  return (
                    <div
                      key={idx}
                      className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-rose-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg hover:-translate-y-2 flex flex-col gap-4"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:text-rose-300 transition-all duration-500 shrink-0 shadow-[0_0_15px_rgba(244,63,94,0.15)]">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
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
            {/* PROCEDURE TO FILE COMPLAINT TIMELINE                            */}
            {/* =============================================================== */}
            <div className="relative p-8 md:p-12 rounded-[3rem] bg-white/[0.02] border border-white/5">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  Procedure to File a Complaint
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-rose-400 to-orange-400 mx-auto"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                {complaintSteps.map((step, idx) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={idx}
                      className="relative flex gap-6 group p-6 rounded-2xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5"
                    >
                      <div className="shrink-0 flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 group-hover:bg-rose-500 group-hover:text-[#02050f] transition-all duration-300 shadow-[0_0_15px_rgba(244,63,94,0.2)]">
                          <span className="font-black text-lg">
                            {step.step}
                          </span>
                        </div>
                      </div>
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-rose-400" />
                          <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors">
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
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-xs font-black tracking-widest uppercase mb-4">
                  <Users className="w-4 h-4" />
                  Composition
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  SC/ST Cell Committee
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-rose-400 to-orange-400 mx-auto mb-4"></div>
                <p className="text-slate-400 max-w-2xl mx-auto">
                  The Principal shall constitute the SC/ST Cell Committee for a
                  term of three years.
                </p>
              </div>

              <div className="w-full max-w-4xl rounded-[2rem] border border-white/10 bg-[#050b1a]/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[500px]">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5 text-xs uppercase tracking-[0.2em] text-rose-400">
                        <th className="px-8 py-5 font-bold w-20 text-center">
                          Sl. No
                        </th>
                        <th className="px-8 py-5 font-bold">Name</th>
                        <th className="px-8 py-5 font-bold">Designation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm md:text-base">
                      {committeeMembers.map((member) => (
                        <tr
                          key={member.id}
                          className="hover:bg-white/[0.03] transition-colors group"
                        >
                          <td className="px-8 py-5 text-center text-slate-500 font-bold">
                            {member.id}
                          </td>
                          <td className="px-8 py-5 text-white font-medium group-hover:text-rose-300 transition-colors">
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
            {/* CONTACT CALL TO ACTION                                          */}
            {/* =============================================================== */}
            <div className="flex justify-center pt-10">
              <a
                href="mailto:scstcell@mbdc.edu.in"
                className="group flex flex-col sm:flex-row items-center gap-4 px-10 py-6 rounded-[2rem] bg-gradient-to-r from-rose-950/50 to-orange-950/30 border border-rose-500/30 hover:border-rose-400 transition-all duration-300 shadow-[0_20px_50px_rgba(244,63,94,0.15)] hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-rose-500/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-rose-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-rose-200 text-sm font-bold tracking-widest uppercase mb-1">
                    Contact the Cell
                  </p>
                  <p className="text-2xl font-black text-white group-hover:text-rose-300 transition-colors">
                    scstcell@mbdc.edu.in
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Footer />
      </PageBackground>
    </main>
  );
}
