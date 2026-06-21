/* ============================================================
   WebsiteKu — Main App
   ============================================================ */

(function () {
  'use strict';

  /* -------- STATE -------- */
  let activeCat = 'all';
  let searchQuery = '';

  /* -------- DOM -------- */
  const nav           = document.getElementById('mainNav');
  const navBurger     = document.getElementById('navBurger');
  const navLinks      = document.getElementById('navLinks');
  const portfolioGrid = document.getElementById('portfolioGrid');
  const portfolioEmpty= document.getElementById('portfolioEmpty');
  const searchInput   = document.getElementById('searchInput');
  const clearSearch   = document.getElementById('clearSearch');
  const filterTabs    = document.getElementById('filterTabs');
  const faqList       = document.getElementById('faqList');
  const kontakForm    = document.getElementById('kontakForm');
  const previewOverlay= document.getElementById('previewOverlay');
  const previewFrame  = document.getElementById('previewFrame');
  const previewClose  = document.getElementById('previewClose');
  const previewTitle  = document.getElementById('previewTitle');
  const previewUrl    = document.getElementById('previewUrl');
  const previewOrder  = document.getElementById('previewOrder');

  /* ======================================================== */
  /* NAV                                                       */
  /* ======================================================== */
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  navBurger.addEventListener('click', () => {
    navBurger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      navBurger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  /* ======================================================== */
  /* COUNTER ANIMATION                                         */
  /* ======================================================== */
  function animateCounters() {
    document.querySelectorAll('.stat-num[data-target]').forEach(el => {
      const target = parseInt(el.dataset.target);
      let current = 0;
      const step = Math.ceil(target / 60);
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        el.textContent = current;
        if (current >= target) clearInterval(timer);
      }, 25);
    });
  }

  /* ======================================================== */
  /* SCROLL REVEAL                                             */
  /* ======================================================== */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        if (entry.target.closest('.hero-stats')) animateCounters();
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.service-card, .kat-card, .harga-card, .proses-item, .ki-item, .testi-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });

  /* hero stats observer */
  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) observer.observe(heroStats);

  /* ======================================================== */
  /* PORTFOLIO RENDER                                          */
  /* ======================================================== */
  function getStyleLabel(style) {
    const labels = {
      minimalist: 'Minimalist', corporate: 'Corporate', luxury: 'Luxury',
      dark: 'Dark', glassmorphism: 'Glass', neon: 'Neon',
      startup: 'Startup', elegant: 'Elegant', futuristic: 'Futuristic', premium: 'Premium'
    };
    return labels[style] || style;
  }

  function buildCardPreview(tpl) {
    const cs = getCardPreviewStyle(tpl);
    const isDark = ['corporate','luxury','dark','glassmorphism','neon','startup','futuristic','premium'].includes(tpl.style);
    const textColor = isDark ? '#fff' : cs.h1Color;
    const subColor = isDark ? 'rgba(255,255,255,.6)' : '#888';

    return `
      <div class="pv-nav" style="background:${cs.navBg};border-bottom:${cs.navBorder};">
        <div class="pv-dot" style="background:#FF5F57"></div>
        <div class="pv-dot" style="background:#FFBD2E"></div>
        <div class="pv-dot" style="background:#28CA41"></div>
        <img src="assets/logo-placeholder.png" style="height:14px;object-fit:contain;vertical-align:middle">
        <div class="pv-links">
          <span class="pv-link" style="color:${cs.navColor}">Home</span>
          <span class="pv-link" style="color:${cs.navColor}">Menu</span>
          <span class="pv-link" style="color:${cs.navColor}">Kontak</span>
        </div>
      </div>
      <div class="pv-hero" style="background:${cs.heroGrad || cs.bg};flex:1;">
        <div class="pv-hero-content">
          <div class="pv-h1" style="color:${textColor};font-family:${cs.font}">${tpl.headline}</div>
          <div class="pv-sub" style="color:${subColor}">${tpl.sub.substring(0,60)}...</div>
          <div class="pv-btn" style="background:${typeof cs.btnBg==='string'&&cs.btnBg.startsWith('linear')?'transparent':cs.btnBg};color:${cs.btnColor};border:${tpl.style==='neon'||tpl.style==='futuristic'?'1px solid '+tpl.primary:'none'}">
            Mulai Sekarang
          </div>
        </div>
      </div>`;
  }

  function renderPortfolio() {
    const q = searchQuery.toLowerCase().trim();
    const filtered = TEMPLATES.filter(tpl => {
      const catOk = activeCat === 'all' || String(tpl.cat) === activeCat;
      if (!catOk) return false;
      if (!q) return true;
      return (
        tpl.name.toLowerCase().includes(q) ||
        tpl.catName.toLowerCase().includes(q) ||
        tpl.style.toLowerCase().includes(q) ||
        tpl.tags.some(tag => tag.includes(q)) ||
        tpl.headline.toLowerCase().includes(q)
      );
    });

    portfolioGrid.innerHTML = '';
    portfolioEmpty.style.display = filtered.length === 0 ? 'block' : 'none';

    filtered.forEach((tpl, idx) => {
      const card = document.createElement('div');
      card.className = 'p-card';
      card.style.animationDelay = `${(idx % 6) * 0.06}s`;
      card.innerHTML = `
        <div class="p-card-thumb">
          <div class="p-card-preview" style="background:${getCardBg(tpl)}">
            ${buildCardPreview(tpl)}
          </div>
          <div class="p-card-overlay">
            <div class="p-card-overlay-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Preview Desain
            </div>
          </div>
        </div>
        <div class="p-card-body">
          <div class="p-card-header">
            <div class="p-card-name">${tpl.name}</div>
            <span class="p-card-style-badge badge-${tpl.style}">${getStyleLabel(tpl.style)}</span>
          </div>
          <div class="p-card-cat">${tpl.catName}</div>
          <div class="p-card-tags">
            ${tpl.tags.slice(0,3).map(tag => `<span class="p-tag">${tag}</span>`).join('')}
          </div>
        </div>`;

      card.addEventListener('click', () => openPreview(tpl));
      portfolioGrid.appendChild(card);
    });
  }

  function getCardBg(tpl) {
    const bgs = {
      minimalist: '#FAFAFA', corporate: tpl.primary,
      luxury: '#0A0A0A', dark: '#0D0D0D',
      glassmorphism: 'linear-gradient(135deg,#0F0520,#0E1B3D)',
      neon: '#030305', startup: '#050510',
      elegant: '#FAFAF6', futuristic: '#050910', premium: '#0B0F1E'
    };
    return bgs[tpl.style] || '#0D0D0D';
  }

  /* ======================================================== */
  /* FILTER & SEARCH                                           */
  /* ======================================================== */
  filterTabs.addEventListener('click', e => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    filterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeCat = tab.dataset.cat;
    renderPortfolio();
  });

  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value;
    clearSearch.style.display = searchQuery ? 'block' : 'none';
    renderPortfolio();
  });

  clearSearch.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    clearSearch.style.display = 'none';
    renderPortfolio();
  });

  /* ======================================================== */
  /* KATEGORI CARDS → filter portfolio                        */
  /* ======================================================== */
  document.querySelectorAll('.kat-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.cat;
      activeCat = cat;
      filterTabs.querySelectorAll('.filter-tab').forEach(t => {
        t.classList.toggle('active', t.dataset.cat === cat);
      });
      const portfolioSection = document.getElementById('portfolio');
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
      renderPortfolio();
    });
  });

  /* ======================================================== */
  /* PREVIEW MODAL                                             */
  /* ======================================================== */
  let currentTemplate = null;

  function openPreview(tpl) {
    currentTemplate = tpl;
    previewTitle.textContent = tpl.name;
    previewUrl.textContent = `${tpl.name.toLowerCase().replace(/\s+/g, '-').replace('websiteku-','')}.websiteku.id`;

    const basePath = window.location.pathname.endsWith('/')
      ? window.location.pathname
      : window.location.pathname.replace(/[^\/]+$/, '');
    const base = window.location.origin + basePath;
    const html = generateTemplateHTML(tpl, base);
    previewFrame.srcdoc = html;
    previewOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    previewOrder.onclick = () => orderTemplate(tpl);
  }

  function closePreview() {
    previewOverlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => { previewFrame.srcdoc = ''; }, 300);
    currentTemplate = null;
  }

  previewClose.addEventListener('click', closePreview);
  previewOverlay.addEventListener('click', e => {
    if (e.target === previewOverlay) closePreview();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePreview();
  });

  /* ======================================================== */
  /* WHATSAPP ORDER                                            */
  /* ======================================================== */
  function orderTemplate(tpl) {
    const msg = tpl
      ? `Halo WebsiteKu! Saya tertarik memesan website dengan desain *${tpl.name}* (gaya ${getStyleLabel(tpl.style)}). Mohon informasinya lebih lanjut.`
      : `Halo WebsiteKu! Saya tertarik memesan website profesional. Mohon informasinya lebih lanjut.`;
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  }

  /* kontakForm → WhatsApp */
  if (kontakForm) {
    kontakForm.addEventListener('submit', e => {
      e.preventDefault();
      const nama   = document.getElementById('namaInput').value.trim();
      const wa     = document.getElementById('waInput').value.trim();
      const bisnis = document.getElementById('bisniInput').value.trim();
      const pesan  = document.getElementById('pesanInput').value.trim();

      const msg = `Halo WebsiteKu! 👋\n\nNama: ${nama}\nWA: ${wa}\nBisnis: ${bisnis}\nKebutuhan: ${pesan}`;
      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });
  }

  /* ======================================================== */
  /* FAQ ACCORDION                                             */
  /* ======================================================== */
  if (faqList) {
    faqList.querySelectorAll('.faq-item').forEach(item => {
      const btn = item.querySelector('.faq-q');
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        faqList.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  /* ======================================================== */
  /* SMOOTH NAV SCROLL                                         */
  /* ======================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const offset = id === 'home' ? 0 : target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });

  /* ======================================================== */
  /* ACTIVE NAV HIGHLIGHT                                      */
  /* ======================================================== */
  const sections = ['home','layanan','portfolio','kategori','harga','faq','kontak','pesan'];
  const navAs = document.querySelectorAll('.nav-links a[data-nav]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && window.scrollY >= el.offsetTop - 100) current = id;
    });
    navAs.forEach(a => {
      a.classList.toggle('active-nav', a.dataset.nav === current);
    });
  }, { passive: true });

  /* add active style */
  const style = document.createElement('style');
  style.textContent = '.nav-links a.active-nav{color:#fff!important}';
  document.head.appendChild(style);

  /* ======================================================== */
  /* SCROLL PROGRESS BAR                                       */
  /* ======================================================== */
  const scrollProg = document.getElementById('scrollProgress');
  if (scrollProg) {
    window.addEventListener('scroll', () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProg.style.width = (maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0) + '%';
    }, { passive: true });
  }

  /* ======================================================== */
  /* TYPED TEXT HERO                                           */
  /* ======================================================== */
  const typedEl = document.getElementById('heroTyped');
  if (typedEl) {
    const phrases = ['Bisnis Anda', 'UMKM Anda', 'Brand Anda', 'Restoran Anda', 'Startup Anda'];
    let pi = 0, ci = 0, del = false;
    function tick() {
      const p = phrases[pi];
      typedEl.textContent = del ? p.slice(0, --ci) : p.slice(0, ++ci);
      if (!del && ci >= p.length) { del = true; setTimeout(tick, 2400); return; }
      if ( del && ci <= 0)        { del = false; pi = (pi + 1) % phrases.length; setTimeout(tick, 300); return; }
      setTimeout(tick, del ? 48 : 85);
    }
    setTimeout(tick, 1500);
  }

  /* ======================================================== */
  /* BACK TO TOP                                               */
  /* ======================================================== */
  const backTopBtn = document.getElementById('backTop');
  if (backTopBtn) {
    window.addEventListener('scroll', () => {
      backTopBtn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    backTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ======================================================== */
  /* INIT                                                      */
  /* ======================================================== */
  renderPortfolio();
})();
