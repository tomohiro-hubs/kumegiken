import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  return (
    <main>
      <section className="page-hero">
    <span className="page-hero__label">Service</span>
    <h1 className="page-hero__title">サービス一覧</h1>
    <p className="page-hero__description">防水・修繕のプロフェッショナルとして、建物に関わるあらゆるお悩みに対応します。</p>
  </section>

  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>サービス一覧</li></ol></div></nav>

  <section className="content-section">
    <div className="container">
      <div className="service__grid">
        <a href={routePath("/service/large-scale-repair")} className="service-card reveal">
          <div className="service-card__image"><img src={assetPath("/images/large-scale-aerial.jpg")} alt="大規模修繕事業" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /><span className="service-card__tag">人気No.1</span></div>
          <div className="service-card__body"><h3 className="service-card__title">大規模修繕事業</h3><p className="service-card__text">マンション・ビルの長寿命化を実現する包括的な修繕工事。建物診断から施工計画、施工、アフターフォローまで一貫対応。居住者様への配慮も含めた丁寧な施工管理で、資産価値を維持します。</p><span className="service-card__link">詳しく見る <i className="fas fa-arrow-right"></i></span></div>
        </a>
        <a href={routePath("/service/waterproofing")} className="service-card reveal reveal--delay-1">
          <div className="service-card__image"><img src={assetPath("/images/waterproofing-rooftop.jpg")} alt="防水事業" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /><span className="service-card__tag">技術のルーツ</span></div>
          <div className="service-card__body"><h3 className="service-card__title">防水事業</h3><p className="service-card__text">ウレタン防水・シート防水・FRP防水・アスファルト防水。建物の用途と状態に合わせた最適な工法を選定し、雨水の侵入から建物を守ります。久米技建の技術的ルーツです。</p><span className="service-card__link">詳しく見る <i className="fas fa-arrow-right"></i></span></div>
        </a>
        <a href={routePath("/service/painting")} className="service-card reveal reveal--delay-2">
          <div className="service-card__image"><img src={assetPath("/images/painting-work.jpg")} alt="外壁塗装" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
          <div className="service-card__body"><h3 className="service-card__title">外壁塗装</h3><p className="service-card__text">外壁の美観回復と保護を両立する塗装工事。建物の立地環境や外壁材に合わせた最適な塗料を選定し、長期間にわたる耐久性を実現します。</p><span className="service-card__link">詳しく見る <i className="fas fa-arrow-right"></i></span></div>
        </a>
        <a href={routePath("/dive-survey")} className="service-card reveal">
          <div className="service-card__image"><img src={assetPath("/images/dive-survey.jpg")} alt="水中点検" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /><span className="service-card__tag">専門対応</span></div>
          <div className="service-card__body"><h3 className="service-card__title">水中点検</h3><p className="service-card__text">ダム・港湾施設・橋梁などの水中部分を、専門ダイバーが安全かつ正確に点検・調査。映像記録付きで報告します。</p><span className="service-card__link">詳しく見る <i className="fas fa-arrow-right"></i></span></div>
        </a>
      </div>
    </div>
  </section>

  <section className="cta-section">
    <div className="container">
      <h2 className="cta-section__title reveal">どのサービスが最適かわからない方へ</h2>
      <p className="cta-section__text reveal">まずは状況をお聞かせください。4つのサービスから最適な進め方をご提案します。</p>
      <div className="cta-section__buttons reveal">
        <a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a>
        <a href={routePath("/simulation")} className="btn btn--outline btn--lg"><i className="fas fa-calculator"></i> 見積もりシミュレーション</a>
      </div>
    </div>
  </section>

  
    </main>
  );
}