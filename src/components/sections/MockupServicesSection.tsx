import React from 'react';
import { soundFx } from '../../services/soundFx';
import { 
  Code2, 
  Palette, 
  Layers, 
  Cpu, 
  ShoppingCart, 
  Cloud, 
  ArrowRight, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface MockupServicesSectionProps {
  lang: 'en' | 'uz';
  onSelectService: (serviceName: string) => void;
}

export const MockupServicesSection: React.FC<MockupServicesSectionProps> = ({
  lang,
  onSelectService
}) => {
  const services = [
    {
      id: 'fullstack',
      title: lang === 'en' ? "Full-Stack Web Engineering" : "Full-Stack Veb Muhandislik",
      desc: lang === 'en' 
        ? "Blazing-fast, responsive web applications built with Next.js, React, TypeScript, and high-concurrency Node.js / Python backends."
        : "Next.js, React va TypeScript asosida yuqori yuklanishga chidamli, tezkor va xavfsiz veb-ilovalar ishlab chiqish.",
      icon: Code2,
      metric: lang === 'en' ? "< 0.8s Load Times • 99.9% Uptime" : "< 0.8s Yuklanish • 99.9% Barqarorlik",
      tags: ["Next.js", "React 19", "TypeScript", "Node.js"]
    },
    {
      id: 'uiux',
      title: lang === 'en' ? "UI/UX & Product Design" : "UI/UX & Mahsulot Dizayni",
      desc: lang === 'en'
        ? "Human-centered conversion design, comprehensive design systems, interactive prototypes, and pixel-perfect mobile-first interfaces."
        : "Foydalanuvchi qulayligiga yo'naltirilgan zamonaviy interfeyslar, to'liq dizayn tizimlari va yuqori konversiyali tajriba.",
      icon: Palette,
      metric: lang === 'en' ? "+40% User Retention & Engagement" : "+40% Foydalanuvchi faolligi",
      tags: ["Figma", "Design Systems", "Prototyping", "UX Research"]
    },
    {
      id: 'saas',
      title: lang === 'en' ? "Custom SaaS & Enterprise Platforms" : "Maxsus SaaS & Korporativ Tizimlar",
      desc: lang === 'en'
        ? "End-to-end multi-tenant SaaS architecture, granular role-based access control (RBAC), and bulletproof PostgreSQL databases."
        : "Katta hajmdagi korporativ mijozlar uchun ko'p foydalanuvchili SaaS platformalar, murakkab huquqlar tizimi va PostgreSQL bazalari.",
      icon: Layers,
      metric: lang === 'en' ? "Engineered for 100k+ Active Users" : "100k+ faol foydalanuvchiga mo'ljallangan",
      tags: ["SaaS", "PostgreSQL", "Prisma", "REST / GraphQL"]
    },
    {
      id: 'ai',
      title: lang === 'en' ? "AI & Intelligent Automation" : "Sun'iy Intellekt & Avtomatlashtirish",
      desc: lang === 'en'
        ? "Supercharge your business with generative AI workflows, intelligent chatbots, vector semantic search, and autonomous pipelines."
        : "Biznes jarayonlarini tezlashtirish uchun generativ AI integratsiyalari, semantik qidiruv va avtomatlashgan tahliliy tizimlar.",
      icon: Cpu,
      metric: lang === 'en' ? "Save 45% Operational Effort" : "45% gacha operatsion xarajatlarni tejash",
      tags: ["LLM APIs", "Vector Search", "Python", "Automation"]
    },
    {
      id: 'ecommerce',
      title: lang === 'en' ? "High-Conversion E-Commerce" : "Elektron Tijorat & To'lov Tizimlari",
      desc: lang === 'en'
        ? "Scalable online stores with frictionless checkouts, Payme, Click, and Stripe integrations, coupled with real-time stock management."
        : "Payme, Click va Stripe to'lov tizimlariga ega, xarid qilish oson va yuqori konversiyaga ega onlayn do'konlar platformasi.",
      icon: ShoppingCart,
      metric: lang === 'en' ? "+38% Average Checkout Conversion" : "+38% savdo konversiyasi o'sishi",
      tags: ["E-Commerce", "Stripe", "Payme / Click", "Real-Time"]
    },
    {
      id: 'cloud',
      title: lang === 'en' ? "Cloud Infrastructure & DevOps" : "Bulutli Infratuzilma & DevOps",
      desc: lang === 'en'
        ? "Robust containerized architectures, automated CI/CD testing pipelines, serverless deployment, and 24/7 observability."
        : "Docker va Kubernetes konteynerlari, avtomatlashgan CI/CD test va o'rnatish tizimlari, 24/7 monitoring va serverless arxitektura.",
      icon: Cloud,
      metric: lang === 'en' ? "Zero-Downtime Releases" : "To'xtovsiz yangilanishlar (Zero-downtime)",
      tags: ["Docker", "CI/CD", "AWS", "Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#050710] text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-blue-500/10 dark:bg-blue-900/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl space-y-4">
            {/* Tag: • WHAT WE DO */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-slate-700 dark:text-slate-300 font-semibold tracking-wider uppercase text-[11px]">
                {lang === 'en' ? 'WHAT WE DO' : 'XIZMATLARIMIZ'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {lang === 'en' ? (
                <>
                  High-Impact Services Designed To <br />
                  <span className="font-serif-italic text-amber-500 dark:text-amber-400 font-normal">Scale Your Business</span>
                </>
              ) : (
                <>
                  Biznesingizni Kengaytirishga <br />
                  <span className="font-serif-italic text-amber-500 dark:text-amber-400 font-normal">Yo'naltirilgan Xizmatlar</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              {lang === 'en'
                ? "From bespoke web engineering and UI/UX design to enterprise SaaS and AI workflows, we craft solutions that generate measurable revenue and delight your customers."
                : "Maxsus dasturiy ta'minot va UI/UX dizayndan tortib korporativ SaaS va AI integratsiyalarigacha — biz biznesingizga haqiqiy foyda keltiradigan yechimlarni quramiz."}
            </p>
          </div>

          {/* Handwritten note on right */}
          <div className="shrink-0 text-left lg:text-right">
            <div className="font-handwriting text-amber-500 dark:text-amber-300 text-2xl font-bold -rotate-3 inline-block">
              {lang === 'en' ? "Tailored solutions for modern brands →" : "Zamonaviy brendlar uchun maxsus yechimlar →"}
            </div>
          </div>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                onMouseEnter={() => soundFx.playHover()}
                className="bg-white dark:bg-[#090D1C]/90 border border-slate-200 dark:border-slate-800/90 hover:border-amber-400/60 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md dark:shadow-xl hover:shadow-xl group relative"
              >
                <div>
                  {/* Top Bar inside card: Icon & Index number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-amber-500 dark:text-amber-400 group-hover:scale-110 group-hover:border-amber-400/60 transition-all shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2.5 group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div>
                  {/* Outcome Metric Badge */}
                  <div className="bg-slate-50 dark:bg-[#060814] border border-slate-200 dark:border-slate-800/80 rounded-xl px-3.5 py-2 mb-5 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400 shrink-0" />
                    <span className="text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300">
                      {service.metric}
                    </span>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link: Pre-selects service in contact form */}
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      onSelectService(service.title);
                    }}
                    className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 hover:bg-amber-400 hover:text-slate-950 dark:hover:bg-amber-400 dark:hover:text-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer group-hover:border-amber-400/40"
                  >
                    <span>{lang === 'en' ? "Request This Service" : "Ushbu Xizmatni Buyurtma Qilish"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
