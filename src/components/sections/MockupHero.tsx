import React from 'react';
import { soundFx } from '../../services/soundFx';
import { ArrowRight, Play, Mouse } from 'lucide-react';

interface MockupHeroProps {
  lang: 'en' | 'uz';
  onOpenMessage: () => void;
  onOpenVideo: () => void;
}

export const MockupHero: React.FC<MockupHeroProps> = ({
  lang,
  onOpenMessage,
  onOpenVideo
}) => {
  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#060814] text-white">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-indigo-600/15 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      {/* Far Left Vertical Accent: "GET IN TOUCH" */}
      <div className="hidden xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-4 text-[10px] font-mono tracking-[0.25em] text-slate-500 uppercase select-none">
        <div className="w-[1px] h-14 bg-gradient-to-b from-transparent to-slate-700" />
        <span className="rotate-180 [writing-mode:vertical-rl]">GET IN TOUCH</span>
        <div className="w-[1px] h-14 bg-gradient-to-t from-transparent to-slate-700" />
      </div>

      {/* Far Right Vertical Accent: "Scroll Down" mouse */}
      <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 text-[10px] font-mono tracking-wider text-slate-400 uppercase select-none">
        <span className="[writing-mode:vertical-rl] rotate-180">Scroll Down</span>
        <div className="w-5 h-8 rounded-full border-2 border-slate-600 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-amber-400 rounded-full animate-bounce" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 space-y-7 text-left">
            {/* Tag badge: • CONTACT US */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse shadow-sm shadow-amber-400/80" />
              <span className="text-slate-300 font-semibold tracking-wider uppercase text-[11px]">
                {lang === 'en' ? 'CONTACT US' : 'ALOQA'}
              </span>
            </div>

            {/* Main Headline with italic serif accent */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
              {lang === 'en' ? (
                <>
                  Let's Build <br />
                  <span className="font-serif-italic text-amber-400 font-normal tracking-normal text-5xl sm:text-6xl lg:text-7xl inline-block my-1">
                    Something
                  </span> <br />
                  Amazing Together
                </>
              ) : (
                <>
                  Keling, Birgalikda <br />
                  <span className="font-serif-italic text-amber-400 font-normal tracking-normal text-5xl sm:text-6xl lg:text-7xl inline-block my-1">
                    Ajoyib
                  </span> <br />
                  Narsa Yarataylik
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg">
              {lang === 'en'
                ? "Have a project in mind, a question, or just want to say hello? We'd love to hear from you. Drop us a message and let's turn your ideas into reality."
                : "Yangi loyihangiz bormi, savolingiz yoki shunchaki fikr almashmoqchimisiz? Biz sizdan eshitishdan mamnun bo'lamiz. Xabar qoldiring va g'oyalaringizni haqiqatga aylantiramiz."}
            </p>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              {/* Primary Yellow Button */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenMessage();
                }}
                className="px-6 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-400/25 hover:shadow-xl hover:shadow-amber-400/35 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <span>{lang === 'en' ? "Send Us a Message" : "Xabar Yuborish"}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Video Play Button */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenVideo();
                }}
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-11 h-11 rounded-full bg-slate-900 border border-slate-700 group-hover:border-amber-400 flex items-center justify-center text-white group-hover:text-amber-400 transition-colors shadow-md">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                    {lang === 'en' ? "Watch Our Story" : "Bizning Hikoyamiz"}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">2:18</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Photo & Handwritten Annotations */}
          <div className="lg:col-span-6 relative">
            {/* Handwritten yellow doodle annotation above photo */}
            <div className="absolute -top-12 left-4 sm:left-12 z-20 pointer-events-none">
              <div className="flex items-center gap-2 font-handwriting text-amber-300 text-2xl sm:text-3xl font-bold tracking-wide -rotate-6 drop-shadow-md">
                <span>Ideas</span>
                <span className="text-amber-400">→</span>
                <span>Strategy</span>
                <span className="text-amber-400">→</span>
                <span>Growth</span>
              </div>
              {/* Curly drawn SVG arrow pointing downward */}
              <svg className="w-16 h-10 text-amber-300 ml-28 -mt-1" viewBox="0 0 100 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M 10,10 Q 50,45 85,25" />
                <path d="M 75,18 L 85,25 L 80,35" />
              </svg>
            </div>

            {/* Main Visual Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800/80 bg-slate-900 group">
              <img
                src="/assets/aistudio/Midnight_Developer_Workspace_de10e08d.png"
                alt="Developer at workspace with laptop and warm ambient light"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />

              {/* Glowing IT Logo badge overlay */}
              <div className="absolute top-5 right-5 w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-md border border-amber-400/40 p-2 shadow-2xl flex items-center justify-center group-hover:border-amber-400/80 transition-all z-20">
                <img 
                  src="/assets/aistudio/_________-1_322dc622.png" 
                  alt="IT Logo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]" 
                />
              </div>

              {/* Ambient bottom scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />

              {/* Floating Social Proof Card: "500+ Happy Clients" */}
              <div className="absolute bottom-6 right-6 bg-[#090D1A]/95 border border-slate-800 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md flex items-center gap-3.5 z-20">
                <div className="text-left">
                  <div className="text-base font-extrabold text-white leading-tight font-mono">
                    500+
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium whitespace-nowrap">
                    {lang === 'en' ? 'Happy Clients' : 'Mamnun Mijoz'}
                  </div>
                </div>

                {/* 3 Client Avatar bubbles */}
                <div className="flex -space-x-2.5 overflow-hidden">
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
                    alt="Client avatar"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                    alt="Client avatar"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face"
                    alt="Client avatar"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
