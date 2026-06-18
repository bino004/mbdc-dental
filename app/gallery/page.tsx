"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

// --- TYPES ---
interface GalleryAlbum {
  id: string;
  coverSrc: string;
  title: string;
  images: string[];
}

interface YearlyGallery {
  year: string;
  albums: GalleryAlbum[];
}

// --- MOCK DATA ---
const galleryData: YearlyGallery[] = [
  {
    year: "2026",
    albums: [
      {
        id: "26-1",
        coverSrc: "/assets/gallery/2026-1.jpg",
        title: "Graduation Ceremony 2026",
        images: [
          "/assets/gallery/2026-1.jpg",
          "/assets/gallery/grad-2.jpg",
          "/assets/gallery/grad-3.jpg",
          "/assets/gallery/grad-4.jpg",
        ],
      },
      {
        id: "26-2",
        coverSrc: "/assets/gallery/2026-2.jpg",
        title: "New Campus Wing Inauguration",
        images: ["/assets/gallery/2026-2.jpg", "/assets/gallery/inaug-2.jpg"],
      },
      {
        id: "26-3",
        coverSrc: "/assets/gallery/2026-3.jpg",
        title: "Advanced Prosthodontics Workshop",
        images: ["/assets/gallery/2026-3.jpg"],
      },
      {
        id: "26-4",
        coverSrc: "/assets/gallery/2026-4.jpg",
        title: "Inter-College Sports Meet",
        images: [
          "/assets/gallery/2026-4.jpg",
          "/assets/gallery/sports-2.jpg",
          "/assets/gallery/sports-3.jpg",
        ],
      },
      {
        id: "26-5",
        coverSrc: "/assets/gallery/2026-5.jpg",
        title: "Alumni Grand Gala",
        images: ["/assets/gallery/2026-5.jpg", "/assets/gallery/alumni-2.jpg"],
      },
    ],
  },
  {
    year: "2025",
    albums: [
      {
        id: "25-1",
        coverSrc: "/assets/gallery/2025-1.jpg",
        title: "Annual Arts Festival 'Rhythm'",
        images: [
          "/assets/gallery/2025-1.jpg",
          "/assets/gallery/arts-2.jpg",
          "/assets/gallery/arts-3.jpg",
        ],
      },
      {
        id: "25-2",
        coverSrc: "/assets/gallery/2025-2.jpg",
        title: "Rural Health Dental Camp",
        images: ["/assets/gallery/2025-2.jpg", "/assets/gallery/camp-2.jpg"],
      },
      {
        id: "25-3",
        coverSrc: "/assets/gallery/2025-3.jpg",
        title: "National Oral Pathology Conference",
        images: ["/assets/gallery/2025-3.jpg"],
      },
    ],
  },
  {
    year: "2024",
    albums: [
      {
        id: "24-1",
        coverSrc: "/assets/gallery/2024-1.jpg",
        title: "College Day Celebrations",
        images: [
          "/assets/gallery/2024-1.jpg",
          "/assets/gallery/collegeday-2.jpg",
          "/assets/gallery/collegeday-3.jpg",
        ],
      },
      {
        id: "24-2",
        coverSrc: "/assets/gallery/2024-2.jpg",
        title: "Student Council Oath Taking",
        images: ["/assets/gallery/2024-2.jpg"],
      },
    ],
  },
  {
    year: "2023",
    albums: [
      {
        id: "23-1",
        coverSrc: "/assets/gallery/2023-1.jpg",
        title: "NAAC Accreditation Visit",
        images: [
          "/assets/gallery/2023-1.jpg",
          "/assets/gallery/naac-2.jpg",
          "/assets/gallery/naac-3.jpg",
        ],
      },
    ],
  },
];

