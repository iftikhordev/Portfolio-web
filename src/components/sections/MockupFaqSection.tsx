import React, { useState } from 'react';
import { soundFx } from '../../services/soundFx';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface MockupFaqSectionProps {
  lang: 'en' | 'uz';
  onContactClick: () => void;
}

export const MockupFaqSection: React.FC<MockupFaqSectionProps> = ({
  lang,
  onContactClick
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: lang === 'en' ? "How can I get a quote?" : "Qanday qilib narx hisobini olishim mumkin?",
      a: lang === 'en'
        ? "You can easily request a quote by filling out our project form above. Detail your scope, timeline, and goals, and our engineering team will provide a comprehensive proposal within 24 hours."
        : "Yuqoridagi loyiha formasini to'ldirish orqali osonlik bilan narx hisobini olishingiz mumkin. Loyihangiz maqsadi va muddatini kiriting, muhandislarimiz 24 soat ichida batafsil tijorat taklifini yuborishadi."
    },
    {
      q: lang === 'en' ? "What services do you offer?" : "Qanday xizmatlarni taqdim etasiz?",
      a: lang === 'en'
        ? "We specialize in end-to-end digital engineering: high-performance React & Next.js web applications, full-stack microservices, bespoke UI/UX design, cloud architecture, and modern AI integrations."
        : "Biz to'liq raqamli muhandislik xizmatlarini taqdim etamiz: yuqori tezlikdagi React & Next.js ilovalari, full-stack mikroxizmatlar, eksklyuziv UI/UX dizayn, bulutli arxitektura va sun'iy intellekt integratsiyalari."
    },
    {
      q: lang === 'en' ? "Do you work with international clients?" : "Xalqaro mijozlar bilan ishlaysizmi?",
      a: lang === 'en'
        ? "Yes! Over 60% of our partner projects are distributed globally across North America, Europe, Asia, and the Middle East. We ensure seamless agile sprints and transparent communication."
        : "Ha! Loyihalarimizning 60% dan ortig'i AQSh, Yevropa, Yaqin Sharq va Osiyodagi xalqaro kompaniyalar bilan amalga oshirilgan. Biz qulay vaqt zonalari va doimiy aloqani ta'minlaymiz."
    },
    {
      q: lang === 'en' ? "What is your typical project timeline?" : "Loyihani topshirish o'rtacha muddati qancha?",
      a: lang === 'en'
        ? "Fast MVPs and conversion landing pages are typically delivered in 2 to 4 weeks. Full-scale SaaS platforms or custom enterprise portals usually span 6 to 12 weeks with weekly sprint demos."
        : "Tezkor MVP va startap ilovalari 2-4 haftada topshiriladi. Yirik SaaS platformalar va korporativ portallar esa 6-12 hafta davomida har haftalik natijalar bilan yetkazib beriladi."
    },
    {
      q: lang === 'en' ? "Can I schedule a call or meeting?" : "Qo'ng'iroq yoki uchrashuv belgilash mumkinmi?",
      a: lang === 'en'
        ? "Absolutely. Click 'Let's Talk' at the top or send a quick message in the form. We'll immediately share our direct discovery calendar link so you can pick a time that works best."
        : "Albatta. Yuqoridagi 'Bog'lanish' tugmasini bosing yoki xabar qoldiring. Biz sizga zudlik bilan qulay vaqtni tanlash uchun onlayn kalendar havolasini yuboramiz."
    }
  ];

  const toggleFaq = (index: number) => {
    soundFx.playClick();
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#050710] text-white relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Unified Card Container matching the mockup */}
        <div className="bg-[#090D1A]/95 border border-slate-800 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Part: Branded Coffee Mug on Desk Photo */}
            <div className="lg:col-span-3 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 h-[260px] lg:h-[340px] bg-slate-950 group">
                <img
                  src="/src/assets/images/ceramic_mug_desk_1793635730017.jpg"
                  alt="Ceramic coffee mug on wooden desk"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Yellow "AS" logo on the mug */}
                <div className="absolute bottom-6 left-6 w-9 h-9 rounded-xl bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center shadow-lg shadow-amber-400/30">
                  AS
                </div>
                
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Middle Part: Headline & Handwritten Note */}
            <div className="lg:col-span-4 space-y-4 text-left">
              {/* Tag: • FAQ */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-slate-300 font-semibold uppercase text-[11px]">FAQ</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {lang === 'en' ? (
                  <>
                    Common Questions <br />
                    <span className="font-serif-italic text-amber-400 font-normal">Answered</span>
                  </>
                ) : (
                  <>
                    Ko'p Beriladigan <br />
                    <span className="font-serif-italic text-amber-400 font-normal">Savollarga Javoblar</span>
                  </>
                )}
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
                {lang === 'en'
                  ? "Got questions? We've got answers. Check out our FAQs or reach out if you need more help."
                  : "Savollaringiz bormi? Bizda javoblar tayyor. Quyidagi savollarni ko'ring yoki qo'shimcha ma'lumot uchun bizga yozing."}
              </p>

              {/* Handwritten Yellow Note: Still have questions? Contact us! */}
              <div className="pt-6">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    onContactClick();
                  }}
                  className="flex items-center gap-1 font-handwriting text-amber-300 text-xl font-bold -rotate-3 hover:text-amber-200 transition-colors cursor-pointer group text-left"
                >
                  <span>{lang === 'en' ? "Still have questions? Contact us!" : "Yana savollaringiz bormi? Yozing!"}</span>
                  <span className="text-amber-400 group-hover:translate-x-1 transition-transform">→</span>
                </button>
                <svg className="w-14 h-8 text-amber-300 ml-16 -mt-1" viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M 10,10 Q 40,40 65,25" />
                  <path d="M 55,20 L 65,25 L 60,35" />
                </svg>
              </div>
            </div>

            {/* Right Part: Accordion Items */}
            <div className="lg:col-span-5 space-y-2.5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className={`rounded-2xl border transition-all overflow-hidden ${
                      isOpen
                        ? 'bg-[#0D1326] border-amber-400/50 shadow-md'
                        : 'bg-[#070A14] border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-5 py-4 flex items-center justify-between text-left cursor-pointer gap-3"
                    >
                      <span className={`text-xs sm:text-sm font-semibold transition-colors ${
                        isOpen ? 'text-amber-400' : 'text-slate-200 hover:text-white'
                      }`}>
                        {faq.q}
                      </span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-900 text-slate-400 border border-slate-800'
                      }`}>
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-4 text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
