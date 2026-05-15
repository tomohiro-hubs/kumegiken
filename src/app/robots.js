import { toAbsoluteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: toAbsoluteUrl("/sitemap.xml", { addTrailingSlash: false }),
  };
}
