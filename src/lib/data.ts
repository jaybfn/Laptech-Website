import type { Metadata } from "next";

export const siteConfig = {
  name: "LAPTECH",
  tagline: "Complete Technology Infrastructure. One Trusted Partner.",
  heroHeadline: "Complete IT Infrastructure, Surveillance & Power Solutions",
  description:
    "LAPTECH delivers end-to-end IT infrastructure, surveillance, networking, power backup and security solutions for homes, businesses and enterprises.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://laptech-one.vercel.app",
  experience: "15+ Years",
  contact: {
    phone: "+91 7204906049",
    email: "laptech.techinfo@gmail.com",
    whatsapp: "+91 7204906049",
    address:
      "No 35, Suprabha Complex, SRI Vasavi Temple Street, Vishweshwarapura, Basavanagudi, Bengaluru, Karnataka 560004",
    // Matches Google Business listing pin (NO 35).
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=LAPTECH%2C+NO+35%2C+Suprabha+Complex%2C+SRI%2C+Vasavi+Temple+St%2C+Vishweshwarapura%2C+Basavanagudi%2C+Bengaluru%2C+Karnataka+560004",
    mapsEmbedUrl:
      "https://maps.google.com/maps?q=LAPTECH%2C+NO+35%2C+Suprabha+Complex%2C+SRI%2C+Vasavi+Temple+St%2C+Vishweshwarapura%2C+Basavanagudi%2C+Bengaluru%2C+Karnataka+560004&z=17&output=embed",
  },
};

/** Toggle public sections without deleting code. Set true to re-enable later. */
export const features = {
  showProjects: false,
  showLegal: false,
};

