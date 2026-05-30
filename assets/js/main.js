/* ==========================================================================
   AIĒM TECHNOLOGIES — MAIN.JS  v3.0
   Navbar · Footer · Mega-menu · Particles · Scroll Reveal · Counters
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   LOGO SVG (inline, so navbar can use it without an extra request)
   -------------------------------------------------------------------------- */
const LOGO_SVG = `<svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
  <rect width="56" height="56" rx="12" fill="#100d20"/>
  <g transform="translate(28,28)">
    <!-- 4 orbital rings -->
    <ellipse rx="22" ry="9" fill="none" stroke="#c06dc4" stroke-width="1.9" opacity="0.92"/>
    <ellipse rx="22" ry="9" fill="none" stroke="#c06dc4" stroke-width="1.9" opacity="0.92" transform="rotate(45)"/>
    <ellipse rx="22" ry="9" fill="none" stroke="#c06dc4" stroke-width="1.9" opacity="0.92" transform="rotate(90)"/>
    <ellipse rx="22" ry="9" fill="none" stroke="#c06dc4" stroke-width="1.9" opacity="0.92" transform="rotate(135)"/>
    <!-- Orbital tip dots -->
    <circle cx="22"  cy="0"   r="2.6" fill="#e879c0"/>
    <circle cx="-22" cy="0"   r="2.6" fill="#e879c0"/>
    <circle cx="0"   cy="22"  r="2.6" fill="#e879c0"/>
    <circle cx="0"   cy="-22" r="2.6" fill="#e879c0"/>
    <circle cx="15.6"  cy="15.6"  r="2.6" fill="#e879c0"/>
    <circle cx="-15.6" cy="-15.6" r="2.6" fill="#e879c0"/>
    <circle cx="15.6"  cy="-15.6" r="2.6" fill="#e879c0"/>
    <circle cx="-15.6" cy="15.6"  r="2.6" fill="#e879c0"/>
    <!-- Accent dots -->
    <circle cx="10"  cy="-6"  r="1.2" fill="#e879c0" opacity="0.55"/>
    <circle cx="-10" cy="6"   r="1.2" fill="#e879c0" opacity="0.55"/>
    <circle cx="6"   cy="10"  r="1.2" fill="#e879c0" opacity="0.55"/>
    <circle cx="-6"  cy="-10" r="1.2" fill="#e879c0" opacity="0.55"/>
    <!-- Inner sanctum -->
    <circle cx="0" cy="0" r="8.5" fill="#100d20" stroke="#c06dc4" stroke-width="1.0" opacity="0.85"/>
    <!-- Soundarya Lahari chaturdala yantra — 4 lotus petals, each pointed at outer tip -->
    <!-- Top petal (pointing up) — wider, more prominent -->
    <path d="M 0,-2 C -3.2,-3.8 -3,-7.2 0,-7.8 C 3,-7.2 3.2,-3.8 0,-2 Z" fill="#d4a644"/>
    <!-- Bottom petal -->
    <path d="M 0,2 C -3.2,3.8 -3,7.2 0,7.8 C 3,7.2 3.2,3.8 0,2 Z" fill="#d4a644"/>
    <!-- Left petal -->
    <path d="M -2,0 C -3.8,-3.2 -7.2,-3 -7.8,0 C -7.2,3 -3.8,3.2 -2,0 Z" fill="#d4a644"/>
    <!-- Right petal -->
    <path d="M 2,0 C 3.8,-3.2 7.2,-3 7.8,0 C 7.2,3 3.8,3.2 2,0 Z" fill="#d4a644"/>
    <!-- Central diamond -->
    <polygon points="0,-2.8 2.8,0 0,2.8 -2.8,0" fill="#d4a644"/>
    <!-- Corner bindus (between petals, at diagonals) -->
    <circle cx="3.2"  cy="-3.2" r="0.8" fill="#d4a644" opacity="0.9"/>
    <circle cx="-3.2" cy="-3.2" r="0.8" fill="#d4a644" opacity="0.9"/>
    <circle cx="3.2"  cy="3.2"  r="0.8" fill="#d4a644" opacity="0.9"/>
    <circle cx="-3.2" cy="3.2"  r="0.8" fill="#d4a644" opacity="0.9"/>
    <!-- Central bindu -->
    <circle cx="0" cy="0" r="1.1" fill="#100d20"/>
  </g>
</svg>`;

/* --------------------------------------------------------------------------
   UTILITY: resolve relative path from current page to root
   -------------------------------------------------------------------------- */
function rootPath(path) {
  // Works for pages at root level. Extend if you add subdirectories.
  return path;
}

