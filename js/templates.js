/* ============================================================
   WebsiteKu — Template Generators (10 style functions)
   ============================================================ */

const _RATES=[4.8,4.9,4.9,5.0,4.8,5.0,4.9,4.8,4.9,5.0];
const _BUYS=[523,1247,891,672,1089,543,2134,734,956,1423];
function fStar(i){return _RATES[i%_RATES.length].toFixed(1);}
function fBuy(i){var n=_BUYS[i%_BUYS.length];return n>=1000?(n/1000).toFixed(1).replace('.',',')+'rb':''+n;}
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
  <details><summary>Berapa lama proses pengerjaan?</summary><div class="faq-answer">Umumnya 3–7 hari kerja tergantung kompleksitas desain. Kami mengutamakan ketepatan waktu tanpa mengorbankan kualitas.</div></details>
  <details><summary>Apakah saya bisa request revisi desain?</summary><div class="faq-answer">Tentu! Setiap paket mencakup revisi gratis hingga 3 kali. Revisi tambahan tersedia dengan biaya sangat terjangkau.</div></details>
  <details><summary>Apakah website mobile-friendly?</summary><div class="faq-answer">Ya, semua website yang kami buat sudah responsive dan tampil sempurna di smartphone, tablet, maupun komputer desktop.</div></details>
  <details><summary>Bagaimana cara melakukan pemesanan?</summary><div class="faq-answer">Pilih paket yang sesuai, klik tombol "Pesan Sekarang", isi form kebutuhan Anda. Tim kami menghubungi dalam 1×24 jam.</div></details>
  <details><summary>Apakah ada garansi dan dukungan purna jual?</summary><div class="faq-answer">Ya! Setiap pembelian dilengkapi garansi kepuasan dan dukungan teknis sesuai paket yang dipilih.</div></details>`;}

/* Shared testimonials HTML */
function testiHTML(){return `
  <div class="testi-card"><div class="testi-stars">★★★★★</div><p class="testi-text">"Pelayanan sangat memuaskan! Kualitas produk jauh melebihi ekspektasi saya. Pasti akan kembali lagi."</p><div class="testi-author"><div class="testi-av">BS</div><div><div class="testi-name">Budi Santoso</div><div class="testi-role">Pelanggan Setia</div></div></div></div>
  <div class="testi-card"><div class="testi-stars">★★★★★</div><p class="testi-text">"Sudah 2 tahun berlangganan, tidak pernah kecewa. Tim sangat ramah dan profesional dalam setiap layanan."</p><div class="testi-author"><div class="testi-av">SD</div><div><div class="testi-name">Sari Dewi</div><div class="testi-role">Member VIP</div></div></div></div>
  <div class="testi-card"><div class="testi-stars">★★★★★</div><p class="testi-text">"Rekomendasi terbaik! Hasil kerja rapi, tepat waktu, dan harga sangat terjangkau untuk kualitas sebagus ini."</p><div class="testi-author"><div class="testi-av">AF</div><div><div class="testi-name">Ahmad Fauzi</div><div class="testi-role">Mitra Bisnis</div></div></div></div>`;}

function generateSplash(t){
  var s=t.style;
  var ac=t.primary;
  var sc=t.secondary||t.accent||ac;
  var bn=t.name.replace('WebsiteKu ','');
  var ctag={1:'Kuliner & Restoran',2:'Properti & Hunian',3:'Kesehatan & Kecantikan',4:'Teknologi & Digital',5:'Bisnis & UMKM'}[t.cat]||'Profil Bisnis';
  var glowClr={minimalist:'#6C63FF',corporate:ac,luxury:'#C9A84C',dark:'#8B5CF6',glassmorphism:'#7C3AED',neon:'#39FF14',startup:'#6C63FF',elegant:'#A08060',futuristic:'#00D4FF',premium:'#C9A84C'}[s]||ac;
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
  '.product-card,.menu-item,.prod-card,.pkg-card,.item-card{transition:transform .35s cubic-bezier(.22,1,.36,1),box-shadow .35s ease!important}'+
  '.product-card:hover,.menu-item:hover,.prod-card:hover,.pkg-card:hover,.item-card:hover{transform:translateY(-6px)!important}'+
  '.btn-fill,.btn-primary,.btn-cta,.order-btn,[class*="btn-p"]{position:relative!important;overflow:hidden!important}'+
  '.btn-fill::before,.btn-primary::before,.btn-cta::before,.order-btn::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent,rgba(255,255,255,.13),transparent);transform:translateX(-110%);transition:transform .55s ease}'+
  '.btn-fill:hover::before,.btn-primary:hover::before,.btn-cta:hover::before,.order-btn:hover::before{transform:translateX(110%)}'+
  '</style>'+
  '<script>(function(){'+
  'var obs=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add("__v");obs.unobserve(e.target)}})},{threshold:.1,rootMargin:"0px 0px -30px 0px"});'+
  'document.querySelectorAll(".product-card,.menu-item,.prod-card,.testi-card,.faq-details,.about-feat-item,.proses-step,.ki-item,.service-item,.pkg-card").forEach(function(el,i){'+
  'el.style.opacity="0";el.style.transform="translateY(22px)";el.style.transition="opacity .65s cubic-bezier(.22,1,.36,1) "+(i%4*.09)+"s,transform .65s cubic-bezier(.22,1,.36,1) "+(i%4*.09)+"s";'+
  'obs.observe(el);});'+
  'document.querySelectorAll(".__v").forEach(function(el){el.style.opacity="1";el.style.transform="none"});'+
  '})();<\/script>';
}

function generateTemplateHTML(tpl,base){
  base=base||'';
  var html;
  switch(tpl.style){
    case 'minimalist':    html=tmplMinimalist(tpl,base); break;
    case 'corporate':     html=tmplCorporate(tpl,base); break;
    case 'luxury':        html=tmplLuxury(tpl,base); break;
    case 'dark':          html=tmplDark(tpl,base); break;
    case 'glassmorphism': html=tmplGlassmorphism(tpl,base); break;
    case 'neon':          html=tmplNeon(tpl,base); break;
    case 'startup':       html=tmplStartup(tpl,base); break;
    case 'elegant':       html=tmplElegant(tpl,base); break;
    case 'futuristic':    html=tmplFuturistic(tpl,base); break;
    case 'premium':       html=tmplPremium(tpl,base); break;
    default:              html=tmplStartup(tpl,base);
  }
  html=html.replace('<body>','<body>'+generateSplash(tpl));
  html=html.replace(/<section class="gallery">[\s\S]*?<\/section>/,generateWhyUs(tpl));
  html=html.replace('</body>',generatePremiumInjection(tpl)+'</body>');
  return html;
}

function generateWhyUs(t){
  var s=t.style;
  var isDk=['corporate','luxury','dark','glassmorphism','neon','startup','futuristic','premium'].indexOf(s)>=0;
  var tc=isDk?'#fff':'#111';var sc=isDk?'rgba(255,255,255,.62)':'#555';
  var sbgs={minimalist:'#F5F5F5',corporate:'rgba(0,0,0,.1)',luxury:'#080808',dark:'#0D0D0D',glassmorphism:'rgba(0,0,0,.15)',neon:'rgba(0,0,0,.2)',startup:'rgba(255,255,255,.02)',elegant:'#F0EDE8',futuristic:'rgba(0,0,0,.15)',premium:'rgba(0,0,0,.15)'};
  var cbgs={minimalist:'#fff',corporate:'rgba(255,255,255,.06)',luxury:'rgba(255,255,255,.04)',dark:'rgba(255,255,255,.04)',glassmorphism:'rgba(255,255,255,.04)',neon:'rgba(0,0,0,.4)',startup:'rgba(255,255,255,.04)',elegant:'#fff',futuristic:'rgba(255,255,255,.03)',premium:'rgba(255,255,255,.04)'};
  var bdrs={minimalist:'#E5E5E5',corporate:'rgba(255,255,255,.1)',luxury:'rgba(255,255,255,.06)',dark:'rgba(255,255,255,.06)',glassmorphism:'rgba(255,255,255,.06)',neon:t.primary+'33',startup:'rgba(255,255,255,.06)',elegant:'#E8E0D8',futuristic:t.accent+'22',premium:'rgba(255,255,255,.06)'};
  var sbg=sbgs[s]||'rgba(0,0,0,.1)';var cbg=cbgs[s]||'rgba(255,255,255,.04)';var bdr=bdrs[s]||'rgba(255,255,255,.06)';
  var p=t.primary;var bn=t.name.replace('WebsiteKu ','');
  var feats={
    1:[['🌿','Bahan Segar Premium','Bahan pilihan langsung dari petani lokal terpercaya. Kesegaran dan kualitas tertinggi dijamin dalam setiap hidangan.'],['👨‍🍳','Chef Berpengalaman','Tim chef dengan pengalaman 10+ tahun di industri kuliner nasional dan internasional.'],['⚡','Pelayanan Cepat','Pesanan diproses dalam 15 menit. Waktu Anda sangat berharga bagi kami.'],['🏆','Terpercaya & Berpengalaman','Dipercaya 5.000+ pelanggan setia sejak 2015. Penghargaan restoran terbaik versi majalah kuliner nasional.']],
    2:[['📍','Lokasi Strategis','Properti di kawasan premium dengan akses mudah ke pusat bisnis, sekolah internasional, dan fasilitas kota.'],['📋','Legalitas 100% Aman','SHM, IMB lengkap, dan telah melalui due diligence ketat oleh tim hukum independen kami.'],['🏗️','Konstruksi Premium','Material berstandar SNI dan internasional. Garansi struktur 10 tahun dengan teknisi bersertifikat.'],['🤝','After Sales Terbaik','Pendampingan KPR, balik nama, dan konsultasi renovasi 2 tahun penuh setelah serah terima kunci.']],
    3:[['🩺','Dokter Tersertifikasi','Seluruh dokter tersertifikasi nasional BPOM & Kemenkes dengan pengalaman klinis 5+ tahun.'],['🔬','Teknologi Medis Modern','Peralatan terkini tersertifikasi resmi untuk hasil diagnostik akurat dan perawatan optimal.'],['🌸','Perawatan Personal','Program individual sesuai kondisi, kebutuhan, dan target kesehatan spesifik setiap klien.'],['✅','Hasil Terbukti','Lebih dari 5.000 klien puas, tingkat kepuasan 98% berdasarkan survei pasca-perawatan.']],
    4:[['🚀','Teknologi Stack Terkini','Cloud computing, AI, dan DevOps modern untuk solusi digital yang scalable dan future-proof.'],['🔒','Keamanan Enterprise Grade','Enkripsi end-to-end, penetration testing berkala, kepatuhan penuh terhadap standar ISO 27001.'],['📊','Keputusan Berbasis Data','Dashboard analitik real-time dengan insight mendalam untuk pertumbuhan bisnis yang terukur.'],['🌐','Skalabilitas Global','Infrastruktur cloud elastis, siap mendukung pertumbuhan dari startup hingga enterprise internasional.']],
    5:[['💡','Solusi Tepat Sasaran','Memahami tantangan UMKM Indonesia, menyediakan solusi praktis yang langsung menghasilkan nilai nyata.'],['📱','Ekosistem Digital Lengkap','Terintegrasi dengan Tokopedia, Shopee, WhatsApp Business, Instagram, dan platform digital populer.'],['🎯','Strategi Terukur','Pemasaran berbasis data dengan targeting presisi untuk memaksimalkan ROI investasi bisnis Anda.'],['💬','Dukungan Tanpa Henti','Tim support 7 hari/minggu via WhatsApp, telepon, email, dan kunjungan langsung.']]
  };
  var fs=feats[t.cat]||feats[5];
  return '<section class="why-us" style="padding:5rem 5%;background:'+sbg+'"><div style="max-width:1200px;margin:0 auto"><div style="text-align:center;margin-bottom:3.5rem"><div style="display:inline-block;background:'+p+'22;color:'+p+';border:1px solid '+p+'44;border-radius:100px;padding:.3rem 1.1rem;font-size:.72rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:1rem">Keunggulan Kami</div><h2 style="font-size:clamp(1.5rem,3.5vw,2.2rem);font-weight:800;color:'+tc+';margin:0 0 .6rem;line-height:1.25">Mengapa Memilih <span style="color:'+p+'">'+bn+'?</span></h2><p style="color:'+sc+';font-size:.9rem;max-width:480px;margin:0 auto;line-height:1.65">Lebih dari sekadar layanan — pengalaman yang melampaui ekspektasi dengan hasil nyata dan terukur.</p></div><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:1.5rem">'+fs.map(function(f){return '<div style="background:'+cbg+';border:1px solid '+bdr+';border-radius:16px;padding:1.8rem 1.6rem"><div style="font-size:1.8rem;margin-bottom:1rem">'+f[0]+'</div><h3 style="font-size:.95rem;font-weight:700;color:'+tc+';margin:0 0 .5rem">'+f[1]+'</h3><p style="font-size:.83rem;color:'+sc+';line-height:1.65;margin:0">'+f[2]+'</p></div>';}).join('')+'</div></div></section>';
}

/* ============================================================ */
/* 1. MINIMALIST                                                 */
/* ============================================================ */
function tmplMinimalist(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<8)mn=mn.concat(mn);
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'DM Sans',sans-serif;background:#FAFAFA;color:#1A1A1A;line-height:1.6}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}
.nav{position:sticky;top:0;background:rgba(255,255,255,.97);backdrop-filter:blur(8px);border-bottom:1px solid #E8E8E8;z-index:100;padding:.9rem 5%}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:2rem}
.nav-logo{height:30px;width:auto;object-fit:contain}
.nav-links{display:flex;gap:1.8rem;list-style:none}
.nav-links a{font-size:.875rem;font-weight:500;color:#555;transition:color .2s}.nav-links a:hover{color:#000}
.nav-cta{padding:.5rem 1.2rem;background:#000;color:#fff;border-radius:6px;font-size:.85rem;font-weight:600}
.hero{padding:5.5rem 5% 4rem;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.hero-badge{display:inline-block;background:${s};color:${p};font-size:.72rem;font-weight:700;padding:.28rem .75rem;border-radius:4px;letter-spacing:.08em;text-transform:uppercase;margin-bottom:1.2rem}
.hero h1{font-size:clamp(2rem,4vw,3.4rem);font-weight:700;line-height:1.15;letter-spacing:-.03em;margin-bottom:1rem}
.hero-sub{font-size:1rem;color:#666;line-height:1.75;margin-bottom:2rem}
.hero-btns{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:1.75rem}
.btn-fill{padding:.8rem 1.75rem;background:#000;color:#fff;border-radius:8px;font-weight:600;font-size:.9rem;transition:all .2s}.btn-fill:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,0,0,.12)}
.btn-out{padding:.8rem 1.75rem;border:1.5px solid #ddd;border-radius:8px;font-weight:500;font-size:.9rem;color:#333;transition:all .2s}.btn-out:hover{border-color:#000;color:#000}
.hero-trust{display:flex;align-items:center;gap:.7rem;font-size:.83rem;color:#888}
.trust-av{display:flex}.trust-av span{width:28px;height:28px;border-radius:50%;background:${p}25;border:2px solid #fff;display:flex;align-items:center;justify-content:center;font-size:.62rem;font-weight:700;color:${p};margin-left:-7px}.trust-av span:first-child{margin-left:0}
.hero-img{border-radius:20px;overflow:hidden;aspect-ratio:5/4;box-shadow:0 20px 60px rgba(0,0,0,.08)}.hero-img img{height:100%;object-fit:cover}
.stats{background:#fff;border-top:1px solid #E8E8E8;border-bottom:1px solid #E8E8E8;padding:2.5rem 5%}
.stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.stat-item{text-align:center;padding:1rem 2rem;border-right:1px solid #E8E8E8}.stat-item:last-child{border-right:none}
.stat-num{font-size:2.2rem;font-weight:700;color:${p};line-height:1}.stat-label{font-size:.8rem;color:#999;margin-top:.3rem}
.about{padding:5.5rem 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.about-tag{font-size:.75rem;font-weight:700;color:${p};letter-spacing:.1em;text-transform:uppercase;margin-bottom:.7rem}
.about h2{font-size:2.1rem;font-weight:700;letter-spacing:-.02em;margin-bottom:1rem;line-height:1.2}
.about-desc{color:#666;line-height:1.75;margin-bottom:1.5rem}
.about-checks{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
.about-checks li{display:flex;align-items:center;gap:.45rem;font-size:.88rem;font-weight:500}
.ck{width:18px;height:18px;border-radius:50%;background:${p};color:#fff;display:flex;align-items:center;justify-content:center;font-size:.6rem;flex-shrink:0}
.about-img{border-radius:20px;overflow:hidden;aspect-ratio:4/3;box-shadow:0 20px 60px rgba(0,0,0,.08)}.about-img img{height:100%;object-fit:cover}
.products{padding:5.5rem 5%;background:#fff}.products-inner{max-width:1200px;margin:0 auto}
.sec-head{text-align:center;margin-bottom:3.5rem}.sec-head h2{font-size:2rem;font-weight:700;letter-spacing:-.02em;margin-bottom:.4rem}.sec-head p{color:#888;font-size:.95rem}
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
.prod-card{border:1px solid #E8E8E8;border-radius:14px;overflow:hidden;transition:all .22s;background:#FAFAFA}
.prod-card:hover{border-color:${p}66;transform:translateY(-4px);box-shadow:0 12px 40px rgba(0,0,0,.07)}
.prod-img{aspect-ratio:4/3;overflow:hidden}.prod-img img{transition:transform .35s;height:100%;object-fit:cover}.prod-card:hover .prod-img img{transform:scale(1.05)}
.prod-body{padding:1.2rem}.prod-name{font-weight:600;font-size:.92rem;margin-bottom:.35rem;line-height:1.3}
.prod-price{font-weight:700;font-size:1.05rem;color:${p};margin-bottom:.45rem}
.prod-meta{display:flex;align-items:center;gap:.4rem;font-size:.78rem;color:#888}.prod-stars{color:#F5A623}
.prod-btn{display:block;text-align:center;margin-top:.9rem;padding:.55rem;background:${p}15;color:${p};border-radius:8px;font-size:.82rem;font-weight:600;transition:all .2s}.prod-btn:hover{background:${p};color:#fff}
.gallery{padding:5.5rem 5%;background:#F5F5F5}.gallery-inner{max-width:1200px;margin:0 auto}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:3rem}
.gal-item{border-radius:12px;overflow:hidden;aspect-ratio:4/3}.gal-item img{transition:transform .4s;height:100%;object-fit:cover}.gal-item:hover img{transform:scale(1.06)}
.testimonials{padding:5.5rem 5%;background:#fff}.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.testi-card{border:1px solid #E8E8E8;border-radius:16px;padding:2rem;background:#FAFAFA}
.testi-stars{color:#F5A623;margin-bottom:.8rem}.testi-text{font-size:.9rem;color:#555;line-height:1.7;margin-bottom:1.5rem}
.testi-author{display:flex;align-items:center;gap:.75rem}
.testi-av{width:40px;height:40px;border-radius:50%;background:${p};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.82rem;flex-shrink:0}
.testi-name{font-weight:600;font-size:.88rem}.testi-role{font-size:.78rem;color:#999}
.pricing{padding:5.5rem 5%;background:#F9F9F9}.pricing-inner{max-width:1100px;margin:0 auto}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.price-card{border:1px solid #E8E8E8;border-radius:16px;padding:2.5rem;background:#fff;position:relative;transition:all .2s}
.price-card.featured{border-color:${p};box-shadow:0 0 0 2px ${p}30}
.price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:${p};color:#fff;font-size:.72rem;font-weight:700;padding:.28rem .9rem;border-radius:20px;white-space:nowrap}
.price-tier{font-size:.75rem;font-weight:700;color:${p};letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem}
.price-amt{font-size:2.4rem;font-weight:700;letter-spacing:-.03em;line-height:1;margin-bottom:.2rem}
.price-period{font-size:.82rem;color:#999;margin-bottom:1.2rem}
.price-div{height:1px;background:#E8E8E8;margin:1.2rem 0}
.price-features{list-style:none;display:flex;flex-direction:column;gap:.6rem;margin-bottom:1.75rem}
.price-features li{display:flex;align-items:center;gap:.5rem;font-size:.87rem;color:#555}
.price-features li::before{content:'✓';color:${p};font-weight:700;flex-shrink:0}
.price-btn{display:block;text-align:center;padding:.8rem;border-radius:10px;font-weight:600;font-size:.88rem;transition:all .2s}
.price-btn-def{border:1.5px solid #ddd;color:#444}.price-btn-def:hover{border-color:${p};color:${p}}
.price-btn-feat{background:${p};color:#fff}.price-btn-feat:hover{opacity:.9}
.faq-sec{padding:5.5rem 5%;background:#fff}.faq-inner{max-width:800px;margin:0 auto}
.faq-list{margin-top:3rem;display:flex;flex-direction:column;gap:.65rem}
details{border:1px solid #E8E8E8;border-radius:12px;overflow:hidden}
details[open]{border-color:${p}50}
summary{padding:1.2rem 1.5rem;cursor:pointer;font-weight:600;font-size:.92rem;list-style:none;display:flex;justify-content:space-between;align-items:center;user-select:none}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-size:1.2rem;font-weight:300;color:${p};flex-shrink:0}
details[open] summary::after{content:'−'}
.faq-answer{padding:0 1.5rem 1.2rem;font-size:.88rem;color:#666;line-height:1.7}
.cta-band{padding:5rem 5%;background:${p};color:#fff;text-align:center}
.cta-band h2{font-size:2.1rem;font-weight:700;letter-spacing:-.02em;margin-bottom:.7rem}
.cta-band p{font-size:.95rem;opacity:.85;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
.cta-btn{display:inline-block;padding:.95rem 2.5rem;background:#fff;color:${p};border-radius:10px;font-weight:700;font-size:.95rem;transition:all .2s}.cta-btn:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,0,0,.2)}
footer{background:#111;color:#fff;padding:5rem 5% 2rem}
.footer-inner{max-width:1200px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.footer-brand p{color:#888;font-size:.83rem;line-height:1.7;margin-top:.6rem}
.footer-col h4{font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;margin-bottom:1.1rem}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.45rem}
.footer-links a{font-size:.83rem;color:#888;transition:color .2s}.footer-links a:hover{color:#fff}
.footer-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:1.8rem;display:flex;justify-content:space-between;font-size:.78rem;color:#555}
.f-brand-name{font-size:1.05rem;font-weight:700}
@media(max-width:900px){.hero,.about{grid-template-columns:1fr;gap:2.5rem}.stats-inner,.prod-grid{grid-template-columns:repeat(2,1fr)}.testi-grid,.pricing-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.gallery-grid{grid-template-columns:repeat(2,1fr)}.stat-item{border-right:none;border-bottom:1px solid #E8E8E8}}
</style></head>
<body>
<nav class="nav"><div class="nav-inner">
  <img src="assets/logo-placeholder.png" class="nav-logo" alt="logo">
  <ul class="nav-links"><li><a href="#">Home</a></li><li><a href="#">Tentang</a></li><li><a href="#">Menu</a></li><li><a href="#">Galeri</a></li><li><a href="#">Kontak</a></li></ul>
  <a href="#" class="nav-cta">Pesan Sekarang</a>
</div></nav>

<section class="hero">
  <div>
    <div class="hero-badge">${t.catName}</div>
    <h1>${t.headline}</h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-btns"><a href="#" class="btn-fill">Lihat Menu</a><a href="#" class="btn-out">Tentang Kami</a></div>
    <div class="hero-trust"><div class="trust-av"><span>BS</span><span>SD</span><span>AF</span></div><span>500+ pelanggan puas</span></div>
  </div>
  <div class="hero-img"><img src="assets/foto-bisnis-anda.png" alt="bisnis"></div>
</section>

<section class="stats"><div class="stats-inner">
  <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Pelanggan Puas</div></div>
  <div class="stat-item"><div class="stat-num">50+</div><div class="stat-label">Menu Tersedia</div></div>
  <div class="stat-item"><div class="stat-num">5 Thn</div><div class="stat-label">Pengalaman</div></div>
  <div class="stat-item"><div class="stat-num">4.9★</div><div class="stat-label">Rating Kepuasan</div></div>
</div></section>

<section class="about"><div class="about-tag">Tentang Kami</div>
  <div>
    <h2>${t.name}</h2>
    <p class="about-desc">${t.description||t.sub}</p>
    <ul class="about-checks">${mn.slice(0,6).map(m=>`<li><span class="ck">✓</span>${m}</li>`).join('')}</ul>
  </div>
  <div class="about-img"><img src="assets/foto-bisnis-anda.png" alt="tentang"></div>
</section>

<section class="products"><div class="products-inner">
  <div class="sec-head"><h2>Produk &amp; Layanan Unggulan</h2><p>Pilihan terbaik dengan kualitas terjamin</p></div>
  <div class="prod-grid">${mn.slice(0,4).map((name,i)=>`
    <div class="prod-card">
      <div class="prod-img"><img src="${fImg(i)}" alt="${name}"></div>
      <div class="prod-body">
        <div class="prod-name">${name}</div>
        <div class="prod-price">${fPrice(t.cat,i)}</div>
        <div class="prod-meta"><span class="prod-stars">★★★★★</span><span>${fStar(i)}</span><span>·</span><span>${fBuy(i)} terjual</span></div>
        <a href="#" class="prod-btn">Pesan Sekarang</a>
      </div>
    </div>`).join('')}
  </div>
</div></section>

<section class="gallery"><div class="gallery-inner">
  <div class="sec-head"><h2>Galeri</h2><p>Karya dan momen terbaik kami</p></div>
  <div class="gallery-grid">${[0,1,2,3,4,5].map(i=>`<div class="gal-item"><img src="${fImg(i)}" alt="galeri ${i+1}"></div>`).join('')}</div>
</div></section>

<section class="testimonials"><div class="testi-inner">
  <div class="sec-head"><h2>Kata Pelanggan</h2><p>Kepercayaan pelanggan adalah prioritas kami</p></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>

<section class="pricing"><div class="pricing-inner">
  <div class="sec-head"><h2>Paket Harga</h2><p>Pilih paket yang sesuai kebutuhan Anda</p></div>
  <div class="pricing-grid">
    <div class="price-card">
      <div class="price-tier">Starter</div><div class="price-amt">Rp 199<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div>
      <div class="price-div"></div>
      <ul class="price-features"><li>Hingga 10 Produk</li><li>Galeri 5 Foto</li><li>Formulir Kontak</li><li>Mobile Friendly</li><li>Support 30 Hari</li></ul>
      <a href="#" class="price-btn price-btn-def">Mulai Gratis</a>
    </div>
    <div class="price-card featured">
      <div class="price-badge">TERPOPULER</div>
      <div class="price-tier">Professional</div><div class="price-amt">Rp 499<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div>
      <div class="price-div"></div>
      <ul class="price-features"><li>Produk Tidak Terbatas</li><li>Galeri 20 Foto</li><li>Pemesanan Online</li><li>SEO Optimization</li><li>Support 24/7</li><li>Analitik Website</li></ul>
      <a href="#" class="price-btn price-btn-feat">Pilih Paket Ini</a>
    </div>
    <div class="price-card">
      <div class="price-tier">Enterprise</div><div class="price-amt">Rp 999<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div>
      <div class="price-div"></div>
      <ul class="price-features"><li>Semua Fitur Pro</li><li>Domain Custom</li><li>Integrasi Payment</li><li>Multi-bahasa</li><li>API Access</li><li>Manajer Dedikasi</li></ul>
      <a href="#" class="price-btn price-btn-def">Hubungi Kami</a>
    </div>
  </div>
</div></section>

<section class="faq-sec"><div class="faq-inner">
  <div class="sec-head"><h2>Pertanyaan Umum</h2><p>Temukan jawaban atas pertanyaan Anda</p></div>
  <div class="faq-list">${faqHTML()}</div>
</div></section>

<section class="cta-band">
  <h2>Siap Memulai Bisnis Online?</h2>
  <p>Dapatkan website profesional dengan harga terjangkau. Konsultasi gratis!</p>
  <a href="#" class="cta-btn">Hubungi Kami via WhatsApp ✨</a>
</section>

<footer><div class="footer-inner">
  <div class="footer-grid">
    <div class="footer-brand"><div class="f-brand-name">${t.name}</div><p>${(t.sub||'').substring(0,100)}</p></div>
    <div class="footer-col"><h4>Layanan</h4><ul class="footer-links">${mn.slice(0,4).map(m=>`<li><a href="#">${m}</a></li>`).join('')}</ul></div>
    <div class="footer-col"><h4>Informasi</h4><ul class="footer-links"><li><a href="#">Tentang Kami</a></li><li><a href="#">Blog</a></li><li><a href="#">Promo</a></li><li><a href="#">Karir</a></li></ul></div>
    <div class="footer-col"><h4>Kontak</h4><ul class="footer-links"><li><a href="#">WhatsApp</a></li><li><a href="#">Instagram</a></li><li><a href="#">Email</a></li><li><a href="#">Lokasi</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2025 ${t.name}. All rights reserved.</span><span>Dibuat dengan ❤ oleh WebsiteKu</span></div>
</div></footer>
</body></html>`;}

