import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { serviceCards } from "@/lib/serviceCards";
import VoiceCarousel from "@/components/VoiceCarousel";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "防水工事・大規模修繕なら久米技建｜西宮市の防水専門会社【無料建物診断】",
  description:
    "西宮市の防水工事専門会社・久米技建。自社職人21名による直営施工で高品質な防水・外壁改修を実現。正直な建物診断に基づき、本当に必要な工事だけをご提案。兵庫・大阪エリア対応。無料見積もり受付中。",
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
    image: "/images/reason-01-generated.jpg",
    alt: "正直な建物診断の様子",
    titleLines: ["正直な診断レポートに基づく、", "必要な工事だけの提案"],
    text:
      "私たちは建物の状態を正確に把握し、お客様に「本当に必要な工事」だけをご提案します。不要な工事で費用を膨らませることはありません。第三者的な視点での診断レポートを作成し、透明性の高い情報をもとに、お客様が安心して判断できる環境を整えます。",
  },
  {
    number: "02",
    image: "/images/reason-02-generated.jpg",
    alt: "防水工事の専門技術",
    titleLines: ["防水の専門技術を核にした、", "一貫した施工管理体制"],
    text:
      "防水工事の専門会社として創業した技術的ルーツを活かし、調査から施工、アフターフォローまで一貫した管理体制を構築。中間マージンが発生しない直接施工だからこそ、コストを抑えながらも高品質な仕上がりを実現します。施工管理4名が現場を徹底管理しています。",
  },
  {
    number: "03",
    image: "/images/reason-03-generated.jpg",
    alt: "自社職人チーム",
    titleLines: ["自社職人21名の直営施工。", "品質にブレがない。"],
    text:
      "久米技建には21名の自社職人が在籍しています。外注に頼らず、教育・訓練を受けた自社の職人が直接施工するため、品質にばらつきがありません。一つひとつの現場に責任を持ち、丁寧な仕事でお客様の信頼にお応えしています。",
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

const areaTags = [
  { label: "西宮市", active: true },
  { label: "大阪市" },
  { label: "神戸市" },
  { label: "尼崎市" },
  { label: "宝塚市" },
  { label: "伊丹市" },
  { label: "芦屋市" },
  { label: "吹田市" },
  { label: "豊中市" },
  { label: "明石市" },
  { label: "姫路市" },
  { label: "その他関西圏" },
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

function getRevealClass(index) {
  if (index === 1) return "reveal reveal--delay-1";
  if (index >= 2) return "reveal reveal--delay-2";
  return "reveal";
}

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* ========== HERO / FIRST VIEW ========== */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url('${assetPath("/images/hero-test2-bg.jpg")}')` }}></div>
        <div className="hero__content">
          <p className="hero__lead reveal">
            建物<span className="hero__particle">の</span>
            <span className="text-accent">価値</span>を守り、未来へつなぐ。
          </p>
          <h1 className="hero__title reveal reveal--delay-1">
            <span className="hero__line">
              大規模修繕<span className="hero__particle">と</span>
            </span>
            <span className="hero__line">
              <span className="text-accent">防水塗装</span>
              <span className="hero__particle">の</span>
            </span>
            <span className="hero__line">プロフェッショナル</span>
          </h1>
          <p className="hero__description reveal reveal--delay-2">
            <span>確かな技術と誠実な施工で、</span>
            <span>安心・安全な建物環境を実現します。</span>
          </p>
          <p className="hero__tagline reveal reveal--delay-3">For the buildings. For the future.</p>
        </div>
        <div className="hero__badges">
          <img src={assetPath("/images/hero-badges-overlay.png")} alt="特長バッジ" />
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
            {reasonItems.map((item) => (
              <div className="reason__item reveal" key={item.number}>
                <div className="reason__image reason__image--raw">
                  <img src={assetPath(item.image)} alt={item.alt} />
                </div>
                <div className="reason__body">
                  <span className="reason__number en">{item.number}</span>
                  <h3 className="reason__title">
                    {item.titleLines[0]}
                    <br />
                    {item.titleLines[1]}
                  </h3>
                  <p className="reason__text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICE SECTION ========== */}
      <section className="service" id="service">
        <div className="container">
          <div className="section-heading reveal">
            <span className="section-heading__en">Service</span>
            <h2 className="section-heading__ja">サービス一覧</h2>
            <span className="section-heading__line"></span>
          </div>
          <p className="section-intro reveal">
            屋上防水・シーリング工事・外壁塗装・大規模修繕まで、建物の状態に合わせて最適な工法をご提案します。
            各サービスページでは、施工内容・費用目安・対応エリアを詳しくご案内しています。
          </p>
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
                  <img src={assetPath(card.image)} alt={card.title} />
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
          <div className="section-heading reveal">
            <span className="section-heading__en">Works</span>
            <h2 className="section-heading__ja">施工事例</h2>
            <span className="section-heading__line"></span>
          </div>
          <p className="section-intro reveal">
            ビフォー・アフター写真とあわせて、工事内容・工期・費用目安を掲載しています。
            西宮市・神戸市・大阪市を中心とした実績から、同種建物の改修イメージを具体的にご確認いただけます。
          </p>

          <div className="works__grid">
            {workItems.map((item, index) => (
              <a href={routePath(item.href)} className={`work-card ${getRevealClass(index)}`} key={item.href} data-category="case">
                <div className="work-card__image">
                  <img src={assetPath(item.image)} alt={item.alt} />
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
            <div className="flow__step reveal">
              <div className="flow__step-number">01</div>
              <div className="flow__step-content">
                <h3 className="flow__step-title">お問い合わせ</h3>
                <p className="flow__step-text">
                  お電話・メール・お問い合わせフォームからお気軽にご連絡ください。ご要望を丁寧にヒアリングいたします。
                </p>
              </div>
            </div>

            <div className="flow__step reveal">
              <div className="flow__step-number">02</div>
              <div className="flow__step-content">
                <h3 className="flow__step-title">現地調査</h3>
                <p className="flow__step-text">
                  経験豊富な専門スタッフが現地にお伺いし、建物の状態を詳細に調査いたします。もちろん無料です。
                </p>
              </div>
            </div>

            <div className="flow__step flow__step--highlight reveal">
              <div className="flow__step-number">03</div>
              <div className="flow__step-content">
                <h3 className="flow__step-title">診断レポート提出</h3>
                <p className="flow__step-text">
                  写真付きの詳細な診断レポートを作成し、建物の現状と今後の修繕計画をわかりやすくご説明します。
                  <strong>正直な診断</strong>
                  で、本当に必要な工事だけをお伝えします。これが久米技建の最大の強みです。
                </p>
              </div>
            </div>

            <div className="flow__step reveal">
              <div className="flow__step-number">04</div>
              <div className="flow__step-content">
                <h3 className="flow__step-title">ご相談・お見積もり</h3>
                <p className="flow__step-text">
                  診断結果に基づいた工事プランと、明瞭なお見積もりをご提出。ご不明な点は何でもご質問ください。
                </p>
              </div>
            </div>

            <div className="flow__step reveal">
              <div className="flow__step-number">05</div>
              <div className="flow__step-content">
                <h3 className="flow__step-title">施工</h3>
                <p className="flow__step-text">
                  自社職人による直営施工で、高品質な仕上がりをお約束。近隣への配慮も徹底して行います。
                </p>
              </div>
            </div>

            <div className="flow__step reveal">
              <div className="flow__step-number">06</div>
              <div className="flow__step-content">
                <h3 className="flow__step-title">完了検査</h3>
                <p className="flow__step-text">
                  施工完了後、お客様立会いのもと仕上がりを確認。細部まで品質チェックを行います。
                </p>
              </div>
            </div>

            <div className="flow__step reveal">
              <div className="flow__step-number">07</div>
              <div className="flow__step-content">
                <h3 className="flow__step-title">アフターサポート</h3>
                <p className="flow__step-text">
                  施工後も定期的なメンテナンスや点検をサポート。長期的な建物管理のパートナーとしてお付き合いします。
                </p>
              </div>
            </div>
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

      {/* ========== MESSAGE SECTION ========== */}
      <section className="message" id="message">
        <div className="container">
          <div className="message__inner">
            <div className="message__image reveal">
              <img src={assetPath("/images/president_photo.jpg")} alt="代表取締役 久米涼平" />
            </div>
            <div className="message__content reveal reveal--delay-1">
              <span className="message__label">Message</span>
              <h2 className="message__title">
                建物と向き合い、
                <br />
                人と向き合う仕事を。
              </h2>
              <p className="message__text">
                久米技建は2016年の創業以来、「正直な診断と確かな施工」を信条に歩んできました。私自身、防水職人として現場に立ち、建物と向き合い続けてきた経験から、「本当に必要な工事を、適正な価格で」という思いを貫いています。
                <br />
                <br />
                お客様の大切な資産である建物を、次の世代へ受け継ぐお手伝いをする。それが、私たち久米技建の使命です。
              </p>
              <div className="message__name">
                <div className="message__name-title">代表取締役</div>
                <div className="message__name-value">久米 涼平</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== AREA SECTION ========== */}
      <section className="area" id="area">
        <div className="container area__container">
          <div className="section-heading reveal">
            <span className="section-heading__en">Area</span>
            <h2 className="section-heading__ja">対応エリア</h2>
            <span className="section-heading__line"></span>
          </div>
          <h3 className="area__title reveal reveal--delay-1">兵庫県・大阪府を中心に対応</h3>
          <p className="area__intro reveal reveal--delay-1">
            西宮市を拠点に、関西圏全域で施工対応が可能です。まずはお気軽にご相談ください。
          </p>

          <div className="area__mapCard reveal reveal--delay-2">
            <img src={assetPath("/images/area-map-kansai.jpg")} alt="関西エリアマップ" className="area__mapImage" />
          </div>

          <div className="area__label reveal reveal--delay-3">
            <span className="area__labelLine"></span>
            <span className="area__labelText">対応エリア</span>
            <span className="area__labelLine"></span>
          </div>

          <div className="area__list reveal reveal--delay-4">
            {areaTags.map((tag) => (
              <span className={`area__tag${tag.active ? " area__tag--active" : ""}`} key={tag.label}>
                {tag.label}
              </span>
            ))}
          </div>

          <div className="area__ctaWrap reveal reveal--delay-4">
            <a href={routePath("/company/area")} className="btn btn--outline-dark btn--sm area__cta">
              対応エリアの詳細 <span className="btn__arrow">→</span>
            </a>
          </div>
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
                  <img src={assetPath(item.image)} alt={item.alt} />
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
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-section__title reveal">建物のことで、お困りではありませんか？</h2>
          <p className="cta-section__text reveal">まずは無料の建物診断から。お気軽にご相談ください。</p>
          <div className="cta-section__phone reveal">
            <a href="tel:0798-27-5653" className="cta-section__phone-number">
              <i className="fas fa-phone-alt"></i> 0798-27-5653
            </a>
            <div className="cta-section__phone-sub">受付時間：平日 9:00〜18:00</div>
          </div>
          <div className="cta-section__buttons reveal">
            <a href={routePath("/contact")} className="btn btn--primary btn--lg">
              <i className="fas fa-envelope"></i> 無料相談・お見積もり
            </a>
            <a href={routePath("/simulation")} className="btn btn--outline btn--lg">
              <i className="fas fa-calculator"></i> 見積もりシミュレーション
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
