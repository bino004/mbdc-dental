"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  Sparkles,
  Stethoscope,
  Activity,
  MessageSquare,
  Scale,
  BrainCircuit,
  Users2,
  GraduationCap,
  Microscope,
  Globe,
  HeartHandshake,
} from "lucide-react";

// --- Framer Motion Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

// --- Graduate Attributes Dataset ---
const graduateAttributes = [
  {
    title: "Clinical Proficiency",
    desc: "Acquire proficiency in performing various dental procedures, including examinations, diagnoses, and treatments, and develop competence in using dental instruments and technology.",
    icon: Stethoscope,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "hover:border-cyan-500/30",
  },
  {
    title: "Medical & Systems Understanding",
    desc: "Acquire an understanding of the interactions (pharmacological, physical, nutritional, behavioral, and psychological) and management of important oral and medically related conditions.",
    icon: Activity,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "hover:border-indigo-500/30",
  },
  {
    title: "Communication & Patient Education",
    desc: "Effectively communicate with the patient, manage patient records, including medical history, treatment plans, and follow-up care, and also provide patient education on oral health and preventive measures.",
    icon: MessageSquare,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-500/30",
  },
  {
    title: "Ethics & Social Responsibility",
    desc: "Understanding of the roles and responsibilities of the dentist in society, adhering to ethical and legal principles and professional standards especially focusing on underprivileged communities.",
    icon: Scale,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "hover:border-rose-400/30",
  },
  {
    title: "Adaptive Clinical Reasoning",
    desc: "Ability to adapt to changing situations and solve clinical challenges by analysing and evaluating information for effective decision-making.",
    icon: BrainCircuit,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "hover:border-emerald-500/30",
  },
  {
    title: "Interprofessional Collaboration",
    desc: "To work effectively within a multi-disciplinary team and collaborate with other healthcare professionals for comprehensive patient care.",
    icon: Users2,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "hover:border-purple-500/30",
  },
  {
    title: "Lifelong Curative Learning",
    desc: "Self-centric learning for the advancement of knowledge and maintenance of competence in the current scenario maintaining intellectual curiosity throughout life.",
    icon: GraduationCap,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "hover:border-amber-500/30",
  },
  {
    title: "Scientific Research Focus",
    desc: "Design, encourage, and conduct scientific research for advancements in the field of oral health care.",
    icon: Microscope,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "hover:border-sky-500/30",
  },
  {
    title: "Cultural Competency",
    desc: "Develop cultural competency by respecting and understanding patients’ diverse cultural backgrounds and adapting communication and treatment approaches for cultural sensitivity.",
    icon: Globe,
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    border: "hover:border-fuchsia-500/30",
  },
  {
    title: "Patient-Centered Professionalism",
    desc: "Develop professionalism by upholding empathy, and respect for patients’ rights and confidentiality and have a patient-centred care approach.",
    icon: HeartHandshake,
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "hover:border-teal-500/30",
  },
];

export default function GraduateAttributesPage() {
  return (
    <main className="overflow-x-hidden bg-[#02040a] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-white pb-32">
      <Navbar />

      <PageBackground>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative mx-auto max-w-[1700px] px-6 pt-52 pb-32 md:px-12 xl:px-20"
        >
          {/* BACKGROUND GLOW MATRIX */}
          <div className="absolute top-[15%] left-[10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />
          <div className="absolute top-[50%] right-[5%] w-[700px] h-[700px] bg-indigo-600/5 rounded-full blur-[200px] pointer-events-none mix-blend-screen" />

          {/* HERO HEADER SECTION */}
          <header className="relative z-10 border-b border-white/10 pb-16 mb-16 text-center md:text-left flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
            <div className="w-full md:w-auto">
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="font-mono text-xs tracking-[0.3em] text-cyan-300 uppercase font-bold">
                  Institutional Framework // Objectives
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-[7.5rem] font-black uppercase text-white tracking-tighter leading-[0.85]"
              >
                Graduate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                  Attributes
                </span>
              </motion.h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed md:border-l-2 border-cyan-500/50 md:pl-8 backdrop-blur-sm max-w-xl text-center md:text-left"
            >
              The core competency parameters defining the training endpoints,
              professional standards, and ethical blueprints for dental
              graduates at Mar Baselios Dental College.
            </motion.p>
          </header>

          {/* BENTO-GRID MATRIX */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {graduateAttributes.map((attr, idx) => {
              const Icon = attr.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className={`group relative rounded-[2.5rem] border border-white/10 bg-white/[0.01] backdrop-blur-xl p-8 lg:p-10 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-xl hover:shadow-black/50 cursor-pointer ${attr.border}`}
                >
                  {/* Subtle Inner Glow on Card Hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Icon Container with Adaptive Branding Colors */}
                    <div
                      className={`p-4 rounded-2xl mb-8 w-fit border border-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 ${attr.bg}`}
                    >
                      <Icon className={`w-8 h-8 ${attr.color}`} />
                    </div>

                    {/* Attribute Heading */}
                    <h3 className="text-2xl font-black text-white tracking-tight mb-4 transition-colors duration-300 group-hover:text-cyan-300">
                      {attr.title}
                    </h3>

                    {/* Attribute Descriptive Text */}
                    <p className="text-slate-400 leading-relaxed font-medium text-[15px] group-hover:text-slate-200 transition-colors duration-400">
                      {attr.desc}
                    </p>
                  </div>

                  {/* Horizontal Border Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </PageBackground>
      <Footer />
    </main>
  );
}
