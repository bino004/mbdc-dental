"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Smile,
  Syringe,
  ShieldPlus,
  Microscope,
  Scan,
  Sparkles,
} from "lucide-react";

const departments = [
  {
    title: "Orthodontics & Dentofacial Orthopedics",
    image: "/assets/departments/ortho.webp",
    icon: Smile,
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
    badgeGlow: "bg-cyan-500/10 text-cyan-400",
    href: "/departments/orthodontics",
  },
  {
    title: "Oral & Maxillofacial Surgery",
    image: "/assets/departments/oral.webp",
    icon: Syringe,
    gradient: "from-purple-400 via-fuchsia-500 to-pink-600",
    badgeGlow: "bg-purple-500/10 text-purple-400",
    href: "/departments/oral-surgery",
  },
  {
    title: "Conservative Dentistry & Endodontics",
    image: "/assets/departments/cons.webp",
    icon: ShieldPlus,
    gradient: "from-blue-400 via-indigo-500 to-purple-600",
    badgeGlow: "bg-blue-500/10 text-blue-400",
    href: "/departments/conservative-dentistry",
  },
  {
    title: "Prosthodontics & Crown & Bridge",
    image: "/assets/departments/prostho.webp",
    icon: Microscope,
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    badgeGlow: "bg-emerald-500/10 text-emerald-400",
    href: "/departments/prosthodontics",
  },
  {
    title: "Pediatric and preventive dentistry",
    image: "/assets/departments/pediatric.webp",
    icon: Sparkles,
    gradient: "from-amber-400 via-orange-500 to-rose-500",
    badgeGlow: "bg-amber-500/10 text-amber-400",
    href: "/departments/pediatric-dentistry",
  },
  {
    title: "Periodontics",
    image: "/assets/departments/perio.webp",
    icon: Scan,
    gradient: "from-pink-400 via-rose-500 to-purple-600",
    badgeGlow: "bg-pink-500/10 text-pink-400",
    href: "/departments/periodontics",
  },
];

function DynamicGridCard({
  dept,
  index,
}: {
  dept: (typeof departments)[0];
  index: number;
}) {
  const Icon = dept.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();

    const currentX = (e.clientX - rect.left) / rect.width - 0.5;
    const currentY = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(currentX);
    y.set(currentY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={dept.href} className="block w-full outline-none group">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
        viewport={{ once: true }}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative h-[380px] w-full rounded-[32px] p-[1.5px] bg-white/[0.04] transition-all duration-500 hover:bg-gradient-to-br hover:from-white/20 hover:to-transparent cursor-pointer"
      >
        <div
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
          className="relative h-full w-full rounded-[31px] bg-gradient-to-b from-[#060a13] via-[#04070d] to-[#020408] p-8 overflow-hidden flex flex-col justify-between border border-white/[0.02]"
        >
          {/* Enhanced Visibility & High-Contrast Hover Background Layer */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-[31px]">
            <Image
              src={dept.image}
              alt={dept.title}
              fill
              sizes="(max-w-7xl) 33vw, 50vw"
              
              className="object-cover opacity-25 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-65 group-hover:contrast-125 group-hover:brightness-115"
            />
            {/* Added an automated blend utility to allow the image highlights to lift over the background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-[#020408]/30 to-[#020408]/10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-40" />
            <div
              className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${dept.gradient} opacity-0 blur-[60px] transition-opacity duration-700 group-hover:opacity-30`}
            />
          </div>

          {/* Top Row */}
          <div
            style={{ transform: "translateZ(40px)" }}
            className="relative z-10 flex items-center justify-between"
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${dept.badgeGlow}`}
            >
              <Icon className="h-5 w-5 stroke-[1.75]" />
            </div>

            <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase transition-colors duration-300 group-hover:text-slate-300">
            
            </span>
          </div>

          {/* Bottom Row */}
          <div
            style={{ transform: "translateZ(50px)" }}
            className="relative z-10"
          >
            <div className="flex items-end justify-between gap-4">
              <div>
                <h3 className="text-xl font-bold tracking-tight text-slate-100 leading-snug group-hover:text-white transition-colors duration-300 max-w-[220px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                  {dept.title}
                </h3>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-slate-400 transition-all duration-500 transform translate-y-0 opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:text-white group-hover:border-white/30 group-hover:bg-white/10 shadow-2xl">
                <ArrowUpRight className="h-5 w-5 stroke-[2] transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </div>
          </div>

          <div
            className={`absolute bottom-0 inset-x-0 h-[2.5px] bg-gradient-to-r ${dept.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
        </div>
      </motion.div>
    </Link>
  );
}

export default function MagneticGridDepartments() {
  return (
    <section className="relative z-10 overflow-hidden bg-transparent px-6 py-28 sm:px-8 lg:py-36 select-none perspective-[1200px]">
      <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-[5%] h-[600px] w-[600px] rounded-full bg-purple-500/5 blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* ROW HEADER SYSTEM */}
        <div className="mb-20 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end border-b border-white/5 pb-12">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">
              <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.25em] text-slate-400 uppercase">
                Specialized Clinical Hubs
              </span>
            </div>

            <h2 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
              Academic Wings &{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                Dental Disciplines
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm sm:text-base font-light text-slate-400 leading-relaxed">
              Explore our core departments engineered to combine specialized
              surgical workflows, advanced digital microscopy, and detailed
              clinical instruction.
            </p>
          </div>
        </div>

        {/* THE RESPONSIVE MATRIX GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <DynamicGridCard key={index} dept={dept} index={index} />
          ))}
        </div>

        {/* CENTERED BOTTOM CONTROL ZONE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center justify-center gap-6 text-center"
        >
          <p className="text-xs sm:text-sm font-medium font-sans tracking-[0.07em] text-slate-300 max-w-md leading-relaxed">
            Exploring 12 Specialized Medical & Surgical Units
          </p>

          <Link href="/departments" passHref className="group block relative">
            <button className="relative rounded-full p-[1.5px] overflow-hidden bg-white/[0.08] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:bg-gradient-to-r hover:from-cyan-500 hover:via-blue-500 hover:to-purple-500 shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">
              <div className="rounded-full bg-[#04070d]/90 backdrop-blur-xl px-10 py-4 text-xs font-mono uppercase tracking-[0.2em] text-slate-200 transition-colors duration-300 group-hover:bg-[#04070d]/40 group-hover:text-white flex items-center gap-3">
                <span>View All Departments</span>
                
                <div className="relative flex items-center justify-center w-4 h-4 overflow-hidden">
                  <span className="transform transition-transform duration-300 ease-out group-hover:translate-x-5 group-hover:-translate-y-5">
                    →
                  </span>
                  <span className="absolute -translate-x-5 translate-y-5 transform transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0 text-cyan-400">
                    →
                  </span>
                </div>
              </div>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}