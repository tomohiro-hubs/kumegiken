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

  // --- Counter Animation ---
  const counters = document.querySelectorAll('[data-count]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;
        const countTo = parseInt(target.getAttribute('data-count'));
        const duration = 2000;
        const startTime = performance.now();

        function updateCount(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(countTo * easeOut);
          target.textContent = current.toLocaleString();

          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            target.textContent = countTo.toLocaleString();
          }
        }

        requestAnimationFrame(updateCount);
        counterObserver.unobserve(target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

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

  // --- Simulation Calculator ---
  const simForm = document.querySelector('#simulation-form');
  if (simForm) {
    initSimulation();
  }

  function initSimulation() {
    const inputs = simForm.querySelectorAll('input[type="radio"], input[type="range"], input[type="number"]');
    inputs.forEach(input => {
      input.addEventListener('change', calculateEstimate);
      input.addEventListener('input', calculateEstimate);
    });

    calculateEstimate();
  }

  function calculateEstimate() {
    const buildingType = document.querySelector('input[name="building-type"]:checked')?.value;
    const workType = document.querySelector('input[name="work-type"]:checked')?.value;
    const areaInput = document.querySelector('#area-input');
    const area = areaInput ? parseFloat(areaInput.value) || 0 : 0;
    const floorsInput = document.querySelector('#floors-input');
    const floors = floorsInput ? parseInt(floorsInput.value) || 1 : 1;

    // Price per sqm ranges by work type
    const priceRanges = {
      'waterproofing': { min: 4000, max: 8000 },
      'painting': { min: 3000, max: 6000 },
      'large-scale-repair': { min: 8000, max: 15000 },
      'sealing': { min: 800, max: 1500 },
      'leak-repair': { min: 5000, max: 12000 },
      'building-inspection': { min: 200, max: 500 }
    };

    // Building type multiplier
    const multipliers = {
      'mansion': 1.0,
      'building': 1.1,
      'house': 0.9,
      'factory': 1.2,
      'apartment': 0.95
    };

    const range = priceRanges[workType] || { min: 3000, max: 8000 };
    const multiplier = multipliers[buildingType] || 1.0;
    const floorMultiplier = 1 + (floors - 1) * 0.05;

    const minPrice = Math.round(area * range.min * multiplier * floorMultiplier / 10000) * 10000;
    const maxPrice = Math.round(area * range.max * multiplier * floorMultiplier / 10000) * 10000;

    const resultMin = document.querySelector('#result-min');
    const resultMax = document.querySelector('#result-max');
    const resultSection = document.querySelector('.sim-result');

    if (resultMin && resultMax && area > 0) {
      resultMin.textContent = minPrice.toLocaleString();
      resultMax.textContent = maxPrice.toLocaleString();
      if (resultSection) resultSection.style.display = '';
    } else if (resultSection) {
      resultSection.style.display = 'none';
    }
  }

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
