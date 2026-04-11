import Link from "next/link";

export default function Page() {
  return (
    <main>
      <section className="page-hero dive-hero" style={{ paddingBottom: '100px' }}>
  <span className="page-hero__label">Dive Survey</span>
  <h1 className="page-hero__title" style={{ fontSize: 'clamp(24px,4vw,42px)' }}>水中点検・調査事業</h1>
  <p className="page-hero__description">ダム・港湾施設・橋梁の水中部分を、<br />専門ダイバーが安全かつ正確に点検・調査</p>
  <div style={{ marginTop: '24px' }}><a href="/contact" className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> お問い合わせ</a></div>
</section>

<section className="content-section"><div className="container">
  <div className="reveal" style={{ marginBottom: '48px' }}><img src="/images/dive-survey.jpg" alt="水中点検の様子" style={{ width: '100%', borderRadius: '16px', aspectRatio: '16/9', objectFit: 'cover' }} /></div>
  <div className="section-heading reveal"><span className="section-heading__en">Features</span><h2 className="section-heading__ja">水中点検事業の特徴</h2><span className="section-heading__line"></span></div>
  <div className="dive-feature">
    <div className="dive-feature-card reveal"><div className="dive-feature-card__icon">🤿</div><h3 className="dive-feature-card__title">専門ダイバーによる点検</h3><p className="dive-feature-card__text">潜水士の資格を持つ専門ダイバーが、水中構造物の劣化状況を直接確認。目視では確認できない部分まで詳細に調査します。</p></div>
    <div className="dive-feature-card reveal"><div className="dive-feature-card__icon">📹</div><h3 className="dive-feature-card__title">水中映像による記録</h3><p className="dive-feature-card__text">水中カメラを使用した映像記録。点検結果を映像付きレポートとしてご提出。経年変化の比較にも活用いただけます。</p></div>
    <div className="dive-feature-card reveal"><div className="dive-feature-card__icon">📋</div><h3 className="dive-feature-card__title">詳細な診断レポート</h3><p className="dive-feature-card__text">建築物の診断で培った「正直な診断」の精神を水中点検にも適用。客観的で信頼性の高いレポートをお届けします。</p></div>
  </div>
</div></section>

<section className="content-section content-section--gray"><div className="container container--narrow">
  <div className="article-content reveal">
    <h2>対応可能な施設</h2>
    <ul>
      <li>ダム（コンクリートダム、フィルダム等）</li>
      <li>港湾施設（岸壁、防波堤、桟橋等）</li>
      <li>橋梁（橋脚水中部、橋台基礎等）</li>
      <li>取水施設・放水路</li>
      <li>養殖施設</li>
      <li>その他水中構造物</li>
    </ul>
    <h2>点検内容</h2>
    <ul>
      <li>水中構造物のコンクリート劣化調査</li>
      <li>鋼構造物の腐食・損傷調査</li>
      <li>堆積物の状況調査</li>
      <li>生物付着状況の調査</li>
      <li>水中部の漏水調査</li>
    </ul>
  </div>
</div></section>

<section className="cta-section"><div className="container"><h2 className="cta-section__title">水中点検のご相談</h2><p className="cta-section__text">まずはお気軽にお問い合わせください。</p><div className="cta-section__phone"><a href="tel:0798-78-6880" className="cta-section__phone-number" style={{ color: 'white', textDecoration: 'none' }}><i className="fas fa-phone-alt"></i> 0798-78-6880</a></div><div className="cta-section__buttons"><a href="/contact" className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> お問い合わせ</a></div></div></section>

  
    </main>
  );
}