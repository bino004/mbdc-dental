"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  UserPlus,
  CalendarDays,
  Coins,
  TrendingUp,
  GraduationCap,
  Award,
  HeartPulse,
  Building2,
  SmilePlus,
  Terminal,
  Activity,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const dentalHrPolicies = [
  {
    id: "selection-appointment",
    index: "01",
    title: "Staff Selection & Appointment",
    category: "RECRUITMENT",
    icon: UserPlus,
    borderColor: "border-emerald-500/30",
    textGlow: "text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    sysCode: "SYS-REC-01",
    highlights: [
      "Merit-Based SSB Channel",
      "Probationary Performance Audits",
      "Permanent Tenure Approvals",
    ],
    detailedContent: (
      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          At MBDC, the selection and appointment of both teaching and
          non-teaching staff members are carried out through a completely
          transparent and merit-based process. The Principal communicates
          vacancies to the Board of Directors, which channels requirements down
          to the Staff Selection Board (SSB) of Mar thoma Cheriya Pally.
        </p>
        <p>
          The SSB publishes open media notifications and runs extensive
          interviews to onboard premium talent who match strict merit criteria.
          Newly appointed personnel undergo an initial probationary window. Upon
          successful completion and comprehensive performance evaluation,
          assignments are confirmed as permanent positions.
        </p>
      </div>
    ),
  },
  {
    id: "leaves-matrix",
    index: "02",
    title: "Leaves Management System",
    category: "ATTENDANCE",
    icon: CalendarDays,
    borderColor: "border-cyan-500/30",
    textGlow: "text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]",
    badgeBg: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    sysCode: "SYS-LEAVE-02",
    highlights: [
      "5 Integrated Leave Channels",
      "On-Duty University Allotment",
      "Maternity Safeguards",
    ],
    detailedContent: (
      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          MBDC explicitly structures robust work-life security boundaries to
          value staff well-being. Permanent staff hold formal baseline
          allotments for Casual, Half-pay, Annual, and Compensatory leaves
          separate from standard Sundays and designated holidays.
        </p>
        <p>
          Teaching faculty members preserve full access to specialized on-duty
          allocations to comfortably conduct university actions and represent
          research abstracts across authorized healthcare conferences without
          impacting their attendance balance. Female staff are also provided
          maternity leave.
        </p>
      </div>
    ),
  },
  {
    id: "salary-incentives",
    index: "03",
    title: "Salary, Incentives & Increments",
    category: "FINANCIAL",
    icon: Coins,
    borderColor: "border-amber-500/30",
    textGlow: "text-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.3)]",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    sysCode: "SYS-COMP-03",
    highlights: [
      "PF & ESI Protection Nets",
      "Compounded Annual Increments",
      "Staff Welfare Core Fund",
    ],
    detailedContent: (
      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          The college deploys a standardized, predictable salary architecture
          providing fair, equitable compensation. Non-teaching staff retain
          automatic safety layers via integrated Provident Fund (PF)
          configurations and Employee State Insurance (ESI) models.
        </p>
        <p>
          To acknowledge dedication, regular performance appraisals reliably
          append annual increments to base salaries. Additionally, an active
          staff welfare fund delivers immediate emergency assistance alongside
          custom festival allowances linked with annual celebrations.
        </p>
      </div>
    ),
  },
  {
    id: "promotion-tenure",
    index: "04",
    title: "Promotion & Career Scaling",
    category: "CAREER_PATH",
    icon: TrendingUp,
    borderColor: "border-purple-500/30",
    textGlow: "text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]",
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    sysCode: "SYS-RANK-04",
    highlights: [
      "DCI Guideline Synchronization",
      "KUHS Standard Tracking",
      "Appraisal-Driven Allowances",
    ],
    detailedContent: (
      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          Promotional climbs inside the department infrastructure are scaled
          strictly to vacancy patterns and literal alignment with protocols
          dictated by the Dental Council of India (DCI) and the Kerala
          University of Health Sciences (KUHS).
        </p>
        <p>
          If structural capacity ceilings temporarily cap an immediate rank
          promotion, the faculty's ongoing performance review can be utilized to
          unlock custom auxiliary increments to maintain motivation and reward
          growth.
        </p>
      </div>
    ),
  },
  {
    id: "research-support",
    index: "05",
    title: "Research Support & Grants",
    category: "RESEARCH",
    icon: GraduationCap,
    borderColor: "border-rose-500/30",
    textGlow: "text-rose-400 drop-shadow-[0_0_10px_rgba(244,63,94,0.3)]",
    badgeBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    sysCode: "SYS-RES-05",
    highlights: [
      "Full Presentation Coverage",
      "Indexed Journal Subsidies",
      "Concessional Tool Access",
    ],
    detailedContent: (
      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          MBDC completely sponsors active clinical exploration. Teaching
          faculties are entitled to direct financial reimbursements covering
          registration overheads for delivering oral or poster presentations at
          recognized professional conferences.
        </p>
        <p>
          To stimulate persistent publication in high-impact indexed tracks, the
          college funds scientific submission costs. Furthermore, in-house
          advanced machinery like CBCT imaging and clinical lasers are modified
          to concessional research rates.
        </p>
      </div>
    ),
  },
  {
    id: "training-development",
    index: "06",
    title: "Training Programs",
    category: "DEVELOPMENT",
    icon: Award,
    borderColor: "border-blue-500/30",
    textGlow: "text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]",
    badgeBg: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    sysCode: "SYS-DEV-06",
    highlights: [
      "Tri-Domain Training Modules",
      "CDE Credit Reimbursements",
      "Admin Workflow Audits",
    ],
    detailedContent: (
      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          The college runs strategic, periodic educational cycles cutting across
          clinical, academic, and administrative fields. Staff cohorts interface
          with cutting-edge modules to constantly match evolving international
          dental updates.
        </p>
        <p>
          Faculty members are regularly backed to collect external Continuing
          Dental Education (CDE) milestones, ensuring new theoretical
          breakthroughs instantly reshape standard patient chairside
          diagnostics.
        </p>
      </div>
    ),
  },
  {
    id: "medical-benefits",
    index: "07",
    title: "Medical Benefits & Wellness",
    category: "HEALTHCARE",
    icon: HeartPulse,
    borderColor: "border-teal-500/30",
    textGlow: "text-teal-400 drop-shadow-[0_0_10px_rgba(20,184,166,0.3)]",
    badgeBg: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    sysCode: "SYS-MED-07",
    highlights: [
      "Complimentary Screenings",
      "Corporate Immunization Drives",
      "Dependent Health Bundles",
    ],
    detailedContent: (
      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          Our institutional healthcare architecture safeguards staff members
          against clinical exposures. MBDC provides regular, fully subsidized
          physical checkups and critical corporate immunization lines to secure
          the team and their immediate families.
        </p>
      </div>
    ),
  },
  {
    id: "campus-facilities",
    index: "08",
    title: "Campus Utilities & Quarters",
    category: "LOGISTICS",
    icon: Building2,
    borderColor: "border-indigo-500/30",
    textGlow: "text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.3)]",
    badgeBg: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    sysCode: "SYS-PROP-08",
    highlights: [
      "On-Site Quarters Provided",
      "Subsidized Food Courts",
      "Managed High-Speed Wi-Fi",
    ],
    detailedContent: (
      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          Premium living quarters are fully available to personnel directly
          inside the college boundaries. Dedicated dining spaces including a
          secure staff mess deliver fresh catering options on highly subsidized
          balanced schedules.
        </p>
        <p>
          The complete land tract runs over centrally managed, high-speed Wi-Fi
          maps open to all working teams. Furthermore, the campus library
          provides unrestricted high-capacity printing, scanning, and digital
          reprographic pipelines.
        </p>
      </div>
    ),
  },
  {
    id: "staff-recreation",
    index: "09",
    title: "Recreation & Well-being",
    category: "RECREATION",
    icon: SmilePlus,
    borderColor: "border-fuchsia-500/30",
    textGlow: "text-fuchsia-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.3)]",
    badgeBg: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20",
    sysCode: "SYS-REC-09",
    highlights: [
      "Intra-Campus Athletic Meets",
      "Off-Site Leisure Travel",
      "Cultural Team Assemblies",
    ],
    detailedContent: (
      <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
        <p>
          MBDC explicitly recognizes that workplace longevity stems from robust
          downtime. The institution designs seasonal cultural exhibitions,
          intra-college sports tournaments, and fully organized external leisure
          tours intended for organic group refreshment and team solidarity.
        </p>
      </div>
    ),
  },
];

