"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageBackground from "@/components/PageBackground";
import {
  BookOpen,
  Presentation,
  Award,
  Microchip,
  FileText,
} from "lucide-react";

// Define TypeScript interfaces
interface Publication {
  text: string;
}

interface Presentation {
  title: string;
  agency: string;
  level: string;
  date: string;
}

interface ShortCourse {
  title: string;
  university: string;
}

interface ResearchProject {
  title: string;
  role: string;
  date: string;
  status: "Completed" | "Ongoing";
}

interface Faculty {
  id: number;
  name: string;
  role: string;
  image: string;
  // Extended Details
  education?: string;
  experience?: string;
  email?: string;
  teachingSubjects?: string[];
  clinicalInterests?: string[];
  responsibilities?: string[];
  publications?: Publication[];
  presentations?: Presentation[];
  shortCourses?: ShortCourse[];
  researchProjects?: ResearchProject[];
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

export default function OrthodonticsDepartment() {
  const [activeTab, setActiveTab] = useState("MISSION");
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  const [activeFacultySubTab, setActiveFacultySubTab] = useState("OVERVIEW");
  const [activeOutcomeCategory, setActiveOutcomeCategory] =
    useState("KNOWLEDGE");
  const [activeAcademicsSubTab, setActiveAcademicsSubTab] =
    useState("PROGRAMS");

  // Gallery Specific States
  const [albumIndexes, setAlbumIndexes] = useState<Record<number, number>>({});
  const [activeLightbox, setActiveLightbox] = useState<{
    item: GalleryItem;
    index: number;
  } | null>(null);

  // Refs for scroll containers that must trap wheel events
  const pubScrollRef = useRef<HTMLDivElement>(null);
  const coursesScrollRef = useRef<HTMLDivElement>(null);
  const researchScrollRef = useRef<HTMLDivElement>(null);
  const overviewScrollRef = useRef<HTMLDivElement>(null);

  // Attach non-passive wheel listeners so we can preventDefault when
  // the inner container still has room to scroll, stopping page scroll.
  useEffect(() => {
    const refs = [
      pubScrollRef,
      coursesScrollRef,
      researchScrollRef,
      overviewScrollRef,
    ];
    const handlers: Array<{ el: HTMLDivElement; fn: (e: WheelEvent) => void }> =
      [];

    refs.forEach((ref) => {
      const el = ref.current;
      if (!el) return;
      const fn = (e: WheelEvent) => {
        const { scrollTop, scrollHeight, clientHeight } = el;
        const atTop = scrollTop === 0 && e.deltaY < 0;
        const atBottom =
          scrollTop + clientHeight >= scrollHeight && e.deltaY > 0;
        if (!atTop && !atBottom) {
          e.stopPropagation();
          e.preventDefault();
          el.scrollTop += e.deltaY;
        }
      };
      el.addEventListener("wheel", fn, { passive: false });
      handlers.push({ el, fn });
    });

    return () => {
      handlers.forEach(({ el, fn }) => el.removeEventListener("wheel", fn));
    };
  }, [activeFacultySubTab, selectedFaculty]);

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
    {
      id: 1,
      name: "Dr. Joseph Sebastian",
      role: "Professor & HOD",
      image: "/assets/doctor/ortho1.webp",
      education: "MDS",
      experience: "10 Years",
      email: "josephsebastian@mbdc.edu.in",
      teachingSubjects: ["Orthodontics and Dentofacial orthopedics"],
      clinicalInterests: [
        "Lingual Orthodontics",
        "Aligners",
        "Skeletal camouflage using Temporary Anchorage Devices",
      ],
      responsibilities: ["Final BDS Part A subject in charge"],
      publications: [
        {
          text: "Jibin Skaria1, Nanditha Hegde2, Pradeep P George3, Tony Michael4, Joseph Sebastian5, Botulinum Toxin Type-A for the Treatment of Excessive Gingival Display on Smiling, The Journal of Contemporary Dental Practice, Volume x Issue x (XXX 2020)",
        },
        {
          text: "Joby Paulose, Palathottungal Joseph Antony, Brijesh Sureshkumar, Susha Mariam George, Manu Mundackal Mathew, and Joseph Sebastian, PowerScope a Class II corrector – A case report, Contemp Clin Dent. 2016 Apr-Jun; 7(2): 221–225.",
        },
        {
          text: "Crystal Runa Soans1, Dr. Joseph Sebastian2, Dr. Gauri Gill3, Dr. Shalin Shersha4, Dr. Rahila Mansoor5, Dr. Shilpa Mailankote6, Role of Nutraceuticals from an Orthodontic Perspective – A Review, Annals of R.S.C.B., ISSN:1583-6258, Vol. 25, Issue 6, 2021, Pages. 281 – 294",
        },
        {
          text: "Binnoy Kurian, 2 Tojan Chacko, 3 Muhammed ShibinPuthalath, 4 Crystal Runa Soans, 5 Joseph Sebastian, The Super Cusp: A Patient Friendly Myofunctional Corrector, The Journal of Indian Orthodontic Society, October-December 2014;48(4):580-586.",
        },
        {
          text: "Shenava Shailesh. U.S.K Nayak, Sebastian Joseph, K Saidath, To evaluate the clinical efficiency of resin modified glass ionomer varnish in preventing enamel demineralization during orthodontic treatment, Journal of Pierre Fauchard Academy (India Section), Volume 26 Issue 3, September 2012.",
        },
        {
          text: "U. S. Krishna Nayak, Dr. K.T. Marattukallam, Dr. Rakesh B.C., Dr. Joseph Sebastian, Self Ligation – A Cutting Edge Technology, Healtalk/November-December 2011 / Volume 04 / Issue 02.",
        },
        {
          text: "U.S. Krishna Nayak, Ravikala .S, Joseph Sebastian, MarfansSydrome – An Orthodontic perspective, Guident January 2012",
        },
      ],
      presentations: [
        {
          title: "Esthetics in Orthodontics",
          agency: "IOS",
          level: "National",
          date: "18.06.2011",
        },
        {
          title: "Advances in Fixed Functional Appliance",
          agency: "MBDC Academic forum",
          level: "Regional",
          date: "N/A",
        },
      ],
      researchProjects: [
        {
          title:
            "To evaluate the efficiency of Resin Modified Glass Ionomer varnish in preventing enamel deminaralisation during orthodontic treatment.",
          role: "Principal investigator",
          date: "2012",
          status: "Completed",
        },
        {
          title:
            "Evaluation of external root resorption on maxillary central incisors in patients treated orthodontically for bimaxillary dentoalveolar protrusion – A CBCT study.",
          role: "Co-investigator",
          date: "January 2025",
          status: "Ongoing",
        },
      ],
      shortCourses: [
        {
          title: "Orthodontics- A matrix unravelled",
          university: "NITTE University",
        },
        {
          title:
            "Tweed Merrifield technique, finishing conundrum & inter disciplinary approach in orthodontics.",
          university: "Manipal University",
        },
        {
          title: "Dento-legal aspects in dental practice",
          university: "NITTE University",
        },
        {
          title: "Basic and clinical photography",
          university: "NITTE University",
        },
        {
          title: "CDE in orthodontics",
          university: "Indian Orthodontic Society",
        },
        {
          title: "Treatment alternatives for Class III malocclusions",
          university: "NITTE University",
        },
        { title: "Begin with end in mind", university: "Yenapoya University" },
        {
          title:
            "Management of bleeding emergencies following surgical procedures in dental office and basic suturing techniques for the general dental practitioner.",
          university: "Indian dentist research and review.",
        },
        { title: "Aesthetics facial surgery", university: "NITTE University" },
        {
          title: "Efficient and effective orthodontic treatment mechanics.",
          university: "NITTE University",
        },
        {
          title: "Search strategies and scientific writing.",
          university: "NITTE University",
        },
        {
          title: "Applications of lasers in dentistry.",
          university: "NITTE University",
        },
        { title: "Dentofacial deformities", university: "NITTE University" },
        { title: "FDI-IDA CDE programme", university: "FDI & IDA" },
        {
          title: "Cone Beam Computer Tomography Imaging",
          university: "Yenapoya University",
        },
        { title: "CDE Programme", university: "Pierre Fauchard Academy" },
        {
          title:
            "Coming Together on combined orthodontic- surgical management of dentofacial abnormalities",
          university: "Manipal University",
        },
        {
          title: "Computert controlled local anesthetic delivery system.",
          university: "IDA",
        },
        {
          title:
            "STOMA centre for craniofacial esthetic surgery and implantology",
          university: "IDA",
        },
        { title: "Orthofest", university: "KOSG" },
        {
          title:
            "Fixed functional appliance- Class II molar correction, Damon – Passive self-ligating system.",
          university: "IOS",
        },
        {
          title: "Magnification in dental trinity",
          university: "MBDC Academic forum",
        },
        {
          title: "Current trends and advancements in forensic odontology.",
          university: "MBDC Academic forum",
        },
        {
          title: "Revive Ultra sonic aided lateral composition",
          university: "MBDC Academic forum",
        },
      ],
    },
    {
      id: 2,
      name: "Dr. P.G Francis",
      role: "Professor Emeritus",
      image: "/assets/doctor/ortho2.webp",
      education: "MDS",
      experience: "30 Years",
      email: "pgfrancis@mbdc.edu.in",
      teachingSubjects: [
        "Orthodontics and Dentofacial Orthopedics",
        "Preclinical Orthodontics",
      ],
      clinicalInterests: [
        "Cleft lip and Palate",
        "Functional and Orthopedic appliances",
        "Fixed functional appliances",
        "Orthognathic Surgery",
        "Surgical eruption",
        "Adult Orthodontics",
        "Temporary Anchorage Devices",
        "Self-ligating brackets",
      ],
      responsibilities: [
        "Institutional Scientific Committee chairman",
        "Membership: Indian Orthodontic Society (Reg No: LM 0413)",
        "Membership: Kerala Dental Council (Reg No: 464)",
      ],
      publications: [
        {
          text: "A retrospective evaluation of conventional RME Versus Alternate RME and constriction protocol combined with protraction headgear in the management of developing Class III malocclusion",
        },
        {
          text: "A double bling study on efficacy of local application of haemocoagulase solution in wound healing.The Journal of Contemporary Dental Practice May-June 2013;14 (3);394-400",
        },
        {
          text: "Comparative evaluation of efficiency of four ceramic finishing sysem. Journal of International oral Health Sept-Oct 2013; 5 (5):59-64",
        },
        {
          text: "Pedenculated hemangioma of palateBritish Medical Journal Case Report 2015; doi:10.1132/bcr-2014",
        },
        {
          text: "Recent trends in prevention of oral cancer. Journal of International Society of Preventive and Community Dentistry DEC 2014, Vol:4 Supplement 3 (131-138)",
        },
        {
          text: "Microleakage in endodontics. Journal of International Oral Health 2014;6(6):99-104",
        },
        {
          text: "Cytomorphometric analysis on effects of components of orthodontic appliance on the epithelial cells of buccal mucosa. Journal of International Society of Preventive and Community Dentistry Vol:7(3) may – june 2017",
        },
        {
          text: "Surgical assisted eruption of palatally impacted canine by tunnel traction – Case report",
        },
        {
          text: "A retrospective evaluation of treatment outcome obtained with 2 orthodontic appliance systems in treatment of class I bimaxillary dento alveolar protrusuion pts",
        },
        {
          text: "Orthognathic surgery – Case report. kerala dental journal vol.23(3) , page 92-97",
        },
        { text: "Occupationally transmissible disease in dental practice" },
        {
          text: "Influence of patient attitude on bracket failure – A prospective study",
        },
        {
          text: "Influence of patient attitude bracket positin on bracket failure A prospective study",
        },
        {
          text: "acquiredimmunodeficiency syndromeAIDS.Keralaa dental journal sept 1995, vol.18, No.3 page 1115-1123",
        },
        {
          text: "clinical manifestations of HIV infection. kerala dental journal sept 1995, vol.18, No.3 page 11130-11236",
        },
      ],
      presentations: [
        {
          title:
            "Delivered a guest lecture at the National Conference of Indian Orthodontic Society held at Bangalore",
          agency: "IOS",
          level: "National",
          date: "N/A",
        },
        {
          title:
            "Delivered a guest lecture at the National Conference of Indian Orthodontic Society held at Coimbatore",
          agency: "IOS",
          level: "National",
          date: "N/A",
        },
        {
          title:
            "Delivered a guest lecture at the National Conference of Indian Orthodontic Society held at Chennai",
          agency: "IOS",
          level: "National",
          date: "N/A",
        },
        {
          title:
            "Delivered a guest lecturer at the National Conference of Indian Society of Periodontology held at Mangalore.",
          agency: "ISP",
          level: "National",
          date: "N/A",
        },
        {
          title:
            "Delivered a guest lecturer at the National Postgraduate convention of Indian Orthodontic society held at Dharward.",
          agency: "IOS",
          level: "National",
          date: "N/A",
        },
        {
          title:
            "Delivered a guest lecturer at the National conference of Indian Orthodontic society held at Ahemedabad.",
          agency: "IOS",
          level: "National",
          date: "N/A",
        },
        {
          title:
            "Delivered a guest lecturer at the National conference of Indian Society of Pedodontics held at Raipur",
          agency: "ISPPD",
          level: "National",
          date: "N/A",
        },
        {
          title:
            "Presented a scientific paper at the International update on craniofacial clefts and first national meeting of Indian society of cleft Lip, palate & craniofacial anomalies held at Mumbai",
          agency: "ISCLP&CA",
          level: "International",
          date: "N/A",
        },
        {
          title:
            "Delivered a guest lecturer at the National Postgraduate convention of Indian Orthodontic society held at Davengere",
          agency: "IOS",
          level: "National",
          date: "N/A",
        },
        {
          title:
            "Delivered a guest lecture at the National Conference of Indian Orthodontic Conference held at Kochi,",
          agency: "IOS",
          level: "National",
          date: "N/A",
        },
        {
          title:
            "Presented a scientific paper at the National Conference of Indian Society for cleft lip and palate and craniofacial anomaly held in Hyderabad.",
          agency: "ISCLP&CA",
          level: "National",
          date: "N/A",
        },
        {
          title:
            "Presented a scientific paper at the InternationlConference on cleft lip and palate and craniofacial anomaly held at GOA",
          agency: "ISCLP&CA",
          level: "National",
          date: "N/A",
        },
        {
          title:
            "Presented scientific papers at various state level conferences& PG conventions in Dentistry,Orthodontics and Plastic surgery.",
          agency: "Multi-Agency",
          level: "State",
          date: "N/A",
        },
      ],
      researchProjects: [
        {
          title:
            "Research Guidance (Thesis): Maria Tomy - Effect Of Conventional Toothbrush, Orthodontic Toothbrush, powered Tooth brush hand Periodic Professional Prophylaxis On Periodontal Health Of Patients Undergoing Fixed Orthodontic Treatment.",
          role: "Research Guide",
          date: "Reg No: 202100111",
          status: "Ongoing",
        },
        {
          title:
            "Research Guidance (Thesis): Jupitha Grace Podimon - Assessment Of Autorotation Of Mandible And Positional Changes Of Chin Following Le Fort I Superior Impaction – A Cephalometric Study",
          role: "Research Guide",
          date: "Reg No: 202450051",
          status: "Ongoing",
        },
        {
          title:
            "Research Guidance (Thesis): Twinkle Marina - A Comparative Assessment Of Bond Failure Rate Using Adhesive Pre-coated Brackets And Conventional Brackets A Split-mouth Clinical Study",
          role: "Research Guide",
          date: "Reg No: 192450029",
          status: "Completed",
        },
        {
          title:
            "Research Guidance (Thesis): Alan Mathews Raju - Evaluation Of Bond Failure Rate Of Orthodontic Brackets Bonded With A Colour Change Adhesive And A Conventional Adhesive: A Split-mouth Comparative Study.",
          role: "Research Guide",
          date: "Reg No: 192450027",
          status: "Completed",
        },
        {
          title:
            "Research Guidance (Thesis): Arun Bosco J - The Effect Of Low-level Laser Therapy On The Rate Of En-mass Retraction – A Clinical Study",
          role: "Research Guide",
          date: "Reg No: 182450020",
          status: "Completed",
        },
        {
          title:
            "Research Guidance (Thesis): Abshad Ayoob - Evaluation Of Root Resorption Of Maxillary Incisors After Anterior Retraction With And Without Skeletal Anchorage",
          role: "Research Guide",
          date: "Reg No: 182450019",
          status: "Completed",
        },
      ],
    },
    {
      id: 3,
      name: "Dr. Biju Kalarickal",
      role: "Professor",
      image: "/assets/doctor/ortho3.webp",
      education: "MDS",
      experience: "16 Years",
      email: "bijukalarickal@mbdc.edu.in",
      teachingSubjects: ["Orthodontics and Dentofacial orthopedics"],
      clinicalInterests: [
        "Micro implant assisted orthodontics",
        "Surgical orthodontics",
      ],
      responsibilities: [
        "Library In charge",
        "NAAC – criteria 4 in charge",
        "Fellowship: Nobel Biocare certification for Implant and Esthetic Dentistry held at Royal dental college, Kerala (Feb 2014 - Oct 2014)",
        "Fellowship: Incognito certification (Lingual Orthodontics) from 3M UNITEK held at Cida-De Goa (11th and 12th March 2016)",
        "Membership: Member Indian dental association",
        "Membership: Member Indian orthodontic society",
      ],
      publications: [
        {
          text: "Biju kalarickal Group distal movement of teeth –a case report .journal of clinical anddiagnostic research .2014 may;vol8(5)zd26–zd29.",
        },
        {
          text: "Biju kalarickal,ajith vallikkat velath.Multidisciplinaryapproach to restore fractured Central Incisor.Journal of dental excellence ,kolhan university. 2014 jan;vol1 no1 :74–80",
        },
        {
          text: "NK Sapna Varma, Anuradha Parayancode, Ajith VallikatVelath, Biju Kalarickal .Localization of impacted teeth made easy using Digital VolumeTomography. Journal of Indian Academy of Oral Medicine andRadiology.2013oct–dec;vol25(4):318–321",
        },
        {
          text: "Biju, K. Janardhanan, P. G.Francis, Micro-Implants,Pushing the Limits of Traditional Orthodontics. Amrita Journal of Medicine.2010; jan–june ; Vol 6 (1), pp. 13 – 17.",
        },
        {
          text: "V. Ajith, K. Biju, S. Peter, P.Ushas. Management of Skeletal Class III Mal occlusion in an Adult Patient. Case Report.Amrita Journal of Medicine.2010 jan–june; Vol. 6 (1), pp. 37 – 40",
        },
        {
          text: "Profile changes after using clarks twinblock appliance in a growing male patient with a skeletal class II pattern and a recessive lower jaw –A case report http://doi.org/10.24941/ijcr.388 867.07.2020",
        },
        {
          text: "Selvaraj a ,PJ antony . m sreekumar , joby poulose,Biju Kalarickal Comparison of load deflection properties and force level of newly introduced M5 thermalcopper NiTi with other orthodontic NiTi wires :An invitro study https://www.sciencedirect.com /search?qs=load%20deflectio n%20NiTi&authors=selvaraj&s how=25&sortBy=relevance",
        },
      ],
      presentations: [
        {
          title:
            "Micro-implant- Macro-gainst Cochin Orthodontic study group, March 2015",
          agency: "Cochin Orthodontic study group",
          level: "Regional",
          date: "March 2015",
        },
        {
          title:
            "Twin block in Pediatric patients CDE programme by Dept of Pedodontics , on 16th Aug 2010, KVG Dental college Sullia, Karnataka",
          agency: "Dept of Pedodontics, KVG Dental college",
          level: "Regional",
          date: "August 2010",
        },
        {
          title:
            "Distraction Osteogenesis – 7th scientific convention at KLE Institute of Dental sciences Belgaum , on 21st and 22nd Feb 2003",
          agency: "KLE Institute of Dental sciences Belgaum",
          level: "Regional",
          date: "February 2003",
        },
        {
          title:
            "Judged scientific papers during 45th IOS annual conference on 17th -19th Dec 2010, Mangalore",
          agency: "IOS",
          level: "National",
          date: "December 2010",
        },
        {
          title:
            "Chaired scientific sessions during 45th IOS conference 17th – 19th Dec 2010, Mangalore",
          agency: "IOS",
          level: "National",
          date: "December 2010",
        },
        {
          title:
            "Trampolin 2022 MDS Exam orientation programme 26,27th May 2022 at Dept of orthodontics and dentofacial orthopedics, St Gregorious dental college, Kothamangalam",
          agency:
            "Dept of orthodontics and dentofacial orthopedics, St.Gregorious dental college",
          level: "Regional",
          date: "May 2022",
        },
      ],
      shortCourses: [
        {
          title:
            "Nobel Biocare certification for Implant and Esthetic Dentistry held at Royal dental college, Kerala from Feb 2014–Oct 2014",
          university: "Nobel biocare",
        },
        {
          title:
            "Incognito certification (Lingual Orthodontics)from 3M UNITEK held at Cida-De –Goa 11 th and 12th march 2016",
          university: "3M Unitek",
        },
        {
          title: "Invisalign certification on 15 th December 2017 Chennai",
          university: "Align technologies US",
        },
        {
          title: "Advanced course on micro-implants",
          university: "Dr Hyo–Sung Park College of dentistry ,Deagu , Korea",
        },
      ],
      researchProjects: [
        {
          title:
            "Evaluation of soft tissue in non growing individuals with different facial pattern –A cephalometric study",
          role: "Principal / Pg Guide",
          date: "2015",
          status: "Completed",
        },
        {
          title: "MCNAMARA CEPHALOMETRIC NORMS For The Kerala Population",
          role: "Principal / Pg Guide",
          date: "2016",
          status: "Completed",
        },
        {
          title:
            "Comparative Evalution Of Effects Of Rapid Maxillary Expansion And Alternate Rapid Maxillary Expansion And Constriction In Patients With Retrognathic Maxilla",
          role: "Principal / Pg Guide",
          date: "2017",
          status: "Completed",
        },
        {
          title:
            "Comparative evaluation of the effects of AdvanSync2 and AdnvanSync2 used with mini screw anchorage",
          role: "Principal / Pg Guide",
          date: "2019",
          status: "Completed",
        },
        {
          title:
            "Comparative Evaluation Of Intrusion Of Maxillary Incisors Using Mini-Implants In Different Positions-An In Vivo Study",
          role: "Principal / Pg Guide",
          date: "2020",
          status: "Completed",
        },
        {
          title:
            "Airway Volume And Its Correlation With Mandible And Hyoid Bone In Different Skeletal Types – A CBCT Based Evaluation",
          role: "Principal / Pg Guide",
          date: "2021",
          status: "Completed",
        },
        {
          title:
            "Estimation Of Intraoral Volume Change In Patients Undergoing Orthodontic Treatment By Extraction Correction In Bidentoalveolar Protrusion Cases Using Cbct – A Cross Section Sectional Comparative Study",
          role: "Principal / Pg Guide",
          date: "2022",
          status: "Ongoing",
        },
        {
          title:
            "Morphological Analysis Of Mandibular Characteristics In Skeletal Class I And Class Ii Malocclusions – A Cbct Study",
          role: "Principal / Pg Guide",
          date: "2024",
          status: "Ongoing",
        },
      ],
    },

    {
      id: 4,
      name: "Dr. Brijesh S",
      role: "Reader",
      image: "/assets/doctor/ortho4.webp",
      education: "MDS",
      experience: "8 Years",
      email: "brijeshs@mbdc.edu.in",
      teachingSubjects: ["Orthodontics and Dentofacial Orthopedics"],
      clinicalInterests: [
        "Cleft-lip and palate",
        "micro-implants",
        "lingual orthodontics",
        "growth modification",
      ],
      responsibilities: [
        "Second Year BDS Department Co-ordinator",
        "Secretary of the Academic Forum for Scientific Activities of the institution that coordinates the Continuing Education programs.",
        "Fellowship: Certificate course in implantlogy",
        "Membership: Indian Dental Association",
        "Membership: Indian Orthodontic Society",
        "Membership: Indian Society of Cleft Lip, Palate And Craniofacial Anomalies",
      ],
      publications: [
        {
          text: "PowerScope a Class II corrector – A case report. Contemp Clin Dent 2016;7:221-5.",
        },
        {
          text: "Auriculo Condylar Syndrome – A Case Report with Differential Diagnosis, IJDMSR 2018; 2 (7 ):01- 06.",
        },
        {
          text: "Recent Advances in Correction of Class II inGrowing Age.Malanadu Dental Journal: July-Sep 2019:3,(8):50-53.",
        },
        {
          text: "Oral Cues associated with Coronavirus Disease 2019 Infection – A Systematic Review: Int J Sci Stud 2021;9(8):10-19.",
        },
      ],
      presentations: [
        {
          title: "Beauty enhancing toxin, 16th PG Convention Vizag",
          agency: "Indian Orthodontic society",
          level: "National",
          date: "15-03-2012",
        },
        {
          title: "Speedy orthodontics, 47th IOS Conference and 8th APOC Delhi",
          agency: "Indian Orthodontic society and Asia pacefic",
          level: "International",
          date: "30-11-2012",
        },
        {
          title:
            "Orthodontic extrusion with plastic thermoformer – a case report. 17th PG convention, Mangalore",
          agency: "Indian Orthodontic society",
          level: "National",
          date: "21-03-2013",
        },
        {
          title: "Taming the Vagrant canine",
          agency: "Indian dental association",
          level: "Kerala state",
          date: "15-04-2022",
        },
      ],
      researchProjects: [
        {
          title:
            "Evaluation of skeletal, dental and soft tissue parameters in patients having hypodivergent and hyperdivergent jaws with class I and class Iiskeletal pattern –A cephalometric study",
          role: "Principal",
          date: "2013 (Funding: 10000)",
          status: "Completed",
        },
      ],
    },
    { id: 5, name: "Dr. Terry Thomas", role: "Professor", image: "" },
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
                Orthodontics & <br className="hidden lg:block" /> Dentofacial
                Orthopedics
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
                            className="group relative bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 hover:-translate-y-1 flex items-start gap-4"
                          >
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
                          return (
                            <div
                              key={item.id}
                              onClick={() =>
                                setActiveLightbox({
                                  item,
                                  index: activeImgIndex,
                                })
                              }
                              className="group bg-white/[0.02] border border-white/10 hover:border-teal-500/40 rounded-3xl overflow-hidden transition-all duration-500 hover:bg-white/[0.04] cursor-pointer"
                            >
                              <div className="relative aspect-video w-full overflow-hidden bg-slate-950/40 flex items-center justify-center">
                                <img
                                  src={item.images[activeImgIndex]}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                              </div>
                              <div className="p-6">
                                <h3 className="text-xl font-extrabold text-white group-hover:text-teal-300 transition-colors duration-300 leading-snug">
                                  {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                                  {item.description}
                                </p>
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
                      <div className="flex flex-col md:flex-row justify-between gap-4 border-b border-white/10 pb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-indigo-500/20 rounded-xl border border-indigo-500/40">
                            <BookOpen className="w-8 h-8 text-indigo-400" />
                          </div>
                          <div>
                            <h2 className="text-4xl font-extrabold text-white tracking-tight">
                              Course Outcomes
                            </h2>
                          </div>
                        </div>
                        <div className="flex bg-white/[0.03] border border-white/5 p-1.5 rounded-xl self-start md:self-center">
                          {["KNOWLEDGE", "SKILL", "ATTITUDE"].map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setActiveOutcomeCategory(cat)}
                              className={`px-4 py-2 rounded-lg text-xs font-black tracking-widest transition-all duration-300 cursor-pointer ${activeOutcomeCategory === cat ? "bg-gradient-to-r from-indigo-600 to-blue-600 text-white" : "text-gray-400"}`}
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
                            className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row gap-6 hover:bg-white/[0.05] transition-all"
                          >
                            <div className="flex gap-4">
                              <div className="px-4 py-2 rounded-xl bg-indigo-500/10 text-indigo-300 font-black text-sm">
                                {co.code}
                              </div>
                              <div className="px-3 py-1 text-xs font-bold rounded-lg bg-white/5 text-gray-400">
                                Level {co.level}
                              </div>
                            </div>
                            <p className="text-gray-200 font-medium text-lg leading-relaxed">
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
                        <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/40">
                          <Award className="w-8 h-8 text-purple-400" />
                        </div>
                        <div>
                          <h2 className="text-4xl font-extrabold text-white tracking-tight">
                            Department Activities
                          </h2>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-6">
                        {departmentActivities.map((activity) => (
                          <div
                            key={activity.id}
                            className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:bg-white/[0.05]"
                          >
                            <div className="flex md:flex-col justify-between items-start md:w-44 border-b md:border-b-0 md:border-r border-white/10 pb-4 md:pb-0 md:pr-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-black tracking-widest uppercase border ${getActivityStyles(activity.category)}`}
                              >
                                {activity.category}
                              </span>
                              <span className="text-sm text-gray-500 font-bold md:mt-3">
                                {activity.date}
                              </span>
                            </div>
                            <div className="flex-grow space-y-3">
                              <h3 className="text-xl md:text-2xl font-extrabold text-white">
                                {activity.title}
                              </h3>
                              {activity.subtitle && (
                                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                                  {activity.subtitle}
                                </p>
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
                      <div className="flex items-center gap-4 mb-2">
                        <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/40">
                          <Microchip className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                          <h2 className="text-4xl font-extrabold text-white tracking-tight">
                            Academics
                          </h2>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { title: "Preclinical Orthodontics", year: "II BDS" },
                          { title: "Clinical Orthodontics", year: "III BDS" },
                          { title: "Clinical Orthodontics", year: "IV BDS" },
                        ].map((prog, idx) => (
                          <div
                            key={idx}
                            className="bg-white/[0.02] border border-white/5 rounded-2xl p-5"
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
                  )}

                  {/* FACULTY TAB */}
                  {activeTab === "FACULTY" && (
                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
                      {!selectedFaculty ? (
                        <>
                          <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                              <UsersIcon className="w-8 h-8 text-cyan-400" />
                            </div>
                            <h2 className="text-4xl font-extrabold text-white tracking-tight">
                              Our Faculty
                            </h2>
                          </div>

                          {/* HOD / LEADERSHIP FEATURED CARD */}
                          {hod && (
                            <div
                              onClick={() => {
                                setSelectedFaculty(hod);
                                setActiveFacultySubTab("OVERVIEW");
                              }}
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
                                </div>
                                <div className="flex-1 text-center md:text-left space-y-4">
                                  <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-bold tracking-widest uppercase">
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
                                </div>
                              </div>
                            </div>
                          )}

                          {/* STANDARD FACULTY GRID */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherFaculty.map((member) => (
                              <div
                                key={member.id}
                                onClick={() => {
                                  setSelectedFaculty(member);
                                  setActiveFacultySubTab("OVERVIEW");
                                }}
                                className="group cursor-pointer bg-white/[0.03] border border-white/10 hover:border-cyan-500/40 rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1 flex flex-col"
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
                                </div>
                                <div className="p-6 text-center flex-grow flex flex-col justify-between">
                                  <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                      {member.name}
                                    </h3>
                                    <p className="text-sm font-medium text-blue-400 mt-1">
                                      {member.role}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </>
                      ) : (
                        /* ========================================================= */
                        /* DYNAMIC FACULTY DETAIL VIEW (Handles Rich Data)           */
                        /* ========================================================= */
                        <div className="animate-in slide-in-from-right-8 fade-in duration-500 flex flex-col h-full overflow-y-auto custom-scrollbar pr-1">
                          {/* Back Button */}
                          <button
                            onClick={() => setSelectedFaculty(null)}
                            className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-cyan-400 mb-8 transition-colors cursor-pointer w-fit"
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

                          <div className="flex flex-col lg:flex-row gap-10 items-start">
                            {/* Profile Image & Quick Details Column */}
                            <div className="w-full lg:w-[320px] flex-shrink-0 flex flex-col gap-6">
                              <div className="w-full aspect-[3/4] rounded-3xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-cyan-500/50 shadow-[0_0_40px_rgba(34,211,238,0.2)] p-1 overflow-hidden">
                                <div className="w-full h-full rounded-[1.3rem] bg-[#040d1a] overflow-hidden flex items-center justify-center">
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

                              <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 space-y-5">
                                {selectedFaculty.education && (
                                  <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                                      Education
                                    </p>
                                    <p className="text-white font-medium text-base">
                                      {selectedFaculty.education}
                                    </p>
                                  </div>
                                )}
                                {selectedFaculty.experience && (
                                  <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                                      Teaching Experience
                                    </p>
                                    <p className="text-white font-medium text-base">
                                      {selectedFaculty.experience}
                                    </p>
                                  </div>
                                )}
                                {selectedFaculty.email && (
                                  <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">
                                      Email Address
                                    </p>
                                    <a
                                      href={`mailto:${selectedFaculty.email}`}
                                      className="text-cyan-400 hover:text-cyan-300 font-medium break-all text-base transition-colors"
                                    >
                                      {selectedFaculty.email}
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Rich Details Column */}
                            <div className="w-full flex-grow flex flex-col min-h-0">
                              {/* Header */}
                              <div className="mb-8">
                                {selectedFaculty.role.includes("HOD") && (
                                  <div className="inline-block px-3 py-1 rounded bg-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-4 border border-cyan-500/30">
                                    Head of Department
                                  </div>
                                )}
                                <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                                  {selectedFaculty.name}
                                </h2>
                                <p className="text-xl font-medium text-blue-400 mt-2">
                                  {selectedFaculty.role}
                                </p>
                              </div>

                              {/* Internal Tabs for Rich Data */}
                              <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4 mb-6">
                                {[
                                  "OVERVIEW",
                                  "PUBLICATIONS",
                                  "COURSES & PROGRAMS",
                                  "RESEARCH",
                                ].map((tab) => {
                                  // Only show tabs if data exists
                                  if (
                                    tab === "PUBLICATIONS" &&
                                    !selectedFaculty.publications &&
                                    !selectedFaculty.presentations
                                  )
                                    return null;
                                  if (
                                    tab === "COURSES & PROGRAMS" &&
                                    !selectedFaculty.shortCourses
                                  )
                                    return null;
                                  if (
                                    tab === "RESEARCH" &&
                                    !selectedFaculty.researchProjects
                                  )
                                    return null;

                                  return (
                                    <button
                                      key={tab}
                                      onClick={() =>
                                        setActiveFacultySubTab(tab)
                                      }
                                      className={`px-4 py-2 rounded-lg text-xs font-black tracking-widest transition-all duration-300 cursor-pointer ${
                                        activeFacultySubTab === tab
                                          ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                                          : "text-gray-400 hover:text-white bg-white/5 border border-transparent hover:border-white/10"
                                      }`}
                                    >
                                      {tab}
                                    </button>
                                  );
                                })}
                              </div>

                              {/* OVERVIEW CONTENT */}
                              {activeFacultySubTab === "OVERVIEW" && (
                                <div
                                  ref={overviewScrollRef}
                                  className="space-y-6 animate-in fade-in duration-500 overflow-y-auto custom-scrollbar pr-2"
                                  style={{ maxHeight: "60vh" }}
                                >
                                  {selectedFaculty.teachingSubjects && (
                                    <div className="bg-white/[0.03] p-6 md:p-8 rounded-2xl border border-white/5">
                                      <h4 className="text-cyan-400 font-bold mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
                                        <BookOpen className="w-5 h-5" />{" "}
                                        Teaching Subjects
                                      </h4>
                                      <ul className="list-disc list-inside text-gray-200 space-y-3 text-base leading-relaxed">
                                        {selectedFaculty.teachingSubjects.map(
                                          (sub, i) => (
                                            <li key={i}>{sub}</li>
                                          ),
                                        )}
                                      </ul>
                                    </div>
                                  )}
                                  {selectedFaculty.clinicalInterests && (
                                    <div className="bg-white/[0.03] p-6 md:p-8 rounded-2xl border border-white/5">
                                      <h4 className="text-blue-400 font-bold mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
                                        <Microchip className="w-5 h-5" /> Areas
                                        of Clinical Interest
                                      </h4>
                                      <ul className="list-disc list-inside text-gray-200 space-y-3 text-base leading-relaxed">
                                        {selectedFaculty.clinicalInterests.map(
                                          (interest, i) => (
                                            <li key={i}>{interest}</li>
                                          ),
                                        )}
                                      </ul>
                                    </div>
                                  )}
                                  {selectedFaculty.responsibilities && (
                                    <div className="bg-white/[0.03] p-6 md:p-8 rounded-2xl border border-white/5">
                                      <h4 className="text-emerald-400 font-bold mb-4 uppercase tracking-widest text-xs flex items-center gap-2">
                                        <Award className="w-5 h-5" />{" "}
                                        Responsibilities & Memberships
                                      </h4>
                                      <ul className="list-disc list-inside text-gray-200 space-y-3 text-base leading-relaxed">
                                        {selectedFaculty.responsibilities.map(
                                          (resp, i) => (
                                            <li key={i}>{resp}</li>
                                          ),
                                        )}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* PUBLICATIONS & PRESENTATIONS CONTENT */}
                              {activeFacultySubTab === "PUBLICATIONS" && (
                                <div
                                  ref={pubScrollRef}
                                  className="space-y-10 animate-in fade-in duration-500 overflow-y-auto pr-4 custom-scrollbar"
                                  style={{ maxHeight: "60vh" }}
                                >
                                  {selectedFaculty.publications && (
                                    <div className="space-y-4">
                                      <h4 className="text-white font-extrabold text-2xl tracking-tight mb-6">
                                        List of Publications
                                      </h4>
                                      {selectedFaculty.publications.map(
                                        (pub, i) => (
                                          <div
                                            key={i}
                                            className="flex gap-5 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors"
                                          >
                                            <span className="text-cyan-500 font-black text-xl opacity-50 flex-shrink-0">
                                              {i + 1}
                                            </span>
                                            <p
                                              className="text-gray-300 text-base leading-relaxed"
                                              dangerouslySetInnerHTML={{
                                                __html: pub.text.replace(
                                                  /((?:Dr\.\s)?Brijesh\sS|Biju\sKalarickal|P\.G\sFrancis|Joseph Sebastian\d*)/gi,
                                                  '<strong class="text-white">$1</strong>',
                                                ),
                                              }}
                                            />
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  )}

                                  {selectedFaculty.presentations && (
                                    <div className="space-y-4 mt-10">
                                      <h4 className="text-white font-extrabold text-2xl tracking-tight mb-6">
                                        Presentations
                                      </h4>
                                      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#051121]/50 shadow-inner">
                                        <table className="w-full text-left text-base">
                                          <thead className="bg-white/5 border-b border-white/10">
                                            <tr>
                                              <th className="px-6 py-4 font-bold text-gray-400">
                                                Lectures & Scientific Paper
                                                Presentations
                                              </th>
                                              <th className="px-6 py-4 font-bold text-gray-400">
                                                Organizing Agency
                                              </th>
                                              <th className="px-6 py-4 font-bold text-gray-400">
                                                Date
                                              </th>
                                              <th className="px-6 py-4 font-bold text-gray-400 text-right">
                                                Level
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody className="divide-y divide-white/5">
                                            {selectedFaculty.presentations.map(
                                              (pres, i) => (
                                                <tr
                                                  key={i}
                                                  className="hover:bg-white/5 transition-colors"
                                                >
                                                  <td className="px-6 py-4 font-semibold text-white leading-relaxed">
                                                    {pres.title}
                                                  </td>
                                                  <td className="px-6 py-4 text-gray-300 text-sm font-medium">
                                                    {pres.agency}
                                                  </td>
                                                  <td className="px-6 py-4 text-gray-400 text-sm whitespace-nowrap">
                                                    {pres.date}
                                                  </td>
                                                  <td className="px-6 py-4 text-cyan-300 text-right whitespace-nowrap">
                                                    <span
                                                      className={`px-3 py-1.5 rounded-md text-xs font-bold border ${
                                                        pres.level ===
                                                        "International"
                                                          ? "bg-purple-500/10 text-purple-300 border-purple-500/20"
                                                          : pres.level ===
                                                                "State" ||
                                                              pres.level.includes(
                                                                "state",
                                                              )
                                                            ? "bg-amber-500/10 text-amber-300 border-amber-500/20"
                                                            : "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
                                                      }`}
                                                    >
                                                      {pres.level}
                                                    </span>
                                                  </td>
                                                </tr>
                                              ),
                                            )}
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* SHORT COURSES CONTENT */}
                              {activeFacultySubTab === "COURSES & PROGRAMS" && (
                                <div
                                  ref={coursesScrollRef}
                                  className="space-y-4 animate-in fade-in duration-500 overflow-y-auto pr-4 custom-scrollbar"
                                  style={{ maxHeight: "60vh" }}
                                >
                                  <h4 className="text-white font-extrabold text-2xl tracking-tight mb-6">
                                    Short Courses & Certificate Programs
                                  </h4>
                                  {selectedFaculty.shortCourses &&
                                  selectedFaculty.shortCourses.length > 0 ? (
                                    <div className="grid grid-cols-1 gap-4">
                                      {selectedFaculty.shortCourses.map(
                                        (course, i) => (
                                          <div
                                            key={i}
                                            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors"
                                          >
                                            <div className="flex gap-5 flex-1 min-w-0 items-start">
                                              <span className="text-gray-500 font-bold text-base w-6 flex-shrink-0 mt-0.5">
                                                {i + 1}.
                                              </span>
                                              <p className="text-gray-200 font-medium text-base leading-relaxed">
                                                {course.title}
                                              </p>
                                            </div>
                                            <div className="md:text-right pl-11 md:pl-0 md:max-w-[35%] flex-shrink-0 w-full md:w-auto mt-2 md:mt-0">
                                              <span className="text-xs font-bold text-blue-300 uppercase tracking-widest inline-block bg-blue-500/10 px-3 py-1.5 rounded-lg border border-blue-500/20">
                                                {course.university}
                                              </span>
                                            </div>
                                          </div>
                                        ),
                                      )}
                                    </div>
                                  ) : (
                                    <div className="p-8 text-center rounded-2xl bg-white/[0.02] border border-white/5 text-gray-400 font-medium">
                                      Academic profile credentials registered
                                      across ongoing dynamic modules.
                                    </div>
                                  )}
                                </div>
                              )}

                              {/* RESEARCH CONTENT */}
                              {activeFacultySubTab === "RESEARCH" &&
                                selectedFaculty.researchProjects && (
                                  <div
                                    ref={researchScrollRef}
                                    className="space-y-10 animate-in fade-in duration-500 overflow-y-auto pr-4 custom-scrollbar"
                                    style={{ maxHeight: "60vh" }}
                                  >
                                    {["Completed", "Ongoing"].map((status) => {
                                      const filtered =
                                        selectedFaculty.researchProjects?.filter(
                                          (r) => r.status === status,
                                        );
                                      if (!filtered || filtered.length === 0)
                                        return null;

                                      return (
                                        <div key={status} className="space-y-6">
                                          <h4 className="text-white font-extrabold text-2xl tracking-tight mb-4 flex items-center gap-3">
                                            {status === "Ongoing"
                                              ? "Current Guidance / Projects"
                                              : "Completed Guidance / Projects"}
                                            <span
                                              className={`px-3 py-1 rounded text-xs font-bold uppercase tracking-widest border ${status === "Completed" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-amber-500/10 text-amber-400 border-amber-500/20"}`}
                                            >
                                              {status}
                                            </span>
                                          </h4>
                                          <div className="grid grid-cols-1 gap-5">
                                            {filtered.map((proj, i) => (
                                              <div
                                                key={i}
                                                className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 relative overflow-hidden"
                                              >
                                                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-cyan-500 to-blue-600"></div>
                                                <h5 className="text-xl font-bold text-white mb-6 leading-snug">
                                                  {proj.title}
                                                </h5>
                                                <div className="flex flex-wrap gap-5">
                                                  <div className="bg-black/30 px-4 py-2.5 rounded-xl border border-white/5">
                                                    <span className="text-gray-500 text-xs uppercase tracking-widest block mb-1 font-bold">
                                                      Role
                                                    </span>
                                                    <span className="text-cyan-300 text-base font-semibold">
                                                      {proj.role}
                                                    </span>
                                                  </div>
                                                  <div className="bg-black/30 px-4 py-2.5 rounded-xl border border-white/5">
                                                    <span className="text-gray-500 text-xs uppercase tracking-widest block mb-1 font-bold">
                                                      Completion Date / Registry
                                                    </span>
                                                    <span className="text-white text-base font-semibold">
                                                      {proj.date}
                                                    </span>
                                                  </div>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        </div>
                                      );
                                    })}
                                  </div>
                                )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </PageBackground>

      {/* Lightbox / Global Styles block included safely */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(34, 211, 238, 0.2); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(34, 211, 238, 0.5); }
      `,
        }}
      />

      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 bg-black/95 backdrop-blur-2xl z-[9999] flex flex-col items-center justify-center p-4 md:p-12 animate-in fade-in duration-300 cursor-pointer"
        >
          <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
            <span className="text-xs font-black tracking-widest text-gray-500 bg-white/5 border border-white/10 rounded px-3 py-1 uppercase hidden md:inline">
              Click Backdrop to Close
            </span>
            <button
              onClick={() => setActiveLightbox(null)}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center text-xl font-bold transition-all cursor-pointer hover:scale-110"
            >
              ✕
            </button>
          </div>
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full bg-[#051121]/80 border border-white/10 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto max-h-[85vh] md:max-h-[75vh] animate-in zoom-in-95 duration-300 cursor-default"
          >
            <div className="flex-1 bg-slate-950/60 relative flex items-center justify-center p-2 min-h-[300px] md:min-h-0">
              <img
                src={activeLightbox.item.images[activeLightbox.index]}
                alt={activeLightbox.item.title}
                className="max-w-full max-h-[50vh] md:max-h-[70vh] object-contain rounded-lg transition-all duration-500"
              />
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
            <div className="w-full md:w-[380px] bg-white/[0.03] backdrop-blur-xl border-t md:border-t-0 md:border-l border-white/10 p-6 md:p-8 flex flex-col justify-between flex-shrink-0 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20 text-[10px] font-black tracking-widest uppercase">
                    HD Resource File
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight leading-snug">
                  {activeLightbox.item.title}
                </h3>
                <p className="text-gray-300 text-sm font-medium leading-relaxed">
                  {activeLightbox.item.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// Inline component replacement for lucide icon dependency tracking maps
function UsersIcon(props: any) {
  return (
    <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}
