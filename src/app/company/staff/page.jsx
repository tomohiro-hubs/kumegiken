import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "スタッフ紹介｜西宮の雨漏り・大規模修繕工事会社 久米技建",
  description: "西宮市の雨漏り補修、防水工事、大規模修繕工事を支える久米技建のスタッフ紹介。資格や専門分野を持つ自社職人・施工管理メンバーが対応します。",
  path: "/company/staff",
  image: "/images/team-group.jpg",
});

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "ホーム", path: "/" }, { name: "会社情報", path: "/company" }, { name: "スタッフ紹介", path: "/company/staff" }])} />
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/company")} className="breadcrumb__link">会社情報</a></li><li className="breadcrumb__separator">›</li><li>スタッフ紹介</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Staff</span><h1 className="page-hero__title">スタッフ紹介</h1><p className="page-hero__description">技術と誠実さで、建物を守るプロフェッショナルたち</p></section>

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
  <div className="staff-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '30px' }}>
    <div style={{ textAlign: 'center', background: 'var(--color-white)', borderRadius: '16px', padding: '30px', boxShadow: 'var(--shadow-sm)' }} className="reveal">
      <img src={assetPath("/images/staff-yoshi.jpeg")} alt="スタッフY" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover' }} />
      <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)' }}>スタッフY</h3>
      <p style={{ fontSize: '13px', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '12px' }}>1級建築施工管理技士</p>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.8' }}>防水や外壁修繕に携わって20年以上。劣化見極めや工法判断に定評があり、難易度の高い漏水修繕も担当。丁寧な施工と責任ある対応でお客様から指名される存在です。</p>
    </div>
    <div style={{ textAlign: 'center', background: 'var(--color-white)', borderRadius: '16px', padding: '30px', boxShadow: 'var(--shadow-sm)' }} className="reveal">
      <img src={assetPath("/images/staff-tanaka.jpg")} alt="スタッフS" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover' }} />
      <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)' }}>スタッフS</h3>
      <p style={{ fontSize: '13px', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '12px' }}>1級防水施工技能士</p>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.8' }}>防水工事に20年以上携わってきました。劣化状況をしっかり見極めて最適な工法をご提案し、難易度の高い漏水修繕にも責任を持って対応します。</p>
    </div>
    <div style={{ textAlign: 'center', background: 'var(--color-white)', borderRadius: '16px', padding: '30px', boxShadow: 'var(--shadow-sm)' }} className="reveal">
      <img src={assetPath("/images/staff-kishi.jpg")} alt="スタッフK" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover' }} />
      <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)' }}>スタッフK</h3>
      <p style={{ fontSize: '13px', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '12px' }}>1級建築施工管理技士</p>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.8' }}>防水・塗装・シーリングまで、現場に合わせて幅広く対応しています。状況に応じた判断と段取りを大切に、チームと連携しながら丁寧に施工を進めます。</p>
    </div>
    <div style={{ textAlign: 'center', background: 'var(--color-white)', borderRadius: '16px', padding: '30px', boxShadow: 'var(--shadow-sm)' }} className="reveal">
      <img src={assetPath("/images/staff-goya.jpg")} alt="スタッフG" style={{ width: '150px', height: '150px', borderRadius: '50%', margin: '0 auto 16px', objectFit: 'cover' }} />
      <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-primary)' }}>スタッフG</h3>
      <p style={{ fontSize: '13px', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '12px' }}>防水技術者</p>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.8' }}>丁寧で誠実な仕事を心がけています。わかりやすいご説明と、現場での挨拶・気配りを大切にしながら、安心していただける対応を徹底します。</p>
    </div>
  </div>
  <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: 'var(--color-bg-light)', borderRadius: '16px' }} className="reveal">
    <img src={assetPath("/images/team-group.jpg")} alt="久米技建チーム集合写真" style={{ aspectRatio: '16/7', width: '100%', objectFit: 'cover', borderRadius: '8px', minHeight: '250px' }} />
    <p style={{ marginTop: '16px', fontSize: '16px', fontWeight: '700', color: 'var(--color-primary)' }}>現場を支えるスタッフ体制</p>
    <p style={{ fontSize: '14px', color: 'var(--color-text-light)' }}>経験豊富な自社職人と施工管理スタッフが連携し、診断から施工、完了後のフォローまで責任を持って対応します。大切な建物を、安心してお任せいただける体制です。</p>
  </div>
</div></section>

  <style dangerouslySetInnerHTML={{__html: `
    @media (min-width: 992px) {
      .staff-grid {
        grid-template-columns: repeat(4, 1fr) !important;
      }
    }
  `}} />
  
    </main>
  );
}
