"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

// TypeScript Interface for Best Practices
interface BestPractice {
  id: 1 | 2 | 3;
  title: string;
  theme: {
    color: string;
    gradient: string;
    border: string;
    glow: string;
    text: string;
  };
  objectives: string[];
  context: string;
  practice: string;
  evidence: string;
  problems: string;
}

export default function BestPracticesPage() {
  const [activeTab, setActiveTab] = useState<1 | 2 | 3>(1);

  // Placeholder Data for Best Practices (Structured for NAAC formats)
  const practicesData: Record<1 | 2 | 3, BestPractice> = {
    1: {
      id: 1,
      title: "Comprehensive Community Outreach & Rural Dental Care",
      theme: {
        color: "cyan",
        gradient: "from-cyan-500 to-blue-600",
        border: "border-cyan-500/30",
        glow: "shadow-[0_0_30px_rgba(34,211,238,0.2)]",
        text: "text-cyan-400",
      },
      objectives: [
        "To provide accessible and affordable dental healthcare to underprivileged rural populations.",
        "To instill a sense of social responsibility and ethical practice among dental students.",
        "To conduct widespread oral hygiene awareness campaigns in remote schools and communities.",
      ],
      context:
        "Access to specialized dental care is severely limited in remote areas due to socio-economic barriers. Our institution recognized the critical need to bridge this gap by deploying mobile dental units and establishing satellite clinics.",
      practice:
        "The college runs a dedicated Mobile Dental Van fully equipped with modern operatory chairs and portable X-ray units. Regular weekend camps are organized in collaboration with local NGOs. Students, under the strict supervision of senior faculty, perform screenings, extractions, restorations, and preventive scaling directly in the community.",
      evidence:
        "Over the last academic year, the outreach program successfully treated over 5,000 rural patients. Follow-up camps indicate a 40% reduction in severe periodontal diseases among the targeted school children.",
      problems:
        "Navigating difficult terrain with heavy mobile units and ensuring patient follow-up for multiple-visit procedures (like root canals) in transient populations.",
    },
    2: {
      id: 2,
      title: "Integration of Digital Dentistry & Paperless Clinics",
      theme: {
        color: "emerald",
        gradient: "from-emerald-500 to-teal-600",
        border: "border-emerald-500/30",
        glow: "shadow-[0_0_30px_rgba(16,185,129,0.2)]",
        text: "text-emerald-400",
      },
      objectives: [
        "To transition towards a fully eco-friendly, paperless clinical administration system.",
        "To train students in advanced digital workflows, including intraoral scanning and CAD/CAM.",
        "To streamline patient record management for faster and more accurate diagnoses.",
      ],
      context:
        "Modern dentistry is rapidly evolving towards digital workflows. To keep our graduates globally competitive and reduce our carbon footprint, a complete digital overhaul of clinical data management was deemed necessary.",
      practice:
        "Implementation of the 'DentoOne' software across all 9 clinical departments. All patient histories, radiographs, and treatment plans are recorded digitally via secure tablets at every chairside. Additionally, traditional impression materials are actively being supplemented with 3D intraoral scanners for prosthodontic and orthodontic cases.",
      evidence:
        "100% of patient records are now digitized, reducing patient wait times at the reception by 60%. The elimination of paper records has significantly reduced the institution's environmental impact.",
      problems:
        "Initial resistance to adapting to new software by senior support staff and the high initial capital investment required for deploying secure server networks and chairside tablets.",
    },
    3: {
      id: 3,
      title: "Holistic Student Mentorship & Wellness Program",
      theme: {
        color: "purple",
        gradient: "from-purple-500 to-fuchsia-600",
        border: "border-purple-500/30",
        glow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]",
        text: "text-purple-400",
      },
      objectives: [
        "To provide continuous academic, psychological, and career support to every student.",
        "To reduce academic stress and prevent burnout in a highly demanding medical curriculum.",
        "To foster a strong, supportive bond between the faculty and the student body.",
      ],
      context:
        "Dental education is notoriously rigorous, often leading to high levels of stress and burnout among students. Recognizing mental health as paramount to academic success, the college completely revamped its student support structure.",
      practice:
        "A structured 1:10 Faculty-to-Student mentorship ratio has been institutionalized. Mentors meet with their mentees bi-weekly to discuss not only academic progress but personal well-being. The campus also introduced mandatory weekly yoga and ergonomic training sessions to prevent physical strain common in dental practice.",
      evidence:
        "A marked improvement in overall student attendance and academic performance. Internal surveys show a 85% satisfaction rate with the mental health support systems currently in place.",
      problems:
        "Scheduling dedicated mentorship hours amidst a tightly packed clinical and academic timetable required significant restructuring of the college master schedule.",
    },
  };

  // Get the current practice to display based on state
  const currentPractice = practicesData[activeTab];

  return (
    <main className="min-h-screen bg-[#020617] text-white flex flex-col overflow-hidden relative selection:bg-cyan-500/30">
      <PageBackground>
        <Navbar />

        {/* Dynamic Ambient Background Glows */}
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-10000"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>

        {/* Subtle Tech Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-24 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-black tracking-[0.3em] uppercase mb-8 shadow-[0_0_30px_rgba(34,211,238,0.2)] relative overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></span>
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)] animate-pulse"></span>
              Institutional Excellence
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter mb-6 relative">
              <span className="absolute -inset-2 blur-2xl opacity-20 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 z-0"></span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 drop-shadow-sm">
                Institutional
              </span>
              <br />
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Best Practices
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl leading-relaxed font-medium max-w-3xl">
              Highlighting the transformative, innovative, and deeply impactful
              initiatives that define our commitment to education, society, and
              sustainable development.
            </p>
          </div>

          {/* =============================================================== */}
          {/* INTERACTIVE 3-TAB CONTROLS                                        */}
          {/* =============================================================== */}
          <div className="max-w-4xl mx-auto px-6 mb-16 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-150">
            <div className="flex flex-col sm:flex-row bg-white/[0.02] backdrop-blur-xl border border-white/10 p-2 rounded-3xl sm:rounded-full shadow-2xl relative z-20">
              {/* Tab 1 */}
              <button
                onClick={() => setActiveTab(1)}
                className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl sm:rounded-full text-sm font-black tracking-widest uppercase transition-all duration-500 ${
                  activeTab === 1
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-[1.02]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center ${activeTab === 1 ? "border-white/50 bg-white/20" : "border-slate-700 bg-slate-800"}`}
                >
                  1
                </div>
                Practice One
              </button>

              {/* Tab 2 */}
              <button
                onClick={() => setActiveTab(2)}
                className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl sm:rounded-full text-sm font-black tracking-widest uppercase transition-all duration-500 ${
                  activeTab === 2
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] scale-[1.02]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center ${activeTab === 2 ? "border-white/50 bg-white/20" : "border-slate-700 bg-slate-800"}`}
                >
                  2
                </div>
                Practice Two
              </button>

              {/* Tab 3 */}
              <button
                onClick={() => setActiveTab(3)}
                className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl sm:rounded-full text-sm font-black tracking-widest uppercase transition-all duration-500 ${
                  activeTab === 3
                    ? "bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] scale-[1.02]"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full border flex items-center justify-center ${activeTab === 3 ? "border-white/50 bg-white/20" : "border-slate-700 bg-slate-800"}`}
                >
                  3
                </div>
                Practice Three
              </button>
            </div>
          </div>

          {/* =============================================================== */}
          {/* DYNAMIC CONTENT DISPLAY AREA                                      */}
          {/* =============================================================== */}
          <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12">
            <div
              key={activeTab} // Changing the key triggers the re-animation properly in normal document flow
              className="animate-in fade-in slide-in-from-bottom-8 duration-700"
            >
              <div
                className={`bg-slate-900/60 backdrop-blur-2xl border ${currentPractice.theme.border} rounded-[3rem] p-8 md:p-14 overflow-hidden relative shadow-2xl`}
              >
                {/* Dynamic Inner Glow based on Theme */}
                <div
                  className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl ${currentPractice.theme.gradient} rounded-full blur-[120px] opacity-10 pointer-events-none`}
                ></div>

                {/* Content Layout */}
                <div className="relative z-10 flex flex-col gap-12">
                  {/* Title & Core Tag */}
                  <div className="border-b border-slate-700/50 pb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 border border-white/20 font-black">
                        0{currentPractice.id}
                      </span>
                      <span
                        className={`text-xs font-black uppercase tracking-[0.2em] ${currentPractice.theme.text}`}
                      >
                        Official Best Practice
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                      {currentPractice.title}
                    </h2>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Left Column */}
                    <div className="space-y-10">
                      {/* Objectives */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${currentPractice.theme.gradient}`}
                          >
                            <svg
                              className="w-4 h-4 text-white"
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
                          <h3 className="text-xl font-bold text-white tracking-wide">
                            Objectives
                          </h3>
                        </div>
                        <ul className="space-y-4 bg-[#020617]/50 border border-white/5 rounded-2xl p-6">
                          {currentPractice.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span
                                className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${currentPractice.theme.text.replace("text", "bg")}`}
                              ></span>
                              <span className="text-slate-300 font-medium leading-relaxed">
                                {obj}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Context */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${currentPractice.theme.gradient}`}
                          >
                            <svg
                              className="w-4 h-4 text-white"
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
                          <h3 className="text-xl font-bold text-white tracking-wide">
                            The Context
                          </h3>
                        </div>
                        <div className="bg-[#020617]/50 border border-white/5 rounded-2xl p-6">
                          <p className="text-slate-300 font-medium leading-relaxed">
                            {currentPractice.context}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-10">
                      {/* The Practice */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br ${currentPractice.theme.gradient}`}
                          >
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                              />
                            </svg>
                          </div>
                          <h3 className="text-xl font-bold text-white tracking-wide">
                            The Practice
                          </h3>
                        </div>
                        <div className="bg-[#020617]/50 border border-white/5 rounded-2xl p-6">
                          <p className="text-slate-300 font-medium leading-relaxed">
                            {currentPractice.practice}
                          </p>
                        </div>
                      </div>

                      {/* Evidence & Problems */}
                      <div className="grid grid-cols-1 gap-6">
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-inner relative overflow-hidden">
                          <div
                            className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${currentPractice.theme.gradient}`}
                          ></div>
                          <h4 className="text-sm font-black uppercase tracking-widest text-white mb-2">
                            Evidence of Success
                          </h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {currentPractice.evidence}
                          </p>
                        </div>

                        <div className="bg-rose-500/5 border border-rose-500/20 rounded-2xl p-6 shadow-inner relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-rose-500"></div>
                          <h4 className="text-sm font-black uppercase tracking-widest text-rose-300 mb-2">
                            Problems Encountered
                          </h4>
                          <p className="text-slate-400 text-sm leading-relaxed">
                            {currentPractice.problems}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
