import Link from "next/link";
import { routePath } from "@/lib/routePath";
import { assetPath } from "@/lib/assetPath";
import { serviceCards } from "@/lib/serviceCards";
import VoiceCarousel from "@/components/VoiceCarousel";

export const metadata = {
  title: "大規模修繕・防水工事なら久米技建｜兵庫・大阪の専門会社",
  description:
    "西宮市の防水・大規模修繕専門会社。自社職人21名による直営施工、正直な建物診断でマンション・ビルオーナー様の資産価値を守ります。無料診断実施中。",
};

export default function Home() {
  return (
    <main>
{/* ========== HERO / FIRST VIEW ========== */}
  <section className="hero">
    <div className="hero__bg">
      <div className="hero__bg-img" style={{ width: '100%', height: '100%', background: `url('${assetPath("/images/hero-main.jpg")}') center/cover no-repeat` }}>
      </div>
      <div className="hero__bg-overlay"></div>
    </div>
    <div className="hero__content">
      <span className="hero__label reveal">Waterproofing & Renovation Specialists</span>
      <h1 className="hero__title reveal reveal--delay-1">
        防水のプロが、<br />
        本当に必要な工事だけを、<br />
        職人の手で。
      </h1>
      <p className="hero__description reveal reveal--delay-2">
        久米技建は、正直な建物診断に基づき、不要な工事を省いた最適な提案で<br className="pc-only" />
        ビル・マンションオーナー様の資産価値を守り続けます。
      </p>
      <div className="hero__cta reveal reveal--delay-3">
        <a href={routePath("/contact")} className="btn btn--primary btn--lg">
          <i className="fas fa-file-alt"></i> 無料診断のお申し込み
          <span className="btn__arrow">→</span>
        </a>
        <a href={routePath("/simulation")} className="btn btn--outline btn--lg">
          <i className="fas fa-calculator"></i> お見積もりシミュレーション
        </a>
      </div>
    </div>
    <div className="hero__scroll">
      <span className="hero__scroll-text">Scroll</span>
      <span className="hero__scroll-line"></span>
    </div>
  </section>

  {/* ========== REASON SECTION ========== */}
  <section className="reason" id="reason">
    <div className="container">
      <div className="section-heading reveal">
        <span className="section-heading__en">Why Choose Us</span>
        <h2 className="section-heading__ja">久米技建が選ばれる<span className="text-accent">3つの理由</span></h2>
        <span className="section-heading__line"></span>
      </div>

      <div className="reason__list">
        {/* Reason 1 */}
        <div className="reason__item reveal">
          <div className="reason__image">
            <img src={assetPath("/images/inspection-scene.jpg")} alt="正直な建物診断の様子" style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '12px' }} />
            <span className="reason__image-badge">Reason 01</span>
          </div>
          <div className="reason__body">
            <span className="reason__number en">01</span>
            <h3 className="reason__title">正直な診断レポートに基づく、<br />必要な工事だけの提案</h3>
            <p className="reason__text">
              私たちは建物の状態を正確に把握し、お客様に「本当に必要な工事」だけをご提案します。不要な工事で費用を膨らませることはありません。第三者的な視点での診断レポートを作成し、透明性の高い情報をもとに、お客様が安心して判断できる環境を整えます。
            </p>
          </div>
        </div>

        {/* Reason 2 */}
        <div className="reason__item reveal">
          <div className="reason__image">
            <img src={assetPath("/images/waterproofing-hands.jpg")} alt="防水工事の専門技術" style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '12px' }} />
            <span className="reason__image-badge">Reason 02</span>
          </div>
          <div className="reason__body">
            <span className="reason__number en">02</span>
            <h3 className="reason__title">防水の専門技術を核にした、<br />一貫した施工管理体制</h3>
            <p className="reason__text">
              防水工事の専門会社として創業した技術的ルーツを活かし、調査から施工、アフターフォローまで一貫した管理体制を構築。中間マージンが発生しない直接施工だからこそ、コストを抑えながらも高品質な仕上がりを実現します。施工管理4名が現場を徹底管理しています。
            </p>
          </div>
        </div>

        {/* Reason 3 */}
        <div className="reason__item reveal">
          <div className="reason__image">
            <img src={assetPath("/images/team-group.jpg")} alt="自社職人チーム" style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', borderRadius: '12px' }} />
            <span className="reason__image-badge">Reason 03</span>
          </div>
          <div className="reason__body">
            <span className="reason__number en">03</span>
            <h3 className="reason__title">自社職人21名の直営施工。<br />品質にブレがない。</h3>
            <p className="reason__text">
              久米技建には21名の自社職人が在籍しています。外注に頼らず、教育・訓練を受けた自社の職人が直接施工するため、品質にばらつきがありません。一つひとつの現場に責任を持ち、丁寧な仕事でお客様の信頼にお応えしています。
            </p>
          </div>
        </div>
      </div>


    </div>
  </section>

  {/* ========== SERVICE SECTION ========== */}
  <section className="service" id="service">
    <div className="container">
      <div className="section-heading reveal">
        <span className="section-heading__en">Service</span>
        <h2 className="section-heading__ja">サービス一覧</h2>
        <span className="section-heading__line"></span>
      </div>

      <div className="service__grid">
        {serviceCards.map((card, index) => {
          const revealClass =
            index === 1 ? "reveal reveal--delay-1" : index === 2 ? "reveal reveal--delay-2" : "reveal";
          return (
            <a href={routePath(card.href)} className={`service-card ${revealClass}`} key={card.key}>
              <div className="service-card__image">
                <img src={assetPath(card.image)} alt={card.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{card.title}</h3>
                <p className="service-card__text">{card.descriptionHome}</p>
                <span className="service-card__link">詳しく見る <i className="fas fa-arrow-right"></i></span>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </section>

  {/* ========== WORKS SECTION ========== */}
  <section className="works" id="works">
    <div className="container">
      <div className="section-heading reveal">
        <span className="section-heading__en">Works</span>
        <h2 className="section-heading__ja">施工事例</h2>
        <span className="section-heading__line"></span>
      </div>

      <div className="works__grid">
        <a href={routePath("/works/nishinomiya-mansion-waterproofing-01")} className="work-card reveal" data-category="waterproofing">
          <div className="work-card__image">
            <img src={assetPath("/images/waterproofing-rooftop.jpg")} alt="屋上ウレタン防水改修工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} />
            <span className="work-card__category">防水工事</span>
          </div>
          <div className="work-card__body">
            <div className="work-card__meta">
              <span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 西宮市</span>
              <span className="work-card__meta-item"><i className="fas fa-building"></i> マンション</span>
            </div>
            <h3 className="work-card__title">屋上ウレタン防水改修工事</h3>
          </div>
        </a>

        <a href={routePath("/works/osaka-building-large-scale-repair-01")} className="work-card reveal reveal--delay-1" data-category="large-scale-repair">
          <div className="work-card__image">
            <img src={assetPath("/images/scaffold-install.jpg")} alt="オフィスビル大規模修繕工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} />
            <span className="work-card__category">大規模修繕</span>
          </div>
          <div className="work-card__body">
            <div className="work-card__meta">
              <span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 大阪市</span>
              <span className="work-card__meta-item"><i className="fas fa-building"></i> ビル</span>
            </div>
            <h3 className="work-card__title">オフィスビル大規模修繕工事</h3>
          </div>
        </a>

        <a href={routePath("/works/kobe-mansion-painting-01")} className="work-card reveal reveal--delay-2" data-category="painting">
          <div className="work-card__image">
            <img src={assetPath("/images/building-completed.jpg")} alt="分譲マンション外壁塗装工事" style={{ width: '100%', minHeight: '180px', objectFit: 'cover' }} />
            <span className="work-card__category">外壁塗装</span>
          </div>
          <div className="work-card__body">
            <div className="work-card__meta">
              <span className="work-card__meta-item"><i className="fas fa-map-marker-alt"></i> 神戸市</span>
              <span className="work-card__meta-item"><i className="fas fa-building"></i> マンション</span>
            </div>
            <h3 className="work-card__title">分譲マンション外壁塗装工事</h3>
          </div>
        </a>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
        <a href={routePath("/works")} className="btn btn--outline-dark">
          すべての施工事例を見る <span className="btn__arrow">→</span>
        </a>
      </div>
    </div>
  </section>

  {/* ========== FLOW SECTION ========== */}
  <section className="flow" id="flow">
    <div className="container">
      <div className="section-heading reveal">
        <span className="section-heading__en">Flow</span>
        <h2 className="section-heading__ja">施工の流れ</h2>
        <span className="section-heading__line"></span>
      </div>

      <div className="flow__timeline">
        <div className="flow__step reveal">
          <div className="flow__step-number">01</div>
          <div className="flow__step-content">
            <h3 className="flow__step-title">お問い合わせ</h3>
            <p className="flow__step-text">お電話・メール・お問い合わせフォームからお気軽にご連絡ください。ご要望を丁寧にヒアリングいたします。</p>
          </div>
        </div>

        <div className="flow__step reveal">
          <div className="flow__step-number">02</div>
          <div className="flow__step-content">
            <h3 className="flow__step-title">現地調査</h3>
            <p className="flow__step-text">経験豊富な専門スタッフが現地にお伺いし、建物の状態を詳細に調査いたします。もちろん無料です。</p>
          </div>
        </div>

        <div className="flow__step flow__step--highlight reveal">
          <div className="flow__step-number">03</div>
          <div className="flow__step-content">
            <h3 className="flow__step-title">診断レポート提出</h3>
            <p className="flow__step-text">写真付きの詳細な診断レポートを作成し、建物の現状と今後の修繕計画をわかりやすくご説明します。<strong>正直な診断</strong>で、本当に必要な工事だけをお伝えします。これが久米技建の最大の強みです。</p>
          </div>
        </div>

        <div className="flow__step reveal">
          <div className="flow__step-number">04</div>
          <div className="flow__step-content">
            <h3 className="flow__step-title">ご相談・お見積もり</h3>
            <p className="flow__step-text">診断結果に基づいた工事プランと、明瞭なお見積もりをご提出。ご不明な点は何でもご質問ください。</p>
          </div>
        </div>

        <div className="flow__step reveal">
          <div className="flow__step-number">05</div>
          <div className="flow__step-content">
            <h3 className="flow__step-title">施工</h3>
            <p className="flow__step-text">自社職人による直営施工で、高品質な仕上がりをお約束。近隣への配慮も徹底して行います。</p>
          </div>
        </div>

        <div className="flow__step reveal">
          <div className="flow__step-number">06</div>
          <div className="flow__step-content">
            <h3 className="flow__step-title">完了検査</h3>
            <p className="flow__step-text">施工完了後、お客様立会いのもと仕上がりを確認。細部まで品質チェックを行います。</p>
          </div>
        </div>

        <div className="flow__step reveal">
          <div className="flow__step-number">07</div>
          <div className="flow__step-content">
            <h3 className="flow__step-title">アフターサポート</h3>
            <p className="flow__step-text">施工後も定期的なメンテナンスや点検をサポート。長期的な建物管理のパートナーとしてお付き合いします。</p>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* ========== VOICE SECTION ========== */}
  <section className="voice" id="voice">
    <div className="container">
      <div className="section-heading reveal">
        <span className="section-heading__en">Voice</span>
        <h2 className="section-heading__ja">お客様の声</h2>
        <span className="section-heading__line"></span>
      </div>

      <VoiceCarousel />

    </div>
  </section>

  {/* ========== MESSAGE SECTION ========== */}
  <section className="message" id="message">
    <div className="container">
      <div className="message__inner">
        <div className="message__image reveal">
          <img src={assetPath("/images/president_photo.jpg")} alt="代表取締役 久米涼平" style={{ aspectRatio: '3/4', width: '100%', objectFit: 'cover', borderRadius: '12px', minHeight: '400px' }} />
        </div>
        <div className="message__content reveal reveal--delay-1">
          <span className="message__label">Message</span>
          <h2 className="message__title">建物と向き合い、<br />人と向き合う仕事を。</h2>
          <p className="message__text">
            久米技建は2016年の創業以来、「正直な診断と確かな施工」を信条に歩んできました。私自身、防水職人として現場に立ち、建物と向き合い続けてきた経験から、「本当に必要な工事を、適正な価格で」という思いを貫いています。<br /><br />
            お客様の大切な資産である建物を、次の世代へ受け継ぐお手伝いをする。それが、私たち久米技建の使命です。
          </p>
          <div className="message__name">
            <div className="message__name-title">代表取締役</div>
            <div className="message__name-value">久米 涼平</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ========== AREA SECTION ========== */}
  <section className="area" id="area">
    <div className="container">
      <div className="section-heading reveal">
        <span className="section-heading__en">Area</span>
        <h2 className="section-heading__ja">対応エリア</h2>
        <span className="section-heading__line"></span>
      </div>

      <div className="area__inner">
        <div className="area__map reveal">
          <img src={assetPath("/images/team-group.jpg")} alt="久米技建のチーム - 関西圏を中心に対応" style={{ width: '100%', minHeight: '300px', objectFit: 'cover', borderRadius: '12px' }} />
        </div>
        <div className="reveal reveal--delay-1">
          <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '8px' }}>兵庫県・大阪府を中心に対応</h3>
          <p style={{ fontSize: '14px', color: 'var(--color-text-light)', lineHeight: 1.9, marginBottom: '24px' }}>
            西宮市を拠点に、関西圏全域で施工対応が可能です。まずはお気軽にご相談ください。
          </p>
          <div className="area__list">
            <span className="area__tag area__tag--active">西宮市</span>
            <span className="area__tag">大阪市</span>
            <span className="area__tag">神戸市</span>
            <span className="area__tag">尼崎市</span>
            <span className="area__tag">宝塚市</span>
            <span className="area__tag">伊丹市</span>
            <span className="area__tag">芦屋市</span>
            <span className="area__tag">吹田市</span>
            <span className="area__tag">豊中市</span>
            <span className="area__tag">明石市</span>
            <span className="area__tag">姫路市</span>
            <span className="area__tag">その他関西圏</span>
          </div>
          <div style={{ marginTop: '24px' }}>
            <a href={routePath("/company/area")} className="btn btn--outline-dark btn--sm">
              対応エリアの詳細 <span className="btn__arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* ========== COLUMN SECTION ========== */}
  <section className="content-section content-section--gray" id="column">
    <div className="container">
      <div className="section-heading reveal">
        <span className="section-heading__en">Column</span>
        <h2 className="section-heading__ja">コラム・お役立ち情報</h2>
        <span className="section-heading__line"></span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <a href={routePath("/column/waterproofing-guide")} className="column-card reveal">
          <div className="column-card__image">
            <img src={assetPath("/images/waterproofing-hands.jpg")} alt="防水工事ガイド" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} />
          </div>
          <div className="column-card__body">
            <div className="column-card__date">2026.03.15</div>
            <h3 className="column-card__title">防水工事とは？種類・工法・費用相場を徹底解説</h3>
            <p className="column-card__excerpt">防水工事の種類や工法の違い、費用の目安を解説します。ウレタン防水、シート防水、FRP防水それぞれのメリット・デメリットとは。</p>
          </div>
        </a>

        <a href={routePath("/column/large-scale-repair-guide")} className="column-card reveal">
          <div className="column-card__image">
            <img src={assetPath("/images/large-scale-aerial.jpg")} alt="大規模修繕ガイド" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} />
          </div>
          <div className="column-card__body">
            <div className="column-card__date">2026.03.01</div>
            <h3 className="column-card__title">大規模修繕の進め方と費用の目安</h3>
            <p className="column-card__excerpt">マンション・ビルの大規模修繕工事の進め方、一般的な費用感、成功のポイントを専門家が解説します。</p>
          </div>
        </a>

        <a href={routePath("/column/leak-cause-and-fix")} className="column-card reveal">
          <div className="column-card__image">
            <img src={assetPath("/images/leak-repair.jpg")} alt="雨漏り対処法" style={{ width: '100%', minHeight: '120px', objectFit: 'cover' }} />
          </div>
          <div className="column-card__body">
            <div className="column-card__date">2026.02.20</div>
            <h3 className="column-card__title">雨漏りの原因と応急処置｜プロが教える対処法</h3>
            <p className="column-card__excerpt">突然の雨漏りに困ったら。雨漏りの主な原因と、すぐにできる応急処置、そしてプロに依頼すべきタイミングをお教えします。</p>
          </div>
        </a>
      </div>

      <div style={{ textAlign: 'center', marginTop: '48px' }} className="reveal">
        <a href={routePath("/column")} className="btn btn--outline-dark">
          コラム一覧を見る <span className="btn__arrow">→</span>
        </a>
      </div>
    </div>
  </section>

  {/* ========== CTA SECTION ========== */}
  <section className="cta-section">
    <div className="container">
      <h2 className="cta-section__title reveal">建物のことで、お困りではありませんか？</h2>
      <p className="cta-section__text reveal">まずは無料の建物診断から。お気軽にご相談ください。</p>
      <div className="cta-section__phone reveal">
        <a href="tel:0798-78-6880" className="cta-section__phone-number" style={{ color: 'white', textDecoration: 'none' }}>
          <i className="fas fa-phone-alt"></i> 0798-78-6880
        </a>
        <div className="cta-section__phone-sub">受付時間：平日 9:00〜18:00</div>
      </div>
      <div className="cta-section__buttons reveal">
        <a href={routePath("/contact")} className="btn btn--primary btn--lg">
          <i className="fas fa-envelope"></i> 無料相談・お見積もり
        </a>
        <a href={routePath("/simulation")} className="btn btn--outline btn--lg">
          <i className="fas fa-calculator"></i> 見積もりシミュレーション
        </a>
      </div>
    </div>
  </section>

  
    </main>
  );
}
