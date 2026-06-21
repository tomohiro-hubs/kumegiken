import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "西宮の雨漏り・大規模修繕工事・防水工事の施工事例｜久米技建",
  description: "西宮市を拠点とした雨漏り補修、大規模修繕工事、防水工事、外壁塗装、シーリングの施工事例一覧。関西・関東エリア別の実績を掲載しています。",
  path: "/works",
  image: "/images/building-completed.jpg",
});

export default function Layout({ children }) {
  return children;
}
