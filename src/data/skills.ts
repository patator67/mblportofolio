export interface InfoSection {
  category: string;
  items: InfoItem[];
}

export interface InfoItem {
  title: string;
  description: string;
}

export const infoSections: InfoSection[] = [
  {
    category: "Languages",
    items: [
      {
        title: "French · English · Spanish · Italian · Mandarin",
        description: "Native French. C2 English (5 years, Imperial). B2 Spanish (conversational). A2–B1 Italian (Milan-based). A1 Mandarin (tones, Pinyin, character recognition).",
      },
    ],
  },
  {
    category: "Interests & Passions",
    items: [
      {
        title: "Aerospace · AI · Deep Tech · Entrepreneurship",
        description: "Aviation systems and propulsion. Machine learning for engineering. Deeptech startups and dual-use technology. Venture financing and innovation ecosystems. Geopolitics and defense tech.",
      },
    ],
  },
  {
    category: "Leadership & Skills",
    items: [
      {
        title: "Team Leadership · Mentoring · Cross-functional Coordination",
        description: "25-person team coordination (Imperial Group Design). Teaching & tutoring (engineering undergraduates). Managing dependencies across technical subsystems. Communication, adaptability, problem-solving under pressure.",
      },
    ],
  },
  {
    category: "Technical Stack",
    items: [
      {
        title: "Aerospace Engineering",
        description: "Aerodynamics (incompressible, transonic, supersonic). Composite structures (CFRP). Flight dynamics & control. Propulsion systems. Systems engineering & MBSE.",
      },
      {
        title: "Simulation & Computing",
        description: "Simulink, MATLAB, Python. FEA (structural, generative design). C++ (HPC, OpenMP/MPI). Hardware-in-the-loop simulation.",
      },
      {
        title: "Data Science & ML",
        description: "Python (pandas, NumPy, scikit-learn). R (statistical modelling). SQL. XGBoost, TensorFlow. IP valuation, time-series forecasting, surrogate models.",
      },
      {
        title: "Finance & Strategy",
        description: "Venture capital & private equity. DCF, LBO, valuation frameworks. M&A deal process. Market mapping. Deeptech investment thesis.",
      },
    ],
  },
  {
    category: "Extracurricular",
    items: [
      {
        title: "Teaching Assistant — Imperial College London",
        description: "2023–2024. Mentored engineering undergraduates in Engineering Practice and Mathematics through weekly sessions, feedback, and exam prep.",
      },
      {
        title: "Volunteer — L'École de la Paix",
        description: "2019–2023 (4 years). Educational support and mentorship to underprivileged children in Brussels. Mathematics, reading, academic confidence-building.",
      },
      {
        title: "Long-Haul Cabin Crew — Air France",
        description: "June–August 2024. PCB (supplementary crew) on international routes. Safety operations, multilingual service, high-pressure environment, logistics awareness.",
      },
    ],
  },
];
