"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showTokens, setShowTokens] = useState({
    backToTop: false,
    fixedCta: false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowTokens({
        backToTop: scrollY > 400,
        fixedCta: scrollY > 600,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div>
              <div className="footer__brand">
                <div className="footer__logo">株式会社久米技建</div>
                <div className="footer__logo-sub">KUME GIKEN Co., Ltd.</div>
              </div>
              <div className="footer__company-info">
                会社名：株式会社久米技建<br />
                所在地：〒663-8152 兵庫県西宮市甲子園町5-7 河津ビル1F<br />
                電話番号：0798-27-5653<br />
                建設業許可番号：兵庫県知事 許可（般-3）第220086号<br />
                設立年：2016年<br />
                資本金：記載準備中<br />
                営業時間：平日 9:00〜18:00
              </div>
            </div>

            <div>
              <div className="footer__nav-title">サービス</div>
              <Link href="/service/large-scale-repair" className="footer__nav-link">大規模修繕事業</Link>
              <Link href="/service/waterproofing" className="footer__nav-link">防水事業</Link>
              <Link href="/service/painting" className="footer__nav-link">外壁塗装</Link>
              <Link href="/dive-survey" className="footer__nav-link">水中点検</Link>
            </div>

            <div>
              <div className="footer__nav-title">コンテンツ</div>
              <Link href="/#reason" className="footer__nav-link">選ばれる理由</Link>
              <Link href="/works" className="footer__nav-link">施工事例</Link>
              <Link href="/#flow" className="footer__nav-link">施工の流れ</Link>
              <Link href="/#voice" className="footer__nav-link">お客様の声</Link>
              <Link href="/column" className="footer__nav-link">コラム</Link>
              <Link href="/simulation" className="footer__nav-link">見積もりシミュレーション</Link>
            </div>

            <div>
              <div className="footer__nav-title">企業情報</div>
              <Link href="/company" className="footer__nav-link">会社概要</Link>
              <Link href="/company/message" className="footer__nav-link">代表メッセージ</Link>
              <Link href="/company/staff" className="footer__nav-link">スタッフ紹介</Link>
              <Link href="/company/area" className="footer__nav-link">対応エリア</Link>
              <Link href="/recruit" className="footer__nav-link">採用情報</Link>
              <Link href="/contact" className="footer__nav-link">お問い合わせ</Link>
              <Link href="/partner" className="footer__nav-link">協力会社お問い合わせ</Link>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__copyright">&copy; 2026 KUME GIKEN Co., Ltd. All Rights Reserved.</div>
            <div className="footer__bottom-links">
              <Link href="/privacy" className="footer__bottom-link">プライバシーポリシー</Link>
              <Link href="#" className="footer__bottom-link">サイトマップ</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ========== FIXED CTA (Mobile) ========== */}
      <div className={`fixed-cta ${showTokens.fixedCta ? 'visible' : ''}`}>
        <div className="fixed-cta__inner">
          <a href="tel:0798-27-5653" className="fixed-cta__btn fixed-cta__btn--phone">
            <i className="fas fa-phone-alt"></i> 電話で相談
          </a>
          <Link href="/contact" className="fixed-cta__btn fixed-cta__btn--contact">
            <i className="fas fa-envelope"></i> 無料見積もり
          </Link>
        </div>
      </div>

      {/* ========== FIXED CTA (PC Float) ========== */}
      <div className={`fixed-cta__float ${showTokens.fixedCta ? 'visible' : ''}`}>
        <Link href="/contact" className="fixed-cta__contact-card" aria-label="お問い合わせはこちら">
          <span className="fixed-cta__contact-sub">＼ ご相談・お見積りは無料です ／</span>
          <span className="fixed-cta__contact-main">
            <span className="fixed-cta__contact-icon">
              <i className="far fa-envelope"></i>
            </span>
            <span>お問い合わせはこちら</span>
            <span className="fixed-cta__contact-arrow">›</span>
          </span>
        </Link>
      </div>

      {/* ========== BACK TO TOP ========== */}
      <button 
        className={`back-to-top ${showTokens.backToTop ? 'visible' : ''}`} 
        aria-label="ページ上部へ戻る"
        onClick={scrollToTop}
      >
        <i className="fas fa-chevron-up"></i>
      </button>
    </>
  );
}
