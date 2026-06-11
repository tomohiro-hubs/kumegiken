import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { toAbsoluteUrl } from "@/lib/siteUrl";

const SITE_URL = "https://kumegiken.co.jp";
const ARTICLE_PATH = "/column/nishinomiya-fire-insurance-leak-repair";
const ARTICLE_TITLE = "西宮での雨漏り修理に火災保険は使える？適用条件と申請の流れ";
const ARTICLE_DESCRIPTION =
  "西宮で雨漏りや防水補修が必要になった際、火災保険を適用して修理費用を抑えられる条件や、具体的な申請手順についてわかりやすく解説します。";
const ARTICLE_AUTHOR = "久米技建 技術監修チーム";

export const metadata = {
  ...buildMetadata({
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    path: ARTICLE_PATH,
    image: "/images/consultation.jpg",
  }),
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    datePublished: "2025-08-13",
    dateModified: "2025-08-13",
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
    { name: "西宮の雨漏り修理×火災保険の適用条件", path: ARTICLE_PATH },
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
            <li>西宮の雨漏り修理×火災保険の適用条件</li>
          </ol>
        </div>
      </nav>
      <section className="page-hero">
        <span className="page-hero__label">Column</span>
        <h1 className="page-hero__title">
          西宮での雨漏り修理に火災保険は使える？<br />適用条件と申請の流れ
        </h1>
      </section>

      <section className="content-section">
        <div className="container container--narrow">
          <div className="article-content">
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              最終更新日：2025年8月13日 / カテゴリ：雨漏り補修
            </p>

            <p>
              西宮エリアで雨漏りやバルコニー防水の劣化が見つかった際、最も懸念されるのが「高額な修理費用」です。
              実は、雨漏りの発生原因によっては、ご自身が加入している<strong>「火災保険」</strong>を利用して、修理費用を大幅に軽減できる可能性があることをご存じでしょうか。
            </p>
            <p>
              この記事では、雨漏り修理において火災保険が適用される具体的な条件、申請時のステップ、西宮市で保険申請を成功させるためのポイントについてわかりやすく解説します。
            </p>

            <div style={{ margin: '30px 0' }}>
              <img
                src={assetPath("/images/consultation.jpg")}
                alt="火災保険や雨漏り修理について相談する様子"
                style={{ width: '100%', borderRadius: '12px', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>

            <h2>火災保険は雨漏り修理にも使える？</h2>
            <p>
              火災保険はその名称から「火災のときだけ使える保険」と思われがちですが、実際には台風や突風、大雪、雹（ひょう）といった<strong>「自然災害による建物の被害（風災・雪災・雹災）」</strong>に対しても補償が適用されます。
            </p>
            <p>
              雨漏りそのものは保険の直接の対象ではありませんが、<strong>「自然災害によって屋根や外壁が破損し、それが原因で雨漏りが発生した」</strong>という因果関係が認められれば、火災保険の適用内となります。
            </p>

            <h3>👍 保険が適用される可能性が高いケース</h3>
            <ul>
              <li><strong>台風や竜巻などの強風（風災）：</strong>「台風で屋根瓦が飛んで隙間ができた」「突風で飛んできた物によって外壁や防水層が破損し、そこから雨漏りした」など。</li>
              <li><strong>雹（ひょう）による破損（雹災）：</strong>「大きな雹が降ってベランダのトップコートや波板が割れ、水が侵入するようになった」など。</li>
              <li><strong>積雪や落雪（雪災）：</strong>「屋根からの落雪や雪の重みによって軒先やベランダ手すり付近が歪み、雨漏りにつながった」など。</li>
            </ul>

            <h3>👎 保険が適用されない（自己負担になる）ケース</h3>
            <ul>
              <li><strong>経年劣化による雨漏り：</strong>建物の老朽化によって防水層の寿命（10〜15年）が切れ、自然に水が染み込んできた場合は対象外です。</li>
              <li><strong>メンテナンス・修理を怠っていた場合：</strong>「以前からひび割れていたのを放置し、雨漏りを悪化させた」といった管理不足による損害は認められません。</li>
              <li><strong>施工不良や人為的ミス：</strong>新築時の施工ミスや、DIYなどで誤って破損させた場合は自己負担になります。</li>
            </ul>

            <h2>西宮で火災保険申請を行う具体的な流れ</h2>
            <p>
              保険金の請求手続きは、基本的には加入者（オーナー様・管理組合様）ご自身で行います。以下の流れに沿って進めます。
            </p>
            <div style={{ background: 'var(--color-bg-light)', borderRadius: '12px', padding: '20px', margin: '24px 0' }}>
              <ol style={{ margin: 0, paddingLeft: '20px', lineHeight: '2' }}>
                <li>
                  <strong>被害状況の確認と記録：</strong><br />
                  雨漏りしている箇所の写真（室内のシミ、天井からの雨だれなど）を撮影します。被害が発生した「大体の台風や強風の日付」も必要になるためメモしておきます。
                </li>
                <li>
                  <strong>専門業者への調査・見積もり依頼：</strong><br />
                  地元の信頼できる雨漏り修理・防水業者に現地調査を依頼し、<strong>「被災状況がわかる写真」</strong>と<strong>「修理見積書」</strong>を用意してもらいます。火災保険の申請実績が豊富な業者を選ぶと、申請に必要な「被害報告書」をスムーズに作成してくれます。
                </li>
                <li>
                  <strong>保険会社（または代理店）への連絡：</strong><br />
                  保険会社へ連絡し、「〇月〇日の台風により雨漏りが発生したため、保険申請を行いたい」旨を伝えます。申請に必要な書類（保険金請求書など）が送られてきます。
                </li>
                <li>
                  <strong>申請書類の郵送・提出：</strong><br />
                  記入した請求書に、業者から取得した見積書・写真・報告書を添えて保険会社に提出します。
                </li>
                <li>
                  <strong>保険会社の審査（鑑定人の現地調査）：</strong><br />
                  保険会社から派遣された「損害保険鑑定人」が現地を訪問し、損害状況や自然災害との因果関係を審査することがあります。
                </li>
                <li>
                  <strong>承認と保険金の受け取り：</strong><br />
                  審査が通れば、指定口座に保険金が振り込まれます。その後、補修工事を実施します。
                </li>
              </ol>
            </div>

            <h2>火災保険申請における4つの注意点</h2>
            <p>
              申請手続きをスムーズに進め、トラブルを避けるために以下の点に十分注意してください。
            </p>
            <ol>
              <li>
                <strong>申請の期限は「被災から3年以内」：</strong><br />
                保険法により、被害が発生した日から3年が経過すると請求権が消滅してしまいます。雨漏りに気づいたら、後回しにせずすぐに動きましょう。
              </li>
              <li>
                <strong>事前の徹底調査が重要：</strong><br />
                「経年劣化」か「自然災害」かの判断は非常にシビアです。保険会社の鑑定人に納得してもらうためにも、業者の手による高精度な散水調査や写真資料が不可欠です。
              </li>
              <li>
                <strong>保険金の使い方：</strong><br />
                受け取った保険金は修理以外の使途にあてることも規約上は可能ですが、建物の健康と資産価値維持のためには、速やかに信頼できる工事に充てるべきです。
              </li>
              <li>
                <strong>「手数料無料・自己負担ゼロ」を強調する悪質業者に注意：</strong><br />
                「保険金で必ず実質無料になります」と強くアプローチし、高額なサポート手数料を請求したり、強引な申請を行う悪質なコンサルティング業者が西宮エリアでも報告されています。修理のプロである施工会社に直接相談するのが最も安全です。
              </li>
            </ol>

            <h2>まとめ</h2>
            <p>
              西宮で雨漏りや防水のトラブルに遭遇した際、風水害などの自然災害がきっかけであるならば、火災保険の活用は非常に有効な自己負担軽減策になります。
              そのためには、「台風や強風の直後に被害状況をしっかり写真に残すこと」と、「保険申請の手続きや資料作成に慣れた、地域密着の施工業者に調査を依頼すること」が重要です。
              久米技建では、雨漏り診断だけでなく、火災保険申請に役立つ被害レポート作成のアシストも行っております。お気軽にご相談ください。
            </p>

            <h2>関連サービス</h2>
            <ul>
              <li><a href={routePath("/service/leak-repair")}>雨漏り調査・補修</a></li>
              <li><a href={routePath("/service/waterproofing")}>防水工事（ウレタン・シート・FRP・アスファルト）</a></li>
              <li><a href={routePath("/service/building-inspection")}>建物診断</a></li>
            </ul>

            <div style={{ background: 'var(--color-primary)', color: 'white', padding: '30px', borderRadius: '12px', margin: '40px 0', textAlign: 'center' }}>
              <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>火災保険を活用した雨漏り修理のご相談も承ります</p>
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
