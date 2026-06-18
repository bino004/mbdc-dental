"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

// TypeScript Interface for IQAC Members
interface IQACMember {
  id: number;
  name: string;
  designation: string;
  iqacRole: string;
}

export default function IQACPage() {
  // Master Level View State
  const [activeMainView, setActiveMainView] = useState<"OVERVIEW" | "MEMBERS">(
    "OVERVIEW",
  );

  // Operational Framework Sub-State (Only active inside OVERVIEW)
  const [activeFramework, setActiveFramework] = useState<"ROLES" | "FUNCTIONS">(
    "ROLES",
  );

  // IQAC Data
  const missionPoints = [
    "To establish and maintain high standards in dental education through continuous curriculum assessment, faculty development, and innovative teaching methodologies.",
    "To cultivate an environment that encourages and supports cutting-edge research in dental sciences by providing necessary resources, training, and collaborative opportunities.",
    "To promote the highest standards of patient care by integrating ethical values, best practices, and state-of-the-art technology through regular quality assessments and feedback mechanisms.",
  ];

  const goalPoints = [
    "Establishment of a quality framework that encourages deliberate, coherent, and transformative initiatives to enhance the academic and administrative efficacy of the college.",
    "Cultivation of strategies to facilitate institutional operations that prioritize quality enhancement, achieved through the infusion of global quality culture and the institutionalization of best practices.",
  ];

  const rolePoints = [
    "Ensure the prompt and efficient monitoring of Quality Enhancement (QE) activities across different departments within the College.",
    "Facilitate the incorporation and seamless integration of contemporary approaches to teaching and learning.",
    "Enhance the credibility of the assessment and evaluation processes.",
    "Guarantee the sufficiency, upkeep, and appropriate distribution of the support structure and services.",
    "Foster the dissemination of research discoveries and establish connections with other institutions both nationally and internationally.",
  ];

  const functionPoints = [
    "Formulate and oversee the application of quality benchmarks and parameters for diverse academic and administrative undertakings within the college.",
    "Foster the establishment of a learner-centered atmosphere conducive to high-quality education and support faculty growth in embracing essential knowledge and technology for participatory teaching and learning approaches.",
    "Facilitate the collection of feedback from students, parents, industry/employers, and other stakeholders concerning quality-oriented institutional processes.",
    "Disseminate information about various quality indicators related to teaching, research, and education.",
    "Coordinate the organization of workshops, seminars centered on quality-related themes, and promote the cultivation of quality circles.",
    "Document the array of programs and activities undertaken by the Higher Education Institution (HEI) that contribute to quality enhancement.",
    "Serve as the central coordinating entity within the college for all endeavors linked to quality, encompassing the adoption and dissemination of commendable practices.",
    "Develop and maintain an institutional database to facilitate effective quality management.",
    "Foster the development of a pervasive culture of quality within the college.",
    "Prepare the Annual Quality Assurance Report (AQAR) of the college, following the quality parameters and assessment criteria outlined by the pertinent quality assurance body, as per the prescribed format post-accreditation.",
  ];

  // Placeholder IQAC Members Data
  const iqacMembers: IQACMember[] = [
    {
      id: 1,
      name: "Dr. Principal Name",
      designation: "Principal",
      iqacRole: "Chairperson",
    },
    {
      id: 2,
      name: "Dr. Senior Professor",
      designation: "HOD, Orthodontics",
      iqacRole: "IQAC Coordinator",
    },
    {
      id: 3,
      name: "Dr. Faculty Member One",
      designation: "Professor",
      iqacRole: "Member",
    },
    {
      id: 4,
      name: "Dr. Faculty Member Two",
      designation: "Reader",
      iqacRole: "Member",
    },
    {
      id: 5,
      name: "Mr. Admin Officer",
      designation: "Administrative Officer",
      iqacRole: "Administrative Representative",
    },
    {
      id: 6,
      name: "Dr. Alumni Name",
      designation: "Alumni Association",
      iqacRole: "Alumni Representative",
    },
    {
      id: 7,
      name: "Mr. Industry Expert",
      designation: "External Expert",
      iqacRole: "Industry Nominee",
    },
    {
      id: 8,
      name: "Student Name",
      designation: "Student Council",
      iqacRole: "Student Representative",
    },
  ];

  const getInitials = (name: string) => {
    let cleanName = name
      .replace("Dr. ", "")
      .replace("Mr. ", "")
      .replace("Ms. ", "");
    const parts = cleanName.split(" ");
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return cleanName.substring(0, 2).toUpperCase();
  };

  // Function to stylize leadership roles distinctly for extreme readability
  const getMemberStyle = (role: string) => {
    if (role.includes("Chairperson")) {
      return {
        card: "bg-amber-500/5 border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/10 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]",
        badge:
          "bg-amber-500/20 text-amber-400 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.3)]",
        avatar:
          "from-amber-900 to-[#040d1a] border-amber-500/50 text-amber-300",
        name: "group-hover:text-amber-300",
      };
    }
    if (role.includes("Coordinator")) {
      return {
        card: "bg-blue-500/5 border-blue-500/30 hover:border-blue-500/60 hover:bg-blue-500/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
        badge:
          "bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.3)]",
        avatar: "from-blue-900 to-[#040d1a] border-blue-500/50 text-blue-300",
        name: "group-hover:text-blue-300",
      };
    }
    return {
      card: "bg-white/[0.02] border-white/10 hover:border-emerald-500/40 hover:bg-white/[0.04] hover:shadow-[0_10px_30px_rgba(16,185,129,0.1)]",
      badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
      avatar:
        "from-emerald-900/50 to-[#040d1a] border-white/10 text-emerald-300",
      name: "group-hover:text-emerald-300",
    };
  };

  return (
    <main className="min-h-screen bg-[#040d1a] text-white font-sans selection:bg-cyan-500/40 flex flex-col overflow-hidden relative">
      <PageBackground>
        <Navbar />

        {/* Dynamic Ambient Background Glows */}
        <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute top-[40%] right-[5%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-24 px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-7xl mx-auto space-y-12">
            {/* Page Header Section */}
            <div className="text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-sm font-black tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                Quality Enhancement
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-500 drop-shadow-sm">
                Internal Quality <br className="hidden md:block" /> Assurance
                Cell
              </h1>
            </div>

            {/* MASTER VIEW TOGGLE */}
            <div className="flex justify-center animate-in fade-in slide-in-from-bottom-10 duration-700 delay-150">
              <div className="inline-flex flex-col sm:flex-row bg-white/[0.02] border border-white/10 p-1.5 rounded-3xl sm:rounded-full shadow-2xl backdrop-blur-xl gap-2 sm:gap-0 w-full sm:w-auto">
                <button
                  onClick={() => setActiveMainView("OVERVIEW")}
                  className={`px-8 py-4 sm:py-3.5 rounded-2xl sm:rounded-full text-sm font-black tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 w-full sm:w-auto ${
                    activeMainView === "OVERVIEW"
                      ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                  OVERVIEW & MANDATE
                </button>
                <button
                  onClick={() => setActiveMainView("MEMBERS")}
                  className={`px-8 py-4 sm:py-3.5 rounded-2xl sm:rounded-full text-sm font-black tracking-widest transition-all duration-300 cursor-pointer flex items-center justify-center gap-3 w-full sm:w-auto ${
                    activeMainView === "MEMBERS"
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  COMMITTEE DIRECTORY
                </button>
              </div>
            </div>

            {/* ========================================================= */}
            {/* VIEW 1: OVERVIEW & MANDATE                                */}
            {/* ========================================================= */}
            {activeMainView === "OVERVIEW" && (
              <div className="space-y-16 animate-in fade-in slide-in-from-bottom-12 duration-700">
                {/* Vision & Mission Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Vision Card */}
                  <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-white/[0.04] transition-colors duration-500 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-blue-400/20 transition-colors duration-500"></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/40">
                          <svg
                            className="w-8 h-8 text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </div>
                        <h2 className="text-3xl font-black text-white">
                          Vision
                        </h2>
                      </div>
                      <p className="text-gray-300 text-lg leading-relaxed font-medium">
                        To establish a robust framework for continuous quality
                        enhancement at Mar Baselios Dental College, ensuring the
                        highest standards in dental education, research, and
                        patient care, thereby contributing to achieving
                        excellence.
                      </p>
                    </div>
                  </div>

                  {/* Mission Card */}
                  <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-white/[0.04] transition-colors duration-500 shadow-xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none group-hover:bg-cyan-400/20 transition-colors duration-500"></div>
                    <div className="relative z-10 flex flex-col h-full">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-500/40">
                          <svg
                            className="w-8 h-8 text-cyan-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                        </div>
                        <h2 className="text-3xl font-black text-white">
                          Mission
                        </h2>
                      </div>
                      <ul className="space-y-6">
                        {missionPoints.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-black text-sm mt-0.5">
                              {idx + 1}
                            </div>
                            <p className="text-gray-300 font-medium leading-relaxed">
                              {point}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Goals Section */}
                <div className="relative bg-gradient-to-br from-indigo-900/40 to-blue-900/40 border border-indigo-500/30 rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/40">
                        <svg
                          className="w-8 h-8 text-indigo-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                          Goal of IQAC
                        </h2>
                        <p className="text-indigo-300 text-sm font-bold uppercase tracking-widest mt-1">
                          Core Objectives
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {goalPoints.map((goal, idx) => (
                        <div
                          key={idx}
                          className="bg-[#040d1a]/50 border border-indigo-500/20 rounded-2xl p-6 md:p-8 flex items-start gap-5 hover:bg-[#040d1a]/80 transition-colors duration-300"
                        >
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center border border-indigo-500/40 mt-1">
                            <svg
                              className="w-5 h-5 text-indigo-300"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-200 text-lg font-medium leading-relaxed">
                            {goal}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Operational Framework */}
                <div className="bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 md:p-12 shadow-2xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                        Operational Framework
                      </h2>
                      <p className="text-gray-400 mt-2 font-medium">
                        Implementation structure.
                      </p>
                    </div>

                    <div className="flex bg-white/[0.03] border border-white/5 p-1.5 rounded-2xl self-stretch md:self-auto shadow-inner">
                      <button
                        onClick={() => setActiveFramework("ROLES")}
                        className={`flex-1 md:flex-none px-8 py-3 rounded-xl text-sm font-black tracking-widest transition-all duration-300 cursor-pointer ${
                          activeFramework === "ROLES"
                            ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-[1.02]"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        ROLES
                      </button>
                      <button
                        onClick={() => setActiveFramework("FUNCTIONS")}
                        className={`flex-1 md:flex-none px-8 py-3 rounded-xl text-sm font-black tracking-widest transition-all duration-300 cursor-pointer ${
                          activeFramework === "FUNCTIONS"
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] scale-[1.02]"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                      >
                        FUNCTIONS
                      </button>
                    </div>
                  </div>

                  <div className="relative min-h-[400px]">
                    {/* ROLES Content */}
                    {activeFramework === "ROLES" && (
                      <div className="animate-in fade-in slide-in-from-left-8 duration-500">
                        <p className="text-xl text-cyan-300 font-bold mb-8">
                          It will develop mechanisms and protocols to:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                          {rolePoints.map((role, idx) => (
                            <div
                              key={idx}
                              className="group flex items-start gap-5 bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] hover:border-cyan-500/30 transition-all duration-300"
                            >
                              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:scale-110 transition-all duration-300 mt-0.5">
                                <svg
                                  className="w-5 h-5 text-cyan-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                  />
                                </svg>
                              </div>
                              <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                                {role}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* FUNCTIONS Content */}
                    {activeFramework === "FUNCTIONS" && (
                      <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                        <p className="text-lg text-purple-300 font-medium leading-relaxed mb-8 bg-purple-500/10 border border-purple-500/20 p-6 rounded-2xl">
                          Attainment of academic excellence hinges upon the
                          strategic implementation of quality enhancement
                          measures designed to optimize the operational
                          efficiency of the institution. As emphasized in the
                          guidelines, the IQAC will fulfill the following
                          comprehensive roles:
                        </p>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                          {functionPoints.map((func, idx) => (
                            <div
                              key={idx}
                              className="group flex items-start gap-5 bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] hover:border-purple-500/30 transition-all duration-300"
                            >
                              <div className="w-8 h-8 flex-shrink-0 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-black text-sm group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300 mt-1">
                                {idx + 1}
                              </div>
                              <p className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                                {func}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* ========================================================= */}
            {/* VIEW 2: COMMITTEE DIRECTORY (REDESIGNED FOR READABILITY)  */}
            {/* ========================================================= */}
            {activeMainView === "MEMBERS" && (
              <div className="animate-in fade-in zoom-in-95 duration-700 bg-white/[0.02] border border-white/10 rounded-[2rem] p-6 md:p-12 shadow-2xl relative overflow-hidden">
                {/* Background Ambient for Directory */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-white/10 pb-8">
                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-emerald-500/20 rounded-2xl border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                        <svg
                          className="w-8 h-8 text-emerald-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
                          Current Committee
                        </h2>
                        <p className="text-emerald-400 text-sm md:text-base font-bold uppercase tracking-widest mt-1">
                          Official Directory Roster
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Highly Readable Horizontal List Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {iqacMembers.map((member) => {
                      const styles = getMemberStyle(member.iqacRole);

                      return (
                        <div
                          key={member.id}
                          className={`group relative border rounded-[1.5rem] p-6 transition-all duration-500 flex items-center gap-6 cursor-default ${styles.card}`}
                        >
                          {/* Left Avatar */}
                          <div
                            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br border-2 flex items-center justify-center shadow-inner transition-transform duration-500 group-hover:scale-105 ${styles.avatar}`}
                          >
                            <span className="text-xl md:text-2xl font-black tracking-wider">
                              {getInitials(member.name)}
                            </span>
                          </div>

                          {/* Right Content */}
                          <div className="flex-1 flex flex-col justify-center text-left">
                            <div className="mb-2">
                              <span
                                className={`inline-block px-3 py-1 text-[10px] md:text-xs font-black uppercase tracking-widest border rounded-lg ${styles.badge}`}
                              >
                                {member.iqacRole}
                              </span>
                            </div>

                            <h4
                              className={`text-xl md:text-2xl font-extrabold text-white transition-colors duration-300 ${styles.name}`}
                            >
                              {member.name}
                            </h4>

                            <p className="text-sm md:text-base font-medium text-gray-400 mt-1 uppercase tracking-wider">
                              {member.designation}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </PageBackground>
    </main>
  );
}
