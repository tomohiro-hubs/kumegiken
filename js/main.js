(() => {
  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn, { once: true });
      return;
    }
    fn();
  }

  onReady(() => {
    const header = document.getElementById('header');
    const hamburger = document.querySelector('.header__hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const backToTop = document.querySelector('.back-to-top');

    const updateHeaderState = () => {
      if (!header) return;
      if (window.scrollY > 50) header.classList.add('header--scrolled');
      else header.classList.remove('header--scrolled');
    };

    const closeMobileNav = () => {
      if (!hamburger || !mobileNav || !mobileOverlay) return;
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    if (hamburger && mobileNav && mobileOverlay) {
      hamburger.addEventListener('click', () => {
        const next = !hamburger.classList.contains('active');
        hamburger.classList.toggle('active', next);
        mobileNav.classList.toggle('active', next);
        mobileOverlay.classList.toggle('active', next);
        document.body.style.overflow = next ? 'hidden' : '';
      });
      mobileOverlay.addEventListener('click', closeMobileNav);
      mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMobileNav));
    }

    if (backToTop) {
      backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    window.addEventListener('scroll', updateHeaderState, { passive: true });
    window.addEventListener('pageshow', updateHeaderState);
    updateHeaderState();
  });
})();
