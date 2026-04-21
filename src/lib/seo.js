const DEFAULT_OG_IMAGE = "/images/hero-main.jpg";

export function buildMetadata({ title, description, path, image = DEFAULT_OG_IMAGE }) {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: "株式会社久米技建",
      locale: "ja_JP",
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

