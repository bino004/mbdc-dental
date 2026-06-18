"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import Link from "next/link";
import {
  Sparkles,
  BookOpen,
  Clock,
  ShieldCheck,
  Library,
  Layers,
  BookMarked,
  FileSearch,
  MonitorPlay,
  PlayCircle,
  Users,
  Award,
  Database,
  Globe2,
  ScanLine,
  Printer,
  RefreshCw,
  FileQuestion,
  Wifi,
  Laptop,
  Palette,
  FileText,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  X,
  Maximize2,
  CalendarDays,
  Medal,
  Calendar,
} from "lucide-react";

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 20 },
  },
};

const tabContentVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.98, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.98,
    filter: "blur(8px)",
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

// --- Data ---
const libraryTabs = [
  { id: "overview", label: "Overview", icon: Library },
  { id: "services", label: "Services", icon: BookOpen },
  { id: "rules", label: "Rules", icon: ShieldCheck },
  { id: "ebsco", label: "EBSCO", icon: Database },
  { id: "ocsca", label: "OCSCA", icon: Layers },
  { id: "opac", label: "OPAC", icon: FileSearch },
  { id: "dspace", label: "DSpace", icon: Database },
  { id: "drillbit", label: "DrillBit Checker", icon: ScanLine },
  { id: "eresources", label: "E-Resources", icon: MonitorPlay },
  { id: "activities", label: "Activities", icon: Users },
  { id: "best-user", label: "Best User", icon: Award },
];

