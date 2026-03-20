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
      "Strategic consulting mission on growth strategy and portfolio construction for an aerospace company. Performed financing analyses for ESA and DG-DEFIS accelerators. Mapped European defense startups to identify synergies, market gaps, and strategic opportunities.",
    longDescription: [
      "At Starburst Aerospace, I led a strategic consulting mission focused on growth strategy and portfolio construction for an aerospace-focused corporate client. The work involved deep market mapping of European defense and deep-tech startups, structured around sector clusters and capability gaps identified through primary and secondary research.",
      "I performed financing analyses tailored to ESA and DG-DEFIS accelerator programs, modelling fund structures, co-investment dynamics, and portfolio construction criteria. This required understanding both the public funding landscape and the commercial incentives of private investors in dual-use technology sectors.",
      "Output included a curated startup landscape report identifying synergies, white spaces, and M&A targets, alongside financial models and pitch materials delivered to investment committee. The work was conducted in a fast-paced consulting environment with end-to-end ownership of deliverables.",
    ],
    details: [
      { label: "Company", value: "Starburst Aerospace" },
      { label: "Period", value: "Sep 2025 – Feb 2026" },
      { label: "Location", value: "Paris, France" },
      { label: "Role", value: "Strategic Consulting Intern" },
      { label: "Stack", value: "Excel, PowerPoint, Python" },
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
      "Built dynamic simulation models (Python / Simulink) to assess mechanical system behavior under stress scenarios. Produced technical analysis reports supporting architecture decisions for a VTOL prototype. Modeled toothed-belt dynamics including stiffness, damping, and natural frequency estimation.",
    longDescription: [
      "At Airbus Helicopters in Marseille, I was embedded in the System & Command Engineering team working on a VTOL prototype. My primary task was building dynamic simulation models in Python and Simulink to assess the mechanical behavior of drivetrain components under various stress and load scenarios.",
      "I focused specifically on toothed-belt dynamics: modelling stiffness, damping parameters, and natural frequency estimation across operating conditions. These models fed directly into architecture reviews and supported key design decisions for the prototype powertrain.",
      "I produced technical analysis reports that were presented to the engineering team and contributed to formal design reviews. The internship gave hands-on exposure to the full simulation-to-design pipeline at a major aerospace OEM, working alongside experienced control and mechanical systems engineers.",
    ],
    details: [
      { label: "Company", value: "Airbus Helicopters" },
      { label: "Period", value: "May – Jul 2023" },
      { label: "Location", value: "Marseille, France" },
      { label: "Role", value: "System Engineering Intern" },
      { label: "Stack", value: "Python, MATLAB, Simulink" },
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
      "Developed automated anomaly detection scripts to clean live telemetry data (MATLAB / Python). Delivered daily compliance reports for FIA race officials, used directly in real-time decision-making by technical teams.",
    longDescription: [
      "At the Automobile Club de l'Ouest — organizer of the 24 Hours of Le Mans — I worked within the technical data team during the 2021 racing season. My main project was developing automated anomaly detection scripts to clean and validate live telemetry data streamed from competing race cars.",
      "The telemetry pipelines had significant noise and data quality issues at race pace. I built MATLAB and Python scripts to identify outliers, flag sensor faults, and interpolate clean signals in near real-time. These outputs were ingested directly into the compliance reporting system used by race officials.",
      "I delivered daily compliance reports to FIA race officials, which fed into real-time technical decisions during race events. The experience gave direct exposure to high-stakes data engineering in a live motorsport environment, where data accuracy had immediate sporting and regulatory consequences.",
    ],
    details: [
      { label: "Company", value: "Automobile Club de l'Ouest" },
      { label: "Period", value: "Jun – Aug 2021" },
      { label: "Location", value: "Le Mans, France" },
      { label: "Role", value: "Data Engineering Intern" },
      { label: "Stack", value: "MATLAB, Python" },
      { label: "Type", value: "Internship" },
    ],
  },
];
