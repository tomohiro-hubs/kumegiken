import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Staff</span><h1 className="page-hero__title">スタッフ紹介</h1><p className="page-hero__description">技術と誠実さで、建物を守るプロフェッショナルたち</p></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/company")} className="breadcrumb__link">会社情報</a></li><li className="breadcrumb__separator">›</li><li>スタッフ紹介</li></ol></div></nav>
<section style={{ background: 'var(--color-bg-light)', padding: '20px 0' }}>
  <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
    <a href={routePath("/company")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>会社概要</a>
    <a href={routePath("/company/message")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>代表メッセージ</a>
    <a href={routePath("/company/staff")} className="btn btn--sm" style={{ background: 'var(--color-primary)', color: 'white', borderRadius: '50px' }}>スタッフ紹介</a>
    <a href={routePath("/company/area")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>対応エリア</a>
    <a href={routePath("/company/history")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>沿革</a>
  </div>
</section>
<section className="content-section"><div className="container">
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '30px' }}>
    <div style={{ textAlign: 'center', background: 'var(--color-white)', borderRadius: '16px', padding: '30px', boxShadow: 'var(--shadow-sm)' }} className="reveal">
      <img src={assetPath("/images/president-workwear.jpg")} alt="田中一郎" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover' }} />
      <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)' }}>田中 一郎</h3>
      <p style={{ fontSize: '13px', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '12px' }}>防水工事チームリーダー / 1級防水施工技能士</p>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.8' }}>防水工事歴15年。ウレタン防水・シート防水のスペシャリスト。「水を一滴も通さない」をモットーに、丁寧な施工を心がけています。</p>
    </div>
    <div style={{ textAlign: 'center', background: 'var(--color-white)', borderRadius: '16px', padding: '30px', boxShadow: 'var(--shadow-sm)' }} className="reveal">
      <img src={assetPath("/images/team-meeting.jpg")} alt="山本健二" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover' }} />
      <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)' }}>山本 健二</h3>
      <p style={{ fontSize: '13px', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '12px' }}>施工管理 / 1級建築施工管理技士</p>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.8' }}>施工管理歴12年。大規模修繕工事を中心に、工程・品質・安全管理を担当。お客様との丁寧なコミュニケーションを大切にしています。</p>
    </div>
    <div style={{ textAlign: 'center', background: 'var(--color-white)', borderRadius: '16px', padding: '30px', boxShadow: 'var(--shadow-sm)' }} className="reveal">
      <img src={assetPath("/images/consultation.jpg")} alt="佐藤美咲" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover' }} />
      <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)' }}>佐藤 美咲</h3>
      <p style={{ fontSize: '13px', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '12px' }}>施工管理 / 建物診断担当</p>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.8' }}>建物診断のスペシャリスト。女性ならではの細やかな視点で、お客様にわかりやすい診断レポートを作成しています。</p>
    </div>
  </div>
  <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: 'var(--color-bg-light)', borderRadius: '16px' }} className="reveal">
    <img src={assetPath("/images/team-group.jpg")} alt="久米技建チーム集合写真" style={{ aspectRatio: '16/7', width: '100%', objectFit: 'cover', borderRadius: '8px', minHeight: '250px' }} />
    <p style={{ marginTop: '16px', fontSize: '16px', fontWeight: '700', color: 'var(--color-primary)' }}>久米技建チーム集合写真</p>
    <p style={{ fontSize: '14px', color: 'var(--color-text-light)' }}>自社職人21名・施工管理4名の総勢25名体制で、お客様の建物をお守りします。</p>
  </div>
</div></section>
  
    </main>
  );
}