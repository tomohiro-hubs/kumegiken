import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import VoiceCarousel from "@/components/VoiceCarousel";
import { buildMetadata } from "@/lib/seo";
import TopCopyHero from "@/components/TopCopyHero";
import JsonLd from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "防水工事・大規模修繕なら久米技建｜西宮市の防水専門会社【無料建物診断】",
  description:
    "西宮市の防水工事専門会社・久米技建。自社職人21名による直営施工で高品質な防水・外壁改修を実現。正直な建物診断に基づき、本当に必要な工事だけをご提案。兵庫・大阪エリア対応。無料建物診断・見積もり受付中。",
  path: "/top-copy",
  noindex: true,
});

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "株式会社久米技建",
  url: "https://kumegiken.co.jp",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "8",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "M.T 様" },
      reviewBody:
        "正直に『ここはまだ大丈夫です』と言ってくれたのが信頼できました。他社では全面やり替えと言われていたので、大きな節約になりました。",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "S.K 様" },
      reviewBody:
        "自社の職人さんが施工してくれるので品質にバラツキがなく安心でした。施工管理の方の対応も丁寧で、管理会社としても信頼しています。",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "K.H 様" },
      reviewBody:
        "建物診断レポートが非常にわかりやすく、理事会での説明にそのまま使えました。長期修繕計画の見直しにも役立っています。",
    },
  ],
};

const serviceQuickLinks = [
  { href: "/service/waterproofing", label: "防水工事" },
  { href: "/service/leak-repair", label: "雨漏り補修" },
  { href: "/service/sealing", label: "シーリング工事" },
  { href: "/service/painting", label: "外壁塗装" },
  { href: "/service/large-scale-repair", label: "大規模修繕" },
  { href: "/service/building-inspection", label: "建物診断" },
];

const trustItems = [
  {
    value: "1,000",
    unit: "件以上",
    label: "累計施工実績",
    text: "西宮市を中心に、兵庫・大阪の建物を地域密着で対応。",
  },
  {
    value: "21",
    unit: "名",
    label: "自社職人",
    text: "防水工事・改修工事を熟知した職人が品質を支えます。",
  },
  {
    value: "無料",
    unit: "",
    label: "建物診断・見積もり",
    text: "不要な工事を勧めず、現状と必要性を正直に説明します。",
  },
  {
    value: "兵庫・大阪",
    unit: "",
    label: "対応エリア",
    text: "西宮市・神戸市・尼崎市・大阪市周辺まで対応。",
  },
];

const problemItems = [
  {
    title: "屋上やベランダの防水層が劣化している",
    text: "ひび割れ、膨れ、排水不良などを確認し、建物に合う防水工事をご提案します。",
    href: "/service/waterproofing",
    label: "防水工事を見る",
  },
  {
    title: "雨漏りの原因が分からず再発が不安",
    text: "散水調査や劣化状況の確認を行い、表面的な雨漏り補修ではなく原因から対処します。",
    href: "/service/leak-repair",
    label: "雨漏り補修を見る",
  },
  {
    title: "マンション・ビルの修繕時期を判断したい",
    text: "管理組合・オーナー様向けに、大規模修繕の優先順位と概算費用を整理します。",
    href: "/service/large-scale-repair",
    label: "大規模修繕を見る",
  },
  {
    title: "外壁やシーリングの劣化が気になる",
    text: "外壁塗装、シーリング打ち替え、下地補修まで、劣化状況に合わせて計画します。",
    href: "/service/sealing",
    label: "シーリング工事を見る",
  },
];

