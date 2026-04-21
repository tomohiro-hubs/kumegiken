import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "採用情報（職人・施工管理・営業）｜久米技建",
  description: "久米技建の採用情報ページ。防水職人・施工管理・営業職の募集要項や、働く魅力、教育体制についてご紹介します。",
  path: "/recruit",
  image: "/images/recruit-training.jpg",
});

export default function Page() {
  return (
    <main>
      <section className="page-hero recruit-hero"><span className="page-hero__label">Recruit</span><h1 className="page-hero__title">採用情報</h1><p className="page-hero__description">私たちと一緒に、「建物を守るプロ集団」として働きませんか？<br />経験者も未経験者も、それぞれが活躍できる環境を用意しています。</p></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>採用情報</li></ol></div></nav>

<section className="content-section"><div className="container">
  <div className="reveal" style={{ marginBottom: '48px' }}><img src={assetPath("/images/recruit-training.jpg")} alt="先輩職人による技術指導の様子" style={{ width: '100%', borderRadius: '16px', aspectRatio: '16/9', objectFit: 'cover' }} /></div>
  
  <div className="article-content reveal" style={{ marginBottom: '60px' }}>
    <h2>久米技建が求める人材</h2>
    <p>株式会社久米技建は、マンション・ビルの大規模修繕工事や防水工事において、自社職人による<strong>「高品質で適正価格の施工」</strong>を提供し続けています。私たちが大切にしているのは、建物の状態を正しく見極める<strong>「正直な診断」</strong>と、見えないところまで丁寧に仕上げる<strong>「確かな技術」</strong>です。</p>
    <p>職人として技術を極めたい方、施工管理としてチームをまとめたい方。当社の理念に共感し、ともにお客様の建物を守り続ける志を持った新しい仲間を募集しています。</p>
  </div>

  <div className="section-heading reveal"><span className="section-heading__en">Our Values</span><h2 className="section-heading__ja">久米技建で働く魅力</h2><span className="section-heading__line"></span></div>
  <div className="recruit-values">
    <div className="recruit-value-card reveal"><div className="recruit-value-card__icon"><i className="fas fa-graduation-cap"></i></div><h3 className="recruit-value-card__title">資格取得支援・教育体制</h3><p className="recruit-value-card__text">未経験からでも一人前の職人に成長できるよう、先輩職人がマンツーマンで指導します。1級防水施工技能士や建築施工管理技士など、キャリアアップに必要な資格取得は会社が全面的にバックアップ（費用負担含む）します。</p></div>
    <div className="recruit-value-card reveal"><div className="recruit-value-card__icon"><i className="fas fa-users"></i></div><h3 className="recruit-value-card__title">自社施工のチーム力</h3><p className="recruit-value-card__text">職人と施工管理がひとつの「チーム」として連携しているため、現場での意見交換が活発で風通しの良い環境です。下請け任せではないため、自分たちの手で品質を守り切るやりがいを感じられます。</p></div>
    <div className="recruit-value-card reveal"><div className="recruit-value-card__icon"><i className="fas fa-chart-line"></i></div><h3 className="recruit-value-card__title">安定した経営基盤</h3><p className="recruit-value-card__text">管理組合様やオーナー様からの直接発注が多く、業績は安定して推移しています。福利厚生（社会保険完備・各種手当）も充実しており、長く安心して働き続けられる環境を整えています。</p></div>
  </div>
</div></section>

<section className="content-section"><div className="container">
  <div className="section-heading reveal"><span className="section-heading__en">Interviews</span><h2 className="section-heading__ja">先輩社員の声</h2><span className="section-heading__line"></span></div>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '30px' }}>
    {/* 職人の声 */}
    <div style={{ background: 'var(--color-bg-light)', borderRadius: '16px', padding: '30px', boxShadow: 'var(--shadow-sm)' }} className="reveal">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
        <img src={assetPath("/images/staff-01.png")} alt="防水職人" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
        <div>
          <p style={{ fontSize: '12px', color: 'white', background: 'var(--color-primary)', display: 'inline-block', padding: '2px 8px', borderRadius: '4px', marginBottom: '4px', fontWeight: '700' }}>防水工（入社5年目）</p>
          <h3 style={{ fontSize: '15px', fontWeight: '700' }}>未経験から手に職をつけられました</h3>
        </div>
      </div>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.8' }}>前職は全く別の業界でしたが、一から丁寧に教えてもらえる環境があり、今では現場を任せてもらえるようになりました。資格取得のサポートも手厚く、成長を実感できる毎日です。</p>
    </div>
    {/* 施工管理の声 */}
    <div style={{ background: 'var(--color-bg-light)', borderRadius: '16px', padding: '30px', boxShadow: 'var(--shadow-sm)' }} className="reveal">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
        <img src={assetPath("/images/staff-02.png")} alt="施工管理" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
        <div>
          <p style={{ fontSize: '12px', color: 'white', background: 'var(--color-accent)', display: 'inline-block', padding: '2px 8px', borderRadius: '4px', marginBottom: '4px', fontWeight: '700' }}>施工管理（中途入社）</p>
          <h3 style={{ fontSize: '15px', fontWeight: '700' }}>自社職人だから品質に妥協しない</h3>
        </div>
      </div>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.8' }}>下請けに丸投げするのではなく、自社の職人と直接コミュニケーションを取りながら進められるので、工程管理がしやすく、お客様に自信を持って仕上がりをお渡しできます。</p>
    </div>
    {/* 営業職の声 */}
    <div style={{ background: 'var(--color-bg-light)', borderRadius: '16px', padding: '30px', boxShadow: 'var(--shadow-sm)' }} className="reveal">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
        <img src={assetPath("/images/staff-03.png")} alt="営業職" style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
        <div>
          <p style={{ fontSize: '12px', color: 'white', background: 'var(--color-text-main)', display: 'inline-block', padding: '2px 8px', borderRadius: '4px', marginBottom: '4px', fontWeight: '700' }}>営業職（中途入社）</p>
          <h3 style={{ fontSize: '15px', fontWeight: '700' }}>お客様目線の提案ができる喜び</h3>
        </div>
      </div>
      <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: '1.8' }}>無理な押し売りは一切なく、「本当に必要な工事は何か」を一番に考えて提案できるのが当社の強みです。頑張った分は歩合でしっかり評価されるのもモチベーションに繋がっています。</p>
    </div>
  </div>
