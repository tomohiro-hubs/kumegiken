import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Works</span><h1 className="page-hero__title">西宮市 マンション 屋上防水工事</h1></section>
  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href="/" className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href="/works" className="breadcrumb__link">施工事例</a></li><li className="breadcrumb__separator">›</li><li>西宮市 マンション 屋上防水工事</li></ol></div></nav>

  <section className="content-section">
    <div className="container container--narrow">
      <table className="info-table" style={{ marginBottom: '40px' }}><tbody>
        <tr><th>エリア</th><td>兵庫県西宮市</td></tr>
        <tr><th>建物種別</th><td>分譲マンション（RC造・5階建て）</td></tr>
        <tr><th>工事内容</th><td>屋上ウレタン塗膜防水改修工事</td></tr>
        <tr><th>施工面積</th><td>約350㎡</td></tr>
        <tr><th>工期</th><td>約2週間</td></tr>
        <tr><th>費用目安</th><td>200〜300万円</td></tr>
      </tbody></table>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }} className="reveal">
        <div>
          <img src={assetPath("/images/deteriorated-building.jpg")} alt="施工前" style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            <p style={{ textAlign: 'center', fontWeight: '600', marginTop: '8px', color: 'var(--color-text-light)' }}>施工前</p>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '8px' }}>Before：防水層の劣化・ひび割れ</p>
        </div>
        <div>
          <img src={assetPath("/images/waterproofing-rooftop.jpg")} alt="施工後" style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '8px' }} />
            <p style={{ textAlign: 'center', fontWeight: '600', marginTop: '8px', color: 'var(--color-text-light)' }}>施工後</p>
          <p style={{ textAlign: 'center', fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '8px' }}>After：ウレタン防水施工完了</p>
        </div>
      </div>

      <div className="article-content reveal">
        <h2>施工内容</h2>
        <p>築20年の分譲マンション屋上の防水改修工事です。既存のアスファルト防水層が経年劣化により、ひび割れや膨れが多数発生しており、一部で漏水も確認されていました。</p>
        <p>管理組合様との協議の上、既存防水層の上からウレタン塗膜防水（通気緩衝工法）で改修する計画としました。通気緩衝シートを下地に敷設することで、既存防水層からの湿気を逃がしながら、新規防水層の膨れを防止しています。</p>

        <h2>施工のポイント</h2>
        <ul>
          <li>既存防水層の状態を詳細に調査し、最適な工法を選定</li>
          <li>通気緩衝工法の採用により、既存防水層の撤去が不要でコスト削減</li>
          <li>脱気筒を適切に配置し、防水層下の湿気を効果的に排出</li>
          <li>ドレン（排水口）周りの入念な防水処理</li>
          <li>トップコートにより紫外線劣化を防止</li>
        </ul>

        <h2>お客様の声</h2>
        <p>「築20年で初めての防水改修でしたが、診断レポートで現状がよくわかり、安心して工事を任せられました。工事中も住民への配慮が行き届いており、管理組合としても満足しています。」（管理組合理事長 様）</p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }}>
        <a href="/works" className="btn btn--outline-dark">← 施工事例一覧に戻る</a>
      </div>
    </div>
  </section>

  <section className="cta-section"><div className="container"><h2 className="cta-section__title">同じような工事をご検討ですか？</h2><p className="cta-section__text">まずは無料の建物診断から。お気軽にご相談ください。</p><div className="cta-section__buttons"><a href="/contact" className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a></div></div></section>

  
    </main>
  );
}