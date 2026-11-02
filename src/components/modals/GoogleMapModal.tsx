import React from 'react';
import { soundFx } from '../../services/soundFx';
import { X, MapPin, Navigation, Phone, ExternalLink } from 'lucide-react';

interface GoogleMapModalProps {
  onClose: () => void;
  lang: 'en' | 'uz';
}

export const GoogleMapModal: React.FC<GoogleMapModalProps> = ({ onClose, lang }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white dark:bg-[#090D1C] border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 px-6 bg-slate-50 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-amber-500/50 dark:border-amber-400/50 p-1 flex items-center justify-center shadow-sm">
              <img 
                src="/assets/aistudio/_________-1_322dc622.png" 
                alt="IT Logo" 
                className="w-full h-full object-contain filter drop-shadow" 
              />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Iftikhor Turamuradov — Studio HQ</h3>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">Samarkand region, Jomboy district, Tut quarter, Uzbekistan</p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Map View Frame */}
        <div className="relative h-[360px] bg-[#070A14] overflow-hidden flex items-center justify-center">
          {/* Blueprint vector grid */}
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />
          
          {/* Road Network Lines */}
          <svg className="absolute inset-0 w-full h-full stroke-slate-700 opacity-60" viewBox="0 0 600 360" fill="none" strokeWidth="3">
            <path d="M 0,180 Q 250,140 600,200" strokeWidth="6" stroke="#334155" />
            <path d="M 300,0 L 320,360" strokeWidth="6" stroke="#475569" />
            <path d="M 120,0 L 150,360" stroke="#1e293b" />
            <path d="M 460,0 L 480,360" stroke="#1e293b" />
            <circle cx="310" cy="180" r="40" stroke="#38bdf8" strokeDasharray="4 4" fill="rgba(56, 189, 248, 0.05)" />
          </svg>

          {/* Golden Pin */}
          <div className="relative z-10 flex flex-col items-center animate-bounce">
            <div className="bg-slate-950/95 border border-amber-400 px-3 py-1.5 rounded-xl shadow-2xl flex items-center gap-1.5 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-xs font-bold text-white whitespace-nowrap">Iftikhor Dev Studio</span>
            </div>
            <div className="w-11 h-11 rounded-full bg-slate-950 border-2 border-amber-400 p-1 flex items-center justify-center shadow-xl ring-4 ring-amber-400/30">
              <img 
                src="/assets/aistudio/_________-1_322dc622.png" 
                alt="IT Pin Logo" 
                className="w-full h-full object-contain filter drop-shadow" 
              />
            </div>
            <div className="w-2.5 h-2.5 bg-amber-400 rotate-45 -mt-1" />
          </div>
        </div>

        {/* Action Bar */}
        <div className="p-5 bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-slate-600 dark:text-slate-400 flex items-center gap-1 font-mono">
              <Navigation className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
              Samarkand: 39.7547° N, 67.0982° E
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://maps.app.goo.gl/D5MZai4GWfDGtVEMA"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold flex items-center gap-1.5 transition-colors shadow-md"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? "Open in Google Maps" : "Google Maps'da ochish"}</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              {lang === 'en' ? "Close" : "Yopish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
