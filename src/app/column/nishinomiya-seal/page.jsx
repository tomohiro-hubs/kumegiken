import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { toAbsoluteUrl } from "@/lib/siteUrl";

const SITE_URL = "https://kumegiken.co.jp";
const ARTICLE_PATH = "/column/nishinomiya-seal";
const ARTICLE_TITLE = "西宮の防水・雨漏り対策｜シール工事（コーキング）の重要性と施工タイミング";
const ARTICLE_DESCRIPTION =
  "西宮で防水や雨漏りにお困りならシール工事が重要です。外壁やサッシ周りの隙間を防ぎ、雨水の侵入や劣化を防止。築10年前後の点検・施工がおすすめ。無料調査・お見積もり受付中。";
const ARTICLE_AUTHOR = "久米技建 技術監修チーム";

export const metadata = {
  ...buildMetadata({
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    path: ARTICLE_PATH,
    image: "/images/sealing-work.jpg",
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
    { name: "西宮で防水・雨漏り対策に必須のシール工事とは？", path: ARTICLE_PATH },
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
            <li>西宮の防水・雨漏り対策とシール工事</li>
          </ol>
        </div>
      </nav>
      <section className="page-hero">
        <span className="page-hero__label">Column</span>
        <h1 className="page-hero__title">西宮の防水・雨漏り対策に必須！<br />シール工事（シーリング）の重要性</h1>
      </section>

      <section className="content-section">
        <div className="container container--narrow">
          <div className="article-content">
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              最終更新日：2025年8月11日 / カテゴリ：雨漏り補修
            </p>

            <p>
              西宮市をはじめとしたエリアで「防水」や「雨漏り」でお困りの方から、非常によくいただくご相談のひとつが<strong>シール工事（シーリング工事・コーキング工事）</strong>です。
            </p>
            <p>
              外壁や窓まわりの隙間を埋める大切な工程ですが、その重要性は意外と知られていません。建物はコンクリートやサイディングなどの部材を組み立てて造られていますが、その部材同士の「継ぎ目（目地）」や窓枠の隙間をゴム状の素材で埋めているのがシーリング材です。この部分が劣化することで、雨水の侵入ルートが簡単にできてしまいます。
            </p>
            <p>
              この記事では、シール工事の役割と必要性、施工の流れ、そして適切な施工タイミングについて詳しく解説します。
            </p>

            <div style={{ margin: '30px 0' }}>
              <img
                src={assetPath("/images/sealing-work.jpg")}
                alt="シール工事（コーキング）の施工風景"
                style={{ width: '100%', borderRadius: '12px', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>

            <h2>シール工事（シーリング工事）とは？</h2>
            <p>
              シール工事とは、建物の外壁材（サイディングやコンクリートなど）の継ぎ目（目地）や、窓サッシ、ドア、換気口のまわりなど、部材同士が接する隙間に「シーリング材（コーキング材）」と呼ばれるゴム状の防水資材を充填する工事のことです。
            </p>
            <p>
              これにより、建物に生じる隙間から雨水や空気が侵入するのを防ぐとともに、建物が地震や風、気温変化で揺れたり伸縮したりする際の「緩衝材（クッション）」としての役割も果たしています。
            </p>

            <h2>なぜ防水・雨漏り対策にシール工事が必要なのか？（3つの重要性）</h2>
            <p>
              シール工事が建物の維持管理において欠かせない理由は、主に以下の3点に集約されます。
            </p>

            <h3>1. 隙間からの雨水浸入を徹底的に防止する</h3>
            <p>
              外壁の継ぎ目や窓まわりは、最も水が侵入しやすい弱点です。シーリング材が健全な状態であれば隙間なく密着し、雨水を完全にシャットアウトします。しかし、これが劣化してひび割れたり隙間ができたりすると、雨水が建物内部へ直接侵入し、雨漏りを引き起こす最大の原因になります。
            </p>

            <h3>2. 建物内部の腐食と二次被害を防ぐ</h3>
            <p>
              シーリングの隙間から侵入した雨水は、壁の裏側で木材の腐食や鉄骨のサビを進行させます。また、湿気がこもることでカビが発生し、アレルギーなどの健康被害を招くほか、シロアリを呼び寄せる原因にもなります。これらは後々の大規模な修繕工事（高額なコスト）につながるリスクがあります。
            </p>

            <h3>3. 外壁材の「伸縮・揺れ」を吸収して破損を防ぐ</h3>
            <p>
              外壁材（サイディングやコンクリート）は、気温変化による熱収縮や、地震の揺れ、車の振動などによって絶えず微細に動いています。シーリング材がクッションとしてその揺れや伸縮を吸収することで、外壁材同士がぶつかり合って割れたりヒビが入ったりするのを防ぎます。
            </p>

            <h2>シール工事の一般的な施工フロー</h2>
            <p>
              シール工事は、一般的に古いシーリング材をすべて撤去し、新しいものを充填する「打ち替え」を行います。
            </p>
            <div style={{ background: 'var(--color-bg-light)', borderRadius: '12px', padding: '20px', margin: '24px 0' }}>
              <ol style={{ margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                <li><strong>劣化調査・診断：</strong>目地のひび割れや剥離、硬化などの状態を確認します。</li>
                <li><strong>既存シーリング材の撤去：</strong>カッターなどを用いて、古くなって硬化したシーリング材をきれいに取り除きます。</li>
                <li><strong>清掃・養生テープ貼り：</strong>目地内の埃を掃除し、周囲の外壁が汚れないようテープで養生します。</li>
                <li><strong>プライマー（接着剤）の塗布：</strong>新しいシーリング材を外壁面に強力に密着させるため、下塗り材を塗布します。</li>
                <li><strong>新規シーリング材の充填：</strong>専用のコーキングガンを使い、隙間なくシーリング材を注入します。</li>
                <li><strong>ヘラ仕上げ・養生撤去：</strong>ヘラで平らに均して表面を美しく整え、養生テープを剥がして完成です。</li>
              </ol>
            </div>

            <h2>西宮でシール工事を行うべきタイミング</h2>
            <p>
              一般的に、シーリング材の寿命は<strong>約5年〜10年</strong>と言われています。以下のような劣化サインが見られたら、メンテナンスの検討が必要です。
            </p>
            <ul>
              <li><strong>ひび割れ・破断：</strong>表面に細かいひび割れが入ったり、真ん中から裂けてしまっている。</li>
              <li><strong>剥離（隙間）：</strong>外壁面とシールの間に隙間ができ、中の下地が見えている。</li>
              <li><strong>硬化：</strong>ゴム特有の弾力性が失われ、カチカチに硬くなっている。</li>
              <li><strong>雨漏り・にじみ：</strong>窓サッシまわりなどから雨水がにじみ出ている。</li>
              <li><strong>外壁塗装とのセット施工：</strong>築10年前後の外壁塗装工事とセットで行うことで、足場費用を共有できるためコスト削減になります。</li>
            </ul>

            <h2>まとめ</h2>
            <p>
              西宮で「防水」や「雨漏り」対策を検討するなら、シール工事は欠かせない工程です。外壁や屋上の防水工事とあわせてメンテナンスすることで、建物を長持ちさせ、将来的な修繕費用を抑えることができます。
            </p>
            <p>
              株式会社久米技建では、西宮市を中心に関西エリアにおいて、経験豊富な自社職人が一貫してシール工事・防水工事に対応しております。
            </p>
            <p>
              「サッシ周りの隙間が気になる」「外壁のコーキングが裂けている」といったお悩みを持つ管理会社様やオーナー様は、どうぞお気軽にご相談ください。現地調査と見積もりは無料で実施しております。
            </p>

            <h2>関連サービス</h2>
            <ul>
              <li><a href={routePath("/service/sealing")}>シール工事（コーキング）</a></li>
              <li><a href={routePath("/service/leak-repair")}>雨漏り調査・補修</a></li>
              <li><a href={routePath("/service/waterproofing")}>防水工事（ウレタン・シート・FRP・アスファルト）</a></li>
              <li><a href={routePath("/service/building-inspection")}>建物診断</a></li>
            </ul>

            <div style={{ background: 'var(--color-primary)', color: 'white', padding: '30px', borderRadius: '12px', margin: '40px 0', textAlign: 'center' }}>
              <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>小さな隙間からの雨漏りも防ぐ、丁寧な自社施工シール工事をお届けします</p>
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
