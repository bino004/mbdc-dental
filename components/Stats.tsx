"use client";

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { GraduationCap, Users, Stethoscope, Award } from "lucide-react";

const stats = [
  {
    number: 22,
    suffix: "+",
    label: "Years of Educational Excellence",
    icon: Award,
    glow: "group-hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)] group-hover:border-cyan-500/30",
    circleBg: "bg-cyan-500/5 text-cyan-400",
  },
  {
    number: 100,
    suffix: "+",
    label: "Expert Faculty & Mentors",
    icon: Users,
    glow: "group-hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)] group-hover:border-purple-500/30",
    circleBg: "bg-purple-500/5 text-purple-400",
  },
  {
    number: 2500,
    suffix: "+",
    label: "Alumni & Global Dental Scholars",
    icon: GraduationCap,
    glow: "group-hover:shadow-[0_20px_50px_rgba(59,130,246,0.15)] group-hover:border-blue-500/30",
    circleBg: "bg-blue-500/5 text-blue-400",
  },
  {
    number: 50000,
    suffix: "+",
    label: "Patients Comfortably Treated",
    icon: Stethoscope,
    glow: "group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.15)] group-hover:border-emerald-500/30",
    circleBg: "bg-emerald-500/5 text-emerald-400",
  },
];

export default function ElegantStats() {
  return (
    <section className="relative z-10 overflow-hidden px-6 py-24 sm:px-8 lg:py-32 bg-transparent">
      {/* Soft, beautiful, layered background blurs instead of sharp grid lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-gradient-to-tr from-blue-500/5 via-indigo-500/5 to-purple-500/0 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* CLEAN EDITORIAL HEADER */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold tracking-[0.2em] text-slate-400 uppercase mb-3">
              Our Journey In Numbers
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-5xl">
              Legacy Built on{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Trust & Excellence
              </span>
            </h2>
          </motion.div>
        </div>

        {/* ELEGANT SOFT-GLASS GRID */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.21, 1.02, 0.43, 1.01],
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className={`
                  group relative rounded-[24px] border border-white/[0.06]
                  bg-white/[0.02] p-8 backdrop-blur-xl transition-all duration-500 ease-out
                  ${item.glow}
                `}
              >
                {/* Smooth Internal Glow Reveal */}
                <div className="absolute inset-0 rounded-[23px] bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Minimalist, Circular Smooth Icon Containment */}
                <div
                  className={`mb-8 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 group-hover:scale-110 ${item.circleBg}`}
                >
                  <Icon className="h-5 w-5 stroke-[1.5]" />
                </div>

                {/* Typography Block */}
                <div className="relative z-10">
                  <h3 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl flex items-baseline">
                    <CountUp
                      end={item.number}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    <span className="text-2xl font-light text-slate-400 ml-0.5 group-hover:text-white transition-colors duration-300">
                      {item.suffix}
                    </span>
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 font-light leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
