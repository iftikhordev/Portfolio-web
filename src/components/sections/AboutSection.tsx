import React from 'react';
import { ProfileData } from '../../types/portfolio';
import { soundFx } from '../../services/soundFx';
import { 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Cpu, 
  MapPin, 
  Mail, 
  CheckCircle,
  Quote
} from 'lucide-react';

interface AboutSectionProps {
  profile: ProfileData;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, onOpenContact }) => {
  const pillars = [
    {
      title: "Yuqori Unumdorlik",
      desc: "Lighthouse 95+ ball, tezkor server rendering (SSR/SSG), minimal bundle hajmi va silliq 60 FPS animatsiyalar.",
      icon: Zap,
      color: "from-amber-500/20 to-orange-500/10 text-amber-500 dark:text-amber-400 border-amber-500/30"
    },
    {
      title: "Toza Arxitektura",
      desc: "SOLID va Clean Architecture tamoyillariga mos modulli backend, xavfsiz REST/GraphQL va PostgreSQL ma'lumotlar bazasi.",
      icon: ShieldCheck,
      color: "from-emerald-500/20 to-teal-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30"
    },
    {
      title: "Zamonaviy UI/UX",
      desc: "Har bir pikseli o'ylangan zamonaviy interfeyslar, qulay foydalanuvchi tajribasi va barcha qurilmalarga to'liq mos dizayn.",
      icon: Sparkles,
      color: "from-indigo-500/20 to-purple-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30"
    },
    {
      title: "AI & Innovatsiyalar",
      desc: "Sun'iy intellekt (LLM API, semantik vektor qidiruv) va real-vaqt ma'lumotlar oqimi bilan boyitilgan zamonaviy tizimlar.",
      icon: Cpu,
      color: "from-cyan-500/20 to-blue-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-slate-50/80 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-700/50 text-indigo-700 dark:text-indigo-300 text-xs font-mono mb-3">
            <span>// 01. INTRO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Men Haqimda & Muhandislik Falsafam
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Dasturlash men uchun shunchaki kod yozish emas — bu muammolarni nafis, ishonchli va estetik yechimlar bilan yengish san'atidir.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Bio card with details */}
          <div className="lg:col-span-5 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden transition-colors">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Profile Avatar / Badge */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 p-[2px] shadow-lg shadow-indigo-500/25">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-indigo-300 to-cyan-300">
                  {profile.name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{profile.name}</h3>
                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono font-medium">{profile.title}</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                  <span>{profile.location}</span>
                </div>
              </div>
            </div>

            {/* Philosophy quote */}
            <div className="bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 mb-6">
              <Quote className="w-5 h-5 text-indigo-500/70 dark:text-indigo-400/60 mb-1" />
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "Foydalanuvchi ko'radigan interfeys qanchalik sodda va nafis bo'lsa, uning ortidagi muhandislik shunchalik mukammal bo'lishi lozim."
              </p>
            </div>

            {/* Key bullet details */}
            <div className="space-y-3 mb-6">
              {profile.aboutDetails.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Direct contact button */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenContact();
              }}
              className="w-full py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>{profile.email} orqali bog'lanish</span>
            </button>
          </div>

          {/* Right: 4 Engineering Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => soundFx.playHover()}
                  className="bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-2xl p-5 transition-all hover:-translate-y-1 group shadow-sm"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${pillar.color} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
