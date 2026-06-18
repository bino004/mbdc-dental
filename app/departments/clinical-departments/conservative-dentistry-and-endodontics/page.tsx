"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";

// Define TypeScript interfaces
interface Faculty {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface CourseOutcome {
  code: string;
  text: string;
  level: string;
}

interface OutcomeData {
  [key: string]: CourseOutcome[];
}

interface DepartmentActivity {
  id: number;
  title: string;
  subtitle?: string;
  speakers?: string;
  date: string;
  category:
    | "CDE Program"
    | "Workshop"
    | "Webinar"
    | "Clinical Demonstration"
    | "Celebration";
}

interface GalleryItem {
  id: number;
  title: string;
  description: string;
  images: string[];
}

export default function ConservativeDepartment() {
  const [activeTab, setActiveTab] = useState("MISSION");
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [activeOutcomeCategory, setActiveOutcomeCategory] =
    useState("KNOWLEDGE");
  const [activeAcademicsSubTab, setActiveAcademicsSubTab] =
    useState("PROGRAMS");

  // Gallery Specific States - Tracks the full item context inside the popup
  const [albumIndexes, setAlbumIndexes] = useState<Record<number, number>>({});
  const [activeLightbox, setActiveLightbox] = useState<{
    item: GalleryItem;
    index: number;
  } | null>(null);

  // Main Tab Navigation
  const tabs = [
    "MISSION",
    "FACULTY",
    "PATIENT CARE",
    "GALLERY",
    "COURSE OUTCOME",
    "ACTIVITIES",
    "ACADEMICS",
  ];

  // Mission details
  const missionStatements = [
    "Impart quality dental education and training in orthodontics to achieve academic excellence and global competencies.",
    "Follow learner-centered orthodontic education, and patient-centered care.",
    "Inculcate the spirit of service and the sense of caring for the needs of diverse communities, the underprivileged in particular.",
    "Enable the students for serving as leaders in health professional education.",
    "Instill the habit of research and life-long learning.",
  ];

  // Patient Care Data
  const patientCareFeatures = [
    "All treatments are offered at concessional rates without diluting the quality",
    "Monitoring of sterilization and disinfection protocols",
    "Maintaining a patient-friendly atmosphere",
    "Different myofunctional and orthopedic appliances for skeletal malocclusions in growing children",
    "Removable and fixed appliances for correcting malocclusion",
    "Availability of recent bracket systems including self-ligating and ceramic brackets",
    "Surgical eruption and transplantation of impacted teeth",
    "Surgical orthodontics to correct skeletal deformities",
    "Adult orthodontics with interdisciplinary management",
    "Removable, fixed and clear retainers after orthodontic treatment",
    "Regular post-treatment check-ups",
    "Patient feedback system",
  ];

  // Course Outcomes Structured Data
  const courseOutcomes: OutcomeData = {
    KNOWLEDGE: [
      {
        code: "CO1",
        text: "Understand the normal growth and development of dentition and associated craniofacial structures and its role in dentofacial anomalies and malocclusion",
        level: "K2",
      },
      {
        code: "CO2",
        text: "Define Orthodontics, various treatment modalities in Orthodontics, and the method of arriving at a diagnosis based on the problem list.",
        level: "K3",
      },
      {
        code: "CO3",
        text: "Learn the use of essential and supplemental diagnostic aids and recent developments in diagnosing various malocclusions",
        level: "K4",
      },
      {
        code: "CO4",
        text: "Understand the biological basis of orthodontic tooth movement, theories of tooth movement, and the types of tooth movement including adult orthodontics",
        level: "K2",
      },
    ],
    SKILL: [
      {
        code: "CO5",
        text: "Learn about different orthodontic materials and get the knowledge and skill for fabrication of various Orthodontic, orthopedic, and myofunctional appliances.",
        level: "K3",
      },
      {
        code: "CO6",
        text: "Learn about the preventive, interceptive, corrective, and surgical orthodontic procedures and their clinical applications.",
        level: "K3",
      },
      {
        code: "CO7",
        text: "Learn about the causes of orthodontic relapse and methods for preventing relapse.",
        level: "K3",
      },
      {
        code: "CO8",
        text: "Develop the skills for making dental arch impressions, preparation of study models, performing model analyses, and interpreting the results.",
        level: "K4",
      },
    ],
    ATTITUDE: [
      {
        code: "CO9",
        text: "Learn the art of communication with patients and bystanders with an emphasis on child psychology. Also learn the importance and methods of educating and motivating patients, parents, and the public regarding the need for orthodontic treatment.",
        level: "K3",
      },
      {
        code: "CO10",
        text: "Learn about and put into practice cross-infection control measures in clinical practice.",
        level: "K3",
      },
      {
        code: "CO11",
        text: "Learn about bioethics and medicolegal aspects",
        level: "K1",
      },
      {
        code: "CO12",
        text: "Understand the importance of enhancing knowledge and remaining abreast with the latest developments by attending CDEs and conferences.",
        level: "K2",
      },
    ],
  };

  // Activities Data
  const departmentActivities: DepartmentActivity[] = [
    {
      id: 1,
      title: "Esthetico–2017",
      subtitle:
        "CDE Program on Fixed Functional Appliance–Class II Molar correction",
      speakers: "Dr. Gurkeerat Singh",
      date: "27/03/2017",
      category: "CDE Program",
    },
    {
      id: 2,
      title: "Managing Transverse Discrepancies – A day with experts",
      subtitle: "CDE Program",
      speakers: "Dr. P.G Francis & Dr. Rajganesh Gautam",
      date: "01/10/2019",
      category: "CDE Program",
    },
    {
      id: 3,
      title:
        "Advanced Orthodontic Appliances – Self ligating and Aligner System",
      subtitle: "Workshop",
      speakers: "Dr. Dharma Deep",
      date: "14/03/2021",
      category: "Workshop",
    },
    {
      id: 4,
      title: "Learn from Masters – Orthognathic Surgery",
      subtitle: "Webinar",
      speakers: "Dr. Varghese Mani & Dr. P.G Francis",
      date: "28/09/2021",
      category: "Webinar",
    },
    {
      id: 5,
      title: "Clinical management of functional appliances",
      subtitle: "Webinar",
      speakers: "Dr. Asok Kumar Jena",
      date: "14/01/2022",
      category: "Webinar",
    },
    {
      id: 6,
      title: "Clinical demonstration on Clear Aligners",
      speakers: "32 Watts",
      date: "23/03/2022",
      category: "Clinical Demonstration",
    },
    {
      id: 7,
      title: "World Orthodontic Health Day 2022",
      subtitle: "Wire-Craft and Smile contest",
      date: "18/05/2022",
      category: "Celebration",
    },
  ];

  // Faculty Data
  const facultyMembers: Faculty[] = [
    { id: 1, name: "Dr. Joseph Sebastian", role: "Professor & HOD", image: "" },
    { id: 2, name: "Dr. Biju Kalarickal", role: "Professor", image: "" },
    { id: 3, name: "Terry Thomas", role: "Professor", image: "" },
    { id: 4, name: "Dr. P.G Francis", role: "Professor", image: "" },
    { id: 5, name: "Dr. Brijesh S", role: "Reader", image: "" },
    {
      id: 6,
      name: "Dr. Arun Bosco Jerald",
      role: "Senior Lecturer",
      image: "",
    },
  ];

  // Gallery Production Data
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Advanced PG Clinical Operatory",
      description:
        "State-of-the-art clinical wing configured with high-end ergonomic dental units and fully integrated smart monitoring architectures.",
      images: ["/assets/86.jpg"],
    },
    {
      id: 2,
      title: "Clinical Case Presentations & Milestones",
      description:
        "Comprehensive visual layout displaying master case records, pre-treatment analysis records, and advanced orthodontic alignment results.",
      images: ["/assets/86.jpg", "/assets/89.jpg"],
    },
    {
      id: 3,
      title: "Cephalometric Diagnostic Laboratory",
      description:
        "Equipped with specialized trace equipment and specialized computer workstations running analytical dental imaging software suites.",
      images: ["/gallery/lab_1.jpg"],
    },
    {
      id: 4,
      title: "Hands-on Typodont Workshops",
      description:
        "Undergraduate and Post-Graduate scholars practicing complex wire-bending exercises and tactical attachment placement.",
      images: ["/gallery/workshop_1.jpg", "/gallery/workshop_2.jpg"],
    },
  ];

  const hod = facultyMembers.find((m) => m.role.includes("HOD"));
  const otherFaculty = facultyMembers.filter((m) => !m.role.includes("HOD"));

  const getInitials = (name: string) => {
    let cleanName = name.replace("Dr. ", "").replace("Dr.", "");
    const parts = cleanName.split(" ");
    if (parts.length > 1) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return cleanName.substring(0, 2).toUpperCase();
  };

  const getActivityStyles = (category: string) => {
    switch (category) {
      case "Workshop":
        return "bg-purple-500/10 border-purple-500/30 text-purple-300";
      case "CDE Program":
        return "bg-amber-500/10 border-amber-500/30 text-amber-300";
      case "Webinar":
        return "bg-sky-500/10 border-sky-500/30 text-sky-300";
      case "Clinical Demonstration":
        return "bg-rose-500/10 border-rose-500/30 text-rose-300";
      default:
        return "bg-emerald-500/10 border-emerald-500/30 text-emerald-300";
    }
  };

  // Card view navigation controls
  const handleCardPrevImage = (e: React.MouseEvent, item: GalleryItem) => {
    e.stopPropagation();
    const currentIdx = albumIndexes[item.id] || 0;
    const prevIdx = currentIdx === 0 ? item.images.length - 1 : currentIdx - 1;
    setAlbumIndexes((prev) => ({ ...prev, [item.id]: prevIdx }));
  };

  const handleCardNextImage = (e: React.MouseEvent, item: GalleryItem) => {
    e.stopPropagation();
    const currentIdx = albumIndexes[item.id] || 0;
    const nextIdx = currentIdx === item.images.length - 1 ? 0 : currentIdx + 1;
    setAlbumIndexes((prev) => ({ ...prev, [item.id]: nextIdx }));
  };

  // Lightbox internal popup navigation controls
  const handleLightboxPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeLightbox) return;
    const currentIdx = activeLightbox.index;
    const totalImages = activeLightbox.item.images.length;
    const prevIdx = currentIdx === 0 ? totalImages - 1 : currentIdx - 1;
    setActiveLightbox({ ...activeLightbox, index: prevIdx });
  };

  const handleLightboxNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeLightbox) return;
    const currentIdx = activeLightbox.index;
    const totalImages = activeLightbox.item.images.length;
    const nextIdx = currentIdx === totalImages - 1 ? 0 : currentIdx + 1;
    setActiveLightbox({ ...activeLightbox, index: nextIdx });
  };

  return (
    <main className="min-h-screen bg-[#040d1a] text-white font-sans selection:bg-cyan-500/40 flex flex-col overflow-hidden relative">
      <PageBackground>
        <Navbar />

        {/* Ambient Glows */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex-grow pt-45 pb-24 px-6 md:px-12 lg:px-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-20 text-center lg:text-left space-y-6">
              <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-cyan-300 text-sm font-semibold tracking-widest uppercase mb-2 shadow-[0_0_10px_rgba(59,130,246,0.2)]">
                Department Overview
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-blue-500 drop-shadow-sm">
                Conservative Dentistry & <br className="hidden lg:block" />{" "}
                Endodontics
              </h1>
              <p className="text-gray-300 text-xl max-w-2xl font-medium leading-relaxed">
                Dedicated to academic excellence, patient-centered care, and
                advancing the future of dental health professionals.
              </p>
            </div>

            {/* Main Layout Grid */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              {/* Left Sidebar: Floating Pill Navigation */}
              <div className="w-full lg:w-1/4 flex flex-col gap-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setSelectedFaculty(null);
                    }}
                    className={`relative overflow-hidden px-8 py-4 text-left font-bold tracking-widest text-sm rounded-2xl transition-all duration-500 ease-out flex items-center justify-between group cursor-pointer ${
                      activeTab === tab
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_30px_rgba(34,211,238,0.3)] scale-[1.02] border border-cyan-400/50"
                        : "bg-white/[0.03] text-gray-400 border border-white/5 hover:bg-white/10 hover:text-white hover:border-white/20 hover:scale-[1.01]"
                    }`}
                  >
                    <span className="relative z-10">{tab}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-500 ${activeTab === tab ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                ))}
              </div>

              {/* Right Area: Premium Glass Card */}
              <div className="w-full lg:w-3/4">
                <div className="relative bg-white/[0.02] backdrop-blur-2xl border border-white/10 border-t-white/20 border-l-white/20 rounded-[2rem] p-8 md:p-14 shadow-2xl shadow-black/50 min-h-[550px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none"></div>

                  {/* MISSION TAB */}
                  {activeTab === "MISSION" && (
                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                      <div className="flex items-center gap-4 mb-12">
                        <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                          <svg
                            className="w-8 h-8 text-cyan-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h2 className="text-4xl font-extrabold text-white tracking-tight">
                          Our Mission
                        </h2>
                      </div>

                      <div className="relative pl-6">
                        <div className="absolute left-[11px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500/50 via-cyan-500/20 to-transparent"></div>
                        <ul className="space-y-10">
                          {missionStatements.map((item, index) => (
                            <li
                              key={index}
                              className="relative flex items-start gap-8 group"
                            >
                              <div className="absolute -left-6 mt-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] group-hover:scale-150 transition-transform duration-300"></div>
                              <div className="absolute -left-6 mt-1.5 w-3 h-3 rounded-full bg-cyan-400 animate-ping opacity-75"></div>
                              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 w-full group-hover:bg-white/[0.06] group-hover:border-white/10 transition-colors duration-300">
                                <p className="text-gray-200 text-lg font-medium leading-relaxed">
                                  {item}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* PATIENT CARE TAB */}
                  {activeTab === "PATIENT CARE" && (
                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                      <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-emerald-500/20 rounded-xl border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                          <svg
                            className="w-8 h-8 text-emerald-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </svg>
                        </div>
                        <h2 className="text-4xl font-extrabold text-white tracking-tight">
                          Patient Care
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {patientCareFeatures.map((feature, index) => (
                          <div
                            key={index}
                            className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(16,185,129,0.1)] hover:-translate-y-1 flex items-start gap-4 overflow-hidden"
                          >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                                <svg
                                  className="w-4 h-4 text-emerald-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="3"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                            </div>
                            <p className="text-gray-300 font-medium leading-relaxed relative z-10 group-hover:text-white transition-colors duration-300">
                              {feature}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* GALLERY TAB */}
                  {activeTab === "GALLERY" && (
                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-teal-500/20 rounded-xl border border-teal-500/40 shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                          <svg
                            className="w-8 h-8 text-teal-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h2 className="text-4xl font-extrabold text-white tracking-tight">
                            Department Gallery
                          </h2>
                          <p className="text-sm text-gray-400 mt-1">
                            Explore our high-definition campus facilities,
                            operatory architectures, and live training forums.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {galleryItems.map((item) => {
                          const activeImgIndex = albumIndexes[item.id] || 0;
                          const currentImage = item.images[activeImgIndex];
                          const isMultiImage = item.images.length > 1;

                          return (
                            <div
                              key={item.id}
                              onClick={() =>
                                setActiveLightbox({
                                  item,
                                  index: activeImgIndex,
                                })
                              }
                              className="group bg-white/[0.02] border border-white/10 hover:border-teal-500/40 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/[0.04] hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] flex flex-col cursor-pointer"
                            >
                              <div className="relative aspect-video w-full overflow-hidden bg-slate-950/40 flex items-center justify-center border-b border-white/5">
                                <img
                                  src={currentImage}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                  onError={(e) => {
                                    e.currentTarget.style.opacity = "0.15";
                                  }}
                                />

                                {isMultiImage && (
                                  <span className="absolute top-4 right-4 z-20 px-2.5 py-1 text-[10px] font-black tracking-widest bg-black/70 backdrop-blur-md text-teal-400 border border-teal-500/30 rounded-lg uppercase">
                                    Album: {activeImgIndex + 1} /{" "}
                                    {item.images.length}
                                  </span>
                                )}

                                {isMultiImage && (
                                  <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <button
                                      onClick={(e) =>
                                        handleCardPrevImage(e, item)
                                      }
                                      className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 hover:border-teal-400 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-110"
                                    >
                                      ←
                                    </button>
                                    <button
                                      onClick={(e) =>
                                        handleCardNextImage(e, item)
                                      }
                                      className="w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 hover:border-teal-400 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-110"
                                    >
                                      →
                                    </button>
                                  </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-[#040d1a] via-transparent to-transparent opacity-40"></div>
                              </div>

                              <div className="p-6 flex-grow flex flex-col justify-between space-y-2 relative z-10">
                                <div className="space-y-1">
                                  <h3 className="text-xl font-extrabold text-white group-hover:text-teal-300 transition-colors duration-300 leading-snug">
                                    {item.title}
                                  </h3>
                                  <p className="text-gray-400 text-sm font-medium leading-relaxed line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>
                                <div className="pt-4 flex items-center text-xs font-black tracking-widest text-teal-400 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  View Expanded Media ↗
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* COURSE OUTCOME TAB */}
                  {activeTab === "COURSE OUTCOME" && (
                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                            <svg
                              className="w-8 h-8 text-indigo-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                          </div>
                          <div>
                            <h2 className="text-4xl font-extrabold text-white tracking-tight">
                              Course Outcomes
                            </h2>
                            <p className="text-sm text-gray-400 mt-1 italic">
                              At the end of the course, students will be able to
                            </p>
                          </div>
                        </div>

                        <div className="flex bg-white/[0.03] border border-white/5 p-1.5 rounded-xl self-start md:self-center">
                          {["KNOWLEDGE", "SKILL", "ATTITUDE"].map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setActiveOutcomeCategory(cat)}
                              className={`px-4 py-2 rounded-lg text-xs font-black tracking-widest transition-all duration-300 cursor-pointer ${
                                activeOutcomeCategory === cat
                                  ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                                  : "text-gray-400 hover:text-white"
                              }`}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        {courseOutcomes[activeOutcomeCategory].map((co) => (
                          <div
                            key={co.code}
                            className="group relative bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6 transition-all duration-300 hover:bg-white/[0.05] hover:shadow-[0_10px_25px_rgba(0,0,0,0.3)]"
                          >
                            <div className="flex items-center justify-between md:justify-start gap-4 flex-shrink-0">
                              <div className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-black tracking-wider text-sm shadow-inner">
                                {co.code}
                              </div>
                              <div className="px-3 py-1 text-xs font-bold rounded-lg bg-white/5 border border-white/10 text-gray-400 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
                                Level {co.level}
                              </div>
                            </div>

                            <p className="text-gray-200 font-medium text-lg leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
                              {co.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ACTIVITIES TAB */}
                  {activeTab === "ACTIVITIES" && (
                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-10">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
                          <svg
                            className="w-8 h-8 text-purple-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h2 className="text-4xl font-extrabold text-white tracking-tight">
                            Department Activities
                          </h2>
                          <p className="text-sm text-gray-400 mt-1">
                            Forums, professional conventions, and chronological
                            academic milestones.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-6">
                        {departmentActivities.map((activity) => (
                          <div
                            key={activity.id}
                            className="group relative bg-white/[0.02] border border-white/5 hover:border-purple-500/30 rounded-3xl p-6 md:p-8 transition-all duration-500 hover:bg-white/[0.05] hover:shadow-[0_15px_35px_rgba(168,85,247,0.08)] flex flex-col md:flex-row gap-6 items-start"
                          >
                            <div className="flex md:flex-col justify-between items-start md:w-44 flex-shrink-0 gap-2 w-full border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase border ${getActivityStyles(activity.category)}`}
                              >
                                {activity.category}
                              </span>
                              <span className="text-sm text-gray-500 font-bold md:mt-3 flex items-center gap-1.5">
                                <svg
                                  className="w-4 h-4 text-gray-600"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                  />
                                </svg>
                                {activity.date}
                              </span>
                            </div>

                            <div className="flex-grow space-y-3">
                              <h3 className="text-xl md:text-2xl font-extrabold text-white group-hover:text-purple-300 transition-colors duration-300 leading-tight">
                                {activity.title}
                              </h3>
                              {activity.subtitle && (
                                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                  {activity.subtitle}
                                </p>
                              )}
                              {activity.speakers && (
                                <div className="pt-2 flex flex-wrap items-center gap-2 text-sm text-cyan-400 font-medium">
                                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 border border-white/10 rounded px-2 py-0.5 bg-white/5">
                                    Resource Person
                                  </span>
                                  <span>{activity.speakers}</span>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ACADEMICS TAB */}
                  {activeTab === "ACADEMICS" && (
                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-8">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                            <svg
                              className="w-8 h-8 text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                              />
                            </svg>
                          </div>
                          <div>
                            <h2 className="text-4xl font-extrabold text-white tracking-tight">
                              Academics
                            </h2>
                            <p className="text-sm text-gray-400 mt-1">
                              Programs offered and specialized library
                              infrastructure resources.
                            </p>
                          </div>
                        </div>

                        <div className="flex bg-white/[0.03] border border-white/5 p-1.5 rounded-xl self-start md:self-center">
                          {[
                            { id: "PROGRAMS", label: "Programs Offered" },
                            { id: "RESOURCES", label: "Library Resources" },
                          ].map((subTab) => (
                            <button
                              key={subTab.id}
                              onClick={() =>
                                setActiveAcademicsSubTab(subTab.id)
                              }
                              className={`px-4 py-2 rounded-lg text-xs font-black tracking-widest transition-all duration-300 cursor-pointer ${
                                activeAcademicsSubTab === subTab.id
                                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                                  : "text-gray-400 hover:text-white"
                              }`}
                            >
                              {subTab.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {activeAcademicsSubTab === "PROGRAMS" && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                          <div className="space-y-4">
                            <h3 className="text-sm font-black text-cyan-400 tracking-widest uppercase border-l-2 border-cyan-500 pl-3">
                              Undergraduate Programs
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {[
                                {
                                  title: "Preclinical Orthodontics",
                                  year: "II BDS",
                                },
                                {
                                  title: "Clinical Orthodontics",
                                  year: "III BDS",
                                },
                                {
                                  title: "Clinical Orthodontics",
                                  year: "IV BDS",
                                },
                              ].map((prog, idx) => (
                                <div
                                  key={idx}
                                  className="bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.05] transition-all duration-300"
                                >
                                  <div className="text-xs font-bold text-gray-500 mb-1">
                                    {prog.year}
                                  </div>
                                  <h4 className="text-lg font-bold text-white">
                                    {prog.title}
                                  </h4>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-sm font-black text-blue-400 tracking-widest uppercase border-l-2 border-blue-500 pl-3">
                              Postgraduate Programs
                            </h3>
                            <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-600/50 to-cyan-500/50">
                              <div className="bg-[#051121] rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                <div>
                                  <div className="text-xs font-black text-cyan-300 uppercase tracking-widest mb-1">
                                    MDS Degree
                                  </div>
                                  <h4 className="text-xl font-extrabold text-white">
                                    MDS in Orthodontics and Dentofacial
                                    Orthopedics
                                  </h4>
                                </div>
                                <span className="px-3 py-1 text-xs font-bold rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-300">
                                  Advanced Specialization
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeAcademicsSubTab === "RESOURCES" && (
                        <div className="space-y-8 animate-in fade-in duration-500">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                <h4 className="font-extrabold text-lg text-white">
                                  Central Library Resources
                                </h4>
                                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                  Available
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                                    No. of Titles
                                  </div>
                                  <div className="text-3xl font-black text-white mt-1">
                                    80
                                  </div>
                                </div>
                                <div>
                                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                                    Total Books
                                  </div>
                                  <div className="text-3xl font-black text-blue-400 mt-1">
                                    212
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 space-y-4">
                              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                                <h4 className="font-extrabold text-lg text-white">
                                  Department Library Resources
                                </h4>
                                <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                                  Available
                                </span>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                                    No. of Titles
                                  </div>
                                  <div className="text-3xl font-black text-white mt-1">
                                    35
                                  </div>
                                </div>
                                <div>
                                  <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                                    Total Books
                                  </div>
                                  <div className="text-3xl font-black text-cyan-400 mt-1">
                                    35
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <h3 className="text-sm font-black text-gray-400 tracking-widest uppercase border-l-2 border-gray-500 pl-3">
                              Journal Subscriptions & Holdings (2022)
                            </h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex justify-between items-center">
                                <span className="text-gray-300 font-medium">
                                  Total International Journals
                                </span>
                                <span className="text-xl font-black text-indigo-400">
                                  6
                                </span>
                              </div>
                              <div className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex justify-between items-center">
                                <span className="text-gray-300 font-medium">
                                  Total National Journals
                                </span>
                                <span className="text-xl font-black text-sky-400">
                                  2
                                </span>
                              </div>
                            </div>

                            <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                              <h4 className="text-base font-extrabold text-white mb-4">
                                Print Form Back Volumes (8–10 Years Requirement)
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {[
                                  { name: "AJO-DO", tenure: "18 Years" },
                                  {
                                    name: "Seminars in Orthodontics",
                                    tenure: "18 Years",
                                  },
                                  {
                                    name: "Journal of Clinical Orthodontics",
                                    tenure: "15 Years",
                                  },
                                ].map((vol, index) => (
                                  <div
                                    key={index}
                                    className="bg-[#051121] border border-white/5 p-4 rounded-xl flex justify-between items-center"
                                  >
                                    <span className="text-sm font-bold text-gray-300">
                                      {vol.name}
                                    </span>
                                    <span className="text-xs font-black px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                      {vol.tenure}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="space-y-3 pt-2">
                              <div className="flex items-center justify-between text-xs font-black text-gray-500 uppercase tracking-widest px-2">
                                <span>Subscribed Journal Index Titles</span>
                                <span className="text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 normal-case font-bold">
                                  H - Hard Copy, O - Online Access
                                </span>
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {[
                                  "American Journal of Orthodontics and Dentofacial Orthopaedics",
                                  "Seminars in Orthodontics",
                                  "Journal of Orthodontics",
                                  "Orthodontics and Craniofacial Research",
                                  "European Journal of Orthodontics",
                                  "Angle Orthodontist",
                                  "Journal of Indian Orthodontic Society",
                                  "Indian Journal of Dental Research",
                                ].map((journalTitle, idx) => (
                                  <div
                                    key={idx}
                                    className="bg-white/[0.01] border border-white/5 p-4 rounded-xl flex gap-4 items-center"
                                  >
                                    <div className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center text-xs font-black text-gray-400 flex-shrink-0">
                                      {idx + 1}
                                    </div>
                                    <p className="text-sm font-semibold text-gray-300 leading-snug">
                                      {journalTitle}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* FACULTY TAB */}
                  {activeTab === "FACULTY" && (
                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                      {!selectedFaculty ? (
                        <>
                          <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                              <svg
                                className="w-8 h-8 text-cyan-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                            </div>
                            <h2 className="text-4xl font-extrabold text-white tracking-tight">
                              Our Faculty
                            </h2>
                          </div>

                          {/* HOD / LEADERSHIP FEATURED CARD */}
                          {hod && (
                            <div
                              onClick={() => setSelectedFaculty(hod)}
                              className="group cursor-pointer mb-10 relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-500 hover:-translate-y-1"
                            >
                              <div className="bg-[#051121] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 h-full">
                                <div className="w-full md:w-56 aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 to-cyan-900 relative shadow-inner shadow-black/50 border border-white/10 group-hover:border-cyan-400/50 transition-colors duration-500 flex-shrink-0">
                                  {hod.image ? (
                                    <img
                                      src={hod.image}
                                      alt={hod.name}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                      <span className="text-5xl font-black text-cyan-300 tracking-wider drop-shadow-lg">
                                        {getInitials(hod.name)}
                                      </span>
                                    </div>
                                  )}
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#051121] via-transparent to-transparent opacity-60"></div>
                                </div>

                                <div className="flex-1 text-center md:text-left space-y-4">
                                  <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(34,211,238,0.4)]">
                                    Head of Department
                                  </div>
                                  <div>
                                    <h3 className="text-3xl md:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors duration-300">
                                      {hod.name}
                                    </h3>
                                    <p className="text-lg font-medium text-blue-400 mt-1">
                                      {hod.role}
                                    </p>
                                  </div>
                                  <p className="text-gray-400 text-sm leading-relaxed max-w-lg mx-auto md:mx-0">
                                    Leading the Orthodontics & Dentofacial
                                    Orthopedics department with a commitment to
                                    clinical excellence, advanced research, and
                                    unparalleled academic instruction.
                                  </p>
                                  <div className="pt-2">
                                    <span className="text-sm font-bold uppercase tracking-widest text-cyan-400 group-hover:text-white transition-colors duration-300 flex items-center justify-center md:justify-start gap-2">
                                      View Full Profile
                                      <svg
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                      </svg>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {/* STANDARD FACULTY GRID */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherFaculty.map((member) => (
                              <div
                                key={member.id}
                                onClick={() => setSelectedFaculty(member)}
                                className="group cursor-pointer bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1 flex flex-col"
                              >
                                <div className="w-full aspect-[3/4] relative overflow-hidden bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-b border-white/5">
                                  {member.image ? (
                                    <img
                                      src={member.image}
                                      alt={member.name}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                  ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                      <span className="text-4xl font-black text-cyan-300/60 tracking-wider group-hover:text-cyan-300 transition-colors duration-500">
                                        {getInitials(member.name)}
                                      </span>
                                    </div>
                                  )}
                                  <div className="absolute inset-0 bg-gradient-to-t from-[#051121] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                                </div>

                                <div className="p-6 text-center relative z-10 flex-grow flex flex-col justify-between">
                                  <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                      {member.name}
                                    </h3>
                                    <p className="text-sm font-medium text-blue-400 mt-1">
                                      {member.role}
                                    </p>
                                  </div>
                                  <div className="mt-5 overflow-hidden h-6">
                                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-cyan-400 translate-y-6 group-hover:translate-y-0 transition-all duration-300">
                                      View Profile →
                                    </span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        /* FACULTY DETAIL VIEW */
                        <div className="animate-in slide-in-from-right-8 fade-in duration-500">
                          <button
                            onClick={() => setSelectedFaculty(null)}
                            className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-cyan-400 mb-10 transition-colors cursor-pointer"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                              />
                            </svg>
                            Back to Directory
                          </button>

                          <div className="flex flex-col md:flex-row gap-10 items-start">
                            <div className="w-full md:w-1/3 flex flex-col items-center">
                              <div className="w-full max-w-[280px] aspect-[3/4] rounded-3xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-cyan-500/50 shadow-[0_0_40px_rgba(34,211,238,0.2)] flex items-center justify-center overflow-hidden mb-6 p-1">
                                <div className="w-full h-full rounded-[1.3rem] bg-[#040d1a] flex items-center justify-center overflow-hidden">
                                  {selectedFaculty.image ? (
                                    <img
                                      src={selectedFaculty.image}
                                      alt={selectedFaculty.name}
                                      className="w-full h-full object-cover"
                                    />
                                  ) : (
                                    <span className="text-6xl font-black text-cyan-300/80">
                                      {getInitials(selectedFaculty.name)}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="w-full md:w-2/3">
                              {selectedFaculty.role.includes("HOD") && (
                                <div className="inline-block px-3 py-1 rounded bg-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4 border border-cyan-500/30">
                                  Head of Department
                                </div>
                              )}
                              <h2 className="text-4xl font-extrabold text-white mb-2">
                                {selectedFaculty.name}
                              </h2>
                              <p className="text-xl font-medium text-blue-400 mb-8">
                                {selectedFaculty.role}
                              </p>

                              <div className="space-y-8">
                                <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
                                  <h4 className="text-gray-500 font-bold mb-2 uppercase tracking-wider text-xs">
                                    Biography & Credentials
                                  </h4>
                                  <p className="text-gray-300 leading-relaxed mb-4">
                                    {selectedFaculty.name} brings extensive
                                    clinical and academic expertise to the
                                    department. Dedicated to advancing
                                    orthodontic methodologies and patient care
                                    standards.
                                  </p>
                                  <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded text-xs font-semibold text-blue-300">
                                      BDS
                                    </span>
                                    <span className="px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded text-xs font-semibold text-blue-300">
                                      MDS
                                    </span>
                                    {selectedFaculty.role.includes(
                                      "Professor",
                                    ) && (
                                      <span className="px-3 py-1 bg-blue-900/40 border border-blue-500/30 rounded text-xs font-semibold text-blue-300">
                                        PhD
                                      </span>
                                    )}
                                  </div>
                                </div>

                                <div className="bg-white/[0.03] p-6 rounded-2xl border border-white/5">
                                  <h4 className="text-gray-500 font-bold mb-2 uppercase tracking-wider text-xs">
                                    <strong>Research</strong> & Publications
                                  </h4>
                                  <p className="text-gray-300 leading-relaxed text-sm">
                                    Actively involved in advanced dentofacial
                                    orthopedics studies, microscopic insights,
                                    and contributing significantly to national
                                    and international dental journals. Detailed
                                    publications will be indexed here shortly.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* PLACEHOLDER FOR OTHER TABS */}
                  {activeTab !== "MISSION" &&
                    activeTab !== "FACULTY" &&
                    activeTab !== "PATIENT CARE" &&
                    activeTab !== "COURSE OUTCOME" &&
                    activeTab !== "ACTIVITIES" &&
                    activeTab !== "ACADEMICS" &&
                    activeTab !== "GALLERY" && (
                      <div className="relative z-10 flex flex-col items-center justify-center h-[450px] text-gray-400 animate-in fade-in zoom-in-95 duration-500">
                        <div className="relative p-8 rounded-full bg-white/[0.02] border border-white/5 mb-6 group-hover:scale-110 transition-transform">
                          <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl"></div>
                          <svg
                            className="w-16 h-16 text-cyan-500/50 relative z-10"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            ></path>
                          </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-white tracking-wider mb-2 uppercase">
                          {activeTab}
                        </h3>
                        <p className="text-base text-gray-500 font-medium">
                          Information modules are being updated.
                        </p>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </PageBackground>

      {/* ========================================================================= */}
      {/* ADVANCED THEATRE LIGHTBOX MODAL OVERLAY                                   */}
      {/* ========================================================================= */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[9999] flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in duration-300 cursor-pointer"
        >
          {/* Close Trigger Button */}
          <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
            <span className="text-xs font-black tracking-widest text-gray-500 bg-white/5 border border-white/10 rounded px-3 py-1 uppercase hidden md:inline">
              Click Backdrop to Close
            </span>
            <button
              onClick={() => setActiveLightbox(null)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center text-xl font-bold transition-all cursor-pointer hover:scale-110"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Unified Theatre Layout Box */}
          <div
            onClick={(e) => e.stopPropagation()} // Prevents accidental closing when clicking information content
            className="relative max-w-6xl w-full bg-[#051121]/80 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto max-h-[85vh] md:max-h-[75vh] animate-in zoom-in-95 duration-300 cursor-default"
          >
            {/* Left Frame Window: Media Stream Viewer */}
            <div className="flex-1 bg-slate-950/60 relative flex items-center justify-center p-2 min-h-[300px] md:min-h-0">
              <img
                src={activeLightbox.item.images[activeLightbox.index]}
                alt={activeLightbox.item.title}
                className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain rounded-lg transition-all duration-500"
              />

              {/* Album Sliding Chevrons Navigation (Only shows when images map count > 1) */}
              {activeLightbox.item.images.length > 1 && (
                <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between z-30">
                  <button
                    onClick={handleLightboxPrev}
                    className="w-12 h-12 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 hover:border-teal-400 text-white flex items-center justify-center text-lg transition-all cursor-pointer hover:scale-110 shadow-lg"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleLightboxNext}
                    className="w-12 h-12 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 hover:border-teal-400 text-white flex items-center justify-center text-lg transition-all cursor-pointer hover:scale-110 shadow-lg"
                  >
                    →
                  </button>
                </div>
              )}
            </div>

            {/* Right Information Descriptive Slate Side-Panel */}
            <div className="w-full md:w-[380px] bg-white/[0.03] backdrop-blur-xl border-t md:border-t-0 md:border-l border-white/10 p-6 md:p-8 flex flex-col justify-between flex-shrink-0 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[10px] font-black tracking-widest uppercase">
                    HD Resource File
                  </span>
                  {activeLightbox.item.images.length > 1 && (
                    <span className="text-xs font-bold text-gray-500 tracking-wider">
                      Slide {activeLightbox.index + 1} of{" "}
                      {activeLightbox.item.images.length}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight leading-snug">
                  {activeLightbox.item.title}
                </h3>

                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                  {activeLightbox.item.description}
                </p>
              </div>

              <div className="pt-8 border-t border-white/5 mt-6 hidden md:block">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-500">
                  <svg
                    className="w-4 h-4 text-teal-500/40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Conservative Department Archives</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
