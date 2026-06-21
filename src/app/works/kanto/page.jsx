import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import { KANTO_DRAFT_CARDS, WORK_CATEGORIES } from "@/lib/worksCatalog";

export const metadata = buildMetadata({
  title: "関東の施工事例（準備中）｜久米技建",
  description:
    "東京・神奈川・埼玉・千葉エリアの施工事例ページ。公開準備中の工事事例を先行掲載しています。",
  path: "/works/kanto",
  image: "/images/building-completed.jpg",
});

export default function Page() {
  return (
    <main>
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/works")} className="breadcrumb__link">施工事例</a></li><li className="breadcrumb__separator">›</li><li>関東</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Kanto Works</span><h1 className="page-hero__title">関東の施工事例</h1><p className="page-hero__description">東京・神奈川・埼玉・千葉の事例を順次公開します。</p></section>

      <section className="content-section">
        <div className="container">
          <p className="section-intro">関東エリアの実績公開準備中です。お問い合わせいただければ、近い条件の事例を個別にご案内します。</p>
          <div className="works__grid">
            {KANTO_DRAFT_CARDS.map((item) => (
              <article className="work-card" key={item.title}>
                <div className="work-card__image">
                  <img src={assetPath(item.image)} alt={item.title} style={{ width: "100%", minHeight: "180px", objectFit: "cover", filter: "grayscale(20%)" }} />
                  <span className="work-card__category">{WORK_CATEGORIES[item.category]}</span>
                </div>
                <div className="work-card__body">
                  <div className="work-card__meta">
                    <span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> {item.location}</span>
                    <span className="work-card__meta-item"><i className="fas fa-building"></i> {item.buildingType}</span>
                  </div>
                  <h3 className="work-card__title">{item.title}</h3>
                  <p className="work-card__text">公開準備中のため詳細ページは未作成です。</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
