/* ============================================================
   WebsiteKu — Template Generators (10 style functions)
   ============================================================ */

const _RATES=[4.8,4.9,4.9,5.0,4.8,5.0,4.9,4.8,4.9,5.0];
const _BUYS=[523,1247,891,672,1089,543,2134,734,956,1423];
function fStar(i){return '—';}
function fBuy(i){return '—';}
function fImg(i){return 'assets/foto-produk-'+((i%7)+1)+'.png';}
function fPrice(cat,i){
  var p=[[25,49,75,99],[850,1200,2500,5000],[85,150,250,399],[299,599,999,1999],[199,349,599,899]];
  var r=p[(cat-1)]||p[4],v=r[i%r.length];
  if(cat==2) return v>=1000?'Rp '+(v/1000).toFixed(1)+'M':'Mulai Rp '+v+'Jt';
  if(v>=1000) return 'Rp '+(v/1000).toFixed(1).replace('.',',')+'jt';
  return 'Rp '+v+'.000';
}

/* Shared FAQ HTML (same content all templates) */
function faqHTML(){return `
  <details><summary>Berapa lama proses pengerjaan?</summary><div class="faq-answer">Tergantung scope dan kesiapan konten (teks/foto). Setelah brief jelas, kami berikan estimasi yang realistis.</div></details>
  <details><summary>Apakah bisa revisi?</summary><div class="faq-answer">Bisa. Jumlah revisi mengikuti paket yang dipilih. Kami sarankan feedback dikumpulkan dalam satu list agar revisi efisien.</div></details>
  <details><summary>Apakah website mobile-friendly?</summary><div class="faq-answer">Ya. Tampilan dirancang responsif untuk mobile dan desktop, dengan fokus pada navigasi yang jelas.</div></details>
  <details><summary>Bagaimana proses pemesanan?</summary><div class="faq-answer">Mulai dari konsultasi singkat → brief & konten → desain awal → revisi → publish. Semua tahap dijelaskan di awal supaya tidak membingungkan.</div></details>
  <details><summary>Apakah ada garansi?</summary><div class="faq-answer">Ada garansi bug teknis sesuai paket yang dipilih. Perubahan fitur baru di luar scope dikerjakan sebagai pengembangan terpisah.</div></details>`;}

/* Shared testimonials HTML */
function testiHTML(){return `
  <div class="testi-card"><div class="testi-stars">★★★★★</div><p class="testi-text">"Contoh testimoni. Konten bisa diganti sesuai data dan pengalaman customer bisnis Anda."</p><div class="testi-author"><div class="testi-av">KF</div><div><div class="testi-name">Klien F&amp;B</div><div class="testi-role">Landing Page</div></div></div></div>
  <div class="testi-card"><div class="testi-stars">★★★★★</div><p class="testi-text">"Contoh testimoni. Fokus pada hal yang benar-benar dicari customer: jelas, rapi, dan mudah dihubungi."</p><div class="testi-author"><div class="testi-av">KC</div><div><div class="testi-name">Klien Corporate</div><div class="testi-role">Company Profile</div></div></div></div>
  <div class="testi-card"><div class="testi-stars">★★★★★</div><p class="testi-text">"Contoh testimoni. Tampilkan manfaat spesifik, misalnya proses yang jelas dan hasil yang lebih profesional."</p><div class="testi-author"><div class="testi-av">KR</div><div><div class="testi-name">Klien Retail</div><div class="testi-role">Toko Online</div></div></div></div>`;}

function generateSplash(t){
  var s=t.style;
  var ac=t.primary;
  var sc=t.secondary||t.accent||ac;
  var bn=t.name.replace('WebsiteKu ','');
  var ctag={1:'Kuliner & Restoran',2:'Properti & Hunian',3:'Kesehatan & Kecantikan',4:'Teknologi & Digital',5:'Bisnis & UMKM'}[t.cat]||'Profil Bisnis';
  var glowClr={gastro:'#C4A35A',aether:'#C9A87C',lumina:'#00C5D7',nexus:'#22D3EE',zenith:'#8B5CF6',minimalist:'#6C63FF',corporate:ac,luxury:'#C9A84C',dark:'#8B5CF6',glassmorphism:'#7C3AED',neon:'#39FF14',startup:'#6C63FF',elegant:'#A08060',futuristic:'#00D4FF',premium:'#C9A84C'}[s]||ac;
  var hl=t.headline||bn;
  return '<div id="__sp" style="position:fixed;inset:0;z-index:99999;background:#040406;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;font-family:Inter,sans-serif;">'+
  '<style>'+
  '#__sp{animation:__spFadeIn .3s ease forwards}'+
  '@keyframes __spFadeIn{from{opacity:0}to{opacity:1}}'+
  '#__sp-glow{position:absolute;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,'+glowClr+'28 0%,transparent 65%);top:50%;left:50%;transform:translate(-50%,-55%);animation:__spGlow 3s ease-in-out infinite}'+
  '@keyframes __spGlow{0%,100%{opacity:.5;transform:translate(-50%,-55%) scale(1)}50%{opacity:1;transform:translate(-50%,-55%) scale(1.2)}}'+
  '#__sp-grid{position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 50px,rgba(255,255,255,.018) 50px,rgba(255,255,255,.018) 51px),repeating-linear-gradient(90deg,transparent,transparent 50px,rgba(255,255,255,.018) 50px,rgba(255,255,255,.018) 51px)}'+
  '#__sp-badge{font-size:.6rem;font-weight:800;letter-spacing:.35em;text-transform:uppercase;color:'+glowClr+';border:1px solid '+glowClr+'44;padding:.28rem 1rem;border-radius:100px;margin-bottom:2.2rem;opacity:0;animation:__spUp .6s ease .3s forwards}'+
  '@keyframes __spUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}'+
  '#__sp-logo{width:60px;height:60px;object-fit:contain;filter:brightness(0) invert(1);margin:0 auto 2rem;display:block;opacity:0;animation:__spScale .8s cubic-bezier(.34,1.56,.64,1) .1s forwards}'+
  '@keyframes __spScale{from{opacity:0;transform:scale(.5)}to{opacity:1;transform:scale(1)}}'+
  '#__sp-name{font-size:clamp(2.2rem,8vw,4.5rem);font-weight:900;color:#fff;letter-spacing:-.04em;line-height:1;margin:0 0 1.1rem;text-align:center;overflow:hidden}'+
  '#__sp-name-inner{display:block;opacity:0;animation:__spSlide .7s cubic-bezier(.22,1,.36,1) .75s forwards}'+
  '@keyframes __spSlide{from{opacity:0;transform:translateY(110%)}to{opacity:1;transform:translateY(0)}}'+
  '#__sp-line{width:36px;height:1px;background:linear-gradient(90deg,transparent,'+glowClr+',transparent);margin:.9rem auto 1rem;opacity:0;animation:__spUp .6s ease 1.0s forwards}'+
  '#__sp-sub{font-size:.85rem;color:rgba(255,255,255,.38);text-align:center;max-width:320px;line-height:1.7;margin:0 auto;opacity:0;animation:__spUp .6s ease 1.2s forwards}'+
  '#__sp-bar{position:absolute;bottom:0;left:0;right:0;height:2px;background:rgba(255,255,255,.08)}'+
  '#__sp-fill{height:100%;width:0;background:linear-gradient(90deg,'+glowClr+','+sc+');animation:__spBar 3.0s linear .5s forwards}'+
  '@keyframes __spBar{to{width:100%}}'+
  '#__sp-skip{position:absolute;top:1rem;right:1.2rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:rgba(255,255,255,.4);font-size:.68rem;font-weight:600;letter-spacing:.1em;padding:.3rem .8rem;border-radius:100px;cursor:pointer;transition:all .25s;font-family:inherit}'+
  '#__sp-skip:hover{background:rgba(255,255,255,.14);color:rgba(255,255,255,.8)}'+
  '#__sp.__sp-out{opacity:0;transform:scale(1.03);transition:opacity .55s ease,transform .55s ease}'+
  '</style>'+
  '<div id="__sp-glow"></div><div id="__sp-grid"></div>'+
  '<div style="position:relative;z-index:2;text-align:center;padding:2rem 1.5rem;max-width:540px;width:100%">'+
  '<div id="__sp-badge">&#9670; '+ctag+'</div>'+
  '<img id="__sp-logo" src="assets/logo-placeholder.png" alt="logo">'+
  '<h1 id="__sp-name"><span id="__sp-name-inner">'+bn+'</span></h1>'+
  '<div id="__sp-line"></div>'+
  '<p id="__sp-sub">'+hl+'</p>'+
  '</div>'+
  '<div id="__sp-bar"><div id="__sp-fill"></div></div>'+
  '<button id="__sp-skip" onclick="__spX()">Lewati &rsaquo;</button>'+
  '<script>function __spX(){var e=document.getElementById("__sp");if(!e||e.dataset.x)return;e.dataset.x=1;e.classList.add("__sp-out");setTimeout(function(){e.style.display="none"},560);}setTimeout(function(){__spX()},3700);<\/script>'+
  '</div>';
}

function generatePremiumInjection(t){
  var ac=t.primary;
  return '<style id="__prem">'+
  'html{scroll-behavior:smooth}'+
  '::-webkit-scrollbar{width:3px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:'+ac+'55;border-radius:2px}::-webkit-scrollbar-thumb:hover{background:'+ac+'}'+
  '.btn-fill,.btn-primary,.btn-cta,.order-btn,[class*="btn-p"]{position:relative!important;overflow:hidden!important}'+
  '.btn-fill::before,.btn-primary::before,.btn-cta::before,.order-btn::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.13),transparent);transform:translateX(-110%);transition:transform .55s ease}'+
  '.btn-fill:hover::before,.btn-primary:hover::before,.btn-cta:hover::before,.order-btn:hover::before{transform:translateX(110%)}'+
  '</style>'+
  '<script>(function(){'+
  'var obs=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){var el=e.target;el.style.opacity="1";el.style.transform="translateY(0)";obs.unobserve(el);setTimeout(function(){el.style.opacity="";el.style.transform="";el.style.transition="";},700);}})},{threshold:.05});'+
  'document.querySelectorAll(".product-card,.menu-item,.prod-card,.testi-card,.faq-details,.about-feat-item,.proses-step,.ki-item,.service-item,.pkg-card").forEach(function(el,i){'+
  'el.style.opacity="0";el.style.transform="translateY(20px)";el.style.transition="opacity .6s ease "+(i%4*.08)+"s,transform .6s cubic-bezier(.22,1,.36,1) "+(i%4*.08)+"s";'+
  'obs.observe(el);});'+
  '})();<\/script>';
}

function generateTemplateHTML(tpl,base){
  base=base||'';
  var html;
  switch(tpl.style){
    case 'gastro':  html=tmplGastro(tpl,base);  break;
    case 'aether':  html=tmplAether(tpl,base);  break;
    case 'lumina':  html=tmplLumina(tpl,base);  break;
    case 'nexus':   html=tmplNexus(tpl,base);   break;
    case 'zenith':  html=tmplZenith(tpl,base);  break;
    default:        html=tmplZenith(tpl,base);
  }
  html=html.replace('<body>','<body>'+generateSplash(tpl));
  html=html.replace(/<section class="gallery">[\s\S]*?<\/section>/,generateWhyUs(tpl));
  html=html.replace('</body>',generatePremiumInjection(tpl)+'</body>');
  return html;
}

