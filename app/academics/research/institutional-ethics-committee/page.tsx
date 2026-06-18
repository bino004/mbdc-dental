"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  FileText,
  Users,
  Award,
  Download,
  BookOpen,
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

// Committee Members Data extracted from the provided document
const committeeMembers = [
  {
    slNo: 1,
    name: "Dr. Subramaniam R",
    qualification: "BDS (Public Health Dentistry)",
    organization: "Indira Gandhi Institute of Dental Sciences",
    role: "Chair Person",
    affiliation: "No",
  },
  {
    slNo: 2,
    name: "Dr. Jacob Kuruvilla",
    qualification: "BDS (Public Health Dentistry)",
    organization: "Mar Baselios Dental College",
    role: "Member Secretary",
    affiliation: "Yes",
  },
  {
    slNo: 3,
    name: "Dr. Mani P M",
    qualification: "MBBS (MD- Pharmacology)",
    organization: "Mar Baselios Dental College",
    role: "Basic Medical Scientist",
    affiliation: "Yes",
  },
  {
    slNo: 4,
    name: "Dr. Marykutty Chacko",
    qualification: "MBBS (MD-Pathology)",
    organization: "Mar Baselios Dental College",
    role: "Clinician - Alt Member Secretary (Dual Role)",
    affiliation: "Yes",
  },
  {
    slNo: 5,
    name: "Dr. Lissy Jose",
    qualification: "BSW (Social Work)",
    organization: "Mar Baselios Dental College",
    role: "Social Scientist",
    affiliation: "No",
  },
  {
    slNo: 6,
    name: "Dr. Hari Govind",
    qualification: "LLB (Graduate)",
    organization: "Lumineuz Dental Care",
    role: "Legal Expert",
    affiliation: "No",
  },
  {
    slNo: 7,
    name: "Mr. Suneesh Kuruvilla",
    qualification: "Other (Public health)",
    organization: "Indira Gandhi Institute Of Dental Sciences",
    role: "Lay Person",
    affiliation: "No",
  },
  {
    slNo: 8,
    name: "Dr. Pramod Philip Mathews",
    qualification: "BDS (Oral Pathology)",
    organization: "Mar Baselios Dental College",
    role: "Scientific Member - Alt Member Secretary (Dual Role)",
    affiliation: "Yes",
  },
];

