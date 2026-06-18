"use client";
import Link from "next/link";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Search, ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

/** Renders a submenu panel in a portal at fixed coords derived from the trigger element */
function SubMenuPanel({
  triggerRef,
  onMouseEnter,
  onMouseLeave,
  title,
  children,
}: {
  triggerRef: React.RefObject<HTMLElement | null>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  title: string;
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      // Shifted the sub-menu slightly to the left (overlap) for a better fit
      setPos({ top: rect.top, left: rect.right - 8 });
    }
  }, [triggerRef]);

  if (!pos) return null;

  return createPortal(
    <motion.div
      initial={{ opacity: 0, x: 14, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 10, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ position: "fixed", top: pos.top, left: pos.left, zIndex: 9999 }}
      className="w-[280px] rounded-[28px] border border-white/10 bg-[#071421]/95 p-3 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,.35)] flex flex-col"
    >
      <p className="mb-3 px-3 text-xs uppercase tracking-[4px] text-cyan-300 shrink-0">
        {title}
      </p>
      <div
        className="overflow-y-auto overscroll-contain scrollbar-thin"
        style={{
          maxHeight: "min(340px, calc(100vh - 160px))",
          scrollbarWidth: "thin",
          scrollbarColor: "rgba(6,182,212,0.5) rgba(255,255,255,0.05)",
        }}
        onWheel={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </motion.div>,
    document.body,
  );
}

const menu = [
  "Home",
  "About Us",
  "Admissions",
  "Academics",
  "Departments",
  "Facilities",
  "Patient Care",
  "NDC Compliance",
];

const topMenu = [
  "IQAC",
  "Committees & Cells",
  "NIRF",
  "Alumni",
  "Gallery",
  "News & Events",
  "Related Links",
  "More",
  "Login",
];

const iqacMenu = [
  "NAAC",
  "Internal Quality Assurance Cell",
  "Minutes & ATR of IQAC Meetings",
  "IQAC Initiatives",
  "Institutional Policies",
  "SWOC Analysis & Strategic Plan",
  "Capability Enhancement Scheme",
  "Feedback",
  "Institution Best Practices",
  "Institution Distinctiveness",
];
const relatedLinksMenu = [
  "NMC",
  "NDC",
  "NAAC",
  "UGC",
  "KUHS",
  "DME Kerala",
  "Government of Kerala",
  "University Grants Commission",
];

const moreMenu = [
  "Downloads",
  "Careers",
  "Tender Notices",
  "Mandatory Disclosure",
  "Student Corner",
];

const loginMenu = [
  "Student Login",
  "Faculty Login",
  "Staff Login",
  "Parent Login",
];

const committeesMenu = [
  "Anti Ragging Committee",
  "Women Cell",
  "Grievance Redressal Cell for Students",
  "Internal Complaints Committee",
  "Disciplinary Committee",
  "Dental Education Unit",
  "Curriculum Committee",
  "Career Guidance & Placement Cell",
  "International Students Cell",
  "SC/ST Cell",
  "OBC Cell",
  "Minority Cell",
  "PTA",
];

const relatedLinksMap: Record<string, string> = {
  NMC: "https://www.nmc.org.in",
  NDC: "https://dciindia.gov.in",
  NAAC: "https://www.naac.gov.in",
  UGC: "https://www.ugc.gov.in",
  KUHS: "https://kuhs.ac.in",
  "DME Kerala": "https://dme.kerala.gov.in",
  "Government of Kerala": "https://kerala.gov.in",
  "University Grants Commission": "https://www.ugc.gov.in",
};

const loginLinksMap: Record<string, string> = {
  "Student Login": "https://your-student-login-url.com",
  "Faculty Login": "https://your-faculty-login-url.com",
  "Staff Login": "https://your-staff-login-url.com",
  "Parent Login": "https://your-parent-login-url.com",
};

const topMenuLinks = {
  IQAC: "/iqac",
  NIRF: "/nirf.pdf",
  Alumni: "/alumni",
  Gallery: "/gallery",
  "News & Events": "/news-and-events",
};

