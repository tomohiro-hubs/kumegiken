import { toAbsoluteUrl } from "@/lib/siteUrl";

const COMPANY_NAME = "株式会社久米技建";
const PHONE = "+81-798-27-5653";
const ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "甲子園町5-7 河津ビル1F",
  addressLocality: "西宮市",
  addressRegion: "兵庫県",
  postalCode: "663-8152",
  addressCountry: "JP",
};

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
      "@type": "LocalBusiness",
      name: COMPANY_NAME,
      url: toAbsoluteUrl("/"),
      telephone: PHONE,
      address: ADDRESS,
    },
    areaServed: ["兵庫県", "大阪府", "西宮市", "神戸市", "尼崎市", "大阪市"],
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
      "@type": "Organization",
      name: COMPANY_NAME,
      sameAs: toAbsoluteUrl("/"),
      logo: toAbsoluteUrl("/images/hero-main.jpg", { addTrailingSlash: false }),
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
