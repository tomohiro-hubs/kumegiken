import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Painting</span><h1 className="page-hero__title">外壁塗装</h1><p className="page-hero__description">美観と保護を両立する、プロフェッショナルの外壁塗装</p></section>
  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href="/" className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href="/service" className="breadcrumb__link">サービス</a></li><li className="breadcrumb__separator">›</li><li>外壁塗装</li></ol></div></nav>

  <section className="content-section"><div className="container container--narrow"><div className="article-content">
    <div className="reveal" style={{ marginBottom: '40px' }}><img src={assetPath("/images/painting-work.jpg")} alt="外壁塗装の現場" style={{ aspectRatio: '16/9', width: '100%', objectFit: 'cover', borderRadius: '16px' }} /></div>
    <div className="reveal">
      <p>外壁塗装は、建物の美観を回復するだけでなく、外壁材を紫外線や風雨から保護する重要な工事です。適切なタイミングでの塗り替えが、建物の寿命を大きく延ばします。</p>
      <h2>外壁塗装の塗料の種類</h2>
      <table className="info-table" style={{ margin: '20px 0' }}><tbody>
        <tr><th>塗料</th><th>耐用年数</th><th>費用目安（㎡）</th><th>特徴</th></tr>
        <tr><td>シリコン塗料</td><td>10〜15年</td><td>2,500〜3,500円</td><td>コストパフォーマンス最優</td></tr>
        <tr><td>フッ素塗料</td><td>15〜20年</td><td>3,500〜5,000円</td><td>高耐久・ビルに最適</td></tr>
        <tr><td>無機塗料</td><td>20〜25年</td><td>4,500〜6,000円</td><td>最高クラスの耐久性</td></tr>
        <tr><td>ラジカル制御型</td><td>12〜16年</td><td>2,800〜4,000円</td><td>次世代のスタンダード</td></tr>
      </tbody></table>
      <h2>塗り替えのサイン</h2>
      <ul>
        <li>外壁を触ると白い粉がつく（チョーキング現象）</li>
        <li>ひび割れ（クラック）が目立つ</li>
        <li>カビ・コケ・藻が発生している</li>
        <li>塗膜の剥がれ・膨れがある</li>
        <li>前回の塗装から10年以上が経過</li>
      </ul>
      <h2>久米技建の外壁塗装の特徴</h2>
      <p>久米技建の外壁塗装は、下地処理に徹底的にこだわります。高圧洗浄、クラック補修、下地調整を丁寧に行った上で、下塗り・中塗り・上塗りの3工程をしっかりと施工。塗料の性能を最大限に引き出す施工で、長期間にわたる美観と保護効果を実現します。</p>
    </div>
  </div></div></section>

  <section className="cta-section"><div className="container"><h2 className="cta-section__title reveal">外壁塗装のご相談はお気軽に</h2><p className="cta-section__text reveal">建物の美観が気になったら、まずは無料診断から。</p><div className="cta-section__buttons reveal"><a href="/contact" className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a></div></div></section>

  
    </main>
  );
}