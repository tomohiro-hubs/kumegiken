"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/siteConfig';

export default function Header() {
  const pathname = usePathname();
  const isTopCopyPage =
    pathname === '/' ||
    pathname === '/top-copy' ||
    pathname === '/top-copy/' ||
    pathname === '/top-copy3' ||
    pathname === '/top-copy3/';
  const isUchidaCopyPage = pathname === '/top-copy2' || pathname === '/top-copy2/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  if (isUchidaCopyPage) {
    return (
      <header className="uchida-reference-header" id="header">
        <a href="/" className="uchida-reference-header__brand" onClick={closeMobileMenu}>
          <span>株式会社久米技建</span>
          <small>Kume Giken Co., Ltd.</small>
        </a>
        <a href="/contact" className="uchida-reference-header__cta">
          建物相談の方へ <b>→</b>
        </a>
        <button
          className={`uchida-reference-header__menu ${isMobileMenuOpen ? 'active' : ''}`}
          aria-label="メニュー"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
        </button>
      </header>
    );
  }

  return (
    <>
      <header className={`header ${isScrolled ? 'header--scrolled' : ''} ${isTopCopyPage ? 'header--top-copy' : ''}`} id="header">
        <div className="header__inner">
          <div className="header__logo">
            <Link prefetch={false} href="/" onClick={closeMobileMenu}>
              <div>
                <span className="header__logo-text">株式会社久米技建</span>
                <span className="header__logo-sub">KUME GIKEN Co., Ltd.</span>
              </div>
            </Link>
          </div>
          <nav className="header__nav">
            <div className="header__nav-item">
              <Link prefetch={false} href="/company" className="header__nav-link header__nav-link--has-sub">会社情報</Link>
              <div className="header__dropdown">
                <Link prefetch={false} href="/company" className="header__dropdown-link">会社概要</Link>
                <Link prefetch={false} href="/company/message" className="header__dropdown-link">代表メッセージ</Link>
                <Link prefetch={false} href="/company/staff" className="header__dropdown-link">スタッフ紹介</Link>
                <Link prefetch={false} href="/company/area" className="header__dropdown-link">対応エリア</Link>
                <Link prefetch={false} href="/company/history" className="header__dropdown-link">沿革</Link>
              </div>
            </div>
            <Link prefetch={false} href="/#reason" className="header__nav-link">選ばれる理由</Link>
            <div className="header__nav-item">
              <Link prefetch={false} href="/service" className="header__nav-link header__nav-link--has-sub">サービス</Link>
              <div className="header__dropdown">
                <Link prefetch={false} href="/service/building-inspection" className="header__dropdown-link">建物無料診断</Link>
                <Link prefetch={false} href="/service/large-scale-repair" className="header__dropdown-link">大規模修繕事業</Link>
                <Link prefetch={false} href="/service/waterproofing" className="header__dropdown-link">防水事業</Link>
                <Link prefetch={false} href="/service/sealing" className="header__dropdown-link">シーリング工事</Link>
                <Link prefetch={false} href="/service/painting" className="header__dropdown-link">外壁塗装</Link>
              </div>
            </div>
            <Link prefetch={false} href="/#flow" className="header__nav-link">施工の流れ</Link>
            <Link prefetch={false} href="/works" className="header__nav-link">施工事例</Link>
            <Link prefetch={false} href="/#voice" className="header__nav-link">お客様の声</Link>
            <Link prefetch={false} href="/column" className="header__nav-link">コラム</Link>
            <Link prefetch={false} href="/recruit" className="header__nav-link">採用情報</Link>
            <Link prefetch={false} href="/contact" className="header__nav-link">お問い合わせ</Link>
          </nav>
          <div className="header__cta">
            <p className="header__cta-lead">お電話でのお問い合わせはこちら</p>
            <a href={`tel:${siteConfig.phone.tel}`} className="header__cta-phone" aria-label={`${siteConfig.phone.display}へ電話する`}>
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <span>{siteConfig.phone.display}</span>
            </a>
            <p className="header__cta-hours">受付時間 9:00-18:00(月〜金)</p>
          </div>
          <button 
            className={`header__hamburger ${isMobileMenuOpen ? 'active' : ''}`} 
            aria-label="メニュー"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav"
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
      <nav id="mobile-nav" className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link prefetch={false} href="/" className="mobile-nav__link" onClick={closeMobileMenu}>トップページ</Link>
        <Link prefetch={false} href="/company" className="mobile-nav__link" onClick={closeMobileMenu}>会社情報</Link>
        <Link prefetch={false} href="/#reason" className="mobile-nav__link" onClick={closeMobileMenu}>選ばれる理由</Link>
        <Link prefetch={false} href="/service" className="mobile-nav__link" onClick={closeMobileMenu}>サービス一覧</Link>
        <Link prefetch={false} href="/#flow" className="mobile-nav__link" onClick={closeMobileMenu}>施工の流れ</Link>
        <Link prefetch={false} href="/works" className="mobile-nav__link" onClick={closeMobileMenu}>施工事例</Link>
        <Link prefetch={false} href="/#voice" className="mobile-nav__link" onClick={closeMobileMenu}>お客様の声</Link>
        <Link prefetch={false} href="/column" className="mobile-nav__link" onClick={closeMobileMenu}>コラム</Link>
        <Link prefetch={false} href="/recruit" className="mobile-nav__link" onClick={closeMobileMenu}>採用情報</Link>
        <div className="mobile-nav__cta">
          <a href={`tel:${siteConfig.phone.tel}`} className="btn btn--outline"><i className="fas fa-phone"></i> 電話で相談</a>
          <Link prefetch={false} href="/contact" className="btn btn--primary" onClick={closeMobileMenu}><i className="fas fa-envelope"></i> 無料見積もり</Link>
        </div>
      </nav>
    </>
  );
}
