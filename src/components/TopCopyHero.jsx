import { assetPath } from "@/lib/assetPath";
import { routePath } from "@/lib/routePath";
import { siteConfig } from "@/lib/siteConfig";
import Image from "next/image";
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
    panelClass: styles.bottomCta,
    meta: "法人・管理組合の方へ",
    title: "大規模修繕の相談",
    text: "マンション・ビルの大規模修繕はこちら",
    buttonBg: "/images/top-copy6-cta-large-scale.png",
    label: "大規模修繕の相談へ進む",
  },
  {
    href: routePath("/service/leak-repair"),
    panelClass: styles.bottomCta,
    meta: "個人の方へ",
    title: "雨漏り・防水工事の相談",
    text: "戸建て・マンションの雨漏りや防水工事はこちら",
    buttonBg: "/images/top-copy6-cta-waterproof.png",
    label: "雨漏り・防水工事の相談へ進む",
  },
];

const HERO_IMAGE_DIMENSIONS = {
  "/images/top-copy-handshake-icon.png": { width: 1080, height: 1080 },
  "/images/top-copy-icon-01.png": { width: 290, height: 311 },
  "/images/top-copy-icon-02.png": { width: 259, height: 302 },
  "/images/top-copy-icon-03.png": { width: 317, height: 260 },
  "/images/top-copy-building-icon.png": { width: 1080, height: 1080 },
  "/images/top-copy-house-icon.png": { width: 1080, height: 1080 },
};

