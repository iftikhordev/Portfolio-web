import React, { useState } from 'react';
import { soundFx } from '../../services/soundFx';
import { 
  ArrowRight, 
  ExternalLink, 
  Github, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  Search
} from 'lucide-react';

export interface CaseStudy {
  id: string;
  title: string;
  category: 'all' | 'fullstack' | 'fintech' | 'saas' | 'ai';
  categoryLabel: string;
  shortDesc: string;
  client: string;
  challenge: string;
  solution: string;
  impactMetric: { label: string; value: string };
  tags: string[];
  gradientTheme: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface MockupWorkSectionProps {
  lang: 'en' | 'uz';
  onSelectCaseStudy: (study: CaseStudy) => void;
}

export const MockupWorkSection: React.FC<MockupWorkSectionProps> = ({
  lang,
  onSelectCaseStudy
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const caseStudies: CaseStudy[] = [
    {
      id: 'oasis-ai',
      title: lang === 'en' ? "Oasis AI — Neural E-Commerce Engine" : "Oasis AI — Aqlli E-Commerce Tavsiya Tizimi",
      category: 'ai',
      categoryLabel: lang === 'en' ? "AI & Full-Stack" : "AI & Full-Stack",
      shortDesc: lang === 'en'
        ? "Personalized recommendation and semantic vector search platform driving 38% higher conversion for high-volume retailers."
        : "Katta hajmdagi onlayn do'konlar uchun sun'iy intellektga asoslangan shaxsiylashtirilgan mahsulot tavsiya va qidiruv tizimi.",
      client: "Global Retailers Network",
      challenge: lang === 'en'
        ? "Traditional keyword search was failing to convert intent into checkouts, causing high cart abandonment and lost revenue."
        : "An'anaviy kalit so'z qidiruvi xaridorlarning haqiqiy niyatini anglay olmasdan yuqori savatcha tashlab ketilishiga olib kelayotgan edi.",
      solution: lang === 'en'
        ? "Architected a hybrid Next.js 15 frontend backed by a high-concurrency vector embedding pipeline in PostgreSQL and Python."
        : "PostgreSQL vektor qidiruvi va Next.js 15 mikro-frontend arxitekturasi orqali semantik tavsiya tizimi joriy qilindi.",
      impactMetric: { label: lang === 'en' ? "Conversion Growth" : "Konversiya o'sishi", value: "+38.4%" },
      tags: ["Next.js", "Python AI", "PostgreSQL", "Tailwind CSS", "Vector Search"],
      gradientTheme: "from-amber-600/40 via-yellow-600/20 to-indigo-950",
      liveUrl: "https://example.com/oasis-ai",
      githubUrl: "https://github.com/iftixor/oasis-ai"
    },
    {
      id: 'apex-analytics',
      title: lang === 'en' ? "Apex Analytics — FinTech Real-Time Terminal" : "Apex Analytics — FinTech Real-Vaqt Tahlil Platformasi",
      category: 'fintech',
      categoryLabel: lang === 'en' ? "FinTech & Data" : "FinTech & Real-Time",
      shortDesc: lang === 'en'
        ? "High-frequency streaming terminal visualizing multi-asset crypto and equities data with sub-25 millisecond rendering latency."
        : "Real-vaqtdagi kripto va qimmatli qog'ozlar oqimini 25ms dan kam kechikish bilan tahlil qiluvchi interaktiv veb terminal.",
      client: "Apex Capital Holdings",
      challenge: lang === 'en'
        ? "Traders needed millisecond-level responsiveness without browser memory leaks or frame drops during volatile market spikes."
        : "Birja narxlari keskin o'zgarganda brauzer qotmasdan real-vaqt ma'lumotlarini kechikishlarsiz chizib berishi talab qilinardi.",
      solution: lang === 'en'
        ? "Engineered a high-performance WebSocket client with typed binary protocol and Canvas/SVG chart pipelines in React and TypeScript."
        : "React va TypeScript yordamida optimallashtirilgan WebSocket binar protokoli va silliq grafik renderlash tizimi qurildi.",
      impactMetric: { label: lang === 'en' ? "Streaming Latency" : "Ma'lumot uzatish tezligi", value: "< 25ms" },
      tags: ["React 19", "WebSockets", "TypeScript", "Chart Engine", "Tailwind"],
      gradientTheme: "from-blue-600/40 via-cyan-600/20 to-slate-950",
      liveUrl: "https://example.com/apex-analytics",
      githubUrl: "https://github.com/iftixor/apex-analytics"
    },
    {
      id: 'devflow-saas',
      title: lang === 'en' ? "DevFlow — Cloud Pipeline Orchestrator" : "DevFlow — Dasturchilar uchun CI/CD & Task Paneli",
      category: 'saas',
      categoryLabel: lang === 'en' ? "Full-Stack SaaS" : "Full-Stack SaaS",
      shortDesc: lang === 'en'
        ? "Enterprise software delivery console uniting automated webhook triggers, sprint boards, and Docker container observability."
        : "Dasturiy loyihalarni boshqarish, build jarayonlarini kuzatish va jamoaviy sprint boshqaruvini birlashtiruvchi zamonaviy SaaS.",
      client: "DevFlow Labs Inc.",
      challenge: lang === 'en'
        ? "Engineering teams suffered from fragmented build monitoring across GitHub, GitLab, and multiple detached cloud dashboards."
        : "Dasturchilar turli tizimlardagi build va test xatoliklarini yagona joydan tezkor boshqara olmaslik muammosiga duch kelishgan edi.",
      solution: lang === 'en'
        ? "Built a centralized multi-tenant dashboard with Redis job queues, granular role permissions, and Telegram instant incident alerts."
        : "Redis navbatlari, rolga asoslangan huquqlar (RBAC) va Telegram bildirishnoma botlari bilan to'liq integratsiya qurildi.",
      impactMetric: { label: lang === 'en' ? "Deployment Velocity" : "Deploy tezlashuvi", value: "3x Faster" },
      tags: ["Node.js", "Docker", "Redis", "PostgreSQL", "React"],
      gradientTheme: "from-emerald-600/40 via-teal-600/20 to-slate-950",
      liveUrl: "https://example.com/devflow",
      githubUrl: "https://github.com/iftixor/devflow-saas"
    },
    {
      id: 'milliy-edu',
      title: lang === 'en' ? "Milliy Edu — Interactive Code Learning" : "Milliy Edu — Interaktiv Ta'lim Portali",
      category: 'fullstack',
      categoryLabel: lang === 'en' ? "EdTech Platform" : "EdTech & Web",
      shortDesc: lang === 'en'
        ? "In-browser live coding sandbox and gamified education portal serving over 12,000 active students across Central Asia."
        : "Talabalarga brauzer ichida kod yozish va darhol natijasini tekshirish imkonini beruvchi interaktiv ta'lim ekotizimi.",
      client: "Ministry of Digital Technologies & EduHub",
      challenge: lang === 'en'
        ? "Students lacked local machine setup environments, creating massive dropout rates in early programming modules."
        : "Talabalar o'z kompyuterlarida dasturlash muhitini o'rnatishda qiynalishi darslarni tashlab ketishga sabab bo'layotgan edi.",
      solution: lang === 'en'
        ? "Deployed an isolated Monaco code editor inside browser WebAssembly sandboxes with instant automated grading and hint generation."
        : "Brauzer ichida ishlovchi xavfsiz Monaco kod muharriri va sun'iy intellektli repetitor yordamchisi ishlab chiqildi.",
      impactMetric: { label: lang === 'en' ? "Active Students" : "Faol o'quvchilar", value: "12,000+" },
      tags: ["Next.js", "Monaco Editor", "Socket.io", "PostgreSQL", "AWS"],
      gradientTheme: "from-purple-600/40 via-pink-600/20 to-slate-950",
      liveUrl: "https://example.com/milliy-edu",
      githubUrl: "https://github.com/iftixor/milliy-edu"
    },
    {
      id: 'nexus-studio',
      title: lang === 'en' ? "Nexus Studio — Digital Brand Flagship" : "Nexus Studio — Zamonaviy Raqamli Brend Studiyasi",
      category: 'fullstack',
      categoryLabel: lang === 'en' ? "Design System" : "Design System & Web",
      shortDesc: lang === 'en'
        ? "Award-winning creative digital agency portfolio boasting perfect 100/100 Lighthouse performance and buttery-smooth gestures."
        : "Kompaniyalar va raqamli brendlar uchun zamonaviy korporativ portallar va unutilmas interfeyslar studiyasi.",
      client: "Nexus Global Media",
      challenge: lang === 'en'
        ? "The client's previous site had heavy asset bloat and slow mobile rendering that damaged their premium luxury brand perception."
        : "Oldingi sayt og'ir yuklanishi sababli qimmatbaho brend imidjiga salbiy ta'sir ko'rsatayotgan edi.",
      solution: lang === 'en'
        ? "Engineered a bespoke zero-dependency animation stack, responsive SVG shaders, and pure CSS micro-interactions."
        : "Optimal animatsiyalar, toza semantik HTML va CSS orqali minimal bundle hajmiga va 100/100 tezlikka erishildi.",
      impactMetric: { label: lang === 'en' ? "Lighthouse Score" : "Lighthouse Balli", value: "100/100" },
      tags: ["React 19", "Tailwind CSS", "Motion", "Design Tokens"],
      gradientTheme: "from-amber-600/40 via-orange-600/20 to-slate-950",
      liveUrl: "https://example.com/nexus-studio",
      githubUrl: "https://github.com/iftixor/nexus-studio"
    },
    {
      id: 'cloudpulse',
      title: lang === 'en' ? "CloudPulse — Distributed Health Sentinel" : "CloudPulse — Serverlar va API Monitoring Tizimi",
      category: 'saas',
      categoryLabel: lang === 'en' ? "DevOps & Cloud" : "DevOps & Monitoring",
      shortDesc: lang === 'en'
        ? "Global latency monitor pinging mission-critical microservices every 50ms with automated voice & Telegram alerts."
        : "Veb-saytlar va mikroxizmatlarning mavjudligi va kechikishini soniyama-soniya kuzatuvchi monitoring vositasi.",
      client: "CloudPulse Infrastructure",
      challenge: lang === 'en'
        ? "Downtime incidents were discovered too late through angry customer tweets rather than proactive engineering warnings."
        : "Serverdagi nosozliklar muhandislar tomonidan emas, mijozlarning shikoyatlaridan keyin ma'lum bo'lib qolayotgan edi.",
      solution: lang === 'en'
        ? "Implemented distributed geo-probers in Go with TimescaleDB time-series storage and multi-channel instant alarm dispatchers."
        : "Go va TimescaleDB vaqt seriyalari bazasida global geografik ping tekshiruvlari va zudlik bilan ogohlantiruvchi bot yaratildi.",
      impactMetric: { label: lang === 'en' ? "Ping Frequency" : "Tekshiruv intervali", value: "50ms Interval" },
      tags: ["Go", "Node.js", "TimescaleDB", "React", "Telegram API"],
      gradientTheme: "from-indigo-600/40 via-sky-600/20 to-slate-950",
      liveUrl: "https://example.com/cloudpulse",
      githubUrl: "https://github.com/iftixor/cloudpulse"
    }
  ];

  const categories = [
    { id: 'all', label: lang === 'en' ? 'All Projects' : 'Barcha Loyihalar' },
    { id: 'ai', label: lang === 'en' ? 'AI & Automation' : 'AI & Avtomatlashtirish' },
    { id: 'fintech', label: lang === 'en' ? 'FinTech & Data' : 'FinTech & Tahlil' },
    { id: 'saas', label: lang === 'en' ? 'SaaS Platforms' : 'SaaS Platformalar' },
    { id: 'fullstack', label: lang === 'en' ? 'Web Applications' : 'Veb Ilovalar' },
  ];

  const filteredStudies = caseStudies.filter((study) => {
    const matchesCategory = activeCategory === 'all' || study.category === activeCategory;
    const matchesSearch = 
      study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      study.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="work" className="py-24 sm:py-32 bg-white dark:bg-[#060814] text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-900/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl space-y-4">
            {/* Tag: • FEATURED WORK */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-slate-700 dark:text-slate-300 font-semibold tracking-wider uppercase text-[11px]">
                {lang === 'en' ? 'FEATURED WORK' : 'SARALANGAN LOYIHALAR'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {lang === 'en' ? (
                <>
                  Selected Case Studies & <br />
                  <span className="font-serif-italic text-amber-500 dark:text-amber-400 font-normal">Real Client Success</span>
                </>
              ) : (
                <>
                  Saralangan Keyslar & <br />
                  <span className="font-serif-italic text-amber-500 dark:text-amber-400 font-normal">Haqiqiy Mijoz Natijalari</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {lang === 'en'
                ? "Explore how we partner with category-defining companies to architect high-velocity platforms, intuitive interfaces, and high-impact digital experiences."
                : "Bizning mijozlar bilan birgalikda yaratgan yuqori tezlikdagi platformalarimiz, qulay interfeyslarimiz va sezilarli natijalar keltirgan yechimlarimiz bilan tanishing."}
            </p>
          </div>

          {/* Search bar & handwritten note */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0">
            <div className="font-handwriting text-amber-500 dark:text-amber-300 text-2xl font-bold -rotate-3">
              {lang === 'en' ? "Proven results, zero fluff →" : "Faqat aniq natijalar va sifat →"}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === 'en' ? "Search stack or project..." : "Loyiha yoki texnologiya..."}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-[#090D1A] border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat.id);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-amber-400 text-slate-950 font-extrabold shadow-md shadow-amber-400/20'
                  : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              onMouseEnter={() => soundFx.playHover()}
              className="bg-white dark:bg-[#090D1C]/90 border border-slate-200 dark:border-slate-800/90 hover:border-amber-400/60 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md dark:shadow-xl group relative"
            >
              <div>
                {/* Visual Header / Banner */}
                <div className={`h-48 w-full bg-gradient-to-br ${study.gradientTheme} p-5 flex flex-col justify-between relative overflow-hidden border-b border-slate-200 dark:border-slate-800/80`}>
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[11px] font-mono text-white font-medium border border-white/10">
                      {study.categoryLabel}
                    </span>

                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-400/25 text-amber-200 backdrop-blur-md text-[11px] font-mono font-bold border border-amber-400/30">
                      <TrendingUp className="w-3 h-3 text-amber-400" />
                      {study.impactMetric.value}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-[11px] font-mono text-slate-200 tracking-wider uppercase block">
                      Client: {study.client}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-4">
                    {study.shortDesc}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {study.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between mt-4">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onSelectCaseStudy(study);
                  }}
                  className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:text-amber-500 flex items-center gap-1.5 cursor-pointer py-1"
                >
                  <span>{lang === 'en' ? "Case Study Details" : "Batafsil Tahlil"}</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <div className="flex items-center gap-2">
                  {study.githubUrl && (
                    <a
                      href={study.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => soundFx.playClick()}
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => soundFx.playClick()}
                      className="p-2 rounded-lg bg-amber-400/20 hover:bg-amber-400/40 text-amber-600 dark:text-amber-300 hover:text-amber-700 dark:hover:text-white border border-amber-400/30 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredStudies.length === 0 && (
          <div className="text-center py-16 bg-slate-50 dark:bg-[#090D1A] rounded-3xl border border-slate-200 dark:border-slate-800">
            <Layers className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-3" />
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              {lang === 'en' ? "No case studies matched your filter." : "Mos keluvchi loyihalar topilmadi."}
            </p>
          </div>
        )}

      </div>
    </section>
  );
};