const reasonItems = [
  {
    number: "01",
    image: "/images/inspection-scene.jpg",
    alt: "現地調査へ向かう担当者",
    question: "01",
    concern: "こんな不安はありませんか？",
    concernText:
      "業者が変わるたび、話が伝わっているか不安…\n調査した人、判断する人、施工する人が分かれていると、伝達ミスや判断のズレが起きやすくなります。",
    solutionLead: "久米技建の答え",
    solutionTitle: "情報ロスなく、最適工事を\n最短工程で。",
    solutionText:
      "久米技建は、建物を診た技術者がそのまま施工計画を立て、\n必要に応じて自ら現場にも入ります。情報のロスが少ないから、\n最適な工事を、ムダのない工程で進められます。",
    icon: "fa-regular fa-clock",
  },
  {
    number: "02",
    image: "/images/waterproofing-hands.jpg",
    alt: "防水施工の様子",
    question: "02",
    concern: "こんな不安はありませんか？",
    concernText: "直しても、また漏れたらどうしよう…\n原因が特定しにくく、不十分な工事でしばらくの間は不安になりますよね。",
    solutionLead: "久米技建の答え",
    solutionTitle: "原因から直すので、再発しにくい！",
    solutionText:
      "見えない原因までしっかり特定し、根本から対処します。\nその場しのぎではなく、長期にわたり役立つ\n長く安心が続きます。",
    icon: "fa-solid fa-magnifying-glass",
  },
  {
    number: "03",
    image: "/images/team-meeting.jpg",
    alt: "担当者のご説明",
    question: "03",
    concern: "こんな不安はありませんか？",
    concernText: "どんな人が来るのか不安…\nスタッフの質は仕上がりの印。やっぱり不安ですよね。",
    solutionLead: "久米技建の答え",
    solutionTitle: "自社職人を中心に、一貫した品質で対応します",
    solutionText:
      "防水工事は自社職人が責任を持って施工。塗装・足場は連携する協力会社と、いつも同じチームで対応するため、品質のばらつきなく安心してお任せいただけます。",
    icon: "fa-solid fa-helmet-safety",
  },
];

const serviceItems = [
  {
    href: "/service/waterproofing",
    image: "/images/waterproofing-rooftop.jpg",
    alt: "マンション屋上の防水工事",
    label: "雨水から建物を守る",
    title: "防水工事",
    text: "屋上・ベランダ・共用廊下などのウレタン防水、シート防水、FRP防水に対応。建物の状態を見て、最適な工法を選定します。",
  },
  {
    href: "/service/large-scale-repair",
    image: "/images/scaffold-install.jpg",
    alt: "足場を設置した大規模修繕工事",
    label: "管理組合・法人向け",
    title: "大規模修繕",
    text: "マンション・ビルの外壁改修、防水、下地補修まで一括対応。居住者様やテナント様への配慮も含めて施工管理します。",
  },
  {
    href: "/service/leak-repair",
    image: "/images/leak-repair.jpg",
    alt: "雨漏り補修のために建物を確認する様子",
    label: "原因から止める",
    title: "雨漏り補修",
    text: "雨漏りの原因を調査し、再発しにくい補修計画を提案します。緊急性の高いご相談にも状況を伺いながら対応します。",
  },
  {
    href: "/service/painting",
    image: "/images/painting-work.jpg",
    alt: "外壁塗装の施工現場",
    label: "美観と保護を両立",
    title: "外壁塗装",
    text: "外壁材や周辺環境に合わせて塗料を選定。見た目の改善だけでなく、建物を長く守る塗装工事を行います。",
  },
  {
    href: "/service/sealing",
    image: "/images/sealing-work.jpg",
    alt: "シーリング工事の施工風景",
    label: "隙間からの浸水対策",
    title: "シーリング",
    text: "外壁目地・サッシまわりの打ち替え、増し打ちに対応。防水性能を維持するため、劣化状況を丁寧に確認します。",
  },
  {
    href: "/service/building-inspection",
    image: "/images/inspection-scene.jpg",
    alt: "建物診断で外壁を確認する担当者",
    label: "まずは状態把握から",
    title: "建物診断",
    text: "写真付きレポートで劣化箇所と修繕の優先順位を整理。西宮市・兵庫・大阪の建物管理に役立つ診断を行います。",
  },
];

