"use client";
import { assetPath } from "@/lib/assetPath";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [filter, setFilter] = useState('all');

  const handleFilter = (category) => {
    setFilter(category);
  };

  const isVisible = (category) => filter === 'all' || filter === category;

  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Works</span><h1 className="page-hero__title">施工事例</h1><p className="page-hero__description">久米技建がこれまでに手がけた施工事例をご紹介します</p></section>
  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href="/" className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>施工事例</li></ol></div></nav>

  <section className="content-section">
    <div className="container">
      <div className="works__filter">
        <button className={`works__filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilter('all')}>すべて</button>
        <button className={`works__filter-btn ${filter === 'waterproofing' ? 'active' : ''}`} onClick={() => handleFilter('waterproofing')}>防水工事</button>
        <button className={`works__filter-btn ${filter === 'large-scale-repair' ? 'active' : ''}`} onClick={() => handleFilter('large-scale-repair')}>大規模修繕</button>
        <button className={`works__filter-btn ${filter === 'painting' ? 'active' : ''}`} onClick={() => handleFilter('painting')}>外壁塗装</button>
        <button className={`works__filter-btn ${filter === 'sealing' ? 'active' : ''}`} onClick={() => handleFilter('sealing')}>シーリング</button>
        <button className={`works__filter-btn ${filter === 'leak-repair' ? 'active' : ''}`} onClick={() => handleFilter('leak-repair')}>雨漏り補修</button>
      </div>

      <div className="works__grid">
        {isVisible('waterproofing') && (
        <a href="/works/nishinomiya-mansion-waterproofing-01" className="work-card reveal" style={{ animation: 'fadeInUp 0.4s ease forwards' }}>
          <div className="work-card__image"><img src={assetPath("/images/waterproofing-rooftop.jpg")} alt="屋上ウレタン防水改修工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} /><span className="work-card__category">防水工事</span></div>
          <div className="work-card__body"><div className="work-card__meta"><span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 西宮市</span><span className="work-card__meta-item"><i className="fas fa-building"></i> マンション</span></div><h3 className="work-card__title">屋上ウレタン防水改修工事</h3></div>
        </a>
        )}
        {isVisible('large-scale-repair') && (
        <a href="/works/osaka-building-large-scale-repair-01" className="work-card reveal" style={{ animation: 'fadeInUp 0.4s ease forwards' }}>
          <div className="work-card__image"><img src={assetPath("/images/scaffold-install.jpg")} alt="オフィスビル大規模修繕工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} /><span className="work-card__category">大規模修繕</span></div>
          <div className="work-card__body"><div className="work-card__meta"><span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 大阪市</span><span className="work-card__meta-item"><i className="fas fa-building"></i> ビル</span></div><h3 className="work-card__title">オフィスビル大規模修繕工事</h3></div>
        </a>
        )}
        {isVisible('painting') && (
        <a href="/works/kobe-mansion-painting-01" className="work-card reveal" style={{ animation: 'fadeInUp 0.4s ease forwards' }}>
          <div className="work-card__image"><img src={assetPath("/images/building-completed.jpg")} alt="分譲マンション外壁塗装工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} /><span className="work-card__category">外壁塗装</span></div>
          <div className="work-card__body"><div className="work-card__meta"><span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 神戸市</span><span className="work-card__meta-item"><i className="fas fa-building"></i> マンション</span></div><h3 className="work-card__title">分譲マンション外壁塗装工事</h3></div>
        </a>
        )}
        {isVisible('leak-repair') && (
        <a href="/works/amagasaki-shop-leak-repair-01" className="work-card reveal" style={{ animation: 'fadeInUp 0.4s ease forwards' }}>
          <div className="work-card__image"><img src={assetPath("/images/leak-repair.jpg")} alt="店舗天井雨漏り補修工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} /><span className="work-card__category">雨漏り補修</span></div>
          <div className="work-card__body"><div className="work-card__meta"><span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 尼崎市</span><span className="work-card__meta-item"><i className="fas fa-store"></i> 店舗</span></div><h3 className="work-card__title">店舗天井雨漏り補修工事</h3></div>
        </a>
        )}
        {isVisible('sealing') && (
        <a href="/works/nishinomiya-building-sealing-01" className="work-card reveal" style={{ animation: 'fadeInUp 0.4s ease forwards' }}>
          <div className="work-card__image"><img src={assetPath("/images/sealing-work.jpg")} alt="商業ビル外壁シーリング工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} /><span className="work-card__category">シーリング</span></div>
          <div className="work-card__body"><div className="work-card__meta"><span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 西宮市</span><span className="work-card__meta-item"><i className="fas fa-building"></i> ビル</span></div><h3 className="work-card__title">商業ビル外壁シーリング打替え工事</h3></div>
        </a>
        )}
        {isVisible('waterproofing') && (
        <a href="/works/takarazuka-mansion-waterproofing-01" className="work-card reveal" style={{ animation: 'fadeInUp 0.4s ease forwards' }}>
          <div className="work-card__image"><img src={assetPath("/images/waterproofing-hands.jpg")} alt="マンション屋上シート防水工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} /><span className="work-card__category">防水工事</span></div>
          <div className="work-card__body"><div className="work-card__meta"><span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 宝塚市</span><span className="work-card__meta-item"><i className="fas fa-building"></i> マンション</span></div><h3 className="work-card__title">マンション屋上シート防水工事</h3></div>
        </a>
        )}
        {isVisible('large-scale-repair') && (
        <a href="/works/osaka-mansion-large-scale-repair-01" className="work-card reveal" style={{ animation: 'fadeInUp 0.4s ease forwards' }}>
          <div className="work-card__image"><img src={assetPath("/images/large-scale-aerial.jpg")} alt="分譲マンション大規模修繕工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} /><span className="work-card__category">大規模修繕</span></div>
          <div className="work-card__body"><div className="work-card__meta"><span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 大阪市</span><span className="work-card__meta-item"><i className="fas fa-building"></i> マンション</span></div><h3 className="work-card__title">分譲マンション第1回大規模修繕工事</h3></div>
        </a>
        )}
        {isVisible('painting') && (
        <a href="/works/itami-apartment-painting-01" className="work-card reveal" style={{ animation: 'fadeInUp 0.4s ease forwards' }}>
          <div className="work-card__image"><img src={assetPath("/images/painting-work.jpg")} alt="賃貸アパート外壁塗装工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} /><span className="work-card__category">外壁塗装</span></div>
          <div className="work-card__body"><div className="work-card__meta"><span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 伊丹市</span><span className="work-card__meta-item"><i className="fas fa-building"></i> アパート</span></div><h3 className="work-card__title">賃貸アパート外壁塗装工事</h3></div>
        </a>
        )}
        {isVisible('waterproofing') && (
        <a href="/works/ashiya-house-waterproofing-01" className="work-card reveal" style={{ animation: 'fadeInUp 0.4s ease forwards' }}>
          <div className="work-card__image"><img src={assetPath("/images/crack-inspection.jpg")} alt="戸建て住宅バルコニーFRP防水工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} /><span className="work-card__category">防水工事</span></div>
          <div className="work-card__body"><div className="work-card__meta"><span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 芦屋市</span><span className="work-card__meta-item"><i className="fas fa-home"></i> 戸建て</span></div><h3 className="work-card__title">戸建て住宅バルコニーFRP防水工事</h3></div>
        </a>
        )}
        {isVisible('waterproofing') && (
        <a href="/works/suita-factory-waterproofing-01" className="work-card reveal" style={{ animation: 'fadeInUp 0.4s ease forwards' }}>
          <div className="work-card__image"><img src={assetPath("/images/hero-main.jpg")} alt="工場屋上アスファルト防水改修工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} /><span className="work-card__category">防水工事</span></div>
          <div className="work-card__body"><div className="work-card__meta"><span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 吹田市</span><span className="work-card__meta-item"><i className="fas fa-industry"></i> 工場</span></div><h3 className="work-card__title">工場屋上アスファルト防水改修工事</h3></div>
        </a>
        )}
    </div>
    </div>
  </section>

  <section className="cta-section"><div className="container"><h2 className="cta-section__title reveal">同じような建物でお困りですか？</h2><p className="cta-section__text reveal">まずは無料の建物診断から。お気軽にご相談ください。</p><div className="cta-section__buttons reveal"><a href="/contact" className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a><a href="/simulation" className="btn btn--outline btn--lg"><i className="fas fa-calculator"></i> 見積もりシミュレーション</a></div></div></section>

  
    </main>
  );
}