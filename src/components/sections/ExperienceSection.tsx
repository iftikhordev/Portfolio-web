import React from 'react';
import { ExperienceItem } from '../../types/portfolio';
import { soundFx } from '../../services/soundFx';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ experiences }) => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-700/50 text-emerald-700 dark:text-emerald-300 text-xs font-mono mb-3">
            <span>// 04. JOURNEY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Tajriba & Bosib O'tilgan Yo'l
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Professional faoliyat davomidagi asosiy bosqichlar va erishilgan natijalar.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 space-y-12 transition-colors">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              onMouseEnter={() => soundFx.playHover()}
              className="relative group"
            >
              {/* Timeline Pin Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-indigo-500 flex items-center justify-center shadow-md group-hover:scale-125 group-hover:border-cyan-400 transition-all">
                <div className="w-2 h-2 rounded-full bg-indigo-500 dark:bg-indigo-400" />
              </div>

              {/* Experience Card */}
              <div className="bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-3xl p-6 sm:p-7 transition-all shadow-sm hover:shadow-md group-hover:bg-white dark:group-hover:bg-slate-900/80">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1.5 mt-0.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800">
                      <Calendar className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Achievements List */}
                <div className="space-y-2 mb-5 mt-4">
                  {exp.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
