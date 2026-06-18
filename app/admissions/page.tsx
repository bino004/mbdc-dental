import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "BDS",
    href: "/admissions/bds",
    desc: "Bachelor of Dental Surgery program with advanced clinical exposure.",
  },
  {
    title: "MDS",
    href: "/admissions/mds",
    desc: "Specialized postgraduate dental education and advanced training.",
  },
  {
    title: "Paramedical Courses",
    href: "/admissions/paramedical-courses",
    desc: "Career-focused allied dental healthcare programs.",
  },
];

const quickLinks = [
  {
    title: "Admission Process",
    href: "/admissions/admission-process",
  },
  {
    title: "Eligibility",
    href: "/admissions/eligibility",
  },
  {
    title: "Fee Structure",
    href: "/admissions/fee-structure",
  },
  {
    title: "Scholarships",
    href: "/admissions/scholarships",
  },
];

export default function AdmissionsPage() {
  return (
    <main className="overflow-hidden bg-[#06111f] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative mt-24 lg:mt-28 h-[80vh] min-h-[700px] overflow-hidden">
        <Image
          src="/assets/college.jpg"
          alt="Admissions"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#06111f]/50 via-[#06111f]/75 to-[#06111f]" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6 lg:px-20">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[6px] text-cyan-300">
              Admissions 2025
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] lg:text-[6rem]">
              Begin Your Journey
              <span className="block text-cyan-300">In Dental Excellence</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Explore undergraduate, postgraduate, and paramedical programs
              designed to shape the future of dental healthcare.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/admissions/apply-online"
                className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-[#06111f] transition hover:scale-105"
              >
                Apply Now
              </Link>

              <Link
                href="/admissions/admission-process"
                className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-white transition hover:bg-white/[0.08]"
              >
                Admission Process
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-300">
              Academic Programs
            </p>

            <h2 className="text-4xl font-semibold lg:text-6xl">
              Choose Your
              <span className="block text-cyan-300">Career Path</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {programs.map((program, index) => (
              <Link
                key={index}
                href={program.href}
                className="
                  group relative overflow-hidden
                  rounded-[40px]
                  border border-white/10
                  bg-white/[0.04]
                  p-10
                  backdrop-blur-xl
                  transition duration-500
                  hover:border-cyan-400/20
                "
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-[90px] transition duration-500 group-hover:bg-cyan-400/20" />

                <h3 className="text-3xl font-semibold text-white group-hover:text-cyan-300">
                  {program.title}
                </h3>

                <p className="mt-5 text-white/70">{program.desc}</p>

                <div className="mt-8 text-cyan-300">Explore Program →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="relative py-24">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-20">
          <div className="rounded-[50px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl lg:p-20">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-300">
                Admission Guide
              </p>

              <h2 className="text-4xl font-semibold lg:text-6xl">
                Everything You
                <span className="block text-cyan-300">Need To Know</span>
              </h2>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {quickLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="
                    rounded-[32px]
                    border border-white/10
                    bg-white/[0.04]
                    p-8
                    text-center
                    transition
                    hover:border-cyan-400/20
                    hover:text-cyan-300
                  "
                >
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
