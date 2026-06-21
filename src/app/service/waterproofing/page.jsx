import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import ServiceSeo, { FaqSection } from "@/components/ServiceSeo";
import { serviceSeoData } from "@/lib/serviceSeoData";

export const metadata = buildMetadata({
  title: "西宮の防水工事（ウレタン・シート・FRP・アスファルト）｜久米技建",
  description:
    "西宮市の防水工事なら久米技建。マンション・ビル・戸建ての屋上、バルコニー、共用廊下に対応し、雨漏りの原因調査から最適工法の提案、施工まで一貫対応します。",
  path: "/service/waterproofing",
  image: "/images/waterproofing-service.jpeg",
});

export default function Page() {
  const seoData = serviceSeoData.waterproofing;
  return (
    <main>
      <ServiceSeo {...seoData} />
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/service")} className="breadcrumb__link">サービス</a></li><li className="breadcrumb__separator">›</li><li>防水工事</li></ol></div></nav>
  <section className="page-hero">
    <span className="page-hero__label">Waterproofing</span>
    <h1 className="page-hero__title">西宮の防水工事（ウレタン・シート・FRP・アスファルト）</h1>
    <p className="page-hero__description">雨漏り対策から改修計画まで、西宮市を拠点に建物を雨水から守る専門技術をご提供します。</p>
  </section>
  

  <section className="content-section">
    <div className="container container--narrow">
      <div className="article-content">
        <div className="reveal" style={{ marginBottom: '40px' }}><img src={assetPath("/images/waterproofing-service.jpeg")} alt="防水工事の現場" style={{ aspectRatio: '16/9', width: '100%', objectFit: 'cover', borderRadius: '16px' }} /></div>
        <div className="reveal">
          <p>防水工事は、建物の寿命を左右する最も重要な工事の一つです。久米技建は防水工事の専門会社として創業し、豊富な経験と確かな技術でお客様の建物を雨水から守り続けています。</p>

          <h2>兵庫・大阪の防水工事なら久米技建</h2>
          <p>西宮市・神戸市・尼崎市・大阪市など、兵庫県・大阪府を中心に防水工事へ対応しています。対応地域の詳細は
            <a href={routePath("/company/area")}> 対応エリアページ</a>
            からご確認ください。
          </p>

          <h2>防水工法の種類</h2>
          <p>建物の用途、構造、立地条件に応じて最適な防水工法をご提案します。</p>

          <h3>ウレタン防水</h3>
          <p>液状のウレタン樹脂を塗布して防水層を形成する工法。複雑な形状にも対応でき、継ぎ目のないシームレスな防水層が特徴です。改修工事に最も多く採用される工法で、コストパフォーマンスに優れています。</p>

          <h3>シート防水</h3>
          <p>塩化ビニル樹脂シートやゴムシートを貼り付ける工法。広い面積の屋上に適しており、施工スピードが速いのが特徴です。耐候性に優れ、長期間にわたる防水性能を発揮します。</p>

          <h3>FRP防水</h3>
          <p>繊維強化プラスチック（FRP）を用いた防水工法。強度が高く、バルコニーや屋上駐車場など、荷重がかかる場所に適しています。施工後は非常に硬い防水層が形成されます。</p>

          <h3>アスファルト防水</h3>
          <p>古くから実績のある信頼性の高い工法。加熱したアスファルトでルーフィングを貼り重ねる工法で、大規模な屋上に適しています。</p>



          <h2>こんな症状があれば防水工事のサインです</h2>
          <ul>
            <li>屋上やバルコニーの防水層にひび割れがある</li>
            <li>防水層が膨れている・剥がれている</li>
            <li>排水口周辺に水たまりができる</li>
            <li>前回の防水工事から10年以上が経過している</li>
            <li>天井や壁にシミ・カビがある</li>
          </ul>

          <h2>関連するご相談先</h2>
          <p>症状や建物条件によっては、防水工事だけでなく雨漏り調査や建物診断、大規模修繕工事として整理した方が判断しやすいケースもあります。</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '20px' }}>
            <Link href={routePath("/service/leak-repair")} className="btn btn--outline-dark">西宮の雨漏り調査・補修</Link>
            <Link href={routePath("/service/building-inspection")} className="btn btn--outline-dark">西宮の建物無料診断</Link>
            <Link href={routePath("/service/large-scale-repair")} className="btn btn--outline-dark">西宮の大規模修繕工事</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FaqSection faqs={seoData.faqs} />

  <section className="cta-section"><div className="container"><h2 className="cta-section__title reveal">防水工事のご相談はお気軽に</h2><p className="cta-section__text reveal">建物の防水が気になったら、まずは無料診断から。</p><div className="cta-section__buttons reveal"><a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a><a href={routePath("/simulation")} className="btn btn--outline btn--lg"><i className="fas fa-calculator"></i> 見積もりシミュレーション</a></div></div></section>

  <style dangerouslySetInnerHTML={{__html: `
    /* このページ限定でコンテンツ最大幅を1080pxに拡張 */
    .container--narrow {
      max-width: 1080px;
    }
    .container--narrow .article-content {
      max-width: none;
    }
  `}} />

    </main>
  );
}
