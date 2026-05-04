import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "ヒーローヘッダーテスト2｜株式会社久米技建",
  description: "ヒーローヘッダー差し替え用のテストページ2です。",
  path: "/test-hero-2",
  noindex: true,
});

export default function TestHeroPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: `url('${assetPath("/images/hero-test2-bg.jpg")}')` }}
        >
          <div className={styles.copyBlock}>
            <p className={styles.lead}>
              建物<span className={styles.particle}>の</span>
              <span className={styles.accent}>価値</span>を守り、未来へつなぐ。
            </p>
            <h1 className={styles.copyHeading}>
              <span className={styles.copyLine}>
                大規模修繕<span className={styles.particle}>と</span>
              </span>
              <span className={styles.copyLine}>
                <span className={styles.accent}>防水塗装</span>
                <span className={styles.particle}>の</span>
              </span>
              <span className={styles.copyLine}>プロフェッショナル</span>
            </h1>
            <p className={styles.subCopy}>
              <span>確かな技術と誠実な施工で、</span>
              <span>安心・安全な建物環境を実現します。</span>
            </p>
            <p className={styles.tagline}>For the buildings. For the future.</p>
          </div>
          <div className={styles.badgesBlock}>
            <img src={assetPath("/images/hero-badges-overlay.png")} alt="特長バッジ" className={styles.badgesImage} />
          </div>
        </div>
      </section>
    </main>
  );
}
