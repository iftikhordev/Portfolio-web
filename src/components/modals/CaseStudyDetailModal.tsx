import React from 'react';
import { CaseStudy } from '../sections/MockupWorkSection';
import { soundFx } from '../../services/soundFx';
import { 
  X, 
  ExternalLink, 
  Github, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface CaseStudyDetailModalProps {
  study: CaseStudy | null;
  onClose: () => void;
  lang: 'en' | 'uz';
  onStartSimilarProject: (title: string) => void;
}

export const CaseStudyDetailModal: React.FC<CaseStudyDetailModalProps> = ({
  study,
  onClose,
  lang,
  onStartSimilarProject
}) => {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-[#090D1C] border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with visual styling */}
        <div className={`h-48 w-full bg-gradient-to-br ${study.gradientTheme} p-6 sm:p-8 flex flex-col justify-between relative border-b border-slate-800`}>
          <div className="flex items-center justify-between relative z-10">
            <span className="px-3 py-1 rounded-xl bg-black/50 backdrop-blur-md text-xs font-mono text-white font-medium border border-white/10">
              {study.categoryLabel}
            </span>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-mono text-amber-300 uppercase tracking-wider block mb-1">
                Client: {study.client}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {study.title}
              </h3>
            </div>

            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/20 text-amber-300 backdrop-blur-md text-xs font-mono font-bold border border-amber-400/40 shrink-0 w-fit">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              {study.impactMetric.value}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          {/* Executive Summary */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
              {lang === 'en' ? "Executive Summary" : "Loyiha Haqida"}
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {study.shortDesc}
            </p>
          </div>

          {/* Problem vs Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#060814] border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold font-mono">
                <AlertCircle className="w-4 h-4" />
                <span>{lang === 'en' ? "The Challenge" : "Mavjud Muammo"}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {study.challenge}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#060814] border border-slate-800/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>{lang === 'en' ? "Our Solution" : "Bizning Yechim"}</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {study.solution}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-semibold">
              {lang === 'en' ? "Production Stack" : "Qo'llanilgan Texnologiyalar"}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {study.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-[#060814] text-amber-300 border border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer inside Modal */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-3">
              {study.githubUrl && (
                <a
                  href={study.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}

              {study.liveUrl && (
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400/20 hover:bg-amber-400/30 text-xs font-bold text-amber-300 border border-amber-400/30 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Production Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={() => {
                soundFx.playClick();
                onStartSimilarProject(study.title);
              }}
              className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <span>{lang === 'en' ? "Start Similar Project" : "Shunday Loyiha Buyurtma Qilish"}</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
