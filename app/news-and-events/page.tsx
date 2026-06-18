"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

// --- TYPES ---
interface NewsItem {
  id: string;
  category: "Event" | "News" | "Announcement";
  date: string;
  title: string;
  description: string;
  images: string[];
}

// --- MOCK DATA ---
const newsAndEventsData: NewsItem[] = [
  {
    id: "news-1",
    category: "Event",
    date: "June 10, 2026",
    title: "International Dental Tech Symposium 2026",
    description:
      "Mar Baselios Dental College successfully hosted the 2026 Global Symposium on Digital Dentistry. Over 500 delegates from across the world attended the 3-day event featuring hands-on CAD/CAM workshops and guest lectures by renowned prosthodontists.",
    images: [
      "/assets/news/symposium-1.jpg",
      "/assets/news/symposium-2.jpg",
      "/assets/news/symposium-3.jpg",
    ],
  },
  {
    id: "news-2",
    category: "News",
    date: "May 28, 2026",
    title: "MBDC Students Secure Top Ranks in KUHS Exams",
    description:
      "We are immensely proud to announce that our final year BDS students have secured the top 5 university ranks in the recent Kerala University of Health Sciences (KUHS) examinations. Congratulations to the students and guiding faculty!",
    images: [
      "/assets/news/ranks-1.jpg", // Single image
    ],
  },
  {
    id: "news-3",
    category: "Event",
    date: "May 15, 2026",
    title: "Mega Rural Health & Dental Camp in Kothamangalam",
    description:
      "Our Public Health Dentistry department organized a massive free dental screening and treatment camp in the rural outskirts. Over 1,200 patients were treated using our state-of-the-art mobile dental clinics.",
    images: ["/assets/news/camp-1.jpg", "/assets/news/camp-2.jpg"],
  },
  {
    id: "news-4",
    category: "Announcement",
    date: "April 02, 2026",
    title: "Inauguration of the Advanced Implantology Center",
    description:
      "The college has officially inaugurated its new Advanced Implantology Center, equipped with the latest 3D CBCT scanners and guided surgery kits, providing unparalleled resources for our MDS postgraduates.",
    images: [
      "/assets/news/implant-1.jpg",
      "/assets/news/implant-2.jpg",
      "/assets/news/implant-3.jpg",
      "/assets/news/implant-4.jpg",
    ],
  },
  {
    id: "news-5",
    category: "News",
    date: "March 18, 2026",
    title: "Faculty Research Published in Global Journal",
    description:
      "Dr. Linta Thomas from the Department of Orthodontics has successfully published a groundbreaking research paper on 'Accelerated Tooth Movement' in the prestigious International Journal of Orthodontics.",
    images: [
      "/assets/news/research-1.jpg", // Single image
    ],
  },
  {
    id: "news-6",
    category: "Event",
    date: "February 22, 2026",
    title: "Annual Arts and Cultural Fest 'Rhythm 2026'",
    description:
      "A spectacular showcase of talent! Students and faculty came together to celebrate Rhythm 2026, featuring incredible dance performances, musical bands, and theatrical acts over two vibrant days.",
    images: [
      "/assets/news/arts-1.jpg",
      "/assets/news/arts-2.jpg",
      "/assets/news/arts-3.jpg",
    ],
  },
];

// --- ICONS ---
const ChevronLeft = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRight = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
    className="w-5 h-5"
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
const CalendarIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export default function NewsAndEventsPage() {
  // --- LIGHTBOX STATE ---
  const [activeLightboxItem, setActiveLightboxItem] = useState<NewsItem | null>(
    null,
  );
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number>(0);

  const openLightbox = (item: NewsItem, initialIndex: number) => {
    setActiveLightboxItem(item);
    setLightboxImageIndex(initialIndex);
    if (typeof window !== "undefined") document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveLightboxItem(null);
    if (typeof window !== "undefined") document.body.style.overflow = "auto";
  };

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxItem) {
      setLightboxImageIndex(
        (prev) => (prev + 1) % activeLightboxItem.images.length,
      );
    }
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxItem) {
      setLightboxImageIndex(
        (prev) =>
          (prev - 1 + activeLightboxItem.images.length) %
          activeLightboxItem.images.length,
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-cyan-500/30">
      <PageBackground>
        <Navbar />

        {/* Ambient Tech Glows */}
        <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-500/40 bg-[#02050f]/80 backdrop-blur-md text-cyan-300 text-xs font-black tracking-[0.3em] uppercase mb-8 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Latest Updates
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                News &{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Events
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl">
              Stay informed with the latest happenings, academic achievements,
              announcements, and cultural events at Mar Baselios Dental College.
            </p>
          </div>

          {/* =============================================================== */}
          {/* NEWS & EVENTS GRID                                              */}
          {/* =============================================================== */}
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsAndEventsData.map((item, index) => (
                <NewsCard
                  key={item.id}
                  item={item}
                  index={index}
                  openLightbox={openLightbox}
                />
              ))}
            </div>
          </div>
        </div>

        <Footer />

        {/* ========================================================================= */}
        {/* CINEMATIC LIGHTBOX / POP-UP                                               */}
        {/* ========================================================================= */}
        {activeLightboxItem && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-between animate-in fade-in duration-300">
            {/* Dark Deep Blur Backdrop */}
            <div
              className="absolute inset-0 bg-[#02050f]/95 backdrop-blur-3xl cursor-pointer"
              onClick={closeLightbox}
            ></div>

            {/* Header / Close Button */}
            <div className="relative z-[110] w-full px-6 py-6 flex justify-between items-start pointer-events-none">
              <div className="flex flex-col gap-1 max-w-[80%]">
                <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide drop-shadow-md">
                  {activeLightboxItem.title}
                </h2>
                {activeLightboxItem.images.length > 1 && (
                  <p className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase drop-shadow-sm">
                    Image {lightboxImageIndex + 1} of{" "}
                    {activeLightboxItem.images.length}
                  </p>
                )}
              </div>

              <button
                onClick={closeLightbox}
                className="pointer-events-auto p-3 rounded-full bg-white/10 hover:bg-rose-500 text-white transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg group hover:rotate-90 hover:scale-110"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Main Image Viewer */}
            <div className="relative z-[105] flex-1 w-full flex items-center justify-center px-4 md:px-20 overflow-hidden pointer-events-none">
              {/* Prev Button */}
              {activeLightboxItem.images.length > 1 && (
                <button
                  onClick={prevLightboxImage}
                  className="pointer-events-auto absolute left-4 md:left-10 z-[110] p-4 rounded-full bg-white/5 hover:bg-cyan-500 backdrop-blur-xl border border-white/10 text-white transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:scale-110 hover:-translate-x-1 group"
                >
                  <ChevronLeft />
                </button>
              )}

              {/* Floating Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10 bg-black/50 flex items-center justify-center h-full max-h-[75vh] w-full pointer-events-auto">
                <img
                  key={activeLightboxItem.images[lightboxImageIndex]}
                  src={activeLightboxItem.images[lightboxImageIndex]}
                  alt={`${activeLightboxItem.title} - Image ${lightboxImageIndex + 1}`}
                  className="w-auto h-auto max-w-full max-h-[75vh] object-contain select-none animate-in fade-in duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%2394a3b8'%3EImage Placement%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {/* Next Button */}
              {activeLightboxItem.images.length > 1 && (
                <button
                  onClick={nextLightboxImage}
                  className="pointer-events-auto absolute right-4 md:right-10 z-[110] p-4 rounded-full bg-white/5 hover:bg-cyan-500 backdrop-blur-xl border border-white/10 text-white transition-all shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:scale-110 hover:translate-x-1 group"
                >
                  <ChevronRight />
                </button>
              )}
            </div>

            {/* Bottom Spacing */}
            <div className="h-16 w-full"></div>
          </div>
        )}
      </PageBackground>
    </main>
  );
}