function HeroDecorativeImage({ src, className, optimizeForCopy3 }) {
  const dims = HERO_IMAGE_DIMENSIONS[src];
  if (!optimizeForCopy3 || !dims) {
    return <img src={assetPath(src)} alt="" aria-hidden="true" className={className} />;
  }

  return (
    <Image
      src={assetPath(src)}
      alt=""
      aria-hidden="true"
      width={dims.width}
      height={dims.height}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
}

export default function TopCopyHero({ optimizeForCopy3 = false, optimizeForCopy6 = false }) {
  const heroBgImage = optimizeForCopy6
    ? "/images/top-copy6-hero-fv.png"
    : optimizeForCopy3
      ? "/images/top-copy-hero-bg-copy3.webp"
      : "/images/top-copy-hero-bg.png";

  if (optimizeForCopy6) {
    return (
      <section
        className={cx(styles.root, styles.copy6Root)}
        aria-labelledby="top-copy-hero-title"
        style={{
          "--top-copy-hero-bg-image": `url('${assetPath(heroBgImage)}')`,
          "--top-copy-hero-bg-image-sp": `url('${assetPath("/images/top-copy6-hero-fv-sp.png")}')`
        }}
      >
        <div className={styles.copy6Inner}>
          <div className={styles.copy6CopyBlock}>
            <h1 id="top-copy-hero-title" className={styles.copy6Headline}>
              <div className={styles.copy6TitleWrapper}>
                <span className={styles.copy6TitleLine}>建物資産保全の専門会社</span>
              </div>
              <div className={styles.copy6TitleWrapper}>
                <span className={styles.copy6TitleLine}>雨漏り・防水工事に強い</span>
              </div>
            </h1>
            <p className={styles.copy6SubHeadline}>
              学校・福祉施設・工場・マンション　<br className={styles.spOnly} />あらゆる建物寿命を延ばす修繕パートナー
            </p>
            <div className={styles.copy6BannerContainer}>
              <picture>
                <source media="(max-width: 767px)" srcSet={assetPath("/images/top-copy6-hero-banner-sp.png")} />
                <img
                  src={assetPath("/images/top-copy6-hero-banner.png")}
                  alt="無料診断受付中 建物の劣化・雨漏りはまず無料診断へ"
                  className={styles.copy6BannerImg}
                />
              </picture>
              <a href={routePath("/contact")} className={styles.copy6BannerBtnLink}>
                <picture>
                  <source media="(max-width: 767px)" srcSet={assetPath("/images/top-copy6-hero-banner-btn-sp.png")} />
                  <img
                    src={assetPath("/images/top-copy6-hero-banner-btn.png")}
                    alt="無料診断・見積もりを依頼する"
                    className={styles.copy6BannerBtnImg}
                  />
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={styles.root}
      aria-labelledby="top-copy-hero-title"
      style={{ "--top-copy-hero-bg-image": `url('${assetPath(heroBgImage)}')` }}
    >
      <div className={styles.heroInner}>
        <div className={styles.heroVisual}>
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

            <p className={styles.description}>確かな診断力と誠実な施工で、建物の価値を守ります。</p>
          </div>

          <ul className={styles.featureGrid} aria-label="強み">
            {featureItems.map((item) => {
              const Icon = item.icon;
              const iconClassName =
                item.number === "03" ? `${styles.featureIcon} ${styles.featureIcon03}` : styles.featureIcon;
              return (
                <li key={item.number} className={styles.featureCard}>
                  <div className={styles.featureHeadingRow}>
                    <p className={styles.featureNumber}>{item.number}</p>
                    <h2 className={styles.featureTitle}>{item.title}</h2>
                  </div>
                  <Icon className={iconClassName} optimizeForCopy3={optimizeForCopy3} />
                  <p className={styles.featureText}>{item.text}</p>
                </li>
              );
            })}
          </ul>

          <aside className={styles.phoneCta} aria-label="無料相談窓口">
            <p className={styles.phoneHead}>
              <HeroDecorativeImage
                src="/images/top-copy-handshake-icon.png"
                optimizeForCopy3={optimizeForCopy3}
                className={`${styles.phoneIcon} ${styles.phoneHeadIcon}`}
              />
              <span>無料診断・ご相談受付中</span>
              <span className={styles.bottomCtaText}>管理組合・オーナー・個人のお客様まで幅広く対応</span>
            </p>

            <div className={styles.phoneNumberRow}>
              <a
                href={`tel:${siteConfig.phone.tel}`}
                className={styles.phoneLink}
              >
                <img
                  src={assetPath("/images/top-copy-phone-icon.png")}
                  alt=""
                  aria-hidden="true"
                  className={styles.phoneNumberIcon}
                />
                <span className={styles.number}>{siteConfig.phone.display}</span>
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
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={item.panelClass}
                  style={{ "--top-copy-cta-button-bg": `url('${assetPath(item.buttonBg)}')` }}
                >
                  <span className={styles.bottomCtaCopy}>
                      <span className={styles.bottomCtaMeta}>{item.meta}</span>
                      <span className={styles.bottomCtaTitle}>{item.title}</span>
                      <span className={styles.bottomCtaSub}>{item.text}</span>
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

function ClipboardSearchIcon({ className, optimizeForCopy3 = false }) {
  return <HeroDecorativeImage src="/images/top-copy-icon-01.png" optimizeForCopy3={optimizeForCopy3} className={className} />;
}

function WorkerIcon({ className, optimizeForCopy3 = false }) {
  return <HeroDecorativeImage src="/images/top-copy-icon-02.png" optimizeForCopy3={optimizeForCopy3} className={className} />;
}

function BuildingIcon({ className, optimizeForCopy3 = false }) {
  return <HeroDecorativeImage src="/images/top-copy-icon-03.png" optimizeForCopy3={optimizeForCopy3} className={className} />;
}

function WaterDropIcon({ className }) {
  return <img src={assetPath("/images/top-copy-waterdrop-icon.png")} alt="" aria-hidden="true" className={className} />;
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

function CtaBuildingIcon({ className, optimizeForCopy3 = false }) {
  return <HeroDecorativeImage src="/images/top-copy-building-icon.png" optimizeForCopy3={optimizeForCopy3} className={className} />;
}

function CtaHouseIcon({ className, optimizeForCopy3 = false }) {
  return <HeroDecorativeImage src="/images/top-copy-house-icon.png" optimizeForCopy3={optimizeForCopy3} className={className} />;
}
