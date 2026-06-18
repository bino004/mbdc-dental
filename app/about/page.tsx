import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="bg-[#06111f] text-white overflow-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative mt-24 lg:mt-28 h-[90vh] min-h-[700px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/assets/college.jpg"
          alt="Campus"
          fill
          priority
          className="object-cover scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06111f]/50 via-[#06111f]/70 to-[#06111f]" />

        {/* Glow */}
        <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1500px] items-center pt-28 lg:pt-20 px-6 lg:px-20">
          <div className="max-w-4xl">
            <p className="mb-6 text-sm uppercase tracking-[6px] text-cyan-300">
              About Mar Baselios
            </p>

            <h1 className="text-5xl font-semibold leading-[0.95] text-white lg:text-[7rem]">
              Excellence in
              <span className="block text-cyan-300">Dental Education</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
              Shaping the future of dentistry through world-class education,
              advanced clinical exposure, innovation, and compassionate patient
              care.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.06] px-6 py-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white">22+</h3>
                <p className="text-white/60">Years of Excellence</p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.06] px-6 py-5 backdrop-blur-xl">
                <h3 className="text-3xl font-bold text-white">2500+</h3>
                <p className="text-white/60">Students Empowered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* COLLEGE STORY */}
      <section className="relative overflow-hidden py-32">
        {/* background glow */}
        <div className="absolute left-0 top-20 h-[300px] w-[300px] rounded-full bg-cyan-400/10 blur-[120px]" />

        <div className="relative z-10 mx-auto grid max-w-[1500px] gap-20 px-6 lg:grid-cols-2 lg:px-20">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-300">
              Our Story
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white lg:text-6xl">
              Building Excellence in
              <span className="block text-cyan-300">Dental Education</span>
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/70">
              <p>
                Established in 2002, Mar Baselios Dental College has emerged as
                a leading center for dental education, clinical excellence, and
                patient-focused care.
              </p>

              <p>
                Our institution combines cutting-edge infrastructure, highly
                experienced faculty, and advanced clinical exposure to nurture
                future dental professionals.
              </p>

              <p>
                We believe education is more than academics — it is about
                innovation, ethics, compassion, and transforming lives through
                healthcare.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
              <Image
                src="/assets/about-campus.jpg"
                alt="College Campus"
                width={900}
                height={700}
                className="h-[550px] w-full object-cover"
              />
            </div>

            {/* floating card */}
            <div className="absolute -bottom-8 -left-8 rounded-[28px] border border-white/10 bg-[#071421]/90 p-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,.35)]">
              <h3 className="text-4xl font-bold text-cyan-300">22+</h3>

              <p className="mt-1 text-white/70">
                Years of Educational Excellence
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* VISION & MISSION */}
      <section className="relative py-32 overflow-hidden">
        {/* glow */}
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-20">
          {/* heading */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-300">
              Vision & Mission
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white lg:text-6xl">
              Shaping Future Dental
              <span className="block text-cyan-300">Professionals</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Empowering future healthcare leaders through innovation,
              compassion, ethical practice, and academic excellence.
            </p>
          </div>

          {/* cards */}
          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            {/* vision */}
            <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl transition duration-500 hover:border-cyan-400/20">
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-[90px] transition duration-500 group-hover:bg-cyan-400/20" />

              <p className="mb-6 text-sm uppercase tracking-[5px] text-cyan-300">
                Our Vision
              </p>

              <h3 className="text-3xl font-semibold text-white">
                Excellence Through Innovation
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-white/70">
                To become a globally respected institution in dental education,
                research, and patient care by fostering innovation, compassion,
                and lifelong learning.
              </p>
            </div>

            {/* mission */}
            <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl transition duration-500 hover:border-cyan-400/20">
              <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-[90px] transition duration-500 group-hover:bg-cyan-400/20" />

              <p className="mb-6 text-sm uppercase tracking-[5px] text-cyan-300">
                Our Mission
              </p>

              <h3 className="text-3xl font-semibold text-white">
                Transforming Dental Education
              </h3>

              <p className="mt-6 text-lg leading-relaxed text-white/70">
                To provide world-class academic education, advanced clinical
                exposure, ethical values, research opportunities, and
                compassionate healthcare experiences.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* LEADERSHIP */}
      <section className="relative overflow-hidden py-32">
        {/* glow */}
        <div className="absolute left-1/2 top-20 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-20">
          {/* heading */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-300">
              Leadership
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white lg:text-6xl">
              Guiding Excellence
              <span className="block text-cyan-300">Through Leadership</span>
            </h2>
          </div>

          {/* content */}
          <div className="mt-20 grid gap-10 lg:grid-cols-[420px_1fr]">
            {/* principal image */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-xl">
              <img
                src="/assets/principal.jpg"
                alt="Principal"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06111f] to-transparent p-8">
                <h3 className="text-2xl font-semibold text-white">
                  Dr. Principal Name
                </h3>

                <p className="text-cyan-300">Principal</p>
              </div>
            </div>

            {/* message */}
            <div className="rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-xl">
              <p className="mb-5 text-sm uppercase tracking-[6px] text-cyan-300">
                Principal's Message
              </p>

              <h3 className="text-3xl font-semibold text-white">
                Building Future Leaders in Dentistry
              </h3>

              <div className="mt-8 space-y-6 text-lg leading-relaxed text-white/70">
                <p>
                  At Mar Baselios Dental College, we are committed to nurturing
                  future dental professionals through academic excellence,
                  ethical values, and advanced clinical education.
                </p>

                <p>
                  Our institution strives to create an environment where
                  innovation, compassion, and lifelong learning shape the future
                  of healthcare.
                </p>

                <p>
                  We welcome students to become part of a transformative journey
                  toward excellence.
                </p>
              </div>

              {/* quote */}
              <div className="mt-10 rounded-[28px] border border-cyan-400/10 bg-cyan-400/[0.04] p-6">
                <p className="text-lg italic text-white/80">
                  “Education is not only knowledge — it is responsibility,
                  compassion, and service to humanity.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ACHIEVEMENTS */}
      <section className="relative overflow-hidden py-32">
        {/* glow */}
        <div className="absolute right-0 top-20 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-20">
          {/* heading */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-300">
              Recognition & Excellence
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white lg:text-6xl">
              Achievements That
              <span className="block text-cyan-300">Define Excellence</span>
            </h2>
          </div>

          {/* bento grid */}
          <div className="mt-20 grid gap-6 lg:grid-cols-4">
            {/* BIG CARD */}
            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-transparent p-8 lg:col-span-2 lg:row-span-2">
              <div className="absolute right-0 top-0 h-[240px] w-[240px] rounded-full bg-cyan-400/10 blur-[120px]" />

              <p className="text-sm uppercase tracking-[5px] text-cyan-300">
                Legacy
              </p>

              <h3 className="mt-5 text-5xl font-bold text-white">22+</h3>

              <p className="mt-2 text-xl text-white/70">
                Years of Educational Excellence
              </p>

              <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="text-white/70">
                  Delivering quality dental education, clinical expertise, and
                  compassionate healthcare since 2002.
                </p>
              </div>
            </div>

            {/* CARD */}
            <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-cyan-300">2500+</h3>

              <p className="mt-3 text-lg text-white">Students Empowered</p>
            </div>

            {/* CARD */}
            <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-cyan-300">NAAC</h3>

              <p className="mt-3 text-lg text-white">Accredited Institution</p>
            </div>

            {/* CARD */}
            <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-cyan-300">100K+</h3>

              <p className="mt-3 text-lg text-white">Clinical Cases</p>
            </div>

            {/* CARD */}
            <div className="rounded-[34px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl">
              <h3 className="text-4xl font-bold text-cyan-300">Research</h3>

              <p className="mt-3 text-lg text-white">
                Innovation & Publications
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CAMPUS LIFE */}
      <section className="relative overflow-hidden py-32">
        {/* glow */}
        <div className="absolute left-0 top-10 h-[400px] w-[400px] rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-6 lg:px-20">
          {/* heading */}
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-300">
              Campus Experience
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white lg:text-6xl">
              A Campus Designed
              <span className="block text-cyan-300">For Future Dentists</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Experience world-class infrastructure, advanced clinics, modern
              laboratories, vibrant student life, and a learning environment
              built for excellence.
            </p>
          </div>

          {/* image grid */}
          <div className="mt-20 grid gap-6 lg:grid-cols-3">
            {/* big image */}
            <div className="overflow-hidden rounded-[40px] border border-white/10 lg:col-span-2">
              <img
                src="/assets/campus1.jpg"
                alt="Campus"
                className="h-[500px] w-full object-cover transition duration-[2000ms] hover:scale-110"
              />
            </div>

            {/* stacked */}
            <div className="grid gap-6">
              <div className="overflow-hidden rounded-[40px] border border-white/10">
                <img
                  src="/assets/campus2.jpg"
                  alt="Students"
                  className="h-[240px] w-full object-cover transition duration-[2000ms] hover:scale-110"
                />
              </div>

              <div className="overflow-hidden rounded-[40px] border border-white/10">
                <img
                  src="/assets/campus3.jpg"
                  alt="Labs"
                  className="h-[240px] w-full object-cover transition duration-[2000ms] hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM CTA */}
      <section className="relative overflow-hidden pb-40">
        {/* glow */}
        <div className="absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

        <div className="relative z-10 mx-auto max-w-[1200px] px-6 lg:px-20">
          <div className="overflow-hidden rounded-[50px] border border-white/10 bg-white/[0.04] px-8 py-20 text-center backdrop-blur-2xl lg:px-20">
            <p className="mb-4 text-sm uppercase tracking-[6px] text-cyan-300">
              Join Our Legacy
            </p>

            <h2 className="text-4xl font-semibold leading-tight text-white lg:text-6xl">
              Begin Your Journey in
              <span className="block text-cyan-300">Dental Excellence</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Discover a future shaped by innovation, compassionate care, and
              academic excellence at Mar Baselios Dental College.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <button className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-[#06111f] transition hover:scale-105">
                Apply Now
              </button>

              <button className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-white transition hover:bg-white/[0.08]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
