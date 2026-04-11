import Link from "next/link";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Building Inspection</span><h1 className="page-hero__title">建物診断</h1><p className="page-hero__description">久米技建の強み「正直な診断」。建物の現状を正確に把握し、最適な修繕計画を立案</p></section>
  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href="/" className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href="/service" className="breadcrumb__link">サービス</a></li><li className="breadcrumb__separator">›</li><li>建物診断</li></ol></div></nav>

  <section className="content-section"><div className="container container--narrow"><div className="article-content">
    <div className="reveal" style={{ marginBottom: '40px' }}><img src={assetPath("/images/inspection-scene.jpg")} alt="建物診断の現場" style={{ aspectRatio: '16/9', width: '100%', objectFit: 'cover', borderRadius: '16px' }} /></div>
    <div className="reveal">
      <div style={{ background: 'var(--color-accent-light)', borderLeft: '4px solid var(--color-accent)', padding: '24px', borderRadius: '0 8px 8px 0', marginBottom: '32px' }}>
        <p style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '8px' }}>久米技建の建物診断は「正直な診断」です</p>
        <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.9', margin: '0' }}>不要な工事を勧めるための診断ではありません。建物の現状を客観的に評価し、「今必要な工事」「将来必要になる工事」「今は不要な工事」を明確に分類してお伝えします。</p>
      </div>

      <p>建物の修繕を検討する際、まず必要なのが正確な建物診断です。建物の劣化状況を専門的に調査し、写真付きの診断レポートとして整理することで、適切な修繕計画と予算立案が可能になります。</p>

      <h2>診断レポートの内容</h2>
      <ul>
        <li>外壁の劣化状況（クラック、チョーキング、タイル浮き等）</li>
        <li>屋上・バルコニーの防水層の状態</li>
        <li>シーリングの劣化状態</li>
        <li>鉄部の錆・腐食状況</li>
        <li>共用部の状態（廊下、階段、エントランス等）</li>
        <li>部位別の劣化度評価（A〜Dランク）</li>
        <li>推奨修繕工事の優先度付きリスト</li>
        <li>概算費用の目安</li>
      </ul>

      <h2>無料診断と有料診断の違い</h2>
      <table className="info-table" style={{ margin: '20px 0' }}><tbody>
        <tr><th>項目</th><th>無料診断</th><th>有料診断</th></tr>
        <tr><td>調査方法</td><td>目視・打診調査</td><td>目視・打診＋機器調査</td></tr>
        <tr><td>調査範囲</td><td>主要部位</td><td>全部位詳細</td></tr>
        <tr><td>レポート</td><td>簡易レポート</td><td>詳細レポート</td></tr>
        <tr><td>所要時間</td><td>2〜3時間</td><td>1〜2日</td></tr>
        <tr><td>用途</td><td>修繕検討の初期段階</td><td>長期修繕計画の策定</td></tr>
      </tbody></table>

      <h2>こんな方におすすめ</h2>
      <ul>
        <li>建物の修繕を検討しているが、何から始めればいいかわからない方</li>
        <li>長期修繕計画の見直しを検討中の管理組合の方</li>
        <li>他社の見積もりが適正か、セカンドオピニオンが欲しい方</li>
        <li>築10年以上の建物をお持ちのオーナーの方</li>
        <li>中古物件の購入前に建物の状態を確認したい方</li>
      </ul>
    </div>
  </div></div></section>

  <section className="cta-section"><div className="container"><h2 className="cta-section__title">無料建物診断のお申し込み</h2><p className="cta-section__text">まずは無料の建物診断から。お気軽にご相談ください。</p><div className="cta-section__phone"><a href="tel:0798-78-6880" className="cta-section__phone-number" style={{ color: 'white', textDecoration: 'none' }}><i className="fas fa-phone-alt"></i> 0798-78-6880</a><div className="cta-section__phone-sub">受付時間：平日 9:00〜18:00</div></div><div className="cta-section__buttons"><a href="/contact" className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料診断を申し込む</a></div></div></section>

  
    </main>
  );
}