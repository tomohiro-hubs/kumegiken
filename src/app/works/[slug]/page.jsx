import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd } from "@/lib/schema";
import { toAbsoluteUrl } from "@/lib/siteUrl";
import { WORKS_CATALOG, WORK_REGIONS } from "@/lib/worksCatalog";

const SITE_URL = "https://kumegiken.co.jp";
const DEFAULT_PUBLISHED_DATE = "2026-05-10";

const works = {
  "nishinomiya-veranda-waterproofing-01": {
    title: "西宮市 戸建て ベランダ防水工事",
    area: "兵庫県西宮市",
    buildingType: "戸建て住宅（ベランダ）",
    workType: "ベランダ防水工事・下地補修（ウレタン塗膜防水）",
    scale: "ベランダ防水 約15㎡",
    period: "約3日間",
    budget: "非公開",
    beforeImage: "/images/works-nishinomiya-veranda-waterproofing-before.jpg",
    afterImage: "/images/works-nishinomiya-veranda-waterproofing-after.jpg",
    beforeCaption: "下地に複数のひび割れ（クラック）が発生し、雨水侵入のリスクが高い状態",
    afterCaption: "下地補修後にウレタン塗膜防水を施工し、継ぎ目のない美しい防水層を形成",
    issue:
      "ベランダ床面の下地に複数のクラック（ひび割れ）が発生しており、経年劣化による雨水侵入や建物内部の木構造部分の腐食・雨漏りリスクが高まっている状態でした。",
    summary:
      "既存防水層のケレン・清掃後、ひび割れ箇所に補修材を充填して下地を平滑に調整。その後プライマーを塗布し、ウレタン塗膜防水材を多層塗布してトップコートで保護仕上げを行いました。",
    points: [
      "微細なひび割れ（クラック）も見逃さない丁寧な下地補修",
      "水はけを考慮した立ち上がり部分・排水口まわりの確実な防水処理",
      "継ぎ目のないウレタン塗膜防水による完全な止水性確保",
      "耐候性に優れたトップコート仕上げによる長期美観維持",
    ],
    diagnosis: "経年劣化によるベランダ床面クラック、および防水層の摩耗・劣化を確認しました。",
    method: "下地補修ののち、狭小部や立ち上がりの多いベランダに適したウレタン塗膜防水密着工法を採用しました。",
    comment: "西宮市の戸建て住宅でのベランダ防水改修でした。下地のひび割れを念入りに補修したうえでウレタン防水を施し、雨漏りの心配のない美しいベランダへ仕上げました。",
    warranty: "施工部位に応じた防水保証書を発行し、施工後の定期点検についてご案内いたします。",
  },
  "nishinomiya-commercial-waterproofing-01": {
    title: "西宮市 商業施設 屋上防水工事",
    area: "兵庫県西宮市",
    buildingType: "商業施設（屋上）",
    workType: "ウレタン塗膜防水工事（通気緩衝工法）",
    scale: "屋上防水改修",
    period: "約7日間",
    budget: "非公開",
    beforeImage: "/images/works-nishinomiya-commercial-waterproofing-before.jpg",
    afterImage: "/images/works-nishinomiya-commercial-waterproofing-after.jpg",
    beforeCaption: "経年劣化でシートの浮きやシワが目立ち、空調架台まわりから雨漏りが発生",
    afterCaption: "全面ウレタン塗膜防水を施工し、雨水の侵入経路を完全に遮断",
    issue:
      "老朽化による防水シートの劣化と、空調設備周辺からの雨漏りが確認されたため、建物内部への浸水を防ぐ緊急の改修が必要でした。",
    summary:
      "既存の劣化した防水層の浮き部分を処理し、下地処理後に通気緩衝シートを敷設。ウレタン防水材を多層塗布し、架台や排水ドレン周りも重点的に補強して雨漏りを完全に解決しました。",
    points: [
      "空調設備の架台まわりの立ち上がり部・排水周りの重点補強",
      "通気緩衝工法の採用による下地の水分同伴膨れの防止",
      "丁寧な下地改修による防水シートの浮き・シワの根本解消",
      "短工期（7日間）での施工で施設の運営への影響を最小化",
    ],
    diagnosis: "経年劣化による既存防水シートの浮き・シワ、および空調機架台周辺の隙間からの雨漏りを確認しました。",
    method: "下地の水分による膨れを防ぐため、通気緩衝シートを用いたウレタン塗膜防水工法を採用しました。",
    comment: "西宮市内の大型商業施設における屋上防水改修でした。雨漏りが多発していた空調機まわりを重点的に補修し、施主様にも大変喜んでいただけました。",
    warranty: "施工部位に応じた防水保証書を発行し、施工後の定期点検サービスをご案内いたします。",
  },
  "nishinomiya-rooftop-waterproofing-02": {
    title: "西宮市 戸建住宅 屋上防水改修工事",
    area: "兵庫県西宮市",
    buildingType: "戸建て住宅（屋上）",
    workType: "ウレタン塗膜防水（通気緩衝工法）",
    scale: "屋上防水改修",
    period: "約6日間",
    budget: "非公開",
    beforeImage: "/images/works-nishinomiya-rooftop-waterproofing-02-before.jpg",
    afterImage: "/images/works-nishinomiya-rooftop-waterproofing-02-after.jpg",
    beforeCaption: "築年数が経過し、屋上の既存防水層が著しく劣化していました。表面の汚れ・剥がれだけでなく、各所で雨漏りの発生が確認され、住居内部にまで影響が出ていました。",
    afterCaption: "既存防水層を丁寧に撤去したのち、ウレタン塗膜防水（通気緩衝工法）を採用し、下地からしっかりと補修。滑らかで美しい仕上がりとともに、確実な防水性能の復活を実現しました。",
    issue:
      "築年数が経過し、既存の防水層が著しく劣化したことで表面の剥離やドレンまわりからの雨水侵入が発生し、建物内部に雨染みや腐食の兆候が見られるなど、深刻な雨漏りリスクに直面していました。",
    summary:
      "高圧洗浄および旧層撤去を実施後、入念な下地処理を行いました。その後プライマーを塗布し、ウレタン防水材を2層にわたって塗布し、仕上げに防滑トップコートを塗布して美観と耐久性を高めました。",
    points: [
      "防水層剥離箇所の徹底的なケレン・清掃と下地補修",
      "雨水侵入経路となっていたドレン（排水口）まわりの重点的な止水処理",
      "水分の影響による膨れを防止する通気緩衝シートの適切な敷設",
      "耐摩耗性と耐候性に優れた防滑トップコートによる保護仕上げ",
    ],
    diagnosis: "既存防水層の剥離や著しい劣化、ドレン周辺の隙間からの雨水侵入、および建物内部の雨染み・腐食兆候を確認しました。",
    method: "下地の水分による防水層の膨れを防ぐため、通気緩衝シートを用いたウレタン塗膜防水工法（通気緩衝工法）を採用しました。",
    comment: "見た目には分かりづらい屋上の防水層劣化でしたが、雨漏りが室内に達する一歩手前の状態でした。今回の施工では、下地からしっかり補修し、今後10年以上安心していただける仕様で仕上げています。",
    warranty: "施工部位に応じた防水保証書を発行し、施工後の定期点検サービスをご案内いたします。",

  },
  "nishinomiya-mansion-waterproofing-01": {
    title: "西宮市 マンション 屋上防水工事",
    area: "兵庫県西宮市",
    buildingType: "マンション（RC造・5階建て）",
    workType: "屋上シート防水改修（塩ビシート機械固定工法）",
    scale: "屋上防水 約320㎡",
    period: "約2週間",
    budget: "260〜380万円",
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
    diagnosis: "既存防水層の継ぎ目劣化、局所的な膨れ、排水不良箇所を確認しました。",
    method: "既存下地への負荷を抑える塩ビシート機械固定工法を採用し、端末部とドレン周辺を重点補強しました。",
    comment: "居住者動線を確保しながら、防水連続性とメンテナンス性を両立する納まりにしました。",
    warranty: "防水仕様に応じた保証書発行と、定期点検時期のご案内に対応します。",
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
    diagnosis: "全面打診と目視調査により、外壁クラック、シーリング劣化、屋上防水の疲労を確認しました。",
    method: "外壁補修、塗装、屋上防水、シーリング、鉄部塗装を一括で進める総合改修工法を採用しました。",
    comment: "管理組合様への説明と居住者告知を重視し、工事中の不安を抑える運用を行いました。",
    warranty: "工種別の保証範囲を明確化し、完了写真台帳とあわせてお引き渡しします。",
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
    diagnosis: "外壁のチョーキング、退色、雨掛かり部の塗膜劣化、細部クラックを確認しました。",
    method: "高圧洗浄と下地補修後、下塗り・中塗り・上塗りの3工程で高耐候塗料を施工しました。",
    comment: "賃貸物件としての外観印象を改善しつつ、再塗装周期を見据えた仕様にしています。",
    warranty: "塗料仕様と施工部位に応じた保証内容を明示し、経過点検をご案内します。",
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
    diagnosis: "床面トップコートの摩耗、微細クラック、立上り端部の劣化を確認しました。",
    method: "ケレン・清掃・プライマー処理後、ガラスマット積層によるFRP防水層を再形成しました。",
    comment: "短工期で生活影響を抑えながら、端部納まりまで見直して止水性を高めました。",
    warranty: "FRP防水層とトップコートの維持管理時期をお伝えし、施工後の相談に対応します。",
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
    diagnosis: "広範囲の防水層劣化、滞留水、ドレン周辺の納まり不良を確認しました。",
    method: "高耐久のアスファルト防水改修と排水勾配・ドレン周辺の改善を採用しました。",
    comment: "工場稼働を止めない工程を組み、区画ごとの品質検査で施工精度を管理しました。",
    warranty: "防水仕様に応じた保証と、排水部を含む定期確認のご案内に対応します。",
  },
};

