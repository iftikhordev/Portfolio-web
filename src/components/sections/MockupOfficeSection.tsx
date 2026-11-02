import React, { useState } from 'react';
import { soundFx } from '../../services/soundFx';
import { MapPin, Clock, Mail, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

interface MockupOfficeSectionProps {
  lang: 'en' | 'uz';
  onOpenMapModal: () => void;
}

export const MockupOfficeSection: React.FC<MockupOfficeSectionProps> = ({
  lang,
  onOpenMapModal
}) => {
  const [photoIndex, setPhotoIndex] = useState(0);

  const officePhotos = [
    {
      url: '/src/assets/images/agency_office_night_1793635729896.jpg',
      label: 'Main Studio & Open Desks'
    },
    {
      url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&auto=format&fit=crop&q=80',
      label: 'Conference Room & Strategy Bay'
    },
    {
      url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1000&auto=format&fit=crop&q=80',
      label: 'Executive Lounge & Coffee Station'
    }
  ];

  const nextPhoto = () => {
    soundFx.playClick();
    setPhotoIndex((prev) => (prev + 1) % officePhotos.length);
  };

  const prevPhoto = () => {
    soundFx.playClick();
    setPhotoIndex((prev) => (prev - 1 + officePhotos.length) % officePhotos.length);
  };

  return (
    <section id="office" className="py-20 sm:py-28 bg-white dark:bg-[#060814] text-slate-900 dark:text-white relative overflow-hidden border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified 3-Column Glassmorphic Container matching the mockup */}
        <div className="bg-slate-50 dark:bg-[#090D1A]/95 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl dark:shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Column 1: Stylized Dark Map */}
            <div className="lg:col-span-4 relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-[#070A14] h-[340px] flex flex-col justify-between p-5 group shadow-sm">
              {/* Dark Map Vector Grid Blueprint representation */}
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />
              
              {/* Simulated Map Roads & Transit Lines */}
              <svg className="absolute inset-0 w-full h-full opacity-30 stroke-slate-500 dark:stroke-slate-600" viewBox="0 0 400 340" fill="none" strokeWidth="2">
                <path d="M 0,80 L 150,120 L 260,100 L 400,160" />
                <path d="M 80,0 L 140,160 L 220,340" strokeWidth="3" stroke="#475569" />
                <path d="M 240,0 L 260,180 L 380,340" />
                <path d="M 0,240 L 160,200 L 400,260" stroke="#334155" />
              </svg>

              {/* Pin with AS Monogram & Tooltip Badge */}
              <a 
                href="https://maps.app.goo.gl/D5MZai4GWfDGtVEMA"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick()}
                className="relative z-10 my-auto flex flex-col items-center group cursor-pointer"
                title="Open in Google Maps"
              >
                {/* Tooltip badge */}
                <div className="bg-white/95 dark:bg-slate-950/95 border border-slate-200 dark:border-slate-700/80 group-hover:border-amber-400 px-3 py-1.5 rounded-xl shadow-xl flex flex-col items-center mb-2 transition-all group-hover:scale-105">
                  <span className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1">
                    Our Office <ExternalLink className="w-2.5 h-2.5 text-amber-500 dark:text-amber-400" />
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">📍 Jomboy, Samarkand</span>
                </div>

                {/* Golden Pin with IT Logo */}
                <div className="relative flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-slate-950 border-2 border-amber-400 p-1 flex items-center justify-center shadow-lg shadow-amber-400/50 ring-4 ring-amber-400/20 group-hover:ring-amber-400/50 transition-all">
                    <img 
                      src="/assets/aistudio/_________-1_322dc622.png" 
                      alt="IT Pin Logo" 
                      className="w-full h-full object-contain filter drop-shadow group-hover:scale-110 transition-transform" 
                    />
                  </div>
                  <div className="w-2.5 h-2.5 bg-amber-400 rotate-45 -mt-1" />
                </div>
              </a>

              {/* View on Google Maps Actions */}
              <div className="relative z-10 flex flex-wrap items-center gap-2">
                <a
                  href="https://maps.app.goo.gl/D5MZai4GWfDGtVEMA"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md hover:shadow-amber-400/20"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? "Open Google Maps" : "Google Xaritada Ochish"}</span>
                </a>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onOpenMapModal();
                  }}
                  className="px-3 py-2 rounded-xl bg-white dark:bg-slate-900/90 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer backdrop-blur-md shadow-sm"
                >
                  <span>{lang === 'en' ? "Preview" : "Ko'rish"}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Column 2: Location Information */}
            <div className="lg:col-span-4 space-y-6 text-left">
              <div>
                {/* Tag: • OUR LOCATION */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono mb-3 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-slate-700 dark:text-slate-300 font-semibold uppercase text-[11px]">
                    {lang === 'en' ? 'OUR LOCATION' : 'BIZNING MANZIL'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {lang === 'en' ? (
                    <>
                      Visit Our Office <br />
                      We'd Love to <span className="font-serif-italic text-amber-500 dark:text-amber-400 font-normal">Meet You</span>
                    </>
                  ) : (
                    <>
                      Ofisimizga Tashrif Buyuring <br />
                      Siz Bilan <span className="font-serif-italic text-amber-500 dark:text-amber-400 font-normal">Ko'rishishdan Mamnunmiz</span>
                    </>
                  )}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mt-3">
                  {lang === 'en'
                    ? "Come say hello! Our doors are always open to partners, clients, and creative minds. Let's grab a coffee and talk about your next big idea."
                    : "Keling va tanishing! Bizning eshiklarimiz hamkorlar, mijozlar va ijodiy mutaxassislar uchun doimo ochiq. Bir piyola qahva ustida keyingi yirik loyihangizni muhokama qilamiz."}
                </p>
              </div>

              {/* Location items with icons */}
              <div className="space-y-4 pt-1">
                <a
                  href="https://maps.app.goo.gl/D5MZai4GWfDGtVEMA"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-start gap-3 group/loc hover:opacity-95 transition-opacity"
                >
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover/loc:border-amber-400 flex items-center justify-center text-amber-500 dark:text-amber-400 shrink-0 mt-0.5 transition-colors shadow-sm">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 group-hover/loc:text-amber-500 dark:group-hover/loc:text-amber-400 flex items-center gap-1.5 transition-colors">
                      {lang === 'en' ? "Samarkand region, Jomboy district," : "Samarqand viloyati, Jomboy tumani,"}
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover/loc:text-amber-500 transition-colors" />
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {lang === 'en' ? "Tut quarter, Uzbekistan" : "Tut mahallasi, O'zbekiston"}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-amber-500 dark:text-amber-400 shrink-0 mt-0.5 shadow-sm">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                      {lang === 'en' ? "Mon - Fri, 9AM - 6PM" : "Dush - Juma, 9:00 - 18:00"}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {lang === 'en' ? "Weekend meetings by appointment" : "Dam olish kunlari kelishuv asosida"}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-amber-500 dark:text-amber-400 shrink-0 mt-0.5 shadow-sm">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <a href="mailto:iftikhordev@gmail.com" className="text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-500 dark:hover:text-amber-400 transition-colors font-mono">
                      iftikhordev@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Office Photo with Handwritten Note & Carousel Controls */}
            <div className="lg:col-span-4 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 h-[340px] bg-slate-950 shadow-xl group">
                <img
                  src={officePhotos[photoIndex].url}
                  alt={officePhotos[photoIndex].label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* AS Digital glowing sign overlay in the office */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-bold text-amber-400 text-xs tracking-wider">
                  AS Digital
                </div>

                {/* Dark gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

                {/* Handwritten yellow note & Carousel arrows */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                  <div className="flex items-center gap-1 font-handwriting text-amber-300 text-xl font-bold -rotate-3 drop-shadow-md">
                    <span>Our Office → Your Next Idea</span>
                  </div>

                  {/* Carousel Arrow Controls */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={prevPhoto}
                      className="w-8 h-8 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white flex items-center justify-center border border-slate-700 transition-colors cursor-pointer"
                      title="Oldingi rasm"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={nextPhoto}
                      className="w-8 h-8 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white flex items-center justify-center border border-slate-700 transition-colors cursor-pointer"
                      title="Keyingi rasm"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
