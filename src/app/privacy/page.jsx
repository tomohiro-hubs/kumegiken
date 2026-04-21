import Link from "next/link";
import { routePath } from "@/lib/routePath";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "プライバシーポリシー｜久米技建",
  description: "株式会社久米技建のプライバシーポリシーです。個人情報の取得・利用・管理方針について記載しています。",
  path: "/privacy",
  image: "/images/hero-main.jpg",
});

export default function Page() {
  return (
    <main>
      <section className="page-hero"><span className="page-hero__label">Privacy Policy</span><h1 className="page-hero__title">プライバシーポリシー</h1></section>
<nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>プライバシーポリシー</li></ol></div></nav>
<section className="content-section"><div className="container container--narrow"><div className="article-content">
  <p>株式会社久米技建（以下「当社」）は、お客様の個人情報の保護に細心の注意を払い、以下のプライバシーポリシーに基づき、個人情報の適切な取り扱いと保護に努めます。</p>
  <h2>1. 個人情報の定義</h2>
  <p>個人情報とは、個人情報保護法に定義される「個人情報」を指し、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、メールアドレス等により特定の個人を識別できるものをいいます。</p>
  <h2>2. 個人情報の収集</h2>
  <p>当社は、お問い合わせフォーム、お見積もりのご依頼、採用のご応募等を通じて、必要な範囲で個人情報を収集することがあります。収集にあたっては、利用目的を明示し、適法かつ公正な手段によって行います。</p>
  <h2>3. 個人情報の利用目的</h2>
  <p>当社は、収集した個人情報を以下の目的で利用いたします。</p>
  <ul>
    <li>お問い合わせへの回答、お見積もりの作成・送付</li>
    <li>施工に関するご連絡・ご案内</li>
    <li>アフターサービスに関するご連絡</li>
    <li>当社サービスの改善・向上のための分析</li>
    <li>採用選考のための連絡</li>
  </ul>
  <h2>4. 個人情報の第三者提供</h2>
  <p>当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。</p>
  <ul>
    <li>お客様の同意がある場合</li>
    <li>法令に基づく場合</li>
    <li>人の生命、身体または財産の保護のために必要がある場合</li>
  </ul>
  <h2>5. 個人情報の安全管理</h2>
  <p>当社は、個人情報の紛失、破壊、改ざんおよび漏洩等を防止するため、適切な安全管理措置を講じます。</p>
  <h2>6. 個人情報の開示・訂正・削除</h2>
  <p>お客様ご本人から個人情報の開示・訂正・削除のご要望があった場合は、ご本人であることを確認の上、速やかに対応いたします。</p>
  <h2>7. お問い合わせ</h2>
  <p>個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。</p>
  <p>株式会社久米技建<br />〒663-8113 兵庫県西宮市甲子園口2丁目<br />TEL: 0798-78-6880<br />受付時間: 平日 9:00〜18:00</p>
  <p style={{ textAlign: 'right', marginTop: '40px', fontSize: '14px', color: 'var(--color-text-muted)' }}>制定日：2016年4月1日<br />最終改定日：2026年1月1日<br />株式会社久米技建 代表取締役 久米涼平</p>
</div></div></section>
  
    </main>
  );
}