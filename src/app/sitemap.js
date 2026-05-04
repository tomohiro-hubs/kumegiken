import { toAbsoluteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  "/",
  "/company",
  "/company/message",
  "/company/staff",
  "/company/area",
  "/company/history",
  "/service",
  "/service/waterproofing",
  "/service/sealing",
  "/service/painting",
  "/service/large-scale-repair",
  "/service/leak-repair",
  "/service/building-inspection",
  "/works",
  "/works/nishinomiya-mansion-waterproofing-01",
  "/works/osaka-building-large-scale-repair-01",
  "/works/kobe-mansion-painting-01",
  "/works/amagasaki-shop-leak-repair-01",
  "/works/nishinomiya-building-sealing-01",
  "/works/takarazuka-mansion-waterproofing-01",
  "/works/osaka-mansion-large-scale-repair-01",
  "/works/itami-apartment-painting-01",
  "/works/ashiya-house-waterproofing-01",
  "/works/suita-factory-waterproofing-01",
  "/column",
  "/column/waterproofing-guide",
  "/column/large-scale-repair-guide",
  "/column/leak-cause-and-fix",
  "/column/rooftop-waterproofing-lifespan",
  "/column/painting-timing",
  "/column/fire-insurance-leak-repair",
  "/recruit",
  "/recruit/sales",
  "/recruit/construction-manager",
  "/recruit/waterproofing-craftsman",
  "/contact",
  "/privacy",
  "/partner",
  "/simulation",
  "/dive-survey",
];

export default function sitemap() {
  const lastModified = new Date();

  return STATIC_ROUTES.map((route) => ({
    url: toAbsoluteUrl(route, { addTrailingSlash: true }),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}
