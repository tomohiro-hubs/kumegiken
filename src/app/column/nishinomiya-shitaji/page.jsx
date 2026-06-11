import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { toAbsoluteUrl } from "@/lib/siteUrl";

const SITE_URL = "https://kumegiken.co.jp";
const ARTICLE_PATH = "/column/nishinomiya-shitaji";
const ARTICLE_TITLE = "西宮の防水・雨漏り修理｜長持ちさせる下地補修工事の重要性";
const ARTICLE_DESCRIPTION =
  "西宮で防水・雨漏り修理を行うなら下地補修工事が重要です。ひび割れや欠損を補修し、防水材の密着と耐久性を向上。火災保険適用も可能。無料調査受付中。";
const ARTICLE_AUTHOR = "久米技建 技術監修チーム";

export const metadata = {
  ...buildMetadata({
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    path: ARTICLE_PATH,
    image: "/images/crack-inspection.jpg",
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
    { name: "西宮で防水・雨漏りを防ぐための下地補修の重要性", path: ARTICLE_PATH },
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
            <li>西宮の防水・雨漏りと下地補修</li>
          </ol>
        </div>
      </nav>
      <section className="page-hero">
        <span className="page-hero__label">Column</span>
        <h1 className="page-hero__title">西宮の防水・雨漏り修理における<br />下地補修工事の重要性</h1>
      </section>

      <section className="content-section">
        <div className="container container--narrow">
          <div className="article-content">
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              最終更新日：2025年8月11日 / カテゴリ：雨漏り補修
            </p>

            <p>
              西宮市をはじめとしたエリアで「防水工事」や「雨漏り修理」のご相談をいただく際、現地調査で非常によく見られるのが<strong>コンクリートやモルタルといった下地の劣化</strong>です。
            </p>
            <p>
              防水工事や外壁塗装を行う前に、この下地をしっかりと補修しておかないと、せっかくのメンテナンス工事も長持ちしません。下地補修は防水工事や塗装の「寿命（耐用年数）」を決定づける最も重要な工程です。
            </p>
            <p>
              この記事では、下地補修工事の概要から、なぜ防水・雨漏り対策に不可欠なのかという理由、実際の施工の流れ、そして修繕を行うべき適切なタイミングについて解説します。
            </p>

            <div style={{ margin: '30px 0' }}>
              <img
                src={assetPath("/images/crack-inspection.jpg")}
                alt="ひび割れ・下地調査の様子"
                style={{ width: '100%', borderRadius: '12px', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>

            <h2>下地補修工事とは？（基本概要）</h2>
            <p>
              下地補修工事とは、防水材や塗料を塗布する前に、コンクリートやモルタル、外壁材（サイディング等）に生じたひび割れ（クラック）、欠損、浮き、爆裂（鉄筋のサビによるコンクリートの破裂）などを修復し、施工面を平滑かつ健全な状態に整える下地処理作業のことです。
            </p>
            <p>
              お化粧に例えるなら、ファンデーションをきれいにのせるための「丁寧なスキンケアや化粧下地」のようなもので、表面的な仕上がりの美しさだけでなく、建物内部の構造的耐久性を維持するための極めて重要な役割を持っています。
            </p>

            <h2>なぜ防水・雨漏り対策に下地補修が不可欠なのか？</h2>
            <p>
              下地補修を疎かにして防水工事を行うと、以下のような深刻なトラブルにつながります。下地補修が必要な主な理由は3点あります。
            </p>

            <h3>1. 防水材・塗料の「密着性」を高めて剥がれを防ぐ</h3>
            <p>
              コンクリートがひび割れていたり、表面がモルタルの粉（エフロレッセンス）で劣化していたりすると、その上に塗ったウレタン防水材や塗装がしっかりと密着しません。密着不良を起こした防水層は、台風や地震の振動、気温変化による伸縮によって、簡単に膨れたり剥がれたりしてしまいます。
            </p>

            <h3>2. 雨漏りの原因を根本からシャットアウトする</h3>
            <p>
              雨漏りの多くは、目に見える大きな破損だけでなく、下地に生じた微細なクラック（ひび割れ）から雨水が侵入し、長い時間をかけて内部へ染み込むことで発生します。防水材を塗布する前にこれらのひび割れにエポキシ樹脂を注入したり、シーリング材を充填して隙間を塞ぐことで、雨水の侵入経路を根本から塞ぎます。
            </p>

            <h3>3. 建物内部の構造（鉄筋・柱）の腐食を防ぐ</h3>
            <p>
              コンクリート内部に雨水が侵入すると、中の鉄筋が錆びて膨張し、内側からコンクリートを押し出す「爆裂（ばくれつ）」という現象が起こります。下地補修で水の侵入を防ぐことは、鉄筋のサビや木造部分の腐食といった、建物自体の寿命を縮める致命的なダメージから構造体を守ることに直結します。
            </p>

            <h2>下地補修工事の一般的な流れ</h2>
            <p>
              下地補修は、以下のようなステップに沿って専門の職人が丁寧に行います。
            </p>
            <div style={{ background: 'var(--color-bg-light)', borderRadius: '12px', padding: '20px', margin: '24px 0' }}>
              <ol style={{ margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                <li><strong>現地調査・劣化診断：</strong>打診棒や赤外線カメラ等を用いて、ひび割れの深さや内部の浮き、鉄筋爆裂の有無などを細かく調査します。</li>
                <li><strong>劣化部分の除去（ハツリ・ケレン）：</strong>浮いてしまい強度のないモルタル部分やサビた鉄筋の周囲を削り落とし（ハツリ）、汚れやサビをきれいに磨き落とします（ケレン）。</li>
                <li><strong>防錆処理・補修材の充填：</strong>露出した鉄筋に防錆剤を塗布した後、エポキシ樹脂や高強度な補修モルタルを充填し、元の形状に成形します。ひび割れには樹脂の注入やシーリング材の充填を行います。</li>
                <li><strong>施工面の平滑化（肌合わせ）：</strong>補修部分と周囲の既存壁との段差をなくし、防水材が均一に塗れるよう平滑に整えます。</li>
                <li><strong>防水・仕上げ工程へ：</strong>下地が完全に乾燥・硬化したら、その上にプライマー（下塗り材）を塗布し、ウレタン防水や外壁塗装などの本工事へ移ります。</li>
              </ol>
            </div>

            <h2>西宮で下地補修を行うべきタイミング</h2>
            <p>
              以下のような兆候が見られたら、下地補修を伴う防水・外壁メンテナンスを検討するサインです。
            </p>
            <ul>
              <li>外壁や床に細かなひび割れ（幅0.3mm以上のヘアクラックや構造クラック）が発生している</li>
              <li>コンクリートやタイルの一部が欠けたり、浮いてポコポコと音がする</li>
              <li>外壁から錆びた水（赤錆のシミ）が染み出ている（鉄筋爆裂のサイン）</li>
              <li>雨漏りが発生している、または過去に雨漏りしたことがある</li>
              <li>建物の築年数が10年〜15年以上経過しており、一度も大規模な補修をしていない</li>
            </ul>

            <h2>まとめ</h2>
            <p>
              防水工事や雨漏り修理では、<strong>下地補修こそが工事の寿命を決める極めて重要な工程</strong>です。どれほど見栄えの良い仕上げを行っても、土台である下地が不十分であれば、数年で不具合が再発してしまいます。
            </p>
            <p>
              株式会社久米技建では、西宮市を中心に関西エリアにおいて、豊富な知識と資格（防水施工技能士など）を持つ自社職人が、下地補修から最後の防水・塗装仕上げまで責任を持って一貫対応（自社施工）しております。
            </p>
            <p>
              「壁のひび割れが気になる」「雨漏りの原因を根本から直したい」という管理会社様やオーナー様は、どうぞお気軽にご相談ください。現地調査とお見積もりは完全に無料で承っております。
            </p>

            <h2>関連サービス</h2>
            <ul>
              <li><a href={routePath("/service/leak-repair")}>雨漏り調査・補修</a></li>
              <li><a href={routePath("/service/waterproofing")}>防水工事（ウレタン・シート・FRP・アスファルト）</a></li>
              <li><a href={routePath("/service/building-inspection")}>建物診断</a></li>
            </ul>

            <div style={{ background: 'var(--color-primary)', color: 'white', padding: '30px', borderRadius: '12px', margin: '40px 0', textAlign: 'center' }}>
              <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>下地の診断から最適な防水工法のご提案まで一貫してお任せください</p>
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
