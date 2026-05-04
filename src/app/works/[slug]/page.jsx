import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://kumegiken.co.jp";

const works = {
  "nishinomiya-building-sealing-01": {
    title: "西宮市 ビル 外壁シーリング打替え工事",
    area: "兵庫県西宮市",
    buildingType: "商業ビル（RC造・6階建て）",
    workType: "外壁シーリング打替え工事・部分防水補修",
    scale: "シーリング打替え延長 約1,200m",
    period: "約3週間",
    budget: "350〜500万円",
    beforeImage: "/images/deteriorated-building.jpg",
    afterImage: "/images/sealing-work.jpg",
    beforeCaption: "目地の硬化・ひび割れにより防水性が低下",
    afterCaption: "高耐久シーリング材への打替えで止水性を回復",
    issue:
      "既存シーリングの硬化と破断により、サッシ周り・外壁目地からの雨水侵入リスクが高い状態でした。外壁塗装の前工程として、全面打替えを実施しました。",
    summary:
      "劣化したシーリングを撤去し、プライマー処理後に高耐久の変成シリコン系シーリング材を充填。打設厚を確保し、可とう性と耐候性を両立した仕上がりに改善しました。",
    points: [
      "3面接着回避のためバックアップ材を適切に設置",
      "目地幅に応じたプライマー・材料選定で密着性を確保",
      "サッシ周辺の取り合い部は増し打ちではなく打替えを基本に実施",
      "雨天リスクを考慮した工程管理で品質のバラつきを抑制",
    ],
  },
  "takarazuka-mansion-waterproofing-01": {
    title: "宝塚市 マンション 屋上シート防水工事",
    area: "兵庫県宝塚市",
    buildingType: "分譲マンション（RC造・7階建て）",
    workType: "屋上シート防水改修（塩ビシート機械固定工法）",
    scale: "屋上防水 約420㎡",
    period: "約2.5週間",
    budget: "300〜450万円",
    beforeImage: "/images/waterproofing-hands.jpg",
    afterImage: "/images/waterproofing-rooftop.jpg",
    beforeCaption: "既存防水層の膨れ・継ぎ目劣化が進行",
    afterCaption: "耐候性の高いシート防水で長寿命化を実現",
    issue:
      "既存防水層の継ぎ目劣化と局所的な雨水滞留が確認され、漏水リスクの増加が課題でした。撤去範囲と改修範囲を精査し、コストと耐久性のバランスを最適化しました。",
    summary:
      "機械固定工法を採用することで、既存下地への負荷を抑えながら防水性能を再構築。ドレン周辺や立上り部を重点補強し、排水性と止水性を同時に改善しました。",
    points: [
      "下地含水率を確認した上で施工し膨れ再発を予防",
      "立上り・端末部を専用部材で納め、防水連続性を確保",
      "改修後の定期点検を前提にメンテナンス性を重視",
      "居住者動線を確保しながら安全計画を立案",
    ],
  },
  "osaka-mansion-large-scale-repair-01": {
    title: "大阪市 マンション 大規模修繕工事（100戸）",
    area: "大阪府大阪市淀川区",
    buildingType: "分譲マンション（RC造・10階建て・100戸）",
    workType: "外壁補修・塗装・屋上防水・シーリング・鉄部塗装",
    scale: "外壁約4,500㎡ / 屋上約650㎡",
    period: "約4.5ヶ月",
    budget: "5,500〜7,500万円",
    beforeImage: "/images/large-scale-aerial.jpg",
    afterImage: "/images/building-completed.jpg",
    beforeCaption: "外壁クラック・チョーキング・目地劣化が進行",
    afterCaption: "建物全体を包括改修し資産価値を維持",
    issue:
      "竣工後20年以上が経過し、外壁・シーリング・屋上防水の複合劣化が見られる状態でした。長期修繕計画との整合を取りつつ、段階的ではなく一括改修を実施しました。",
    summary:
      "調査診断に基づき、劣化部位ごとに補修工法を選定。外壁補修から防水更新までを一体管理することで、工期短縮と品質平準化を実現しました。",
    points: [
      "全面打診・クラック調査結果を反映した補修数量算出",
      "居住者説明会と掲示運用で工事中の不安を低減",
      "仮設計画を最適化し、安全性と作業効率を両立",
      "完了後は写真付き報告書で改修内容を可視化",
    ],
  },
  "itami-apartment-painting-01": {
    title: "伊丹市 アパート 外壁塗装工事",
    area: "兵庫県伊丹市",
    buildingType: "賃貸アパート（鉄骨造・3階建て）",
    workType: "外壁塗装工事・付帯部塗装・下地補修",
    scale: "外壁塗装 約900㎡",
    period: "約1ヶ月",
    budget: "450〜650万円",
    beforeImage: "/images/painting-work.jpg",
    afterImage: "/images/building-completed.jpg",
    beforeCaption: "色褪せ・チョーキングにより外観品質が低下",
    afterCaption: "高耐候塗料で美観と保護性能を回復",
    issue:
      "外壁の色褪せと塗膜劣化が進行し、入居者募集時の印象低下が課題でした。防水性と意匠性の両立を目的に、下地補修から塗装仕様を見直しました。",
    summary:
      "高圧洗浄・クラック補修後、下塗り中塗り上塗りの3工程で施工。付帯部も同時改修し、建物全体の統一感を持たせた仕上がりとしました。",
    points: [
      "既存塗膜の状態に応じた下塗り材を選定",
      "雨掛かり部は膜厚管理を強化し耐久性を確保",
      "入居者様の生活時間帯を考慮し騒音工程を調整",
      "オーナー様向けに将来の再塗装時期目安を提示",
    ],
  },
  "ashiya-house-waterproofing-01": {
    title: "芦屋市 戸建て バルコニーFRP防水工事",
    area: "兵庫県芦屋市",
    buildingType: "戸建て住宅（木造2階建て）",
    workType: "バルコニーFRP防水改修・トップコート更新",
    scale: "バルコニー防水 約28㎡",
    period: "約4日",
    budget: "35〜60万円",
    beforeImage: "/images/crack-inspection.jpg",
    afterImage: "/images/waterproofing-rooftop.jpg",
    beforeCaption: "表面ひび割れ・摩耗により防水性能が低下",
    afterCaption: "FRP防水層を再形成し止水性を回復",
    issue:
      "バルコニー床面に微細クラックと摩耗が見られ、室内への浸水不安が高まっていました。既存下地を確認したうえで、FRPによる改修を実施しました。",
    summary:
      "ケレン・清掃後にプライマーを塗布し、ガラスマット積層でFRP防水層を形成。仕上げトップコートまで一貫施工し、歩行耐久性も確保しました。",
    points: [
      "下地の不陸を調整し樹脂厚を均一化",
      "立上り端部の納まりを改善し雨水浸入を抑止",
      "短工期で生活への影響を最小化",
      "定期的なトップコート更新時期を明示",
    ],
  },
  "suita-factory-waterproofing-01": {
    title: "吹田市 工場 屋上アスファルト防水改修工事",
    area: "大阪府吹田市",
    buildingType: "工場（S造・2階建て）",
    workType: "屋上アスファルト防水改修・排水改善工事",
    scale: "屋上防水 約780㎡",
    period: "約1ヶ月",
    budget: "900〜1,400万円",
    beforeImage: "/images/hero-main.jpg",
    afterImage: "/images/waterproofing-rooftop.jpg",
    beforeCaption: "屋上広範囲で劣化・雨水滞留が発生",
    afterCaption: "耐久性の高いアスファルト防水へ更新",
    issue:
      "工場稼働中に雨漏りが発生し、生産ラインへの影響が懸念されていました。広面積屋上に対して耐久性を重視し、アスファルト防水改修を選定しました。",
    summary:
      "既存防水層の状態を踏まえて補修範囲を最適化し、アスファルト防水を再構築。排水勾配とドレン周辺の納まりを改善し、滞留水対策も同時に実施しました。",
    points: [
      "工場稼働を止めない工程で夜間・休日作業を組み合わせ",
      "広面積施工の品質管理として区画ごとの検査を実施",
      "高耐久仕様で更新周期を長期化しLCCを低減",
      "雨天時リスクを想定した仮設養生を徹底",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(works).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = works[slug];

  if (!work) {
    notFound();
  }

  return buildMetadata({
    title: `施工事例｜${work.title}`,
    description: `${work.area}の${work.workType}事例。${work.buildingType}の施工で、工期${work.period}・費用目安${work.budget}。施工前後の比較と施工ポイントを掲載。`,
    path: routePath(`/works/${slug}`),
    image: work.afterImage,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const work = works[slug];

  if (!work) {
    notFound();
  }

  const workUrl = `${SITE_URL}${routePath(`/works/${slug}`)}`;
  const workSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${work.title}｜施工事例`,
    description: `${work.area}の${work.workType}事例。${work.buildingType}の施工で、工期${work.period}・費用目安${work.budget}。`,
    author: {
      "@type": "Organization",
      name: "株式会社久米技建",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "株式会社久米技建",
      url: SITE_URL,
    },
    image: [new URL(assetPath(work.afterImage), SITE_URL).toString()],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": workUrl,
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ホーム",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "施工事例",
        item: `${SITE_URL}${routePath("/works")}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: work.title,
        item: workUrl,
      },
    ],
  };

  return (
    <main>
      <JsonLd data={workSchema} />
      <JsonLd data={breadcrumbSchema} />
      <section className="page-hero">
        <span className="page-hero__label">Works</span>
        <h1 className="page-hero__title">{work.title}</h1>
      </section>
      <nav className="breadcrumb">
        <div className="container">
          <ol className="breadcrumb__list">
            <li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li>
            <li className="breadcrumb__separator">›</li>
            <li><a href={routePath("/works")} className="breadcrumb__link">施工事例</a></li>
            <li className="breadcrumb__separator">›</li>
            <li>{work.title}</li>
          </ol>
        </div>
      </nav>
      <section className="content-section">
        <div className="container container--narrow">
          <table className="info-table" style={{ marginBottom: "40px" }}>
            <tbody>
              <tr><th>エリア</th><td>{work.area}</td></tr>
              <tr><th>建物種別</th><td>{work.buildingType}</td></tr>
              <tr><th>工事内容</th><td>{work.workType}</td></tr>
              <tr><th>施工規模</th><td>{work.scale}</td></tr>
              <tr><th>工期</th><td>{work.period}</td></tr>
              <tr><th>費用目安</th><td>{work.budget}</td></tr>
            </tbody>
          </table>

          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "40px" }}
            className="reveal"
          >
            <div>
              <img
                src={assetPath(work.beforeImage)}
                alt={`${work.title} 施工前`}
                style={{ aspectRatio: "4/3", width: "100%", objectFit: "cover", borderRadius: "8px" }}
              />
              <p style={{ textAlign: "center", fontWeight: "600", marginTop: "8px", color: "var(--color-text-light)" }}>
                施工前
              </p>
              <p style={{ textAlign: "center", fontSize: "13px", color: "var(--color-text-muted)", marginTop: "8px" }}>
                {work.beforeCaption}
              </p>
            </div>
            <div>
              <img
                src={assetPath(work.afterImage)}
                alt={`${work.title} 施工後`}
                style={{ aspectRatio: "4/3", width: "100%", objectFit: "cover", borderRadius: "8px" }}
              />
              <p style={{ textAlign: "center", fontWeight: "600", marginTop: "8px", color: "var(--color-text-light)" }}>
                施工後
              </p>
              <p style={{ textAlign: "center", fontSize: "13px", color: "var(--color-text-muted)", marginTop: "8px" }}>
                {work.afterCaption}
              </p>
            </div>
          </div>

          <article className="article-content reveal">
            <h2>施工前のお悩み</h2>
            <p>{work.issue}</p>

            <h2>施工内容</h2>
            <p>{work.summary}</p>

            <h2>施工のポイント</h2>
            <ul>
              {work.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href={routePath("/works")} className="btn btn--outline-dark">← 施工事例一覧に戻る</a>
          </div>
        </div>
      </section>
    </main>
  );
}
