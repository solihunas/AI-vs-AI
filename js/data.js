/* ============================================================
   WebsiteKu — 5 Premium Showcase Templates
   ============================================================ */

const WA_NUMBER = '6281234567890';

const CATEGORIES = [
  { id: 1, name: 'Restoran & Kuliner',     icon: '🍽️', slug: 'restoran' },
  { id: 2, name: 'Property & Konstruksi',  icon: '🏠', slug: 'property' },
  { id: 3, name: 'Kesehatan & Kecantikan', icon: '💊', slug: 'kesehatan' },
  { id: 4, name: 'Digital & Teknologi',    icon: '💻', slug: 'digital' },
  { id: 5, name: 'UMKM & Bisnis Umum',     icon: '🛍️', slug: 'umkm' },
];

const TEMPLATES = [
  {
    id: 'gastro', cat: 1, catName: 'Restoran & Kuliner',
    name: 'Noir Gastro',
    style: 'gastro',
    primary: '#C4A35A', secondary: '#1A1208', accent: '#E8D5A3',
    description: 'Fine dining bintang lima dengan estetika dark luxury. Gold accents, Cormorant Garamond serif, dan atmosphere mewah yang memukau. Ideal untuk restoran premium, rooftop bar, dan private dining.',
    tags: ['restoran', 'fine dining', 'luxury', 'premium', 'dark', 'gold', 'mewah'],
    headline: 'Di Sini, Makan Malam Bertransformasi Menjadi Seni',
    sub: 'Pengalaman kuliner eksklusif dengan bahan finest ingredient dan chef bertaraf internasional.',
    menu: ['Wagyu A5 Tataki', 'Lobster Thermidor', 'Foie Gras Poêlé', 'Truffle Risotto'],
  },
  {
    id: 'aether', cat: 2, catName: 'Property & Konstruksi',
    name: 'Aether Living',
    style: 'aether',
    primary: '#C9A87C', secondary: '#1A1D26', accent: '#5B7FA6',
    description: 'Properti mewah dengan desain arsitektural sophisticated. Champagne tones, Playfair Display, dan grid layout yang bersih. Untuk developer premium, luxury apartment, dan villa eksklusif.',
    tags: ['properti', 'luxury', 'apartemen', 'villa', 'premium', 'real estate', 'mewah'],
    headline: 'Ruang Hidup yang Mendefinisikan Ulang Kemewahan',
    sub: 'Setiap sudut dirancang dengan presisi arsitektural untuk mereka yang tidak berkompromi dalam kualitas.',
    menu: ['Penthouse Suite', 'Garden Villa', 'Sky Residence', 'Duplex Tower'],
  },
  {
    id: 'lumina', cat: 3, catName: 'Kesehatan & Kecantikan',
    name: 'Lumina Clinic',
    style: 'lumina',
    primary: '#00C5D7', secondary: '#8055C0', accent: '#E0F9FF',
    description: 'Klinik kecantikan premium dengan glassmorphism modern dan deep blue gradient. Profesionalisme tinggi, teknologi medis terkini, dan estetika yang mewah.',
    tags: ['klinik', 'kecantikan', 'medis', 'premium', 'modern', 'spa', 'estetika'],
    headline: 'Di Mana Ilmu Pengetahuan Bertemu Keindahan',
    sub: 'Perawatan estetika tingkat lanjut yang aman dan efektif — ditangani dokter spesialis bersertifikasi nasional.',
    menu: ['Laser Premium', 'Filler & Botox', 'Skin Brightening', 'IV Drip Therapy'],
  },
  {
    id: 'nexus', cat: 4, catName: 'Digital & Teknologi',
    name: 'Nexus Digital',
    style: 'nexus',
    primary: '#22D3EE', secondary: '#7C3AED', accent: '#F0ABFC',
    description: 'Agensi teknologi futuristik dengan estetika cyber premium. Grid background, cyan neon glow, Space Grotesk typography. Ideal untuk software house, AI startup, dan digital consultant.',
    tags: ['teknologi', 'digital', 'startup', 'AI', 'software', 'cyber', 'agensi'],
    headline: 'Kami Membangun Masa Depan Digital Anda',
    sub: 'Dari product design hingga AI engineering — solusi end-to-end untuk bisnis yang ingin mendominasi era digital.',
    menu: ['Web & App Dev', 'AI Solutions', 'Cloud Architecture', 'Product Design'],
  },
  {
    id: 'zenith', cat: 5, catName: 'UMKM & Bisnis Umum',
    name: 'Zenith Business',
    style: 'zenith',
    primary: '#8B5CF6', secondary: '#EC4899', accent: '#FCD34D',
    description: 'Website bisnis premium dengan editorial style yang bold. Syne typography, violet/pink gradient, dan layout konversi tinggi. Untuk konsultan, creative agency, dan bisnis profesional.',
    tags: ['bisnis', 'konsultan', 'agency', 'profesional', 'modern', 'branding', 'UMKM'],
    headline: 'Bisnis Anda Layak Tampil di Level Tertinggi',
    sub: 'Platform digital yang memposisikan brand Anda sebagai pemimpin industri — konversi tinggi dan kesan premium.',
    menu: ['Brand Strategy', 'Digital Marketing', 'Business Consulting', 'Growth Hacking'],
  },
];
