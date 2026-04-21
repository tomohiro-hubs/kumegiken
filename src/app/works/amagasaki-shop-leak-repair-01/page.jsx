import Link from "next/link";
import { routePath } from "@/lib/routePath";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "施工事例｜尼崎市 店舗 雨漏り補修工事｜久米技建",
  description: "兵庫県尼崎市の店舗で実施した雨漏り調査・屋上防水補修の施工事例。工期や費用目安、施工ポイントを紹介します。",
  path: "/works/amagasaki-shop-leak-repair-01",
  image: "/images/leak-repair.jpg",
});

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Works</span><h1 className="page-hero__title">尼崎市 店舗 雨漏り補修工事</h1></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/works")} className="breadcrumb__link">施工事例</a></li><li className="breadcrumb__separator">›</li><li>尼崎市 店舗 雨漏り補修</li></ol></div></nav>
<section className="content-section"><div className="container container--narrow">
  <table className="info-table" style={{ marginBottom: '40px' }}><tbody><tr><th>エリア</th><td>兵庫県尼崎市</td></tr><tr><th>建物種別</th><td>店舗（鉄骨造・2階建て）</td></tr><tr><th>工事内容</th><td>雨漏り原因調査・屋上防水補修</td></tr><tr><th>工期</th><td>約1週間</td></tr><tr><th>費用目安</th><td>50〜100万円</td></tr></tbody></table>
  <div className="article-content reveal">
    <h2>施工内容</h2><p>営業中の店舗で天井からの雨漏りが発生。散水調査により屋上防水層の劣化箇所を特定し、部分的な防水補修を実施しました。営業に影響のない時間帯での施工を心がけ、迅速に対応しました。</p>
    <h2>施工のポイント</h2><ul><li>散水調査による漏水ルートの特定</li><li>部分補修でコストを最小限に</li><li>営業時間外の施工で店舗運営に配慮</li><li>ドレン周りの防水層を重点的に補修</li></ul>
  </div>
  <div style={{ textAlign: 'center', marginTop: '48px' }}><a href={routePath("/works")} className="btn btn--outline-dark">← 施工事例一覧に戻る</a></div>
</div></section>
<section className="cta-section"><div className="container"><h2 className="cta-section__title">雨漏りでお困りですか？</h2><div className="cta-section__phone"><a href="tel:0798-78-6880" className="cta-section__phone-number" style={{ color: 'white', textDecoration: 'none' }}><i className="fas fa-phone-alt"></i> 0798-78-6880</a></div><div className="cta-section__buttons"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 緊急のお問い合わせ</a></div></div></section>
  
    </main>
  );
}