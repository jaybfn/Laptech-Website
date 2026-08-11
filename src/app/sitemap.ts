import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/solutions/it-hardware",
    "/solutions/cctv-security",
    "/solutions/networking",
    "/solutions/power-backup",
    "/solutions/fire-safety",
    "/solutions/intercom-audio",
    "/industries",
    "/projects",
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