// ============================================================================
// SUBCOMPONENT: News Card with Separated Link & Lightbox interactions
// ============================================================================
function NewsCard({
  item,
  index,
  openLightbox,
}: {
  item: NewsItem;
  index: number;
  openLightbox: (item: NewsItem, index: number) => void;
}) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const hasMultipleImages = item.images.length > 1;

  // Theme configuration based on Category
  const categoryTheme = {
    Event:
      "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30 shadow-[0_0_15px_rgba(217,70,239,0.3)]",
    News: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.3)]",
    Announcement:
      "bg-amber-500/10 text-amber-400 border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.3)]",
  };

  const nextInlineImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents opening the lightbox
    setCurrentImageIdx((prev) => (prev + 1) % item.images.length);
  };

  const prevInlineImage = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents opening the lightbox
    setCurrentImageIdx(
      (prev) => (prev - 1 + item.images.length) % item.images.length,
    );
  };

  return (
    <div
      style={{ animationDelay: `${index * 150}ms` }}
      className="group flex flex-col bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-[2rem] overflow-hidden hover:border-cyan-500/40 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)] animate-in fade-in slide-in-from-bottom-12 hover:-translate-y-2"
    >
      {/* 1. IMAGE SECTION (Click opens Lightbox) */}
      <div
        onClick={() => openLightbox(item, currentImageIdx)}
        className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950 cursor-pointer group/img"
      >
        {/* Render Images */}
        {item.images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`${item.title} - Image ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
              i === currentImageIdx
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105 pointer-events-none"
            } group-hover/img:scale-105`}
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Crect width='800' height='500' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23334155'%3EImage Placement%3C/text%3E%3C/svg%3E";
            }}
          />
        ))}

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80 pointer-events-none"></div>

        {/* Expand Icon (Appears on Hover) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
          <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-75 group-hover/img:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <ExpandIcon />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span
            className={`px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase border backdrop-blur-md ${categoryTheme[item.category]}`}
          >
            {item.category}
          </span>
        </div>

        {/* Inline Slider Controls (Only visible if >1 image and hovered) */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevInlineImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-400 shadow-lg z-30"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={nextInlineImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 hover:bg-cyan-500 hover:border-cyan-400 shadow-lg z-30"
            >
              <ChevronRight />
            </button>

            {/* Slider Dots Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5 z-20 pointer-events-none">
              {item.images.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentImageIdx
                      ? "w-6 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                      : "w-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* 2. TEXT CONTENT & LINK SECTION (Click routes to Article Page) */}
      {/* We wrap the entire text block in a Next.js Link so clicking it routes to the article */}
      <Link
        href={`/news-and-events/${item.id}`}
        className="flex flex-col flex-grow p-8 cursor-pointer group/link"
      >
        {/* Date */}
        <div className="flex items-center gap-2 text-slate-400 text-sm font-semibold mb-4">
          <CalendarIcon />
          <span>{item.date}</span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-snug group-hover/link:text-cyan-300 transition-colors duration-300 line-clamp-2">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 flex-grow line-clamp-3">
          {item.description}
        </p>

        {/* Read More Footer */}
        <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-black tracking-widest text-slate-500 uppercase group-hover/link:text-cyan-400 transition-colors">
            Read Full Article
          </span>
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover/link:bg-cyan-500 group-hover/link:text-[#02050f] transition-all duration-300 shadow-lg group-hover/link:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
            <svg
              className="w-4 h-4 -rotate-45 group-hover/link:rotate-0 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </div>
  );
}
