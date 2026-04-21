import Link from "next/link";
import { routePath } from "@/lib/routePath";

import { buildMetadata } from "@/lib/seo";
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "株式会社久米技建",
  address: {
    "@type": "PostalAddress",
    streetAddress: "甲子園町5番7号 河津ビル1F",
    addressLocality: "西宮市",
    addressRegion: "兵庫県",
    postalCode: "663-8152",
    addressCountry: "JP",
  },
  telephone: "0798-78-6880",
  url: "https://kumegiken.co.jp",
};

export const metadata = buildMetadata({
  title: "会社概要｜株式会社久米技建（西宮市）",
  description: "株式会社久米技建の会社概要ページ。所在地・事業内容・連絡先など、企業情報を掲載しています。",
  path: "/company",
  image: "/images/hero-main.jpg",
});

export default function Page() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <section className="page-hero"><span className="page-hero__label">Company</span><h1 className="page-hero__title">会社概要｜株式会社久米技建</h1></section>
  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>会社概要</li></ol></div></nav>

  {/* Sub Navigation */}
  <section style={{ background: 'var(--color-bg-light)', padding: '20px 0' }}>
    <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
      <a href={routePath("/company")} className="btn btn--sm" style={{ background: 'var(--color-primary)', color: 'white', borderRadius: '50px' }}>会社概要</a>
      <a href={routePath("/company/message")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>代表メッセージ</a>
      <a href={routePath("/company/staff")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>スタッフ紹介</a>
      <a href={routePath("/company/area")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>対応エリア</a>
      <a href={routePath("/company/history")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>沿革</a>
    </div>
  </section>

  <section className="content-section">
    <div className="container container--narrow">
      <table className="info-table reveal"><tbody>
        <tr><th>会社名</th><td>株式会社久米技建（KUME GIKEN Co., Ltd.）</td></tr>
        <tr><th>設立</th><td>2016年</td></tr>
        <tr><th>代表取締役</th><td>久米 涼平</td></tr>
        <tr><th>所在地</th><td>
          【本社】<br />〒663-8152 兵庫県西宮市甲子園町5番7号 河津ビル1F<br /><br />
          【東京営業所】<br />〒178-0063 東京都練馬区東大泉1-19-1-1F
        </td></tr>
        <tr><th>電話番号</th><td>0798-78-6880</td></tr>
        <tr><th>事業内容</th><td>大規模修繕事業<br />防水事業（ウレタン・シート・FRP・アスファルト）<br />外壁塗装<br />水中点検</td></tr>
        <tr><th>従業員数</th><td>約25名（自社職人21名・施工管理4名）</td></tr>
        <tr><th>建設業許可</th><td>兵庫県知事 許可（般-3）第220086号</td></tr>
        <tr><th>対応エリア</th><td>兵庫県・大阪府を中心とした関西圏全域</td></tr>
        <tr><th>主な取引先</th><td>マンション管理組合、不動産管理会社、ビルオーナー、<br />一般法人、個人住宅オーナー</td></tr>
      </tbody></table>

      <div style={{ marginTop: '60px' }} className="reveal">
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '24px' }}>経営理念</h2>
        <div style={{ background: 'var(--color-primary)', color: 'white', padding: '40px', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '20px', fontWeight: '700', lineHeight: '2' }}>「正直な診断と確かな施工で、<br />建物と人の暮らしを守り続ける」</p>
        </div>
      </div>

      <div style={{ marginTop: '60px' }} className="reveal">
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '24px' }}>アクセス</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          <div style={{ background: 'var(--color-bg-light)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '12px' }}>本社</h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-light)', marginBottom: '16px', lineHeight: '1.6' }}>〒663-8152<br />兵庫県西宮市甲子園町5番7号 河津ビル1F</p>
            <div style={{ borderRadius: '8px', overflow: 'hidden', background: '#ddd', width: '100%', height: '300px' }}>
              <iframe src="https://maps.google.com/maps?q=%E5%85%B5%E5%BA%AB%E7%9C%8C%E8%A5%BF%E5%AE%AE%E5%B8%82%E7%94%B2%E5%AD%90%E5%9C%92%E7%94%BA5%E7%95%AA7%E5%8F%B7&hl=ja&z=16&output=embed" width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
          <div style={{ background: 'var(--color-bg-light)', borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '12px' }}>東京営業所</h3>
            <p style={{ fontSize: '14px', color: 'var(--color-text-light)', marginBottom: '16px', lineHeight: '1.6' }}>〒178-0063<br />東京都練馬区東大泉1-19-1-1F</p>
            <div style={{ borderRadius: '8px', overflow: 'hidden', background: '#ddd', width: '100%', height: '300px' }}>
              <iframe src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%B7%B4%E9%A6%AC%E5%8C%BA%E6%9D%B1%E5%A4%A7%E6%B3%891%E4%B8%81%E7%9B%AE19-1&hl=ja&z=16&output=embed" width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="cta-section"><div className="container"><h2 className="cta-section__title">お問い合わせ</h2><div className="cta-section__buttons"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> お問い合わせはこちら</a></div></div></section>

  
    </main>
  );
}
