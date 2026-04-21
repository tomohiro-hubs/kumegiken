import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "お問い合わせ（無料診断・見積もり）｜久米技建",
  description: "大規模修繕・防水工事・外壁塗装のご相談は久米技建へ。無料建物診断やお見積もり依頼を受け付けています。",
  path: "/contact",
  image: "/images/hero-main.jpg",
});

export default function Layout({ children }) {
  return children;
}
