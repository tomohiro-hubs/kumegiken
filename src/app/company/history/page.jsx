import Link from "next/link";
import { routePath } from "@/lib/routePath";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "沿革｜久米技建の歩み",
  description: "2016年創業から現在までの久米技建の沿革をご紹介。防水工事から大規模修繕・水中点検へと広げてきた事業の歩みを掲載しています。",
  path: "/company/history",
  image: "/images/hero-main.jpg",
});

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">History</span><h1 className="page-hero__title">沿革</h1><p className="page-hero__description">2016年の創業からの歩み</p></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/company")} className="breadcrumb__link">会社情報</a></li><li className="breadcrumb__separator">›</li><li>沿革</li></ol></div></nav>
<section style={{ background: 'var(--color-bg-light)', padding: '20px 0' }}>
  <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
    <a href={routePath("/company")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>会社概要</a>
    <a href={routePath("/company/message")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>代表メッセージ</a>
    <a href={routePath("/company/staff")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>スタッフ紹介</a>
    <a href={routePath("/company/area")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>対応エリア</a>
    <a href={routePath("/company/history")} className="btn btn--sm" style={{ background: 'var(--color-primary)', color: 'white', borderRadius: '50px' }}>沿革</a>
  </div>
</section>
<section className="content-section"><div className="container container--narrow">
  <h2 className="reveal" style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '24px' }}>沿革</h2>
  <div className="flow__timeline">
    <div className="flow__step reveal"><div className="flow__step-number" style={{ fontSize: '12px' }}>2016</div><div className="flow__step-content"><h3 className="flow__step-title">久米技建 設立</h3><p className="flow__step-text">久米技建として創業。代表・久米涼平が兵庫県西宮市にて創業。防水工事専門会社としてスタート。自社職人による直営施工体制の基盤を構築。</p></div></div>
    <div className="flow__step reveal"><div className="flow__step-number" style={{ fontSize: '12px' }}>2018</div><div className="flow__step-content"><h3 className="flow__step-title">事業領域の拡大</h3><p className="flow__step-text">防水工事に加え、外壁塗装・シーリング工事の受注を開始。総合的な建物メンテナンスサービスを展開。自社職人10名体制へ。</p></div></div>
    <div className="flow__step reveal"><div className="flow__step-number" style={{ fontSize: '12px' }}>2020</div><div className="flow__step-content"><h3 className="flow__step-title">大規模修繕工事への参入</h3><p className="flow__step-text">マンション・ビルの大規模修繕工事を本格的に開始。建物診断サービスの提供も開始し、「正直な診断」の理念を確立。</p></div></div>
    <div className="flow__step reveal"><div className="flow__step-number" style={{ fontSize: '12px' }}>2021</div><div className="flow__step-content"><h3 className="flow__step-title">株式会社久米技建 設立</h3><p className="flow__step-text">個人事業から法人化し、株式会社久米技建を設立。経営基盤を強化し、品質管理・安全管理体制を整備。より安定した施工提供体制を確立。</p></div></div>
    <div className="flow__step reveal"><div className="flow__step-number" style={{ fontSize: '12px' }}>2022</div><div className="flow__step-content"><h3 className="flow__step-title">組織体制の強化</h3><p className="flow__step-text">自社職人15名・施工管理3名体制へ拡大。品質管理体制の強化と、教育研修制度の整備を実施。年間施工件数100件程度。</p></div></div>
    <div className="flow__step reveal"><div className="flow__step-number" style={{ fontSize: '12px' }}>2025</div><div className="flow__step-content"><h3 className="flow__step-title">東京営業所を設立</h3><p className="flow__step-text">首都圏エリアの対応強化を目的に東京営業所を開設。関西で培った施工品質と直営体制を活かし、関東での案件対応を本格化。東京・埼玉・神奈川を中心に対応エリアを拡大。</p></div></div>
    <div className="flow__step reveal"><div className="flow__step-number" style={{ fontSize: '12px' }}>2025</div><div className="flow__step-content"><h3 className="flow__step-title">水中点検事業の開始</h3><p className="flow__step-text">新規事業として水中点検・調査事業を開始。ダム、港湾施設、橋梁の水中部分の点検サービスを提供。</p></div></div>
    <div className="flow__step reveal"><div className="flow__step-number" style={{ fontSize: '12px' }}>2026</div><div className="flow__step-content"><h3 className="flow__step-title">現在</h3><p className="flow__step-text">自社職人・施工管理（BP含む）40名体制。年間施工件数150件以上。関西圏を中心に、信頼のパートナーとして成長を続けています。</p></div></div>
  </div>
</div></section>
  
    </main>
  );
}
