"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/lib/siteConfig';

export default function Footer() {
  const pathname = usePathname();
  const isUchidaCopyPage = pathname === '/top-copy2' || pathname === '/top-copy2/';
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

  if (isUchidaCopyPage) {
    return (
      <footer className="uchida-reference-footer">
        <div className="uchida-reference-footer__brand">
          <span>株式会社久米技建</span>
          <small>Kume Giken Co., Ltd.</small>
        </div>
        <nav aria-label="フッターナビゲーション">
          <Link prefetch={false} href="/company">久米技建とは</Link>
          <Link prefetch={false} href="/service">サービス</Link>
          <Link prefetch={false} href="/works">施工事例</Link>
          <Link prefetch={false} href="/column">お知らせ</Link>
          <Link prefetch={false} href="/recruit">採用情報</Link>
          <Link prefetch={false} href="/contact">お問い合わせ</Link>
        </nav>
        <p>Copyright © 株式会社久米技建. All rights reserved.</p>
      </footer>
    );
  }

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
              <Link prefetch={false} href="/service/building-inspection" className="footer__nav-link">建物無料診断</Link>
              <Link prefetch={false} href="/service/large-scale-repair" className="footer__nav-link">大規模修繕事業</Link>
              <Link prefetch={false} href="/service/waterproofing" className="footer__nav-link">防水事業</Link>
              <Link prefetch={false} href="/service/sealing" className="footer__nav-link">シーリング工事</Link>
              <Link prefetch={false} href="/service/painting" className="footer__nav-link">外壁塗装</Link>
              <Link prefetch={false} href="/service/leak-repair" className="footer__nav-link">雨漏り調査・補修</Link>
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
              <Link prefetch={false} href="/company/history" className="footer__nav-link">沿革</Link>
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

      <div className={`fixed-cta ${showTokens.fixedCta ? 'visible' : ''}`}>
        <div className="fixed-cta__inner">
          <a href={`tel:${siteConfig.phone.tel}`} className="fixed-cta__btn fixed-cta__btn--phone">
            <i className="fas fa-phone-alt"></i>
            <span>電話で相談</span>
          </a>
          <Link prefetch={false} href="/contact" className="fixed-cta__btn fixed-cta__btn--contact">
            <i className="fas fa-envelope"></i>
            <span>無料診断・見積もり</span>
          </Link>
        </div>
      </div>

      {/* ========== FIXED CTA (PC Float) ========== */}
      <div className={`fixed-cta__float ${showTokens.fixedCta ? 'visible' : ''}`}>
        <Link prefetch={false} href="/contact" className="fixed-cta__contact-card" aria-label="無料診断・お見積りはこちら">
          <span className="fixed-cta__contact-sub">＼ 現地調査・お見積りは無料です ／</span>
          <span className="fixed-cta__contact-main">
            <span className="fixed-cta__contact-icon">
              <i className="far fa-envelope"></i>
            </span>
            <span>無料診断・お見積りはこちら</span>
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
