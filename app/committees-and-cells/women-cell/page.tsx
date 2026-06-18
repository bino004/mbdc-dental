"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  Sparkles,
  Heart,
  Shield,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Users,
} from "lucide-react";

// --- MOCK DATA FOR SLIDERS ---
// Replace these with your actual image paths in the public folder
const sahasraImages = [
  "/assets/womens-cell/sahasra-1.jpg",
  "/assets/womens-cell/sahasra-2.jpg",
  "/assets/womens-cell/sahasra-3.jpg",
];

const womensDayImages = [
  "/assets/womens-cell/womens-day-1.jpg",
  "/assets/womens-cell/womens-day-2.jpg",
  "/assets/womens-cell/womens-day-3.jpg",
];

const substanceAbuseImages = [
  "/assets/womens-cell/substance-1.jpg",
  "/assets/womens-cell/substance-2.jpg",
];

// --- EXTRACTED TABLE DATA (2024-25) ---
const executiveMembers = [
  { role: "President", name: "Dr. Vidya K C" },
  { role: "Secretary", name: "Dr. Anu Vijayan" },
  { role: "Vice President", name: "Dr. Deepa Jose" },
  {
    role: "Joint Secretary",
    name: "Dr. Soma Susan Varghese, Dr. Linta Thomas",
  },
  { role: "Treasurer", name: "Dr. Anju Elizabeth Thomas" },
  {
    role: "Additional Executive Members",
    name: "Dr. Lithiya Susan John, Dr. Lekshmi",
  },
  {
    role: "Non-Teaching Staff Representative",
    name: "Mrs. Gigi Mathew, Mrs. Jancy Thomas",
  },
  // Student Representatives
  { role: "Post Graduate", name: "Dr. Ashley Mathew", isStudent: true },
  {
    role: "Interns",
    name: "Dr. Dimple, Dr. anna, Dr. Ann, Dr. Aliya",
    isStudent: true,
  },
  {
    role: "Final Years",
    name: "Sandra, Fathima Sanom, Bhagya Lekhsmi, Sheethal, Anjali",
    isStudent: true,
  },
  { role: "Third Years", name: "Irene, Gayathri, Noorjan", isStudent: true },
  { role: "Second Years", name: "Sana, Athena, Arathi", isStudent: true },
  { role: "First Years", name: "Anju Elza, Alvina, Anova", isStudent: true },
];

