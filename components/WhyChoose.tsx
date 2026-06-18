"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Microscope,
  GraduationCap,
  Hospital,
  Sparkles,
  ArrowUpRight,
  Calendar,
} from "lucide-react";

const cards = [
  {
    title: "Distinguished Academic Faculty",
    description:
      "Learn under acclaimed dental clinicians, published researchers, and university-recognized mentors dedicated to cultivating precise diagnostic and clinical acumen.",
    icon: GraduationCap,
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    tag: "MENTORSHIP",
  },
  {
    title: "Advanced Microscopic & Digital Labs",
    description:
      "Master modern operatory diagnostics inside advanced laboratories, featuring high-magnification microscopy, digital dental setups, and state-of-the-art simulation models.",
    icon: Microscope,
    gradient: "from-blue-500 via-indigo-600 to-purple-700",
    tag: "LABORATORIES",
  },
  {
    title: "KUHS PhD Research Centre",
    description:
      "Engage in ground-breaking molecular biology insights, genetic explorations, and dental pathology discoveries at our official KUHS-approved doctoral research hubs.",
    icon: Sparkles,
    gradient: "from-purple-500 via-fuchsia-600 to-pink-700",
    tag: "GENOMICS & RESEARCH",
  },
  {
    title: "High-Volume Clinical Practice",
    description:
      "Gain immense real-world confidence and patient-handling proficiency through expansive, direct rotations across diverse, high-volume healthcare departments.",
    icon: Hospital,
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    tag: "CLINICAL EXPOSURE",
  },
];

// 3D Kinetic Card Component
function KineticCard({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) {
  const Icon = card.icon;
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values to track absolute coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to eliminate jittery movement
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map mouse coordinate position directly to 3D rotation degrees
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate normalized values between -0.5 and 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative w-full rounded-[32px] p-[1.5px] bg-gradient-to-b from-white/20 to-transparent cursor-pointer"
    >
      {/* Dynamic Colored Shell Hull */}
      <div
        style={{ transform: "translateZ(0px)" }}
        className="relative h-full w-full rounded-[31px] bg-gradient-to-b from-[#0b1528] via-[#070d1a] to-[#040810] p-8 overflow-hidden transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
      >
        {/* Kinetic Background Color Aura Glow */}
        <div
          className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${card.gradient} opacity-20 blur-[60px] transition-all duration-700 group-hover:scale-150 group-hover:opacity-40`}
        />

        {/* Floating Structural Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="relative z-10 flex h-full flex-col justify-between">
          {/* Card Header row */}
          <div
            className="flex items-center justify-between"
            style={{ transform: "translateZ(30px)" }}
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${card.gradient} text-white shadow-lg`}
            >
              <Icon className="h-6 w-6 stroke-[2]" />
            </div>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 group-hover:text-white transition-colors">
              {card.tag}
            </span>
          </div>

          {/* Card Body Context text */}
          <div className="mt-16" style={{ transform: "translateZ(40px)" }}>
            <h3
              className={`text-2xl font-bold tracking-tight text-white transition-all duration-300 group-hover:bg-gradient-to-r ${card.gradient} group-hover:bg-clip-text group-hover:text-transparent`}
            >
              {card.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
              {card.description}
            </p>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="absolute bottom-4 right-4 text-white/5 font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          ✦
        </div>
      </div>
    </motion.div>
  );
}

