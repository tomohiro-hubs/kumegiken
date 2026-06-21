import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { collectionPageJsonLd } from "@/lib/schema";
import {
  WORK_REGIONS,
  WORK_CATEGORIES,
  WORKS_CATALOG,
  getWorksByRegion,
} from "@/lib/worksCatalog";

export const metadata = buildMetadata({
  title: "西宮の雨漏り・大規模修繕工事・防水工事の施工事例一覧｜久米技建",
  description:
    "西宮市を拠点に、雨漏り補修、大規模修繕工事、防水工事、外壁塗装、シーリングの施工事例を掲載。関西の公開事例を中心に、条件が近い実績は個別案内にも対応しています。",
  path: "/works",
  image: "/images/building-completed.jpg",
});

function WorkCard({ item }) {
  return (
    <a href={routePath(`/works/${item.slug}`)} className="work-card">
      <div className="work-card__image">
        <img src={assetPath(item.image)} alt={item.fullTitle} style={{ width: "100%", minHeight: "180px", objectFit: "cover" }} />
        <span className="work-card__category">{WORK_CATEGORIES[item.category]}</span>
      </div>
      <div className="work-card__body">
        <div className="work-card__meta">
          <span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> {item.location}</span>
          <span className="work-card__meta-item"><i className="fas fa-building"></i> {item.buildingType}</span>
        </div>
        <h3 className="work-card__title">{item.title}</h3>
      </div>
    </a>
  );
}

function RegionCard({ href, image, title, description, active = true }) {
  const content = (
    <>
      <div className="service-card__image">
        <img src={assetPath(image)} alt={title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div className="service-card__body">
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__text">{description}</p>
        <span className="service-card__link">
          {active ? "詳しく見る " : "個別案内をご相談 "}
          <i className="fas fa-arrow-right"></i>
        </span>
      </div>
    </>
  );

  if (active) {
    return (
      <a href={href} className="service-card">
        {content}
      </a>
    );
  }

  return (
    <div
      className="service-card"
      style={{ opacity: 0.9 }}
      aria-label={`${title}は公開準備中です`}
    >
      {content}
    </div>
  );
}

export default function Page() {
  const kansaiCount = getWorksByRegion("kansai").length;
  const kantoCount = getWorksByRegion("kanto").length;
  const workItems = WORKS_CATALOG.map((item) => ({
    name: item.fullTitle || item.title,
    path: `/works/${item.slug}`,
  }));

  return (
    <main>
      <JsonLd
        data={collectionPageJsonLd({
          name: "久米技建の施工事例一覧",
          description:
            "雨漏り補修、防水工事、大規模修繕工事、外壁塗装、シーリングの施工事例一覧です。公開中の関西実績を中心に掲載しています。",
          path: "/works",
          items: workItems,
        })}
      />
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>施工事例</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Works</span><h1 className="page-hero__title">施工事例</h1><p className="page-hero__description">西宮を含む関西の公開実績を中心に、工事種別や近い条件の事例を確認できます。</p></section>

      <section className="content-section content-section--gray">
        <div className="container">
          <div className="section-heading"><span className="section-heading__en">Region</span><h2 className="section-heading__ja">エリアから探す</h2><span className="section-heading__line"></span></div>
          <div className="service__grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <RegionCard
              href={routePath(WORK_REGIONS.kansai.path)}
              image="/images/works-region-kansai.png"
              title="関西の施工事例"
              description={`兵庫・大阪を中心に公開中。現在 ${kansaiCount} 件。`}
            />
            <RegionCard
              image="/images/works-region-kanto.png"
              title="関東の施工事例"
              description={
                kantoCount > 0
                  ? `東京・神奈川・埼玉・千葉の施工事例を順次公開。現在 ${kantoCount} 件。`
                  : "東京・神奈川・埼玉・千葉の事例は公開準備中です。近い条件の実績はお問い合わせで個別にご案内します。"
              }
              active={kantoCount > 0}
              href={kantoCount > 0 ? routePath(WORK_REGIONS.kanto.path) : undefined}
            />
          </div>
          {kantoCount === 0 ? (
            <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "20px" }}>
              <a href={routePath("/contact")} className="btn btn--outline-dark">関東事例を問い合わせる →</a>
            </div>
          ) : null}
        </div>
      </section>

      <section className="content-section">
        <div className="container">
          <div className="section-heading"><span className="section-heading__en">Latest Works</span><h2 className="section-heading__ja">最新の施工事例</h2><span className="section-heading__line"></span></div>
          <div className="works__grid">
            {WORKS_CATALOG.slice(0, 6).map((item) => (
              <WorkCard item={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
