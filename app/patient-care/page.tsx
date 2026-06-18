"use client";

import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

// TypeScript Interface for Dental Services
interface DentalService {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode; // Changed from JSX.Element to React.ReactNode
}

export default function PatientCarePage() {
  // Placeholder Services Data - Easily edit or add more services here later!
  const servicesData: DentalService[] = [
    {
      id: 1,
      title: "General Dentistry",
      description:
        "Comprehensive routine check-ups, cleanings, and preventive care to maintain optimal oral hygiene for all age groups.",
      icon: (
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Pediatric Dentistry",
      description:
        "Specialized, child-friendly dental care focusing on the unique oral health needs of infants, children, and adolescents.",
      icon: (
        <svg
          className="w-8 h-8 text-purple-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Orthodontics",
      description:
        "Advanced alignment treatments including traditional braces and modern clear aligners for perfect smiles.",
      icon: (
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Oral & Maxillofacial Surgery",
      description:
        "Expert surgical interventions ranging from complex extractions and impacted teeth to advanced reconstructive procedures.",
      icon: (
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Endodontics",
      description:
        "Precision root canal therapies utilizing advanced microscopic insights to save natural teeth and relieve pain.",
      icon: (
        <svg
          className="w-8 h-8 text-rose-400"
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
      ),
    },
    {
      id: 6,
      title: "Periodontics & Implantology",
      description:
        "Comprehensive gum disease management and state-of-the-art dental implant placements for full mouth rehabilitation.",
      icon: (
        <svg
          className="w-8 h-8 text-amber-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#040d1a] text-white font-sans selection:bg-cyan-500/40 flex flex-col overflow-hidden relative">
      <PageBackground>
        <Navbar />

        {/* Dynamic Ambient Background Glows */}
        <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-24 px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Page Header Section */}
            <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-sm font-black tracking-widest uppercase mb-2 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                Patient Care & Services
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-500 drop-shadow-sm">
                Excellence in <br className="hidden lg:block" /> Oral Health
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto font-medium leading-relaxed">
                Mar Baselios Dental College offers a complete range of general
                and specialty dental services and oral health care for adults
                and children. We offer good standards of care with the latest
                technologies in a professional learning environment.
              </p>
            </div>

            {/* DentoOne Software Portal Banner */}
            <div className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-150">
              <div className="relative bg-gradient-to-r from-[#0a192f] to-[#042f40] border border-cyan-500/30 rounded-3xl p-8 md:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group shadow-[0_0_40px_rgba(34,211,238,0.15)]">
                {/* Background Tech Effects for DentoOne Card */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-cyan-400/30 transition-colors duration-700"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[50px] pointer-events-none"></div>

                <div className="relative z-10 space-y-4 max-w-2xl text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="p-2.5 bg-cyan-500/20 rounded-xl border border-cyan-400/40">
                      <svg
                        className="w-6 h-6 text-cyan-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                      Dento<span className="text-cyan-400">One</span>
                    </h2>
                  </div>
                  <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                    Our integrated digital dental management ecosystem. Access
                    patient records, manage appointments, and track
                    comprehensive treatment plans seamlessly through our
                    centralized clinical software.
                  </p>
                </div>

                <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
                  <Link
                    href="/dentoone"
                    className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-[#040d1a] text-sm font-black uppercase tracking-widest rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] hover:-translate-y-1 cursor-pointer"
                  >
                    Access Portal
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
                  </Link>
                </div>
              </div>
            </div>

            {/* Specialties & Services Grid */}
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
              <div className="flex items-center gap-4">
                <div className="h-px bg-gradient-to-r from-blue-500/50 to-transparent flex-grow"></div>
                <h3 className="text-2xl font-bold text-white tracking-wider uppercase px-4">
                  Clinical Specialties
                </h3>
                <div className="h-px bg-gradient-to-l from-blue-500/50 to-transparent flex-grow"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData.map((service) => (
                  <div
                    key={service.id}
                    className="group relative bg-white/[0.02] border border-white/10 rounded-[1.5rem] p-8 hover:bg-white/[0.05] hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:-translate-y-1 overflow-hidden"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute -top-16 -right-16 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="flex flex-col h-full space-y-6 relative z-10">
                      <div className="flex items-start justify-between">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          {service.icon}
                        </div>
                        <span className="text-gray-600 font-black text-3xl opacity-20 group-hover:text-blue-500/20 transition-colors">
                          0{service.id}
                        </span>
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          {service.title}
                        </h4>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Visual prompt showing it's expandable/ready for future details */}
                      <div className="pt-4 mt-auto border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] font-black tracking-widest text-gray-500 uppercase">
                          Department
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors text-gray-600">
                          <svg
                            className="w-3 h-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="3"
                              d="M9 5l7 7-7 7"
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
        </div>

        <Footer />
      </PageBackground>
    </main>
  );
}
