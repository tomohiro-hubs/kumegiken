import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "代表メッセージ｜西宮の雨漏り・大規模修繕工事会社 久米技建",
  description: "西宮市で雨漏り補修、防水工事、大規模修繕工事に向き合う久米技建 代表からのメッセージ。正直な建物診断と施工品質への考え方をお伝えします。",
  path: "/company/message",
  image: "/images/president-workwear.jpg",
});

export default function Page() {
  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "ホーム", path: "/" }, { name: "会社情報", path: "/company" }, { name: "代表メッセージ", path: "/company/message" }])} />
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/company")} className="breadcrumb__link">会社情報</a></li><li className="breadcrumb__separator">›</li><li>代表メッセージ</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Message</span><h1 className="page-hero__title">代表メッセージ</h1></section>
	  

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
	    <div className="container" style={{ maxWidth: "1500px" }}>
      <div className="message__inner">
        <div className="reveal message__image-wrapper">
          <img
            src={assetPath("/images/president-message.jpg")}
            alt="代表取締役 久米涼平"
            className="message__image"
          />
        </div>
        <div className="article-content reveal message__text-wrapper">
          <h2>建物と向き合い、人と向き合う仕事を。</h2>
          <p>久米技建のホームページをご覧いただき、ありがとうございます。代表の久米涼平です。</p>
          <p>私は防水職人として現場に立つところからキャリアをスタートさせました。建物の屋上に上り、防水層の状態を自分の目で見て、手で触って、その建物が今どんな状態にあるのかを体で感じてきました。</p>
          <p>2016年に久米技建を創業してからも、その姿勢は変わりません。「建物の声を聴く」こと。それが、すべての仕事の出発点です。</p>
          <p>建設業界には残念ながら、必要のない工事を勧めたり、適切でない施工をしたりする業者が存在します。私はそういった業界の慣習に疑問を感じ、「正直に、本当に必要なことだけを伝える会社」を作りたいと思いました。</p>
          <p>私たちの建物診断レポートには、「今は工事が不要です」という判断も正直に記載します。お客様にとっての最善は何かを常に考え、長期的な信頼関係を築くことが、結果として会社の成長につながると信じているからです。</p>
          <p>お客様の大切な資産である建物を、次の世代へ受け継ぐお手伝いをする。それが、私たち久米技建の使命です。建物のことでお困りのことがあれば、どんな小さなことでもご相談ください。</p>
          <p style={{ textAlign: 'right', marginTop: '40px' }}>
            <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>株式会社久米技建 代表取締役</span><br />
            <img src={assetPath("/images/signature-kume-ryohei.png")} alt="久米涼平 署名" style={{ width: '220px', maxWidth: '100%', height: 'auto', marginTop: '8px', display: 'inline-block' }} />
          </p>
        </div>
      </div>
    </div>
  </section>

  <style dangerouslySetInnerHTML={{__html: `
    .message__inner {
      display: flex;
      flex-direction: column;
      gap: 36px;
    }
    .message__image-wrapper {
      width: 100%;
    }
    .message__image {
      width: 100%;
      aspect-ratio: 3 / 4;
      object-fit: cover;
      border-radius: 16px;
      object-position: calc(50% + 30px) center;
    }
    .message__text-wrapper {
      width: 100%;
      margin: 0 auto;
    }
    @media (min-width: 992px) {
      .message__inner {
        flex-direction: row-reverse;
        align-items: stretch;
        gap: 100px;
      }
      .message__image-wrapper {
        flex: 0 0 400px;
        max-width: 500px;
        display: flex;
      }
      .message__image {
        height: 100%;
        aspect-ratio: auto;
      }
      .message__text-wrapper {
        flex: 1;
        max-width: 100%;
        margin: 0;
      }
    }
  `}} />

  
    </main>
  );
}
