import React, { useState } from 'react';
import { SkillItem } from '../../types/portfolio';
import { soundFx } from '../../services/soundFx';
import { 
  Code, 
  Terminal, 
  Layers, 
  Database, 
  Cpu, 
  CheckCircle2, 
  Sparkles,
  Flame
} from 'lucide-react';

interface SkillsSectionProps {
  skills: SkillItem[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(skills[0] || null);

  const categories = [
    { id: 'all', label: 'Barcha Ko\'nikmalar' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Ma\'lumotlar Bazasi' },
    { id: 'tools', label: 'DevOps & Vositalar' },
    { id: 'architecture', label: 'Arxitektura & AI' },
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/70 border border-cyan-200 dark:border-cyan-700/50 text-cyan-700 dark:text-cyan-300 text-xs font-mono mb-3">
            <span>// 02. STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Texnologiyalar & Texnik Ko'nikmalar
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Haqiqiy ishlab chiqarish (production) darajasida sinalgan zamonaviy vositalar va arxitekturalar.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat.id);
              }}
              onMouseEnter={() => soundFx.playHover()}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25'
                  : 'bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {filteredSkills.map((skill, idx) => {
            const isSelected = selectedSkill?.name === skill.name;
            return (
              <div
                key={idx}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedSkill(skill);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`p-5 rounded-2xl border transition-all cursor-pointer relative overflow-hidden shadow-sm ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-indigo-500 shadow-md shadow-indigo-500/10'
                    : 'bg-white/80 dark:bg-slate-900/60 border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900/90'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-700/60">
                      <Code className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                        {skill.name}
                      </h3>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                        {skill.projectsCount} ta loyihada qo'llanilgan
                      </span>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    skill.badge === 'Ekspert' 
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-700/60 text-emerald-700 dark:text-emerald-300' 
                      : 'bg-indigo-100 dark:bg-indigo-950/80 border-indigo-200 dark:border-indigo-700/60 text-indigo-700 dark:text-indigo-300'
                  }`}>
                    {skill.badge}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="mt-3">
                  <div className="flex justify-between text-[11px] font-mono mb-1 text-slate-500 dark:text-slate-400">
                    <span>O'zlashtirish darajasi</span>
                    <span className="text-slate-900 dark:text-white font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive CLI Terminal Sandbox for the selected skill */}
        {selectedSkill && (
          <div className="max-w-3xl mx-auto bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-slate-400">
                  tech-inspection.sh — {selectedSkill.name}
                </span>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified Competence
              </span>
            </div>

            <div className="p-5 font-mono text-xs sm:text-sm space-y-2 text-slate-300">
              <div className="text-indigo-400">
                $ iftixor --inspect-tech "{selectedSkill.name}"
              </div>
              <div className="text-slate-400 pl-4 border-l-2 border-slate-800">
                <p>Status: <span className="text-emerald-400 font-bold">100% Production Ready</span></p>
                <p>Level: <span className="text-cyan-300">{selectedSkill.level}% ({selectedSkill.badge})</span></p>
                <p>Amaliy tajriba: <span className="text-slate-200">{selectedSkill.projectsCount} ta yirik va o'rta loyihada asosiy stek sifatida foydalanilgan.</span></p>
                <p className="text-slate-500 text-[11px] pt-1">
                  // Barcha loyihalarda toza kod arxitekturasi, test qamrovi va yuqori tezlik kafolatlangan.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
