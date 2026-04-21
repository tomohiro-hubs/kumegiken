import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";

const SITE_URL = "https://kumegiken.co.jp";
const ARTICLE_PATH = "/column/waterproofing-guide";
const ARTICLE_TITLE = "西宮市の防水工事費用相場｜工法別の目安と選び方";
const ARTICLE_DESCRIPTION =
  "西宮市で防水工事を検討する方向けに、ウレタン防水・シート防水・FRP防水の費用相場と工法選びのポイントを解説します。";

export const metadata = {
  ...buildMetadata({
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    path: ARTICLE_PATH,
    image: "/images/waterproofing-rooftop.jpg",
  }),
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
    author: {
      "@type": "Person",
      name: "久米技建 技術監修チーム",
    },
    publisher: {
      "@type": "Organization",
      name: "株式会社久米技建",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}${ARTICLE_PATH}`,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "ホーム", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "コラム", item: `${SITE_URL}/column` },
      { "@type": "ListItem", position: 3, name: "西宮市の防水工事費用相場", item: `${SITE_URL}${ARTICLE_PATH}` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="page-hero"><span className="page-hero__label">Column</span><h1 className="page-hero__title">西宮市の防水工事費用相場<br />工法別の目安と選び方</h1></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/column")} className="breadcrumb__link">コラム</a></li><li className="breadcrumb__separator">›</li><li>西宮市の防水工事費用相場</li></ol></div></nav>

<section className="content-section"><div className="container container--narrow"><div className="article-content">
  <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>最終更新日：2026年3月15日 / カテゴリ：防水工事</p>
  <div style={{ background: 'var(--color-bg-light)', borderRadius: '12px', padding: '18px 20px', marginBottom: '24px' }}>
    <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.8' }}>
      <strong>監修者：</strong>久米技建 技術監修チーム<br />
      <strong>専門領域：</strong>防水工事・建物診断・雨漏り補修
    </p>
  </div>

  <p>建物の屋上やバルコニー、外壁などから雨水が侵入するのを防ぐ「防水工事」。建物の寿命を左右する重要な工事であるにもかかわらず、工法の違いや費用の目安がわかりにくいと感じている方も多いのではないでしょうか。</p>
  <p>この記事では、防水工事の基礎知識から、主な工法の種類、費用相場、選び方のポイントまでを徹底的に解説します。</p>

  <div style={{ margin: '30px 0' }}><img src={assetPath("/images/waterproofing-rooftop.jpg")} alt="防水工事の施工風景" style={{ width: '100%', borderRadius: '12px', aspectRatio: '16/9', objectFit: 'cover' }} /></div>

  <h2>防水工事とは？</h2>
  <p>防水工事とは、建物の屋上、バルコニー、外壁、地下などに防水層を設けて、雨水や地下水が建物内部に侵入するのを防ぐ工事です。RC造やSRC造の建物では、コンクリート自体に微細な隙間があるため、防水工事なしでは水が浸透してしまいます。</p>

  <h2>防水工事の主な種類</h2>
  <h3>ウレタン防水</h3>
  <p>液状のウレタン樹脂を塗り重ねて防水層を形成する工法です。国内の防水工事で最も多く採用されている工法で、複雑な形状にも対応できるのが特徴です。</p>
  <ul>
    <li>メリット：継ぎ目がない、形状を選ばない、コスト比較的安い</li>
    <li>デメリット：施工者の技量に左右される、乾燥に時間がかかる</li>
    <li>耐用年数：10〜12年</li>
    <li>費用目安：4,000〜7,000円/㎡</li>
  </ul>

  <h3>シート防水</h3>
  <p>塩化ビニル樹脂シートやゴムシートを貼り付けて防水層を形成する工法です。広い面積の施工に適しています。</p>
  <ul>
    <li>メリット：施工が早い、品質が安定、耐候性に優れる</li>
    <li>デメリット：複雑な形状には不向き、シートの継ぎ目が弱点</li>
    <li>耐用年数：12〜15年</li>
    <li>費用目安：4,500〜8,000円/㎡</li>
  </ul>

  <h3>FRP防水</h3>
  <p>繊維強化プラスチック（FRP）を用いた防水工法です。強度が高く、バルコニーや屋上駐車場に適しています。</p>
  <ul>
    <li>メリット：非常に高い強度、軽量、耐久性に優れる</li>
    <li>デメリット：紫外線に弱い、伸縮性が低い</li>
    <li>耐用年数：10〜12年</li>
    <li>費用目安：5,000〜8,000円/㎡</li>
  </ul>

  <h3>アスファルト防水</h3>
  <p>最も歴史のある防水工法で、信頼性が高い工法です。大規模な屋上に適しています。</p>

  <h2>防水工事が必要なサイン</h2>
  <p>以下のような症状が見られたら、防水工事の時期かもしれません。</p>
  <ol>
    <li>防水層にひび割れや膨れがある</li>
    <li>防水層が剥がれている</li>
    <li>排水口周辺に水溜まりができる</li>
    <li>天井にシミやカビが発生している</li>
    <li>前回の防水工事から10年以上経過している</li>
  </ol>

  <h2>まとめ</h2>
  <p>防水工事は建物の寿命を守る重要な工事です。工法の選定は建物の用途、構造、立地条件によって異なりますので、専門家による診断をお勧めします。久米技建では無料の建物診断を実施していますので、お気軽にご相談ください。</p>

  <h2>関連サービス</h2>
  <ul>
    <li><a href={routePath("/service/waterproofing")}>防水工事（ウレタン・シート・FRP・アスファルト）</a></li>
    <li><a href={routePath("/service/building-inspection")}>建物診断</a></li>
    <li><a href={routePath("/service/leak-repair")}>雨漏り調査・補修</a></li>
  </ul>

  <div style={{ background: 'var(--color-primary)', color: 'white', padding: '30px', borderRadius: '12px', margin: '40px 0', textAlign: 'center' }}>
    <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>防水工事のご相談はお気軽に</p>
    <a href={routePath("/contact")} className="btn btn--primary"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a>
  </div>

  <div style={{ textAlign: 'center', marginTop: '48px' }}><a href={routePath("/column")} className="btn btn--outline-dark">← コラム一覧に戻る</a></div>
</div></div></section>
  
    </main>
  );
}
