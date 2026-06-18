"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

// --- TYPES ---
interface StaffMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

// --- MOCK DATA ---
const staffData: StaffMember[] = [
  {
    id: "staff-1",
    name: "Anil Kumar",
    role: "Senior Lab Technician",
    image: "/assets/staff/staff-1.jpg",
  },
  {
    id: "staff-2",
    name: "Priya Menon",
    role: "Chief Dental Hygienist",
    image: "/assets/staff/staff-2.jpg",
  },
  {
    id: "staff-3",
    name: "Rajesh Nair",
    role: "Radiology Assistant",
    image: "/assets/staff/staff-3.jpg",
  },
  {
    id: "staff-4",
    name: "Sunitha V.",
    role: "OPD Coordinator",
    image: "/assets/staff/staff-4.jpg",
  },
  {
    id: "staff-5",
    name: "Thomas George",
    role: "Dental Mechanics",
    image: "/assets/staff/staff-5.jpg",
  },
  {
    id: "staff-6",
    name: "Lakshmi S.",
    role: "Administrative Assistant",
    image: "/assets/staff/staff-6.jpg",
  },
  {
    id: "staff-7",
    name: "Mohammed Ali",
    role: "Sterilization Technician",
    image: "/assets/staff/staff-7.jpg",
  },
  {
    id: "staff-8",
    name: "Kavya Pillai",
    role: "Receptionist",
    image: "/assets/staff/staff-8.jpg",
  },
  {
    id: "staff-9",
    name: "Jithin Joy",
    role: "IT Support Administrator",
    image: "/assets/staff/staff-9.jpg",
  },
  {
    id: "staff-10",
    name: "Deepa R.",
    role: "Patient Care Executive",
    image: "/assets/staff/staff-10.jpg",
  },
  {
    id: "staff-11",
    name: "Vivek T.",
    role: "Maintenance Supervisor",
    image: "/assets/staff/staff-11.jpg",
  },
  {
    id: "staff-12",
    name: "Anupama K.",
    role: "Record Room Assistant",
    image: "/assets/staff/staff-12.jpg",
  },
];

// --- ICONS ---
const UsersIcon = () => (
  <svg
    className="w-4 h-4 text-cyan-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);
const CloseIcon = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
const ExpandIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
    />
  </svg>
);

export default function SupportingStaffPage() {
  // --- LIGHTBOX STATE ---
  const [activeStaff, setActiveStaff] = useState<StaffMember | null>(null);

  const openLightbox = (staff: StaffMember) => {
    setActiveStaff(staff);
    if (typeof window !== "undefined") document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveStaff(null);
    if (typeof window !== "undefined") document.body.style.overflow = "auto";
  };

  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-cyan-500/30">
      <PageBackground>
        <Navbar />

        {/* Ambient Meshes */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-cyan-500/30 bg-[#02050f]/80 backdrop-blur-md text-cyan-400 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              <UsersIcon />
              Our Backbone
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                Supporting{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Staff
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl">
              Meet the dedicated professionals who work tirelessly behind the
              scenes to ensure the smooth operation and excellence of Mar
              Baselios Dental College.
            </p>
          </div>

          {/* =============================================================== */}
          {/* STAFF GRID                                                      */}
          {/* =============================================================== */}
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              {staffData.map((staff, index) => (
                <div
                  key={staff.id}
                  onClick={() => openLightbox(staff)}
                  style={{ animationDelay: `${(index % 8) * 100}ms` }}
                  className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)] hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8 cursor-pointer"
                >
                  {/* Staff Photo */}
                  <div className="absolute inset-0 w-full h-full">
                    <img
                      src={staff.image}
                      alt={staff.name}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 ease-in-out group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%230f172a'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='%23334155'%3E👤%3C/text%3E%3C/svg%3E";
                      }}
                    />
                  </div>

                  {/* Gradient Overlay for Text Visibility */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#02050f] via-[#02050f]/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                  {/* Expand Icon on Hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                      <ExpandIcon />
                    </div>
                  </div>

                  {/* Text Content (Name & Role) */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 flex flex-col items-center text-center translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-10 h-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] mb-4"></div>

                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                      {staff.name}
                    </h3>

                    <p className="text-sm font-medium tracking-wide text-slate-400 uppercase">
                      {staff.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State Fallback */}
            {staffData.length === 0 && (
              <div className="flex flex-col items-center justify-center h-[300px] text-center border border-dashed border-white/10 rounded-[2rem] bg-white/5">
                <UsersIcon />
                <p className="text-slate-400 mt-4 text-lg">
                  Staff directory is currently being updated.
                </p>
              </div>
            )}
          </div>
        </div>

        <Footer />

        {/* ========================================================================= */}
        {/* CINEMATIC LIGHTBOX / POP-UP                                               */}
        {/* ========================================================================= */}
        {activeStaff && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#02050f]/95 backdrop-blur-3xl animate-in fade-in duration-300">
            {/* Backdrop Click to Close */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={closeLightbox}
            ></div>

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] p-4 rounded-full bg-white/10 hover:bg-rose-500 text-white transition-all duration-300 border border-white/20 shadow-lg group hover:rotate-90 hover:scale-110 cursor-pointer"
            >
              <CloseIcon />
            </button>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-[95vw] md:max-w-[45vw] h-full flex flex-col items-center justify-center py-16 pointer-events-none">
              {/* Image Frame */}
              <div className="relative w-[80vw] sm:w-[350px] md:w-[400px] aspect-[3/4] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] bg-slate-900 pointer-events-auto">
                <img
                  src={activeStaff.image}
                  alt={activeStaff.name}
                  className="w-full h-full object-cover select-none animate-in fade-in zoom-in-95 duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%230f172a'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='%23334155'%3E👤%3C/text%3E%3C/svg%3E";
                  }}
                />

                {/* Embedded Gradient overlay inside Lightbox */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050f] via-transparent to-transparent opacity-80 pointer-events-none"></div>
              </div>

              {/* Staff Details Below Image */}
              <div className="mt-8 text-center animate-in slide-in-from-bottom-4 duration-500 pointer-events-auto">
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-wide drop-shadow-md mb-3">
                  {activeStaff.name}
                </h3>
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm font-black tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  {activeStaff.role}
                </div>
              </div>
            </div>
          </div>
        )}
      </PageBackground>
    </main>
  );
}
