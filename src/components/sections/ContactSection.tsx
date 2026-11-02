import React, { useState } from 'react';
import { ProfileData } from '../../types/portfolio';
import { soundFx } from '../../services/soundFx';
import { 
  Mail, 
  Send, 
  CheckCircle, 
  MapPin, 
  Phone, 
  ExternalLink,
  MessageCircle,
  Github,
  Linkedin
} from 'lucide-react';

interface ContactSectionProps {
  profile: ProfileData;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playClick();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      soundFx.playSuccess();
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 900);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/70 border border-indigo-200 dark:border-indigo-700/50 text-indigo-700 dark:text-indigo-300 text-xs font-mono mb-3">
            <span>// 06. CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Bog'lanish & Yangi Loyiha
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Yangi g'oyalarni muhokama qilish, maslahat olish yoki birgalikda yirik loyiha boshlash uchun qulay kanal orqali murojaat qiling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: Contact Info & Direct Links */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                To'g'ridan-To'g'ri Aloqa
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Men odatda 1-2 soat ichida javob beraman. Telegram yoki elektron pochta orqali yozishingiz mumkin.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${profile.email}`}
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 hover:border-indigo-500/50 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Elektron pochta</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
                      {profile.email}
                    </div>
                  </div>
                </a>

                {/* Telegram */}
                <a
                  href={profile.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 hover:border-cyan-500/50 transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-600/20 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Telegram</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                      @iftixor_dev
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-600/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">Joylashuv</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {profile.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center gap-2 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => soundFx.playClick()}
                  className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white flex items-center justify-center gap-2 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Message Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            {isSent ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto border border-emerald-200 dark:border-emerald-500/30">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Xabaringiz qabul qilindi!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Rahmat! Men sizning xabaringizni oldim va tez orada elektron pochta orqali javob qaytaraman.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="px-6 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  Yana xabar jo'natish
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                      Ismingiz *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masalan: Sardorbek"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                      Email manzilingiz *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@misol.uz"
                      className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                    Loyiha mavzusi yoki yo'nalishi
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Masalan: Yangi veb-ilova / SaaS loyiha"
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 mb-1.5">
                    Xabaringiz matni *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Loyiha haqida qisqacha ma'lumot yoki taklifingiz..."
                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Yuborilmoqda...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Xabarni Yuborish</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
