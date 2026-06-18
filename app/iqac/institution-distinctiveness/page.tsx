"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

export default function InstitutionalDistinctivenessPage() {
  // Data for RECON Services
  const reconServices = [
    { title: "Sample Size Calculation", icon: "📊" },
    { title: "Software Data Analysis", icon: "💻" },
    { title: "Research Methodology Workshops", icon: "🛠️" },
    { title: "Manuscript Review & Editing", icon: "📝" },
    { title: "Research Report Preparation", icon: "📑" },
    { title: "Publication Assistance", icon: "🚀" },
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col overflow-hidden relative selection:bg-fuchsia-500/30">
      <PageBackground>
        <Navbar />

        {/* High-Tech Ambient Meshes */}
        <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[700px] h-[700px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-24 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-black tracking-[0.3em] uppercase mb-8 shadow-[0_0_30px_rgba(217,70,239,0.2)] relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2.5s_infinite]"></span>
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 shadow-[0_0_10px_rgba(217,70,239,1)] animate-pulse"></span>
              Institutional Distinctiveness
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-2 blur-3xl opacity-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-600 z-0"></span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 drop-shadow-sm">
                Introducing
              </span>
              <br />
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500">
                RECON
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium max-w-3xl">
              The Research Consultancy Service Cell at Mar Baselios Dental
              College. A pioneering hub of excellence imparting exceptional
              dental education, cutting-edge research, and state-of-the-art
              care.
            </p>
          </div>

          {/* =============================================================== */}
          {/* DYNAMIC BENTO GRID LAYOUT                                       */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 relative z-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
              {/* Introduction Card (Spans 2 columns) */}
              <div className="lg:col-span-2 group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-700"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-cyan-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-3xl font-black text-white tracking-tight">
                      The Genesis
                    </h2>
                  </div>

                  <div className="space-y-5 text-slate-300 font-medium leading-relaxed flex-grow">
                    <p>
                      Mar Baselios Dental College (MBDC) has consistently
                      demonstrated unwavering dedication to meeting the
                      academic, clinical, and public health requirements set by
                      the Kerala University of Health Sciences.
                    </p>
                    <p>
                      Beginning in 2012 with the inception of the postgraduate
                      program, a dedicated team at MBDC has been actively
                      involved in supporting research activities for
                      postgraduates. As their technical expertise extended
                      beyond the campus, they garnered requests from research
                      scholars seeking specialized research-related support.
                    </p>
                    <p className="text-cyan-100">
                      In response to this burgeoning demand, the institution
                      officially established the{" "}
                      <strong>Research Consultancy Service Cell (RECON)</strong>
                      —a pioneering initiative within dental colleges—in 2015.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Stat Card */}
              <div className="group relative bg-gradient-to-br from-fuchsia-900/40 to-blue-900/40 backdrop-blur-xl border border-fuchsia-500/30 hover:border-fuchsia-500/60 rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(217,70,239,0.15)] flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 bg-fuchsia-500/10 blur-[50px] group-hover:opacity-100 opacity-50 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-fuchsia-400 font-black tracking-[0.2em] uppercase text-sm mb-4">
                    Impact & Outreach
                  </div>
                  <div className="text-7xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] mb-2 group-hover:scale-110 transition-transform duration-500">
                    150+
                  </div>
                  <div className="w-12 h-1 bg-fuchsia-500 mx-auto rounded-full mb-6"></div>
                  <p className="text-fuchsia-100 font-medium leading-relaxed">
                    Research services successfully facilitated to date, catering
                    to the needs of both in-house and external research
                    scholars.
                  </p>
                </div>
              </div>

              {/* The Initiative & Services (Spans full width on lg) */}
              <div className="lg:col-span-3 group relative bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-blue-500/50 rounded-[2.5rem] p-8 md:p-14 transition-all duration-500 overflow-hidden hover:shadow-[0_0_40px_rgba(59,130,246,0.1)]">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-700"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left: Initiative Text */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div className="inline-flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-blue-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                      <h2 className="text-3xl font-black text-white tracking-tight">
                        The RECON Initiative
                      </h2>
                    </div>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      The RECON cell at MBDC comprises a distinguished panel of
                      faculty members, each possessing expertise in specific
                      domains of health research. This innovative establishment
                      aims to offer a range of vital research services.
                    </p>
                    <p className="text-slate-300 font-medium leading-relaxed">
                      Notably, these services are accessible to both internal
                      stakeholders within MBDC and external researchers,
                      highlighting the commitment to sustainability and
                      continued provision of these indispensable services
                      through a nominal fee for external services.
                    </p>
                  </div>

                  {/* Right: Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {reconServices.map((service, idx) => (
                      <div
                        key={idx}
                        className="bg-[#020617]/50 border border-white/5 rounded-2xl p-5 flex flex-col gap-3 hover:bg-blue-500/10 hover:border-blue-500/30 transition-all duration-300"
                      >
                        <div className="text-2xl">{service.icon}</div>
                        <h4 className="text-white font-bold text-sm tracking-wide">
                          {service.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =============================================================== */}
          {/* CONCLUSION BANNER                                               */}
          {/* =============================================================== */}
          <div className="max-w-5xl mx-auto px-6 w-full animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
            <div className="relative bg-gradient-to-br from-cyan-900/60 to-slate-900/80 backdrop-blur-2xl border border-cyan-500/30 rounded-[3rem] p-10 md:p-14 overflow-hidden shadow-[0_0_50px_rgba(34,211,238,0.1)] group hover:border-cyan-500/60 transition-colors duration-700 text-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors duration-700"></div>

              <div className="relative z-10 max-w-3xl mx-auto space-y-6">
                <div className="w-16 h-16 mx-auto bg-cyan-500/20 rounded-full flex items-center justify-center border border-cyan-500/40 mb-4 group-hover:scale-110 transition-transform duration-500">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  Setting a Benchmark for Excellence
                </h2>

                <p className="text-cyan-100/80 font-medium leading-relaxed text-lg">
                  RECON signifies a pioneering approach in providing
                  comprehensive research support. Through its innovative and
                  inclusive services, RECON has enriched the research landscape
                  at MBDC and established a model for research consultancy
                  services in dental colleges, propelling the institution
                  forward in its pursuit of excellence in dental education,
                  groundbreaking research, and equitable, advanced dental care.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </PageBackground>

      {/* Global CSS for shimmer effect */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `,
        }}
      />
    </main>
  );
}
