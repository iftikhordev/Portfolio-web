import React, { useState } from 'react';
import { ProjectItem } from '../../types/portfolio';
import { soundFx } from '../../services/soundFx';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Search, 
  Layers, 
  ChevronRight,
  TrendingUp,
  Layout
} from 'lucide-react';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'Barchasi' },
    { id: 'fullstack', label: 'Full-Stack' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'featured', label: 'Tanlanganlar' },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesTab = 
      activeTab === 'all' ? true :
      activeTab === 'featured' ? project.featured :
      project.category === activeTab;

    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-slate-50/70 dark:bg-slate-950/70 border-t border-slate-200/80 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-700/50 text-indigo-700 dark:text-indigo-300 text-xs font-mono mb-3">
              <span>// 03. PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2">
              Saralangan Loyihalar
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              G'oyadan to'liq ishga tushirishgacha bo'lgan har bir loyiha yuqori sifat, tezlik va nafis dizayn bilan yaratilgan.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Qidirish (React, Next.js, AI)..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-indigo-500 shadow-sm transition-colors"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                soundFx.playClick();
                setActiveTab(tab.id);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => soundFx.playHover()}
              className="bg-white dark:bg-slate-900/80 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700/80 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-md hover:shadow-xl group"
            >
              <div>
                {/* Visual Header / Banner */}
                <div className={`h-48 w-full bg-gradient-to-br ${project.gradientTheme} p-5 flex flex-col justify-between relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md text-[11px] font-mono text-white font-medium border border-white/10">
                      {project.categoryLabel}
                    </span>

                    {project.metrics && (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-md text-[11px] font-mono text-white font-semibold border border-white/20">
                        <TrendingUp className="w-3 h-3" />
                        {project.metrics.value}
                      </span>
                    )}
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-black/30 backdrop-blur-md flex items-center justify-center text-white border border-white/15">
                      <Layout className="w-5 h-5" />
                    </div>
                    <span className="text-xs text-white/95 font-mono font-semibold">
                      Live Project
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onSelectProject(project);
                  }}
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Batafsil ma'lumot</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playClick()}
                      className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                      title="GitHub manba kodi"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFx.playClick()}
                      className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-600/30 hover:bg-indigo-100 dark:hover:bg-indigo-600/50 text-indigo-600 dark:text-indigo-300 hover:text-indigo-700 dark:hover:text-white border border-indigo-200 dark:border-indigo-500/30 transition-colors cursor-pointer"
                      title="Jonli versiyani ko'rish"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900/40 rounded-3xl border border-slate-200 dark:border-slate-800">
            <Layers className="w-8 h-8 text-slate-400 dark:text-slate-600 mx-auto mb-3" />
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Qidiruv bo'yicha loyihalar topilmadi.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
