import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

export default function VisionMissionPage() {
  return (
    <main className="overflow-hidden text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      <PageBackground>
        {/* Render Navbar inside PageBackground to keep it layered over the particles */}
        <Navbar />

        {/* ================= HERO SECTION ================= */}
        {/* FIXED: Changed mt-20 lg:mt-24 to pt-32 lg:pt-40 to pull the section up behind the navbar while avoiding text overlap */}
        <section className="relative pt-32 lg:pt-40 min-h-[55vh] flex items-center justify-center overflow-hidden px-4">
          {/* Background Grid Accent */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[120px] animate-pulse delay-700" />

          <div className="relative w-full max-w-[1400px] grid lg:grid-cols-12 gap-12 items-center z-10 py-16 sm:py-24">
            {/* Hero Center-Left Stack: Re-positioned for a Premium, Wide Editorial Feel */}
            <div className="col-span-12 lg:col-span-10 lg:col-start-2 space-y-8 text-left px-4 sm:px-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-[10px] font-mono tracking-[4px] text-cyan-400 uppercase font-semibold">
                  Corporate Core Ideology
                </span>
              </div>

              <h1 className="text-4xl font-light tracking-tight leading-[1.1] sm:text-6xl xl:text-7xl max-w-4xl">
                Architecting the <br />
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-indigo-400 drop-shadow-[0_2px_20px_rgba(34,211,238,0.2)]">
                  Future of Dentistry
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-slate-400 max-w-2xl font-light leading-relaxed">
                Explore the blueprints, directives, and quality standards
                driving academic excellence and clinical mastery at Mar Baselios
                Dental College.
              </p>

              <div className="pt-2">
                <div className="h-[1px] w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAIN CONTENT SPLIT ================= */}
        <section className="relative py-24 px-6 lg:px-20 mx-auto max-w-[1500px]">
          <div className="grid gap-16 lg:grid-cols-12 items-start">
            {/* LEFT COLUMN: STICKY BRAND CARD */}
            <div className="lg:col-span-4 lg:sticky lg:top-36">
              {/* BRAND CARD WITH GRADIENT GLOW BACKGROUND */}
              <div className="relative group overflow-hidden p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]">
                {/* Active Light Source Accent */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-500" />

                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/20 bg-cyan-950/30">
                    01
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 block">
                    Foundation Motto
                  </span>
                </div>

                <h2 className="text-3xl font-black tracking-tight text-white uppercase leading-tight">
                  "The Word is{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 block xl:inline">
                    Healing"
                  </span>
                </h2>

                <div className="mt-5 h-[2px] w-16 bg-gradient-to-r from-cyan-500 to-transparent rounded-full" />

                <p className="mt-5 text-sm leading-relaxed text-slate-400 font-light">
                  A definitive philosophical standard ensuring compassionate
                  care forms the core foundation of infrastructure and dental
                  training at MBDC.
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: INTERACTIVE VISION & MISSION */}
            <div className="lg:col-span-8 space-y-20">
              {/* VISION BLOCK */}
              <div className="relative group p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900/60 to-transparent border border-l-4 border-white/5 border-l-cyan-500 transition-all duration-300 hover:from-cyan-950/20">
                <div className="absolute top-0 right-0 p-6 opacity-5 select-none text-7xl font-mono font-black text-cyan-400">
                  VISION
                </div>
                <span className="text-[11px] font-mono uppercase tracking-[4px] text-cyan-400 font-bold block mb-3">
                  // Institutional Target
                </span>
                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Our Primary Vision
                </h3>
                <p className="mt-6 text-lg sm:text-xl leading-relaxed text-slate-300 font-light max-w-3xl">
                  To become an institute of excellence in imparting quality
                  dental education, fostering innovative research and
                  facilitating equitable state of the art dental care for
                  promoting optimal oral health in the society.
                </p>
              </div>

              {/* MISSION BLOCK */}
              <div className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[4px] text-indigo-400 font-bold block mb-2">
                      // Tactical Methodology
                    </span>
                    <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Core Mission Directives
                    </h3>
                  </div>
                  <span className="self-start sm:self-center px-3 py-1 font-mono text-xs text-indigo-300 bg-indigo-950/50 rounded-md border border-indigo-500/20">
                    5 Strategic Pillars
                  </span>
                </div>

                {/* LINE STACK */}
                <div className="grid gap-4">
                  {[
                    "Establishing standards of dental education in didactic and experiential learning.",
                    "Achieving proficiency in procedural skills related to clinical and preclinical aspects of dental surgery.",
                    "Imparting quality dental education through advanced clinical exposure.",
                    "Encouraging evidence-based practices and research to improve general and oral health.",
                    "Inculcating ethical values, a sense of effective patient care, scientific temper, and life-long learning skills.",
                  ].map((pillar, idx) => (
                    <div
                      key={idx}
                      className="group relative p-6 rounded-2xl bg-slate-900/40 border border-white/5 flex gap-6 items-start transition-all duration-300 hover:bg-gradient-to-r hover:from-slate-900 hover:to-indigo-950/30 hover:border-indigo-500/30 hover:translate-x-1"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-950 border border-white/10 font-mono text-sm text-slate-400 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors shrink-0">
                        {(idx + 1).toString().padStart(2, "0")}
                      </div>
                      <div className="space-y-1">
                        <p className="text-base sm:text-lg font-light text-slate-300 group-hover:text-white transition-colors duration-200">
                          {pillar}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= QUALITY POLICY SECTION ================= */}
        <section className="relative pb-32 pt-12 px-6 lg:px-20 mx-auto max-w-[1500px]">
          <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-white/10 p-8 sm:p-12 md:p-16 shadow-2xl shadow-indigo-950/20">
            {/* Structural glow accents inside the card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px]" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
              <div className="max-w-xs shrink-0">
                <div className="h-[2px] w-12 bg-teal-400 mb-6 rounded-full" />
                <span className="text-[10px] uppercase tracking-[6px] text-teal-400 font-bold font-mono block mb-2">
                  Compliance Framework
                </span>
                <h4 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
                  Quality <br />
                  Policy
                </h4>
              </div>

              <div className="text-base sm:text-lg leading-relaxed text-slate-300 font-light lg:max-w-3xl lg:border-l lg:border-white/10 lg:pl-12 space-y-4">
                <p>
                  MBDC shall strive continually for evolving into an advanced
                  centre in the field of dental education through assuring
                  quality in all its endeavours, adhering to applicable
                  requirements.
                </p>
                <p className="text-slate-400 text-sm sm:text-base border-t border-white/5 pt-4">
                  The College is committed to moulding its students into
                  globally competent, socially committed and ethically driven
                  professionals in the realm of dentistry and offering state of
                  the art dental care.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </PageBackground>
    </main>
  );
}
