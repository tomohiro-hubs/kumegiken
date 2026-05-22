import Link from "next/link";
import { routePath } from "@/lib/routePath";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, jobPostingJsonLd } from "@/lib/schema";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "営業職 募集要項｜採用情報｜久米技建",
  description: "久米技建の営業職（正社員）募集要項。仕事内容、勤務条件、応募資格、待遇などを掲載しています。",
  path: "/recruit/sales",
  image: "/images/recruit-training.jpg",
});

export default function Page() {
  const path = "/recruit/sales";
  const title = "営業職（法人・個人営業）";

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "ホーム", path: "/" }, { name: "採用情報", path: "/recruit" }, { name: title, path }])} />
      <JsonLd data={jobPostingJsonLd({
        title,
        path,
        description: "管理会社、不動産会社、一般オーナーへの提案営業、現場調査、見積り作成、受注・契約までを担当します。",
        responsibilities: "提案営業、現場調査、見積り作成、受注契約、既存顧客フォロー、新規顧客開拓。",
        qualifications: "未経験歓迎。人と話すことが好きで、建設業界を学ぶ意欲がある方。",
        salary: { minValue: 230000, unitText: "MONTH" },
      })} />
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/recruit")} className="breadcrumb__link">採用情報</a></li><li className="breadcrumb__separator">›</li><li>営業職（法人・個人営業）</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Recruit</span><h1 className="page-hero__title">営業職 募集要項</h1></section>

<section className="content-section"><div className="container container--narrow">
  <table className="info-table reveal"><tbody>
    <tr><th>募集職種</th><td>営業職（法人・個人営業）</td></tr>
    <tr><th>仕事内容</th><td>・管理会社、不動産会社、一般オーナーへの提案営業<br />・現場調査、見積り作成、受注・契約までの一連の営業活動<br />・既存顧客のフォローアップ、新規顧客の開拓も一部あり</td></tr>
    <tr><th>求める人物像</th><td>・人と話すのが好き、聞き上手な方<br />・建設業界の知識はゼロでもOK（学ぶ意欲がある方）<br />・稼ぎたい／成長したいという熱意のある方</td></tr>
    <tr><th>給与</th><td>月給23万円〜＋インセンティブ（成果に応じて支給）<br />※年収例1：年収510万円（入社2年目・営業）<br />※年収例2：年収680万円（入社5年目・営業）</td></tr>
    <tr><th>勤務時間</th><td>9:00〜18:00（内1時間休憩）</td></tr>
    <tr><th>休日</th><td>週休2日制（土日）※要相談で平日休みも可<br />GW・夏季・年末年始</td></tr>
    <tr><th>待遇・福利厚生</th><td>・昇給・賞与あり／営業手当／成果インセンティブ<br />・社会保険完備／交通費支給<br />・携帯・PC貸与／社用車あり<br />・未経験歓迎／業界経験者は優遇</td></tr>
  </tbody></table>
  <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
    <a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 応募する / お問い合わせ</a>
  </div>
</div></section>
  
    </main>
  );
}
