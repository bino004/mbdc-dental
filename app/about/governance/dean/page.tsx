import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageBackground from "@/components/PageBackground";
import { MessageSquare, Quote, Sparkles, Award, Star } from "lucide-react";

export default function DeanPage() {
  return (
    <main className="overflow-hidden bg-[#06111f] text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      <Navbar />

      <PageBackground>
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-40 pb-12 lg:pt-52 lg:pb-16 flex items-center justify-center overflow-hidden px-4">
          {/* Subtle Glowing Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/10 to-indigo-500/5 rounded-full blur-[140px]" />

          <div className="relative z-10 w-full max-w-[1500px] mx-auto text-center space-y-4">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-xs font-semibold tracking-[4px] uppercase text-cyan-300 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-400" />
              Institutional Leadership
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-light tracking-tight text-white leading-none">
              <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-slate-400">
                The Dean
              </span>
            </h1>
          </div>
        </section>

        {/* ================= DEAN PROFILE & MESSAGE ================= */}
        <section className="relative pb-32 px-6 lg:px-20 mx-auto max-w-[1500px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-start">
            {/* Left Column: Premium Dean Profile Card (4/12 cols) */}
            <div className="lg:col-span-5 xl:col-span-4 sticky top-32">
              <div className="group relative flex flex-col rounded-[40px] border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-6 backdrop-blur-2xl shadow-2xl transition duration-500 hover:border-cyan-400/20">
                {/* Image Frame with Dynamic Mesh Glow background */}
                <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden bg-slate-950 shadow-inner">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-indigo-500/20 z-10 pointer-events-none mix-blend-color-add" />
                  <Image
                    src="/assets/staff/dean.webp" // Replace with your exact asset pathway
                    alt="Prof. Dr. Varghese Mani"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Elegant bottom gradient on portrait */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/0 to-transparent z-10" />
                </div>

                {/* Profile Typography Block */}
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                      Dean
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-cyan-400" /> MBDC
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                    Prof. Dr. Varghese Mani
                  </h2>

                  <p className="text-sm font-mono tracking-wide text-cyan-400/90 font-medium">
                    BSc. MDS.
                  </p>

                  <div className="pt-4 border-t border-white/5 flex gap-4 text-xs text-slate-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>Elite Faculty</span>
                    </div>
                    <span>•</span>
                    <span>Since 2002</span>
                  </div>
                </div>

                {/* Aesthetic decorative accent element */}
                <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-cyan-400/5 blur-[80px] pointer-events-none" />
              </div>
            </div>

            {/* Right Column: Editorial Message Panels (8/12 cols) */}
            <div className="lg:col-span-7 xl:col-span-8">
              {/* Main Message Block */}
              <div className="relative rounded-[40px] border border-white/10 bg-white/[0.01] p-8 sm:p-12 md:p-16 shadow-3xl backdrop-blur-md overflow-hidden">
                {/* Large Background Quote Symbol */}
                <Quote className="absolute right-8 top-10 w-36 h-36 text-white/[0.02] transform pointer-events-none" />

                <div className="flex items-center gap-3 text-cyan-400 mb-8">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-[11px] uppercase tracking-[4px] font-bold">
                    Official Communiqué
                  </span>
                </div>

                {/* Message Body Content */}
                <div className="text-lg sm:text-xl leading-relaxed text-slate-200 font-light space-y-6">
                  <p className="font-serif italic text-white text-2xl border-l-2 border-cyan-400 pl-4 sm:pl-6 my-6 leading-relaxed">
                    "It is always a delight to welcome all of you to Mar
                    Baselios Dental College."
                  </p>

                  <p>
                    We instill in our students and the faculty the importance of
                    being advanced and exceptional for crafting a world class
                    academic competency. Being in the changing world, high
                    quality of education is highly indispensable to be the best.
                  </p>

                  <p className="text-slate-300">
                    We are sure that we have achieved a great milestone in the
                    quality education and constantly being strive to be in the
                    forefront among the top dental colleges in India. Let us
                    work towards enriching ourselves with meaningful curricular
                    and extracurricular transactions.
                  </p>
                </div>

                {/* Editorial Vision Footer Sign-off */}
                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">
                      Forward Vision
                    </p>
                    <p className="text-base font-medium text-cyan-300 mt-1">
                      Let us know your dreams; we can make it a reality.
                    </p>
                  </div>
                  <div className="shrink-0">
                    <div className="h-10 w-32 border-b border-white/20 relative opacity-40">
                      {/* Placeholder for cursive signature aesthetics */}
                      <span className="absolute bottom-1 right-2 text-xs font-serif italic tracking-widest">
                        Varghese Mani
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </PageBackground>
    </main>
  );
}
