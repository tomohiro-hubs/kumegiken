import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { serviceCards } from "@/lib/serviceCards";
import { siteConfig } from "@/lib/siteConfig";
import VoiceCarousel from "@/components/VoiceCarousel";
import { buildMetadata } from "@/lib/seo";
import TopCopyHero from "@/components/TopCopyHero";
import JsonLd from "@/components/JsonLd";
import Image from "next/image";

export const metadata = buildMetadata({
  title: "防水工事・大規模修繕なら久米技建｜西宮市の防水専門会社【無料建物診断】",
  description:
    "西宮市の防水工事専門会社・久米技建。自社職人21名による直営施工で高品質な防水・外壁改修を実現。正直な建物診断に基づき、本当に必要な工事だけをご提案。兵庫・大阪エリア対応。無料建物診断・見積もり受付中。",
  path: "/",
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
  { href: "/service/waterproofing", label: "屋上防水" },
  { href: "/service/sealing", label: "シーリング工事" },
  { href: "/service/painting", label: "外壁塗装" },
  { href: "/service/large-scale-repair", label: "大規模修繕" },
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
    copy4Title: "担当者が変わるたび、話が伝わっているか不安です。",
    copy4Body:
      "調査した人、判断する人、施工する人が分かれていると、伝達ミスや判断のズレが起こりやすくなります。久米技建では、建物を診た技術者がそのまま施工計画を立て、必要に応じて現場にも入ります。情報ロスを抑えながら、必要な工事を最短工程で進められる体制です。",
    copy4Flow: ["現地調査", "施工計画", "現場対応"],
    copy4Outcome: ["情報ロスを抑制", "判断のズレを防止"],
  },
  {
    number: "02",
    image: "/images/waterproofing-hands.jpg",
    alt: "防水施工の様子",
    question: "02",
    concern: "こんな不安はありませんか？",
    concernTitle: "直しても、また漏れたら\nどうしよう…",
    concernText: "直しても、また漏れたらどうしよう…\n原因が特定しにくく、不十分な工事でしばらくの間は不安になりますよね。",
    solutionLead: "久米技建の答え",
    solutionTitle: "原因から直すので、再発しにくい！",
    solutionText:
      "見えない原因までしっかり特定し、根本から対処します。\nその場しのぎではなく、長期にわたり役立つ\n長く安心が続きます。",
    icon: "fa-solid fa-magnifying-glass",
    copy4Title: "直しても、また漏れたらどうしようと不安です。",
    copy4Body:
      "見えている症状だけを追いかける補修では、再発の不安が残ります。久米技建は、目に見えない原因まで丁寧に特定し、必要な工事を根本から組み立てます。その場しのぎではなく、再発しにくい状態を目指すことで、長く安心が続く修繕につなげます。",
    copy4Flow: ["症状の確認", "原因を特定", "根本から対処"],
    copy4Outcome: ["再発しにくい修繕", "長く安心が続く"],
  },
  {
    number: "03",
    image: "/images/team-meeting.jpg",
    alt: "担当者のご説明",
    question: "03",
    concern: "こんな不安はありませんか？",
    concernTitle: "どんな人が来るのか\n不安…",
    concernText: "どんな人が来るのか不安…\nスタッフの質は仕上がりの印。やっぱり不安ですよね。",
    solutionLead: "久米技建の答え",
    solutionTitle: "自社職人を中心に、一貫した品質で対応します",
    solutionText:
      "防水工事は自社職人が責任を持って施工。塗装・足場は連携する協力会社と、いつも同じチームで対応するため、品質のばらつきなく安心してお任せいただけます。",
    icon: "fa-solid fa-helmet-safety",
    copy4Title: "どんな人が来るのか分からず、品質面が心配です。",
    copy4Body:
      "スタッフの質は、そのまま仕上がりの質につながります。久米技建では、防水工事は自社職人が責任を持って施工し、塗装や足場も連携する協力会社と固定チームで対応します。現場ごとの品質のばらつきを抑え、説明から施工まで一貫した安心感を保ちます。",
    copy4Flow: ["自社職人が施工", "固定チームで連携", "品質を一定化"],
    copy4Outcome: ["説明と施工に一貫性", "ばらつきの少ない品質"],
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

const copy6FeatureItems = [
  {
    number: "1",
    title: "正直な建物診断",
    text: "本当に必要な工事だけを提案。不要な工事や費用を膨らませない。",
    image: "/images/top-copy-icon-01.png",
    alt: "建物診断を表すアイコン",
  },
  {
    number: "2",
    title: "自社職人の直営施工",
    text: "診断から施工まで自社で完結。品質にブレのない施工を行う。",
    image: "/images/top-copy-icon-02.png",
    alt: "自社職人を表すアイコン",
  },
  {
    number: "3",
    title: "一貫した管理体制",
    text: "調査・計画・施工の流れをつなぎ、無駄のない管理で進める。",
    image: "/images/top-copy-icon-03.png",
    alt: "管理体制を表すアイコン",
  },
];

function getRevealClass(index) {
  if (index === 1) return "reveal reveal--delay-1";
  if (index >= 2) return "reveal reveal--delay-2";
  return "reveal";
}

const COPY3_IMAGE_OVERRIDES = {
  "/images/service-team-crew.png": "/images/service-team-crew-copy3.jpg",
  "/images/area-inspection-banner.png": "/images/area-inspection-banner-copy3.webp",
  "/images/footer-cta-bg.png": "/images/footer-cta-bg-copy3.webp",
  "/images/footer-achievement-bg.png": "/images/footer-achievement-bg-copy3.webp",
};

const IMAGE_DIMENSIONS = {
  "/images/inspection-scene.jpg": { width: 640, height: 427 },
  "/images/waterproofing-hands.jpg": { width: 640, height: 427 },
  "/images/team-meeting.jpg": { width: 640, height: 427 },
  "/images/service-team-crew.png": { width: 6506, height: 2961 },
  "/images/service-team-crew-copy3.jpg": { width: 2286, height: 619 },
  "/images/area-inspection-banner.png": { width: 1717, height: 916 },
  "/images/area-inspection-banner-copy3.webp": { width: 1717, height: 916 },
  "/images/service-list-bg.png": { width: 1000, height: 530 },
  "/images/works-list-bg.png": { width: 1000, height: 350 },
  "/images/waterproofing-rooftop.jpg": { width: 1365, height: 1024 },
  "/images/scaffold-install.jpg": { width: 1365, height: 1024 },
  "/images/building-completed.jpg": { width: 1365, height: 1024 },
  "/images/consultation.jpg": { width: 640, height: 427 },
  "/images/reason-01-generated.jpg": { width: 640, height: 427 },
  "/images/painting-work.jpg": { width: 640, height: 427 },
  "/images/crack-inspection.jpg": { width: 640, height: 427 },
  "/images/after-support.jpg": { width: 640, height: 427 },
  "/images/large-scale-aerial.jpg": { width: 1820, height: 1024 },
  "/images/leak-repair.jpg": { width: 1365, height: 1024 },
  "/images/icon_optimal-fastest.png": { width: 913, height: 920 },
  "/images/icon_repair.png": { width: 1024, height: 1024 },
  "/images/icon_worker.png": { width: 1024, height: 1024 },
  "/images/laurel-wreath.png": { width: 451, height: 369 },
};

function resolveCopy3ImageSrc(src, optimizeForCopy3) {
  if (!optimizeForCopy3) return src;
  return COPY3_IMAGE_OVERRIDES[src] ?? src;
}

function TopScopedImage({
  src,
  alt,
  optimizeForCopy3,
  className,
  style,
  loading,
  decoding = "async",
  sizes = "100vw",
}) {
  const resolvedSrc = resolveCopy3ImageSrc(src, optimizeForCopy3);
  const dims = IMAGE_DIMENSIONS[resolvedSrc] ?? IMAGE_DIMENSIONS[src] ?? { width: 1200, height: 800 };

  if (!optimizeForCopy3) {
    return <img src={assetPath(resolvedSrc)} alt={alt} className={className} style={style} />;
  }

  return (
    <Image
      src={assetPath(resolvedSrc)}
      alt={alt}
      className={className}
      style={style}
      width={dims.width}
      height={dims.height}
      loading={loading ?? "lazy"}
      decoding={decoding}
      sizes={sizes}
    />
  );
}

export function TopCopyPageContent({ rootClassName = "top-copy-page" } = {}) {
  const optimizeForCopy3 = rootClassName.includes("top-copy-page--copy3");
  const optimizeForCopy4 = rootClassName.includes("top-copy-page--copy4");
  const optimizeForCopy6 = rootClassName.includes("top-copy-page--copy6");
  const ctaBgImage = resolveCopy3ImageSrc("/images/footer-cta-bg.png", optimizeForCopy3);
  const achievementBgImage = resolveCopy3ImageSrc("/images/footer-achievement-bg.png", optimizeForCopy3);

  return (
    <main className={rootClassName}>
      <JsonLd data={reviewSchema} />

      <TopCopyHero optimizeForCopy3={optimizeForCopy3} optimizeForCopy6={optimizeForCopy6} />

      {optimizeForCopy6 && (
        <>
          <section className="top-copy6-features" aria-label="久米技建の強み">
            <div className="top-copy6-features__inner">
              {copy6FeatureItems.map((item) => (
                <article className="top-copy6-feature-card" key={item.number}>
                  <span className="top-copy6-feature-card__bgnum" aria-hidden="true">
                    {item.number}
                  </span>
                  <div className="top-copy6-feature-card__copy">
                    <h2 className="top-copy6-feature-card__title">{item.title}</h2>
                    <p className="top-copy6-feature-card__text">{item.text}</p>
                  </div>
                  <div className="top-copy6-feature-card__icon">
                    <TopScopedImage src={item.image} alt={item.alt} optimizeForCopy3={false} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="top-copy6-phone-cta" aria-label="電話で相談">
            <div
              className="top-copy6-phone-cta__inner"
              style={{ "--top-copy6-phone-cta-bg-image": `url('${assetPath("/images/top-copy6-phone-cta-bg.png")}')` }}
            >
              <p className="top-copy6-phone-cta__lead">診断・相談受付中</p>
              <p className="top-copy6-phone-cta__sub">管理組合・オーナー・個人のお客様まで幅広く対応</p>
              <div className="top-copy6-phone-cta__row">
                <a href={`tel:${siteConfig.phone.tel}`} className="top-copy6-phone-cta__link" aria-label={`${siteConfig.phone.display}へ電話する`}>
                  <span className="top-copy6-phone-cta__icon" aria-hidden="true">
                    <img src={assetPath("/images/tell2.png")} alt="電話アイコン" />
                  </span>
                  <span className="top-copy6-phone-cta__number">{siteConfig.phone.display}</span>
                </a>
              </div>
              <p className="top-copy6-phone-cta__note">まずはお気軽にご相談ください</p>
            </div>
            <div className="top-copy6-phone-cta__buttons" aria-label="相談先を選ぶ">
              <a
                href={routePath("/service/large-scale-repair")}
                className="top-copy6-phone-cta__button top-copy6-phone-cta__button--left"
                style={{ "--top-copy6-phone-button-bg": `url('${assetPath("/images/top-copy6-cta-large-scale.png")}')` }}
              >
                <span className="top-copy6-phone-cta__button-meta">法人・管理組合の方へ</span>
                <span className="top-copy6-phone-cta__button-title">大規模修繕の相談</span>
                <span className="top-copy6-phone-cta__button-sub">マンション・ビルの大規模修繕はこちら</span>
              </a>
              <a
                href={routePath("/service/waterproofing")}
                className="top-copy6-phone-cta__button top-copy6-phone-cta__button--right"
                style={{ "--top-copy6-phone-button-bg": `url('${assetPath("/images/top-copy6-cta-waterproof.png")}')` }}
              >
                <span className="top-copy6-phone-cta__button-meta">個人の方へ</span>
                <span className="top-copy6-phone-cta__button-title">雨漏り・防水工事の相談</span>
                <span className="top-copy6-phone-cta__button-sub">戸建て・マンションの雨漏りや防水工事はこちら</span>
              </a>
            </div>
          </section>

          <section className="top-copy6-team-photo" aria-label="久米技建の集合写真" style={{ width: "1280px", maxWidth: "none" }}>
            <img
              src={assetPath("/images/top-copy6-team-photo-cropped.png")}
              alt="久米技建の集合写真"
              className="top-copy6-team-photo__image"
              style={{ width: "1280px", maxWidth: "none", height: "auto" }}
            />
          </section>
        </>
      )}

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
              const concernTitleLines = (item.concernTitle ?? concernMain).split("\n");

              if (optimizeForCopy4) {
                const isImageLeading = Number(item.number) % 2 === 0;
                const visual = (
                  <div className="reason__copy4Visual">
                    <TopScopedImage
                      src={item.image}
                      alt={item.alt}
                      optimizeForCopy3={optimizeForCopy3}
                    />
                  </div>
                );

                const body = (
                  <div className="reason__copy4Body">
                    <div className="reason__copy4Badge">
                      <span className="reason__copy4BadgeLabel">お悩み</span>
                      <span className="reason__copy4BadgeNumber en">{item.number}</span>
                    </div>
                    <h3 className="reason__copy4Title">{item.copy4Title}</h3>
                    <div className="reason__copy4Rule" aria-hidden="true">
                      <span className="reason__copy4RuleKink"></span>
                    </div>
                    <p className="reason__copy4Text">{item.copy4Body}</p>
                    <div className="reason__copy4Summary" aria-label="久米技建の対応ポイント">
                      <div className="reason__copy4Flow">
                        {item.copy4Flow.map((label, index) => (
                          <div className="reason__copy4FlowItem" key={`${item.number}-flow-${index}`}>
                            <span className="reason__copy4FlowStep">{index + 1}つ目</span>
                            <span className="reason__copy4FlowLabel">{label}</span>
                          </div>
                        ))}
                      </div>
                      <span className="reason__copy4Plus" aria-hidden="true">
                        +
                      </span>
                      <div className="reason__copy4Outcome">
                        {item.copy4Outcome.map((label, index) => (
                          <span className="reason__copy4OutcomeItem" key={`${item.number}-outcome-${index}`}>
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );

                return (
                  <article className={`reason__item reason__item--${item.number} reveal`} key={item.number}>
                    {isImageLeading ? visual : body}
                    {isImageLeading ? body : visual}
                  </article>
                );
              }

              return (
                <article className={`reason__item reason__item--${item.number} reveal`} key={item.number}>
                  <div className="reason__copy">
                    <div className="reason__copyTop">
                      <span className="reason__number en">{item.number}</span>
                      <div className="reason__copyMain">
                        <p className="reason__question">{item.concern}</p>
                        <h3 className="reason__concern">
                          {concernTitleLines.map((line, index) => (
                            <span key={`${item.number}-concern-title-${index}`}>
                              {line}
                              {index < concernTitleLines.length - 1 ? <br /> : null}
                            </span>
                          ))}
                        </h3>
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
                    <TopScopedImage src={item.image} alt={item.alt} optimizeForCopy3={optimizeForCopy3} />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== SERVICE SECTION ========== */}
      <section className="service" id="service">
        {optimizeForCopy6 ? (
          <div className="service__hero reveal">
            <TopScopedImage
              src="/images/service-list-bg.png"
              alt="サービス一覧背景"
              optimizeForCopy3={optimizeForCopy3}
              className="service__heroImage"
            />
            <div className="service__heroHeader">
              <span className="service__heroEn">SERVICE</span>
              <h2 className="service__heroJa">サービス一覧</h2>
              <div className="service__heroIntro">
                <p>屋上防水・シーリング工事・外壁塗装・大規模修繕まで、建物の状態に合わせて最適な工法をご提案します。</p>
                <p>各サービスページでは、施工内容・費用目安・対応エリアを詳しくご案内しています。</p>
              </div>
            </div>
            <div className="service__heroCopy">
              <h3 className="service__heroTitle">
                <span>調べる人間が、直す。</span>
                <br />
                <span>だから、見落とさない。</span>
              </h3>
              <p className="service__heroLead">建物の劣化を見つけた技術者が、そのまま直します。</p>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="section-heading reveal">
              <span className="section-heading__en">Service</span>
              <h2 className="section-heading__ja">サービス一覧</h2>
              <span className="section-heading__line"></span>
            </div>
            <p className="section-intro reveal">
              屋上防水・シーリング工事・外壁塗装・大規模修繕まで、建物の状態に合わせて最適な工法をご提案します。
              <br />
              各サービスページでは、施工内容・費用目安・対応エリアを詳しくご案内しています。
            </p>
            <div className="service__feature reveal reveal--delay-1">
              <TopScopedImage
                src="/images/service-team-crew.png"
                alt="久米技建の自社職人チーム"
                optimizeForCopy3={optimizeForCopy3}
                className="service__featureImage"
                style={optimizeForCopy3 ? undefined : { objectPosition: "100% 14%", width: "125%", height: "125%", transform: "scale(0.8)", transformOrigin: "100% 14%" }}
              />
              <div className="service__featureCopy">
                <h3 className="service__featureTitle">
                  調べる人間が、直す。
                  <br />
                  だから、見落とさない。
                </h3>
                <p className="service__featureLead">建物の劣化を見つけた技術者が、そのまま直します。</p>
              </div>
            </div>
          </div>
        )}

        <div className="container">
          <div className="section-chip-links reveal">
            {serviceQuickLinks.map((link) => (
              <a href={routePath(link.href)} className="btn btn--outline-dark btn--sm" key={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="service__grid">
            {serviceCards.map((card, index) => (
              <a href={routePath(card.href)} className={`service-card ${getRevealClass(index)}`} key={card.key}>
                <div className="service-card__image">
                  <TopScopedImage src={card.image} alt={card.title} optimizeForCopy3={optimizeForCopy3} />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{card.title}</h3>
                  <p className="service-card__text">{card.descriptionHome}</p>
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
          {optimizeForCopy6 ? (
            <div className="works__hero">
              <TopScopedImage
                src="/images/works-list-bg.png"
                alt="施工事例背景"
                optimizeForCopy3={optimizeForCopy3}
                className="works__heroImage"
              />
              <div className="works__heroHeader">
                <span className="works__heroEn">WORKS</span>
                <h2 className="works__heroJa">施工事例</h2>
                <div className="works__heroIntro">
                  <p>工事内容・工期・費用目安を掲載しています。西宮市・神戸市・大阪市を中心とした実績から、</p>
                  <p>同種建物の改修イメージを具体的にご確認いただけます。</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="reveal works__featureBanner" style={{ margin: "0 calc(50% - 50vw) 28px", width: "100dvw" }}>
              <TopScopedImage src="/images/area-inspection-banner.png" alt="現地調査を行う技術者" optimizeForCopy3={optimizeForCopy3} className="service__featureImage" style={{ objectPosition: "center 34%", height: "500px" }} />
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
          )}

          <div className="works__grid">
            {workItems.map((item, index) => (
              <a href={routePath(item.href)} className={`work-card ${getRevealClass(index)}`} key={item.href} data-category="case">
                <div className="work-card__image">
                  <TopScopedImage src={item.image} alt={item.alt} optimizeForCopy3={optimizeForCopy3} />
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
                    <TopScopedImage src={item.image} alt={item.alt} optimizeForCopy3={optimizeForCopy3} />
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
                  <TopScopedImage src={item.image} alt={item.alt} optimizeForCopy3={optimizeForCopy3} />
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

      {/* ========== CTA SECTION ========== */}
      <section className="cta-v2">
        <div className="cta-v2__shell">
          <div className="cta-v2__top reveal" style={{ "--cta-v2-bg-image": `url('${assetPath(ctaBgImage)}')` }}>
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
                    <span className="cta-v2__primary-sub">＼ 30秒で完了・相談無料 ／</span>
                    <span className="cta-v2__primary-main">
                      <i className="far fa-envelope"></i> 無料で相談する
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
                <span className="cta-v2__reassurance-accent">状況確認だけでもOKです。</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA SUPPORT FEATURES ========== */}
      <section className="cta-support reveal">
        <div className="container">
          <div className="cta-support__inner">
            <div className="cta-support__item">
              <div className="cta-support__icon">
                <TopScopedImage src="/images/icon_optimal-fastest.png" alt="最適工事を最短工事" optimizeForCopy3={optimizeForCopy3} />
              </div>
              <div className="cta-support__text-block">
                <h3 className="cta-support__title">最適工事を最短工事</h3>
                <p className="cta-support__desc">急な雨漏りにも迅速対応。状況を確認のうえ、現地を丁寧に調査します。</p>
              </div>
            </div>

            <div className="cta-support__item">
              <div className="cta-support__icon">
                <TopScopedImage src="/images/icon_repair.png" alt="原因から根本修理" optimizeForCopy3={optimizeForCopy3} />
              </div>
              <div className="cta-support__text-block">
                <h3 className="cta-support__title">原因から根本修理</h3>
                <p className="cta-support__desc">表面的な補修ではなく、原因を特定し再発しない根本的な修理を行います。</p>
              </div>
            </div>

            <div className="cta-support__item">
              <div className="cta-support__icon">
                <TopScopedImage src="/images/icon_worker.png" alt="自社職人が対応" optimizeForCopy3={optimizeForCopy3} />
              </div>
              <div className="cta-support__text-block">
                <h3 className="cta-support__title">自社職人が対応</h3>
                <p className="cta-support__desc">
                  経験豊富な自社職人が責任を持って
                  <br />
                  施工。中間マージンもかかりません。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ACHIEVEMENT BANNER ========== */}
      <div className="cta-achievement reveal" style={{ "--cta-achievement-bg-image": `url('${assetPath(achievementBgImage)}')` }}>
        <div className="cta-achievement__inner">
          <div className="cta-achievement__left">
            <TopScopedImage src="/images/laurel-wreath.png" alt="月桂樹" optimizeForCopy3={optimizeForCopy3} className="cta-achievement__laurel" />
            <span className="cta-achievement__label">累計施工実績</span>
            <span className="cta-achievement__number">1,000</span>
            <span className="cta-achievement__unit">件以上</span>
          </div>
          <div className="cta-achievement__divider"></div>
          <div className="cta-achievement__right">西宮市・神戸市・大阪市を中心に地域密着で対応しています。</div>
        </div>
      </div>
    </main>
  );
}

export default function TopCopyPage() {
  return <TopCopyPageContent />;
}
