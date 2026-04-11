import { useEffect, useState } from 'react';
import { headerNavItems, mobileNavItems } from '../../data/siteNavigation';
import type { NavItem } from '../../types/site';

const isDropdownItem = (item: NavItem): item is Extract<NavItem, { items: unknown }> =>
  'items' in item;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className="r-header">
        <div className="r-header__inner">
          <a href="/" className="r-header__brand">
            <span className="r-header__brand-main">久米技建</span>
            <span className="r-header__brand-sub">KUME GIKEN Co., Ltd.</span>
          </a>
          <nav className="r-header__nav" aria-label="メインナビゲーション">
            {headerNavItems.map((item) =>
              isDropdownItem(item) ? (
                <div key={item.label} className="r-header__dropdown">
                  <a href={item.href} className="r-header__link r-header__link--has-sub">
                    {item.label}
                  </a>
                  <div className="r-header__dropdown-panel">
                    {item.items.map((sub) => (
                      <a key={sub.label} href={sub.href} className="r-header__dropdown-link">
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={item.label} href={item.href} className="r-header__link">
                  {item.label}
                </a>
              ),
            )}
          </nav>
          <a href="/contact" className="r-btn r-btn--primary r-btn--sm">
            お問い合わせ
          </a>
          <button
            type="button"
            className={`r-header__hamburger ${open ? 'is-open' : ''}`}
            aria-label="メニュー"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>
      <div className={`r-mobile-overlay ${open ? 'is-open' : ''}`} onClick={() => setOpen(false)} />
      <nav className={`r-mobile-nav ${open ? 'is-open' : ''}`} aria-label="モバイルメニュー">
        {mobileNavItems.map((item) => (
          <a key={item.label} href={item.href} className="r-mobile-nav__link" onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <div className="r-mobile-nav__cta">
          <a href="tel:0798-78-6880" className="r-btn r-btn--ghost">
            電話で相談
          </a>
          <a href="/contact" className="r-btn r-btn--primary">
            無料見積もり
          </a>
        </div>
      </nav>
    </>
  );
}
