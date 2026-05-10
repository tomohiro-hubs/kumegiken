import { getSiteOrigin, toAbsoluteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

export default function robots() {
  const siteOrigin = getSiteOrigin();

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/test-hero/",
          "/test-hero-2/",
          "/test-hero-3/",
          "/top-backup/",
          "/top-copy/",
        ],
      },
    ],
    sitemap: toAbsoluteUrl("/sitemap.xml", { addTrailingSlash: false }),
    host: siteOrigin,
  };
}
