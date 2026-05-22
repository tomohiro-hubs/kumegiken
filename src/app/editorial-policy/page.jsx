import { buildMetadata } from "@/lib/seo";
import { routePath } from "@/lib/routePath";

export const metadata = buildMetadata({
  title: "編集・監修ポリシー｜久米技建",
  description: "久米技建の編集・監修ポリシー。情報の作成体制、更新基準、訂正方針を掲載しています。",
  path: "/editorial-policy",
});

export default function Page() {
  return (
    <main>
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>編集・監修ポリシー</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Policy</span><h1 className="page-hero__title">編集・監修ポリシー</h1></section>
      
      <section className="content-section"><div className="container container--narrow article-content">
        <h2>1. 情報作成の体制</h2>
        <p>当サイトの施工・建物保全に関する情報は、現場経験のある担当者と技術監修チームが内容確認を行い、公開しています。</p>

        <h2>2. 掲載内容の基準</h2>
        <p>実際の施工事例、現地調査結果、社内の品質基準に基づき、誇張や断定を避けて記載します。条件により結果が変動する情報は、その旨を明記します。</p>

        <h2>3. 更新方針</h2>
        <p>法令・仕様・相場・提供サービスの変更に応じて内容を見直します。重要な改訂時は、該当ページの更新日を反映します。</p>

        <h2>4. 訂正方針</h2>
        <p>誤りが判明した場合は、速やかに修正します。修正により読者判断へ影響する場合は、該当箇所を明確に更新します。</p>

        <h2>5. お問い合わせ</h2>
        <p>掲載内容に関するご意見は、<a href={routePath("/contact")} className="text-accent">お問い合わせページ</a>よりご連絡ください。</p>
      </div></section>
    </main>
  );
}