const WORK_REGION_BY_SLUG = Object.fromEntries(
  WORKS_CATALOG.map((item) => [item.slug, item.region])
);

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
    path: `/works/${slug}`,
    image: work.afterImage,
  });
}

export default async function Page({ params }) {
  const { slug } = await params;
  const work = works[slug];

  if (!work) {
    notFound();
  }

  const regionKey = WORK_REGION_BY_SLUG[slug] || "kansai";
  const region = WORK_REGIONS[regionKey];

  const workUrl = toAbsoluteUrl(`/works/${slug}`);
  const publishedDate = work.datePublished || DEFAULT_PUBLISHED_DATE;
  const modifiedDate = work.dateModified || publishedDate;
  const workSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${work.title}｜施工事例`,
    description: `${work.area}の${work.workType}事例。${work.buildingType}の施工で、工期${work.period}・費用目安${work.budget}。`,
    datePublished: publishedDate,
    dateModified: modifiedDate,
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
    image: [toAbsoluteUrl(work.afterImage, { addTrailingSlash: false })],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": workUrl,
    },
  };
  const breadcrumbSchema = breadcrumbJsonLd([
    { name: "ホーム", path: "/" },
    { name: "施工事例", path: "/works" },
    { name: `${region.label}の施工事例`, path: region.path },
    { name: work.title, path: `/works/${slug}` },
  ]);

  return (
    <main>
      <JsonLd data={workSchema} />
      <JsonLd data={breadcrumbSchema} />
      <nav className="breadcrumb">
        <div className="container">
          <ol className="breadcrumb__list">
            <li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li>
            <li className="breadcrumb__separator">›</li>
            <li><a href={routePath("/works")} className="breadcrumb__link">施工事例</a></li>
            <li className="breadcrumb__separator">›</li>
            <li><a href={routePath(region.path)} className="breadcrumb__link">{region.label}</a></li>
            <li className="breadcrumb__separator">›</li>
            <li>{work.title}</li>
          </ol>
        </div>
      </nav>
      <section className="page-hero">
        <span className="page-hero__label">Works</span>
        <h1 className="page-hero__title">{work.title}</h1>
      </section>
      
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
                loading="lazy"
                decoding="async"
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
                loading="lazy"
                decoding="async"
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
            <h2>施工前の課題</h2>
            <p>{work.issue}</p>

            <h2>診断内容</h2>
            <p>{work.diagnosis}</p>

            <h2>採用工法</h2>
            <p>{work.method}</p>

            <h2>施工内容</h2>
            <p>{work.summary}</p>

            <h2>施工のポイント</h2>
            <ul>
              {work.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <h2>担当者コメント</h2>
            <p>{work.comment}</p>

            <h2>保証内容</h2>
            <p>{work.warranty}</p>
          </article>
          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <a href={routePath("/works")} className="btn btn--outline-dark">← 施工事例一覧に戻る</a>
          </div>
        </div>
      </section>
    </main>
  );
}
