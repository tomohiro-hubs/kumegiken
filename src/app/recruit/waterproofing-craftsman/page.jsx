import Link from "next/link";
import { routePath } from "@/lib/routePath";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, jobPostingJsonLd } from "@/lib/schema";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "防水職人 募集要項｜採用情報｜久米技建",
  description: "久米技建の防水職人（正社員）募集要項。未経験可の育成体制、給与、業務内容、待遇を掲載しています。",
  path: "/recruit/waterproofing-craftsman",
  image: "/images/recruit-training.jpg",
});

export default function Page() {
  const path = "/recruit/waterproofing-craftsman";
  const title = "防水職人";

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "ホーム", path: "/" }, { name: "採用情報", path: "/recruit" }, { name: title, path }])} />
      <JsonLd data={jobPostingJsonLd({
        title,
        path,
        description: "マンション・ビル・戸建住宅の外壁塗装や防水工事の現場施工を担当します。未経験者は基礎から指導します。",
        responsibilities: "外壁塗装、防水工事、現場施工、材料準備、現場清掃、安全確認。",
        qualifications: "未経験歓迎。ものづくりや体を動かす仕事が好きで、チームで協力して働ける方。",
        salary: { minValue: 220000, maxValue: 450000, unitText: "MONTH" },
      })} />
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/recruit")} className="breadcrumb__link">採用情報</a></li><li className="breadcrumb__separator">›</li><li>防水職人</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Recruit</span><h1 className="page-hero__title">防水職人 募集要項</h1></section>

<section className="content-section"><div className="container container--narrow">
  <table className="info-table reveal"><tbody>
    <tr><th>募集職種</th><td>施工スタッフ（外壁塗装・防水工事）</td></tr>
    <tr><th>仕事内容</th><td>マンション・ビル・戸建住宅の外壁塗装や防水工事の現場施工<br />※経験者は即戦力として優遇／未経験者は丁寧に指導します</td></tr>
    <tr><th>求める人物像</th><td>・モノづくり・体を動かす仕事が好きな方<br />・チームで協力して働くのが好きな方<br />・長く安定して働きたい方</td></tr>
    <tr><th>給与</th><td>月給22万円〜45万円（経験・能力を考慮）<br />※試用期間あり（3ヶ月）<br />※職長経験者は月給50万円以上も可能<br />※希望により日当制も可能<br />日給13,000円〜25,000円</td></tr>
    <tr><th>勤務時間</th><td>8:00〜17:00（現場により多少の変動あり）（内2時間休憩）</td></tr>
    <tr><th>休日</th><td>日曜・祝日、GW・夏季・年末年始<br />※希望休・連休取得も相談可</td></tr>
    <tr><th>待遇・福利厚生</th><td>・昇給年1回／賞与年2回<br />・社会保険完備／交通費全額支給<br />・作業服・道具貸与／資格取得支援制度あり<br />・社用車貸与（職長クラス）</td></tr>
  </tbody></table>
  <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
    <a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 応募する / お問い合わせ</a>
    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '12px' }}>見学も歓迎します。まずはお気軽にお問い合わせください。</p>
  </div>
</div></section>
  
    </main>
  );
}
