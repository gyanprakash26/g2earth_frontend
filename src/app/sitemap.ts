import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_CONFIG.url;

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: "daily" as const },
    { url: `${base}/shop`, priority: 0.9, changeFrequency: "daily" as const },
    { url: `${base}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${base}/faq`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${base}/shipping-policy`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${base}/return-refund`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${base}/cancellation`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${base}/privacy-policy`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${base}/terms`, priority: 0.4, changeFrequency: "yearly" as const },
    { url: `${base}/grievance-redressal`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return staticPages.map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
