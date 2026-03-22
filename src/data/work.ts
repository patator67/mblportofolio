export interface WorkEntry {
  slug: string;
  period: string;
  company: string;
  location: string;
  category: string;
  website: string;
  description: string;
  longDescription: string[];
  details: { label: string; value: string }[];
}

export const workEntries: WorkEntry[] = [
  {
    slug: "starburst",
    period: "Sep 2025 – Feb 2026",
    company: "Starburst",
    location: "Paris, France",
    category: "Strategic Consulting & Innovation",
    website: "https://www.starburst.aero",
    description:
      "Strategic consulting on growth strategy, portfolio construction, and dual-use technology investment for aerospace/defense corporate clients. Performed financing analyses for ESA and DG-DEFIS accelerators. Mapped European defense and deep-tech startup ecosystems.",
    longDescription: [
      "At Starburst Aerospace & Defense, the world's leading innovation catalyst for the A&D industry (network of 9,000+ startups across 10 global offices), I executed a strategic consulting mission for a major aerospace company on growth strategy and portfolio construction.",
      "Core deliverables included market mapping of European defense and deep-tech startups to identify capability gaps, synergies, and M&A targets; financing analyses for ESA (Business Incubation Centers, BASS) and DG-DEFIS (EU defense industrial base strengthening) accelerators to inform capital allocation; and assessment of dual-use technology landscapes (civilian-military crossover applications) for strategic positioning.",
      "The project required deep understanding of both the public funding ecosystem (ESA, DG-DEFIS, EDTIB) and private venture dynamics in deeptech defense. Output included curated startup landscape reports, financial models, competitive analyses, and client presentation decks delivered to investment committees. Additionally, I drove AI tool implementation (Claude, Lovable) to improve team research productivity and content workflows.",
    ],
    details: [
      { label: "Company", value: "Starburst Aerospace" },
      { label: "Period", value: "Sep 2025 – Feb 2026" },
      { label: "Location", value: "Paris, France" },
      { label: "Role", value: "Strategic Consulting Intern" },
      { label: "Focus", value: "Defense/deeptech investment, ESA ecosystem, DG-DEFIS" },
      { label: "Stack", value: "Excel, PowerPoint, Python, Claude, Lovable" },
      { label: "Type", value: "Internship" },
    ],
  },
  {
    slug: "airbus-helicopters",
    period: "May – Jul 2023",
    company: "Airbus Helicopters",
    location: "Marseille, France",
    category: "System & Command Engineering",
    website: "https://www.airbus.com/en/products-services/helicopters",
    description:
      "Systems engineering on CityAirbus NextGen (eVTOL urban air mobility prototype). Built dynamic simulation models of toothed-belt drivetrain systems. Performed parameter estimation and PID control tuning in safety-critical fly-by-wire environment.",
    longDescription: [
      "Embedded in the Flight Controls department at Airbus Helicopters, I contributed to the CityAirbus NextGen program — an all-electric 4-seat eVTOL aircraft with fly-by-wire architecture replacing traditional mechanical control linkages. My primary assignment was modeling a dual-engine/toothed-belt/propeller drivetrain system to identify stiffness (k) and damping (c) parameters across operating conditions.",
      "Technical execution included: (1) analytical model deriving equations of motion with eigenvalue calculation (natural frequency = 48.45 Hz); (2) Simulink implementation with coupled rotor dynamics, spring-damper behavior, and aerodynamic drag, validating against analytical result (49.12 Hz discrepancy <1%); (3) empirical parameter extraction from manufacturer FEA data and surface fitting in MATLAB; (4) robust PID controller design using MATLAB PID Tuner with low-pass filtering and uncertainty modeling (ureal variables) for limited-bandwidth electric command systems.",
      "Technical deliverables — dynamic simulation models and control architecture documentation — directly supported fly-by-wire architecture decisions for the VTOL prototype. The internship provided hands-on exposure to the full systems engineering lifecycle at a major aerospace OEM, including real-world constraints of safety-critical flight control design and integration with hardware-in-the-loop validation.",
    ],
    details: [
      { label: "Company", value: "Airbus Helicopters" },
      { label: "Period", value: "May – Jul 2023" },
      { label: "Location", value: "Marseille, France" },
      { label: "Programme", value: "CityAirbus NextGen eVTOL" },
      { label: "Role", value: "System & Command Engineering Intern" },
      { label: "Focus", value: "Fly-by-wire, dynamic simulation, PID control, VTOL architecture" },
      { label: "Stack", value: "Simulink, MATLAB, Python, PID Tuner, Robust Control" },
      { label: "Type", value: "Internship" },
    ],
  },
  {
    slug: "aco-le-mans",
    period: "Jun – Aug 2021",
    company: "ACO — Le Mans",
    location: "Le Mans, France",
    category: "Data Engineering",
    website: "https://www.aco.org",
    description:
      "Real-time data engineering on 24 Hours of Le Mans telemetry systems. Developed automated anomaly detection pipelines for 22 simultaneous car telemetry streams. Delivered daily FIA compliance reports used in live technical decision-making.",
    longDescription: [
      "At the Automobile Club de l'Ouest (ACO) — organizer of the 24 Hours of Le Mans and FIA World Endurance Championship — I worked in the technical data team during the 2021 racing season on real-time telemetry processing for race compliance. The technical environment: 22 competing cars with live data streams (tyre pressure/temperature, brake wear, fuel flow, engine RPM, suspension loads, driver inputs, G-forces) transmitted via LTE campus network over a 13.6 km circuit.",
      "My primary project was developing automated anomaly detection scripts (MATLAB / Python) to clean, structure, and validate live telemetry data under race conditions. Raw telemetry had significant noise and sensor faults at race pace; my pipelines identified statistical outliers, flagged sensor failures, and performed interpolation to generate clean signals suitable for real-time compliance monitoring. This eliminated manual data cleaning and enabled continuous automated reporting.",
      "Daily analytical FIA compliance reports — based on processed telemetry data — were delivered to race technical teams and used directly in real-time decision-making during race events. The experience provided exposure to high-stakes, real-time data engineering in a safety-critical, high-pressure motorsport environment where data accuracy had immediate sporting and regulatory consequences.",
    ],
    details: [
      { label: "Company", value: "Automobile Club de l'Ouest" },
      { label: "Period", value: "Jun – Aug 2021" },
      { label: "Location", value: "Le Mans, France" },
      { label: "Context", value: "24 Hours of Le Mans, FIA World Endurance Championship" },
      { label: "Role", value: "Data Engineering Intern" },
      { label: "Focus", value: "Real-time telemetry, anomaly detection, FIA compliance" },
      { label: "Stack", value: "Python, MATLAB, data pipelines, automation" },
      { label: "Type", value: "Internship" },
    ],
  },
  {
    slug: "air-france",
    period: "Jun – Aug 2024",
    company: "Air France",
    location: "Paris, France",
    category: "Operations & International Service",
    website: "https://www.airfrance.com",
    description:
      "Long-haul cabin crew (PCB — Personnel Complémentaire de Bord) on international routes. Supported in-flight operations, managed multi-timezone irregular schedules, delivered multilingual customer service, and executed safety/emergency procedures.",
    longDescription: [
      "As a PCB (Personnel Complémentaire de Bord), I joined Air France's seasonal supplementary cabin crew program (~350 positions annually from a competitive student pool) to support permanent PNC (Personnel Navigant Commercial) crew on long-haul international flights. The role required B2 English proficiency, comprehensive safety/security training, SIDA airport security clearance, and medical fitness certification.",
      "Operational responsibilities included: in-flight safety and service coordination with permanent crew; emergency procedure execution, safety equipment operation, evacuation protocol management, and first-aid response under senior crew supervision; multilingual customer service to international passengers across long-haul routes; management of irregular schedules and multi-timezone fatigue in a safety-critical environment.",
      "The experience provided direct operational insight into airline logistics complexity, the challenges of schedule management across multiple time zones, cross-functional teamwork under pressure, and the standards of professional service in an international aviation environment. This role demonstrated adaptability, stress management, and the ability to maintain high performance in dynamic, safety-critical operations.",
    ],
    details: [
      { label: "Company", value: "Air France" },
      { label: "Period", value: "Jun – Aug 2024" },
      { label: "Location", value: "Paris, France" },
      { label: "Role", value: "PCB (Long-Haul Cabin Crew)" },
      { label: "Focus", value: "In-flight operations, safety, customer service, teamwork" },
      { label: "Languages", value: "French (native), English (C2), Spanish, Italian" },
      { label: "Type", value: "Seasonal Contract" },
    ],
  },
];
