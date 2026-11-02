import React, { useState, useEffect } from 'react';
import { ProfileData } from '../../types/portfolio';
import { soundFx } from '../../services/soundFx';
import { 
  ArrowRight, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  TrendingUp, 
  Award,
  Terminal,
  Code
} from 'lucide-react';

interface HeroSectionProps {
  profile: ProfileData;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  onOpenResume,
  onOpenContact
}) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const roles = profile.roles.length > 0 ? profile.roles : [profile.title];
    const currentRole = roles[roleIndex % roles.length];
    
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 75);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
    } else if (isDeleting && displayText.length > 0) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, profile.roles, profile.title]);

  const stats = [
    { label: "Yillik Tajriba", value: `${profile.yearsOfExperience}+`, icon: Award },
    { label: "Muvaffaqiyatli Loyiha", value: `${profile.completedProjects}+`, icon: Layers },
    { label: "Mamnun Hamkorlar", value: `${profile.happyClients}+`, icon: CheckCircle2 },
    { label: "Uptime & Sifat", value: "99.9%", icon: TrendingUp },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-500/10 dark:bg-indigo-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-cyan-400/10 dark:bg-cyan-500/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700/80 shadow-sm mb-6">
            <span className="relative flex h-2.5 w-2.5">
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-300 font-medium">
              Hozir yangi loyihalar uchun ochiq
            </span>
            <span className="text-slate-300 dark:text-slate-600">|</span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1">
              <Terminal className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
              Full-Stack & Cloud
            </span>
          </div>

          {/* Salutation & Name */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
            Salom, men <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-indigo-300">{profile.name}</span>
          </h1>

          {/* Dynamic typing title */}
          <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
            <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 dark:text-slate-300 font-mono">
              {displayText}
              <span className="inline-block w-2.5 h-6 ml-1 bg-indigo-500 dark:bg-cyan-400 align-middle animate-pulse" />
            </span>
          </div>

          {/* Bio paragraph */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto">
            {profile.bio}
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-14">
            <a
              href="#projects"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Loyihalarni Ko'rish</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 font-semibold text-sm shadow-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Send className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>Bog'lanish</span>
            </a>

            <button
              onClick={() => {
                soundFx.playClick();
                onOpenResume();
              }}
              onMouseEnter={() => soundFx.playHover()}
              className="flex items-center gap-2 px-5 py-3.5 rounded-xl bg-slate-100 dark:bg-slate-900/60 hover:bg-slate-200 dark:hover:bg-slate-800/80 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium text-sm transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>Rezyume (CV)</span>
            </button>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white/80 dark:bg-slate-900/70 border border-slate-200/90 dark:border-slate-800/90 rounded-2xl p-4 text-center hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-center mb-1.5 text-indigo-600 dark:text-indigo-400">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono mb-0.5">
                    {item.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
