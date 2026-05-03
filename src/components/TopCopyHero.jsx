import { assetPath } from "@/lib/assetPath";
import { routePath } from "@/lib/routePath";
import styles from "./TopCopyHero.module.css";

const featureItems = [
  {
    number: "01",
    title: "正直な建物診断",
    text: "本当に必要な工事だけを提案。不要な工事や費用を膨らませません。",
    icon: ClipboardSearchIcon,
  },
  {
    number: "02",
    title: "自社職人の直営施工",
    text: "自社職人が施工。品質にブレがなく、安定した仕上がり。",
    icon: WorkerIcon,
  },
  {
    number: "03",
    title: "一貫した管理体制",
    text: "診断から施工まで一社完結。適正価格を実現。",
    icon: BuildingIcon,
  },
];

const ctaItems = [
  {
    href: routePath("/service/large-scale-repair"),
    panelClass: cx(styles.bottomCta, styles.bottomCtaGreen),
    meta: "法人・管理組合の方へ",
    title: "大規模修繕の相談",
    text: "マンション・ビルの大規模修繕はこちら",
    icon: CtaBuildingIcon,
    label: "大規模修繕の相談へ進む",
  },
  {
    href: routePath("/service/waterproofing"),
    panelClass: cx(styles.bottomCta, styles.bottomCtaBlue),
    meta: "個人の方へ",
    title: "雨漏り・防水工事の相談",
    text: "戸建て・マンションの雨漏りや防水工事はこちら",
    icon: CtaHouseIcon,
    label: "雨漏り・防水工事の相談へ進む",
  },
];

export default function TopCopyHero() {
  return (
    <section className={styles.root} aria-labelledby="top-copy-hero-title">
      <div className={styles.heroInner}>
        <div
          className={styles.heroVisual}
          style={{ "--hero-bg-image": `url('${assetPath("/images/hero-test2-bg.jpg")}')` }}
        >
          <div className={styles.topBadges}>
            <p className={styles.badge}>大規模修繕</p>
            <p className={styles.badge}>防水工事</p>
          </div>

          <div className={styles.copyBlock}>
            <h1 id="top-copy-hero-title" className={styles.headline}>
              <span className={styles.headlineLine}>建物の価値を守り、</span>
              <span className={styles.headlineLine}>未来へつなぐ</span>
            </h1>

            <p className={styles.subHeadline}>大規模修繕と防水工事のプロフェッショナル</p>

            <p className={styles.keywordPill}>
              <span className={styles.keywordIconWrap}>
                <WaterDropIcon className={styles.keywordIcon} />
              </span>
              <span>
                <span className={styles.keywordStrong}>雨漏り修理</span>
                からマンション・ビルの大規模修繕まで。
              </span>
            </p>

            <p className={styles.description}>確かな診断力と誠実な施工で、建物を永く守ります。</p>
          </div>

          <ul className={styles.featureGrid} aria-label="強み">
            {featureItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.number} className={styles.featureCard}>
                  <div className={styles.featureHeadingRow}>
                    <p className={styles.featureNumber}>{item.number}</p>
                    <h2 className={styles.featureTitle}>{item.title}</h2>
                  </div>
                  <Icon className={styles.featureIcon} />
                  <p className={styles.featureText}>{item.text}</p>
                </li>
              );
            })}
          </ul>

          <aside className={styles.phoneCta} aria-label="無料相談窓口">
            <p className={styles.phoneHead}>
              <HandshakeIcon className={styles.phoneIcon} />
              <span>無料診断・ご相談受付中</span>
              <span className={styles.bottomCtaText}>管理組合・オーナー・個人のお客様まで幅広く対応</span>
            </p>

            <div className={styles.phoneNumberRow}>
              <a
                href="tel:0798-35-8778"
                aria-label="0798-35-8778へ電話する"
                className={styles.phoneLink}
              >
                <PhoneIcon className={styles.phoneIcon} />
                <span className={styles.number}>0798-35-8778</span>
                <span className={styles.telLabel}>まずはお気軽にご相談ください</span>
              </a>
              <p className={styles.freeBadge} aria-label="ご相談無料">
                ご相談
                <br />
                無料
              </p>
            </div>
          </aside>

          <nav className={styles.bottomCtas} aria-label="相談種別">
            {ctaItems.map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.href} href={item.href} className={item.panelClass} aria-label={item.label}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "12px" }}>
                    <Icon className={styles.phoneIcon} />
                      <span>
                      <span className={styles.bottomCtaMeta}>{item.meta}</span>
                      <span className={styles.bottomCtaTitle}>{item.title}</span>
                      <span className={styles.bottomCtaSub}>{item.text}</span>
                    </span>
                  </span>
                  <span className={styles.bottomCtaArrow} aria-hidden="true">
                    ›
                  </span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </section>
  );
}

function cx(...values) {
  return values.filter(Boolean).join(" ");
}

function ClipboardSearchIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="9" y="10" width="34" height="46" rx="4" />
        <path d="M20 10v-2a4 4 0 0 1 8 0v2" />
        <path d="M16 22h20M16 30h14M16 38h10" />
        <circle cx="46" cy="46" r="10" />
        <path d="m53 53 7 7" />
      </g>
    </svg>
  );
}

function WorkerIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 28v-4a14 14 0 0 1 28 0v4" />
        <path d="M14 28h36v7H14z" />
        <path d="M22 35v6M32 35v6M42 35v6" />
        <path d="M12 57V45a10 10 0 0 1 10-10h20a10 10 0 0 1 10 10v12" />
      </g>
    </svg>
  );
}

function BuildingIcon({ className }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" focusable="false" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 56V24h20v32" />
        <path d="M28 56V12h28v44" />
        <path d="M20 56v-9h16v9" />
        <path d="M14 30h4M14 36h4M14 42h4M34 20h4M42 20h4M50 20h4M34 28h4M42 28h4M50 28h4M34 36h4M42 36h4M50 36h4" />
      </g>
    </svg>
  );
}

function WaterDropIcon({ className }) {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false" className={className}>
      <circle cx="18" cy="18" r="17" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M18 8c-4 6-6 8-6 11a6 6 0 0 0 12 0c0-3-2-5-6-11Z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function HandshakeIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m8 27 8-8 9 5 7-6 8 8" />
        <path d="M14 33 9 28M34 35l5-5" />
        <path d="m20 28 4 4m-1-8 6 6" />
        <path d="M6 24 12 12l9 3M42 24 36 12l-8 2" />
      </g>
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={className}>
      <path
        d="m15 6 8 7-4 6c2 4 6 8 10 10l6-4 7 8-4 6c-2 3-6 4-9 2-7-3-14-10-18-17-2-3-1-7 2-9l2-3Z"
        fill="currentColor"
      />
    </svg>
  );
}

function CtaBuildingIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="21" />
        <path d="M14 34V16h13v18M27 34V11h7v23" />
        <path d="M18 20h2M18 24h2M18 28h2M30 16h2M30 20h2M30 24h2" />
      </g>
    </svg>
  );
}

function CtaHouseIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false" className={className}>
      <g fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="24" cy="24" r="21" />
        <path d="M14 24 24 14l10 10" />
        <path d="M18 24v12h12V24" />
        <path d="M23 30h2v6h-2z" />
      </g>
    </svg>
  );
}
