import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Works</span><h1 className="page-hero__title">神戸市 マンション 外壁塗装工事</h1></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/works")} className="breadcrumb__link">施工事例</a></li><li className="breadcrumb__separator">›</li><li>神戸市 マンション 外壁塗装工事</li></ol></div></nav>
<section className="content-section"><div className="container container--narrow">
  <table className="info-table" style={{ marginBottom: '40px' }}><tbody><tr><th>エリア</th><td>兵庫県神戸市東灘区</td></tr><tr><th>建物種別</th><td>分譲マンション（RC造・7階建て・48戸）</td></tr><tr><th>工事内容</th><td>外壁塗装工事（フッ素塗料）</td></tr><tr><th>施工面積</th><td>約1,800㎡</td></tr><tr><th>工期</th><td>約1.5ヶ月</td></tr><tr><th>費用目安</th><td>800〜1,200万円</td></tr></tbody></table>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }} className="reveal"><div><img src={assetPath("/images/deteriorated-building.jpg")} alt="施工前" style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '8px' }} /><p style={{ textAlign: 'center', fontWeight: '600', marginTop: '8px', color: 'var(--color-text-light)' }}>施工前</p></div><div><img src={assetPath("/images/building-completed.jpg")} alt="施工後" style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '8px' }} /><p style={{ textAlign: 'center', fontWeight: '600', marginTop: '8px', color: 'var(--color-text-light)' }}>施工後</p></div></div>
  <div className="article-content reveal">
    <h2>施工内容</h2><p>築15年の分譲マンションの外壁塗装工事です。チョーキング現象が進行し、一部にクラックも発生していました。フッ素塗料を採用し、15〜20年の耐久性を確保。下地処理を徹底的に行い、長期にわたる美観と保護を実現しました。</p>
    <h2>施工のポイント</h2><ul><li>高圧洗浄による徹底的な汚れ除去</li><li>クラック部分のVカット処理と樹脂注入</li><li>フッ素塗料3回塗りで高耐久仕上げ</li><li>居住者様の生活に配慮した工程管理</li></ul>
  </div>
  <div style={{ textAlign: 'center', marginTop: '48px' }}><a href={routePath("/works")} className="btn btn--outline-dark">← 施工事例一覧に戻る</a></div>
</div></section>
<section className="cta-section"><div className="container"><h2 className="cta-section__title">外壁塗装のご相談はお気軽に</h2><div className="cta-section__buttons"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a></div></div></section>
  
    </main>
  );
}