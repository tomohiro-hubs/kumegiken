import Link from "next/link";
import { routePath } from "@/lib/routePath";

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Recruit</span><h1 className="page-hero__title">施工管理 募集要項</h1></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li><a href={routePath("/recruit")} className="breadcrumb__link">採用情報</a></li><li className="breadcrumb__separator">›</li><li>施工管理</li></ol></div></nav>
<section className="content-section"><div className="container container--narrow">
  <table className="info-table reveal"><tbody>
    <tr><th>職種</th><td>施工管理（防水工事・大規模修繕工事・外壁塗装工事）</td></tr>
    <tr><th>雇用形態</th><td>正社員</td></tr>
    <tr><th>給与</th><td>月給30万円〜55万円（経験・資格に応じて優遇）</td></tr>
    <tr><th>勤務時間</th><td>8:00〜17:00（現場により変動あり）</td></tr>
    <tr><th>休日・休暇</th><td>日曜日・祝日、GW、夏季休暇、年末年始、有給休暇</td></tr>
    <tr><th>勤務地</th><td>本社（西宮市）および関西圏の各現場</td></tr>
    <tr><th>応募資格</th><td>施工管理経験3年以上<br />普通自動車免許</td></tr>
    <tr><th>優遇資格</th><td>1級建築施工管理技士、2級建築施工管理技士</td></tr>
    <tr><th>待遇</th><td>社会保険完備、交通費支給、資格取得支援制度、<br />社用車貸与、昇給あり、賞与あり</td></tr>
  </tbody></table>
  <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
    <a href={routePath("/contact")} className="btn btn--primary btn--lg"><i className="fas fa-envelope"></i> 応募する / お問い合わせ</a>
  </div>
</div></section>
  
    </main>
  );
}