"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import PageBackground from "@/components/PageBackground";

// TypeScript Interface for Timeline Milestones
interface TimelineMilestone {
  year: string;
  color: "amber" | "teal" | "rose" | "purple" | "orange" | "emerald";
  items: string[];
}

export default function SwocStrategicPlanPage() {
  // State for the internal PDF viewer modal
  const [isPdfOpen, setIsPdfOpen] = useState(false);

  // Placeholder path for your PDF file
  const pdfFilePath = "/assets/swoc-strategic-plan.pdf";

  // Timeline Data extracted from the provided screenshot
  const timelineData: TimelineMilestone[] = [
    {
      year: "2008",
      color: "amber",
      items: [
        "BDS recognition",
        "Rural Satellite Centre",
        "Mobile Dental Van",
        "Staff Quarters & Hostels",
        "Football ground and Basketball court",
        "BDS Seat Enhancement",
      ],
    },
    {
      year: "2014",
      color: "teal",
      items: [
        "Wi-Fi-enabled campus",
        "MDS programs in all specialties",
        "Auditorium & Indoor court",
        "Alumni Association",
        "Research Lab",
      ],
    },
    {
      year: "2018",
      color: "rose",
      items: [
        "Library up gradation",
        "MDS Seat Enhancement",
        "Indoor Badminton courts",
        "Clinical Software",
        "Administrative and Academic committees",
        "CBCT",
        "NAAC Accreditation",
      ],
    },
    {
      year: "2023",
      color: "purple",
      items: [
        "Auditorium",
        "First cycle NAAC",
        "College Facelift",
        "Department Renovations",
        "Open Gym and Cycle Bay",
        "Solar Energy",
        "Academic software",
        "Paradental courses",
        "Student Exchange Program",
        "Intraoral scanner & PCR Machine",
        "Public Transport access to college",
      ],
    },
    {
      year: "2028",
      color: "orange",
      items: [
        "MDS seat Enhancement",
        "PhD centre in all departments",
        "Green Campus",
        "Office Automation",
        "Centralized Air Conditioning",
        "Fully Solar Powered Campus",
        "Guest House",
      ],
    },
    {
      year: "2035",
      color: "emerald",
      items: [
        "International collaborative activities",
        "Dental Research Hub",
        "Up gradation of dental departments",
      ],
    },
  ];

  // Helper functions for dynamic theme colors based on the timeline node
  const getTimelineNodeStyle = (color: string) => {
    switch (color) {
      case "amber":
        return "bg-amber-500 border-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.6)]";
      case "teal":
        return "bg-teal-500 border-teal-300 shadow-[0_0_15px_rgba(20,184,166,0.6)]";
      case "rose":
        return "bg-rose-500 border-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.6)]";
      case "purple":
        return "bg-purple-500 border-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.6)]";
      case "orange":
        return "bg-orange-500 border-orange-300 shadow-[0_0_15px_rgba(249,115,22,0.6)]";
      case "emerald":
        return "bg-emerald-500 border-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.6)]";
      default:
        return "bg-cyan-500 border-cyan-300";
    }
  };

  const getTimelineCardStyle = (color: string) => {
    switch (color) {
      case "amber":
        return "hover:border-amber-500/40 hover:shadow-[0_15px_30px_rgba(245,158,11,0.1)]";
      case "teal":
        return "hover:border-teal-500/40 hover:shadow-[0_15px_30px_rgba(20,184,166,0.1)]";
      case "rose":
        return "hover:border-rose-500/40 hover:shadow-[0_15px_30px_rgba(244,63,94,0.1)]";
      case "purple":
        return "hover:border-purple-500/40 hover:shadow-[0_15px_30px_rgba(168,85,247,0.1)]";
      case "orange":
        return "hover:border-orange-500/40 hover:shadow-[0_15px_30px_rgba(249,115,22,0.1)]";
      case "emerald":
        return "hover:border-emerald-500/40 hover:shadow-[0_15px_30px_rgba(16,185,129,0.1)]";
      default:
        return "";
    }
  };

  const getYearTextStyle = (color: string) => {
    switch (color) {
      case "amber":
        return "text-amber-400";
      case "teal":
        return "text-teal-400";
      case "rose":
        return "text-rose-400";
      case "purple":
        return "text-purple-400";
      case "orange":
        return "text-orange-400";
      case "emerald":
        return "text-emerald-400";
      default:
        return "text-cyan-400";
    }
  };

  return (
    <main className="min-h-screen bg-[#040d1a] text-white flex flex-col overflow-hidden relative selection:bg-cyan-500/30">
      <PageBackground>
        <Navbar />

        {/* Dynamic Ambient Background Glows */}
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Main Content Wrapper */}
        <div className="flex-grow pt-40 pb-32 px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-center">
          {/* Page Header */}
          <div className="text-center space-y-6 max-w-4xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="inline-block px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-black tracking-[4px] uppercase mb-2 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              Growth & Vision
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white tracking-tighter">
              SWOC Analysis & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Strategic Plan
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-medium max-w-3xl mx-auto">
              Charting our institutional journey of excellence, infrastructure
              development, and future milestones through a comprehensive
              strategic roadmap.
            </p>
          </div>

          {/* Vertical Timeline Section */}
          <div className="w-full max-w-5xl mx-auto relative mb-24">
            {/* Center Vertical Line (Hidden on very small screens, visible on md+) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500/50 via-purple-500/50 to-emerald-500/50 -translate-x-1/2 rounded-full"></div>

            <div className="space-y-12 md:space-y-0 relative">
              {timelineData.map((milestone, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col md:flex-row items-center md:items-start ${isEven ? "md:justify-start" : "md:justify-end"} animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-${index * 100}`}
                  >
                    {/* Timeline Central Node (Visible on md+) */}
                    <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full border-4 border-[#040d1a] z-20">
                      <div
                        className={`w-4 h-4 rounded-full ${getTimelineNodeStyle(milestone.color)}`}
                      ></div>
                    </div>

                    {/* Timeline Card */}
                    <div
                      className={`w-full md:w-[45%] relative group ${isEven ? "md:pr-12" : "md:pl-12"}`}
                    >
                      <div
                        className={`bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 ${getTimelineCardStyle(milestone.color)}`}
                      >
                        {/* Year Badge */}
                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                          <h2
                            className={`text-4xl font-black tracking-tighter ${getYearTextStyle(milestone.color)}`}
                          >
                            {milestone.year}
                          </h2>
                          {index === timelineData.length - 1 && (
                            <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-black uppercase tracking-widest rounded-lg animate-pulse">
                              Future Target
                            </span>
                          )}
                        </div>

                        {/* List of Milestones */}
                        <ul className="space-y-3">
                          {milestone.items.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div
                                className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getTimelineNodeStyle(milestone.color).split(" ")[0]}`}
                              ></div>
                              <span className="text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                                {item}[cite: 12]
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Internal PDF Viewer Document Card */}
          <div className="w-full max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <div className="group relative bg-gradient-to-br from-[#0a192f] to-[#040d1a] border border-cyan-500/30 rounded-[2.5rem] p-8 md:p-12 hover:border-cyan-500/60 transition-all duration-500 shadow-[0_0_30px_rgba(34,211,238,0.1)] hover:shadow-[0_20px_50px_rgba(34,211,238,0.2)] overflow-hidden">
              {/* Background Tech Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-400/20 transition-colors duration-700"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                {/* Document Icon Graphic */}
                <div className="w-24 h-24 rounded-3xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                  <svg
                    className="w-10 h-10 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>

                {/* Document Info */}
                <div className="space-y-3 max-w-xl">
                  <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Complete SWOC & Strategic Document
                  </h2>
                  <p className="text-gray-400 font-medium leading-relaxed">
                    Access the detailed internal report outlining our Strengths,
                    Weaknesses, Opportunities, Challenges, and comprehensive
                    roadmap.
                  </p>
                </div>

                {/* Internal PDF Trigger Button */}
                <button
                  onClick={() => setIsPdfOpen(true)}
                  className="cursor-pointer w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 text-[#06111f] text-sm font-black uppercase tracking-widest transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1"
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
                      strokeWidth="2.5"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  Open Internal PDF Viewer
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        {/* ========================================================================= */}
        {/* INTERNAL PDF VIEWER OVERLAY MODAL                                         */}
        {/* ========================================================================= */}
        {isPdfOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center animate-in fade-in duration-300">
            {/* Frosted Glass Backdrop */}
            <div
              className="absolute inset-0 bg-[#020813]/90 backdrop-blur-xl cursor-pointer"
              onClick={() => setIsPdfOpen(false)}
            ></div>

            {/* PDF Container */}
            <div className="relative w-full max-w-6xl h-[90vh] mx-4 bg-[#0a192f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300">
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-b border-white/10">
                <div className="flex items-center gap-3">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span className="text-white font-bold tracking-wide">
                    SWOC_Strategic_Plan.pdf
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  {/* Fallback Direct Link in case browser blocks iframe */}
                  <Link
                    href={pdfFilePath}
                    target="_blank"
                    className="text-xs font-bold text-cyan-400 uppercase tracking-widest hover:text-white transition-colors cursor-pointer hidden md:block"
                  >
                    Open in New Tab ↗
                  </Link>
                  <button
                    onClick={() => setIsPdfOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500/20 hover:text-red-400 text-white transition-colors cursor-pointer"
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
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Iframe Document Viewer */}
              <div className="flex-grow w-full h-full relative bg-[#040d1a]">
                <iframe
                  src={`${pdfFilePath}#toolbar=0&navpanes=0`}
                  className="w-full h-full border-none"
                  title="SWOC Strategic Plan Document Viewer"
                >
                  {/* Fallback if browser doesn't support iframes */}
                  <div className="flex flex-col items-center justify-center h-full text-center p-8 space-y-4">
                    <p className="text-gray-400">
                      Your browser does not support embedded PDFs.
                    </p>
                    <Link
                      href={pdfFilePath}
                      target="_blank"
                      className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 transition-colors text-[#06111f] font-bold rounded-xl shadow-lg"
                    >
                      Download PDF Instead
                    </Link>
                  </div>
                </iframe>
              </div>
            </div>
          </div>
        )}
      </PageBackground>
    </main>
  );
}
