import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, contactPageJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "西宮の雨漏り・大規模修繕工事のお問い合わせ｜久米技建",
  description: "西宮市の雨漏り補修、大規模修繕工事、防水工事、外壁塗装のご相談は久米技建へ。無料建物診断やお見積もり依頼を受け付けています。",
  path: "/contact",
  image: "/images/hero-main.jpg",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "ホーム", path: "/" },
          { name: "お問い合わせ", path: "/contact" },
        ])}
      />
      <JsonLd
        data={contactPageJsonLd({
          path: "/contact",
          description:
            "西宮市の雨漏り補修、大規模修繕工事、防水工事、外壁塗装に関するお問い合わせページです。",
        })}
      />
      {children}
    </>
  );
}
