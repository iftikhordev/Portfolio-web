import { PortfolioState } from '../types/portfolio';

export const initialPortfolioState: PortfolioState = {
  profile: {
    name: "Iftixor",
    title: "Full-Stack Dasturchi & Muhandis",
    roles: [
      "Full-Stack Dasturchi",
      "React & Node.js Mutaxassisi",
      "Next.js & TypeScript Muhandisi",
      "Cloud & AI Arxitektori"
    ],
    bio: "Zamonaviy, yuqori yuklanishga bardoshli veb-ilovalar, qulay foydalanuvchi interfeyslari (UI/UX) va sun'iy intellekt integratsiyalarini yaratuvchi tajribali dasturchi. Maqsadim — murakkab biznes g'oyalarni nafis, tezkor va ishonchli raqamli mahsulotlarga aylantirish.",
    aboutDetails: [
      "3 yildan ortiq professional dasturlash tajribasi (Web, SaaS, REST/GraphQL va Microservices)",
      "Mukammal UI/UX va toza kod (Clean Code, SOLID, TDD) tamoyillariga sodiqlik",
      "Real-vaqt tizimlari (WebSockets, Redis, PostgreSQL) bilan chuqur amaliyot",
      "Doimiy izlanish: Generativ AI, Cloud infratuzilma va ilg'or veb texnologiyalar"
    ],
    email: "iftixort5@gmail.com",
    telegram: "https://t.me/iftixor_dev",
    github: "https://github.com/iftixor",
    linkedin: "https://linkedin.com/in/iftixor",
    phone: "+998 (90) 123-45-67",
    location: "Toshkent, O'zbekiston",
    yearsOfExperience: 3,
    completedProjects: 28,
    happyClients: 19,
    availability: "available"
  },
  skills: [
    {
      name: "React & Next.js",
      category: "frontend",
      level: 95,
      badge: "Ekspert",
      icon: "Atom",
      projectsCount: 22
    },
    {
      name: "TypeScript & JavaScript",
      category: "frontend",
      level: 92,
      badge: "Ekspert",
      icon: "FileCode",
      projectsCount: 26
    },
    {
      name: "Next.js & SSR / Jamstack",
      category: "frontend",
      level: 90,
      badge: "Ekspert",
      icon: "Zap",
      projectsCount: 18
    },
    {
      name: "Tailwind CSS & Modern UI",
      category: "frontend",
      level: 96,
      badge: "Ekspert",
      icon: "Palette",
      projectsCount: 25
    },
    {
      name: "Node.js & Express / NestJS",
      category: "backend",
      level: 90,
      badge: "Ekspert",
      icon: "Server",
      projectsCount: 18
    },
    {
      name: "PostgreSQL & Prisma / Drizzle",
      category: "database",
      level: 87,
      badge: "Ilg'or",
      icon: "Database",
      projectsCount: 16
    },
    {
      name: "Redis & REST / GraphQL APIs",
      category: "backend",
      level: 85,
      badge: "Ilg'or",
      icon: "Layers",
      projectsCount: 14
    },
    {
      name: "Docker & CI/CD Cloud",
      category: "tools",
      level: 82,
      badge: "Ilg'or",
      icon: "Cpu",
      projectsCount: 15
    },
    {
      name: "Git, Linux & DevOps",
      category: "tools",
      level: 90,
      badge: "Ekspert",
      icon: "Terminal",
      projectsCount: 28
    },
    {
      name: "AI SDK & LLM Integratsiyalari",
      category: "architecture",
      level: 84,
      badge: "Ilg'or",
      icon: "Sparkles",
      projectsCount: 9
    }
  ],
  projects: [
    {
      id: "oasis-ai",
      title: "Oasis AI - Aqlli E-Commerce va Tavsiya Tizimi",
      category: "fullstack",
      categoryLabel: "Full-Stack & AI",
      shortDesc: "Katta hajmdagi onlayn do'konlar uchun sun'iy intellektga asoslangan shaxsiylashtirilgan mahsulot tavsiya va qidiruv tizimi.",
      fullDesc: "Oasis AI xaridorlarning qiziqishlari, xarid tarixi va ko'rish trendlarini chuqur tahlil qilib, 40% ko'proq konversiya ta'minlovchi neyron tavsiya tizimini yaratadi. Veb-interfeys zamonaviy Next.js da tuzilgan, orqa fon esa yuqori tezlikdagi FastAPI va PostgreSQL vektor qidiruvida ishlaydi.",
      tags: ["Next.js", "TypeScript", "Python AI", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://example.com/oasis-ai",
      githubUrl: "https://github.com/iftixor/oasis-ai",
      featured: true,
      metrics: { label: "Konversiya o'sishi", value: "+38.4%" },
      features: [
        "Vektorli semantik qidiruv va mahsulot o'xshashlik hisobi",
        "Real-vaqt tahlili va interaktiv sotuv paneli",
        "Payme, Click va Stripe to'lov tizimlari bilan to'liq integratsiya",
        "Mikro-frontend va 99.9% uptime serverless arxitektura"
      ],
      gradientTheme: "from-indigo-600 via-purple-600 to-pink-500",
      accentColor: "#6366f1"
    },
    {
      id: "apex-analytics",
      title: "Apex Analytics - FinTech Real-Vaqt Tahlil Platformasi",
      category: "frontend",
      categoryLabel: "FinTech & Real-Time",
      shortDesc: "Real-vaqtdagi kripto va qimmatli qog'ozlar oqimini interaktiv diagrammalar orqali chuqur tahlil qiluvchi veb platforma.",
      fullDesc: "Yuqori chastotali moliyaviy ma'lumotlarni kechikishlarsiz vizualizatsiya qiladi. Foydalanuvchi portfelni o'lchovli ko'rishi, xavflarni vizual baholashi va chuqur texnik tahlil o'tkazishi mumkin.",
      tags: ["React", "TypeScript", "WebSockets", "Tailwind CSS", "Recharts"],
      liveUrl: "https://example.com/apex-analytics",
      githubUrl: "https://github.com/iftixor/apex-analytics",
      featured: true,
      metrics: { label: "Kechikish (latency)", value: "< 25ms" },
      features: [
        "Real-vaqt WebSocket ma'lumotlar oqimi",
        "Moslashuvchan interaktiv indikatorlar va texnik tahlil",
        "Xalqaro birjalar bilan to'g'ridan-to'g'ri integratsiya",
        "Eksport va avtomatlashtirilgan PDF hisobot generatori"
      ],
      gradientTheme: "from-cyan-600 via-blue-600 to-indigo-700",
      accentColor: "#06b6d4"
    },
    {
      id: "devflow-saas",
      title: "DevFlow - Dasturchilar uchun CI/CD & Task Paneli",
      category: "fullstack",
      categoryLabel: "Full-Stack SaaS",
      shortDesc: "Dasturiy loyihalarni boshqarish, build jarayonlarini kuzatish va jamoaviy kod integratsiyasini tezlashtiruvchi zamonaviy SaaS.",
      fullDesc: "Dasturchilar va muhandislik jamoalari uchun qulay, tejamkor va ultra-tez ishlovchi platforma. GitHub/GitLab webhooklari, avtomatik testlar statusi va jamoaviy sprint boshqaruvi bir darchada jamlangan.",
      tags: ["React 19", "Node.js", "Express", "Docker", "Redis", "PostgreSQL"],
      liveUrl: "https://example.com/devflow",
      githubUrl: "https://github.com/iftixor/devflow-saas",
      featured: true,
      metrics: { label: "Deployment tezligi", value: "3x tezroq" },
      features: [
        "Webhook orqali avtomatlashgan test va build xabarnomalari",
        "Jamoa a'zolari uchun moslashuvchan rollar tizimi (RBAC)",
        "Telegram va Discord botlari orqali tezkor signal berish",
        "Docker konteynerlar resurs sarfini jonli monitoring qilish"
      ],
      gradientTheme: "from-emerald-600 via-teal-600 to-cyan-700",
      accentColor: "#10b981"
    },
    {
      id: "milliy-edu",
      title: "Milliy Edu - Interaktiv Ta'lim Platformasi",
      category: "fullstack",
      categoryLabel: "EdTech & Web",
      shortDesc: "O'zbek tilidagi amaliy dasturlash, dizayn va IT kurslari uchun qadam-baqadam interaktiv ta'lim portali.",
      fullDesc: "Talabalarga brauzer ichida kod yozish va darhol natijasini tekshirish imkonini beruvchi interaktiv kod muharriri, video darsliklar va sun'iy intellektli repetitor yordamchisi bilan jihozlangan.",
      tags: ["Next.js", "Monaco Editor", "PostgreSQL", "Socket.io", "AWS S3"],
      liveUrl: "https://example.com/milliy-edu",
      githubUrl: "https://github.com/iftixor/milliy-edu-platform",
      featured: false,
      metrics: { label: "Faol o'quvchilar", value: "12,000+" },
      features: [
        "Brauzerda ishlovchi jonli kod muharriri",
        "Gamifikatsiya: Ballar, reytinglar va sertifikatlar",
        "Katta hajmdagi video oqim optimizatsiyasi (HLS streaming)",
        "Ustozlar uchun dars va test yaratish qulay studiyasi"
      ],
      gradientTheme: "from-amber-500 via-orange-600 to-red-600",
      accentColor: "#f59e0b"
    },
    {
      id: "nexus-studio",
      title: "Nexus Studio - Zamonaviy Raqamli Mahsulotlar & UI",
      category: "frontend",
      categoryLabel: "Design System & Web",
      shortDesc: "Kompaniyalar va raqamli brendlar uchun zamonaviy korporativ portallar va unutilmas interfeyslar studiyasi.",
      fullDesc: "Biznes brendlari uchun tayyorlangan konversiyaga yo'naltirilgan zamonaviy veb tajribasi. Har bir pikseli qulay, responsiv va barcha qurilmalarda tezkor ishlaydi.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com/nexus-studio",
      githubUrl: "https://github.com/iftixor/nexus-studio",
      featured: false,
      metrics: { label: "Lighthouse unumdorlik", value: "100/100" },
      features: [
        "Silliq mikromotsiyalar va estetik tipografiya",
        "Barcha ekran o'lchamlari uchun to'liq moslashuvchanlik",
        "SEO optimallashtirilgan semantik veb tuzilma",
        "Tezkor yuklanish va minimal bundle hajmi"
      ],
      gradientTheme: "from-violet-600 via-purple-700 to-indigo-900",
      accentColor: "#8b5cf6"
    },
    {
      id: "cloudpulse-monitor",
      title: "CloudPulse - Serverlar va API Monitoring Ekotizimi",
      category: "fullstack",
      categoryLabel: "DevOps & Full-Stack",
      shortDesc: "Veb-saytlar va mikroxizmatlarning mavjudligi (uptime), kechikishi (latency) va xatoliklarini kuzatuvchi monitoring vositasi.",
      fullDesc: "Har soniyada xizmatlarning sog'lomligini tekshirib, xatolik ro'y berganda Telegram va SMS orqali zudlik bilan muhandislarni ogohlantiruvchi ochiq kodli va tezkor panel.",
      tags: ["Go", "Node.js", "TimescaleDB", "React", "Tailwind CSS"],
      liveUrl: "https://example.com/cloudpulse",
      githubUrl: "https://github.com/iftixor/cloudpulse-monitor",
      featured: false,
      metrics: { label: "Tekshirish tezligi", value: "50ms interval" },
      features: [
        "Global geografik nuqtalardan ping va HTTP tekshiruvi",
        "Inqirozli xatoliklarda Telegram va avtomatik ogohlantirish",
        "Ommaviy status sahifalari (Status page)",
        "Oylik va haftalik SLA hisoboti"
      ],
      gradientTheme: "from-rose-600 via-red-600 to-orange-700",
      accentColor: "#f43f5e"
    }
  ],
  experiences: [
    {
      id: "exp-1",
      period: "2024 — Hozirgacha",
      role: "Senior Full-Stack Muhandis",
      company: "Apex Tech Solutions",
      location: "Toshkent / Masofaviy",
      type: "To'liq stavka",
      achievements: [
        "Kompaniyaning asosiy SaaS mahsulotida foydalanuvchilar oqimini 45% ga oshirishga erishildi",
        "React va Node.js mikroxizmatlar arxitekturasini noldan qayta loyihalab, server sarfini 30% tejash amalga oshirildi",
        "Yuqori yuklanishga bardoshli real-vaqt mijozlar paneli yaratilib, foydalanuvchilar soni 5 barobarga o'sdi"
      ],
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "AWS", "Redis"]
    },
    {
      id: "exp-2",
      period: "2022 — 2024",
      role: "Frontend Dasturchi & UI/UX Specialist",
      company: "InnoSoft Digital",
      location: "Toshkent",
      type: "To'liq stavka",
      achievements: [
        "15 dan ortiq murakkab veb va korporativ portallarni belgilangan muddatdan oldin topshirdi",
        "Lighthouse unumdorlik ballarini barcha loyihalarda 95+ ga ko'tardi",
        "Kompaniya ichki UI komponentlar kutubxonasini (Design System) yaratdi"
      ],
      technologies: ["TypeScript", "React", "Tailwind CSS", "Redux Toolkit", "REST APIs", "Jest"]
    },
    {
      id: "exp-3",
      period: "2021 — 2022",
      role: "Junior Web Dasturchi",
      company: "NextGen Media",
      location: "Toshkent",
      type: "Gibrid",
      achievements: [
        "Dinamik veb-saytlar va CRM tizimlari uchun interfeyslarni ishlab chiqdi",
        "Rest API lar bilan ishlash va ma'lumotlar bazasi so'rovlarini optimallashtirishni o'rgandi"
      ],
      technologies: ["JavaScript", "HTML5/CSS3", "Node.js", "Express", "Git", "Figma"]
    }
  ],
  testimonials: [
    {
      id: "test-1",
      name: "Akmal Rahimov",
      role: "Bosh Texnik Direktor (CTO)",
      company: "FinTech Hub",
      feedback: "Iftixor bilan ishlash haqiqiy rohat! U nafaqat topshiriqni a'lo darajada bajaradi, balki mahsulot arxitekturasi va foydalanuvchi qulayligi bo'yicha juda qimmatli takliflar beradi. Yaratilgan platforma juda tez va ishonchli ishlamoqda.",
      rating: 5,
      avatarColor: "bg-indigo-600"
    },
    {
      id: "test-2",
      name: "Elena Karimova",
      role: "Mahsulot Menejeri (Product Manager)",
      company: "Smart Commerce",
      feedback: "Bizga juda qisqa muddatda yuqori yuklanishga chidamli do'kon platformasi kerak edi. Iftixor loyihani kutilganidan ancha tez va sifatli yakunlab berdi. Kod toza, tushunarli va hujjatlashtirilgan.",
      rating: 5,
      avatarColor: "bg-emerald-600"
    },
    {
      id: "test-3",
      name: "Sardorbek Mirzayev",
      role: "Ta'sischi & Bosh Direktor",
      company: "Creative Studio X",
      feedback: "Biznesimiz uchun zamonaviy, unutilmas va yuqori tezlikda ishlovchi portfolio kerak edi. Natija barcha kutganimizdan a'lo bo'ldi — mijozlarimiz saytimizni ko'rib qoyil qolmoqda!",
      rating: 5,
      avatarColor: "bg-amber-600"
    }
  ]
};
