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
  function buildCardPreview(tpl) {
    const p = tpl.primary, s = tpl.secondary || '#0D0D0D', a = tpl.accent || tpl.primary;
    const mn = (tpl.menu || ['Item 1','Item 2','Item 3','Item 4']).slice(0,4);
    let inner = '';

    if (tpl.style === 'gastro') {
      inner = `<div style="background:${s};width:100%;height:100%;position:relative;overflow:hidden;font-family:sans-serif">
        <div style="position:absolute;top:-15%;left:50%;width:120%;padding-top:80%;border-radius:50%;background:radial-gradient(circle,${p}18 0%,transparent 65%);transform:translateX(-50%)"></div>
        <div style="position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 80px,rgba(255,255,255,.018) 80px,rgba(255,255,255,.018) 81px),repeating-linear-gradient(90deg,transparent,transparent 80px,rgba(255,255,255,.018) 80px,rgba(255,255,255,.018) 81px)"></div>
        <div style="height:72px;background:rgba(26,18,8,.94);border-bottom:1px solid ${p}22;display:flex;align-items:center;padding:0 60px;gap:14px;position:relative;z-index:1;flex-shrink:0">
          <div style="width:11px;height:11px;border-radius:50%;background:#FF5F57"></div><div style="width:11px;height:11px;border-radius:50%;background:#FFBD2E"></div><div style="width:11px;height:11px;border-radius:50%;background:#28CA41"></div>
          <img src="assets/websiteku-logo.png" style="height:24px;opacity:.78;margin-left:22px">
          <div style="display:flex;gap:28px;margin-left:auto;align-items:center">
            <span style="font-size:12px;color:${p}55;letter-spacing:.18em;text-transform:uppercase">Menu</span>
            <span style="font-size:12px;color:${p}55;letter-spacing:.18em;text-transform:uppercase">Tentang</span>
            <div style="font-size:12px;color:${p};border:1px solid ${p}44;padding:5px 18px;letter-spacing:.14em;text-transform:uppercase">Reservasi</div>
          </div>
        </div>
        <div style="padding:88px 60px 44px;position:relative;z-index:1">
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:26px"><div style="width:48px;height:1px;background:${p}"></div><span style="font-size:12px;color:${p};letter-spacing:.28em;text-transform:uppercase">Fine Dining Experience</span></div>
          <div style="font-size:84px;font-weight:300;color:#fff;line-height:1.05;letter-spacing:-.02em;margin-bottom:24px;max-width:760px;font-family:Georgia,serif">Di Sini, Makan Malam<br>Bertransformasi <span style="color:${p};font-style:italic">Menjadi Seni</span></div>
          <p style="font-size:19px;color:rgba(232,213,163,.5);max-width:500px;line-height:1.7;margin-bottom:36px;font-weight:300">Pengalaman kuliner eksklusif dengan bahan finest ingredient dan chef bertaraf internasional.</p>
          <div style="display:flex;gap:14px">
            <div style="background:${p};color:${s};font-size:13px;font-weight:700;padding:15px 38px;letter-spacing:.14em;text-transform:uppercase">Buat Reservasi</div>
            <div style="border:1px solid rgba(232,213,163,.25);color:rgba(232,213,163,.65);font-size:13px;padding:15px 38px;letter-spacing:.12em;text-transform:uppercase">Lihat Menu</div>
          </div>
        </div>
        <div style="background:${p};height:38px;display:flex;align-items:center;padding:0 24px;overflow:hidden;position:relative;z-index:1"><span style="font-size:12px;font-weight:800;letter-spacing:.2em;color:${s};text-transform:uppercase;white-space:nowrap">WAGYU A5 ✦ LOBSTER THERMIDOR ✦ FOIE GRAS POÊLÉ ✦ TRUFFLE RISOTTO ✦ PRIVATE DINING ✦ CHEF INTERNASIONAL ✦</span></div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;background:${p}18;position:relative;z-index:1">
          ${mn.map((m,i) => `<div style="background:${s};padding:26px 20px"><div style="font-size:12px;color:${p}44;margin-bottom:5px;font-style:italic;font-family:Georgia,serif">0${i+1}</div><div style="font-size:22px;font-weight:300;color:#fff;margin-bottom:5px;font-family:Georgia,serif;line-height:1.2">${m}</div><div style="font-size:11px;color:rgba(232,213,163,.32);margin-bottom:9px">Finest quality ingredient</div><div style="font-size:11px;color:${p}">Market Price →</div></div>`).join('')}
        </div>
      </div>`;
    } else if (tpl.style === 'aether') {
      inner = `<div style="background:${s};width:100%;height:100%;position:relative;overflow:hidden;font-family:sans-serif">
        <div style="position:absolute;top:-10%;right:-15%;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,${p}12 0%,transparent 65%)"></div>
        <div style="height:70px;background:rgba(26,29,38,.94);border-bottom:1px solid ${p}15;display:flex;align-items:center;padding:0 60px;gap:14px;position:relative;z-index:1">
          <div style="width:10px;height:10px;border-radius:50%;background:#FF5F57"></div><div style="width:10px;height:10px;border-radius:50%;background:#FFBD2E"></div><div style="width:10px;height:10px;border-radius:50%;background:#28CA41"></div>
          <img src="assets/websiteku-logo.png" style="height:22px;opacity:.78;margin-left:20px">
          <div style="display:flex;gap:28px;margin-left:auto;align-items:center">
            <span style="font-size:12px;color:${p}55;letter-spacing:.16em;text-transform:uppercase">Properti</span>
            <span style="font-size:12px;color:${p}55;letter-spacing:.16em;text-transform:uppercase">Tentang</span>
            <div style="font-size:12px;color:${p};border:1px solid ${p}44;padding:5px 18px;letter-spacing:.12em;text-transform:uppercase">Konsultasi</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;min-height:600px;position:relative;z-index:1">
          <div style="padding:72px 44px 44px 60px">
            <div style="font-size:12px;color:${p};letter-spacing:.28em;text-transform:uppercase;margin-bottom:26px;display:flex;align-items:center;gap:12px"><div style="width:28px;height:1px;background:${p}"></div>Premium Living</div>
            <div style="font-size:66px;font-weight:400;color:#fff;line-height:1.1;letter-spacing:-.02em;margin-bottom:22px;font-family:Georgia,serif">Ruang Hidup<br>yang <span style="color:${p};font-style:italic">Mendefinisikan</span><br>Kemewahan</div>
            <div style="display:flex;gap:32px;margin-bottom:26px;padding-bottom:22px;border-bottom:1px solid ${p}14">
              <div><div style="font-size:34px;font-weight:400;color:${p};font-family:Georgia,serif">500+</div><div style="font-size:11px;color:rgba(212,196,168,.4);letter-spacing:.1em;text-transform:uppercase;margin-top:3px">Unit Terjual</div></div>
              <div><div style="font-size:34px;font-weight:400;color:${p};font-family:Georgia,serif">98%</div><div style="font-size:11px;color:rgba(212,196,168,.4);letter-spacing:.1em;text-transform:uppercase;margin-top:3px">Kepuasan</div></div>
              <div><div style="font-size:34px;font-weight:400;color:${p};font-family:Georgia,serif">15+</div><div style="font-size:11px;color:rgba(212,196,168,.4);letter-spacing:.1em;text-transform:uppercase;margin-top:3px">Tahun</div></div>
            </div>
            <div style="display:flex;gap:12px">
              <div style="background:${p};color:${s};font-size:12px;font-weight:700;padding:13px 30px;letter-spacing:.12em;text-transform:uppercase">Konsultasi Gratis</div>
              <div style="border:1px solid rgba(212,196,168,.2);color:rgba(212,196,168,.6);font-size:12px;padding:13px 30px;letter-spacing:.1em;text-transform:uppercase">Lihat Properti</div>
            </div>
          </div>
          <div style="position:relative;overflow:hidden">
            <img src="assets/foto-produk-1.png" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:brightness(.85)">
            <div style="position:absolute;inset:0;background:linear-gradient(90deg,${s} 0%,transparent 28%)"></div>
          </div>
        </div>
        <div style="background:${p};height:38px;display:flex;align-items:center;padding:0 24px;overflow:hidden"><span style="font-size:12px;font-weight:800;letter-spacing:.2em;color:${s};text-transform:uppercase;white-space:nowrap">PENTHOUSE SUITE ◆ GARDEN VILLA ◆ SKY RESIDENCE ◆ DUPLEX TOWER ◆ LUXURY LIVING ◆ PREMIUM PROPERTY ◆</span></div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:2px;background:${p}14">
          ${mn.map((m,i) => `<div style="background:${s};padding:0"><div style="aspect-ratio:4/3;overflow:hidden;position:relative"><img src="assets/foto-produk-${i+1}.png" style="width:100%;height:100%;object-fit:cover;filter:brightness(.75)"><div style="position:absolute;inset:0;background:linear-gradient(0deg,rgba(26,29,38,.8) 0%,transparent 55%)"></div><div style="position:absolute;bottom:10px;left:12px"><div style="font-size:10px;color:${p};letter-spacing:.08em;text-transform:uppercase">${['Penthouse','Villa','Apartemen','Duplex'][i%4]}</div><div style="font-size:15px;font-weight:400;color:#fff;font-family:Georgia,serif">${m}</div></div></div></div>`).join('')}
        </div>
      </div>`;
    } else if (tpl.style === 'lumina') {
      inner = `<div style="background:linear-gradient(135deg,#050A1A 0%,#0A0520 40%,#020B18 100%);width:100%;height:100%;position:relative;overflow:hidden;font-family:sans-serif">
        <div style="position:absolute;top:-15%;right:-10%;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,${p}20 0%,transparent 65%)"></div>
        <div style="position:absolute;bottom:-20%;left:-10%;width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,${s}18 0%,transparent 65%)"></div>
        <div style="position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(0,197,215,.025) 60px,rgba(0,197,215,.025) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(0,197,215,.025) 60px,rgba(0,197,215,.025) 61px)"></div>
        <div style="height:70px;background:rgba(5,10,26,.88);border-bottom:1px solid ${p}10;display:flex;align-items:center;padding:0 60px;gap:14px;position:relative;z-index:1">
          <div style="width:10px;height:10px;border-radius:50%;background:#FF5F57"></div><div style="width:10px;height:10px;border-radius:50%;background:#FFBD2E"></div><div style="width:10px;height:10px;border-radius:50%;background:#28CA41"></div>
          <img src="assets/websiteku-logo.png" style="height:22px;opacity:.82;margin-left:20px">
          <div style="display:flex;gap:26px;margin-left:auto;align-items:center">
            <span style="font-size:12px;color:rgba(224,249,255,.38);letter-spacing:.14em;text-transform:uppercase">Layanan</span>
            <span style="font-size:12px;color:rgba(224,249,255,.38);letter-spacing:.14em;text-transform:uppercase">Dokter</span>
            <div style="font-size:12px;color:#fff;background:linear-gradient(135deg,${p},${s});padding:5px 18px;border-radius:50px;font-weight:600">Konsultasi Gratis</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;padding:66px 60px 44px;position:relative;z-index:1">
          <div>
            <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(0,197,215,.1);border:1px solid rgba(0,197,215,.2);border-radius:50px;padding:6px 16px;font-size:11px;color:${p};font-weight:600;margin-bottom:26px"><div style="width:6px;height:6px;border-radius:50%;background:${p}"></div>Klinik Kecantikan Premium #1</div>
            <div style="font-size:68px;font-weight:800;color:#fff;line-height:1.05;letter-spacing:-.03em;margin-bottom:22px">Di Mana Ilmu<br><span style="background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Pengetahuan</span><br>Bertemu Keindahan</div>
            <p style="font-size:18px;color:rgba(224,249,255,.44);max-width:440px;line-height:1.75;margin-bottom:30px;font-weight:300">Perawatan estetika tingkat lanjut yang aman dan efektif — ditangani dokter spesialis bersertifikasi.</p>
            <div style="display:flex;gap:12px">
              <div style="background:linear-gradient(135deg,${p},${s});color:#fff;font-size:13px;font-weight:600;padding:13px 32px;border-radius:50px">Konsultasi Sekarang</div>
              <div style="background:rgba(255,255,255,.06);border:1px solid rgba(0,197,215,.2);color:rgba(224,249,255,.65);font-size:13px;padding:13px 32px;border-radius:50px">Lihat Layanan</div>
            </div>
          </div>
          <div style="position:relative;padding-left:46px">
            <div style="border-radius:22px;overflow:hidden;aspect-ratio:4/5;position:relative;border:1px solid ${p}10"><img src="assets/foto-produk-1.png" style="width:100%;height:100%;object-fit:cover"><div style="position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(5,10,26,.6) 100%)"></div></div>
            <div style="position:absolute;bottom:-10px;left:22px;background:rgba(5,10,26,.92);border:1px solid ${p}18;border-radius:14px;padding:14px 18px"><div style="font-size:28px;font-weight:800;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1">5K+</div><div style="font-size:11px;color:rgba(224,249,255,.4);margin-top:3px">Klien Puas</div></div>
          </div>
        </div>
        <div style="padding:20px 60px 0;position:relative;z-index:1"><div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px">
          ${mn.map((m,i) => `<div style="background:rgba(255,255,255,.03);border:1px solid ${p}12;border-radius:14px;padding:18px 14px"><div style="font-size:22px;margin-bottom:8px">${['💫','💉','✨','💧'][i%4]}</div><div style="font-size:15px;font-weight:700;color:#fff;margin-bottom:4px">${m}</div><span style="font-size:10px;background:${p}15;color:${p};border-radius:50px;padding:2px 9px">Tersedia</span></div>`).join('')}
        </div></div>
      </div>`;
    } else if (tpl.style === 'nexus') {
      inner = `<div style="background:#030711;width:100%;height:100%;position:relative;overflow:hidden;font-family:sans-serif">
        <div style="position:absolute;top:-20%;left:-15%;width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,${s}22 0%,transparent 60%)"></div>
        <div style="position:absolute;bottom:-10%;right:-10%;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,${p}12 0%,transparent 65%)"></div>
        <div style="position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(34,211,238,.03) 40px,rgba(34,211,238,.03) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(34,211,238,.03) 40px,rgba(34,211,238,.03) 41px)"></div>
        <div style="height:70px;background:rgba(3,7,17,.92);border-bottom:1px solid ${p}10;display:flex;align-items:center;padding:0 60px;gap:14px;position:relative;z-index:1">
          <div style="width:10px;height:10px;border-radius:50%;background:#FF5F57"></div><div style="width:10px;height:10px;border-radius:50%;background:#FFBD2E"></div><div style="width:10px;height:10px;border-radius:50%;background:#28CA41"></div>
          <img src="assets/websiteku-logo.png" style="height:22px;opacity:.82;margin-left:20px">
          <div style="display:flex;gap:28px;margin-left:auto;align-items:center">
            <span style="font-size:12px;color:rgba(203,213,225,.38);letter-spacing:.14em;text-transform:uppercase">Layanan</span>
            <span style="font-size:12px;color:rgba(203,213,225,.38);letter-spacing:.14em;text-transform:uppercase">Klien</span>
            <div style="font-size:12px;color:${p};border:1px solid ${p}44;border-radius:4px;padding:5px 18px;letter-spacing:.1em;text-transform:uppercase">Konsultasi →</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:48px;padding:66px 60px 36px;position:relative;z-index:1">
          <div>
            <div style="display:inline-flex;align-items:center;gap:8px;background:rgba(34,211,238,.08);border:1px solid rgba(34,211,238,.15);border-radius:4px;padding:5px 12px;font-size:11px;font-weight:700;letter-spacing:.15em;color:${p};text-transform:uppercase;margin-bottom:26px"><div style="width:5px;height:5px;background:${p};border-radius:50%"></div>Digital Agency · Est. 2018</div>
            <div style="font-size:76px;font-weight:700;color:#fff;line-height:1.04;letter-spacing:-.04em;margin-bottom:20px">Kami<br>Membangun<br><span style="color:${p};text-shadow:0 0 28px ${p}55">Masa Depan</span><br>Digital Anda</div>
            <p style="font-size:16px;color:rgba(203,213,225,.44);max-width:420px;line-height:1.8;margin-bottom:28px">Dari product design hingga AI engineering — solusi end-to-end untuk bisnis digital.</p>
            <div style="display:flex;gap:12px;margin-bottom:24px">
              <div style="background:${p};color:#030711;font-size:13px;font-weight:700;padding:13px 30px;border-radius:4px;box-shadow:0 0 18px ${p}44">Mulai Project →</div>
              <div style="border:1px solid rgba(34,211,238,.25);color:rgba(203,213,225,.65);font-size:13px;padding:13px 30px;border-radius:4px">Lihat Layanan</div>
            </div>
            <div style="display:flex;gap:22px">
              <div style="border-left:1px solid ${p}33;padding-left:13px"><div style="font-size:20px;font-weight:700;color:${p}">150+</div><div style="font-size:10px;color:rgba(203,213,225,.3);letter-spacing:.05em">Project</div></div>
              <div style="border-left:1px solid ${p}33;padding-left:13px"><div style="font-size:20px;font-weight:700;color:${p}">98%</div><div style="font-size:10px;color:rgba(203,213,225,.3);letter-spacing:.05em">On-time</div></div>
              <div style="border-left:1px solid ${p}33;padding-left:13px"><div style="font-size:20px;font-weight:700;color:${p}">5★</div><div style="font-size:10px;color:rgba(203,213,225,.3);letter-spacing:.05em">Rating</div></div>
            </div>
          </div>
          <div><div style="background:rgba(3,7,17,.95);border:1px solid rgba(34,211,238,.15);border-radius:8px;padding:20px;font-family:monospace">
            <div style="display:flex;align-items:center;gap:7px;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid rgba(34,211,238,.08)"><div style="width:9px;height:9px;border-radius:50%;background:#FF5F57"></div><div style="width:9px;height:9px;border-radius:50%;background:#FFBD2E"></div><div style="width:9px;height:9px;border-radius:50%;background:#28CA41"></div><span style="font-size:10px;color:rgba(203,213,225,.3);margin-left:5px">nexus_digital.sh</span></div>
            <div style="font-size:14px;color:rgba(203,213,225,.35);margin-bottom:7px"><span style="color:${p}">$ </span><span style="color:#86EFAC">init_project</span> <span style="color:${a}">--client="YourBrand"</span></div>
            <div style="font-size:14px;color:#86EFAC;margin-bottom:6px">✓ Repository created</div>
            <div style="font-size:14px;color:#86EFAC;margin-bottom:6px">✓ Tech stack configured</div>
            <div style="font-size:14px;color:#86EFAC;margin-bottom:6px">✓ AI modules loaded</div>
            <div style="font-size:14px;color:rgba(203,213,225,.35);margin-bottom:7px"><span style="color:${p}">$ </span><span style="color:#86EFAC">deploy</span> <span style="color:${a}">--env=production</span></div>
            <div style="font-size:14px;color:${a};margin-bottom:7px">⚡ Build: 1.2s · Perf: 99/100</div>
            <div style="font-size:14px;color:rgba(203,213,225,.35)"><span style="color:${p}">$ </span><span style="background:${p};color:#030711;padding:0 2px">_</span></div>
          </div></div>
        </div>
        <div style="padding:0 60px 24px;position:relative;z-index:1;display:flex;gap:8px;align-items:center;flex-wrap:wrap">
          <span style="font-size:10px;color:rgba(203,213,225,.22);letter-spacing:.15em;text-transform:uppercase;margin-right:8px">Tech Stack</span>
          ${['React','Next.js','Node.js','Python','AWS','Docker','TensorFlow'].map(t => `<span style="background:rgba(34,211,238,.06);border:1px solid rgba(34,211,238,.12);border-radius:4px;padding:3px 9px;font-size:11px;color:rgba(203,213,225,.45)">${t}</span>`).join('')}
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:rgba(34,211,238,.08);position:relative;z-index:1">
          ${mn.map((m,i) => `<div style="background:#030711;padding:20px 16px"><div style="font-size:10px;font-weight:700;letter-spacing:.18em;color:${p}44;margin-bottom:10px;text-transform:uppercase">0${i+1}</div><div style="width:34px;height:34px;border:1px solid ${p}22;border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:15px;margin-bottom:9px">${['🌐','🤖','☁️','🎨'][i%4]}</div><div style="font-size:16px;font-weight:600;color:#fff;margin-bottom:4px">${m}</div><span style="font-size:11px;font-weight:600;color:${p};letter-spacing:.05em">Pelajari →</span></div>`).join('')}
        </div>
      </div>`;
    } else {
      inner = `<div style="background:#060609;width:100%;height:100%;position:relative;overflow:hidden;font-family:sans-serif">
        <div style="position:absolute;top:20%;right:25%;width:700px;height:500px;background:radial-gradient(ellipse,${p}14 0%,transparent 65%)"></div>
        <div style="height:70px;background:rgba(6,6,9,.94);border-bottom:1px solid rgba(139,92,246,.1);display:flex;align-items:center;padding:0 60px;gap:14px;position:relative;z-index:1">
          <div style="width:10px;height:10px;border-radius:50%;background:#FF5F57"></div><div style="width:10px;height:10px;border-radius:50%;background:#FFBD2E"></div><div style="width:10px;height:10px;border-radius:50%;background:#28CA41"></div>
          <img src="assets/websiteku-logo.png" style="height:22px;opacity:.82;margin-left:20px">
          <div style="display:flex;gap:28px;margin-left:auto;align-items:center">
            <span style="font-size:12px;color:rgba(212,212,216,.32);letter-spacing:.14em;text-transform:uppercase">Layanan</span>
            <span style="font-size:12px;color:rgba(212,212,216,.32);letter-spacing:.14em;text-transform:uppercase">Tentang</span>
            <div style="font-size:12px;color:#fff;background:linear-gradient(135deg,${p},${s});padding:5px 18px;border-radius:6px;font-weight:700">Konsultasi →</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:44px;padding:66px 60px 36px;position:relative;z-index:1;align-items:center">
          <div>
            <div style="font-size:12px;font-weight:700;letter-spacing:.28em;text-transform:uppercase;color:${p};margin-bottom:26px;display:flex;align-items:center;gap:10px"><div style="width:20px;height:1px;background:${p}"></div>Premium Business Solutions</div>
            <div style="font-size:72px;font-weight:800;color:#fff;line-height:1.02;letter-spacing:-.04em;margin-bottom:20px">Bisnis Anda<br>Layak Tampil<br>di <span style="background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Level<br>Tertinggi</span></div>
            <p style="font-size:17px;color:rgba(212,212,216,.4);max-width:420px;line-height:1.8;margin-bottom:28px">Platform digital yang memposisikan brand Anda sebagai pemimpin industri.</p>
            <div style="display:flex;gap:12px;margin-bottom:26px">
              <div style="background:linear-gradient(135deg,${p},${s});color:#fff;font-size:13px;font-weight:700;padding:13px 30px;border-radius:8px">Konsultasi Gratis</div>
              <div style="border:1px solid rgba(139,92,246,.25);color:rgba(212,212,216,.6);font-size:13px;padding:13px 30px;border-radius:8px">Lihat Layanan</div>
            </div>
            <div style="display:flex;gap:24px;padding-top:18px;border-top:1px solid rgba(139,92,246,.1)">
              <div><div style="font-size:24px;font-weight:800;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">500+</div><div style="font-size:10px;color:rgba(212,212,216,.28);margin-top:2px">Klien Aktif</div></div>
              <div><div style="font-size:24px;font-weight:800;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">8M+</div><div style="font-size:10px;color:rgba(212,212,216,.28);margin-top:2px">Revenue</div></div>
              <div><div style="font-size:24px;font-weight:800;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">4.9★</div><div style="font-size:10px;color:rgba(212,212,216,.28);margin-top:2px">Rating</div></div>
            </div>
          </div>
          <div>
            <div style="border-radius:16px;overflow:hidden;aspect-ratio:4/5;position:relative;border:1px solid rgba(139,92,246,.12)"><img src="assets/foto-produk-1.png" style="width:100%;height:100%;object-fit:cover"><div style="position:absolute;inset:0;background:linear-gradient(135deg,${p}12,${s}08)"></div></div>
            <div style="background:rgba(6,6,9,.95);border:1px solid rgba(139,92,246,.2);border-radius:12px;padding:13px 15px;margin-top:-26px;position:relative;z-index:1;margin-right:16px">
              <div style="font-size:13px;font-weight:700;color:#fff;margin-bottom:2px">Business Growth</div>
              <div style="font-size:11px;color:rgba(212,212,216,.38)">Q4 2025 · ROI +240%</div>
              <div style="height:3px;background:rgba(139,92,246,.14);border-radius:2px;margin-top:7px;overflow:hidden"><div style="height:100%;width:78%;background:linear-gradient(90deg,${p},${s});border-radius:2px"></div></div>
            </div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:16px 60px 24px;position:relative;z-index:1">
          ${mn.map((m,i) => `<div style="background:rgba(255,255,255,.025);border:1px solid rgba(139,92,246,.1);border-radius:14px;padding:18px 14px"><div style="font-size:24px;margin-bottom:9px">${['💡','📣','📊','🚀'][i%4]}</div><div style="font-size:15px;font-weight:700;color:#fff;margin-bottom:4px;letter-spacing:-.02em">${m}</div><span style="font-size:11px;font-weight:700;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Pelajari →</span></div>`).join('')}
        </div>
      </div>`;
    }

    return `<div class="sc-mock" style="width:1200px;height:1200px;transform:scale(0.3);transform-origin:top left;overflow:hidden">${inner}</div>`;
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
    if (portfolioEmpty) portfolioEmpty.style.display = filtered.length === 0 ? 'block' : 'none';

    filtered.forEach((tpl, idx) => {
      const card = document.createElement('div');
      card.className = 'sc-card';
      card.style.cssText = `--sc-accent:${tpl.primary};animation-delay:${idx * 0.08}s`;
      card.innerHTML = `
        <div class="sc-thumb">
          <div class="sc-thumb-inner">${buildCardPreview(tpl)}</div>
          <div class="sc-hover-layer">
            <button class="sc-hover-btn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              Lihat Tampilan Contoh
            </button>
          </div>
        </div>
        <div class="sc-body">
          <div class="sc-meta">
            <span class="sc-cat" style="color:${tpl.primary}">${tpl.catName}</span>
            <span class="sc-badge">✦ Premium</span>
          </div>
          <h3 class="sc-name">${tpl.name}</h3>
          <p class="sc-desc">${tpl.description}</p>
          <div class="sc-actions">
            <button class="sc-btn-preview">Lihat Tampilan Contoh →</button>
            <button class="sc-btn-order" title="Pesan via WhatsApp">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.115 1.527 5.843L.057 23.143a.75.75 0 0 0 .9.9l5.3-1.47A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 0 1-5.088-1.396l-.364-.217-3.146.872.839-3.067-.236-.375A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
            </button>
          </div>
        </div>`;

      card.querySelector('.sc-hover-btn').addEventListener('click', e => { e.stopPropagation(); openPreview(tpl); });
      card.querySelector('.sc-btn-preview').addEventListener('click', e => { e.stopPropagation(); openPreview(tpl); });
      card.querySelector('.sc-btn-order').addEventListener('click', e => { e.stopPropagation(); orderTemplate(tpl); });
      card.addEventListener('click', () => openPreview(tpl));
      portfolioGrid.appendChild(card);
    });
  }

  /* ======================================================== */
  /* FILTER & SEARCH (optional — elements may not exist)      */
  /* ======================================================== */
  if (filterTabs) {
    filterTabs.addEventListener('click', e => {
      const tab = e.target.closest('.filter-tab');
      if (!tab) return;
      filterTabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCat = tab.dataset.cat;
      renderPortfolio();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value;
      if (clearSearch) clearSearch.style.display = searchQuery ? 'block' : 'none';
      renderPortfolio();
    });
  }

  if (clearSearch) {
    clearSearch.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchQuery = '';
      clearSearch.style.display = 'none';
      renderPortfolio();
    });
  }

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

    const newTabBtn = document.getElementById('previewNewTab');
    if (newTabBtn) {
      newTabBtn.onclick = () => {
        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        setTimeout(() => URL.revokeObjectURL(url), 60000);
      };
    }
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
