import { routePath } from "@/lib/routePath";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { toAbsoluteUrl } from "@/lib/siteUrl";

const SITE_URL = "https://kumegiken.co.jp";
const ARTICLE_AUTHOR = "久米技建 技術監修チーム";

const articles = {
  "large-scale-repair-guide": {
    date: "2026.03.01",
    title: "大阪・兵庫のマンション大規模修繕｜進め方と費用目安",
    category: "大規模修繕",
    description:
      "大阪・兵庫エリアのマンション大規模修繕の進め方、費用相場、工事会社選びのポイントを解説します。",
    relatedServices: [
      { label: "大規模修繕工事", href: "/service/large-scale-repair" },
      { label: "建物診断", href: "/service/building-inspection" },
    ],
  },
  "leak-cause-and-fix": {
    date: "2026.02.20",
    title: "雨漏りの原因と応急処置｜プロが教える対処法",
    category: "雨漏り補修",
    description:
      "雨漏りの主な原因、緊急時の応急処置、再発防止のための補修ポイントをわかりやすくまとめました。",
    relatedServices: [
      { label: "雨漏り調査・補修", href: "/service/leak-repair" },
      { label: "防水工事", href: "/service/waterproofing" },
    ],
  },
  "rooftop-waterproofing-lifespan": {
    date: "2026.02.10",
    title: "兵庫・大阪のマンション屋上防水｜耐用年数と改修時期",
    category: "防水",
    description:
      "兵庫・大阪のマンション屋上防水について、工法別の耐用年数と改修時期、費用の考え方を解説します。",
    relatedServices: [
      { label: "防水工事", href: "/service/waterproofing" },
      { label: "建物診断", href: "/service/building-inspection" },
    ],
  },
  "painting-timing": {
    date: "2026.01.25",
    title: "外壁塗装の塗り替え時期の見極め方",
    category: "外壁塗装",
    description:
      "外壁塗装の塗り替え時期を判断する劣化サインと、塗料選び・施工時期の注意点を解説します。",
    relatedServices: [
      { label: "外壁塗装", href: "/service/painting" },
      { label: "シーリング工事", href: "/service/sealing" },
    ],
  },
  "fire-insurance-leak-repair": {
    date: "2026.01.10",
    title: "火災保険で雨漏り修理はできる？",
    category: "雨漏り補修",
    description:
      "火災保険が適用される雨漏り修理の条件、申請時の注意点、調査から補修までの流れを解説します。",
    relatedServices: [
      { label: "雨漏り調査・補修", href: "/service/leak-repair" },
      { label: "建物診断", href: "/service/building-inspection" },
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

const toIsoDate = (dateText) => dateText.replace(/\./g, "-");

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  return buildMetadata({
    title: article.title,
    description: article.description,
    path: `/column/${slug}`,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const articleUrl = toAbsoluteUrl(`/column/${slug}`);
  const publishedDate = toIsoDate(article.date);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      "@type": "Person",
      name: ARTICLE_AUTHOR,
    },
    publisher: {
      "@type": "Organization",
      name: "株式会社久米技建",
      url: SITE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
  };
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "コラム", path: "/column" },
    { name: article.title, path: `/column/${slug}` },
  ]);

  return (
    <main>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
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
      <section className="page-hero">
        <span className="page-hero__label">Column</span>
        <h1 className="page-hero__title">{article.title}</h1>
      </section>
      
      <section className="content-section">
        <div className="container container--narrow">
          <article className="column-content reveal">
            <div className="column-meta">
              <span className="column-meta__date">{article.date}</span>
              <span className="column-meta__category">{article.category}</span>
            </div>
            <div style={{ background: "var(--color-bg-light)", borderRadius: "12px", padding: "18px 20px", marginBottom: "20px" }}>
              <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.8" }}>
                <strong>監修者：</strong>{ARTICLE_AUTHOR}<br />
                <strong>専門領域：</strong>防水工事・大規模修繕・雨漏り調査
              </p>
            </div>
            <p>
              この記事は現在リライト中です。公開までしばらくお待ちください。
              お急ぎの場合はお問い合わせフォームよりご相談ください。
            </p>
            <h2>関連サービス</h2>
            <ul>
              {article.relatedServices.map((service) => (
                <li key={service.href}>
                  <a href={routePath(service.href)}>{service.label}</a>
                </li>
              ))}
            </ul>
            <div style={{ background: "var(--color-bg-light)", borderRadius: "12px", padding: "20px", marginTop: "36px" }}>
              <h2 style={{ marginTop: 0 }}>監修者情報</h2>
              <p style={{ marginBottom: "8px" }}><strong>{ARTICLE_AUTHOR}</strong></p>
              <p style={{ margin: 0 }}>久米技建の防水工事・大規模修繕・雨漏り調査に関する実務知見をもとに、内容の正確性と施工現場での再現性を確認しています。</p>
            </div>
          </article>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href={routePath("/column")} className="btn btn--outline-dark">← コラム一覧に戻る</a>
          </div>
        </div>
      </section>
    </main>
  );
}
