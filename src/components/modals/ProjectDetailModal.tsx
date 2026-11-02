import React from 'react';
import { ProjectItem } from '../../types/portfolio';
import { soundFx } from '../../services/soundFx';
import { 
  X, 
  ExternalLink, 
  Github, 
  CheckCircle2, 
  TrendingUp, 
  Layers
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Banner with visual styling */}
        <div className={`h-48 w-full bg-gradient-to-br ${project.gradientTheme} p-6 flex flex-col justify-between relative`}>
          <div className="flex items-center justify-between relative z-10">
            <span className="px-3 py-1 rounded-xl bg-black/40 backdrop-blur-md text-xs font-mono text-white font-medium border border-white/10">
              {project.categoryLabel}
            </span>

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative z-10 flex items-center justify-between">
            <h3 className="text-2xl font-extrabold text-white">
              {project.title}
            </h3>
            {project.metrics && (
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/20 backdrop-blur-md text-xs font-mono text-white font-semibold border border-white/20">
                <TrendingUp className="w-3.5 h-3.5" />
                {project.metrics.value}
              </span>
            )}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Detailed description */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
              Loyiha haqida
            </h4>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.fullDesc}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 font-semibold">
              Asosiy imkoniyatlar & arxitektura
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-950/60 p-3.5 rounded-xl border border-slate-200/90 dark:border-slate-800/80">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech stack tags */}
          <div>
            <h4 className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
              Foydalanilgan texnologiyalar
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer action buttons */}
          <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => soundFx.playClick()}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white shadow-lg shadow-indigo-600/30 transition-colors cursor-pointer"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Jonli Loyihani Ko'rish</span>
              </a>
            )}

            <button
              onClick={() => {
                soundFx.playClick();
                onClose();
              }}
              className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 transition-colors cursor-pointer"
            >
              Yopish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
