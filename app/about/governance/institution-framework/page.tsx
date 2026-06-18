import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { GitCommit, Network } from "lucide-react";

export default function InstitutionFrameworkPage() {
  return (
    <main className="overflow-hidden text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      <Navbar />

      {/* Embedded High-Fidelity Tech Pipeline Animations */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes laserVertical {
          0% { y1: -50%; y2: 0%; opacity: 0.3; }
          50% { opacity: 1; }
          100% { y1: 100%; y2: 150%; opacity: 0.3; }
        }
        @keyframes laserHorizontal {
          0% { x1: -50%; x2: 0%; opacity: 0.3; }
          50% { opacity: 1; }
          100% { x1: 100%; x2: 150%; opacity: 0.3; }
        }
        @keyframes subtlePulse {
          0%, 100% { transform: scale(1); opacity: 0.8; filter: brightness(1); }
          50% { transform: scale(1.05); opacity: 1; filter: brightness(1.3); }
        }
        .animate-laser-v {
          animation: laserVertical 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-laser-h {
          animation: laserHorizontal 3.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-pulse-core {
          animation: subtlePulse 2s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(34, 211, 238, 0.2);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(34, 211, 238, 0.4);
        }
      `,
        }}
      />

      <PageBackground>
        {/* ================= HERO CONTROLS HUD ================= */}
        <section className="relative pt-40 pb-12 lg:pt-52 lg:pb-16 px-6 lg:px-20 max-w-[1600px] mx-auto text-center">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="space-y-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.02] border border-white/10 text-[10px] font-mono tracking-[0.3em] text-cyan-400 uppercase">
              <Network className="w-3 h-3 text-cyan-400" />
              Institutional Framework Mapping
            </div>
            <h1 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl uppercase leading-[0.85]">
              System <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-200 to-purple-400">
                Organogram
              </span>
            </h1>
            <p className="max-w-2xl mx-auto pt-4 text-sm text-slate-300 font-normal leading-relaxed">
              Complete hierarchical line blueprint representing supreme
              councils, academic wings, statutory verification boards, and
              welfare units.
            </p>
          </div>
        </section>

        {/* ================= GLOBAL ARCHITECTURE TREE CANVAS ================= */}
        <section className="px-4 md:px-8 xl:px-16 max-w-[1750px] mx-auto pb-48 overflow-x-auto custom-scrollbar">
          <div className="min-w-[1200px] w-full flex flex-col items-center relative py-8">
            {/* ---------------- LEVEL 1: APEX COMMAND ---------------- */}
            <div className="relative z-20 text-center w-full max-w-md bg-slate-950/95 border border-amber-500/50 p-6 rounded-2xl shadow-[0_0_30px_rgba(245,158,11,0.15)] backdrop-blur-md">
              <h2 className="text-2xl font-black tracking-tight text-white uppercase">
                MBMM ASSOCIATION
              </h2>
              <p className="text-xs text-slate-300 font-mono mt-0.5 tracking-wider uppercase font-semibold">
                Board of Directors
              </p>
              <div className="mt-4 grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-xs font-mono text-slate-300 uppercase tracking-tight font-medium">
                <div>Vice President</div>
                <div className="text-amber-400 font-bold">Secretary</div>
                <div>Treasurer</div>
              </div>
            </div>

            {/* Vertical Laser Pipe: Level 1 -> Level 2 */}
            <div className="h-16 w-10 relative z-10 -mt-0.5">
              <svg className="w-full h-full overflow-visible" fill="none">
                <defs>
                  <linearGradient id="laser-v1" x1="0" y1="0" x2="0" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="1" />
                    <stop offset="50%" stopColor="#10b981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="rgba(245,158,11,0.2)"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="url(#laser-v1)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-laser-v"
                  style={{
                    filter: "drop-shadow(0px 0px 5px rgba(16,185,129,0.6))",
                  }}
                />
              </svg>
            </div>

            {/* ---------------- LEVEL 2: EXECUTIVE WING ---------------- */}
            <div className="relative z-20 flex items-center justify-center w-full max-w-xl">
              {/* Perfectly Centered Executive Head */}
              <div className="bg-slate-950/95 border border-emerald-500/60 px-10 py-6 rounded-xl text-center shadow-[0_0_25px_rgba(16,185,129,0.15)] w-64 backdrop-blur-md relative group">
                <div className="absolute inset-0 bg-emerald-500/5 rounded-xl blur-lg pointer-events-none transition-opacity group-hover:opacity-100 opacity-50" />
                <h4 className="text-xl font-black text-white uppercase tracking-tight">
                  PRINCIPAL
                </h4>
              </div>

              {/* Seamless Lateral Laser Pipe to Advisory Unit */}
              <div className="w-16 h-8 relative shrink-0 -mx-0.5">
                <svg className="w-full h-full overflow-visible" fill="none">
                  <defs>
                    <linearGradient
                      id="laser-h1"
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="rgba(16,185,129,0.2)"
                    strokeWidth="2"
                  />
                  <line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="url(#laser-h1)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-laser-h"
                    style={{
                      filter: "drop-shadow(0px 0px 4px rgba(6,182,212,0.6))",
                    }}
                  />
                </svg>
                {/* Node Junction Dots */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4]" />
              </div>

              {/* Side Advisory Unit (IQAC) */}
              <div className="bg-slate-950/95 border border-cyan-500/50 px-6 py-5 rounded-xl text-center shadow-[0_0_20px_rgba(6,182,212,0.1)] backdrop-blur-md w-32 shrink-0">
                <p className="text-base font-black text-slate-100 uppercase tracking-tight">
                  IQAC
                </p>
              </div>
            </div>

            {/* Backbone Vertical Laser: Level 2 Core -> Level 3 Distribution Crossbar */}
            <div className="h-16 w-10 relative z-10 -mt-0.5">
              <svg className="w-full h-full overflow-visible" fill="none">
                <defs>
                  <linearGradient id="laser-v2" x1="0" y1="0" x2="0" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="rgba(34,211,238,0.2)"
                  strokeWidth="2"
                />
                <line
                  x1="50%"
                  y1="0"
                  x2="50%"
                  y2="100%"
                  stroke="url(#laser-v2)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-laser-v"
                  style={{
                    filter: "drop-shadow(0px 0px 5px rgba(34,211,238,0.6))",
                  }}
                />
              </svg>
              {/* Dynamic glowing structural split point */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center z-30 shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse-core" />
              </div>
            </div>

            {/* ---------------- LEVEL 3: MULTI-CHANNEL HORIZONTAL SPINE ---------------- */}
            <div className="w-full relative mt-4">
              {/* High-Tech Main Data Rail Crossbar Distribution System */}
              <div className="absolute top-0 left-[7.14%] right-[7.14%] h-[3px] z-10">
                <svg className="w-full h-full overflow-visible" fill="none">
                  <defs>
                    <linearGradient
                      id="laser-main-spine"
                      x1="0"
                      y1="0"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="15%" stopColor="#ec4899" />
                      <stop offset="35%" stopColor="#10b981" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="65%" stopColor="#a855f7" />
                      <stop offset="85%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#94a3b8" />
                    </linearGradient>
                  </defs>
                  <line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                  />
                  <line
                    x1="0"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="url(#laser-main-spine)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="animate-laser-h"
                    style={{
                      filter: "drop-shadow(0px 0px 6px rgba(34,211,238,0.5))",
                    }}
                  />
                </svg>
              </div>

              {/* Master Flex Grid Architecture */}
              <div className="grid grid-cols-7 gap-4 items-start pt-8 relative z-20">
                {/* MATRIX COLUMN 01: ADMINISTRATION */}
                <div className="flex flex-col items-center relative">
                  <div className="h-8 w-4 absolute -top-8 left-1/2 -translate-x-1/2">
                    <svg className="w-full h-full overflow-visible" fill="none">
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="rgba(59,130,246,0.2)"
                        strokeWidth="2"
                      />
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="#3b82f6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="animate-laser-v"
                        style={{ filter: "drop-shadow(0px 0px 4px #3b82f6)" }}
                      />
                    </svg>
                  </div>

                  <div className="w-full bg-blue-950/50 border border-blue-500/50 p-3 rounded-xl text-center mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                    <h5 className="text-xs font-bold tracking-wider uppercase text-blue-300">
                      Administration
                    </h5>
                  </div>
                  <div className="w-full space-y-2 border-l-2 border-blue-500/30 pl-2">
                    {[
                      "Admissions",
                      "HR",
                      "Finance",
                      "Store",
                      "Maintenance",
                      "Security",
                    ].map((node, i) => (
                      <div
                        key={i}
                        className="text-xs text-slate-300 font-medium bg-slate-950/80 border border-white/10 p-2 rounded-lg flex items-center gap-1.5 hover:text-white hover:border-blue-500/50 hover:bg-slate-900/90 transition-all duration-200"
                      >
                        <GitCommit className="w-3.5 h-3.5 text-blue-400 shrink-0" />{" "}
                        {node}
                      </div>
                    ))}
                  </div>
                </div>

                {/* MATRIX COLUMN 02: HOSTELS */}
                <div className="flex flex-col items-center relative">
                  <div className="h-8 w-4 absolute -top-8 left-1/2 -translate-x-1/2">
                    <svg className="w-full h-full overflow-visible" fill="none">
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="rgba(236,72,153,0.2)"
                        strokeWidth="2"
                      />
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="#ec4899"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="animate-laser-v"
                        style={{ filter: "drop-shadow(0px 0px 4px #ec4899)" }}
                      />
                    </svg>
                  </div>

                  <div className="w-full bg-pink-950/50 border border-pink-500/50 p-3 rounded-xl text-center mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(236,72,153,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]">
                    <h5 className="text-xs font-bold tracking-wider uppercase text-pink-300">
                      Hostels
                    </h5>
                  </div>
                  <div className="w-full space-y-2 border-l-2 border-pink-500/30 pl-2">
                    <div className="text-xs text-slate-300 font-medium bg-slate-950/80 border border-white/10 p-2 rounded-lg flex items-center gap-1.5 hover:text-white hover:border-pink-500/50 hover:bg-slate-900/90 transition-all duration-200">
                      <GitCommit className="w-3.5 h-3.5 text-pink-400 shrink-0" />{" "}
                      Wardens
                    </div>
                  </div>
                </div>

                {/* MATRIX COLUMN 03: ACADEMICS */}
                <div className="flex flex-col items-center relative">
                  <div className="h-8 w-4 absolute -top-8 left-1/2 -translate-x-1/2">
                    <svg className="w-full h-full overflow-visible" fill="none">
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="rgba(16,185,129,0.2)"
                        strokeWidth="2"
                      />
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="#10b981"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="animate-laser-v"
                        style={{ filter: "drop-shadow(0px 0px 4px #10b981)" }}
                      />
                    </svg>
                  </div>

                  <div className="w-full bg-emerald-950/50 border border-emerald-500/50 p-3 rounded-xl text-center mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                    <h5 className="text-xs font-bold tracking-wider uppercase text-emerald-300">
                      Academics
                    </h5>
                  </div>

                  <div className="w-full space-y-3 pl-2 border-l-2 border-emerald-500/30">
                    <div className="bg-slate-950/80 p-2.5 rounded-xl border border-white/10 space-y-2 shadow-md">
                      <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider pb-1 border-b border-white/10">
                        Departments
                      </div>
                      {["HOD", "Faculty", "Students", "Non-Teaching Staff"].map(
                        (sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="text-xs text-slate-300 font-medium pl-2 border-l border-emerald-500/30 flex items-center gap-1.5 py-0.5 hover:text-white transition-colors duration-150"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />{" "}
                            {sub}
                          </div>
                        ),
                      )}
                    </div>

                    <div className="bg-slate-950/80 p-2.5 rounded-xl border border-white/10 space-y-2 shadow-md">
                      <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider pb-1 border-b border-white/10">
                        Coordinators
                      </div>
                      <div className="text-xs text-slate-300 font-medium px-1">
                        Academic Coordinators
                      </div>
                      <div className="text-xs text-emerald-300 font-bold bg-emerald-500/10 p-1.5 rounded border border-emerald-500/30 text-center uppercase tracking-wide cursor-default hover:bg-emerald-500/20 transition-all duration-200">
                        PTA
                      </div>
                    </div>

                    <div className="w-full text-center py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 uppercase tracking-wider shadow-sm hover:bg-emerald-500/20 transition-all duration-200 cursor-default">
                      Alumni
                    </div>
                  </div>
                </div>

                {/* MATRIX COLUMN 04: EXAMINATIONS */}
                <div className="flex flex-col items-center relative">
                  <div className="h-8 w-4 absolute -top-8 left-1/2 -translate-x-1/2">
                    <svg className="w-full h-full overflow-visible" fill="none">
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="rgba(249,115,22,0.2)"
                        strokeWidth="2"
                      />
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="#f97316"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="animate-laser-v"
                        style={{ filter: "drop-shadow(0px 0px 4px #f97316)" }}
                      />
                    </svg>
                  </div>

                  <div className="w-full bg-orange-950/50 border border-orange-500/50 p-3 rounded-xl text-center mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(249,115,22,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                    <h5 className="text-xs font-bold tracking-wider uppercase text-orange-300">
                      Examinations
                    </h5>
                  </div>
                  <div className="w-full space-y-2 border-l-2 border-orange-500/30 pl-2">
                    {["Exam Cell", "Exam Grievance Cell"].map((node, i) => (
                      <div
                        key={i}
                        className="text-xs text-slate-300 font-medium bg-slate-950/80 border border-white/10 p-2 rounded-lg flex items-center gap-1.5 hover:text-white hover:border-orange-500/50 hover:bg-slate-900/90 transition-all duration-200"
                      >
                        <GitCommit className="w-3.5 h-3.5 text-orange-400 shrink-0" />{" "}
                        {node}
                      </div>
                    ))}
                  </div>
                </div>

                {/* MATRIX COLUMN 05: RESEARCH */}
                <div className="flex flex-col items-center relative">
                  <div className="h-8 w-4 absolute -top-8 left-1/2 -translate-x-1/2">
                    <svg className="w-full h-full overflow-visible" fill="none">
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="rgba(168,85,247,0.2)"
                        strokeWidth="2"
                      />
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="#a855f7"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="animate-laser-v"
                        style={{ filter: "drop-shadow(0px 0px 4px #a855f7)" }}
                      />
                    </svg>
                  </div>

                  <div className="w-full bg-purple-950/50 border border-purple-500/50 p-3 rounded-xl text-center mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                    <h5 className="text-xs font-bold tracking-wider uppercase text-purple-300">
                      Research
                    </h5>
                  </div>
                  <div className="w-full space-y-2 border-l-2 border-purple-500/30 pl-2">
                    {[
                      "Institution's Innovation Council",
                      "Institutional Review Board",
                      "Ethical Committee",
                    ].map((node, i) => (
                      <div
                        key={i}
                        className="text-xs text-slate-300 font-medium bg-slate-950/80 border border-white/10 p-2 rounded-lg leading-tight hover:text-white hover:border-purple-500/50 hover:bg-slate-900/90 transition-all duration-200"
                      >
                        • {node}
                      </div>
                    ))}
                  </div>
                </div>

                {/* MATRIX COLUMN 06: CENTRAL SERVICES */}
                <div className="flex flex-col items-center relative">
                  <div className="h-8 w-4 absolute -top-8 left-1/2 -translate-x-1/2">
                    <svg className="w-full h-full overflow-visible" fill="none">
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="rgba(6,182,212,0.2)"
                        strokeWidth="2"
                      />
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="#06b6d4"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="animate-laser-v"
                        style={{ filter: "drop-shadow(0px 0px 4px #06b6d4)" }}
                      />
                    </svg>
                  </div>

                  <div className="w-full bg-cyan-950/50 border border-cyan-500/50 p-3 rounded-xl text-center mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                    <h5 className="text-xs font-bold tracking-wider uppercase text-cyan-300">
                      Hub & Life
                    </h5>
                  </div>

                  <div className="w-full space-y-3 border-l-2 border-cyan-500/30 pl-2">
                    <div className="p-2 rounded-xl bg-red-950/40 border border-red-500/40 text-xs text-center text-red-200 font-bold uppercase tracking-wide shadow-sm hover:bg-red-950/60 transition-all duration-200 cursor-default">
                      Library
                    </div>
                    <div className="p-2 rounded-xl bg-amber-950/40 border border-amber-500/40 text-xs text-center text-amber-200 font-bold uppercase tracking-wide shadow-sm hover:bg-amber-950/60 transition-all duration-200 cursor-default">
                      Students Union
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs space-y-1 shadow-md hover:border-cyan-500/30 transition-all duration-200">
                      <span className="text-[10px] text-cyan-400 block font-mono font-bold uppercase tracking-tight mb-1">
                        Clubs System
                      </span>
                      <div className="text-slate-300 font-medium pl-1 hover:text-white transition-colors">
                        • Arts Club
                      </div>
                      <div className="text-slate-300 font-medium pl-1 hover:text-white transition-colors">
                        • Sports Club
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs space-y-1 shadow-md hover:border-teal-500/30 transition-all duration-200">
                      <span className="text-[10px] text-teal-400 block font-mono font-bold uppercase tracking-tight mb-1">
                        Extensions
                      </span>
                      <div className="text-slate-300 font-medium pl-1 hover:text-white transition-colors">
                        • NSS Unit
                      </div>
                      <div className="text-slate-300 font-medium pl-1 hover:text-white transition-colors">
                        • Nature Club
                      </div>
                    </div>
                  </div>
                </div>

                {/* MATRIX COLUMN 07: COMMITTEES AND CELLS */}
                <div className="flex flex-col items-center relative">
                  <div className="h-8 w-4 absolute -top-8 left-1/2 -translate-x-1/2">
                    <svg className="w-full h-full overflow-visible" fill="none">
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="rgba(148,163,184,0.2)"
                        strokeWidth="2"
                      />
                      <line
                        x1="50%"
                        y1="0"
                        x2="50%"
                        y2="100%"
                        stroke="#94a3b8"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        className="animate-laser-v"
                        style={{ filter: "drop-shadow(0px 0px 4px #94a3b8)" }}
                      />
                    </svg>
                  </div>

                  <div className="w-full bg-slate-900 border border-slate-600 p-3 rounded-xl text-center mb-4 backdrop-blur-sm shadow-[0_0_15px_rgba(148,163,184,0.15)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(148,163,184,0.25)]">
                    <h5 className="text-xs font-bold tracking-wider uppercase text-slate-200 leading-none">
                      Committees & Cells
                    </h5>
                  </div>

                  <div className="w-full space-y-2 border-l-2 border-slate-600/50 pl-2 max-h-[480px] overflow-y-auto pr-1 custom-scrollbar">
                    {[
                      "Anti-Ragging Committee",
                      "Womens Cell",
                      "Students Grievance Redressal Cell",
                      "Disciplinary Committee",
                      "Dental Education Unit",
                      "Curriculum Committee",
                      "Internal Complaint Committee",
                      "Minority Cell",
                      "SC/ST Cell",
                      "OBC Cell",
                    ].map((cell, idx) => (
                      <div
                        key={idx}
                        className="text-xs text-slate-300 font-medium bg-slate-950/80 border border-white/[0.06] p-2 rounded-lg tracking-tight leading-snug hover:border-slate-500/50 hover:text-white hover:bg-slate-900/90 transition-all duration-200 shadow-sm"
                      >
                        {cell}
                      </div>
                    ))}
                  </div>
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
