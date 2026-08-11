import type { Metadata } from "next";

export const siteConfig = {
  name: "LAPTECH",
  tagline: "Complete Technology Infrastructure. One Trusted Partner.",
  heroHeadline: "Powering Businesses. Securing Spaces. Connecting Everything.",
  description:
    "LAPTECH delivers end-to-end IT infrastructure, surveillance, networking, power backup and security solutions for homes, businesses and enterprises.",
  url: "https://laptech.example.com",
  experience: "15+ Years",
  contact: {
    phone: "[Phone Number]",
    email: "[Email Address]",
    whatsapp: "[WhatsApp Number]",
    address: "[Office Address]",
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "LAPTECH | IT Infrastructure, Security & Power Solutions",
    template: "%s | LAPTECH",
  },
  description: siteConfig.description,
  keywords: [
    "IT solutions company",
    "IT infrastructure company",
    "CCTV installation",
    "CCTV service",
    "networking solutions",
    "office networking",
    "server installation",
    "Wi-Fi installation",
    "UPS solutions",
    "inverter solutions",
    "fire alarm installation",
    "EPABX installation",
    "laptop repair and service",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: siteConfig.name,
    title: "LAPTECH | Complete Technology Infrastructure",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "LAPTECH | Complete Technology Infrastructure",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  {
    label: "Solutions",
    href: "/services",
    children: [
      {
        label: "IT Hardware & Laptops",
        href: "/solutions/it-hardware",
        description: "Hardware, upgrades, repairs & IT support",
      },
      {
        label: "CCTV & Security",
        href: "/solutions/cctv-security",
        description: "Intelligent surveillance systems",
      },
      {
        label: "Networking",
        href: "/solutions/networking",
        description: "Structured LAN, Wi-Fi & fiber",
      },
      {
        label: "Power Backup",
        href: "/solutions/power-backup",
        description: "UPS, inverters & batteries",
      },
      {
        label: "Fire Safety",
        href: "/solutions/fire-safety",
        description: "Detection & alarm systems",
      },
      {
        label: "Intercom & Audio",
        href: "/solutions/intercom-audio",
        description: "EPABX, PA & communication",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "AMC & Support", href: "/amc-support" },
  { label: "Contact", href: "/contact" },
];

export const services = [
  {
    id: "it-hardware",
    title: "IT Hardware & Laptop Solutions",
    shortTitle: "IT Hardware",
    href: "/solutions/it-hardware",
    icon: "laptop" as const,
    description:
      "Hardware, laptops, desktops, servers, upgrades, repairs and ongoing IT support.",
    features: [
      "Laptops & Desktops",
      "Servers & Workstations",
      "Upgrades & Repairs",
      "IT Support",
    ],
    cta: "Explore IT Solutions",
  },
  {
    id: "cctv",
    title: "CCTV & Surveillance",
    shortTitle: "CCTV & Security",
    href: "/solutions/cctv-security",
    icon: "camera" as const,
    description:
      "Intelligent surveillance systems designed to protect people, property and operations.",
    features: [
      "IP CCTV",
      "HD CCTV",
      "PTZ Cameras",
      "Wi-Fi Cameras",
      "Solar CCTV",
      "4G Surveillance",
      "NVR/DVR",
      "Remote Monitoring",
    ],
    cta: "Explore Security Solutions",
  },
  {
    id: "networking",
    title: "Networking & Infrastructure",
    shortTitle: "Networking",
    href: "/solutions/networking",
    icon: "network" as const,
    description:
      "Reliable connectivity and structured infrastructure for modern businesses.",
    features: [
      "Structured LAN",
      "Wi-Fi",
      "Routers",
      "Switches",
      "Fiber Optics",
      "Server Racks",
    ],
    cta: "Explore Networking",
  },
  {
    id: "power",
    title: "Power Backup",
    shortTitle: "Power Backup",
    href: "/solutions/power-backup",
    icon: "power" as const,
    description:
      "Keep your business running with dependable backup power solutions.",
    features: [
      "UPS",
      "Inverters",
      "Tubular Batteries",
      "Lithium Batteries",
      "Commercial Power Backup",
    ],
    cta: "Explore Power Solutions",
  },
  {
    id: "fire",
    title: "Fire Safety",
    shortTitle: "Fire Safety",
    href: "/solutions/fire-safety",
    icon: "fire" as const,
    description:
      "Early detection and dependable fire alarm systems for safer environments.",
    features: [
      "Fire Alarm Systems",
      "Smoke Detectors",
      "Heat Detectors",
      "Control Panels",
      "Emergency Sounders",
    ],
    cta: "Explore Fire Safety",
  },
  {
    id: "intercom",
    title: "Intercom & Audio",
    shortTitle: "Intercom & Audio",
    href: "/solutions/intercom-audio",
    icon: "audio" as const,
    description:
      "Communication and audio systems designed for offices, hotels, commercial spaces and institutions.",
    features: [
      "EPABX",
      "Intercom",
      "Video Door Phones",
      "PA Systems",
      "Ceiling Speakers",
      "Amplifiers",
    ],
    cta: "Explore Audio & Communication",
  },
];

export const industries = [
  {
    id: "corporate",
    title: "Corporate Offices",
    image: "corporate",
    solutions: ["Networking", "CCTV", "Access Infrastructure", "Power Backup", "IT Support"],
  },
  {
    id: "hotels",
    title: "Hotels & Resorts",
    image: "hotels",
    solutions: ["Wi-Fi", "CCTV", "EPABX", "Audio Systems", "Power Backup"],
  },
  {
    id: "education",
    title: "Schools & Colleges",
    image: "education",
    solutions: ["Networking", "CCTV", "PA Systems", "IT Hardware", "Power Backup"],
  },
  {
    id: "hospitals",
    title: "Hospitals",
    image: "hospitals",
    solutions: ["Networking", "Surveillance", "Power Backup", "Intercom", "IT Support"],
  },
  {
    id: "retail",
    title: "Retail",
    image: "retail",
    solutions: ["CCTV", "Networking", "POS Support", "Power Backup"],
  },
  {
    id: "warehouses",
    title: "Warehouses",
    image: "warehouses",
    solutions: ["Industrial CCTV", "Networking", "Fire Safety", "Power Backup"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    image: "manufacturing",
    solutions: ["Industrial Networking", "Surveillance", "Fire Safety", "Power Backup"],
  },
  {
    id: "residential",
    title: "Residential",
    image: "residential",
    solutions: ["CCTV", "Video Door Phone", "Wi-Fi", "Power Backup"],
  },
  {
    id: "commercial",
    title: "Commercial Buildings",
    image: "commercial",
    solutions: ["Infrastructure", "Security", "Fire Safety", "Communication"],
  },
];

export const projects = [
  {
    id: "corporate-infra",
    industry: "Corporate",
    title: "Corporate Office Infrastructure",
    description:
      "End-to-end networking, surveillance, server infrastructure and power backup for a modern office environment.",
    solutions: ["Networking", "CCTV", "Server Infrastructure", "Power Backup"],
    technologies: ["Structured Cabling", "IP Cameras", "UPS", "Managed Switches"],
    image: "project-corporate",
  },
  {
    id: "hotel-connectivity",
    industry: "Hospitality",
    title: "Hotel Connectivity & Security",
    description:
      "Guest Wi-Fi, CCTV coverage, EPABX communication and backup power designed for hospitality operations.",
    solutions: ["Wi-Fi", "CCTV", "EPABX", "Power Backup"],
    technologies: ["Enterprise Wi-Fi", "NVR", "EPABX", "Inverter Systems"],
    image: "project-hotel",
  },
  {
    id: "retail-security",
    industry: "Retail",
    title: "Retail Security Deployment",
    description:
      "Multi-camera surveillance with remote monitoring and reliable power continuity for retail premises.",
    solutions: ["CCTV", "Remote Monitoring", "Power Backup"],
    technologies: ["IP CCTV", "Cloud Viewing", "UPS"],
    image: "project-retail",
  },
  {
    id: "campus-network",
    industry: "Education",
    title: "Campus Network & PA Systems",
    description:
      "Structured networking, classroom connectivity and public address systems for educational campuses.",
    solutions: ["Networking", "PA Systems", "CCTV"],
    technologies: ["Fiber Backbone", "Ceiling Speakers", "Access Points"],
    image: "project-campus",
  },
  {
    id: "industrial-safety",
    industry: "Manufacturing",
    title: "Industrial Safety & Infrastructure",
    description:
      "Industrial networking, plant surveillance, fire detection and commercial power backup integration.",
    solutions: ["Industrial Networking", "Surveillance", "Fire Safety", "Power Backup"],
    technologies: ["Industrial Switches", "PTZ Cameras", "Fire Panels", "UPS"],
    image: "project-industrial",
  },
  {
    id: "residential-security",
    industry: "Residential",
    title: "Premium Residential Security",
    description:
      "Home surveillance, video door phone and power backup configured for residential peace of mind.",
    solutions: ["CCTV", "Video Door Phone", "Power Backup"],
    technologies: ["Wi-Fi Cameras", "Video Intercom", "Inverter"],
    image: "project-residential",
  },
];

export const whyLaptech = [
  {
    number: "01",
    title: "Experience",
    description:
      "15+ years of experience across IT infrastructure and technology solutions.",
  },
  {
    number: "02",
    title: "End-to-End Expertise",
    description:
      "One partner for hardware, networking, security, power and infrastructure.",
  },
  {
    number: "03",
    title: "Professional Installation",
    description:
      "Experienced technicians and structured installation processes.",
  },
  {
    number: "04",
    title: "Reliable Products",
    description: "Products sourced from trusted brands and suppliers.",
  },
  {
    number: "05",
    title: "Fast Support",
    description: "Responsive service and on-site technical support.",
  },
  {
    number: "06",
    title: "Long-Term Partnership",
    description:
      "AMC and maintenance solutions designed for ongoing reliability.",
  },
];

export const credibilityItems = [
  { label: "15+ Years Experience", icon: "experience" as const },
  { label: "End-to-End Solutions", icon: "solutions" as const },
  { label: "Expert Installation Team", icon: "team" as const },
  { label: "Fast On-Site Support", icon: "support" as const },
  { label: "Reliable After-Sales Service", icon: "service" as const },
];

export const ecosystemNodes = [
  "Laptop",
  "Network",
  "Server",
  "CCTV",
  "Security",
  "Power",
  "Fire Safety",
  "Communication",
];

export const amcFeatures = [
  "Preventive Maintenance",
  "On-Site Support",
  "Hardware Troubleshooting",
  "CCTV Maintenance",
  "Network Support",
  "Power Backup Maintenance",
  "System Health Checks",
];

export const brandPlaceholders = [
  "Brand Logo",
  "Brand Logo",
  "Brand Logo",
  "Brand Logo",
  "Brand Logo",
  "Brand Logo",
];
