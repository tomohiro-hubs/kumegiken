"use client";
import { routePath } from "@/lib/routePath";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    kana: "",
    email: "",
    tel: "",
    jobType: "",
    birth: "",
    experience: "",
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
    if (!formData.name.trim()) newErrors.name = "必須項目です";
    if (!formData.kana.trim()) newErrors.kana = "必須項目です";
    if (!formData.email.trim()) newErrors.email = "必須項目です";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "有効なメールアドレスを入力してください";
    if (!formData.tel.trim()) newErrors.tel = "必須項目です";
    if (!formData.jobType) newErrors.jobType = "必須項目です";
    if (!formData.content.trim()) newErrors.content = "必須項目です";
    if (!formData.agreement) newErrors.agreement = "プライバシーポリシーへの同意が必要です";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }

    if (isValid) {
      setIsSubmitted(true);
      setFormData({
        name: "", kana: "", email: "", tel: "", 
        jobType: "", birth: "", experience: "", 
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
      <nav className="breadcrumb">
        <div className="container">
          <ol className="breadcrumb__list">
            <li><a href={routePath("/")} className="breadcrumb__link">ホーム</a></li>
            <li className="breadcrumb__separator">›</li>
            <li><a href={routePath("/recruit")} className="breadcrumb__link">採用情報</a></li>
            <li className="breadcrumb__separator">›</li>
            <li>応募フォーム</li>
          </ol>
        </div>
      </nav>
      
      <section className="page-hero">
        <span className="page-hero__label">Entry</span>
        <h1 className="page-hero__title">応募フォーム</h1>
        <p className="page-hero__description">久米技建での採用選考への応募はこちらからお願いいたします。</p>
      </section>

      {/* Success Message */}
      {isSubmitted && (
        <section className="content-section" id="success-message" style={{ padding: '40px 0 20px' }}>
          <div className="container container--narrow">
            <div style={{ background: '#d4edda', color: '#155724', border: '1px solid #c3e6cb', padding: '24px', borderRadius: '12px', textAlign: 'center' }}>
              <i className="fas fa-check-circle" style={{ fontSize: '32px', marginBottom: '12px' }}></i>
              <h2 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>応募の送信が完了しました</h2>
              <p style={{ fontSize: '14px', lineHeight: '1.6' }}>ご応募いただきありがとうございます。内容を確認のうえ、担当者より3営業日以内にご連絡いたします。</p>
            </div>
          </div>
        </section>
      )}

      {/* Form Section */}
      {!isSubmitted && (
        <section className="content-section" style={{ padding: '60px 0' }}>
          <div className="container container--narrow">
            <div style={{ background: 'var(--color-white)', border: '1px solid var(--color-border-light)', borderRadius: '16px', padding: '48px' }} className="reveal">
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--color-primary)', textAlign: 'center', marginBottom: '8px' }}>エントリー・応募情報入力</h2>
              <p style={{ textAlign: 'center', fontSize: '14px', color: 'var(--color-text-light)', marginBottom: '40px' }}>
                以下のフォームに必要事項をご入力の上、送信してください。<br />
                内容確認後、担当者より面接日時などの詳細についてご連絡いたします。
              </p>

              <form id="apply-form" onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div className="form-group">
                    <label htmlFor="apply-name" className="form-label">お名前 <span className="required">必須</span></label>
                    <input id="apply-name" type="text" name="name" value={formData.name} onChange={handleChange} className={`form-input ${errors.name ? 'error' : ''}`} placeholder="例：山田 太郎" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apply-kana" className="form-label">フリガナ <span className="required">必須</span></label>
                    <input id="apply-kana" type="text" name="kana" value={formData.kana} onChange={handleChange} className={`form-input ${errors.kana ? 'error' : ''}`} placeholder="例：ヤマダ タロウ" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div className="form-group">
                    <label htmlFor="apply-email" className="form-label">メールアドレス <span className="required">必須</span></label>
                    <input id="apply-email" type="email" name="email" value={formData.email} onChange={handleChange} className={`form-input ${errors.email ? 'error' : ''}`} placeholder="例：example@example.com" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="apply-tel" className="form-label">電話番号 <span className="required">必須</span></label>
                    <input id="apply-tel" type="tel" name="tel" value={formData.tel} onChange={handleChange} className={`form-input ${errors.tel ? 'error' : ''}`} placeholder="例：090-0000-0000" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div className="form-group">
                    <label htmlFor="apply-job-type" className="form-label">希望職種 <span className="required">必須</span></label>
                    <select id="apply-job-type" name="jobType" value={formData.jobType} onChange={handleChange} className={`form-select ${errors.jobType ? 'error' : ''}`}>
                      <option value="">選択してください</option>
                      <option value="sales">営業職</option>
                      <option value="manager">施工管理職</option>
                      <option value="craftsman">防水技能士（職人）</option>
                      <option value="other">その他</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="apply-birth" className="form-label">生年月日</label>
                    <input id="apply-birth" type="text" name="birth" value={formData.birth} onChange={handleChange} className="form-input" placeholder="例：1995年4月1日" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="apply-experience" className="form-label">これまでの職歴・経験など</label>
                  <textarea id="apply-experience" name="experience" value={formData.experience} onChange={handleChange} className="form-textarea" placeholder="例：防水工事経験3年、普通自動車免許あり、など" style={{ height: '100px' }}></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="apply-content" className="form-label">自己PR・志望動機など <span className="required">必須</span></label>
                  <textarea id="apply-content" name="content" value={formData.content} onChange={handleChange} className={`form-textarea ${errors.content ? 'error' : ''}`} placeholder="自己PRや志望動機、質問などをご自由にお書きください。"></textarea>
                </div>

                <div style={{ margin: '24px 0', padding: '20px', background: 'var(--color-bg-light)', borderRadius: '8px' }}>
                  <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer' }}>
                    <input id="apply-agreement" type="checkbox" name="agreement" checked={formData.agreement} onChange={handleChange} className={errors.agreement ? 'error' : ''} style={{ marginTop: '4px' }} />
                    <span style={{ fontSize: '13px', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
                      <a href={routePath("/privacy")} style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>プライバシーポリシー</a>に同意の上、送信してください。
                    </span>
                  </label>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button type="submit" className="btn btn--primary btn--lg" style={{ minWidth: '300px' }}>
                    <i className="fas fa-paper-plane"></i> 応募する
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
