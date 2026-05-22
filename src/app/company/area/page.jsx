import Link from "next/link";
import { routePath } from "@/lib/routePath";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "対応エリア（関西・東京）｜久米技建",
  description: "西宮市を拠点に兵庫・大阪を中心とした関西圏、および東京都・埼玉・神奈川周辺で、防水工事・大規模修繕に対応。対応可否や近隣エリアのご相談も受け付けています。",
  path: "/company/area",
  image: "/images/team-group.jpg",
});

export default function Page() {
  return (
    <main>
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/company")} className="breadcrumb__link">会社情報</a></li><li className="breadcrumb__separator">›</li><li>対応エリア</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Area</span><h1 className="page-hero__title">対応エリア</h1><p className="page-hero__description">関西圏、東京都・埼玉・神奈川周辺に対応しています</p></section>

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
  <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '12px' }}>対応エリア</h2>
  <p style={{ textAlign: 'center', fontSize: '16px', color: 'var(--color-text-light)', lineHeight: '2', margin: '0 auto 40px' }}>
    関西では豊富な施工実績、関東では新拠点としての機動力を活かし、着実に対応エリアを広げています。
  </p>

  <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginBottom: '44px' }}>
    <div style={{ background: 'linear-gradient(160deg, #f4fbff 0%, #ffffff 70%)', border: '1px solid #d5e8f4', borderRadius: '16px', padding: '28px' }}>
      <div style={{ display: 'inline-block', fontSize: '12px', fontWeight: '700', color: '#0f4c81', background: '#dff0fb', borderRadius: '999px', padding: '6px 12px', marginBottom: '14px' }}>Kansai Area</div>
      <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '14px' }}>関西エリア</h3>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.9', marginBottom: '18px' }}>
        兵庫県（西宮市・神戸市・芦屋市・尼崎市・宝塚市 ほか）<br />
        大阪府（大阪市・吹田市・豊中市 ほか）
      </p>
    </div>

    <div style={{ background: 'linear-gradient(160deg, #fff8f2 0%, #ffffff 70%)', border: '1px solid #f2ddcb', borderRadius: '16px', padding: '28px' }}>
      <div style={{ display: 'inline-block', fontSize: '12px', fontWeight: '700', color: '#8a4a16', background: '#fce9d8', borderRadius: '999px', padding: '6px 12px', marginBottom: '14px' }}>Kanto Area</div>
      <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '14px' }}>関東エリア</h3>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.9', marginBottom: '12px' }}>
        関西圏、東京都・埼玉・神奈川周辺に対応しています。
      </p>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.9', marginBottom: '20px' }}>
        2025年に東京支店を開設。関西で培った技術を東京で提供し、信頼される施工体制を着実に広げています。
      </p>
    </div>
  </div>

  <div id="kansai-detail" className="reveal" style={{ background: 'var(--color-bg-light)', borderRadius: '16px', padding: '28px', marginBottom: '20px' }}>
    <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '12px' }}>関西エリア詳細</h3>
    <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.9', marginBottom: '14px' }}>
      兵庫県・大阪府を中心に、管理組合様案件から法人案件まで幅広く対応しています。
    </p>
    <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.9' }}>
      兵庫県: 西宮市・神戸市・芦屋市・尼崎市・宝塚市・伊丹市 ほか<br />
      大阪府: 大阪市・吹田市・豊中市・堺市・東大阪市 ほか
    </p>
  </div>

  <div id="kanto-detail" className="reveal" style={{ background: 'var(--color-bg-light)', borderRadius: '16px', padding: '28px', marginBottom: '44px' }}>
    <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '12px' }}>関東エリア詳細</h3>
    <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.9', marginBottom: '14px' }}>
      2025年の東京支店開設以降、東京都内・埼玉・神奈川周辺でのご相談に対応しています。
    </p>
    <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.9' }}>
      東京都: 港区・渋谷区・新宿区・練馬区 ほか<br />
      埼玉県: さいたま市・川口市・戸田市 ほか<br />
      神奈川県: 横浜市・川崎市・相模原市 ほか
    </p>
  </div>
</div></section>
<section className="cta-section"><div className="container"><h2 className="cta-section__title">対応エリアのご確認</h2><p className="cta-section__text">上記以外の地域でもお気軽にお問い合わせください。</p><div className="cta-section__buttons"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> お問い合わせ</a></div></div></section>
  
    </main>
  );
}
