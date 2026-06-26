import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";

import { buildMetadata } from "@/lib/seo";
import ServiceSeo, { FaqSection } from "@/components/ServiceSeo";
import { serviceSeoData } from "@/lib/serviceSeoData";
import { WORKS_CATALOG } from "@/lib/worksCatalog";

export const metadata = buildMetadata({
  title: "西宮の大規模修繕工事（マンション・ビル）｜久米技建｜兵庫・大阪",
  description: "西宮市を拠点に、兵庫・大阪の大規模修繕工事に対応。建物診断から施工まで一貫対応し、資産価値の維持と長寿命化を実現します。",
  path: "/service/large-scale-repair",
  image: "/images/large-scale-repair-hero.png",
});

export default function Page() {
  const seoData = serviceSeoData.largeScaleRepair;
  const largeScaleCases = WORKS_CATALOG.filter(
    (item) => item.category === "large-scale-repair"
  ).slice(0, 9);

  return (
    <main>
      <ServiceSeo {...seoData} />
      <nav className="breadcrumb">
        <div className="container">
          <ol className="breadcrumb__list">
            <li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li>
            <li className="breadcrumb__separator">›</li>
            <li><a href={routePath("/service")} className="breadcrumb__link">サービス</a></li>
            <li className="breadcrumb__separator">›</li>
            <li>大規模修繕工事</li>
          </ol>
        </div>
      </nav>
      
      <section className="page-hero">
        <span className="page-hero__label">Large-Scale Repair</span>
        <h1 className="page-hero__title">西宮の大規模修繕工事｜マンション・ビルの長寿命化</h1>
        <p className="page-hero__description">建物の長寿命化と資産価値の維持を実現する、西宮市発の包括的な修繕工事</p>
      </section>

      <section className="content-section">
        <div className="container container--narrow">
          <div className="article-content">
            <div className="reveal" style={{ marginBottom: '40px' }}>
              <img src={assetPath("/images/large-scale-repair-hero.png")} alt="大規模修繕工事の現場" style={{ aspectRatio: '16/9', width: '100%', objectFit: 'cover', borderRadius: '16px' }} />
            </div>

            <div className="reveal">
              <p style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '30px' }}>
                マンション・ビルの大規模修繕工事は、建物の資産価値を維持し、長寿命化を図るために欠かせない工事です。久米技建では、建物診断から施工計画の策定、施工、完了検査、アフターフォローまで、すべてを一貫して対応いたします。
              </p>

              <div className="lsr-area-banner">
                <i className="fas fa-map-marker-alt"></i>
                <p>西宮市・神戸市・尼崎市・大阪市を中心に、兵庫県・大阪府のマンションやビルの大規模修繕に対応しています。<br />
                詳細は <a href={routePath("/company/area")}>対応エリアページ</a> でご確認いただけます。</p>
              </div>

              {/* 1. 選ばれる理由 */}
              <div className="lsr-section-title">
                <span className="lsr-section-title__en">WHY CHOOSE US</span>
                <h3>大規模修繕で久米技建が選ばれる理由</h3>
              </div>
              <p style={{ marginBottom: '24px' }}>大規模修繕工事は、数百万円〜数億円規模の投資判断です。だからこそ、信頼できる施工会社の選定が重要になります。</p>
              
              <div className="lsr-pillars-grid">
                <article className="lsr-pillar-card">
                  <div className="lsr-pillar-card__icon"><i className="fas fa-clipboard-list"></i></div>
                  <h4 className="lsr-pillar-card__title">正直な建物診断</h4>
                  <p className="lsr-pillar-card__text">本当に必要な工事だけを提案。不要な工事で費用を膨らませません。</p>
                </article>
                <article className="lsr-pillar-card">
                  <div className="lsr-pillar-card__icon"><i className="fas fa-user-shield"></i></div>
                  <h4 className="lsr-pillar-card__title">自社職人の直営施工</h4>
                  <p className="lsr-pillar-card__text">21名の自社職人がプライドを持って直接施工。品質にブレがありません。</p>
                </article>
                <article className="lsr-pillar-card">
                  <div className="lsr-pillar-card__icon"><i className="fas fa-hand-holding-dollar"></i></div>
                  <h4 className="lsr-pillar-card__title">一社完結の一貫体制</h4>
                  <p className="lsr-pillar-card__text">診断から施工まで完全一貫体制。中間マージンをカットし適正価格を実現します。</p>
                </article>
              </div>

              {/* 2. 工事内容 */}
              <div className="lsr-section-title">
                <span className="lsr-section-title__en">WORK MENU</span>
                <h3>大規模修繕工事の主な内容</h3>
              </div>
              <div className="lsr-menu-grid">
                <div className="lsr-menu-card">
                  <div className="lsr-menu-card__header">
                    <i className="fas fa-tools"></i>
                    <h4>外壁補修工事</h4>
                  </div>
                  <p>経年劣化によるひび割れ（クラック）やタイルの浮き、コンクリート爆裂を的確に補修し、建物の寿命を延ばします。</p>
                </div>
                <div className="lsr-menu-card">
                  <div className="lsr-menu-card__header">
                    <i className="fas fa-paint-roller"></i>
                    <h4>外壁塗装工事</h4>
                  </div>
                  <p>徹底した下地処理（高圧洗浄や補修）を行った後、下塗り・中塗り・上塗りの3工程で美観を再生し、外壁の耐候性を高めます。</p>
                </div>
                <div className="lsr-menu-card">
                  <div className="lsr-menu-card__header">
                    <i className="fas fa-tint-slash"></i>
                    <h4>防水工事</h4>
                  </div>
                  <p>紫外線や雨風に晒されやすい屋上、バルコニー、共用廊下などを防水改修し、雨漏りから建物をしっかりとガードします。</p>
                </div>
                <div className="lsr-menu-card">
                  <div className="lsr-menu-card__header">
                    <i className="fas fa-fill-drip"></i>
                    <h4>シーリング工事</h4>
                  </div>
                  <p>サッシ周りや目地などの古いシーリングを撤去し、高耐候な新しいシーリング材を充填して、隙間からの水漏れを防ぎます。</p>
                </div>
                <div className="lsr-menu-card">
                  <div className="lsr-menu-card__header">
                    <i className="fas fa-shield-halved"></i>
                    <h4>鉄部塗装工事</h4>
                  </div>
                  <p>手すりや非常階段などの鉄部に対し、入念なサビ落とし（ケレン作業）を施してから、錆止め塗料と耐候性塗料で保護します。</p>
                </div>
                <div className="lsr-menu-card">
                  <div className="lsr-menu-card__header">
                    <i className="fas fa-door-open"></i>
                    <h4>共用部改装工事</h4>
                  </div>
                  <p>エントランスや階段、廊下の床シート貼り替えや照明のLED化など、入居者の利便性と建物の付加価値を高める美装工事を行います。</p>
                </div>
              </div>

              {/* 3. 費用の目安 */}
              <div className="lsr-section-title">
                <span className="lsr-section-title__en">BUDGET & COST</span>
                <h3>大規模修繕工事の費用目安</h3>
              </div>
              <div className="lsr-price-box">
                <div className="lsr-price-box__main">
                  <span className="lsr-price-box__label">一般的な相場目安（1戸あたり）</span>
                  <div className="lsr-price-box__number">
                    <strong>75</strong> <span className="lsr-price-box__unit">万</span> 〜 <strong>125</strong> <span className="lsr-price-box__unit">万円程度</span>
                  </div>
                </div>
                <div className="lsr-price-box__info">
                  <p>※正確な費用は、建物の規模（階数・戸数）、劣化状況、採用する工法によって大きく変動します。久米技建では建物診断を無料で行い、詳細なお見積書を提出いたします。</p>
                </div>
                <div className="lsr-price-box__cta">
                  <p>まずは30秒で完了するシミュレーションをお試しください</p>
                  <a href={routePath("/simulation")} className="btn btn--accent"><i className="fas fa-calculator"></i> 見積もりシミュレーションはこちら</a>
                </div>
              </div>

              {/* 4. 対応可能な建物 */}
              <div className="lsr-section-title">
                <span className="lsr-section-title__en">TARGET BUILDINGS</span>
                <h3>対応可能な建物タイプ</h3>
              </div>
              <div className="lsr-building-grid">
                <div className="lsr-building-card">
                  <i className="fas fa-building"></i>
                  <span>分譲マンション</span>
                </div>
                <div className="lsr-building-card">
                  <i className="fas fa-hotel"></i>
                  <span>賃貸マンション・アパート</span>
                </div>
                <div className="lsr-building-card">
                  <i className="fas fa-city"></i>
                  <span>オフィス・商業ビル</span>
                </div>
                <div className="lsr-building-card">
                  <i className="fas fa-warehouse"></i>
                  <span>工場・倉庫・店舗</span>
                </div>
              </div>

              {/* 5. 建物別の配慮ポイント */}
              <div className="lsr-section-title">
                <span className="lsr-section-title__en">BUILDING TYPE POINTS</span>
                <h3>建物・施設別の配慮ポイント</h3>
              </div>
              <p style={{ marginBottom: '24px', fontSize: '15px', lineHeight: '1.8' }}>
                マンション、工場、学校など、建物の用途や環境によって、着工前および工事中に配慮すべき重要ポイントは大きく異なります。
                久米技建では、それぞれの特徴や利用者の安全を熟知したうえで最適な施工計画を立て、安全管理を徹底して工事を進めます。
              </p>

              <div className="lsr-building-types-grid" style={{ marginBottom: '40px' }}>
                <div className="lsr-menu-card" style={{ background: 'var(--color-bg-light)', border: '1px solid var(--color-border-light)', borderRadius: '12px', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img src={assetPath("/images/building.jpeg")} alt="マンション・団地" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                    <div className="lsr-menu-card__header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <i className="fas fa-building" style={{ color: 'var(--color-accent)', fontSize: '20px' }}></i>
                      <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>マンション・団地</h4>
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-text-light)', marginBottom: '16px', flexGrow: 1 }}>
                      多くの居住者様が生活されている中での工事となります。バルコニーの使用制限や防犯対策（足場からの侵入防止）、洗濯物情報の事前周知など、細やかな配慮と安全確保を第一に進めます。
                    </p>
                    <a href={routePath("/service/large-scale-repair/mansion")} className="service-card__link" style={{ fontSize: '14px' }}>
                      マンション向け配慮を見る <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="lsr-menu-card" style={{ background: 'var(--color-bg-light)', border: '1px solid var(--color-border-light)', borderRadius: '12px', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img src={assetPath("/images/industrial.jpeg")} alt="工場・倉庫" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                    <div className="lsr-menu-card__header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <i className="fas fa-warehouse" style={{ color: 'var(--color-accent)', fontSize: '20px' }}></i>
                      <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>工場・倉庫</h4>
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-text-light)', marginBottom: '16px', flexGrow: 1 }}>
                      工場の操業や物流ラインを止めない施工計画が求められます。高所の熱源や精密機械への安全対策、フォークリフトや大型車の動線確保、作業音・臭気への対策を徹底します。
                    </p>
                    <a href={routePath("/service/large-scale-repair/factory")} className="service-card__link" style={{ fontSize: '14px' }}>
                      工場向け配慮を見る <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>

                <div className="lsr-menu-card" style={{ background: 'var(--color-bg-light)', border: '1px solid var(--color-border-light)', borderRadius: '12px', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img src={assetPath("/images/school.jpeg")} alt="学校・福祉施設" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '24px', flex: '1', display: 'flex', flexDirection: 'column' }}>
                    <div className="lsr-menu-card__header" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <i className="fas fa-school" style={{ color: 'var(--color-accent)', fontSize: '20px' }}></i>
                      <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '700' }}>学校・福祉施設</h4>
                    </div>
                    <p style={{ fontSize: '14px', lineHeight: '1.7', color: 'var(--color-text-light)', marginBottom: '16px', flexGrow: 1 }}>
                      児童・生徒や施設利用者様の安全が最優先です。休校日や長期休暇（夏休み等）を利用した集中施工、通行ルートの区分け、ガードマンの適切な配置など、万全の安全対策を講じます。
                    </p>
                    <a href={routePath("/service/large-scale-repair/facility")} className="service-card__link" style={{ fontSize: '14px' }}>
                      学校・施設向け配慮を見る <i className="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* 6. 施工の流れ */}
              <div className="lsr-section-title">
                <span className="lsr-section-title__en">PROCESS</span>
                <h3>大規模修繕工事の流れ</h3>
              </div>
              <p className="lsr-process-intro">お問い合わせから工事完了まで、通常3〜6ヶ月が目安となります。各ステップをプロの視点で徹底管理いたします。</p>
              <div className="lsr-timeline">
                <div className="lsr-timeline-item">
                  <div className="lsr-timeline-item__badge">Step 01</div>
                  <div className="lsr-timeline-item__content">
                    <h4>お問い合わせ・ヒアリング</h4>
                    <p>現在抱えているお悩み（雨漏り、外壁タイルの浮きなど）やご予算感などをお聞きします。</p>
                  </div>
                </div>
                <div className="lsr-timeline-item">
                  <div className="lsr-timeline-item__badge">Step 02</div>
                  <div className="lsr-timeline-item__content">
                    <h4>建物診断・現地調査 <span className="free-badge">無料</span></h4>
                    <p>技術者が実際に現場へ伺い、打診調査等で建物の劣化状態を詳しく調べます。</p>
                  </div>
                </div>
                <div className="lsr-timeline-item">
                  <div className="lsr-timeline-item__badge">Step 03</div>
                  <div className="lsr-timeline-item__content">
                    <h4>計画のご提案・お見積もり</h4>
                    <p>写真付きの診断レポートをご提示の上、本当に必要な修繕内容に絞った適正お見積もりをご提案します。</p>
                  </div>
                </div>
                <div className="lsr-timeline-item">
                  <div className="lsr-timeline-item__badge">Step 04</div>
                  <div className="lsr-timeline-item__content">
                    <h4>ご契約・着工準備</h4>
                    <p>計画にご納得いただいた上でご契約を結びます。また、近隣住民の方への事前の工事説明・挨拶を行います。</p>
                  </div>
                </div>
                <div className="lsr-timeline-item">
                  <div className="lsr-timeline-item__badge">Step 05</div>
                  <div className="lsr-timeline-item__content">
                    <h4>仮設足場の設置</h4>
                    <p>安全な作業環境と塗料飛散防止のための養生を目的として、建物周囲に頑丈な仮設足場を設置します。</p>
                  </div>
                </div>
                <div className="lsr-timeline-item">
                  <div className="lsr-timeline-item__badge">Step 06</div>
                  <div className="lsr-timeline-item__content">
                    <h4>各種修繕工事の実施</h4>
                    <p>下地補修・シーリング・外壁塗装・防水工事など、各専門の自社職人が徹底した品質管理のもとで施工します。</p>
                  </div>
                </div>
                <div className="lsr-timeline-item">
                  <div className="lsr-timeline-item__badge">Step 07</div>
                  <div className="lsr-timeline-item__content">
                    <h4>完了検査・お引き渡し</h4>
                    <p>社内自主検査とお客様立ち会いのもとでの最終検査を行い、修繕完了を確認の上お引き渡しとなります。</p>
                  </div>
                </div>
                <div className="lsr-timeline-item">
                  <div className="lsr-timeline-item__badge">Step 08</div>
                  <div className="lsr-timeline-item__content">
                    <h4>定期アフターフォロー</h4>
                    <p>工事終了後も安心が続くよう、定期的な点検やサポート体制をご提供いたします。</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Related Works */}
      <section className="content-section content-section--gray">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-heading__en">Related Works</span>
            <h2 className="section-heading__ja">大規模修繕の施工事例</h2>
          </div>
          <div className="works__grid works-grid-3col">
            {largeScaleCases.map((item) => (
              <a href={routePath(`/works/${item.slug}`)} className="work-card reveal" key={item.slug}>
                <div className="work-card__image">
                  <img src={assetPath(item.image)} alt={item.title} style={{ width: "100%", minHeight: "180px", objectFit: "cover" }} />
                  <span className="work-card__category">大規模修繕</span>
                </div>
                <div className="work-card__body">
                  <div className="work-card__meta">
                    <span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> {item.location}</span>
                    <span className="work-card__meta-item"><i className="fas fa-building"></i> {item.buildingType}</span>
                  </div>
                  <h3 className="work-card__title">{item.title}</h3>
                </div>
              </a>
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "28px" }}>
            <a href={routePath("/works")} className="btn btn--outline-dark">もっと見る →</a>
          </div>
        </div>
      </section>

      <FaqSection faqs={seoData.faqs} />

      <section className="cta-section">
        <div className="container">
          <h2 className="cta-section__title reveal">大規模修繕・建物診断はお気軽に</h2>
          <p className="cta-section__text reveal">まずは無料の建物診断から。最適な修繕計画をご提案します。</p>
          <div className="cta-section__phone reveal">
            <a href="tel:0120-449-802" className="cta-section__phone-number" style={{ color: 'white', textDecoration: 'none' }}>
              <i className="fas fa-phone-alt"></i> 0120-449-802
            </a>
            <div className="cta-section__phone-sub">受付時間：平日 9:00〜18:00</div>
          </div>
          <div className="cta-section__buttons reveal">
            <a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料の建物診断・お見積もり</a>
            <a href={routePath("/simulation")} className="btn btn--outline btn--lg"><i className="fas fa-calculator"></i> 見積もりシミュレーション</a>
          </div>
        </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        /* このページ限定でコンテンツ最大幅を1080pxに拡張 */
        .container--narrow {
          max-width: 1080px;
        }
        .container--narrow .article-content {
          max-width: none;
        }

        .works-grid-3col {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        @media (min-width: 768px) {
          .works-grid-3col {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* --- Custom Styles for Large Scale Repair --- */
        .lsr-area-banner {
          display: flex;
          align-items: center;
          gap: 16px;
          background: var(--color-bg-light);
          border: 1px solid var(--color-border);
          border-left: 4px solid var(--color-primary);
          border-radius: 8px;
          padding: 16px 20px;
          margin-bottom: 40px;
        }
        .lsr-area-banner i {
          font-size: 24px;
          color: var(--color-accent);
        }
        .lsr-area-banner p {
          margin: 0;
          font-size: 14px;
          line-height: 1.6;
          color: var(--color-text);
        }
        .lsr-area-banner a {
          color: var(--color-accent);
          font-weight: 700;
          text-decoration: underline;
        }

        .lsr-section-title {
          margin-top: 55px;
          margin-bottom: 24px;
          border-bottom: 2px solid var(--color-border-light);
          padding-bottom: 12px;
        }
        .lsr-section-title__en {
          display: block;
          font-size: 11px;
          color: var(--color-accent);
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .lsr-section-title h3 {
          margin: 4px 0 0 0;
          font-size: 22px;
          color: var(--color-primary);
          font-weight: 800;
          letter-spacing: 0.02em;
        }

        /* Pillars Grid */
        .lsr-pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 24px;
          margin-bottom: 48px;
        }
        .lsr-pillar-card {
          background: var(--color-bg-light);
          border: 1px solid var(--color-border-light);
          border-radius: 12px;
          padding: 28px 20px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .lsr-pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
        }
        .lsr-pillar-card__icon {
          font-size: 36px;
          color: var(--color-accent);
          margin-bottom: 16px;
        }
        .lsr-pillar-card__title {
          font-size: 17px;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 12px;
          margin-top: 0;
        }
        .lsr-pillar-card__text {
          font-size: 13px;
          color: var(--color-text-light);
          line-height: 1.6;
          margin: 0;
        }

        /* Menu Grid */
        .lsr-menu-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }
        .lsr-building-types-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 48px;
        }
        .lsr-menu-card {
          background: #fff;
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 24px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .lsr-menu-card:hover {
          border-color: var(--color-accent);
          box-shadow: 0 6px 15px rgba(0,0,0,0.02);
        }
        .lsr-menu-card__header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .lsr-menu-card__header i {
          font-size: 22px;
          color: var(--color-accent);
        }
        .lsr-menu-card__header h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: var(--color-primary);
        }
        .lsr-menu-card p {
          font-size: 13px;
          color: var(--color-text-light);
          line-height: 1.6;
          margin: 0;
        }

        /* Price Box */
        .lsr-price-box {
          background: #fff;
          border: 2px solid var(--color-primary);
          border-radius: 16px;
          padding: 36px 30px;
          margin-bottom: 48px;
          box-shadow: 0 12px 30px rgba(26,39,68,0.06);
        }
        .lsr-price-box__main {
          text-align: center;
          margin-bottom: 20px;
        }
        .lsr-price-box__label {
          display: block;
          font-size: 14px;
          color: var(--color-text-light);
          font-weight: 600;
          margin-bottom: 8px;
        }
        .lsr-price-box__number {
          font-size: 26px;
          color: var(--color-primary);
          font-weight: 700;
        }
        .lsr-price-box__number strong {
          font-size: 52px;
          color: var(--color-accent);
          font-weight: 900;
          margin: 0 4px;
        }
        .lsr-price-box__unit {
          font-size: 20px;
          color: var(--color-primary);
        }
        .lsr-price-box__info {
          background: var(--color-bg-light);
          border-radius: 8px;
          padding: 16px 20px;
          margin-bottom: 24px;
        }
        .lsr-price-box__info p {
          font-size: 13px;
          color: var(--color-text-light);
          line-height: 1.6;
          margin: 0;
        }
        .lsr-price-box__cta {
          text-align: center;
          border-top: 1px dashed var(--color-border);
          padding-top: 24px;
        }
        .lsr-price-box__cta p {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: 16px;
          margin-top: 0;
        }
        .lsr-price-box__cta .btn--accent {
          background: var(--color-accent);
          color: #fff;
          font-weight: 700;
          padding: 12px 28px;
          border-radius: 30px;
          transition: background 0.3s;
          display: inline-block;
          text-decoration: none;
        }
        .lsr-price-box__cta .btn--accent:hover {
          background: var(--color-accent-hover);
        }

        /* Building Grid */
        .lsr-building-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 48px;
        }
        .lsr-building-card {
          background: var(--color-bg-light);
          border-radius: 12px;
          padding: 24px 12px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          border: 1px solid var(--color-border-light);
          transition: transform 0.3s;
        }
        .lsr-building-card:hover {
          transform: translateY(-3px);
        }
        .lsr-building-card i {
          font-size: 32px;
          color: var(--color-primary);
        }
        .lsr-building-card span {
          font-size: 13px;
          font-weight: 700;
          color: var(--color-primary);
        }

        /* Timeline Process */
        .lsr-process-intro {
          font-size: 14px;
          color: var(--color-text-light);
          margin-bottom: 30px;
        }
        .lsr-timeline {
          position: relative;
          padding-left: 45px;
          margin-bottom: 48px;
        }
        .lsr-timeline::before {
          content: '';
          position: absolute;
          top: 8px;
          bottom: 8px;
          left: 20px;
          width: 2px;
          background: var(--color-border);
        }
        .lsr-timeline-item {
          position: relative;
          margin-bottom: 28px;
        }
        .lsr-timeline-item:last-child {
          margin-bottom: 0;
        }
        .lsr-timeline-item__badge {
          position: absolute;
          left: -45px;
          top: 6px;
          transform: translateX(-50%);
          background: var(--color-primary);
          color: #fff;
          font-size: 11px;
          font-weight: 700;
          padding: 3px 8px;
          border-radius: 4px;
          white-space: nowrap;
          z-index: 2;
        }
        .lsr-timeline-item__content {
          background: var(--color-bg-light);
          border-radius: 12px;
          padding: 20px 24px;
          border: 1px solid var(--color-border-light);
        }
        .lsr-timeline-item__content h4 {
          margin: 0 0 8px 0;
          font-size: 16px;
          font-weight: 700;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .lsr-timeline-item__content p {
          margin: 0;
          font-size: 13px;
          color: var(--color-text-light);
          line-height: 1.6;
        }
        .free-badge {
          background: var(--color-accent);
          color: #fff;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 700;
          margin-left: 6px;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .lsr-building-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .lsr-building-types-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .lsr-pillars-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .lsr-menu-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .lsr-building-types-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .lsr-timeline {
            padding-left: 30px;
          }
          .lsr-timeline::before {
            left: 10px;
          }
          .lsr-timeline-item__badge {
            left: -30px;
            font-size: 10px;
            padding: 2px 6px;
          }
          .lsr-timeline-item__content {
            padding: 16px 20px;
          }
        }
      `}} />
    </main>
  );
}
