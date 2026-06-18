"use client";

import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* HERO */}
      <div className="relative min-h-screen overflow-hidden">
        {/* VIDEO BACKGROUND */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-110 brightness-[0.72] contrast-[1.05] saturate-[1.1] animate-slowZoom"
        >
          <source src="/assets/campus.mp4" type="video/mp4" />
        </video>

        {/* OVERLAYS - Added pointer-events-none so they don't block clicks */}
        <div className="pointer-events-none absolute inset-0 z-10">
          {/* Top dark area for navbar readability */}
          <div className="absolute inset-x-0 top-0 h-[180px] bg-gradient-to-b from-black/55 via-black/20 to-transparent" />

          {/* Main cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/70 via-[#031b2d]/45 to-[#021526]/20" />
        </div>

        {/* CYAN GLOWS - Added pointer-events-none */}
        <div className="pointer-events-none absolute left-[-120px] top-[180px] h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="pointer-events-none absolute right-[-120px] bottom-[100px] h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[120px]" />

        <Navbar />

        {/* HERO CONTENT */}
        <div className="relative z-20 flex min-h-screen items-center px-8 pt-24 lg:px-20">
          <div className="w-full max-w-7xl">
            {/* LEFT CONTENT */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="max-w-3xl"
            >
              {/* HEADING */}
              <motion.h1
                variants={fadeUp}
                className="text-[2.8rem] sm:text-[3.6rem] lg:text-[5.5rem] font-semibold leading-[0.95] text-white"
              >
                <motion.span variants={fadeUp} className="block">
                  Transforming
                </motion.span>

                <motion.span variants={fadeUp} className="block">
                  Smiles With
                </motion.span>

                {/* GLOW TEXT */}
                <motion.span
                  variants={fadeUp}
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(34,211,238,0)",
                      "0 0 20px rgba(34,211,238,.35)",
                      "0 0 35px rgba(34,211,238,.5)",
                      "0 0 20px rgba(34,211,238,.35)",
                    ],
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="block bg-[linear-gradient(90deg,#67e8f9,#38bdf8,#22d3ee,#60a5fa)] bg-[length:300%_300%] animate-gradient bg-clip-text text-transparent"
                >
                  Excellence.
                </motion.span>
              </motion.h1>

              {/* CALL TO ACTION BUTTONS - Forced to z-30 and relative */}
              <motion.div
                variants={fadeUp}
                className="relative z-30 mt-10 flex flex-wrap gap-4 sm:gap-6"
              >
                {/* Admissions Button */}
                <Link
                  href="/admissions"
                  className="group relative flex cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 font-medium text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] md:px-8 select-none"
                >
                  <span>Admissions</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                {/* Campus Tour Button */}
                <Link
                  href="/about"
                  className="glass group flex cursor-pointer items-center gap-2.5 rounded-full border border-white/20 px-6 py-3.5 font-medium text-white transition-all duration-300 hover:bg-white/20 hover:scale-105 md:px-8 select-none"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/20 text-cyan-300 transition-colors duration-300 group-hover:bg-cyan-400 group-hover:text-slate-950">
                    <Play className="h-3 w-3 fill-current ml-0.5" />
                  </div>
                  <span>Explore Campus Tour</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-28 left-1/2 z-30 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs uppercase tracking-[5px] text-white/50">
              Scroll
            </p>

            <div className="flex h-14 w-8 items-start justify-center rounded-full border border-white/20 p-2">
              <motion.div
                animate={{
                  y: [0, 14, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
                className="h-2 w-2 rounded-full bg-cyan-300"
              />
            </div>
          </div>
        </motion.div>

        {/* HERO → WHY CHOOSE CONNECTION - Added pointer-events-none */}
        <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-[220px] w-full bg-gradient-to-b from-transparent via-[#06111f]/40 to-[#06111f]" />

        {/* soft cyan connection glow - Added pointer-events-none */}
        <div className="pointer-events-none absolute bottom-[-120px] left-1/2 z-10 h-[280px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>
    </section>
  );
}
