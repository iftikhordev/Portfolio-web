import React, { useState } from 'react';
import { soundFx } from '../../services/soundFx';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';

interface VideoStoryModalProps {
  onClose: () => void;
  lang: 'en' | 'uz';
}

export const VideoStoryModal: React.FC<VideoStoryModalProps> = ({ onClose, lang }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#090D1C] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 px-6 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-amber-400/50 p-1 flex items-center justify-center">
              <img 
                src="/assets/aistudio/_________-1_322dc622.png" 
                alt="IT Logo" 
                className="w-full h-full object-contain filter drop-shadow" 
              />
            </div>
            <div>
              <span className="text-xs font-bold text-white">Iftikhor Turamuradov — Our Story</span>
              <span className="text-[10px] text-slate-400 block font-mono">Duration: 2:18 • 4K Cinema</span>
            </div>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Cinematic Video Simulation Box */}
        <div className="relative h-[320px] sm:h-[400px] bg-slate-950 flex items-center justify-center overflow-hidden group">
          <img
            src="/assets/aistudio/Midnight_Developer_Workspace_de10e08d.png"
            alt="Iftikhor Turamuradov at Workspace"
            className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-black/40 to-transparent" />

          {/* Center Play / Pause Overlay */}
          <button
            onClick={() => {
              soundFx.playClick();
              setIsPlaying(!isPlaying);
            }}
            className="relative z-10 w-16 h-16 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
          </button>

          {/* Lower Cinematic Subtitles */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10 text-xs">
            <div className="space-y-1">
              <span className="px-2.5 py-1 rounded bg-black/60 text-amber-300 font-mono text-[11px] border border-amber-400/30">
                {isPlaying ? "▶ NOW PLAYING" : "⏸ PAUSED"}
              </span>
              <p className="text-sm font-semibold text-white drop-shadow">
                "We don't just write code — we design scalable growth engines."
              </p>
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="p-2 rounded-xl bg-black/50 hover:bg-black/80 text-white border border-white/20 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
            </button>
          </div>
        </div>

        {/* Video Notes & Metrics */}
        <div className="p-6 bg-[#070A14] flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              500+ Worldwide Launches
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              99.98% High Uptime
            </span>
          </div>

          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="px-4 py-2 rounded-full bg-amber-400 text-slate-950 font-bold hover:bg-amber-300 transition-colors"
          >
            {lang === 'en' ? "Close Video" : "Yopish"}
          </button>
        </div>
      </div>
    </div>
  );
};
