/* ============================================
   久米技建 - メインJavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Header Scroll Effect ---
  const header = document.querySelector('.header');
  const fixedCta = document.querySelector('.fixed-cta');
  const fixedCtaFloat = document.querySelector('.fixed-cta__float');
  const backToTop = document.querySelector('.back-to-top');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Header background
    if (header) {
      if (scrollY > 50) {
        header.classList.add('header--scrolled');
      } else {
        header.classList.remove('header--scrolled');
      }
    }

    // Fixed CTA visibility
    if (fixedCta) {
      if (scrollY > 600) {
        fixedCta.classList.add('visible');
      } else {
        fixedCta.classList.remove('visible');
      }
    }

    if (fixedCtaFloat) {
      if (scrollY > 600) {
        fixedCtaFloat.classList.add('visible');
      } else {
        fixedCtaFloat.classList.remove('visible');
      }
    }

    // Back to top
    if (backToTop) {
      if (scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Back to Top ---
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- Mobile Menu ---
  const hamburger = document.querySelector('.header__hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileOverlay = document.querySelector('.mobile-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');

  function toggleMobileMenu() {
    hamburger?.classList.toggle('active');
    mobileNav?.classList.toggle('active');
    mobileOverlay?.classList.toggle('active');
    document.body.style.overflow = mobileNav?.classList.contains('active') ? 'hidden' : '';
  }

  function closeMobileMenu() {
    hamburger?.classList.remove('active');
    mobileNav?.classList.remove('active');
    mobileOverlay?.classList.remove('active');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', toggleMobileMenu);
  mobileOverlay?.addEventListener('click', closeMobileMenu);
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // --- Mobile Sub-menu Toggle ---
  document.querySelectorAll('.mobile-nav__toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const sub = toggle.nextElementSibling;
      if (sub) {
        sub.style.display = sub.style.display === 'block' ? 'none' : 'block';
        toggle.classList.toggle('active');
      }
    });
  });

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
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
  } else {
    revealElements.forEach(el => el.classList.add('revealed'));
  }

  // --- Works Filter ---
  const filterBtns = document.querySelectorAll('.works__filter-btn');
  const workCards = document.querySelectorAll('.work-card[data-category]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      workCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- Column Category Filter ---
  const columnFilterButtons = document.querySelectorAll('.column-filter__btn');
  const columnCards = document.querySelectorAll('.column-list .column-card[data-category]');

  columnFilterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      columnFilterButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      });

      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');

      columnCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const isVisible = filter === 'all' || category === filter;
        card.style.display = isVisible ? '' : 'none';
        if (isVisible) {
          card.style.animation = 'fadeInUp 0.35s ease forwards';
        }
      });
    });
  });

  // --- Smooth Scroll for anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const headerHeight = header?.offsetHeight || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // --- Contact Form Validation ---
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const requiredFields = contactForm.querySelectorAll('[required]');
      let isValid = true;

      requiredFields.forEach(field => {
        field.classList.remove('error');
        if (!field.value.trim()) {
          field.classList.add('error');
          isValid = false;
        }
      });

      // Email validation
      const emailField = contactForm.querySelector('input[type="email"]');
      if (emailField && emailField.value) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailField.value)) {
          emailField.classList.add('error');
          isValid = false;
        }
      }

      if (isValid) {
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success';
        successMsg.innerHTML = '<p><i class="fas fa-check-circle"></i> お問い合わせを受け付けました。<br>担当者より2営業日以内にご連絡いたします。</p>';
        successMsg.style.cssText = 'background: #e8f5e9; color: #2e7d32; padding: 24px; border-radius: 8px; text-align: center; margin-top: 20px; font-weight: 500;';
        contactForm.parentNode.insertBefore(successMsg, contactForm.nextSibling);
        contactForm.reset();

        // Scroll to success message
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  }

  // --- Add error styles dynamically ---
  const errorStyle = document.createElement('style');
  errorStyle.textContent = `
    .form-input.error, .form-textarea.error, .form-select.error {
      border-color: #e53935;
      box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.1);
    }
  `;
  document.head.appendChild(errorStyle);

});