const dropdownMenus = {
  "About Us": {
    title: "College Overview",
    items: [
      "Our Story",
      "Vision & Mission",
      "Governance",
      "Hr Policy",
      "Staff Appraisal",
      "Code of Conduct",
      "Digital Governance",
    ],
  },

  Admissions: {
    title: "Admissions",
    items: ["BDS", "MDS", "Paramedical Courses", "Fee Structure"],
  },

  Academics: {
    title: "Academic Excellence",
    items: [
      "Programs Offered",
      "Program Outcomes",
      "Examinations",
      "Research",
      "Library",
      "Add-On Courses",
      "Dental Graduate Attributes",
      "Academic Calendar",
      "Academic Forum",
      "Achievements",
      "Academic Monitoring Cell",
    ],
  },

  Departments: {
    title: "Departments",
    items: [
      "Clinical Departments",
      "Non Clinical Departments",
      "Supporting Staff",
    ],
  },

  "NDC Compliance": {
    title: "National Dental Commission",
    items: [
      "Biometric Attendance",
      "Faculty & PG Details",
      "OPD Statistics",
      "IPD Statistics",
      "Clinical Procedures",
    ],
  },
};

const governanceSubmenu = [
  "Board Of Directors",
  "Administration",
  "Dean",
  "Supporting Staff",
  "Institution Framework",
];

const paramedicalSubmenu = [
  "Dental Hygiene",
  "Dental Operating Room Assistant",
  "Dental Mechanics",
];

const academicsSubmenus = {
  "Programs Offered": ["BDS", "MDS", "Paramedical", "PhD"],

  "Program Outcomes": ["BDS Outcomes", "MDS Outcomes", "Paramedical Outcomes"],

  Examinations: ["BDS (UG)", "MDS (PG)", "Paramedical"],

  Research: [
    "Institutional Ethics Committee",
    "Institutional Innovation Council",
    "Institutional Research Committee (IRC)",
    "IEDC",
  ],
};

const departmentSubmenus = {
  "Clinical Departments": [
    "Orthodontics and Dentofacial Orthopedics",
    "Oral and Maxillofacial Surgery",
    "Public Health Dentistry",
    "Prosthodontics and Crown & Bridge",
    "Oral Pathology & Microbiology",
    "Oral Medicine & Radiology",
    "Conservative Dentistry & Endodontics",
    "Pedodontics and Preventive Dentistry",
    "Periodontics",
  ],

  "Non Clinical Departments": [
    "Anatomy",
    "Physiology",
    "Biochemistry",
    "Microbiology",
    "Pathology",
    "Pharmacology",
    "General Surgery",
    "General Medicine",
    "Dental Materials",
  ],
};

const menuLinks: Record<string, string> = {
  Home: "/",
  "About Us": "/about",
  Admissions: "/admissions",
  Academics: "/academics",
  Departments: "/departments",
  Facilities: "/facilities",
  "Patient Care": "/patient-care",
  "NDC Compliance": "/ndc-compliance",
};

