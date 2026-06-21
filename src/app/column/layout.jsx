import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "西宮の雨漏り・防水・大規模修繕コラム｜久米技建",
  description: "西宮の雨漏り、防水工事、大規模修繕工事、外壁塗装に関するコラム一覧。建物管理に役立つ知識や費用相場を解説します。",
  path: "/column",
  image: "/images/waterproofing-rooftop.jpg",
});

export default function Layout({ children }) {
  return children;
}
