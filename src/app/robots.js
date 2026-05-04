import { getSiteOrigin, toAbsoluteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

export default function robots() {
  const siteOrigin = getSiteOrigin();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: toAbsoluteUrl("/sitemap.xml", { addTrailingSlash: false }),
    host: siteOrigin,
  };
}
