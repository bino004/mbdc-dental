import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageBackground from "@/components/PageBackground";

export default function BoardOfDirectorsPage() {
  const coreExecutives = [
    {
      name: "VINCENT P P",
      role: "Vice President",
      imagePath: "/assets/board/vincent.webp",
    },
    {
      name: "SALIM CHERIAN",
      role: "Secretary",
      imagePath: "/assets/board/salim.webp",
    },
    {
      name: "SUNNY M M",
      role: "Treasurer",
      imagePath: "/assets/board/sunny.webp",
    },
  ];

  const boardDirectors = [
    {
      name: "DR. ROY M GEORGE",
      role: "Board Director",
      imagePath: "/assets/board/drroy.webp",
    },
    {
      name: "ELDHOSE A V",
      role: "Board Director",
      imagePath: "/assets/board/elshoseav.webp",
    },
    {
      name: "CHARLY MATHEW",
      role: "Board Director",
      imagePath: "/assets/board/charley.webp",
    },
    {
      name: "BINU VARGHESE",
      role: "Board Director",
      imagePath: "/assets/board/binu.webp",
    },
    {
      name: "KURIAKOSE VARGHESE",
      role: "Board Director",
      imagePath: "/assets/board/kuriakose.webp",
    },
    {
      name: "ELDHOSE MATHAI",
      role: "Board Director",
      imagePath: "/assets/board/eldhosemathai.webp",
    },
  ];

  return (
    <main className="overflow-hidden text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      <PageBackground>
        <Navbar />

        {/* ================= DYNAMIC HERO HEADLINE ================= */}
        <section className="relative pt-36 lg:pt-44 pb-12 overflow-hidden px-6 lg:px-20 mx-auto max-w-[1500px]">
          <div className="absolute top-0 right-0 w-[600px] h-[300px] bg-gradient-to-bl from-cyan-500/10 via-indigo-500/5 to-transparent blur-[120px] pointer-events-none" />

          <div className="max-w-5xl space-y-6">
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[10px] font-mono tracking-[3px] text-slate-400 uppercase font-medium">
                Administrative Council
              </span>
            </div>

            <h1 className="text-4xl font-light tracking-tight leading-none sm:text-6xl lg:text-7xl xl:text-8xl">
              Governing <br />
              <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400">
                Board of Directors
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 max-w-xl font-light">
              Executive oversight driving academic standards, corporate
              compliance, and structural expansion benchmarks.
            </p>
          </div>
        </section>

        {/* ================= APEX DIRECTORS (TIER 1 - EXEC ROLES OPTIMIZED FOR READABILITY) ================= */}
        <section className="relative py-12 px-6 lg:px-20 mx-auto max-w-[1600px]">
          <div className="grid gap-10 md:grid-cols-3">
            {coreExecutives.map((exec, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border border-white/10 p-6 transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_30px_60px_-15px_rgba(6,182,212,0.25)]"
              >
                {/* Executive Image Frame */}
                <div className="relative aspect-[3/4.2] w-full overflow-hidden rounded-3xl bg-slate-950 border border-white/5">
                  <Image
                    src={exec.imagePath}
                    alt={exec.name}
                    fill
                    priority
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent z-10" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(6,182,212,0.2),transparent)] opacity-70 mix-blend-screen" />
                </div>

                {/* ================= UPDATED EXECUTIVE TYPOGRAPHY ================= */}
                <div className="mt-8 space-y-3 relative z-20 px-2">
                  {/* CHANGED: Role tag now uses solid color text-cyan-400 instead of transparent background-clip gradient,
                      and size has been upgraded to text-sm sm:text-base for flawless, immediate readability. */}
                  <div className="inline-flex items-center">
                    <span className="text-sm sm:text-base font-mono font-extrabold uppercase tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all duration-300 group-hover:text-cyan-300">
                      {exec.role}
                    </span>
                  </div>

                  {/* Metallic Name Headline - Kept exactly as originally styled */}
                  <div className="relative overflow-hidden">
                    <h3 className="text-3xl font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-400 transition-all duration-500 group-hover:from-white group-hover:via-cyan-100 group-hover:to-cyan-400 font-sans uppercase">
                      {exec.name}
                    </h3>

                    {/* Futuristic accent line under the name */}
                    <div className="h-[2px] w-8 bg-gradient-to-r from-cyan-500 to-indigo-500 mt-3 rounded-full transition-all duration-500 group-hover:w-full group-hover:from-cyan-400 group-hover:to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= COUNCILS GRID (TIER 2 - BALANCED PORTRAITS) ================= */}
        <section className="relative py-16 px-6 lg:px-20 mx-auto max-w-[1500px] pb-40">
          {/* Section Divider Header */}
          <div className="flex items-center gap-6 mb-16">
            <span className="text-[11px] font-mono uppercase tracking-[4px] text-indigo-400 font-bold shrink-0">
              // General Trustees
            </span>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-indigo-500/20 to-transparent" />
          </div>

          {/* Grid Layout for General Board Members */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {boardDirectors.map((director, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl bg-slate-900/30 border border-white/5 p-5 transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-950/40 hover:-translate-y-1"
              >
                {/* Standard Directors Frame */}
                <div className="relative aspect-[3/3.8] w-full overflow-hidden rounded-xl bg-slate-950 border border-white/5">
                  <Image
                    src={director.imagePath}
                    alt={director.name}
                    fill
                    sizes="(max-w-768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 opacity-90" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.08),transparent)] opacity-40 mix-blend-screen" />
                </div>

                {/* Identity Details */}
                <div className="mt-5 space-y-0.5">
                  <h4 className="text-xl font-bold tracking-tight text-slate-200 group-hover:text-white transition-colors">
                    {director.name}
                  </h4>
                  <p className="text-xs font-mono text-slate-400 group-hover:text-indigo-300/80 transition-colors">
                    {director.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </PageBackground>
    </main>
  );
}
