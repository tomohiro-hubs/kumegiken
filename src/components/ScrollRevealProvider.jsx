"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollRevealProvider({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    // スムーズスクロール (hashリンク対応)
    const handleHashClick = (e) => {
      const target = e.target.closest('a[href^="/#"], a[href^="#"]');
      if (!target) return;
      
      const href = target.getAttribute('href');
      const hash = href.includes('#') ? href.substring(href.indexOf('#')) : '';
      
      if (!hash || hash === '#') return;

      // 現在のページ内リンクの場合のみスムーススクロール
      if (href.startsWith('#') || href.startsWith(`/${pathname}#`) || href.startsWith(`${pathname}#`)) {
        e.preventDefault();
        const element = document.querySelector(hash);
        if (element) {
          const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
          const top = element.getBoundingClientRect().top + window.scrollY - headerHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleHashClick);

    const revealVisibleElements = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < viewportHeight * 0.95 && rect.bottom > 0) {
          el.classList.add('revealed');
        }
      });
    };

    // スクロールリビール (IntersectionObserver)
    const revealElements = document.querySelectorAll('.reveal');
    let revealObserver = null;

    if ('IntersectionObserver' in window) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      });

      revealElements.forEach(el => revealObserver.observe(el));
      revealVisibleElements();
    } else {
      revealElements.forEach(el => el.classList.add('revealed'));
    }

    const handlePageShow = () => {
      revealVisibleElements();
    };
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      document.removeEventListener('click', handleHashClick);
      window.removeEventListener('pageshow', handlePageShow);
      if (revealObserver) {
        revealObserver.disconnect();
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
