"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  GraduationCap,
  Lightbulb,
  Stethoscope,
  Users,
  Award,
  Globe,
  Presentation,
} from "lucide-react";

// --- EXTRACTED DATA ---
const initiatives = [
  {
    title: "CDE Programs",
    desc: "DEU conducts Continuous Dental Education programs to keep dental professionals updated with the latest advancements in dentistry. These programs provide a platform for sharing knowledge, best practices, and emerging trends within the field.",
    icon: Presentation,
  },
  {
    title: "Hands-on Workshops",
    desc: "Practical, hands-on workshops focusing on specific dental procedures, technologies, or techniques enable participants to refine their clinical skills, fostering a culture of experiential learning.",
    icon: Stethoscope,
  },
  {
    title: "Faculty Development",
    desc: "DEU prioritizes the professional growth of faculty members by organizing faculty development programs. These initiatives help them refine their teaching methodologies, assessment techniques, and research capabilities.",
    icon: Award,
  },
  {
    title: "Student Enrichment",
    desc: "The DEU plays a crucial role in enhancing the educational experience of the students. It offers opportunities for students to engage in extracurricular learning, research, and skill development activities.",
    icon: GraduationCap,
  },
  {
    title: "External Engagement",
    desc: "The DEU extends its expertise beyond the college boundaries by welcoming external delegates to participate in its programs. This fosters collaboration and knowledge-sharing within the broader dental community.",
    icon: Globe,
  },
];

export default function DentalEducationUnitPage() {
  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-blue-500/30 selection:text-blue-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Education Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-sky-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Lightbulb className="w-4 h-4" />
              Academic Excellence
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-blue-400 via-sky-500 to-cyan-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                Dental Education{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">
                Unit (DEU)
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl">
              Advancing knowledge, skills, and teaching capabilities for our
              faculty, students, and the broader dental community.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-24">
            {/* =============================================================== */}
            {/* OVERVIEW BOX                                                    */}
            {/* =============================================================== */}
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-950/40 to-[#050b1a] border border-blue-500/20 p-8 md:p-12 shadow-[0_20px_50px_rgba(59,130,246,0.1)] flex flex-col md:flex-row items-center gap-8 backdrop-blur-xl group animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150">
              <div className="w-20 h-20 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                <GraduationCap className="w-10 h-10 text-blue-400" />
              </div>
              <div className="flex-grow space-y-4 text-center md:text-left">
                <div className="inline-flex items-center gap-2 text-blue-300 text-xs font-bold tracking-[0.2em] uppercase">
                  Established 2018
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-white">
                  A Pivotal Educational Initiative
                </h3>
                <p className="text-slate-300 leading-relaxed text-base md:text-lg max-w-4xl">
                  The Dental Education Unit (DEU) at Mar Baselios Dental College
                  represents a pivotal initiative for enhancing the educational
                  landscape of the institution. Dedicated to advancing the
                  knowledge, skills, and teaching capabilities of faculty,
                  students, and external delegates through a diverse range of
                  educational programs. It plays a crucial role in elevating the
                  quality of education and training for both internal
                  stakeholders and external participants in the dental
                  profession.
                </p>
              </div>
            </div>

            {/* =============================================================== */}
            {/* DEU INITIATIVES GRID                                            */}
            {/* =============================================================== */}
            <div>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-black tracking-widest uppercase mb-4">
                  <Users className="w-4 h-4" />
                  Our Core Programs
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                  DEU Initiatives
                </h2>
                <div className="w-20 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-sky-400 mx-auto"></div>
              </div>

              {/* Grid Layout: Top 2, Bottom 3 (or naturally wrapping) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                {initiatives.map((init, idx) => {
                  const Icon = init.icon;
                  // Make the first two cards slightly wider on large screens if desired,
                  // or just let them fill naturally. Using a standard responsive grid here.
                  return (
                    <div
                      key={idx}
                      className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500 shadow-lg hover:-translate-y-2 flex flex-col gap-4"
                    >
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:text-blue-300 transition-all duration-500 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {init.title}
                        </h3>
                      </div>
                      <p className="text-slate-400 font-medium leading-relaxed group-hover:text-slate-300 transition-colors text-justify">
                        {init.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </PageBackground>
    </main>
  );
}
