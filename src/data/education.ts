export interface EducationEntry {
  key: string;
  website: string;
  period: string;
  title: string;
  location: string;
  degree: string;
  status?: string;
  courses: string[];
  projects: { title: string; description: string }[];
}

export const educationEntries: EducationEntry[] = [
  {
    key: "bocconi",
    website: "https://www.unibocconi.eu",
    period: "2024 – 2026",
    title: "Bocconi University",
    location: "Milan, Italy",
    degree: "MSc in Economics and Management of Innovation and Technology",
    status: "In progress (graduating 2026)",
    courses: [
      "The Emergence of Entrepreneurial Ventures: Theory and Practice",
      "Intellectual Property Law for Business",
      "Data Analysis Module I — Data Lab for Entrepreneurship",
      "Venture Capital and Valuation",
      "Corporate Venturing and Innovation Strategy",
      "Economics of Strategy and Innovation",
      "Entrepreneurial Decision Making",
      "Data Analysis Module II — Exploratory Data Analysis and Visualization",
      "Industry Dynamics and Innovation Ecosystems",
      "Applied Machine Learning",
      "Entrepreneurship and Business Planning",
      "M&A Finance & Valuation",
      "Geopolitics for Business",
      "Innovation, Growth and Sustainability",
    ],
    projects: [
      {
        title: "Master's Thesis",
        description:
          "\"Effects of the Ukraine–Russia War on the Financing of Europe's Defense Sector.\" Quantitative analysis using European startup funding datasets to assess how the outbreak of the Ukraine conflict (2022) affected capital allocation and investment dynamics in the defense and dual-use technology ecosystem.",
      },
      {
        title: "PE Investment Fund Simulation",
        description:
          "Simulated a full private equity investment fund: sourced deals, performed due diligence, built DCF and LBO valuation models in Excel, structured investment recommendations, and presented to a mock investment committee.",
      },
      {
        title: "IP Valuation Model",
        description:
          "Built regression models in Python/R to assess patent value based on citation counts, patent family size, and technological field. Developed a quantitative framework for IP asset valuation applicable to deeptech licensing and M&A contexts.",
      },
      {
        title: "Geopolitical Risk Index",
        description:
          "Developed a group geopolitical risk index for selected nations, synthesizing quantitative indicators (political stability, conflict exposure, regulatory risk, trade dependency) with qualitative geopolitical analysis.",
      },
    ],
  },
  {
    key: "imperial",
    website: "https://www.imperial.ac.uk",
    period: "2019 – 2024",
    title: "Imperial College London",
    location: "London, United Kingdom",
    degree: "MEng in Aeronautical Engineering (H411) with Year Abroad",
    courses: [
      "Aerodynamics (1, 2, 3)",
      "Computing & Numerical Methods (MATLAB, C++, Python)",
      "Engineering Practice (Practical & Technical)",
      "Introduction to Aerospace",
      "Materials (Mechanics & Failure Analysis)",
      "Mathematics (Calculus, Linear Algebra, Differential Equations)",
      "Mechanics & Structures (1, 2, 3)",
      "Thermodynamics & Heat Transfer",
      "Flight Dynamics & Control",
      "Mechatronics",
      "Propulsion & Turbomachinery",
      "Aerospace Vehicle Design (AVD)",
      "Control Systems",
      "Artificial Intelligence for Aerospace Engineers",
      "Advanced Manufacturing",
      "Lightweight Structures & Composites",
      "High Performance Computing",
      "Finite Elements",
      "Design for Additive Manufacturing",
    ],
    projects: [
      {
        title: "Final Year Project (Thesis)",
        description:
          "\"Impact of Thermoplastic Film Interleaving on CFRP Composite Mechanical Performance.\" Evaluated CFRP composites interleaved with PES, PSU, and PC thermoplastic films. Key findings: PES-In gave +21.9% strain improvement but −7.17% compressive strength reduction; Charpy impact showed +15.7% improvement. In-configuration outperformed Out-configuration.",
      },
      {
        title: "Group Design Project — UAV Coastal Surveillance",
        description:
          "Led structural subsystem integration for a maritime rescue UAV designed for autonomous coastal surveillance. Coordinated wing/fuselage/motor interfaces across 25-person multidisciplinary team across aerodynamics, control, and embedded systems.",
      },
      {
        title: "Aerospace Vehicle Design — Business Jet (Vanga)",
        description:
          "Preliminary design of a light business jet in team of 6. Structural sizing of wing, fuselage, and V-tail with detailed flap mechanism design using generative design approach and FEA validation. Final mechanism weight: 297.0g; max vertical deflection at ultimate load: 0.436mm with no plastic deformation.",
      },
    ],
  },
  {
    key: "supaero",
    website: "https://www.isae-supaero.fr",
    period: "2022 – 2023",
    title: "ISAE-SUPAERO",
    location: "Toulouse, France",
    degree: "Engineering Exchange Program (2e année du cycle Ingénieur)",
    status: "Exchange year during Imperial Year 3",
    courses: [
      "Mécanique Générale (Space & Flight Mechanics)",
      "Mécanique et Thermodynamique des Fluides (Aerodynamics & Propulsion)",
      "Mathématiques Appliquées (Applied Mathematics & Numerical Methods)",
      "Signaux et Systèmes (Signals, Systems, & Automatic Control)",
      "Mécanique des Solides Déformables (Structural Mechanics & FEM)",
      "Informatique (OOP, Networks, Combinatorial Optimization)",
      "Physique (Heat Transfer & Irreversible Processes)",
      "Conception Fonctionnelle (Systems Engineering & Functional Design)",
      "Conception Avant-Projet (Conceptual Design with Industry Partners)",
      "Gestion de Projet (Project Management)",
      "Initiation aux Techniques d'Essais en Vol (Flight Testing)",
      "Commande de Vol (Flight Control)",
      "Facteurs Humains (Human Factors & HMI)",
      "Cybersécurité (Cybersecurity in Critical Systems)",
    ],
    projects: [
      {
        title: "AI Ticket Price Forecasting",
        description:
          "Developed a Python-based ML model to forecast airline ticket prices. Integrated web-scraped historical fare data, weather indicators, and market variables. Applied supervised ML techniques (regression, time series) to predict optimal booking windows for specific routes.",
      },
      {
        title: "Research Internship — Airbus Helicopters",
        description:
          "Embedded in fly-by-wire control architecture team developing dynamic models for the CityAirbus eVTOL prototype. See professional experience for full details.",
      },
    ],
  },
];
