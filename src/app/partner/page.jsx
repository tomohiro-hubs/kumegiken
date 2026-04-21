import Link from "next/link";
import { routePath } from "@/lib/routePath";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "協力会社募集・お問い合わせ｜久米技建",
  description: "防水・塗装・足場・シーリングなどの協力会社を募集しています。久米技建との協業をご検討の企業様はこちらからお問い合わせください。",
  path: "/partner",
  image: "/images/hero-main.jpg",
});

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Partner</span><h1 className="page-hero__title">協力会社お問い合わせ</h1><p className="page-hero__description">共に建物を守るビジネスパートナーを募集しています</p></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>協力会社お問い合わせ</li></ol></div></nav>
<section className="content-section"><div className="container container--narrow">
  <div className="article-content reveal">
    <p>株式会社久米技建では、事業拡大に伴い、協力会社・ビジネスパートナーを募集しております。以下の分野で協力していただける企業様からのお問い合わせをお待ちしています。</p>
    <h2>募集している協力会社</h2>
    <ul>
      <li>防水工事業者</li>
      <li>塗装工事業者</li>
      <li>足場架設業者</li>
      <li>シーリング工事業者</li>
      <li>建物診断・調査会社</li>
      <li>その他建築関連業者</li>
    </ul>
    <h2>久米技建とパートナーシップを組むメリット</h2>
    <ul>
      <li>年間500件以上の安定した案件量</li>
      <li>関西圏を中心とした豊富な施工エリア</li>
      <li>公正な取引条件と迅速な支払い</li>
      <li>長期的なパートナーシップを重視</li>
    </ul>
    <h2>お問い合わせ</h2>
    <p>協力会社としてのお問い合わせは、以下の電話番号またはメールフォームからお願いいたします。</p>
    <div style={{ background: 'var(--color-primary)', color: 'white', padding: '30px', borderRadius: '12px', textAlign: 'center', margin: '30px 0' }}>
      <p style={{ marginBottom: '12px' }}>お電話でのお問い合わせ</p>
      <a href="tel:0798-78-6880" style={{ fontFamily: 'var(--font-en)', fontSize: '28px', fontWeight: '900', color: 'white', textDecoration: 'none' }}><i className="fas fa-phone-alt"></i> 0798-78-6880</a>
      <p style={{ fontSize: '12px', marginTop: '8px', opacity: '0.6' }}>受付時間：平日 9:00〜18:00（担当：総務部）</p>
    </div>
    <div style={{ textAlign: 'center' }}><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> メールでお問い合わせ</a></div>
  </div>
</div></section>
  
    </main>
  );
}