function SubMenuItem({
  sub,
  item,
  isGovernance,
  isParamedical,
  hasAcademicSubmenu,
  hasDepartmentSubmenu,
  hasSubMenu,
  showGovernanceSubmenu,
  showParamedicalSubmenu,
  activeAcademicSubmenu,
  govTimerRef,
  paraTimerRef,
  acadTimerRef,
  setShowGovernanceSubmenu,
  setShowParamedicalSubmenu,
  setActiveAcademicSubmenu,
}: {
  sub: string;
  item: string;
  isGovernance: boolean;
  isParamedical: boolean;
  hasAcademicSubmenu: boolean;
  hasDepartmentSubmenu: boolean;
  hasSubMenu: boolean;
  showGovernanceSubmenu: boolean;
  showParamedicalSubmenu: boolean;
  activeAcademicSubmenu: string | null;
  govTimerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  paraTimerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  acadTimerRef: React.MutableRefObject<ReturnType<typeof setTimeout> | null>;
  setShowGovernanceSubmenu: (v: boolean) => void;
  setShowParamedicalSubmenu: (v: boolean) => void;
  setActiveAcademicSubmenu: (v: string | null) => void;
}) {
  const triggerRef = useRef<HTMLAnchorElement>(null);

  const showThis =
    (isGovernance && showGovernanceSubmenu) ||
    (isParamedical && showParamedicalSubmenu) ||
    ((hasAcademicSubmenu || hasDepartmentSubmenu) &&
      activeAcademicSubmenu === sub);

  const subItems = isGovernance
    ? governanceSubmenu
    : isParamedical
      ? paramedicalSubmenu
      : hasAcademicSubmenu
        ? (academicsSubmenus[sub as keyof typeof academicsSubmenus] ?? [])
        : hasDepartmentSubmenu
          ? (departmentSubmenus[sub as keyof typeof departmentSubmenus] ?? [])
          : [];

  const subTitle = isGovernance
    ? "Governance"
    : isParamedical
      ? "Paramedical Courses"
      : sub;

  const subHref = (s: string) => {
    if (isGovernance)
      return `/about/governance/${s.toLowerCase().replace(/\s+/g, "-")}`;

    if (isParamedical)
      return `/admissions/paramedical-courses/${s.toLowerCase().replace(/\s+/g, "-")}`;

    if (hasDepartmentSubmenu)
      return `/departments/${sub.toLowerCase().replace(/\s+/g, "-")}/${s
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/\s+/g, "-")}`;

    if (item === "NDC Compliance")
      return `/ndc-compliance/${s
        .toLowerCase()
        .replace(/&/g, "and")
        .replace(/\s+/g, "-")}`;

    return `/academics/${sub.toLowerCase().replace(/\s+/g, "-")}/${s
      .toLowerCase()
      .replace(/\s+/g, "-")}`;
  };

  const handleEnter = () => {
    if (isGovernance) {
      if (govTimerRef.current) clearTimeout(govTimerRef.current);
      setShowGovernanceSubmenu(true);
    }
    if (isParamedical) {
      if (paraTimerRef.current) clearTimeout(paraTimerRef.current);
      setShowParamedicalSubmenu(true);
    }
    if (hasAcademicSubmenu || hasDepartmentSubmenu) {
      if (acadTimerRef.current) clearTimeout(acadTimerRef.current);
      setActiveAcademicSubmenu(sub);
    }
  };

  const handleLeave = () => {
    if (isGovernance)
      govTimerRef.current = setTimeout(
        () => setShowGovernanceSubmenu(false),
        150,
      );
    if (isParamedical)
      paraTimerRef.current = setTimeout(
        () => setShowParamedicalSubmenu(false),
        150,
      );
    if (hasAcademicSubmenu || hasDepartmentSubmenu)
      acadTimerRef.current = setTimeout(
        () => setActiveAcademicSubmenu(null),
        150,
      );
  };

  return (
    <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <Link
        ref={triggerRef}
        href={`${item === "About Us" ? "/about" : `/${item.toLowerCase().replace(/\s+/g, "-")}`}/${sub.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-")}`}
        className="flex w-full items-center justify-between rounded-2xl px-4 py-4 text-left text-white/80 transition hover:bg-white/[0.05] hover:text-cyan-300"
      >
        {sub}
        {hasSubMenu && (
          <ChevronDown className="-rotate-90 h-4 w-4 opacity-50" />
        )}
      </Link>

      {hasSubMenu && showThis && (
        <SubMenuPanel
          triggerRef={triggerRef}
          title={subTitle}
          onMouseEnter={() => {
            if (isGovernance && govTimerRef.current)
              clearTimeout(govTimerRef.current);
            if (isParamedical && paraTimerRef.current)
              clearTimeout(paraTimerRef.current);
            if (hasAcademicSubmenu && acadTimerRef.current)
              clearTimeout(acadTimerRef.current);
          }}
          onMouseLeave={handleLeave}
        >
          {subItems.map((s, idx) => (
            <Link
              key={idx}
              href={subHref(s)}
              className="flex w-full rounded-2xl px-4 py-4 text-left text-white/80 transition hover:bg-cyan-400/[0.06] hover:text-cyan-200"
            >
              {s}
            </Link>
          ))}
        </SubMenuPanel>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeTopDropdown, setActiveTopDropdown] = useState<string | null>(
    null,
  );

  const [showGovernanceSubmenu, setShowGovernanceSubmenu] = useState(false);
  const [showParamedicalSubmenu, setShowParamedicalSubmenu] = useState(false);
  const [activeAcademicSubmenu, setActiveAcademicSubmenu] = useState<
    string | null
  >(null);

  const govTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const paraTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const acadTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iqacTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 65,
      }}
      className="absolute inset-x-0 top-0 z-50 pt-5"
    >
      <div className="mx-auto max-w-[1700px] px-6">
        <div className="bg-transparent px-8 py-4">
          {/* TOP NAV */}
          <div className="hidden xl:flex mb-6 items-center justify-end gap-7 text-sm font-medium text-white/80">
            {topMenu.map((item, index) => {
              const hasTopDropdown =
                item === "IQAC" ||
                item === "Related Links" ||
                item === "Committees & Cells" ||
                item === "More" ||
                item === "Login";

              const dropdownItems =
                item === "IQAC"
                  ? iqacMenu
                  : item === "Related Links"
                    ? relatedLinksMenu
                    : item === "Committees & Cells"
                      ? committeesMenu
                      : item === "More"
                        ? moreMenu
                        : item === "Login"
                          ? loginMenu
                          : [];

              if (!hasTopDropdown) {
                const targetLink =
                  topMenuLinks[item as keyof typeof topMenuLinks] || "#";
                return (
                  <Link
                    key={index}
                    href={targetLink}
                    className="group flex items-center gap-1 cursor-pointer transition-all duration-300 hover:text-cyan-300"
                  >
                    <motion.span whileHover={{ y: -2 }} className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
                    </motion.span>
                  </Link>
                );
              }

              return (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => {
                    if (iqacTimerRef.current)
                      clearTimeout(iqacTimerRef.current);
                    hasTopDropdown && setActiveTopDropdown(item);
                  }}
                  onMouseLeave={() => {
                    iqacTimerRef.current = setTimeout(() => {
                      setActiveTopDropdown(null);
                    }, 200);
                  }}
                >
                  <motion.button
                    whileHover={{ y: -2 }}
                    className="group flex items-center gap-1 cursor-pointer transition-all duration-300 hover:text-cyan-300"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-cyan-300 transition-all duration-300 group-hover:w-full" />
                    </span>

                    {hasTopDropdown && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeTopDropdown === item ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </motion.button>

                  {hasTopDropdown && activeTopDropdown === item && (
                    <div
                      className={`absolute top-full z-[9999] mt-2 ${
                        item === "IQAC"
                          ? "w-[300px]"
                          : item === "Committees & Cells"
                            ? "w-[300px]"
                            : item === "Related Links"
                              ? "w-[250px]"
                              : item === "More"
                                ? "w-[200px]"
                                : item === "Login"
                                  ? "w-[200px]"
                                  : "w-[200px]"
                      } ${
                        item === "Login" ||
                        item === "More" ||
                        item === "Related Links"
                          ? "right-0"
                          : "left-0"
                      }`}
                      onMouseEnter={() => {
                        if (iqacTimerRef.current)
                          clearTimeout(iqacTimerRef.current);
                      }}
                      onMouseLeave={() => {
                        setActiveTopDropdown(null);
                      }}
                    >
                      <div className="rounded-[24px] border border-white/10 bg-[#071421]/95 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,.35)] p-3">
                        {dropdownItems.map((sub, i) => (
                          <Link
                            key={i}
                            href={
                              item === "Related Links"
                                ? relatedLinksMap[sub]
                                : item === "IQAC"
                                  ? `/iqac/${sub
                                      .toLowerCase()
                                      .replace(/&/g, "and")
                                      .replace(/\s+/g, "-")}`
                                  : item === "Committees & Cells"
                                    ? `/committees-and-cells/${sub
                                        .toLowerCase()
                                        .replace(/&/g, "and")
                                        .replace(/\//g, "-")
                                        .replace(/\s+/g, "-")}`
                                    : item === "More"
                                      ? `/more/${sub
                                          .toLowerCase()
                                          .replace(/&/g, "and")
                                          .replace(/\s+/g, "-")}`
                                      : item === "Login"
                                        ? loginLinksMap[sub]
                                        : "#"
                            }
                            target={
                              item === "Related Links" || item === "Login"
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              item === "Related Links" || item === "Login"
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="block whitespace-nowrap rounded-xl px-4 py-2 text-white/80 hover:bg-white/5 hover:text-cyan-300"
                          >
                            {sub}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <button className="text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] transition-all hover:scale-110 hover:text-cyan-300">
              <Search className="h-5 w-5" />
            </button>
          </div>

          {/* MAIN NAV */}
          <div className="flex items-center justify-between">
            {/* LEFT */}
            <div className="flex shrink-0 items-center gap-2 sm:gap-4">
              <Image
                src="/assets/baselioslogo.webp"
                alt="College Logo"
                width={52}
                height={52}
                className="drop-shadow-[0_0_15px_rgba(255,255,255,.15)]"
              />

              <div>
                <h1 className="text-[16px] sm:text-[20px] font-bold leading-none text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)] drop-shadow-[0_3px_20px_rgba(0,0,0,.9)]">
                  Mar Baselios
                </h1>

                <h2 className="mt-1 text-[18px] sm:text-[22px] font-bold leading-none text-cyan-300">
                  Dental College
                </h2>

                <p className="mt-1 text-xs sm:text-sm text-white/90">
                  Since 2002
                </p>
              </div>

              <Image
                src="/assets/naac.webp"
                alt="NAAC"
                width={55}
                height={55}
                className="ml-2"
              />
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(true)}
              className="
                flex 2xl:hidden
                items-center justify-center
                rounded-full
                border border-white/10
                bg-white/5
                p-3
                text-white
                backdrop-blur-xl
                transition
                hover:bg-white/10
              "
            >
              <Menu className="h-6 w-6" />
            </button>

            {/* MENU */}
            <nav className="hidden 2xl:flex items-center gap-2 2xl:gap-3">
              {menu.map((item, index) => {
                const hasDropdown = item in dropdownMenus;

                return (
                  <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => hasDropdown && setActiveDropdown(item)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <motion.div
                      whileHover={{
                        y: -4,
                        scale: 1.04,
                      }}
                      className={`group relative rounded-full px-2 py-2.5 text-[17px] font-semibold transition-all duration-300 ${
                        index === 0
                          ? "text-cyan-300"
                          : "text-white hover:text-cyan-300"
                      }`}
                    >
                      {hasDropdown ? (
                        <div className="relative flex items-center gap-1 whitespace-nowrap cursor-pointer">
                          <span className="relative">
                            {item}

                            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                          </span>

                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              activeDropdown === item ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      ) : (
                        <Link
                          href={menuLinks[item]}
                          className="relative flex items-center gap-1 whitespace-nowrap"
                        >
                          <span className="relative">
                            {item}

                            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
                          </span>
                        </Link>
                      )}
                    </motion.div>

                    {/* DROPDOWN */}
                    {hasDropdown && activeDropdown === item && (
                      <div
                        // Shifted Departments and Facilities slightly to the left (-translate-x-1/2) so the child menu doesn't get cut off on the right
                        className={`absolute top-full pt-3 w-[320px] ${
                          item === "NDC Compliance" || item === "Patient Care"
                            ? "right-0"
                            : item === "Departments" || item === "Facilities"
                              ? "left-1/2 -translate-x-1/2"
                              : "left-0"
                        }`}
                      >
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className={`rounded-[30px] border border-white/10 bg-[#071421]/90 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,.35)] ${item === "Academics" ? "flex flex-col" : ""}`}
                          style={
                            item === "Academics"
                              ? { maxHeight: "min(480px, calc(100vh - 120px))" }
                              : {}
                          }
                        >
                          {/* Header */}
                          <div className="border-b border-white/10 p-6 shrink-0">
                            <p className="text-xs uppercase tracking-[4px] text-cyan-300">
                              {
                                dropdownMenus[
                                  item as keyof typeof dropdownMenus
                                ].title
                              }
                            </p>
                          </div>

                          {/* Items — scrollable for Academics */}
                          <div
                            className={`p-3 ${item === "Academics" ? "overflow-y-auto overscroll-contain flex-1" : ""}`}
                            onWheel={
                              item === "Academics"
                                ? (e) => e.stopPropagation()
                                : undefined
                            }
                          >
                            {dropdownMenus[
                              item as keyof typeof dropdownMenus
                            ].items.map((sub, i) => {
                              const isGovernance = sub === "Governance";
                              const isParamedical =
                                sub === "Paramedical Courses";
                              const hasAcademicSubmenu =
                                item === "Academics" &&
                                sub in academicsSubmenus;
                              const hasDepartmentSubmenu =
                                item === "Departments" &&
                                sub in departmentSubmenus;
                              const hasSubMenu =
                                isGovernance ||
                                isParamedical ||
                                hasAcademicSubmenu ||
                                hasDepartmentSubmenu;

                              return (
                                <SubMenuItem
                                  key={i}
                                  sub={sub}
                                  item={item}
                                  isGovernance={isGovernance}
                                  isParamedical={isParamedical}
                                  hasAcademicSubmenu={hasAcademicSubmenu}
                                  hasDepartmentSubmenu={hasDepartmentSubmenu}
                                  hasSubMenu={hasSubMenu}
                                  showGovernanceSubmenu={showGovernanceSubmenu}
                                  showParamedicalSubmenu={
                                    showParamedicalSubmenu
                                  }
                                  activeAcademicSubmenu={activeAcademicSubmenu}
                                  govTimerRef={govTimerRef}
                                  paraTimerRef={paraTimerRef}
                                  acadTimerRef={acadTimerRef}
                                  setShowGovernanceSubmenu={
                                    setShowGovernanceSubmenu
                                  }
                                  setShowParamedicalSubmenu={
                                    setShowParamedicalSubmenu
                                  }
                                  setActiveAcademicSubmenu={
                                    setActiveAcademicSubmenu
                                  }
                                />
                              );
                            })}
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
      {/* MOBILE MENU */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          x: menuOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.4 }}
        className={`
          fixed inset-0 z-[100]
          bg-[#06111f]/95
          backdrop-blur-2xl
          2xl:hidden
          ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}
        `}
      >
        {/* top */}
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <div>
            <h2 className="text-xl font-bold text-white">Mar Baselios</h2>
            <p className="text-cyan-300">Dental College</p>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-full border border-white/10 p-3 text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* menu content */}
        <div
          className="
            h-[calc(100vh-90px)]
            overflow-y-scroll
            overscroll-contain
            touch-pan-y
            px-8
            py-8
            pb-32
          "
        >
          <h3 className="mb-5 text-sm uppercase tracking-[4px] text-cyan-300">
            Main Menu
          </h3>

          <div className="space-y-5">
            {menu.map((item, index) => (
              <button
                key={index}
                className="block text-left text-2xl font-medium text-white transition hover:text-cyan-300"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="my-10 h-px bg-white/10" />

          <h3 className="mb-5 text-sm uppercase tracking-[4px] text-cyan-300">
            Quick Links
          </h3>

          <div className="grid grid-cols-2 gap-4">
            {topMenu.map((item, index) => (
              <button
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left text-white transition hover:border-cyan-400/30 hover:text-cyan-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
