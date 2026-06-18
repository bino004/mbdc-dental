"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// --- TYPES ---
interface NewsItem {
  id: string;
  category: "Event" | "News" | "Announcement";
  date: string;
  title: string;
  description: string;
  coverImage: string;
}

// --- MOCK DATA ---
const latestNews: NewsItem[] = [
  {
    id: "news-1",
    category: "Event",
    date: "June 10, 2026",
    title: "International Dental Tech Symposium 2026",
    description:
      "Mar Baselios Dental College successfully hosted the 2026 Global Symposium on Digital Dentistry featuring hands-on CAD/CAM workshops.",
    coverImage: "/assets/news/symposium-1.jpg",
  },
  {
    id: "news-2",
    category: "News",
    date: "May 28, 2026",
    title: "MBDC Students Secure Top Ranks in KUHS",
    description:
      "We are immensely proud to announce that our final year BDS students have secured the top 5 university ranks in the recent exams.",
    coverImage: "/assets/news/ranks-1.jpg",
  },
  {
    id: "news-3",
    category: "Event",
    date: "May 15, 2026",
    title: "Mega Rural Health & Dental Camp",
    description:
      "Our Public Health Dentistry department organized a massive free dental screening and treatment camp treating over 1,200 patients.",
    coverImage: "/assets/news/camp-1.jpg",
  },
  {
    id: "news-4",
    category: "Announcement",
    date: "April 02, 2026",
    title: "Inauguration of Advanced Implantology Center",
    description:
      "The college has officially inaugurated its new Advanced Implantology Center, equipped with the latest 3D CBCT scanners.",
    coverImage: "/assets/news/implant-1.jpg",
  },
  {
    id: "news-5",
    category: "News",
    date: "March 18, 2026",
    title: "Faculty Research Published in Global Journal",
    description:
      "Dr. Linta Thomas has successfully published a groundbreaking research paper on 'Accelerated Tooth Movement'.",
    coverImage: "/assets/news/research-1.jpg",
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
    className="w-5 h-5"
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
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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

export default function HomeNews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // States for Auto Scroll & Dragging
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);
  const [dragDistance, setDragDistance] = useState(0);

  // Theme configuration based on Category
  const categoryTheme = {
    Event: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/30",
    News: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    Announcement: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  };

  // --- AUTO SCROLL LOGIC ---
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isHovered && !isDragging) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          if (scrollLeft + clientWidth >= scrollWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
          }
        }
      }, 3500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, isDragging]);

  // --- MANUAL BUTTON NAVIGATION ---
  const handleScrollLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };
  const handleScrollRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };

  // --- DRAG TO SCROLL LOGIC ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setDragDistance(0); // Reset drag distance on new click
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    setDragDistance(Math.abs(walk)); // Track how far the user dragged
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  // --- PERFECT CLICK PREVENTION LOGIC ---
  const handleCardClick = (e: React.MouseEvent) => {
    // If the user dragged their mouse more than 5 pixels, treat it as a swipe and cancel the click.
    // If they just clicked normally (dragDistance is 0), let the Next.js Link route them!
    if (dragDistance > 5) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="relative w-full py-24 bg-transparent overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none mix-blend-screen"></div>

      <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* --- HEADER CONTROLS --- */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          {/* Titles */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-xs font-black tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(34,211,238,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              Happenings
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">
              News &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                Events
              </span>
            </h2>
          </div>

          {/* Action Buttons (Prev/Next + View All) */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={handleScrollLeft}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 hover:border-cyan-400 hover:bg-cyan-500 text-slate-300 hover:text-[#02050f] transition-all shadow-lg hover:-translate-x-1 cursor-pointer"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={handleScrollRight}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900/50 backdrop-blur-md border border-white/10 hover:border-cyan-400 hover:bg-cyan-500 text-slate-300 hover:text-[#02050f] transition-all shadow-lg hover:translate-x-1 cursor-pointer"
              >
                <ChevronRight />
              </button>
            </div>

            <Link
              href="/news-and-events"
              className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-cyan-500 hover:border-cyan-400 hover:text-[#02050f] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] flex-shrink-0 cursor-pointer"
            >
              View All
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
            className={`flex overflow-x-auto gap-6 md:gap-8 pb-12 snap-mandatory hide-scrollbar pt-4 ${
              isDragging ? "snap-none cursor-grabbing" : "snap-x cursor-grab"
            }`}
          >
            {latestNews.map((item, index) => (
              <Link
                href={`/news-and-events/${item.id}`}
                key={item.id}
                onClick={handleCardClick}
                draggable={false} // Prevents default ghost-image dragging
                style={{ animationDelay: `${index * 100}ms` }}
                className={`group snap-start flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[400px] flex flex-col bg-[#050b1a]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(34,211,238,0.15)] animate-in fade-in slide-in-from-right-8 ${
                  isDragging ? "" : "hover:-translate-y-2"
                }`}
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950/50">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    draggable={false}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105 select-none"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='16' fill='%23334155'%3EImage Placement%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b1a] via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border backdrop-blur-md ${categoryTheme[item.category]}`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow relative">
                  {/* Date */}
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                    <CalendarIcon />
                    <span>{item.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Footer Arrow */}
                  <div className="mt-auto flex items-center gap-2 text-cyan-400 text-xs font-black tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                    Read Story
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
            ))}
          </div>
        </div>
      </div>

      {/* Global CSS for hiding scrollbar */}
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