/** Solutions brochure PDF — serves cached file; append ?regenerate=1 to rebuild locally */
export const solutionsBrochure = {
  href: "/api/solutions-pdf",
  label: "Download",
  filename: "LAPTECH-Solutions.pdf",
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
    "biometrics access control",
    "video door phone",
    "barcode printer",
    "barcode scanner",
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
        description: "Hardware, barcode systems, repairs & IT support",
      },
      {
        label: "CCTV & Security",
        href: "/solutions/cctv-security",
        description: "Intelligent surveillance systems",
      },
      {
        label: "Biometric & Access Control",
        href: "/solutions/biometrics-access-control",
        description: "Attendance, fingerprint & access systems",
      },
      {
        label: "Video Door Phone (VDP)",
        href: "/solutions/video-door-phone",
        description: "VDP systems, monitors & installation",
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
        label: "EPABX & Intercom",
        href: "/solutions/epabx-intercom",
        description: "Office, hotel & residential communication",
      },
      {
        label: "Commercial Audio & PA",
        href: "/solutions/commercial-audio-pa",
        description: "Speakers, amplifiers & PA systems",
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
    slug: "it-hardware",
    icon: "laptop" as const,
    image: "/solutions/it-hardware.png",
    imageAlt: "Desktop PC tower with illuminated hardware, keyboard and mouse",
    description:
      "Hardware, laptops, desktops, servers, barcode systems, upgrades, repairs and ongoing IT support.",
    features: [
      "Laptops & Desktops",
      "Servers & Workstations",
      "Barcode Printers",
      "Barcode Scanners",
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
    slug: "cctv-security",
    icon: "camera" as const,
    image: "/solutions/cctv-security.jpg",
    imageAlt: "Teal-lit professional IP dome CCTV camera on a navy commercial wall",
    description:
      "Intelligent surveillance systems designed to protect people, property and operations.",
    features: [
      "IP Network Cameras",
      "HD Cameras",
      "PTZ Cameras",
      "Wi-Fi Cameras",
      "Solar Cameras",
      "4G Surveillance",
      "NVR/DVR",
      "Remote Monitoring",
    ],
    cta: "Explore Security Solutions",
  },
  {
    id: "biometrics",
    title: "Biometric & Access Control Solutions",
    shortTitle: "Biometrics & Access",
    href: "/solutions/biometrics-access-control",
    slug: "biometrics-access-control",
    icon: "biometrics" as const,
    image: "/solutions/biometrics-vdp.jpg",
    imageAlt: "Biometric attendance and access control systems",
    description:
      "Secure entry and workforce management with biometric attendance, fingerprint and face recognition, and modern access control systems.",
    features: [
      "Biometric Attendance Systems",
      "Fingerprint & Face Recognition",
      "Access Control Systems",
      "RFID/Card-Based Systems",
      "Installation & Maintenance",
    ],
    cta: "Explore Biometrics & Access Control",
  },
  {
    id: "vdp",
    title: "Video Door Phone (VDP) Solutions",
    shortTitle: "Video Door Phone",
    href: "/solutions/video-door-phone",
    slug: "video-door-phone",
    icon: "vdp" as const,
    image: "/solutions/video-door-phone.jpg",
    imageAlt: "Video door phone outdoor station and indoor monitor",
    description:
      "Reliable video door phone systems for homes, apartments and commercial buildings — from indoor monitors to multi-apartment VDP setups.",
    features: [
      "Video Door Phones",
      "Indoor Monitors",
      "Multi-Apartment VDP Systems",
      "Installation & Maintenance",
    ],
    cta: "Explore VDP Solutions",
  },
  {
    id: "networking",
    title: "Networking & Infrastructure",
    shortTitle: "Networking",
    href: "/solutions/networking",
    slug: "networking",
    icon: "network" as const,
    image: "/solutions/networking.jpg",
    imageAlt: "Modern data center networking racks with teal-lit structured cabling",
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
    slug: "power-backup",
    icon: "power" as const,
    image: "/solutions/power-backup.jpg",
    imageAlt: "Commercial UPS, inverter and battery backup power system",
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
    slug: "fire-safety",
    icon: "fire" as const,
    image: "/solutions/fire-safety.jpg",
    imageAlt: "Teal-themed fire alarm pull station and smoke detector",
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
    id: "epabx",
    title: "EPABX & Intercom Solutions",
    shortTitle: "EPABX & Intercom",
    href: "/solutions/epabx-intercom",
    slug: "epabx-intercom",
    icon: "epabx" as const,
    image: "/solutions/epabx-intercom.jpg",
    imageAlt: "Business EPABX phone console and office intercom systems",
    description:
      "Complete EPABX and intercom communication systems for offices, hotels, apartments and residential buildings.",
    features: [
      "EPABX Systems",
      "Office Intercom Systems",
      "Multi-Extension Communication Systems",
      "Hotel & Hospitality Communication Systems",
      "Apartment & Residential Intercom Systems",
      "Door Intercom Systems",
      "System Installation & Configuration",
      "Maintenance & AMC Support",
    ],
    cta: "Explore EPABX & Intercom",
  },
  {
    id: "audio-pa",
    title: "Commercial Audio & Public Address Solutions",
    shortTitle: "Audio & PA",
    href: "/solutions/commercial-audio-pa",
    slug: "commercial-audio-pa",
    icon: "audio" as const,
    image: "/solutions/commercial-audio-pa.jpg",
    imageAlt: "Ceiling-mounted and wall PA speakers with commercial audio amplifier",
    description:
      "Professional commercial audio and public address systems for hotels, restaurants, offices and large spaces.",
    features: [
      "Ceiling-Mounted Speakers",
      "Wall-Mounted Speakers",
      "Ground & Outdoor Speakers",
      "Commercial Audio Systems",
      "Hotel & Restaurant Music Solutions",
      "Public Address (PA) Systems",
      "Amplifiers & Mixers",
      "Audio Installation & Maintenance",
    ],
    cta: "Explore Audio & PA Solutions",
  },
];

