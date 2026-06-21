import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, localBusinessJsonLd } from "@/lib/schema";

import { buildMetadata } from "@/lib/seo";

const breadcrumbSchema = breadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: "会社概要", path: "/company" },
]);

const companyFaqItems = [
  {
    question: "対応エリアはどこですか？",
    answer: "兵庫県・大阪府を中心とした関西圏、および東京都内、埼玉、神奈川で対応しています。エリア外についても案件内容に応じてご相談可能です。",
  },
  {
    question: "営業時間と連絡先を教えてください。",
    answer: "営業時間は平日9:00〜18:00です。お電話は 0798-27-5653 で受け付けています。",
  },
  {
    question: "建設業許可番号はありますか？",
    answer: "兵庫県知事 許可（般-3）第220086号を取得しています。",
  },
];

export const metadata = buildMetadata({
  title: "会社概要｜西宮の雨漏り・大規模修繕工事会社 久米技建",
  description: "西宮市の雨漏り補修、防水工事、大規模修繕工事を手がける株式会社久米技建の会社概要。所在地、事業内容、連絡先などの企業情報を掲載しています。",
  path: "/company",
  image: "/images/hero-main.jpg",
});

export default function Page() {
  return (
    <main>
      <JsonLd
        data={localBusinessJsonLd({
          path: "/company",
          description:
            "西宮市を拠点に雨漏り補修、防水工事、大規模修繕工事を手がける株式会社久米技建の会社概要ページです。",
          image: "/images/company-hq.jpg",
        })}
      />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqJsonLd(companyFaqItems)} />
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>会社概要</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Company</span><h1 className="page-hero__title">会社概要｜株式会社久米技建</h1></section>
  

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
      <p className="reveal" style={{ marginBottom: '32px', lineHeight: '1.9', color: 'var(--color-text-light)' }}>
        株式会社久米技建は、西宮市を拠点に雨漏り調査・補修、防水工事、大規模修繕工事を手がける施工会社です。
        建物の状態を整理しやすい診断と、運用しやすい工事提案を重視しています。
      </p>
      <h2 className="reveal" style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '24px' }}>会社概要</h2>
      <table className="info-table reveal"><tbody>
        <tr><th>会社名</th><td>株式会社久米技建（KUME GIKEN Co., Ltd.）</td></tr>
        <tr><th>設立</th><td>創業2016年　設立2021年</td></tr>
        <tr><th>代表取締役</th><td>久米 涼平</td></tr>
        <tr><th>所在地</th><td>
          【本社】<br />〒663-8152 兵庫県西宮市甲子園町5-7 河津ビル1F<br /><br />
          【東京営業所】<br />〒178-0063 東京都練馬区東大泉1-19-1-1F
        </td></tr>
        <tr><th>電話番号</th><td>0798-27-5653</td></tr>
        <tr><th>営業時間</th><td>平日 9:00〜18:00</td></tr>
        <tr><th>事業内容</th><td>大規模修繕事業<br />防水事業（ウレタン・シート・FRP・アスファルト）<br />外壁塗装<br />水中点検</td></tr>
        <tr><th>資本金</th><td>500万円</td></tr>
        <tr><th>施工体制</th><td>自社職人・施工管理・協力パートナー（BP）を含め、約40名体制</td></tr>
        <tr><th>建設業許可</th><td>兵庫県知事 許可（般-3）第220086号</td></tr>
        <tr><th>対応エリア</th><td>兵庫県・大阪府を中心とした関西圏全域、および東京都内、埼玉、神奈川</td></tr>
        <tr><th>主な取引先</th><td>マンション管理組合、不動産管理会社、ビルオーナー、<br />一般法人、個人住宅オーナー</td></tr>
      </tbody></table>

      <div style={{ marginTop: "36px" }} className="reveal">
        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "var(--color-primary)", marginBottom: "14px" }}>本社外観</h3>
        <figure style={{ margin: 0 }}>
          <img
            src={assetPath("/images/company-hq.jpg")}
            alt="株式会社久米技建 本社外観"
            style={{
              width: "100%",
              borderRadius: "16px",
              boxShadow: "var(--shadow-md)",
              objectFit: "cover",
            }}
          />
          <figcaption style={{ marginTop: "10px", fontSize: "13px", color: "var(--color-text-light)" }}>
            〒663-8152 兵庫県西宮市甲子園町5-7 河津ビル1F（本社）
          </figcaption>
        </figure>
      </div>

      <div style={{ marginTop: '60px' }} className="reveal">
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '24px' }}>経営理念</h2>
        <img src={assetPath("/images/philosophy-handwritten.png")} alt="誠実な診断、確かな施工。住まいの価値を、未来へ守る。" style={{ width: '70%', height: 'auto', display: 'block', margin: '0 auto' }} />
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
              <iframe src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E7%B7%B4%E9%A6%AC%E5%8C%BA%E6%9D%B1%E5%A4%A7%E6%B3%891-19-1-1F&hl=ja&z=17&output=embed" width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '60px' }} className="reveal">
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '24px' }}>よくある質問</h2>
        <div className="company-faq">
          {companyFaqItems.map((item) => (
            <details className="company-faq__item" key={item.question}>
              <summary className="company-faq__question">{item.question}</summary>
              <p className="company-faq__answer">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <div style={{ marginTop: '60px' }} className="reveal">
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '20px' }}>主なご相談内容</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <a href={routePath("/service/leak-repair")} className="btn btn--outline-dark">西宮の雨漏り調査・補修</a>
          <a href={routePath("/service/large-scale-repair")} className="btn btn--outline-dark">西宮の大規模修繕工事</a>
          <a href={routePath("/service/waterproofing")} className="btn btn--outline-dark">西宮の防水工事</a>
          <a href={routePath("/contact")} className="btn btn--outline-dark">お問い合わせ・無料相談</a>
        </div>
      </div>
    </div>
  </section>

  <section className="cta-section"><div className="container"><span className="page-hero__label">Contact</span><h2 className="cta-section__title">お問い合わせ</h2><div className="cta-section__buttons"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> お問い合わせはこちら</a></div></div></section>

  
    </main>
  );
}
