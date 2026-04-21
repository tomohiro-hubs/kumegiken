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
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'start' }}>
    <div className="reveal">
      <img src={assetPath("/images/team-group.jpg")} alt="久米技建チーム - 関西圏を中心に対応" style={{ minHeight: '400px', width: '100%', objectFit: 'cover', borderRadius: '16px' }} />
    </div>
    <div className="reveal">
      <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '24px' }}>主要対応エリア</h2>
      <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-primary)', margin: '20px 0 12px', paddingBottom: '8px', borderBottom: '2px solid var(--color-accent)' }}>兵庫県</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
        <span className="area__tag area__tag--active">西宮市</span><span className="area__tag">神戸市</span><span className="area__tag">尼崎市</span><span className="area__tag">宝塚市</span><span className="area__tag">伊丹市</span><span className="area__tag">芦屋市</span><span className="area__tag">明石市</span><span className="area__tag">姫路市</span><span className="area__tag">加古川市</span><span className="area__tag">三田市</span><span className="area__tag">川西市</span>
      </div>
      <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-primary)', margin: '20px 0 12px', paddingBottom: '8px', borderBottom: '2px solid var(--color-accent)' }}>大阪府</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
        <span className="area__tag">大阪市</span><span className="area__tag">吹田市</span><span className="area__tag">豊中市</span><span className="area__tag">堺市</span><span className="area__tag">東大阪市</span><span className="area__tag">枚方市</span><span className="area__tag">高槻市</span><span className="area__tag">茨木市</span>
      </div>
      <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-primary)', margin: '20px 0 12px', paddingBottom: '8px', borderBottom: '2px solid var(--color-accent)' }}>その他</h3>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.9' }}>京都府、奈良県、滋賀県、和歌山県など、関西圏であれば対応可能です。上記以外の地域でもお気軽にご相談ください。</p>
    </div>
  </div>
</div></section>
<section className="cta-section"><div className="container"><h2 className="cta-section__title">対応エリアのご確認</h2><p className="cta-section__text">上記以外の地域でもお気軽にお問い合わせください。</p><div className="cta-section__buttons"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> お問い合わせ</a></div></div></section>
  
    </main>
  );
}