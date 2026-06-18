import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

const governanceItems = [
  {
    title: "Organizational Structure",
    href: "/about/governance/organizational-structure",
    desc: "Explore the leadership hierarchy and institutional framework.",
  },
  {
    title: "Administration",
    href: "/about/governance/administration",
    desc: "Meet the administrative leadership team of the institution.",
  },
  {
    title: "Committees",
    href: "/about/governance/committees",
    desc: "Discover committees that ensure academic and operational excellence.",
  },
  {
    title: "HR Policies",
    href: "/about/governance/hr-policies",
    desc: "Learn about policies that guide ethics, professionalism, and growth.",
  },
  {
    title: "Institution Framework",
    href: "/about/governance/institution-framework",
    desc: "Understand the strategic framework behind institutional excellence.",
  },
];

export default function GovernancePage() {
  return (
    <main className="overflow-hidden bg-[#06111f] text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative mt-24 lg:mt-28 h-[75vh] min-h-[650px] overflow-hidden">
        <Image
          src="/assets/college.jpg"
          alt="Governance"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#06111f]/50 via-[#06111f]/75 to-[#06111f]" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center px-6 lg:px-20">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[6px] text-cyan-300">
              About / Governance
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] lg:text-[6rem]">
              Governance That
              <span className="block text-cyan-300">Builds Excellence</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              A structured leadership system committed to transparency,
              innovation, ethics, and institutional excellence.
            </p>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute right-0 top-10 h-[350px] w-[350px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-300">
              Governance Framework
            </p>

            <h2 className="text-4xl font-semibold lg:text-6xl">
              Institutional
              <span className="block text-cyan-300">Governance Structure</span>
            </h2>

            <p className="mt-6 text-lg text-white/70">
              Explore the institutional framework, leadership, policies, and
              committees that shape excellence at Mar Baselios Dental College.
            </p>
          </div>

          {/* cards */}
          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {governanceItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="
                  group relative overflow-hidden
                  rounded-[40px]
                  border border-white/10
                  bg-white/[0.04]
                  p-8
                  backdrop-blur-xl
                  transition duration-500
                  hover:border-cyan-400/20
                "
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-[90px] transition duration-500 group-hover:bg-cyan-400/20" />

                <h3 className="text-2xl font-semibold text-white transition group-hover:text-cyan-300">
                  {item.title}
                </h3>

                <p className="mt-5 text-white/70">{item.desc}</p>

                <div className="mt-8 text-cyan-300">Explore →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative pb-40">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-20">
          <div className="rounded-[50px] border border-white/10 bg-white/[0.04] p-12 text-center backdrop-blur-2xl lg:p-20">
            <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-300">
              Governance Excellence
            </p>

            <h2 className="text-4xl font-semibold lg:text-6xl">
              Building Trust Through
              <span className="block text-cyan-300">
                Leadership & Integrity
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Committed to transparency, academic excellence, and institutional
              growth.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
