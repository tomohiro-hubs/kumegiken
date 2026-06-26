import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, faqJsonLd, serviceJsonLd } from "@/lib/schema";
import { FaqSection } from "@/components/ServiceSeo";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "マンション・集合住宅の防水工事｜居住者対応まで配慮した屋上・バルコニー改修｜久米技建",
  description: "マンションの防水工事では、施工品質だけでなく、居住者への告知、共用部の安全確保、騒音・臭気対策、バルコニー使用制限への配慮が欠かせません。管理組合・管理会社・オーナー様と連携し、円滑に進めます。",
  path: "/service/large-scale-repair/mansion",
  image: "/images/building.jpeg",
});

const faqs = [
  {
    question: "居住者への案内は必要ですか？",
    answer: "必要です。騒音、臭気、バルコニー使用制限、洗濯物制限、工事車両の出入りなど、生活に影響する内容は事前告知が重要です。",
  },
  {
    question: "バルコニーに私物がある場合はどうなりますか？",
    answer: "原則として施工前に移動が必要です。室外機、避難ハッチ、物干し金物、排水溝まわりは施工に影響するため、事前確認を行います。",
  },
  {
    question: "管理組合向けに写真報告はできますか？",
    answer: "はい。劣化状況、下地処理、防水材施工、トップコート、完了状況などを写真で記録し、報告資料として整理できます。",
  },
];

const breadcrumbSchema = breadcrumbJsonLd([
  { name: "ホーム", path: "/" },
  { name: "サービス", path: "/service/" },
  { name: "大規模修繕工事", path: "/service/large-scale-repair/" },
  { name: "マンション・集合住宅の防水工事", path: "/service/large-scale-repair/mansion/" },
]);

const serviceSchema = serviceJsonLd({
  name: "マンション・集合住宅の防水工事",
  path: "/service/large-scale-repair/mansion/",
  description: "マンションの防水工事では、施工品質だけでなく、居住者への告知、共用部の安全確保、騒音・臭気対策、バルコニー使用制限への配慮が欠かせません。管理組合・管理会社・オーナー様と連携し、円滑に進めます。",
  image: "/images/building.jpeg",
});

