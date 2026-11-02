import React, { useState, useEffect } from 'react';
import { ambientMusic } from '../../services/ambientMusic';
import { soundFx } from '../../services/soundFx';
import { Volume2, VolumeX, Play, Pause, Music, ChevronDown, ChevronUp } from 'lucide-react';

interface AmbientMusicPlayerProps {
  lang: 'en' | 'uz';
}

export const AmbientMusicPlayer: React.FC<AmbientMusicPlayerProps> = ({ lang }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(ambientMusic.getIsPlaying());
  const [volume, setVolume] = useState<number>(ambientMusic.getVolume());
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = ambientMusic.subscribe((playing, vol) => {
      setIsPlaying(playing);
      setVolume(vol);
    });
    return unsubscribe;
  }, []);

  const handleToggle = () => {
    soundFx.playClick();
    ambientMusic.toggle();
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    ambientMusic.setVolume(val);
  };

  return (
    <div className="fixed bottom-5 left-5 z-40 select-none">
      <div className="bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl rounded-2xl p-2.5 transition-all duration-300 hover:shadow-2xl hover:border-amber-400/50">
        <div className="flex items-center gap-2.5">
          {/* Play / Pause Toggle Button */}
          <button
            onClick={handleToggle}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer shadow-md ${
              isPlaying
                ? 'bg-amber-400 text-slate-950 shadow-amber-400/30'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-amber-500'
            }`}
            title={isPlaying ? (lang === 'en' ? 'Pause Calm Music' : "Musiqani to'xtatish") : (lang === 'en' ? 'Play Calm Music' : 'Sokin musiqani yoqish')}
            aria-label="Toggle ambient music"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-current" />
            ) : (
              <Play className="w-4 h-4 fill-current ml-0.5" />
            )}
          </button>

          {/* Equalizer Wave / Music Label */}
          <div 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex flex-col cursor-pointer pr-1"
          >
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-100 tracking-tight">
                {lang === 'en' ? 'Calm Ambient' : 'Sokin Musiqa'}
              </span>

              {/* Animated Equalizer Waves */}
              {isPlaying ? (
                <div className="flex items-end gap-0.5 h-3 px-1">
                  <span className="w-1 bg-amber-400 rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2" />
                  <span className="w-1 bg-amber-400 rounded-full animate-[pulse_1.1s_ease-in-out_infinite] h-3" />
                  <span className="w-1 bg-amber-400 rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-1.5" />
                  <span className="w-1 bg-amber-400 rounded-full animate-[pulse_0.9s_ease-in-out_infinite] h-2.5" />
                </div>
              ) : (
                <Music className="w-3 h-3 text-slate-400" />
              )}
            </div>

            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono -mt-0.5">
              {isPlaying ? (lang === 'en' ? 'Playing soft chords' : 'Chalinmoqda...') : (lang === 'en' ? 'Paused' : "To'xtatilgan")}
            </span>
          </div>

          {/* Expand/Collapse volume controls */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors cursor-pointer"
            aria-label="Toggle volume details"
          >
            {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronUp className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Expanded Volume Slider */}
        {isExpanded && (
          <div className="pt-2.5 mt-2 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 px-1 animate-in fade-in duration-150">
            {volume === 0 ? (
              <VolumeX className="w-3.5 h-3.5 text-slate-400" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-amber-500" />
            )}
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-400"
              title={`${Math.round(volume * 100)}%`}
            />
            <span className="text-[10px] font-mono text-slate-400 w-7 text-right">
              {Math.round(volume * 100)}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
