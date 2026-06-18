"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// --- TYPES ---
interface Achievement {
  id: string;
  images: string[];
}

// --- MOCK DATA ---
const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    images: [
      "/assets/achievements/award-1.jpg",
      "/assets/achievements/award-2.jpg",
      "/assets/achievements/award-3.jpg",
    ],
  },
  {
    id: "ach-2",
    images: ["/assets/achievements/sports-1.jpg"],
  },
  {
    id: "ach-3",
    images: [
      "/assets/achievements/academic-1.jpg",
      "/assets/achievements/academic-2.jpg",
    ],
  },
  {
    id: "ach-4",
    images: ["/assets/achievements/cultural-1.jpg"],
  },
  {
    id: "ach-5",
    images: [
      "/assets/achievements/research-1.jpg",
      "/assets/achievements/research-2.jpg",
    ],
  },
];

// --- ICONS ---
const ArrowRightIcon = () => (
  <svg
    className="w-4 h-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);
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
const TrophyIcon = () => (
  <svg
    className="w-4 h-4 text-amber-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
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

export default function HomeAchievements() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto Scroll States
  const [isHovered, setIsHovered] = useState(false);

  // High-Performance Drag Refs (Prevents re-renders that break clicks)
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const hasDragged = useRef(false); // Detects if user swiped or clicked

  // Lightbox States
  const [activeAlbum, setActiveAlbum] = useState<Achievement | null>(null);
  const [lightboxPhotoIdx, setLightboxPhotoIdx] = useState(0);

  // --- AUTO SCROLL LOGIC ---
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isHovered && !activeAlbum) {
      interval = setInterval(() => {
        if (scrollRef.current && !isDown.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
          }
        }
      }, 3500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, activeAlbum]);

  // --- MANUAL BUTTON NAVIGATION ---
  const handleScrollLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };
  const handleScrollRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  // --- HIGH-PERFORMANCE DRAG LOGIC ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown.current = true;
    hasDragged.current = false; // Reset drag status on new click
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
    scrollRef.current.classList.add("cursor-grabbing");
    scrollRef.current.classList.remove("snap-x");
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    setIsHovered(false);
    if (scrollRef.current) {
      scrollRef.current.classList.remove("cursor-grabbing");
      scrollRef.current.classList.add("snap-x");
    }
  };

  const handleMouseUp = () => {
    isDown.current = false;
    if (scrollRef.current) {
      scrollRef.current.classList.remove("cursor-grabbing");
      scrollRef.current.classList.add("snap-x");
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;

    if (Math.abs(walk) > 5) {
      hasDragged.current = true; // Mark as dragging so we don't open the lightbox
    }

    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  // --- LIGHTBOX CONTROLS ---
  const handleCardClick = (album: Achievement, currentIdx: number) => {
    if (!hasDragged.current) {
      setActiveAlbum(album);
      setLightboxPhotoIdx(currentIdx);
      if (typeof window !== "undefined")
        document.body.style.overflow = "hidden";
    }
  };

  const closeLightbox = () => {
    setActiveAlbum(null);
    if (typeof window !== "undefined") document.body.style.overflow = "auto";
  };

  const nextLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeAlbum) {
      setLightboxPhotoIdx((prev) => (prev + 1) % activeAlbum.images.length);
    }
  };

  const prevLightboxImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeAlbum) {
      setLightboxPhotoIdx(
        (prev) =>
          (prev - 1 + activeAlbum.images.length) % activeAlbum.images.length,
      );
    }
  };

  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none mix-blend-screen"></div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* --- HEADER CONTROLS --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-black tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(245,158,11,0.15)]">
              <TrophyIcon />
              Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                Achievements
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={handleScrollLeft}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 hover:border-amber-400 hover:bg-amber-500 text-slate-300 hover:text-[#02050f] transition-all shadow-lg hover:-translate-x-1 cursor-pointer"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={handleScrollRight}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 hover:border-amber-400 hover:bg-amber-500 text-slate-300 hover:text-[#02050f] transition-all shadow-lg hover:translate-x-1 cursor-pointer"
              >
                <ChevronRight />
              </button>
            </div>

            <Link
              href="academics/achievements"
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-amber-500 hover:border-amber-400 hover:text-[#02050f] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] flex-shrink-0 cursor-pointer"
            >
              View All Achievements
              <div className="group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRightIcon />
              </div>
            </Link>
          </div>
        </div>

        {/* --- CAROUSEL TRACK --- */}
        <div
          className="relative -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-mandatory snap-x hide-scrollbar pt-4 cursor-grab select-none"
          >
            {achievementsData.map((item, index) => (
              <AchievementCard
                key={item.id}
                item={item}
                index={index}
                onCardClick={(currentIdx) => handleCardClick(item, currentIdx)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* --- CINEMATIC LIGHTBOX / POP-UP --- */}
      {activeAlbum && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#02050f]/95 backdrop-blur-3xl animate-in fade-in duration-300">
          <div
            className="absolute inset-0 cursor-zoom-out"
            onClick={closeLightbox}
          ></div>

          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] p-4 rounded-full bg-white/10 hover:bg-amber-500 text-white transition-all duration-300 border border-white/20 shadow-lg group hover:rotate-90 hover:scale-110 cursor-pointer"
          >
            <CloseIcon />
          </button>

          <div className="relative z-10 w-full max-w-[95vw] md:max-w-[85vw] h-full flex flex-col items-center justify-center py-16 pointer-events-none">
            <div className="relative w-full h-[70vh] md:h-[80vh] flex items-center justify-center group pointer-events-auto">
              {activeAlbum.images.length > 1 && (
                <button
                  onClick={prevLightboxImage}
                  className="absolute left-0 md:-left-12 z-[110] p-4 rounded-full bg-[#050b1a]/80 backdrop-blur-xl border border-slate-700 hover:bg-amber-500 hover:border-amber-400 hover:text-black text-white transition-all shadow-[0_0_40px_rgba(0,0,0,0.8)] hover:scale-110 group/btn cursor-pointer"
                >
                  <div className="group-hover/btn:-translate-x-1 transition-transform">
                    <ChevronLeft />
                  </div>
                </button>
              )}

              <div className="relative rounded-2xl md:rounded-[2rem] overflow-hidden border border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.9)] bg-black/50 flex items-center justify-center h-full w-full">
                <img
                  key={activeAlbum.images[lightboxPhotoIdx]}
                  src={activeAlbum.images[lightboxPhotoIdx]}
                  alt="Achievement View"
                  className="w-auto h-auto max-w-full max-h-full object-contain select-none animate-in fade-in duration-500"
                  onError={(e) => {
                    e.currentTarget.src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%2394a3b8'%3EImage Placement%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>

              {activeAlbum.images.length > 1 && (
                <button
                  onClick={nextLightboxImage}
                  className="absolute right-0 md:-right-12 z-[110] p-4 rounded-full bg-[#050b1a]/80 backdrop-blur-xl border border-slate-700 hover:bg-amber-500 hover:border-amber-400 hover:text-black text-white transition-all shadow-[0_0_40px_rgba(0,0,0,0.8)] hover:scale-110 group/btn cursor-pointer"
                >
                  <div className="group-hover/btn:translate-x-1 transition-transform">
                    <ChevronRight />
                  </div>
                </button>
              )}
            </div>

            {activeAlbum.images.length > 1 && (
              <div className="absolute bottom-6 left-0 right-0 text-center animate-in slide-in-from-bottom-4 duration-500 px-4">
                <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/10 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></div>
                  <p className="text-white font-bold tracking-[0.2em] text-sm uppercase">
                    Photo {lightboxPhotoIdx + 1} of {activeAlbum.images.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `,
        }}
      />
    </section>
  );
}

// ============================================================================
// SUBCOMPONENT: Achievement Card
// ============================================================================
function AchievementCard({
  item,
  index,
  onCardClick,
}: {
  item: Achievement;
  index: number;
  onCardClick: (currentIdx: number) => void;
}) {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const hasMultipleImages = item.images.length > 1;

  const nextInlineImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIdx((prev) => (prev + 1) % item.images.length);
  };

  const prevInlineImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIdx(
      (prev) => (prev - 1 + item.images.length) % item.images.length,
    );
  };

  return (
    <div
      onClick={() => onCardClick(currentImageIdx)}
      style={{ animationDelay: `${index * 100}ms` }}
      className="group snap-start flex-shrink-0 w-[75vw] sm:w-[280px] md:w-[350px] aspect-[3/4] bg-slate-900/80 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-amber-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)] animate-in fade-in slide-in-from-right-8 relative cursor-pointer hover:-translate-y-2"
    >
      {/* Expand Icon Hover Hint */}
      <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
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
        </div>
      </div>

      {/* Render Images */}
      {item.images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Achievement Image ${i + 1}`}
          draggable={false}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out select-none ${
            i === currentImageIdx
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 pointer-events-none"
          } group-hover:scale-105`}
          onError={(e) => {
            e.currentTarget.src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='800' viewBox='0 0 600 800'%3E%3Crect width='600' height='800' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23334155'%3EAchievement Image%3C/text%3E%3C/svg%3E";
          }}
        />
      ))}

      {hasMultipleImages && (
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      )}

      {/* Inline Slider Controls */}
      {hasMultipleImages && (
        <>
          <button
            onClick={prevInlineImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 hover:bg-amber-500 hover:border-amber-400 hover:text-[#02050f] shadow-lg z-30 cursor-pointer"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextInlineImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 hover:bg-amber-500 hover:border-amber-400 hover:text-[#02050f] shadow-lg z-30 cursor-pointer"
          >
            <ChevronRight />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20 pointer-events-none">
            {item.images.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
                  i === currentImageIdx ? "w-8 bg-amber-400" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
