import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import JsonLd from "@/components/JsonLd";
import Analytics from "@/components/Analytics";
import { assetPath } from "@/lib/assetPath";
import { localBusinessJsonLd, organizationJsonLd, websiteJsonLd } from "@/lib/schema";
import { isGithubPagesBuild, toAbsoluteUrl } from "@/lib/siteUrl";
import { Inter, Noto_Sans_JP } from "next/font/google";

const SITE_URL = "https://kumegiken.co.jp";
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "900"], display: "swap", variable: "--font-en-next" });
const notoSansJp = Noto_Sans_JP({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "900"], display: "swap", variable: "--font-ja-next" });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "西宮の雨漏り・防水工事・大規模修繕工事なら久米技建",
  description:
    "西宮市を拠点に雨漏り補修、防水工事、大規模修繕工事、外壁塗装に対応。自社職人による直営施工と正直な建物診断で、兵庫・大阪の建物修繕を一貫対応します。",
  icons: {
    icon: "/images/ロゴ.png",
    shortcut: "/images/ロゴ.png",
    apple: "/images/ロゴ.png",
  },
  openGraph: {
    title: "西宮の雨漏り・防水工事・大規模修繕工事なら久米技建",
    description:
      "西宮市を拠点に雨漏り補修、防水工事、大規模修繕工事、外壁塗装に対応。自社職人による直営施工と正直な建物診断で、兵庫・大阪の建物修繕を一貫対応します。",
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社久米技建",
    images: [{ url: "/images/ロゴ.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "西宮の雨漏り・防水工事・大規模修繕工事なら久米技建",
    description:
      "西宮市を拠点に雨漏り補修、防水工事、大規模修繕工事、外壁塗装に対応。自社職人による直営施工と正直な建物診断で、兵庫・大阪の建物修繕を一貫対応します。",
    images: ["/images/ロゴ.png"],
  },
  ...(isGithubPagesBuild()
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

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning className={`${inter.variable} ${notoSansJp.variable}`}>
      <head>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <JsonLd data={localBusinessJsonLd()} />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
      </head>
      <body
        suppressHydrationWarning
        style={{
          "--company-cta-bg-image": `url("${assetPath("/images/company-cta-bg-2.png")}")`,
          "--cta-v2-bg-image": `url("${assetPath("/images/footer-cta-bg.png")}")`,
          "--cta-achievement-bg-image": `url("${assetPath("/images/footer-achievement-bg.png")}")`,
          "--service-hero-bg-image": `url("${assetPath("/images/service-hero-bg.png")}")`,
          "--top-fixed-bg-image": `url("${assetPath("/images/top-bg-fixed-cityscape.jpg")}")`,
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
