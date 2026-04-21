import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "施工事例一覧｜久米技建",
  description: "久米技建の施工事例一覧。大規模修繕、防水工事、外壁塗装、雨漏り補修などの実績をご紹介します。",
  path: "/works",
  image: "/images/building-completed.jpg",
});

export default function Layout({ children }) {
  return children;
}
