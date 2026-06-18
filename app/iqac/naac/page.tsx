"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

export default function NAACPage() {
  // NAAC Status Data from screenshot
  const naacDetails = [
    { label: "IIQA Submitted Date", value: "14/09/2023", status: "neutral" },
    { label: "IIQA Status", value: "Approved", status: "success" },
    { label: "SSR Submitted Date", value: "14/02/2024", status: "neutral" },
    { label: "SSR Status", value: "Submitted", status: "pending" },
  ];

  // Requested PDF Document Links
  const naacDocuments = [
    { id: 1, title: "IIQA REPORT", href: "#", color: "cyan" },
    { id: 2, title: "SSR REPORT", href: "#", color: "blue" },
    { id: 3, title: "PEER TEAM REPORT", href: "#", color: "purple" },
    { id: 4, title: "GRADE SHEET", href: "#", color: "emerald" },
  ];

  // Helper for dynamic status colors
  const getValueStyle = (status: string) => {
    switch (status) {
      case "success":
        return "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md font-black tracking-widest uppercase text-sm shadow-[0_0_10px_rgba(16,185,129,0.2)]";
      case "pending":
        return "text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md font-black tracking-widest uppercase text-sm shadow-[0_0_10px_rgba(245,158,11,0.2)]";
      default:
        return "text-white font-bold text-lg";
    }
  };

  // Helper for dynamic document card colors
  const getCardHoverStyle = (color: string) => {
    switch (color) {
      case "cyan":
        return "hover:border-cyan-500/50 hover:shadow-[0_15px_30px_rgba(34,211,238,0.15)] group-hover:text-cyan-300";
      case "blue":
        return "hover:border-blue-500/50 hover:shadow-[0_15px_30px_rgba(59,130,246,0.15)] group-hover:text-blue-300";
      case "purple":
        return "hover:border-purple-500/50 hover:shadow-[0_15px_30px_rgba(168,85,247,0.15)] group-hover:text-purple-300";
      case "emerald":
        return "hover:border-emerald-500/50 hover:shadow-[0_15px_30px_rgba(16,185,129,0.15)] group-hover:text-emerald-300";
      default:
        return "";
    }
  };

  const getIconStyle = (color: string) => {
    switch (color) {
      case "cyan":
        return "text-cyan-400 bg-cyan-500/10 border-cyan-500/30";
      case "blue":
        return "text-blue-400 bg-blue-500/10 border-blue-500/30";
      case "purple":
        return "text-purple-400 bg-purple-500/10 border-purple-500/30";
      case "emerald":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
      default:
        return "";
    }
  };

  return (
    <main className="min-h-screen bg-[#040d1a] text-white font-sans selection:bg-cyan-500/40 flex flex-col overflow-hidden relative">
      <PageBackground>
        <Navbar />

        {/* Ambient Glows */}
        <div className="absolute top-[10%] left-[50%] -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-24 px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Page Header */}
            <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-sm font-black tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                Accreditation & Quality Assurance
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-500 drop-shadow-sm">
                NAAC Accreditation
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                Mar Baselios Dental College is committed to continuous quality
                improvement and maintaining the highest standards in dental
                education.
              </p>
            </div>

            {/* Institution Details & Status Timeline */}
            <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-150">
              <div className="bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden relative">
                {/* Background Tech Accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10 pb-8 border-b border-white/10">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white tracking-tight mb-2">
                      Mar Baselios Dental College
                    </h2>
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-black tracking-widest uppercase">
                        Institution Profile
                      </span>
                    </div>
                  </div>

                  {/* AISHE ID Badge */}
                  <div className="flex flex-col items-start md:items-end">
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
                      AISHE ID
                    </span>
                    <span className="text-2xl font-black text-cyan-400 tracking-wider bg-[#020813] px-6 py-2 rounded-xl border border-cyan-500/30 shadow-inner">
                      C-11684
                    </span>
                  </div>
                </div>

                {/* Status Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                  {naacDetails.map((detail, index) => (
                    <div
                      key={index}
                      className="bg-[#020813]/50 border border-white/5 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white/[0.04] transition-colors duration-300"
                    >
                      <span className="text-gray-400 font-semibold uppercase tracking-wider text-sm">
                        {detail.label}
                      </span>
                      <div className="flex items-center">
                        <span className={getValueStyle(detail.status)}>
                          {detail.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Official Documents & Reports Section */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
              <div className="flex items-center gap-4">
                <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-grow"></div>
                <h3 className="text-2xl font-bold text-white tracking-wider uppercase px-4">
                  Official Reports & Documents
                </h3>
                <div className="h-px bg-gradient-to-l from-blue-500/50 to-transparent flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {naacDocuments.map((doc) => (
                  <Link
                    href={doc.href}
                    key={doc.id}
                    className={`group cursor-pointer bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-8 flex items-center justify-between transition-all duration-500 hover:-translate-y-1 ${getCardHoverStyle(doc.color)}`}
                  >
                    <div className="flex items-center gap-6">
                      <div
                        className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-inner ${getIconStyle(doc.color)}`}
                      >
                        <svg
                          className="w-7 h-7"
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
                      <div>
                        <h4
                          className={`text-xl font-extrabold text-white tracking-wide transition-colors duration-300 ${getCardHoverStyle(doc.color).split(" ").pop()}`}
                        >
                          {doc.title}
                        </h4>
                        <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">
                          View PDF Document
                        </p>
                      </div>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-500 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300">
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                  </Link>
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
