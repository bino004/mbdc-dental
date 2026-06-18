"use client";

import { useEffect, useRef, useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Teenu Philip",
      role: "BDS Batch",
      year: "2012",
      text: "I feel very fortunate to be trained by Veteran and Competent faculty of MBDC; the Principal assets of the institution. Scenic and well equipped Campus adds zeal to it. A great platform to learn , grow and explore. Miss every bit of it. PROUD TO BE A BASELIAN",
    },
    {
      name: "Dr. Revathy",
      role: "2009 Batch",
      year: "2009",
      text: "As a proud alumni of mbdc let me tell this college has taught me the basics of dentistry in the best possible way i can get and also the student friendly environment has indeed made it my second home.. and my friends and teachers have always added to the colorful memories of my college life.",
    },
    {
      name: "Dr. Feby Kuriakose",
      role: "Assistant Professor",
      year: "2008 Batch",
      text: "I am so proud to be an ex student of this wonderful institution. Time spend in this college helped me develop my skills required for a good clinician as well as an academician. Talented and experienced staff played a vital role in shaping my carrier. Now as a teacher in this institution am trying to reciprocate the blessing i have got…this college will have a special place in my heart as i found my life partner form this college as well !!",
    },
    {
      name: "Dr. Elias M Markose",
      role: "2008 Batch",
      year: "",
      text: "Mbdc has ample resources to provide its each student with the kind of empathy and skill for each person making them competent with any of their counterpart from reputed institutions..",
    },
    {
      name: "Patient Feedback",
      role: "Dental Care Beneficiary",
      year: "",
      text: "The treatment was affordable and professional. The faculty and students were caring throughout the entire procedure.",
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Smooth Auto-Scrolling loop
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;

    const autoScroll = () => {
      if (!isDragging) {
        slider.scrollLeft += 0.85;

        if (
          slider.scrollLeft >=
          (slider.scrollWidth - slider.clientWidth) / 2
        ) {
          slider.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(autoScroll);
    };

    animationFrame = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrame);
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!slider) return;

    setIsDragging(true);
    startX.current = e.pageX;
    scrollLeft.current = slider.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const slider = sliderRef.current;
    if (!isDragging || !slider) return;

    e.preventDefault();
    const walk = (e.pageX - startX.current) * 2;
    slider.scrollLeft = scrollLeft.current - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    /* REMOVED bg-[#040b15] -> CHANGED TO bg-transparent TO SHOW THE CHAIN PARTICLES */
    <section className="relative overflow-hidden py-36 bg-transparent">
      {/* Dynamic Cyberpunk Lighting Effects - Kept translucent glow layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/10 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[140px] animate-pulse duration-4000" />
        <div className="absolute bottom-1/4 right-1/10 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[160px] animate-pulse duration-3000" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-20 relative z-10">
        {/* Header section with enhanced premium styling */}
        <div className="mb-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <p className="text-xs uppercase tracking-[6px] text-cyan-300 font-semibold pl-1">
              Testimonials
            </p>
          </div>

          <h2 className="text-5xl font-black tracking-tight text-white lg:text-7xl">
            What People
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-400">
            Real experiences shared by our exceptional students, accomplished
            alumni, and clinical beneficiaries.
          </p>
        </div>
      </div>

      {/* Interactive Carousel Layer */}
      <div
        ref={sliderRef}
        className="overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing select-none py-4"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
      >
        <div className="flex w-max gap-8 px-12">
          {duplicatedTestimonials.map((item, index) => (
            <div
              key={index}
              className="group relative w-[440px] flex-shrink-0 rounded-[32px] p-[1px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)]"
            >
              {/* Dynamic Border Gradient Activation on Hover */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent transition-all duration-500 group-hover:from-cyan-500/50 group-hover:via-blue-500/30 group-hover:to-transparent" />

              {/* Card Body with Glassmorphism */}
              <div className="relative h-full rounded-[31px] bg-gradient-to-b from-[#0b1726]/90 to-[#070f1a]/95 p-10 backdrop-blur-2xl flex flex-col justify-between">
                <div>
                  {/* Styled Header Row inside Card */}
                  <div className="flex justify-between items-start mb-6">
                    <span className="font-serif text-6xl leading-none bg-gradient-to-b from-cyan-400 to-blue-500 bg-clip-text text-transparent select-none">
                      “
                    </span>
                    <div className="flex gap-1 items-center px-3 py-1 rounded-md bg-white/5 border border-white/5">
                      <span className="text-yellow-400 text-xs">★</span>
                      <span className="text-white text-xs font-bold font-mono">
                        5.0
                      </span>
                    </div>
                  </div>

                  {/* Main Quote Text */}
                  <p className="text-md leading-relaxed text-slate-300 font-light tracking-wide group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </p>
                </div>

                {/* Separator and Profile Area */}
                <div className="mt-10">
                  <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                  <div className="flex items-center gap-4">
                    {/* Modern Avatar Badge with animated ring on hover */}
                    <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 text-xl font-black text-cyan-300 border border-cyan-500/30 transition-transform duration-500 group-hover:scale-105">
                      <div className="absolute inset-0 rounded-2xl bg-cyan-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative z-10">
                        {item.name.charAt(0)}
                      </span>
                    </div>

                    <div className="truncate">
                      <h3 className="text-md font-bold text-white tracking-wide group-hover:text-cyan-300 transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-2 text-xs text-slate-400 mt-1">
                        <span className="text-cyan-400/90 font-medium">
                          {item.role}
                        </span>
                        {item.year && (
                          <>
                            <span className="text-slate-600">•</span>
                            <span className="bg-white/5 px-2 py-0.5 rounded text-[10px] font-mono text-slate-300">
                              Batch {item.year}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
