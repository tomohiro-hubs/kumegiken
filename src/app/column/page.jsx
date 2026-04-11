"use client";
import { assetPath } from "@/lib/assetPath";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [filter, setFilter] = useState('all');

  const handleFilter = (category) => setFilter(category);
  const isVisible = (category) => filter === 'all' || filter === category;

  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Column</span><h1 className="page-hero__title">コラム・お役立ち情報</h1><p className="page-hero__description">防水・修繕の専門家が、建物管理に役立つ情報をお届けします</p></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href="/" className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>コラム</li></ol></div></nav>

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
    <a href="/column/waterproofing-guide" className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/waterproofing-hands.jpg")} alt="防水工事ガイド" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2026.03.15</div><span className="column-card__category">防水</span></div><h3 className="column-card__title">防水工事とは？種類・工法・費用相場を徹底解説</h3><p className="column-card__excerpt">防水工事の種類や工法の違い、費用の目安を解説。ウレタン防水、シート防水、FRP防水それぞれのメリット・デメリットとは。</p></div></a>
    )}
    {isVisible('large-scale-repair') && (
    <a href="/column/large-scale-repair-guide" className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/large-scale-aerial.jpg")} alt="大規模修繕ガイド" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2026.03.01</div><span className="column-card__category">大規模修繕</span></div><h3 className="column-card__title">大規模修繕の進め方と費用の目安</h3><p className="column-card__excerpt">マンション・ビルの大規模修繕工事の進め方、一般的な費用感、成功のポイントを専門家が解説します。</p></div></a>
    )}
    {isVisible('leak-repair') && (
    <a href="/column/leak-cause-and-fix" className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/leak-repair.jpg")} alt="雨漏り対処法" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2026.02.20</div><span className="column-card__category">雨漏り補修</span></div><h3 className="column-card__title">雨漏りの原因と応急処置｜プロが教える対処法</h3><p className="column-card__excerpt">突然の雨漏りに困ったら。雨漏りの主な原因と、すぐにできる応急処置、プロに依頼すべきタイミングをお教えします。</p></div></a>
    )}
    {isVisible('waterproofing') && (
    <a href="/column/rooftop-waterproofing-lifespan" className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/waterproofing-rooftop.jpg")} alt="屋上防水の耐用年数" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2026.02.10</div><span className="column-card__category">防水</span></div><h3 className="column-card__title">マンション屋上防水の耐用年数と改修時期</h3><p className="column-card__excerpt">マンションの屋上防水はいつ改修すべき？防水工法別の耐用年数と、改修のベストタイミングを解説。</p></div></a>
    )}
    {isVisible('painting') && (
    <a href="/column/painting-timing" className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/painting-work.jpg")} alt="外壁塗装の塗り替え時期" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2026.01.25</div><span className="column-card__category">外壁塗装</span></div><h3 className="column-card__title">外壁塗装の塗り替え時期の見極め方</h3><p className="column-card__excerpt">外壁塗装の塗り替えは何年が目安？劣化のサインと、最適な塗り替えタイミングの見極め方を解説。</p></div></a>
    )}
    {isVisible('leak-repair') && (
    <a href="/column/fire-insurance-leak-repair" className="column-card reveal" style={{ animation: 'fadeInUp 0.35s ease forwards' }}><div className="column-card__image"><img src={assetPath("/images/consultation.jpg")} alt="火災保険で雨漏り修理" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} /></div><div className="column-card__body"><div className="column-card__meta"><div className="column-card__date">2026.01.10</div><span className="column-card__category">雨漏り補修</span></div><h3 className="column-card__title">火災保険で雨漏り修理はできる？</h3><p className="column-card__excerpt">火災保険で雨漏り修理費用が補償される場合があります。適用条件と申請の流れを解説。</p></div></a>
    )}
  </div>
</div>
        <a href="/recruit" className="header__nav-link">採用情報</a></section>

<section className="cta-section"><div className="container"><h2 className="cta-section__title">建物のことでお悩みですか？</h2><div className="cta-section__buttons"><a href="/contact" className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a></div></div></section>
  
    </main>
  );
}