</div></section>

<section className="content-section content-section--gray"><div className="container container--narrow">
  <div className="section-heading reveal"><span className="section-heading__en">Job Opening</span><h2 className="section-heading__ja">募集職種</h2><span className="section-heading__line"></span></div>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <a href={routePath("/recruit/waterproofing-craftsman")} style={{ display: 'block', background: 'white', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition)' }} className="reveal">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div><span style={{ display: 'inline-block', background: 'var(--color-accent)', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 12px', borderRadius: '3px', marginBottom: '8px' }}>積極採用中</span><h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-primary)' }}>防水工・塗装工（職人）</h3><p style={{ fontSize: '14px', color: 'var(--color-text-light)', marginTop: '4px' }}>正社員 / 経験者優遇・未経験者歓迎</p></div>
        <span style={{ color: 'var(--color-accent)', fontWeight: '700', fontSize: '14px' }}>募集要項を見る →</span>
      </div>
    </a>
    <a href={routePath("/recruit/construction-manager")} style={{ display: 'block', background: 'white', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition)' }} className="reveal">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div><h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-primary)' }}>施工管理技士</h3><p style={{ fontSize: '14px', color: 'var(--color-text-light)', marginTop: '4px' }}>正社員 / 1級・2級建築施工管理技士優遇</p></div>
        <span style={{ color: 'var(--color-accent)', fontWeight: '700', fontSize: '14px' }}>募集要項を見る →</span>
      </div>
    </a>
    <a href={routePath("/recruit/sales")} style={{ display: 'block', background: 'white', borderRadius: '16px', padding: '32px', boxShadow: 'var(--shadow-sm)', transition: 'var(--transition)' }} className="reveal">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div><h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-primary)' }}>営業職（法人・個人営業）</h3><p style={{ fontSize: '14px', color: 'var(--color-text-light)', marginTop: '4px' }}>正社員 / 業界経験者優遇・未経験者歓迎</p></div>
        <span style={{ color: 'var(--color-accent)', fontWeight: '700', fontSize: '14px' }}>募集要項を見る →</span>
      </div>
    </a>
  </div>
</div></section>

<section className="content-section"><div className="container container--narrow">
  <div className="section-heading reveal"><span className="section-heading__en">Process</span><h2 className="section-heading__ja">選考プロセス</h2><span className="section-heading__line"></span></div>
  <div className="flow__timeline reveal">
    <div className="flow__step">
      <div className="flow__step-number">01</div>
      <div className="flow__step-content">
        <h3 className="flow__step-title">ご応募・お問い合わせ</h3>
        <p className="flow__step-text">電話、またはお問い合わせフォームよりご応募ください。まずは話を聞いてみたい、社内を見学したいという方も歓迎です。</p>
      </div>
    </div>
    <div className="flow__step">
      <div className="flow__step-number">02</div>
      <div className="flow__step-content">
        <h3 className="flow__step-title">面接（1回〜2回）</h3>
        <p className="flow__step-text">履歴書・職務経歴書をご持参ください。経験やスキルだけでなく、あなたのお人柄や仕事への考え方をお伺いします。</p>
      </div>
    </div>
    <div className="flow__step">
      <div className="flow__step-number">03</div>
      <div className="flow__step-content">
        <h3 className="flow__step-title">内定・ご入社</h3>
        <p className="flow__step-text">面接から1週間程度で合否をご連絡いたします。入社日はご相談に応じますので、在職中の方もお気軽にご相談ください。</p>
      </div>
    </div>
  </div>
</div></section>
<section className="cta-section"><div className="container"><h2 className="cta-section__title">ご応募・ご質問はこちら</h2><p className="cta-section__text">まずはお気軽にお問い合わせください。見学も歓迎します。</p><div className="cta-section__phone"><a href="tel:0798-78-6880" className="cta-section__phone-number" style={{ color: 'white', textDecoration: 'none' }}><i className="fas fa-phone-alt"></i> 0798-78-6880</a><div className="cta-section__phone-sub">採用担当まで</div></div><div className="cta-section__buttons"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 応募・お問い合わせ</a></div></div></section>
  
    </main>
  );
}