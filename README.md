# Aiēm Technologies — Website

Production-ready static website for **Aiēm Technologies FZE LLC** — the enterprise contract-to-revenue intelligence platform.

**Live site:** [www.aiemtech.com](https://www.aiemtech.com)  
**Tagline:** Simplifying Revenue. Amplifying Control.

---

## Project Overview

This is a fully static website built with plain HTML, CSS, and JavaScript. No build tools, no Node.js, no frameworks required. It deploys to GitHub Pages, Netlify, or any static host by pushing files directly.

**13 pages:**
- `index.html` — Home
- `product.html` — Product Overview
- `platform.html` — Platform Modules (8 engines)
- `industries.html` — Industries (Real Estate, SaaS, Telecom, Construction)
- `compliance.html` — ASC 606 / IFRS 15 Compliance
- `erp-integrations.html` — ERP Integrations (SAP, Oracle, NetSuite, Dynamics, Salesforce)
- `roi-pricing.html` — ROI & Pricing
- `roadmap.html` — Product Roadmap
- `investors.html` — Investor Information
- `blog.html` — Revenue Intelligence Insights
- `contact.html` — Book a Demo / Contact Form
- `privacy.html` — Privacy Policy
- `terms.html` — Terms of Use

**Shared assets:**
- `assets/css/main.css` — All styles, animations, responsive layout
- `assets/js/main.js` — Navbar, footer, particles, scroll reveal, counters

---

## How to Open in VS Code

```bash
# Open the project folder in VS Code
code /Users/aditya/Website-Aiem
```

Or: Open VS Code → File → Open Folder → select `Website-Aiem`.

---

## How to Run Locally

**Option 1 — Just open in browser (simplest):**
```bash
open /Users/aditya/Website-Aiem/index.html
```
Double-click `index.html` in Finder. All pages link to each other with relative paths.

**Option 2 — VS Code Live Server (recommended for development):**
1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
2. Right-click `index.html` → "Open with Live Server"
3. Site opens at `http://127.0.0.1:5500` with auto-reload on save

**Option 3 — Python simple HTTP server:**
```bash
cd /Users/aditya/Website-Aiem
python3 -m http.server 8080
# Open http://localhost:8080
```

**Option 4 — Node.js `serve`:**
```bash
npx serve /Users/aditya/Website-Aiem
```

---

## How to Build

**No build step required.** This is plain HTML/CSS/JS. The files you edit are the files you deploy. There is no compilation, transpilation, or bundling.

---

## How to Push to GitHub

```bash
# 1. Navigate to the project directory
cd /Users/aditya/Website-Aiem

# 2. Initialize git repository
git init

# 3. Stage all files
git add .

# 4. Create initial commit
git commit -m "Initial commit: Aiēm Technologies website"

# 5. Create a new repository on GitHub (github.com/new)
#    Repository name: Website-Aiem (or aiemtech-website)
#    Do NOT initialize with README (you already have one)

# 6. Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/Website-Aiem.git

# 7. Push to GitHub
git branch -M main
git push -u origin main
```

---

## How to Deploy Free on GitHub Pages

1. Push your code to GitHub (see above)
2. Go to your repository on GitHub
3. Click **Settings** (top navigation)
4. Scroll down to **Pages** in the left sidebar
5. Under **Source**, select **Deploy from a branch**
6. Choose branch: **main** | folder: **/ (root)**
7. Click **Save**
8. Wait 1–2 minutes — your site will be live at:
   `https://YOUR_USERNAME.github.io/Website-Aiem/`

**Note:** GitHub Pages serves `index.html` from the root automatically.

---

## How to Connect a Custom Domain (aiemtech.com)

### Step 1: Add domain in GitHub Pages
1. In GitHub repository → Settings → Pages
2. Under **Custom domain**, enter `www.aiemtech.com`
3. Click **Save**
4. GitHub will create a `CNAME` file in your repository automatically

### Step 2: Configure DNS records with your domain registrar
Add these DNS records in your domain registrar's control panel:

**For `www.aiemtech.com` (CNAME):**
```
Type:  CNAME
Name:  www
Value: YOUR_USERNAME.github.io
TTL:   3600
```

**For apex domain `aiemtech.com` (A records — GitHub Pages IPs):**
```
Type:  A
Name:  @ (or aiemtech.com)
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
TTL:   3600
```

### Step 3: Enable HTTPS
1. Wait 24–48 hours for DNS to propagate
2. Return to GitHub Pages settings
3. Check **Enforce HTTPS** (appears after DNS verification)

**Alternatively:** Use Netlify (free tier) for easier custom domain + SSL setup. See "Netlify Deployment" below.

---

## Netlify Deployment (Alternative to GitHub Pages)

Netlify offers easier DNS management, form handling, and faster CDN.

1. Push to GitHub (see above)
2. Go to [app.netlify.com](https://app.netlify.com) → "Add new site" → "Import an existing project"
3. Connect your GitHub account and select the repository
4. Build settings: **leave blank** (no build command, publish directory is the root `/`)
5. Click **Deploy site**
6. In Netlify dashboard → Domain settings → Add custom domain `www.aiemtech.com`
7. Follow Netlify's DNS instructions (they'll handle SSL automatically)

---

## How to Edit Content

| What to edit | File(s) |
|---|---|
| Home page copy and sections | `index.html` |
| Navigation links and logo | `assets/js/main.js` → `buildNavbar()` |
| Footer links and content | `assets/js/main.js` → `buildFooter()` |
| Platform module descriptions | `platform.html` |
| Industry content | `industries.html` |
| ASC 606 / IFRS 15 compliance content | `compliance.html` |
| ERP integration details | `erp-integrations.html` |
| Pricing tiers | `roi-pricing.html` |
| Roadmap features | `roadmap.html` |
| Investor information | `investors.html` |
| Blog posts | `blog.html` |
| Contact form fields | `contact.html` |
| Colors and typography | `assets/css/main.css` → `:root` section |
| Particle animation | `assets/js/main.js` → `initParticles()` |

**Brand colors** are defined as CSS variables at the top of `main.css`:
```css
:root {
  --color-bg:     #0a1628;  /* Primary dark background */
  --color-teal:   #00c9b7;  /* Accent teal */
  --color-purple: #6366f1;  /* Accent purple */
}
```

---

## How to Connect the Contact Form

The contact form in `contact.html` currently has a placeholder `action="#"`. To make it functional, connect it to a form service:

### Option 1 — Formspree (free tier available)
1. Create an account at [formspree.io](https://formspree.io)
2. Create a new form → copy your form ID
3. In `contact.html`, replace:
   ```html
   <form action="#" method="POST">
   ```
   with:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 2 — Netlify Forms (if deployed on Netlify)
1. Add `netlify` attribute to the form tag:
   ```html
   <form action="#" method="POST" netlify name="demo-request">
   ```
2. Add a hidden input: `<input type="hidden" name="form-name" value="demo-request">`
3. Netlify automatically handles submissions — view them in your Netlify dashboard

### Option 3 — EmailJS (no backend required)
1. Create an account at [emailjs.com](https://emailjs.com)
2. Set up a service and template
3. Replace the form submission handler in `contact.html` with the EmailJS SDK

---

## SEO Checklist Before Launch

- [ ] Update all `<meta name="description">` tags with final, keyword-rich copy
- [ ] Update `<link rel="canonical">` URLs to use actual domain (`https://www.aiemtech.com/...`)
- [ ] Add a real favicon (`favicon.ico` or `favicon.svg`) to the root directory and link it in all `<head>` sections:
  ```html
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  ```
- [ ] Add Open Graph images (1200×630px JPG/PNG) and update `og:image` meta tags
- [ ] Add Twitter card images and update `twitter:image` meta tags
- [ ] Replace Google Analytics placeholder with actual GA4 tag
- [ ] Submit `sitemap.xml` to Google Search Console: https://www.aiemtech.com/sitemap.xml
- [ ] Verify `robots.txt` is accessible: https://www.aiemtech.com/robots.txt
- [ ] Test all pages with [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Test all pages with [Google Rich Results Test](https://search.google.com/test/rich-results) (for JSON-LD)
- [ ] Verify mobile responsiveness on actual devices (iOS Safari, Android Chrome)
- [ ] Check all internal links work correctly (no 404s)
- [ ] Connect contact form to Formspree or Netlify Forms
- [ ] Test form submission end-to-end
- [ ] Set up Google Search Console property for www.aiemtech.com
- [ ] Consider adding `<link rel="alternate" hreflang="en" href="...">` if multilingual support is planned

---

## File Structure

```
Website-Aiem/
├── index.html              ← Home page
├── product.html            ← Product overview
├── platform.html           ← Platform modules
├── industries.html         ← Industries
├── compliance.html         ← ASC 606 / IFRS 15
├── erp-integrations.html   ← ERP integrations
├── roi-pricing.html        ← ROI & pricing
├── roadmap.html            ← Product roadmap
├── investors.html          ← Investor information
├── blog.html               ← Blog / insights
├── contact.html            ← Contact / book demo
├── privacy.html            ← Privacy policy
├── terms.html              ← Terms of use
├── sitemap.xml             ← XML sitemap
├── robots.txt              ← Search engine directives
├── .gitignore              ← Git ignore rules
├── README.md               ← This file
└── assets/
    ├── css/
    │   └── main.css        ← All styles (~700 lines)
    └── js/
        └── main.js         ← All shared JS (~400 lines)
```

---

## Technology Stack

- **HTML5** — Semantic markup with ARIA accessibility attributes
- **CSS3** — Custom properties, Grid, Flexbox, animations, glassmorphism
- **Vanilla JavaScript** — No frameworks, no dependencies
- **Google Fonts (Inter)** — Loaded via CDN
- **Canvas API** — Particle system background animation
- **IntersectionObserver API** — Scroll reveal animations
- **JSON-LD** — Structured data for SEO (Organization + SoftwareApplication schemas)

---

## Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | Full |
| Firefox 90+ | Full |
| Safari 14+ | Full |
| Edge 90+ | Full |
| iOS Safari 14+ | Full |
| Android Chrome | Full |

`backdrop-filter` (glassmorphism) requires Chrome 76+, Safari 9+, Firefox 103+. The site degrades gracefully in older browsers.

---

## Contact

**Aiēm Technologies FZE LLC**  
Email: [contactus@aiem.com](mailto:contactus@aiem.com)  
Website: [www.aiemtech.com](https://www.aiemtech.com)

---

*Simplifying Revenue. Amplifying Control.*
