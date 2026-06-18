"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  FileText,
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Download,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DentalHygienePage() {
  return (
    <main className="bg-[#02040a] text-white selection:bg-cyan-500/30">
      <Navbar />
      <PageBackground>
        {/* ================= DYNAMIC HERO ================= */}
        <section className="relative pt-40 pb-20 px-6 lg:px-20 max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-6 text-[10px] md:text-xs uppercase tracking-[0.3em] text-cyan-400 font-mono font-bold">
              Paramedical Portal // DH Matrix
            </p>
            <h1 className="text-6xl md:text-7xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] uppercase mb-8">
              Dental{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                Hygiene
              </span>
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed border-l-2 border-cyan-500/50 pl-6">
              Official academic guidelines, syllabus structures, and regulatory
              admission parameters for the Dental Hygienist program.
            </p>
          </motion.div>
        </section>

        {/* ================= DYNAMIC BENTO GRID ================= */}
        <section className="py-10 px-6 lg:px-20 max-w-[1500px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* COURSE DURATION CARD */}
          <div className="lg:col-span-2 p-10 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-cyan-500/10 rounded-2xl">
                <BookOpen className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                Course Duration & Syllabus
              </h2>
            </div>
            <div className="space-y-4 text-[15px] md:text-base text-slate-300 leading-relaxed">
              <p>
                Duration of the course is{" "}
                <strong className="text-white font-bold">2 years</strong>. The
                course consists of two parts:{" "}
                <strong className="text-cyan-400">Primary (1st year)</strong>{" "}
                and <strong className="text-cyan-400">Final (2nd year)</strong>.
              </p>
              <ul className="space-y-2 pl-4 border-l-2 border-white/10">
                <li>
                  <strong className="text-white">Primary:</strong> Anatomy,
                  Physiology and Histology, Pharmacology, Pathology and
                  Microbiology, Oral Pathology, Food Nutrition and Radiology.
                </li>
                <li>
                  <strong className="text-white">Final:</strong> Dental Hygiene
                  and Oral Prophylaxis, Dental Health Education,
                  Community/Public Health Dentistry, Preventive Dentistry,
                  Dental Materials, Dental Ethics & Jurisprudence, Orientation
                  in Dentistry.
                </li>
              </ul>
              <p className="pt-2">
                There will be an examination at the end of Primary and Final
                years with written, viva and practical tests. A{" "}
                <strong className="text-white font-bold border-b border-cyan-500/50">
                  minimum of 50% marks
                </strong>{" "}
                in each of the subjects is required for a pass.
              </p>
            </div>
          </div>

          {/* ELIGIBILITY CARD */}
          <div className="p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-cyan-950/30 to-transparent border border-white/10 hover:border-cyan-500/40 transition-all duration-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-cyan-500/10 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-cyan-400" />
              </div>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-white">
                Eligibility Criteria
              </h2>
            </div>
            <ul className="space-y-4 text-[15px] md:text-base text-slate-300 leading-relaxed">
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />{" "}
                <span>
                  Only Indian citizens are eligible for admission to
                  professional courses unless otherwise notified.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />{" "}
                <span>
                  Must have completed{" "}
                  <strong className="text-white">17 years of age</strong>. Upper
                  age limit for service candidates is 49 years. No upper age
                  limit for General Candidates.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />{" "}
                <span>
                  Passed Higher Secondary or VHSE with{" "}
                  <strong className="text-white">40% marks</strong> in Physics,
                  Chemistry and Biology put together.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />{" "}
                <span>
                  Relaxation of 5% marks will be allowed to SC/ST candidates.
                </span>
              </li>
            </ul>
          </div>

          {/* ADMISSION PROCESS CARD */}
          <div className="lg:col-span-3 p-10 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col md:flex-row gap-8 items-center">
            <div className="shrink-0 p-6 bg-cyan-500/10 rounded-3xl">
              <ClipboardCheck className="w-12 h-12 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white mb-4">
                Admission Process
              </h2>
              <p className="text-[15px] md:text-base text-slate-300 leading-relaxed">
                Candidates are requested to visit the official website of the{" "}
                <strong className="text-white font-bold">
                  LBS Centre for Science and Technology
                </strong>{" "}
                at{" "}
                <Link
                  href="https://www.lbscentre.kerala.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
                >
                  www.lbscentre.kerala.gov.in
                </Link>{" "}
                regularly for official notifications, paramedical announcements,
                and application procedures.
              </p>
            </div>
          </div>
        </section>

        {/* ================= ACTIONS & CONTACT BENTO ================= */}
        <section className="py-20 px-6 lg:px-20 max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-6">
          {/* DOCUMENTS & FEES */}
          <div className="p-10 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-cyan-900/50 to-indigo-950/50 border border-cyan-500/20 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-4">
              Documents & Financials
            </h3>
            <p className="mb-8 text-[15px] md:text-base text-slate-300 leading-relaxed">
              Access the official fee ledger for the Dental Hygiene program and
              download the complete paramedical prospectus for detailed academic
              policies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/admissions/fee-structure.pdf"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-white text-black px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-cyan-400 transition-colors"
              >
                <FileText className="w-5 h-5" /> Fee Structure
              </Link>
              <Link
                href="/admissions/paramedical-prospectus.pdf"
                target="_blank"
                className="flex items-center justify-center gap-3 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-cyan-500 hover:text-white transition-colors"
              >
                <Download className="w-5 h-5" /> Paramedical Prospectus
              </Link>
            </div>
          </div>

          {/* INSTITUTIONAL REGISTRY */}
          <div className="p-10 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-8">
            <h3 className="text-xl md:text-2xl font-black uppercase text-white tracking-tight">
              Institutional Registry
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <MapPin className="text-cyan-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                    Campus Location
                  </p>
                  <span className="text-[15px] text-slate-200 font-medium">
                    MAR BASELIOS DENTAL COLLEGE, KOTHAMANGALAM, KERALA
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <Phone className="text-cyan-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                    Official Contact
                  </p>
                  <span className="text-[15px] text-slate-200 font-medium">
                    0485 2817525 <span className="text-slate-600 mx-2">|</span>{" "}
                    +91 9539325167
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                <Mail className="text-cyan-400 shrink-0 mt-1" />
                <div>
                  <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-1">
                    Email Endpoints
                  </p>
                  <span className="text-[15px] text-slate-200 font-medium">
                    mbdc2002@gmail.com{" "}
                    <span className="text-slate-600 mx-2">|</span>{" "}
                    reach@mbdc.edu.in
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </PageBackground>
    </main>
  );
}
