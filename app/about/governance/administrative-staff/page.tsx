"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Shield, Wrench, Monitor, ShoppingCart, X } from "lucide-react";

// --- TYPES ---
interface StaffMember {
  name: string;
  role: string;
  img: string;
}

// --- DATA STRUCTURE ---
const officeOperations = {
  id: "office-operations",
  title: "Office Operations",
  badge: "Administration Excellence",
  desc: "The organizational core orchestrating compliance, institutional accounts, and public communications.",
  icon: Shield,
  accentColor: "from-cyan-400 to-blue-600",
  shadowColor: "rgba(34,211,238,0.15)",
  staff: [
    { name: "SHAJI P.P.", role: "Manager", img: "/assets/staff/shaji.webp" },
    { name: "RAJI K.K.", role: "Cashier", img: "/assets/staff/raji.webp" },
    {
      name: "BISMOL BINOY",
      role: "Accountant",
      img: "/assets/staff/bismol.webp",
    },
    { name: "ANNU ELDHO", role: "HR Manager", img: "/assets/staff/annu.webp" },
    {
      name: "JUBIN JOY",
      role: "Public Relations Officer",
      img: "/assets/staff/jubin.webp",
    },
    {
      name: "BIBIN BASIL",
      role: "Public Relations Officer",
      img: "/assets/staff/bibin_b.webp",
    },
    { name: "BIBIN JOSE", role: "Examiner", img: "/assets/staff/bibin.webp" },
    { name: "BIJI BENNY", role: "Clerk", img: "/assets/staff/biji.webp" },
    {
      name: "JENSON P. ELDHOSE",
      role: "Office Staff",
      img: "/assets/staff/jenson.webp",
    },
  ],
};

const maintenance = {
  id: "maintenance",
  title: "Maintenance",
  badge: "Campus Upkeep",
  desc: "Safeguarding physical plant assets and ensuring a pristine, safe campus environment.",
  icon: Wrench,
  accentColor: "from-purple-400 to-indigo-600",
  shadowColor: "rgba(168,85,247,0.15)",
  staff: [
    {
      name: "BASIL GEORGE",
      role: "Supervisor",
      img: "/assets/staff/basilgeorge.webp",
    },
  ],
};

const itSystems = {
  id: "it-systems",
  title: "IT Systems",
  badge: "Digital Infrastructure",
  desc: "Preserving network integrity, data security, and providing technical support across the institution.",
  icon: Monitor,
  accentColor: "from-rose-400 to-pink-600",
  shadowColor: "rgba(244,63,94,0.15)",
  staff: [
    {
      name: "BINO THOMAS",
      role: "System Administrator",
      img: "/assets/staff/bino.webp",
    },
  ],
};

const purchasingLogistics = {
  id: "purchasing-logistics",
  title: "Purchasing & Logistics",
  badge: "Resource Control",
  desc: "Directing strategic materials procurement, storage pipelines, and institutional inventory.",
  icon: ShoppingCart,
  accentColor: "from-emerald-400 to-teal-600",
  shadowColor: "rgba(16,185,129,0.15)",
  staff: [
    { name: "NIJO P.K.", role: "Store Keeper", img: "/assets/staff/nijo.webp" },
  ],
};

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

