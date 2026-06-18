"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  // Custom, high-fidelity SVGs built to exactly match the 24px Lucide aesthetic
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <polygon points="10 15 15 12 10 9" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative z-10 overflow-hidden bg-transparent px-6 pt-32 pb-12 lg:px-20 border-t border-white/5">
      {/* Premium Ambient Light Mechanics */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* Central Top Laser-Glow */}
        <div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-b from-cyan-500/20 to-transparent blur-[140px]" />
        {/* Cyberpunk Structural Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Kinetic Neon Laser Header Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse duration-3000" />

      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        {/* LEFT - BRAND ARCHITECTURE */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 group">
              <div className="relative p-1.5 rounded-2xl bg-white/5 border border-white/10 group-hover:border-cyan-400/40 transition-all duration-500">
                <Image
                  src="/assets/baselioslogo.webp"
                  alt="College Logo"
                  width={64}
                  height={64}
                  className="rounded-xl object-cover filter brightness-110"
                />
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-tight text-white group-hover:text-cyan-300 transition-colors duration-300">
                  Mar Baselios
                </h3>
                <p className="text-xs uppercase tracking-[4px] font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Dental College
                </p>
              </div>
            </div>

            <p className="mt-8 text-md leading-relaxed text-slate-400 font-light tracking-wide max-w-sm">
              Excellence in dental education since 2002, shaping future
              professionals through innovation, patient care, and advanced
              clinical training.
            </p>
          </div>

          {/* Premium Social Media Orbs - Rendered with Custom SVGs */}
          <div className="mt-8 flex gap-4">
            {socialLinks.map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                whileHover={{ y: -6, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="
                  flex h-12 w-12 cursor-pointer
                  items-center justify-center
                  rounded-2xl border border-white/10
                  bg-gradient-to-b from-white/[0.06] to-transparent
                  text-slate-300
                  backdrop-blur-xl
                  shadow-[0_4px_20px_rgba(0,0,0,0.2)]
                  transition-all duration-300
                  hover:border-cyan-400/40
                  hover:text-cyan-300
                  hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]
                "
              >
                {item.svg}
              </motion.a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS WITH MAGNETIC EFFECT */}
        <div>
          <div className="relative inline-block mb-8">
            <h4 className="text-lg font-bold text-white tracking-wide uppercase">
              Quick Links
            </h4>
            <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-cyan-400 rounded-full" />
          </div>

          <div className="flex flex-col gap-4 text-md text-slate-400 font-light">
            {["Home", "About Us", "Departments", "Gallery", "Admissions"].map(
              (item, index) => {
                const paths = [
                  "/",
                  "/about",
                  "/departments",
                  "/gallery",
                  "/admissions",
                ];
                return (
                  <Link
                    key={index}
                    href={paths[index]}
                    className="flex items-center gap-1 group w-fit transition-all duration-300 hover:text-cyan-300 hover:translate-x-2"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 text-cyan-400" />
                  </Link>
                );
              },
            )}
          </div>
        </div>

        {/* CONTACT MATRICES */}
        <div>
          <div className="relative inline-block mb-8">
            <h4 className="text-lg font-bold text-white tracking-wide uppercase">
              Contact
            </h4>
            <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-cyan-400 rounded-full" />
          </div>

          <div className="space-y-6 text-md text-slate-400 font-light">
            <div className="flex items-start gap-4 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <p className="leading-relaxed group-hover:text-slate-200 transition-colors">
                Mar Baselios Dental College, Kothamangalam, Kerala
              </p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <p className="group-hover:text-slate-200 transition-colors font-mono">
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <p className="group-hover:text-cyan-300 transition-colors break-all">
                info@mbdc.edu.in
              </p>
            </div>
          </div>
        </div>

        {/* ULTRA-GLASS MAP CARD LAYER */}
        <div>
          <div className="relative inline-block mb-8">
            <h4 className="text-lg font-bold text-white tracking-wide uppercase">
              Find Us
            </h4>
            <div className="absolute -bottom-1 left-0 w-8 h-[2px] bg-cyan-400 rounded-full" />
          </div>

          <div className="group relative rounded-[32px] p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,182,212,0.12)]">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent group-hover:from-cyan-500/40 group-hover:via-blue-500/20 to-transparent transition-all duration-500" />

            <div className="relative overflow-hidden rounded-[31px] bg-[#0b1726]/80 backdrop-blur-2xl">
              <div className="relative h-[200px] w-full overflow-hidden filter brightness-90 contrast-105 saturate-[0.85] group-hover:brightness-100 group-hover:saturate-100 transition-all duration-500">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.329437145899!2d76.62145327597148!3d10.071850171830206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e35b7190cae9%3A0x6b4020a599684992!2sMar%20Baselios%20Dental%20College!5e0!3m2!1sen!2sin!4v1779636653275!5m2!1sen!2sin"
                  className="absolute inset-0 h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed text-slate-300 font-light group-hover:text-white transition-colors duration-300">
                  Mar Baselios Dental College, Kothamangalam, Kerala
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER SUB-BASEMENT FLOOR */}
      <div className="mx-auto max-w-7xl mt-24 pt-8 border-t border-gradient border-white/5 relative z-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center text-center sm:text-left text-xs text-slate-500 font-mono tracking-wider">
          <p>© 2026 Mar Baselios Dental College. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-slate-500">
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
