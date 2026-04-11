import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Works</span><h1 className="page-hero__title">大阪市 ビル 大規模修繕工事</h1></section>
  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/works")} className="breadcrumb__link">施工事例</a></li><li className="breadcrumb__separator">›</li><li>大阪市 ビル 大規模修繕工事</li></ol></div></nav>

  <section className="content-section"><div className="container container--narrow">
    <table className="info-table" style={{ marginBottom: '40px' }}><tbody>
      <tr><th>エリア</th><td>大阪府大阪市中央区</td></tr>
      <tr><th>建物種別</th><td>オフィスビル（SRC造・8階建て）</td></tr>
      <tr><th>工事内容</th><td>外壁補修・塗装・屋上防水・シーリング打替え</td></tr>
      <tr><th>施工面積</th><td>外壁約2,000㎡ / 屋上約300㎡</td></tr>
      <tr><th>工期</th><td>約3ヶ月</td></tr>
      <tr><th>費用目安</th><td>2,000〜3,000万円</td></tr>
    </tbody></table>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' }} className="reveal">
      <div><img src={assetPath("/images/deteriorated-building.jpg")} alt="施工前" style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '8px' }} /><p style={{ textAlign: 'center', fontWeight: '600', marginTop: '8px', color: 'var(--color-text-light)' }}>施工前</p></div>
      <div><img src={assetPath("/images/building-completed.jpg")} alt="施工後" style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '8px' }} /><p style={{ textAlign: 'center', fontWeight: '600', marginTop: '8px', color: 'var(--color-text-light)' }}>施工後</p></div>
    </div>
    <div className="article-content reveal">
      <h2>施工内容</h2>
      <p>築25年のオフィスビルの大規模修繕工事です。外壁のクラック補修、タイル補修、全面塗装、屋上防水改修、シーリング全面打替えを一括で施工しました。テナント様の営業に支障がないよう、工程管理と騒音・粉塵対策に特に配慮しました。</p>
      <h2>施工のポイント</h2>
      <ul>
        <li>テナントビルのため、営業時間外の作業を中心に工程を組成</li>
        <li>外壁タイルの浮き調査は全面打診検査を実施</li>
        <li>屋上防水はウレタン通気緩衝工法で改修</li>
        <li>シーリングは変成シリコン系で打替え</li>
      </ul>
    </div>
    <div style={{ textAlign: 'center', marginTop: '48px' }}><a href={routePath("/works")} className="btn btn--outline-dark">← 施工事例一覧に戻る</a></div>
  </div></section>

  <section className="cta-section"><div className="container"><h2 className="cta-section__title">大規模修繕のご相談はお気軽に</h2><div className="cta-section__buttons"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a></div></div></section>

  
    </main>
  );
}