const libraryServicesList = [
  {
    name: "DSPACE",
    icon: Database,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    name: "Circulation",
    icon: RefreshCw,
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    name: "Reference",
    icon: BookMarked,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    name: "Plagiarism Checking",
    icon: ScanLine,
    color: "text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    name: "Reprographic / Scanning",
    icon: Printer,
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    name: "E-Resource access",
    icon: Globe2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    name: "Question Bank facility",
    icon: FileQuestion,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
  },
  {
    name: "Internet facility",
    icon: Wifi,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
  },
  {
    name: "Audio-visual facility",
    icon: MonitorPlay,
    color: "text-fuchsia-400",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-500/20",
  },
  {
    name: "OPAC facility",
    icon: FileSearch,
    color: "text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/20",
  },
  {
    name: "Browsing facility",
    icon: Laptop,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
  {
    name: "Colour Printing",
    icon: Palette,
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
];

const activityData = [
  {
    title: "National Library Week Exhibition",
    images: [
      "/assets/gallery/activity-1a.webp",
      "/assets/gallery/activity-1b.webp",
      "/assets/gallery/activity-1c.webp",
    ],
  },
  {
    title: "Orientation Session 2024",
    images: ["/assets/gallery/activity-2.webp"],
  },
  {
    title: "E-Resources Training Workshop",
    images: [
      "/assets/gallery/activity-3a.webp",
      "/assets/gallery/activity-3b.webp",
    ],
  },
];

const bestUserYears = ["2024", "2025", "2026", "2027"];

const getBestUserData = (year: string) => ({
  ceremony: {
    title: `Award Ceremony ${year}`,
    images: [
      `/assets/gallery/best-user-${year}-ceremony-1.webp`,
      `/assets/gallery/best-user-${year}-ceremony-2.webp`,
    ],
  },
  certificates: {
    title: `Official Certificates ${year}`,
    images: [`/assets/gallery/best-user-${year}-cert-1.webp`],
  },
  monthly: {
    title: `Monthly Winners ${year}`,
    images: [
      `/assets/gallery/best-user-${year}-jan.webp`,
      `/assets/gallery/best-user-${year}-feb.webp`,
      `/assets/gallery/best-user-${year}-mar.webp`,
      `/assets/gallery/best-user-${year}-apr.webp`,
    ],
  },
});

// --- Custom Components ---

// Universal Image Carousel Component
const ImageCarouselCard = ({
  title,
  images,
  onOpenLightbox,
  icon: Icon = ImageIcon,
  isPortrait = false,
}: {
  title: string;
  images: string[];
  onOpenLightbox: (images: string[], idx: number, title: string) => void;
  icon?: any;
  isPortrait?: boolean;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  return (
    <div className="group rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden shadow-2xl flex flex-col h-full hover:border-cyan-500/30 transition-colors duration-500 cursor-pointer">
      <div
        className={`relative w-full bg-[#050b14] overflow-hidden ${
          isPortrait ? "aspect-[3/4]" : "h-[300px] md:h-[400px]"
        }`}
        onClick={() => onOpenLightbox(images, currentIndex, title)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            src={images[currentIndex]}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover fallback-bg group-hover:scale-105 transition-transform duration-700"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="p-4 rounded-full bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/50 text-cyan-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
            <Maximize2 className="w-8 h-8" />
          </div>
        </div>

        {images.length > 1 && (
          <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={prev}
              className="p-3 cursor-pointer rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all shadow-lg hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-3 cursor-pointer rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-cyan-500 hover:border-cyan-400 transition-all shadow-lg hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10 pointer-events-none">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`block w-2.5 h-2.5 rounded-full transition-all shadow-md ${currentIndex === idx ? "bg-cyan-400 w-6" : "bg-white/50"}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 border-t border-white/5 bg-[#02040a]/80 flex-grow flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-4">
          <Icon className="w-6 h-6 text-cyan-400 shrink-0" />
          <h3 className="text-xl font-bold text-white tracking-wide">
            {title}
          </h3>
        </div>
        {images.length > 1 ? (
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-sm font-bold text-cyan-400 shrink-0">
            <ImageIcon className="w-4 h-4" /> {images.length}
          </div>
        ) : (
          <div className="w-3 h-3 rounded-full bg-indigo-500/50 shrink-0" />
        )}
      </div>
    </div>
  );
};

export default function CentralLibraryPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [activeYear, setActiveYear] = useState(bestUserYears[0]);

  // State for the Lightbox (Popup)
  const [lightboxData, setLightboxData] = useState<{
    images: string[];
    currentIndex: number;
    title: string;
  } | null>(null);

  const openLightbox = (images: string[], index: number, title: string) => {
    setLightboxData({ images, currentIndex: index, title });
  };

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxData) {
      setLightboxData({
        ...lightboxData,
        currentIndex:
          (lightboxData.currentIndex + 1) % lightboxData.images.length,
      });
    }
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxData) {
      setLightboxData({
        ...lightboxData,
        currentIndex:
          (lightboxData.currentIndex - 1 + lightboxData.images.length) %
          lightboxData.images.length,
      });
    }
  };

  return (
    <main className="overflow-x-hidden bg-[#02040a] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-white pb-32">
      <Navbar />

      {/* --- FULLSCREEN LIGHTBOX POPUP --- */}
      <AnimatePresence>
        {lightboxData && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 md:p-10 cursor-pointer"
            onClick={() => setLightboxData(null)}
          >
            <button
              onClick={() => setLightboxData(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 p-3 rounded-full bg-white/10 hover:bg-red-500 text-white transition-colors border border-white/20 z-50 cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>

            {lightboxData.images.length > 1 && (
              <>
                <button
                  onClick={prevLightboxImage}
                  className="absolute left-4 md:left-10 p-4 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-cyan-500 transition-colors z-50 cursor-pointer"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={nextLightboxImage}
                  className="absolute right-4 md:right-10 p-4 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-cyan-500 transition-colors z-50 cursor-pointer"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            <div
              className="relative max-w-7xl max-h-[85vh] w-full flex justify-center items-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightboxData.currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={lightboxData.images[lightboxData.currentIndex]}
                  alt="Expanded view"
                  className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
                />
              </AnimatePresence>

              <div className="absolute bottom-[-60px] left-0 right-0 text-center">
                <h3 className="text-2xl font-black text-white tracking-widest uppercase drop-shadow-md">
                  {lightboxData.title}
                </h3>
                {lightboxData.images.length > 1 && (
                  <p className="text-cyan-400 font-mono mt-2 text-sm drop-shadow-sm">
                    Image {lightboxData.currentIndex + 1} of{" "}
                    {lightboxData.images.length}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PageBackground>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative mx-auto max-w-[1700px] px-6 pt-48 md:px-12 xl:px-20"
        >
          {/* DEEP GLOW EFFECTS */}
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[200px] pointer-events-none mix-blend-screen" />
          <div className="absolute top-[40%] right-[10%] w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[250px] pointer-events-none mix-blend-screen" />

          {/* HERO SECTION */}
          <header className="relative z-10 border-b border-white/10 pb-16 mb-8 text-center md:text-left flex flex-col md:flex-row items-center md:items-end justify-between gap-8">
            <div>
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(6,182,212,0.1)]"
              >
                <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
                <span className="font-mono text-xs tracking-[0.3em] text-cyan-300 uppercase font-bold">
                  Knowledge Matrix // Node 01
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl lg:text-[8rem] font-black uppercase text-white tracking-tighter leading-[0.85]"
              >
                Central <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 drop-shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                  Library
                </span>
              </motion.h1>
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-400 font-medium leading-relaxed md:border-l-2 border-cyan-500/50 md:pl-8 backdrop-blur-sm max-w-lg text-center md:text-left"
            >
              A state-of-the-art knowledge repository supporting the academic
              and research endeavors of Mar Baselios Dental College.
            </motion.p>
          </header>

          {/* --- FLOATING HORIZONTAL DOCK NAVIGATION --- */}
          <motion.div
            variants={itemVariants}
            className="sticky top-24 z-50 mb-16 mx-auto flex justify-center w-full"
          >
            <div className="w-full max-w-full overflow-hidden rounded-full border border-white/10 bg-[#02040a]/70 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_20px_rgba(6,182,212,0.1)] p-2">
              <div className="flex flex-row overflow-x-auto no-scrollbar snap-x gap-2 px-2 items-center">
                {libraryTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`relative shrink-0 flex items-center justify-center px-6 py-3.5 rounded-full transition-all duration-300 snap-start group cursor-pointer ${isActive ? "text-white" : "text-slate-400 hover:text-white"}`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="horizontal-dock-indicator"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/50 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.2)]"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}

                      {!isActive && (
                        <div className="absolute inset-0 bg-white/[0.01] border border-transparent rounded-full group-hover:bg-white/[0.05] group-hover:border-white/10 transition-colors" />
                      )}

                      <div className="relative z-10 flex items-center gap-3 whitespace-nowrap">
                        <Icon
                          className={`w-4 h-4 transition-colors ${isActive ? "text-cyan-400 drop-shadow-[0_0_10px_rgba(6,182,212,0.8)]" : "opacity-70 group-hover:text-cyan-300"}`}
                        />
                        <span
                          className={`font-bold uppercase tracking-widest text-xs transition-colors ${isActive ? "font-black text-cyan-50" : ""}`}
                        >
                          {tab.label}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* DYNAMIC CONTENT AREA (FULL WIDTH) */}
          <div className="w-full relative z-10">
            <AnimatePresence mode="wait">
              {/* ---------------- OVERVIEW TAB ---------------- */}
              {activeTab === "overview" && (
                <motion.div
                  key="overview"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* About Card */}
                    <div className="group rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-xl p-10 md:p-14 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/30 hover:bg-white/[0.03] flex flex-col justify-center relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-500 to-indigo-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                      <div className="flex items-center gap-5 mb-8 relative z-10">
                        <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                          <Library className="w-8 h-8 text-cyan-400" />
                        </div>
                        <h2 className="text-3xl lg:text-4xl font-black uppercase text-white tracking-tight">
                          About The Library
                        </h2>
                      </div>
                      <p className="text-slate-300/90 leading-relaxed relative z-10 text-lg md:text-xl font-medium">
                        Mar Baselios Dental College has a state-of-the-art
                        Central Library on the campus ever since the inception
                        of the college. The location is ideal, providing easy
                        access to students and staff members. It is spacious and
                        designed to foster an optimal environment for focused
                        learning and research.
                      </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        {
                          value: "6000",
                          label: "Sq. Ft. Area",
                          color: "from-cyan-400 to-blue-500",
                        },
                        {
                          value: "184",
                          label: "Seating",
                          color: "from-blue-400 to-indigo-500",
                        },
                        {
                          value: "7054",
                          label: "Volumes",
                          color: "from-indigo-400 to-purple-500",
                        },
                        {
                          value: "1932",
                          label: "Titles",
                          color: "from-purple-400 to-pink-500",
                        },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="group cursor-pointer rounded-[2rem] border border-white/5 bg-white/[0.01] backdrop-blur-xl p-8 flex flex-col justify-center items-center text-center transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.03] hover:border-white/20 relative overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                        >
                          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div
                            className={`text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br ${stat.color} mb-3 drop-shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-500`}
                          >
                            {stat.value}
                          </div>
                          <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] relative z-10 group-hover:text-white transition-colors">
                            {stat.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Library Image */}
                    <div className="lg:col-span-2 rounded-[2.5rem] overflow-hidden border border-white/10 relative group h-[400px] lg:h-[500px] shadow-2xl cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#02040a]/90 z-10" />
                      <img
                        src="/assets/gallery/library-1.webp"
                        alt="Central Library Interior"
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000 fallback-bg bg-slate-900"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-10 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 mb-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                          <span className="text-xs font-bold text-white uppercase tracking-widest">
                            Main Hall
                          </span>
                        </div>
                        <h3 className="text-4xl lg:text-5xl font-black text-white drop-shadow-xl">
                          Interactive Reading Spaces
                        </h3>
                      </div>
                    </div>

                    {/* Journals Stat */}
                    <div className="group cursor-pointer rounded-[2.5rem] border border-indigo-500/20 bg-gradient-to-br from-indigo-950/40 to-black p-10 flex flex-col justify-center shadow-2xl transition-all duration-500 hover:border-indigo-500/50 hover:-translate-y-2">
                      <BookMarked className="w-12 h-12 text-indigo-400 mb-8 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500" />
                      <h3 className="text-7xl font-black text-white mb-2 drop-shadow-[0_0_30px_rgba(99,102,241,0.6)]">
                        70
                      </h3>
                      <p className="text-sm font-black text-indigo-300 uppercase tracking-[0.2em] mb-10">
                        Total Journals
                      </p>

                      <div className="space-y-4 mt-auto">
                        <div className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.06] transition-colors shadow-inner">
                          <div className="flex items-center gap-3">
                            <Globe2 className="w-6 h-6 text-cyan-400" />
                            <span className="text-slate-300 font-bold uppercase tracking-wider">
                              International
                            </span>
                          </div>
                          <span className="text-cyan-400 font-black text-2xl">
                            51
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:bg-white/[0.06] transition-colors shadow-inner">
                          <div className="flex items-center gap-3">
                            <BookOpen className="w-6 h-6 text-indigo-400" />
                            <span className="text-slate-300 font-bold uppercase tracking-wider">
                              National
                            </span>
                          </div>
                          <span className="text-indigo-400 font-black text-2xl">
                            19
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Video Tour */}
                    <div className="lg:col-span-2 rounded-[2.5rem] overflow-hidden border border-white/10 relative h-[400px] lg:h-[450px] bg-black group shadow-2xl cursor-pointer">
                      <video
                        className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/assets/gallery/library-video-poster.webp"
                      >
                        <source
                          src="/assets/videos/library-tour.mp4"
                          type="video/mp4"
                        />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent opacity-80" />
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-6 rounded-full bg-cyan-500/20 backdrop-blur-xl border border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-shadow duration-500 cursor-pointer"
                        >
                          <PlayCircle className="w-16 h-16 text-cyan-300" />
                        </motion.button>
                      </div>
                      <div className="absolute top-8 left-8 z-20 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                        <span className="text-sm font-black text-white uppercase tracking-widest flex items-center gap-3">
                          <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]" />{" "}
                          Virtual Tour
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-8">
                      <div className="group cursor-pointer rounded-[2.5rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-950/40 to-transparent p-8 lg:p-10 flex items-start gap-6 flex-1 shadow-2xl transition-all duration-500 hover:border-cyan-500/50 hover:bg-cyan-900/30 hover:-translate-y-2">
                        <Clock className="w-12 h-12 text-cyan-400 shrink-0 group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                        <div>
                          <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2">
                            Operating Hours
                          </h3>
                          <p className="text-4xl font-black text-white drop-shadow-md">
                            8 AM <span className="text-cyan-400">-</span> 9 PM
                          </p>
                          <p className="text-xs font-bold uppercase tracking-widest text-cyan-400 mt-4 bg-cyan-500/10 inline-block px-4 py-2 rounded-lg border border-cyan-500/20">
                            All Working Days
                          </p>
                        </div>
                      </div>

                      <div className="group cursor-pointer rounded-[2.5rem] border border-green-500/20 bg-gradient-to-br from-green-950/20 to-transparent backdrop-blur-xl p-8 lg:p-10 flex items-start gap-6 flex-1 shadow-2xl transition-all duration-500 hover:border-green-500/50 hover:bg-green-900/20 hover:-translate-y-2">
                        <ShieldCheck className="w-12 h-12 text-green-400 shrink-0 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                        <div>
                          <h3 className="text-sm font-black text-white uppercase tracking-widest mb-3">
                            24/7 Security
                          </h3>
                          <p className="text-base text-slate-400 leading-relaxed font-medium">
                            The premises are under constant CCTV camera
                            surveillance ensuring a highly secure academic
                            environment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ---------------- LIBRARY SERVICES TAB ---------------- */}
              {activeTab === "services" && (
                <motion.div
                  key="services"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-8"
                >
                  <div className="group rounded-[3rem] border border-white/10 bg-white/[0.01] backdrop-blur-2xl p-12 lg:p-16 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none transform translate-x-1/3 -translate-y-1/3" />
                    <div className="flex items-center gap-6 mb-6 relative z-10">
                      <div className="p-5 bg-blue-500/10 border border-blue-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                        <Layers className="w-10 h-10 text-blue-400" />
                      </div>
                      <h2 className="text-4xl lg:text-5xl font-black uppercase text-white tracking-tight">
                        Integrated Services
                      </h2>
                    </div>
                    <p className="text-slate-300/90 leading-relaxed max-w-5xl relative z-10 text-xl font-medium">
                      The Central Library extends an extensive suite of services
                      strategically designed in support of the academic and
                      high-level research work conducted by our faculty and
                      students.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {libraryServicesList.map((service, idx) => {
                      const Icon = service.icon;
                      return (
                        <div
                          key={idx}
                          className="group cursor-pointer relative rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-xl p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.03] hover:border-white/10 overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                        >
                          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <div
                            className={`p-5 rounded-2xl mb-8 w-fit border ${service.bg} ${service.border} group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                          >
                            <Icon className={`w-10 h-10 ${service.color}`} />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 relative z-10 group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </h3>
                          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* ---------------- LIBRARY RULES TAB ---------------- */}
              {activeTab === "rules" && (
                <motion.div
                  key="rules"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col justify-center items-center p-12 lg:p-24 rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-2xl shadow-2xl min-h-[600px] relative overflow-hidden"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[250px] pointer-events-none" />

                  <ShieldCheck className="w-28 h-28 text-cyan-400 mb-10 drop-shadow-[0_0_40px_rgba(6,182,212,0.5)]" />
                  <h2 className="text-5xl lg:text-7xl font-black uppercase text-white tracking-tight mb-8 relative z-10 text-center">
                    Library Rules
                  </h2>
                  <p className="text-slate-400 max-w-4xl text-center text-xl lg:text-2xl mb-16 relative z-10 leading-relaxed font-medium">
                    Ensure you are familiar with the operational protocols and
                    strict code of conduct for both the physical and digital
                    library ecosystems.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-8 relative z-10 w-full max-w-5xl">
                    <Link
                      href="/academics/central-library-rules.pdf"
                      target="_blank"
                      className="flex-1 group cursor-pointer flex flex-col items-center justify-center gap-6 p-12 rounded-[2.5rem] border border-cyan-500/30 bg-gradient-to-br from-cyan-950/40 to-transparent hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-500 hover:-translate-y-3 shadow-xl hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)]"
                    >
                      <FileText className="w-16 h-16 text-cyan-400 group-hover:scale-110 transition-transform duration-500" />
                      <span className="font-black uppercase tracking-widest text-white text-xl text-center">
                        Central Library Rules
                      </span>
                    </Link>
                    <Link
                      href="/academics/digital-library-rules.pdf"
                      target="_blank"
                      className="flex-1 group cursor-pointer flex flex-col items-center justify-center gap-6 p-12 rounded-[2.5rem] border border-indigo-500/30 bg-gradient-to-br from-indigo-950/40 to-transparent hover:bg-indigo-500/10 hover:border-indigo-400 transition-all duration-500 hover:-translate-y-3 shadow-xl hover:shadow-[0_20px_50px_rgba(99,102,241,0.2)]"
                    >
                      <MonitorPlay className="w-16 h-16 text-indigo-400 group-hover:scale-110 transition-transform duration-500" />
                      <span className="font-black uppercase tracking-widest text-white text-xl text-center">
                        Digital Library Rules
                      </span>
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* ---------------- EXTERNAL PORTAL TABS (EBSCO, OCSCA, OPAC, DSpace) ---------------- */}
              {["ebsco", "ocsca", "opac", "dspace"].includes(activeTab) && (
                <motion.div
                  key={activeTab}
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col justify-center p-12 lg:p-24 rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-2xl shadow-2xl min-h-[600px] relative overflow-hidden"
                >
                  <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[250px] pointer-events-none transform -translate-y-1/2 translate-x-1/4" />

                  <div className="max-w-5xl relative z-10">
                    <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-3xl w-fit mb-12">
                      {activeTab === "ebsco" && (
                        <Database className="w-16 h-16 text-blue-400" />
                      )}
                      {activeTab === "ocsca" && (
                        <Layers className="w-16 h-16 text-indigo-400" />
                      )}
                      {activeTab === "opac" && (
                        <FileSearch className="w-16 h-16 text-cyan-400" />
                      )}
                      {activeTab === "dspace" && (
                        <Database className="w-16 h-16 text-emerald-400" />
                      )}
                    </div>

                    <h2 className="text-5xl lg:text-7xl font-black uppercase text-white tracking-tighter mb-8">
                      {activeTab === "ebsco" && "Dentistry & Oral Sciences"}
                      {activeTab === "ocsca" && "OCSCA Framework"}
                      {activeTab === "opac" && "OPAC Gateway"}
                      {activeTab === "dspace" && "DSpace Repository"}
                    </h2>

                    <p className="text-slate-300 text-xl lg:text-2xl leading-relaxed mb-12 max-w-4xl font-medium">
                      {activeTab === "ebsco" &&
                        "With Dentistry & Oral Sciences Source, practitioners have a definitive place to start their online research. This database offers complete coverage for oral sciences journals with full text, indexing, and abstracts."}
                      {activeTab === "ocsca" &&
                        "The Online Customized Software for College Automation (OCSCA) provides an integrated, seamless digital ecosystem to manage library modules alongside broader college operations efficiently."}
                      {activeTab === "opac" &&
                        "Online Public Access Catalogue (OPAC) enables members to search or check the status of any book in the library from anywhere through the official MBDC digital infrastructure."}
                      {activeTab === "dspace" &&
                        "The institutional repository consisting of scholarly articles, simulation videos, e-books, e-thesis, e-question papers, and library dissertations to make teaching and research highly efficient."}
                    </p>

                    <Link
                      href={
                        activeTab === "ebsco"
                          ? "/ebsco-portal"
                          : activeTab === "ocsca"
                            ? "https://mbdcollege.co.in/index.aspx"
                            : activeTab === "opac"
                              ? "https://mbdcollege.co.in/ocsca_Member_Searchbooks.aspx"
                              : "http://172.17.17.167:8080/jspui/"
                      }
                      target={activeTab === "ebsco" ? "_self" : "_blank"}
                      className="group cursor-pointer inline-flex items-center gap-5 px-12 py-6 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-black uppercase tracking-widest text-lg hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] hover:-translate-y-1"
                    >
                      Initialize Link{" "}
                      <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )}

              {/* ---------------- DRILLBIT TAB ---------------- */}
              {activeTab === "drillbit" && (
                <motion.div
                  key="drillbit"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="flex flex-col justify-center items-center text-center p-12 lg:p-24 rounded-[3rem] border border-white/5 bg-white/[0.01] backdrop-blur-2xl shadow-2xl min-h-[600px] relative overflow-hidden"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-500/10 rounded-full blur-[250px] pointer-events-none" />

                  <div className="relative z-10 p-8 bg-rose-500/10 rounded-full border border-rose-500/20 mb-12 shadow-inner">
                    <ScanLine className="w-24 h-24 text-rose-400 drop-shadow-[0_0_30px_rgba(244,63,94,0.6)]" />
                  </div>
                  <h2 className="relative z-10 text-5xl lg:text-7xl font-black uppercase text-white tracking-tighter mb-8">
                    DrillBit & CheckerX
                  </h2>
                  <p className="relative z-10 text-slate-300 max-w-4xl leading-relaxed text-xl lg:text-2xl font-medium">
                    The software ’DrillBit’ and ‘Plagiarism CheckerX’ is
                    strictly integrated into the Central Library to ensure that
                    all research papers and thesis sent for publication are
                    absolutely authentic and 100% plagiarism free.
                  </p>
                </motion.div>
              )}

              {/* ---------------- E-RESOURCES TAB ---------------- */}
              {activeTab === "eresources" && (
                <motion.div
                  key="eresources"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-6"
                >
                  <div className="p-12 lg:p-20 rounded-[3rem] border border-white/10 bg-gradient-to-br from-[#050b14] to-[#02040a] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

                    <h2 className="text-5xl lg:text-6xl font-black uppercase text-white tracking-tight mb-6 relative z-10">
                      E-Resources Matrix
                    </h2>
                    <p className="text-slate-400 mb-12 max-w-3xl text-xl font-medium relative z-10">
                      Access our highly curated collection of premium digital
                      databases, scholarly journals, and vast online dental
                      libraries.
                    </p>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <Link
                          key={idx}
                          href={`/eresource-${idx + 1}`}
                          className="group cursor-pointer flex flex-col items-start gap-6 p-10 rounded-[2rem] border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]"
                        >
                          <MonitorPlay className="w-12 h-12 text-cyan-400 group-hover:scale-110 group-hover:text-cyan-300 transition-transform duration-500" />
                          <div>
                            <h3 className="text-xl font-black text-white uppercase tracking-widest mb-2">
                              E-Resource 0{idx + 1}
                            </h3>
                            <p className="text-sm font-bold text-slate-500 uppercase tracking-wider group-hover:text-cyan-400 transition-colors">
                              Access Portal{" "}
                              <ExternalLink className="inline w-3 h-3 mb-0.5 ml-1" />
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ---------------- LIBRARY ACTIVITIES TAB ---------------- */}
              {activeTab === "activities" && (
                <motion.div
                  key="activities"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-10"
                >
                  <div className="flex items-center gap-6 mb-10 bg-white/[0.02] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl">
                    <div className="p-5 bg-purple-500/10 border border-purple-500/20 rounded-2xl shrink-0">
                      <Users className="w-12 h-12 text-purple-400" />
                    </div>
                    <div>
                      <h2 className="text-4xl lg:text-5xl font-black uppercase text-white tracking-tighter">
                        Library Activities
                      </h2>
                      <p className="text-slate-400 mt-2 text-lg font-medium">
                        Exhibitions, training workshops, and academic
                        orientations.
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activityData.map((activity, idx) => (
                      <ImageCarouselCard
                        key={idx}
                        title={activity.title}
                        images={activity.images}
                        onOpenLightbox={openLightbox}
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ---------------- BEST LIBRARY USER TAB ---------------- */}
              {activeTab === "best-user" && (
                <motion.div
                  key="best-user"
                  variants={tabContentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="space-y-10"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-6 bg-white/[0.02] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl">
                    <div className="flex items-center gap-6">
                      <div className="p-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl shrink-0">
                        <Award className="w-12 h-12 text-amber-400" />
                      </div>
                      <div>
                        <h2 className="text-4xl lg:text-5xl font-black uppercase text-white tracking-tighter">
                          Best Library User
                        </h2>
                        <p className="text-slate-400 mt-2 text-lg font-medium">
                          Honoring academic dedication and extensive library
                          utilization.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mb-12">
                    <div className="flex items-center gap-3 mb-6 px-4">
                      <Calendar className="w-6 h-6 text-cyan-400" />
                      <h3 className="text-lg font-black uppercase tracking-widest text-white">
                        Select Academic Year
                      </h3>
                    </div>

                    <div className="flex overflow-x-auto pb-4 gap-4 snap-x no-scrollbar px-2">
                      {bestUserYears.map((year) => (
                        <button
                          key={year}
                          onClick={() => setActiveYear(year)}
                          className={`shrink-0 cursor-pointer px-12 py-5 rounded-full text-lg font-black uppercase tracking-widest transition-all duration-300 snap-start hover:-translate-y-1 ${
                            activeYear === year
                              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_10px_30px_rgba(6,182,212,0.5)]"
                              : "bg-white/[0.03] border border-white/10 text-slate-400 hover:bg-white/[0.1] hover:text-white hover:border-cyan-500/50"
                          }`}
                        >
                          {year}
                        </button>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeYear}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.4 }}
                      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                      <div className="md:col-span-1">
                        <ImageCarouselCard
                          title={getBestUserData(activeYear).ceremony.title}
                          images={getBestUserData(activeYear).ceremony.images}
                          onOpenLightbox={openLightbox}
                          icon={Medal}
                          isPortrait={true}
                        />
                      </div>

                      <div className="md:col-span-1">
                        <ImageCarouselCard
                          title={getBestUserData(activeYear).certificates.title}
                          images={
                            getBestUserData(activeYear).certificates.images
                          }
                          onOpenLightbox={openLightbox}
                          icon={FileText}
                          isPortrait={true}
                        />
                      </div>

                      <div className="md:col-span-2 lg:col-span-1">
                        <ImageCarouselCard
                          title={getBestUserData(activeYear).monthly.title}
                          images={getBestUserData(activeYear).monthly.images}
                          onOpenLightbox={openLightbox}
                          icon={CalendarDays}
                          isPortrait={true}
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
         <Footer/>
      </PageBackground>
    </main>
  );
}
