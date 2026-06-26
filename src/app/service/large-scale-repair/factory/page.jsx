import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/schema";
import { FaqSection } from "@/components/ServiceSeo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "工場・倉庫の防水工事｜操業停止と漏水被害を防ぐ屋根・屋上改修｜久米技建",
  description: "工場・倉庫の雨漏りは、設備故障、製品汚損、在庫被害、生産停止につながるリスクがあります。当社では、稼働状況や搬入出動線、設備配置を確認したうえで、操業への影響を抑えた防水工事を計画します。",
  path: "/service/large-scale-repair/factory",
  image: "/images/industrial.jpeg",
});

const faqs = [
  {
    question: "工場を稼働しながら防水工事はできますか？",
    answer: "可能なケースが多いです。生産ライン、搬入出、設備配置、作業可能時間を確認し、エリア分割や休日施工を含めて計画します。",
  },
  {
    question: "雨漏り箇所が特定できていません。調査できますか？",
    answer: "可能です。屋上、屋根、外壁、笠木、ドレン、設備基礎まわりなど、漏水原因になりやすい箇所を確認します。",
  },
  {
    question: "精密機器や製品への影響が心配です。",
    answer: "下地処理時の粉じん、材料の臭気、雨水侵入、工具落下などのリスクを事前に確認し、必要に応じて養生・工程調整を行います。",
  },
];

const breadcrumbSchema = breadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: "サービス", path: "/service/" },
  { name: "大規模修繕工事", path: "/service/large-scale-repair/" },
  { name: "工場・倉庫の防水工事", path: "/service/large-scale-repair/factory/" },
]);

const serviceSchema = serviceJsonLd({
  name: "工場・倉庫の防水工事",
  path: "/service/large-scale-repair/factory/",
  description: "工場・倉庫の雨漏りは、設備故障、製品汚損、在庫被害、生産停止につながるリスクがあります。当社では、稼働状況や搬入出動線、設備配置を確認したうえで、操業への影響を抑えた防水工事を計画します。",
  image: "/images/industrial.jpeg",
});

