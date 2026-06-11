import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import { WORK_CATEGORIES, getWorksByRegion } from "@/lib/worksCatalog";

export const metadata = buildMetadata({
  title: "関西の施工事例｜久米技建",
  description:
    "兵庫・大阪を中心とした関西エリアの施工事例一覧。大規模修繕、防水工事、外壁塗装、シーリング、雨漏り補修の実績を掲載。",
  path: "/works/kansai",
  image: "/images/large-scale-aerial.jpg",
});

export default function Page() {
  const works = getWorksByRegion("kansai");

  return (
    <main>
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/works")} className="breadcrumb__link">施工事例</a></li><li className="breadcrumb__separator">›</li><li>関西</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Kansai Works</span><h1 className="page-hero__title">関西の施工事例</h1><p className="page-hero__description">兵庫・大阪を中心とした実績を工事種別で掲載しています。</p></section>

      <section className="content-section">
        <div className="container">
          <div className="works__filter" style={{ justifyContent: "flex-start", flexWrap: "wrap" }}>
            {[...new Set(works.map((w) => w.category))].map((key) => (
              <span key={key} className="works__filter-btn active" style={{ cursor: "default" }}>{WORK_CATEGORIES[key]}</span>
            ))}
          </div>

          <div className="works__grid">
            {works.map((item) => (
              <a href={routePath(`/works/${item.slug}`)} className="work-card" key={item.slug}>
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
