import { useEffect } from 'react';
import type { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { FloatingActions } from './FloatingActions';
import { Header } from './Header';

export function SiteLayout({ children }: PropsWithChildren) {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (!hash) return;
    const id = hash.replace('#', '');
    const target = document.getElementById(id);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }, [location.hash, location.pathname]);

  return (
    <div className="r-site">
      <Header />
      <main>{children}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