export default function WomensCellPage() {
  return (
    <main className="min-h-screen bg-[#02050f] text-white flex flex-col overflow-hidden relative selection:bg-fuchsia-500/30 selection:text-fuchsia-200">
      <PageBackground>
        <Navbar />

        {/* Ambient Empowering Glows */}
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-fuchsia-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen animate-pulse duration-[10s]"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-purple-600/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="flex-grow pt-40 pb-32 relative z-10">
          {/* =============================================================== */}
          {/* HERO SECTION                                                    */}
          {/* =============================================================== */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20 text-center flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-[0_0_20px_rgba(217,70,239,0.2)]">
              <Sparkles className="w-4 h-4" />
              Empowerment & Inclusion
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter mb-6 relative">
              <span className="absolute -inset-4 blur-3xl opacity-20 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-rose-600 z-0"></span>
              <span className="relative z-10 text-white drop-shadow-md">
                Women's Cell{" "}
              </span>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">
                SAHASRA
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-3xl">
              Fostering well-being, safety, and empowerment. We strive to create
              an inclusive environment for all women associated with Mar
              Baselios Dental College.
            </p>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-32">
            {/* =============================================================== */}
            {/* ABOUT SAHASRA SECTION                                           */}
            {/* =============================================================== */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-fuchsia-400" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white">
                    About SAHASRA
                  </h2>
                </div>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify">
                  The Women’s Cell serves as a crucial support system for female
                  students and staff, focusing on their well-being, safety, and
                  empowerment. It organizes awareness programs, workshops, and
                  seminars to educate women on their rights, gender equality,
                  and personal development.
                </p>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify">
                  It provides confidential counseling and guidance to women
                  facing personal or academic challenges. It also aims to
                  promote women’s health and hygiene through informative
                  sessions and access to necessary facilities.
                </p>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify">
                  It acts as a body for advocating for women’s issues and equal
                  opportunities within the college and as a supportive network
                  among female students and staff for mutual assistance and
                  empowerment. The cell takes active initiative in recognizing
                  and celebrating the achievements of women within the college.
                  The Women’s Cell strives to create an inclusive and empowering
                  environment for all women associated with Mar Baselios Dental
                  College.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <AutoImageSlider images={sahasraImages} aspect="aspect-[4/3]" />
              </div>
            </div>

            {/* =============================================================== */}
            {/* EXECUTIVE MEMBERS TABLE                                         */}
            {/* =============================================================== */}
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-black tracking-widest uppercase mb-6">
                <Users className="w-4 h-4" />
                Leadership
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-10 text-center">
                Executive Members 2024-25
              </h2>

              <div className="w-full max-w-5xl rounded-[2rem] border border-white/10 bg-[#050b1a]/60 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px]">
                    <tbody className="divide-y divide-white/5">
                      {executiveMembers.map((member, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-white/[0.02] transition-colors group"
                        >
                          <td
                            className={`px-8 py-5 font-bold tracking-wide w-1/3 ${member.isStudent ? "text-slate-400" : "text-fuchsia-300"}`}
                          >
                            {idx === 7 && (
                              <span className="block text-[10px] uppercase tracking-widest text-white/40 mb-1">
                                Student Representatives
                              </span>
                            )}
                            {member.role}
                          </td>
                          <td className="px-8 py-5 text-slate-200 font-medium group-hover:text-white transition-colors">
                            {member.name}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* =============================================================== */}
            {/* EVENT: INTERNATIONAL WOMEN'S DAY                                */}
            {/* =============================================================== */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[3rem]">
              <div>
                <AutoImageSlider
                  images={womensDayImages}
                  aspect="aspect-[16/10]"
                />
              </div>

              <div className="space-y-6">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-fuchsia-500 text-[#02050f] text-xs font-black tracking-widest uppercase shadow-[0_0_15px_rgba(217,70,239,0.5)]">
                  Event
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
                  International Women’s Day 2024
                </h2>

                <h3 className="text-xl font-bold text-fuchsia-300 italic">
                  "Inspire Inclusion"
                </h3>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify">
                  The campaign theme for International Women’s Day 2024 was
                  Inspire Inclusion. When we inspire others to understand and
                  value women’s inclusion, we forge a better world.
                </p>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify">
                  Considering the theme, on the occasion of International Womens
                  Day '24, Women cell MBDC organized 2 awareness sessions on{" "}
                  <strong>Menstrual Cup and Menstrual Hygiene</strong>, and{" "}
                  <strong>Women Empowerment</strong>, alongside fun games and a
                  food fest for all in the Baselian family.
                </p>
              </div>
            </div>

            {/* =============================================================== */}
            {/* EVENT: SUBSTANCE ABUSE AWARENESS                                */}
            {/* =============================================================== */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center bg-white/[0.02] border border-white/5 p-8 md:p-12 rounded-[3rem]">
              <div className="order-2 lg:order-1 space-y-6">
                <div className="inline-flex px-4 py-1.5 rounded-full bg-purple-500 text-[#02050f] text-xs font-black tracking-widest uppercase shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                  Awareness Session
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight uppercase tracking-tight">
                  Substance Abuse
                </h2>

                <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify">
                  Women cell and IQAC MBDC organized an awareness session on
                  Substance Abuse for final year BDS part I students. The
                  programme was conducted in the AV hall on 15-11-23 from 8:30
                  to 9:30 pm.
                </p>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify">
                  Dr. Byju Paul Kurian delivered the Principal's address and Dr.
                  Soma Susan Varghese introduced the speaker. The session was
                  shared by <strong>Mrs. Alice Paulose</strong> (Secretary KCF)
                  and <strong>Dr. Usha Narayanan</strong> (Counsellor,
                  Prachodana Counselling Center Perumbavoor).
                </p>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed text-justify">
                  It was an informal and highly interactive session. They
                  engaged students with questions and presented smileys as
                  tokens of appreciation. A total of 61 students, including
                  interns, participated. Dr. Byju Paul Kurian presented a book
                  as appreciation to Mrs. Alice Paulose, and Dr. Jayan Jacob
                  proposed the vote of thanks.
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <AutoImageSlider
                  images={substanceAbuseImages}
                  aspect="aspect-[16/10]"
                />
              </div>
            </div>

            {/* =============================================================== */}
            {/* VIEW MORE BUTTON (UPDATED)                                      */}
            {/* =============================================================== */}
            <div className="flex justify-center pt-10">
              <Link
                href="/womens-cell-activities"
                className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-sm tracking-widest uppercase hover:bg-fuchsia-500 hover:border-fuchsia-400 hover:text-[#02050f] transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] cursor-pointer"
              >
                View All Cell Activities
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </PageBackground>
    </main>
  );
}

// ============================================================================
// SUBCOMPONENT: Auto Image Slider with Manual Controls
// ============================================================================
function AutoImageSlider({
  images,
  aspect,
}: {
  images: string[];
  aspect: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play effect
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Changes every 4 seconds

    return () => clearInterval(interval);
  }, [images.length, currentIndex]); // Reset interval if manually changed

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className={`relative w-full ${aspect} rounded-[2rem] overflow-hidden bg-slate-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group`}
    >
      {/* Images */}
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery Image ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
            index === currentIndex
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105 pointer-events-none"
          }`}
          onError={(e) => {
            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%230f172a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%23334155'%3EImage ${index + 1}%3C/text%3E%3C/svg%3E`;
          }}
        />
      ))}

      {/* Gradient Overlay for Controls */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

      {/* Prev / Next Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 hover:bg-fuchsia-500 hover:border-fuchsia-400 hover:text-black shadow-lg cursor-pointer z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 hover:bg-fuchsia-500 hover:border-fuchsia-400 hover:text-black shadow-lg cursor-pointer z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full cursor-pointer transition-all duration-300 shadow-[0_2px_4px_rgba(0,0,0,0.8)] ${
                  i === currentIndex
                    ? "w-8 bg-fuchsia-400"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
