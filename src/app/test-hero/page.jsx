import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import styles from "./page.module.css";

export const metadata = buildMetadata({
  title: "ヒーローヘッダーテスト｜株式会社久米技建",
  description: "ヒーローヘッダー差し替え用のテストページです。",
  path: "/test-hero",
  noindex: true,
});

export default function TestHeroPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div
          className={styles.heroImage}
          style={{ backgroundImage: `url('${assetPath("/images/hero-test-header.png")}')` }}
        >
          <div className={styles.copyBlock}>
            <img src={assetPath("/images/hero-copy-overlay.png")} alt="ヒーローテキスト" className={styles.copyImage} />
          </div>
          <div className={styles.badgesBlock}>
            <img src={assetPath("/images/hero-badges-overlay.png")} alt="特長バッジ" className={styles.badgesImage} />
          </div>
        </div>
      </section>
    </main>
  );
}
