import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import {
  WORK_REGIONS,
  WORK_CATEGORIES,
  WORKS_CATALOG,
  getWorksByRegion,
} from "@/lib/worksCatalog";

export const metadata = buildMetadata({
  title: "施工事例一覧（関西・関東対応）｜久米技建",
  description:
    "久米技建の施工事例一覧。関西・関東エリア別に、大規模修繕、防水工事、外壁塗装、シーリング、雨漏り補修の実績をご覧いただけます。",
  path: "/works",
  image: "/images/building-completed.jpg",
});

function WorkCard({ item }) {
  return (
    <a href={routePath(`/works/${item.slug}`)} className="work-card reveal">
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

export default function Page() {
  const kansaiCount = getWorksByRegion("kansai").length;
  const kantoCount = getWorksByRegion("kanto").length;

  return (
    <main>
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>施工事例</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Works</span><h1 className="page-hero__title">施工事例</h1><p className="page-hero__description">エリア別・工事種別で施工事例を探せます。</p></section>

      <section className="content-section content-section--gray">
        <div className="container">
          <div className="section-heading"><span className="section-heading__en">Region</span><h2 className="section-heading__ja">エリアから探す</h2><span className="section-heading__line"></span></div>
          <div className="service__grid" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
            <a href={routePath(WORK_REGIONS.kansai.path)} className="service-card reveal">
              <div className="service-card__image"><img src={assetPath("/images/works-region-kansai.png")} alt="関西の施工事例" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
              <div className="service-card__body"><h3 className="service-card__title">関西の施工事例</h3><p className="service-card__text">兵庫・大阪を中心に公開中。現在 {kansaiCount} 件。</p><span className="service-card__link">詳しく見る <i className="fas fa-arrow-right"></i></span></div>
            </a>
            <a href={routePath(WORK_REGIONS.kanto.path)} className="service-card reveal reveal--delay-1">
              <div className="service-card__image"><img src={assetPath("/images/works-region-kanto.png")} alt="関東の施工事例" style={{ width: "100%", height: "100%", objectFit: "cover" }} /></div>
              <div className="service-card__body"><h3 className="service-card__title">関東の施工事例</h3><p className="service-card__text">東京・神奈川・埼玉・千葉の施工事例を順次公開。現在 {kantoCount} 件。</p><span className="service-card__link">詳しく見る <i className="fas fa-arrow-right"></i></span></div>
            </a>
          </div>
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
