import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "施工事例一覧（関西・関東）｜久米技建",
  description: "久米技建の施工事例一覧。関西・関東エリア別に、大規模修繕、防水工事、外壁塗装、シーリング、雨漏り補修の実績を掲載しています。",
  path: "/works",
  image: "/images/building-completed.jpg",
});

export default function Layout({ children }) {
  return children;
}