// --- ICONS ---
const ChevronLeft = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);
const ChevronRight = () => (
  <svg
    className="w-8 h-8"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
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
const PhotosIcon = () => (
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
      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

export default function GalleryPage() {
  const [activeYear, setActiveYear] = useState<string>("2026");

  // Lightbox State
  const [activeAlbumIndex, setActiveAlbumIndex] = useState<number | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);

  // Current Data
  const currentYearData = galleryData.find((data) => data.year === activeYear);
  const currentAlbums = currentYearData ? currentYearData.albums : [];

  // Current active album in Lightbox
  const activeAlbum =
    activeAlbumIndex !== null ? currentAlbums[activeAlbumIndex] : null;
  const activePhotos = activeAlbum ? activeAlbum.images : [];
  const hasMultiplePhotos = activePhotos.length > 1;

  // --- MASONRY ASPECT RATIO GENERATOR ---
  const getMasonryAspectClass = (index: number) => {
    const ratios = [
      "aspect-[3/4]", // Portrait
      "aspect-square", // Square
      "aspect-[4/3]", // Landscape
      "aspect-[9/16]", // Tall Portrait
      "aspect-[4/5]", // Portrait
    ];
    return ratios[index % ratios.length];
  };

  // --- LIGHTBOX LOGIC ---
  const openLightbox = (albumIndex: number) => {
    setActiveAlbumIndex(albumIndex);
    setCurrentPhotoIndex(0);
    if (typeof window !== "undefined") document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveAlbumIndex(null);
    if (typeof window !== "undefined") document.body.style.overflow = "auto";
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotos.length > 0) {
      setCurrentPhotoIndex((prev) =>
        prev === activePhotos.length - 1 ? 0 : prev + 1,
      );
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotos.length > 0) {
      setCurrentPhotoIndex((prev) =>
        prev === 0 ? activePhotos.length - 1 : prev - 1,
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-cyan-500/30">
      <PageBackground>
        <Navbar />

        {/* Ambient Meshes */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[12s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-cyan-500/30 bg-[#02050f]/80 backdrop-blur-md text-cyan-400 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,1)]"></span>
              Event Archives
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                Campus{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Gallery
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl">
              Experience the defining moments of Mar Baselios Dental College.
              Browse through our curated albums of academic milestones, vibrant
              events, and student life.
            </p>
          </div>

          {/* =============================================================== */}
          {/* FLOATING TIMELINE DOCK (Year Selector)                          */}
          {/* =============================================================== */}
          <div className="sticky top-24 z-40 max-w-3xl mx-auto px-6 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            <div className="flex justify-center">
              <div className="inline-flex flex-wrap justify-center gap-2 bg-[#050b1a]/90 backdrop-blur-2xl border border-white/10 p-2 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative">
                {galleryData.map((data) => (
                  <button
                    key={data.year}
                    onClick={() => {
                      setActiveYear(data.year);
                      setActiveAlbumIndex(null);
                    }}
                    className={`relative min-w-[90px] px-6 py-3 rounded-full text-sm md:text-base font-black tracking-widest transition-all duration-500 overflow-hidden ${
                      activeYear === data.year
                        ? "text-[#02050f] shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {activeYear === data.year && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 z-0"></div>
                    )}
                    <span className="relative z-10">{data.year}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* =============================================================== */}
          {/* PINTEREST-STYLE MASONRY GRID (ALBUMS)                           */}
          {/* =============================================================== */}
          <div className="max-w-[1500px] mx-auto px-4 md:px-8 lg:px-12 min-h-[500px]">
            <div
              key={activeYear}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 group/gallery animate-in fade-in zoom-in-95 slide-in-from-bottom-10 duration-700"
            >
              {currentAlbums.map((album, index) => {
                const aspectClass = getMasonryAspectClass(index);

                return (
                  <div
                    key={album.id}
                    onClick={() => openLightbox(index)}
                    style={{ animationDelay: `${(index % 8) * 100}ms` }}
                    className={`break-inside-avoid mb-6 w-full relative rounded-3xl overflow-hidden cursor-pointer bg-slate-900 border border-white/5 transition-all duration-500 ease-out shadow-2xl hover:shadow-[0_20px_50px_rgba(34,211,238,0.25)] group-hover/gallery:opacity-40 hover:!opacity-100 hover:scale-[1.02] hover:z-10 animate-in fade-in slide-in-from-bottom-8 group/card inline-block ${aspectClass}`}
                  >
                    {/* Cover Image */}
                    <img
                      src={album.coverSrc}
                      alt={album.title}
                      className="w-full h-full object-cover grayscale-[15%] transition-all duration-700 ease-out group-hover/card:grayscale-0 group-hover/card:scale-110"
                      onError={(e) => {
                        e.currentTarget.src =
                          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='1000' viewBox='0 0 800 1000'%3E%3Crect width='800' height='1000' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23334155'%3EImage Placement%3C/text%3E%3C/svg%3E";
                      }}
                    />

                    {/* Dramatic Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#02050f]/90 via-transparent to-transparent opacity-70 group-hover/card:opacity-100 transition-opacity duration-500"></div>

                    {/* Top Right: Photo Count Badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                      <PhotosIcon />
                      <span className="text-xs font-bold text-white tracking-widest">
                        {album.images.length}
                      </span>
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 transition-all duration-500 delay-75">
                      <div className="flex flex-col gap-3">
                        <div className="w-10 h-1 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
                        <h3 className="text-lg md:text-xl font-bold text-white tracking-wide leading-tight drop-shadow-lg">
                          {album.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Empty State */}
            {currentAlbums.length === 0 && (
              <div className="flex flex-col items-center justify-center h-[400px] text-center border border-dashed border-slate-700 rounded-[3rem] bg-[#050b1a]/50 backdrop-blur-sm">
                <svg
                  className="w-16 h-16 text-slate-600 mb-6"
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
                <p className="text-slate-400 text-xl font-medium tracking-wide">
                  Albums for {activeYear} are currently being updated.
                </p>
              </div>
            )}
          </div>
        </div>
        <Footer />

        {/* ========================================================================= */}
        {/* UPGRADED CINEMATIC LIGHTBOX / POP-UP                                      */}
        {/* ========================================================================= */}
        {activeAlbum && (
          <div className="fixed inset-0 z-[100] flex flex-col items-center justify-between animate-in fade-in duration-300">
            {/* Dark Deep Blur Backdrop */}
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-2xl cursor-zoom-out transition-opacity duration-300"
              onClick={closeLightbox}
            ></div>

            {/* HEADER BAR (Title & Close Button) */}
            <div className="relative z-[110] w-full px-6 py-6 md:px-12 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
              <div className="flex flex-col gap-1 max-w-[80%]">
                <h2 className="text-2xl md:text-3xl font-bold text-white tracking-wide drop-shadow-md">
                  {activeAlbum.title}
                </h2>
                {hasMultiplePhotos && (
                  <p className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase drop-shadow-sm">
                    Photo {currentPhotoIndex + 1} of {activePhotos.length}
                  </p>
                )}
              </div>

              <button
                onClick={closeLightbox}
                className="p-3 rounded-full bg-white/10 hover:bg-rose-500 text-white transition-all duration-300 backdrop-blur-md border border-white/20 shadow-lg group hover:rotate-90 hover:scale-110"
              >
                <CloseIcon />
              </button>
            </div>

            {/* MAIN IMAGE VIEWER */}
            <div className="relative z-[105] flex-1 w-full flex items-center justify-center px-4 md:px-20 overflow-hidden">
              {/* Prev Button */}
              {hasMultiplePhotos && (
                <button
                  onClick={prevPhoto}
                  className="absolute left-4 md:left-8 z-[110] p-4 rounded-full bg-white/5 hover:bg-cyan-500 backdrop-blur-md border border-white/10 text-white transition-all shadow-xl hover:scale-110 hover:-translate-x-1 group"
                >
                  <ChevronLeft />
                </button>
              )}

              {/* Perfectly Floating Image (No dark wrapper box) */}
              <img
                key={activePhotos[currentPhotoIndex]} // Key forces re-render for animation on change
                src={activePhotos[currentPhotoIndex]}
                alt={`Photo ${currentPhotoIndex + 1} of ${activeAlbum.title}`}
                className="max-w-full max-h-[75vh] object-contain select-none rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.6)] animate-in zoom-in-95 fade-in duration-500"
                onError={(e) => {
                  e.currentTarget.src =
                    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%2394a3b8'%3EImage Placement%3C/text%3E%3C/svg%3E";
                }}
              />

              {/* Next Button */}
              {hasMultiplePhotos && (
                <button
                  onClick={nextPhoto}
                  className="absolute right-4 md:right-8 z-[110] p-4 rounded-full bg-white/5 hover:bg-cyan-500 backdrop-blur-md border border-white/10 text-white transition-all shadow-xl hover:scale-110 hover:translate-x-1 group"
                >
                  <ChevronRight />
                </button>
              )}
            </div>

            {/* FOOTER FILMSTRIP (Thumbnails) */}
            <div className="relative z-[110] w-full bg-gradient-to-t from-black/90 to-transparent">
              {hasMultiplePhotos && (
                <div className="max-w-5xl mx-auto px-4 pb-6 pt-10 flex gap-3 overflow-x-auto hide-scrollbar snap-x justify-center md:justify-start lg:justify-center">
                  {activePhotos.map((src, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentPhotoIndex(idx)}
                      className={`relative flex-shrink-0 h-16 md:h-20 aspect-video rounded-lg overflow-hidden transition-all duration-300 snap-center ${
                        currentPhotoIndex === idx
                          ? "ring-2 ring-cyan-400 scale-110 opacity-100 shadow-[0_0_20px_rgba(34,211,238,0.4)] mx-2"
                          : "opacity-40 hover:opacity-100 hover:scale-105"
                      }`}
                    >
                      <img
                        src={src}
                        alt="Thumbnail"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </PageBackground>

      {/* CSS to hide scrollbar for horizontal filmstrip */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </main>
  );
}
