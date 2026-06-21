import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "採用応募フォーム｜久米技建",
  description: "久米技建の採用応募フォームです。営業職・施工管理・防水職人への応募を受け付けています。",
  path: "/recruit/contact",
  noindex: true,
});

export default function Layout({ children }) {
  return children;
}
