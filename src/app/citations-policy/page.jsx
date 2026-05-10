import { buildMetadata } from "@/lib/seo";
import { routePath } from "@/lib/routePath";

export const metadata = buildMetadata({
  title: "引用・出典ポリシー｜久米技建",
  description: "久米技建の引用・出典ポリシー。第三者情報の扱い、参照基準、更新時のルールを定めています。",
  path: "/citations-policy",
});

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Policy</span><h1 className="page-hero__title">引用・出典ポリシー</h1></section>
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>引用・出典ポリシー</li></ol></div></nav>
      <section className="content-section"><div className="container container--narrow article-content">
        <h2>1. 引用情報の取り扱い</h2>
        <p>第三者の統計・基準・公的情報を参照する場合は、出典元を明示し、内容の趣旨を損なわない範囲で引用します。</p>

        <h2>2. 出典の選定基準</h2>
        <p>公的機関、業界団体、メーカー公式情報など、信頼性の高い一次情報を優先します。</p>

        <h2>3. 参照情報の更新</h2>
        <p>参照元の改定・公開終了を定期確認し、古い情報は更新または削除します。</p>

        <h2>4. 免責事項</h2>
        <p>掲載情報は一般的な参考情報であり、建物条件や地域事情により適用可否が異なる場合があります。個別判断は現地調査のうえで行います。</p>
      </div></section>
    </main>
  );
}
