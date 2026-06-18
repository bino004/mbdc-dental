"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, ArrowUpRight, Grid, LayoutDashboard } from "lucide-react";

const galleryItems = [
  {
    type: "video",
    src: "/assets/gallery/campus.mp4",
    title: "Campus Tour",
    category: "Virtual Tour",
    size: "large-video", // Takes 2 cols, 2 rows for a massive anchor feature
    href: "/campus/tour",
    color: "from-cyan-500/20",
  },
  {
    type: "image",
    src: "/assets/gallery/students.jpg",
    title: "Achievement",
    category: "Community",
    size: "standard",
    href: "/campus/student-life",
    color: "from-purple-500/20",
  },
  {
    type: "image",
    src: "/assets/gallery/lab.jpg",
    title: "Students Life",
    category: "Community",
    size: "standard",
    href: "/academics/labs",
    color: "from-emerald-500/20",
  },
  {
    type: "image",
    src: "/assets/gallery/clinical.jpg",
    title: "Clinical Training and Advanced Labs",
    category: "Medical and Research",
    size: "wide", // Spans 2 columns to balance out the video block
    href: "/academics/clinical-training",
    color: "from-blue-500/20",
  },
  {
    type: "image",
    src: "/assets/gallery/event.jpg",
    title: "Campus Events",
    category: "Vibe",
    size: "standard",
    href: "/campus/events",
    color: "from-rose-500/20",
  },
];

export default function BalancedDynamicGallery() {
  return (
    // CHANGED bg-[#020205] to bg-transparent so the dental particles and chain backgrounds are visible
    <section className="relative z-10 overflow-hidden bg-transparent px-4 py-28 sm:px-8 lg:px-20">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      {/* Cyber Glows */}
      <div className="absolute left-[-10%] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[20%] h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[4px] text-cyan-400"
          >
            <LayoutDashboard className="h-3.5 w-3.5" />
            <span>Media Hub</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-6 text-4xl font-black tracking-tight text-white sm:text-6xl uppercase"
          >
            Explore Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Campus Live
            </span>
          </motion.h2>
        </div>

        {/* Masterfully Balanced Bento Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[260px] lg:auto-rows-[280px]">
          {galleryItems.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className={`
                block group relative perspective-1000
                ${item.size === "large-video" ? "lg:col-span-2 lg:row-span-2 lg:h-full" : ""}
                ${item.size === "wide" ? "lg:col-span-2" : ""}
              `}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative h-full w-full overflow-hidden rounded-[30px] border border-white/5 bg-[#09090e] transition-all duration-500 ease-out group-hover:border-cyan-500/40 group-hover:shadow-[0_15px_40px_rgba(6,182,212,0.15)]"
              >
                {/* Visual Asset Container */}
                <div className="absolute inset-0 h-full w-full overflow-hidden">
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-w-7xl) 33vw, 66vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/95" />
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${item.color} to-transparent opacity-30 transition-opacity duration-500 group-hover:opacity-60`}
                />

                {/* Category Badge */}
                <div className="absolute left-6 top-6 z-20 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                    {item.category}
                  </p>
                </div>

                {/* Dynamic Floating Action Icon */}
                <div className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-400 group-hover:bg-cyan-500 group-hover:text-black">
                  {item.type === "video" ? (
                    <Play className="h-4 w-4 fill-current" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </div>

                {/* Bottom Texts */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white md:text-2xl transition-transform duration-300 group-hover:translate-x-1">
                    {item.title}
                  </h3>

                  {/* Subtle dynamic hint line */}
                  <div className="mt-3 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 group-hover:w-24" />
                  <p className="mt-2 text-xs font-medium text-cyan-400 opacity-0 transition-all duration-300 transform translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
                    Explore Space &rarr;
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Global Perfect "View All Gallery" Action Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/gallery"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]"
          >
            {/* Hover Background Gradient Slide */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 transition-transform duration-500 group-hover:translate-x-0" />

            <Grid className="h-4 w-4 text-cyan-400 transition-transform duration-500 group-hover:rotate-90" />
            <span className="relative z-10 tracking-wider uppercase">
              View Full Archive
            </span>
            <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-cyan-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
