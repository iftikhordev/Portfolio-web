import React from 'react';
import { PortfolioState } from '../../types/portfolio';
import { soundFx } from '../../services/soundFx';
import { 
  X, 
  Printer, 
  Mail, 
  MapPin, 
  Globe
} from 'lucide-react';

interface ResumeModalProps {
  portfolioState: PortfolioState;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  portfolioState,
  onClose
}) => {
  const { profile, skills, experiences, projects } = portfolioState;

  const handlePrint = () => {
    soundFx.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200 print:p-0 print:bg-white">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 print:border-none print:shadow-none print:m-0 print:bg-white print:text-black transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar (Hidden when printing) */}
        <div className="bg-slate-50 dark:bg-slate-950 p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-slate-600 dark:text-slate-400">
              Rezyume (CV) — {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Chop etish / PDF</span>
            </button>

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
        </div>

        {/* Printable CV Document Content */}
        <div className="p-8 sm:p-12 space-y-8 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 print:bg-white print:text-slate-900 print:p-6 transition-colors">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 print:border-slate-300 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white print:text-slate-950 mb-2">
              {profile.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-indigo-600 dark:text-indigo-400 print:text-indigo-700 font-mono mb-4">
              {profile.title}
            </p>

            {/* Contacts bar */}
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 print:text-slate-700">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                {profile.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                {profile.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                {profile.telegram}
              </span>
              <span className="flex items-center gap-1.5 font-mono">
                {profile.phone}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-800 font-bold mb-2">
              Kasbiy Xulosa
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed">
              {profile.bio}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-800 font-bold mb-4">
              Ish Tajribasi
            </h2>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap justify-between items-baseline">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white print:text-slate-950">
                      {exp.role} <span className="text-indigo-600 dark:text-indigo-400 print:text-indigo-700 font-normal">| {exp.company}</span>
                    </h3>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
                      {exp.period} ({exp.type})
                    </span>
                  </div>

                  <ul className="space-y-1 pl-4 list-disc text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-700">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx}>{ach}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {exp.technologies.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 print:bg-slate-200 text-slate-700 dark:text-slate-400 print:text-slate-800 border border-slate-200 dark:border-slate-800 print:border-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-800 font-bold mb-3">
              Asosiy Texnik Ko'nikmalar
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((s, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-950 print:bg-slate-100 text-slate-800 dark:text-slate-200 print:text-slate-900 border border-slate-200 dark:border-slate-800 print:border-slate-300 text-xs font-mono"
                >
                  <strong className="text-indigo-600 dark:text-indigo-400 print:text-indigo-700">{s.name}</strong> ({s.badge})
                </span>
              ))}
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 print:text-indigo-800 font-bold mb-3">
              Saralangan Loyihalar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 print:bg-slate-50 border border-slate-200 dark:border-slate-800 print:border-slate-200">
                  <h4 className="font-bold text-sm text-slate-900 dark:text-white print:text-slate-950 mb-1">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 print:text-slate-600 mb-2">
                    {p.shortDesc}
                  </p>
                  <div className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 print:text-indigo-700">
                    Stack: {p.tags.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
