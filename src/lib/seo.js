const DEFAULT_SITE_NAME = "株式会社久米技建";
const DEFAULT_OG_IMAGE = "/images/hero-main.jpg";
import { toAbsoluteUrl } from "@/lib/siteUrl";

function resolveTitle({ title, titleTemplate, titleDefault }) {
  if (!titleTemplate) return title;
  if (title && typeof title === "object") return title;

  const fallbackDefault = titleDefault || (typeof title === "string" ? title : DEFAULT_SITE_NAME);
  if (typeof title === "string" && title.length > 0) {
    return {
      absolute: title,
      default: fallbackDefault,
      template: titleTemplate,
    };
  }

  return {
    default: fallbackDefault,
    template: titleTemplate,
  };
}

export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  titleTemplate,
  titleDefault,
}) {
  const canonicalUrl = toAbsoluteUrl(path, { addTrailingSlash: true });
  const imageUrl = toAbsoluteUrl(image, { addTrailingSlash: false });
  const socialTitle = typeof title === "string" ? title : title?.absolute || title?.default;

  return {
    title: resolveTitle({ title, titleTemplate, titleDefault }),
    description,
    ...(canonicalUrl ? { alternates: { canonical: canonicalUrl } } : {}),
    openGraph: {
      title: socialTitle,
      description,
      ...(canonicalUrl ? { url: canonicalUrl } : {}),
      siteName: DEFAULT_SITE_NAME,
      locale: "ja_JP",
      type: "website",
      images: imageUrl ? [{ url: imageUrl }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
    ...(noindex
      ? {
          robots: {
            index: false,
            follow: false,
            googleBot: {
              index: false,
              follow: false,
              noimageindex: true,
            },
          },
        }
      : {}),
  };
}
