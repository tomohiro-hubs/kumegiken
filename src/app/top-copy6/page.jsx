import { buildMetadata } from "@/lib/seo";
import { TopCopyPageContent } from "../page";

export const metadata = buildMetadata({
  title: "防水工事・大規模修繕なら久米技建｜西宮市の防水専門会社【無料建物診断】",
  description:
    "西宮市の防水工事専門会社・久米技建。自社職人21名による直営施工で高品質な防水・外壁改修を実現。正直な建物診断に基づき、本当に必要な工事だけをご提案。兵庫・大阪エリア対応。無料建物診断・見積もり受付中。",
  path: "/top-copy6",
  noindex: true,
});

export default function TopCopy6Page() {
  return <TopCopyPageContent rootClassName="top-copy-page top-copy-page--copy3 top-copy-page--copy6" />;
}