export default function PremiumTerminalPage() {
  const [activeNode, setActiveNode] = useState(dentalHrPolicies[0]);
  const interactionThrottler = useRef(0);
  const activeIndexRef = useRef(0);
  const listPanelRef = useRef<HTMLDivElement>(null);
  const activeIndex = dentalHrPolicies.findIndex((p) => p.id === activeNode.id);

  // Always keep ref current so the native listener reads the latest index
  activeIndexRef.current = activeIndex;

  // Stable mutable ref so the native wheel listener never captures a stale closure
  const cycleRef = useRef((_direction: 1 | -1) => {});
  cycleRef.current = (direction: 1 | -1) => {
    const timestamp = Date.now();
    if (timestamp - interactionThrottler.current < 200) return;
    const next = activeIndexRef.current + direction;
    if (next >= 0 && next < dentalHrPolicies.length) {
      setActiveNode(dentalHrPolicies[next]);
      interactionThrottler.current = timestamp;
    }
  };

  // Attach a native non-passive wheel listener to the list panel ONLY.
  useEffect(() => {
    const el = listPanelRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      cycleRef.current(e.deltaY > 0 ? 1 : -1);
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const handleGlobalDeckWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    cycleRef.current(e.deltaY > 0 ? 1 : -1);
  };

  return (
    <main className="overflow-x-hidden bg-[#030712] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-white">
      <Navbar />

      <PageBackground>
        {/* ================= HIGH-END SCREEN HEADER (PADDING ADJUSTED FOR NAVBAR CLEARANCE) ================= */}
        <section className="relative pt-56 pb-12 px-6 md:px-12 xl:px-20 max-w-[1650px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-white/[0.06]">
          <div className="space-y-2 text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-slate-900 border border-white/10 font-mono text-[10px] tracking-[0.3em] text-cyan-400 uppercase">
              <Terminal className="w-3 h-3 text-cyan-400" />
              GOVERNANCE CONSOLE ENGINE
            </div>
            <h1 className="text-3xl font-black uppercase tracking-tight sm:text-5xl text-white">
              HR POLICY{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 font-mono font-light">
                INDEX
              </span>
            </h1>
          </div>

          {/* Clean Identity Badge */}
          <div className="flex items-center gap-3.5 bg-slate-950 p-3.5 rounded-xl border border-white/10 backdrop-blur-2xl shadow-xl">
            <div className="relative w-9 h-9 bg-white rounded-lg p-1">
              <Image
                src="/assets/baselioslogo.webp"
                alt="MBDC Insignia"
                fill
                className="object-contain"
              />
            </div>
            <div className="font-mono text-left leading-none">
              <div className="text-xs font-bold text-white tracking-wider">
                MAR BASELIOS
              </div>
              <div className="text-[9px] text-slate-500 mt-1 uppercase tracking-tight">
                Dental College Matrix
              </div>
            </div>
          </div>
        </section>

        {/* ================= ULTRA-READABLE DOUBLE-PANEL SYSTEM ================= */}
        <section
          onWheel={handleGlobalDeckWheel}
          className="relative px-6 md:px-12 xl:px-20 max-w-[1650px] mx-auto pt-10 pb-36 grid gap-8 lg:grid-cols-12 items-start"
        >
          {/* LEFT 5-COLUMNS: THE SELECTOR DECK */}
          <div
            ref={listPanelRef}
            className="lg:col-span-5 flex flex-col gap-2.5 max-h-[66vh] overflow-y-auto pr-2 custom-scrollbar overscroll-contain"
          >
            {dentalHrPolicies.map((node) => {
              const IconModule = node.icon;
              const isSelected = activeNode.id === node.id;

              return (
                <button
                  key={node.id}
                  onClick={() => setActiveNode(node)}
                  className={`
                    w-full text-left p-3.5 rounded-xl border transition-all duration-300 relative overflow-hidden flex items-center justify-between group
                    ${
                      isSelected
                        ? `bg-slate-900/90 ${node.borderColor} shadow-[0_15px_30px_rgba(0,0,0,0.4)] border-l-4 border-l-cyan-400`
                        : "bg-slate-950/40 border-white/[0.03] hover:bg-slate-900/30 hover:border-white/10"
                    }
                  `}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`font-mono text-xs font-bold ${isSelected ? "text-cyan-400" : "text-slate-600 group-hover:text-slate-400"}`}
                    >
                      {node.index}
                    </div>

                    <div
                      className={`p-2 rounded-lg border transition-all ${isSelected ? "bg-slate-950 border-white/10 text-white shadow-inner" : "bg-white/[0.02] border-white/5 text-slate-500 group-hover:text-slate-400"}`}
                    >
                      <IconModule className="w-3.5 h-3.5" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-[8px] font-mono tracking-widest text-slate-500 uppercase">
                        {node.category}
                      </div>
                      <h3
                        className={`text-xs font-bold uppercase tracking-tight truncate mt-0.5 ${isSelected ? "text-white" : "text-slate-400 group-hover:text-slate-200"}`}
                      >
                        {node.title}
                      </h3>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-3.5 h-3.5 shrink-0 transition-all duration-300 ${isSelected ? "text-cyan-400 translate-x-0 opacity-100" : "text-slate-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5"}`}
                  />
                </button>
              );
            })}
          </div>

          {/* RIGHT 7-COLUMNS: THE READABLE HOLOGRAPHIC SCREEN */}
          <div className="lg:col-span-7 lg:sticky lg:top-36">
            <div className="relative rounded-2xl border border-white/10 bg-slate-950/80 p-6 md:p-8 backdrop-blur-3xl shadow-[0_40px_60px_rgba(0,0,0,0.6)] overflow-hidden min-h-[480px] flex flex-col justify-between">
              <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-cyan-400 via-indigo-500 to-transparent" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-5 text-left">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`px-2 py-0.5 rounded font-mono text-[9px] font-bold border ${activeNode.badgeBg}`}
                      >
                        {activeNode.sysCode}
                      </div>
                      <div>
                        <div className="text-[9px] font-mono text-slate-500 tracking-wider uppercase">
                          ACTIVE DIRECTIVE DECLARATION
                        </div>
                        <h2 className="text-xl font-black text-white uppercase tracking-tight mt-0.5">
                          {activeNode.title}
                        </h2>
                      </div>
                    </div>

                    <div className="text-left sm:text-right font-mono shrink-0">
                      <div className="text-[9px] font-bold text-slate-600 tracking-wider">
                        REGISTRY MAP
                      </div>
                      <div className="text-sm font-black text-white">
                        0{activeIndex + 1}{" "}
                        <span className="text-slate-600">
                          / 0{dentalHrPolicies.length}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-12 items-start text-left">
                    <div className="md:col-span-7 py-0.5 font-sans">
                      {activeNode.detailedContent}
                    </div>

                    <div className="md:col-span-5 space-y-2 bg-slate-900/30 p-4 rounded-xl border border-white/5 shadow-inner">
                      <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest flex items-center gap-1.5 mb-2.5">
                        <Layers className="w-3 h-3 text-cyan-400" />
                        KEY_COMPONENTS
                      </div>
                      {activeNode.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-[11px] text-slate-300 font-mono leading-tight"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 pt-4 border-t border-white/[0.05] flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-[9px] text-slate-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3 h-3 text-cyan-400 animate-pulse" />
                    <span>SYSTEM_STATUS: SECURE_SYNC</span>
                  </div>
                </div>
                <div className="text-slate-400 flex items-center gap-1 bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded">
                  <ArrowDown className="w-2.5 h-2.5 animate-bounce text-cyan-400" />
                  SCROLL OR WHEEL TO CYCLE MATRIX
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= COMPLIANCE BAR ================= */}
        <section className="relative pb-36 px-6 md:px-12 xl:px-20 max-w-[1650px] mx-auto">
          <div className="relative rounded-xl border border-white/5 bg-slate-950/20 p-5 backdrop-blur-xl flex flex-col sm:flex-row items-center gap-4 justify-between text-left">
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-gradient-to-b from-transparent via-cyan-500/40 to-transparent" />
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <p className="text-xs text-slate-400 font-mono tracking-tight leading-relaxed">
                STATUTORY CODE COMPLIANCE: The data metrics managed inside this
                scroller reflect operations certified by the Dental Council of
                India (DCI) and the Kerala University of Health Sciences (KUHS).
              </p>
            </div>
          </div>
        </section>

        <Footer />
      </PageBackground>
    </main>
  );
}
