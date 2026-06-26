import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/siteConfig";

export const metadata = buildMetadata({
  title: "西宮市の雨漏り修繕・防水工事なら久米技建｜無料建物診断・見積無料",
  description: "西宮市を中心に神戸市・大阪市など阪神間エリアで雨漏り修繕・防水工事・外壁施工を自社施工で対応。原因調査から応急処置、根本修繕までワンストップ。無料建物診断・見積無料・報告書作成。",
  path: "/service/leak-repair",
  image: "/images/leak-repair.png",
});

export default function Page() {
  return (
    <main className="leak-repair-lp-page">
      {/* ===== パンくずリスト ===== */}
      <nav className="breadcrumb">
        <div className="container">
          <ol className="breadcrumb__list">
            <li><Link href={routePath("/")} className="breadcrumb__link">ホーム</Link></li>
            <li className="breadcrumb__separator">›</li>
            <li><Link href={routePath("/service")} className="breadcrumb__link">サービス</Link></li>
            <li className="breadcrumb__separator">›</li>
            <li>雨漏り調査・補修</li>
          </ol>
        </div>
      </nav>

      {/* ===== ヒーロー ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg"></div>
        <div className="hero-photo" style={{ backgroundImage: `url('${assetPath("/images/leak-repair.png")}')` }} aria-hidden="true"></div>
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title">
              <span className="hero-sub">西宮市周辺の</span>
              雨漏り修繕・調査
            </h1>
            <p className="hero-lead">
              防水工事・外壁施工で培った技術を活かし、<br />
              <strong>原因調査から応急処置、根本修繕まで自社施工</strong>で対応します。
            </p>
            <ul className="hero-badges">
              <li>
                <div className="badge-circle">
                  <span>無料<br />建物診断</span>
                </div>
              </li>
              <li>
                <div className="badge-circle">
                  <span>見積<br />無料</span>
                </div>
              </li>
              <li>
                <div className="badge-circle">
                  <span>報告書<br />作成</span>
                </div>
              </li>
            </ul>
            <div className="hero-actions">
              <a href={`tel:${siteConfig.phone.tel}`} className="btn btn-primary btn-lg">
                <i className="fa-solid fa-phone"></i>
                お電話で相談する
                <small>{siteConfig.phone.display} ／ 9:00-18:00</small>
              </a>
              <Link href={routePath("/contact")} className="btn btn-secondary btn-lg">
                <i className="fa-solid fa-envelope"></i>
                メールで相談する
                <small>24時間受付中 ／ 返信無料</small>
              </Link>
            </div>
          </div>
        </div>
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none"><path d="M0,64 C240,120 480,0 720,32 C960,64 1200,120 1440,72 L1440,120 L0,120 Z"></path></svg>
        </div>
      </section>

      {/* ===== 症状チェック ===== */}
      <section className="section section-symptoms" id="symptoms">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">CHECK</p>
            <h2 className="section-title">このような症状はありませんか？</h2>
            <p className="section-desc">ひとつでも当てはまる場合は、雨漏りのサインかもしれません。早めの調査が建物を守ります。</p>
          </div>
          <div className="symptom-grid">
            <article className="symptom-card">
              <div className="symptom-photo">
                <img src={assetPath("/images/symptom-ceiling-stain.png")} alt="天井の雨染み" loading="lazy" />
              </div>
              <div className="symptom-body">
                <h3>天井や壁に雨染みがある</h3>
                <p>シミや変色が広がっている場合、防水の劣化や排水処理により雨漏りの可能性があります。</p>
              </div>
            </article>
            <article className="symptom-card">
              <div className="symptom-photo">
                <img src={assetPath("/images/symptom-dripping.png")} alt="天井から雨水がポタポタ落ちる様子" loading="lazy" />
              </div>
              <div className="symptom-body">
                <h3>雨の日だけポタポタ音がする</h3>
                <p>特定の天井で音がする場合、水の浸入経路が考えられます。早めの調査をおすすめします。</p>
              </div>
            </article>
            <article className="symptom-card">
              <div className="symptom-photo">
                <img src={assetPath("/images/symptom-veranda-wet.png")} alt="水が溜まったベランダの床" loading="lazy" />
              </div>
              <div className="symptom-body">
                <h3>ベランダの床がいつも濡れている</h3>
                <p>排水不良や防水層の劣化により、水が溜まっている可能性があります。</p>
              </div>
            </article>
            <article className="symptom-card">
              <div className="symptom-photo">
                <img src={assetPath("/images/symptom-wall-crack.png")} alt="外壁のひび割れ" loading="lazy" />
              </div>
              <div className="symptom-body">
                <h3>外壁のひび割れが気になる</h3>
                <p>ひび割れから雨水が侵入し、内部に影響することがあります。</p>
              </div>
            </article>
            <article className="symptom-card">
              <div className="symptom-photo">
                <img src={assetPath("/images/symptom-window-leak.png")} alt="サッシまわりのシーリング劣化" loading="lazy" />
              </div>
              <div className="symptom-body">
                <h3>サッシのまわりから水が入る</h3>
                <p>シーリングの劣化や隙間から雨水が侵入することがあります。</p>
              </div>
            </article>
            <article className="symptom-card">
              <div className="symptom-photo">
                <img src={assetPath("/images/symptom-roof-damage.png")} alt="傷んだ屋根や板金" loading="lazy" />
              </div>
              <div className="symptom-body">
                <h3>屋根や板金の周りが傷んでいる</h3>
                <p>経年劣化や台風の影響で雨漏りの原因になることがあります。</p>
              </div>
            </article>
          </div>
          <div className="symptom-cta">
            <p>気になる症状があれば、まずは<strong>無料建物診断</strong>をご利用ください。</p>
            <div className="symptom-cta-actions">
              <a href={`tel:${siteConfig.phone.tel}`} className="btn btn-primary">
                <i className="fa-solid fa-phone"></i> お電話で相談してみる
              </a>
              <Link href={routePath("/contact")} className="btn btn-secondary">
                <i className="fa-solid fa-envelope"></i> メールで相談してみる
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 放置リスク ===== */}
      <section className="section section-risk" id="risk">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow section-eyebrow-light">RISK</p>
            <h2 className="section-title section-title-light">雨漏りを放置するリスク</h2>
            <p className="section-desc section-desc-light">「少しくらい大丈夫」が大きな被害に。放置するほど被害も費用も拡大します。</p>
          </div>
          <div className="risk-grid">
            <article className="risk-card">
              <span className="risk-num">01</span>
              <div className="risk-icon"><i className="fa-solid fa-building-circle-exclamation"></i></div>
              <h3>建物の劣化が進行する</h3>
              <p>柱や梁などの構造部分が腐食し、建物の寿命そのものを縮めてしまいます。</p>
            </article>
            <article className="risk-card">
              <span className="risk-num">02</span>
              <div className="risk-icon"><i className="fa-solid fa-virus-covid"></i></div>
              <h3>カビや健康被害の原因に</h3>
              <p>湿気によりカビやダニが発生し、アレルギーなど健康へ影響することがあります。</p>
            </article>
            <article className="risk-card">
              <span className="risk-num">03</span>
              <div className="risk-icon"><i className="fa-solid fa-yen-sign"></i></div>
              <h3>修繕費用が高額になる</h3>
              <p>被害が広がるほど工事範囲が拡大し、結果的に修繕費用が高額になります。</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== 雨漏りの主な原因 ===== */}
      <section className="section section-causes" id="causes">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">CAUSE</p>
            <h2 className="section-title">雨漏りの主な原因</h2>
            <p className="section-desc">雨漏りの原因はさまざま。久米技建は正確な原因調査から対応します。</p>
          </div>
          <div className="cause-grid">
            <article className="cause-card">
              <div className="cause-img">
                <img src={assetPath("/images/cause-roof-damage.png")} alt="屋根材の破損・劣化" loading="lazy" />
              </div>
              <div className="cause-body">
                <h3>屋根材の破損・劣化</h3>
                <p>瓦の割れ・ズレ、塗装の劣化により、屋根から雨水が侵入することがあります。</p>
              </div>
            </article>
            <article className="cause-card">
              <div className="cause-img">
                <img src={assetPath("/images/cause-waterproof-damage.png")} alt="防水層の劣化" loading="lazy" />
              </div>
              <div className="cause-body">
                <h3>防水の劣化</h3>
                <p>防水層のひび割れや剥がれにより、ベランダ・屋上から浸水することがあります。</p>
              </div>
            </article>
            <article className="cause-card">
              <div className="cause-img">
                <img src={assetPath("/images/cause-sealing-damage.png")} alt="シーリングの劣化" loading="lazy" />
              </div>
              <div className="cause-body">
                <h3>シーリングの劣化</h3>
                <p>外壁やサッシのまわりのシーリングが劣化し、隙間から雨水が侵入します。</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== サービス内容 ===== */}
      <section className="section section-services" id="services">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">SERVICE</p>
            <h2 className="section-title">久米技建のサービス</h2>
            <p className="section-desc">防水工事・外壁施工で培った技術で、原因調査から根本修繕まで自社施工で一貫対応します。</p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon"><i className="fa-solid fa-magnifying-glass-chart"></i></div>
              <h3>原因調査・建物診断</h3>
              <p>散水調査などで雨水の浸入経路を特定。無料建物診断と報告書作成にも対応します。</p>
            </article>
            <article className="service-card">
              <div className="service-icon"><i className="fa-solid fa-screwdriver-wrench"></i></div>
              <h3>応急処置・雨漏り修繕</h3>
              <p>被害の拡大を防ぐ応急処置から、原因に応じた確実な雨漏り修繕まで対応します。</p>
            </article>
            <article className="service-card">
              <div className="service-icon"><i className="fa-solid fa-droplet"></i></div>
              <h3>防水工事</h3>
              <p>ベランダ・屋上・バルコニーなどの防水工事。建物に最適な防水仕様をご提案します。</p>
            </article>
            <article className="service-card">
              <div className="service-icon"><i className="fa-solid fa-trowel-bricks"></i></div>
              <h3>外壁施工・シーリング</h3>
              <p>外壁のひび割れ補修やシーリングの打ち替えで、雨水の侵入をしっかり防ぎます。</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== 選ばれる理由 ===== */}
      <section className="section section-strengths" id="strengths">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">REASON</p>
            <h2 className="section-title">久米技建が選ばれる理由</h2>
          </div>
          <div className="strength-grid">
            <article className="strength-card">
              <div className="strength-photo">
                <img src={assetPath("/images/reason-01-generated.jpg")} alt="自社施工で一貫対応" loading="lazy" />
              </div>
              <div className="strength-card-header">
                <span className="strength-badge">REASON 01</span>
                <div className="strength-icon-wrap">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
              </div>
              <h3>自社施工で一貫対応</h3>
              <p>原因調査から応急処置、根本修繕まですべて自社施工。中間マージンがなく、品質も明確です。</p>
              <div className="strength-bg-num">01</div>
            </article>
            <article className="strength-card">
              <div className="strength-photo">
                <img src={assetPath("/images/optimal-selection-2.jpeg")} alt="確かな技術力" loading="lazy" />
              </div>
              <div className="strength-card-header">
                <span className="strength-badge">REASON 02</span>
                <div className="strength-icon-wrap">
                  <i className="fa-solid fa-award"></i>
                </div>
              </div>
              <h3>確かな技術力</h3>
              <p>防水工事・外壁施工で培った技術と経験で、雨漏りの根本原因にアプローチします。</p>
              <div className="strength-bg-num">02</div>
            </article>
            <article className="strength-card">
              <div className="strength-photo">
                <img src={assetPath("/images/crack-inspection.jpg")} alt="無料診断・見積無料" loading="lazy" />
              </div>
              <div className="strength-card-header">
                <span className="strength-badge">REASON 03</span>
                <div className="strength-icon-wrap">
                  <i className="fa-solid fa-magnifying-glass-chart"></i>
                </div>
              </div>
              <h3>無料診断・見積無料</h3>
              <p>建物診断・お見積りは無料。報告書も作成し、内容にご納得いただいてからの施工です。</p>
              <div className="strength-bg-num">03</div>
            </article>
            <article className="strength-card">
              <div className="strength-photo">
                <img src={assetPath("/images/after-support.jpg")} alt="地域密着・スピード対応" loading="lazy" />
              </div>
              <div className="strength-card-header">
                <span className="strength-badge">REASON 04</span>
                <div className="strength-icon-wrap">
                  <i className="fa-solid fa-bolt-lightning"></i>
                </div>
              </div>
              <h3>地域密着・スピード対応</h3>
              <p>西宮市を中心に阪神間エリアに対応。お近くだからこそスピーディーに駆けつけます。</p>
              <div className="strength-bg-num">04</div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== ご相談の流れ ===== */}
      <section className="section section-flow" id="flow">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">FLOW</p>
            <h2 className="section-title">ご相談の流れ</h2>
            <p className="section-desc">お問い合わせから施工完了まで、わかりやすい流れでご案内します。</p>
          </div>
          <ol className="flow-list">
            <li className="flow-step">
              <span className="flow-step-num">STEP 1</span>
              <div className="flow-step-icon"><i className="fa-solid fa-comments"></i></div>
              <h3>お問い合わせ</h3>
              <p>お電話またはフォームよりお気軽にご相談ください。フォームは24時間受付中です。</p>
            </li>
            <li className="flow-step">
              <span className="flow-step-num">STEP 2</span>
              <div className="flow-step-icon"><i className="fa-solid fa-magnifying-glass-location"></i></div>
              <h3>現地調査・無料診断</h3>
              <p>専門スタッフが現地を調査し、雨漏りの原因を特定。報告書を作成します。</p>
            </li>
            <li className="flow-step">
              <span className="flow-step-num">STEP 3</span>
              <div className="flow-step-icon"><i className="fa-solid fa-file-invoice-dollar"></i></div>
              <h3>お見積り・ご提案</h3>
              <p>調査結果をもとに、最適な修繕プランと無料お見積りをご提示します。</p>
            </li>
            <li className="flow-step">
              <span className="flow-step-num">STEP 4</span>
              <div className="flow-step-icon"><i className="fa-solid fa-helmet-safety"></i></div>
              <h3>施工・アフター</h3>
              <p>ご納得いただいてから自社施工で対応。施工後のアフターフォローも安心です。</p>
            </li>
          </ol>
        </div>
      </section>

      {/* ===== CTA 帯 ===== */}
      <section className="cta-band" id="cta-band">
        <div className="cta-band-photo" style={{ backgroundImage: `url('${assetPath("/images/consultation.jpg")}')` }} aria-hidden="true"></div>
        <div className="container cta-band-inner">
          <div className="cta-band-content">
            <p className="cta-band-eyebrow">まずはお気軽にご相談ください</p>
            <ul className="cta-band-list">
              <li><i className="fa-solid fa-check"></i> 現地調査・お見積りは無料です。</li>
              <li><i className="fa-solid fa-check"></i> ご相談・ご質問のみでも大歓迎です。</li>
              <li><i className="fa-solid fa-check"></i> しつこい営業は一切いたしません。</li>
            </ul>
            <div className="cta-band-actions">
              <Link href={routePath("/contact")} className="cta-box cta-box-form">
                <i className="fa-solid fa-envelope"></i>
                <span><strong>メールで相談する</strong><small>24時間受付中 ／ 返信無料</small></span>
              </Link>
              <a href={`tel:${siteConfig.phone.tel}`} className="cta-box cta-box-tel">
                <i className="fa-solid fa-phone"></i>
                <span><strong>TEL. {siteConfig.phone.display}</strong><small>受付時間 平日9:00-18:00</small></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== LP専用 CSS スタイル ===== */}
      <style dangerouslySetInnerHTML={{__html: `
        .leak-repair-lp-page {
          --navy: #0b2d54;
          --navy-dark: #072039;
          --blue: #1769b3;
          --blue-light: #2d8fd6;
          --aqua: #2fb6d6;
          --accent: #ff7a18;
          --accent-dark: #e96400;
          --ink: #1c2733;
          --ink-soft: #48586a;
          --line: #e1e7ee;
          --bg: #f4f8fc;
          --white: #fff;
          --radius: 16px;
          --shadow: 0 12px 32px rgba(11,45,84,.10);
          --shadow-sm: 0 4px 14px rgba(11,45,84,.08);
          --maxw: 1140px;

          font-family: "Noto Sans JP", sans-serif;
          color: var(--ink);
          line-height: 1.8;
          background: var(--white);
          overflow-x: hidden;
        }

        .leak-repair-lp-page * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .leak-repair-lp-page img {
          max-width: 100%;
          display: block;
        }

        .leak-repair-lp-page a {
          text-decoration: none;
          color: inherit;
        }

        .leak-repair-lp-page ul,
        .leak-repair-lp-page ol {
          list-style: none;
        }

        .leak-repair-lp-page .container {
          width: 100%;
          max-width: var(--maxw);
          margin: 0 auto;
          padding: 0 22px;
        }

        /* ---------- buttons ---------- */
        .leak-repair-lp-page .btn {
          position: relative;
          overflow: hidden;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
          font-weight: 700;
          border-radius: 6px;
          line-height: 1.3;
          padding: 14px 28px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          cursor: pointer;
          border: none;
          text-align: center;
        }

        .leak-repair-lp-page .btn i {
          font-size: 1.05em;
          transition: transform 0.2s ease;
        }

        .leak-repair-lp-page .btn small {
          font-size: .72rem;
          font-weight: 500;
          opacity: .92;
        }

        .leak-repair-lp-page .btn-lg {
          padding: 18px 42px;
          font-size: 1.15rem;
        }

        .leak-repair-lp-page .btn-block {
          width: 100%;
        }

        .leak-repair-lp-page .btn-primary {
          background: #fff;
          color: var(--navy);
          border: 2px solid #d4e2f0;
          box-shadow: 0 6px 16px rgba(11,45,84,.08);
        }

        .leak-repair-lp-page .btn-primary i {
          color: var(--blue);
        }

        .leak-repair-lp-page .btn-primary:hover {
          transform: translateY(-3px);
          border-color: var(--blue);
          box-shadow: 0 10px 20px rgba(11,45,84,.12);
        }

        .leak-repair-lp-page .btn-primary:active,
        .leak-repair-lp-page .btn-secondary:active {
          transform: translateY(-1px);
        }

        .leak-repair-lp-page .btn-secondary {
          background: var(--navy);
          color: #fff;
          box-shadow: 0 10px 22px rgba(11,45,84,.28);
        }

        .leak-repair-lp-page .btn-secondary:hover {
          background: var(--navy-dark);
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(11,45,84,.4);
        }

        /* LP内のすべての電話アイコンを右向き（反転なし）に統一する */
        .leak-repair-lp-page .fa-phone,
        .leak-repair-lp-page .fa-phone-alt {
          display: inline-block;
          transform: scaleX(1) !important; /* globals.css の反転設定を打ち消して右向きにします */
        }

        /* 電話アイコンのブルブル震えるアニメーション */
        .leak-repair-lp-page .btn-primary:hover i.fa-phone {
          animation: lpPhoneWiggle 0.6s ease infinite;
        }

        @keyframes lpPhoneWiggle {
          0% { transform: scaleX(1) rotate(0deg) scale(1.1); }
          10% { transform: scaleX(1) rotate(-10deg) scale(1.15); }
          20% { transform: scaleX(1) rotate(12deg) scale(1.15); }
          30% { transform: scaleX(1) rotate(-10deg) scale(1.15); }
          40% { transform: scaleX(1) rotate(9deg) scale(1.15); }
          50% { transform: scaleX(1) rotate(0deg) scale(1.15); }
          100% { transform: scaleX(1) rotate(0deg) scale(1.1); }
        }

        /* メールアイコンの跳ねるアニメーション */
        .leak-repair-lp-page .btn-secondary:hover i.fa-envelope {
          animation: lpEnvelopeBounce 0.6s ease;
        }

        @keyframes lpEnvelopeBounce {
          0% { transform: translateY(0) scale(1.1); }
          30% { transform: translateY(-4px) scale(1.15); }
          50% { transform: translateY(2px) scale(1.05); }
          80% { transform: translateY(-1px) scale(1.12); }
          100% { transform: translateY(0) scale(1.1); }
        }



        .leak-repair-lp-page .btn-tel {
          background: #fff;
          color: var(--navy);
          box-shadow: var(--shadow-sm);
          border: 2px solid #fff;
        }

        .leak-repair-lp-page .btn-tel:hover {
          transform: translateY(-3px);
        }

        .leak-repair-lp-page .section-services .btn-primary,
        .leak-repair-lp-page .symptom-cta .btn-primary {
          display: inline-flex;
        }

        /* ---------- hero ---------- */
        .leak-repair-lp-page .hero {
          position: relative;
          color: #fff;
          padding: 120px 0 100px;
          overflow: hidden;
          isolation: isolate;
        }

        .leak-repair-lp-page .hero-bg {
          position: absolute;
          inset: 0;
          z-index: -2;
          background:
            radial-gradient(1200px 600px at 80% -10%,rgba(47,182,214,.45),transparent 60%),
            linear-gradient(135deg,var(--navy-dark) 0%,var(--navy) 45%,var(--blue) 100%);
        }

        .leak-repair-lp-page .hero-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(255,255,255,.07) 1.5px,transparent 1.5px);
          background-size: 26px 26px;
          opacity: .6;
        }

        .leak-repair-lp-page .hero-photo {
          position: absolute;
          inset: 0;
          z-index: -1;
          background-size: cover;
          background-position: center;
          opacity: .28;
          mask-image: linear-gradient(270deg,transparent 0%,#000 55%);
          -webkit-mask-image: linear-gradient(270deg,transparent 0%,#000 55%);
        }

        .leak-repair-lp-page .hero-inner {
          max-width: var(--maxw);
          margin: 0 auto;
          padding: 0 22px;
        }

        .leak-repair-lp-page .hero-copy {
          max-width: 580px;
          margin-left: auto;
        }

        @media (min-width: 769px) {
          .leak-repair-lp-page .hero-copy {
            text-align: right;
          }
          .leak-repair-lp-page .hero-badges {
            width: 520px;
            margin-left: auto;
            display: flex;
            justify-content: space-between;
            gap: 0;
          }
          .leak-repair-lp-page .badge-circle {
            width: 150px;
            height: 150px;
          }
          .leak-repair-lp-page .hero-actions {
            width: 520px;
            margin-left: auto;
            display: flex;
            justify-content: space-between;
            gap: 0;
          }
          .leak-repair-lp-page .hero-actions .btn {
            width: 250px;
            padding: 18px 0;
          }
        }

        .leak-repair-lp-page .hero-area {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: .92rem;
          font-weight: 500;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.25);
          padding: 7px 16px;
          border-radius: 50px;
          margin-bottom: 22px;
        }

        .leak-repair-lp-page .hero-area i {
          color: var(--aqua);
        }

        .leak-repair-lp-page .hero-title {
          font-family: var(--font-ja);
          font-weight: 700;
          font-size: clamp(2.3rem, 6vw, 3.9rem);
          line-height: 1.25;
          letter-spacing: .5px;
          text-shadow: 0 4px 20px rgba(0,0,0,.25);
          text-align: center;
        }

        .leak-repair-lp-page .hero-sub {
          display: block;
          font-size: .45em;
          font-weight: 600;
          color: var(--aqua);
          margin-bottom: 6px;
        }

        .leak-repair-lp-page .hero-lead {
          margin-top: 22px;
          font-size: clamp(1rem, 2.4vw, 1.25rem);
          font-weight: 400;
          line-height: 1.9;
        }

        .leak-repair-lp-page .hero-lead strong {
          color: #ffd9a8;
          font-weight: 700;
        }

        .leak-repair-lp-page .hero-badges {
          display: flex;
          flex-wrap: nowrap;
          gap: clamp(8px, 2vw, 24px);
          margin-top: 32px;
          justify-content: center;
        }

        .leak-repair-lp-page .hero-badges li {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .leak-repair-lp-page .badge-circle {
          width: clamp(90px, 25vw, 168px);
          height: clamp(90px, 25vw, 168px);
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.08));
          border: 2px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2), inset 0 2px 6px rgba(255, 255, 255, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .leak-repair-lp-page .badge-circle span {
          font-weight: 700;
          font-size: clamp(0.85rem, 2.2vw, 1.35rem);
          line-height: 1.3;
          color: #fff;
          letter-spacing: 0.5px;
          text-shadow: 0 2px 4px rgba(7, 32, 57, 0.4);
        }

        .leak-repair-lp-page .badge-circle:hover {
          transform: translateY(-6px) scale(1.04);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 0 16px 30px rgba(255, 122, 24, 0.3), inset 0 2px 6px rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.2);
        }

        .leak-repair-lp-page .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 36px;
        }

        .leak-repair-lp-page .hero-wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          line-height: 0;
          z-index: -1;
        }

        .leak-repair-lp-page .hero-wave svg {
          width: 100%;
          height: 90px;
        }

        .leak-repair-lp-page .hero-wave path {
          fill: #fff;
        }

        /* ---------- section common ---------- */
        .leak-repair-lp-page .section {
          padding: 84px 0;
        }

        .leak-repair-lp-page .section-head {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 50px;
        }

        .leak-repair-lp-page .section-eyebrow {
          display: inline-block;
          font-weight: 700;
          letter-spacing: 3px;
          font-size: .82rem;
          color: var(--blue);
          margin-bottom: 10px;
        }

        .leak-repair-lp-page .section-eyebrow-light {
          color: var(--aqua);
        }

        .leak-repair-lp-page .section-eyebrow::before,
        .leak-repair-lp-page .section-eyebrow::after {
          content: "";
          display: inline-block;
          width: 26px;
          height: 2px;
          background: currentColor;
          vertical-align: middle;
          margin: 0 10px;
          opacity: .6;
        }

        .leak-repair-lp-page .section-title {
          font-family: var(--font-ja);
          font-weight: 700;
          font-size: clamp(1.7rem, 4.4vw, 2.5rem);
          color: var(--navy);
          line-height: 1.4;
        }

        .leak-repair-lp-page .section-title-light {
          color: #fff;
        }

        .leak-repair-lp-page .section-desc {
          margin-top: 16px;
          color: var(--ink-soft);
          font-size: 1.02rem;
        }

        .leak-repair-lp-page .section-desc-light {
          color: rgba(255,255,255,.85);
        }

        /* ---------- symptoms ---------- */
        .leak-repair-lp-page .section-symptoms {
          background: var(--bg);
        }

        .leak-repair-lp-page .symptom-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .leak-repair-lp-page .symptom-card {
          background: #fff;
          border-radius: var(--radius);
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--line);
          transition: .25s;
          position: relative;
          overflow: hidden;
        }

        .leak-repair-lp-page .symptom-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow);
        }

        .leak-repair-lp-page .symptom-photo {
          height: 190px;
          overflow: hidden;
          position: relative;
        }

        .leak-repair-lp-page .symptom-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .5s;
        }

        .leak-repair-lp-page .symptom-card:hover .symptom-photo img {
          transform: scale(1.07);
        }

        .leak-repair-lp-page .symptom-photo::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(11, 45, 84, .18));
        }

        .leak-repair-lp-page .symptom-body {
          padding: 22px 24px 26px;
        }

        .leak-repair-lp-page .symptom-card h3 {
          font-size: 1.15rem;
          color: var(--navy);
          margin-bottom: 10px;
          line-height: 1.5;
        }

        .leak-repair-lp-page .symptom-card h3::before {
          content: "\\f071";
          font-family: "Font Awesome 6 Free";
          font-weight: 900;
          color: var(--accent);
          margin-right: 8px;
          font-size: .9em;
        }

        .leak-repair-lp-page .symptom-card p {
          font-size: .94rem;
          color: var(--ink-soft);
        }

        .leak-repair-lp-page .symptom-cta {
          text-align: center;
          margin-top: 44px;
        }

        .leak-repair-lp-page .symptom-cta p {
          font-size: 1.1rem;
          margin-bottom: 18px;
          font-weight: 500;
        }

        .leak-repair-lp-page .symptom-cta strong {
          color: var(--accent-dark);
        }

        .leak-repair-lp-page .symptom-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
          margin-top: 18px;
        }

        .leak-repair-lp-page .symptom-cta-actions .btn {
          flex: 1;
          min-width: 250px;
          max-width: 320px;
        }

        /* ---------- risk ---------- */
        .leak-repair-lp-page .section-risk {
          background: var(--navy-dark);
          color: #fff;
          position: relative;
          overflow: hidden;
          z-index: 1;
          /* 背景のフィルター削除に伴い、文字の視認性を確保するための影を追加 */
          text-shadow: 0 2px 10px rgba(7, 32, 57, 0.7);
        }



        .leak-repair-lp-page .risk-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          position: relative;
        }

        .leak-repair-lp-page .risk-card {
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.14);
          border-radius: var(--radius);
          padding: 38px 28px 32px;
          position: relative;
          text-align: center;
        }

        .leak-repair-lp-page .risk-num {
          position: absolute;
          top: 14px;
          right: 20px;
          font-family: var(--font-ja);
          font-size: 2.6rem;
          font-weight: 700;
          color: rgba(255,255,255,.12);
        }

        .leak-repair-lp-page .risk-icon {
          width: 74px;
          height: 74px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          margin: 0 auto 18px;
          font-size: 1.9rem;
          color: #fff;
          background: var(--blue);
          box-shadow: 0 8px 20px rgba(47, 182, 214, 0.15);
        }

        .leak-repair-lp-page .risk-card h3 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .leak-repair-lp-page .risk-card p {
          font-size: .94rem;
          color: rgba(255,255,255,.82);
        }

        /* ---------- causes ---------- */
        .leak-repair-lp-page .cause-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .leak-repair-lp-page .cause-card {
          background: #fff;
          border-radius: var(--radius);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--line);
          transition: .25s;
        }

        .leak-repair-lp-page .cause-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow);
        }

        .leak-repair-lp-page .cause-img {
          height: 180px;
          overflow: hidden;
          position: relative;
        }

        .leak-repair-lp-page .cause-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .5s;
        }

        .leak-repair-lp-page .cause-card:hover .cause-img img {
          transform: scale(1.07);
        }

        .leak-repair-lp-page .cause-body {
          padding: 24px 26px 28px;
        }

        .leak-repair-lp-page .cause-body h3 {
          font-size: 1.22rem;
          color: var(--navy);
          margin-bottom: 10px;
        }

        .leak-repair-lp-page .cause-body p {
          font-size: .95rem;
          color: var(--ink-soft);
        }

        /* ---------- services ---------- */
        .leak-repair-lp-page .section-services {
          background: var(--bg);
        }

        .leak-repair-lp-page .service-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        .leak-repair-lp-page .service-card {
          background: #fff;
          border-radius: var(--radius);
          padding: 34px 24px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--line);
          transition: .25s;
        }

        .leak-repair-lp-page .service-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--shadow);
        }

        .leak-repair-lp-page .service-icon {
          width: 78px;
          height: 78px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          margin: 0 auto 20px;
          font-size: 2rem;
          color: #fff;
          background: var(--blue);
        }

        .leak-repair-lp-page .service-card h3 {
          font-size: 1.12rem;
          color: var(--navy);
          margin-bottom: 10px;
        }

        .leak-repair-lp-page .service-card p {
          font-size: .9rem;
          color: var(--ink-soft);
        }

        /* ---------- strengths ---------- */
        .leak-repair-lp-page .section-strengths {
          background: linear-gradient(180deg, #fff 0%, #f4f8fc 100%);
          position: relative;
          overflow: hidden;
        }

        .leak-repair-lp-page .section-strengths::before {
          content: "";
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(14, 86, 186, 0.03) 0%, transparent 70%);
          bottom: -200px;
          left: -200px;
          pointer-events: none;
        }

        .leak-repair-lp-page .strength-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
          position: relative;
          z-index: 1;
        }

        .leak-repair-lp-page .strength-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(14, 86, 186, 0.08);
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: 0 10px 30px rgba(11, 45, 84, 0.03);
          position: relative;
          overflow: hidden;
          transition: all 0.35s cubic-bezier(0.25, 0.8, 0.25, 1);
          display: flex;
          flex-direction: column;
        }

        .leak-repair-lp-page .strength-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(11, 45, 84, 0.08);
          border-color: rgba(14, 86, 186, 0.15);
        }

        .leak-repair-lp-page .strength-photo {
          height: 180px;
          overflow: hidden;
          margin: -40px -36px 24px -36px;
          position: relative;
          border-bottom: 1px solid rgba(14, 86, 186, 0.06);
        }

        .leak-repair-lp-page .strength-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .leak-repair-lp-page .strength-card:hover .strength-photo img {
          transform: scale(1.06);
        }

        .leak-repair-lp-page .strength-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .leak-repair-lp-page .strength-badge {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: var(--blue);
          background: rgba(14, 86, 186, 0.06);
          padding: 6px 14px;
          border-radius: 50px;
          border: 1px solid rgba(14, 86, 186, 0.1);
        }

        .leak-repair-lp-page .strength-icon-wrap {
          width: 54px;
          height: 54px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(14, 86, 186, 0.08), rgba(47, 182, 214, 0.08));
          display: grid;
          place-items: center;
          font-size: 1.4rem;
          color: var(--blue);
          transition: all 0.3s ease;
        }

        .leak-repair-lp-page .strength-card:hover .strength-icon-wrap {
          background: linear-gradient(135deg, var(--blue), var(--aqua));
          color: #fff;
          transform: rotate(5deg) scale(1.05);
        }

        .leak-repair-lp-page .strength-card h3 {
          font-size: 1.35rem;
          color: var(--navy);
          margin-bottom: 12px;
          font-weight: 700;
          position: relative;
          z-index: 2;
        }

        .leak-repair-lp-page .strength-card p {
          color: var(--ink-soft);
          font-size: 0.98rem;
          line-height: 1.75;
          position: relative;
          z-index: 2;
        }

        .leak-repair-lp-page .strength-bg-num {
          position: absolute;
          bottom: -15px;
          right: 15px;
          font-size: 6rem;
          font-weight: 900;
          color: rgba(14, 86, 186, 0.03);
          line-height: 1;
          user-select: none;
          pointer-events: none;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .leak-repair-lp-page .strength-card:hover .strength-bg-num {
          color: rgba(14, 86, 186, 0.06);
          transform: translateY(-5px);
        }

        /* ---------- flow ---------- */
        .leak-repair-lp-page .section-flow {
          background: var(--bg);
        }

        .leak-repair-lp-page .flow-list {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          counter-reset: flow;
        }

        .leak-repair-lp-page .flow-step {
          background: #fff;
          border-radius: var(--radius);
          padding: 30px 22px;
          text-align: center;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--line);
          position: relative;
        }

        .leak-repair-lp-page .flow-step:not(:last-child)::after {
          content: "\\f054";
          font-family: "Font Awesome 6 Free";
          font-weight: 900;
          position: absolute;
          right: -15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--blue-light);
          font-size: 1.2rem;
          z-index: 2;
        }

        .leak-repair-lp-page .flow-step-num {
          display: inline-block;
          font-weight: 700;
          font-size: .78rem;
          letter-spacing: 1.5px;
          color: var(--accent-dark);
          background: #fff2e6;
          padding: 4px 14px;
          border-radius: 50px;
          margin-bottom: 16px;
        }

        .leak-repair-lp-page .flow-step-icon {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          margin: 0 auto 16px;
          font-size: 1.7rem;
          color: #fff;
          background: var(--navy);
        }

        .leak-repair-lp-page .flow-step h3 {
          font-size: 1.1rem;
          color: var(--navy);
          margin-bottom: 8px;
        }

        .leak-repair-lp-page .flow-step p {
          font-size: .88rem;
          color: var(--ink-soft);
        }

        /* ---------- cta band ---------- */
        .leak-repair-lp-page .cta-band {
          position: relative;
          overflow: hidden;
          padding: 110px 0;
          background: linear-gradient(105deg,#f3f8fd 0%,#f3f8fd 56%,#e3eef8 100%);
        }

        .leak-repair-lp-page .cta-band-photo {
          position: absolute;
          top: 0;
          right: 0;
          width: 42%;
          height: 100%;
          z-index: 0;
          background-size: cover;
          background-position: center 80%;
          transform: scale(1.4);
          transform-origin: center center;
          -webkit-mask-image: linear-gradient(90deg,transparent 0%,#000 28%);
          mask-image: linear-gradient(90deg,transparent 0%,#000 28%);
        }

        .leak-repair-lp-page .cta-band-inner {
          position: relative;
          z-index: 1;
        }

        .leak-repair-lp-page .cta-band-content {
          max-width: 620px;
        }

        .leak-repair-lp-page .cta-band-eyebrow {
          font-family: var(--font-ja);
          font-weight: 700;
          font-size: clamp(1.3rem, 3.4vw, 1.9rem);
          color: var(--navy);
          margin-bottom: 20px;
          letter-spacing: 1px;
        }

        .leak-repair-lp-page .cta-band-list {
          display: grid;
          gap: 12px;
          margin-bottom: 28px;
        }

        .leak-repair-lp-page .cta-band-list li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: clamp(.98rem, 2.2vw, 1.12rem);
          font-weight: 500;
          color: var(--ink);
        }

        .leak-repair-lp-page .cta-band-list i {
          flex: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: .72rem;
          color: #fff;
          background: var(--navy);
        }

        .leak-repair-lp-page .cta-band-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .leak-repair-lp-page .cta-box {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 26px;
          border-radius: 6px;
          transition: .25s;
          min-width: 280px;
          flex: 1 1 280px;
        }

        .leak-repair-lp-page .cta-box i {
          font-size: 1.4rem;
          flex: none;
        }

        .leak-repair-lp-page .cta-box strong {
          display: block;
          font-size: 1.12rem;
          line-height: 1.3;
        }

        .leak-repair-lp-page .cta-box small {
          display: block;
          font-size: .78rem;
          opacity: .92;
          font-weight: 500;
          margin-top: 2px;
        }

        .leak-repair-lp-page .cta-box-form {
          background: var(--navy);
          color: #fff;
          box-shadow: 0 10px 22px rgba(11,45,84,.28);
        }

        .leak-repair-lp-page .cta-box-form:hover {
          background: var(--navy-dark);
          transform: translateY(-3px);
        }

        .leak-repair-lp-page .cta-box-tel {
          background: #fff;
          color: var(--navy);
          border: 2px solid #d4e2f0;
          box-shadow: 0 6px 16px rgba(11,45,84,.08);
        }

        .leak-repair-lp-page .cta-box-tel i {
          color: var(--blue);
        }

        .leak-repair-lp-page .cta-box-tel:hover {
          transform: translateY(-3px);
          border-color: var(--blue);
        }

        .leak-repair-lp-page .sp-br {
          display: none;
        }

        .leak-repair-lp-page .reveal {
          opacity: 1;
          transform: none;
        }

        /* =========================================================
           responsive
           ========================================================= */
        @media(max-width:1024px){
          .leak-repair-lp-page .service-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .leak-repair-lp-page .flow-list {
            grid-template-columns: repeat(2, 1fr);
          }
          .leak-repair-lp-page .flow-step:nth-child(2)::after {
            display: none;
          }
        }

        @media(max-width:860px){
          .leak-repair-lp-page .symptom-grid,
          .leak-repair-lp-page .risk-grid,
          .leak-repair-lp-page .cause-grid {
            grid-template-columns: 1fr 1fr;
          }
          .leak-repair-lp-page .strength-grid {
            grid-template-columns: 1fr;
          }
          .leak-repair-lp-page .cta-band-photo {
            width: 60%;
            opacity: .18;
          }
        }

        @media(max-width:680px){
          .leak-repair-lp-page .section {
            padding: 60px 0;
          }
          .leak-repair-lp-page .cta-band {
            padding: 80px 0;
          }
          .leak-repair-lp-page .hero {
            padding: 100px 0 80px;
          }
          .leak-repair-lp-page .hero-actions {
            flex-direction: column;
          }
          .leak-repair-lp-page .hero-actions .btn {
            width: 100%;
          }
          .leak-repair-lp-page .strength-card {
            padding: 30px 24px;
          }
          .leak-repair-lp-page .strength-photo {
            margin: -30px -24px 20px -24px;
            height: 160px;
          }
          .leak-repair-lp-page .symptom-grid,
          .leak-repair-lp-page .risk-grid,
          .leak-repair-lp-page .cause-grid,
          .leak-repair-lp-page .service-grid,
          .leak-repair-lp-page .flow-list {
            grid-template-columns: 1fr;
          }
          .leak-repair-lp-page .flow-step::after {
            display: none;
          }
          .leak-repair-lp-page .cta-box {
            min-width: 0;
            flex: 1 1 100%;
          }
          .leak-repair-lp-page .sp-br {
            display: block;
          }
        }
      `}} />
    </main>
  );
}
