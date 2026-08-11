import type { MetadataRoute } from "next";
import { siteConfig, features } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/solutions/it-hardware",
    "/solutions/cctv-security",
    "/solutions/biometrics-access-control",
    "/solutions/video-door-phone",
    "/solutions/networking",
    "/solutions/power-backup",
    "/solutions/fire-safety",
    "/solutions/epabx-intercom",
    "/solutions/commercial-audio-pa",
    "/industries",
    ...(features.showProjects ? ["/projects"] : []),
    "/amc-support",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
