import { siteConfig } from "@/lib/siteConfig";
import { toAbsoluteUrl } from "@/lib/siteUrl";

const COMPANY_NAME = siteConfig.company.name;
const SITE_URL = toAbsoluteUrl("/");
const ORGANIZATION_ID = `${SITE_URL}#organization`;
const LOCAL_BUSINESS_ID = `${SITE_URL}#local-business`;
const WEBSITE_ID = `${SITE_URL}#website`;
const PHONE = siteConfig.phone.international;
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.address.street,
  addressLocality: siteConfig.address.locality,
  addressRegion: siteConfig.address.region,
  postalCode: siteConfig.address.postalCode,
  addressCountry: siteConfig.address.country,
};

function mapServiceAreas() {
  return siteConfig.serviceAreas.map((area) => ({
    "@type": area.endsWith("県") || area.endsWith("府") ? "AdministrativeArea" : "City",
    name: area,
  }));
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: COMPANY_NAME,
    legalName: siteConfig.company.legalName,
    url: SITE_URL,
    telephone: PHONE,
    logo: toAbsoluteUrl("/images/ロゴ.png", { addTrailingSlash: false }),
    image: toAbsoluteUrl("/images/ロゴ.png", { addTrailingSlash: false }),
    address: ADDRESS,
    areaServed: mapServiceAreas(),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE,
        contactType: "customer service",
        availableLanguage: ["ja"],
        areaServed: "JP",
      },
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: siteConfig.company.name,
    inLanguage: siteConfig.site.locale,
    publisher: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function localBusinessJsonLd({ path = "/", description, image } = {}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: COMPANY_NAME,
    description: description || siteConfig.company.description,
    url: toAbsoluteUrl(path),
    image: toAbsoluteUrl(image || "/images/ロゴ.png", { addTrailingSlash: false }),
    telephone: PHONE,
    address: ADDRESS,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    openingHoursSpecification: siteConfig.businessHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    areaServed: mapServiceAreas(),
    priceRange: "¥¥",
    parentOrganization: {
      "@id": ORGANIZATION_ID,
    },
  };
}

export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: toAbsoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd({ name, path, description, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: toAbsoluteUrl(path),
    image: image ? toAbsoluteUrl(image, { addTrailingSlash: false }) : undefined,
    provider: {
      "@id": LOCAL_BUSINESS_ID,
    },
    areaServed: mapServiceAreas(),
    serviceType: name,
  };
}

export function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function jobPostingJsonLd({ title, path, description, responsibilities, qualifications, salary, employmentType = "FULL_TIME" }) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    datePosted: "2026-05-10",
    validThrough: "2026-12-31",
    employmentType,
    hiringOrganization: {
      "@id": ORGANIZATION_ID,
    },
    jobLocation: {
      "@type": "Place",
      address: ADDRESS,
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "JP",
    },
    url: toAbsoluteUrl(path),
    responsibilities,
    qualifications,
    baseSalary: salary
      ? {
          "@type": "MonetaryAmount",
          currency: "JPY",
          value: salary,
        }
      : undefined,
  };
}

export function itemListJsonLd({ name, path, items }) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: toAbsoluteUrl(path),
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: toAbsoluteUrl(item.path),
    })),
  };
}

export function collectionPageJsonLd({ name, description, path, items }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: toAbsoluteUrl(path),
    isPartOf: {
      "@id": WEBSITE_ID,
    },
    about: items.map((item) => item.name),
    mainEntity: itemListJsonLd({ name, path, items }),
  };
}

export function contactPageJsonLd({ path = "/contact", description }) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "お問い合わせ",
    description,
    url: toAbsoluteUrl(path),
    mainEntity: {
      "@id": LOCAL_BUSINESS_ID,
    },
    about: [
      "西宮の雨漏り補修",
      "西宮の大規模修繕工事",
      "西宮の防水工事",
    ],
    isPartOf: {
      "@id": WEBSITE_ID,
    },
  };
}