export default function FactoryWaterproofingPage() {
  return (
    <main>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqJsonLd(faqs)} />

      <nav className="breadcrumb">
        <div className="container">
          <ol className="breadcrumb__list">
            <li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li>
            <li className="breadcrumb__separator">›</li>
            <li><a href={routePath("/service")} className="breadcrumb__link">サービス</a></li>
            <li className="breadcrumb__separator">›</li>
            <li><a href={routePath("/service/large-scale-repair")} className="breadcrumb__link">大規模修繕工事</a></li>
            <li className="breadcrumb__separator">›</li>
            <li>工場・倉庫の防水工事</li>
          </ol>
        </div>
      </nav>

      <section className="page-hero">
        <span className="page-hero__label">Factory & Warehouse Waterproofing</span>
        <h1 className="page-hero__title">工場・倉庫の防水工事｜操業停止と漏水被害を防ぐ屋根・屋上改修</h1>
        <p className="page-hero__description">生産ライン・在庫・設備を守り、操業停止リスクを最小化する防水工事</p>
      </section>

      <section className="content-section">
        <div className="container container--narrow">
          <div className="article-content">
            <div className="reveal" style={{ marginBottom: '40px' }}>
              <img src={assetPath("/images/industrial.jpeg")} alt="工場・倉庫の防水工事" style={{ aspectRatio: '16/9', width: '100%', objectFit: 'cover', borderRadius: '16px' }} />
            </div>

            <div className="reveal">
              <p style={{ fontSize: '16px', lineHeight: '1.9', marginBottom: '30px' }}>
                工場や倉庫における防水不良は、単なる「建物の劣化やシミ」だけでは終わりません。漏水が生産用の機械、高圧電気設備、原材料、大切な完成製品、あるいは出荷管理システム等に一度でも影響すれば、一時的な操業停止・品質不良・納期遅延へと直結し、莫大な金銭的被害や社会的信用の失墜を招きかねません。
              </p>

              <p style={{ fontSize: '15px', lineHeight: '1.8', marginBottom: '40px', color: 'var(--color-text-light)' }}>
                工場・倉庫の雨漏りは、設備故障、製品汚損、在庫被害、生産停止につながるリスクがあります。当社では、稼働状況や搬入出動線、設備配置を確認したうえで、操業への影響を抑えた防水工事を計画します。屋上防水、折板屋根、外壁目地、ドレンまわりまで、漏水原因に応じた改修をご提案します。
              </p>

              {/* よくある課題・リスク */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                工場・倉庫の雨漏りが招く重大なリスク
              </h2>
              <ul style={{ paddingLeft: '20px', marginBottom: '40px', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}><strong>生産設備・電気系統の破壊</strong>：ライン直上の漏水によるショートや故障、修復期間中の操業停止</li>
                <li style={{ marginBottom: '12px' }}><strong>在庫・資材の損害</strong>：倉庫天井からの雨漏りによる出荷前製品や保管原材料の汚損、廃棄処分</li>
                <li style={{ marginBottom: '12px' }}><strong>現場環境の悪化</strong>：床面の濡れによるスリップ事故リスク、湿気によるカビや錆の発生</li>
              </ul>

              {/* 着工前に確認すべき操業・設備・動線 */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                着工前に確認すべき操業・設備・動線
              </h2>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>工場の操業への影響を最小限にするため、着工前に以下の調査・調整を行います。</p>
              
              <table className="info-table reveal" style={{ width: '100%', marginBottom: '40px' }}>
                <thead>
                  <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                    <th style={{ padding: '12px', textAlign: 'left', width: '30%', fontSize: '14px' }}>項目</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px' }}>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th>漏水箇所の特定</th><td>屋上、折板屋根、外壁、笠木、目地、ドレン、設備基礎まわりを確認</td></tr>
                  <tr><th>稼働状況の確認</th><td>生産ライン、搬入口、出荷時間、夜間操業、休日稼働を確認</td></tr>
                  <tr><th>設備位置の確認</th><td>キュービクル、空調室外機、ダクト、配管、排気設備、太陽光設備の有無</td></tr>
                  <tr><th>荷役動線</th><td>フォークリフト、トラック、搬入出動線と仮設材置場を分離</td></tr>
                  <tr><th>火気・臭気リスク</th><td>製造物、可燃物、食品、精密機器への影響を確認</td></tr>
                  <tr><th>排水計画</th><td>ドレン詰まり、勾配不良、雨水滞留の有無を確認</td></tr>
                  <tr><th>工程分割</th><td>操業を止めないためにエリア分割・休日施工・夜間施工を検討</td></tr>
                </tbody>
              </table>

              {/* 工事中の安全管理と操業への配慮 */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                工事中の安全管理と操業への配慮
              </h2>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>施工中は、現場監督の厳しい管理のもとで作業を行い、リスクを完全にシャットアウトします。</p>

              <table className="info-table reveal" style={{ width: '100%', marginBottom: '40px' }}>
                <thead>
                  <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                    <th style={{ padding: '12px', textAlign: 'left', width: '30%', fontSize: '14px' }}>項目</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px' }}>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th>操業停止リスクの回避</th><td>生産ライン直上の施工は天候・養生・工程を慎重に管理</td></tr>
                  <tr><th>設備まわりの納まり</th><td>配管架台、設備基礎、アンカーまわりは漏水しやすいため重点施工</td></tr>
                  <tr><th>飛散・落下防止</th><td>材料、工具、撤去物が工場内外へ落下・飛散しないよう管理</td></tr>
                  <tr><th>粉じん対策</th><td>下地処理時の粉じんが製品や機械へ影響しないよう養生</td></tr>
                  <tr><th>臭気・火気管理</th><td>使用材料に応じて換気、火気厳禁エリア、危険物保管ルールを確認</td></tr>
                  <tr><th>雨天時対応</th><td>施工途中の雨養生、仮防水、緊急対応を準備</td></tr>
                  <tr><th>写真報告</th><td>屋根上は管理者が確認しにくいため、施工写真で進捗共有</td></tr>
                </tbody>
              </table>

              {/* 設備基礎・配管・ドレンまわりの防水対策 */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                設備基礎・配管・ドレンまわりの防水対策
              </h2>
              <p style={{ lineHeight: '1.8', marginBottom: '30px' }}>
                工場の屋上には、ダクト・配管、大型空調機、電気設備基礎、配管用架台など、多くの障害物が存在します。これらは最も雨漏りが発生しやすい「納まりの難しい」ポイントです。久米技建では、ただ全体を覆うだけでなく、設備の足回り・アンカーボルト・ドレン周囲を補強布やウレタン塗膜で丁寧に重点施工し、隙間のない一体的な防水層を形成します。
              </p>

              {/* 工場屋根・屋上に適した防水工法 */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                工場屋根・屋上に適した防水工法
              </h2>
              <ul style={{ paddingLeft: '20px', marginBottom: '40px', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}><strong>塩化ビニル系シート防水（機械固定工法）</strong>（既存の下地を撤去せずに施工でき、下地の湿気を逃す通気工法にも最適。工場のRC屋上や大規模陸屋根に向いています）</li>
                <li style={{ marginBottom: '12px' }}><strong>折板屋根の遮熱防水・防錆塗装</strong>（工場の折板屋根の継ぎ目やボルトまわりを補強し、雨漏りを止めるとともに室内の冷房効率を高める遮熱対応を行います）</li>
                <li style={{ marginBottom: '12px' }}><strong>ウレタン塗膜防水</strong>（ダクト配管や設備基礎が多く、シートが貼れない複雑な屋上でもシームレスに施工可能です）</li>
              </ul>

              {/* 施工の流れ */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                施工の流れ
              </h2>
              <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                工場の稼働スケジュール・動線に完全に配慮した段階的フローで安全・確実に施工いたします。
              </p>
              <div className="lsr-timeline" style={{ paddingLeft: '35px', position: 'relative', marginBottom: '48px' }}>
                <div style={{ content: '""', position: 'absolute', top: '8px', bottom: '8px', left: '16px', width: '2px', background: 'var(--color-border)' }}></div>
                <div className="lsr-timeline-item" style={{ marginBottom: '20px', position: 'relative' }}>
                  <div className="lsr-timeline-item__badge" style={{ position: 'absolute', left: '-35px', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '2px 6px', borderRadius: '4px', zIndex: 2 }}>01</div>
                  <div className="lsr-timeline-item__content" style={{ background: 'var(--color-bg-light)', borderRadius: '8px', padding: '16px 20px', border: '1px solid var(--color-border-light)' }}>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: 'var(--color-primary)' }}>稼働確認・事前安全打合せ</h4>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>生産スケジュールや荷役トラックの出入り時間等を確認。火気厳禁ルールや立ち入り禁止区域を完全に把握します。</p>
                  </div>
                </div>
                <div className="lsr-timeline-item" style={{ marginBottom: '20px', position: 'relative' }}>
                  <div className="lsr-timeline-item__badge" style={{ position: 'absolute', left: '-35px', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '2px 6px', borderRadius: '4px', zIndex: 2 }}>02</div>
                  <div className="lsr-timeline-item__content" style={{ background: 'var(--color-bg-light)', borderRadius: '8px', padding: '16px 20px', border: '1px solid var(--color-border-light)' }}>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: 'var(--color-primary)' }}>養生計画と工程分割の実施</h4>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>製品や機械への粉じん飛散防止用養生を徹底し、操業エリアを順次避けるようブロックごとの分割施工を開始します。</p>
                  </div>
                </div>
                <div className="lsr-timeline-item" style={{ position: 'relative' }}>
                  <div className="lsr-timeline-item__badge" style={{ position: 'absolute', left: '-35px', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '2px 6px', borderRadius: '4px', zIndex: 2 }}>03</div>
                  <div className="lsr-timeline-item__content" style={{ background: 'var(--color-bg-light)', borderRadius: '8px', padding: '16px 20px', border: '1px solid var(--color-border-light)' }}>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: 'var(--color-primary)' }}>段階的施工・写真報告</h4>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>屋根上などの目視が難しい高所も、施工の各段階で詳細な写真を撮影し、進捗確認シートと併せて施設長へ毎日ご報告します。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection faqs={faqs} />

      {/* ========== CTA SECTION ========== */}
      <section className="cta-v2">
        <div className="cta-v2__shell">
          <div className="cta-v2__top reveal" style={{ "--cta-v2-bg-image": `url('${assetPath("/images/footer-cta-bg.png")}')` }}>
            <div className="container">
              <h2 className="cta-v2__title">
                <span className="cta-v2__title-accent">＼</span>
                建物のことで、お困りではありませんか？
                <span className="cta-v2__title-accent">／</span>
              </h2>
              <p className="cta-v2__subtext">専門スタッフが丁寧に対応いたします。ご相談・お見積もり・現地診断はすべて無料です。</p>

              <div className="cta-v2__actions">
                <a href="tel:0120-449-802" className="cta-v2__action cta-v2__action--phone">
                  <span className="cta-v2__phone-icon" aria-hidden="true">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <span className="cta-v2__phone-copy">
                    <span className="cta-v2__phone-label">受付時間 平日9:00-18:00</span>
                    <span className="cta-v2__phone-number">0120-449-802</span>
                  </span>
                </a>

                <a href={routePath("/contact")} className="cta-v2__action cta-v2__action--primary">
                  <span className="cta-v2__primary-copy">
                    <span className="cta-v2__primary-sub">＼ 30秒で完了・相談無料 ／</span>
                    <span className="cta-v2__primary-main">
                      <i className="far fa-envelope"></i> 無料診断・見積もりを依頼する
                    </span>
                  </span>
                  <span className="cta-v2__primary-arrow" aria-hidden="true">
                    ›
                  </span>
                </a>

                <a href={routePath("/simulation")} className="cta-v2__action cta-v2__action--secondary">
                  <i className="fas fa-calculator"></i> シミュレーションする
                </a>
              </div>

              <p className="cta-v2__reassurance">
                まだ依頼するか決まっていなくても大丈夫です。
                <span className="cta-v2__reassurance-accent">状況確認だけでもOKです。</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
