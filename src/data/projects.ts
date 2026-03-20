export interface Project {
  slug: string;
  year: string;
  title: string;
  category: string;
  description: string;
  longDescription: string[];
  details: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "uav-coastal-surveillance",
    year: "2024",
    title: "UAV Coastal Surveillance",
    category: "Aerospace Systems",
    description:
      "Group design project at Imperial College London. Led subsystem integration and team coordination for a UAV platform designed for autonomous coastal surveillance missions.",
    longDescription: [
      "As part of the MEng Group Design Project at Imperial College London, our team designed and prototyped a UAV platform for autonomous coastal surveillance. I was responsible for subsystem integration and team coordination across aerodynamics, control, and embedded systems workstreams.",
      "The project covered the full systems engineering lifecycle: requirements definition, concept selection, preliminary design, and subsystem validation. Key challenges included designing for low-altitude maritime environments, sensor fusion for obstacle detection, and power budgeting for extended missions.",
      "Technical areas: aerodynamics (lift/drag trade-off), flight control system architecture, embedded C firmware, and structural analysis of composite airframe components.",
    ],
    details: [
      { label: "Institution", value: "Imperial College London" },
      { label: "Year", value: "2023 – 2024" },
      { label: "Role", value: "Systems Integration Lead" },
      { label: "Stack", value: "MATLAB, Simulink, C, CAD" },
      { label: "Type", value: "Group Design Project (MEng)" },
    ],
  },
  {
    slug: "ai-ticket-forecasting",
    year: "2023",
    title: "AI Ticket Price Forecasting",
    category: "Machine Learning",
    description:
      "Built an AI-based model for forecasting airline ticket prices at ISAE-SUPAERO. Integrated web-scraped historical fare data with machine learning to predict optimal booking windows.",
    longDescription: [
      "At ISAE-SUPAERO during my exchange year, I developed a machine learning pipeline to predict airline ticket prices for specific routes. The system scraped historical fare data from public booking platforms, cleaned and structured it into a time-series dataset, then trained regression models to forecast price trends.",
      "The goal was to identify optimal booking windows — predicting when fares would be at their lowest for a given route and travel date. Models tested included linear regression, gradient boosting (XGBoost), and LSTM networks for temporal patterns.",
      "The project required building a full data pipeline from raw web data to actionable prediction, with a focus on model interpretability alongside accuracy.",
    ],
    details: [
      { label: "Institution", value: "ISAE-SUPAERO" },
      { label: "Year", value: "2022 – 2023" },
      { label: "Role", value: "Solo Project" },
      { label: "Stack", value: "Python, scikit-learn, XGBoost, BeautifulSoup" },
      { label: "Type", value: "Academic Project" },
    ],
  },
  {
    slug: "avd-project",
    year: "2024",
    title: "AVD Project",
    category: "Vehicle Design",
    description:
      "Advanced Vehicle Design group project at Imperial College London. Full conceptual design of an advanced vehicle system, covering dynamics, powertrain, structures, and aerodynamics from requirements to preliminary design.",
    longDescription: [
      "The Advanced Vehicle Design (AVD) module at Imperial College London is an intensive group design course where multidisciplinary teams develop a complete advanced vehicle concept from scratch. The process mirrors real industry design cycles: requirements capture, concept selection, preliminary design, and cross-team integration.",
      "Our team was responsible for defining vehicle architecture, performance targets, and system-level trade-offs across aerodynamics, powertrain, suspension, and structural design. I contributed to systems integration and the aerodynamic package, working on drag-downforce trade-offs and packaging constraints.",
      "The project culminated in a formal design presentation and written report reviewed by faculty and industry examiners. Images and full technical breakdown coming soon.",
    ],
    details: [
      { label: "Institution", value: "Imperial College London" },
      { label: "Year", value: "2023 – 2024" },
      { label: "Role", value: "Systems & Aerodynamics" },
      { label: "Stack", value: "CAD, MATLAB, CFD tools" },
      { label: "Type", value: "Group Design Project (MEng)" },
    ],
  },
  {
    slug: "3d-printing",
    year: "2023",
    title: "3D Printing",
    category: "Fabrication",
    description:
      "Personal exploration of FDM additive manufacturing: parametric design in Fusion 360, material testing across PLA / PETG / TPU, and production of functional mechanical parts and enclosures.",
    longDescription: [
      "An ongoing personal project exploring the full FDM workflow from design to finished part. I design parametric models in Fusion 360, slice and tune prints for dimensional accuracy and surface finish, and test mechanical properties across different filament types.",
      "Materials explored include PLA for rigid prototypes, PETG for functional parts requiring temperature resistance, and TPU for flexible components. I've produced mounts, electronic enclosures, mechanical assemblies, and iterative prototypes for other personal projects.",
      "The process has sharpened understanding of design-for-manufacture constraints — tolerances, wall thickness, overhang management, and post-processing. A full library of builds and images is coming soon.",
    ],
    details: [
      { label: "Year", value: "2022 – ongoing" },
      { label: "Type", value: "Personal Project" },
      { label: "Stack", value: "Fusion 360, Cura / PrusaSlicer" },
      { label: "Materials", value: "PLA, PETG, TPU" },
    ],
  },
  {
    slug: "lutlab",
    year: "2025",
    title: "LutLab",
    category: "Software",
    description:
      "Photo modification software that simulates film images and polaroid-style frames for digital pictures. Built to bring the analog aesthetic into digital photography workflows.",
    longDescription: [
      "LutLab is a personal software project that applies color grading and stylistic overlays to digital photographs, simulating the look of specific analog film stocks and polaroid-format prints. The goal was to build a lightweight, local alternative to subscription-based tools.",
      "The core engine applies LUT (Look-Up Table) transformations to emulate the tonal curves, grain, and color shifts characteristic of film stocks like Kodak Portra and Fuji Velvia. On top of LUT processing, the tool adds polaroid-inspired framing, border rendering, and vignetting effects configurable per image.",
      "Built entirely in Python using Pillow and NumPy for image manipulation. The pipeline reads standard image formats, applies transformations in linear light space, and exports processed files in configurable output formats. Full UI, screenshots, and download link coming soon.",
    ],
    details: [
      { label: "Year", value: "2025" },
      { label: "Type", value: "Personal Software Project" },
      { label: "Stack", value: "Python, Pillow, NumPy" },
      { label: "Status", value: "In Development" },
    ],
  },
  {
    slug: "diy-projects",
    year: "Ongoing",
    title: "DIY Projects",
    category: "DIY",
    description:
      "A running collection of personal hardware builds, electronics experiments, and fabrication side projects.",
    longDescription: [
      "An ongoing log of personal builds that sit at the intersection of engineering, craftsmanship, and curiosity. Projects range from electronics and embedded systems to mechanical assemblies and home fabrication.",
      "Past and current items include custom sensor rigs, embedded microcontroller projects, mechanical fixtures designed for the 3D printer, and experiments in materials and finishing techniques.",
      "This page will grow over time. Full documentation, schematics, and build photos coming soon.",
    ],
    details: [
      { label: "Year", value: "Ongoing" },
      { label: "Type", value: "Personal Projects" },
      { label: "Stack", value: "Arduino, RaspberryPi, CAD, various" },
    ],
  },
];