export default function InstitutionalEthicsCommitteePage() {
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
          <header className="relative z-10 border-b border-white/10 pb-20 mb-20 text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.25em] text-cyan-400/80 uppercase font-bold">
                Committees & Cells // IEC-MBDC
              </span>
            </motion.div>

            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8">
                <motion.h1
                  variants={itemVariants}
                  className="text-5xl md:text-6xl lg:text-[6.5rem] font-black uppercase text-white tracking-tighter leading-[0.9]"
                >
                  Institutional <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                    Ethics Committee
                  </span>
                </motion.h1>
              </div>
              <div className="lg:col-span-4">
                <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-slate-400 font-normal leading-relaxed border-l-2 border-cyan-500/50 pl-6"
                >
                  Upholding the highest ethical standards in biomedical and
                  health research involving human participants[cite: 13].
                </motion.p>
              </div>
            </div>
          </header>

          {/* BENTO GRID: POLICY & APPROVAL OVERVIEW */}
          <div className="relative z-10 grid gap-6 md:grid-cols-2 mb-12">
            {/* APPROVAL CARD */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-cyan-500/30"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-cyan-500/10 rounded-2xl">
                  <Award className="w-8 h-8 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-black uppercase text-white tracking-tight">
                  Institutional Research Policy
                </h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                Institutional Ethics Committee MBDC (Mar Baselios Dental
                College), Mar Baselios Dental College (IEC-MBDC) is{" "}
                <strong className="text-white">
                  provisionally approved by DHR
                </strong>{" "}
                vide certificate number dated, 10 January 2024[cite: 13].
              </p>
            </motion.div>

            {/* CONSTITUTION CARD */}
            <motion.div
              variants={itemVariants}
              className="rounded-[2.5rem] border border-indigo-500/20 bg-gradient-to-b from-indigo-950/30 to-transparent p-10 md:p-12 backdrop-blur-md shadow-2xl transition-colors hover:border-indigo-500/40"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-indigo-500/10 rounded-2xl">
                  <ShieldCheck className="w-8 h-8 text-indigo-400" />
                </div>
                <h2 className="text-2xl font-black uppercase text-white tracking-tight">
                  Committee Constitution
                </h2>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                IEC-MBDC has a multi-disciplinary and independent institutional
                Ethics members which was constituted as per the guidelines laid
                down by{" "}
                <strong className="text-white">
                  national ethical guidelines for biomedical and health research
                  involving human participants
                </strong>{" "}
                laid down by ICMR in 2017[cite: 13].
              </p>
            </motion.div>
          </div>

          {/* ACTION / OFFICIAL DOCUMENTS DOWNLOAD SECTION */}
          <motion.section
            variants={itemVariants}
            className="relative z-10 mb-12"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 p-10 flex flex-col xl:flex-row items-center justify-between gap-8 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="p-5 bg-white/5 rounded-full border border-white/10 shrink-0">
                  <BookOpen className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
                    Official Documents
                  </h3>
                  <p className="text-slate-400">
                    Access the institutional research policy and the provisional
                    DHR approval certificate.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto shrink-0">
                <Link
                  href="/academics/research-policy.pdf"
                  target="_blank"
                  className="group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-white text-black font-bold uppercase tracking-wider shadow-xl hover:bg-cyan-400 transition-colors w-full sm:w-auto"
                >
                  <Download className="w-5 h-5" />
                  <span>View Research Policy</span>
                </Link>

                <Link
                  href="/academics/certificate.pdf"
                  target="_blank"
                  className="group flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-cyan-500 text-black font-bold uppercase tracking-wider shadow-xl hover:bg-cyan-400 transition-colors w-full sm:w-auto"
                >
                  <Award className="w-5 h-5" />
                  <span>Certificate</span>
                </Link>
              </div>
            </div>
          </motion.section>

          {/* COMMITTEE MEMBERS TABLE */}
          <motion.section variants={itemVariants} className="relative z-10">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl overflow-hidden">
              <div className="p-10 border-b border-white/10 flex items-center gap-4">
                <div className="p-4 bg-purple-500/10 rounded-2xl">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black uppercase text-white tracking-tight">
                    IEC-MBDC Members
                  </h2>
                  <p className="text-slate-400 mt-1">
                    Official multidisciplinary composition of the Ethics
                    Committee[cite: 13].
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1000px]">
                  <thead>
                    <tr className="bg-white/[0.03]">
                      <th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 w-20 text-center">
                        Sl.No
                      </th>
                      <th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10">
                        Name
                      </th>
                      <th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10">
                        Qualification & Specialization
                      </th>
                      <th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10">
                        Current Organization
                      </th>
                      <th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10">
                        Role in Committee
                      </th>
                      <th className="p-6 text-sm font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 text-center">
                        Institution Affiliation
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {committeeMembers.map((member, index) => (
                      <tr
                        key={index}
                        className="hover:bg-white/[0.02] transition-colors"
                      >
                        <td className="p-6 text-slate-300 text-center font-mono">
                          {member.slNo}[cite: 13]
                        </td>
                        <td className="p-6 font-bold text-white whitespace-nowrap">
                          {member.name}[cite: 13]
                        </td>
                        <td className="p-6 text-slate-300">
                          {member.qualification}[cite: 13]
                        </td>
                        <td className="p-6 text-slate-300">
                          {member.organization}[cite: 13]
                        </td>
                        <td className="p-6 text-slate-300 font-medium">
                          {member.role}[cite: 13]
                        </td>
                        <td className="p-6 text-center">
                          <span
                            className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                              member.affiliation === "Yes"
                                ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                                : "bg-slate-500/20 text-slate-300 border border-slate-500/30"
                            }`}
                          >
                            {member.affiliation}[cite: 13]
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
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