/* --------------------------------------------------------------------------
   BUILD NAVBAR
   -------------------------------------------------------------------------- */
function buildNavbar() {
  const el = document.getElementById('navbar');
  if (!el) return;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  /* Simple nav links (no dropdown) */
  const simpleLinks = [
    { href: 'about.html',        label: 'About' },
    { href: 'services.html',     label: 'Services' },
    { href: 'products.html',     label: 'Products' },
    { href: 'case-studies.html', label: 'Case Studies' },
  ];

  /* Mega-menu data — headings only, no sub-descriptions */
  const capabilities = [
    { href: 'capabilities.html#erp',     label: 'ERP Modernization' },
    { href: 'capabilities.html#revenue', label: 'Revenue Governance' },
    { href: 'capabilities.html#capital', label: 'Capital Projects' },
    { href: 'capabilities.html#ai',      label: 'AI & Automation' },
    { href: 'capabilities.html#cyber',   label: 'Cybersecurity' },
    { href: 'capabilities.html#managed', label: 'Managed Services' },
  ];

  const industries = [
    { href: 'case-studies.html#ind-public-sector',  label: 'Public Sector' },
    { href: 'case-studies.html#ind-private-sector', label: 'Private Sector' },
    { href: 'case-studies.html#ind-education',      label: 'Education' },
    { href: 'case-studies.html#ind-healthcare',     label: 'Healthcare' },
    { href: 'case-studies.html#ind-energy',         label: 'Energy & Utilities' },
    { href: 'case-studies.html#ind-financial',      label: 'Financial Services' },
    { href: 'case-studies.html#ind-realestate',     label: 'Real Estate & Construction' },
    { href: 'case-studies.html#ind-other',          label: 'Manufacturing & Other Sectors' },
  ];

  const chevronSVG = `<svg class="chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`;
  const arrowSVG   = `<svg class="mega-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>`;

  const capLinksHTML = capabilities.map(c => `
    <a href="${c.href}" class="mega-link">
      <span class="mega-label">${c.label}</span>
      ${arrowSVG}
    </a>`).join('');

  const indLinksHTML = industries.map(i => `
    <a href="${i.href}" class="mega-link">
      <span class="mega-label">${i.label}</span>
      ${arrowSVG}
    </a>`).join('');

  /* Check if current page is capabilities */
  const whatWeDoActive = currentPage === 'capabilities.html' ? ' active' : '';

  const megaMenuHTML = `
    <div class="nav-has-dropdown" id="whatWeDoDropdown">
      <button class="nav-dropdown-trigger${whatWeDoActive}" aria-haspopup="true" aria-expanded="false" aria-controls="megaMenu">
        What We Do ${chevronSVG}
      </button>
      <div class="nav-mega-menu" id="megaMenu" role="menu">
        <div class="mega-col">
          <div class="mega-col-head">Capabilities</div>
          ${capLinksHTML}
        </div>
        <div class="mega-col">
          <div class="mega-col-head">Industries</div>
          ${indLinksHTML}
        </div>
      </div>
    </div>`;

  const navLinksHTML = simpleLinks.map(l => {
    const active = currentPage === l.href ? ' class="active"' : '';
    return `<a href="${l.href}"${active}>${l.label}</a>`;
  }).join('');

  /* Mobile: simple links */
  const mobileSimpleHTML = simpleLinks.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('');

  /* Mobile: accordion for "What We Do" */
  const mobileCapHTML = capabilities.map(c => `<a href="${c.href}">${c.label}</a>`).join('');
  const mobileIndHTML = industries.map(i => `<a href="${i.href}">${i.label}</a>`).join('');
  const mobileDropHTML = `
    <button class="nav-mobile-dropdown-toggle" id="mobileWhatWeDoToggle" aria-expanded="false">
      What We Do
      ${chevronSVG}
    </button>
    <div class="nav-mobile-dropdown-panel" id="mobileWhatWeDoPanel">
      <span class="mobile-mega-col-head">Capabilities</span>
      ${mobileCapHTML}
      <span class="mobile-mega-col-head">Industries</span>
      ${mobileIndHTML}
    </div>`;

  el.innerHTML = `
    <div class="nav-wrap" id="navWrap">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo" aria-label="Aiēm Technologies home">
          <img src="assets/img/logo.svg" alt="Aiēm Technologies logo" width="40" height="40">
          <div class="nav-logo-text">
            <span class="brand">Aiēm Technologies</span>
            <span class="tagline">Innovate · Transform · Lead</span>
          </div>
        </a>
        <nav class="nav-links" aria-label="Primary navigation">
          <a href="about.html"${currentPage === 'about.html' ? ' class="active"' : ''}>About</a>
          ${megaMenuHTML}
          <a href="services.html"${currentPage === 'services.html' ? ' class="active"' : ''}>Services</a>
          <a href="products.html"${currentPage === 'products.html' ? ' class="active"' : ''}>Products</a>
          <a href="case-studies.html"${currentPage === 'case-studies.html' ? ' class="active"' : ''}>Case Studies</a>
        </nav>
        <div class="nav-cta">
          <a href="contact.html" class="btn btn-primary btn-sm">Get in Touch</a>
        </div>
        <button class="hamburger" id="hamburger" aria-label="Open navigation menu" aria-expanded="false" aria-controls="navMobile">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav class="nav-mobile" id="navMobile" aria-label="Mobile navigation">
        <a href="about.html">About</a>
        ${mobileDropHTML}
        <a href="services.html">Services</a>
        <a href="products.html">Products</a>
        <a href="case-studies.html">Case Studies</a>
        <a href="contact.html" class="btn btn-primary btn-sm">Get in Touch</a>
      </nav>
    </div>
  `;

  initMobileMenu();
  initMegaMenu();
  initScrolledState();
}