export default function VibrantKineticBento() {
  return (
    <section className="relative z-10 overflow-hidden px-6 py-32 sm:px-8 lg:py-40 select-none [perspective:1200px]">
      {/* High-intensity Ambient Background Prism Blurs */}
      <div className="absolute left-[-5%] top-[10%] h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-cyan-500/20 to-purple-500/0 blur-[130px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[5%] h-[700px] w-[700px] rounded-full bg-gradient-to-bl from-blue-600/20 to-pink-500/0 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl">
        {/* ROW HEADER SECTION */}
        <div className="mb-24 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[2px] text-cyan-300 backdrop-blur-md">
              Institutional Excellence
            </div>
            <h2 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-8xl leading-[0.9] uppercase">
              Why Choose <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Mar Baselios?
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <p className="border-l-2 border-gradient-to-b from-cyan-500 via-blue-500 to-transparent pl-6 text-base sm:text-lg font-light leading-relaxed text-slate-300">
              Shaping the future of dental medicine. Mar Baselios Dental College
              integrates profound, comprehensive clinical practice with
              cutting-edge academic pedagogy to build exceptional dental
              surgeons.
            </p>
          </motion.div>
        </div>

        {/* ULTRA-KINETIC SPLIT GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* VIBRANT GLOWING HERO ANCHOR (Takes 2 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="group relative flex flex-col justify-end overflow-hidden rounded-[40px] border border-white/10 bg-[#06101e] p-8 min-h-[480px] lg:min-h-auto lg:col-span-2 shadow-2xl"
          >
            {/* Structural Campus Art Background Asset */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/assets/campus.jpg"
                alt="Mar Baselios Campus"
                fill
                priority
                className="object-cover opacity-50 saturate-125 transition-all duration-1000 ease-out group-hover:scale-105 group-hover:opacity-70 group-hover:saturate-200"
              />
              {/* Rich Indigo Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040914] via-[#040914]/40 to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#040914]/80 via-transparent to-transparent z-10" />
            </div>

            <div className="relative z-20 w-full">
              <span className="mb-2 block text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">
                FOUNDED IN 2002
              </span>
              <h3 className="text-3xl font-black text-white sm:text-4xl tracking-tight leading-tight max-w-sm">
                An Elite Ecosystem for Dental Scholars
              </h3>

              {/* Floating Vibrant Badges Grid Array */}
              <div className="mt-8 grid grid-cols-2 gap-3 w-full">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-3 backdrop-blur-md flex flex-col justify-center">
                  <div className="text-xl font-black text-white">22+ Years</div>
                  <div className="text-[9px] uppercase tracking-wider text-cyan-300 font-medium whitespace-nowrap">
                    Educational Legacy
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-4 py-3 backdrop-blur-md flex flex-col justify-center">
                  <div className="text-xl font-black text-white">
                    KUHS Centre
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-purple-300 font-medium whitespace-nowrap">
                    Approved PhD Research
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 px-4 py-3 backdrop-blur-md flex flex-col justify-center">
                  <div className="text-xl font-black text-emerald-400">
                    NAAC "A"
                  </div>
                  <div className="text-[9px] uppercase tracking-wider text-emerald-300 font-medium whitespace-nowrap">
                    Accredited Institution
                  </div>
                </div>

                {/* NEW DCI APPROVED BADGE */}
                <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-amber-500/20 to-orange-600/20 px-4 py-3 backdrop-blur-md flex flex-col justify-center">
                  <div className="text-xl font-black text-amber-400">DCI</div>
                  <div className="text-[9px] uppercase tracking-wider text-amber-300 font-medium whitespace-nowrap">
                    Approved Framework
                  </div>
                </div>
              </div>

              {/* ACADEMIC CALENDAR BUTTON */}
              <Link
                href="/academics/academic-calendar"
                className="mt-6 block w-full"
              >
                <div className="group/btn relative flex w-full items-center justify-between rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-4 shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] active:scale-[0.98]">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-white" />
                    <span className="text-sm font-black uppercase tracking-widest text-white">
                      Academic Calendar
                    </span>
                  </div>
                  <div className="rounded-full bg-white/20 p-2 transition-colors duration-300 group-hover/btn:bg-white/30">
                    <ArrowUpRight className="h-4 w-4 text-white transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </div>

            {/* Corner Action Link Icon Button */}
            <div className="absolute right-8 top-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 p-3.5 opacity-0 transform translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-45 z-20 hidden sm:block shadow-lg shadow-cyan-500/20">
              <ArrowUpRight className="h-5 w-5 text-white" />
            </div>
          </motion.div>

          {/* DYNAMIC KINETIC FEATURE TILES (Takes 3 Columns) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3">
            {cards.map((card, index) => (
              <KineticCard key={index} card={card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
