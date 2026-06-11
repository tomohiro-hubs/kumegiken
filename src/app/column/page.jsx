"use client";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";

import Link from "next/link";
import { useState } from "react";

const SITE_URL = "https://kumegiken.co.jp";

export default function Page() {
  const [filter, setFilter] = useState('all');
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "コラム", item: `${SITE_URL}/column` },
    ],
  };

  const handleFilter = (category) => setFilter(category);
  const isVisible = (category) => filter === 'all' || filter === category;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>コラム</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Column</span><h1 className="page-hero__title">コラム・お役立ち情報</h1><p className="page-hero__description">防水・修繕の専門家が、建物管理に役立つ情報をお届けします</p></section>


<section className="content-section"><div className="container column-layout">
  <aside className="column-sidebar reveal">
    <h2 className="column-sidebar__title">工事別カテゴリー</h2>
    <p className="column-sidebar__text">読みたい工事項目を選択してください。</p>
    <div className="column-filter">
      <button type="button" className={`column-filter__btn ${filter === 'all' ? 'active' : ''}`} aria-pressed={filter === 'all'} onClick={() => handleFilter('all')}>すべて</button>
      <button type="button" className={`column-filter__btn ${filter === 'large-scale-repair' ? 'active' : ''}`} aria-pressed={filter === 'large-scale-repair'} onClick={() => handleFilter('large-scale-repair')}>大規模修繕</button>
      <button type="button" className={`column-filter__btn ${filter === 'waterproofing' ? 'active' : ''}`} aria-pressed={filter === 'waterproofing'} onClick={() => handleFilter('waterproofing')}>防水</button>
      <button type="button" className={`column-filter__btn ${filter === 'painting' ? 'active' : ''}`} aria-pressed={filter === 'painting'} onClick={() => handleFilter('painting')}>外壁塗装</button>
      <button type="button" className={`column-filter__btn ${filter === 'leak-repair' ? 'active' : ''}`} aria-pressed={filter === 'leak-repair'} onClick={() => handleFilter('leak-repair')}>雨漏り補修</button>
    </div>
  </aside>
  <div className="column-list">
    {isVisible('waterproofing') && (
    <a href={routePath("/column/nishinomiya-waterproofing-optimal-selection")} className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/waterproofing-hands.jpg")} alt="西宮の防水工法選定ガイド" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2026.03.31</div><span className="column-card__category">防水</span></div><h3 className="column-card__title">西宮の防水工事｜雨漏りを防ぐ“最適な工法選び”と長持ちさせるポイント</h3><p className="column-card__excerpt">西宮エリアで防水工事を検討中の方へ、雨漏りを防ぐための最適な工法選びの基準や、耐用年数を長持ちさせるための施工のポイントを解説します。</p></div></a>
    )}
    {isVisible('leak-repair') && (
    <a href={routePath("/column/nishinomiya-leak-speed")} className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/leak-repair.jpg")} alt="雨漏り修理のスピード対応" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2026.03.31</div><span className="column-card__category">雨漏り補修</span></div><h3 className="column-card__title">西宮の雨漏り対応はスピードが命｜最短対応で被害を最小限にする方法</h3><p className="column-card__excerpt">西宮で雨漏りが発生した際になぜスピード対応が必要なのか、放置するリスク、迅速に対応できる業者の選び方を解説します。</p></div></a>
    )}
    {isVisible('waterproofing') && (
    <a href={routePath("/column/waterproofing-guide")} className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/waterproofing-guide-1.jpeg")} alt="西宮市の防水工事費用ガイド" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2026.03.15</div><span className="column-card__category">防水</span></div><h3 className="column-card__title">西宮市の防水工事費用相場｜工法別の目安と選び方</h3><p className="column-card__excerpt">西宮市での防水工事費用の目安を解説。ウレタン防水、シート防水、FRP防水の工法別に比較します。</p></div></a>
    )}

    {isVisible('leak-repair') && (
    <a href={routePath("/column/nishinomiya-fire-insurance-leak-repair")} className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/consultation.jpg")} alt="西宮での雨漏り修理と火災保険" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2025.08.13</div><span className="column-card__category">雨漏り補修</span></div><h3 className="column-card__title">西宮での雨漏り修理に火災保険は使える？適用条件と申請の流れ</h3><p className="column-card__excerpt">西宮で雨漏りや防水補修が必要になった際、火災保険を適用して修理費用を抑えられる条件や、具体的な申請手順についてわかりやすく解説します。</p></div></a>
    )}

    {isVisible('leak-repair') && (
    <a href={routePath("/column/nishinomiya-ashiba")} className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/scaffold-install.jpg")} alt="西宮での防水・雨漏り修理における足場工事" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2025.08.11</div><span className="column-card__category">雨漏り補修</span></div><h3 className="column-card__title">西宮の防水・雨漏り修理｜足場工事の役割と重要性</h3><p className="column-card__excerpt">西宮で防水や雨漏り修理を行うなら足場工事が欠かせません。安全性と施工精度を高め、火災保険適用で費用負担を軽減可能。調査・見積もり無料。</p></div></a>
    )}

    {isVisible('leak-repair') && (
    <a href={routePath("/column/nishinomiya-shitaji")} className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/crack-inspection.jpg")} alt="西宮での防水・雨漏りを防ぐ下地補修" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2025.08.11</div><span className="column-card__category">雨漏り補修</span></div><h3 className="column-card__title">西宮の防水・雨漏り修理｜長持ちさせる下地補修工事の重要性</h3><p className="column-card__excerpt">西宮で防水・雨漏り修理を行うなら下地補修工事が重要です。ひび割れや欠損を補修し、防水材の密着と耐久性を向上。火災保険適用も可能。無料調査受付中。</p></div></a>
    )}

    {isVisible('leak-repair') && (
    <a href={routePath("/column/nishinomiya-seal")} className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/kumegiken-29（中）.jpeg")} alt="西宮での防水・雨漏りシール工事" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2025.08.11</div><span className="column-card__category">雨漏り補修</span></div><h3 className="column-card__title">西宮の防水・雨漏り対策｜シール工事（コーキング）の重要性と施工タイミング</h3><p className="column-card__excerpt">西宮で防水や雨漏りにお困りならシール工事が重要です。外壁やサッシ周りの隙間を防ぎ、雨水の侵入や劣化を防止。築10年前後の点検・施工がおすすめ. 無料調査・お見積もり受付中。</p></div></a>
    )}
  </div>
</div>
</section>

<section className="cta-section"><div className="container"><h2 className="cta-section__title">建物のことでお悩みですか？</h2><div className="cta-section__buttons"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a></div></div></section>
  
    </main>
  );
}
