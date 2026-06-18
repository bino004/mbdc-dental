"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import { Sparkles, X, Maximize2 } from "lucide-react";

// --- Framer Motion Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

// --- Achievements Image List ---
const achievementImages = [
  "/assets/achievements/award-1.webp",
  "/assets/achievements/award-2.webp",
  "/assets/achievements/award-3.webp",
  "/assets/achievements/award-4.webp",
  "/assets/achievements/award-5.webp",
  "/assets/achievements/award-6.webp",
  "/assets/achievements/award-7.webp",
  "/assets/achievements/award-8.webp",
];

export default function AchievementsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="overflow-x-hidden bg-[#02040a] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-white pb-32 min-h-screen">
      <Navbar />

      {/* --- LIGHTBOX POPUP --- */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 p-3 rounded-full bg-white/10 hover:bg-red-500 text-white transition-colors border border-white/20 z-50 cursor-pointer"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Achievement expanded"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <PageBackground>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="relative mx-auto max-w-[1600px] px-6 pt-48 md:px-12"
        >
          {/* BACKGROUND GLOW */}
          <div className="absolute top-[10%] left-[20%] w-[800px] h-[800px] bg-indigo-600/5 rounded-full blur-[250px] pointer-events-none mix-blend-screen" />

          {/* HEADER */}
          <header className="relative z-10 mb-20 text-center">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl"
            >
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="font-mono text-xs tracking-[0.3em] text-cyan-300 uppercase font-bold">
                Institutional Milestones
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-[7rem] font-black uppercase text-white tracking-tighter"
            >
              Achievements
            </motion.h1>
          </header>

          {/* PORTRAIT GRID */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 relative z-10"
          >
            {achievementImages.map((src, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative rounded-[2rem] overflow-hidden cursor-pointer bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 transition-all duration-500 aspect-[3/4] shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Achievement ${idx + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 fallback-bg bg-slate-900"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <Maximize2 className="w-10 h-10 text-white opacity-80" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <Footer />
      </PageBackground>
    </main>
  );
}
