import React, { useState } from 'react';
import { soundFx } from '../../services/soundFx';
import { 
  CheckCircle2, 
  Award, 
  Users, 
  TrendingUp, 
  Sparkles, 
  Code2, 
  ShieldCheck, 
  Zap,
  ArrowRight
} from 'lucide-react';

interface MockupAboutSectionProps {
  lang: 'en' | 'uz';
  onContactClick: () => void;
}

export const MockupAboutSection: React.FC<MockupAboutSectionProps> = ({
  lang,
  onContactClick
}) => {
  const [activeTab, setActiveTab] = useState<'vision' | 'mission' | 'approach'>('vision');

  const stats = [
    {
      value: "10+",
      label: lang === 'en' ? "Years of Excellence" : "Yillik Tajriba",
      subtext: lang === 'en' ? "Delivering digital superiority" : "Raqamli yechimlar yetakchisi",
      icon: Award
    },
    {
      value: "500+",
      label: lang === 'en' ? "Completed Projects" : "Muvaffaqiyatli Loyiha",
      subtext: lang === 'en' ? "Across 24 countries worldwide" : "Dunyoning 24 ta mamlakatida",
      icon: TrendingUp
    },
    {
      value: "99.4%",
      label: lang === 'en' ? "Client Satisfaction" : "Mijozlar Mamnuniyati",
      subtext: lang === 'en' ? "Consistent 5-star feedback" : "Doimiy 5 yulduzli baholar",
      icon: Users
    },
    {
      value: "24/7",
      label: lang === 'en' ? "Engineering Support" : "Texnik Ko'mak",
      subtext: lang === 'en' ? "Rapid SLA response time" : "Tezkor muhandislik javobi",
      icon: Zap
    }
  ];

  const tabContent = {
    vision: {
      title: lang === 'en' ? "Engineering the Future of Digital Business" : "Raqamli Biznesning Kelajagini Yaratish",
      desc: lang === 'en'
        ? "We envision a world where technology seamlessly bridges ambitious vision and everyday human experience. Every digital product we engineer is built for longevity, lightning speed, and effortless scale."
        : "Biz texnologiyalar biznes g'oyalari va inson tajribasini mukammal birlashtiradigan dunyoni quramiz. Biz yaratadigan har bir mahsulot uzoq muddatli barqarorlik, chaqmoqdek tezlik va kengayuvchanlik uchun mo'ljallangan.",
      points: lang === 'en' 
        ? ["Zero technical debt architecture", "Human-centric, accessible design systems", "Data-informed conversion optimization"]
        : ["Texnik qarzlarsiz toza kod arxitekturasi", "Inson qulayligiga qaratilgan dizayn tizimlari", "Haqiqiy ma'lumotlarga asoslangan konversiya"]
    },
    mission: {
      title: lang === 'en' ? "Turning Ambitious Ideas Into Measurable Growth" : "Yirik G'oyalarni Aniq Natijalarga Aylantirish",
      desc: lang === 'en'
        ? "Our mission is to eliminate corporate friction by crafting robust full-stack software, intuitive interfaces, and AI-enabled pipelines that empower companies to outpace competition and win customer trust."
        : "Bizning maqsadimiz — kompaniyalarga raqobatdan ilgarilab ketish va mijozlar ishonchini qozonish uchun ishonchli veb-ilovalar, qulay interfeyslar va sun'iy intellekt tizimlarini yaratishdir.",
      points: lang === 'en'
        ? ["Transparent agile sprints with weekly demos", "Dedicated product engineering team", "Enterprise security and data privacy standards"]
        : ["Haftalik natijalar bilan shaffof sprintlar", "Tajribali shaxsiy muhandislar jamoasi", "Korporativ xavfsizlik va maxfiylik standartlari"]
    },
    approach: {
      title: lang === 'en' ? "The Science of High-Velocity Craftsmanship" : "Yuqori Tezlikdagi Muhandislik Mahorati",
      desc: lang === 'en'
        ? "We reject generic templates and bloated frameworks. Our engineering approach couples deep domain research with modern full-stack stacks: sub-second Next.js SSR, typed APIs, and micro-interactions that feel delightful."
        : "Biz tayyor shablonlar va og'ir freymvorklardan foydalanmaymiz. Bizning yondashuvimiz chuqur biznes tahlili va eng zamonaviy texnologiyalarni (Next.js SSR, TypeScript, mikro-animatsiyalar) birlashtiradi.",
      points: lang === 'en'
        ? ["Strict Lighthouse 95+ performance metrics", "Test-driven reliability (TDD / CI/CD)", "Clean, modular and documented codebase"]
        : ["Lighthouse 95+ yuqori unumdorlik kafolati", "Avtomatik testlar va uzluksiz CI/CD", "Toza, tushunarli va hujjatlashtirilgan kod"]
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#060814] text-white relative overflow-hidden border-t border-slate-900">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-indigo-900/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-amber-500/10 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Tag: • ABOUT US */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span className="text-slate-300 font-semibold tracking-wider uppercase text-[11px]">
              {lang === 'en' ? 'ABOUT US' : 'BIZ HAQIMIZDA'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {lang === 'en' ? (
              <>
                We Are A Creative Digital Agency <br />
                Driven By <span className="font-serif-italic text-amber-400 font-normal">Passion & Precision</span>
              </>
            ) : (
              <>
                Biznesingizni Rivojlantiruvchi <br />
                <span className="font-serif-italic text-amber-400 font-normal">Ijodiy & Yuqori Texnologik</span> Agentlik
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mt-4">
            {lang === 'en'
              ? "At AS Digital, we merge strategic thinking, bold UI design, and production-grade full-stack engineering to build digital products that drive undeniable business momentum."
              : "AS Digital jamoasi strategik fikrlash, zamonaviy UI/UX dizayn va yuqori darajadagi dasturiy muhandislikni birlashtirib, biznesingizga sezilarli muvaffaqiyat olib keladigan raqamli mahsulotlarni yaratadi."}
          </p>
        </div>

        {/* 4 Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                onMouseEnter={() => soundFx.playHover()}
                className="bg-[#090D1C]/90 border border-slate-800/90 hover:border-amber-400/50 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-lg group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500">
                    0{idx + 1}
                  </span>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight group-hover:text-amber-300 transition-colors">
                  {stat.value}
                </div>

                <div className="text-sm font-bold text-slate-200 mt-1">
                  {stat.label}
                </div>

                <div className="text-xs text-slate-400 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Dive: Interactive Vision / Mission / Approach Tabs */}
        <div className="bg-[#090D1A]/95 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left side: Navigation pills & Handwritten note */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  {lang === 'en' ? "Core Principles" : "Asosiy Tamoyillarimiz"}
                </span>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {lang === 'en' ? "How We Build Category Leaders" : "Bozor Yetakchilarini Qanday Yaratamiz"}
                </h3>
              </div>

              {/* Segmented Control */}
              <div className="flex flex-col gap-2 p-1.5 bg-[#060814] border border-slate-800 rounded-2xl">
                {[
                  { id: 'vision', label: lang === 'en' ? 'Our Vision' : 'Bizning Qarashimiz' },
                  { id: 'mission', label: lang === 'en' ? 'Our Mission' : 'Bizning Missiyamiz' },
                  { id: 'approach', label: lang === 'en' ? 'Our Approach' : 'Ish Yondashuvimiz' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => {
                      soundFx.playClick();
                      setActiveTab(tab.id as any);
                    }}
                    className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold text-left transition-all cursor-pointer flex items-center justify-between ${
                      activeTab === tab.id
                        ? 'bg-amber-400 text-slate-950 shadow-md font-extrabold'
                        : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    <span>{tab.label}</span>
                    {activeTab === tab.id && <ArrowRight className="w-4 h-4 stroke-[2.5]" />}
                  </button>
                ))}
              </div>

              {/* Handwritten note */}
              <div className="pt-2 pl-2">
                <div className="font-handwriting text-amber-300 text-2xl font-bold -rotate-3 inline-block">
                  {lang === 'en' ? "Crafted with passion & precision →" : "Har bir detalda mehr va aniqlik →"}
                </div>
              </div>
            </div>

            {/* Right side: Selected Tab Content */}
            <div className="lg:col-span-7 bg-[#060814] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <Sparkles className="w-4 h-4" />
                <span className="uppercase tracking-wider">
                  {activeTab.toUpperCase()}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-extrabold text-white">
                {tabContent[activeTab].title}
              </h4>

              <p className="text-sm text-slate-300 leading-relaxed">
                {tabContent[activeTab].desc}
              </p>

              {/* Key Checkpoints */}
              <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                {tabContent[activeTab].points.map((pt, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onContactClick();
                  }}
                  className="px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-white hover:text-amber-400 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'en' ? "Discuss Your Vision" : "Loyiha Bo'yicha Maslahat Olish"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
