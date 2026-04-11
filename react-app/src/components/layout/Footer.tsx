import { footerColumns } from '../../data/siteNavigation';

export function Footer() {
  return (
    <footer className="r-footer">
      <div className="r-container">
        <div className="r-footer__grid">
          <div>
            <div className="r-footer__logo">株式会社久米技建</div>
            <div className="r-footer__sub">KUME GIKEN Co., Ltd.</div>
            <p className="r-footer__address">
              〒663-8113 兵庫県西宮市甲子園口2丁目
              <br />
              TEL: 0798-78-6880
            </p>
          </div>
          {footerColumns.map((column) => (
            <div key={column.title}>
              <div className="r-footer__title">{column.title}</div>
              {column.links.map((link) => (
                <a key={link.label} href={link.href} className="r-footer__link">
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="r-footer__bottom">
          <small>&copy; 2026 KUME GIKEN Co., Ltd.</small>
          <a href="/privacy">プライバシーポリシー</a>
        </div>
      </div>
    </footer>
  );
}
