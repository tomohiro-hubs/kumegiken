import Link from "next/link";
import { routePath } from "@/lib/routePath";

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Recruit</span><h1 className="page-hero__title">防水職人 募集要項</h1></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/recruit")} className="breadcrumb__link">採用情報</a></li><li className="breadcrumb__separator">›</li><li>防水職人</li></ol></div></nav>
<section className="content-section"><div className="container container--narrow">
  <table className="info-table reveal"><tbody>
    <tr><th>職種</th><td>防水職人（ウレタン防水・シート防水・FRP防水等）</td></tr>
    <tr><th>雇用形態</th><td>正社員</td></tr>
    <tr><th>給与</th><td>月給25万円〜45万円（経験・スキルに応じて優遇）</td></tr>
    <tr><th>勤務時間</th><td>8:00〜17:00（現場により変動あり）</td></tr>
    <tr><th>休日・休暇</th><td>日曜日・祝日、GW、夏季休暇、年末年始、有給休暇</td></tr>
    <tr><th>勤務地</th><td>兵庫県・大阪府を中心とした関西圏の各現場</td></tr>
    <tr><th>応募資格</th><td>18歳以上（経験不問・未経験者歓迎）<br />普通自動車免許（AT限定可）</td></tr>
    <tr><th>優遇資格</th><td>1級・2級防水施工技能士、建築施工管理技士</td></tr>
    <tr><th>待遇</th><td>社会保険完備、交通費支給、資格取得支援制度、<br />作業着・安全装備支給、昇給あり、賞与あり</td></tr>
  </tbody></table>
  <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
    <a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 応募する / お問い合わせ</a>
    <p style={{ fontSize: '13px', color: 'var(--color-text-muted)', marginTop: '12px' }}>見学も歓迎します。まずはお気軽にお問い合わせください。</p>
  </div>
</div></section>
  
    </main>
  );
}