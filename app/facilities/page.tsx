"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

// Define TypeScript interfaces
interface FacilityItem {
  id: number;
  title: string;
  category:
    | "Clinical"
    | "Academic"
    | "Laboratory"
    | "Research"
    | "Infrastructure";
  description: string;
  image: string;
}

export default function FacilitiesPage() {
  // Lightbox State for full-screen viewing
  const [activeLightbox, setActiveLightbox] = useState<FacilityItem | null>(
    null,
  );

  // Comprehensive Facilities Data
  // You can easily add, remove, or change image paths here later!
  const facilitiesData: FacilityItem[] = [
    {
      id: 1,
      title: "Undergraduate Clinical Operatory",
      category: "Clinical",
      description:
        "A sprawling, fully equipped clinical wing featuring modern electronic dental chairs, centralized suction, and high-visibility operating lights designed for optimal UG training.",
      image: "/facilities/ug-clinic.jpg",
    },
    {
      id: 2,
      title: "Postgraduate Specialty Clinic",
      category: "Clinical",
      description:
        "Advanced, ergonomically designed individual cubicles ensuring patient privacy, integrated with smart monitoring systems and advanced orthodontic toolkits for PG scholars.",
      image: "/facilities/pg-clinic.jpg",
    },
    {
      id: 3,
      title: "Pre-Clinical Orthodontic Laboratory",
      category: "Laboratory",
      description:
        "A high-capacity dry lab equipped with phantom heads, specialized wire-bending stations, and typodont practice zones to refine psychomotor skills before clinical exposure.",
      image: "/facilities/pre-clinical-lab.jpg",
    },
    {
      id: 4,
      title: "Cephalometric & Photography Studio",
      category: "Research",
      description:
        "Dedicated digital imaging room featuring specialized backdrops, standardized lighting, and advanced cephalometric tracing software for precise dentofacial diagnosis.",
      image: "/facilities/photo-studio.jpg",
    },
    {
      id: 5,
      title: "Centralized Sterilization Room",
      category: "Infrastructure",
      description:
        "A strictly monitored, state-of-the-art sterilization protocol area featuring Class-B autoclaves, ultrasonic cleaners, and UV chambers to ensure zero cross-infection.",
      image: "/facilities/sterilization.jpg",
    },
    {
      id: 6,
      title: "Department Library & Reading Room",
      category: "Academic",
      description:
        "A serene academic enclave housing over 200+ specialized orthodontic titles, international journal archives, and high-speed Wi-Fi for digital database access.",
      image: "/facilities/library.jpg",
    },
    {
      id: 7,
      title: "Smart Seminar Hall",
      category: "Academic",
      description:
        "Interactive learning environment equipped with digital smart boards, surround audio-visual systems, and high-definition projectors for case discussions and CDE programs.",
      image: "/facilities/seminar-hall.jpg",
    },
    {
      id: 8,
      title: "Plaster & Wet Laboratory",
      category: "Laboratory",
      description:
        "Heavy-duty wet lab configured with model trimmers, vibrators, and vacuum mixers for the precise fabrication of study models and orthodontic appliances.",
      image: "/facilities/wet-lab.jpg",
    },
  ];

  // Dynamic styling for category badges
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "Clinical":
        return "bg-cyan-500/10 border-cyan-500/30 text-cyan-300";
      case "Laboratory":
        return "bg-purple-500/10 border-purple-500/30 text-purple-300";
      case "Academic":
        return "bg-amber-500/10 border-amber-500/30 text-amber-300";
      case "Research":
        return "bg-indigo-500/10 border-indigo-500/30 text-indigo-300";
      case "Infrastructure":
        return "bg-emerald-500/10 border-emerald-500/30 text-emerald-300";
      default:
        return "bg-blue-500/10 border-blue-500/30 text-blue-300";
    }
  };

  return (
    <main className="min-h-screen bg-[#040d1a] text-white font-sans selection:bg-cyan-500/40 flex flex-col overflow-hidden relative">
      <PageBackground>
        <Navbar />

        {/* Dynamic Ambient Background Glows */}
        <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-[60%] left-[40%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-24 px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Page Header Section */}
            <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-sm font-black tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                Infrastructure & Resources
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-500 drop-shadow-sm">
                Department Facilities
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                Discover our world-class clinical, academic, and research
                infrastructure designed to provide unparalleled training and
                cutting-edge patient care.
              </p>
            </div>

            {/* Facilities Grid View */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              {facilitiesData.map((facility) => (
                <div
                  key={facility.id}
                  onClick={() => setActiveLightbox(facility)}
                  className="group relative bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 rounded-[2rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.05] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col cursor-pointer"
                >
                  {/* Image Display Block */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#020813] flex items-center justify-center border-b border-white/5">
                    {facility.image ? (
                      <img
                        src={facility.image}
                        alt={facility.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          // Prevents broken image icons if paths aren't set yet
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : null}

                    {/* Placeholder Grid Graphic if Image fails or is empty */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-blue-900/80 flex flex-col items-center justify-center p-4">
                      <svg
                        className="w-12 h-12 text-blue-500/30 mb-2 group-hover:scale-110 transition-transform duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        ></path>
                      </svg>
                    </div>

                    {/* Category Badge overlay */}
                    <span
                      className={`absolute top-4 right-4 z-20 px-3 py-1 text-[10px] font-black tracking-widest backdrop-blur-md rounded-lg uppercase shadow-lg border ${getCategoryStyles(facility.category)}`}
                    >
                      {facility.category}
                    </span>

                    {/* Dark gradient fade into content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051121] via-[#051121]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </div>

                  {/* Content Details Block */}
                  <div className="p-6 md:p-8 flex-grow flex flex-col justify-between relative z-10">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                        {facility.title}
                      </h3>
                      <p className="text-gray-400 text-sm font-medium leading-relaxed">
                        {facility.description}
                      </p>
                    </div>

                    {/* Interactive Click Prompt */}
                    <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
                      <span className="text-xs font-black tracking-widest text-cyan-500 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                        View Facility ↗
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-colors duration-300 text-gray-500">
                        <svg
                          className="w-4 h-4"
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
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </PageBackground>

      {/* ========================================================================= */}
      {/* FACILITIES THEATRE LIGHTBOX MODAL OVERLAY                                 */}
      {/* ========================================================================= */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[9999] flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in duration-300 cursor-pointer"
        >
          {/* Close Trigger Button */}
          <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
            <span className="text-xs font-black tracking-widest text-gray-500 bg-white/5 border border-white/10 rounded px-3 py-1 uppercase hidden md:inline">
              Click Backdrop to Close
            </span>
            <button
              onClick={() => setActiveLightbox(null)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center text-xl font-bold transition-all cursor-pointer hover:scale-110"
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

          {/* Unified Theatre Layout Box */}
          <div
            onClick={(e) => e.stopPropagation()} // Prevents closing when clicking the card itself
            className="relative max-w-6xl w-full bg-[#051121]/90 border border-white/10 rounded-[2rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row h-auto max-h-[85vh] md:max-h-[75vh] animate-in zoom-in-95 duration-300 cursor-default"
          >
            {/* Left Frame Window: Media Stream Viewer */}
            <div className="flex-1 bg-[#020813] relative flex items-center justify-center p-2 min-h-[300px] md:min-h-0 border-b md:border-b-0 md:border-r border-white/10">
              <img
                src={activeLightbox.image}
                alt={activeLightbox.title}
                className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain rounded-xl transition-all duration-500"
                onError={(e) => {
                  e.currentTarget.style.opacity = "0.1";
                }}
              />

              {/* Dynamic Overlay Box Fallback Text */}
              <div className="absolute inset-0 pointer-events-none flex items-center justify-center p-6 opacity-30">
                <div className="text-center space-y-2 select-none">
                  <svg
                    className="w-16 h-16 text-cyan-400/40 mx-auto"
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
                </div>
              </div>
            </div>

            {/* Right Information Descriptive Side-Panel */}
            <div className="w-full md:w-[400px] bg-white/[0.02] p-8 md:p-10 flex flex-col flex-shrink-0 overflow-y-auto">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/20 rounded-lg border border-blue-500/30">
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
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span
                    className={`px-3 py-1 rounded text-[10px] font-black tracking-widest uppercase border ${getCategoryStyles(activeLightbox.category)}`}
                  >
                    {activeLightbox.category} Facility
                  </span>
                </div>

                <h3 className="text-3xl font-black text-white tracking-tight leading-tight">
                  {activeLightbox.title}
                </h3>

                <div className="w-12 h-1 bg-cyan-500 rounded-full"></div>

                <p className="text-gray-300 text-base font-medium leading-relaxed">
                  {activeLightbox.description}
                </p>
              </div>

              <div className="mt-auto pt-10">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-4 h-4 text-cyan-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">
                    This infrastructure strictly complies with national dental
                    education and sterilization standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
