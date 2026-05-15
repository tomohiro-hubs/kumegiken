import { assetPath } from "@/lib/assetPath";
import { routePath } from "@/lib/routePath";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "株式会社久米技建｜建物改修施工専門の会社",
  description:
    "久米技建のtop-copy2仮ページです。防水工事・大規模修繕・外壁改修を、現場力と施工管理でかたちにします。",
  path: "/top-copy2",
  noindex: true,
});

const heroImages = [
  { src: "/images/president-workwear.jpg", alt: "現場で確認する代表" },
  { src: "/images/waterproofing-hands.jpg", alt: "防水工事の手元" },
  { src: "/images/inspection-scene.jpg", alt: "建物診断の様子" },
  { src: "/images/team-meeting.jpg", alt: "現場打ち合わせ" },
  { src: "/images/painting-work.jpg", alt: "外壁塗装の施工" },
];

const newsItems = [
  ["施工のお知らせ", "2026.4.16", "西宮市マンション屋上防水工事が完了しました"],
  ["診断のお知らせ", "2026.4.02", "大阪市ビル外壁劣化診断を実施しました"],
  ["改修のお知らせ", "2026.3.18", "神戸市共用廊下防水改修が完了しました"],
];

const detailItems = [
  {
    number: "01",
    title: "各工種の職人が妥協なく連携",
    text: "防水、塗装、シーリング、下地補修。工種ごとの職人が現場で知恵を出し合い、建物の状態に合わせた改修を目指します。",
    image: "/images/team-group.jpg",
  },
  {
    number: "02",
    title: "ミリ単位での調査と打ち合わせ",
    text: "劣化の起点を見落とさないよう、施工前の調査と打ち合わせを重ねます。必要な工事だけを整理し、納得できる計画に落とし込みます。",
    image: "/images/crack-inspection.jpg",
  },
  {
    number: "03",
    title: "きめ細やかな施工管理",
    text: "工程、近隣対応、安全管理、完了検査まで一貫して確認。建物を使い続ける方の負担を抑えながら、確実な施工を進めます。",
    image: "/images/scaffold-install.jpg",
  },
];

const works = [
  {
    title: "西宮のマンション",
    category: "防水工事",
    date: "2026.1.22",
    image: "/images/waterproofing-rooftop.jpg",
    href: "/works/nishinomiya-mansion-waterproofing-01",
  },
  {
    title: "大阪のオフィスビル",
    category: "大規模修繕",
    date: "2026.1.23",
    image: "/images/scaffold-install.jpg",
    href: "/works/osaka-building-large-scale-repair-01",
  },
  {
    title: "神戸の分譲マンション",
    category: "外壁塗装",
    date: "2026.1.23",
    image: "/images/building-completed.jpg",
    href: "/works/kobe-mansion-painting-01",
  },
];

const stories = [
  {
    episode: "Episode 01",
    title: "きっかけは“建物を守る”現場から。",
    text:
      "久米技建が向き合うのは、雨水、紫外線、経年劣化にさらされ続ける建物です。表面だけを整えるのではなく、なぜ劣化したのか、どこまで直すべきかを現場で見極めることから仕事が始まります。",
  },
  {
    episode: "Episode 02",
    title: "調べる人間が、直す。",
    text:
      "調査、判断、施工が離れるほど、現場の情報は薄くなります。久米技建では技術者と職人が同じ目線で建物を見て、施工計画へつなげます。情報のロスを減らすことが、品質の土台です。",
  },
  {
    episode: "Episode 03",
    title: "人間関係の深さが、施工精度を高める。",
    text:
      "管理組合、オーナー、協力会社、職人。関わる人と本音で話し、必要なことを共有する。建物改修は、人と人の信頼から完成度が変わる仕事だと考えています。",
  },
];

