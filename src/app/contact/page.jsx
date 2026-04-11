"use client";

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
      <section className="page-hero"><span className="page-hero__label">Contact</span><h1 className="page-hero__title">お問い合わせ</h1><p className="page-hero__description">無料建物診断・お見積もり・ご相談など、お気軽にお問い合わせください</p></section>
  <nav className="breadcrumb"><div className="container"><ol className="breadcrumb__list"><li><a href="/" className="breadcrumb__link">ホーム</a></li><li className="breadcrumb__separator">›</li><li>お問い合わせ</li></ol></div></nav>

  {/* Phone CTA */}
  <section className="content-section" style={{ padding: '60px 0 30px' }}>
    <div className="container container--narrow">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="reveal">
        <div style={{ background: 'var(--color-primary)', color: 'white', padding: '32px', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', marginBottom: '8px', opacity: '0.7' }}>お急ぎの方はお電話ください</p>
          <a href="tel:0798-78-6880" style={{ fontFamily: 'var(--font-en)', fontSize: '28px', fontWeight: '900', color: 'white', textDecoration: 'none' }}><i className="fas fa-phone-alt"></i> 0798-78-6880</a>
          <p style={{ fontSize: '12px', marginTop: '8px', opacity: '0.6' }}>受付時間：平日 9:00〜18:00</p>
        </div>
        <div style={{ background: 'var(--color-bg-light)', padding: '32px', borderRadius: '16px', textAlign: 'center' }}>
          <p style={{ fontSize: '14px', marginBottom: '8px', color: 'var(--color-text-light)' }}>概算費用を知りたい方</p>
          <a href="/simulation" className="btn btn--primary"><i className="fas fa-calculator"></i> 見積もりシミュレーション</a>
          <p style={{ fontSize: '12px', marginTop: '8px', color: 'var(--color-text-muted)' }}>24時間いつでもご利用いただけます</p>
        </div>
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
            <label className="form-label">お問い合わせ種別 <span className="required">必須</span></label>
            <select name="type" value={formData.type} onChange={handleChange} className={`form-select ${errors.type ? 'error' : ''}`}>
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
              <label className="form-label">お名前 <span className="required">必須</span></label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="例：山田 太郎" />
            </div>
            <div className="form-group">
              <label className="form-label">フリガナ</label>
              <input type="text" name="kana" value={formData.kana} onChange={handleChange} className="form-input" placeholder="例：ヤマダ タロウ" />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="form-group">
              <label className="form-label">メールアドレス <span className="required">必須</span></label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={`form-input ${errors.email ? 'error' : ''}`} placeholder="例：info@example.com" />
            </div>
            <div className="form-group">
              <label className="form-label">電話番号 <span className="required">必須</span></label>
              <input type="tel" name="tel" value={formData.tel} onChange={handleChange} className={`form-input ${errors.tel ? 'error' : ''}`} placeholder="例：0798-78-6880" />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">会社名・管理組合名</label>
            <input type="text" name="company" value={formData.company} onChange={handleChange} className="form-input" placeholder="例：○○マンション管理組合" />
          </div>

          <div className="form-group">
            <label className="form-label">建物の所在地</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange} className="form-input" placeholder="例：兵庫県西宮市○○町1-2-3" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div className="form-group">
              <label className="form-label">建物種別</label>
              <select name="buildingType" value={formData.buildingType} onChange={handleChange} className="form-select">
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
              <label className="form-label">ご検討中のサービス</label>
              <select name="service" value={formData.service} onChange={handleChange} className="form-select">
                <option value="">選択してください</option>
                <option value="large-scale-repair">大規模修繕事業</option>
                <option value="waterproofing">防水事業</option>
                <option value="painting">外壁塗装</option>
                <option value="dive-survey">水中点検</option>
                <option value="undecided">まだ決まっていない</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">お問い合わせ内容 <span className="required">必須</span></label>
            <textarea name="content" value={formData.content} onChange={handleChange} className={`form-textarea ${errors.content ? 'error' : ''}`} placeholder="ご相談内容、建物の状況、ご要望など、できるだけ詳しくお書きください。"></textarea>
          </div>

          <div style={{ margin: '24px 0', padding: '20px', background: 'var(--color-bg-light)', borderRadius: '8px' }}>
            <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer' }}>
              <input type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} className={errors.agreement ? 'error' : ''} style={{ marginTop: '4px' }} />
              <span style={{ fontSize: '13px', color: 'var(--color-text-light)', lineHeight: '1.8' }}><a href="/privacy" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>プライバシーポリシー</a>に同意の上、送信してください。</span>
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

  
    </main>
  );
}