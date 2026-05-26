/* ==========================================================================
   AIĒM TECHNOLOGIES — MAIN.JS
   Navbar · Footer · Particles · Scroll Reveal · Counters · Mobile Menu
   ========================================================================== */

'use strict';

/* --------------------------------------------------------------------------
   LOGO SVG (inline, so navbar can use it without an extra request)
   -------------------------------------------------------------------------- */
const LOGO_SVG = `<svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
  <rect width="56" height="56" rx="12" fill="#100d20"/>
  <g transform="translate(28,28)">
    <ellipse rx="22" ry="9" fill="none" stroke="#c06dc4" stroke-width="1.6" opacity="0.95"/>
    <ellipse rx="22" ry="9" fill="none" stroke="#c06dc4" stroke-width="1.6" opacity="0.95" transform="rotate(45)"/>
    <ellipse rx="22" ry="9" fill="none" stroke="#c06dc4" stroke-width="1.6" opacity="0.95" transform="rotate(90)"/>
    <ellipse rx="22" ry="9" fill="none" stroke="#c06dc4" stroke-width="1.6" opacity="0.95" transform="rotate(135)"/>
    <circle cx="22" cy="0" r="2.2" fill="#e879c0" opacity="0.9"/>
    <circle cx="-22" cy="0" r="2.2" fill="#e879c0" opacity="0.9"/>
    <circle cx="0" cy="22" r="2.2" fill="#e879c0" opacity="0.9"/>
    <circle cx="0" cy="-22" r="2.2" fill="#e879c0" opacity="0.9"/>
    <circle cx="15.5" cy="15.5" r="1.8" fill="#e879c0" opacity="0.8"/>
    <circle cx="-15.5" cy="-15.5" r="1.8" fill="#e879c0" opacity="0.8"/>
    <circle cx="15.5" cy="-15.5" r="1.8" fill="#e879c0" opacity="0.8"/>
    <circle cx="-15.5" cy="15.5" r="1.8" fill="#e879c0" opacity="0.8"/>
    <circle cx="11" cy="-6" r="1.3" fill="#e879c0" opacity="0.7"/>
    <circle cx="-11" cy="6" r="1.3" fill="#e879c0" opacity="0.7"/>
    <circle cx="6" cy="11" r="1.3" fill="#e879c0" opacity="0.7"/>
    <circle cx="-6" cy="-11" r="1.3" fill="#e879c0" opacity="0.7"/>
    <circle cx="0" cy="0" r="8" fill="#100d20" stroke="#c06dc4" stroke-width="1.2"/>
    <path d="M0,-5.5 L0,5.5 M-5.5,0 L5.5,0 M-3.5,-3.5 L3.5,3.5 M3.5,-3.5 L-3.5,3.5" stroke="#d4a644" stroke-width="0.9" opacity="0.9"/>
    <circle cx="0" cy="0" r="2.2" fill="#d4a644"/>
    <circle cx="0" cy="-4.5" r="1.3" fill="#d4a644" opacity="0.85"/>
    <circle cx="0" cy="4.5" r="1.3" fill="#d4a644" opacity="0.85"/>
    <circle cx="-4.5" cy="0" r="1.3" fill="#d4a644" opacity="0.85"/>
    <circle cx="4.5" cy="0" r="1.3" fill="#d4a644" opacity="0.85"/>
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

  const links = [
    { href: 'about.html',        label: 'About' },
    { href: 'services.html',     label: 'Services' },
    { href: 'capabilities.html', label: 'Capabilities' },
    { href: 'products.html',     label: 'Products' },
    { href: 'case-studies.html', label: 'Case Studies' },
  ];

  const navLinksHTML = links.map(l => {
    const active = currentPage === l.href ? ' class="active"' : '';
    return `<a href="${l.href}"${active}>${l.label}</a>`;
  }).join('');

  const mobileLinksHTML = links.map(l =>
    `<a href="${l.href}">${l.label}</a>`
  ).join('') + `<a href="contact.html" class="btn btn-primary btn-sm">Get in Touch</a>`;

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
          ${navLinksHTML}
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
        ${mobileLinksHTML}
      </nav>
    </div>
  `;

  initMobileMenu();
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
              <a href="#" aria-label="LinkedIn" rel="noopener noreferrer">in</a>
              <a href="#" aria-label="YouTube" rel="noopener noreferrer">▶</a>
              <a href="#" aria-label="X (Twitter)" rel="noopener noreferrer">𝕏</a>
              <a href="#" aria-label="Instagram" rel="noopener noreferrer">◉</a>
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
   INIT ON DOM READY
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  buildNavbar();
  buildFooter();
  initParticles();
  initScrollReveal();
  initCounters();
});
