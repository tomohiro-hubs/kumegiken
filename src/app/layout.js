import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { assetPath } from "@/lib/assetPath";
import { Inter, Noto_Sans_JP } from "next/font/google";

const SITE_URL = "https://kumegiken.co.jp";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"], display: "swap", variable: "--font-en-next" });
const notoSansJp = Noto_Sans_JP({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "900"], display: "swap", variable: "--font-ja-next" });

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "株式会社久米技建",
      url: SITE_URL,
      telephone: "+81-798-27-5653",
      sameAs: [],
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
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+81-798-27-5653",
          contactType: "customer service",
          availableLanguage: ["ja"],
          areaServed: "JP",
        },
      ],
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
    <html lang="ja" suppressHydrationWarning className={`${inter.variable} ${notoSansJp.variable}`}>
      <head>
        <JsonLd data={structuredData} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
      </head>
      <body
        suppressHydrationWarning
        style={{
          "--company-cta-bg-image": `url("${assetPath("/images/company-cta-bg-2.png")}")`,
          "--cta-v2-bg-image": `url("${assetPath("/images/footer-cta-bg.png")}")`,
          "--cta-achievement-bg-image": `url("${assetPath("/images/footer-achievement-bg.png")}")`,
          "--service-hero-bg-image": `url("${assetPath("/images/service-hero-bg.png")}")`,
        }}
      >
        <Analytics />
        <Header />
        <ScrollRevealProvider>
          {children}
        </ScrollRevealProvider>
        <Footer />
      </body>
    </html>
  );
}