/* ============================================================ */
/* 2. CORPORATE                                                   */
/* ============================================================ */
function tmplCorporate(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<8)mn=mn.concat(mn);
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'Inter',sans-serif;background:#fff;color:#0F1923;line-height:1.6}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}
.nav{background:${p};padding:1rem 5%;position:sticky;top:0;z-index:100}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.nav-logo{height:30px;width:auto;object-fit:contain;filter:brightness(10)}
.nav-links{display:flex;gap:1.8rem;list-style:none}
.nav-links a{font-size:.875rem;font-weight:500;color:rgba(255,255,255,.75);transition:color .2s}.nav-links a:hover{color:#fff}
.nav-cta{padding:.5rem 1.2rem;background:#fff;color:${p};border-radius:6px;font-size:.85rem;font-weight:700}
.hero{background:linear-gradient(135deg,${p} 0%,${s} 100%);padding:6rem 5%;color:#fff;overflow:hidden;position:relative}
.hero::before{content:'';position:absolute;right:-5%;top:-20%;width:50%;height:140%;background:rgba(255,255,255,.04);border-radius:50%;pointer-events:none}
.hero-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.hero-badge{display:inline-block;background:rgba(255,255,255,.15);backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,.3);font-size:.72rem;font-weight:700;padding:.28rem .85rem;border-radius:20px;letter-spacing:.06em;text-transform:uppercase;margin-bottom:1.2rem}
.hero h1{font-size:clamp(1.9rem,4vw,3.2rem);font-weight:800;line-height:1.12;letter-spacing:-.03em;margin-bottom:1rem}
.hero-sub{font-size:1rem;opacity:.85;line-height:1.75;margin-bottom:2rem;max-width:500px}
.hero-btns{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:2rem}
.btn-white{padding:.8rem 1.75rem;background:#fff;color:${p};border-radius:8px;font-weight:700;font-size:.9rem;transition:all .2s}.btn-white:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,0,0,.2)}
.btn-ghost-w{padding:.8rem 1.75rem;border:1.5px solid rgba(255,255,255,.5);border-radius:8px;font-weight:500;font-size:.9rem;color:#fff;transition:all .2s}.btn-ghost-w:hover{background:rgba(255,255,255,.1)}
.trust-row{display:flex;align-items:center;gap:.75rem;font-size:.83rem;opacity:.85}
.trust-dots{display:flex}.trust-dots span{width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.2);border:2px solid rgba(255,255,255,.4);display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:700;margin-left:-7px}.trust-dots span:first-child{margin-left:0}
.hero-img-wrap{border-radius:16px;overflow:hidden;aspect-ratio:5/4;box-shadow:0 30px 80px rgba(0,0,0,.3)}.hero-img-wrap img{height:100%;object-fit:cover}
.stats{background:#F7F8FA;padding:3rem 5%}
.stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.stat-item{text-align:center;padding:1.5rem;border-right:1px solid #E0E4EA}.stat-item:last-child{border-right:none}
.stat-num{font-size:2.4rem;font-weight:800;color:${p};line-height:1}.stat-label{font-size:.8rem;color:#7A8499;margin-top:.3rem;font-weight:500}
.about{padding:5.5rem 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.about-tag{font-size:.72rem;font-weight:700;color:${p};letter-spacing:.12em;text-transform:uppercase;margin-bottom:.75rem}
.about h2{font-size:2.1rem;font-weight:800;letter-spacing:-.03em;margin-bottom:1rem;line-height:1.15}
.about-desc{color:#5A6577;line-height:1.75;margin-bottom:1.5rem}
.about-checks{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
.about-checks li{display:flex;align-items:center;gap:.45rem;font-size:.87rem;font-weight:500}
.ck{width:18px;height:18px;border-radius:50%;background:${p};color:#fff;display:flex;align-items:center;justify-content:center;font-size:.6rem;flex-shrink:0}
.about-img{border-radius:16px;overflow:hidden;aspect-ratio:4/3;box-shadow:0 20px 60px rgba(0,0,0,.1)}.about-img img{height:100%;object-fit:cover}
.products{padding:5.5rem 5%;background:#F7F8FA}.products-inner{max-width:1200px;margin:0 auto}
.sec-head{text-align:center;margin-bottom:3.5rem}.sec-head h2{font-size:2rem;font-weight:800;letter-spacing:-.03em;margin-bottom:.4rem}.sec-head p{color:#7A8499;font-size:.93rem}
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
.prod-card{background:#fff;border-radius:14px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,.05);transition:all .22s}
.prod-card:hover{transform:translateY(-5px);box-shadow:0 16px 40px rgba(0,0,0,.1)}
.prod-img{aspect-ratio:4/3;overflow:hidden}.prod-img img{height:100%;object-fit:cover;transition:transform .35s}.prod-card:hover .prod-img img{transform:scale(1.05)}
.prod-body{padding:1.2rem}.prod-name{font-weight:600;font-size:.9rem;margin-bottom:.3rem}
.prod-price{font-weight:800;font-size:1.05rem;color:${p};margin-bottom:.4rem}
.prod-meta{display:flex;align-items:center;gap:.4rem;font-size:.77rem;color:#7A8499}.prod-stars{color:#F5A623}
.prod-btn{display:block;text-align:center;margin-top:.85rem;padding:.55rem;background:${p};color:#fff;border-radius:8px;font-size:.82rem;font-weight:600;transition:opacity .2s}.prod-btn:hover{opacity:.85}
.gallery{padding:5.5rem 5%;background:#fff}.gallery-inner{max-width:1200px;margin:0 auto}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:3rem}
.gal-item{border-radius:12px;overflow:hidden;aspect-ratio:4/3}.gal-item img{height:100%;object-fit:cover;transition:transform .4s}.gal-item:hover img{transform:scale(1.06)}
.testimonials{padding:5.5rem 5%;background:#F7F8FA}.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.testi-card{background:#fff;border-radius:16px;padding:2rem;box-shadow:0 2px 12px rgba(0,0,0,.05)}
.testi-stars{color:#F5A623;margin-bottom:.8rem}.testi-text{font-size:.9rem;color:#5A6577;line-height:1.7;margin-bottom:1.5rem}
.testi-author{display:flex;align-items:center;gap:.75rem}
.testi-av{width:40px;height:40px;border-radius:50%;background:${p};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.82rem;flex-shrink:0}
.testi-name{font-weight:600;font-size:.88rem}.testi-role{font-size:.78rem;color:#7A8499}
.pricing{padding:5.5rem 5%;background:#fff}.pricing-inner{max-width:1100px;margin:0 auto}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.price-card{border:1.5px solid #E0E4EA;border-radius:16px;padding:2.5rem;position:relative;transition:all .2s}
.price-card.featured{border-color:${p};box-shadow:0 8px 30px ${p}25}
.price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:${p};color:#fff;font-size:.72rem;font-weight:700;padding:.28rem .9rem;border-radius:20px;white-space:nowrap}
.price-tier{font-size:.75rem;font-weight:700;color:${p};letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem}
.price-amt{font-size:2.4rem;font-weight:800;letter-spacing:-.03em;line-height:1;margin-bottom:.2rem}
.price-period{font-size:.82rem;color:#7A8499;margin-bottom:1.2rem}
.price-div{height:1px;background:#E0E4EA;margin:1.2rem 0}
.price-features{list-style:none;display:flex;flex-direction:column;gap:.6rem;margin-bottom:1.75rem}
.price-features li{display:flex;align-items:center;gap:.5rem;font-size:.87rem;color:#5A6577}
.price-features li::before{content:'✓';color:${p};font-weight:700;flex-shrink:0}
.price-btn{display:block;text-align:center;padding:.8rem;border-radius:10px;font-weight:600;font-size:.88rem;transition:all .2s}
.price-btn-def{border:1.5px solid #E0E4EA;color:#444}.price-btn-def:hover{border-color:${p};color:${p}}
.price-btn-feat{background:${p};color:#fff}.price-btn-feat:hover{opacity:.88}
.faq-sec{padding:5.5rem 5%;background:#F7F8FA}.faq-inner{max-width:800px;margin:0 auto}
.faq-list{margin-top:3rem;display:flex;flex-direction:column;gap:.65rem}
details{background:#fff;border:1.5px solid #E0E4EA;border-radius:12px;overflow:hidden}
details[open]{border-color:${p}60}
summary{padding:1.2rem 1.5rem;cursor:pointer;font-weight:600;font-size:.92rem;list-style:none;display:flex;justify-content:space-between;align-items:center;user-select:none}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-size:1.2rem;font-weight:400;color:${p};flex-shrink:0}
details[open] summary::after{content:'−'}
.faq-answer{padding:0 1.5rem 1.2rem;font-size:.88rem;color:#5A6577;line-height:1.7}
.cta-band{padding:5rem 5%;background:linear-gradient(135deg,${p},${s});color:#fff;text-align:center}
.cta-band h2{font-size:2.1rem;font-weight:800;letter-spacing:-.03em;margin-bottom:.7rem}
.cta-band p{font-size:.95rem;opacity:.85;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
.cta-btn{display:inline-block;padding:.95rem 2.5rem;background:#fff;color:${p};border-radius:10px;font-weight:700;font-size:.95rem;transition:all .2s}.cta-btn:hover{transform:translateY(-2px);box-shadow:0 8px 20px rgba(0,0,0,.2)}
footer{background:#0F1923;color:#fff;padding:5rem 5% 2rem}
.footer-inner{max-width:1200px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.footer-brand p{color:#6B7A8D;font-size:.83rem;line-height:1.7;margin-top:.6rem}
.footer-col h4{font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:${s};margin-bottom:1.1rem}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.45rem}
.footer-links a{font-size:.83rem;color:#6B7A8D;transition:color .2s}.footer-links a:hover{color:#fff}
.footer-bottom{border-top:1px solid rgba(255,255,255,.08);padding-top:1.8rem;display:flex;justify-content:space-between;font-size:.78rem;color:#4A5568}
.f-brand-name{font-size:1.05rem;font-weight:700;color:${s}}
@media(max-width:900px){.hero-inner,.about{grid-template-columns:1fr;gap:2.5rem}.stats-inner,.prod-grid{grid-template-columns:repeat(2,1fr)}.testi-grid,.pricing-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.gallery-grid{grid-template-columns:repeat(2,1fr)}.stat-item{border-right:none;border-bottom:1px solid #E0E4EA}}
</style></head>
<body>
<nav class="nav"><div class="nav-inner">
  <img src="assets/logo-placeholder.png" class="nav-logo" alt="logo">
  <ul class="nav-links"><li><a href="#">Home</a></li><li><a href="#">Tentang</a></li><li><a href="#">Layanan</a></li><li><a href="#">Galeri</a></li><li><a href="#">Kontak</a></li></ul>
  <a href="#" class="nav-cta">Konsultasi Gratis</a>
</div></nav>

<section class="hero"><div class="hero-inner">
  <div>
    <div class="hero-badge">${t.catName}</div>
    <h1>${t.headline}</h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-btns"><a href="#" class="btn-white">Mulai Sekarang</a><a href="#" class="btn-ghost-w">Pelajari Lebih</a></div>
    <div class="trust-row"><div class="trust-dots"><span>BS</span><span>SD</span><span>AF</span></div><span>Dipercaya 500+ klien profesional</span></div>
  </div>
  <div class="hero-img-wrap"><img src="assets/foto-bisnis-anda.png" alt="bisnis"></div>
</div></section>

<section class="stats"><div class="stats-inner">
  <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Klien Aktif</div></div>
  <div class="stat-item"><div class="stat-num">50+</div><div class="stat-label">Layanan Tersedia</div></div>
  <div class="stat-item"><div class="stat-num">10 Thn</div><div class="stat-label">Pengalaman</div></div>
  <div class="stat-item"><div class="stat-num">4.9★</div><div class="stat-label">Rating Klien</div></div>
</div></section>

<section class="about">
  <div>
    <div class="about-tag">Tentang Perusahaan</div>
    <h2>${t.name}</h2>
    <p class="about-desc">${t.description||t.sub}</p>
    <ul class="about-checks">${mn.slice(0,6).map(m=>`<li><span class="ck">✓</span>${m}</li>`).join('')}</ul>
  </div>
  <div class="about-img"><img src="assets/foto-bisnis-anda.png" alt="tentang"></div>
</section>

<section class="products"><div class="products-inner">
  <div class="sec-head"><h2>Layanan Unggulan</h2><p>Solusi profesional untuk kebutuhan bisnis Anda</p></div>
  <div class="prod-grid">${mn.slice(0,4).map((name,i)=>`
    <div class="prod-card">
      <div class="prod-img"><img src="${fImg(i)}" alt="${name}"></div>
      <div class="prod-body">
        <div class="prod-name">${name}</div>
        <div class="prod-price">${fPrice(t.cat,i)}</div>
        <div class="prod-meta"><span class="prod-stars">★★★★★</span><span>${fStar(i)}</span><span>·</span><span>${fBuy(i)} klien</span></div>
        <a href="#" class="prod-btn">Pilih Layanan</a>
      </div>
    </div>`).join('')}
  </div>
</div></section>

<section class="gallery"><div class="gallery-inner">
  <div class="sec-head"><h2>Portfolio Kami</h2><p>Hasil kerja terbaik yang kami banggakan</p></div>
  <div class="gallery-grid">${[0,1,2,3,4,5].map(i=>`<div class="gal-item"><img src="${fImg(i)}" alt="portfolio ${i+1}"></div>`).join('')}</div>
</div></section>

<section class="testimonials"><div class="testi-inner">
  <div class="sec-head"><h2>Testimonial Klien</h2><p>Apa kata klien kami yang telah merasakan manfaatnya</p></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>

<section class="pricing"><div class="pricing-inner">
  <div class="sec-head"><h2>Paket Layanan</h2><p>Investasi tepat untuk pertumbuhan bisnis Anda</p></div>
  <div class="pricing-grid">
    <div class="price-card">
      <div class="price-tier">Starter</div><div class="price-amt">Rp 199<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div>
      <div class="price-div"></div>
      <ul class="price-features"><li>Hingga 10 Produk</li><li>Galeri 5 Foto</li><li>Formulir Kontak</li><li>Mobile Friendly</li><li>Support 30 Hari</li></ul>
      <a href="#" class="price-btn price-btn-def">Mulai Gratis</a>
    </div>
    <div class="price-card featured">
      <div class="price-badge">TERPOPULER</div>
      <div class="price-tier">Professional</div><div class="price-amt">Rp 499<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div>
      <div class="price-div"></div>
      <ul class="price-features"><li>Produk Tidak Terbatas</li><li>Galeri 20 Foto</li><li>Pemesanan Online</li><li>SEO Optimization</li><li>Support 24/7</li><li>Analitik Website</li></ul>
      <a href="#" class="price-btn price-btn-feat">Pilih Paket Ini</a>
    </div>
    <div class="price-card">
      <div class="price-tier">Enterprise</div><div class="price-amt">Rp 999<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div>
      <div class="price-div"></div>
      <ul class="price-features"><li>Semua Fitur Pro</li><li>Domain Custom</li><li>Integrasi Payment</li><li>Multi-bahasa</li><li>API Access</li><li>Manajer Dedikasi</li></ul>
      <a href="#" class="price-btn price-btn-def">Hubungi Kami</a>
    </div>
  </div>
</div></section>

<section class="faq-sec"><div class="faq-inner">
  <div class="sec-head"><h2>FAQ</h2><p>Pertanyaan yang sering ditanyakan</p></div>
  <div class="faq-list">${faqHTML()}</div>
</div></section>

<section class="cta-band">
  <h2>Siap Bertumbuh Bersama Kami?</h2>
  <p>Konsultasi gratis dengan tim profesional kami dan dapatkan solusi terbaik untuk bisnis Anda.</p>
  <a href="#" class="cta-btn">Jadwalkan Konsultasi</a>
</section>

<footer><div class="footer-inner">
  <div class="footer-grid">
    <div class="footer-brand"><div class="f-brand-name">${t.name}</div><p>${(t.sub||'').substring(0,100)}</p></div>
    <div class="footer-col"><h4>Layanan</h4><ul class="footer-links">${mn.slice(0,4).map(m=>`<li><a href="#">${m}</a></li>`).join('')}</ul></div>
    <div class="footer-col"><h4>Perusahaan</h4><ul class="footer-links"><li><a href="#">Tentang Kami</a></li><li><a href="#">Tim</a></li><li><a href="#">Karir</a></li><li><a href="#">Blog</a></li></ul></div>
    <div class="footer-col"><h4>Kontak</h4><ul class="footer-links"><li><a href="#">WhatsApp</a></li><li><a href="#">LinkedIn</a></li><li><a href="#">Email</a></li><li><a href="#">Kantor</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2025 ${t.name}. All rights reserved.</span><span>Solusi Profesional untuk Bisnis Anda</span></div>
</div></footer>
</body></html>`;}

/* ============================================================ */
/* 3. LUXURY                                                     */
/* ============================================================ */
function tmplLuxury(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<8)mn=mn.concat(mn);
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'Jost',sans-serif;background:#0A0A0A;color:#E8E0D5;line-height:1.6}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}
.gold{color:${s}}.serif{font-family:'Cormorant Garamond',serif}
.nav{position:sticky;top:0;background:rgba(10,10,10,.95);backdrop-filter:blur(12px);border-bottom:1px solid ${s}22;z-index:100;padding:1.2rem 5%}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.nav-logo{height:30px;width:auto;object-fit:contain}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.8rem;font-weight:400;color:rgba(232,224,213,.6);letter-spacing:.12em;text-transform:uppercase;transition:color .2s}.nav-links a:hover{color:${s}}
.nav-cta{padding:.5rem 1.4rem;border:1px solid ${s};color:${s};border-radius:2px;font-size:.78rem;font-weight:400;letter-spacing:.1em;text-transform:uppercase;transition:all .2s}.nav-cta:hover{background:${s};color:#000}
.hero{min-height:92vh;display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:5rem;padding:6rem 5%;max-width:1200px;margin:0 auto}
.hero-decor{font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:${s};margin-bottom:1.5rem;display:flex;align-items:center;gap:.75rem}
.hero-decor::before{content:'';display:block;width:40px;height:1px;background:${s}}
.hero h1{font-family:'Cormorant Garamond',serif;font-size:clamp(2.5rem,5vw,4.5rem);font-weight:300;line-height:1.1;letter-spacing:-.01em;margin-bottom:1.5rem;color:#fff}
.hero h1 em{color:${s};font-style:italic}
.hero-sub{font-size:.93rem;color:rgba(232,224,213,.65);line-height:1.8;margin-bottom:2.5rem;font-weight:300}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.btn-gold{padding:.85rem 2rem;background:${s};color:#000;font-size:.82rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;transition:all .2s}.btn-gold:hover{opacity:.85;transform:translateY(-1px)}
.btn-ghost-g{padding:.85rem 2rem;border:1px solid ${s}55;color:${s};font-size:.82rem;font-weight:400;letter-spacing:.08em;text-transform:uppercase;transition:all .2s}.btn-ghost-g:hover{background:${s}15}
.trust-lux{display:flex;align-items:center;gap:.75rem;font-size:.78rem;color:rgba(232,224,213,.5);letter-spacing:.06em}
.trust-lux-dots{display:flex}.trust-lux-dots span{width:28px;height:28px;border-radius:50%;background:${s}20;border:1px solid ${s}44;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:500;color:${s};margin-left:-6px}.trust-lux-dots span:first-child{margin-left:0}
.hero-img-lux{position:relative}.hero-img-lux::before{content:'';position:absolute;inset:-8px;border:1px solid ${s}22;pointer-events:none;z-index:1}
.hero-img-lux img{width:100%;aspect-ratio:4/5;object-fit:cover}
.stats{border-top:1px solid ${s}20;border-bottom:1px solid ${s}20;padding:3rem 5%;background:#0D0D0D}
.stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.stat-item{text-align:center;padding:1.5rem;border-right:1px solid ${s}15}.stat-item:last-child{border-right:none}
.stat-num{font-family:'Cormorant Garamond',serif;font-size:2.8rem;font-weight:300;color:${s};line-height:1}.stat-label{font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(232,224,213,.4);margin-top:.4rem}
.about{padding:6rem 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.about-tag{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;color:${s};margin-bottom:.75rem;display:flex;align-items:center;gap:.6rem}
.about-tag::before{content:'';display:block;width:30px;height:1px;background:${s}}
.about h2{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:300;line-height:1.2;margin-bottom:1.2rem;color:#fff}
.about-desc{font-size:.9rem;color:rgba(232,224,213,.65);line-height:1.8;margin-bottom:1.5rem;font-weight:300}
.about-checks{list-style:none;display:flex;flex-direction:column;gap:.6rem}
.about-checks li{display:flex;align-items:center;gap:.6rem;font-size:.87rem;color:rgba(232,224,213,.75)}
.ck{width:16px;height:16px;border:1px solid ${s};display:flex;align-items:center;justify-content:center;font-size:.55rem;color:${s};flex-shrink:0}
.about-img{position:relative}.about-img::before{content:'';position:absolute;inset:-6px;border:1px solid ${s}20;pointer-events:none;z-index:1}
.about-img img{width:100%;aspect-ratio:4/3;object-fit:cover}
.products{padding:6rem 5%;background:#0D0D0D}.products-inner{max-width:1200px;margin:0 auto}
.sec-head{text-align:center;margin-bottom:4rem}.sec-head h2{font-family:'Cormorant Garamond',serif;font-size:2.5rem;font-weight:300;color:#fff;margin-bottom:.5rem}.sec-head p{font-size:.82rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(232,224,213,.4)}
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
.prod-card{background:#111;border:1px solid ${s}18;overflow:hidden;transition:all .25s}.prod-card:hover{border-color:${s}50;transform:translateY(-4px)}
.prod-img{aspect-ratio:4/3;overflow:hidden}.prod-img img{height:100%;object-fit:cover;transition:transform .4s;filter:brightness(.9)}.prod-card:hover .prod-img img{transform:scale(1.05);filter:brightness(1)}
.prod-body{padding:1.25rem}.prod-name{font-family:'Cormorant Garamond',serif;font-weight:400;font-size:1.05rem;margin-bottom:.35rem;color:#fff}
.prod-price{font-weight:400;font-size:.88rem;color:${s};margin-bottom:.45rem}
.prod-meta{display:flex;align-items:center;gap:.4rem;font-size:.75rem;color:rgba(232,224,213,.4)}.prod-stars{color:${s}}
.prod-btn{display:block;text-align:center;margin-top:1rem;padding:.6rem;border:1px solid ${s}44;color:${s};font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;transition:all .2s}.prod-btn:hover{background:${s};color:#000}
.gallery{padding:6rem 5%;background:#080808}.gallery-inner{max-width:1200px;margin:0 auto}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-top:3rem}
.gal-item{overflow:hidden;aspect-ratio:4/3}.gal-item img{height:100%;object-fit:cover;filter:brightness(.85);transition:all .4s}.gal-item:hover img{transform:scale(1.06);filter:brightness(1)}
.testimonials{padding:6rem 5%;background:#0D0D0D}.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:4rem}
.testi-card{border:1px solid ${s}18;padding:2rem;background:#111}
.testi-stars{color:${s};margin-bottom:1rem;font-size:.85rem}.testi-text{font-family:'Cormorant Garamond',serif;font-size:1rem;color:rgba(232,224,213,.7);line-height:1.7;margin-bottom:1.5rem;font-style:italic}
.testi-author{display:flex;align-items:center;gap:.75rem}
.testi-av{width:40px;height:40px;border:1px solid ${s}44;background:${s}15;display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:500;color:${s};flex-shrink:0}
.testi-name{font-size:.85rem;color:#fff}.testi-role{font-size:.75rem;color:rgba(232,224,213,.4);letter-spacing:.05em}
.pricing{padding:6rem 5%;background:#080808}.pricing-inner{max-width:1100px;margin:0 auto}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:4rem}
.price-card{border:1px solid ${s}18;padding:2.5rem;background:#0D0D0D;position:relative}
.price-card.featured{border-color:${s}60;background:#111}
.price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:${s};color:#000;font-size:.68rem;font-weight:500;padding:.28rem .9rem;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}
.price-tier{font-size:.72rem;letter-spacing:.15em;text-transform:uppercase;color:${s};margin-bottom:.6rem}
.price-amt{font-family:'Cormorant Garamond',serif;font-size:2.8rem;font-weight:300;color:#fff;line-height:1;margin-bottom:.2rem}
.price-period{font-size:.8rem;color:rgba(232,224,213,.4);margin-bottom:1.2rem}
.price-div{height:1px;background:${s}18;margin:1.2rem 0}
.price-features{list-style:none;display:flex;flex-direction:column;gap:.65rem;margin-bottom:2rem}
.price-features li{display:flex;align-items:center;gap:.55rem;font-size:.85rem;color:rgba(232,224,213,.65)}
.price-features li::before{content:'◆';color:${s};font-size:.5rem;flex-shrink:0}
.price-btn{display:block;text-align:center;padding:.85rem;font-size:.8rem;letter-spacing:.08em;text-transform:uppercase;transition:all .2s}
.price-btn-def{border:1px solid ${s}33;color:rgba(232,224,213,.5)}.price-btn-def:hover{border-color:${s};color:${s}}
.price-btn-feat{background:${s};color:#000}.price-btn-feat:hover{opacity:.88}
.faq-sec{padding:6rem 5%;background:#0A0A0A}.faq-inner{max-width:800px;margin:0 auto}
.faq-list{margin-top:3rem;display:flex;flex-direction:column;gap:.5rem}
details{border:1px solid ${s}18;overflow:hidden}
details[open]{border-color:${s}40}
summary{padding:1.2rem 1.5rem;cursor:pointer;font-size:.9rem;font-weight:400;color:rgba(232,224,213,.85);list-style:none;display:flex;justify-content:space-between;align-items:center;user-select:none}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-size:1.1rem;font-weight:300;color:${s};flex-shrink:0}
details[open] summary::after{content:'−'}
.faq-answer{padding:0 1.5rem 1.2rem;font-size:.85rem;color:rgba(232,224,213,.5);line-height:1.75}
.cta-band{padding:5.5rem 5%;border-top:1px solid ${s}20;border-bottom:1px solid ${s}20;text-align:center;background:radial-gradient(ellipse at 50% 0%,${s}08 0%,transparent 70%)}
.cta-band h2{font-family:'Cormorant Garamond',serif;font-size:3rem;font-weight:300;color:#fff;margin-bottom:.75rem}
.cta-band p{font-size:.9rem;color:rgba(232,224,213,.55);margin-bottom:2.5rem}
.cta-btn{display:inline-block;padding:1rem 3rem;background:${s};color:#000;font-size:.82rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;transition:all .2s}.cta-btn:hover{opacity:.88}
footer{background:#080808;border-top:1px solid ${s}15;padding:5rem 5% 2rem}
.footer-inner{max-width:1200px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.footer-brand p{color:rgba(232,224,213,.4);font-size:.82rem;line-height:1.75;margin-top:.7rem;font-weight:300}
.footer-col h4{font-size:.68rem;letter-spacing:.15em;text-transform:uppercase;color:${s};margin-bottom:1.2rem}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.5rem}
.footer-links a{font-size:.82rem;color:rgba(232,224,213,.4);transition:color .2s}.footer-links a:hover{color:${s}}
.footer-bottom{border-top:1px solid ${s}10;padding-top:2rem;display:flex;justify-content:space-between;font-size:.75rem;color:rgba(232,224,213,.25);letter-spacing:.06em}
.f-brand-name{font-family:'Cormorant Garamond',serif;font-size:1.3rem;font-weight:300;color:${s}}
@media(max-width:900px){.hero,.about{grid-template-columns:1fr;gap:3rem}.stats-inner,.prod-grid{grid-template-columns:repeat(2,1fr)}.testi-grid,.pricing-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.gallery-grid{grid-template-columns:repeat(2,1fr)}.stat-item{border-right:none;border-bottom:1px solid ${s}15}}
</style></head>
<body>
<nav class="nav"><div class="nav-inner">
  <img src="assets/logo-placeholder.png" class="nav-logo" alt="logo">
  <ul class="nav-links"><li><a href="#">Home</a></li><li><a href="#">Tentang</a></li><li><a href="#">Menu</a></li><li><a href="#">Galeri</a></li><li><a href="#">Reservasi</a></li></ul>
  <a href="#" class="nav-cta">Reservasi</a>
</div></nav>

<section class="hero">
  <div>
    <div class="hero-decor">${t.catName}</div>
    <h1><em>${t.headline}</em></h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-btns"><a href="#" class="btn-gold">Reservasi Meja</a><a href="#" class="btn-ghost-g">Lihat Menu</a></div>
    <div class="trust-lux"><div class="trust-lux-dots"><span>BS</span><span>SD</span><span>AF</span></div><span>500+ tamu puas setiap bulan</span></div>
  </div>
  <div class="hero-img-lux"><img src="assets/foto-bisnis-anda.png" alt="bisnis"></div>
</section>

<section class="stats"><div class="stats-inner">
  <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Tamu per Bulan</div></div>
  <div class="stat-item"><div class="stat-num">50+</div><div class="stat-label">Menu Eksklusif</div></div>
  <div class="stat-item"><div class="stat-num">8 Thn</div><div class="stat-label">Keunggulan</div></div>
  <div class="stat-item"><div class="stat-num">5★</div><div class="stat-label">Rating Premium</div></div>
</div></section>

<section class="about">
  <div>
    <div class="about-tag">Tentang Kami</div>
    <h2>${t.name}</h2>
    <p class="about-desc">${t.description||t.sub}</p>
    <ul class="about-checks">${mn.slice(0,6).map(m=>`<li><span class="ck">◆</span>${m}</li>`).join('')}</ul>
  </div>
  <div class="about-img"><img src="assets/foto-bisnis-anda.png" alt="tentang"></div>
</section>

<section class="products"><div class="products-inner">
  <div class="sec-head"><h2>Menu Signature</h2><p>Kreasi eksklusif chef kami yang tak tertandingi</p></div>
  <div class="prod-grid">${mn.slice(0,4).map((name,i)=>`
    <div class="prod-card">
      <div class="prod-img"><img src="${fImg(i)}" alt="${name}"></div>
      <div class="prod-body">
        <div class="prod-name">${name}</div>
        <div class="prod-price">${fPrice(t.cat,i)}</div>
        <div class="prod-meta"><span class="prod-stars">★★★★★</span><span>${fStar(i)}</span><span>·</span><span>${fBuy(i)} pesanan</span></div>
        <a href="#" class="prod-btn">Pesan</a>
      </div>
    </div>`).join('')}
  </div>
</div></section>

<section class="gallery"><div class="gallery-inner">
  <div class="sec-head"><h2>Galeri</h2><p>Keindahan kuliner dan suasana eksklusif kami</p></div>
  <div class="gallery-grid">${[0,1,2,3,4,5].map(i=>`<div class="gal-item"><img src="${fImg(i)}" alt="galeri ${i+1}"></div>`).join('')}</div>
</div></section>

<section class="testimonials"><div class="testi-inner">
  <div class="sec-head"><h2>Kata Tamu Kami</h2><p>Pengalaman yang tak terlupakan</p></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>

<section class="pricing"><div class="pricing-inner">
  <div class="sec-head"><h2>Paket Eksklusif</h2><p>Pengalaman premium yang disesuaikan untuk Anda</p></div>
  <div class="pricing-grid">
    <div class="price-card">
      <div class="price-tier">Klasik</div><div class="price-amt">Rp 199<span style="font-size:1.1rem;font-weight:300">.000</span></div><div class="price-period">per bulan</div>
      <div class="price-div"></div>
      <ul class="price-features"><li>Hingga 10 Produk</li><li>Galeri 5 Foto</li><li>Formulir Kontak</li><li>Mobile Friendly</li><li>Support 30 Hari</li></ul>
      <a href="#" class="price-btn price-btn-def">Mulai</a>
    </div>
    <div class="price-card featured">
      <div class="price-badge">PALING POPULER</div>
      <div class="price-tier">Premium</div><div class="price-amt">Rp 499<span style="font-size:1.1rem;font-weight:300">.000</span></div><div class="price-period">per bulan</div>
      <div class="price-div"></div>
      <ul class="price-features"><li>Produk Tidak Terbatas</li><li>Galeri 20 Foto</li><li>Pemesanan Online</li><li>SEO Optimization</li><li>Support 24/7</li><li>Analitik Website</li></ul>
      <a href="#" class="price-btn price-btn-feat">Pilih Paket</a>
    </div>
    <div class="price-card">
      <div class="price-tier">Eksklusif</div><div class="price-amt">Rp 999<span style="font-size:1.1rem;font-weight:300">.000</span></div><div class="price-period">per bulan</div>
      <div class="price-div"></div>
      <ul class="price-features"><li>Semua Fitur Premium</li><li>Domain Custom</li><li>Integrasi Payment</li><li>Multi-bahasa</li><li>API Access</li><li>Manajer Dedikasi</li></ul>
      <a href="#" class="price-btn price-btn-def">Hubungi Kami</a>
    </div>
  </div>
</div></section>

<section class="faq-sec"><div class="faq-inner">
  <div class="sec-head"><h2>Pertanyaan Umum</h2><p>Kami siap menjawab setiap pertanyaan Anda</p></div>
  <div class="faq-list">${faqHTML()}</div>
</div></section>

<section class="cta-band">
  <h2>Rasakan Pengalaman <span class="gold">Eksklusif</span></h2>
  <p>Hubungi kami untuk reservasi dan penawaran yang disesuaikan dengan kebutuhan Anda.</p>
  <a href="#" class="cta-btn">Reservasi Sekarang</a>
</section>

<footer><div class="footer-inner">
  <div class="footer-grid">
    <div class="footer-brand"><div class="f-brand-name">${t.name}</div><p>${(t.sub||'').substring(0,100)}</p></div>
    <div class="footer-col"><h4>Menu</h4><ul class="footer-links">${mn.slice(0,4).map(m=>`<li><a href="#">${m}</a></li>`).join('')}</ul></div>
    <div class="footer-col"><h4>Informasi</h4><ul class="footer-links"><li><a href="#">Tentang Kami</a></li><li><a href="#">Chef</a></li><li><a href="#">Acara</a></li><li><a href="#">Karir</a></li></ul></div>
    <div class="footer-col"><h4>Hubungi</h4><ul class="footer-links"><li><a href="#">Reservasi</a></li><li><a href="#">WhatsApp</a></li><li><a href="#">Instagram</a></li><li><a href="#">Lokasi</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2025 ${t.name}. All rights reserved.</span><span>Excellence in Every Detail</span></div>
</div></footer>
</body></html>`;}

/* ============================================================ */
/* 4. DARK                                                       */
/* ============================================================ */
function tmplDark(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<8)mn=mn.concat(mn);
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'Space Grotesk',sans-serif;background:#0D0D0D;color:#E2E2E2;line-height:1.6}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}
.nav{position:sticky;top:0;background:rgba(13,13,13,.95);backdrop-filter:blur(10px);border-bottom:1px solid rgba(255,255,255,.06);z-index:100;padding:1rem 5%}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.nav-logo{height:30px;width:auto;object-fit:contain}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.83rem;font-weight:500;color:#7A8A99;letter-spacing:.04em;transition:color .2s}.nav-links a:hover{color:#fff}
.nav-cta{padding:.5rem 1.2rem;background:${p};color:#fff;border-radius:6px;font-size:.83rem;font-weight:600}
.hero{padding:6rem 5% 4rem;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.hero-badge{display:inline-flex;align-items:center;gap:.4rem;background:${p}20;border:1px solid ${p}50;color:${p};font-size:.72rem;font-weight:600;padding:.28rem .85rem;border-radius:20px;letter-spacing:.06em;text-transform:uppercase;margin-bottom:1.3rem}
.hero h1{font-size:clamp(2rem,4vw,3.5rem);font-weight:700;line-height:1.1;letter-spacing:-.03em;margin-bottom:1rem;color:#fff}
.hero h1 span{color:${p}}
.hero-sub{font-size:.97rem;color:#7A8A99;line-height:1.75;margin-bottom:2rem}
.hero-btns{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:2rem}
.btn-accent{padding:.8rem 1.75rem;background:${p};color:#fff;border-radius:8px;font-weight:600;font-size:.9rem;transition:all .2s}.btn-accent:hover{opacity:.88;transform:translateY(-2px)}
.btn-dark-out{padding:.8rem 1.75rem;border:1px solid rgba(255,255,255,.15);border-radius:8px;font-weight:500;font-size:.9rem;color:#ccc;transition:all .2s}.btn-dark-out:hover{border-color:rgba(255,255,255,.4);color:#fff}
.trust-dark{display:flex;align-items:center;gap:.7rem;font-size:.82rem;color:#7A8A99}
.trust-dark-av{display:flex}.trust-dark-av span{width:28px;height:28px;border-radius:50%;background:${p}25;border:2px solid ${p}50;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:600;color:${p};margin-left:-7px}.trust-dark-av span:first-child{margin-left:0}
.hero-img-dk{border-radius:16px;overflow:hidden;aspect-ratio:5/4;box-shadow:0 0 60px ${p}20,0 20px 60px rgba(0,0,0,.5)}.hero-img-dk img{height:100%;object-fit:cover}
.stats{background:#111;border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05);padding:2.5rem 5%}
.stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.stat-item{text-align:center;padding:1.5rem;border-right:1px solid rgba(255,255,255,.05)}.stat-item:last-child{border-right:none}
.stat-num{font-size:2.3rem;font-weight:700;color:${p};line-height:1}.stat-label{font-size:.78rem;color:#7A8A99;margin-top:.3rem;letter-spacing:.04em}
.about{padding:5.5rem 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.about-tag{font-size:.72rem;font-weight:600;color:${p};letter-spacing:.12em;text-transform:uppercase;margin-bottom:.75rem}
.about h2{font-size:2.1rem;font-weight:700;letter-spacing:-.03em;margin-bottom:1rem;line-height:1.15;color:#fff}
.about-desc{color:#7A8A99;line-height:1.75;margin-bottom:1.5rem;font-size:.93rem}
.about-checks{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
.about-checks li{display:flex;align-items:center;gap:.45rem;font-size:.87rem;color:#B0BEC5}
.ck{width:18px;height:18px;border-radius:4px;background:${p};color:#fff;display:flex;align-items:center;justify-content:center;font-size:.6rem;flex-shrink:0}
.about-img{border-radius:16px;overflow:hidden;aspect-ratio:4/3;box-shadow:0 0 40px ${p}15,0 20px 60px rgba(0,0,0,.5)}.about-img img{height:100%;object-fit:cover}
.products{padding:5.5rem 5%;background:#111}.products-inner{max-width:1200px;margin:0 auto}
.sec-head{text-align:center;margin-bottom:3.5rem}.sec-head h2{font-size:2rem;font-weight:700;letter-spacing:-.03em;color:#fff;margin-bottom:.4rem}.sec-head p{color:#7A8A99;font-size:.9rem}
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem}
.prod-card{background:#161616;border:1px solid rgba(255,255,255,.06);border-radius:14px;overflow:hidden;transition:all .22s}
.prod-card:hover{border-color:${p}60;transform:translateY(-4px);box-shadow:0 8px 30px ${p}20}
.prod-img{aspect-ratio:4/3;overflow:hidden}.prod-img img{height:100%;object-fit:cover;transition:transform .35s}.prod-card:hover .prod-img img{transform:scale(1.05)}
.prod-body{padding:1.2rem}.prod-name{font-weight:600;font-size:.9rem;color:#E2E2E2;margin-bottom:.3rem}
.prod-price{font-weight:700;font-size:1rem;color:${p};margin-bottom:.4rem}
.prod-meta{display:flex;align-items:center;gap:.4rem;font-size:.77rem;color:#7A8A99}.prod-stars{color:#F5A623}
.prod-btn{display:block;text-align:center;margin-top:.85rem;padding:.55rem;background:${p}20;color:${p};border-radius:8px;font-size:.82rem;font-weight:600;border:1px solid ${p}40;transition:all .2s}.prod-btn:hover{background:${p};color:#fff}
.gallery{padding:5.5rem 5%;background:#0D0D0D}.gallery-inner{max-width:1200px;margin:0 auto}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.85rem;margin-top:3rem}
.gal-item{border-radius:10px;overflow:hidden;aspect-ratio:4/3;border:1px solid rgba(255,255,255,.04)}.gal-item img{height:100%;object-fit:cover;transition:transform .4s;filter:brightness(.8)}.gal-item:hover img{transform:scale(1.06);filter:brightness(1)}
.testimonials{padding:5.5rem 5%;background:#111}.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.testi-card{background:#161616;border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:2rem}
.testi-stars{color:#F5A623;margin-bottom:.8rem}.testi-text{font-size:.9rem;color:#7A8A99;line-height:1.7;margin-bottom:1.5rem}
.testi-author{display:flex;align-items:center;gap:.75rem}
.testi-av{width:40px;height:40px;border-radius:50%;background:${p};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.82rem;flex-shrink:0}
.testi-name{font-weight:600;font-size:.88rem;color:#E2E2E2}.testi-role{font-size:.77rem;color:#7A8A99}
.pricing{padding:5.5rem 5%;background:#0D0D0D}.pricing-inner{max-width:1100px;margin:0 auto}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.price-card{border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:2.5rem;background:#111;position:relative}
.price-card.featured{border-color:${p}70;box-shadow:0 0 30px ${p}15}
.price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:${p};color:#fff;font-size:.72rem;font-weight:700;padding:.28rem .9rem;border-radius:20px;white-space:nowrap}
.price-tier{font-size:.75rem;font-weight:600;color:${p};letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem}
.price-amt{font-size:2.4rem;font-weight:700;color:#fff;letter-spacing:-.03em;line-height:1;margin-bottom:.2rem}
.price-period{font-size:.82rem;color:#7A8A99;margin-bottom:1.2rem}
.price-div{height:1px;background:rgba(255,255,255,.06);margin:1.2rem 0}
.price-features{list-style:none;display:flex;flex-direction:column;gap:.6rem;margin-bottom:1.75rem}
.price-features li{display:flex;align-items:center;gap:.5rem;font-size:.87rem;color:#B0BEC5}
.price-features li::before{content:'✓';color:${p};font-weight:700;flex-shrink:0}
.price-btn{display:block;text-align:center;padding:.8rem;border-radius:10px;font-weight:600;font-size:.88rem;transition:all .2s}
.price-btn-def{border:1px solid rgba(255,255,255,.1);color:#B0BEC5}.price-btn-def:hover{border-color:${p};color:${p}}
.price-btn-feat{background:${p};color:#fff}.price-btn-feat:hover{opacity:.88}
.faq-sec{padding:5.5rem 5%;background:#111}.faq-inner{max-width:800px;margin:0 auto}
.faq-list{margin-top:3rem;display:flex;flex-direction:column;gap:.6rem}
details{background:#161616;border:1px solid rgba(255,255,255,.07);border-radius:12px;overflow:hidden}
details[open]{border-color:${p}55}
summary{padding:1.2rem 1.5rem;cursor:pointer;font-weight:600;font-size:.9rem;color:#E2E2E2;list-style:none;display:flex;justify-content:space-between;align-items:center;user-select:none}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-size:1.2rem;font-weight:300;color:${p};flex-shrink:0}
details[open] summary::after{content:'−'}
.faq-answer{padding:0 1.5rem 1.2rem;font-size:.88rem;color:#7A8A99;line-height:1.7}
.cta-band{padding:5rem 5%;background:linear-gradient(135deg,${p}20 0%,transparent 60%);border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06);text-align:center}
.cta-band h2{font-size:2.2rem;font-weight:700;letter-spacing:-.03em;color:#fff;margin-bottom:.7rem}
.cta-band p{font-size:.95rem;color:#7A8A99;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
.cta-btn{display:inline-block;padding:.95rem 2.5rem;background:${p};color:#fff;border-radius:10px;font-weight:700;font-size:.95rem;transition:all .2s}.cta-btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px ${p}60}
footer{background:#080808;border-top:1px solid rgba(255,255,255,.05);padding:5rem 5% 2rem}
.footer-inner{max-width:1200px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.footer-brand p{color:#4A5568;font-size:.83rem;line-height:1.7;margin-top:.6rem}
.footer-col h4{font-size:.78rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:${p};margin-bottom:1.1rem}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.45rem}
.footer-links a{font-size:.83rem;color:#4A5568;transition:color .2s}.footer-links a:hover{color:#E2E2E2}
.footer-bottom{border-top:1px solid rgba(255,255,255,.04);padding-top:1.8rem;display:flex;justify-content:space-between;font-size:.78rem;color:#2D3748}
.f-brand-name{font-size:1.05rem;font-weight:700;color:#fff}
@media(max-width:900px){.hero,.about{grid-template-columns:1fr;gap:2.5rem}.stats-inner,.prod-grid{grid-template-columns:repeat(2,1fr)}.testi-grid,.pricing-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.gallery-grid{grid-template-columns:repeat(2,1fr)}.stat-item{border-right:none;border-bottom:1px solid rgba(255,255,255,.05)}}
</style></head>
<body>
<nav class="nav"><div class="nav-inner">
  <img src="assets/logo-placeholder.png" class="nav-logo" alt="logo">
  <ul class="nav-links"><li><a href="#">Home</a></li><li><a href="#">Tentang</a></li><li><a href="#">Menu</a></li><li><a href="#">Galeri</a></li><li><a href="#">Kontak</a></li></ul>
  <a href="#" class="nav-cta">Pesan Sekarang</a>
</div></nav>
<section class="hero">
  <div>
    <div class="hero-badge">✦ ${t.catName}</div>
    <h1>${t.headline.split(' ').map((w,i)=>i===0?`<span>${w}</span>`:w).join(' ')}</h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-btns"><a href="#" class="btn-accent">Mulai Sekarang</a><a href="#" class="btn-dark-out">Pelajari Lebih</a></div>
    <div class="trust-dark"><div class="trust-dark-av"><span>BS</span><span>SD</span><span>AF</span></div><span>500+ pelanggan aktif</span></div>
  </div>
  <div class="hero-img-dk"><img src="assets/foto-bisnis-anda.png" alt="bisnis"></div>
</section>
<section class="stats"><div class="stats-inner">
  <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Pelanggan</div></div>
  <div class="stat-item"><div class="stat-num">50+</div><div class="stat-label">Menu / Layanan</div></div>
  <div class="stat-item"><div class="stat-num">5 Thn</div><div class="stat-label">Pengalaman</div></div>
  <div class="stat-item"><div class="stat-num">4.9★</div><div class="stat-label">Rating</div></div>
</div></section>
<section class="about">
  <div>
    <div class="about-tag">Tentang Kami</div>
    <h2>${t.name}</h2>
    <p class="about-desc">${t.description||t.sub}</p>
    <ul class="about-checks">${mn.slice(0,6).map(m=>`<li><span class="ck">✓</span>${m}</li>`).join('')}</ul>
  </div>
  <div class="about-img"><img src="assets/foto-bisnis-anda.png" alt="tentang"></div>
</section>
<section class="products"><div class="products-inner">
  <div class="sec-head"><h2>Produk &amp; Layanan</h2><p>Pilihan terbaik untuk kebutuhan Anda</p></div>
  <div class="prod-grid">${mn.slice(0,4).map((name,i)=>`
    <div class="prod-card">
      <div class="prod-img"><img src="${fImg(i)}" alt="${name}"></div>
      <div class="prod-body">
        <div class="prod-name">${name}</div>
        <div class="prod-price">${fPrice(t.cat,i)}</div>
        <div class="prod-meta"><span class="prod-stars">★★★★★</span><span>${fStar(i)}</span><span>·</span><span>${fBuy(i)} terjual</span></div>
        <a href="#" class="prod-btn">Pesan Sekarang</a>
      </div>
    </div>`).join('')}
  </div>
</div></section>
<section class="gallery"><div class="gallery-inner">
  <div class="sec-head"><h2>Galeri</h2><p>Karya terbaik kami</p></div>
  <div class="gallery-grid">${[0,1,2,3,4,5].map(i=>`<div class="gal-item"><img src="${fImg(i)}" alt="galeri ${i+1}"></div>`).join('')}</div>
</div></section>
<section class="testimonials"><div class="testi-inner">
  <div class="sec-head"><h2>Kata Pelanggan</h2><p>Kepercayaan adalah prioritas kami</p></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>
<section class="pricing"><div class="pricing-inner">
  <div class="sec-head"><h2>Paket Harga</h2><p>Pilih yang terbaik untuk Anda</p></div>
  <div class="pricing-grid">
    <div class="price-card"><div class="price-tier">Starter</div><div class="price-amt">Rp 199<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Hingga 10 Produk</li><li>Galeri 5 Foto</li><li>Formulir Kontak</li><li>Mobile Friendly</li><li>Support 30 Hari</li></ul><a href="#" class="price-btn price-btn-def">Mulai</a></div>
    <div class="price-card featured"><div class="price-badge">TERPOPULER</div><div class="price-tier">Professional</div><div class="price-amt">Rp 499<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Produk Tidak Terbatas</li><li>Galeri 20 Foto</li><li>Pemesanan Online</li><li>SEO Optimization</li><li>Support 24/7</li><li>Analitik Website</li></ul><a href="#" class="price-btn price-btn-feat">Pilih Ini</a></div>
    <div class="price-card"><div class="price-tier">Enterprise</div><div class="price-amt">Rp 999<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Semua Fitur Pro</li><li>Domain Custom</li><li>Integrasi Payment</li><li>Multi-bahasa</li><li>API Access</li><li>Manajer Dedikasi</li></ul><a href="#" class="price-btn price-btn-def">Hubungi</a></div>
  </div>
</div></section>
<section class="faq-sec"><div class="faq-inner">
  <div class="sec-head"><h2>FAQ</h2><p>Pertanyaan yang sering ditanyakan</p></div>
  <div class="faq-list">${faqHTML()}</div>
</div></section>
<section class="cta-band">
  <h2>Siap Bergabung?</h2>
  <p>Hubungi kami sekarang dan dapatkan konsultasi gratis untuk kebutuhan Anda.</p>
  <a href="#" class="cta-btn">Mulai via WhatsApp</a>
</section>
<footer><div class="footer-inner">
  <div class="footer-grid">
    <div class="footer-brand"><div class="f-brand-name">${t.name}</div><p>${(t.sub||'').substring(0,100)}</p></div>
    <div class="footer-col"><h4>Layanan</h4><ul class="footer-links">${mn.slice(0,4).map(m=>`<li><a href="#">${m}</a></li>`).join('')}</ul></div>
    <div class="footer-col"><h4>Info</h4><ul class="footer-links"><li><a href="#">Tentang</a></li><li><a href="#">Blog</a></li><li><a href="#">Promo</a></li><li><a href="#">Karir</a></li></ul></div>
    <div class="footer-col"><h4>Kontak</h4><ul class="footer-links"><li><a href="#">WhatsApp</a></li><li><a href="#">Instagram</a></li><li><a href="#">Email</a></li><li><a href="#">Lokasi</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2025 ${t.name}.</span><span>Dibuat dengan ❤ WebsiteKu</span></div>
</div></footer>
</body></html>`;}

/* ============================================================ */
/* 5. GLASSMORPHISM                                              */
/* ============================================================ */
function tmplGlassmorphism(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<8)mn=mn.concat(mn);
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'Plus Jakarta Sans',sans-serif;background:linear-gradient(135deg,#0F0520 0%,#0A1030 50%,#050D28 100%);min-height:100vh;color:#E0E0F0;line-height:1.6}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}
.glass{background:rgba(255,255,255,.06);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.1)}
.nav{position:sticky;top:0;background:rgba(10,5,28,.7);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.08);z-index:100;padding:1rem 5%}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.nav-logo{height:30px;width:auto;object-fit:contain}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.83rem;font-weight:500;color:rgba(224,224,240,.6);transition:color .2s}.nav-links a:hover{color:#fff}
.nav-cta{padding:.5rem 1.2rem;background:linear-gradient(135deg,${p},${s});color:#fff;border-radius:8px;font-size:.83rem;font-weight:600}
.hero{padding:6rem 5% 4rem;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;position:relative}
.hero::before{content:'';position:absolute;width:500px;height:500px;background:radial-gradient(circle,${p}22 0%,transparent 70%);top:-100px;left:-100px;pointer-events:none;border-radius:50%}
.hero-badge{display:inline-block;background:linear-gradient(135deg,${p}33,${s}22);border:1px solid ${p}55;color:${p};font-size:.72rem;font-weight:700;padding:.3rem .9rem;border-radius:20px;letter-spacing:.07em;text-transform:uppercase;margin-bottom:1.3rem}
.hero h1{font-size:clamp(2rem,4vw,3.4rem);font-weight:800;line-height:1.1;letter-spacing:-.03em;margin-bottom:1rem;color:#fff}
.hero h1 .grad{background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:.97rem;color:rgba(224,224,240,.65);line-height:1.75;margin-bottom:2rem}
.hero-btns{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:2rem}
.btn-grad{padding:.8rem 1.75rem;background:linear-gradient(135deg,${p},${s});color:#fff;border-radius:10px;font-weight:700;font-size:.9rem;transition:all .2s}.btn-grad:hover{transform:translateY(-2px);box-shadow:0 8px 25px ${p}50}
.btn-glass{padding:.8rem 1.75rem;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.15);border-radius:10px;font-weight:500;font-size:.9rem;color:#fff;transition:all .2s}.btn-glass:hover{background:rgba(255,255,255,.12)}
.trust-gl{display:flex;align-items:center;gap:.7rem;font-size:.82rem;color:rgba(224,224,240,.5)}
.trust-gl-av{display:flex}.trust-gl-av span{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,${p}50,${s}50);border:2px solid rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:700;color:#fff;margin-left:-7px}.trust-gl-av span:first-child{margin-left:0}
.hero-img-gl{border-radius:20px;overflow:hidden;aspect-ratio:5/4;box-shadow:0 20px 60px rgba(0,0,0,.4),0 0 40px ${p}20}.hero-img-gl img{height:100%;object-fit:cover}
.stats{padding:2.5rem 5%;background:rgba(255,255,255,.03);border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05)}
.stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.stat-item{text-align:center;padding:1.5rem;border-right:1px solid rgba(255,255,255,.05)}.stat-item:last-child{border-right:none}
.stat-num{font-size:2.3rem;font-weight:800;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}.stat-label{font-size:.78rem;color:rgba(224,224,240,.4);margin-top:.3rem}
.about{padding:5.5rem 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.about-tag{font-size:.72rem;font-weight:700;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:.12em;text-transform:uppercase;margin-bottom:.75rem}
.about h2{font-size:2.1rem;font-weight:800;letter-spacing:-.03em;margin-bottom:1rem;line-height:1.15;color:#fff}
.about-desc{color:rgba(224,224,240,.6);line-height:1.75;margin-bottom:1.5rem;font-size:.93rem}
.about-checks{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
.about-checks li{display:flex;align-items:center;gap:.45rem;font-size:.87rem;color:rgba(224,224,240,.75)}
.ck{width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,${p},${s});color:#fff;display:flex;align-items:center;justify-content:center;font-size:.6rem;flex-shrink:0}
.about-img{border-radius:20px;overflow:hidden;aspect-ratio:4/3;box-shadow:0 20px 60px rgba(0,0,0,.4),0 0 30px ${s}15}.about-img img{height:100%;object-fit:cover}
.products{padding:5.5rem 5%;background:rgba(255,255,255,.02)}.products-inner{max-width:1200px;margin:0 auto}
.sec-head{text-align:center;margin-bottom:3.5rem}.sec-head h2{font-size:2rem;font-weight:800;color:#fff;letter-spacing:-.03em;margin-bottom:.4rem}.sec-head p{color:rgba(224,224,240,.5);font-size:.9rem}
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem}
.prod-card{background:rgba(255,255,255,.06);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.1);border-radius:16px;overflow:hidden;transition:all .25s}
.prod-card:hover{border-color:${p}70;transform:translateY(-4px);box-shadow:0 12px 40px ${p}20}
.prod-img{aspect-ratio:4/3;overflow:hidden}.prod-img img{height:100%;object-fit:cover;transition:transform .35s}.prod-card:hover .prod-img img{transform:scale(1.05)}
.prod-body{padding:1.2rem}.prod-name{font-weight:600;font-size:.9rem;color:#fff;margin-bottom:.3rem}
.prod-price{font-weight:700;font-size:1rem;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.4rem}
.prod-meta{display:flex;align-items:center;gap:.4rem;font-size:.77rem;color:rgba(224,224,240,.4)}.prod-stars{color:#F5A623}
.prod-btn{display:block;text-align:center;margin-top:.85rem;padding:.55rem;background:linear-gradient(135deg,${p}30,${s}20);border:1px solid ${p}50;color:${p};border-radius:10px;font-size:.82rem;font-weight:600;transition:all .2s}.prod-btn:hover{background:linear-gradient(135deg,${p},${s});color:#fff;border-color:transparent}
.gallery{padding:5.5rem 5%;background:rgba(0,0,0,.2)}.gallery-inner{max-width:1200px;margin:0 auto}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.85rem;margin-top:3rem}
.gal-item{border-radius:12px;overflow:hidden;aspect-ratio:4/3;border:1px solid rgba(255,255,255,.08)}.gal-item img{height:100%;object-fit:cover;transition:transform .4s;filter:brightness(.8)}.gal-item:hover img{transform:scale(1.06);filter:brightness(1)}
.testimonials{padding:5.5rem 5%}.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.testi-card{background:rgba(255,255,255,.06);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:2rem}
.testi-stars{color:#F5A623;margin-bottom:.8rem}.testi-text{font-size:.9rem;color:rgba(224,224,240,.6);line-height:1.7;margin-bottom:1.5rem}
.testi-author{display:flex;align-items:center;gap:.75rem}
.testi-av{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,${p},${s});color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.82rem;flex-shrink:0}
.testi-name{font-weight:600;font-size:.88rem;color:#fff}.testi-role{font-size:.77rem;color:rgba(224,224,240,.4)}
.pricing{padding:5.5rem 5%;background:rgba(255,255,255,.02)}.pricing-inner{max-width:1100px;margin:0 auto}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.price-card{background:rgba(255,255,255,.06);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:2.5rem;position:relative}
.price-card.featured{border-color:${p}80;box-shadow:0 0 30px ${p}20}
.price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,${p},${s});color:#fff;font-size:.72rem;font-weight:700;padding:.28rem .9rem;border-radius:20px;white-space:nowrap}
.price-tier{font-size:.75rem;font-weight:700;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem}
.price-amt{font-size:2.4rem;font-weight:800;color:#fff;letter-spacing:-.03em;line-height:1;margin-bottom:.2rem}
.price-period{font-size:.82rem;color:rgba(224,224,240,.4);margin-bottom:1.2rem}
.price-div{height:1px;background:rgba(255,255,255,.07);margin:1.2rem 0}
.price-features{list-style:none;display:flex;flex-direction:column;gap:.6rem;margin-bottom:1.75rem}
.price-features li{display:flex;align-items:center;gap:.5rem;font-size:.87rem;color:rgba(224,224,240,.65)}
.price-features li::before{content:'✓';color:${p};font-weight:700;flex-shrink:0}
.price-btn{display:block;text-align:center;padding:.8rem;border-radius:10px;font-weight:600;font-size:.88rem;transition:all .2s}
.price-btn-def{border:1px solid rgba(255,255,255,.1);color:rgba(224,224,240,.6)}.price-btn-def:hover{border-color:${p};color:${p}}
.price-btn-feat{background:linear-gradient(135deg,${p},${s});color:#fff}.price-btn-feat:hover{opacity:.88}
.faq-sec{padding:5.5rem 5%}.faq-inner{max-width:800px;margin:0 auto}
.faq-list{margin-top:3rem;display:flex;flex-direction:column;gap:.6rem}
details{background:rgba(255,255,255,.05);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.08);border-radius:12px;overflow:hidden}
details[open]{border-color:${p}60}
summary{padding:1.2rem 1.5rem;cursor:pointer;font-weight:600;font-size:.9rem;color:rgba(224,224,240,.85);list-style:none;display:flex;justify-content:space-between;align-items:center;user-select:none}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-size:1.2rem;font-weight:300;color:${p};flex-shrink:0}
details[open] summary::after{content:'−'}
.faq-answer{padding:0 1.5rem 1.2rem;font-size:.88rem;color:rgba(224,224,240,.5);line-height:1.7}
.cta-band{padding:5rem 5%;background:rgba(255,255,255,.03);border-top:1px solid rgba(255,255,255,.05);text-align:center;position:relative;overflow:hidden}
.cta-band::before{content:'';position:absolute;width:600px;height:600px;background:radial-gradient(circle,${p}15 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none}
.cta-band h2{font-size:2.2rem;font-weight:800;color:#fff;letter-spacing:-.03em;margin-bottom:.7rem;position:relative}
.cta-band p{font-size:.95rem;color:rgba(224,224,240,.55);margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto;position:relative}
.cta-btn{display:inline-block;padding:.95rem 2.5rem;background:linear-gradient(135deg,${p},${s});color:#fff;border-radius:10px;font-weight:700;font-size:.95rem;transition:all .2s;position:relative}.cta-btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px ${p}50}
footer{background:rgba(0,0,0,.4);border-top:1px solid rgba(255,255,255,.05);padding:5rem 5% 2rem;backdrop-filter:blur(10px)}
.footer-inner{max-width:1200px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.footer-brand p{color:rgba(224,224,240,.35);font-size:.83rem;line-height:1.7;margin-top:.6rem}
.footer-col h4{font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1.1rem}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.45rem}
.footer-links a{font-size:.83rem;color:rgba(224,224,240,.35);transition:color .2s}.footer-links a:hover{color:#fff}
.footer-bottom{border-top:1px solid rgba(255,255,255,.05);padding-top:1.8rem;display:flex;justify-content:space-between;font-size:.78rem;color:rgba(224,224,240,.2)}
.f-brand-name{font-size:1.05rem;font-weight:700;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
@media(max-width:900px){.hero,.about{grid-template-columns:1fr;gap:2.5rem}.stats-inner,.prod-grid{grid-template-columns:repeat(2,1fr)}.testi-grid,.pricing-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.gallery-grid{grid-template-columns:repeat(2,1fr)}.stat-item{border-right:none;border-bottom:1px solid rgba(255,255,255,.05)}}
</style></head>
<body>
<nav class="nav"><div class="nav-inner">
  <img src="assets/logo-placeholder.png" class="nav-logo" alt="logo">
  <ul class="nav-links"><li><a href="#">Home</a></li><li><a href="#">Tentang</a></li><li><a href="#">Layanan</a></li><li><a href="#">Galeri</a></li><li><a href="#">Kontak</a></li></ul>
  <a href="#" class="nav-cta">Mulai Sekarang</a>
</div></nav>
<section class="hero">
  <div>
    <div class="hero-badge">${t.catName}</div>
    <h1><span class="grad">${t.headline}</span></h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-btns"><a href="#" class="btn-grad">Mulai Sekarang</a><a href="#" class="btn-glass">Pelajari Lebih</a></div>
    <div class="trust-gl"><div class="trust-gl-av"><span>BS</span><span>SD</span><span>AF</span></div><span>500+ pengguna aktif</span></div>
  </div>
  <div class="hero-img-gl"><img src="assets/foto-bisnis-anda.png" alt="bisnis"></div>
</section>
<section class="stats"><div class="stats-inner">
  <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Pengguna Aktif</div></div>
  <div class="stat-item"><div class="stat-num">50+</div><div class="stat-label">Layanan</div></div>
  <div class="stat-item"><div class="stat-num">5 Thn</div><div class="stat-label">Pengalaman</div></div>
  <div class="stat-item"><div class="stat-num">4.9★</div><div class="stat-label">Rating</div></div>
</div></section>
<section class="about">
  <div>
    <div class="about-tag">Tentang Kami</div>
    <h2>${t.name}</h2>
    <p class="about-desc">${t.description||t.sub}</p>
    <ul class="about-checks">${mn.slice(0,6).map(m=>`<li><span class="ck">✓</span>${m}</li>`).join('')}</ul>
  </div>
  <div class="about-img"><img src="assets/foto-bisnis-anda.png" alt="tentang"></div>
</section>
<section class="products"><div class="products-inner">
  <div class="sec-head"><h2>Layanan Unggulan</h2><p>Solusi terbaik dengan teknologi terkini</p></div>
  <div class="prod-grid">${mn.slice(0,4).map((name,i)=>`
    <div class="prod-card">
      <div class="prod-img"><img src="${fImg(i)}" alt="${name}"></div>
      <div class="prod-body">
        <div class="prod-name">${name}</div>
        <div class="prod-price">${fPrice(t.cat,i)}</div>
        <div class="prod-meta"><span class="prod-stars">★★★★★</span><span>${fStar(i)}</span><span>·</span><span>${fBuy(i)} terjual</span></div>
        <a href="#" class="prod-btn">Pesan Sekarang</a>
      </div>
    </div>`).join('')}
  </div>
</div></section>
<section class="gallery"><div class="gallery-inner">
  <div class="sec-head"><h2>Galeri</h2><p>Karya dan hasil terbaik kami</p></div>
  <div class="gallery-grid">${[0,1,2,3,4,5].map(i=>`<div class="gal-item"><img src="${fImg(i)}" alt="galeri ${i+1}"></div>`).join('')}</div>
</div></section>
<section class="testimonials"><div class="testi-inner">
  <div class="sec-head"><h2>Kata Mereka</h2><p>Ribuan pengguna puas bersama kami</p></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>
<section class="pricing"><div class="pricing-inner">
  <div class="sec-head"><h2>Paket Harga</h2><p>Transparan, terjangkau, tanpa biaya tersembunyi</p></div>
  <div class="pricing-grid">
    <div class="price-card"><div class="price-tier">Starter</div><div class="price-amt">Rp 199<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Hingga 10 Produk</li><li>Galeri 5 Foto</li><li>Formulir Kontak</li><li>Mobile Friendly</li><li>Support 30 Hari</li></ul><a href="#" class="price-btn price-btn-def">Mulai</a></div>
    <div class="price-card featured"><div class="price-badge">TERPOPULER</div><div class="price-tier">Professional</div><div class="price-amt">Rp 499<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Produk Tidak Terbatas</li><li>Galeri 20 Foto</li><li>Pemesanan Online</li><li>SEO Optimization</li><li>Support 24/7</li><li>Analitik Website</li></ul><a href="#" class="price-btn price-btn-feat">Pilih Ini</a></div>
    <div class="price-card"><div class="price-tier">Enterprise</div><div class="price-amt">Rp 999<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Semua Fitur Pro</li><li>Domain Custom</li><li>Integrasi Payment</li><li>Multi-bahasa</li><li>API Access</li><li>Manajer Dedikasi</li></ul><a href="#" class="price-btn price-btn-def">Hubungi</a></div>
  </div>
</div></section>
<section class="faq-sec"><div class="faq-inner">
  <div class="sec-head"><h2>FAQ</h2><p>Semua yang perlu Anda ketahui</p></div>
  <div class="faq-list">${faqHTML()}</div>
</div></section>
<section class="cta-band">
  <h2>Mulai Perjalanan Digital Anda</h2>
  <p>Bergabunglah dengan ratusan bisnis yang telah berkembang bersama kami.</p>
  <a href="#" class="cta-btn">Hubungi via WhatsApp ✨</a>
</section>
<footer><div class="footer-inner">
  <div class="footer-grid">
    <div class="footer-brand"><div class="f-brand-name">${t.name}</div><p>${(t.sub||'').substring(0,100)}</p></div>
    <div class="footer-col"><h4>Layanan</h4><ul class="footer-links">${mn.slice(0,4).map(m=>`<li><a href="#">${m}</a></li>`).join('')}</ul></div>
    <div class="footer-col"><h4>Info</h4><ul class="footer-links"><li><a href="#">Tentang</a></li><li><a href="#">Blog</a></li><li><a href="#">Promo</a></li><li><a href="#">Karir</a></li></ul></div>
    <div class="footer-col"><h4>Kontak</h4><ul class="footer-links"><li><a href="#">WhatsApp</a></li><li><a href="#">Instagram</a></li><li><a href="#">Email</a></li><li><a href="#">Lokasi</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2025 ${t.name}.</span><span>Dibuat dengan ❤ WebsiteKu</span></div>
</div></footer>
</body></html>`;}

/* ============================================================ */
/* 6. NEON                                                       */
/* ============================================================ */
function tmplNeon(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<8)mn=mn.concat(mn);
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Orbitron:wght@400;500;700&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'Rajdhani',sans-serif;background:#030305;color:#D0D0E8;line-height:1.5}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}
.nav{position:sticky;top:0;background:rgba(3,3,5,.92);backdrop-filter:blur(12px);border-bottom:1px solid ${p}30;z-index:100;padding:.9rem 5%}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.nav-logo{height:30px;width:auto;object-fit:contain}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.88rem;font-weight:500;color:${p};letter-spacing:.1em;text-transform:uppercase;transition:all .2s;text-shadow:0 0 8px ${p}50}.nav-links a:hover{color:#fff;text-shadow:0 0 12px ${p}}
.nav-cta{padding:.5rem 1.2rem;border:1px solid ${p};color:${p};font-size:.82rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;transition:all .2s;text-shadow:0 0 8px ${p}50;box-shadow:0 0 10px ${p}20}.nav-cta:hover{background:${p}20;box-shadow:0 0 20px ${p}50}
.hero{padding:6rem 5% 4rem;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.hero-badge{display:inline-block;border:1px solid ${p}60;color:${p};font-size:.72rem;font-weight:600;padding:.28rem .85rem;letter-spacing:.12em;text-transform:uppercase;margin-bottom:1.3rem;text-shadow:0 0 8px ${p}60;box-shadow:inset 0 0 10px ${p}10,0 0 10px ${p}20}
.hero-label{font-family:'Orbitron',sans-serif;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:${p}80;margin-bottom:.5rem}
.hero h1{font-family:'Orbitron',sans-serif;font-size:clamp(1.6rem,3.5vw,2.8rem);font-weight:700;line-height:1.15;letter-spacing:.02em;margin-bottom:1rem;color:${p};text-shadow:0 0 20px ${p}60,0 0 40px ${p}30}
.hero-sub{font-size:1rem;color:#7A8A9A;line-height:1.7;margin-bottom:2rem;font-weight:400}
.hero-btns{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:2rem}
.btn-neon{padding:.8rem 1.75rem;border:1px solid ${p};color:${p};font-family:'Rajdhani',sans-serif;font-weight:600;font-size:.9rem;letter-spacing:.08em;text-transform:uppercase;transition:all .2s;text-shadow:0 0 8px ${p}50;box-shadow:0 0 15px ${p}20}.btn-neon:hover{background:${p}15;box-shadow:0 0 30px ${p}50}
.btn-neon-s{padding:.8rem 1.75rem;border:1px solid ${s}60;color:${s};font-family:'Rajdhani',sans-serif;font-weight:600;font-size:.9rem;letter-spacing:.08em;text-transform:uppercase;transition:all .2s;text-shadow:0 0 8px ${s}40}.btn-neon-s:hover{background:${s}15}
.trust-neon{display:flex;align-items:center;gap:.7rem;font-size:.82rem;color:#7A8A9A;letter-spacing:.04em}
.trust-neon-av{display:flex}.trust-neon-av span{width:28px;height:28px;border:1px solid ${p}50;background:${p}10;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:700;color:${p};margin-left:-6px;text-shadow:0 0 6px ${p}}.trust-neon-av span:first-child{margin-left:0}
.hero-img-n{aspect-ratio:5/4;overflow:hidden;border:1px solid ${p}30;box-shadow:0 0 40px ${p}15,inset 0 0 30px ${p}05}.hero-img-n img{height:100%;object-fit:cover;filter:brightness(.85) saturate(1.1)}
.stats{background:#050508;border-top:1px solid ${p}25;border-bottom:1px solid ${p}25;padding:2.5rem 5%}
.stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.stat-item{text-align:center;padding:1.5rem;border-right:1px solid ${p}15}.stat-item:last-child{border-right:none}
.stat-num{font-family:'Orbitron',sans-serif;font-size:2rem;font-weight:700;color:${p};line-height:1;text-shadow:0 0 15px ${p}60}.stat-label{font-size:.75rem;letter-spacing:.1em;text-transform:uppercase;color:#7A8A9A;margin-top:.4rem}
.about{padding:5.5rem 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.about-tag{font-family:'Orbitron',sans-serif;font-size:.65rem;letter-spacing:.2em;text-transform:uppercase;color:${p};margin-bottom:.75rem;text-shadow:0 0 8px ${p}50}
.about h2{font-family:'Orbitron',sans-serif;font-size:1.8rem;font-weight:700;letter-spacing:.02em;margin-bottom:1rem;line-height:1.2;color:#fff}
.about-desc{color:#7A8A9A;line-height:1.7;margin-bottom:1.5rem;font-size:.93rem}
.about-checks{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
.about-checks li{display:flex;align-items:center;gap:.45rem;font-size:.88rem;color:#B0C0D0}
.ck{width:16px;height:16px;border:1px solid ${p};display:flex;align-items:center;justify-content:center;font-size:.6rem;color:${p};flex-shrink:0;text-shadow:0 0 6px ${p}}
.about-img{aspect-ratio:4/3;overflow:hidden;border:1px solid ${p}30;box-shadow:0 0 40px ${p}10}.about-img img{height:100%;object-fit:cover;filter:brightness(.85)}
.products{padding:5.5rem 5%;background:#050508}.products-inner{max-width:1200px;margin:0 auto}
.sec-head{text-align:center;margin-bottom:3.5rem}.sec-head h2{font-family:'Orbitron',sans-serif;font-size:1.8rem;font-weight:700;color:${p};letter-spacing:.05em;text-shadow:0 0 20px ${p}50;margin-bottom:.5rem}.sec-head p{color:#7A8A9A;font-size:.88rem;letter-spacing:.06em}
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem}
.prod-card{background:#080810;border:1px solid ${p}25;overflow:hidden;transition:all .25s}.prod-card:hover{border-color:${p}80;box-shadow:0 0 25px ${p}25}
.prod-img{aspect-ratio:4/3;overflow:hidden}.prod-img img{height:100%;object-fit:cover;transition:transform .35s;filter:brightness(.8)}.prod-card:hover .prod-img img{transform:scale(1.05);filter:brightness(1)}
.prod-body{padding:1.2rem}.prod-name{font-weight:600;font-size:.9rem;color:#D0D0E8;margin-bottom:.3rem;letter-spacing:.04em}
.prod-price{font-weight:600;font-size:.95rem;color:${p};margin-bottom:.4rem;text-shadow:0 0 8px ${p}40}
.prod-meta{display:flex;align-items:center;gap:.4rem;font-size:.77rem;color:#7A8A9A}.prod-stars{color:#F5A623}
.prod-btn{display:block;text-align:center;margin-top:.85rem;padding:.55rem;border:1px solid ${p}50;color:${p};font-size:.8rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;transition:all .2s}.prod-btn:hover{background:${p}15;box-shadow:0 0 15px ${p}30}
.gallery{padding:5.5rem 5%;background:#030305}.gallery-inner{max-width:1200px;margin:0 auto}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-top:3rem}
.gal-item{overflow:hidden;aspect-ratio:4/3;border:1px solid ${p}20}.gal-item img{height:100%;object-fit:cover;filter:brightness(.75) saturate(1.2);transition:all .4s}.gal-item:hover img{transform:scale(1.06);filter:brightness(1) saturate(1.3)}
.testimonials{padding:5.5rem 5%;background:#050508}.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.testi-card{background:#080810;border:1px solid ${p}25;padding:2rem}
.testi-stars{color:#F5A623;margin-bottom:.8rem;text-shadow:0 0 6px #F5A623}.testi-text{font-size:.9rem;color:#7A8A9A;line-height:1.7;margin-bottom:1.5rem}
.testi-author{display:flex;align-items:center;gap:.75rem}
.testi-av{width:40px;height:40px;border:1px solid ${p}50;background:${p}15;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.82rem;color:${p};flex-shrink:0;text-shadow:0 0 6px ${p}}
.testi-name{font-weight:600;font-size:.88rem;color:#D0D0E8;letter-spacing:.04em}.testi-role{font-size:.77rem;color:#7A8A9A}
.pricing{padding:5.5rem 5%;background:#030305}.pricing-inner{max-width:1100px;margin:0 auto}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.price-card{background:#050508;border:1px solid ${p}25;padding:2.5rem;position:relative}
.price-card.featured{border-color:${p};box-shadow:0 0 30px ${p}25}
.price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:${p};color:#000;font-size:.72rem;font-weight:700;padding:.28rem .9rem;letter-spacing:.1em;white-space:nowrap}
.price-tier{font-family:'Orbitron',sans-serif;font-size:.7rem;font-weight:700;color:${p};letter-spacing:.15em;text-transform:uppercase;margin-bottom:.5rem;text-shadow:0 0 8px ${p}50}
.price-amt{font-family:'Orbitron',sans-serif;font-size:2.2rem;font-weight:700;color:#fff;letter-spacing:-.01em;line-height:1;margin-bottom:.2rem}
.price-period{font-size:.82rem;color:#7A8A9A;margin-bottom:1.2rem}
.price-div{height:1px;background:${p}20;margin:1.2rem 0}
.price-features{list-style:none;display:flex;flex-direction:column;gap:.6rem;margin-bottom:1.75rem}
.price-features li{display:flex;align-items:center;gap:.5rem;font-size:.87rem;color:#B0C0D0}
.price-features li::before{content:'►';color:${p};font-size:.55rem;flex-shrink:0}
.price-btn{display:block;text-align:center;padding:.8rem;font-weight:600;font-size:.85rem;letter-spacing:.1em;text-transform:uppercase;transition:all .2s}
.price-btn-def{border:1px solid ${p}35;color:${p}80}.price-btn-def:hover{border-color:${p};color:${p};box-shadow:0 0 15px ${p}30}
.price-btn-feat{background:${p};color:#000;font-weight:700}.price-btn-feat:hover{box-shadow:0 0 25px ${p}60}
.faq-sec{padding:5.5rem 5%;background:#050508}.faq-inner{max-width:800px;margin:0 auto}
.faq-list{margin-top:3rem;display:flex;flex-direction:column;gap:.5rem}
details{background:#080810;border:1px solid ${p}20;overflow:hidden}
details[open]{border-color:${p}60;box-shadow:0 0 15px ${p}15}
summary{padding:1.2rem 1.5rem;cursor:pointer;font-weight:600;font-size:.9rem;color:#D0D0E8;list-style:none;display:flex;justify-content:space-between;align-items:center;user-select:none;letter-spacing:.04em}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-family:'Orbitron',sans-serif;font-size:1rem;color:${p};flex-shrink:0;text-shadow:0 0 8px ${p}}
details[open] summary::after{content:'−'}
.faq-answer{padding:0 1.5rem 1.2rem;font-size:.88rem;color:#7A8A9A;line-height:1.7}
.cta-band{padding:5rem 5%;border-top:1px solid ${p}25;border-bottom:1px solid ${p}25;text-align:center;background:radial-gradient(ellipse at 50% 50%,${p}08 0%,transparent 70%)}
.cta-band h2{font-family:'Orbitron',sans-serif;font-size:2rem;font-weight:700;color:${p};text-shadow:0 0 30px ${p}60,0 0 60px ${p}30;margin-bottom:.7rem;letter-spacing:.05em}
.cta-band p{font-size:.95rem;color:#7A8A9A;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
.cta-btn{display:inline-block;padding:.95rem 2.5rem;border:1px solid ${p};color:${p};font-family:'Rajdhani',sans-serif;font-weight:700;font-size:1rem;letter-spacing:.1em;text-transform:uppercase;transition:all .2s;text-shadow:0 0 10px ${p}50}.cta-btn:hover{background:${p}15;box-shadow:0 0 30px ${p}50}
footer{background:#020204;border-top:1px solid ${p}20;padding:5rem 5% 2rem}
.footer-inner{max-width:1200px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.footer-brand p{color:#3A4A5A;font-size:.83rem;line-height:1.7;margin-top:.6rem}
.footer-col h4{font-family:'Orbitron',sans-serif;font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;color:${p};margin-bottom:1.1rem;text-shadow:0 0 8px ${p}40}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.45rem}
.footer-links a{font-size:.83rem;color:#3A4A5A;transition:color .2s}.footer-links a:hover{color:${p};text-shadow:0 0 6px ${p}40}
.footer-bottom{border-top:1px solid ${p}15;padding-top:1.8rem;display:flex;justify-content:space-between;font-size:.78rem;color:#2A3A4A}
.f-brand-name{font-family:'Orbitron',sans-serif;font-size:.95rem;font-weight:700;color:${p};text-shadow:0 0 10px ${p}50}
@media(max-width:900px){.hero,.about{grid-template-columns:1fr;gap:2.5rem}.stats-inner,.prod-grid{grid-template-columns:repeat(2,1fr)}.testi-grid,.pricing-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.gallery-grid{grid-template-columns:repeat(2,1fr)}.stat-item{border-right:none;border-bottom:1px solid ${p}15}}
</style></head>
<body>
<nav class="nav"><div class="nav-inner">
  <img src="assets/logo-placeholder.png" class="nav-logo" alt="logo">
  <ul class="nav-links"><li><a href="#">HOME</a></li><li><a href="#">TENTANG</a></li><li><a href="#">LAYANAN</a></li><li><a href="#">GALERI</a></li><li><a href="#">KONTAK</a></li></ul>
  <a href="#" class="nav-cta">MULAI</a>
</div></nav>
<section class="hero">
  <div>
    <div class="hero-badge">// ${t.catName} //</div>
    <h1>${t.headline}</h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-btns"><a href="#" class="btn-neon">PESAN SEKARANG</a><a href="#" class="btn-neon-s">PELAJARI</a></div>
    <div class="trust-neon"><div class="trust-neon-av"><span>BS</span><span>SD</span><span>AF</span></div><span>500+ PENGGUNA AKTIF</span></div>
  </div>
  <div class="hero-img-n"><img src="assets/foto-bisnis-anda.png" alt="bisnis"></div>
</section>
<section class="stats"><div class="stats-inner">
  <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Pengguna</div></div>
  <div class="stat-item"><div class="stat-num">50+</div><div class="stat-label">Layanan</div></div>
  <div class="stat-item"><div class="stat-num">5Y</div><div class="stat-label">Pengalaman</div></div>
  <div class="stat-item"><div class="stat-num">4.9★</div><div class="stat-label">Rating</div></div>
</div></section>
<section class="about">
  <div>
    <div class="about-tag">// TENTANG KAMI //</div>
    <h2>${t.name}</h2>
    <p class="about-desc">${t.description||t.sub}</p>
    <ul class="about-checks">${mn.slice(0,6).map(m=>`<li><span class="ck">►</span>${m}</li>`).join('')}</ul>
  </div>
  <div class="about-img"><img src="assets/foto-bisnis-anda.png" alt="tentang"></div>
</section>
<section class="products"><div class="products-inner">
  <div class="sec-head"><h2>LAYANAN UNGGULAN</h2><p>// sistem berteknologi tinggi untuk kebutuhan Anda //</p></div>
  <div class="prod-grid">${mn.slice(0,4).map((name,i)=>`
    <div class="prod-card">
      <div class="prod-img"><img src="${fImg(i)}" alt="${name}"></div>
      <div class="prod-body">
        <div class="prod-name">${name}</div>
        <div class="prod-price">${fPrice(t.cat,i)}</div>
        <div class="prod-meta"><span class="prod-stars">★★★★★</span><span>${fStar(i)}</span><span>·</span><span>${fBuy(i)} terjual</span></div>
        <a href="#" class="prod-btn">PESAN</a>
      </div>
    </div>`).join('')}
  </div>
</div></section>
<section class="gallery"><div class="gallery-inner">
  <div class="sec-head"><h2>GALERI</h2><p>// dokumentasi karya terbaik //</p></div>
  <div class="gallery-grid">${[0,1,2,3,4,5].map(i=>`<div class="gal-item"><img src="${fImg(i)}" alt="galeri ${i+1}"></div>`).join('')}</div>
</div></section>
<section class="testimonials"><div class="testi-inner">
  <div class="sec-head"><h2>TESTIMONI</h2><p>// apa kata pengguna kami //</p></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>
<section class="pricing"><div class="pricing-inner">
  <div class="sec-head"><h2>PAKET HARGA</h2><p>// pilih level akses Anda //</p></div>
  <div class="pricing-grid">
    <div class="price-card"><div class="price-tier">Basic</div><div class="price-amt">Rp 199<span style="font-size:1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Hingga 10 Produk</li><li>Galeri 5 Foto</li><li>Formulir Kontak</li><li>Mobile Friendly</li><li>Support 30 Hari</li></ul><a href="#" class="price-btn price-btn-def">MULAI</a></div>
    <div class="price-card featured"><div class="price-badge">// POPULER //</div><div class="price-tier">Advanced</div><div class="price-amt">Rp 499<span style="font-size:1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Produk Tidak Terbatas</li><li>Galeri 20 Foto</li><li>Pemesanan Online</li><li>SEO Optimization</li><li>Support 24/7</li><li>Analitik Website</li></ul><a href="#" class="price-btn price-btn-feat">PILIH INI</a></div>
    <div class="price-card"><div class="price-tier">Elite</div><div class="price-amt">Rp 999<span style="font-size:1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Semua Fitur Advanced</li><li>Domain Custom</li><li>Integrasi Payment</li><li>Multi-bahasa</li><li>API Access</li><li>Manajer Dedikasi</li></ul><a href="#" class="price-btn price-btn-def">KONTAK</a></div>
  </div>
</div></section>
<section class="faq-sec"><div class="faq-inner">
  <div class="sec-head"><h2>FAQ</h2><p>// pertanyaan yang sering ditanyakan //</p></div>
  <div class="faq-list">${faqHTML()}</div>
</div></section>
<section class="cta-band">
  <h2>SIAP MEMULAI?</h2>
  <p>Hubungi kami dan bergabunglah dengan komunitas pelanggan puas kami.</p>
  <a href="#" class="cta-btn">// HUBUNGI SEKARANG //</a>
</section>
<footer><div class="footer-inner">
  <div class="footer-grid">
    <div class="footer-brand"><div class="f-brand-name">${t.name}</div><p>${(t.sub||'').substring(0,100)}</p></div>
    <div class="footer-col"><h4>Layanan</h4><ul class="footer-links">${mn.slice(0,4).map(m=>`<li><a href="#">${m}</a></li>`).join('')}</ul></div>
    <div class="footer-col"><h4>Info</h4><ul class="footer-links"><li><a href="#">Tentang</a></li><li><a href="#">Blog</a></li><li><a href="#">Promo</a></li><li><a href="#">Karir</a></li></ul></div>
    <div class="footer-col"><h4>Kontak</h4><ul class="footer-links"><li><a href="#">WhatsApp</a></li><li><a href="#">Instagram</a></li><li><a href="#">Email</a></li><li><a href="#">Lokasi</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2025 ${t.name}.</span><span>// WebsiteKu //</span></div>
</div></footer>
</body></html>`;}

/* ============================================================ */
/* 7. STARTUP                                                    */
/* ============================================================ */
function tmplStartup(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<8)mn=mn.concat(mn);
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'Inter',sans-serif;background:#050510;color:#C8D0E0;line-height:1.6}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}
.nav{position:sticky;top:0;background:rgba(5,5,16,.88);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,.06);z-index:100;padding:1rem 5%}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.nav-logo{height:30px;width:auto;object-fit:contain}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.83rem;font-weight:500;color:#8892A4;transition:color .2s}.nav-links a:hover{color:#fff}
.nav-cta{padding:.5rem 1.2rem;background:linear-gradient(135deg,${p},${s});color:#fff;border-radius:8px;font-size:.83rem;font-weight:600}
.hero{padding:6rem 5% 5rem;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;position:relative}
.hero-glow{position:absolute;width:500px;height:500px;background:radial-gradient(circle,${p}20 0%,transparent 70%);top:-100px;left:-50px;pointer-events:none;border-radius:50%}
.hero-badge{display:inline-flex;align-items:center;gap:.4rem;background:${p}20;border:1px solid ${p}40;color:${p};font-size:.72rem;font-weight:600;padding:.3rem .9rem;border-radius:20px;letter-spacing:.06em;text-transform:uppercase;margin-bottom:1.2rem}
.hero-badge::before{content:'●';font-size:.5rem}
.hero h1{font-size:clamp(2rem,4vw,3.4rem);font-weight:800;line-height:1.1;letter-spacing:-.04em;margin-bottom:1rem;color:#fff}
.hero h1 .hi{background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-size:.97rem;color:#8892A4;line-height:1.75;margin-bottom:2rem}
.hero-btns{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:2rem}
.btn-grad{padding:.8rem 1.75rem;background:linear-gradient(135deg,${p},${s});color:#fff;border-radius:10px;font-weight:700;font-size:.9rem;transition:all .2s}.btn-grad:hover{transform:translateY(-2px);box-shadow:0 8px 25px ${p}40}
.btn-dark-b{padding:.8rem 1.75rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:10px;font-weight:500;font-size:.9rem;color:#C8D0E0;transition:all .2s}.btn-dark-b:hover{background:rgba(255,255,255,.1)}
.trust-s{display:flex;align-items:center;gap:.7rem;font-size:.82rem;color:#8892A4}
.trust-s-av{display:flex}.trust-s-av span{width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,${p}60,${s}60);border:2px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:600;color:#fff;margin-left:-7px}.trust-s-av span:first-child{margin-left:0}
.hero-img-s{border-radius:20px;overflow:hidden;aspect-ratio:5/4;box-shadow:0 20px 60px rgba(0,0,0,.5),0 0 40px ${p}15}.hero-img-s img{height:100%;object-fit:cover}
.stats{background:rgba(255,255,255,.03);border-top:1px solid rgba(255,255,255,.05);border-bottom:1px solid rgba(255,255,255,.05);padding:2.5rem 5%}
.stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.stat-item{text-align:center;padding:1.5rem;border-right:1px solid rgba(255,255,255,.05)}.stat-item:last-child{border-right:none}
.stat-num{font-size:2.3rem;font-weight:800;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}.stat-label{font-size:.78rem;color:#8892A4;margin-top:.3rem}
.about{padding:5.5rem 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.about-tag{font-size:.72rem;font-weight:700;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:.12em;text-transform:uppercase;margin-bottom:.75rem}
.about h2{font-size:2.1rem;font-weight:800;letter-spacing:-.04em;margin-bottom:1rem;line-height:1.15;color:#fff}
.about-desc{color:#8892A4;line-height:1.75;margin-bottom:1.5rem;font-size:.93rem}
.about-checks{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
.about-checks li{display:flex;align-items:center;gap:.45rem;font-size:.87rem;color:#C8D0E0}
.ck{width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,${p},${s});color:#fff;display:flex;align-items:center;justify-content:center;font-size:.6rem;flex-shrink:0}
.about-img{border-radius:20px;overflow:hidden;aspect-ratio:4/3;box-shadow:0 20px 60px rgba(0,0,0,.5),0 0 30px ${s}10}.about-img img{height:100%;object-fit:cover}
.products{padding:5.5rem 5%;background:rgba(255,255,255,.02)}.products-inner{max-width:1200px;margin:0 auto}
.sec-head{text-align:center;margin-bottom:3.5rem}.sec-head h2{font-size:2rem;font-weight:800;color:#fff;letter-spacing:-.04em;margin-bottom:.4rem}.sec-head p{color:#8892A4;font-size:.9rem}
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem}
.prod-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:16px;overflow:hidden;transition:all .25s}
.prod-card:hover{border-color:${p}60;transform:translateY(-4px);box-shadow:0 12px 35px ${p}20}
.prod-img{aspect-ratio:4/3;overflow:hidden}.prod-img img{height:100%;object-fit:cover;transition:transform .35s}.prod-card:hover .prod-img img{transform:scale(1.05)}
.prod-body{padding:1.2rem}.prod-name{font-weight:600;font-size:.9rem;color:#fff;margin-bottom:.3rem}
.prod-price{font-weight:700;font-size:1rem;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.4rem}
.prod-meta{display:flex;align-items:center;gap:.4rem;font-size:.77rem;color:#8892A4}.prod-stars{color:#F5A623}
.prod-btn{display:block;text-align:center;margin-top:.85rem;padding:.55rem;background:linear-gradient(135deg,${p}25,${s}15);border:1px solid ${p}40;color:${p};border-radius:10px;font-size:.82rem;font-weight:600;transition:all .2s}.prod-btn:hover{background:linear-gradient(135deg,${p},${s});color:#fff;border-color:transparent}
.gallery{padding:5.5rem 5%;background:#030308}.gallery-inner{max-width:1200px;margin:0 auto}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.85rem;margin-top:3rem}
.gal-item{border-radius:12px;overflow:hidden;aspect-ratio:4/3;border:1px solid rgba(255,255,255,.05)}.gal-item img{height:100%;object-fit:cover;transition:transform .4s;filter:brightness(.8)}.gal-item:hover img{transform:scale(1.06);filter:brightness(1)}
.testimonials{padding:5.5rem 5%;background:rgba(255,255,255,.02)}.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.testi-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:2rem}
.testi-stars{color:#F5A623;margin-bottom:.8rem}.testi-text{font-size:.9rem;color:#8892A4;line-height:1.7;margin-bottom:1.5rem}
.testi-author{display:flex;align-items:center;gap:.75rem}
.testi-av{width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,${p},${s});color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.82rem;flex-shrink:0}
.testi-name{font-weight:600;font-size:.88rem;color:#fff}.testi-role{font-size:.77rem;color:#8892A4}
.pricing{padding:5.5rem 5%;background:#030308}.pricing-inner{max-width:1100px;margin:0 auto}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.price-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:2.5rem;position:relative}
.price-card.featured{border-color:${p}80;box-shadow:0 0 30px ${p}15}
.price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,${p},${s});color:#fff;font-size:.72rem;font-weight:700;padding:.28rem .9rem;border-radius:20px;white-space:nowrap}
.price-tier{font-size:.75rem;font-weight:700;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.5rem}
.price-amt{font-size:2.4rem;font-weight:800;color:#fff;letter-spacing:-.04em;line-height:1;margin-bottom:.2rem}
.price-period{font-size:.82rem;color:#8892A4;margin-bottom:1.2rem}
.price-div{height:1px;background:rgba(255,255,255,.06);margin:1.2rem 0}
.price-features{list-style:none;display:flex;flex-direction:column;gap:.6rem;margin-bottom:1.75rem}
.price-features li{display:flex;align-items:center;gap:.5rem;font-size:.87rem;color:#C8D0E0}
.price-features li::before{content:'✓';color:${p};font-weight:700;flex-shrink:0}
.price-btn{display:block;text-align:center;padding:.8rem;border-radius:10px;font-weight:600;font-size:.88rem;transition:all .2s}
.price-btn-def{border:1px solid rgba(255,255,255,.1);color:#8892A4}.price-btn-def:hover{border-color:${p};color:${p}}
.price-btn-feat{background:linear-gradient(135deg,${p},${s});color:#fff}.price-btn-feat:hover{opacity:.88}
.faq-sec{padding:5.5rem 5%;background:rgba(255,255,255,.02)}.faq-inner{max-width:800px;margin:0 auto}
.faq-list{margin-top:3rem;display:flex;flex-direction:column;gap:.6rem}
details{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:12px;overflow:hidden}
details[open]{border-color:${p}60}
summary{padding:1.2rem 1.5rem;cursor:pointer;font-weight:600;font-size:.9rem;color:#C8D0E0;list-style:none;display:flex;justify-content:space-between;align-items:center;user-select:none}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-size:1.2rem;font-weight:300;color:${p};flex-shrink:0}
details[open] summary::after{content:'−'}
.faq-answer{padding:0 1.5rem 1.2rem;font-size:.88rem;color:#8892A4;line-height:1.7}
.cta-band{padding:5rem 5%;text-align:center;background:linear-gradient(135deg,${p}15 0%,${s}10 50%,transparent 100%);border-top:1px solid rgba(255,255,255,.05)}
.cta-band h2{font-size:2.2rem;font-weight:800;color:#fff;letter-spacing:-.04em;margin-bottom:.7rem}
.cta-band p{font-size:.95rem;color:#8892A4;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
.cta-btn{display:inline-block;padding:.95rem 2.5rem;background:linear-gradient(135deg,${p},${s});color:#fff;border-radius:10px;font-weight:700;font-size:.95rem;transition:all .2s}.cta-btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px ${p}50}
footer{background:#030308;border-top:1px solid rgba(255,255,255,.04);padding:5rem 5% 2rem}
.footer-inner{max-width:1200px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.footer-brand p{color:#3A4455;font-size:.83rem;line-height:1.7;margin-top:.6rem}
.footer-col h4{font-size:.78rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1.1rem}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.45rem}
.footer-links a{font-size:.83rem;color:#3A4455;transition:color .2s}.footer-links a:hover{color:#fff}
.footer-bottom{border-top:1px solid rgba(255,255,255,.04);padding-top:1.8rem;display:flex;justify-content:space-between;font-size:.78rem;color:#1E2A3A}
.f-brand-name{font-size:1.05rem;font-weight:800;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
@media(max-width:900px){.hero,.about{grid-template-columns:1fr;gap:2.5rem}.stats-inner,.prod-grid{grid-template-columns:repeat(2,1fr)}.testi-grid,.pricing-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.gallery-grid{grid-template-columns:repeat(2,1fr)}.stat-item{border-right:none;border-bottom:1px solid rgba(255,255,255,.05)}}
</style></head>
<body>
<nav class="nav"><div class="nav-inner">
  <img src="assets/logo-placeholder.png" class="nav-logo" alt="logo">
  <ul class="nav-links"><li><a href="#">Home</a></li><li><a href="#">Tentang</a></li><li><a href="#">Layanan</a></li><li><a href="#">Galeri</a></li><li><a href="#">Kontak</a></li></ul>
  <a href="#" class="nav-cta">Mulai Gratis</a>
</div></nav>
<section class="hero">
  <div class="hero-glow"></div>
  <div style="position:relative">
    <div class="hero-badge">${t.catName}</div>
    <h1><span class="hi">${t.headline}</span></h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-btns"><a href="#" class="btn-grad">Mulai Sekarang</a><a href="#" class="btn-dark-b">Demo Gratis</a></div>
    <div class="trust-s"><div class="trust-s-av"><span>BS</span><span>SD</span><span>AF</span></div><span>Dipercaya 500+ pengguna</span></div>
  </div>
  <div class="hero-img-s"><img src="assets/foto-bisnis-anda.png" alt="bisnis"></div>
</section>
<section class="stats"><div class="stats-inner">
  <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Pengguna Aktif</div></div>
  <div class="stat-item"><div class="stat-num">50+</div><div class="stat-label">Fitur Tersedia</div></div>
  <div class="stat-item"><div class="stat-num">5 Thn</div><div class="stat-label">Pengalaman</div></div>
  <div class="stat-item"><div class="stat-num">4.9★</div><div class="stat-label">Rating Pengguna</div></div>
</div></section>
<section class="about">
  <div>
    <div class="about-tag">Tentang Kami</div>
    <h2>${t.name}</h2>
    <p class="about-desc">${t.description||t.sub}</p>
    <ul class="about-checks">${mn.slice(0,6).map(m=>`<li><span class="ck">✓</span>${m}</li>`).join('')}</ul>
  </div>
  <div class="about-img"><img src="assets/foto-bisnis-anda.png" alt="tentang"></div>
</section>
<section class="products"><div class="products-inner">
  <div class="sec-head"><h2>Produk &amp; Layanan</h2><p>Solusi lengkap untuk kebutuhan bisnis Anda</p></div>
  <div class="prod-grid">${mn.slice(0,4).map((name,i)=>`
    <div class="prod-card">
      <div class="prod-img"><img src="${fImg(i)}" alt="${name}"></div>
      <div class="prod-body">
        <div class="prod-name">${name}</div>
        <div class="prod-price">${fPrice(t.cat,i)}</div>
        <div class="prod-meta"><span class="prod-stars">★★★★★</span><span>${fStar(i)}</span><span>·</span><span>${fBuy(i)} terjual</span></div>
        <a href="#" class="prod-btn">Pesan Sekarang</a>
      </div>
    </div>`).join('')}
  </div>
</div></section>
<section class="gallery"><div class="gallery-inner">
  <div class="sec-head"><h2>Galeri</h2><p>Karya dan momen terbaik kami</p></div>
  <div class="gallery-grid">${[0,1,2,3,4,5].map(i=>`<div class="gal-item"><img src="${fImg(i)}" alt="galeri ${i+1}"></div>`).join('')}</div>
</div></section>
<section class="testimonials"><div class="testi-inner">
  <div class="sec-head"><h2>Kata Pengguna</h2><p>Bergabunglah dengan ribuan pelanggan puas</p></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>
<section class="pricing"><div class="pricing-inner">
  <div class="sec-head"><h2>Paket Harga</h2><p>Mulai gratis, upgrade kapan saja</p></div>
  <div class="pricing-grid">
    <div class="price-card"><div class="price-tier">Starter</div><div class="price-amt">Rp 199<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Hingga 10 Produk</li><li>Galeri 5 Foto</li><li>Formulir Kontak</li><li>Mobile Friendly</li><li>Support 30 Hari</li></ul><a href="#" class="price-btn price-btn-def">Coba Gratis</a></div>
    <div class="price-card featured"><div class="price-badge">TERPOPULER</div><div class="price-tier">Growth</div><div class="price-amt">Rp 499<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Produk Tidak Terbatas</li><li>Galeri 20 Foto</li><li>Pemesanan Online</li><li>SEO Optimization</li><li>Support 24/7</li><li>Analitik Website</li></ul><a href="#" class="price-btn price-btn-feat">Pilih Paket</a></div>
    <div class="price-card"><div class="price-tier">Scale</div><div class="price-amt">Rp 999<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Semua Fitur Growth</li><li>Domain Custom</li><li>Integrasi Payment</li><li>Multi-bahasa</li><li>API Access</li><li>Manajer Dedikasi</li></ul><a href="#" class="price-btn price-btn-def">Kontak Sales</a></div>
  </div>
</div></section>
<section class="faq-sec"><div class="faq-inner">
  <div class="sec-head"><h2>FAQ</h2><p>Semua yang perlu Anda ketahui</p></div>
  <div class="faq-list">${faqHTML()}</div>
</div></section>
<section class="cta-band">
  <h2>Mulai Perjalanan Anda Hari Ini</h2>
  <p>Bergabunglah dengan ratusan bisnis yang sudah berkembang bersama kami.</p>
  <a href="#" class="cta-btn">Hubungi via WhatsApp 🚀</a>
</section>
<footer><div class="footer-inner">
  <div class="footer-grid">
    <div class="footer-brand"><div class="f-brand-name">${t.name}</div><p>${(t.sub||'').substring(0,100)}</p></div>
    <div class="footer-col"><h4>Layanan</h4><ul class="footer-links">${mn.slice(0,4).map(m=>`<li><a href="#">${m}</a></li>`).join('')}</ul></div>
    <div class="footer-col"><h4>Perusahaan</h4><ul class="footer-links"><li><a href="#">Tentang</a></li><li><a href="#">Blog</a></li><li><a href="#">Karir</a></li><li><a href="#">Press</a></li></ul></div>
    <div class="footer-col"><h4>Kontak</h4><ul class="footer-links"><li><a href="#">WhatsApp</a></li><li><a href="#">Instagram</a></li><li><a href="#">Email</a></li><li><a href="#">Lokasi</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2025 ${t.name}.</span><span>Dibuat dengan ❤ WebsiteKu</span></div>
</div></footer>
</body></html>`;}

/* ============================================================ */
/* 8. ELEGANT                                                    */
/* ============================================================ */
function tmplElegant(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<8)mn=mn.concat(mn);
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'DM Sans',sans-serif;background:#FAFAF6;color:#2A1E1A;line-height:1.6}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}
.serif{font-family:'Playfair Display',serif}
.nav{position:sticky;top:0;background:rgba(250,250,246,.97);backdrop-filter:blur(8px);border-bottom:1px solid #EDE8E3;z-index:100;padding:1.1rem 5%}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.nav-logo{height:30px;width:auto;object-fit:contain}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.83rem;font-weight:400;color:#8A7A72;letter-spacing:.04em;transition:color .2s}.nav-links a:hover{color:${p}}
.nav-cta{padding:.5rem 1.4rem;background:${p};color:#fff;font-size:.83rem;font-weight:500;letter-spacing:.04em}
.hero{padding:6rem 5% 4rem;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
.hero-badge{display:inline-flex;align-items:center;gap:.5rem;font-size:.72rem;font-weight:500;color:${p};letter-spacing:.12em;text-transform:uppercase;margin-bottom:1.2rem}
.hero-badge::before{content:'';display:block;width:24px;height:1px;background:${p}}
.hero h1{font-family:'Playfair Display',serif;font-size:clamp(2.2rem,4.5vw,3.8rem);font-weight:400;line-height:1.2;margin-bottom:1rem;color:#2A1E1A}
.hero h1 em{color:${p};font-style:italic}
.hero-sub{font-size:.97rem;color:#8A7A72;line-height:1.8;margin-bottom:2rem}
.hero-btns{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:2rem}
.btn-warm{padding:.85rem 2rem;background:${p};color:#fff;font-size:.88rem;font-weight:500;letter-spacing:.04em;transition:all .2s}.btn-warm:hover{opacity:.88;transform:translateY(-1px)}
.btn-warm-out{padding:.85rem 2rem;border:1px solid ${p}60;color:${p};font-size:.88rem;font-weight:400;letter-spacing:.04em;transition:all .2s}.btn-warm-out:hover{background:${p}08}
.trust-e{display:flex;align-items:center;gap:.7rem;font-size:.82rem;color:#8A7A72}
.trust-e-av{display:flex}.trust-e-av span{width:28px;height:28px;border-radius:50%;background:${p}20;border:2px solid ${s};display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:500;color:${p};margin-left:-6px}.trust-e-av span:first-child{margin-left:0}
.hero-img-e{overflow:hidden;aspect-ratio:4/5;box-shadow:20px 20px 60px rgba(42,30,26,.12)}.hero-img-e img{height:100%;object-fit:cover}
.stats{background:${s}40;border-top:1px solid #EDE8E3;border-bottom:1px solid #EDE8E3;padding:3rem 5%}
.stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.stat-item{text-align:center;padding:1.5rem;border-right:1px solid #EDE8E3}.stat-item:last-child{border-right:none}
.stat-num{font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:400;color:${p};line-height:1}.stat-label{font-size:.78rem;color:#8A7A72;margin-top:.35rem;letter-spacing:.06em}
.about{padding:5.5rem 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.about-tag{font-size:.72rem;font-weight:500;color:${p};letter-spacing:.14em;text-transform:uppercase;margin-bottom:.75rem;display:flex;align-items:center;gap:.5rem}
.about-tag::before{content:'';display:block;width:20px;height:1px;background:${p}}
.about h2{font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:400;margin-bottom:1rem;line-height:1.25;color:#2A1E1A}
.about-desc{color:#8A7A72;line-height:1.8;margin-bottom:1.5rem;font-size:.93rem}
.about-checks{list-style:none;display:flex;flex-direction:column;gap:.55rem}
.about-checks li{display:flex;align-items:center;gap:.5rem;font-size:.88rem;color:#5A4A42}
.ck{width:16px;height:16px;background:${p};color:#fff;display:flex;align-items:center;justify-content:center;font-size:.6rem;flex-shrink:0}
.about-img{overflow:hidden;aspect-ratio:4/3;box-shadow:20px 20px 60px rgba(42,30,26,.1)}.about-img img{height:100%;object-fit:cover}
.products{padding:5.5rem 5%;background:#fff}.products-inner{max-width:1200px;margin:0 auto}
.sec-head{text-align:center;margin-bottom:3.5rem}.sec-head h2{font-family:'Playfair Display',serif;font-size:2.2rem;font-weight:400;color:#2A1E1A;margin-bottom:.5rem}.sec-head p{color:#8A7A72;font-size:.88rem;letter-spacing:.06em}
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
.prod-card{border:1px solid #EDE8E3;overflow:hidden;transition:all .25s;background:#FAFAF6}
.prod-card:hover{border-color:${p}50;transform:translateY(-3px);box-shadow:0 12px 40px rgba(42,30,26,.08)}
.prod-img{aspect-ratio:4/3;overflow:hidden}.prod-img img{height:100%;object-fit:cover;transition:transform .4s}.prod-card:hover .prod-img img{transform:scale(1.04)}
.prod-body{padding:1.25rem}.prod-name{font-family:'Playfair Display',serif;font-weight:400;font-size:1rem;margin-bottom:.35rem;color:#2A1E1A}
.prod-price{font-weight:500;font-size:.9rem;color:${p};margin-bottom:.45rem}
.prod-meta{display:flex;align-items:center;gap:.4rem;font-size:.77rem;color:#8A7A72}.prod-stars{color:#D4A017}
.prod-btn{display:block;text-align:center;margin-top:.9rem;padding:.6rem;background:${p}12;color:${p};font-size:.82rem;font-weight:500;letter-spacing:.04em;transition:all .2s}.prod-btn:hover{background:${p};color:#fff}
.gallery{padding:5.5rem 5%;background:${s}30}.gallery-inner{max-width:1200px;margin:0 auto}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem;margin-top:3rem}
.gal-item{overflow:hidden;aspect-ratio:4/3}.gal-item img{height:100%;object-fit:cover;transition:transform .4s}.gal-item:hover img{transform:scale(1.05)}
.testimonials{padding:5.5rem 5%;background:#fff}.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.testi-card{border:1px solid #EDE8E3;padding:2rem;background:#FAFAF6}
.testi-stars{color:#D4A017;margin-bottom:.8rem}.testi-text{font-family:'Playfair Display',serif;font-size:.95rem;color:#5A4A42;line-height:1.7;margin-bottom:1.5rem;font-style:italic}
.testi-author{display:flex;align-items:center;gap:.75rem}
.testi-av{width:40px;height:40px;background:${p};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:500;font-size:.82rem;flex-shrink:0}
.testi-name{font-weight:500;font-size:.88rem;color:#2A1E1A}.testi-role{font-size:.78rem;color:#8A7A72;letter-spacing:.04em}
.pricing{padding:5.5rem 5%;background:${s}20}.pricing-inner{max-width:1100px;margin:0 auto}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.price-card{border:1px solid #EDE8E3;padding:2.5rem;background:#fff;position:relative}
.price-card.featured{border-color:${p};box-shadow:0 8px 30px rgba(42,30,26,.08)}
.price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:${p};color:#fff;font-size:.72rem;font-weight:500;padding:.28rem .9rem;letter-spacing:.06em;white-space:nowrap}
.price-tier{font-size:.72rem;font-weight:500;color:${p};letter-spacing:.14em;text-transform:uppercase;margin-bottom:.6rem}
.price-amt{font-family:'Playfair Display',serif;font-size:2.8rem;font-weight:400;color:#2A1E1A;line-height:1;margin-bottom:.2rem}
.price-period{font-size:.82rem;color:#8A7A72;margin-bottom:1.2rem}
.price-div{height:1px;background:#EDE8E3;margin:1.2rem 0}
.price-features{list-style:none;display:flex;flex-direction:column;gap:.65rem;margin-bottom:2rem}
.price-features li{display:flex;align-items:center;gap:.55rem;font-size:.87rem;color:#5A4A42}
.price-features li::before{content:'✓';color:${p};font-weight:700;flex-shrink:0}
.price-btn{display:block;text-align:center;padding:.85rem;font-size:.85rem;font-weight:500;letter-spacing:.04em;transition:all .2s}
.price-btn-def{border:1px solid #EDE8E3;color:#8A7A72}.price-btn-def:hover{border-color:${p};color:${p}}
.price-btn-feat{background:${p};color:#fff}.price-btn-feat:hover{opacity:.88}
.faq-sec{padding:5.5rem 5%;background:#fff}.faq-inner{max-width:800px;margin:0 auto}
.faq-list{margin-top:3rem;display:flex;flex-direction:column;gap:.6rem}
details{border:1px solid #EDE8E3;overflow:hidden}
details[open]{border-color:${p}55}
summary{padding:1.2rem 1.5rem;cursor:pointer;font-weight:500;font-size:.9rem;color:#2A1E1A;list-style:none;display:flex;justify-content:space-between;align-items:center;user-select:none}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-family:'Playfair Display',serif;font-size:1.2rem;color:${p};flex-shrink:0}
details[open] summary::after{content:'−'}
.faq-answer{padding:0 1.5rem 1.2rem;font-size:.88rem;color:#8A7A72;line-height:1.8}
.cta-band{padding:5rem 5%;background:${p};color:#fff;text-align:center}
.cta-band h2{font-family:'Playfair Display',serif;font-size:2.5rem;font-weight:400;margin-bottom:.75rem}
.cta-band p{font-size:.95rem;opacity:.85;margin-bottom:2.5rem;max-width:480px;margin-left:auto;margin-right:auto}
.cta-btn{display:inline-block;padding:1rem 2.75rem;background:#fff;color:${p};font-size:.9rem;font-weight:500;letter-spacing:.04em;transition:all .2s}.cta-btn:hover{transform:translateY(-1px);box-shadow:0 8px 20px rgba(0,0,0,.15)}
footer{background:#1A0F0A;color:#E8D8C8;padding:5rem 5% 2rem}
.footer-inner{max-width:1200px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.footer-brand p{color:rgba(232,216,200,.45);font-size:.83rem;line-height:1.7;margin-top:.6rem}
.footer-col h4{font-size:.72rem;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:${s};margin-bottom:1.1rem}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.5rem}
.footer-links a{font-size:.83rem;color:rgba(232,216,200,.4);transition:color .2s}.footer-links a:hover{color:${s}}
.footer-bottom{border-top:1px solid rgba(232,216,200,.1);padding-top:1.8rem;display:flex;justify-content:space-between;font-size:.78rem;color:rgba(232,216,200,.25)}
.f-brand-name{font-family:'Playfair Display',serif;font-size:1.2rem;font-weight:400;color:${s}}
@media(max-width:900px){.hero,.about{grid-template-columns:1fr;gap:2.5rem}.stats-inner,.prod-grid{grid-template-columns:repeat(2,1fr)}.testi-grid,.pricing-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.gallery-grid{grid-template-columns:repeat(2,1fr)}.stat-item{border-right:none;border-bottom:1px solid #EDE8E3}}
</style></head>
<body>
<nav class="nav"><div class="nav-inner">
  <img src="assets/logo-placeholder.png" class="nav-logo" alt="logo">
  <ul class="nav-links"><li><a href="#">Home</a></li><li><a href="#">Tentang</a></li><li><a href="#">Koleksi</a></li><li><a href="#">Galeri</a></li><li><a href="#">Kontak</a></li></ul>
  <a href="#" class="nav-cta">Hubungi Kami</a>
</div></nav>
<section class="hero">
  <div>
    <div class="hero-badge">${t.catName}</div>
    <h1><em>${t.headline}</em></h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-btns"><a href="#" class="btn-warm">Lihat Koleksi</a><a href="#" class="btn-warm-out">Tentang Kami</a></div>
    <div class="trust-e"><div class="trust-e-av"><span>BS</span><span>SD</span><span>AF</span></div><span>Dipercaya 500+ pelanggan</span></div>
  </div>
  <div class="hero-img-e"><img src="assets/foto-bisnis-anda.png" alt="bisnis"></div>
</section>
<section class="stats"><div class="stats-inner">
  <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Pelanggan Setia</div></div>
  <div class="stat-item"><div class="stat-num">50+</div><div class="stat-label">Koleksi</div></div>
  <div class="stat-item"><div class="stat-num">8 Thn</div><div class="stat-label">Pengalaman</div></div>
  <div class="stat-item"><div class="stat-num">4.9★</div><div class="stat-label">Rating</div></div>
</div></section>
<section class="about">
  <div>
    <div class="about-tag">Tentang Kami</div>
    <h2>${t.name}</h2>
    <p class="about-desc">${t.description||t.sub}</p>
    <ul class="about-checks">${mn.slice(0,6).map(m=>`<li><span class="ck">✓</span>${m}</li>`).join('')}</ul>
  </div>
  <div class="about-img"><img src="assets/foto-bisnis-anda.png" alt="tentang"></div>
</section>
<section class="products"><div class="products-inner">
  <div class="sec-head"><h2>Koleksi Unggulan</h2><p>Dipilih dengan cermat untuk Anda</p></div>
  <div class="prod-grid">${mn.slice(0,4).map((name,i)=>`
    <div class="prod-card">
      <div class="prod-img"><img src="${fImg(i)}" alt="${name}"></div>
      <div class="prod-body">
        <div class="prod-name">${name}</div>
        <div class="prod-price">${fPrice(t.cat,i)}</div>
        <div class="prod-meta"><span class="prod-stars">★★★★★</span><span>${fStar(i)}</span><span>·</span><span>${fBuy(i)} terjual</span></div>
        <a href="#" class="prod-btn">Pesan Sekarang</a>
      </div>
    </div>`).join('')}
  </div>
</div></section>
<section class="gallery"><div class="gallery-inner">
  <div class="sec-head"><h2>Galeri</h2><p>Keindahan dalam setiap detail</p></div>
  <div class="gallery-grid">${[0,1,2,3,4,5].map(i=>`<div class="gal-item"><img src="${fImg(i)}" alt="galeri ${i+1}"></div>`).join('')}</div>
</div></section>
<section class="testimonials"><div class="testi-inner">
  <div class="sec-head"><h2>Kata Pelanggan</h2><p>Kepuasan yang berbicara sendiri</p></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>
<section class="pricing"><div class="pricing-inner">
  <div class="sec-head"><h2>Paket Layanan</h2><p>Pilih yang sesuai dengan impian Anda</p></div>
  <div class="pricing-grid">
    <div class="price-card"><div class="price-tier">Dasar</div><div class="price-amt">Rp 199<span style="font-size:1.2rem;font-weight:300">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Hingga 10 Produk</li><li>Galeri 5 Foto</li><li>Formulir Kontak</li><li>Mobile Friendly</li><li>Support 30 Hari</li></ul><a href="#" class="price-btn price-btn-def">Mulai</a></div>
    <div class="price-card featured"><div class="price-badge">PALING DIMINATI</div><div class="price-tier">Pilihan</div><div class="price-amt">Rp 499<span style="font-size:1.2rem;font-weight:300">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Produk Tidak Terbatas</li><li>Galeri 20 Foto</li><li>Pemesanan Online</li><li>SEO Optimization</li><li>Support 24/7</li><li>Analitik Website</li></ul><a href="#" class="price-btn price-btn-feat">Pilih Paket</a></div>
    <div class="price-card"><div class="price-tier">Premium</div><div class="price-amt">Rp 999<span style="font-size:1.2rem;font-weight:300">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Semua Fitur Pilihan</li><li>Domain Custom</li><li>Integrasi Payment</li><li>Multi-bahasa</li><li>API Access</li><li>Konsultan Pribadi</li></ul><a href="#" class="price-btn price-btn-def">Hubungi Kami</a></div>
  </div>
</div></section>
<section class="faq-sec"><div class="faq-inner">
  <div class="sec-head"><h2>Pertanyaan Umum</h2><p>Kami siap membantu Anda</p></div>
  <div class="faq-list">${faqHTML()}</div>
</div></section>
<section class="cta-band">
  <h2>Wujudkan Impian Anda</h2>
  <p>Hubungi kami untuk konsultasi personal dan temukan solusi terbaik untuk Anda.</p>
  <a href="#" class="cta-btn">Hubungi via WhatsApp</a>
</section>
<footer><div class="footer-inner">
  <div class="footer-grid">
    <div class="footer-brand"><div class="f-brand-name">${t.name}</div><p>${(t.sub||'').substring(0,100)}</p></div>
    <div class="footer-col"><h4>Koleksi</h4><ul class="footer-links">${mn.slice(0,4).map(m=>`<li><a href="#">${m}</a></li>`).join('')}</ul></div>
    <div class="footer-col"><h4>Informasi</h4><ul class="footer-links"><li><a href="#">Tentang</a></li><li><a href="#">Blog</a></li><li><a href="#">Event</a></li><li><a href="#">Karir</a></li></ul></div>
    <div class="footer-col"><h4>Kontak</h4><ul class="footer-links"><li><a href="#">WhatsApp</a></li><li><a href="#">Instagram</a></li><li><a href="#">Email</a></li><li><a href="#">Toko</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2025 ${t.name}.</span><span>Keindahan dalam Setiap Detail</span></div>
</div></footer>
</body></html>`;}

/* ============================================================ */
/* 9. FUTURISTIC                                                 */
/* ============================================================ */
function tmplFuturistic(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<8)mn=mn.concat(mn);
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'Exo 2',sans-serif;background:#050910;color:#B0C8D8;line-height:1.6}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}
.nav{position:sticky;top:0;background:rgba(5,9,16,.92);backdrop-filter:blur(16px);border-bottom:1px solid ${a}18;z-index:100;padding:.9rem 5%}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.nav-logo{height:30px;width:auto;object-fit:contain}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.83rem;font-weight:500;color:${a};letter-spacing:.06em;transition:all .2s;opacity:.65}.nav-links a:hover{opacity:1}
.nav-cta{padding:.5rem 1.2rem;border:1px solid ${a}60;color:${a};font-size:.82rem;font-weight:600;letter-spacing:.06em;transition:all .2s}.nav-cta:hover{background:${a}15;border-color:${a}}
.hero{padding:6rem 5% 4rem;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center;position:relative}
.hero::before{content:'';position:absolute;width:400px;height:400px;background:radial-gradient(circle,${a}12 0%,transparent 70%);top:-50px;right:0;pointer-events:none;border-radius:50%}
.hero-badge{display:inline-flex;align-items:center;gap:.4rem;border:1px solid ${a}50;color:${a};font-size:.72rem;font-weight:600;padding:.28rem .85rem;letter-spacing:.1em;text-transform:uppercase;margin-bottom:1.3rem}
.hero h1{font-size:clamp(1.9rem,4vw,3.3rem);font-weight:800;line-height:1.1;letter-spacing:-.02em;margin-bottom:1rem;color:#fff}
.hero h1 .acc{color:${a}}
.hero-sub{font-size:.97rem;color:#7A8A9A;line-height:1.75;margin-bottom:2rem}
.hero-btns{display:flex;gap:.75rem;flex-wrap:wrap;margin-bottom:2rem}
.btn-fut{padding:.8rem 1.75rem;background:${a};color:#000;font-weight:700;font-size:.9rem;letter-spacing:.04em;transition:all .2s}.btn-fut:hover{transform:translateY(-2px);box-shadow:0 8px 25px ${a}50}
.btn-fut-out{padding:.8rem 1.75rem;border:1px solid ${a}50;color:${a};font-weight:500;font-size:.9rem;transition:all .2s}.btn-fut-out:hover{background:${a}10;border-color:${a}}
.trust-f{display:flex;align-items:center;gap:.7rem;font-size:.82rem;color:#7A8A9A}
.trust-f-av{display:flex}.trust-f-av span{width:28px;height:28px;background:${a}20;border:1px solid ${a}50;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:600;color:${a};margin-left:-6px}.trust-f-av span:first-child{margin-left:0}
.hero-img-f{aspect-ratio:5/4;overflow:hidden;border:1px solid ${a}25;box-shadow:0 0 50px ${a}10,0 20px 60px rgba(0,0,0,.5)}.hero-img-f img{height:100%;object-fit:cover;filter:brightness(.85) saturate(1.1)}
.stats{background:rgba(255,255,255,.02);border-top:1px solid ${a}12;border-bottom:1px solid ${a}12;padding:2.5rem 5%}
.stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.stat-item{text-align:center;padding:1.5rem;border-right:1px solid ${a}10}.stat-item:last-child{border-right:none}
.stat-num{font-size:2.3rem;font-weight:800;color:${a};line-height:1}.stat-label{font-size:.78rem;letter-spacing:.08em;text-transform:uppercase;color:#7A8A9A;margin-top:.3rem}
.about{padding:5.5rem 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.about-tag{font-size:.7rem;font-weight:700;color:${a};letter-spacing:.15em;text-transform:uppercase;margin-bottom:.75rem}
.about h2{font-size:2rem;font-weight:800;letter-spacing:-.02em;margin-bottom:1rem;line-height:1.15;color:#fff}
.about-desc{color:#7A8A9A;line-height:1.75;margin-bottom:1.5rem;font-size:.93rem}
.about-checks{list-style:none;display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
.about-checks li{display:flex;align-items:center;gap:.45rem;font-size:.87rem;color:#B0C8D8}
.ck{width:16px;height:16px;background:${a}25;border:1px solid ${a}70;display:flex;align-items:center;justify-content:center;font-size:.55rem;color:${a};flex-shrink:0}
.about-img{aspect-ratio:4/3;overflow:hidden;border:1px solid ${a}20;box-shadow:0 0 30px ${a}08}.about-img img{height:100%;object-fit:cover;filter:brightness(.85)}
.products{padding:5.5rem 5%;background:rgba(255,255,255,.02)}.products-inner{max-width:1200px;margin:0 auto}
.sec-head{text-align:center;margin-bottom:3.5rem}.sec-head h2{font-size:2rem;font-weight:800;color:#fff;letter-spacing:-.02em;margin-bottom:.4rem}.sec-head p{color:#7A8A9A;font-size:.88rem;letter-spacing:.05em}
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.25rem}
.prod-card{background:rgba(255,255,255,.03);border:1px solid ${a}15;overflow:hidden;transition:all .25s}
.prod-card:hover{border-color:${a}60;transform:translateY(-4px);box-shadow:0 8px 30px ${a}15}
.prod-img{aspect-ratio:4/3;overflow:hidden}.prod-img img{height:100%;object-fit:cover;transition:transform .35s;filter:brightness(.85)}.prod-card:hover .prod-img img{transform:scale(1.05);filter:brightness(1)}
.prod-body{padding:1.2rem}.prod-name{font-weight:600;font-size:.9rem;color:#B0C8D8;margin-bottom:.3rem;letter-spacing:.02em}
.prod-price{font-weight:700;font-size:.95rem;color:${a};margin-bottom:.4rem}
.prod-meta{display:flex;align-items:center;gap:.4rem;font-size:.77rem;color:#7A8A9A}.prod-stars{color:#F5A623}
.prod-btn{display:block;text-align:center;margin-top:.85rem;padding:.55rem;background:${a}15;border:1px solid ${a}40;color:${a};font-size:.8rem;font-weight:600;letter-spacing:.04em;transition:all .2s}.prod-btn:hover{background:${a};color:#000}
.gallery{padding:5.5rem 5%;background:#030608}.gallery-inner{max-width:1200px;margin:0 auto}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-top:3rem}
.gal-item{overflow:hidden;aspect-ratio:4/3;border:1px solid ${a}12}.gal-item img{height:100%;object-fit:cover;filter:brightness(.75) saturate(1.1);transition:all .4s}.gal-item:hover img{transform:scale(1.06);filter:brightness(1) saturate(1.2)}
.testimonials{padding:5.5rem 5%;background:rgba(255,255,255,.02)}.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.testi-card{background:rgba(255,255,255,.03);border:1px solid ${a}15;padding:2rem}
.testi-stars{color:#F5A623;margin-bottom:.8rem}.testi-text{font-size:.9rem;color:#7A8A9A;line-height:1.7;margin-bottom:1.5rem}
.testi-author{display:flex;align-items:center;gap:.75rem}
.testi-av{width:40px;height:40px;background:${a}25;border:1px solid ${a}60;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.82rem;color:${a};flex-shrink:0}
.testi-name{font-weight:600;font-size:.88rem;color:#B0C8D8}.testi-role{font-size:.77rem;color:#7A8A9A}
.pricing{padding:5.5rem 5%;background:#030608}.pricing-inner{max-width:1100px;margin:0 auto}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:3.5rem}
.price-card{background:rgba(255,255,255,.03);border:1px solid ${a}15;padding:2.5rem;position:relative}
.price-card.featured{border-color:${a};box-shadow:0 0 25px ${a}20}
.price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:${a};color:#000;font-size:.72rem;font-weight:700;padding:.28rem .9rem;letter-spacing:.06em;white-space:nowrap}
.price-tier{font-size:.73rem;font-weight:700;color:${a};letter-spacing:.14em;text-transform:uppercase;margin-bottom:.5rem}
.price-amt{font-size:2.3rem;font-weight:800;color:#fff;letter-spacing:-.02em;line-height:1;margin-bottom:.2rem}
.price-period{font-size:.82rem;color:#7A8A9A;margin-bottom:1.2rem}
.price-div{height:1px;background:${a}12;margin:1.2rem 0}
.price-features{list-style:none;display:flex;flex-direction:column;gap:.6rem;margin-bottom:1.75rem}
.price-features li{display:flex;align-items:center;gap:.5rem;font-size:.87rem;color:#B0C8D8}
.price-features li::before{content:'›';color:${a};font-size:1rem;font-weight:700;flex-shrink:0}
.price-btn{display:block;text-align:center;padding:.8rem;font-weight:600;font-size:.87rem;letter-spacing:.04em;transition:all .2s}
.price-btn-def{border:1px solid ${a}25;color:${a}70}.price-btn-def:hover{border-color:${a};color:${a}}
.price-btn-feat{background:${a};color:#000}.price-btn-feat:hover{box-shadow:0 0 20px ${a}50}
.faq-sec{padding:5.5rem 5%;background:rgba(255,255,255,.02)}.faq-inner{max-width:800px;margin:0 auto}
.faq-list{margin-top:3rem;display:flex;flex-direction:column;gap:.6rem}
details{background:rgba(255,255,255,.02);border:1px solid ${a}12;overflow:hidden}
details[open]{border-color:${a}55}
summary{padding:1.2rem 1.5rem;cursor:pointer;font-weight:600;font-size:.9rem;color:#B0C8D8;list-style:none;display:flex;justify-content:space-between;align-items:center;user-select:none;letter-spacing:.02em}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-size:1.2rem;font-weight:300;color:${a};flex-shrink:0}
details[open] summary::after{content:'−'}
.faq-answer{padding:0 1.5rem 1.2rem;font-size:.88rem;color:#7A8A9A;line-height:1.7}
.cta-band{padding:5rem 5%;border-top:1px solid ${a}15;text-align:center;background:radial-gradient(ellipse at 50% 50%,${a}08 0%,transparent 70%)}
.cta-band h2{font-size:2.2rem;font-weight:800;color:#fff;letter-spacing:-.02em;margin-bottom:.7rem}
.cta-band p{font-size:.95rem;color:#7A8A9A;margin-bottom:2rem;max-width:480px;margin-left:auto;margin-right:auto}
.cta-btn{display:inline-block;padding:.95rem 2.5rem;background:${a};color:#000;font-weight:700;font-size:.95rem;letter-spacing:.04em;transition:all .2s}.cta-btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px ${a}50}
footer{background:#030608;border-top:1px solid ${a}10;padding:5rem 5% 2rem}
.footer-inner{max-width:1200px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.footer-brand p{color:#2A3845;font-size:.83rem;line-height:1.7;margin-top:.6rem}
.footer-col h4{font-size:.75rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${a};margin-bottom:1.1rem}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.45rem}
.footer-links a{font-size:.83rem;color:#2A3845;transition:color .2s}.footer-links a:hover{color:${a}}
.footer-bottom{border-top:1px solid ${a}08;padding-top:1.8rem;display:flex;justify-content:space-between;font-size:.78rem;color:#1A2530}
.f-brand-name{font-size:1.05rem;font-weight:800;color:${a}}
@media(max-width:900px){.hero,.about{grid-template-columns:1fr;gap:2.5rem}.stats-inner,.prod-grid{grid-template-columns:repeat(2,1fr)}.testi-grid,.pricing-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.gallery-grid{grid-template-columns:repeat(2,1fr)}.stat-item{border-right:none;border-bottom:1px solid ${a}10}}
</style></head>
<body>
<nav class="nav"><div class="nav-inner">
  <img src="assets/logo-placeholder.png" class="nav-logo" alt="logo">
  <ul class="nav-links"><li><a href="#">Home</a></li><li><a href="#">Tentang</a></li><li><a href="#">Layanan</a></li><li><a href="#">Galeri</a></li><li><a href="#">Kontak</a></li></ul>
  <a href="#" class="nav-cta">Get Started</a>
</div></nav>
<section class="hero">
  <div style="position:relative">
    <div class="hero-badge">${t.catName}</div>
    <h1>${t.headline.split(' ').slice(0,2).join(' ')} <span class="acc">${t.headline.split(' ').slice(2).join(' ')}</span></h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-btns"><a href="#" class="btn-fut">Mulai Sekarang</a><a href="#" class="btn-fut-out">Pelajari Lebih</a></div>
    <div class="trust-f"><div class="trust-f-av"><span>BS</span><span>SD</span><span>AF</span></div><span>500+ pengguna terpercaya</span></div>
  </div>
  <div class="hero-img-f"><img src="assets/foto-bisnis-anda.png" alt="bisnis"></div>
</section>
<section class="stats"><div class="stats-inner">
  <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Pengguna</div></div>
  <div class="stat-item"><div class="stat-num">50+</div><div class="stat-label">Layanan</div></div>
  <div class="stat-item"><div class="stat-num">5Y+</div><div class="stat-label">Pengalaman</div></div>
  <div class="stat-item"><div class="stat-num">4.9★</div><div class="stat-label">Rating</div></div>
</div></section>
<section class="about">
  <div>
    <div class="about-tag">Tentang Kami</div>
    <h2>${t.name}</h2>
    <p class="about-desc">${t.description||t.sub}</p>
    <ul class="about-checks">${mn.slice(0,6).map(m=>`<li><span class="ck">›</span>${m}</li>`).join('')}</ul>
  </div>
  <div class="about-img"><img src="assets/foto-bisnis-anda.png" alt="tentang"></div>
</section>
<section class="products"><div class="products-inner">
  <div class="sec-head"><h2>Layanan Unggulan</h2><p>Teknologi mutakhir untuk kebutuhan Anda</p></div>
  <div class="prod-grid">${mn.slice(0,4).map((name,i)=>`
    <div class="prod-card">
      <div class="prod-img"><img src="${fImg(i)}" alt="${name}"></div>
      <div class="prod-body">
        <div class="prod-name">${name}</div>
        <div class="prod-price">${fPrice(t.cat,i)}</div>
        <div class="prod-meta"><span class="prod-stars">★★★★★</span><span>${fStar(i)}</span><span>·</span><span>${fBuy(i)} terjual</span></div>
        <a href="#" class="prod-btn">Pesan</a>
      </div>
    </div>`).join('')}
  </div>
</div></section>
<section class="gallery"><div class="gallery-inner">
  <div class="sec-head"><h2>Galeri</h2><p>Visualisasi karya terbaik kami</p></div>
  <div class="gallery-grid">${[0,1,2,3,4,5].map(i=>`<div class="gal-item"><img src="${fImg(i)}" alt="galeri ${i+1}"></div>`).join('')}</div>
</div></section>
<section class="testimonials"><div class="testi-inner">
  <div class="sec-head"><h2>Testimoni</h2><p>Cerita sukses pengguna kami</p></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>
<section class="pricing"><div class="pricing-inner">
  <div class="sec-head"><h2>Paket Harga</h2><p>Investasi tepat untuk masa depan bisnis Anda</p></div>
  <div class="pricing-grid">
    <div class="price-card"><div class="price-tier">Basic</div><div class="price-amt">Rp 199<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Hingga 10 Produk</li><li>Galeri 5 Foto</li><li>Formulir Kontak</li><li>Mobile Friendly</li><li>Support 30 Hari</li></ul><a href="#" class="price-btn price-btn-def">Mulai</a></div>
    <div class="price-card featured"><div class="price-badge">TERPOPULER</div><div class="price-tier">Pro</div><div class="price-amt">Rp 499<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Produk Tidak Terbatas</li><li>Galeri 20 Foto</li><li>Pemesanan Online</li><li>SEO Optimization</li><li>Support 24/7</li><li>Analitik Website</li></ul><a href="#" class="price-btn price-btn-feat">Pilih Pro</a></div>
    <div class="price-card"><div class="price-tier">Enterprise</div><div class="price-amt">Rp 999<span style="font-size:1.1rem;font-weight:400">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Semua Fitur Pro</li><li>Domain Custom</li><li>Integrasi Payment</li><li>Multi-bahasa</li><li>API Access</li><li>Manajer Dedikasi</li></ul><a href="#" class="price-btn price-btn-def">Kontak</a></div>
  </div>
</div></section>
<section class="faq-sec"><div class="faq-inner">
  <div class="sec-head"><h2>FAQ</h2><p>Pertanyaan yang sering ditanyakan</p></div>
  <div class="faq-list">${faqHTML()}</div>
</div></section>
<section class="cta-band">
  <h2>Siap Melangkah ke Masa Depan?</h2>
  <p>Hubungi kami dan mulai transformasi digital bisnis Anda hari ini.</p>
  <a href="#" class="cta-btn">Hubungi via WhatsApp</a>
</section>
<footer><div class="footer-inner">
  <div class="footer-grid">
    <div class="footer-brand"><div class="f-brand-name">${t.name}</div><p>${(t.sub||'').substring(0,100)}</p></div>
    <div class="footer-col"><h4>Layanan</h4><ul class="footer-links">${mn.slice(0,4).map(m=>`<li><a href="#">${m}</a></li>`).join('')}</ul></div>
    <div class="footer-col"><h4>Info</h4><ul class="footer-links"><li><a href="#">Tentang</a></li><li><a href="#">Blog</a></li><li><a href="#">Karir</a></li><li><a href="#">Update</a></li></ul></div>
    <div class="footer-col"><h4>Kontak</h4><ul class="footer-links"><li><a href="#">WhatsApp</a></li><li><a href="#">Instagram</a></li><li><a href="#">Email</a></li><li><a href="#">Lokasi</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2025 ${t.name}.</span><span>Dibuat dengan ❤ WebsiteKu</span></div>
</div></footer>
</body></html>`;}

/* ============================================================ */
/* 10. PREMIUM                                                   */
/* ============================================================ */
function tmplPremium(t,base){
  var p=t.primary,s=t.secondary,a=t.accent;
  var mn=t.menu||[];while(mn.length<8)mn=mn.concat(mn);
  return `<!DOCTYPE html><html lang="id"><head><base href="${base}"><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${t.name}</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{font-family:'Inter',sans-serif;background:#0B0F1E;color:#C8C0B0;line-height:1.6}a{color:inherit;text-decoration:none}img{display:block;width:100%;object-fit:cover}
.cinzel{font-family:'Cinzel',serif}.garamond{font-family:'Cormorant Garamond',serif}
.nav{position:sticky;top:0;background:rgba(11,15,30,.97);backdrop-filter:blur(16px);border-bottom:1px solid ${p}18;z-index:100;padding:1.1rem 5%}
.nav-inner{max-width:1200px;margin:0 auto;display:flex;align-items:center;justify-content:space-between}
.nav-logo{height:30px;width:auto;object-fit:contain}
.nav-links{display:flex;gap:2rem;list-style:none}
.nav-links a{font-size:.75rem;font-weight:400;color:rgba(200,192,176,.5);letter-spacing:.1em;text-transform:uppercase;transition:color .2s}.nav-links a:hover{color:${p}}
.nav-cta{padding:.5rem 1.4rem;background:linear-gradient(135deg,${p},${s});color:#000;font-size:.75rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;transition:all .2s}.nav-cta:hover{opacity:.88}
.hero{padding:6rem 5% 5rem;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center;position:relative}
.hero::before{content:'';position:absolute;width:600px;height:600px;background:radial-gradient(circle,${s}08 0%,transparent 65%);top:-100px;right:-100px;pointer-events:none;border-radius:50%}
.hero-decor{display:flex;align-items:center;gap:.75rem;font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:${p};margin-bottom:1.5rem}
.hero-decor::before{content:'';display:block;width:35px;height:1px;background:linear-gradient(90deg,${p},${s})}
.hero h1{font-family:'Cinzel',serif;font-size:clamp(1.8rem,3.8vw,3.2rem);font-weight:400;line-height:1.2;margin-bottom:1.2rem;color:#fff;letter-spacing:.03em}
.hero h1 .gold{background:linear-gradient(135deg,${p},${s},${p});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero-sub{font-family:'Cormorant Garamond',serif;font-size:1.1rem;color:rgba(200,192,176,.65);line-height:1.8;margin-bottom:2.5rem;font-style:italic}
.hero-btns{display:flex;gap:1rem;flex-wrap:wrap;margin-bottom:2.5rem}
.btn-prem{padding:.9rem 2.25rem;background:linear-gradient(135deg,${p},${s});color:#000;font-size:.8rem;font-weight:600;letter-spacing:.08em;text-transform:uppercase;transition:all .2s}.btn-prem:hover{transform:translateY(-1px);box-shadow:0 8px 25px ${p}40}
.btn-prem-out{padding:.9rem 2.25rem;border:1px solid ${p}40;color:${p};font-size:.8rem;font-weight:400;letter-spacing:.08em;text-transform:uppercase;transition:all .2s}.btn-prem-out:hover{background:${p}10;border-color:${p}}
.trust-p{display:flex;align-items:center;gap:.75rem;font-size:.78rem;color:rgba(200,192,176,.45);letter-spacing:.06em}
.trust-p-av{display:flex}.trust-p-av span{width:28px;height:28px;background:${p}15;border:1px solid ${p}40;display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:500;color:${p};margin-left:-6px}.trust-p-av span:first-child{margin-left:0}
.hero-img-p{position:relative}.hero-img-p::before{content:'';position:absolute;inset:-10px;background:linear-gradient(135deg,${p}15,transparent,${s}10);pointer-events:none;z-index:1}
.hero-img-p img{width:100%;aspect-ratio:4/5;object-fit:cover}
.stats{background:#0E1220;border-top:1px solid ${p}15;border-bottom:1px solid ${p}15;padding:3rem 5%}
.stats-inner{max-width:1200px;margin:0 auto;display:grid;grid-template-columns:repeat(4,1fr);gap:0}
.stat-item{text-align:center;padding:1.5rem;border-right:1px solid ${p}10}.stat-item:last-child{border-right:none}
.stat-num{font-family:'Cinzel',serif;font-size:2.3rem;font-weight:400;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1}.stat-label{font-size:.7rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(200,192,176,.35);margin-top:.4rem}
.about{padding:5.5rem 5%;max-width:1200px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:5rem;align-items:center}
.about-tag{font-size:.68rem;letter-spacing:.2em;text-transform:uppercase;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.75rem;display:flex;align-items:center;gap:.6rem}
.about-tag::before{content:'';display:block;width:25px;height:1px;background:linear-gradient(90deg,${p},${s})}
.about h2{font-family:'Cinzel',serif;font-size:2rem;font-weight:400;letter-spacing:.03em;margin-bottom:1rem;line-height:1.25;color:#fff}
.about-desc{font-family:'Cormorant Garamond',serif;font-size:1rem;color:rgba(200,192,176,.6);line-height:1.8;margin-bottom:1.5rem;font-style:italic}
.about-checks{list-style:none;display:flex;flex-direction:column;gap:.6rem}
.about-checks li{display:flex;align-items:center;gap:.5rem;font-size:.87rem;color:rgba(200,192,176,.7)}
.ck{width:16px;height:16px;background:linear-gradient(135deg,${p},${s});display:flex;align-items:center;justify-content:center;font-size:.55rem;color:#000;flex-shrink:0}
.about-img{position:relative}.about-img::before{content:'';position:absolute;inset:-6px;border:1px solid ${p}15;pointer-events:none;z-index:1}
.about-img img{width:100%;aspect-ratio:4/3;object-fit:cover}
.products{padding:5.5rem 5%;background:#0E1220}.products-inner{max-width:1200px;margin:0 auto}
.sec-head{text-align:center;margin-bottom:4rem}.sec-head h2{font-family:'Cinzel',serif;font-size:2rem;font-weight:400;color:#fff;letter-spacing:.05em;margin-bottom:.5rem}.sec-head p{font-size:.8rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(200,192,176,.35)}
.prod-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1.5rem}
.prod-card{background:#111520;border:1px solid ${p}15;overflow:hidden;transition:all .25s}
.prod-card:hover{border-color:${p}50;transform:translateY(-4px);box-shadow:0 0 30px ${p}15}
.prod-img{aspect-ratio:4/3;overflow:hidden}.prod-img img{height:100%;object-fit:cover;transition:transform .4s;filter:brightness(.85)}.prod-card:hover .prod-img img{transform:scale(1.05);filter:brightness(1)}
.prod-body{padding:1.25rem}.prod-name{font-family:'Cormorant Garamond',serif;font-weight:400;font-size:1rem;margin-bottom:.35rem;color:#fff}
.prod-price{font-weight:400;font-size:.85rem;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.45rem}
.prod-meta{display:flex;align-items:center;gap:.4rem;font-size:.75rem;color:rgba(200,192,176,.4)}.prod-stars{color:${p}}
.prod-btn{display:block;text-align:center;margin-top:1rem;padding:.6rem;border:1px solid ${p}30;color:${p};font-size:.75rem;font-weight:500;letter-spacing:.08em;text-transform:uppercase;transition:all .2s}.prod-btn:hover{background:linear-gradient(135deg,${p},${s});color:#000;border-color:transparent}
.gallery{padding:5.5rem 5%;background:#090C18}.gallery-inner{max-width:1200px;margin:0 auto}
.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.85rem;margin-top:3.5rem}
.gal-item{overflow:hidden;aspect-ratio:4/3}.gal-item img{height:100%;object-fit:cover;filter:brightness(.8) saturate(.9);transition:all .4s}.gal-item:hover img{transform:scale(1.05);filter:brightness(1) saturate(1)}
.testimonials{padding:5.5rem 5%;background:#0E1220}.testi-inner{max-width:1200px;margin:0 auto}
.testi-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:4rem}
.testi-card{border:1px solid ${p}15;padding:2rem;background:#111520}
.testi-stars{background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1rem;font-size:.9rem}
.testi-text{font-family:'Cormorant Garamond',serif;font-size:1rem;color:rgba(200,192,176,.65);line-height:1.7;margin-bottom:1.5rem;font-style:italic}
.testi-author{display:flex;align-items:center;gap:.75rem}
.testi-av{width:40px;height:40px;background:linear-gradient(135deg,${p},${s});display:flex;align-items:center;justify-content:center;font-size:.78rem;font-weight:600;color:#000;flex-shrink:0}
.testi-name{font-size:.85rem;color:#fff;font-weight:500}.testi-role{font-size:.75rem;color:rgba(200,192,176,.35);letter-spacing:.05em}
.pricing{padding:5.5rem 5%;background:#090C18}.pricing-inner{max-width:1100px;margin:0 auto}
.pricing-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.5rem;margin-top:4rem}
.price-card{background:#0E1220;border:1px solid ${p}15;padding:2.5rem;position:relative}
.price-card.featured{border-color:${p}60;background:#111520}
.price-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:linear-gradient(135deg,${p},${s});color:#000;font-size:.68rem;font-weight:600;padding:.28rem .9rem;letter-spacing:.1em;text-transform:uppercase;white-space:nowrap}
.price-tier{font-family:'Cinzel',serif;font-size:.72rem;letter-spacing:.18em;text-transform:uppercase;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:.6rem}
.price-amt{font-family:'Cormorant Garamond',serif;font-size:2.8rem;font-weight:300;color:#fff;line-height:1;margin-bottom:.2rem}
.price-period{font-size:.8rem;color:rgba(200,192,176,.35);margin-bottom:1.2rem}
.price-div{height:1px;background:linear-gradient(90deg,${p}20,${s}15,transparent);margin:1.2rem 0}
.price-features{list-style:none;display:flex;flex-direction:column;gap:.65rem;margin-bottom:2rem}
.price-features li{display:flex;align-items:center;gap:.55rem;font-size:.85rem;color:rgba(200,192,176,.6)}
.price-features li::before{content:'◆';background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-size:.45rem;flex-shrink:0}
.price-btn{display:block;text-align:center;padding:.85rem;font-size:.78rem;font-weight:500;letter-spacing:.1em;text-transform:uppercase;transition:all .2s}
.price-btn-def{border:1px solid ${p}25;color:rgba(200,192,176,.45)}.price-btn-def:hover{border-color:${p};color:${p}}
.price-btn-feat{background:linear-gradient(135deg,${p},${s});color:#000}.price-btn-feat:hover{opacity:.88}
.faq-sec{padding:5.5rem 5%;background:#0B0F1E}.faq-inner{max-width:800px;margin:0 auto}
.faq-list{margin-top:3.5rem;display:flex;flex-direction:column;gap:.5rem}
details{background:#0E1220;border:1px solid ${p}15;overflow:hidden}
details[open]{border-color:${p}45;box-shadow:0 0 15px ${p}08}
summary{padding:1.25rem 1.5rem;cursor:pointer;font-weight:500;font-size:.9rem;color:rgba(200,192,176,.8);list-style:none;display:flex;justify-content:space-between;align-items:center;user-select:none;letter-spacing:.02em}
summary::-webkit-details-marker{display:none}
summary::after{content:'+';font-family:'Cinzel',serif;font-size:1rem;color:${p};flex-shrink:0}
details[open] summary::after{content:'−'}
.faq-answer{padding:0 1.5rem 1.25rem;font-size:.88rem;color:rgba(200,192,176,.45);line-height:1.8}
.cta-band{padding:5.5rem 5%;text-align:center;background:radial-gradient(ellipse at 50% 0%,${s}08 0%,transparent 60%);border-top:1px solid ${p}12;border-bottom:1px solid ${p}12}
.cta-band h2{font-family:'Cinzel',serif;font-size:2.3rem;font-weight:400;color:#fff;letter-spacing:.05em;margin-bottom:.75rem}
.cta-band p{font-family:'Cormorant Garamond',serif;font-size:1.05rem;color:rgba(200,192,176,.55);margin-bottom:2.5rem;max-width:480px;margin-left:auto;margin-right:auto;font-style:italic}
.cta-btn{display:inline-block;padding:1rem 3rem;background:linear-gradient(135deg,${p},${s});color:#000;font-size:.8rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;transition:all .2s}.cta-btn:hover{transform:translateY(-1px);box-shadow:0 8px 25px ${p}40}
footer{background:#07090F;border-top:1px solid ${p}10;padding:5rem 5% 2rem}
.footer-inner{max-width:1200px;margin:0 auto}
.footer-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:3rem;margin-bottom:3rem}
.footer-brand p{color:rgba(200,192,176,.3);font-size:.83rem;line-height:1.7;margin-top:.7rem;font-weight:300}
.footer-col h4{font-family:'Cinzel',serif;font-size:.68rem;letter-spacing:.18em;text-transform:uppercase;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-bottom:1.2rem}
.footer-links{list-style:none;display:flex;flex-direction:column;gap:.5rem}
.footer-links a{font-size:.83rem;color:rgba(200,192,176,.28);transition:color .2s}.footer-links a:hover{color:${p}}
.footer-bottom{border-top:1px solid ${p}08;padding-top:1.8rem;display:flex;justify-content:space-between;font-size:.75rem;color:rgba(200,192,176,.18);letter-spacing:.06em}
.f-brand-name{font-family:'Cinzel',serif;font-size:1rem;font-weight:400;background:linear-gradient(135deg,${p},${s});-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
@media(max-width:900px){.hero,.about{grid-template-columns:1fr;gap:3rem}.stats-inner,.prod-grid{grid-template-columns:repeat(2,1fr)}.testi-grid,.pricing-grid{grid-template-columns:1fr}.footer-grid{grid-template-columns:1fr 1fr}.gallery-grid{grid-template-columns:repeat(2,1fr)}.stat-item{border-right:none;border-bottom:1px solid ${p}10}}
</style></head>
<body>
<nav class="nav"><div class="nav-inner">
  <img src="assets/logo-placeholder.png" class="nav-logo" alt="logo">
  <ul class="nav-links"><li><a href="#">HOME</a></li><li><a href="#">TENTANG</a></li><li><a href="#">LAYANAN</a></li><li><a href="#">GALERI</a></li><li><a href="#">KONTAK</a></li></ul>
  <a href="#" class="nav-cta">KONSULTASI</a>
</div></nav>
<section class="hero">
  <div style="position:relative">
    <div class="hero-decor">${t.catName}</div>
    <h1><span class="gold">${t.headline}</span></h1>
    <p class="hero-sub">${t.sub}</p>
    <div class="hero-btns"><a href="#" class="btn-prem">Mulai Sekarang</a><a href="#" class="btn-prem-out">Pelajari Lebih</a></div>
    <div class="trust-p"><div class="trust-p-av"><span>BS</span><span>SD</span><span>AF</span></div><span>DIPERCAYA 500+ KLIEN EKSKLUSIF</span></div>
  </div>
  <div class="hero-img-p"><img src="assets/foto-bisnis-anda.png" alt="bisnis"></div>
</section>
<section class="stats"><div class="stats-inner">
  <div class="stat-item"><div class="stat-num">500+</div><div class="stat-label">Klien Eksklusif</div></div>
  <div class="stat-item"><div class="stat-num">50+</div><div class="stat-label">Layanan Premium</div></div>
  <div class="stat-item"><div class="stat-num">10 Thn</div><div class="stat-label">Keunggulan</div></div>
  <div class="stat-item"><div class="stat-num">5★</div><div class="stat-label">Rating</div></div>
</div></section>
<section class="about">
  <div>
    <div class="about-tag">Tentang Kami</div>
    <h2>${t.name}</h2>
    <p class="about-desc">${t.description||t.sub}</p>
    <ul class="about-checks">${mn.slice(0,6).map(m=>`<li><span class="ck">◆</span>${m}</li>`).join('')}</ul>
  </div>
  <div class="about-img"><img src="assets/foto-bisnis-anda.png" alt="tentang"></div>
</section>
<section class="products"><div class="products-inner">
  <div class="sec-head"><h2>Layanan Unggulan</h2><p>Excellence curated for the discerning client</p></div>
  <div class="prod-grid">${mn.slice(0,4).map((name,i)=>`
    <div class="prod-card">
      <div class="prod-img"><img src="${fImg(i)}" alt="${name}"></div>
      <div class="prod-body">
        <div class="prod-name">${name}</div>
        <div class="prod-price">${fPrice(t.cat,i)}</div>
        <div class="prod-meta"><span class="prod-stars">★★★★★</span><span>${fStar(i)}</span><span>·</span><span>${fBuy(i)} klien</span></div>
        <a href="#" class="prod-btn">Pesan</a>
      </div>
    </div>`).join('')}
  </div>
</div></section>
<section class="gallery"><div class="gallery-inner">
  <div class="sec-head"><h2>Galeri</h2><p>A curated collection of our finest work</p></div>
  <div class="gallery-grid">${[0,1,2,3,4,5].map(i=>`<div class="gal-item"><img src="${fImg(i)}" alt="galeri ${i+1}"></div>`).join('')}</div>
</div></section>
<section class="testimonials"><div class="testi-inner">
  <div class="sec-head"><h2>Kata Klien</h2><p>Pengalaman yang berbicara sendiri</p></div>
  <div class="testi-grid">${testiHTML()}</div>
</div></section>
<section class="pricing"><div class="pricing-inner">
  <div class="sec-head"><h2>Paket Eksklusif</h2><p>Investasi terbaik untuk bisnis Anda</p></div>
  <div class="pricing-grid">
    <div class="price-card"><div class="price-tier">Klasik</div><div class="price-amt">Rp 199<span style="font-size:1.2rem;font-weight:300">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Hingga 10 Produk</li><li>Galeri 5 Foto</li><li>Formulir Kontak</li><li>Mobile Friendly</li><li>Support 30 Hari</li></ul><a href="#" class="price-btn price-btn-def">Mulai</a></div>
    <div class="price-card featured"><div class="price-badge">PALING POPULER</div><div class="price-tier">Premium</div><div class="price-amt">Rp 499<span style="font-size:1.2rem;font-weight:300">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Produk Tidak Terbatas</li><li>Galeri 20 Foto</li><li>Pemesanan Online</li><li>SEO Optimization</li><li>Support 24/7</li><li>Analitik Website</li></ul><a href="#" class="price-btn price-btn-feat">Pilih Premium</a></div>
    <div class="price-card"><div class="price-tier">Eksklusif</div><div class="price-amt">Rp 999<span style="font-size:1.2rem;font-weight:300">.000</span></div><div class="price-period">per bulan</div><div class="price-div"></div><ul class="price-features"><li>Semua Fitur Premium</li><li>Domain Custom</li><li>Integrasi Payment</li><li>Multi-bahasa</li><li>API Access</li><li>Manajer Pribadi</li></ul><a href="#" class="price-btn price-btn-def">Hubungi Kami</a></div>
  </div>
</div></section>
<section class="faq-sec"><div class="faq-inner">
  <div class="sec-head"><h2>Pertanyaan Umum</h2><p>Kami siap memberikan jawaban terbaik</p></div>
  <div class="faq-list">${faqHTML()}</div>
</div></section>
<section class="cta-band">
  <h2>Mulai Pengalaman Premium</h2>
  <p>Hubungi tim kami untuk konsultasi eksklusif dan penawaran yang disesuaikan khusus untuk Anda.</p>
  <a href="#" class="cta-btn">HUBUNGI KAMI SEKARANG</a>
</section>
<footer><div class="footer-inner">
  <div class="footer-grid">
    <div class="footer-brand"><div class="f-brand-name">${t.name}</div><p>${(t.sub||'').substring(0,100)}</p></div>
    <div class="footer-col"><h4>Layanan</h4><ul class="footer-links">${mn.slice(0,4).map(m=>`<li><a href="#">${m}</a></li>`).join('')}</ul></div>
    <div class="footer-col"><h4>Informasi</h4><ul class="footer-links"><li><a href="#">Tentang Kami</a></li><li><a href="#">Portfolio</a></li><li><a href="#">Promo</a></li><li><a href="#">Karir</a></li></ul></div>
    <div class="footer-col"><h4>Kontak</h4><ul class="footer-links"><li><a href="#">WhatsApp</a></li><li><a href="#">Instagram</a></li><li><a href="#">Email</a></li><li><a href="#">Kantor</a></li></ul></div>
  </div>
  <div class="footer-bottom"><span>© 2025 ${t.name}. ALL RIGHTS RESERVED.</span><span>EXCELLENCE IN EVERY DETAIL</span></div>
</div></footer>
</body></html>`;}


/* ============================================================ */
/* MINI CARD PREVIEW RENDERER                                    */
/* ============================================================ */
function getCardPreviewStyle(tpl){
  var styles={
    minimalist:{bg:'#FAFAFA',navBg:'#fff',navBorder:'1px solid #E5E5E5',navColor:'#333',heroGrad:'linear-gradient(135deg,'+tpl.secondary+' 0%,'+tpl.primary+'22 100%)',h1Color:'#1A1A1A',btnBg:tpl.primary,btnColor:'#fff',font:'DM Sans'},
    corporate:{bg:tpl.primary,navBg:tpl.primary,navBorder:'none',navColor:'#fff',heroGrad:'linear-gradient(135deg,'+tpl.primary+','+tpl.secondary+')',h1Color:'#fff',btnBg:'#fff',btnColor:tpl.primary,font:'Inter'},
    luxury:{bg:'#0A0A0A',navBg:'rgba(10,10,10,.95)',navBorder:'1px solid '+tpl.secondary+'33',navColor:tpl.secondary,heroGrad:'radial-gradient(ellipse at 50% 30%,'+tpl.primary+'22 0%,transparent 65%)',h1Color:'#fff',btnBg:tpl.secondary,btnColor:'#000',font:'serif'},
    dark:{bg:'#0D0D0D',navBg:'#111',navBorder:'1px solid rgba(255,255,255,.08)',navColor:'#888',heroGrad:'linear-gradient(160deg,#0D0D0D 50%,'+tpl.primary+'11 100%)',h1Color:'#fff',btnBg:tpl.primary,btnColor:'#fff',font:'Space Grotesk'},
    glassmorphism:{bg:'linear-gradient(135deg,#0F0520,#1A0635,#0E1B3D)',navBg:'rgba(10,5,20,.6)',navBorder:'1px solid rgba(255,255,255,.08)',navColor:'rgba(255,255,255,.7)',heroGrad:'radial-gradient(ellipse at 50%,-10%,'+tpl.primary+'33 0%,'+tpl.secondary+'11 40%,transparent)',h1Color:'#fff',btnBg:'linear-gradient(135deg,'+tpl.primary+','+tpl.secondary+')',btnColor:'#fff',font:'Plus Jakarta Sans'},
    neon:{bg:'#030305',navBg:'rgba(3,3,5,.9)',navBorder:'1px solid '+tpl.primary+'44',navColor:tpl.primary,heroGrad:'#030305',h1Color:tpl.primary,btnBg:'transparent',btnColor:tpl.primary,font:'Rajdhani'},
    startup:{bg:'#050510',navBg:'rgba(5,5,16,.85)',navBorder:'1px solid rgba(255,255,255,.07)',navColor:'#8892A4',heroGrad:'radial-gradient(ellipse at 50% -10%,'+tpl.primary+'33 0%,transparent 70%)',h1Color:'#fff',btnBg:'linear-gradient(135deg,'+tpl.primary+','+tpl.secondary+')',btnColor:'#fff',font:'Inter'},
    elegant:{bg:'#FAFAF6',navBg:'#fff',navBorder:'1px solid #EDE8E3',navColor:'#888',heroGrad:'linear-gradient(135deg,'+tpl.secondary+','+tpl.primary+'22)',h1Color:'#2A1E1A',btnBg:tpl.primary,btnColor:'#fff',font:'Libre Baskerville'},
    futuristic:{bg:'#050910',navBg:'rgba(5,9,16,.9)',navBorder:'1px solid '+tpl.accent+'22',navColor:tpl.accent,heroGrad:'#050910',h1Color:'#fff',btnBg:'transparent',btnColor:tpl.accent,font:'Exo 2'},
    premium:{bg:'#0B0F1E',navBg:'rgba(11,15,30,.95)',navBorder:'1px solid '+tpl.primary+'22',navColor:tpl.primary,heroGrad:'radial-gradient(ellipse at 50% 30%,'+tpl.secondary+'18 0%,transparent 70%)',h1Color:'#fff',btnBg:'linear-gradient(135deg,'+tpl.primary+',#FFF3B0)',btnColor:'#000',font:'Cinzel'},
  };
  return styles[tpl.style]||styles.startup;
}
