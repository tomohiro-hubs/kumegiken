import { routePath } from "@/lib/routePath";

const articles = {
  "large-scale-repair-guide": {
    date: "2026.03.01",
    title: "大規模修繕の進め方と費用の目安",
    category: "大規模修繕",
  },
  "leak-cause-and-fix": {
    date: "2026.02.20",
    title: "雨漏りの原因と応急処置｜プロが教える対処法",
    category: "雨漏り補修",
  },
  "rooftop-waterproofing-lifespan": {
    date: "2026.02.10",
    title: "マンション屋上防水の耐用年数と改修時期",
    category: "防水",
  },
  "painting-timing": {
    date: "2026.01.25",
    title: "外壁塗装の塗り替え時期の見極め方",
    category: "外壁塗装",
  },
  "fire-insurance-leak-repair": {
    date: "2026.01.10",
    title: "火災保険で雨漏り修理はできる？",
    category: "雨漏り補修",
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default async function Page({ params }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <main>
        <section className="page-hero">
          <span className="page-hero__label">Column</span>
          <h1 className="page-hero__title">記事が見つかりませんでした</h1>
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="page-hero">
        <span className="page-hero__label">Column</span>
        <h1 className="page-hero__title">{article.title}</h1>
      </section>
      <nav className="breadcrumb">
        <div className="container">
          <ol className="breadcrumb__list">
            <li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li>
            <li className="breadcrumb__separator">›</li>
            <li><a href={routePath("/column")} className="breadcrumb__link">コラム</a></li>
            <li className="breadcrumb__separator">›</li>
            <li>{article.title}</li>
          </ol>
        </div>
      </nav>
      <section className="content-section">
        <div className="container container--narrow">
          <article className="column-content reveal">
            <div className="column-meta">
              <span className="column-meta__date">{article.date}</span>
              <span className="column-meta__category">{article.category}</span>
            </div>
            <p>
              この記事は現在リライト中です。公開までしばらくお待ちください。
              お急ぎの場合はお問い合わせフォームよりご相談ください。
            </p>
          </article>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href={routePath("/column")} className="btn btn--outline-dark">← コラム一覧に戻る</a>
          </div>
        </div>
      </section>
    </main>
  );
}
