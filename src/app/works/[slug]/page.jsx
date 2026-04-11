import { routePath } from "@/lib/routePath";

const works = {
  "nishinomiya-building-sealing-01": "商業ビル外壁シーリング打替え工事",
  "takarazuka-mansion-waterproofing-01": "マンション屋上シート防水工事",
  "osaka-mansion-large-scale-repair-01": "分譲マンション第1回大規模修繕工事",
  "itami-apartment-painting-01": "賃貸アパート外壁塗装工事",
  "ashiya-house-waterproofing-01": "戸建て住宅バルコニーFRP防水工事",
  "suita-factory-waterproofing-01": "工場屋上アスファルト防水改修工事",
};

export function generateStaticParams() {
  return Object.keys(works).map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const title = works[slug];

  if (!title) {
    return (
      <main>
        <section className="page-hero">
          <span className="page-hero__label">Works</span>
          <h1 className="page-hero__title">施工事例が見つかりませんでした</h1>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-hero">
        <span className="page-hero__label">Works</span>
        <h1 className="page-hero__title">{title}</h1>
      </section>
      <nav className="breadcrumb">
        <div className="container">
          <ol className="breadcrumb__list">
            <li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li>
            <li className="breadcrumb__separator">›</li>
            <li><a href={routePath("/works")} className="breadcrumb__link">施工事例</a></li>
            <li className="breadcrumb__separator">›</li>
            <li>{title}</li>
          </ol>
        </div>
      </nav>
      <section className="content-section">
        <div className="container container--narrow">
          <article className="column-content reveal">
            <p>
              この施工事例の詳細ページは現在編集中です。
              詳細資料をご希望の場合は、お問い合わせよりご連絡ください。
            </p>
          </article>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href={routePath("/works")} className="btn btn--outline-dark">← 施工事例一覧に戻る</a>
          </div>
        </div>
      </section>
    </main>
  );
}
