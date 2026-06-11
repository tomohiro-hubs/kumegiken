import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { toAbsoluteUrl } from "@/lib/siteUrl";

const SITE_URL = "https://kumegiken.co.jp";
const ARTICLE_PATH = "/column/nishinomiya-ashiba";
const ARTICLE_TITLE = "西宮の防水・雨漏り修理｜足場工事の役割と重要性";
const ARTICLE_DESCRIPTION =
  "西宮で防水や雨漏り修理を行うなら足場工事が欠かせません。安全性と施工精度を高め、火災保険適用で費用負担を軽減可能。調査・見積もり無料。";
const ARTICLE_AUTHOR = "久米技建 技術監修チーム";

export const metadata = {
  ...buildMetadata({
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    path: ARTICLE_PATH,
    image: "/images/scaffold-install.jpg",
  }),
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    datePublished: "2025-08-11",
    dateModified: "2025-08-11",
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
      "@id": toAbsoluteUrl(ARTICLE_PATH),
    },
  };
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "コラム", path: "/column" },
    { name: "西宮の防水・雨漏り修理における足場工事の役割と重要性", path: ARTICLE_PATH },
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
            <li>西宮の防水・雨漏り修理における足場工事</li>
          </ol>
        </div>
      </nav>
      <section className="page-hero">
        <span className="page-hero__label">Column</span>
        <h1 className="page-hero__title">西宮の防水・雨漏り修理における<br />足場工事の役割と重要性</h1>
      </section>

      <section className="content-section">
        <div className="container container--narrow">
          <div className="article-content">
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              最終更新日：2025年8月11日 / カテゴリ：雨漏り補修
            </p>

            <p>
              西宮エリアをはじめ、戸建て住宅やマンション・ビルのメンテナンスで「防水工事」や「雨漏り修理」を行う際、工事の最初に行われるのが<strong>「仮設足場工事」</strong>です。
            </p>
            <p>
              「ただの作業用の台なのに、なぜ高額な費用を払ってまで足場を組む必要があるのか？」と疑問に思うオーナー様も少なくありません。しかし、足場は単なる作業スペースではなく、施工品質を担保し、現場の安全を守り、さらには近隣トラブルを防ぐための極めて重要な役割を担っています。
            </p>
            <p>
              この記事では、防水・雨漏り修理において足場工事が不可欠な理由や、工事の流れにおける位置づけ、そして足場費用を抑えるために火災保険を活用する方法について解説します。
            </p>

            <div style={{ margin: '30px 0' }}>
              <img
                src={assetPath("/images/scaffold-install.jpg")}
                alt="足場設置の施工風景"
                style={{ width: '100%', borderRadius: '12px', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>

            <h2>なぜ防水・雨漏り修理に「足場工事」が必要なのか？（3つの重要性）</h2>
            <p>
              外壁や屋根、バルコニーといった高所での作業を伴う防水・雨漏り修理において、足場が必要とされる主な理由は以下の3点です。
            </p>

            <h3>1. 作業員の安全確保と事故防止</h3>
            <p>
              高所での作業には常に転落のリスクが伴います。労働安全衛生法により、2メートル以上の高所作業では適切な作業床（足場）の設置が義務付けられています。安定した足元を確保することで、職人が安心して集中して作業に取り組むことができ、重大な事故を防ぐことができます。
            </p>

            <h3>2. 施工品質・精度の向上</h3>
            <p>
              防水工事やシーリング（コーキング）の打ち替え、外壁塗装などの作業は、非常に繊細な技術が要求されます。不安定なハシゴやゴンドラの上からでは、防水材を均一に塗布したり、ひび割れを細かく補修したりすることが困難になります。強固で安定した足場があるからこそ、細部まで行き届いた高品質な施工が可能になります。
            </p>

            <h3>3. 近隣住民様への配慮とトラブル防止</h3>
            <p>
              足場を組む際には、その周囲を「メッシュシート（飛散防止ネット）」で覆います。これにより、高圧洗浄時の水しぶきや、塗料の飛散、下地を削った際に出る埃などが隣家に飛び散るのを防ぎます。住宅が密集している西宮の市街地において、近隣トラブルを避けるためにメッシュシートと足場の存在は不可欠です。
            </p>

            <h2>防水・雨漏り修理の全体フローと足場工事の位置づけ</h2>
            <p>
              実際の工事がどのように進むのか、足場工事がどのタイミングで行われるのか、全体の流れを確認しておきましょう。
            </p>
            <div style={{ background: 'var(--color-bg-light)', borderRadius: '12px', padding: '20px', margin: '24px 0' }}>
              <ol style={{ margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                <li><strong>現地調査・建物診断：</strong>雨漏り箇所や劣化状況をサーモグラフィや目視で詳細に調査し、原因を特定します。</li>
                <li><strong>足場の架設（設置）：</strong>工事初日に専門の足場職人が現場に入り、安全で強固な足場を組み立て、メッシュシートを張ります。</li>
                <li><strong>下地補修・シーリング工事：</strong>ひび割れ補修や、サッシ周りの古いシーリング材を新しく打ち替えるなど、防水前の基礎処理を行います。</li>
                <li><strong>防水・塗装工事：</strong>ウレタン防水やシート防水など、状況に合わせた最適な工法で新しい防水層を形成します。</li>
                <li><strong>足場の解体・清掃・完工：</strong>施工完了後の検査に合格した後、足場を安全に解体し、周辺清掃を行って引き渡しとなります。</li>
              </ol>
            </div>

            <h2>足場代は火災保険でカバーできる？適用条件とポイント</h2>
            <p>
              防水工事や雨漏り修理に欠かせない足場工事ですが、その費用は工事総額の中でも大きな割合を占めます。しかし、特定の条件下では<strong>「火災保険」</strong>を利用して足場代を含む修理費用を補償してもらえる可能性があります。
            </p>
            <ul>
              <li><strong>適用対象となる原因：</strong>台風や強風、雹（ひょう）、大雪などの「自然災害（風災・雹災・雪災）」によって屋根や外壁が破損し、それが原因で雨漏りが発生した場合。</li>
              <li><strong>足場費用も補償される理由：</strong>火災保険の「損害保険金」には、実際の修理費用だけでなく、その修理を行うために必要不可欠な付帯工事（仮設足場工事など）の費用も含まれるのが一般的です。</li>
            </ul>
            <div style={{ background: 'var(--color-bg-light)', borderLeft: '4px solid #cf2e2e', padding: '15px 20px', margin: '20px 0', borderRadius: '0 8px 8px 0' }}>
              <p style={{ margin: 0, fontWeight: 'bold', color: '#cf2e2e' }}>⚠️ 経年劣化による雨漏りの場合は保険適用外となります。</p>
              <p style={{ margin: '8px 0 0 0', fontSize: '14px' }}>また、申請には被災箇所の写真や適切な見積書が必要となりますので、専門知識を持った業者への相談が推奨されます。</p>
            </div>

            <h2>西宮で足場から防水・雨漏り修理まで一貫対応する「久米技建」</h2>
            <p>
              足場工事を外部の足場専門業者に完全丸投げしている会社の場合、中間マージンが発生して費用が高くなったり、スケジュール調整がうまくいかずに工期が延びたりすることがあります。
            </p>
            <p>
              株式会社久米技建では、西宮市を中心に関西エリアにおいて、自社管理のもとで<strong>足場架設から下地補修、防水・雨漏り修理、塗装工事までを一貫してワンストップ</strong>で行っています。これにより、余計な中間マージンをカットし、迅速かつ高品質な施工を適正価格でご提供することが可能です。
            </p>
            <p>
              「雨漏りしているかもしれない」「そろそろ防水のメンテナンス時期かも」とお悩みの管理会社様、オーナー様は、ぜひお気軽にご相談ください。現地調査およびお見積もりは無料で承っております。
            </p>

            <h2>関連サービス</h2>
            <ul>
              <li><a href={routePath("/service/leak-repair")}>雨漏り調査・補修</a></li>
              <li><a href={routePath("/service/waterproofing")}>防水工事（ウレタン・シート・FRP・アスファルト）</a></li>
              <li><a href={routePath("/service/building-inspection")}>建物診断</a></li>
            </ul>

            <div style={{ background: 'var(--color-primary)', color: 'white', padding: '30px', borderRadius: '12px', margin: '40px 0', textAlign: 'center' }}>
              <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>確実な足場と丁寧な施工で建物を雨漏りから守ります</p>
              <a href={routePath("/contact")} className="btn btn--primary">
                <i className="fas fa-envelope"></i> 無料相談・建物診断を依頼する
              </a>
            </div>

            <div style={{ textAlign: 'center', marginTop: '48px' }}>
              <a href={routePath("/column")} className="btn btn--outline-dark">← コラム一覧に戻る</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
