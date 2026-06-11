import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { toAbsoluteUrl } from "@/lib/siteUrl";

const SITE_URL = "https://kumegiken.co.jp";
const ARTICLE_PATH = "/column/nishinomiya-waterproofing-optimal-selection";
const ARTICLE_TITLE = "西宮の防水工事｜雨漏りを防ぐ“最適な工法選び”と長持ちさせるポイント";
const ARTICLE_DESCRIPTION =
  "西宮エリアで防水工事を検討中の方へ、雨漏りを防ぐための最適な工法選びの基準や、耐用年数を長持ちさせるための施工のポイントを解説します。";
const ARTICLE_AUTHOR = "久米技建 技術監修チーム";

export const metadata = {
  ...buildMetadata({
    title: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    path: ARTICLE_PATH,
    image: "/images/waterproofing-hands.jpg",
  }),
};

export default function Page() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE_TITLE,
    description: ARTICLE_DESCRIPTION,
    datePublished: "2026-03-31",
    dateModified: "2026-03-31",
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
    { name: "西宮の防水工事｜最適な工法選びと長持ちのコツ", path: ARTICLE_PATH },
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
            <li>西宮の防水工事｜最適な工法選びと長持ちのコツ</li>
          </ol>
        </div>
      </nav>
      <section className="page-hero">
        <span className="page-hero__label">Column</span>
        <h1 className="page-hero__title">
          西宮の防水工事<br />雨漏りを防ぐ“最適な工法選び”と長持ちさせるポイント
        </h1>
      </section>

      <section className="content-section">
        <div className="container container--narrow">
          <div className="article-content">
            <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              最終更新日：2026年3月31日 / カテゴリ：防水工事
            </p>

            <p>
              建物の健康状態を維持し、資産価値を守るために不可欠な「防水工事」。
              特に西宮市を含む阪神エリアは、台風の通過ルートになりやすく、強い雨風に見舞われる機会が多い地域です。
              そのため、ベランダや屋上からの雨漏りや、防水層の劣化に関するご相談が非常に多く寄せられます。
            </p>
            <p>
              この記事では、なぜ西宮で適切な防水工事が重要なのか、再発しない雨漏り防止の考え方、主要な防水工法の特徴と選び方について詳しく解説します。
            </p>

            <div style={{ margin: '30px 0' }}>
              <img
                src={assetPath("/images/waterproofing-hands.jpg")}
                alt="防水工事の施工風景"
                style={{ width: '100%', borderRadius: '12px', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>

            <h2>西宮で防水工事が重要な理由</h2>
            <p>
              建物に侵入する雨水は、知らず知らずのうちに構造体を劣化させます。特に以下のような条件に当てはまる建物は、雨漏りや防水劣化のリスクが高いため注意が必要です。
            </p>
            <ul>
              <li><strong>築10年以上のマンション・戸建て：</strong>前回の防水工事から10年が経過している場合、防水層の寿命を迎えている可能性が高いです。</li>
              <li><strong>ベランダ・バルコニーや陸屋根（屋上）がある建物：</strong>平らなスペースは水が溜まりやすく、防水機能の低下がダイレクトに雨漏りにつながります。</li>
              <li><strong>外壁やサッシまわりにひび割れがある建物：</strong>外壁の隙間から侵入した雨水が、防水層の裏側に回り込んで劣化を加速させることがあります。</li>
            </ul>
            <p>
              防水層の劣化を放置すると、建物の寿命そのものを縮めてしまうため、定期的な点検と適切な時期の防水工事が推奨されます。
            </p>

            <h2>防水起点で考えると「雨漏りは防げる」</h2>
            <p>
              雨漏りが発生した際、多くの業者は雨が漏っている「その場所だけ」を部分的に補修します。
              しかし、雨漏りを根本から防ぎ、再発させないために本当に重要なのは、<strong>「防水から外壁まで建物全体を一体として捉えること」</strong>です。
            </p>
            <div style={{ background: 'var(--color-bg-light)', borderRadius: '12px', padding: '20px', margin: '24px 0' }}>
              <h4 style={{ marginTop: 0 }}>⚠️ なぜ一体で考える必要があるのか？</h4>
              <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.8' }}>
                <li><strong>複数原因のケースが非常に多い：</strong>雨水の侵入ルートは1箇所とは限らず、屋上防水の劣化と外壁のひび割れの双方が原因になっていることが多々あります。</li>
                <li><strong>防水・外壁・シーリングは連動している：</strong>建物の防水性は、防水層だけでなく、外壁塗装やサッシまわりのシーリング（目地材）が一体となって保たれています。</li>
              </ul>
            </div>
            <p>
              つまり、ベランダの床の防水だけを塗り直しても、立ち上がり部分やサッシの隙間、外壁のクラック（ひび割れ）を放置していれば、数年と経たずに雨漏りが再発してしまいます。
            </p>

            <h2>最適な防水工法の選び方（主要3工法）</h2>
            <p>
              防水工事を成功させるための第一歩は、建物の構造や用途に合わせた工法を選ぶことです。
              価格の安さだけで選ぶのではなく、「その場所に合っているか」を重視しましょう。
            </p>

            <h3>1. ウレタン防水</h3>
            <p>
              液状のウレタン樹脂を何層も塗り重ねて一体感のある防水膜を作る工法です。
            </p>
            <ul>
              <li><strong>特徴：</strong>継ぎ目のないフラットな仕上がりになるため、雨水が侵入しにくいのがメリットです。</li>
              <li><strong>適した場所：</strong>室外機などの障害物が多いベランダやバルコニー、複雑な形状の屋上。</li>
            </ul>

            <h3>2. シート防水</h3>
            <p>
              塩化ビニルやゴム製の防水シートを接着剤などで下地に貼り付ける工法です。
            </p>
            <ul>
              <li><strong>特徴：</strong>シートそのものが工場で生産されているため、厚みが均一で品質のバラつきがなく、高い耐久性を持ちます。</li>
              <li><strong>適した場所：</strong>障害物が少なく、面積が広いマンションやビルの屋上。</li>
            </ul>

            <h3>3. 改質アスファルト防水</h3>
            <p>
              合成ゴムやプラスチックを混ぜて耐久性を高めたアスファルトシートを重ね貼りする工法です。
            </p>
            <ul>
              <li><strong>特徴：</strong>最も歴史があり信頼性が高く、分厚い防水層を形成するため極めて高い耐久性を発揮します。</li>
              <li><strong>適した場所：</strong>大型のマンションや商業ビル、長期間の耐久性が求められる屋上。</li>
            </ul>

            <div style={{ margin: '30px 0' }}>
              <img
                src={assetPath("/images/waterproofing-rooftop.jpg")}
                alt="屋上防水工事の完了イメージ"
                style={{ width: '100%', borderRadius: '12px', aspectRatio: '16/9', objectFit: 'cover' }}
              />
            </div>

            <h2>雨漏り再発を防ぐために最も重要な「施工精度」</h2>
            <p>
              どんなに優れた高価な防水材料を使っても、職人の施工精度が低ければその効果は半減します。
              特に以下の「目に見えなくなる部分」の丁寧さが、数年後の雨漏り再発率を大きく左右します。
            </p>
            <ol>
              <li>
                <strong>徹底した下地処理：</strong><br />
                防水層を塗る前に、古い防水層の撤去、下地の清掃、ひび割れ補修、段差の平滑化などを完璧に行います。下地処理が不十分だと、新しい防水層が密着せず、数年で膨れや剥がれが起きてしまいます。
              </li>
              <li>
                <strong>規定通りの防水層の厚み：</strong><br />
                塗料や樹脂を塗る際、メーカーが指定する規定の塗布量を守り、必要な厚みをしっかりと確保します。これを怠ると耐久年数が極端に短くなります。
              </li>
              <li>
                <strong>接合部や排水口（ドレン）の処理：</strong><br />
                雨漏りの原因になりやすい「壁と床の継ぎ目（立ち上がり）」や「排水口まわり」のシーリング処理、補強布の貼り付けを細部まで緻密に行います。
              </li>
            </ol>

            <h2>西宮で防水工事を成功させる3つのコツ</h2>
            <div style={{ border: '2px solid var(--color-border)', borderRadius: '12px', padding: '20px', margin: '24px 0' }}>
              <h4 style={{ marginTop: 0, borderBottom: '1px solid var(--color-border)', paddingBottom: '8px' }}>💡 成功のためのチェックポイント</h4>
              <ul style={{ listStyle: 'none', paddingLeft: 0, margin: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <strong>1. 防水単体ではなく「建物全体」の診断を受ける：</strong><br />
                  雨漏りの経路を特定するため、散水調査や赤外線診断など、建物全体を見通せる専門技術を持つ業者に診断を依頼しましょう。
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <strong>2. 提案・工法の選定力がある業者を選ぶ：</strong><br />
                  一つの工法だけを強要するのではなく、建物の構造や利用目的に応じて「なぜその工法が最適なのか」をロジカルに説明してくれる業者が信頼できます。
                </li>
                <li>
                  <strong>3. 長期保証とアフターメンテナンスの有無を確認する：</strong><br />
                  工事完了後の定期点検や、10年以上の施工保証がしっかりと書類で発行されるかを確認しておくことが安心につながります。
                </li>
              </ul>
            </div>

            <h2>まとめ</h2>
            <p>
              防水工事は、単なる修繕ではなく「建物の寿命を延ばすための投資」です。
              工法の選定や施工精度によって、その後の建物の寿命は大きく変わります。
              表面をきれいに見せるだけでなく、下地処理などの「内部施工」を誠実に行う業者を選ぶことで、10年、15年と雨漏りのない安心な暮らしを保つことができます。
              少しでも防水層の劣化（ひび割れ、色褪せ、水溜まり）が気になる場合は、まずは信頼できる専門家による全体調査を受けることから始めましょう。
            </p>

            <h2>関連サービス</h2>
            <ul>
              <li><a href={routePath("/service/waterproofing")}>防水工事（ウレタン・シート・FRP・アスファルト）</a></li>
              <li><a href={routePath("/service/building-inspection")}>建物診断</a></li>
              <li><a href={routePath("/service/leak-repair")}>雨漏り調査・補修</a></li>
            </ul>

            <div style={{ background: 'var(--color-primary)', color: 'white', padding: '30px', borderRadius: '12px', margin: '40px 0', textAlign: 'center' }}>
              <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px' }}>建物の状態に合わせた最適な防水プランをご提案します</p>
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
