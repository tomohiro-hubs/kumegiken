import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { serviceCards } from "@/lib/serviceCards";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, collectionPageJsonLd } from "@/lib/schema";
export const metadata = buildMetadata({
  title: "西宮の雨漏り・大規模修繕工事・防水工事サービス一覧｜久米技建",
  description: "西宮市を拠点に、雨漏り補修、大規模修繕工事、防水工事、外壁塗装、シーリング、建物診断に対応。サービス別の施工内容と相談先を一覧で確認できます。",
  path: "/service",
  image: "/images/hero-main.jpg",
});

export default function Page() {
  const listItems = serviceCards.map((card) => ({
    name: card.title,
    path: card.href,
  }));

  return (
    <main>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "ホーム", path: "/" },
          { name: "サービス一覧", path: "/service" },
        ])}
      />
      <JsonLd
        data={collectionPageJsonLd({
          name: "久米技建のサービス一覧",
          description:
            "雨漏り補修、防水工事、大規模修繕工事、外壁塗装、シーリング、建物診断の各サービス一覧ページです。",
          path: "/service",
          items: listItems,
        })}
      />
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>サービス一覧</li></ol></div></nav>

<section className="page-hero page-hero--no-deco">
    <span className="page-hero__label">Service</span>
    <h1 className="page-hero__title">サービス一覧</h1>
    <p className="page-hero__description">防水・修繕のプロフェッショナルとして、建物に関わるあらゆるお悩みに対応します。</p>
  </section>

  

  <section className="content-section">
    <div className="container">
      <div className="service__grid service__grid--service-page">
        {serviceCards.map((card, index) => {
          const revealClass =
            index % 3 === 1 ? "reveal reveal--delay-1" : index % 3 === 2 ? "reveal reveal--delay-2" : "reveal";
          return (
            <a href={routePath(card.href)} className={`service-card ${revealClass}`} key={card.key}>
              <div className="service-card__image">
                <img
                  src={assetPath(card.image)}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{card.title}</h3>
                <p className="service-card__text">{card.descriptionService}</p>
                <span className="service-card__link">詳しく見る <i className="fas fa-arrow-right"></i></span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>

  <section className="cta-section">
    <div className="container">
      <h2 className="cta-section__title reveal">どのサービスが最適かわからない方へ</h2>
      <p className="cta-section__text reveal">まずは状況をお聞かせください。雨漏り補修から大規模修繕工事まで、最適な進め方をご提案します。</p>
      <div className="cta-section__buttons reveal">
        <a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 無料相談・お見積もり</a>
        <a href={routePath("/simulation")} className="btn btn--outline btn--lg"><i className="fas fa-calculator"></i> 見積もりシミュレーション</a>
      </div>
    </div>
  </section>

  
    </main>
  );
}