export default function MansionWaterproofingPage() {
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
            <li>マンション・集合住宅の防水工事</li>
          </ol>
        </div>
      </nav>

      <section className="page-hero">
        <span className="page-hero__label">Mansion & Apartment Waterproofing</span>
        <h1 className="page-hero__title">マンション・集合住宅の防水工事｜居住者対応まで配慮した屋上・バルコニー改修</h1>
        <p className="page-hero__description">居住者の生活負担を抑え、管理組合・オーナーへの説明責任を果たす防水工事</p>
      </section>

      <section className="content-section">
        <div className="container container--narrow">
          <div className="article-content">
            <div className="reveal" style={{ marginBottom: '40px' }}>
              <img src={assetPath("/images/building.jpeg")} alt="マンション・集合住宅の防水工事" style={{ aspectRatio: '16/9', width: '100%', objectFit: 'cover', borderRadius: '16px' }} />
            </div>

            <div className="reveal">
              <p style={{ fontSize: '16px', lineHeight: '1.9', marginBottom: '30px' }}>
                マンションやアパートなどの共同住宅における防水工事は、単なる施工技術のみで円滑に進めることはできません。発注者である「管理組合・管理会社・オーナー様」が最も気にされることと、実際に工事の影響を受ける「居住者様」の生活には、必ず意識のズレが生じるからです。
              </p>

              <p style={{ fontSize: '15px', lineHeight: '1.8', marginBottom: '40px', color: 'var(--color-text-light)' }}>
                マンションの防水工事では、施工品質だけでなく、居住者への告知、共用部の安全確保、騒音・臭気対策、バルコニー使用制限への配慮が欠かせません。当社では、管理組合・管理会社・オーナー様と連携し、屋上・バルコニー・共用廊下などの防水改修を円滑に進めます。
              </p>

              {/* よくある課題・トラブル */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                マンション防水工事で起こりやすいトラブル
              </h2>
              <ul style={{ paddingLeft: '20px', marginBottom: '40px', lineHeight: '1.8' }}>
                <li style={{ marginBottom: '12px' }}><strong>「聞いていない」ことによる不満・クレーム</strong>：洗濯物干しの制限日や工事車両の出入り予定の周知不足</li>
                <li style={{ marginBottom: '12px' }}><strong>バルコニー内の私物移動の遅れ</strong>：植木鉢やエアコン室外機、物干し竿などの移動に関する住民負担</li>
                <li style={{ marginBottom: '12px' }}><strong>仮設足場に伴うセキュリティ低下</strong>：足場が組まれる期間中の空き巣リスクやプライバシー懸念</li>
              </ul>

              {/* 国土交通省の指針に基づく計画的修繕 */}
              <div style={{ background: 'var(--color-bg-light)', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--color-accent)', marginBottom: '40px' }}>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', fontWeight: '700', color: 'var(--color-primary)' }}>長期修繕計画と適正発注について</h4>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.7', color: 'var(--color-text-light)' }}>
                  国土交通省はマンション管理に関して、長期修繕計画の策定基準や修繕積立金のガイドライン、大規模修繕工事の発注に関する情報を整理しています。マンション経営や共同住宅の維持においては、計画的な修繕と適正な発注が非常に重要なテーマです。久米技建では、国土交通省の指針等に寄り添い、透明性の高い施工計画とお見積もりを提出いたします。
                </p>
              </div>

              {/* 着工前に必要な居住者対応と工程調整 */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                着工前に必要な居住者対応と工程調整
              </h2>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>トラブルを未然に防ぐため、着工前に以下の計画と調整を徹底します。</p>
              
              <table className="info-table reveal" style={{ width: '100%', marginBottom: '40px' }}>
                <thead>
                  <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                    <th style={{ padding: '12px', textAlign: 'left', width: '30%', fontSize: '14px' }}>項目</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px' }}>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th>管理組合・管理会社との調整</th><td>工事範囲、工程、居住者告知、緊急連絡先を確認</td></tr>
                  <tr><th>居住者説明</th><td>騒音、臭気、洗濯物制限、バルコニー立入制限、車両出入りを告知</td></tr>
                  <tr><th>共用部動線</th><td>エントランス、廊下、階段、駐車場、駐輪場、ゴミ置場への影響確認</td></tr>
                  <tr><th>バルコニー使用制限</th><td>ベランダ防水では私物移動、室外機、物干し、避難ハッチに注意</td></tr>
                  <tr><th>プライバシー配慮</th><td>足場設置時の目隠し、防犯、在宅者への配慮</td></tr>
                  <tr><th>工法選定</th><td>臭気・騒音・工期・費用・既存防水層との相性を考慮</td></tr>
                  <tr><th>苦情対応体制</th><td>問い合わせ窓口、掲示物、日々の進捗案内を整備</td></tr>
                </tbody>
              </table>

              {/* 工事中の騒音・臭気・安全対策 */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                工事中の騒音・臭気・安全対策
              </h2>
              <p style={{ marginBottom: '20px', lineHeight: '1.8' }}>居住者様のストレスを最小限に抑えるよう、工事中は現場管理者が細心の注意を払います。</p>

              <table className="info-table reveal" style={{ width: '100%', marginBottom: '40px' }}>
                <thead>
                  <tr style={{ background: 'var(--color-primary)', color: 'white' }}>
                    <th style={{ padding: '12px', textAlign: 'left', width: '30%', fontSize: '14px' }}>項目</th>
                    <th style={{ padding: '12px', textAlign: 'left', fontSize: '14px' }}>内容</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><th>居住者動線の確保</th><td>共用廊下・階段・エントランスの通行安全を確保</td></tr>
                  <tr><th>騒音・臭気管理</th><td>作業時間、材料使用、換気、掲示物による事前案内</td></tr>
                  <tr><th>バルコニー対応</th><td>私物残置、室外機、排水溝、避難器具、物干し金物の扱いに注意</td></tr>
                  <tr><th>防犯対策</th><td>足場設置中は侵入リスクが上がるため、戸締まり案内や足場管理が必要</td></tr>
                  <tr><th>雨天時対応</th><td>施工途中の雨漏り防止、仮養生、工程変更連絡</td></tr>
                  <tr><th>施工写真の提出</th><td>管理組合・オーナーに対して、劣化状況・施工中・完了写真を整理</td></tr>
                  <tr><th>クレーム予防</th><td>「聞いていない」を防ぐため、事前告知と当日掲示を徹底</td></tr>
                </tbody>
              </table>

              {/* 屋上・バルコニー・共用廊下の防水工事 */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                屋上・バルコニー・共用廊下の防水工事
              </h2>
              <p style={{ lineHeight: '1.8', marginBottom: '30px' }}>
                各部位によって最適な防水仕様を選択します。共用廊下や階段には、歩行音の軽減や滑り防止に効果がある塩ビ防滑性シート。屋上には高耐久なシート防水や密着性の高いウレタン防水。個別のバルコニー・ベランダには、エアコン室外機を浮かせて施工できるウレタン防水など、居住者様の利便性を考慮した施工技術をご提供します。
              </p>

              {/* 管理組合・オーナー様への報告体制 */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                管理組合・オーナー様への報告体制
              </h2>
              <p style={{ lineHeight: '1.8', marginBottom: '40px' }}>
                工事状況が目視で確認しづらい屋上やベランダだからこそ、久米技建は徹底した可視化と書面報告を行います。施工前の劣化状況写真から、下地補修、防水層塗布（積層ごとの写真）、トップコート、最終仕上がりまでを項目別に整理。完了時にクリアファイルやデジタルデータで「施工記録写真集」としてお渡しし、将来の売却や管理組合の監査時の証跡としてお役立ていただけます。
              </p>

              {/* 施工の流れ */}
              <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid var(--color-border)', paddingBottom: '8px' }}>
                施工の流れ
              </h2>
              <p style={{ marginBottom: '24px', lineHeight: '1.8' }}>
                管理組合様や住民の皆様に十分に配慮したタイムラインで、安全・円滑に進行いたします。
              </p>
              <div className="lsr-timeline" style={{ paddingLeft: '35px', position: 'relative', marginBottom: '48px' }}>
                <div style={{ content: '""', position: 'absolute', top: '8px', bottom: '8px', left: '16px', width: '2px', background: 'var(--color-border)' }}></div>
                <div className="lsr-timeline-item" style={{ marginBottom: '20px', position: 'relative' }}>
                  <div className="lsr-timeline-item__badge" style={{ position: 'absolute', left: '-35px', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '2px 6px', borderRadius: '4px', zIndex: 2 }}>01</div>
                  <div className="lsr-timeline-item__content" style={{ background: 'var(--color-bg-light)', borderRadius: '8px', padding: '16px 20px', border: '1px solid var(--color-border-light)' }}>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: 'var(--color-primary)' }}>着工前説明会と居住者告知</h4>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>管理組合様との最終調整を行い、居住者説明会の開催、掲示板への工事案内文の配布・掲示を行います。</p>
                  </div>
                </div>
                <div className="lsr-timeline-item" style={{ marginBottom: '20px', position: 'relative' }}>
                  <div className="lsr-timeline-item__badge" style={{ position: 'absolute', left: '-35px', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '2px 6px', borderRadius: '4px', zIndex: 2 }}>02</div>
                  <div className="lsr-timeline-item__content" style={{ background: 'var(--color-bg-light)', borderRadius: '8px', padding: '16px 20px', border: '1px solid var(--color-border-light)' }}>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: 'var(--color-primary)' }}>足場架設・安全通路の設置</h4>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>外部足場を設置し、頭上養生ネットを張ります。エントランスや階段まわりには安全な防護通路を確保します。</p>
                  </div>
                </div>
                <div className="lsr-timeline-item" style={{ position: 'relative' }}>
                  <div className="lsr-timeline-item__badge" style={{ position: 'absolute', left: '-35px', transform: 'translateX(-50%)', background: 'var(--color-primary)', color: '#fff', fontSize: '10px', fontWeight: '700', padding: '2px 6px', borderRadius: '4px', zIndex: 2 }}>03</div>
                  <div className="lsr-timeline-item__content" style={{ background: 'var(--color-bg-light)', borderRadius: '8px', padding: '16px 20px', border: '1px solid var(--color-border-light)' }}>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: '700', color: 'var(--color-primary)' }}>部位別施工・週間案内掲示</h4>
                    <p style={{ margin: 0, fontSize: '13px', color: 'var(--color-text-light)', lineHeight: '1.6' }}>屋上、共用廊下、バルコニー等の防水を行い、毎週「洗濯物を干せる日」「進入制限」のスケジュールを掲示板へ掲示・更新します。</p>
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
