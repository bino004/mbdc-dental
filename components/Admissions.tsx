"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";

// Create a motion-optimized Next.js Link component
const MotionLink = motion(Link);

export default function Admissions() {
  return (
    <section className="relative z-10 overflow-hidden bg-transparent px-8 py-32 lg:px-20">
      {/* ambient glow */}
      <div className="absolute left-[-120px] top-[120px] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            group
            relative
            overflow-hidden
            rounded-[50px]
            border border-white/10
            min-h-[650px]
            shadow-2xl shadow-cyan-950/20
          "
        >
          {/* background image */}
          <Image
            src="/assets/admission.jpg"
            alt="Admissions"
            fill
            className="object-cover transition duration-[1800ms] group-hover:scale-110 group-hover:rotate-1"
          />

          {/* cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/70 to-[#021526]/30 transition-all duration-700 group-hover:via-[#021526]/80" />

          {/* cyan glow */}
          <div className="absolute left-[-100px] top-[100px] h-[300px] w-[300px] rounded-full bg-cyan-500/15 blur-[120px]" />

          {/* content */}
          <div className="relative z-20 flex min-h-[650px] items-center p-10 lg:p-20">
            <div className="max-w-3xl">
              {/* subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-5 uppercase tracking-[5px] text-cyan-400 font-semibold text-sm"
              >
                Admissions Open
              </motion.p>

              {/* heading */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white lg:text-7xl"
              >
                Begin Your Journey
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  At Mar Baselios
                </span>
              </motion.h2>

              {/* paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 max-w-2xl text-lg leading-8 text-slate-300/90"
              >
                Take the first step towards a future of excellence in dental
                education with advanced clinical exposure, expert mentorship and
                patient-centered learning.
              </motion.p>

              {/* buttons */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-10 flex flex-wrap gap-5"
              >
                {/* apply link */}
                <MotionLink
                  href="/apply"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 px-8 py-5 text-lg font-bold text-white shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-shadow duration-300 hover:shadow-[0_0_60px_rgba(34,211,238,0.5)] cursor-pointer"
                >
                  Apply Now
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </MotionLink>

                {/* prospectus link */}
                <MotionLink
                  href="/prospectus"
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-5 text-lg font-semibold text-white backdrop-blur-xl cursor-pointer"
                >
                  <Download className="h-5 w-5 text-cyan-400 transition-transform duration-300 group-hover:translate-y-0.5" />
                  Download Prospectus
                </MotionLink>
              </motion.div>

              {/* trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="mt-12 flex flex-wrap gap-4"
              >
                {["NAAC Accredited", "Since 2002", "Clinical Excellence"].map(
                  (item, index) => (
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        borderColor: "rgba(34,211,238,0.4)",
                      }}
                      key={index}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-300 backdrop-blur-xl transition-colors duration-300"
                    >
                      {item}
                    </motion.div>
                  ),
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
