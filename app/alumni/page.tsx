"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

export default function AlumniPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col overflow-hidden relative selection:bg-cyan-500/30">
      <PageBackground>
        <Navbar />

        {/* Ambient Background Glows */}
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        {/* Increased pt-48 to pt-56 specifically to fix the Navbar overlap shown in the screenshot */}
        <div className="flex-grow pt-48 md:pt-56 pb-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {/* =============================================================== */}
            {/* HERO SECTION                                                    */}
            {/* =============================================================== */}
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-black tracking-[0.3em] uppercase mb-8 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Our Alumni Community
              </div>

              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-6 relative">
                <span className="absolute -inset-2 blur-2xl opacity-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-0"></span>
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 drop-shadow-sm">
                  The{" "}
                </span>
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  MBDC
                </span>
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 drop-shadow-sm">
                  {" "}
                  Alumni Network
                </span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
                Connecting generations of dental professionals, fostering
                lifelong bonds, and shaping the future of dentistry together
                across the globe.
              </p>
            </div>

            {/* =============================================================== */}
            {/* ABOUT THE ASSOCIATION                                           */}
            {/* =============================================================== */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-32 relative z-20">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                    Bridging Past & Future
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"></div>
                </div>

                <p className="text-slate-300 leading-relaxed text-lg font-medium">
                  The Alumni Association of Mar Baselios Dental College serves
                  as a vital bridge between our distinguished graduates and
                  current students. It fosters a robust platform for
                  interaction, professional growth, mentorship, and the
                  celebration of our collective institutional heritage.
                </p>

                <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 shadow-2xl relative overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] pointer-events-none group-hover:bg-cyan-500/20 transition-colors"></div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/40">
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
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-cyan-300 text-lg tracking-wide">
                      Did you know?
                    </h4>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    Our alumni community recently celebrated the college's 20th
                    anniversary with the "Thirike" grand alumni meet, bringing
                    together over 250 esteemed members back to their alma mater.
                  </p>
                </div>
              </div>

              {/* Decorative Image/Gallery Placeholder */}
              <div className="relative h-[450px] rounded-[3rem] border border-slate-700/50 bg-[#020617]/50 overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-600/5"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 group-hover:scale-110 transition-transform duration-700">
                  <svg
                    className="w-16 h-16 mb-4 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-medium tracking-widest uppercase text-sm">
                    Alumni Event Gallery
                  </span>
                </div>
                {/* Optional: Add an actual <img src="..." /> here later */}
              </div>
            </div>

            {/* =============================================================== */}
            {/* OFFICE BEARERS SECTION                                          */}
            {/* =============================================================== */}
            <div className="mb-10">
              <div className="text-center mb-16">
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
                  Association Leadership
                </h3>
                <p className="text-cyan-400 font-bold tracking-widest uppercase text-sm">
                  Current Office Bearers (2023)
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: "Dr. Paul Stephen", role: "President" },
                  { name: "Dr. Basil Joy", role: "Secretary" },
                  { name: "Dr. Linta Thomas", role: "Treasurer" },
                  { name: "Dr. Ajay P. Joseph", role: "Vice President" },
                ].map((member, i) => (
                  <div
                    key={i}
                    className="group bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 p-8 rounded-[2rem] text-center hover:bg-slate-800/60 hover:border-cyan-500/50 hover:-translate-y-2 transition-all duration-500 shadow-xl"
                  >
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 mb-6 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors shadow-inner">
                      {/* Avatar Placeholder */}
                      <svg
                        className="w-8 h-8 text-slate-500 group-hover:text-cyan-400 transition-colors"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-xs font-black tracking-widest uppercase text-slate-500 group-hover:text-cyan-400 transition-colors">
                      {member.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </PageBackground>
    </main>
  );
}
