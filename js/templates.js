/* ============================================================
   WebsiteKu — Template Generators (10 style functions)
   Each returns a complete self-contained HTML string for iframe preview
   ============================================================ */

function generateTemplateHTML(tpl) {
  switch (tpl.style) {
    case 'minimalist':    return tmplMinimalist(tpl);
    case 'corporate':     return tmplCorporate(tpl);
    case 'luxury':        return tmplLuxury(tpl);
    case 'dark':          return tmplDark(tpl);
    case 'glassmorphism': return tmplGlassmorphism(tpl);
    case 'neon':          return tmplNeon(tpl);
    case 'startup':       return tmplStartup(tpl);
    case 'elegant':       return tmplElegant(tpl);
    case 'futuristic':    return tmplFuturistic(tpl);
    case 'premium':       return tmplPremium(tpl);
    default:              return tmplStartup(tpl);
  }
}

/* ============================================================ */
/* 1. MINIMALIST                                                 */
/* ============================================================ */
function tmplMinimalist(t) {
  const p = t.primary, s = t.secondary, a = t.accent;
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}body{font-family:'DM Sans',sans-serif;background:#FAFAFA;color:#1A1A1A;line-height:1.6}
a{color:inherit;text-decoration:none}
nav{position:sticky;top:0;background:#fff;border-bottom:1px solid #E5E5E5;z-index:100;padding:1.2rem 2rem;display:flex;align-items:center;justify-content:space-between}
.logo{font-size:1.2rem;font-weight:700;letter-spacing:-.02em;color:#000}.logo span{color:${p}}
.nav-links{display:flex;gap:2rem}.nav-links a{font-size:.9rem;font-weight:500;color:#555;transition:color .2s}.nav-links a:hover{color:#000}
.nav-cta{padding:.5rem 1.2rem;border:1.5px solid #000;border-radius:6px;font-size:.85rem;font-weight:600;color:#000;transition:all .2s}
.nav-cta:hover{background:#000;color:#fff}
.hero{min-height:90vh;display:flex;align-items:center;padding:5rem 2rem;max-width:1100px;margin:0 auto}
.hero-left{flex:1;max-width:560px}
.tag{display:inline-block;background:${s};color:${p};font-size:.8rem;font-weight:600;padding:.3rem .8rem;border-radius:4px;margin-bottom:1.5rem;letter-spacing:.05em;text-transform:uppercase}
.hero-left h1{font-size:clamp(2.2rem,5vw,3.8rem);font-weight:700;line-height:1.15;letter-spacing:-.03em;margin-bottom:1.2rem}
.hero-left p{font-size:1.05rem;color:#666;margin-bottom:2rem;line-height:1.7}
.btn-row{display:flex;gap:1rem}
.btn-solid{padding:.85rem 2rem;background:#000;color:#fff;border-radius:8px;font-weight:600;font-size:.95rem;transition:transform .2s}
.btn-solid:hover{transform:translateY(-2px)}
.btn-ghost{padding:.85rem 2rem;border:1.5px solid #ccc;border-radius:8px;font-weight:500;font-size:.95rem;color:#333;transition:all .2s}
.btn-ghost:hover{border-color:#000;color:#000}
.hero-right{flex:1;display:flex;justify-content:center;align-items:center;padding-left:3rem}
.hero-img{width:100%;max-width:420px;aspect-ratio:4/3;background:linear-gradient(135deg,${s} 0%,${p}22 100%);border-radius:16px;display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative}
.hero-img-inner{text-align:center;padding:2rem}
.hero-img h3{font-size:1.8rem;font-weight:300;color:${p};letter-spacing:.1em}
.hero-img p{font-size:.85rem;color:#666;margin-top:.5rem}
.img-shape{position:absolute;width:200px;height:200px;border-radius:50%;background:${p}11;bottom:-50px;right:-50px}
.stats{border-top:1px solid #E5E5E5;border-bottom:1px solid #E5E5E5;padding:2.5rem 2rem;display:flex;gap:0;max-width:1100px;margin:0 auto}
.stat{flex:1;text-align:center;padding:0 2rem;border-right:1px solid #E5E5E5}.stat:last-child{border-right:none}
.stat-n{font-size:2.2rem;font-weight:700;color:${p}}.stat-l{font-size:.85rem;color:#888;margin-top:.3rem}
.services{padding:5rem 2rem;max-width:1100px;margin:0 auto}
.services h2{font-size:2.2rem;font-weight:700;letter-spacing:-.02em;margin-bottom:.5rem}
.services .sub{color:#777;margin-bottom:3rem}
.s-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.5rem}
.s-card{border:1px solid #E5E5E5;border-radius:12px;padding:2rem;transition:all .2s}
.s-card:hover{border-color:${p};transform:translateY(-3px);box-shadow:0 8px 30px rgba(0,0,0,.07)}
.s-num{font-size:2.5rem;font-weight:700;color:${p}22;margin-bottom:1rem;font-variant-numeric:tabular-nums}
.s-card h3{font-size:1rem;font-weight:700;margin-bottom:.5rem}.s-card p{font-size:.88rem;color:#666;line-height:1.6}
.menu-sec{background:#f5f5f5;padding:5rem 2rem}
.menu-inner{max-width:1100px;margin:0 auto}
.menu-inner h2{font-size:2rem;font-weight:700;letter-spacing:-.02em;margin-bottom:2.5rem}
.menu-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem}
.menu-item{background:#fff;border-radius:10px;padding:1.5rem;display:flex;align-items:center;gap:1rem}
.menu-dot{width:10px;height:10px;background:${p};border-radius:50%;flex-shrink:0}
.menu-item span{font-weight:500;font-size:.95rem}
footer{background:#111;color:#fff;padding:3rem 2rem;text-align:center}
footer .fl{font-size:1.2rem;font-weight:700;margin-bottom:.5rem}footer p{color:#888;font-size:.85rem}
footer .fc{color:${p}}
@media(max-width:768px){.hero{flex-direction:column;min-height:auto;padding:4rem 1.5rem;gap:2rem}.hero-right{padding-left:0;width:100%}.stats{flex-wrap:wrap}.stat{border-right:none;border-bottom:1px solid #E5E5E5;padding:1.5rem 2rem}}
</style></head>
<body>
<nav>
  <div class="logo">Website<span>Ku</span></div>
  <div class="nav-links"><a href="#">Home</a><a href="#">Tentang</a><a href="#">Menu</a><a href="#">Kontak</a></div>
  <a href="#" class="nav-cta">Hubungi Kami</a>
</nav>
<section class="hero">
  <div class="hero-left">
    <div class="tag">${t.catName}</div>
    <h1>${t.headline}</h1>
    <p>${t.sub}</p>
    <div class="btn-row">
      <a href="#" class="btn-solid">Lihat Menu</a>
      <a href="#" class="btn-ghost">Hubungi Kami</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hero-img">
      <div class="img-shape"></div>
      <div class="hero-img-inner">
        <h3>${t.name.replace('WebsiteKu ','')}</h3>
        <p>Professional Website</p>
      </div>
    </div>
  </div>
</section>
<div class="stats">
  <div class="stat"><div class="stat-n">5+</div><div class="stat-l">Tahun Pengalaman</div></div>
  <div class="stat"><div class="stat-n">2K+</div><div class="stat-l">Pelanggan Puas</div></div>
  <div class="stat"><div class="stat-n">98%</div><div class="stat-l">Rating Bintang 5</div></div>
  <div class="stat"><div class="stat-n">24/7</div><div class="stat-l">Layanan Tersedia</div></div>
</div>
<section class="services">
  <h2>Layanan Unggulan</h2>
  <p class="sub">Kami menyediakan layanan terbaik untuk kepuasan Anda.</p>
  <div class="s-grid">
    ${t.menu.map((m,i)=>`<div class="s-card"><div class="s-num">0${i+1}</div><h3>${m}</h3><p>Layanan ${m} premium dengan standar kualitas tertinggi dan pelayanan terbaik.</p></div>`).join('')}
  </div>
</section>
<section class="menu-sec">
  <div class="menu-inner">
    <h2>Pilihan Kami</h2>
    <div class="menu-grid">
      ${t.menu.map(m=>`<div class="menu-item"><div class="menu-dot"></div><span>${m}</span></div>`).join('')}
    </div>
  </div>
</section>
<footer>
  <div class="fl">Website<span class="fc">Ku</span></div>
  <p>© 2025 ${t.name}. Semua hak dilindungi.</p>
</footer>
</body></html>`;
}

/* ============================================================ */
/* 2. CORPORATE                                                  */
/* ============================================================ */
function tmplCorporate(t) {
  const p = t.primary, s = t.secondary, a = t.accent;
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}body{font-family:'Inter',sans-serif;background:#fff;color:#1E293B;line-height:1.6}
nav{background:${p};padding:1rem 2rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.logo{font-size:1.3rem;font-weight:800;color:#fff}.logo span{opacity:.8}
.nav-links{display:flex;gap:1.5rem}.nav-links a{color:rgba(255,255,255,.8);font-size:.88rem;font-weight:500;transition:color .2s}.nav-links a:hover{color:#fff}
.nav-cta{background:#fff;color:${p};padding:.5rem 1.2rem;border-radius:6px;font-size:.85rem;font-weight:700;transition:all .2s}
.hero{background:linear-gradient(135deg,${p} 0%,${s} 100%);padding:5rem 2rem;color:#fff}
.hero-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;gap:4rem}
.hero-text{flex:1}.hero-tag{background:rgba(255,255,255,.2);display:inline-block;padding:.3rem .8rem;border-radius:4px;font-size:.8rem;font-weight:600;margin-bottom:1.2rem;letter-spacing:.05em}
.hero-text h1{font-size:clamp(2rem,4vw,3rem);font-weight:800;line-height:1.2;margin-bottom:1rem}
.hero-text p{font-size:1rem;opacity:.9;margin-bottom:2rem;line-height:1.7}
.hero-btns{display:flex;gap:1rem}
.btn-w{background:#fff;color:${p};padding:.85rem 2rem;border-radius:8px;font-weight:700;font-size:.9rem;transition:transform .2s}
.btn-w:hover{transform:translateY(-2px)}
.btn-tr{border:2px solid rgba(255,255,255,.6);color:#fff;padding:.85rem 2rem;border-radius:8px;font-weight:600;font-size:.9rem;transition:all .2s}
.btn-tr:hover{background:rgba(255,255,255,.15)}
.hero-right{flex:1;max-width:420px}
.hero-card{background:rgba(255,255,255,.15);backdrop-filter:blur(10px);border-radius:16px;padding:2rem;border:1px solid rgba(255,255,255,.2)}
.hc-row{display:flex;align-items:center;gap:1rem;padding:.8rem 0;border-bottom:1px solid rgba(255,255,255,.15)}.hc-row:last-child{border-bottom:none}
.hc-icon{width:40px;height:40px;background:rgba(255,255,255,.2);border-radius:8px;display:grid;place-items:center;font-size:1.2rem;flex-shrink:0}
.hc-text strong{display:block;font-size:.88rem;font-weight:600}.hc-text span{font-size:.78rem;opacity:.7}
.trust-bar{background:${a};padding:1.2rem 2rem;display:flex;justify-content:center;gap:3rem;flex-wrap:wrap}
.trust-item{display:flex;align-items:center;gap:.5rem;font-size:.85rem;font-weight:600;color:${p}}
.check{width:18px;height:18px;background:${p};color:#fff;border-radius:50%;display:grid;place-items:center;font-size:.7rem;flex-shrink:0}
.services{padding:5rem 2rem;max-width:1100px;margin:0 auto}
.sec-head{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:2.5rem}
.sec-head h2{font-size:2rem;font-weight:800}.sec-head a{color:${p};font-weight:600;font-size:.9rem}
.s-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1.5rem}
.s-card{border-radius:12px;padding:2rem;background:#F8FAFC;border:1px solid #E2E8F0;transition:all .2s}
.s-card:hover{border-color:${p};box-shadow:0 8px 30px rgba(0,0,0,.08);transform:translateY(-3px)}
.s-icon{width:48px;height:48px;background:${p}22;border-radius:10px;display:grid;place-items:center;margin-bottom:1rem;font-size:1.4rem}
.s-card h3{font-size:1rem;font-weight:700;margin-bottom:.5rem;color:#0F172A}.s-card p{font-size:.85rem;color:#64748B;line-height:1.6}
.about{background:#0F172A;color:#fff;padding:5rem 2rem}
.about-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.about-text h2{font-size:2rem;font-weight:800;margin-bottom:1rem}.about-text p{color:#94A3B8;line-height:1.7;margin-bottom:1.5rem}
.about-stats{display:grid;grid-template-columns:1fr 1fr;gap:1rem}
.a-stat{background:#1E293B;border-radius:10px;padding:1.2rem;text-align:center}
.a-num{font-size:1.8rem;font-weight:800;color:${s}}.a-label{font-size:.78rem;color:#94A3B8;margin-top:.3rem}
.about-img{background:linear-gradient(135deg,${p}33,${s}33);border-radius:16px;height:300px;display:flex;align-items:center;justify-content:center;font-size:4rem}
footer{background:${p};color:#fff;padding:2.5rem 2rem;text-align:center}
footer .fl{font-size:1.1rem;font-weight:700;margin-bottom:.5rem}footer p{opacity:.7;font-size:.85rem}
@media(max-width:768px){.hero-inner{flex-direction:column;gap:2rem}.hero-right{display:none}.about-inner{grid-template-columns:1fr}.trust-bar{gap:1rem}}
</style></head>
<body>
<nav>
  <div class="logo">Website<span>Ku</span></div>
  <div class="nav-links"><a href="#">Beranda</a><a href="#">Tentang</a><a href="#">Layanan</a><a href="#">Kontak</a></div>
  <a href="#" class="nav-cta">Hubungi Kami</a>
</nav>
<section class="hero">
  <div class="hero-inner">
    <div class="hero-text">
      <div class="hero-tag">✦ ${t.catName}</div>
      <h1>${t.headline}</h1>
      <p>${t.sub}</p>
      <div class="hero-btns">
        <a href="#" class="btn-w">Mulai Sekarang</a>
        <a href="#" class="btn-tr">Pelajari Lebih</a>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-card">
        ${t.menu.map((m,i)=>`<div class="hc-row"><div class="hc-icon">${['🏆','⭐','💎','🎯'][i%4]}</div><div class="hc-text"><strong>${m}</strong><span>Layanan profesional tersedia</span></div></div>`).join('')}
      </div>
    </div>
  </div>
</section>
<div class="trust-bar">
  <div class="trust-item"><div class="check">✓</div>Terpercaya Sejak 2010</div>
  <div class="trust-item"><div class="check">✓</div>ISO Certified</div>
  <div class="trust-item"><div class="check">✓</div>Garansi Kepuasan</div>
  <div class="trust-item"><div class="check">✓</div>Layanan 24/7</div>
</div>
<section class="services">
  <div class="sec-head">
    <h2>Layanan Kami</h2>
    <a href="#">Lihat Semua →</a>
  </div>
  <div class="s-grid">
    ${t.menu.map((m,i)=>`<div class="s-card"><div class="s-icon">${['🏅','📋','🔑','🌟'][i%4]}</div><h3>${m}</h3><p>Solusi ${m} profesional dengan standar kualitas tertinggi dan tim berpengalaman.</p></div>`).join('')}
  </div>
</section>
<section class="about">
  <div class="about-inner">
    <div class="about-text">
      <h2>Mengapa Memilih Kami?</h2>
      <p>Kami telah melayani ribuan klien dengan dedikasi penuh dan komitmen terhadap kualitas terbaik.</p>
      <div class="about-stats">
        <div class="a-stat"><div class="a-num">15+</div><div class="a-label">Tahun Pengalaman</div></div>
        <div class="a-stat"><div class="a-num">5K+</div><div class="a-label">Klien Puas</div></div>
        <div class="a-stat"><div class="a-num">50+</div><div class="a-label">Tim Profesional</div></div>
        <div class="a-stat"><div class="a-num">99%</div><div class="a-label">Tingkat Kepuasan</div></div>
      </div>
    </div>
    <div class="about-img">🏢</div>
  </div>
</section>
<footer><div class="fl">WebsiteKu</div><p>© 2025 ${t.name}. Hak cipta dilindungi.</p></footer>
</body></html>`;
}

/* ============================================================ */
/* 3. LUXURY                                                     */
/* ============================================================ */
function tmplLuxury(t) {
  const p = t.primary, s = t.secondary, a = t.accent;
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}body{font-family:'Inter',sans-serif;background:#0A0A0A;color:#E8E0D0;line-height:1.7}
a{text-decoration:none;color:inherit}
nav{position:sticky;top:0;z-index:100;background:rgba(10,10,10,.95);border-bottom:1px solid rgba(201,162,39,.2);padding:1.2rem 3rem;display:flex;align-items:center;justify-content:space-between}
.logo{font-family:'Cormorant Garamond',serif;font-size:1.6rem;font-weight:400;letter-spacing:.15em;text-transform:uppercase;color:${s}}
.nav-links{display:flex;gap:2.5rem;align-items:center}.nav-links a{font-size:.78rem;font-weight:400;letter-spacing:.12em;text-transform:uppercase;color:#999;transition:color .3s}.nav-links a:hover{color:${s}}
.nav-cta{border:1px solid ${s};color:${s};padding:.5rem 1.5rem;font-size:.78rem;font-weight:400;letter-spacing:.1em;text-transform:uppercase;transition:all .3s}
.nav-cta:hover{background:${s};color:#000}
.hero{height:100vh;background:#0A0A0A;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 30%,${p}22 0%,transparent 65%)}
.hero-line-top{position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,${s}88,transparent)}
.hero-line-bot{position:absolute;bottom:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,${s}88,transparent)}
.hero-content{position:relative;max-width:700px;padding:0 2rem}
.hero-eyebrow{font-size:.75rem;letter-spacing:.25em;text-transform:uppercase;color:${s};margin-bottom:2rem;display:flex;align-items:center;justify-content:center;gap:1rem}
.eyebrow-line{width:40px;height:1px;background:${s}}
.hero-content h1{font-family:'Cormorant Garamond',serif;font-size:clamp(2.8rem,7vw,5.5rem);font-weight:300;line-height:1.1;letter-spacing:-.01em;margin-bottom:1.5rem;color:#fff}
.hero-content h1 em{font-style:italic;color:${s}}
.hero-content p{font-size:.95rem;color:#999;letter-spacing:.04em;max-width:400px;margin:0 auto 2.5rem}
.hero-btns{display:flex;gap:1.5rem;justify-content:center;align-items:center}
.btn-gold{padding:.9rem 2.5rem;background:${s};color:#000;font-size:.8rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;transition:all .3s}
.btn-gold:hover{background:#fff}
.btn-text{font-size:.8rem;letter-spacing:.12em;text-transform:uppercase;color:#999;border-bottom:1px solid transparent;transition:all .3s;padding-bottom:2px}
.btn-text:hover{color:${s};border-color:${s}}
.divider{display:flex;align-items:center;gap:2rem;padding:3rem;max-width:1100px;margin:0 auto;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06)}
.div-item{flex:1;text-align:center}.div-num{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:400;color:${s}}
.div-label{font-size:.72rem;letter-spacing:.15em;text-transform:uppercase;color:#666;margin-top:.4rem}
.div-sep{width:1px;height:40px;background:rgba(255,255,255,.1)}
.collection{padding:5rem 3rem;max-width:1200px;margin:0 auto}
.sec-title{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:300;margin-bottom:.5rem;color:#fff}
.sec-sub{font-size:.8rem;letter-spacing:.15em;text-transform:uppercase;color:#666;margin-bottom:3rem}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1px;background:rgba(255,255,255,.08)}
.g-item{background:#0A0A0A;padding:2.5rem 2rem;transition:all .3s}
.g-item:hover{background:#111}
.g-roman{font-family:'Cormorant Garamond',serif;font-size:1rem;color:${s};letter-spacing:.2em;margin-bottom:1rem}
.g-item h3{font-family:'Cormorant Garamond',serif;font-size:1.4rem;font-weight:400;color:#fff;margin-bottom:.7rem}
.g-item p{font-size:.83rem;color:#666;line-height:1.7}
.g-link{display:inline-flex;align-items:center;gap:.5rem;font-size:.75rem;letter-spacing:.12em;text-transform:uppercase;color:${s};margin-top:1.2rem}
.experience{background:#111;padding:5rem 3rem;text-align:center;border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05)}
.exp-inner{max-width:600px;margin:0 auto}
.exp-inner h2{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:300;color:#fff;margin-bottom:1rem}
.exp-inner p{color:#666;font-size:.9rem;margin-bottom:2rem}
footer{background:#0A0A0A;border-top:1px solid rgba(201,162,39,.15);padding:3rem;text-align:center}
.f-logo{font-family:'Cormorant Garamond',serif;font-size:1.8rem;color:${s};letter-spacing:.2em;margin-bottom:.5rem}
footer p{font-size:.78rem;color:#555;letter-spacing:.1em}
@media(max-width:768px){nav{padding:1rem 1.5rem}.nav-links{display:none}.hero-btns{flex-direction:column}.divider{flex-direction:column;gap:1.5rem}.div-sep{width:40px;height:1px}.collection{padding:3rem 1.5rem}}
</style></head>
<body>
<nav>
  <div class="logo">WebsiteKu</div>
  <div class="nav-links"><a href="#">Beranda</a><a href="#">Koleksi</a><a href="#">Tentang</a><a href="#">Reservasi</a></div>
  <a href="#" class="nav-cta">Reservasi</a>
</nav>
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-line-top"></div>
  <div class="hero-line-bot"></div>
  <div class="hero-content">
    <div class="hero-eyebrow"><div class="eyebrow-line"></div>${t.catName}<div class="eyebrow-line"></div></div>
    <h1>${t.headline.replace(' ', '<br/><em>')+((t.headline.split(' ').length>1)?'</em>':'')}</h1>
    <p>${t.sub}</p>
    <div class="hero-btns">
      <a href="#" class="btn-gold">Reservasi Sekarang</a>
      <a href="#" class="btn-text">Pelajari Lebih →</a>
    </div>
  </div>
</section>
<div class="divider">
  <div class="div-item"><div class="div-num">20+</div><div class="div-label">Tahun Keunggulan</div></div>
  <div class="div-sep"></div>
  <div class="div-item"><div class="div-num">500+</div><div class="div-label">Klien Eksklusif</div></div>
  <div class="div-sep"></div>
  <div class="div-item"><div class="div-num">15</div><div class="div-label">Penghargaan</div></div>
  <div class="div-sep"></div>
  <div class="div-item"><div class="div-num">5★</div><div class="div-label">Rating Tertinggi</div></div>
</div>
<section class="collection">
  <div class="sec-title">Pilihan Terbaik</div>
  <div class="sec-sub">Koleksi Eksklusif Kami</div>
  <div class="grid">
    ${t.menu.map((m,i)=>`<div class="g-item"><div class="g-roman">${['I','II','III','IV'][i]}</div><h3>${m}</h3><p>Pengalaman ${m} premium dengan standar kualitas internasional yang tak tertandingi.</p><a href="#" class="g-link">Selengkapnya →</a></div>`).join('')}
  </div>
</section>
<section class="experience">
  <div class="exp-inner">
    <h2>Sebuah Pengalaman <em style="color:${s}">Tak Terlupakan</em></h2>
    <p>Setiap detail dirancang dengan penuh perhatian untuk memberikan pengalaman terbaik bagi Anda.</p>
    <a href="#" class="btn-gold">Mulai Pengalaman Anda</a>
  </div>
</section>
<footer>
  <div class="f-logo">WebsiteKu</div>
  <p>© 2025 ${t.name} — Keunggulan dalam Setiap Detail</p>
</footer>
</body></html>`;
}

/* ============================================================ */
/* 4. DARK                                                       */
/* ============================================================ */
function tmplDark(t) {
  const p = t.primary, s = t.secondary, a = t.accent;
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}body{font-family:'Space Grotesk',sans-serif;background:#0D0D0D;color:#E2E8F0;line-height:1.6}
a{text-decoration:none;color:inherit}
nav{background:#111;border-bottom:1px solid rgba(255,255,255,.08);padding:1rem 2.5rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.logo{font-size:1.3rem;font-weight:700;color:#fff}.logo-dot{display:inline-block;width:8px;height:8px;background:${p};border-radius:50%;margin-left:3px}
.nav-links{display:flex;gap:2rem;align-items:center}.nav-links a{font-size:.88rem;color:#888;transition:color .2s}.nav-links a:hover{color:#fff}
.nav-cta{background:${p};color:#fff;padding:.5rem 1.2rem;border-radius:6px;font-size:.85rem;font-weight:600;transition:all .2s}
.nav-cta:hover{opacity:.85}
.hero{min-height:92vh;background:linear-gradient(160deg,#0D0D0D 50%,${p}11 100%);display:flex;align-items:center;padding:4rem 2.5rem;position:relative;overflow:hidden}
.hero-orb{position:absolute;width:500px;height:500px;border-radius:50%;background:${p};filter:blur(120px);opacity:.12;top:-100px;right:-100px;pointer-events:none}
.hero-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.2fr 1fr;gap:4rem;align-items:center}
.hero-text{position:relative}
.hero-label{display:inline-flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:100px;padding:.3rem .9rem;font-size:.78rem;color:#aaa;margin-bottom:1.5rem}
.label-dot{width:6px;height:6px;background:${p};border-radius:50%;animation:blink 1.5s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.hero-text h1{font-size:clamp(2.2rem,4.5vw,3.5rem);font-weight:700;line-height:1.15;margin-bottom:1.2rem;color:#fff}
.hero-text h1 span{color:${p}}
.hero-text p{color:#888;font-size:1rem;margin-bottom:2rem;line-height:1.7}
.hero-actions{display:flex;gap:1rem;align-items:center}
.btn-p{background:${p};color:#fff;padding:.85rem 2rem;border-radius:8px;font-weight:600;font-size:.9rem;transition:all .2s}
.btn-p:hover{opacity:.85;transform:translateY(-2px)}
.btn-sec{color:#ccc;font-size:.9rem;font-weight:500;display:flex;align-items:center;gap:.4rem;padding:.85rem 0}
.btn-sec:hover{color:#fff}
.hero-visual{background:#1A1A1A;border-radius:16px;border:1px solid rgba(255,255,255,.08);padding:2rem;position:relative;overflow:hidden}
.hv-top{display:flex;align-items:center;gap:.5rem;margin-bottom:1.5rem}
.hv-dot{width:8px;height:8px;border-radius:50%}
.hv-title{font-size:.8rem;color:#666;font-family:monospace}
.hv-items{display:flex;flex-direction:column;gap:.8rem}
.hv-item{background:#222;border-radius:8px;padding:.9rem 1rem;display:flex;align-items:center;justify-content:space-between;gap:1rem}
.hv-name{font-size:.88rem;font-weight:500;color:#ccc}
.hv-badge{background:${p}22;color:${p};font-size:.72rem;padding:.2rem .6rem;border-radius:4px;font-weight:600}
.hv-accent{position:absolute;bottom:-30px;right:-30px;width:150px;height:150px;border-radius:50%;background:${p};filter:blur(60px);opacity:.15}
.stats-bar{background:#111;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);padding:2rem 2.5rem}
.stats-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:2rem;text-align:center}
.stat-num{font-size:2rem;font-weight:700;color:${p}}.stat-label{font-size:.8rem;color:#666;margin-top:.3rem}
.features{padding:5rem 2.5rem;max-width:1100px;margin:0 auto}
.features h2{font-size:2rem;font-weight:700;color:#fff;margin-bottom:.5rem}
.feat-sub{color:#666;margin-bottom:3rem}
.f-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem}
.f-card{background:#111;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:2rem;transition:all .3s}
.f-card:hover{border-color:${p};background:#151515;transform:translateY(-4px)}
.f-icon{width:44px;height:44px;background:${p}22;border-radius:10px;display:grid;place-items:center;margin-bottom:1.2rem;font-size:1.3rem}
.f-card h3{font-size:.95rem;font-weight:700;color:#fff;margin-bottom:.5rem}.f-card p{font-size:.83rem;color:#666;line-height:1.6}
.cta-sec{background:linear-gradient(135deg,${p}22,${s}11);border:1px solid ${p}33;margin:5rem 2.5rem;border-radius:16px;padding:4rem 2rem;text-align:center}
.cta-sec h2{font-size:2rem;font-weight:700;color:#fff;margin-bottom:1rem}.cta-sec p{color:#888;margin-bottom:2rem}
footer{background:#111;border-top:1px solid rgba(255,255,255,.06);padding:2rem 2.5rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
footer .fl{font-size:.95rem;font-weight:700;color:#fff}footer p{font-size:.8rem;color:#555}
@media(max-width:768px){.hero-inner{grid-template-columns:1fr}.hero-visual{display:none}.stats-inner{grid-template-columns:repeat(2,1fr)}}
</style></head>
<body>
<nav>
  <div class="logo">WebsiteKu<span class="logo-dot"></span></div>
  <div class="nav-links"><a href="#">Home</a><a href="#">Layanan</a><a href="#">Portfolio</a><a href="#">Kontak</a></div>
  <a href="#" class="nav-cta">Mulai Sekarang</a>
</nav>
<section class="hero">
  <div class="hero-orb"></div>
  <div class="hero-inner">
    <div class="hero-text">
      <div class="hero-label"><span class="label-dot"></span>${t.catName}</div>
      <h1>${t.headline.split(' ').map((w,i)=>i===0?`<span>${w}</span> `:w+' ').join('')}</h1>
      <p>${t.sub}</p>
      <div class="hero-actions">
        <a href="#" class="btn-p">Mulai Sekarang</a>
        <a href="#" class="btn-sec">Lihat Demo →</a>
      </div>
    </div>
    <div class="hero-visual">
      <div class="hv-top">
        <div class="hv-dot" style="background:#FF5F57"></div>
        <div class="hv-dot" style="background:#FFBD2E"></div>
        <div class="hv-dot" style="background:#28CA41"></div>
        <span class="hv-title">websiteku.dashboard</span>
      </div>
      <div class="hv-items">
        ${t.menu.map((m,i)=>`<div class="hv-item"><span class="hv-name">${m}</span><span class="hv-badge">${['AKTIF','LIVE','PRO','NEW'][i%4]}</span></div>`).join('')}
      </div>
      <div class="hv-accent"></div>
    </div>
  </div>
</section>
<div class="stats-bar">
  <div class="stats-inner">
    <div><div class="stat-num">10K+</div><div class="stat-label">Pengguna Aktif</div></div>
    <div><div class="stat-num">99.9%</div><div class="stat-label">Uptime</div></div>
    <div><div class="stat-num">50+</div><div class="stat-label">Tim Ahli</div></div>
    <div><div class="stat-num">4.9★</div><div class="stat-label">Rating</div></div>
  </div>
</div>
<section class="features">
  <h2>Fitur Unggulan</h2>
  <p class="feat-sub">Semua yang Anda butuhkan dalam satu platform terintegrasi.</p>
  <div class="f-grid">
    ${t.menu.map((m,i)=>`<div class="f-card"><div class="f-icon">${['🚀','⚡','🔒','📊'][i%4]}</div><h3>${m}</h3><p>Nikmati layanan ${m} premium dengan teknologi terkini dan support profesional.</p></div>`).join('')}
  </div>
</section>
<div class="cta-sec">
  <h2>Siap untuk Memulai?</h2>
  <p>Bergabung dengan ribuan pengguna yang sudah mempercayai layanan kami.</p>
  <a href="#" class="btn-p" style="display:inline-block">Coba Gratis 14 Hari</a>
</div>
<footer>
  <div class="fl">WebsiteKu</div>
  <p>© 2025 ${t.name}. All rights reserved.</p>
</footer>
</body></html>`;
}

/* ============================================================ */
/* 5. GLASSMORPHISM                                              */
/* ============================================================ */
function tmplGlassmorphism(t) {
  const p = t.primary, s = t.secondary, a = t.accent;
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Plus Jakarta Sans',sans-serif;min-height:100vh;background:linear-gradient(135deg,#0F0520 0%,#1A0635 30%,#0E1B3D 60%,#071B29 100%);color:#E2E8F0;line-height:1.6;position:relative;overflow-x:hidden}
.bg-orb{position:fixed;border-radius:50%;filter:blur(80px);pointer-events:none}
.orb1{width:600px;height:600px;background:${p};opacity:.25;top:-200px;left:-200px}
.orb2{width:500px;height:500px;background:${s};opacity:.2;bottom:-150px;right:-150px}
.orb3{width:300px;height:300px;background:${a};opacity:.15;top:40%;left:50%;transform:translateX(-50%)}
.glass{background:rgba(255,255,255,.07);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.12);border-radius:16px}
nav{position:sticky;top:0;z-index:100;padding:1rem 2rem;background:rgba(10,5,20,.6);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between}
.logo{font-size:1.3rem;font-weight:800;background:linear-gradient(135deg,${p},${a});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.nav-links{display:flex;gap:1.5rem}.nav-links a{font-size:.88rem;color:rgba(255,255,255,.7);transition:color .2s}.nav-links a:hover{color:#fff}
.nav-cta{background:linear-gradient(135deg,${p},${s});color:#fff;padding:.5rem 1.2rem;border-radius:8px;font-size:.85rem;font-weight:600}
.hero{min-height:90vh;display:flex;align-items:center;padding:4rem 2rem;position:relative}
.hero-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.hero-badge{display:inline-flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:100px;padding:.35rem 1rem;font-size:.8rem;color:#A5B4FC;margin-bottom:1.5rem}
.badge-dot{width:6px;height:6px;background:${p};border-radius:50%;animation:blink 2s infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.3}}
.hero-text h1{font-size:clamp(2rem,4vw,3.2rem);font-weight:800;line-height:1.2;margin-bottom:1.2rem}
.hero-text h1 span{background:linear-gradient(135deg,${p},${a});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-text p{color:rgba(255,255,255,.65);margin-bottom:2rem;font-size:.97rem;line-height:1.7}
.hero-actions{display:flex;gap:1rem;flex-wrap:wrap}
.btn-grad{background:linear-gradient(135deg,${p},${s});color:#fff;padding:.85rem 2rem;border-radius:10px;font-weight:700;font-size:.9rem;transition:all .3s;box-shadow:0 8px 32px ${p}55}
.btn-grad:hover{transform:translateY(-3px);box-shadow:0 12px 40px ${p}77}
.btn-glass{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);color:#fff;padding:.85rem 2rem;border-radius:10px;font-weight:600;font-size:.9rem;backdrop-filter:blur(10px);transition:all .3s}
.btn-glass:hover{background:rgba(255,255,255,.15)}
.hero-cards{display:flex;flex-direction:column;gap:1rem}
.h-card{padding:1.2rem 1.5rem;display:flex;align-items:center;gap:1rem;transition:transform .3s}
.h-card:hover{transform:translateX(4px)}
.h-card-icon{width:44px;height:44px;border-radius:10px;display:grid;place-items:center;font-size:1.2rem;flex-shrink:0}
.icon1{background:${p}33;border:1px solid ${p}44}
.icon2{background:${s}33;border:1px solid ${s}44}
.icon3{background:${a}33;border:1px solid ${a}44}
.icon4{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15)}
.h-card strong{display:block;font-size:.9rem;font-weight:700;color:#fff}
.h-card span{font-size:.78rem;color:rgba(255,255,255,.55)}
.services{padding:5rem 2rem;max-width:1200px;margin:0 auto}
.sec-head{text-align:center;margin-bottom:3rem}
.sec-head h2{font-size:2rem;font-weight:800;margin-bottom:.5rem}
.sec-head h2 span{background:linear-gradient(135deg,${p},${a});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.sec-head p{color:rgba(255,255,255,.55)}
.s-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem}
.s-card{padding:2rem;transition:all .3s}
.s-card:hover{transform:translateY(-6px);border-color:rgba(255,255,255,.22)}
.s-emoji{font-size:2rem;margin-bottom:1rem}
.s-card h3{font-size:1rem;font-weight:700;margin-bottom:.5rem}.s-card p{font-size:.85rem;color:rgba(255,255,255,.55);line-height:1.6}
footer{background:rgba(255,255,255,.04);border-top:1px solid rgba(255,255,255,.08);padding:2.5rem 2rem;text-align:center}
footer .fl{font-size:1.1rem;font-weight:800;background:linear-gradient(135deg,${p},${a});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.5rem}
footer p{color:rgba(255,255,255,.4);font-size:.83rem}
@media(max-width:768px){.hero-inner{grid-template-columns:1fr}.nav-links{display:none}}
</style></head>
<body>
<div class="bg-orb orb1"></div>
<div class="bg-orb orb2"></div>
<div class="bg-orb orb3"></div>
<nav>
  <div class="logo">WebsiteKu</div>
  <div class="nav-links"><a href="#">Home</a><a href="#">Fitur</a><a href="#">Harga</a><a href="#">Kontak</a></div>
  <a href="#" class="nav-cta">Mulai Gratis</a>
</nav>
<section class="hero">
  <div class="hero-inner">
    <div class="hero-text">
      <div class="hero-badge"><span class="badge-dot"></span>${t.catName}</div>
      <h1>${t.headline.split(' ').slice(0,2).join(' ')} <span>${t.headline.split(' ').slice(2).join(' ')}</span></h1>
      <p>${t.sub}</p>
      <div class="hero-actions">
        <a href="#" class="btn-grad">Mulai Sekarang</a>
        <a href="#" class="btn-glass">Pelajari Lebih</a>
      </div>
    </div>
    <div class="hero-cards">
      ${t.menu.map((m,i)=>`<div class="glass h-card"><div class="h-card-icon icon${i+1}">${['🎯','⚡','🔐','🌟'][i%4]}</div><div><strong>${m}</strong><span>Tersedia sekarang</span></div></div>`).join('')}
    </div>
  </div>
</section>
<section class="services">
  <div class="sec-head"><h2>Mengapa Pilih <span>Kami?</span></h2><p>Solusi terbaik untuk kebutuhan Anda.</p></div>
  <div class="s-grid">
    ${t.menu.map((m,i)=>`<div class="glass s-card"><div class="s-emoji">${['🚀','💎','🛡️','📈'][i%4]}</div><h3>${m}</h3><p>Layanan ${m} terdepan dengan teknologi mutakhir dan tim profesional berdedikasi tinggi.</p></div>`).join('')}
  </div>
</section>
<footer>
  <div class="fl">WebsiteKu</div>
  <p>© 2025 ${t.name}. All rights reserved.</p>
</footer>
</body></html>`;
}

/* ============================================================ */
/* 6. NEON                                                       */
/* ============================================================ */
function tmplNeon(t) {
  const p = t.primary, s = t.secondary, a = t.accent;
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Rajdhani',sans-serif;background:#030305;color:#E2E8F0;line-height:1.5;min-height:100vh;overflow-x:hidden}
a{text-decoration:none;color:inherit}
.grid-bg{position:fixed;inset:0;background-image:linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px);background-size:40px 40px;pointer-events:none}
nav{position:sticky;top:0;z-index:100;padding:1rem 2rem;background:rgba(3,3,5,.9);border-bottom:1px solid ${p}44;display:flex;align-items:center;justify-content:space-between}
.logo{font-size:1.4rem;font-weight:700;letter-spacing:.1em;color:#fff;text-shadow:0 0 20px ${p}}
.logo span{color:${p}}
.nav-links{display:flex;gap:2rem}.nav-links a{font-size:.85rem;font-weight:500;letter-spacing:.1em;color:#666;text-transform:uppercase;transition:all .2s}.nav-links a:hover{color:${p};text-shadow:0 0 10px ${p}}
.nav-cta{border:1px solid ${p};color:${p};padding:.5rem 1.2rem;font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;transition:all .3s;text-shadow:0 0 8px ${p}}
.nav-cta:hover{background:${p};color:#000;box-shadow:0 0 20px ${p}88}
.hero{min-height:90vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:4rem 2rem;position:relative}
.scan-line{position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,.15) 2px,rgba(0,0,0,.15) 4px);pointer-events:none}
.hero-content{position:relative;max-width:800px}
.hero-prefix{font-family:'Share Tech Mono',monospace;font-size:.85rem;color:${s};letter-spacing:.2em;margin-bottom:1.5rem;animation:typing 3s steps(30) infinite}
@keyframes typing{0%,100%{opacity:1}50%{opacity:.3}}
.hero-content h1{font-size:clamp(2.5rem,7vw,5rem);font-weight:700;letter-spacing:.05em;text-transform:uppercase;margin-bottom:1.5rem;color:#fff;text-shadow:0 0 30px ${p}88,0 0 60px ${p}44;line-height:1.1}
.hero-content p{font-size:1rem;color:#888;letter-spacing:.05em;max-width:500px;margin:0 auto 2.5rem;font-family:'Share Tech Mono',monospace}
.hero-btns{display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap}
.btn-neon{padding:.85rem 2rem;border:2px solid ${p};color:${p};font-family:'Rajdhani',sans-serif;font-size:.9rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:all .3s;text-shadow:0 0 8px ${p};position:relative;overflow:hidden}
.btn-neon::before{content:'';position:absolute;inset:0;background:${p};transform:translateX(-100%);transition:transform .3s;z-index:-1}
.btn-neon:hover{color:#000;text-shadow:none;box-shadow:0 0 30px ${p};}.btn-neon:hover::before{transform:translateX(0)}
.btn-neon2{padding:.85rem 2rem;border:2px solid ${s};color:${s};font-family:'Rajdhani',sans-serif;font-size:.9rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;transition:all .3s;text-shadow:0 0 8px ${s}}
.btn-neon2:hover{background:${s};color:#000;box-shadow:0 0 30px ${s}}
.neon-line{height:1px;background:linear-gradient(90deg,transparent,${p},${s},transparent);margin:3rem 0;animation:scan 3s ease-in-out infinite}
@keyframes scan{0%,100%{opacity:.3}50%{opacity:1}}
.services{padding:5rem 2rem;max-width:1200px;margin:0 auto}
.services h2{font-size:2rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#fff;text-shadow:0 0 20px ${s};margin-bottom:.5rem;text-align:center}
.services p{text-align:center;color:#666;font-family:'Share Tech Mono',monospace;font-size:.83rem;margin-bottom:3rem}
.s-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1px;background:${p}22}
.s-card{background:#030305;padding:2rem;transition:all .3s;border:1px solid ${p}22;position:relative}
.s-card:hover{background:#07070F;border-color:${p}}
.s-card:hover .s-title{text-shadow:0 0 12px ${p}}
.s-id{font-family:'Share Tech Mono',monospace;font-size:.75rem;color:${p};margin-bottom:1rem;opacity:.7}
.s-title{font-size:1.2rem;font-weight:700;letter-spacing:.05em;color:#fff;margin-bottom:.7rem;transition:text-shadow .3s}
.s-card p{font-size:.85rem;color:#555;line-height:1.6}
.s-corner{position:absolute;top:0;right:0;width:24px;height:24px;border-top:2px solid ${p};border-right:2px solid ${p}}
.counter{background:#07070F;border-top:1px solid ${p}44;border-bottom:1px solid ${p}44;padding:2.5rem 2rem}
.counter-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);text-align:center;gap:2rem}
.c-num{font-size:2.2rem;font-weight:700;color:${p};text-shadow:0 0 20px ${p};font-family:'Share Tech Mono',monospace}
.c-label{font-size:.75rem;color:#555;letter-spacing:.15em;text-transform:uppercase;margin-top:.3rem}
footer{background:#030305;border-top:1px solid ${p}33;padding:2.5rem 2rem;text-align:center}
footer .fl{font-size:1.3rem;font-weight:700;letter-spacing:.15em;color:${p};text-shadow:0 0 20px ${p};text-transform:uppercase}
footer p{color:#444;font-family:'Share Tech Mono',monospace;font-size:.78rem;margin-top:.5rem}
@media(max-width:768px){.nav-links{display:none}.counter-inner{grid-template-columns:repeat(2,1fr)}}
</style></head>
<body>
<div class="grid-bg"></div>
<nav>
  <div class="logo">Website<span>Ku</span></div>
  <div class="nav-links"><a href="#">HOME</a><a href="#">SERVICES</a><a href="#">PORTFOLIO</a><a href="#">CONTACT</a></div>
  <a href="#" class="nav-cta">MULAI</a>
</nav>
<section class="hero">
  <div class="scan-line"></div>
  <div class="hero-content">
    <div class="hero-prefix">// ${t.catName.toUpperCase()} ::INITIALIZED</div>
    <h1>${t.headline}</h1>
    <p>${t.sub}</p>
    <div class="hero-btns">
      <a href="#" class="btn-neon">MULAI SEKARANG</a>
      <a href="#" class="btn-neon2">LIHAT DEMO</a>
    </div>
  </div>
</section>
<div class="neon-line" style="margin:0 2rem"></div>
<div class="counter">
  <div class="counter-inner">
    <div><div class="c-num">10K+</div><div class="c-label">Users</div></div>
    <div><div class="c-num">99.9%</div><div class="c-label">Uptime</div></div>
    <div><div class="c-num">24/7</div><div class="c-label">Support</div></div>
    <div><div class="c-num">5★</div><div class="c-label">Rating</div></div>
  </div>
</div>
<section class="services">
  <h2>Layanan Kami</h2>
  <p>// INITIATING SERVICE PROTOCOLS</p>
  <div class="s-grid">
    ${t.menu.map((m,i)=>`<div class="s-card"><div class="s-corner"></div><div class="s-id">SVC_${String(i+1).padStart(2,'0')}</div><div class="s-title">${m.toUpperCase()}</div><p>Protocol ${m} initialized. Running diagnostic checks... Status: OPERATIONAL</p></div>`).join('')}
  </div>
</section>
<footer>
  <div class="fl">WEBSITEKU</div>
  <p>// © 2025 ${t.name.toUpperCase()} — ALL SYSTEMS ONLINE</p>
</footer>
</body></html>`;
}

/* ============================================================ */
/* 7. STARTUP                                                    */
/* ============================================================ */
function tmplStartup(t) {
  const p = t.primary, s = t.secondary, a = t.accent;
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Inter',sans-serif;background:#050510;color:#E2E8F0;line-height:1.6;overflow-x:hidden}
a{text-decoration:none;color:inherit}
nav{padding:1.2rem 2rem;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100;background:rgba(5,5,16,.85);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.07)}
.logo{font-size:1.25rem;font-weight:900;color:#fff;letter-spacing:-.02em}
.logo-accent{color:${p}}
.nav-links{display:flex;gap:1.5rem}.nav-links a{font-size:.88rem;font-weight:500;color:#8892A4;transition:color .2s}.nav-links a:hover{color:#fff}
.nav-actions{display:flex;gap:.8rem;align-items:center}
.nav-login{font-size:.88rem;font-weight:500;color:#8892A4;padding:.45rem .8rem}
.nav-cta{background:linear-gradient(135deg,${p},${s});color:#fff;padding:.5rem 1.2rem;border-radius:8px;font-size:.85rem;font-weight:700;box-shadow:0 4px 16px ${p}55;transition:all .2s}
.nav-cta:hover{transform:translateY(-1px);box-shadow:0 6px 24px ${p}77}
.hero{padding:6rem 2rem 5rem;position:relative;overflow:hidden;text-align:center}
.hero-blob{position:absolute;inset:0;background:radial-gradient(ellipse at 50% -10%,${p}33 0%,${s}11 40%,transparent 70%);pointer-events:none}
.hero-pill{display:inline-flex;align-items:center;gap:.5rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:100px;padding:.35rem 1rem .35rem .5rem;font-size:.82rem;margin-bottom:2rem}
.pill-badge{background:linear-gradient(135deg,${p},${s});color:#fff;padding:.15rem .6rem;border-radius:100px;font-size:.72rem;font-weight:700;margin-right:.25rem}
.pill-text{color:#A5B4FC}
.hero h1{font-size:clamp(2.5rem,6vw,5rem);font-weight:900;letter-spacing:-.03em;line-height:1.1;margin-bottom:1.5rem;max-width:800px;margin-left:auto;margin-right:auto}
.hero h1 .g{background:linear-gradient(135deg,${p} 0%,${a} 50%,${s} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero p{color:#8892A4;font-size:1.1rem;max-width:540px;margin:0 auto 2.5rem;line-height:1.7}
.hero-actions{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;margin-bottom:3rem}
.btn-main{background:linear-gradient(135deg,${p},${s});color:#fff;padding:.95rem 2.2rem;border-radius:12px;font-weight:700;font-size:1rem;box-shadow:0 8px 32px ${p}55;transition:all .3s;display:inline-flex;align-items:center;gap:.5rem}
.btn-main:hover{transform:translateY(-3px);box-shadow:0 14px 40px ${p}77}
.btn-sec{border:1px solid rgba(255,255,255,.15);color:#fff;padding:.95rem 2.2rem;border-radius:12px;font-weight:600;font-size:1rem;background:rgba(255,255,255,.04);backdrop-filter:blur(8px);transition:all .2s}
.btn-sec:hover{border-color:rgba(255,255,255,.3);background:rgba(255,255,255,.08)}
.hero-trust{display:flex;align-items:center;justify-content:center;gap:.8rem;font-size:.83rem;color:#666}
.trust-dots{display:flex;gap:-4px}.trust-dot{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,${p},${s});border:2px solid #050510;display:grid;place-items:center;font-size:.7rem;color:#fff;margin-left:-8px}.trust-dot:first-child{margin-left:0}
.features{padding:5rem 2rem;max-width:1200px;margin:0 auto}
.sec-h{text-align:center;margin-bottom:3rem}
.sec-h h2{font-size:2.2rem;font-weight:900;letter-spacing:-.02em;margin-bottom:.5rem}
.sec-h h2 span{background:linear-gradient(135deg,${p},${a});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.sec-h p{color:#8892A4}
.feat-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:1.5rem}
.feat-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2rem;transition:all .3s;position:relative;overflow:hidden}
.feat-card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,${p}11,${s}07);opacity:0;transition:opacity .3s}
.feat-card:hover{border-color:rgba(255,255,255,.16);transform:translateY(-4px);box-shadow:0 16px 48px rgba(0,0,0,.4)}.feat-card:hover::before{opacity:1}
.feat-num{font-size:2.5rem;font-weight:900;background:linear-gradient(135deg,${p},${a});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;margin-bottom:1rem}
.feat-card h3{font-size:1.05rem;font-weight:700;margin-bottom:.5rem}
.feat-card p{font-size:.85rem;color:#8892A4;line-height:1.6}
.cta-strip{background:linear-gradient(135deg,${p}22,${s}11);border:1px solid ${p}33;border-radius:20px;margin:4rem 2rem;padding:4rem 2rem;text-align:center;max-width:1200px;margin-left:auto;margin-right:auto}
.cta-strip h2{font-size:2rem;font-weight:900;margin-bottom:1rem;letter-spacing:-.02em}
.cta-strip p{color:#8892A4;margin-bottom:2rem}
footer{background:rgba(255,255,255,.03);border-top:1px solid rgba(255,255,255,.07);padding:2rem;text-align:center}
footer .fl{font-weight:900;font-size:1.1rem;margin-bottom:.4rem}footer .fl span{color:${p}}
footer p{color:#555;font-size:.83rem}
@media(max-width:768px){.nav-actions .nav-login{display:none}.nav-links{display:none}}
</style></head>
<body>
<nav>
  <div class="logo">Website<span class="logo-accent">Ku</span></div>
  <div class="nav-links"><a href="#">Produk</a><a href="#">Fitur</a><a href="#">Harga</a><a href="#">Tentang</a></div>
  <div class="nav-actions">
    <a href="#" class="nav-login">Masuk</a>
    <a href="#" class="nav-cta">Mulai Gratis</a>
  </div>
</nav>
<section class="hero">
  <div class="hero-blob"></div>
  <div class="hero-pill"><span class="pill-badge">NEW</span><span class="pill-text">${t.catName} — Template Terbaru</span></div>
  <h1>${t.headline.split(' ').slice(0,2).join(' ')} <span class="g">${t.headline.split(' ').slice(2).join(' ')}</span></h1>
  <p>${t.sub}</p>
  <div class="hero-actions">
    <a href="#" class="btn-main">Mulai Gratis →</a>
    <a href="#" class="btn-sec">Lihat Demo</a>
  </div>
  <div class="hero-trust">
    <div class="trust-dots">${['A','B','C'].map(l=>`<div class="trust-dot">${l}</div>`).join('')}</div>
    <span>Dipercaya 10,000+ bisnis Indonesia</span>
  </div>
</section>
<section class="features">
  <div class="sec-h"><h2>Semua Yang Anda <span>Butuhkan</span></h2><p>Fitur lengkap untuk bisnis Anda tumbuh lebih cepat.</p></div>
  <div class="feat-grid">
    ${t.menu.map((m,i)=>`<div class="feat-card"><div class="feat-num">${String(i+1).padStart(2,'0')}</div><h3>${m}</h3><p>Solusi ${m} terdepan yang membantu bisnis Anda berkembang dengan lebih efisien dan profesional.</p></div>`).join('')}
  </div>
</section>
<div class="cta-strip">
  <h2>Siap Memulai Perjalanan Anda?</h2>
  <p>Bergabung dengan ribuan bisnis yang sudah mempercayakan pertumbuhan mereka pada kami.</p>
  <a href="#" class="btn-main">Mulai 14 Hari Gratis</a>
</div>
<footer>
  <div class="fl">Website<span>Ku</span></div>
  <p>© 2025 ${t.name}. All rights reserved.</p>
</footer>
</body></html>`;
}

/* ============================================================ */
/* 8. ELEGANT                                                    */
/* ============================================================ */
function tmplElegant(t) {
  const p = t.primary, s = t.secondary, a = t.accent;
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Jost',sans-serif;background:#FAFAF6;color:#3A2E2A;line-height:1.7}
a{text-decoration:none;color:inherit}
nav{padding:1.5rem 3rem;display:flex;align-items:center;justify-content:space-between;background:#fff;border-bottom:1px solid #EDE8E3}
.logo{font-family:'Libre Baskerville',serif;font-size:1.4rem;color:#3A2E2A;letter-spacing:.05em}
.logo span{color:${p}}
.nav-links{display:flex;gap:2.5rem}.nav-links a{font-size:.85rem;font-weight:400;color:#888;letter-spacing:.05em;transition:color .2s}.nav-links a:hover{color:${p}}
.nav-cta{border-bottom:2px solid ${p};color:${p};font-size:.85rem;font-weight:500;letter-spacing:.05em;padding-bottom:2px;transition:all .2s}
.hero{min-height:90vh;display:flex;align-items:center;position:relative;overflow:hidden}
.hero-left{flex:1;padding:5rem 3rem}
.hero-right{flex:1;position:relative;height:100vh;background:${s};display:flex;align-items:center;justify-content:center;overflow:hidden}
.hr-decor{position:absolute;width:400px;height:400px;border-radius:50%;background:${p}22;top:50%;left:50%;transform:translate(-50%,-50%)}
.hr-inner{position:relative;text-align:center;padding:2rem}
.hr-icon{font-size:5rem;margin-bottom:1rem}
.hr-title{font-family:'Libre Baskerville',serif;font-size:1.5rem;color:${a};letter-spacing:.05em}
.hero-tag{font-size:.75rem;letter-spacing:.2em;text-transform:uppercase;color:${p};margin-bottom:2rem;display:flex;align-items:center;gap:.8rem}
.tag-line{width:32px;height:1px;background:${p}}
.hero-left h1{font-family:'Libre Baskerville',serif;font-size:clamp(2rem,4vw,3.5rem);font-weight:400;line-height:1.25;letter-spacing:-.01em;margin-bottom:1.5rem;color:#2A1E1A}
.hero-left h1 em{font-style:italic;color:${p}}
.hero-left p{color:#888;font-size:.95rem;max-width:420px;margin-bottom:2.5rem;line-height:1.8}
.hero-btns{display:flex;gap:1.2rem;align-items:center;flex-wrap:wrap}
.btn-filled{background:${p};color:#fff;padding:.85rem 2rem;font-size:.88rem;font-weight:500;letter-spacing:.06em;transition:all .3s}
.btn-filled:hover{background:${a};transform:translateY(-2px)}
.btn-line{border-bottom:1.5px solid ${p};color:${p};font-size:.85rem;font-weight:500;letter-spacing:.06em;padding-bottom:2px;transition:all .2s}
.btn-line:hover{border-color:${a};color:${a}}
.strip{background:${p};padding:1.5rem 3rem;display:flex;justify-content:center;gap:4rem;flex-wrap:wrap}
.strip-item{text-align:center;color:#fff}.strip-num{font-family:'Libre Baskerville',serif;font-size:1.8rem}.strip-label{font-size:.78rem;opacity:.8;letter-spacing:.05em}
.services{padding:6rem 3rem;max-width:1200px;margin:0 auto}
.services-head{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:4rem;padding-bottom:2rem;border-bottom:1px solid #EDE8E3}
.sh-left h2{font-family:'Libre Baskerville',serif;font-size:2.2rem;font-weight:400;color:#2A1E1A;margin-bottom:.5rem}
.sh-left p{color:#888;font-size:.88rem}
.sh-right a{color:${p};font-size:.85rem;letter-spacing:.05em}
.s-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:0;border:1px solid #EDE8E3}
.s-card{padding:2.5rem;border-right:1px solid #EDE8E3;border-bottom:1px solid #EDE8E3;transition:all .3s}
.s-card:hover{background:#FFF8F5}
.s-num{font-family:'Libre Baskerville',serif;font-size:.85rem;color:${p};margin-bottom:1.2rem}
.s-card h3{font-family:'Libre Baskerville',serif;font-size:1.2rem;font-weight:400;margin-bottom:.7rem;color:#2A1E1A}
.s-card p{font-size:.83rem;color:#888;line-height:1.7}
.s-link{display:inline-block;margin-top:1.2rem;font-size:.8rem;color:${p};letter-spacing:.05em}
.testimonial{background:#2A1E1A;color:#FAFAF6;padding:6rem 3rem;text-align:center}
.testi-inner{max-width:600px;margin:0 auto}
.testi-inner blockquote{font-family:'Libre Baskerville',serif;font-size:1.4rem;font-weight:400;font-style:italic;line-height:1.6;margin-bottom:2rem;color:#EDE8E3}
.testi-name{font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;color:${p}}
footer{background:#fff;border-top:1px solid #EDE8E3;padding:2.5rem 3rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem}
footer .fl{font-family:'Libre Baskerville',serif;font-size:1.1rem;color:#2A1E1A}footer .fl span{color:${p}}
footer p{font-size:.8rem;color:#aaa}
@media(max-width:768px){.hero{flex-direction:column}.hero-right{height:260px;width:100%}.hero-left{padding:3rem 1.5rem}.services{padding:4rem 1.5rem}.strip{gap:1.5rem}.nav-links{display:none}}
</style></head>
<body>
<nav>
  <div class="logo">Website<span>Ku</span></div>
  <div class="nav-links"><a href="#">Beranda</a><a href="#">Koleksi</a><a href="#">Tentang</a><a href="#">Kontak</a></div>
  <a href="#" class="nav-cta">Hubungi Kami</a>
</nav>
<section class="hero">
  <div class="hero-left">
    <div class="hero-tag"><div class="tag-line"></div>${t.catName}</div>
    <h1>${t.headline.split(' ').slice(0,3).join(' ')}<br/><em>${t.headline.split(' ').slice(3).join(' ')}</em></h1>
    <p>${t.sub}</p>
    <div class="hero-btns">
      <a href="#" class="btn-filled">Mulai Sekarang</a>
      <a href="#" class="btn-line">Lihat Koleksi →</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="hr-decor"></div>
    <div class="hr-inner">
      <div class="hr-icon">✨</div>
      <div class="hr-title">${t.name.replace('WebsiteKu ','')}</div>
    </div>
  </div>
</section>
<div class="strip">
  <div class="strip-item"><div class="strip-num">10+</div><div class="strip-label">Tahun Pengalaman</div></div>
  <div class="strip-item"><div class="strip-num">2K+</div><div class="strip-label">Pelanggan</div></div>
  <div class="strip-item"><div class="strip-num">50+</div><div class="strip-label">Penghargaan</div></div>
</div>
<section class="services">
  <div class="services-head">
    <div class="sh-left"><h2>Layanan Pilihan</h2><p>Kualitas terbaik dalam setiap detail.</p></div>
    <div class="sh-right"><a href="#">Lihat Semua →</a></div>
  </div>
  <div class="s-grid">
    ${t.menu.map((m,i)=>`<div class="s-card"><div class="s-num">0${i+1}</div><h3>${m}</h3><p>Layanan ${m} kami menghadirkan pengalaman yang tak tertandingi dengan sentuhan keindahan.</p><a href="#" class="s-link">Pelajari lebih →</a></div>`).join('')}
  </div>
</section>
<section class="testimonial">
  <div class="testi-inner">
    <blockquote>"Pengalaman yang benar-benar luar biasa. ${t.name.replace('WebsiteKu ','')} memberikan lebih dari yang saya harapkan."</blockquote>
    <div class="testi-name">— Pelanggan Setia WebsiteKu</div>
  </div>
</section>
<footer>
  <div class="fl">Website<span>Ku</span></div>
  <p>© 2025 ${t.name}. All rights reserved.</p>
</footer>
</body></html>`;
}

/* ============================================================ */
/* 9. FUTURISTIC                                                 */
/* ============================================================ */
function tmplFuturistic(t) {
  const p = t.primary, s = t.secondary, a = t.accent;
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@200;300;400;600;700;800&family=Share+Tech+Mono&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Exo 2',sans-serif;background:#050910;color:#C8D8E8;line-height:1.6;overflow-x:hidden}
a{text-decoration:none;color:inherit}
.dot-bg{position:fixed;inset:0;background-image:radial-gradient(${a}22 1px,transparent 1px);background-size:30px 30px;pointer-events:none;opacity:.5}
nav{position:sticky;top:0;z-index:100;padding:1rem 2.5rem;background:rgba(5,9,16,.9);backdrop-filter:blur(20px);border-bottom:1px solid ${a}22;display:flex;align-items:center;justify-content:space-between}
.logo{font-size:1.3rem;font-weight:800;color:#fff;letter-spacing:.05em}.logo-accent{color:${a}}
.nav-links{display:flex;gap:2rem;align-items:center}.nav-links a{font-size:.83rem;font-weight:600;letter-spacing:.08em;color:#7A8A9A;text-transform:uppercase;transition:color .2s}.nav-links a:hover{color:${a}}
.nav-cta{border:1px solid ${a};color:${a};padding:.45rem 1.2rem;font-size:.8rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;transition:all .3s;clip-path:polygon(6px 0,100% 0,calc(100% - 6px) 100%,0 100%)}
.nav-cta:hover{background:${a};color:#000}
.hero{min-height:92vh;display:flex;align-items:center;padding:4rem 2.5rem;position:relative;overflow:hidden}
.scan{position:absolute;left:0;right:0;height:1px;background:${a};opacity:.5;animation:scandown 6s linear infinite;box-shadow:0 0 10px ${a}}
@keyframes scandown{0%{top:0%}100%{top:100%}}
.hero-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1.2fr 1fr;gap:4rem;align-items:center;position:relative}
.hero-tag{font-family:'Share Tech Mono',monospace;font-size:.75rem;color:${a};letter-spacing:.15em;margin-bottom:1.5rem;opacity:.8}
.hero-text h1{font-size:clamp(2.2rem,5vw,4rem);font-weight:800;line-height:1.1;letter-spacing:-.01em;margin-bottom:1.2rem;color:#fff}
.hero-text h1 span{color:${a};text-shadow:0 0 20px ${a}}
.hero-text p{color:#7A8A9A;font-size:.95rem;margin-bottom:2rem;line-height:1.7}
.hero-actions{display:flex;gap:1rem;flex-wrap:wrap}
.btn-cyber{padding:.85rem 2rem;background:transparent;border:1px solid ${a};color:${a};font-family:'Exo 2',sans-serif;font-size:.88rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;transition:all .3s;clip-path:polygon(8px 0,100% 0,calc(100% - 8px) 100%,0 100%);position:relative;overflow:hidden}
.btn-cyber::before{content:'';position:absolute;inset:0;background:${a};transform:translateX(-100%);transition:transform .3s;z-index:0}
.btn-cyber:hover{color:#000}.btn-cyber:hover::before{transform:translateX(0)}
.btn-cyber span{position:relative;z-index:1}
.btn-sec{padding:.85rem 2rem;color:#7A8A9A;font-size:.88rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;border-bottom:1px solid ${a}44;transition:all .2s}
.btn-sec:hover{color:${a};border-color:${a}}
.hero-panel{background:rgba(0,212,255,.04);border:1px solid ${a}33;border-radius:4px;padding:1.5rem;position:relative;overflow:hidden}
.hp-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.2rem;padding-bottom:.8rem;border-bottom:1px solid ${a}22}
.hp-title{font-family:'Share Tech Mono',monospace;font-size:.78rem;color:${a};letter-spacing:.1em}
.hp-status{width:8px;height:8px;background:${s};border-radius:50%;animation:pulse2 2s infinite;box-shadow:0 0 8px ${s}}
@keyframes pulse2{0%,100%{opacity:1}50%{opacity:.3}}
.hp-items{display:flex;flex-direction:column;gap:.6rem}
.hp-item{background:rgba(0,212,255,.05);border:1px solid ${a}22;border-radius:2px;padding:.7rem 1rem;display:flex;align-items:center;justify-content:space-between;clip-path:polygon(4px 0,100% 0,calc(100% - 4px) 100%,0 100%)}
.hp-name{font-family:'Share Tech Mono',monospace;font-size:.78rem;color:#C8D8E8}
.hp-val{font-family:'Share Tech Mono',monospace;font-size:.72rem;color:${a}}
.tech-line{height:1px;background:linear-gradient(90deg,transparent,${a},${s},transparent);margin:3rem 0}
.services{padding:5rem 2.5rem;max-width:1100px;margin:0 auto}
.services h2{font-size:2rem;font-weight:800;color:#fff;letter-spacing:.02em;margin-bottom:.5rem}
.services h2 span{color:${a};text-shadow:0 0 15px ${a}}
.services .sub{font-family:'Share Tech Mono',monospace;font-size:.78rem;color:#4A5A6A;letter-spacing:.1em;margin-bottom:3rem}
.s-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1px;background:${a}11}
.s-card{background:#050910;padding:2rem;border:1px solid ${a}22;transition:all .3s;position:relative}
.s-card:hover{border-color:${a};background:#07101A}
.s-corner-tl,.s-corner-br{position:absolute;width:10px;height:10px;border-color:${a}}
.s-corner-tl{top:-1px;left:-1px;border-top:2px solid;border-left:2px solid}
.s-corner-br{bottom:-1px;right:-1px;border-bottom:2px solid;border-right:2px solid}
.s-id{font-family:'Share Tech Mono',monospace;font-size:.7rem;color:${a}88;margin-bottom:.8rem;letter-spacing:.1em}
.s-card h3{font-size:1rem;font-weight:700;color:#fff;margin-bottom:.6rem;letter-spacing:.03em}
.s-card p{font-size:.82rem;color:#4A5A6A;line-height:1.6}
.s-bar{height:2px;background:linear-gradient(90deg,${a},${s});margin-top:1.2rem;width:0;transition:width .5s}
.s-card:hover .s-bar{width:100%}
footer{background:rgba(0,212,255,.03);border-top:1px solid ${a}22;padding:2.5rem;text-align:center}
.f-logo{font-size:1.2rem;font-weight:800;color:#fff;letter-spacing:.1em;margin-bottom:.5rem}.f-logo span{color:${a};text-shadow:0 0 10px ${a}}
footer p{font-family:'Share Tech Mono',monospace;font-size:.75rem;color:#3A4A5A;letter-spacing:.08em}
@media(max-width:768px){.hero-inner{grid-template-columns:1fr}.hero-panel{display:none}.nav-links{display:none}}
</style></head>
<body>
<div class="dot-bg"></div>
<nav>
  <div class="logo">Website<span class="logo-accent">Ku</span></div>
  <div class="nav-links"><a href="#">BERANDA</a><a href="#">LAYANAN</a><a href="#">PORTFOLIO</a><a href="#">KONTAK</a></div>
  <a href="#" class="nav-cta">MULAI</a>
</nav>
<section class="hero">
  <div class="scan"></div>
  <div class="hero-inner">
    <div class="hero-text">
      <div class="hero-tag">▶ ${t.catName.toUpperCase()} // INITIALIZED</div>
      <h1>${t.headline.split(' ').map((w,i)=>i%3===1?`<span>${w}</span>`:w).join(' ')}</h1>
      <p>${t.sub}</p>
      <div class="hero-actions">
        <a href="#" class="btn-cyber"><span>MULAI SEKARANG</span></a>
        <a href="#" class="btn-sec">LIHAT DEMO ↗</a>
      </div>
    </div>
    <div class="hero-panel">
      <div class="hp-header">
        <span class="hp-title">SYSTEM_STATUS</span>
        <span class="hp-status"></span>
      </div>
      <div class="hp-items">
        ${t.menu.map((m,i)=>`<div class="hp-item"><span class="hp-name">${m.toUpperCase()}</span><span class="hp-val">ACTIVE_${i+1}</span></div>`).join('')}
      </div>
    </div>
  </div>
</section>
<div class="tech-line" style="margin:0 2.5rem"></div>
<section class="services">
  <h2>Modul <span>Layanan</span></h2>
  <p class="sub">▶ LOADING SERVICE MODULES... 4/4 COMPLETE</p>
  <div class="s-grid">
    ${t.menu.map((m,i)=>`<div class="s-card"><div class="s-corner-tl"></div><div class="s-corner-br"></div><div class="s-id">MOD_${String(i+1).padStart(3,'0')}</div><h3>${m}</h3><p>Modul ${m} beroperasi dalam mode optimal dengan efisiensi tertinggi.</p><div class="s-bar"></div></div>`).join('')}
  </div>
</section>
<footer>
  <div class="f-logo">WEBSITE<span>KU</span></div>
  <p>© 2025 ${t.name.toUpperCase()} — ALL SYSTEMS OPERATIONAL</p>
</footer>
</body></html>`;
}

/* ============================================================ */
/* 10. PREMIUM                                                   */
/* ============================================================ */
function tmplPremium(t) {
  const p = t.primary, s = t.secondary, a = t.accent;
  return `<!DOCTYPE html>
<html lang="id">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:'Lato',sans-serif;background:#0B0F1E;color:#D4C5A9;line-height:1.7;overflow-x:hidden}
a{text-decoration:none;color:inherit}
.gold-text{background:linear-gradient(135deg,${p} 0%,#FFF3B0 50%,${p} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
nav{position:sticky;top:0;z-index:100;padding:1.5rem 3rem;background:rgba(11,15,30,.95);backdrop-filter:blur(20px);border-bottom:1px solid ${p}22;display:flex;align-items:center;justify-content:space-between}
.logo{font-family:'Cinzel',serif;font-size:1.4rem;font-weight:600;letter-spacing:.12em;color:#fff}
.logo-gold{background:linear-gradient(135deg,${p},#FFF3B0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.nav-links{display:flex;gap:2.5rem}.nav-links a{font-size:.82rem;font-weight:300;letter-spacing:.12em;text-transform:uppercase;color:#8A9AB0;transition:color .3s}.nav-links a:hover{color:${p}}
.nav-cta{border:1px solid ${p}88;color:${p};padding:.5rem 1.5rem;font-size:.78rem;font-weight:400;letter-spacing:.12em;text-transform:uppercase;transition:all .3s}
.nav-cta:hover{background:${p};color:#000;border-color:${p}}
.hero{min-height:100vh;display:flex;align-items:center;justify-content:center;text-align:center;position:relative;overflow:hidden;padding:6rem 2rem}
.hero-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 30%,${s}18 0%,${p}08 40%,transparent 70%)}
.hero-ring{position:absolute;border-radius:50%;border:1px solid ${p}15}
.ring1{width:600px;height:600px;top:50%;left:50%;transform:translate(-50%,-50%);animation:rot 30s linear infinite}
.ring2{width:800px;height:800px;top:50%;left:50%;transform:translate(-50%,-50%);animation:rot 40s linear infinite reverse}
.ring3{width:1000px;height:1000px;top:50%;left:50%;transform:translate(-50%,-50%);animation:rot 50s linear infinite}
@keyframes rot{0%{transform:translate(-50%,-50%) rotate(0deg)}100%{transform:translate(-50%,-50%) rotate(360deg)}}
.hero-content{position:relative;max-width:800px}
.hero-crown{font-size:2.5rem;margin-bottom:1.5rem;animation:float 4s ease-in-out infinite}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.hero-eyebrow{font-size:.72rem;letter-spacing:.3em;text-transform:uppercase;color:${p}aa;margin-bottom:1.5rem;font-family:'Cinzel',serif}
.hero-content h1{font-family:'Cinzel',serif;font-size:clamp(2.2rem,6vw,4.5rem);font-weight:400;line-height:1.15;letter-spacing:.02em;color:#fff;margin-bottom:1.5rem}
.hero-content h1 em{font-style:normal;background:linear-gradient(135deg,${p},#FFF3B0,${p});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-line{display:flex;align-items:center;justify-content:center;gap:1rem;margin-bottom:1.5rem}
.h-line{width:60px;height:1px;background:linear-gradient(90deg,transparent,${p})}
.h-diamond{width:6px;height:6px;background:${p};transform:rotate(45deg)}
.hero-content p{color:#8A9AB0;font-size:.95rem;font-weight:300;letter-spacing:.06em;max-width:480px;margin:0 auto 2.5rem;line-height:1.9}
.hero-btns{display:flex;gap:1.5rem;justify-content:center;align-items:center;flex-wrap:wrap}
.btn-gold{background:linear-gradient(135deg,${p},#FFF3B0,${p});color:#0B0F1E;padding:.95rem 2.5rem;font-family:'Cinzel',serif;font-size:.82rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;transition:all .3s;box-shadow:0 6px 24px ${p}44}
.btn-gold:hover{transform:translateY(-3px);box-shadow:0 12px 40px ${p}66}
.btn-outline-gold{border:1px solid ${p}66;color:#C4B484;padding:.95rem 2.5rem;font-size:.78rem;font-weight:300;letter-spacing:.15em;text-transform:uppercase;transition:all .3s}
.btn-outline-gold:hover{border-color:${p};color:${p}}
.divider{display:flex;align-items:center;gap:0;border-top:1px solid ${p}15;border-bottom:1px solid ${p}15}
.div-item{flex:1;padding:2.5rem;text-align:center;border-right:1px solid ${p}15}
.div-item:last-child{border-right:none}
.div-num{font-family:'Cinzel',serif;font-size:2.2rem;font-weight:600;background:linear-gradient(135deg,${p},#FFF3B0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.div-label{font-size:.72rem;letter-spacing:.15em;text-transform:uppercase;color:#5A6A7A;margin-top:.5rem}
.collection{padding:6rem 3rem;max-width:1200px;margin:0 auto}
.col-header{text-align:center;margin-bottom:4rem}
.col-tag{font-size:.72rem;letter-spacing:.3em;text-transform:uppercase;color:${p}aa;margin-bottom:1rem;font-family:'Cinzel',serif}
.col-header h2{font-family:'Cinzel',serif;font-size:2.2rem;font-weight:400;color:#fff;margin-bottom:.5rem}
.col-header p{color:#5A6A7A;font-size:.85rem;font-weight:300;letter-spacing:.05em}
.col-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1px;background:${p}15}
.col-item{background:#0B0F1E;padding:2.5rem 2rem;transition:all .4s;position:relative}
.col-item:hover{background:#0F1525}
.col-roman{font-family:'Cinzel',serif;font-size:.85rem;color:${p}55;margin-bottom:1rem;letter-spacing:.15em}
.col-item h3{font-family:'Cinzel',serif;font-size:1.15rem;font-weight:400;color:#D4C5A9;margin-bottom:.7rem;letter-spacing:.05em}
.col-item p{font-size:.82rem;color:#5A6A7A;line-height:1.7;font-weight:300}
.col-arrow{display:inline-flex;align-items:center;gap:.5rem;margin-top:1.2rem;font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:${p}88;transition:color .3s}
.col-item:hover .col-arrow{color:${p}}
.col-border-bot{position:absolute;bottom:0;left:2rem;right:2rem;height:1px;background:linear-gradient(90deg,transparent,${p}44,transparent);transform:scaleX(0);transition:transform .4s}
.col-item:hover .col-border-bot{transform:scaleX(1)}
.cta{background:#080B14;border-top:1px solid ${p}15;border-bottom:1px solid ${p}15;padding:6rem 2rem;text-align:center}
.cta-inner{max-width:600px;margin:0 auto}
.cta-inner h2{font-family:'Cinzel',serif;font-size:2.2rem;font-weight:400;color:#fff;margin-bottom:1rem}
.cta-inner p{color:#5A6A7A;font-size:.88rem;font-weight:300;margin-bottom:2.5rem;letter-spacing:.03em}
footer{background:#080B14;border-top:1px solid ${p}15;padding:3rem;text-align:center}
.f-logo{font-family:'Cinzel',serif;font-size:1.5rem;color:#fff;letter-spacing:.15em;margin-bottom:.5rem}
.f-logo span{background:linear-gradient(135deg,${p},#FFF3B0);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
footer p{font-size:.75rem;color:#3A4A5A;letter-spacing:.1em;text-transform:uppercase}
@media(max-width:768px){nav{padding:1rem 1.5rem}.nav-links{display:none}.divider{flex-wrap:wrap}.div-item{border-right:none;border-bottom:1px solid ${p}15}.collection{padding:4rem 1.5rem}}
</style></head>
<body>
<nav>
  <div class="logo">WEBSITE<span class="logo-gold">KU</span></div>
  <div class="nav-links"><a href="#">BERANDA</a><a href="#">KOLEKSI</a><a href="#">TENTANG</a><a href="#">RESERVASI</a></div>
  <a href="#" class="nav-cta">RESERVASI</a>
</nav>
<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-ring ring1"></div>
  <div class="hero-ring ring2"></div>
  <div class="hero-ring ring3"></div>
  <div class="hero-content">
    <div class="hero-crown">👑</div>
    <div class="hero-eyebrow">${t.catName}</div>
    <h1>${t.headline.split(' ').slice(0,2).join(' ')} <em>${t.headline.split(' ').slice(2).join(' ')}</em></h1>
    <div class="hero-line"><div class="h-line"></div><div class="h-diamond"></div><div class="h-line" style="transform:scaleX(-1)"></div></div>
    <p>${t.sub}</p>
    <div class="hero-btns">
      <a href="#" class="btn-gold">Reservasi Eksklusif</a>
      <a href="#" class="btn-outline-gold">Pelajari Kami</a>
    </div>
  </div>
</section>
<div class="divider">
  <div class="div-item"><div class="div-num">25+</div><div class="div-label">Tahun Keunggulan</div></div>
  <div class="div-item"><div class="div-num">1K+</div><div class="div-label">Klien Elite</div></div>
  <div class="div-item"><div class="div-num">20</div><div class="div-label">Penghargaan</div></div>
  <div class="div-item"><div class="div-num">5★</div><div class="div-label">Rating Teratas</div></div>
</div>
<section class="collection">
  <div class="col-header">
    <div class="col-tag">Pilihan Terbaik</div>
    <h2>Koleksi <span class="gold-text">Eksklusif</span></h2>
    <p>Pengalaman premium yang dirancang untuk mereka yang menghargai keunggulan.</p>
  </div>
  <div class="col-grid">
    ${t.menu.map((m,i)=>`<div class="col-item"><div class="col-border-bot"></div><div class="col-roman">${['I','II','III','IV'][i%4]}</div><h3>${m}</h3><p>Pengalaman ${m} eksklusif dengan standar kelas dunia dan pelayanan yang tak tertandingi.</p><div class="col-arrow">Selengkapnya →</div></div>`).join('')}
  </div>
</section>
<section class="cta">
  <div class="cta-inner">
    <h2>Mulai Pengalaman <span class="gold-text">Premium</span></h2>
    <p>Hubungi tim kami untuk konsultasi eksklusif dan penawaran yang disesuaikan.</p>
    <a href="#" class="btn-gold">Hubungi Kami Sekarang</a>
  </div>
</section>
<footer>
  <div class="f-logo">WEBSITE<span>KU</span></div>
  <p>© 2025 ${t.name} — Excellence in Every Detail</p>
</footer>
</body></html>`;
}

/* ============================================================ */
/* MINI CARD PREVIEW RENDERER (for portfolio grid cards)        */
/* ============================================================ */
function getCardPreviewStyle(tpl) {
  const styles = {
    minimalist:    { bg:'#FAFAFA', navBg:'#fff', navBorder:'1px solid #E5E5E5', navColor:'#333', heroGrad:'linear-gradient(135deg,'+tpl.secondary+' 0%,'+tpl.primary+'22 100%)', h1Color:'#1A1A1A', btnBg:tpl.primary, btnColor:'#fff', font:'DM Sans' },
    corporate:     { bg:tpl.primary, navBg:tpl.primary, navBorder:'none', navColor:'#fff', heroGrad:'linear-gradient(135deg,'+tpl.primary+','+tpl.secondary+')', h1Color:'#fff', btnBg:'#fff', btnColor:tpl.primary, font:'Inter' },
    luxury:        { bg:'#0A0A0A', navBg:'rgba(10,10,10,.95)', navBorder:'1px solid '+tpl.secondary+'33', navColor:tpl.secondary, heroGrad:'radial-gradient(ellipse at 50% 30%,'+tpl.primary+'22 0%,transparent 65%)', h1Color:'#fff', btnBg:tpl.secondary, btnColor:'#000', font:'serif' },
    dark:          { bg:'#0D0D0D', navBg:'#111', navBorder:'1px solid rgba(255,255,255,.08)', navColor:'#888', heroGrad:'linear-gradient(160deg,#0D0D0D 50%,'+tpl.primary+'11 100%)', h1Color:'#fff', btnBg:tpl.primary, btnColor:'#fff', font:'Space Grotesk' },
    glassmorphism: { bg:'linear-gradient(135deg,#0F0520,#1A0635,#0E1B3D)', navBg:'rgba(10,5,20,.6)', navBorder:'1px solid rgba(255,255,255,.08)', navColor:'rgba(255,255,255,.7)', heroGrad:'radial-gradient(ellipse at 50%,-10%,'+tpl.primary+'33 0%,'+tpl.secondary+'11 40%,transparent)', h1Color:'#fff', btnBg:'linear-gradient(135deg,'+tpl.primary+','+tpl.secondary+')', btnColor:'#fff', font:'Plus Jakarta Sans' },
    neon:          { bg:'#030305', navBg:'rgba(3,3,5,.9)', navBorder:'1px solid '+tpl.primary+'44', navColor:tpl.primary, heroGrad:'#030305', h1Color:tpl.primary, btnBg:'transparent', btnColor:tpl.primary, font:'Rajdhani' },
    startup:       { bg:'#050510', navBg:'rgba(5,5,16,.85)', navBorder:'1px solid rgba(255,255,255,.07)', navColor:'#8892A4', heroGrad:'radial-gradient(ellipse at 50% -10%,'+tpl.primary+'33 0%,transparent 70%)', h1Color:'#fff', btnBg:'linear-gradient(135deg,'+tpl.primary+','+tpl.secondary+')', btnColor:'#fff', font:'Inter' },
    elegant:       { bg:'#FAFAF6', navBg:'#fff', navBorder:'1px solid #EDE8E3', navColor:'#888', heroGrad:'linear-gradient(135deg,'+tpl.secondary+','+tpl.primary+'22)', h1Color:'#2A1E1A', btnBg:tpl.primary, btnColor:'#fff', font:'Libre Baskerville' },
    futuristic:    { bg:'#050910', navBg:'rgba(5,9,16,.9)', navBorder:'1px solid '+tpl.accent+'22', navColor:tpl.accent, heroGrad:'#050910', h1Color:'#fff', btnBg:'transparent', btnColor:tpl.accent, font:'Exo 2' },
    premium:       { bg:'#0B0F1E', navBg:'rgba(11,15,30,.95)', navBorder:'1px solid '+tpl.primary+'22', navColor:tpl.primary, heroGrad:'radial-gradient(ellipse at 50% 30%,'+tpl.secondary+'18 0%,transparent 70%)', h1Color:'#fff', btnBg:'linear-gradient(135deg,'+tpl.primary+',#FFF3B0)', btnColor:'#000', font:'Cinzel' },
  };
  return styles[tpl.style] || styles.startup;
}
