"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  FileText,
  ArrowRight,
  BookOpen,
  GraduationCap,
  ClipboardCheck,
  Info,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MDSPage() {
  return (
    <main className="bg-[#02040a] text-white selection:bg-cyan-500/30">
      <Navbar />
      <PageBackground>
        {/* DYNAMIC HERO */}
        <section className="relative pt-40 pb-20 px-6 lg:px-20 max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="mb-6 text-[10px] uppercase tracking-[0.3em] text-cyan-400 font-mono">
              Postgraduate Academic Portal
            </p>
            <h1 className="text-6xl lg:text-[8rem] font-black tracking-tighter leading-[0.9] uppercase mb-12">
              Master of{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
                Dental Surgery
              </span>
            </h1>
          </motion.div>
        </section>

        {/* DYNAMIC BENTO GRID LAYOUT */}
        <section className="py-10 px-6 lg:px-20 max-w-[1500px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Overview Card */}
          <div className="lg:col-span-2 p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-cyan-500/50 transition-all">
            <Info className="w-10 h-10 text-cyan-400 mb-6" />
            <h2 className="text-3xl font-black uppercase mb-4">
              Program Overview
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg">
              The MDS program is for those BDS candidates who want to augment
              their dental education and pursue advanced training in different
              dental specialties[cite: 3]. The MDS program is for three academic
              years. Our institution is recognized by the Dental Council of
              India and affiliated with the Kerala University of Health Science,
              Thrissur[cite: 3].
            </p>
          </div>

          {/* Eligibility Card */}
          <div className="p-10 rounded-[2.5rem] bg-gradient-to-b from-cyan-950/40 to-transparent border border-white/10">
            <GraduationCap className="w-10 h-10 text-cyan-400 mb-6" />
            <h2 className="text-2xl font-black uppercase mb-4">Eligibility</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Must possess a recognised degree of Bachelor in Dental Surgery
              awarded by a university or institute in India[cite: 3]. Registered
              with the State Dental Council and have undergone a one-year
              compulsory rotatory internship in an approved dental college[cite:
              3].
            </p>
          </div>

          {/* Selection Card */}
          <div className="lg:col-span-3 p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 flex flex-col md:flex-row gap-8 items-center">
            <div className="shrink-0 p-6 bg-cyan-500/10 rounded-full">
              <ClipboardCheck className="w-10 h-10 text-cyan-400" />
            </div>
            <div>
              <h2 className="text-3xl font-black uppercase mb-4">
                Selection Process
              </h2>
              <p className="text-slate-400 leading-relaxed">
                There shall be a uniform NEET for admission to the post-graduate
                dental courses in each academic year conducted by the National
                Board of Examination or any other authority appointed by the
                Central Government[cite: 3]. The overall superintendence,
                direction and control of the NEET shall vest with the
                council[cite: 3].
              </p>
            </div>
          </div>
        </section>

        {/* FEE & CONTACT BENTO */}
        <section className="py-20 px-6 lg:px-20 max-w-[1500px] mx-auto grid lg:grid-cols-2 gap-6">
          <div className="p-12 rounded-[2.5rem] bg-gradient-to-r from-cyan-600 to-indigo-700 flex flex-col justify-center">
            <h3 className="text-3xl font-black uppercase mb-4">
              Academic Fee Framework
            </h3>
            <p className="mb-8 opacity-90">
              Review the financial guidelines and fee ledger for all
              postgraduate dental programs.
            </p>
            <Link
              href="/admissions/fee-structure.pdf"
              className="w-fit flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-all"
            >
              <FileText className="w-4 h-4" /> View Fee Ledger
            </Link>
          </div>

          <div className="p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 space-y-6">
            <h3 className="text-xl font-black uppercase text-cyan-400">
              Institutional Registry
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />{" "}
                <span>MAR BASELIOS DENTAL COLLEGE, KOTHAMANGALAM</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" /> <span>0485 2817525</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />{" "}
                <span>mbdc2002@gmail.com / reach@mbdc.edu.in</span>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </PageBackground>
    </main>
  );
}
