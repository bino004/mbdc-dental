import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import PageBackground from "@/components/PageBackground";
import { ArrowUpRight } from "lucide-react";

const eliteDirectors = [
  {
    name: "SALIM CHERIAN",
    role: "Secretary",
    imagePath: "/assets/board/salim.webp",
    accentGlow: "from-cyan-500/20 via-cyan-400/5 to-transparent",
    highlight:
      "Welcome to Mar Baselios Dental College (MBDC), an environment where academic innovation matches clinical excellence.",
    message:
      "Our college has constantly attracted a large section of the student community and has been able to stay true to its motto of providing dental health care education and services in an environment of friendly participation and academic excellence. MBDC, besides providing value education, also desires to provide our college students holistic tutoring where we cross the boundaries of books.\n\nOur goals also include encouraging students to participate and engage in social, cultural, and sporting activities while staying up to date with the current global trends. A BDS graduate or MDS postgraduate from MBDC will be a competent doctor with sufficient knowledge, skills, and understanding necessary to fulfill their responsibilities toward patients and society. I invite you to our contemporary campus to share a meaningful educational experience.",
  },
  {
    name: "DR. BYJU PAUL KURIAN",
    role: "Principal",
    imagePath: "/assets/administration/principal.webp",
    accentGlow: "from-purple-500/20 via-indigo-400/5 to-transparent",
    highlight:
      "Education holds the key to the external world, shaping health science professionals for future clinical leadership.",
    message:
      "The rigorous training that a health science student undergoes during their formative stages is crucial for their integration into society as a responsible, ethical, and competent professional. Going by our shared vision and mission, we at Mar Baselios Dental College are fully committed to nurturing such worthy, high-achieving individuals.\n\nBeing a pioneer institution in the self-financing undergraduate and post-graduate dental education sector in Kerala, our institution has successfully established a definitive benchmark for how clinical establishments are managed, consistently emphasizing cutting-edge research, pristine academic discipline, and advanced patient care systems.",
  },
  {
    name: "DR. KEMTHOSE PAUL",
    role: "Chief Operating Officer",
    imagePath: "/assets/administration/coo.webp",
    accentGlow: "from-teal-500/20 via-emerald-400/5 to-transparent",
    highlight:
      "Streamlining infrastructure operations, advanced compliance benchmarks, and strategic institutional resource management.",
    message:
      "Optimizing multi-department administrative channels and structural resource assets is vital to maintaining our position at the pinnacle of dental education. We focus on building seamless internal systems that support our faculty, elevate operational efficiency, and provide modern tools necessary for clinical success.\n\nBy managing our state-of-the-art campus infrastructure and balancing healthcare delivery with rigorous academic schedules, we ensure that every student has access to an environment optimized for growth. We continuously refine our functional frameworks to keep pace with changing educational landscapes and global technological shifts.",
  },
];

export default function AdministrationPage() {
  return (
    <main className="overflow-hidden text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-300">
      <PageBackground>
        <Navbar />

        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-40 lg:pt-52 pb-16 px-6 lg:px-20 mx-auto max-w-[1500px]">
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
            <div className="max-w-3xl space-y-4">
              <h1 className="text-5xl font-black tracking-tight sm:text-7xl lg:text-8xl uppercase leading-[0.85]">
                The Command <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">
                  Structure
                </span>
              </h1>
            </div>

            <div className="lg:max-w-md bg-white/[0.02] border border-white/5 backdrop-blur-xl p-6 rounded-3xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all" />
              <p className="text-sm text-slate-400 font-light leading-relaxed">
                Driving the operational framework, academic standards, and
                clinical infrastructure ecosystems across all core institutional
                pathways.
              </p>
            </div>
          </div>
        </section>

        {/* ================= EQUALIZED SHOWCASE LAYOUTS ================= */}
        <section className="relative py-12 px-6 lg:px-20 mx-auto max-w-[1600px] space-y-32 pb-48">
          {eliteDirectors.map((director, idx) => (
            <div
              key={idx}
              className="relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-start group"
            >
              {/* Dynamic Neon Background Accent Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${director.accentGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[40px] blur-3xl pointer-events-none`}
              />

              {/* PORTRAIT DISPLAY FRAME */}
              <div
                className={`lg:col-span-5 relative aspect-[4/4.8] w-full rounded-[3rem] overflow-hidden bg-slate-900 border border-white/10 shadow-2xl transition-all duration-500 group-hover:border-cyan-400/40 group-hover:shadow-cyan-500/10 ${
                  idx % 2 === 1 ? "lg:order-last" : ""
                }`}
              >
                <Image
                  src={director.imagePath}
                  alt={director.name}
                  fill
                  sizes="(max-w-1024px) 100vw, 35vw"
                  className="object-cover object-top scale-100 group-hover:scale-103 transition-transform duration-700"
                />

                {/* Glassmorphic Identity Bar */}
                <div className="absolute bottom-4 inset-x-4 bg-slate-950/70 border border-white/10 backdrop-blur-xl rounded-[2rem] p-6 flex items-center justify-between z-20">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 block mb-1">
                      {director.role}
                    </span>
                    <h3 className="text-xl font-black text-white uppercase tracking-tight">
                      {director.name}
                    </h3>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-400/50 transition-all duration-300">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
              </div>

              {/* STRATEGIC ADDRESS CONTENT BLOCK */}
              <div className="lg:col-span-7 space-y-8 relative z-10 lg:pt-2">
                {/* Border-Left Cyan Accent Tagline Highlight */}
                <h4 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight font-sans border-l-4 border-cyan-400/80 pl-6">
                  {director.highlight}
                </h4>

                {/* Substantive Main Address Body */}
                <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed tracking-wide whitespace-pre-line pl-7">
                  {director.message}
                </p>

                <div className="pt-4 pl-7">
                  <div className="h-[2px] w-12 bg-cyan-400/50 rounded-full transition-all duration-500 group-hover:w-32 group-hover:bg-cyan-400" />
                </div>
              </div>
            </div>
          ))}
        </section>

        <Footer />
      </PageBackground>
    </main>
  );
}
