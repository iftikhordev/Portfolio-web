import React from 'react';
import { TestimonialItem } from '../../types/portfolio';
import { soundFx } from '../../services/soundFx';
import { Star, Quote } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ testimonials }) => {
  return (
    <section id="testimonials" className="py-20 sm:py-28 relative bg-slate-50/70 dark:bg-slate-950/60 border-t border-slate-200/80 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-200 dark:border-amber-700/50 text-amber-700 dark:text-amber-300 text-xs font-mono mb-3">
            <span>// 05. REVIEWS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Hamkorlar & Mijozlar Fikrlari
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Birgalikda amalga oshirilgan loyihalar va sifatli hamkorlik natijalari.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => soundFx.playHover()}
              className="bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all hover:-translate-y-1 shadow-sm hover:shadow-md relative"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-300 dark:text-slate-700" />
                </div>

                {/* Feedback text */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                  "{item.feedback}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                <div className={`w-10 h-10 rounded-full ${item.avatarColor} text-white flex items-center justify-center font-bold text-sm shadow-md`}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.role}, <span className="text-indigo-600 dark:text-indigo-400 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