const workItems = [
  {
    href: "/works/nishinomiya-mansion-waterproofing-01",
    image: "/images/waterproofing-rooftop.jpg",
    alt: "屋上ウレタン防水改修工事",
    category: "防水工事",
    city: "西宮市",
    buildingType: "マンション",
    title: "屋上ウレタン防水改修工事",
    estimate: "工期：約2週間 / 費用目安：200〜300万円",
  },
  {
    href: "/works/osaka-building-large-scale-repair-01",
    image: "/images/scaffold-install.jpg",
    alt: "オフィスビル大規模修繕工事",
    category: "大規模修繕",
    city: "大阪市",
    buildingType: "ビル",
    title: "オフィスビル大規模修繕工事",
    estimate: "工期：約3ヶ月 / 費用目安：2,000〜3,000万円",
  },
  {
    href: "/works/kobe-mansion-painting-01",
    image: "/images/building-completed.jpg",
    alt: "分譲マンション外壁塗装工事",
    category: "外壁塗装",
    city: "神戸市",
    buildingType: "マンション",
    title: "分譲マンション外壁塗装工事",
    estimate: "工期：約1.5ヶ月 / 費用目安：800〜1,200万円",
  },
];

const columnItems = [
  {
    href: "/column/waterproofing-guide",
    image: "/images/waterproofing-hands.jpg",
    alt: "防水工事ガイド",
    date: "2026.03.15",
    title: "防水工事とは？種類・工法・費用相場を徹底解説",
    excerpt:
      "防水工事の種類や工法の違い、費用の目安を解説します。ウレタン防水、シート防水、FRP防水それぞれのメリット・デメリットとは。",
  },
  {
    href: "/column/large-scale-repair-guide",
    image: "/images/large-scale-aerial.jpg",
    alt: "大規模修繕ガイド",
    date: "2026.03.01",
    title: "大規模修繕の進め方と費用の目安",
    excerpt:
      "マンション・ビルの大規模修繕工事の進め方、一般的な費用感、成功のポイントを専門家が解説します。",
  },
  {
    href: "/column/leak-cause-and-fix",
    image: "/images/leak-repair.jpg",
    alt: "雨漏り対処法",
    date: "2026.02.20",
    title: "雨漏りの原因と応急処置｜プロが教える対処法",
    excerpt:
      "突然の雨漏りに困ったら。雨漏りの主な原因と、すぐにできる応急処置、そしてプロに依頼すべきタイミングをお教えします。",
  },
];

const flowItems = [
  {
    number: "01",
    title: "お問い合わせ",
    text: "お電話・メール・お問い合わせフォームからお気軽にご連絡ください。ご要望を丁寧にヒアリングいたします。",
    image: "/images/consultation.jpg",
    alt: "電話で相談するスタッフ",
  },
  {
    number: "02",
    title: "現地調査",
    text: "経験豊富な専門スタッフが現地にお伺いし、建物の状態を詳細に調査いたします。もちろん無料です。",
    image: "/images/inspection-scene.jpg",
    alt: "現地調査の様子",
  },
  {
    number: "03",
    title: "診断レポート提出",
    text: "写真付きの詳細な診断レポートを作成し、建物の現状と今後の修繕計画をわかりやすくご説明します。正直な診断で、本当に必要な工事だけをお伝えします。これが久米技建の最大の強みです。",
    image: "/images/reason-01-generated.jpg",
    alt: "診断レポートの説明",
    highlight: true,
  },
  {
    number: "04",
    title: "ご相談・お見積もり",
    text: "診断結果に基づいた工事プランと、明瞭なお見積もりをご提出。ご不明な点は何でもご質問ください。",
    image: "/images/team-meeting.jpg",
    alt: "見積もり相談",
  },
  {
    number: "05",
    title: "施工",
    text: "自社職人による直営施工で、高品質な仕上がりをお約束。近隣への配慮も徹底して行います。",
    image: "/images/painting-work.jpg",
    alt: "施工の様子",
  },
  {
    number: "06",
    title: "完了検査",
    text: "施工完了後、お客様立会いのもと仕上がりを確認。細部まで品質チェックを行います。",
    image: "/images/crack-inspection.jpg",
    alt: "完了検査の様子",
  },
  {
    number: "07",
    title: "アフターサポート",
    text: "施工後も定期的なメンテナンスや点検をサポート。長期的な建物管理のパートナーとしてお付き合いします。",
    image: "/images/after-support.jpg",
    alt: "アフターサポート対応",
  },
];

