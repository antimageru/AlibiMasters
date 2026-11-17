import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  return ["", "/birthday", "/corporate", "/terms"].map((path) => ({ url: `${base}${path}`, changeFrequency: "monthly" as const, priority: path ? 0.7 : 1 }));
}
