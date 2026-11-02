import React from 'react';
import { soundFx } from '../../services/soundFx';
import { ArrowRight } from 'lucide-react';

interface MockupCtaBannerProps {
  lang: 'en' | 'uz';
  onGetStarted: () => void;
}

export const MockupCtaBanner: React.FC<MockupCtaBannerProps> = ({
  lang,
  onGetStarted
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#050710] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-amber-900/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-r from-[#090D1C] via-[#0C1226] to-[#090D1C] border border-slate-800 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          
          {/* Subtle curved background lines */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

          {/* Left Side: Call to Action text */}
          <div className="space-y-4 text-center lg:text-left max-w-xl">
            {/* Tag: • LET'S CREATE TOGETHER */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span className="text-slate-300 font-semibold uppercase text-[11px]">
                {lang === 'en' ? "LET'S CREATE TOGETHER" : "BIRGALIKDA YARATAMIZ"}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {lang === 'en' ? (
                <>
                  Ready to Turn Your Ideas <br className="hidden sm:inline" />
                  Into <span className="font-serif-italic text-amber-400 font-normal">Something Great?</span>
                </>
              ) : (
                <>
                  G'oyalaringizni <br className="hidden sm:inline" />
                  <span className="font-serif-italic text-amber-400 font-normal">Haqiqatga</span> Aylantirishga Tayyormisiz?
                </>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-slate-400">
              {lang === 'en'
                ? "Get in touch with us today and let's bring your vision to life."
                : "Bugunoq biz bilan bog'laning va orzuingizdagi loyihani hayotga tatbiq etamiz."}
            </p>
          </div>

          {/* Right Side: Handwritten Note & Button */}
          <div className="flex flex-col sm:flex-row items-center gap-6 shrink-0">
            {/* Handwritten Note */}
            <div className="text-center sm:text-right">
              <span className="font-handwriting text-amber-300 text-xl sm:text-2xl font-bold -rotate-3 block">
                {lang === 'en' ? "Big ideas start with a simple message." : "Buyuk g'oyalar bitta oddiy xabardan boshlanadi."}
              </span>
            </div>

            {/* Yellow Get Started Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                onGetStarted();
              }}
              className="px-7 py-3.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-400/25 hover:shadow-2xl hover:shadow-amber-400/35 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <span>{lang === 'en' ? "Get Started" : "Boshlash"}</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
