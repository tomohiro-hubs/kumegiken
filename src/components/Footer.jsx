"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/lib/siteConfig';

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
                東京営業所：〒178-0063 東京都練馬区東大泉1-19-1-1F<br />
                電話番号：{siteConfig.phone.display}<br />
                建設業許可番号：兵庫県知事 許可（般-3）第220086号<br />
                設立年：創業2016年　設立2021年<br />
                資本金：500万円<br />
                営業時間：平日 9:00〜18:00
              </div>
            </div>

            <div>
              <div className="footer__nav-title">サービス</div>
              <Link prefetch={false} href="/service/large-scale-repair" className="footer__nav-link">大規模修繕事業</Link>
              <Link prefetch={false} href="/service/waterproofing" className="footer__nav-link">防水事業</Link>
              <Link prefetch={false} href="/service/painting" className="footer__nav-link">外壁塗装</Link>
              <Link prefetch={false} href="/dive-survey" className="footer__nav-link">水中点検</Link>
            </div>

            <div>
              <div className="footer__nav-title">コンテンツ</div>
              <Link prefetch={false} href="/#reason" className="footer__nav-link">選ばれる理由</Link>
              <Link prefetch={false} href="/works" className="footer__nav-link">施工事例</Link>
              <Link prefetch={false} href="/#flow" className="footer__nav-link">施工の流れ</Link>
              <Link prefetch={false} href="/#voice" className="footer__nav-link">お客様の声</Link>
              <Link prefetch={false} href="/column" className="footer__nav-link">コラム</Link>
              <Link prefetch={false} href="/simulation" className="footer__nav-link">見積もりシミュレーション</Link>
            </div>

            <div>
              <div className="footer__nav-title">企業情報</div>
              <Link prefetch={false} href="/company" className="footer__nav-link">会社概要</Link>
              <Link prefetch={false} href="/company/message" className="footer__nav-link">代表メッセージ</Link>
              <Link prefetch={false} href="/company/staff" className="footer__nav-link">スタッフ紹介</Link>
              <Link prefetch={false} href="/company/area" className="footer__nav-link">対応エリア</Link>
              <Link prefetch={false} href="/recruit" className="footer__nav-link">採用情報</Link>
              <Link prefetch={false} href="/contact" className="footer__nav-link">お問い合わせ</Link>
              <Link prefetch={false} href="/partner" className="footer__nav-link">協力会社お問い合わせ</Link>
            </div>
          </div>

          <div className="footer__bottom">
            <div className="footer__copyright">&copy; 2026 KUME GIKEN Co., Ltd. All Rights Reserved.</div>
            <div className="footer__bottom-links">
              <Link prefetch={false} href="/privacy" className="footer__bottom-link">プライバシーポリシー</Link>
              <Link prefetch={false} href="/editorial-policy" className="footer__bottom-link">編集・監修ポリシー</Link>
              <Link prefetch={false} href="/citations-policy" className="footer__bottom-link">引用・出典ポリシー</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* ========== FIXED CTA (Mobile) ========== */}
      <div className={`fixed-cta ${showTokens.fixedCta ? 'visible' : ''}`}>
        <div className="fixed-cta__inner">
          <a href={`tel:${siteConfig.phone.tel}`} className="fixed-cta__btn fixed-cta__btn--phone">
            <i className="fas fa-phone-alt"></i> 電話で相談
          </a>
          <Link prefetch={false} href="/contact" className="fixed-cta__btn fixed-cta__btn--contact">
            <i className="fas fa-envelope"></i> 無料見積もり
          </Link>
        </div>
      </div>

      {/* ========== FIXED CTA (PC Float) ========== */}
      <div className={`fixed-cta__float ${showTokens.fixedCta ? 'visible' : ''}`}>
        <Link prefetch={false} href="/contact" className="fixed-cta__contact-card" aria-label="お問い合わせはこちら">
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
