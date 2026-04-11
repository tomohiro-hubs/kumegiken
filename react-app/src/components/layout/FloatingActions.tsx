import { useEffect, useState } from 'react';

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div className={`r-fixed-cta ${visible ? 'is-visible' : ''}`}>
        <a href="tel:0798-78-6880">電話で相談</a>
        <a href="/contact">無料見積もり</a>
      </div>
      <button
        type="button"
        className={`r-backtop ${visible ? 'is-visible' : ''}`}
        aria-label="ページ上部へ戻る"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  );
}
