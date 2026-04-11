"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => {
      const next = !prev;
      if (typeof document !== 'undefined') {
        document.body.style.overflow = next ? 'hidden' : '';
      }
      return next;
    });
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
  };

  const toggleSubMenu = (e, menuId) => {
    e.preventDefault();
    setOpenSubMenus(prev => ({
      ...prev,
      [menuId]: !prev[menuId]
    }));
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''}`} id="header">
        <div className="header__inner">
          <div className="header__logo">
            <Link href="/" onClick={closeMobileMenu}>
              <div>
                <span className="header__logo-text">株式会社久米技建</span>
                <span className="header__logo-sub">KUME GIKEN Co., Ltd.</span>
              </div>
            </Link>
          </div>
          <nav className="header__nav">
            <div className="header__nav-item">
              <Link href="/company" className="header__nav-link header__nav-link--has-sub">会社情報</Link>
              <div className="header__dropdown">
                <Link href="/company" className="header__dropdown-link">会社概要</Link>
                <Link href="/company/message" className="header__dropdown-link">代表メッセージ</Link>
                <Link href="/company/staff" className="header__dropdown-link">スタッフ紹介</Link>
                <Link href="/company/area" className="header__dropdown-link">対応エリア</Link>
                <Link href="/company/history" className="header__dropdown-link">沿革</Link>
              </div>
            </div>
            <Link href="/#reason" className="header__nav-link">選ばれる理由</Link>
            <div className="header__nav-item">
              <Link href="/service" className="header__nav-link header__nav-link--has-sub">サービス</Link>
              <div className="header__dropdown">
                <Link href="/service/large-scale-repair" className="header__dropdown-link">大規模修繕事業</Link>
                <Link href="/service/waterproofing" className="header__dropdown-link">防水事業</Link>
                <Link href="/service/painting" className="header__dropdown-link">外壁塗装</Link>
                <Link href="/dive-survey" className="header__dropdown-link">水中点検</Link>
              </div>
            </div>
            <Link href="/#flow" className="header__nav-link">施工の流れ</Link>
            <Link href="/works" className="header__nav-link">施工事例</Link>
            <Link href="/#voice" className="header__nav-link">お客様の声</Link>
            <Link href="/column" className="header__nav-link">コラム</Link>
            <Link href="/recruit" className="header__nav-link">採用情報</Link>
          </nav>
          <div className="header__cta">
            <Link href="/contact" className="btn btn--primary btn--sm"><i className="fas fa-envelope"></i> お問い合わせ</Link>
          </div>
          <button 
            className={`header__hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
            aria-label="メニュー"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link href="/" className="mobile-nav__link" onClick={closeMobileMenu}>トップページ</Link>
        <Link href="/company" className="mobile-nav__link" onClick={closeMobileMenu}>会社情報</Link>
        <Link href="/#reason" className="mobile-nav__link" onClick={closeMobileMenu}>選ばれる理由</Link>
        <Link href="/service" className="mobile-nav__link" onClick={closeMobileMenu}>サービス一覧</Link>
        <Link href="/#flow" className="mobile-nav__link" onClick={closeMobileMenu}>施工の流れ</Link>
        <Link href="/works" className="mobile-nav__link" onClick={closeMobileMenu}>施工事例</Link>
        <Link href="/#voice" className="mobile-nav__link" onClick={closeMobileMenu}>お客様の声</Link>
        <Link href="/column" className="mobile-nav__link" onClick={closeMobileMenu}>コラム</Link>
        <Link href="/recruit" className="mobile-nav__link" onClick={closeMobileMenu}>採用情報</Link>
        <div className="mobile-nav__cta">
          <a href="tel:0798-78-6880" className="btn btn--outline"><i className="fas fa-phone"></i> 電話で相談</a>
          <Link href="/contact" className="btn btn--primary" onClick={closeMobileMenu}><i className="fas fa-envelope"></i> 無料見積もり</Link>
        </div>
      </nav>
    </>
  );
}
