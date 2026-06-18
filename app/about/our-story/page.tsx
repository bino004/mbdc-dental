"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageBackground from "@/components/PageBackground";
import Admissions from "@/components/Admissions";
import { motion, Variants } from "framer-motion";
import {
  BookOpen,
  Stethoscope,
  Users,
  Award,
  ShieldCheck,
  Sparkles,
  Building,
  GraduationCap,
  ArrowUpRight,
} from "lucide-react";

export default function OurStoryPage() {
  const stats = [
    { number: "60", label: "Annual BDS Intake", icon: Users },
    { number: "7", label: "MDS Specializations", icon: GraduationCap },
    { number: "6000+", label: "Library Volumes", icon: BookOpen },
    { number: "150+", label: "Research Journals", icon: Sparkles },
    { number: "57", label: "E-Journals", icon: ShieldCheck },
    { number: "300", label: "Hospital Beds", icon: Stethoscope },
  ];

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] as const },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <main className="overflow-hidden bg-[#01070e] font-sans text-white selection:bg-cyan-400 selection:text-black">
      <Navbar />

      <PageBackground>
        {/* CINEMATIC HERO SECTION */}
        <section className="relative flex min-h-[95vh] items-center justify-center overflow-hidden px-6 pt-40 pb-20 lg:px-20 lg:pt-48">
          {/* Animated Background Gradients */}
          <div className="absolute -right-20 top-20 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/0 blur-[160px]" />
          <div className="absolute -left-20 bottom-20 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-500/10 to-transparent blur-[140px]" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-16 lg:grid-cols-12 lg:items-center">
            {/* Left Content Column */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-6 lg:col-span-7"
            >
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[4px] text-cyan-400 backdrop-blur-md"
              >
                <Sparkles className="h-3.5 w-3.5" /> About / Our Story
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl font-black leading-[1.05] tracking-tighter sm:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
              >
                Legacy of <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Innovation
                </span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="max-w-xl text-lg text-slate-300/80 leading-relaxed md:text-xl"
              >
                Discover the story of Mar Baselios Dental College and our
                tireless commitment to shaping the next generation of dental
                healthcare innovators.
              </motion.p>
            </motion.div>

            {/* Right Side - Crisp Panoramic Single Image View Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden h-[480px] w-full lg:block lg:col-span-5"
            >
              {/* Outer structural tech framing */}
              <div className="absolute -inset-3 rounded-[36px] border border-white/5 bg-white/[0.01] backdrop-blur-3xl" />

              {/* Main Image Container */}
              <div className="relative w-full h-full overflow-hidden rounded-[28px] border border-cyan-500/30 shadow-2xl shadow-cyan-500/5 group">
                <Image
                  src="/assets/campus.jpg"
                  alt="Mar Baselios Campus Infrastructure Overview"
                  fill
                  className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                  priority
                />

                {/* Clean dark overlay gradient at the bottom for high label contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 transition-opacity duration-500 group-hover:from-black/90" />

                {/* Prominent Label Tag */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[4px] text-cyan-400 mb-1">
                      Campus Infrastructure
                    </p>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      Mar Baselios Dental College
                    </h3>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* METRICS COUNT Grid */}
        <section className="relative py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="group border-r border-white/5 bg-gradient-to-b from-transparent to-white/[0.01] p-6 text-center last:border-0 hover:bg-white/[0.03] transition-all duration-300"
                  >
                    <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-slate-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors duration-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="mt-4 text-3xl font-black tracking-tight text-white md:text-4xl">
                      {stat.number}
                    </div>
                    <div className="mt-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* TIMELINE NARRATIVE COMPONENT BLOCK */}
        <section className="py-32 lg:py-48">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="space-y-8 lg:col-span-7"
              >
                <div>
                  <span className="text-xs font-bold uppercase tracking-[6px] text-cyan-400">
                    Established 2002
                  </span>
                  <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
                    Kerala's First Self Financing{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      Dental College
                    </span>
                  </h2>
                </div>
                <div className="space-y-6 text-lg text-slate-300/90 leading-relaxed">
                  <p className="text-xl font-medium text-white">
                    Mar Baselios Dental College (MBDC), Kothamangalam, founded
                    in 2002, is proud to stand as the pioneer dental college in
                    Kerala established in the self-financing sector.
                  </p>
                  <p>
                    Managed by the visionary Mar Baselios Medical Mission Trust,
                    the institution is officially affiliated with the Kerala
                    University of Health Sciences (KUHS), Thrissur, and holds
                    strict recognition from the Dental Council of India, New
                    Delhi.
                  </p>
                  <p>
                    Today, MBDC thrives as one of the elite and most preferred
                    destinations for students across India aspiring to master
                    futuristic dental medicine and practice.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[480px] overflow-hidden rounded-[40px] border border-white/10 lg:col-span-5 shadow-2xl"
              >
                <Image
                  src="/assets/admission.jpg"
                  alt="Clinical Environment"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#01070e] via-transparent to-black/30" />
                <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-xl">
                  <span className="text-[10px] font-bold uppercase tracking-[4px] text-cyan-400">
                    Clinical Focus
                  </span>
                  <h4 className="mt-1 text-lg font-bold text-white">
                    Hands-on Patient Mentorship Ecosystem
                  </h4>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* PILLARS MATRIX SYSTEM */}
        <section className="py-24 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-20">
            <div className="mb-16">
              <span className="text-xs font-bold uppercase tracking-[6px] text-cyan-400">
                Excellence Beyond Education
              </span>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                Healthcare, Community & Legacy
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-6">
              {/* Healthcare Card */}
              <motion.div
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-b from-[#041122] to-[#010811] p-8 md:col-span-3 flex flex-col justify-between shadow-xl group hover:border-cyan-500/20 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-cyan-500/[0.02] group-hover:bg-cyan-500/[0.05] transition-colors duration-300" />
                <div>
                  <Building className="h-7 w-7 text-cyan-400" />
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Healthcare Excellence
                  </h3>
                  <p className="mt-4 text-base text-slate-400 leading-relaxed">
                    The College is directly amplified by the Mar Baselios
                    Medical Mission Hospital, a major 300-bed healthcare
                    facility at Kothamangalam, paired with two satellite dental
                    clinics.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                  Read medical mission timeline{" "}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>

              {/* Community Card */}
              <motion.div
                whileHover={{ y: -6 }}
                className="relative overflow-hidden rounded-[32px] border border-white/5 bg-gradient-to-b from-[#041122] to-[#010811] p-8 md:col-span-3 flex flex-col justify-between shadow-xl group hover:border-blue-500/20 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-blue-500/[0.02] group-hover:bg-blue-500/[0.05] transition-colors duration-300" />
                <div>
                  <Users className="h-7 w-7 text-blue-400" />
                  <h3 className="mt-6 text-2xl font-bold text-white">
                    Community Outreach
                  </h3>
                  <p className="mt-4 text-base text-slate-400 leading-relaxed">
                    Through structured rural health programmes and open oral
                    health initiatives, we bring tier-1 dentistry straight to
                    the public. High patient volumes give students expansive,
                    real-world case experiences.
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-xs font-semibold text-blue-400">
                  Explore centers <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </motion.div>

              {/* Full Width Integrated Legacy Block */}
              <motion.div className="relative overflow-hidden rounded-[40px] border border-white/5 bg-gradient-to-r from-[#031427] via-[#020d1a] to-[#01070e] p-8 md:col-span-6 lg:p-12 shadow-2xl">
                <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-indigo-500/[0.03] blur-3xl" />
                <div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-5 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-[6px] text-indigo-400">
                      Our Core Legacy
                    </span>
                    <h3 className="text-3xl font-black text-white sm:text-4xl leading-tight">
                      A Legacy of Trust, Vision & Commitment
                    </h3>
                  </div>
                  <div className="lg:col-span-7 space-y-4 text-base text-slate-400 leading-relaxed">
                    <p>
                      True to its founding milestones, Mar Baselios Dental
                      College has carved out an outstanding reputation rooted
                      deeply in academic distinctions, skill development
                      modules, and unparalleled hands-on clinical ecosystems.
                    </p>
                    <p className="border-l-2 border-indigo-500/40 pl-4 text-sm italic">
                      Guided by the divine blessings and historic intercession
                      of Patron Saint Eldo Mar Baselios, the institution
                      confidently scales new peaks, turning out ethically driven
                      and expertly capable professionals.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ADMISSIONS BANNER CTA SEAMLESS LINK */}
        <Admissions />

        <Footer />
      </PageBackground>
    </main>
  );
}