export default function SupportStaffPage() {
  // Lightbox State
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
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-indigo-500/30 selection:text-indigo-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Meshes */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-24 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-indigo-500/30 bg-[#02050f]/80 backdrop-blur-md text-indigo-400 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
              <Shield className="w-4 h-4" />
              Elite Foundation
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative max-w-5xl">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                Administrative &{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                Support Staff
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl">
              Behind every great step at Mar Baselios Dental College is an elite
              foundation of professionals ensuring excellence, integrity, and
              seamless operations.
            </p>
          </div>

          {/* =============================================================== */}
          {/* CONTENT SECTIONS                                                */}
          {/* =============================================================== */}
          <div className="max-w-[1500px] mx-auto px-6 lg:px-16 space-y-32">
            {/* ROW 1: Office Operations */}
            <StaffSection
              data={officeOperations}
              openLightbox={openLightbox}
              gridCols="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
            />

            {/* ROW 2: Maintenance, IT, Logistics (3-Column Split Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-12">
              <div>
                <StaffSection
                  data={maintenance}
                  openLightbox={openLightbox}
                  gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-1"
                />
              </div>

              <div>
                <StaffSection
                  data={itSystems}
                  openLightbox={openLightbox}
                  gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-1"
                />
              </div>

              <div>
                <StaffSection
                  data={purchasingLogistics}
                  openLightbox={openLightbox}
                  gridCols="grid-cols-1 sm:grid-cols-2 lg:grid-cols-1"
                />
              </div>
            </div>
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
              <X className="w-8 h-8" />
            </button>

            {/* Main Content Container */}
            <div className="relative z-10 w-full max-w-[95vw] md:max-w-[45vw] h-full flex flex-col items-center justify-center py-16 pointer-events-none">
              {/* Image Frame */}
              <div className="relative w-[80vw] sm:w-[320px] md:w-[380px] aspect-[4/5] rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.8)] bg-slate-900 pointer-events-auto group">
                <Image
                  src={activeStaff.img}
                  alt={activeStaff.name}
                  fill
                  className="object-cover object-top select-none animate-in fade-in zoom-in-95 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050f] via-[#02050f]/20 to-transparent opacity-80 pointer-events-none"></div>
              </div>

              {/* Staff Details Below Image */}
              <div className="mt-8 text-center animate-in slide-in-from-bottom-4 duration-500 pointer-events-auto">
                <h3 className="text-3xl md:text-4xl font-black text-white tracking-wide drop-shadow-md mb-3">
                  {activeStaff.name}
                </h3>
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(99,102,241,0.2)]">
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

// ============================================================================
// SUBCOMPONENT: Categorized Staff Section
// ============================================================================
function StaffSection({
  data,
  openLightbox,
  gridCols,
}: {
  data: any;
  openLightbox: (staff: StaffMember) => void;
  gridCols: string;
}) {
  const Icon = data.icon;

  return (
    <div className="space-y-12 relative">
      {/* Section Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
            <Icon className={`w-5 h-5 text-white opacity-80`} />
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-black">
            {data.badge}
          </p>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-black text-white tracking-tight">
          {data.title}
        </h2>

        <div
          className={`h-[3px] w-24 rounded-full bg-gradient-to-r ${data.accentColor}`}
        />

        <p className="text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
          {data.desc}
        </p>
      </div>

      {/* Staff Grid */}
      <div className={`grid grid-cols-1 ${gridCols} gap-6 justify-items-start`}>
        {data.staff.map((member: StaffMember, mIdx: number) => (
          <div
            key={mIdx}
            onClick={() => openLightbox(member)}
            style={{
              animationDelay: `${(mIdx % 5) * 100}ms`,
              boxShadow: `0 0 0 rgba(0,0,0,0)`, // Default shadow
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = `0 15px 40px ${data.shadowColor}`;
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = `0 0 0 rgba(0,0,0,0)`;
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
            }}
            className="group relative flex flex-col rounded-3xl bg-slate-900/40 backdrop-blur-md border border-white/5 p-4 w-full max-w-[280px] cursor-pointer transition-all duration-500 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8"
          >
            {/* Image Frame */}
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-950 shadow-inner">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[15%] group-hover:grayscale-0"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='500' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%230f172a'/%3E%3Ctext x='50%25' y='45%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='40' fill='%23334155'%3E👤%3C/text%3E%3C/svg%3E";
                }}
              />

              {/* Image Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60 pointer-events-none"></div>

              {/* Hover Expand Icon */}
              <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <ExpandIcon />
                </div>
              </div>
            </div>

            {/* Text Details */}
            <div className="mt-5 space-y-2 px-2 text-center">
              <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-indigo-300 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-xs font-black tracking-widest uppercase text-slate-500">
                {member.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