function generateWhyUs(t){
  var s=t.style;
  var isDk=['gastro','aether','lumina','nexus','zenith','corporate','luxury','dark','glassmorphism','neon','startup','futuristic','premium'].indexOf(s)>=0;
  var tc=isDk?'#fff':'#111';var sc=isDk?'rgba(255,255,255,.62)':'#555';
  var sbgs={gastro:'rgba(0,0,0,.25)',aether:'rgba(0,0,0,.2)',lumina:'rgba(0,20,30,.3)',nexus:'rgba(0,0,0,.25)',zenith:'rgba(0,0,0,.2)',minimalist:'#F5F5F5',corporate:'rgba(0,0,0,.1)',luxury:'#080808',dark:'#0D0D0D',glassmorphism:'rgba(0,0,0,.15)',neon:'rgba(0,0,0,.2)',startup:'rgba(255,255,255,.02)',elegant:'#F0EDE8',futuristic:'rgba(0,0,0,.15)',premium:'rgba(0,0,0,.15)'};
  var cbgs={gastro:'rgba(255,255,255,.04)',aether:'rgba(255,255,255,.04)',lumina:'rgba(255,255,255,.06)',nexus:'rgba(255,255,255,.04)',zenith:'rgba(255,255,255,.05)',minimalist:'#fff',corporate:'rgba(255,255,255,.06)',luxury:'rgba(255,255,255,.04)',dark:'rgba(255,255,255,.04)',glassmorphism:'rgba(255,255,255,.04)',neon:'rgba(0,0,0,.4)',startup:'rgba(255,255,255,.04)',elegant:'#fff',futuristic:'rgba(255,255,255,.03)',premium:'rgba(255,255,255,.04)'};
  var bdrs={gastro:'rgba(196,163,90,.2)',aether:'rgba(201,168,124,.2)',lumina:'rgba(0,197,215,.2)',nexus:'rgba(34,211,238,.15)',zenith:'rgba(139,92,246,.2)',minimalist:'#E5E5E5',corporate:'rgba(255,255,255,.1)',luxury:'rgba(255,255,255,.06)',dark:'rgba(255,255,255,.06)',glassmorphism:'rgba(255,255,255,.06)',neon:t.primary+'33',startup:'rgba(255,255,255,.06)',elegant:'#E8E0D8',futuristic:t.accent+'22',premium:'rgba(255,255,255,.06)'};
  var sbg=sbgs[s]||'rgba(0,0,0,.1)';var cbg=cbgs[s]||'rgba(255,255,255,.04)';var bdr=bdrs[s]||'rgba(255,255,255,.06)';
  var p=t.primary;var bn=t.name.replace('WebsiteKu ','');
  var feats={
    1:[['🌿','Bahan Berkualitas','Contoh isi keunggulan. Teks bisa diganti sesuai menu, bahan, dan standar kualitas bisnis Anda.'],['👨‍🍳','Tim Berpengalaman','Contoh isi keunggulan. Ceritakan pengalaman tim/brand dan nilai yang membuat Anda berbeda.'],['⚡','Pelayanan Efisien','Contoh isi keunggulan. Jelaskan alur pemesanan, waktu layanan, dan pengalaman pelanggan.'],['🏆','Brand yang Konsisten','Contoh isi keunggulan. Tampilkan reputasi, highlight produk, atau USP yang bisa dibuktikan.']],
    2:[['📍','Lokasi & Akses','Contoh isi keunggulan. Sesuaikan dengan area, akses, dan poin nilai properti Anda.'],['📋','Dokumen & Info Jelas','Contoh isi keunggulan. Cantumkan detail legalitas/ketentuan sesuai kondisi sebenarnya.'],['🏗️','Kualitas Konstruksi','Contoh isi keunggulan. Jelaskan material, spesifikasi, dan standar pengerjaan secara realistis.'],['🤝','Pendampingan Proses','Contoh isi keunggulan. Jelaskan proses penawaran, survei, dan bantuan administrasi sesuai layanan Anda.']],
    3:[['🩺','Tenaga Profesional','Contoh isi keunggulan. Cantumkan kredensial yang benar dan bisa diverifikasi.'],['🔬','Peralatan & Metode','Contoh isi keunggulan. Jelaskan teknologi/metode sesuai layanan yang benar-benar tersedia.'],['🌸','Perawatan Personal','Contoh isi keunggulan. Jelaskan pendekatan konsultasi, treatment, dan tujuan pelanggan.'],['✅','Fokus pada Hasil','Contoh isi keunggulan. Sertakan klaim yang bisa dibuktikan atau gunakan bahasa yang aman.']],
    4:[['🚀','Solusi Sesuai Kebutuhan','Contoh isi keunggulan. Tekankan hasil bisnis dan alur kerja yang dibangun.'],['🔒','Keamanan & Akses','Contoh isi keunggulan. Jelaskan kontrol akses, keamanan dasar, dan best practice.'],['📊','Data yang Mudah Dibaca','Contoh isi keunggulan. Jelaskan dashboard, laporan, dan export sesuai kebutuhan.'],['🌐','Siap Dikembangkan','Contoh isi keunggulan. Aplikasi bisa ditambah modul baru saat kebutuhan bertumbuh.']],
    5:[['💡','Ringkas & Jelas','Contoh isi keunggulan. Teks dibuat fokus ke kebutuhan customer dan CTA yang jelas.'],['📱','Mobile Friendly','Contoh isi keunggulan. Tampilkan benefit UX, kecepatan, dan navigasi yang nyaman.'],['🎯','Konversi Lebih Baik','Contoh isi keunggulan. Fokus pada struktur konten yang membantu pengunjung mengambil keputusan.'],['💬','Support yang Realistis','Contoh isi keunggulan. Jelaskan jam operasional dan kanal support sesuai yang benar-benar Anda sediakan.']]
  };
  var fs=feats[t.cat]||feats[5];
  return '<section class="why-us" style="padding:5rem 5%;background:'+sbg+'"><div style="max-width:1200px;margin:0 auto"><div style="text-align:center;margin-bottom:3.5rem"><div style="display:inline-block;background:'+p+'22;color:'+p+';border:1px solid '+p+'44;border-radius:100px;padding:.3rem 1.1rem;font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:1rem">Keunggulan Kami</div><h2 style="font-size:clamp(1.5rem,3.5vw,2.2rem);font-weight:800;color:'+tc+';margin:0 0 .6rem;line-height:1.25">Mengapa Memilih <span style="color:'+p+'">'+bn+'?</span></h2><p style="color:'+sc+';font-size:.9rem;max-width:480px;margin:0 auto;line-height:1.65">Lebih dari sekadar layanan — pengalaman yang melampaui ekspektasi dengan hasil nyata dan terukur.</p></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1.5rem">'+fs.map(function(f){return '<div style="background:'+cbg+';border:1px solid '+bdr+';border-radius:16px;padding:1.8rem 1.6rem"><div style="font-size:1.8rem;margin-bottom:1rem">'+f[0]+'</div><h3 style="font-size:.95rem;font-weight:700;color:'+tc+';margin:0 0 .5rem">'+f[1]+'</h3><p style="font-size:.83rem;color:'+sc+';line-height:1.65;margin:0">'+f[2]+'</p></div>';}).join('')+'</div></div></section>';
}

/* ============================================================ */
/* 1. MINIMALIST                                                 */
/* ============================================================ */

/* ============================================================
   5 PREMIUM TEMPLATES — each worthy of 100M+ IDR contracts
   ============================================================ */

/* ── 1. NOIR GASTRO — Fine Dining Dark Luxury ──────────────── */
function tmplGastro(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<4)mn=mn.concat(mn);
  var wa='6281234567890';
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:${s};color:#E8D5A3;line-height:1.6;overflow-x:hidden}
a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}

/* NAV */
.nav{position:fixed;top:0;left:0;right:0;z-index:200;padding:1.4rem 5%;display:flex;align-items:center;justify-content:space-between;background:linear-gradient(180deg,rgba(26,18,8,.95) 0%,transparent 100%);backdrop-filter:blur(2px)}
.nav-logo{height:32px;filter:brightness(0) invert(1) sepia(1) saturate(0.5) hue-rotate(10deg)}
.nav-links{display:flex;gap:2.2rem;list-style:none}
.nav-links a{font-size:.75rem;font-weight:400;letter-spacing:.18em;text-transform:uppercase;color:rgba(232,213,163,.65);transition:color .3s}
.nav-links a:hover{color:${p}}
.nav-cta{font-size:.7rem;font-weight:500;letter-spacing:.15em;text-transform:uppercase;padding:.55rem 1.4rem;border:1px solid ${p}66;color:${p};transition:all .3s;border-radius:0}
.nav-cta:hover{background:${p};color:${s}}

