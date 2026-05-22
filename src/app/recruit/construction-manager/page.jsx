import Link from "next/link";
import { routePath } from "@/lib/routePath";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, jobPostingJsonLd } from "@/lib/schema";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "施工管理 募集要項｜採用情報｜久米技建",
  description: "久米技建の施工管理職（正社員）募集要項。業務内容、給与、応募条件、待遇などを掲載しています。",
  path: "/recruit/construction-manager",
  image: "/images/recruit-training.jpg",
});

export default function Page() {
  const path = "/recruit/construction-manager";
  const title = "施工管理";

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "ホーム", path: "/" }, { name: "採用情報", path: "/recruit" }, { name: title, path }])} />
      <JsonLd data={jobPostingJsonLd({
        title,
        path,
        description: "マンション・ビル・戸建住宅の外壁塗装工事・防水工事における現場監督業務を担当します。",
        responsibilities: "工程・品質・安全・原価管理、職人や協力業者への指示、施主様・管理会社対応、見積補助、書類作成。",
        qualifications: "建築施工管理技士資格者または現場管理経験者を歓迎。資格がなくても現場管理経験10年以上の方は優遇。",
        salary: { minValue: 350000, maxValue: 1000000, unitText: "MONTH" },
      })} />
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/recruit")} className="breadcrumb__link">採用情報</a></li><li className="breadcrumb__separator">›</li><li>施工管理</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Recruit</span><h1 className="page-hero__title">施工管理 募集要項</h1></section>

<section className="content-section"><div className="container container--narrow">
  <table className="info-table reveal"><tbody>
    <tr><th>募集職種</th><td>現場監督業務（現場代理人）</td></tr>
    <tr><th>仕事内容</th><td>マンション・ビル・戸建住宅における外壁塗装工事・防水工事の現場監督業務（現場代理人）をお任せします。<br />・現場管理（工程・品質・安全・原価管理）<br />・職人・協力業者との打ち合わせ、指示出し<br />・施主様・管理会社との対応<br />・見積補助、書類作成 など<br />経験や資格に応じて、裁量を持って現場をお任せします。</td></tr>
    <tr><th>求める人物像</th><td>・建築施工管理技士（1級・2級）などの有資格者<br />・資格がなくても、現場管理経験10年以上ある方<br />・協力業者・人脈をお持ちの方は優遇<br />・責任感を持って現場をまとめられる方<br />・長く安定して働きたい方</td></tr>
    <tr><th>給与</th><td>※いずれも固定残業代（35時間分）を含む<br />・月給35万円〜45万円（資格なし）<br />・月給45万円〜55万円（2級建築施工管理技士）<br />・月給60万円〜100万円以上（1級建築施工管理技士）<br />※経験・能力を最大限考慮します<br />※固定残業時間超過分は別途支給</td></tr>
    <tr><th>勤務時間</th><td>8:00〜17:00（現場により多少の変動あり）（内2時間休憩）</td></tr>
    <tr><th>休日</th><td>日曜・祝日、GW・夏季・年末年始<br />※希望休・連休取得も相談可</td></tr>
    <tr><th>待遇・福利厚生</th><td>・昇給年1回／賞与年2回<br />・社会保険完備／交通費全額支給<br />・作業服・道具貸与／資格取得支援制度あり<br />・社用車貸与</td></tr>
  </tbody></table>
  <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
    <a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 応募する / お問い合わせ</a>
  </div>
</div></section>
  
    </main>
  );
}
