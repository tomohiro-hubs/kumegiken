import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Sealing</span><h1 className="page-hero__title">シーリング工事</h1><p className="page-hero__description">建物の目地を守り、雨水侵入を防ぐ重要な防水工事</p></section>
  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href="/" className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href="/service" className="breadcrumb__link">サービス</a></li><li className="breadcrumb__separator">›</li><li>シーリング工事</li></ol></div></nav>

  <section className="content-section"><div className="container container--narrow"><div className="article-content">
    <div className="reveal" style={{ marginBottom: '40px' }}><img src={assetPath("/images/sealing-work.jpg")} alt="シーリング工事の現場" style={{ aspectRatio: '16/9', width: '100%', objectFit: 'cover', borderRadius: '16px' }} /></div>
    <div className="reveal">
      <p>シーリング（コーキング）は、建物の外壁パネル間の目地やサッシ周り、ALC板の継ぎ目などに充填されるゴム状の防水材です。経年劣化により硬化・ひび割れが発生し、そこから雨水が侵入して建物内部を傷めてしまいます。</p>
      <h2>シーリングの劣化サイン</h2>
      <ul>
        <li>シーリングが硬くなり弾力がない</li>
        <li>ひび割れ・亀裂が入っている</li>
        <li>シーリングが痩せて隙間ができている</li>
        <li>シーリングが剥離して浮いている</li>
        <li>カビや汚れが目立つ</li>
      </ul>
      <h2>シーリング工事の種類</h2>
      <h3>打ち替え工事</h3>
      <p>既存のシーリング材をすべて撤去し、新しいシーリング材を充填する工法。劣化が進んでいる場合に推奨されます。最も確実な補修方法です。</p>
      <h3>打ち増し工事</h3>
      <p>既存のシーリング材の上に新しいシーリング材を重ねて充填する工法。既存材が比較的健全な場合に適用されます。コストを抑えられますが、適用条件があります。</p>
      <h2>費用の目安</h2>
      <p>シーリング工事の費用は、目地の長さと深さ、使用するシーリング材の種類によって異なります。一般的な目安として、打ち替えで800〜1,200円/m、打ち増しで500〜800円/m程度です。</p>
    </div>
  </div></div></section>

  <section className="cta-section"><div className="container"><h2 className="cta-section__title">シーリング工事のご相談はお気軽に</h2><div className="cta-section__buttons"><a href="/contact" className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a></div></div></section>

  
    </main>
  );
}