/* --------------------------------------------------------------------------
   MOBILE MENU
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navMobile = document.getElementById('navMobile');
  if (!hamburger || !navMobile) return;

  hamburger.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMobile.contains(e.target)) {
      navMobile.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --------------------------------------------------------------------------
   MEGA-MENU (desktop hover + keyboard; mobile accordion)
   -------------------------------------------------------------------------- */
function initMegaMenu() {
  /* ── Desktop: hover-based ── */
  const dropdown = document.getElementById('whatWeDoDropdown');
  const trigger  = dropdown && dropdown.querySelector('.nav-dropdown-trigger');
  const menu     = document.getElementById('megaMenu');

  if (dropdown && trigger && menu) {
    let closeTimer = null;

    const openMenu = () => {
      clearTimeout(closeTimer);
      dropdown.classList.add('open');
      trigger.setAttribute('aria-expanded', 'true');
    };

    const closeMenu = () => {
      closeTimer = setTimeout(() => {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }, 120);
    };

    dropdown.addEventListener('mouseenter', openMenu);
    dropdown.addEventListener('mouseleave', closeMenu);
    menu.addEventListener('mouseenter', openMenu);
    menu.addEventListener('mouseleave', closeMenu);

    /* Click toggle for touch/keyboard */
    trigger.addEventListener('click', () => {
      const isOpen = dropdown.classList.toggle('open');
      trigger.setAttribute('aria-expanded', String(isOpen));
    });

    /* Close on Escape */
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });

    /* Close on outside click */
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Mobile: accordion ── */
  const mobileToggle = document.getElementById('mobileWhatWeDoToggle');
  const mobilePanel  = document.getElementById('mobileWhatWeDoPanel');

  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobilePanel.classList.toggle('open');
      mobileToggle.classList.toggle('open', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });
  }
}

/* --------------------------------------------------------------------------
   NAVBAR SCROLL STATE
   -------------------------------------------------------------------------- */
function initScrolledState() {
  const wrap = document.getElementById('navWrap');
  if (!wrap) return;

  function update() {
    if (window.scrollY > 30) {
      wrap.classList.add('scrolled');
    } else {
      wrap.classList.remove('scrolled');
    }
  }

  update();
  window.addEventListener('scroll', update, { passive: true });
}

/* --------------------------------------------------------------------------
   BUILD FOOTER
   -------------------------------------------------------------------------- */
