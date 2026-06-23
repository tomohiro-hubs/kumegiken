import Link from "next/link";
import { routePath } from "@/lib/routePath";
import JsonLd from "@/components/JsonLd";
import { breadcrumbJsonLd, jobPostingJsonLd } from "@/lib/schema";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "事務職（一般事務・総務事務） 募集要項｜西宮の防水・大規模修繕会社 久米技建",
  description: "西宮市の雨漏り補修、防水工事、大規模修繕工事を扱う久米技建の事務職（一般事務・総務事務）募集要項。仕事内容、時給、待遇などを掲載しています。",
  path: "/recruit/office-work",
  image: "/images/recruit-training.jpg",
});

export default function Page() {
  const path = "/recruit/office-work";
  const title = "事務職（一般事務・総務事務）";

  return (
    <main>
      <JsonLd data={breadcrumbJsonLd([{ name: "ホーム", path: "/" }, { name: "採用情報", path: "/recruit" }, { name: title, path }])} />
      <JsonLd data={jobPostingJsonLd({
        title,
        path,
        description: "外壁・防水・塗装工事を手がける会社にて、安全書類・下請け書類の作成、請求書作成、官庁への書類提出などの事務業務をお任せします。経理・労務業務はありません。",
        responsibilities: "安全書類・下請け書類 of 作成、請求書の作成、現場管理の事務サポート、官庁への書類提出、備品管理や発注、電話・来客対応。",
        qualifications: "建設業界や外壁・防水・塗装会社での事務経験者歓迎（年数不問・即戦力採用）。",
        salary: { minValue: 1400, maxValue: 1800, unitText: "HOUR" },
      })} />
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/recruit")} className="breadcrumb__link">採用情報</a></li><li className="breadcrumb__separator">›</li><li>{title}</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Recruit</span><h1 className="page-hero__title">事務職 募集要項</h1></section>

      <section className="content-section"><div className="container container--narrow">
        <table className="info-table reveal"><tbody>
          <tr><th>募集職種</th><td>事務職（一般事務・総務事務）</td></tr>
          <tr><th>雇用形態</th><td>アルバイト・パート（正社員登用あり）</td></tr>
          <tr><th>仕事内容</th><td>
            外壁・防水・塗装工事を手がける会社にて、事務業務をお任せします。<br /><br />
            ＜具体的には＞<br />
            ✅ 安全書類・下請け書類の作成<br />
            ✅ 請求書の作成<br />
            ✅ 現場管理の事務サポート<br />
            ✅ 官庁への書類提出<br />
            （社用車等を使用し、公的機関へ必要書類を提出）<br />
            ✅ 備品管理や発注<br />
            ✅ 電話・来客対応　など<br /><br />
            <strong>★ここがポイント！：業務の掛け持ちはありません★</strong><br />
            当社には経理・労務の専任スタッフが在籍しています。そのため、「給与計算」「年末調整」「決算手伝い」などの業務は一切ありません！「前職では業務の範囲が広すぎてパンクしそうだった…」という方も、使い慣れた建設事務のスキル（安全書類作成など）に専念して働いていただけます。
          </td></tr>
          <tr><th>求める人物像・資格</th><td>
            ・外壁・防水・塗装会社や建設業界での事務経験者（年数不問で即戦力採用！）<br />
            ・経験やスキル（安全書類の作成など）をしっかり評価します。<br />
            ・社長は31歳！「もっとこうしたらスムーズなのに」というアイデアや挑戦も大歓迎です。
          </td></tr>
          <tr><th>給与（時給）</th><td>
            時給 1,400円 〜 1,800円<br />
            ※経験やスキルを考慮のうえ、優遇します。<br />
            ※日々の頑張りに応じて、アルバイト・パートの方でも賞与（ボーナス）の支給があります！
          </td></tr>
          <tr><th>勤務時間・シフト</th><td>
            ・週3日、1日4時間〜勤務可能（ご家庭やご都合に合わせた時間内で調整できます）<br />
            ・GW・お盆・年末年始などの長期休暇もあり、両立しやすい環境です。
          </td></tr>
          <tr><th>待遇・福利厚生</th><td>
            ・時給1,400〜1,800円（経験・能力に応じる）<br />
            ・アルバイト賞与あり／交通費支給<br />
            ・正社員登用制度あり（将来的なステップアップを目指す方も大歓迎）<br />
            ・「甲子園駅」より徒歩10分（株式会社久米技建）
          </td></tr>
          <tr><th>お仕事の特徴</th><td>
            ・お客様との対話が少ない仕事 / 創意工夫の多い仕事<br />
            ・デスクワークが多い / 力仕事が少ない / 室内の仕事が多い / 1人作業が多い<br />
            ・固定の勤務地で働く（転勤なし）
          </td></tr>
        </tbody></table>
        <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
          <p style={{ fontSize: '13px', color: 'var(--color-text-light)', marginBottom: '12px' }}>＼ 約1分でカンタン入力 ／</p>
          <a href={routePath("/recruit/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 応募画面へ進む</a>
        </div>
      </div></section>
    </main>
  );
}