export default function TopCopy2Page() {
  return (
    <main className="uchida-copy" aria-labelledby="uchida-copy-title">
      <section className="uchida-hero" aria-label="久米技建トップビジュアル">
        <div className="uchida-hero__left">
          <img src={assetPath(heroImages[0].src)} alt={heroImages[0].alt} />
        </div>
        <div className="uchida-hero__center">
          <h1 id="uchida-copy-title" className="uchida-hero__mark" aria-label="建築家 現場力">
            <span>建<br />築<br />家</span>
            <i>×</i>
            <span>現<br />場<br />力</span>
          </h1>
          <p className="uchida-hero__sub">＝ 建物改修施工専門の会社 ＝</p>
        </div>
        <div className="uchida-hero__mosaic" aria-hidden="true">
          {heroImages.slice(1).map((image, index) => (
            <figure className={`uchida-hero__tile uchida-hero__tile--${index + 1}`} key={image.src}>
              <img src={assetPath(image.src)} alt="" />
            </figure>
          ))}
        </div>
      </section>

      <div className="uchida-news" aria-label="お知らせ">
        <div className="uchida-news__track">
          {[...newsItems, ...newsItems].map((item, index) => (
            <a href={routePath("/works")} className="uchida-news__item" key={`${item[0]}-${item[1]}-${index}`}>
              <span>{item[0]}</span>
              <time>{item[1]}</time>
              <b>{item[2]}</b>
            </a>
          ))}
        </div>
      </div>

      <section className="uchida-intro">
        <div className="uchida-intro__side" aria-hidden="true">KUME GIKEN</div>
        <div className="uchida-intro__circle" aria-hidden="true">UNDERSTAND THE BUILDING AND REFINE IT TOGETHER</div>
        <div className="uchida-intro__copy">
          <p className="uchida-vertical-title">
            <span>久</span><span>米</span><span>技</span><span>建</span><span>の</span><span>仕</span><span>事</span>
          </p>
          <p>
            私たちは建物の状態を見極め、施工に専念する会社です。<br />
            管理組合やオーナーの想いを受け止める。<br />
            その建物を使う人の安心へつなぎ、かたちにすることが私たちの役割です。
          </p>
        </div>
      </section>

      <figure className="uchida-wide-photo">
        <img src={assetPath("/images/team-meeting.jpg")} alt="現場で打ち合わせる久米技建のチーム" />
      </figure>

      <section className="uchida-detail" id="detail">
        <div className="uchida-detail__rail">
          <span>Attention to detail</span>
          <h2>
            <span>施</span><span>工</span><span>へ</span><span>の</span>
            <span>こ</span><span>だ</span><span>わ</span><span>り</span>
          </h2>
          <a href={routePath("/service")} className="uchida-detail__button">建築家の方へ <b>→</b></a>
        </div>
        <div className="uchida-detail__items">
          {detailItems.map((item) => (
            <article className="uchida-detail__item" key={item.number}>
              <figure>
                <img src={assetPath(item.image)} alt="" />
              </figure>
              <div>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="uchida-works" id="works">
        <div className="uchida-section-heading">
          <span>Works</span>
          <h2>施工事例</h2>
          <p>
            建物とともに手掛けた多彩な改修実績をご紹介します。<br />
            調査のこだわりを反映した施工の数々をご覧ください。
          </p>
          <a href={routePath("/works")}>事例一覧を見る <b>→</b></a>
        </div>
        <div className="uchida-work-grid">
          {works.map((work) => (
            <a href={routePath(work.href)} className="uchida-work-card" key={work.title}>
              <img src={assetPath(work.image)} alt="" />
              <span>{work.category}</span>
              <time>{work.date}</time>
              <h3>{work.title}</h3>
              <b aria-hidden="true">＋</b>
            </a>
          ))}
        </div>
      </section>

      <section className="uchida-story" id="story">
        <div className="uchida-story__head">
          <span>久米技建ストーリー</span>
          <h2>「建物を守る仕事を選ぶ理由」</h2>
        </div>
        <div className="uchida-story__panel">
          <div className="uchida-story__tabs" aria-hidden="true">
            <span>起</span><span>承</span><span>転</span><span>結</span>
          </div>
          {stories.map((story) => (
            <article className="uchida-story__episode" key={story.episode}>
              <span>{story.episode}</span>
              <h3>{story.title}</h3>
              <p>{story.text}</p>
            </article>
          ))}
        </div>
        <div className="uchida-story__photos" aria-hidden="true">
          <img src={assetPath("/images/waterproofing-hands.jpg")} alt="" />
          <img src={assetPath("/images/staff-kishi.jpg")} alt="" />
          <img src={assetPath("/images/sealing-work.jpg")} alt="" />
        </div>
      </section>

      <section className="uchida-architects">
        <div>
          <h2>久米技建は、1,000件を超える<br />建物改修の実績があります</h2>
          <p>
            西宮市を中心に、兵庫・大阪の建物と誠実に向き合ってきました。
            防水工事・大規模修繕・雨漏り補修まで、現場で培った施工力をご覧ください。
          </p>
          <a href={routePath("/company")} className="uchida-black-button">久米技建について <b>→</b></a>
        </div>
        <figure>
          <img src={assetPath("/images/service-team-crew.png")} alt="久米技建のスタッフ" />
        </figure>
      </section>

      <section className="uchida-contact">
        <div>
          <span>CONTACT</span>
          <h2>お問い合わせ</h2>
          <p>
            建物のことでお困りの方は、<br />
            お問い合わせフォームよりご連絡ください。
          </p>
        </div>
        <a href={routePath("/contact")}>相談する <b>→</b></a>
      </section>
    </main>
  );
}
