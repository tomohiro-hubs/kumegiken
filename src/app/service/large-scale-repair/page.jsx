import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  return (
    <main>
      <section className="page-hero">
    <span className="page-hero__label">Large-Scale Repair</span>
    <h1 className="page-hero__title">大規模修繕工事</h1>
    <p className="page-hero__description">建物の長寿命化と資産価値の維持を実現する、包括的な修繕工事</p>
  </section>

  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/service")} className="breadcrumb__link">サービス</a></li><li className="breadcrumb__separator">›</li><li>大規模修繕工事</li></ol></div></nav>

  <section className="content-section">
    <div className="container container--narrow">
      <div className="article-content">
        <div className="reveal" style={{ marginBottom: '40px' }}>
          <img src={assetPath("/images/large-scale-aerial.jpg")} alt="大規模修繕工事の現場" style={{ aspectRatio: '16/9', width: '100%', objectFit: 'cover', borderRadius: '16px' }} />
        </div>

        <div className="reveal">
          <p>マンション・ビルの大規模修繕工事は、建物の資産価値を維持し、長寿命化を図るために欠かせない工事です。久米技建では、建物診断から施工計画の策定、施工、完了検査、アフターフォローまで、すべてを一貫して対応いたします。</p>

          <h2>大規模修繕で久米技建が選ばれる理由</h2>
          <p>大規模修繕工事は、数百万円〜数千万円規模の投資判断です。だからこそ、信頼できる施工会社の選定が重要になります。</p>

          <section className="lsr-pillars" aria-label="久米技建の品質基準">
            <div className="lsr-pillars__label">Quality Pillars</div>
            <div className="lsr-pillars__list">
              <article className="lsr-pillars__item">
                <div className="lsr-pillars__num">01</div>
                <h4 className="lsr-pillars__title">正直な建物診断</h4>
                <p className="lsr-pillars__text">本当に必要な工事だけを提案。不要な工事で費用を膨らませません。</p>
              </article>
              <article className="lsr-pillars__item">
                <div className="lsr-pillars__num">02</div>
                <h4 className="lsr-pillars__title">自社職人の直営施工</h4>
                <p className="lsr-pillars__text">21名の自社職人が施工。品質にブレがない、安定した仕上がり。</p>
              </article>
              <article className="lsr-pillars__item">
                <div className="lsr-pillars__num">03</div>
                <h4 className="lsr-pillars__title">一貫した管理体制</h4>
                <p className="lsr-pillars__text">診断から施工まで一社完結。中間マージンなしで適正価格を実現。</p>
              </article>
            </div>
          </section>

          <h2>大規模修繕工事の主な内容</h2>
          <ul>
            <li><strong>外壁補修工事</strong> — クラック補修、タイル補修、爆裂補修</li>
            <li><strong>外壁塗装工事</strong> — 下地処理、中塗り、上塗りの3工程</li>
            <li><strong>防水工事</strong> — 屋上、バルコニー、廊下の防水改修</li>
            <li><strong>シーリング工事</strong> — 目地、サッシ周りの打ち替え</li>
            <li><strong>鉄部塗装</strong> — 手すり、鉄骨階段等の錆止め・塗装</li>
            <li><strong>共用部改修</strong> — エントランス、廊下、階段等の美装工事</li>
          </ul>

          <h2>費用の目安</h2>
          <p>大規模修繕工事の費用は、建物の規模や劣化状況、修繕内容により大きく異なります。一般的な目安として、1戸あたり75万円〜125万円程度が相場ですが、正確な費用は建物診断の結果に基づいてお見積もりいたします。</p>

          <div style={{ background: 'var(--color-primary)', color: 'white', padding: '30px', borderRadius: '12px', margin: '30px 0', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }}>概算費用をすぐに知りたい方はこちら</p>
            <a href={routePath("/simulation")} className="btn btn--primary"><i className="fas fa-calculator"></i> 見積もりシミュレーション</a>
          </div>

          <h2>対応可能な建物</h2>
          <ul>
            <li>分譲マンション（RC造・SRC造）</li>
            <li>賃貸マンション・アパート</li>
            <li>オフィスビル・商業ビル</li>
            <li>工場・倉庫</li>
            <li>公共施設</li>
          </ul>

          <h2>施工の流れ</h2>
          <p>大規模修繕工事は通常、以下の流れで進行します。お問い合わせから施工完了まで、おおよそ3〜6ヶ月が目安です。</p>
          <ol>
            <li>お問い合わせ・ヒアリング</li>
            <li>建物診断・現地調査（無料）</li>
            <li>診断レポート提出・工事計画のご提案</li>
            <li>お見積もり・ご契約</li>
            <li>近隣挨拶・仮設足場の設置</li>
            <li>各種修繕工事の実施</li>
            <li>完了検査・お引き渡し</li>
            <li>アフターフォロー・定期点検</li>
          </ol>
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
      <div className="works__grid" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))' }}>
        <a href={routePath("/works/osaka-building-large-scale-repair-01")} className="work-card reveal">
          <div className="work-card__image"><img src={assetPath("/images/scaffold-install.jpg")} alt="大規模修繕" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} /><span className="work-card__category">大規模修繕</span></div>
          <div className="work-card__body"><div className="work-card__meta"><span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 大阪市</span><span className="work-card__meta-item"><i className="fas fa-building"></i> ビル</span></div><h3 className="work-card__title">オフィスビル大規模修繕工事</h3></div>
        </a>
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px' }}><a href={routePath("/works")} className="btn btn--outline-dark">すべての施工事例を見る →</a></div>
    </div>
  </section>

  <section className="cta-section"><div className="container"><h2 className="cta-section__title reveal">大規模修繕のご相談はお気軽に</h2><p className="cta-section__text reveal">まずは無料の建物診断から。最適な修繕計画をご提案します。</p><div className="cta-section__phone reveal"><a href="tel:0798-78-6880" className="cta-section__phone-number" style={{ color: 'white', textDecoration: 'none' }}><i className="fas fa-phone-alt"></i> 0798-78-6880</a><div className="cta-section__phone-sub">受付時間：平日 9:00〜18:00</div></div><div className="cta-section__buttons reveal"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a><a href={routePath("/simulation")} className="btn btn--outline btn--lg"><i className="fas fa-calculator"></i> 見積もりシミュレーション</a></div></div></section>

  
    </main>
  );
}