function buildFooter() {
  const el = document.getElementById('footer');
  if (!el) return;

  el.innerHTML = `
    <footer class="footer" role="contentinfo">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand column -->
          <div class="footer-brand">
            <a href="index.html" class="footer-logo" aria-label="Aiēm Technologies home">
              <img src="assets/img/logo.svg" alt="Aiēm Technologies" width="36" height="36">
              <span class="brand">Aiēm Technologies</span>
            </a>
            <span class="footer-tagline">Innovate · Transform · Lead</span>
            <p>Governance-led digital solutions that improve efficiency, strengthen compliance, and accelerate enterprise transformation.</p>
            <div class="footer-social" aria-label="Social media links">
              <a href="#" aria-label="LinkedIn" rel="noopener noreferrer"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="#" aria-label="YouTube" rel="noopener noreferrer"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#100d20"/></svg></a>
              <a href="#" aria-label="X" rel="noopener noreferrer"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="#" aria-label="Instagram" rel="noopener noreferrer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
            </div>
          </div>

          <!-- Company links -->
          <div class="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About Aiēm</a></li>
              <li><a href="services.html">Our Services</a></li>
              <li><a href="capabilities.html">Capabilities</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="case-studies.html">Case Studies</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
          </div>

          <!-- Solutions links -->
          <div class="footer-col">
            <h5>Solutions</h5>
            <ul>
              <li><a href="capabilities.html#erp">ERP Modernization</a></li>
              <li><a href="capabilities.html#revenue">Revenue Governance</a></li>
              <li><a href="capabilities.html#capital">Capital Projects</a></li>
              <li><a href="capabilities.html#ai">AI Automation</a></li>
              <li><a href="capabilities.html#cloud">Cloud &amp; Infrastructure</a></li>
              <li><a href="capabilities.html#managed">Managed Services</a></li>
            </ul>
          </div>

          <!-- Contact -->
          <div class="footer-col">
            <h5>Contact</h5>
            <div class="footer-contact-item">
              <span class="footer-contact-label">Email</span>
              <span class="footer-contact-value"><a href="mailto:contactus@aiemtech.com">contactus@aiemtech.com</a></span>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-label">UAE Office</span>
              <span class="footer-contact-value">+971 402691676<br>+971 504026767</span>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-label">India Office</span>
              <span class="footer-contact-value">+91 7569709800<br>+91 7702530671</span>
            </div>
            <div class="footer-contact-item">
              <span class="footer-contact-label">Web</span>
              <span class="footer-contact-value"><a href="https://www.aiemtech.com" target="_blank" rel="noopener noreferrer">www.aiemtech.com</a></span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 Aiēm Technologies FZE LLC. All rights reserved.</p>
          <div class="footer-bottom-links">
            <a href="privacy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Use</a>
            <a href="sitemap.xml">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/* --------------------------------------------------------------------------
   PARTICLES
   -------------------------------------------------------------------------- */
function initParticles() {
  const canvas = document.getElementById('particles');
  if (!canvas) return;

  // Respect prefers-reduced-motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    canvas.style.display = 'none';
    return;
  }

  const ctx = canvas.getContext('2d');
  const COUNT = 40;
  let W, H, particles;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r:  Math.random() * 2 + 1,
    }));
  }

  function drawParticle(p) {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(168, 85, 200, 0.15)';
    ctx.fill();
  }

  function drawLine(a, b, dist) {
    const alpha = (1 - dist / 120) * 0.08;
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.strokeStyle = `rgba(168, 85, 200, ${alpha})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  function tick() {
    ctx.clearRect(0, 0, W, H);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
      drawParticle(p);

      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) drawLine(p, q, dist);
      }
    }

    requestAnimationFrame(tick);
  }

  resize();
  createParticles();
  tick();

  window.addEventListener('resize', () => {
    resize();
    createParticles();
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   SCROLL REVEAL (IntersectionObserver)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');
  if (!targets.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    targets.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px',
  });

  targets.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   ANIMATED COUNTERS
   -------------------------------------------------------------------------- */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    counters.forEach(el => {
      const target  = parseFloat(el.dataset.count);
      const prefix  = el.dataset.prefix  || '';
      const suffix  = el.dataset.suffix  || '';
      const decimals = parseInt(el.dataset.decimals || '0', 10);
      el.textContent = prefix + target.toFixed(decimals) + suffix;
    });
    return;
  }

  function easeOutQuart(t) {
    return 1 - Math.pow(1 - t, 4);
  }

  function animateCounter(el) {
    const target   = parseFloat(el.dataset.count);
    const prefix   = el.dataset.prefix   || '';
    const suffix   = el.dataset.suffix   || '';
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const duration = 1800;
    const start    = performance.now();

    function update(now) {
      const elapsed  = Math.min(now - start, duration);
      const progress = easeOutQuart(elapsed / duration);
      const value    = target * progress;
      el.textContent = prefix + value.toFixed(decimals) + suffix;
      if (elapsed < duration) {
        requestAnimationFrame(update);
      } else {
        el.textContent = prefix + target.toFixed(decimals) + suffix;
      }
    }

    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counters.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   GLOBAL GRID OVERLAY (injected into every page)
   -------------------------------------------------------------------------- */
function injectGridOverlay() {
  const grid = document.createElement('div');
  grid.className = 'site-grid';
  grid.setAttribute('aria-hidden', 'true');
  document.body.prepend(grid);
}

/* --------------------------------------------------------------------------
   INIT ON DOM READY
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  injectGridOverlay();
  buildNavbar();
  buildFooter();
  initParticles();
  initScrollReveal();
  initCounters();
});