export const industries = [
  {
    id: "corporate",
    title: "Corporate Offices",
    image: "/industries/corporate.jpg",
    imageAlt: "Modern corporate office interior with professional workspace",
    solutions: ["Networking", "CCTV", "Access Infrastructure", "Power Backup", "IT Support"],
  },
  {
    id: "hotels",
    title: "Hotels & Resorts",
    image: "/industries/hotels.jpg",
    imageAlt: "Luxury hotel lobby and hospitality interior",
    solutions: ["Wi-Fi", "CCTV", "EPABX", "Audio Systems", "Power Backup"],
  },
  {
    id: "education",
    title: "Schools & Colleges",
    image: "/industries/education.jpg",
    imageAlt: "Modern school and college campus building",
    solutions: ["Networking", "CCTV", "PA Systems", "IT Hardware", "Power Backup"],
  },
  {
    id: "hospitals",
    title: "Hospitals",
    image: "/industries/hospitals.jpg",
    imageAlt: "Modern hospital corridor and healthcare facility",
    solutions: ["Networking", "Surveillance", "Power Backup", "Intercom", "IT Support"],
  },
  {
    id: "retail",
    title: "Retail",
    image: "/industries/retail.jpg",
    imageAlt: "Modern retail store interior",
    solutions: ["CCTV", "Networking", "POS Support", "Power Backup"],
  },
  {
    id: "warehouses",
    title: "Warehouses",
    image: "/industries/warehouses.jpg",
    imageAlt: "Large modern warehouse with industrial racking",
    solutions: ["Industrial CCTV", "Networking", "Fire Safety", "Power Backup"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    image: "/industries/manufacturing.jpg",
    imageAlt: "Modern manufacturing factory floor",
    solutions: ["Industrial Networking", "Surveillance", "Fire Safety", "Power Backup"],
  },
  {
    id: "residential",
    title: "Residential",
    image: "/industries/residential.jpg",
    imageAlt: "Modern residential apartment living space",
    solutions: ["CCTV", "Video Door Phone", "Wi-Fi", "Power Backup"],
  },
  {
    id: "commercial",
    title: "Commercial Buildings",
    image: "/industries/commercial.jpg",
    imageAlt: "Modern commercial building exterior at dusk",
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

export const brands = [
  { name: "Dell", logo: "/brands/dell.svg" },
  { name: "HP", logo: "/brands/hp.svg" },
  { name: "Lenovo", logo: "/brands/lenovo.svg" },
  { name: "Asus", logo: "/brands/asus.svg" },
  { name: "CP Plus", logo: "/brands/cp-plus.png" },
  { name: "Hikvision", logo: "/brands/hikvision.png" },
  { name: "Dahua", logo: "/brands/dahua.png" },
  { name: "TP-Link", logo: "/brands/tp-link.svg" },
  { name: "D-Link", logo: "/brands/d-link.png" },
  { name: "Cisco", logo: "/brands/cisco.svg" },
  { name: "Ubiquiti", logo: "/brands/ubiquiti.svg" },
  { name: "Luminous", logo: "/brands/luminous.png" },
  { name: "Exide", logo: "/brands/exide.png" },
  { name: "Amaron", logo: "/brands/amaron.png" },
  { name: "Microtek", logo: "/brands/microtek.png" },
  { name: "Canon", logo: "/brands/canon.png" },
  { name: "Epson", logo: "/brands/epson.svg" },
  { name: "Brother", logo: "/brands/brother.png" },
  { name: "Logitech", logo: "/brands/logitech.png" },
  { name: "Matrix", logo: "/brands/matrix.png" },
  { name: "Panasonic", logo: "/brands/panasonic.svg" },
  { name: "Samsung", logo: "/brands/samsung.svg" },
  { name: "Bosch", logo: "/brands/bosch.svg" },
  { name: "Ahuja", logo: "/brands/ahuja.png" },
  { name: "Intel", logo: "/brands/intel.svg" },
  { name: "AMD", logo: "/brands/amd.svg" },
  { name: "Gigabyte", logo: "/brands/gigabyte.png" },
  { name: "NVIDIA", logo: "/brands/nvidia.svg" },
  { name: "Zotac", logo: "/brands/zotac.png" },
  { name: "Crucial", logo: "/brands/crucial.png" },
  { name: "Kingston", logo: "/brands/kingston.svg" },
  { name: "Seagate", logo: "/brands/seagate.svg" },
  { name: "Western Digital", logo: "/brands/western-digital.png" },
  { name: "Zebronics", logo: "/brands/zebronics.png" },
  { name: "Cooler Master", logo: "/brands/cooler-master.svg" },
  { name: "Antec", logo: "/brands/antec.png" },
  { name: "MSI", logo: "/brands/msi.svg" },
  { name: "DeepCool", logo: "/brands/deepcool.svg" },
  { name: "TVS Electronics", logo: "/brands/tvs.png" },
  { name: "eSSL", logo: "/brands/essl.png" },
  { name: "SecureEye", logo: "/brands/secure-eye.png" },
  { name: "OneTouch", logo: "/brands/one-touch.png" },
];
