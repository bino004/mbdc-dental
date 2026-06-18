import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Dental Hygiene (DH)",
    href: "/admissions/paramedical-courses/dental-hygiene",
    desc: "Learn preventive dental care, oral health education, and patient support.",
  },
  {
    title: "Dental Operating Room Assistant (DORA)",
    href: "/admissions/paramedical-courses/dental-operating-room-assistant",
    desc: "Gain expertise in assisting dental procedures and clinical operations.",
  },
  {
    title: "Dental Mechanics (DM)",
    href: "/admissions/paramedical-courses/dental-mechanics",
    desc: "Specialized training in dental prosthetics and laboratory techniques.",
  },
];

const careers = [
  "Dental Clinics",
  "Hospitals",
  "Dental Laboratories",
  "Healthcare Support",
  "Community Health",
  "Private Practice",
];

export default function ParamedicalCoursesPage() {
  return (
    <main className="overflow-hidden bg-[#06111f] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative mt-24 lg:mt-28 h-[80vh] min-h-[700px] overflow-hidden">
        <Image
          src="/assets/college.jpg"
          alt="Paramedical Courses"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#06111f]/50 via-[#06111f]/75 to-[#06111f]" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6 lg:px-20">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[6px] text-cyan-300">
              Admissions / Paramedical Courses
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] lg:text-[6rem]">
              Allied Dental
              <span className="block text-cyan-300">Healthcare Programs</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Build a rewarding healthcare career through specialized
              paramedical dental education and practical training.
            </p>
          </div>
        </div>
      </section>

      {/* COURSE OVERVIEW */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute right-0 top-0 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-300">
              Available Programs
            </p>

            <h2 className="text-4xl font-semibold lg:text-6xl">
              Choose Your
              <span className="block text-cyan-300">Career Path</span>
            </h2>
          </div>

          {/* course cards */}
          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {courses.map((course, index) => (
              <Link
                key={index}
                href={course.href}
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
                  {course.title}
                </h3>

                <p className="mt-5 text-white/70">{course.desc}</p>

                <div className="mt-8 text-cyan-300">Explore Program →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section className="relative pb-32">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
          <div className="rounded-[50px] border border-white/10 bg-white/[0.04] p-12 backdrop-blur-2xl lg:p-20">
            <p className="mb-4 text-center text-sm uppercase tracking-[6px] text-cyan-300">
              Career Opportunities
            </p>

            <h2 className="text-center text-4xl font-semibold lg:text-6xl">
              Your Future In
              <span className="block text-cyan-300">Healthcare</span>
            </h2>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {careers.map((career, i) => (
                <div
                  key={i}
                  className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 text-center"
                >
                  <h3 className="text-xl font-semibold">{career}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
