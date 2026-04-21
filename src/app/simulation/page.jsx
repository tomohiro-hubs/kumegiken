import Link from "next/link";
import { routePath } from "@/lib/routePath";

import { buildMetadata } from "@/lib/seo";
export const metadata = buildMetadata({
  title: "見積もりシミュレーション｜久米技建",
  description: "大規模修繕・防水工事の概算費用を入力形式で確認できる見積もりシミュレーションです。",
  path: "/simulation",
  image: "/images/hero-main.jpg",
});

export default function Page() {
  return (
    <main>
      <section className="page-hero">
      <span className="page-hero__label">Simulation</span>
      <h1 className="page-hero__title">見積もりシミュレーション</h1>
      <p className="page-hero__description">入力するだけで、概算費用がすぐにわかります</p>
    </section>

    <nav className="breadcrumb">
      <div className="container">
        <ol className="breadcrumb__list">
          <li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li>
          <li className="breadcrumb__separator">›</li>
          <li>見積もりシミュレーション</li>
        </ol>
      </div>
    </nav>

    <section className="content-section sim-content">
      <div className="container container--narrow">
        <div className="sim-intro reveal">
          <div className="sim-intro__main">
            <p className="sim-intro__eyebrow">3分で完了 / すぐに概算</p>
            <h2 className="sim-intro__title">条件を選ぶだけで、費用レンジをその場で確認できます</h2>
            <p className="sim-intro__text">
              現地調査前の目安として、まずは概算を確認してください。入力内容は最後にお問い合わせへ引き継げます。
            </p>
          </div>
        </div>

        <div className="sim-attention reveal">
          <i className="fas fa-info-circle"></i>
          こちらはあくまで概算です。正確なお見積もりは現地調査後にお出しします。
        </div>

        <div className="sim-layout">
          <aside className="sim-side reveal">
            <div className="sim-side__panel">
              <h3 className="sim-side__title">入力ガイド</h3>
              <p className="sim-side__text">「工事種別」と「縦横サイズ」を選ぶと、すぐに結果を確認できます。</p>
              <div className="sim-progress">
                <div className="sim-progress__head">
                  <span>入力進捗</span>
                  <strong id="sim-progress-text">0%</strong>
                </div>
                <div className="sim-progress__bar">
                  <span id="sim-progress-bar"></span>
                </div>
              </div>
              <dl className="sim-side__meta">
                <div>
                  <dt>現在の工事</dt>
                  <dd id="sim-current-option">未選択</dd>
                </div>
                <div>
                  <dt>概算面積</dt>
                  <dd><span id="sim-current-area">0</span> ㎡</dd>
                </div>
              </dl>
            </div>
          </aside>

          <div className="sim-main">
            <form id="simulation-form">
          <div className="sim-card reveal">
            <h3 className="sim-step-title">
              <span className="sim-step-no">01</span>建物種別
            </h3>
            <div className="sim-tabs" role="tablist" aria-label="建物種別">
              <button type="button" className="tab-btn" data-tab="building" role="tab">
                戸建・アパート
              </button>
              <button type="button" className="tab-btn" data-tab="apartment" role="tab">
                ビル・マンション
              </button>
              <button type="button" className="tab-btn" data-tab="house" role="tab">
                工場・商業施設
              </button>
            </div>
          </div>

          <div className="sim-card reveal">
            <h3 className="sim-step-title">
              <span className="sim-step-no">02</span>ご希望の工事
            </h3>
            <div className="sim-option-grid">
              <button type="button" className="sim-option-btn" data-option="roof">
                屋上防水工事
              </button>
              <button type="button" className="sim-option-btn" data-option="exterior">外壁防水工事</button>
              <button type="button" className="sim-option-btn" data-option="balcony">
                ベランダ・バルコニー防水工事
              </button>
              <button type="button" className="sim-option-btn" data-option="wall">外壁塗装工事</button>
              <button type="button" className="sim-option-btn" data-option="general">総合改修工事</button>
            </div>
          </div>

          <div className="sim-card reveal">
            <h3 className="sim-step-title">
              <span className="sim-step-no">03</span>建物の築年数
            </h3>
            <div className="sim-option-grid sim-option-grid--compact">
              <button type="button" className="sim-option-btn" data-age="less10">築10年未満</button>
              <button type="button" className="sim-option-btn" data-age="10to20">築10〜20年</button>
              <button type="button" className="sim-option-btn" data-age="20to30">築20〜30年</button>
              <button type="button" className="sim-option-btn" data-age="over30">築30年以上</button>
            </div>
          </div>

          <div className="sim-card reveal">
            <h3 className="sim-step-title">
              <span className="sim-step-no">04</span>屋上の構造
            </h3>
            <div className="sim-option-grid sim-option-grid--compact">
              <button type="button" className="sim-option-btn" data-structure="concrete">
                鉄筋コンクリート造り
              </button>
              <button type="button" className="sim-option-btn" data-structure="steel">鉄骨造り</button>
              <button type="button" className="sim-option-btn" data-structure="mixed">
                鉄骨鉄筋コンクリート造り
              </button>
            </div>

            <div id="roof-shape-section" className="sim-conditional" style={{ display: 'none' }}>
              <h3 className="section-header">屋根の形状</h3>
              <div className="sim-option-grid sim-option-grid--compact" id="roof-shape-options">
                <button type="button" className="sim-option-btn" data-roof-shape="flat">陸屋根</button>
                <button type="button" className="sim-option-btn" data-roof-shape="slope">勾配屋根</button>
              </div>
            </div>

            <div id="roof-method-section" className="sim-conditional" style={{ display: 'none' }}>
              <h3 className="section-header">屋根工法</h3>
              <div className="sim-option-grid sim-option-grid--compact" id="roof-method-options">
                <button type="button" className="sim-option-btn" data-roof-method="paint">
                  屋根塗装
                </button>
                <button type="button" className="sim-option-btn" data-roof-method="cover">
                  屋根カバー工法
                </button>
                <button type="button" className="sim-option-btn" data-roof-method="replace">
                  屋根の葺き替え
                </button>
              </div>
            </div>

            <div id="wall-material-section" className="sim-conditional" style={{ display: 'none' }}>
              <h3 className="section-header">外壁の素材</h3>
              <div className="sim-option-grid sim-option-grid--compact" id="wall-material-options">
                <button type="button" className="sim-option-btn" data-wall-material="mortar">
                  モルタル
                </button>
                <button type="button" className="sim-option-btn" data-wall-material="siding">
                  サイディング
                </button>
                <button type="button" className="sim-option-btn" data-wall-material="tile">タイル</button>
                <button type="button" className="sim-option-btn" data-wall-material="unknown">
                  わからない
                </button>
              </div>
            </div>

            <div id="floor-count-section" className="sim-conditional" style={{ display: 'none' }}>
              <h3 className="section-header">建物の階数</h3>
              <div className="sim-dimension">
                <div className="sim-input-group">
                  <label className="form-label" htmlFor="floor-count">階数</label>
                  <div className="sim-inline">
                    <input type="number" id="floor-count" className="form-input" min="1" value="" placeholder="例: 2" />
                    <span className="sim-unit">階</span>
                  </div>
                </div>
              </div>
            </div>

            <div id="balcony-count-section" className="sim-conditional" style={{ display: 'none' }}>
              <h3 className="section-header">バルコニーの個数</h3>
              <div className="sim-dimension">
                <div className="sim-input-group">
                  <label className="form-label" htmlFor="balcony-count">個数</label>
                  <div className="sim-inline">
                    <input type="number" id="balcony-count" className="form-input" min="1" value="" placeholder="例: 1" />
                    <span className="sim-unit">箇所</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="sim-card reveal">
            <h3 className="sim-step-title">
              <span className="sim-step-no">05</span>屋上既存の防水工法
            </h3>
            <div className="sim-option-grid sim-option-grid--compact">
              <button type="button" className="sim-option-btn" data-waterproof="urethane">
                ウレタン防水
              </button>
              <button type="button" className="sim-option-btn" data-waterproof="frp">FRP防水</button>
              <button type="button" className="sim-option-btn" data-waterproof="sheet">
                塩ビ・ゴムシート防水
              </button>
              <button type="button" className="sim-option-btn" data-waterproof="asphalt">
                アスファルト防水
              </button>
              <button type="button" className="sim-option-btn" data-waterproof="concrete">保護コンクリート</button>
              <button type="button" className="sim-option-btn" data-waterproof="unknown">わからない</button>
            </div>
          </div>

          <div className="sim-card reveal">
            <h3 className="section-header">屋上面積の実測 屋上面積とは？</h3>
            <div className="dimension-inputs sim-dimension-inputs">
              <div className="sim-input-group">
                <label className="form-label" htmlFor="width">縦</label>
                <div className="sim-inline">
                  <input type="number" id="width" className="form-input" min="1" value="" placeholder="例: 10" />
                  <span className="sim-unit">m</span>
                </div>
              </div>
              <div className="sim-input-group">
                <label className="form-label" htmlFor="height">横</label>
                <div className="sim-inline">
                  <input type="number" id="height" className="form-input" min="1" value="" placeholder="例: 10" />
                  <span className="sim-unit">m</span>
                </div>
              </div>
            </div>
            <p className="sim-help">※ 面積は「縦×横」で概算します。</p>
          </div>

              <div className="sim-actions reveal">
                <button type="button" id="calculate-btn" className="btn btn--primary btn--lg">
                  <i className="fas fa-calculator"></i> 結果を表示する
                </button>
                <button type="button" id="simulation-reset" className="btn btn--outline btn--lg">
                  入力をリセット
                </button>
              </div>
            </form>

            <div className="sim-result reveal" id="result-area" style={{ marginTop: '32px', display: 'none' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <p className="sim-result__kicker">概算お見積り</p>
            <div className="sim-result__range" id="total-price-range">0円〜0円</div>
            <p className="sim-result__note">
              ※ 上記は概算です。正確な金額は現地調査後にお見積もりいたします。
            </p>
          </div>

          <div className="sim-breakdown">
            <div className="price-details">
              <div className="detail-header">見積り内訳</div>

              <div id="roof-details" className="work-details">
                <h4>屋上防水工事</h4>
                <div id="flat-roof-details">
                  <div className="detail-row">
                    <div className="detail-label">高圧洗浄またはケレン清掃</div>
                    <div className="detail-value" id="roof-cleaning-price">0円〜0円</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-label">下地調整</div>
                    <div className="detail-value" id="roof-repair-price">0円〜0円</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-label">本防水</div>
                    <div className="detail-value" id="roof-prep-price">0円〜0円</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-label">トップコート（防水層保護塗料）</div>
                    <div className="detail-value" id="roof-main-price">0円〜0円</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-label">シーリングなど各所仕上げ</div>
                    <div className="detail-value" id="roof-sealing-price">0円〜0円</div>
                  </div>
                </div>

                <div id="sloped-roof-details" style={{ display: 'none' }}>
                  <div className="detail-row">
                    <div className="detail-label">高圧洗浄またはケレン清掃</div>
                    <div className="detail-value" id="roof-cleaning-price-sloped">0円〜0円</div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-label">下地調整・既存屋根撤去</div>
                    <div className="detail-value" id="roof-prep-remove-price">0円〜0円</div>
                  </div>
                  <div className="detail-row" id="roof-paint-row">
                    <div className="detail-label">屋根塗装</div>
                    <div className="detail-value" id="roof-paint-price">0円〜0円</div>
                  </div>
                  <div className="detail-row" id="roof-cover-row" style={{ display: 'none' }}>
                    <div className="detail-label">屋根カバー工法</div>
                    <div className="detail-value" id="roof-cover-price">0円〜0円</div>
                  </div>
                  <div className="detail-row" id="roof-replace-row" style={{ display: 'none' }}>
                    <div className="detail-label">屋根葺き替え</div>
                    <div className="detail-value" id="roof-replace-price">0円〜0円</div>
                  </div>
                </div>

                <div className="detail-row subtotal-row">
                  <div className="detail-label">小計</div>
                  <div className="detail-value" id="roof-total">0円〜0円</div>
                </div>
              </div>

              <div id="exterior-details" className="work-details">
                <h4>外壁防水工事</h4>
                <div className="detail-row">
                  <div className="detail-label">作業用仮設足場</div>
                  <div className="detail-value" id="exterior-scaffold-price">0円〜0円</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">既存シーリング撤去など</div>
                  <div className="detail-value" id="exterior-remove-price">0円〜0円</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">本防水・塗装</div>
                  <div className="detail-value" id="exterior-waterproof-price">0円〜0円</div>
                </div>
                <div className="detail-row subtotal-row">
                  <div className="detail-label">小計</div>
                  <div className="detail-value" id="exterior-total">0円〜0円</div>
                </div>
              </div>

              <div id="wall-details" className="work-details">
                <h4>外壁塗装工事</h4>
                <div className="detail-row">
                  <div className="detail-label">作業用仮設足場</div>
                  <div className="detail-value" id="wall-scaffold-price">0円〜0円</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">既存シーリング撤去など</div>
                  <div className="detail-value" id="wall-remove-price">0円〜0円</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">外壁塗装・シーリング</div>
                  <div className="detail-value" id="wall-paint-price">0円〜0円</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">付帯部塗装</div>
                  <div className="detail-value" id="wall-accessory-price">0円〜0円</div>
                </div>
                <div className="detail-row subtotal-row">
                  <div className="detail-label">小計</div>
                  <div className="detail-value" id="wall-total">0円〜0円</div>
                </div>
              </div>

              <div id="balcony-details" className="work-details">
                <h4>バルコニー防水工事</h4>
                <div className="detail-row">
                  <div className="detail-label">高圧洗浄またはケレン清掃</div>
                  <div className="detail-value" id="balcony-cleaning-price">0円〜0円</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">下地調整</div>
                  <div className="detail-value" id="balcony-repair-price">0円〜0円</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">本防水</div>
                  <div className="detail-value" id="balcony-prep-price">0円〜0円</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">トップコート（防水層保護塗料）</div>
                  <div className="detail-value" id="balcony-main-price">0円〜0円</div>
                </div>
                <div className="detail-row">
                  <div className="detail-label">シーリングなど各所仕上げ</div>
                  <div className="detail-value" id="balcony-sealing-price">0円〜0円</div>
                </div>
                <div className="detail-row subtotal-row">
                  <div className="detail-label">小計</div>
                  <div className="detail-value" id="balcony-total">0円〜0円</div>
                </div>
              </div>

              <div className="detail-row total-row">
                <div className="detail-label">合計</div>
                <div className="detail-value" id="total-price">0円〜0円</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', textAlign: 'center' }}>
            <a href={routePath("/contact")} className="btn btn--primary btn--lg"
              ><i className="fas fa-envelope"></i> 正式な見積もりを依頼する</a
            >
          </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    </main>
  );
}