"use client";
import { routePath } from "@/lib/routePath";

import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    kana: "",
    email: "",
    tel: "",
    company: "",
    address: "",
    buildingType: "",
    service: "",
    content: "",
    agreement: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    let isValid = true;

    // Validation
    if (!formData.type) newErrors.type = "必須項目です";
    if (!formData.name.trim()) newErrors.name = "必須項目です";
    if (!formData.email.trim()) newErrors.email = "必須項目です";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "有効なメールアドレスを入力してください";
    if (!formData.tel.trim()) newErrors.tel = "必須項目です";
    if (!formData.content.trim()) newErrors.content = "必須項目です";
    if (!formData.agreement) newErrors.agreement = "プライバシーポリシーへの同意が必要です";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    if (isValid) {
      setIsSubmitted(true);
      setFormData({
        type: "", name: "", kana: "", email: "", tel: "", 
        company: "", address: "", buildingType: "", service: "", 
        content: "", agreement: false
      });
      setTimeout(() => {
        const msg = document.getElementById("success-message");
        if (msg) msg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  };

  return (
    <main>
      <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>お問い合わせ</li></ol></div></nav>
      <section className="page-hero"><span className="page-hero__label">Contact</span><h1 className="page-hero__title">西宮の雨漏り・大規模修繕工事 お問い合わせ</h1><p className="page-hero__description">無料建物診断、雨漏りのご相談、大規模修繕工事のお見積もりなど、お気軽にお問い合わせください</p></section>
  

  {/* Phone CTA */}
  <section className="content-section" style={{ padding: '60px 0 30px' }}>
    <div className="container container--narrow">
      <div style={{ marginBottom: '24px', lineHeight: '1.9', color: 'var(--color-text-light)' }} className="reveal">
        西宮市で雨漏りの調査依頼や、大規模修繕工事のご相談先を探している方へ。
        建物の状況がまだ整理できていない段階でも、症状やご希望をお送りいただければ、必要な進め方をご案内します。
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="reveal">
        <div style={{ background: 'var(--color-primary)', color: 'white', padding: '32px', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', marginBottom: '8px', opacity: '0.7' }}>お急ぎの方はお電話ください</p>
          <a href="tel:0798-27-5653" style={{ fontFamily: 'var(--font-en)', fontSize: '28px', fontWeight: '900', color: 'white', textDecoration: 'none' }}><i className="fas fa-phone-alt"></i> 0798-27-5653</a>
          <p style={{ fontSize: '12px', marginTop: '8px', opacity: '0.6' }}>受付時間：平日 9:00〜18:00</p>
        </div>
        <div style={{ background: 'var(--color-bg-light)', padding: '32px', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--color-text-light)' }}>概算費用を知りたい方</p>
          <a href={routePath("/simulation")} className="btn btn--primary"><i className="fas fa-calculator"></i> 見積もりシミュレーション</a>
          <p style={{ fontSize: '12px', marginTop: '8px', color: 'var(--color-text-muted)' }}>24時間いつでもご利用いただけます</p>
        </div>
      </div>

      <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }} className="reveal">
        <Link href={routePath("/service/leak-repair")} className="btn btn--outline-dark">西宮の雨漏り調査・補修</Link>
        <Link href={routePath("/service/large-scale-repair")} className="btn btn--outline-dark">西宮の大規模修繕工事</Link>
        <Link href={routePath("/service/waterproofing")} className="btn btn--outline-dark">西宮の防水工事</Link>
      </div>
    </div>
  </section>

  {/* Contact Form */}
  <section className="content-section" style={{ paddingTop: '30px' }}>
    <div className="container container--narrow">
      <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border-light)', borderRadius: '16px', padding: '48px' }} className="reveal">
        <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '8px' }}>メールでのお問い合わせ</h2>
        <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--color-text-light)', marginBottom: '40px' }}>以下のフォームに必要事項をご入力の上、送信してください。<br />2営業日以内に担当者よりご連絡いたします。</p>

        <form id="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contact-type" className="form-label">お問い合わせ種別 <span className="required">必須</span></label>
            <select id="contact-type" name="type" value={formData.type} onChange={handleChange} className={`form-select ${errors.type ? 'error' : ''}`}>
              <option value="">選択してください</option>
              <option value="diagnosis">無料建物診断のお申し込み</option>
              <option value="estimate">お見積もりのご依頼</option>
              <option value="consultation">ご相談・ご質問</option>
              <option value="emergency">雨漏り緊急対応</option>
              <option value="partner">協力会社お問い合わせ</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">お名前 <span className="required">必須</span></label>
              <input id="contact-name" type="text" name="name" value={formData.name} onChange={handleChange} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="例：山田 太郎" />
            </div>
            <div className="form-group">
              <label htmlFor="contact-kana" className="form-label">フリガナ</label>
              <input id="contact-kana" type="text" name="kana" value={formData.kana} onChange={handleChange} className="form-input" placeholder="例：ヤマダ タロウ" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">メールアドレス <span className="required">必須</span></label>
              <input id="contact-email" type="email" name="email" value={formData.email} onChange={handleChange} className={`form-input ${errors.email ? 'error' : ''}`} placeholder="例：info@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="contact-tel" className="form-label">電話番号 <span className="required">必須</span></label>
              <input id="contact-tel" type="tel" name="tel" value={formData.tel} onChange={handleChange} className={`form-input ${errors.tel ? 'error' : ''}`} placeholder="例：0798-27-5653" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-company" className="form-label">会社名・管理組合名</label>
            <input id="contact-company" type="text" name="company" value={formData.company} onChange={handleChange} className="form-input" placeholder="例：○○マンション管理組合" />
          </div>

          <div className="form-group">
            <label htmlFor="contact-address" className="form-label">建物の所在地</label>
            <input id="contact-address" type="text" name="address" value={formData.address} onChange={handleChange} className="form-input" placeholder="例：兵庫県西宮市○○町1-2-3" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="form-group">
              <label htmlFor="contact-building-type" className="form-label">建物種別</label>
              <select id="contact-building-type" name="buildingType" value={formData.buildingType} onChange={handleChange} className="form-select">
                <option value="">選択してください</option>
                <option value="mansion">マンション</option>
                <option value="building">ビル</option>
                <option value="apartment">アパート</option>
                <option value="house">戸建て</option>
                <option value="factory">工場・倉庫</option>
                <option value="shop">店舗</option>
                <option value="other">その他</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contact-service" className="form-label">ご検討中のサービス</label>
              <select id="contact-service" name="service" value={formData.service} onChange={handleChange} className="form-select">
                <option value="">選択してください</option>
                <option value="large-scale-repair">大規模修繕事業</option>
                <option value="waterproofing">防水事業</option>
                <option value="painting">外壁塗装</option>
                <option value="undecided">まだ決まっていない</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contact-content" className="form-label">お問い合わせ内容 <span className="required">必須</span></label>
            <textarea id="contact-content" name="content" value={formData.content} onChange={handleChange} className={`form-textarea ${errors.content ? 'error' : ''}`} placeholder="ご相談内容、建物の状況、ご要望など、できるだけ詳しくお書きください。"></textarea>
          </div>

          <div style={{ margin: '24px 0', padding: '20px', background: 'var(--color-bg-light)', borderRadius: '8px' }}>
            <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer' }}>
              <input id="contact-agreement" type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} className={errors.agreement ? 'error' : ''} style={{ marginTop: '4px' }} />
              <span style={{ fontSize: '13px', color: 'var(--color-text-light)', lineHeight: '1.8' }}><a href={routePath("/privacy")} style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>プライバシーポリシー</a>に同意の上、送信してください。</span>
            </label>
          </div>

          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="btn btn--primary btn--lg" style={{ minWidth: '300px' }}>
              <i className="fas fa-paper-plane"></i> 送信する
            </button>
          </div>
        </form>

        {isSubmitted && (
          <div id="success-message" className="form-success" style={{ background: '#e8f5e9', color: '#2e7d32', padding: '24px', borderRadius: '8px', textAlign: 'center', marginTop: '20px', fontWeight: '500' }}>
            <p><i className="fas fa-check-circle"></i> お問い合わせを受け付けました。<br />担当者より2営業日以内にご連絡いたします。</p>
          </div>
        )}
      </div>
    </div>
  </section>

  <section className="content-section" style={{ paddingTop: '0' }}>
    <div className="container container--narrow">
      <div style={{ background: 'var(--color-bg-light)', borderRadius: '16px', padding: '32px' }} className="reveal">
        <h2 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '16px' }}>ご相談前によくある内容</h2>
        <ul style={{ marginBottom: '20px' }}>
          <li>雨漏りが起きており、まず何を確認すべきか知りたい</li>
          <li>マンションやビルの大規模修繕工事の進め方を相談したい</li>
          <li>防水工事か部分補修か、どちらが適切か判断したい</li>
        </ul>
        <p style={{ marginBottom: 0, color: 'var(--color-text-light)', lineHeight: '1.8' }}>
          症状の写真、建物種別、発生時期がわかると初回案内がスムーズです。まだ不明な項目があっても、そのまま送信いただいて問題ありません。
        </p>
      </div>
    </div>
  </section>

  
    </main>
  );
}
