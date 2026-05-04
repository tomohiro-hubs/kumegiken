import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://kumegiken.co.jp";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "株式会社久米技建",
      url: SITE_URL,
      telephone: "+81-798-27-5653",
      logo: `${SITE_URL}/images/hero-main.jpg`,
      image: `${SITE_URL}/images/hero-main.jpg`,
      areaServed: [
        { "@type": "AdministrativeArea", name: "兵庫県" },
        { "@type": "AdministrativeArea", name: "大阪府" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "甲子園町5-7 河津ビル1F",
        addressLocality: "西宮市",
        addressRegion: "兵庫県",
        postalCode: "663-8152",
        addressCountry: "JP",
      },
    },
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: "株式会社久米技建",
      inLanguage: "ja-JP",
      publisher: {
        "@id": ORGANIZATION_ID,
      },
    },
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "防水工事・大規模修繕なら久米技建｜西宮市の防水専門会社【無料建物診断】",
  description:
    "西宮市の防水工事専門会社・久米技建。自社職人21名による直営施工で高品質な防水・外壁改修を実現。正直な建物診断に基づき、本当に必要な工事だけをご提案。兵庫・大阪エリア対応。無料建物診断・見積もり受付中。",
  openGraph: {
    title: "防水工事・大規模修繕なら久米技建｜西宮市の防水専門会社【無料建物診断】",
    description:
      "西宮市の防水工事専門会社・久米技建。自社職人21名による直営施工で高品質な防水・外壁改修を実現。正直な建物診断に基づき、本当に必要な工事だけをご提案。兵庫・大阪エリア対応。無料建物診断・見積もり受付中。",
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社久米技建",
    images: [{ url: "/images/hero-main.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "防水工事・大規模修繕なら久米技建｜西宮市の防水専門会社【無料建物診断】",
    description:
      "西宮市の防水工事専門会社・久米技建。自社職人21名による直営施工で高品質な防水・外壁改修を実現。正直な建物診断に基づき、本当に必要な工事だけをご提案。兵庫・大阪エリア対応。無料建物診断・見積もり受付中。",
    images: ["/images/hero-main.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <JsonLd data={structuredData} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Noto+Sans+JP:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <ScrollRevealProvider>
          {children}
        </ScrollRevealProvider>
        <Footer />
      </body>
    </html>
  );
}
