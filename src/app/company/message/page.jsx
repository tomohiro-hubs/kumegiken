import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "代表メッセージ｜株式会社久米技建",
  description: "株式会社久米技建 代表からのメッセージ。建物診断への姿勢や、品質にこだわる施工方針についてお伝えします。",
  path: "/company/message",
  image: "/images/president-workwear.jpg",
});

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Message</span><h1 className="page-hero__title">代表メッセージ</h1></section>
	  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/company")} className="breadcrumb__link">会社情報</a></li><li className="breadcrumb__separator">›</li><li>代表メッセージ</li></ol></div></nav>

	  {/* Sub Navigation */}
	  <section style={{ background: 'var(--color-bg-light)', padding: '20px 0' }}>
	    <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
	      <a href={routePath("/company")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>会社概要</a>
	      <a href={routePath("/company/message")} className="btn btn--sm" style={{ background: 'var(--color-primary)', color: 'white', borderRadius: '50px' }}>代表メッセージ</a>
	      <a href={routePath("/company/staff")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>スタッフ紹介</a>
	      <a href={routePath("/company/area")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>対応エリア</a>
	      <a href={routePath("/company/history")} className="btn btn--sm btn--outline-dark" style={{ borderRadius: '50px' }}>沿革</a>
	    </div>
	  </section>
	
	  <section className="content-section">
	    <div className="container container--narrow">
      <div className="message__inner" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '48px', alignItems: 'center' }}>
        <div className="reveal">
          <img src={assetPath("/images/president_photo.jpg")} alt="代表取締役 久米涼平" style={{ aspectRatio: '3/4', width: '100%', objectFit: 'cover', borderRadius: '16px', minHeight: '350px' }} />
          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>代表取締役</p>
            <p style={{ fontSize: '20px', fontWeight: '700', color: 'var(--color-primary)' }}>久米 涼平</p>
          </div>
        </div>
        <div className="article-content reveal">
          <h2>建物と向き合い、人と向き合う仕事を。</h2>
          <p>久米技建のホームページをご覧いただき、ありがとうございます。代表の久米涼平です。</p>
          <p>私は防水職人として現場に立つところからキャリアをスタートさせました。建物の屋上に上り、防水層の状態を自分の目で見て、手で触って、その建物が今どんな状態にあるのかを体で感じてきました。</p>
          <p>2016年に久米技建を創業してからも、その姿勢は変わりません。「建物の声を聴く」こと。それが、すべての仕事の出発点です。</p>
          <p>建設業界には残念ながら、必要のない工事を勧めたり、適切でない施工をしたりする業者が存在します。私はそういった業界の慣習に疑問を感じ、「正直に、本当に必要なことだけを伝える会社」を作りたいと思いました。</p>
          <p>私たちの建物診断レポートには、「今は工事が不要です」という判断も正直に記載します。お客様にとっての最善は何かを常に考え、長期的な信頼関係を築くことが、結果として会社の成長につながると信じているからです。</p>
          <p>お客様の大切な資産である建物を、次の世代へ受け継ぐお手伝いをする。それが、私たち久米技建の使命です。建物のことでお困りのことがあれば、どんな小さなことでもご相談ください。</p>
          <p style={{ textAlign: 'right', marginTop: '40px' }}>
            <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>株式会社久米技建 代表取締役</span><br />
            <span style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)' }}>久米 涼平</span>
          </p>
        </div>
      </div>
    </div>
  </section>

  
    </main>
  );
}
