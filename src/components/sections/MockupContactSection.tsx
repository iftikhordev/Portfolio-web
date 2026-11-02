import React, { useState } from 'react';
import { soundFx } from '../../services/soundFx';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  Lock,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface MockupContactSectionProps {
  lang: 'en' | 'uz';
  initialService?: string;
}

export const MockupContactSection: React.FC<MockupContactSectionProps> = ({ lang, initialService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneCode: '+998',
    phoneNumber: '93 906 33 44',
    service: initialService || 'Web Development',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync initialService if user selects from Services or Work sections
  React.useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        service: initialService
      }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      soundFx.playSuccess();
      setFormData({
        name: '',
        email: '',
        phoneCode: '+91',
        phoneNumber: '',
        service: 'Web Development',
        message: ''
      });
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#050710] text-white overflow-hidden">
      {/* Background glow and curved ribbon wave */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-indigo-900/15 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 right-0 w-[600px] h-[600px] bg-blue-900/15 blur-[170px] pointer-events-none rounded-full" />

      {/* Decorative Folded Origami Yellow Paper Plane */}
      <div className="absolute left-6 top-1/3 z-10 hidden md:block select-none pointer-events-none">
        <svg className="w-16 h-16 text-amber-400 drop-shadow-xl -rotate-12 animate-pulse" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,25 L90,15 L45,85 L35,55 Z" opacity="0.9" />
          <path d="M45,85 L90,15 L35,55 Z" fill="#F59E0B" />
          <path d="M35,55 L45,85 L42,65 Z" fill="#D97706" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Contact Channels & Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              {/* Tag: • OUR CONTACT */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="text-slate-300 font-semibold tracking-wider uppercase text-[11px]">
                  {lang === 'en' ? 'OUR CONTACT' : 'BIZ BILAN ALOQA'}
                </span>
              </div>

              {/* Title with italic serif accent */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {lang === 'en' ? (
                  <>
                    Get In Touch <br />
                    <span className="font-serif-italic text-amber-400 font-normal">With Us</span>
                  </>
                ) : (
                  <>
                    Biz Bilan <br />
                    <span className="font-serif-italic text-amber-400 font-normal">Bog'laning</span>
                  </>
                )}
              </h2>

              <p className="text-sm text-slate-400 leading-relaxed mt-4 max-w-md">
                {lang === 'en'
                  ? "We're always here to help, whether you have a question, a proposal, or just want to say hello."
                  : "Biz har doim yordamga tayyormiz, savolingiz bormi, taklifingiz yoki shunchaki salomlashmoqchimisiz."}
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-6 pt-2">
              {/* Email Us */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0 group-hover:border-amber-400/60 transition-colors shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {lang === 'en' ? 'Email Us' : 'Elektron Pochta'}
                  </h4>
                  <a href="mailto:iftikhordev@gmail.com" className="text-sm font-semibold text-white hover:text-amber-400 transition-colors block mt-0.5 font-mono">
                    iftikhordev@gmail.com
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === 'en' ? "We'll reply within 24 hours." : "24 soat ichida javob beramiz."}
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0 group-hover:border-amber-400/60 transition-colors shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {lang === 'en' ? 'Call Us' : 'Telefon'}
                  </h4>
                  <a href="tel:+998939063344" className="text-sm font-semibold text-white hover:text-amber-400 transition-colors block mt-0.5 font-mono">
                    +998 93 906 33 44
                  </a>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {lang === 'en' ? "Mon - Fri, 9AM - 6PM" : "Dush - Juma, 9:00 - 18:00"}
                  </p>
                </div>
              </div>

              {/* Visit Us */}
              <a 
                href="https://maps.app.goo.gl/D5MZai4GWfDGtVEMA"
                target="_blank"
                rel="noreferrer"
                onClick={() => soundFx.playClick()}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0 group-hover:border-amber-400/60 transition-colors shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-amber-400 transition-colors flex items-center gap-1.5">
                    <span>{lang === 'en' ? 'Visit Us' : 'Manzilimiz'}</span>
                    <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-400 transition-colors" />
                  </h4>
                  <p className="text-sm font-semibold text-white mt-0.5 leading-snug group-hover:text-amber-300 transition-colors">
                    {lang === 'en' ? (
                      <>
                        Samarkand region, Jomboy district, <br />
                        Tut quarter, Uzbekistan
                      </>
                    ) : (
                      <>
                        Samarqand viloyati, Jomboy tumani, <br />
                        Tut mahallasi, O'zbekiston
                      </>
                    )}
                  </p>
                </div>
              </a>

              {/* Follow Us */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-400 shrink-0 group-hover:border-amber-400/60 transition-colors shadow-md">
                  <Send className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {lang === 'en' ? 'Follow & Chat' : 'Ijtimoiy Tarmoqlar'}
                  </h4>
                  <div className="flex items-center gap-3.5 mt-2 text-slate-300">
                    {/* Telegram */}
                    <a 
                      href="https://t.me/iftikhordev" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 flex items-center justify-center hover:text-amber-400 hover:scale-110 transition-all" 
                      title="Telegram: @iftikhordev"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                    {/* Instagram */}
                    <a 
                      href="https://instagram.com/iftikhordev" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 flex items-center justify-center hover:text-amber-400 hover:scale-110 transition-all" 
                      title="Instagram: @iftikhordev"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    {/* LinkedIn */}
                    <a 
                      href="https://linkedin.com/in/iftikhorturamuradov" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 flex items-center justify-center hover:text-amber-400 hover:scale-110 transition-all" 
                      title="LinkedIn: iftikhorturamuradov"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    {/* X (Twitter) */}
                    <a 
                      href="https://x.com/iftikhordev" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 flex items-center justify-center hover:text-amber-400 hover:scale-110 transition-all" 
                      title="X: @iftikhordev"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    {/* YouTube */}
                    <a 
                      href="https://youtube.com/@iftikhorvlogs" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-400 flex items-center justify-center hover:text-amber-400 hover:scale-110 transition-all" 
                      title="YouTube: @iftikhorvlogs"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 font-mono">
                    Telegram: @iftikhordev
                  </p>
                </div>
              </div>
            </div>

            {/* Handwritten note: "Let's Connect!" with curvy arrow */}
            <div className="pt-2 pl-4">
              <div className="font-handwriting text-amber-300 text-3xl font-bold -rotate-6 inline-block">
                Let's Connect!
              </div>
              <svg className="w-12 h-8 text-amber-300 ml-14 -mt-1" viewBox="0 0 80 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M 10,10 Q 40,40 65,25" />
                <path d="M 55,20 L 65,25 L 60,35" />
              </svg>
            </div>
          </div>

          {/* Right Column: Interactive "Tell Us About Your Project" Form */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#090D1C]/90 border border-slate-800/90 hover:border-slate-700/80 rounded-3xl p-7 sm:p-9 shadow-2xl backdrop-blur-xl">
              {/* Subtle top-right handwritten squiggle */}
              <div className="absolute top-6 right-6 text-amber-300 pointer-events-none hidden sm:block">
                <svg className="w-14 h-8" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M 10,25 Q 50,5 90,25" />
                </svg>
              </div>

              {/* Card Header */}
              <div className="mb-7">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono mb-3">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-slate-300 font-semibold uppercase text-[11px]">
                    {lang === 'en' ? 'Send a Message' : 'Xabar Qoldirish'}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {lang === 'en' ? (
                    <>
                      Tell Us About <span className="font-serif-italic text-amber-400 font-normal">Your Project</span>
                    </>
                  ) : (
                    <>
                      Loyihangiz Haqida <span className="font-serif-italic text-amber-400 font-normal">Bizga Ayting</span>
                    </>
                  )}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 mt-2">
                  {lang === 'en'
                    ? "Fill out the form below and we'll get back to you with the right solution for your needs."
                    : "Quyidagi formani to'ldiring va biz sizning ehtiyojlaringizga mos yechim bilan tez orada aloqaga chiqamiz."}
                </p>
              </div>

              {/* Form Content */}
              {isSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-400 border border-amber-400/40 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">
                    {lang === 'en' ? "Thank You! We've Received Your Message." : "Rahmat! Xabaringiz Qabul Qilindi."}
                  </h4>
                  <p className="text-sm text-slate-400 max-w-md mx-auto">
                    {lang === 'en'
                      ? "Our team is reviewing your project details and will get back to you within 24 hours."
                      : "Mutaxassislarimiz loyiha tafsilotlarini ko'rib chiqib, 24 soat ichida siz bilan bog'lanishadi."}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-colors cursor-pointer"
                  >
                    {lang === 'en' ? "Send Another Message" : "Yana Xabar Jo'natish"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {lang === 'en' ? 'Your Name *' : 'Ismingiz *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={lang === 'en' ? 'Enter your name' : 'Ismingizni kiriting'}
                        className="w-full px-4 py-3 bg-[#0D1326] border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {lang === 'en' ? 'Email Address *' : 'Elektron Pochta *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-[#0D1326] border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Service */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {lang === 'en' ? 'Phone Number *' : 'Telefon Raqam *'}
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={formData.phoneCode}
                          onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                          className="px-2.5 py-3 bg-[#0D1326] border border-slate-800 rounded-xl text-xs text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="+91">+91 (IN)</option>
                          <option value="+998">+998 (UZ)</option>
                          <option value="+1">+1 (US)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+971">+971 (UAE)</option>
                        </select>
                        <input
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                          placeholder="98765 43210"
                          className="flex-1 px-4 py-3 bg-[#0D1326] border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        {lang === 'en' ? 'Service Interested In' : 'Qiziqqan Xizmatingiz'}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0D1326] border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-amber-400"
                      >
                        {![
                          "Web Development",
                          "Full-Stack Application",
                          "UI/UX & Product Design",
                          "Cloud & AI Solutions",
                          "Custom Enterprise SaaS"
                        ].includes(formData.service) && (
                          <option value={formData.service}>{formData.service}</option>
                        )}
                        <option value="Web Development">Web Development</option>
                        <option value="Full-Stack Application">Full-Stack Application</option>
                        <option value="UI/UX & Product Design">UI/UX & Product Design</option>
                        <option value="Cloud & AI Solutions">Cloud & AI Solutions</option>
                        <option value="Custom Enterprise SaaS">Custom Enterprise SaaS</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Your Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {lang === 'en' ? 'Your Message *' : 'Xabaringiz *'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={lang === 'en' ? 'Tell us about your project, goals or any specific requirements...' : 'Loyiha maqsadi, talablar yoki muddati haqida yozing...'}
                      className="w-full px-4 py-3 bg-[#0D1326] border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-400/25 hover:shadow-xl hover:shadow-amber-400/35 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>{lang === 'en' ? "Sending..." : "Yuborilmoqda..."}</span>
                      ) : (
                        <>
                          <span>{lang === 'en' ? "Send Message" : "Xabar Yuborish"}</span>
                          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                      <Lock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{lang === 'en' ? "Your information is safe with us." : "Ma'lumotlaringiz to'liq xavfsiz."}</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
