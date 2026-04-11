import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  return (
    <main>
      <section className="page-hero" style={{ background: 'linear-gradient(135deg,#6f3030,#4f2020)' }}>
    <span className="page-hero__label">Leak Repair</span>
    <h1 className="page-hero__title">雨漏り調査・補修</h1>
    <p className="page-hero__description">雨漏りの原因を突き止め、根本から解決。緊急対応もお任せください。</p>
    <div style={{ marginTop: '24px' }}><a href="tel:0798-78-6880" className="btn btn--primary btn--lg"><i className="fas fa-phone-alt"></i> 今すぐ電話相談 0798-78-6880</a></div>
  </section>
  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/service")} className="breadcrumb__link">サービス</a></li><li className="breadcrumb__separator">›</li><li>雨漏り調査・補修</li></ol></div></nav>

  <section className="content-section"><div className="container container--narrow"><div className="article-content">
    <div className="reveal" style={{ marginBottom: '40px' }}><img src={assetPath("/images/leak-repair.jpg")} alt="雨漏り調査・補修の現場" style={{ aspectRatio: '16/9', width: '100%', objectFit: 'cover', borderRadius: '16px' }} /></div>
    <div style={{ background: '#fff3e0', border: '2px solid #e8740c', borderRadius: '12px', padding: '24px', marginBottom: '40px', textAlign: 'center' }} className="reveal">
      <p style={{ fontSize: '18px', fontWeight: '700', color: '#e8740c', marginBottom: '8px' }}><i className="fas fa-exclamation-triangle"></i> 雨漏りは放置すると被害が拡大します</p>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)' }}>建物内部への水の侵入は、構造体の腐食やカビの発生など深刻な被害を引き起こします。<br />早期発見・早期補修が被害を最小限に抑える鍵です。</p>
    </div>
    <div className="reveal">
      <p>雨漏りは、建物トラブルの中でも最も緊急性が高い問題の一つです。久米技建では、防水工事の専門技術を活かし、雨漏りの原因を正確に調査・特定し、根本的な補修工事を行います。</p>
      <h2>雨漏りの主な原因</h2>
      <ul>
        <li><strong>屋上・屋根の防水層劣化</strong> — 防水層のひび割れ、膨れ、剥離</li>
        <li><strong>外壁のクラック</strong> — 構造クラックやヘアクラックからの雨水侵入</li>
        <li><strong>シーリングの劣化</strong> — 目地やサッシ周りのシーリング硬化・剥離</li>
        <li><strong>排水不良</strong> — ドレン（排水口）の詰まりや勾配不良</li>
        <li><strong>建物の経年劣化</strong> — コンクリートの中性化、鉄筋の腐食膨張</li>
      </ul>
      <h2>雨漏り調査の方法</h2>
      <h3>目視調査</h3>
      <p>屋上、外壁、シーリング部分を目視で確認し、劣化箇所を特定します。</p>
      <h3>散水調査</h3>
      <p>疑わしい箇所に散水を行い、雨漏りの再現を確認。漏水ルートを特定します。</p>
      <h3>赤外線調査</h3>
      <p>赤外線サーモグラフィーを使い、壁面内部の水分を非破壊で検出します。</p>
      <h2>緊急対応について</h2>
      <p>急な雨漏りでお困りの場合は、まずお電話ください。状況を確認の上、できるだけ早急に現地調査にお伺いいたします。応急処置が必要な場合は、調査と合わせて対応いたします。</p>
    </div>
  </div></div></section>

  <section className="cta-section" style={{ background: 'linear-gradient(135deg,#6f3030,#4f2020)' }}><div className="container"><h2 className="cta-section__title">雨漏りでお困りの方は今すぐお電話を</h2><div className="cta-section__phone"><a href="tel:0798-78-6880" className="cta-section__phone-number" style={{ color: 'white', textDecoration: 'none' }}><i className="fas fa-phone-alt"></i> 0798-78-6880</a><div className="cta-section__phone-sub">受付時間：平日 9:00〜18:00</div></div><div className="cta-section__buttons"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 緊急のお問い合わせ</a></div></div></section>

  
    </main>
  );
}