const faqItems = [
  {
    question: "無料建物診断だけの相談でも依頼できますか？",
    answer:
      "はい、無料建物診断だけでもご相談いただけます。防水工事や大規模修繕がすぐに必要かどうかを正直に確認し、不要な工事はおすすめしません。",
  },
  {
    question: "西宮市以外も対応していますか？",
    answer:
      "西宮市を中心に、兵庫県内、神戸市、尼崎市、宝塚市、大阪市周辺まで対応しています。建物の規模や内容により対応可否を確認します。",
  },
  {
    question: "管理組合や法人の大規模修繕も相談できますか？",
    answer:
      "対応可能です。マンション管理組合、ビルオーナー、法人のお客様向けに、建物診断、修繕計画、見積もり、施工管理まで一貫して対応します。",
  },
  {
    question: "雨漏り補修は原因調査からお願いできますか？",
    answer:
      "可能です。雨漏りは原因が複数ある場合もあるため、現地調査で状況を確認し、防水層、外壁、シーリングなどの劣化箇所を見極めて補修方針をお伝えします。",
  },
];

function getRevealClass(index) {
  if (index === 1) return "reveal reveal--delay-1";
  if (index >= 2) return "reveal reveal--delay-2";
  return "reveal";
}

export default function TopCopyPage() {
  return (
    <main className="top-copy-page top-copy-page--refresh">
      <JsonLd data={reviewSchema} />
      <JsonLd data={faqJsonLd(faqItems)} />

      <TopCopyHero />

      {/* ========== TRUST BAR ========== */}
      <section className="trust-bar" aria-label="久米技建の実績と強み">
        <div className="container trust-bar__inner">
          {trustItems.map((item) => (
            <article className="trust-bar__item reveal" key={item.label}>
              <p className="trust-bar__label">{item.label}</p>
              <p className="trust-bar__value">
                <span>{item.value}</span>
                {item.unit ? <small>{item.unit}</small> : null}
              </p>
              <p className="trust-bar__text">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ========== PROBLEM SECTION ========== */}
      <section className="problem-section" id="problem">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-heading__en">Problems</span>
            <h2 className="section-heading__ja">こんなお悩みに対応します</h2>
            <span className="section-heading__line"></span>
          </div>
          <p className="section-intro reveal">
            防水工事、大規模修繕、雨漏り補修、外壁塗装、シーリング、建物診断まで、
            建物の状態とご予算に合わせて必要な工事を整理します。西宮市を中心に、兵庫・大阪の管理組合、法人、オーナー様からご相談をいただいています。
          </p>
          <div className="problem-grid">
            {problemItems.map((item, index) => (
              <a href={routePath(item.href)} className={`problem-card ${getRevealClass(index)}`} key={item.title}>
                <span className="problem-card__index">0{index + 1}</span>
                <h3 className="problem-card__title">{item.title}</h3>
                <p className="problem-card__text">{item.text}</p>
                <span className="problem-card__link">{item.label} <span aria-hidden="true">→</span></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== REASON SECTION ========== */}
      <section className="reason" id="reason">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-heading__en">Why Choose Us</span>
            <h2 className="section-heading__ja">
              久米技建が選ばれる<span className="text-accent">3つの理由</span>
            </h2>
            <span className="section-heading__line"></span>
          </div>

          <div className="reason__list">
            {reasonItems.map((item) => {
              const concernLines = item.concernText.split("\n");
              const concernMain = concernLines[0] ?? "";
              const concernBodyLines = concernLines.slice(1);
              return (
                <article className={`reason__item reason__item--${item.number} reveal`} key={item.number}>
                  <div className="reason__copy">
                    <div className="reason__copyTop">
                      <span className="reason__number en">{item.number}</span>
                      <div className="reason__copyMain">
                        <p className="reason__question">{item.concern}</p>
                        <h3 className="reason__concern">{concernMain}</h3>
                      </div>
                    </div>
                    <p className="reason__concernText">
                      {concernBodyLines.map((line, index) => (
                        <span key={`${item.number}-concern-${index}`}>{line}</span>
                      ))}
                    </p>
                    <div className="reason__solution">
                      <span className="reason__solutionLead">{item.solutionLead}</span>
                      <h4 className="reason__solutionTitle">{item.solutionTitle}</h4>
                      <p className="reason__solutionText">
                        {item.solutionText.split("\n").map((line, index) => (
                          <span key={`${item.number}-solution-${index}`}>{line}</span>
                        ))}
                      </p>
                    </div>
                  </div>
                  <div className="reason__visual">
                    <img src={assetPath(item.image)} alt={item.alt} loading="lazy" decoding="async" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SERVICE SECTION ========== */}
      <section className="service" id="service">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-heading__en">Service</span>
            <h2 className="section-heading__ja">対応サービス</h2>
            <span className="section-heading__line"></span>
          </div>
          <p className="section-intro reveal">
            「どの工事が必要か分からない」という段階からご相談ください。建物診断で状態を確認し、
            防水工事・雨漏り補修・外壁塗装・シーリング・大規模修繕の中から、必要な範囲だけを整理します。
            各サービスページでは、施工内容・費用目安・対応エリアを詳しくご案内しています。
          </p>
          <div className="service__feature reveal reveal--delay-1">
            <img src={assetPath("/images/service-team-crew.png")} alt="久米技建の自社職人チーム" className="service__featureImage" loading="lazy" decoding="async" />
            <div className="service__featureCopy">
              <h3 className="service__featureTitle">
                調べる人間が、直す。
                <br />
                だから、見落とさない。
              </h3>
              <p className="service__featureLead">建物の劣化を見つけた技術者が、そのまま直します。</p>
            </div>
          </div>
          <div className="section-chip-links reveal">
            {serviceQuickLinks.map((link) => (
              <a href={routePath(link.href)} className="btn btn--outline-dark btn--sm" key={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="service__grid">
            {serviceItems.map((card, index) => (
              <a href={routePath(card.href)} className={`service-card ${getRevealClass(index)}`} key={card.href}>
                <div className="service-card__image">
                  <img src={assetPath(card.image)} alt={card.alt} loading="lazy" decoding="async" />
                </div>
                <div className="service-card__body">
                  <p className="service-card__eyebrow">{card.label}</p>
                  <h3 className="service-card__title">{card.title}</h3>
                  <p className="service-card__text">{card.text}</p>
                  <span className="service-card__link">
                    詳しく見る <i className="fas fa-arrow-right"></i>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WORKS SECTION ========== */}
      <section className="works" id="works">
        <div className="container">
          <div className="reveal works__featureBanner">
            <img src={assetPath("/images/area-inspection-banner.png")} alt="現地調査を行う技術者" className="works__featureImage" loading="lazy" decoding="async" />
            <div className="works__featureFade" aria-hidden="true"></div>
            <div className="works__featureOverlay">
              <div className="section-heading works__featureHeading">
                <span className="section-heading__en">Works</span>
                <h2 className="section-heading__ja">施工事例</h2>
                <span className="section-heading__line"></span>
              </div>
              <p className="works__featureCopy">
                工事内容・工期・費用目安を掲載しています。
                <br />
                西宮市・神戸市・大阪市を中心とした実績から、
                <br />
                同種建物の改修イメージを具体的にご確認いただけます。
              </p>
            </div>
          </div>

          <div className="works__grid">
            {workItems.map((item, index) => (
              <a href={routePath(item.href)} className={`work-card ${getRevealClass(index)}`} key={item.href} data-category="case">
                <div className="work-card__image">
                  <img src={assetPath(item.image)} alt={item.alt} loading="lazy" decoding="async" />
                  <span className="work-card__category">{item.category}</span>
                </div>
                <div className="work-card__body">
                  <div className="work-card__meta">
                    <span className="work-card__meta-item">
                      <i className="fas fa-map-marker-alt"></i> {item.city}
                    </span>
                    <span className="work-card__meta-item">
                      <i className="fas fa-building"></i> {item.buildingType}
                    </span>
                  </div>
                  <h3 className="work-card__title">{item.title}</h3>
                  <p className="work-card__estimate">{item.estimate}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="section-more reveal">
            <a href={routePath("/works")} className="btn btn--outline-dark">
              すべての施工事例を見る <span className="btn__arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========== FLOW SECTION ========== */}
      <section className="flow" id="flow">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-heading__en">Flow</span>
            <h2 className="section-heading__ja">施工の流れ</h2>
            <span className="section-heading__line"></span>
          </div>

          <div className="flow__timeline">
            {flowItems.map((item, index) => (
              <article className={`flow__step ${item.highlight ? "flow__step--highlight" : ""} ${getRevealClass(index)}`} key={item.number}>
                <span className="flow__step-number">{item.number}</span>
                <div className="flow__card">
                  <div className="flow__step-content">
                    <h3 className="flow__step-title">{item.title}</h3>
                    <p className="flow__step-text">{item.text}</p>
                  </div>
                  <div className="flow__step-image">
                    <img src={assetPath(item.image)} alt={item.alt} loading="lazy" decoding="async" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== VOICE SECTION ========== */}
      <section className="voice" id="voice">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-heading__en">Voice</span>
            <h2 className="section-heading__ja">お客様の声</h2>
            <span className="section-heading__line"></span>
          </div>

          <VoiceCarousel />
        </div>
      </section>

      {/* ========== COLUMN SECTION ========== */}
      <section className="content-section content-section--gray" id="column">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-heading__en">Column</span>
            <h2 className="section-heading__ja">コラム・お役立ち情報</h2>
            <span className="section-heading__line"></span>
          </div>
          <p className="section-intro reveal">
            防水工事の種類と選び方、雨漏りの原因と対策、大規模修繕の進め方など、
            建物管理に必要な実務情報を定期的に更新しています。各記事から関連サービスページへも移動できます。
          </p>

          <div className="section-stack">
            {columnItems.map((item) => (
              <a href={routePath(item.href)} className="column-card reveal" key={item.href}>
                <div className="column-card__image">
                  <img src={assetPath(item.image)} alt={item.alt} loading="lazy" decoding="async" />
                </div>
                <div className="column-card__body">
                  <div className="column-card__date">{item.date}</div>
                  <h3 className="column-card__title">{item.title}</h3>
                  <p className="column-card__excerpt">{item.excerpt}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="section-more reveal">
            <a href={routePath("/column")} className="btn btn--outline-dark">
              コラム一覧を見る <span className="btn__arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="top-faq" id="faq">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-heading__en">FAQ</span>
            <h2 className="section-heading__ja">よくある質問</h2>
            <span className="section-heading__line"></span>
          </div>
          <div className="top-faq__list">
            {faqItems.map((item) => (
              <details className="top-faq__item reveal" key={item.question}>
                <summary className="top-faq__question">
                  <span>Q.</span>
                  <h3>{item.question}</h3>
                </summary>
                <div className="top-faq__answer">
                  <span>A.</span>
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-v2">
        <div className="cta-v2__shell">
          <div className="cta-v2__top reveal" style={{ "--cta-v2-bg-image": `url('${assetPath("/images/footer-cta-bg.png")}')` }}>
            <div className="container">
              <h2 className="cta-v2__title">
                <span className="cta-v2__title-accent">＼</span>
                建物のことで、お困りではありませんか？
                <span className="cta-v2__title-accent">／</span>
              </h2>
              <p className="cta-v2__subtext">専門スタッフが丁寧に対応いたします。ご相談・お見積もりは無料です。</p>

              <div className="cta-v2__actions">
                <a href="tel:0798-27-5653" className="cta-v2__action cta-v2__action--phone">
                  <span className="cta-v2__phone-icon" aria-hidden="true">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <span className="cta-v2__phone-copy">
                    <span className="cta-v2__phone-label">受付時間 平日9:00-18:00</span>
                    <span className="cta-v2__phone-number">0798-27-5653</span>
                  </span>
                </a>

                <a href={routePath("/contact")} className="cta-v2__action cta-v2__action--primary">
                  <span className="cta-v2__primary-copy">
                    <span className="cta-v2__primary-sub">＼ 建物診断・相談無料 ／</span>
                    <span className="cta-v2__primary-main">
                      <i className="far fa-envelope"></i> 無料診断を相談する
                    </span>
                  </span>
                  <span className="cta-v2__primary-arrow" aria-hidden="true">
                    ›
                  </span>
                </a>

                <a href={routePath("/simulation")} className="cta-v2__action cta-v2__action--secondary">
                  <i className="fas fa-calculator"></i> シミュレーションする
                </a>
              </div>

              <p className="cta-v2__reassurance">
                まだ依頼するか決まっていなくても大丈夫です。
                <span className="cta-v2__reassurance-accent">状況確認だけでもご相談ください。</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
