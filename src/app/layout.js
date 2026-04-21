import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export const metadata = {
  metadataBase: new URL("https://kumegiken.co.jp"),
  title: "大規模修繕・防水工事なら久米技建｜兵庫・大阪の専門会社",
  description:
    "西宮市の防水・大規模修繕専門会社。自社職人21名による直営施工、正直な建物診断でマンション・ビルオーナー様の資産価値を守ります。無料診断実施中。",
  openGraph: {
    title: "大規模修繕・防水工事なら久米技建｜兵庫・大阪の専門会社",
    description:
      "西宮市の防水・大規模修繕専門会社。自社職人21名による直営施工、正直な建物診断でマンション・ビルオーナー様の資産価値を守ります。無料診断実施中。",
    type: "website",
    locale: "ja_JP",
    siteName: "株式会社久米技建",
    images: [{ url: "/images/hero-main.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "大規模修繕・防水工事なら久米技建｜兵庫・大阪の専門会社",
    description:
      "西宮市の防水・大規模修繕専門会社。自社職人21名による直営施工、正直な建物診断でマンション・ビルオーナー様の資産価値を守ります。無料診断実施中。",
    images: ["/images/hero-main.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Noto+Sans+JP:wght@300;400;500;600;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" />
      </head>
      <body>
        <Header />
        <ScrollRevealProvider>
          {children}
        </ScrollRevealProvider>
        <Footer />
      </body>
    </html>
  );
}
