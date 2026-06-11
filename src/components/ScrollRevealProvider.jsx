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

    const scheduleReveal = () => {
      window.requestAnimationFrame(() => {
        revealVisibleElements();
        window.setTimeout(revealVisibleElements, 50);
      });
    };

    // IntersectionObserver (スクロールリビール) の作成
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
    }

    // 要素を検知して監視を開始する関数
    const observeElements = () => {
      const revealElements = document.querySelectorAll('.reveal');
      if (revealObserver) {
        revealElements.forEach(el => {
          // すでに revealed がついているものは監視しない
          if (!el.classList.contains('revealed')) {
            revealObserver.observe(el);
          }
        });
      } else {
        revealElements.forEach(el => el.classList.add('revealed'));
      }
      scheduleReveal();
    };

    // 初回検知と少し遅らせた検知（描画ズレ対策）
    observeElements();
    const timer1 = setTimeout(observeElements, 100);
    const timer2 = setTimeout(observeElements, 300);

    // 画面構造の変化（DOM追加）を監視して、新しい要素も自動で検知対象にする
    let mutationObserver = null;
    if ('MutationObserver' in window) {
      mutationObserver = new MutationObserver(() => {
        observeElements();
      });
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      });
    }

    const handlePageShow = () => {
      scheduleReveal();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        scheduleReveal();
      }
    };

    window.addEventListener('pageshow', handlePageShow);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('click', handleHashClick);
      window.removeEventListener('pageshow', handlePageShow);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearTimeout(timer1);
      clearTimeout(timer2);
      if (revealObserver) {
        revealObserver.disconnect();
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