/* HERO */
.hero{position:relative;height:100vh;min-height:700px;display:flex;align-items:center;overflow:hidden}
.hero-bg{position:absolute;inset:0;background:url(assets/foto-produk-1.png) center/cover no-repeat}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(26,18,8,.92) 0%,rgba(26,18,8,.5) 60%,rgba(26,18,8,.2) 100%)}
.hero-content{position:relative;z-index:2;padding:0 5%;max-width:720px}
.hero-eyebrow{display:flex;align-items:center;gap:.8rem;margin-bottom:2rem}
.hero-eyebrow-line{width:40px;height:1px;background:${p}}
.hero-eyebrow-txt{font-size:.65rem;letter-spacing:.3em;text-transform:uppercase;color:${p};font-weight:500}
.hero h1{font-family:'Cormorant Garamond',serif;font-size:clamp(3rem,6vw,5.2rem);font-weight:300;line-height:1.1;letter-spacing:-.01em;color:#fff;margin-bottom:1.5rem}
.hero h1 em{font-style:italic;color:${p}}
.hero-sub{font-size:.95rem;color:rgba(232,213,163,.65);line-height:1.85;max-width:480px;margin-bottom:2.8rem;font-weight:300}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap}
.btn-gold{padding:.9rem 2.2rem;background:${p};color:${s};font-size:.78rem;font-weight:600;letter-spacing:.15em;text-transform:uppercase;transition:all .35s}
.btn-gold:hover{background:#D4B36A;transform:translateY(-2px)}
.btn-ghost{padding:.9rem 2.2rem;border:1px solid rgba(232,213,163,.3);color:rgba(232,213,163,.8);font-size:.78rem;font-weight:400;letter-spacing:.12em;text-transform:uppercase;transition:all .3s}
.btn-ghost:hover{border-color:${p}88;color:${p}}
.hero-scroll{position:absolute;bottom:2.5rem;left:50%;transform:translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:.5rem;z-index:2}
.hero-scroll span{font-size:.6rem;letter-spacing:.25em;text-transform:uppercase;color:rgba(232,213,163,.35)}
.hero-scroll-line{width:1px;height:40px;background:linear-gradient(180deg,${p},transparent);animation:scrollLine 2s ease-in-out infinite}
@keyframes scrollLine{0%,100%{opacity:.3;transform:scaleY(.8)}50%{opacity:1;transform:scaleY(1)}}

/* MARQUEE STRIP */
.marquee-strip{background:${p};padding:.7rem 0;overflow:hidden;white-space:nowrap}
.marquee-inner{display:inline-flex;gap:0;animation:marquee 20s linear infinite}
.marquee-item{font-size:.65rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${s};padding:0 2.5rem}
.marquee-sep{color:${s}66}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

/* MENU SECTION */
.menu-section{padding:7rem 5%;max-width:1200px;margin:0 auto}
.sec-eyebrow{display:flex;align-items:center;gap:.8rem;margin-bottom:1rem}
.sec-eyebrow-line{width:40px;height:1px;background:${p}}
.sec-eyebrow-txt{font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;color:${p}}
.sec-title{font-family:'Cormorant Garamond',serif;font-size:clamp(2.2rem,4vw,3.5rem);font-weight:300;color:#fff;margin-bottom:.6rem;line-height:1.15}
.sec-sub{font-size:.88rem;color:rgba(232,213,163,.5);margin-bottom:4rem;font-weight:300;max-width:500px}
.menu-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1.5px;background:rgba(196,163,90,.15)}
.menu-item{background:${s};padding:2.2rem 1.8rem;position:relative;overflow:hidden;cursor:pointer;transition:background .4s}
.menu-item::before{content:'';position:absolute;top:0;left:0;right:0;height:1px;background:linear-gradient(90deg,transparent,${p}44,transparent);transform:translateX(-100%);transition:transform .6s ease}
.menu-item:hover{background:rgba(196,163,90,.07)}
.menu-item:hover::before{transform:translateX(0)}
.menu-num{font-family:'Cormorant Garamond',serif;font-size:.85rem;color:${p}66;font-style:italic;margin-bottom:.8rem;display:block}
.menu-name{font-family:'Cormorant Garamond',serif;font-size:1.45rem;font-weight:400;color:#fff;margin-bottom:.5rem;line-height:1.2}
.menu-desc{font-size:.8rem;color:rgba(232,213,163,.45);line-height:1.7;margin-bottom:1.2rem}
.menu-price{font-size:.8rem;font-weight:500;letter-spacing:.08em;color:${p}}
.menu-arrow{position:absolute;bottom:1.8rem;right:1.8rem;font-size:.75rem;color:${p}44;transition:all .3s}
.menu-item:hover .menu-arrow{color:${p};transform:translateX(4px)}

/* GALLERY placeholder — replaced by WhyUs */
section.gallery{display:none}

/* EXPERIENCE */
.experience{padding:7rem 5%;display:grid;grid-template-columns:1fr 1fr;gap:6rem;max-width:1200px;margin:0 auto;align-items:center}
.exp-img-wrap{position:relative}
.exp-img{aspect-ratio:3/4;border-radius:0;overflow:hidden}
.exp-img img{height:100%;object-fit:cover;filter:sepia(.15) contrast(1.05)}
.exp-badge{position:absolute;bottom:-1.5rem;right:-1.5rem;background:${p};color:${s};padding:1.5rem;text-align:center;width:120px}
.exp-badge-num{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:300;line-height:1;display:block}
.exp-badge-txt{font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;opacity:.7;margin-top:.3rem;display:block}
.exp-feats{display:flex;flex-direction:column;gap:1.5rem;margin-top:2.5rem}
.exp-feat{display:flex;gap:1rem;align-items:flex-start;padding:1.2rem;border:1px solid rgba(196,163,90,.12);transition:border-color .3s}
.exp-feat:hover{border-color:rgba(196,163,90,.3)}
.exp-feat-icon{font-size:1.2rem;margin-top:.1rem;flex-shrink:0}
.exp-feat-title{font-size:.9rem;font-weight:500;color:#fff;margin-bottom:.25rem}
.exp-feat-txt{font-size:.8rem;color:rgba(232,213,163,.5);line-height:1.6}

/* TESTIMONIALS */
.testi-section{padding:7rem 5%;background:rgba(0,0,0,.3)}
.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5px;background:rgba(196,163,90,.1);margin-top:4rem}
.testi-card{background:${s};padding:2.2rem}
.testi-stars{color:${p};font-size:.9rem;letter-spacing:.1em;margin-bottom:1rem}
.testi-text{font-family:'Cormorant Garamond',serif;font-size:1.05rem;font-weight:300;color:rgba(255,255,255,.75);line-height:1.8;font-style:italic;margin-bottom:1.5rem}
.testi-author{display:flex;align-items:center;gap:.8rem}
.testi-av{width:38px;height:38px;background:rgba(196,163,90,.15);border:1px solid ${p}33;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:600;color:${p}}
.testi-name{font-size:.85rem;font-weight:500;color:rgba(232,213,163,.8)}
.testi-role{font-size:.72rem;color:rgba(232,213,163,.35);margin-top:.15rem;letter-spacing:.05em}

/* FAQ */
.faq-section{padding:7rem 5%;max-width:800px;margin:0 auto}
.faq-details{border-bottom:1px solid rgba(196,163,90,.15);overflow:hidden}
.faq-details summary{padding:1.4rem 0;font-size:.9rem;font-weight:400;color:rgba(232,213,163,.8);cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;letter-spacing:.02em;transition:color .3s}
.faq-details summary:hover{color:#fff}
.faq-details summary::after{content:'+';font-size:1.2rem;color:${p};font-weight:300;flex-shrink:0}
.faq-details[open] summary::after{content:'−'}
.faq-answer{padding:.5rem 0 1.4rem;font-size:.85rem;color:rgba(232,213,163,.5);line-height:1.75}

/* CTA */
.cta-section{padding:7rem 5%;text-align:center;position:relative;overflow:hidden}
.cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:600px;background:radial-gradient(circle,${p}18 0%,transparent 65%);pointer-events:none}
.cta-inner{position:relative;z-index:1}
.cta h2{font-family:'Cormorant Garamond',serif;font-size:clamp(2.5rem,5vw,4rem);font-weight:300;color:#fff;margin-bottom:1rem;line-height:1.1}
.cta h2 em{color:${p};font-style:italic}
.cta-sub{font-size:.95rem;color:rgba(232,213,163,.5);margin-bottom:2.5rem;font-weight:300}

/* FOOTER */
.footer{padding:3rem 5%;border-top:1px solid rgba(196,163,90,.12);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.footer-logo{height:26px;filter:brightness(0) invert(1) sepia(1) saturate(0.4)}
.footer-copy{font-size:.75rem;color:rgba(232,213,163,.3);letter-spacing:.05em}
.footer-links{display:flex;gap:1.5rem}
.footer-links a{font-size:.72rem;color:rgba(232,213,163,.35);letter-spacing:.08em;text-transform:uppercase;transition:color .3s}.footer-links a:hover{color:${p}}

@media(max-width:768px){
.nav-links{display:none}
.hero h1{font-size:2.6rem}
.experience{grid-template-columns:1fr;gap:3rem}
.exp-badge{right:.5rem}
.footer{flex-direction:column;text-align:center}
}
</style></head>
<body>
<nav class="nav">
  <a href="#"><img class="nav-logo" src="assets/logo-placeholder.png" alt="${t.name}"></a>
  <ul class="nav-links">
    <li><a href="#menu">Menu</a></li>
    <li><a href="#experience">Tentang</a></li>
    <li><a href="#testi">Ulasan</a></li>
    <li><a href="#faq">FAQ</a></li>
  </ul>
  <a href="https://wa.me/${wa}" class="nav-cta">Reservasi</a>
</nav>

<section class="hero">
  <div class="hero-bg"></div>
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="hero-eyebrow"><div class="hero-eyebrow-line"></div><span class="hero-eyebrow-txt">Fine Dining Experience</span></div>
    <h1>${t.headline.replace('Menjadi','<em>Menjadi</em>')}</h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-btns">
      <a href="https://wa.me/${wa}" class="btn-gold">Buat Reservasi</a>
      <a href="#menu" class="btn-ghost">Lihat Menu</a>
    </div>
  </div>
  <div class="hero-scroll"><span>Gulir</span><div class="hero-scroll-line"></div></div>
</section>

<div class="marquee-strip"><div class="marquee-inner">${['Wagyu A5','Lobster Thermidor','Foie Gras','Truffle Risotto','Fine Dining','Chef International','Private Dining','Rooftop Bar'].map(function(x){return '<span class="marquee-item">'+x+'</span><span class="marquee-sep">✦</span>';}).join('').repeat(2)}</div></div>

<section id="menu" class="menu-section">
  <div class="sec-eyebrow"><div class="sec-eyebrow-line"></div><span class="sec-eyebrow-txt">Menu Signature</span></div>
  <h2 class="sec-title">Kreasi Chef<br><em style="font-style:italic;color:${p}">Berbintang</em></h2>
  <p class="sec-sub">Setiap hidangan adalah karya seni yang diciptakan dengan presisi dan passion terdalam.</p>
  <div class="menu-grid">
    ${mn.slice(0,4).map(function(m,i){return '<div class="menu-item"><span class="menu-num">0'+(i+1)+'</span><div class="menu-name">'+m+'</div><p class="menu-desc">Diracik dari bahan pilihan finest quality dengan teknik memasak bertaraf internasional.</p><span class="menu-price">Market Price</span><span class="menu-arrow">→</span></div>';}).join('')}
  </div>
</section>

<section class="gallery"><p>placeholder</p></section>

<section id="experience" class="experience">
  <div class="exp-img-wrap">
    <div class="exp-img"><img src="assets/foto-produk-2.png" alt="experience"></div>
    <div class="exp-badge"><span class="exp-badge-num">10+</span><span class="exp-badge-txt">Tahun Eksklusif</span></div>
  </div>
  <div>
    <div class="sec-eyebrow"><div class="sec-eyebrow-line"></div><span class="sec-eyebrow-txt">Tentang Kami</span></div>
    <h2 class="sec-title" style="font-size:clamp(1.8rem,3vw,2.8rem)">Seni Kuliner<br><em style="font-style:italic;color:${p}">Tak Tertandingi</em></h2>
    <p style="font-size:.88rem;color:rgba(232,213,163,.5);margin:1rem 0 2rem;font-weight:300;line-height:1.8">Kami bukan sekadar restoran. Kami adalah panggung di mana setiap makan malam menjadi memori yang tak terlupakan.</p>
    <div class="exp-feats">
      <div class="exp-feat"><span class="exp-feat-icon">🥩</span><div><div class="exp-feat-title">Bahan Finest Ingredient</div><p class="exp-feat-txt">Import langsung dari farm premium Jepang, Perancis, dan Australia. Kualitas dikontrol ketat setiap hari.</p></div></div>
      <div class="exp-feat"><span class="exp-feat-icon">👨‍🍳</span><div><div class="exp-feat-title">Chef Bertaraf Internasional</div><p class="exp-feat-txt">Alumni Michelin-starred restaurants di Tokyo, Paris, dan New York. Setiap teknik adalah keahlian.</p></div></div>
      <div class="exp-feat"><span class="exp-feat-icon">🕯️</span><div><div class="exp-feat-title">Atmosfer Private Dining</div><p class="exp-feat-txt">Ruang privat tersedia untuk acara eksklusif, anniversary, dan business dinner kelas dunia.</p></div></div>
    </div>
  </div>
</section>

<section id="testi" class="testi-section">
  <div class="testi-inner">
    <div style="text-align:center">
      <div class="sec-eyebrow" style="justify-content:center"><div class="sec-eyebrow-line"></div><span class="sec-eyebrow-txt">Ulasan Tamu</span><div class="sec-eyebrow-line"></div></div>
      <h2 class="sec-title">Kata Mereka<br><em style="font-style:italic;color:${p}">Yang Telah Merasakan</em></h2>
    </div>
    <div class="testi-grid">${testiHTML()}</div>
  </div>
</section>

<section id="faq" class="faq-section">
  <div style="text-align:center;margin-bottom:3rem">
    <div class="sec-eyebrow" style="justify-content:center"><div class="sec-eyebrow-line"></div><span class="sec-eyebrow-txt">FAQ</span><div class="sec-eyebrow-line"></div></div>
    <h2 class="sec-title" style="font-size:2rem">Pertanyaan Umum</h2>
  </div>
  ${faqHTML().replace(/class="faq-answer"/g,'class="faq-answer"').replace(/<details>/g,'<details class="faq-details">').replace(/<summary>/g,'<summary>')}
</section>

<section class="cta-section">
  <div class="cta-glow"></div>
  <div class="cta-inner">
    <h2 class="cta h2" style="font-family:'Cormorant Garamond',serif;font-size:clamp(2.5rem,5vw,4rem);font-weight:300;color:#fff;margin-bottom:1rem;line-height:1.1">Siap Merasakan<br><em style="color:${p};font-style:italic">Pengalaman Istimewa?</em></h2>
    <p style="font-size:.95rem;color:rgba(232,213,163,.5);margin-bottom:2.5rem;font-weight:300">Hubungi kami sekarang untuk reservasi meja terbaik Anda.</p>
    <a href="https://wa.me/${wa}" class="btn-gold">Hubungi via WhatsApp &rarr;</a>
  </div>
</section>

<footer class="footer">
  <img class="footer-logo" src="assets/logo-placeholder.png" alt="${t.name}">
  <span class="footer-copy">© 2025 ${t.name}. All rights reserved.</span>
  <div class="footer-links"><a href="#">Instagram</a><a href="#">Reservasi</a><a href="https://wa.me/${wa}">WhatsApp</a></div>
</footer>
</body></html>`;
}

/* ── 2. AETHER LIVING — Architectural Property ──────────────── */
function tmplAether(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<4)mn=mn.concat(mn);
  var wa='6281234567890';
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:${s};color:#D4C4A8;line-height:1.6;overflow-x:hidden}
a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}

.nav{position:fixed;top:0;left:0;right:0;z-index:200;padding:1.2rem 5%;display:flex;align-items:center;justify-content:space-between;background:rgba(26,29,38,.92);backdrop-filter:blur(16px);border-bottom:1px solid rgba(201,168,124,.08)}
.nav-logo{height:30px;filter:brightness(0) invert(1) sepia(1) saturate(0.4)}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.75rem;font-weight:400;letter-spacing:.14em;text-transform:uppercase;color:rgba(212,196,168,.5);transition:color .3s}
.nav-links a:hover{color:${p}}
.nav-cta{font-size:.7rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;padding:.5rem 1.3rem;border:1px solid ${p}55;color:${p};transition:all .3s}
.nav-cta:hover{background:${p};color:${s}}

.hero{position:relative;height:100vh;min-height:680px;display:grid;grid-template-columns:1fr 1fr}
.hero-left{display:flex;flex-direction:column;justify-content:center;padding:8rem 4rem 4rem 8%;background:${s};position:relative;z-index:1}
.hero-right{position:relative;overflow:hidden}
.hero-right img{position:absolute;inset:0;height:100%;object-fit:cover;filter:contrast(1.05) brightness(.9)}
.hero-right::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,${s} 0%,transparent 30%)}
.hero-pretitle{font-size:.65rem;letter-spacing:.35em;text-transform:uppercase;color:${p};margin-bottom:1.5rem;display:flex;align-items:center;gap:.7rem}
.hero-pretitle::before{content:'';width:30px;height:1px;background:${p}}
.hero h1{font-family:'Playfair Display',serif;font-size:clamp(2.8rem,4.5vw,4.2rem);font-weight:400;line-height:1.12;color:#fff;margin-bottom:1.5rem}
.hero h1 em{font-style:italic;color:${p}}
.hero-sub{font-size:.9rem;color:rgba(212,196,168,.55);line-height:1.85;max-width:420px;margin-bottom:2.5rem;font-weight:300}
.hero-stats{display:flex;gap:2.5rem;margin-bottom:2.5rem;padding-bottom:2rem;border-bottom:1px solid rgba(201,168,124,.12)}
.hero-stat-num{font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:400;color:${p};display:block;line-height:1}
.hero-stat-lbl{font-size:.68rem;color:rgba(212,196,168,.4);letter-spacing:.1em;text-transform:uppercase;margin-top:.3rem}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap}
.btn-champagne{padding:.85rem 2rem;background:${p};color:${s};font-size:.78rem;font-weight:600;letter-spacing:.12em;text-transform:uppercase;transition:all .35s}
.btn-champagne:hover{background:#D4B48C;transform:translateY(-2px);box-shadow:0 12px 30px rgba(201,168,124,.25)}
.btn-outline{padding:.85rem 2rem;border:1px solid rgba(212,196,168,.2);color:rgba(212,196,168,.7);font-size:.78rem;letter-spacing:.1em;text-transform:uppercase;transition:all .3s}
.btn-outline:hover{border-color:${p}66;color:${p}}

.marquee-strip{background:${p};padding:.65rem 0;overflow:hidden;white-space:nowrap}
.marquee-inner{display:inline-flex;animation:marquee 25s linear infinite}
.marquee-item{font-size:.62rem;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:${s};padding:0 2.5rem}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}

.properties{padding:7rem 5%;max-width:1300px;margin:0 auto}
.section-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:3.5rem;gap:2rem;flex-wrap:wrap}
.sec-pre{font-size:.62rem;letter-spacing:.3em;text-transform:uppercase;color:${p};margin-bottom:.6rem}
.sec-h{font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3vw,2.8rem);font-weight:400;color:#fff;line-height:1.2}
.sec-h em{font-style:italic;color:${p}}
.prop-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5px;background:rgba(201,168,124,.12)}
.menu-item{background:${s};padding:0;overflow:hidden;cursor:pointer;position:relative;group:true}
.prop-img{aspect-ratio:4/3;overflow:hidden;position:relative}
.prop-img img{height:100%;object-fit:cover;transition:transform .6s ease}
.menu-item:hover .prop-img img{transform:scale(1.04)}
.prop-overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(26,29,38,.8) 0%,transparent 50%)}
.prop-badge{position:absolute;top:1rem;left:1rem;background:${p};color:${s};font-size:.6rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:.25rem .7rem}
.prop-body{padding:1.6rem}
.prop-type{font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:${a};margin-bottom:.5rem}
.prop-name{font-family:'Playfair Display',serif;font-size:1.25rem;font-weight:400;color:#fff;margin-bottom:.4rem}
.prop-loc{font-size:.8rem;color:rgba(212,196,168,.5);margin-bottom:1rem;display:flex;align-items:center;gap:.4rem}
.prop-price{font-family:'Playfair Display',serif;font-size:1.1rem;color:${p};margin-bottom:.8rem}
.prop-feats{display:flex;gap:1rem;font-size:.75rem;color:rgba(212,196,168,.4)}

section.gallery{display:none}

.about{padding:7rem 5%;display:grid;grid-template-columns:1fr 1fr;gap:7rem;max-width:1200px;margin:0 auto;align-items:center}
.about-imgs{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:auto auto;gap:1.5px;position:relative}
.about-img-main{grid-column:1/3;aspect-ratio:16/9;overflow:hidden}.about-img-main img{height:100%;object-fit:cover}
.about-img-s{aspect-ratio:1;overflow:hidden}.about-img-s img{height:100%;object-fit:cover;filter:brightness(.85)}
.about-cert{background:${p};padding:1.2rem;text-align:center;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:.3rem;aspect-ratio:1}
.about-cert-num{font-family:'Playfair Display',serif;font-size:2rem;font-weight:400;color:${s};line-height:1}
.about-cert-txt{font-size:.6rem;letter-spacing:.12em;text-transform:uppercase;color:${s}88}
.about-feats{margin-top:2rem;display:flex;flex-direction:column;gap:1.2rem}
.about-feat-item{display:flex;gap:.8rem;padding:1rem;border:1px solid rgba(201,168,124,.1)}
.about-feat-icon{font-size:1.1rem;flex-shrink:0;margin-top:.1rem}
.about-feat-title{font-size:.88rem;font-weight:500;color:rgba(212,196,168,.85);margin-bottom:.2rem}
.about-feat-txt{font-size:.78rem;color:rgba(212,196,168,.4);line-height:1.65}

.testi-section{padding:7rem 5%;background:rgba(0,0,0,.2)}
.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1.5px;background:rgba(201,168,124,.08);margin-top:4rem}
.testi-card{background:${s};padding:2rem}
.testi-stars{color:${p};font-size:.9rem;letter-spacing:.1em;margin-bottom:1rem}
.testi-text{font-family:'Playfair Display',serif;font-size:1rem;font-weight:400;font-style:italic;color:rgba(255,255,255,.7);line-height:1.8;margin-bottom:1.5rem}
.testi-author{display:flex;align-items:center;gap:.8rem}
.testi-av{width:36px;height:36px;background:${p}22;border:1px solid ${p}33;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:600;color:${p}}
.testi-name{font-size:.85rem;color:rgba(212,196,168,.8)}.testi-role{font-size:.7rem;color:rgba(212,196,168,.35);margin-top:.1rem}

.faq-section{padding:7rem 5%;max-width:800px;margin:0 auto}
.faq-details{border-bottom:1px solid rgba(201,168,124,.12)}
.faq-details summary{padding:1.3rem 0;font-size:.88rem;color:rgba(212,196,168,.7);cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;transition:color .3s}
.faq-details summary:hover{color:#fff}
.faq-details summary::after{content:'+';font-size:1.1rem;color:${p};font-weight:300}
.faq-details[open] summary::after{content:'−'}
.faq-answer{padding:.5rem 0 1.3rem;font-size:.83rem;color:rgba(212,196,168,.45);line-height:1.75}

.cta-section{padding:8rem 5%;text-align:center;background:linear-gradient(180deg,${s} 0%,rgba(0,0,0,.4) 100%);position:relative;overflow:hidden}
.cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:700px;height:400px;background:radial-gradient(ellipse,${p}12 0%,transparent 65%);pointer-events:none}

.footer{padding:2.5rem 5%;border-top:1px solid rgba(201,168,124,.1);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.footer-logo{height:26px;filter:brightness(0) invert(1) sepia(1) saturate(0.3)}
.footer-copy{font-size:.72rem;color:rgba(212,196,168,.25)}
.footer-links{display:flex;gap:1.5rem}
.footer-links a{font-size:.7rem;color:rgba(212,196,168,.3);letter-spacing:.08em;text-transform:uppercase;transition:color .3s}.footer-links a:hover{color:${p}}

@media(max-width:768px){.nav-links{display:none}.hero{grid-template-columns:1fr;height:auto}.hero-left{padding:6rem 5% 3rem}.hero-right{height:50vw}.about{grid-template-columns:1fr;gap:3rem}.section-header{flex-direction:column}}
</style></head>
<body>
<nav class="nav">
  <a href="#"><img class="nav-logo" src="assets/logo-placeholder.png" alt="${t.name}"></a>
  <ul class="nav-links"><li><a href="#properties">Properti</a></li><li><a href="#about">Tentang</a></li><li><a href="#testi">Ulasan</a></li><li><a href="#faq">FAQ</a></li></ul>
  <a href="https://wa.me/${wa}" class="nav-cta">Konsultasi</a>
</nav>

<section class="hero">
  <div class="hero-left">
    <p class="hero-pretitle">Premium Living</p>
    <h1>${t.headline.replace('Kemewahan','<em>Kemewahan</em>')}</h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-stats">
      <div><span class="hero-stat-num">—</span><span class="hero-stat-lbl">Diisi sesuai data</span></div>
      <div><span class="hero-stat-num">—</span><span class="hero-stat-lbl">Diisi sesuai data</span></div>
      <div><span class="hero-stat-num">—</span><span class="hero-stat-lbl">Diisi sesuai data</span></div>
    </div>
    <div class="hero-btns">
      <a href="https://wa.me/${wa}" class="btn-champagne">Konsultasi Gratis</a>
      <a href="#properties" class="btn-outline">Lihat Properti</a>
    </div>
  </div>
  <div class="hero-right"><img src="assets/foto-produk-1.png" alt="property"></div>
</section>

<div class="marquee-strip"><div class="marquee-inner">${['Penthouse Suite','Garden Villa','Sky Residence','Duplex Tower','Luxury Living','Premium Property','Exclusive Location','Investment Grade'].map(function(x){return '<span class="marquee-item">'+x+'</span><span style="color:'+s+'66;padding:0 1rem">◆</span>';}).join('').repeat(2)}</div></div>

<section id="properties" class="properties">
  <div class="section-header">
    <div><p class="sec-pre">Pilihan Eksklusif</p><h2 class="sec-h">Properti <em>Premium</em><br>Pilihan Kami</h2></div>
    <a href="https://wa.me/${wa}" class="btn-outline" style="white-space:nowrap">Lihat Semua →</a>
  </div>
  <div class="prop-grid">
    ${mn.slice(0,4).map(function(m,i){var prices=['Mulai Rp 2,5M','Mulai Rp 5M','Mulai Rp 3,8M','Mulai Rp 8,5M'];return '<div class="menu-item"><div class="prop-img"><img src="assets/foto-produk-'+((i%4)+1)+'.png" alt="'+m+'"><div class="prop-overlay"></div><span class="prop-badge">Premium</span></div><div class="prop-body"><p class="prop-type">'+['Penthouse','Villa','Apartemen','Duplex'][i%4]+'</p><h3 class="prop-name">'+m+'</h3><p class="prop-loc">📍 Jakarta Selatan</p><p class="prop-price">'+prices[i%4]+'</p><div class="prop-feats"><span>🛏 '+[3,4,3,5][i%4]+'BR</span><span>🚿 '+[2,3,2,4][i%4]+'Bath</span><span>📐 '+[120,240,140,320][i%4]+'m²</span></div></div></div>';}).join('')}
  </div>
</section>

<section class="gallery"><p>placeholder</p></section>

<section id="about" class="about">
  <div class="about-imgs">
    <div class="about-img-main"><img src="assets/foto-produk-2.png" alt="about"></div>
    <div class="about-img-s"><img src="assets/foto-produk-3.png" alt="detail"></div>
    <div class="about-cert"><span class="about-cert-num">A+</span><span class="about-cert-txt">Rating</span></div>
  </div>
  <div>
    <p class="sec-pre">Tentang Kami</p>
    <h2 class="sec-h">Developer <em>Terpercaya</em><br>Selama 15 Tahun</h2>
    <p style="font-size:.88rem;color:rgba(212,196,168,.45);line-height:1.85;margin:1.2rem 0 2rem;font-weight:300">${t.sub}</p>
    <div class="about-feats">
      <div class="about-feat-item"><span class="about-feat-icon">📋</span><div><div class="about-feat-title">Legalitas 100% Aman</div><p class="about-feat-txt">SHM, IMB, dan semua dokumen legal lengkap. Due diligence ketat oleh tim hukum independen.</p></div></div>
      <div class="about-feat-item"><span class="about-feat-icon">🏗️</span><div><div class="about-feat-title">Konstruksi Berstandar Internasional</div><p class="about-feat-txt">Material SNI dan import. Garansi struktur 10 tahun. Dikerjakan kontraktor bersertifikat.</p></div></div>
      <div class="about-feat-item"><span class="about-feat-icon">🤝</span><div><div class="about-feat-title">After Sales Komprehensif</div><p class="about-feat-txt">Pendampingan KPR, balik nama, dan konsultasi renovasi 2 tahun penuh setelah serah terima.</p></div></div>
    </div>
  </div>
</section>

<section id="testi" class="testi-section"><div class="testi-inner">
  <div style="text-align:center"><p class="sec-pre" style="margin-bottom:.5rem">Ulasan Klien</p><h2 class="sec-h">Kata Mereka <em>Yang Telah</em><br>Memiliki Properti Kami</h2></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>

<section id="faq" class="faq-section">
  <div style="text-align:center;margin-bottom:3rem"><p class="sec-pre">FAQ</p><h2 class="sec-h">Pertanyaan Umum</h2></div>
  ${faqHTML().replace(/<details>/g,'<details class="faq-details">').replace(/<summary>/g,'<summary>')}
</section>

<section class="cta-section">
  <div class="cta-glow"></div>
  <div style="position:relative;z-index:1">
    <p class="sec-pre" style="margin-bottom:1rem">Mulai Perjalanan Anda</p>
    <h2 style="font-family:'Playfair Display',serif;font-size:clamp(2.2rem,4vw,3.5rem);font-weight:400;color:#fff;margin-bottom:1rem;line-height:1.15">Temukan Hunian <em style="font-style:italic;color:${p}">Impian Anda</em><br>Bersama Kami</h2>
    <p style="font-size:.9rem;color:rgba(212,196,168,.45);margin-bottom:2.5rem;font-weight:300">Konsultasi gratis. Tanpa tekanan. Kami memandu setiap langkah.</p>
    <a href="https://wa.me/${wa}" class="btn-champagne">Konsultasi via WhatsApp →</a>
  </div>
</section>

<footer class="footer">
  <img class="footer-logo" src="assets/logo-placeholder.png" alt="${t.name}">
  <span class="footer-copy">© 2025 ${t.name}. All rights reserved.</span>
  <div class="footer-links"><a href="#">Instagram</a><a href="#">Proyek</a><a href="https://wa.me/${wa}">WhatsApp</a></div>
</footer>
</body></html>`;
}

/* ── 3. LUMINA CLINIC — Glassmorphism Medical Beauty ────────── */
function tmplLumina(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<4)mn=mn.concat(mn);
  var wa='6281234567890';
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
body{font-family:'Plus Jakarta Sans',sans-serif;background:linear-gradient(135deg,#050A1A 0%,#0A0520 40%,#020B18 100%);color:#E0F9FF;line-height:1.6;overflow-x:hidden;min-height:100vh}
a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}

.nav{position:fixed;top:0;left:0;right:0;z-index:200;padding:1.1rem 5%;display:flex;align-items:center;justify-content:space-between;background:rgba(5,10,26,.85);backdrop-filter:blur(20px);border-bottom:1px solid rgba(0,197,215,.08)}
.nav-logo{height:30px;filter:brightness(0) invert(1)}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.78rem;font-weight:500;color:rgba(224,249,255,.45);transition:color .3s}.nav-links a:hover{color:${p}}
.nav-cta{padding:.5rem 1.3rem;background:linear-gradient(135deg,${p},${s});color:#fff;border-radius:50px;font-size:.75rem;font-weight:600;transition:all .3s}
.nav-cta:hover{opacity:.9;transform:translateY(-1px);box-shadow:0 8px 20px rgba(0,197,215,.3)}

.hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;padding-top:80px}
.hero-orbs{position:absolute;inset:0;pointer-events:none}
.hero-orb1{position:absolute;top:-200px;right:-100px;width:700px;height:700px;border-radius:50%;background:radial-gradient(circle,${p}20 0%,transparent 65%)}
.hero-orb2{position:absolute;bottom:-300px;left:-150px;width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,${s}18 0%,transparent 65%)}
.hero-grid{position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 60px,rgba(0,197,215,.025) 60px,rgba(0,197,215,.025) 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,rgba(0,197,215,.025) 60px,rgba(0,197,215,.025) 61px)}
.hero-content{position:relative;z-index:2;padding:0 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.hero-left{}
.hero-pill{display:inline-flex;align-items:center;gap:.5rem;background:rgba(0,197,215,.1);border:1px solid rgba(0,197,215,.2);border-radius:50px;padding:.35rem 1rem .35rem .6rem;font-size:.7rem;color:${p};font-weight:600;margin-bottom:2rem}
.hero-pill-dot{width:6px;height:6px;border-radius:50%;background:${p};animation:pulse 2s ease infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
.hero h1{font-size:clamp(2.2rem,4.5vw,3.8rem);font-weight:800;line-height:1.1;color:#fff;margin-bottom:1.3rem;letter-spacing:-.03em}
.hero h1 span{background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:.92rem;color:rgba(224,249,255,.5);line-height:1.85;max-width:460px;margin-bottom:2.5rem;font-weight:300}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2rem}
.btn-primary{padding:.85rem 2rem;background:linear-gradient(135deg,${p},${s});color:#fff;border-radius:50px;font-size:.82rem;font-weight:600;transition:all .35s;box-shadow:0 4px 20px rgba(0,197,215,.25)}
.btn-primary:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(0,197,215,.4)}
.btn-glass{padding:.85rem 2rem;background:rgba(255,255,255,.05);border:1px solid rgba(0,197,215,.2);border-radius:50px;color:rgba(224,249,255,.7);font-size:.82rem;font-weight:500;backdrop-filter:blur(8px);transition:all .3s}
.btn-glass:hover{background:rgba(0,197,215,.1);border-color:${p}55;color:${p}}
.hero-trust{display:flex;align-items:center;gap:.8rem;font-size:.8rem;color:rgba(224,249,255,.35)}
.hero-right{position:relative}
.hero-img-wrap{border-radius:24px;overflow:hidden;aspect-ratio:4/5;position:relative;border:1px solid rgba(0,197,215,.1)}
.hero-img-wrap::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 50%,rgba(5,10,26,.6) 100%);z-index:1}
.hero-img-wrap img{height:100%;object-fit:cover}
.hero-float-card{position:absolute;bottom:2rem;left:-2rem;background:rgba(5,10,26,.85);backdrop-filter:blur(20px);border:1px solid rgba(0,197,215,.15);border-radius:16px;padding:1rem 1.2rem;z-index:2}
.hero-float-num{font-size:1.8rem;font-weight:800;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}
.hero-float-lbl{font-size:.7rem;color:rgba(224,249,255,.4);margin-top:.2rem}
.hero-float-card2{position:absolute;top:2rem;right:-1.5rem;background:rgba(128,85,192,.15);backdrop-filter:blur(20px);border:1px solid rgba(128,85,192,.2);border-radius:16px;padding:.8rem 1rem;z-index:2}

.services-section{padding:7rem 5%;max-width:1200px;margin:0 auto}
.services-header{text-align:center;margin-bottom:4rem}
.sec-pill{display:inline-block;background:rgba(0,197,215,.1);border:1px solid rgba(0,197,215,.18);border-radius:50px;padding:.28rem .9rem;font-size:.65rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${p};margin-bottom:1rem}
.sec-title{font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;color:#fff;line-height:1.2;letter-spacing:-.02em}
.sec-title span{background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.sec-sub2{font-size:.9rem;color:rgba(224,249,255,.4);margin-top:.8rem;font-weight:300}
.services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem}
.menu-item{background:rgba(255,255,255,.03);backdrop-filter:blur(8px);border:1px solid rgba(0,197,215,.1);border-radius:20px;padding:2rem;position:relative;overflow:hidden;transition:all .4s;cursor:pointer}
.menu-item::before{content:'';position:absolute;inset:0;border-radius:20px;background:linear-gradient(135deg,rgba(0,197,215,.08),rgba(128,85,192,.08));opacity:0;transition:opacity .4s}
.menu-item:hover{transform:translateY(-6px);border-color:rgba(0,197,215,.25);box-shadow:0 20px 40px rgba(0,197,215,.1)}
.menu-item:hover::before{opacity:1}
.svc-icon{width:48px;height:48px;background:linear-gradient(135deg,${p}22,${s}22);border:1px solid ${p}33;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;margin-bottom:1.2rem}
.svc-name{font-size:1.05rem;font-weight:700;color:#fff;margin-bottom:.4rem}
.svc-desc{font-size:.8rem;color:rgba(224,249,255,.4);line-height:1.65;margin-bottom:1.2rem}
.svc-tag{display:inline-block;background:${p}15;color:${p};border-radius:50px;padding:.2rem .7rem;font-size:.67rem;font-weight:600}

section.gallery{display:none}

.process{padding:7rem 5%;background:rgba(0,0,0,.2)}
.process-inner{max-width:1200px;margin:0 auto}
.proses-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:2rem;margin-top:4rem}
.proses-step{position:relative;text-align:center;padding:2rem 1.5rem}
.proses-num{font-size:4rem;font-weight:800;background:linear-gradient(180deg,${p}20 0%,transparent 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1;margin-bottom:.5rem}
.proses-title{font-size:.95rem;font-weight:700;color:#fff;margin-bottom:.5rem}
.proses-txt{font-size:.8rem;color:rgba(224,249,255,.4);line-height:1.65}

.testi-section{padding:7rem 5%}
.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:4rem}
.testi-card{background:rgba(255,255,255,.03);backdrop-filter:blur(8px);border:1px solid rgba(0,197,215,.1);border-radius:20px;padding:1.8rem}
.testi-stars{color:${p};font-size:.9rem;margin-bottom.9rem}
.testi-text{font-size:.88rem;color:rgba(224,249,255,.6);line-height:1.8;margin-bottom:1.2rem;font-style:italic}
.testi-author{display:flex;align-items:center;gap:.8rem}
.testi-av{width:36px;height:36px;background:linear-gradient(135deg,${p}33,${s}33);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:${p}}
.testi-name{font-size:.85rem;font-weight:600;color:rgba(224,249,255,.8)}.testi-role{font-size:.72rem;color:rgba(224,249,255,.35)}

.faq-section{padding:7rem 5%;max-width:800px;margin:0 auto}
.faq-details{border-bottom:1px solid rgba(0,197,215,.1)}
.faq-details summary{padding:1.3rem 0;font-size:.88rem;color:rgba(224,249,255,.65);cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;transition:color .3s}
.faq-details summary:hover{color:#fff}
.faq-details summary::after{content:'+';color:${p};font-size:1.1rem;font-weight:300}
.faq-details[open] summary::after{content:'−'}
.faq-answer{padding:.5rem 0 1.3rem;font-size:.83rem;color:rgba(224,249,255,.4);line-height:1.75}

.cta-section{padding:8rem 5%;text-align:center;position:relative;overflow:hidden}
.cta-orb{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:400px;background:radial-gradient(ellipse,${p}15 0%,transparent 65%);pointer-events:none}

.footer{padding:2.5rem 5%;border-top:1px solid rgba(0,197,215,.08);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.footer-logo{height:26px;filter:brightness(0) invert(1)}
.footer-copy{font-size:.72rem;color:rgba(224,249,255,.2)}
.footer-links{display:flex;gap:1.5rem}
.footer-links a{font-size:.7rem;color:rgba(224,249,255,.25);transition:color .3s}.footer-links a:hover{color:${p}}

@media(max-width:768px){.nav-links{display:none}.hero-content{grid-template-columns:1fr}.hero-right{display:none}.hero-float-card,.hero-float-card2{display:none}}
</style></head>
<body>
<nav class="nav">
  <a href="#"><img class="nav-logo" src="assets/logo-placeholder.png" alt="${t.name}"></a>
  <ul class="nav-links"><li><a href="#services">Layanan</a></li><li><a href="#process">Proses</a></li><li><a href="#testi">Ulasan</a></li><li><a href="#faq">FAQ</a></li></ul>
  <a href="https://wa.me/${wa}" class="nav-cta">Konsultasi Gratis</a>
</nav>

<section class="hero">
  <div class="hero-orbs"><div class="hero-orb1"></div><div class="hero-orb2"></div></div>
  <div class="hero-grid"></div>
  <div class="hero-content">
    <div class="hero-left">
      <div class="hero-pill"><span class="hero-pill-dot"></span>Klinik Kecantikan Premium #1</div>
      <h1>${t.headline.replace('Keindahan','<span>Keindahan</span>')}</h1>
      <p class="hero-sub">${t.sub}</p>
      <div class="hero-btns">
        <a href="https://wa.me/${wa}" class="btn-primary">Konsultasi Sekarang</a>
        <a href="#services" class="btn-glass">Lihat Layanan</a>
      </div>
      <div class="hero-trust">✓ Dokter Tersertifikasi &nbsp;·&nbsp; ✓ 5.000+ Klien Puas &nbsp;·&nbsp; ✓ BPOM Approved</div>
    </div>
    <div class="hero-right">
      <div class="hero-img-wrap"><img src="assets/foto-produk-1.png" alt="clinic"></div>
      <div class="hero-float-card"><div class="hero-float-num">5K+</div><div class="hero-float-lbl">Klien Puas</div></div>
      <div class="hero-float-card2" style="font-size:.75rem;color:rgba(224,249,255,.6)">⭐ —<br><span style="font-size:.65rem;color:rgba(224,249,255,.3)">Diisi sesuai data</span></div>
    </div>
  </div>
</section>

<section id="services" class="services-section">
  <div class="services-header">
    <div class="sec-pill">Layanan Unggulan</div>
    <h2 class="sec-title">Perawatan <span>Premium</span><br>Berbasis Sains</h2>
    <p class="sec-sub2">Teknologi medis terkini, ditangani dokter spesialis. Hasil nyata, aman, terukur.</p>
  </div>
  <div class="services-grid">
    ${mn.slice(0,4).map(function(m,i){var icons=['💫','💉','✨','💧'];var descs=['Teknologi laser terbaru tersertifikasi. Aman untuk semua jenis kulit. Hasil terlihat setelah 1 sesi.','Filler premium dan botox oleh dokter spesialis. Alami dan tahan lama hingga 18 bulan.','Formula brightening medis eksklusif. Mencerahkan, meratakan, dan meregenerasi.','Infus vitamin premium langsung ke aliran darah. Hasilkan glow dari dalam.'];return '<div class="menu-item"><div class="svc-icon">'+icons[i%4]+'</div><h3 class="svc-name">'+m+'</h3><p class="svc-desc">'+descs[i%4]+'</p><span class="svc-tag">Tersedia</span></div>';}).join('')}
  </div>
</section>

<section class="gallery"><p>placeholder</p></section>

<section id="process" class="process">
  <div class="process-inner">
    <div style="text-align:center">
      <div class="sec-pill">Cara Kerja</div>
      <h2 class="sec-title">Proses Perawatan <span>Aman & Nyaman</span></h2>
    </div>
    <div class="proses-grid">
      <div class="proses-step"><div class="proses-num">01</div><div class="proses-title">Konsultasi Gratis</div><p class="proses-txt">Analisa kondisi kulit mendalam oleh dokter spesialis. 100% tanpa biaya dan tekanan.</p></div>
      <div class="proses-step"><div class="proses-num">02</div><div class="proses-title">Rencana Personal</div><p class="proses-txt">Program perawatan dirancang khusus sesuai kondisi, target, dan anggaran Anda.</p></div>
      <div class="proses-step"><div class="proses-num">03</div><div class="proses-title">Perawatan Premium</div><p class="proses-txt">Teknisi berpengalaman dengan alat tersertifikasi. Proses aman, nyaman, dan presisi.</p></div>
      <div class="proses-step"><div class="proses-num">04</div><div class="proses-title">Hasil & Follow-up</div><p class="proses-txt">Pantau perkembangan, follow-up rutin, dan program maintenance jangka panjang.</p></div>
    </div>
  </div>
</section>

<section id="testi" class="testi-section"><div class="testi-inner">
  <div style="text-align:center">
    <div class="sec-pill">Ulasan Klien</div>
    <h2 class="sec-title">Ribuan Klien <span>Sudah Merasakan</span><br>Manfaatnya</h2>
  </div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>

<section id="faq" class="faq-section">
  <div style="text-align:center;margin-bottom:3rem"><div class="sec-pill">FAQ</div><h2 class="sec-title">Pertanyaan Umum</h2></div>
  ${faqHTML().replace(/<details>/g,'<details class="faq-details">').replace(/<summary>/g,'<summary>')}
</section>

<section class="cta-section">
  <div class="cta-orb"></div>
  <div style="position:relative;z-index:1">
    <div class="sec-pill" style="margin-bottom:1.5rem">Mulai Sekarang</div>
    <h2 style="font-size:clamp(2rem,4vw,3.2rem);font-weight:800;color:#fff;margin-bottom:1rem;letter-spacing:-.02em;line-height:1.15">Wujudkan Kulit <span style="background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Impian Anda</span><br>Bersama Kami</h2>
    <p style="font-size:.92rem;color:rgba(224,249,255,.4);margin-bottom:2.5rem;font-weight:300">Konsultasi gratis. Tanpa biaya. Tanpa tekanan. Kami di sini untuk Anda.</p>
    <a href="https://wa.me/${wa}" class="btn-primary" style="font-size:.85rem;padding:1rem 2.5rem">Hubungi via WhatsApp →</a>
  </div>
</section>

<footer class="footer">
  <img class="footer-logo" src="assets/logo-placeholder.png" alt="${t.name}">
  <span class="footer-copy">© 2025 ${t.name}. All rights reserved.</span>
  <div class="footer-links"><a href="#">Instagram</a><a href="#">TikTok</a><a href="https://wa.me/${wa}">WhatsApp</a></div>
</footer>
</body></html>`;
}

/* ── 4. NEXUS DIGITAL — Cyberpunk Tech Agency ───────────────── */
function tmplNexus(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<4)mn=mn.concat(mn);
  var wa='6281234567890';
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
body{font-family:'Space Grotesk',sans-serif;background:#030711;color:#CBD5E1;line-height:1.6;overflow-x:hidden}
a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}

.nav{position:fixed;top:0;left:0;right:0;z-index:200;padding:1.1rem 5%;display:flex;align-items:center;justify-content:space-between;background:rgba(3,7,17,.9);backdrop-filter:blur(20px);border-bottom:1px solid rgba(34,211,238,.08)}
.nav-logo{height:28px;filter:brightness(0) invert(1)}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.78rem;font-weight:500;color:rgba(203,213,225,.45);transition:color .3s}.nav-links a:hover{color:${p}}
.nav-cta{padding:.48rem 1.2rem;background:transparent;border:1px solid ${p}55;color:${p};font-size:.75rem;font-weight:600;border-radius:4px;transition:all .3s;position:relative;overflow:hidden}
.nav-cta::before{content:'';position:absolute;inset:0;background:${p}15;transform:scaleX(0);transform-origin:left;transition:transform .3s}
.nav-cta:hover::before{transform:scaleX(1)}
.nav-cta span{position:relative;z-index:1}

.hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;padding-top:70px}
.hero-grid-bg{position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(34,211,238,.03) 40px,rgba(34,211,238,.03) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(34,211,238,.03) 40px,rgba(34,211,238,.03) 41px)}
.hero-glow-tl{position:absolute;top:-300px;left:-200px;width:800px;height:800px;border-radius:50%;background:radial-gradient(circle,${s}25 0%,transparent 60%)}
.hero-glow-br{position:absolute;bottom:-200px;right:-100px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,${p}15 0%,transparent 65%)}
.hero-inner{position:relative;z-index:2;padding:0 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.hero-tag{display:inline-flex;align-items:center;gap:.6rem;background:rgba(34,211,238,.07);border:1px solid rgba(34,211,238,.15);border-radius:4px;padding:.3rem .8rem;font-size:.65rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:${p};margin-bottom:1.8rem}
.hero-tag-dot{width:5px;height:5px;background:${p};border-radius:50%;animation:blink 1.5s ease infinite}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.2}}
.hero h1{font-size:clamp(2.5rem,5vw,4.5rem);font-weight:700;line-height:1.08;color:#fff;letter-spacing:-.04em;margin-bottom:1.3rem}
.hero h1 .neon{color:${p};text-shadow:0 0 30px ${p}66,0 0 60px ${p}33}
.hero-sub{font-size:.92rem;color:rgba(203,213,225,.5);line-height:1.85;max-width:460px;margin-bottom:2.5rem;font-weight:400}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.btn-neon{padding:.85rem 2rem;background:${p};color:#030711;font-size:.82rem;font-weight:700;border-radius:4px;transition:all .35s;box-shadow:0 0 20px ${p}44}
.btn-neon:hover{box-shadow:0 0 40px ${p}77;transform:translateY(-2px)}
.btn-outline{padding:.85rem 2rem;border:1px solid rgba(34,211,238,.25);color:rgba(203,213,225,.7);font-size:.82rem;font-weight:500;border-radius:4px;transition:all .3s}
.btn-outline:hover{border-color:${p}66;color:${p};background:rgba(34,211,238,.05)}
.hero-metrics{display:flex;gap:2rem;flex-wrap:wrap}
.hero-metric{border-left:1px solid ${p}33;padding-left:1rem}
.hero-metric-num{font-size:1.5rem;font-weight:700;color:${p};line-height:1}
.hero-metric-lbl{font-size:.7rem;color:rgba(203,213,225,.35);margin-top:.2rem;letter-spacing:.05em}
.hero-right{position:relative}
.hero-terminal{background:rgba(3,7,17,.95);border:1px solid rgba(34,211,238,.15);border-radius:8px;padding:1.5rem;font-family:'Space Grotesk',monospace}
.terminal-bar{display:flex;align-items:center;gap:.5rem;margin-bottom:1.2rem;padding-bottom:.8rem;border-bottom:1px solid rgba(34,211,238,.08)}
.terminal-dot{width:8px;height:8px;border-radius:50%}
.terminal-line{font-size:.82rem;color:rgba(203,213,225,.4);margin-bottom:.6rem;line-height:1.6}
.terminal-line .cmd{color:${p}}
.terminal-line .val{color:${a}}
.terminal-line .str{color:#86EFAC}
.terminal-cursor{display:inline-block;width:2px;height:.85em;background:${p};animation:cursor 1.2s step-end infinite;vertical-align:middle;margin-left:2px}
@keyframes cursor{0%,100%{opacity:1}50%{opacity:0}}

.services-section{padding:7rem 5%;max-width:1200px;margin:0 auto}
.services-header{margin-bottom:4rem}
.sec-badge{display:inline-block;background:${p}12;border:1px solid ${p}25;border-radius:4px;padding:.22rem .7rem;font-size:.62rem;font-weight:700;letter-spacing:.15em;text-transform:uppercase;color:${p};margin-bottom:1rem}
.sec-h2{font-size:clamp(1.8rem,3vw,2.8rem);font-weight:700;color:#fff;letter-spacing:-.03em;line-height:1.15}
.sec-h2 span{color:${p};text-shadow:0 0 20px ${p}44}
.services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1px;background:rgba(34,211,238,.08)}
.menu-item{background:#030711;padding:2rem;position:relative;overflow:hidden;cursor:pointer;transition:background .4s}
.menu-item::after{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,${p},${s});transform:scaleX(0);transform-origin:left;transition:transform .4s}
.menu-item:hover{background:rgba(34,211,238,.04)}
.menu-item:hover::after{transform:scaleX(1)}
.svc-num{font-size:.65rem;font-weight:700;letter-spacing:.2em;color:${p}55;margin-bottom:1.2rem;text-transform:uppercase}
.svc-icon-box{width:44px;height:44px;border:1px solid ${p}22;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:1.2rem;margin-bottom:1.2rem;background:${p}08}
.svc-name{font-size:1.05rem;font-weight:600;color:#fff;margin-bottom:.5rem;letter-spacing:-.02em}
.svc-desc{font-size:.8rem;color:rgba(203,213,225,.4);line-height:1.7;margin-bottom:1.2rem}
.svc-link{font-size:.75rem;font-weight:600;color:${p};letter-spacing:.08em;display:flex;align-items:center;gap:.4rem;transition:gap .3s}
.menu-item:hover .svc-link{gap:.7rem}

section.gallery{display:none}

.tech-section{padding:5rem 5%;background:rgba(34,211,238,.02);border-top:1px solid rgba(34,211,238,.06);border-bottom:1px solid rgba(34,211,238,.06)}
.tech-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;gap:4rem;flex-wrap:wrap}
.tech-label{font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(203,213,225,.3);white-space:nowrap}
.tech-tags{display:flex;gap:.8rem;flex-wrap:wrap}
.tech-tag{background:rgba(34,211,238,.06);border:1px solid rgba(34,211,238,.1);border-radius:4px;padding:.3rem .8rem;font-size:.75rem;font-weight:500;color:rgba(203,213,225,.55);transition:all .3s}
.tech-tag:hover{border-color:${p}44;color:${p};background:${p}08}

.testi-section{padding:7rem 5%}
.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1px;background:rgba(34,211,238,.06);margin-top:4rem}
.testi-card{background:#030711;padding:2rem}
.testi-stars{color:${p};font-size:.9rem;margin-bottom:1rem;text-shadow:0 0 10px ${p}55}
.testi-text{font-size:.88rem;color:rgba(203,213,225,.55);line-height:1.8;margin-bottom:1.3rem}
.testi-author{display:flex;align-items:center;gap:.8rem}
.testi-av{width:34px;height:34px;background:${p}15;border:1px solid ${p}22;border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:.68rem;font-weight:700;color:${p}}
.testi-name{font-size:.83rem;font-weight:600;color:rgba(203,213,225,.8)}.testi-role{font-size:.7rem;color:rgba(203,213,225,.3)}

.faq-section{padding:7rem 5%;max-width:800px;margin:0 auto}
.faq-details{border-bottom:1px solid rgba(34,211,238,.08)}
.faq-details summary{padding:1.3rem 0;font-size:.88rem;color:rgba(203,213,225,.6);cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;transition:color .3s}
.faq-details summary:hover{color:#fff}
.faq-details summary::after{content:'+';color:${p};font-size:1.1rem}
.faq-details[open] summary::after{content:'−'}
.faq-answer{padding:.5rem 0 1.3rem;font-size:.83rem;color:rgba(203,213,225,.4);line-height:1.75}

.cta-section{padding:8rem 5%;text-align:center;position:relative;overflow:hidden;border-top:1px solid rgba(34,211,238,.08)}
.cta-grid{position:absolute;inset:0;background-image:repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(34,211,238,.02) 40px,rgba(34,211,238,.02) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(34,211,238,.02) 40px,rgba(34,211,238,.02) 41px)}
.cta-glow{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:600px;height:400px;background:radial-gradient(ellipse,${s}20 0%,transparent 65%)}

.footer{padding:2.5rem 5%;border-top:1px solid rgba(34,211,238,.06);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.footer-logo{height:24px;filter:brightness(0) invert(1)}
.footer-copy{font-size:.72rem;color:rgba(203,213,225,.2)}
.footer-links{display:flex;gap:1.5rem}
.footer-links a{font-size:.7rem;color:rgba(203,213,225,.25);transition:color .3s}.footer-links a:hover{color:${p}}

@media(max-width:768px){.nav-links{display:none}.hero-inner{grid-template-columns:1fr}.hero-right{display:none}.tech-inner{flex-direction:column;gap:1.5rem}}
</style></head>
<body>
<nav class="nav">
  <a href="#"><img class="nav-logo" src="assets/logo-placeholder.png" alt="${t.name}"></a>
  <ul class="nav-links"><li><a href="#services">Layanan</a></li><li><a href="#tech">Tech Stack</a></li><li><a href="#testi">Klien</a></li><li><a href="#faq">FAQ</a></li></ul>
  <a href="https://wa.me/${wa}" class="nav-cta"><span>Konsultasi →</span></a>
</nav>

<section class="hero">
  <div class="hero-grid-bg"></div>
  <div class="hero-glow-tl"></div>
  <div class="hero-glow-br"></div>
  <div class="hero-inner">
    <div>
      <div class="hero-tag"><span class="hero-tag-dot"></span>Digital Agency</div>
      <h1>Kami Membangun<br><span class="neon">Masa Depan</span><br>Digital Anda</h1>
      <p class="hero-sub">${t.sub}</p>
      <div class="hero-btns">
        <a href="https://wa.me/${wa}" class="btn-neon">Mulai Project →</a>
        <a href="#services" class="btn-outline">Lihat Layanan</a>
      </div>
      <div class="hero-metrics">
        <div class="hero-metric"><div class="hero-metric-num">—</div><div class="hero-metric-lbl">Diisi sesuai data</div></div>
        <div class="hero-metric"><div class="hero-metric-num">—</div><div class="hero-metric-lbl">Diisi sesuai data</div></div>
        <div class="hero-metric"><div class="hero-metric-num">—</div><div class="hero-metric-lbl">Diisi sesuai data</div></div>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-terminal">
        <div class="terminal-bar"><div class="terminal-dot" style="background:#FF5F57"></div><div class="terminal-dot" style="background:#FEBC2E"></div><div class="terminal-dot" style="background:#28C840"></div><span style="font-size:.72rem;color:rgba(203,213,225,.3);margin-left:.5rem">nexus_digital.sh</span></div>
        <div class="terminal-line"><span class="cmd">$ </span><span class="str">init_project</span> <span class="val">--client="YourBrand"</span></div>
        <div class="terminal-line" style="color:#86EFAC">✓ Repository created</div>
        <div class="terminal-line" style="color:#86EFAC">✓ Tech stack configured</div>
        <div class="terminal-line" style="color:#86EFAC">✓ AI modules loaded</div>
        <div class="terminal-line"><span class="cmd">$ </span><span class="str">deploy</span> <span class="val">--env=production</span></div>
        <div class="terminal-line" style="color:${a}">⚡ Build: cepat · Perf: optimal</div>
        <div class="terminal-line"><span class="cmd">$ </span><span class="cmd">_</span><span class="terminal-cursor"></span></div>
      </div>
    </div>
  </div>
</section>

<section id="services" class="services-section">
  <div class="services-header">
    <div class="sec-badge">Layanan Utama</div>
    <h2 class="sec-h2">Solusi Digital<br><span>End-to-End</span></h2>
  </div>
  <div class="services-grid">
    ${mn.slice(0,4).map(function(m,i){var icons=['🌐','🤖','☁️','🎨'];var nums=['01','02','03','04'];var descs=['Web app yang fokus ke kebutuhan bisnis: UI rapi, struktur jelas, dan siap dikembangkan.','Automasi dan integrasi sesuai kebutuhan: form, CRM, notifikasi, atau workflow sederhana.','Infrastruktur menyesuaikan budget dan skala: shared hosting sampai VPS, sesuai kebutuhan.','Desain berbasis tujuan: navigasi jelas, CTA rapi, dan konsisten dengan brand.'];return '<div class="menu-item"><div class="svc-num">'+nums[i%4]+'</div><div class="svc-icon-box">'+icons[i%4]+'</div><h3 class="svc-name">'+m+'</h3><p class="svc-desc">'+descs[i%4]+'</p><span class="svc-link">Pelajari lebih →</span></div>';}).join('')}
  </div>
</section>

<section class="gallery"><p>placeholder</p></section>

<div id="tech" class="tech-section"><div class="tech-inner">
  <span class="tech-label">Tech Stack</span>
  <div class="tech-tags">
    ${['React','Next.js','Node.js','Python','TensorFlow','AWS','Docker','PostgreSQL','Redis','Figma','TypeScript','GraphQL'].map(function(t){return '<span class="tech-tag">'+t+'</span>';}).join('')}
  </div>
</div></div>

<section id="testi" class="testi-section"><div class="testi-inner">
  <div><div class="sec-badge">Klien Kami</div><h2 class="sec-h2">Dipercaya <span>150+</span><br>Klien Enterprise</h2></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>

<section id="faq" class="faq-section">
  <div style="margin-bottom:3rem"><div class="sec-badge">FAQ</div><h2 class="sec-h2">Pertanyaan Umum</h2></div>
  ${faqHTML().replace(/<details>/g,'<details class="faq-details">').replace(/<summary>/g,'<summary>')}
</section>

<section class="cta-section">
  <div class="cta-grid"></div>
  <div class="cta-glow"></div>
  <div style="position:relative;z-index:1">
    <div class="sec-badge" style="margin-bottom:1.5rem">Mulai Sekarang</div>
    <h2 style="font-size:clamp(2rem,4vw,3.2rem);font-weight:700;color:#fff;margin-bottom:1rem;letter-spacing:-.03em;line-height:1.15">Siap <span style="color:${p};text-shadow:0 0 30px ${p}66">Mendominasi</span><br>Era Digital?</h2>
    <p style="font-size:.9rem;color:rgba(203,213,225,.4);margin-bottom:2.5rem">Brief project Anda. Kami siap dalam 24 jam.</p>
    <a href="https://wa.me/${wa}" class="btn-neon">Hubungi via WhatsApp →</a>
  </div>
</section>

<footer class="footer">
  <img class="footer-logo" src="assets/logo-placeholder.png" alt="${t.name}">
  <span class="footer-copy">© 2025 ${t.name}. All rights reserved.</span>
  <div class="footer-links"><a href="#">GitHub</a><a href="#">LinkedIn</a><a href="https://wa.me/${wa}">WhatsApp</a></div>
</footer>
</body></html>`;
}

/* ── 5. ZENITH BUSINESS — Editorial Bold ────────────────────── */
function tmplZenith(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<4)mn=mn.concat(mn);
  var wa='6281234567890';
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:#060609;color:#D4D4D8;line-height:1.6;overflow-x:hidden}
a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}

.nav{position:fixed;top:0;left:0;right:0;z-index:200;padding:1.1rem 5%;display:flex;align-items:center;justify-content:space-between;background:rgba(6,6,9,.92);backdrop-filter:blur(16px);border-bottom:1px solid rgba(139,92,246,.08)}
.nav-logo{height:28px;filter:brightness(0) invert(1)}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-family:'Syne',sans-serif;font-size:.78rem;font-weight:500;color:rgba(212,212,216,.4);transition:color .3s}.nav-links a:hover{color:#fff}
.nav-cta{padding:.48rem 1.2rem;background:linear-gradient(135deg,${p},${s});color:#fff;font-size:.75rem;font-weight:700;border-radius:6px;font-family:'Syne',sans-serif;transition:all .3s}
.nav-cta:hover{opacity:.9;transform:translateY(-1px)}

.hero{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden;padding-top:70px}
.hero-noise{position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");opacity:.4}
.hero-grad{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 70% 40%,${p}18 0%,transparent 65%)}
.hero-inner{position:relative;z-index:2;padding:0 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.hero-label{font-family:'Syne',sans-serif;font-size:.65rem;font-weight:700;letter-spacing:.3em;text-transform:uppercase;color:${p};margin-bottom:1.5rem;display:flex;align-items:center;gap:.7rem}
.hero-label::before{content:'';width:24px;height:1px;background:${p}}
.hero h1{font-family:'Syne',sans-serif;font-size:clamp(2.8rem,5.5vw,4.8rem);font-weight:800;line-height:1.02;color:#fff;letter-spacing:-.04em;margin-bottom:1.5rem}
.hero h1 .grad{background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:.95rem;color:rgba(212,212,216,.45);line-height:1.9;max-width:440px;margin-bottom:2.5rem;font-weight:300}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.btn-grad{padding:.88rem 2.2rem;background:linear-gradient(135deg,${p},${s});color:#fff;font-size:.82rem;font-weight:700;border-radius:8px;transition:all .35s;font-family:'Syne',sans-serif}
.btn-grad:hover{transform:translateY(-2px);box-shadow:0 16px 40px ${p}40}
.btn-border{padding:.88rem 2.2rem;border:1px solid rgba(139,92,246,.25);color:rgba(212,212,216,.65);font-size:.82rem;font-weight:500;border-radius:8px;transition:all .3s}
.btn-border:hover{border-color:${p}66;color:${p};background:${p}08}
.hero-proof{display:flex;gap:2rem;padding-top:1.5rem;border-top:1px solid rgba(139,92,246,.1)}
.hero-proof-item{}
.hero-proof-num{font-family:'Syne',sans-serif;font-size:1.6rem;font-weight:800;color:#fff;line-height:1}
.hero-proof-num span{background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-proof-lbl{font-size:.7rem;color:rgba(212,212,216,.35);margin-top:.2rem;letter-spacing:.05em}
.hero-right{position:relative}
.hero-img-frame{border-radius:16px;overflow:hidden;aspect-ratio:4/5;position:relative;border:1px solid rgba(139,92,246,.12)}
.hero-img-frame img{height:100%;object-fit:cover}
.hero-img-frame::after{content:'';position:absolute;inset:0;background:linear-gradient(135deg,${p}15,${s}10)}
.hero-card-float{position:absolute;bottom:-1rem;left:-2rem;background:rgba(6,6,9,.95);border:1px solid rgba(139,92,246,.2);border-radius:12px;padding:1rem 1.2rem;backdrop-filter:blur(16px)}
.hero-card-title{font-family:'Syne',sans-serif;font-size:.88rem;font-weight:700;color:#fff;margin-bottom:.2rem}
.hero-card-sub{font-size:.72rem;color:rgba(212,212,216,.4)}
.hero-card-bar{height:3px;background:rgba(139,92,246,.15);border-radius:2px;margin-top:.7rem;overflow:hidden}
.hero-card-fill{height:100%;background:linear-gradient(90deg,${p},${s});border-radius:2px;width:78%;animation:fillBar 2s ease-out .5s both}
@keyframes fillBar{from{width:0}to{width:78%}}

.services-section{padding:7rem 5%;max-width:1200px;margin:0 auto}
.sec-eyebrow{font-family:'Syne',sans-serif;font-size:.62rem;font-weight:700;letter-spacing:.25em;text-transform:uppercase;color:${p};margin-bottom:1rem}
.sec-h3{font-family:'Syne',sans-serif;font-size:clamp(1.8rem,3vw,2.8rem);font-weight:800;color:#fff;letter-spacing:-.03em;line-height:1.15;margin-bottom:.8rem}
.sec-h3 span{background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;margin-top:4rem}
.menu-item{background:rgba(255,255,255,.025);border:1px solid rgba(139,92,246,.1);border-radius:16px;padding:2rem;position:relative;overflow:hidden;cursor:pointer;transition:all .4s}
.menu-item::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,${p}08,${s}08);opacity:0;transition:opacity .4s;border-radius:16px}
.menu-item:hover{border-color:rgba(139,92,246,.3);transform:translateY(-4px);box-shadow:0 20px 50px ${p}15}
.menu-item:hover::before{opacity:1}
.svc-icon2{font-size:1.8rem;margin-bottom:1.2rem}
.svc-name2{font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:700;color:#fff;margin-bottom:.5rem;letter-spacing:-.02em}
.svc-desc2{font-size:.82rem;color:rgba(212,212,216,.4);line-height:1.7;margin-bottom:1.3rem}
.svc-link2{font-family:'Syne',sans-serif;font-size:.75rem;font-weight:700;color:${p};display:flex;align-items:center;gap:.4rem;transition:gap .3s}
.menu-item:hover .svc-link2{gap:.7rem}

section.gallery{display:none}

.about-section{padding:7rem 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:6rem;align-items:center}
.about-img-stack{position:relative}
.about-img-main{border-radius:16px;overflow:hidden;aspect-ratio:5/4}
.about-img-main img{height:100%;object-fit:cover}
.about-stat-card{position:absolute;bottom:-1.5rem;right:-1.5rem;background:linear-gradient(135deg,${p},${s});border-radius:12px;padding:1.2rem 1.5rem;text-align:center}
.about-stat-num{font-family:'Syne',sans-serif;font-size:2.2rem;font-weight:800;color:#fff;line-height:1}
.about-stat-lbl{font-size:.68rem;color:rgba(255,255,255,.7);letter-spacing:.1em;text-transform:uppercase;margin-top:.3rem}
.about-feats{margin-top:2.5rem;display:flex;flex-direction:column;gap:1.2rem}
.about-feat-item{display:flex;gap:.8rem;padding:1.1rem;border:1px solid rgba(139,92,246,.1);border-radius:12px;transition:border-color .3s}
.about-feat-item:hover{border-color:rgba(139,92,246,.3)}
.about-feat-icon{font-size:1.2rem;flex-shrink:0}
.about-feat-title{font-family:'Syne',sans-serif;font-size:.9rem;font-weight:700;color:#fff;margin-bottom:.2rem}
.about-feat-txt{font-size:.8rem;color:rgba(212,212,216,.4);line-height:1.65}

.testi-section{padding:7rem 5%;background:rgba(139,92,246,.03);border-top:1px solid rgba(139,92,246,.08)}
.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.5rem;margin-top:4rem}
.testi-card{background:rgba(255,255,255,.025);border:1px solid rgba(139,92,246,.1);border-radius:16px;padding:1.8rem}
.testi-stars{color:${a};font-size:.9rem;margin-bottom:.9rem}
.testi-text{font-size:.88rem;color:rgba(212,212,216,.55);line-height:1.8;margin-bottom:1.3rem;font-style:italic}
.testi-author{display:flex;align-items:center;gap:.8rem}
.testi-av{width:36px;height:36px;background:linear-gradient(135deg,${p}33,${s}33);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:${p};font-family:'Syne',sans-serif}
.testi-name{font-family:'Syne',sans-serif;font-size:.85rem;font-weight:600;color:rgba(212,212,216,.8)}.testi-role{font-size:.7rem;color:rgba(212,212,216,.3)}

.faq-section{padding:7rem 5%;max-width:800px;margin:0 auto}
.faq-details{border-bottom:1px solid rgba(139,92,246,.1)}
.faq-details summary{padding:1.3rem 0;font-family:'Syne',sans-serif;font-size:.88rem;font-weight:500;color:rgba(212,212,216,.6);cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;transition:color .3s}
.faq-details summary:hover{color:#fff}
.faq-details summary::after{content:'+';color:${p};font-size:1.1rem}
.faq-details[open] summary::after{content:'−'}
.faq-answer{padding:.5rem 0 1.3rem;font-size:.83rem;color:rgba(212,212,216,.4);line-height:1.75}

.cta-section{padding:9rem 5%;text-align:center;position:relative;overflow:hidden}
.cta-bg{position:absolute;inset:0;background:radial-gradient(ellipse 80% 60% at 50% 50%,${p}12 0%,transparent 65%)}
.cta-noise{position:absolute;inset:0;opacity:.03;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}

.footer{padding:2.5rem 5%;border-top:1px solid rgba(139,92,246,.08);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem}
.footer-logo{height:26px;filter:brightness(0) invert(1)}
.footer-copy{font-size:.72rem;color:rgba(212,212,216,.2)}
.footer-links{display:flex;gap:1.5rem}
.footer-links a{font-family:'Syne',sans-serif;font-size:.7rem;color:rgba(212,212,216,.25);transition:color .3s}.footer-links a:hover{color:${p}}

@media(max-width:768px){.nav-links{display:none}.hero-inner{grid-template-columns:1fr}.hero-right{display:none}.about-section{grid-template-columns:1fr;gap:3rem}.hero-proof{gap:1.5rem}}
</style></head>
<body>
<nav class="nav">
  <a href="#"><img class="nav-logo" src="assets/logo-placeholder.png" alt="${t.name}"></a>
  <ul class="nav-links"><li><a href="#services">Layanan</a></li><li><a href="#about">Tentang</a></li><li><a href="#testi">Klien</a></li><li><a href="#faq">FAQ</a></li></ul>
  <a href="https://wa.me/${wa}" class="nav-cta">Konsultasi →</a>
</nav>

<section class="hero">
  <div class="hero-noise"></div>
  <div class="hero-grad"></div>
  <div class="hero-inner">
    <div>
      <p class="hero-label">Premium Business Solutions</p>
      <h1>${t.headline.replace('Tertinggi','<span class="grad">Tertinggi</span>')}</h1>
      <p class="hero-sub">${t.sub}</p>
      <div class="hero-btns">
        <a href="https://wa.me/${wa}" class="btn-grad">Konsultasi Gratis</a>
        <a href="#services" class="btn-border">Lihat Layanan</a>
      </div>
      <div class="hero-proof">
        <div class="hero-proof-item"><div class="hero-proof-num"><span>—</span></div><div class="hero-proof-lbl">Diisi sesuai data</div></div>
        <div class="hero-proof-item"><div class="hero-proof-num"><span>—</span></div><div class="hero-proof-lbl">Diisi sesuai data</div></div>
        <div class="hero-proof-item"><div class="hero-proof-num"><span>—</span></div><div class="hero-proof-lbl">Diisi sesuai data</div></div>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-img-frame"><img src="assets/foto-produk-1.png" alt="business"></div>
      <div class="hero-card-float">
        <div class="hero-card-title">Business Growth</div>
      <div class="hero-card-sub">Contoh data ringkas</div>
        <div class="hero-card-bar"><div class="hero-card-fill"></div></div>
      </div>
    </div>
  </div>
</section>

<section id="services" class="services-section">
  <div class="sec-eyebrow">Layanan Unggulan</div>
  <h2 class="sec-h3">Solusi Bisnis <span>Premium</span><br>untuk Brand Anda</h2>
  <div class="services-grid">
    ${mn.slice(0,4).map(function(m,i){var icons=['💡','📣','📊','🚀'];var descs=['Identitas brand yang kuat, positioning tepat sasaran, dan strategi yang membuat Anda unggul dari kompetitor.','Kampanye digital multi-channel yang terukur. SEO, paid ads, content, dan social media dalam satu ekosistem.','Analitik mendalam, KPI tracking, dan laporan pertumbuhan real-time. Keputusan berdasarkan data akurat.','Skalakan bisnis 3-10x dalam 12 bulan dengan roadmap strategis yang telah terbukti menghasilkan ROI tinggi.'];return '<div class="menu-item"><div class="svc-icon2">'+icons[i%4]+'</div><h3 class="svc-name2">'+m+'</h3><p class="svc-desc2">'+descs[i%4]+'</p><span class="svc-link2">Pelajari →</span></div>';}).join('')}
  </div>
</section>

<section class="gallery"><p>placeholder</p></section>

<section id="about" class="about-section">
  <div class="about-img-stack">
    <div class="about-img-main"><img src="assets/foto-produk-2.png" alt="team"></div>
    <div class="about-stat-card"><div class="about-stat-num">—</div><div class="about-stat-lbl">Diisi sesuai data</div></div>
  </div>
  <div>
    <div class="sec-eyebrow">Tentang Kami</div>
    <h2 class="sec-h3">Partner Bisnis<br>yang <span>Anda Percaya</span></h2>
    <p style="font-size:.88rem;color:rgba(212,212,216,.4);line-height:1.85;margin:1rem 0 2rem;font-weight:300">${t.sub}</p>
    <div class="about-feats">
      <div class="about-feat-item"><span class="about-feat-icon">💡</span><div><div class="about-feat-title">Scope yang Jelas</div><p class="about-feat-txt">Fokus pada kebutuhan inti: struktur konten, CTA, dan tujuan bisnis yang bisa diukur.</p></div></div>
      <div class="about-feat-item"><span class="about-feat-icon">📱</span><div><div class="about-feat-title">Pengalaman Pengguna</div><p class="about-feat-txt">Tampilan rapi, mobile-friendly, dan mudah dipahami agar pengunjung cepat mengambil keputusan.</p></div></div>
      <div class="about-feat-item"><span class="about-feat-icon">💬</span><div><div class="about-feat-title">Support yang Terukur</div><p class="about-feat-txt">Kanal komunikasi jelas (WhatsApp/email) dengan jam layanan yang disepakati di awal.</p></div></div>
    </div>
  </div>
</section>

<section id="testi" class="testi-section"><div class="testi-inner">
  <div class="sec-eyebrow">Klien Kami</div>
  <h2 class="sec-h3">Bisnis dari Berbagai <span>Industri</span><br>Pernah Bekerja Sama</h2>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>

<section id="faq" class="faq-section">
  <div style="margin-bottom:3rem"><div class="sec-eyebrow">FAQ</div><h2 class="sec-h3">Pertanyaan Umum</h2></div>
  ${faqHTML().replace(/<details>/g,'<details class="faq-details">').replace(/<summary>/g,'<summary>')}
</section>

<section class="cta-section">
  <div class="cta-bg"></div>
  <div class="cta-noise"></div>
  <div style="position:relative;z-index:1">
    <div class="sec-eyebrow" style="margin-bottom:1.5rem;display:block">Mulai Hari Ini</div>
    <h2 style="font-family:'Syne',sans-serif;font-size:clamp(2.2rem,5vw,4rem);font-weight:800;color:#fff;margin-bottom:1rem;letter-spacing:-.04em;line-height:1.05">Saatnya Bisnis Anda<br>Tampil di <span style="background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text">Level Tertinggi</span></h2>
    <p style="font-size:.95rem;color:rgba(212,212,216,.4);margin-bottom:2.5rem;font-weight:300;max-width:500px;margin-left:auto;margin-right:auto">Konsultasi gratis. Tidak ada komitmen. Kami buktikan nilai kami dulu.</p>
    <a href="https://wa.me/${wa}" class="btn-grad" style="font-size:.88rem;padding:1rem 2.8rem">Hubungi via WhatsApp →</a>
  </div>
</section>

<footer class="footer">
  <img class="footer-logo" src="assets/logo-placeholder.png" alt="${t.name}">
  <span class="footer-copy">© 2025 ${t.name}. All rights reserved.</span>
  <div class="footer-links"><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="https://wa.me/${wa}">WhatsApp</a></div>
</footer>
</body></html>`;
}
