import fs from "node:fs";
import path from "node:path";
import { toAbsoluteUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

const ROUTE_GROUPS = {
  static: [
    "/",
    "/company",
    "/company/message",
    "/company/staff",
    "/company/area",
    "/company/history",
    "/service",
    "/service/building-inspection",
    "/service/large-scale-repair",
    "/service/waterproofing",
    "/service/sealing",
    "/service/painting",
    "/service/leak-repair",
    "/works",
    "/works/kansai",
    "/column",
    "/recruit",
    "/recruit/sales",
    "/recruit/construction-manager",
    "/recruit/waterproofing-craftsman",
    "/contact",
    "/privacy",
    "/editorial-policy",
    "/citations-policy",
    "/partner",
    "/simulation",
  ],
  column: [
    "/column/waterproofing-guide",
    "/column/nishinomiya-waterproofing-optimal-selection",
    "/column/nishinomiya-leak-speed",
    "/column/nishinomiya-fire-insurance-leak-repair",
    "/column/nishinomiya-ashiba",
    "/column/nishinomiya-shitaji",
    "/column/nishinomiya-seal",
  ],
  works: [
    "/works/nishinomiya-rooftop-waterproofing-fire-insurance-01",
    "/works/nishinomiya-veranda-waterproofing-01",
    "/works/nishinomiya-commercial-waterproofing-01",
    "/works/nishinomiya-rooftop-waterproofing-02",
    "/works/nishinomiya-mansion-waterproofing-01",
    "/works/osaka-mansion-large-scale-repair-01",
    "/works/itami-apartment-painting-01",
    "/works/ashiya-house-waterproofing-01",
    "/works/suita-factory-waterproofing-01",
    "/works/osaka-rental-mansion-repair-01",
    "/works/osaka-rental-mansion-repair-02",
    "/works/hyogo-rental-mansion-repair-01",
    "/works/rooftop-waterproofing-education-01",
  ],
};

const APP_DIR = path.join(process.cwd(), "src", "app");

const STATIC_ROUTE_SOURCE_FILES = {
  "/": "page.js",
  "/company": "company/page.jsx",
  "/company/message": "company/message/page.jsx",
  "/company/staff": "company/staff/page.jsx",
  "/company/area": "company/area/page.jsx",
  "/company/history": "company/history/page.jsx",
  "/service": "service/page.jsx",
  "/service/building-inspection": "service/building-inspection/page.jsx",
  "/service/large-scale-repair": "service/large-scale-repair/page.jsx",
  "/service/waterproofing": "service/waterproofing/page.jsx",
  "/service/sealing": "service/sealing/page.jsx",
  "/service/painting": "service/painting/page.jsx",
  "/service/leak-repair": "service/leak-repair/page.jsx",
  "/works": "works/page.jsx",
  "/works/kansai": "works/kansai/page.jsx",
  "/column": "column/page.jsx",
  "/recruit": "recruit/page.jsx",
  "/recruit/sales": "recruit/sales/page.jsx",
  "/recruit/construction-manager": "recruit/construction-manager/page.jsx",
  "/recruit/waterproofing-craftsman": "recruit/waterproofing-craftsman/page.jsx",
  "/contact": "contact/page.jsx",
  "/privacy": "privacy/page.jsx",
  "/editorial-policy": "editorial-policy/page.jsx",
  "/citations-policy": "citations-policy/page.jsx",
  "/partner": "partner/page.jsx",
  "/simulation": "simulation/page.jsx",
};

function resolveSourceFile(route) {
  if (STATIC_ROUTE_SOURCE_FILES[route]) {
    return path.join(APP_DIR, STATIC_ROUTE_SOURCE_FILES[route]);
  }

  if (route.startsWith("/column/")) {
    const slug = route.replace("/column/", "");
    return path.join(APP_DIR, "column", slug, "page.jsx");
  }

  if (route.startsWith("/works/")) {
    return path.join(APP_DIR, "works", "[slug]", "page.jsx");
  }

  return null;
}

function getLastModified(route) {
  const sourceFile = resolveSourceFile(route);

  if (!sourceFile) {
    return new Date("2026-06-21");
  }

  try {
    return fs.statSync(sourceFile).mtime;
  } catch {
    return new Date("2026-06-21");
  }
}

function getPriority(route) {
  if (route === "/") return 1;
  if (route === "/contact") return 0.95;
  if (route.startsWith("/service/")) return 0.9;
  if (route === "/works" || route === "/column" || route === "/recruit") return 0.9;
  if (route.startsWith("/works/") || route.startsWith("/column/")) return 0.8;
  return 0.7;
}

function getChangeFrequency(route) {
  if (route === "/") return "weekly";
  if (route === "/works" || route === "/column") return "weekly";
  if (route.startsWith("/works/") || route.startsWith("/column/")) return "monthly";
  return "monthly";
}

export default function sitemap() {
  return Object.values(ROUTE_GROUPS)
    .flat()
    .map((route) => ({
      url: toAbsoluteUrl(route, { addTrailingSlash: true }),
      lastModified: getLastModified(route),
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
    }));
}
