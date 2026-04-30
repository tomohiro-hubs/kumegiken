import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "対応エリア（兵庫・大阪・関西）｜久米技建",
  description: "西宮市を拠点に兵庫・大阪を中心とした関西圏で防水工事・大規模修繕に対応。対応可否や近隣エリアのご相談も受け付けています。",
  path: "/company/area",
  image: "/images/team-group.jpg",
});

const areaTags = [
  { label: "西宮市", active: true },
  { label: "大阪市" },
  { label: "神戸市" },
  { label: "尼崎市" },
  { label: "宝塚市" },
  { label: "伊丹市" },
  { label: "芦屋市" },
  { label: "吹田市" },
  { label: "豊中市" },
  { label: "明石市" },
  { label: "姫路市" },
  { label: "その他関西圏" },
];

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Area</span><h1 className="page-hero__title">対応エリア</h1><p className="page-hero__description">西宮市を拠点に、関西圏全域で対応いたします</p></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/company")} className="breadcrumb__link">会社情報</a></li><li className="breadcrumb__separator">›</li><li>対応エリア</li></ol></div></nav>
<section style={{ background: 'var(--color-bg-light)', padding: '20px 0' }}>
  <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
    <a href={routePath("/company")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>会社概要</a>
    <a href={routePath("/company/message")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>代表メッセージ</a>
    <a href={routePath("/company/staff")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>スタッフ紹介</a>
    <a href={routePath("/company/area")} className="btn btn--sm" style={{ background: 'var(--color-primary)', color: 'white', borderRadius: '50px' }}>対応エリア</a>
    <a href={routePath("/company/history")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>沿革</a>
  </div>
</section>
<section className="content-section"><div className="container">
  <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '12px' }}>兵庫県・大阪府を中心に対応</h2>
  <p style={{ textAlign: 'center', fontSize: '16px', color: 'var(--color-text-light)', lineHeight: '2', margin: '0 auto 40px' }}>
    西宮市を拠点に、関西圏全域で施工対応が可能です。まずはお気軽にご相談ください。
  </p>

  <div className="area__mapCard reveal">
    <img src={assetPath("/images/area-map-kansai.jpg")} alt="関西エリアマップ" className="area__mapImage" />
  </div>

  <div className="area__label reveal">
    <span className="area__labelLine"></span>
    <span className="area__labelText">対応エリア</span>
    <span className="area__labelLine"></span>
  </div>

  <div className="area__list reveal" style={{ marginBottom: '44px' }}>
    {areaTags.map((tag) => (
      <span className={`area__tag${tag.active ? " area__tag--active" : ""}`} key={tag.label}>
        {tag.label}
      </span>
    ))}
  </div>

</div></section>
<section className="cta-section"><div className="container"><h2 className="cta-section__title">対応エリアのご確認</h2><p className="cta-section__text">上記以外の地域でもお気軽にお問い合わせください。</p><div className="cta-section__buttons"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> お問い合わせ</a></div></div></section>
  
    </main>
  );
}
