import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";

export const metadata = {
  title: "株式会社久米技建 | KUME GIKEN Co., Ltd.",
  description: "大規模修繕事業・防水事業・外壁塗装・水中点検を自社体制で提供する専門会社",
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
