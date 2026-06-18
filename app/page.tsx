import Hero from "@/components/Hero";
import WhyChoose from "@/components/WhyChoose";
import Stats from "@/components/Stats";
import Departments from "@/components/Departments";
import Gallery from "@/components/Gallery";
import Admissions from "@/components/Admissions";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import DentalParticles from "@/components/DentalParticles";
import PageBackground from "@/components/PageBackground";
import HomeNews from "@/components/HomeNews";
import HomeAchievements from "@/components/HomeAchievements";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero only */}
      <PageBackground>
        <Hero />

        {/* From WhyChoose → Footer */}

        {/* FULL PARTICLES BACKGROUND */}

        {/* CONTENT ABOVE PARTICLES */}

        <WhyChoose />
        <Stats />
        <Departments />
        <HomeNews/>
        <HomeAchievements/>
        <Gallery />
        <Testimonials />
        <Admissions />
        <Footer />
      </PageBackground>
    </main>
  );
}
