import React, { useState } from 'react';
import { soundFx } from '../../services/soundFx';
import { 
  ArrowRight, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube,
  Send,
  Check
} from 'lucide-react';

interface MockupFooterProps {
  lang: 'en' | 'uz';
}

export const MockupFooter: React.FC<MockupFooterProps> = ({ lang }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    soundFx.playSuccess();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const navLinks = [
    { label: lang === 'en' ? 'Home' : 'Bosh sahifa', href: '#home' },
    { label: lang === 'en' ? 'About' : 'Biz haqimizda', href: '#about' },
    { label: lang === 'en' ? 'Services' : 'Xizmatlar', href: '#services' },
    { label: lang === 'en' ? 'Work' : 'Loyihalar', href: '#work' },
    { label: lang === 'en' ? 'Blog' : 'Blog', href: '#faq' },
    { label: lang === 'en' ? 'Contact' : 'Aloqa', href: '#contact' },
  ];

  return (
    <footer className="bg-[#03050C] text-white border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid: Brand, Nav links, Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-3">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-[#090D1A] border border-amber-400/40 p-1 flex items-center justify-center shadow-lg group-hover:border-amber-400 transition-colors">
                <img 
                  src="/assets/aistudio/_________-1_322dc622.png" 
                  alt="IT Logo" 
                  className="w-full h-full object-contain filter drop-shadow group-hover:scale-105 transition-transform" 
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-extrabold text-base tracking-tight text-white font-sans">
                    IT
                  </span>
                  <span className="font-light text-base tracking-tight text-amber-400">
                    Digital
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono -mt-0.5">
                  Iftikhor Turamuradov
                </span>
              </div>
            </a>

            <p className="text-xs font-mono text-slate-400 tracking-wide">
              Iftikhor Turamuradov — Lead Software Engineer
            </p>
            <p className="text-[11px] text-slate-500">
              <a 
                href="https://maps.app.goo.gl/D5MZai4GWfDGtVEMA" 
                target="_blank" 
                rel="noreferrer"
                className="hover:text-amber-400 transition-colors underline decoration-slate-700 underline-offset-2"
              >
                Samarkand, Uzbekistan
              </a> • <a href="mailto:iftikhordev@gmail.com" className="hover:text-amber-400 transition-colors">iftikhordev@gmail.com</a>
            </p>
          </div>

          {/* Nav Links in Center */}
          <div className="md:col-span-4 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs font-medium text-slate-400">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => soundFx.playClick()}
                className="hover:text-amber-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Newsletter on Right */}
          <div className="md:col-span-4 space-y-2.5">
            <h4 className="text-xs font-bold text-white tracking-wide">
              {lang === 'en' ? "Join Our Newsletter" : "Yangiliklarimizga Obuna Bo'ling"}
            </h4>
            <p className="text-xs text-slate-400">
              {lang === 'en' ? "Get the latest updates and insights directly." : "So'nggi tendentsiyalar va foydali ma'lumotlarni oling."}
            </p>

            {/* Newsletter input */}
            <form onSubmit={handleSubscribe} className="relative flex items-center mt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === 'en' ? "Your email address" : "Email manzilingiz"}
                className="w-full pl-4 pr-12 py-2.5 bg-[#0A0E1F] border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors font-mono"
              />
              <button
                type="submit"
                className="absolute right-1.5 w-8 h-8 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center transition-colors cursor-pointer"
                title="Obuna bo'lish"
              >
                {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />}
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Socials, Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} AS Digital — Iftikhor Turamuradov. {lang === 'en' ? "All rights reserved." : "Barcha huquqlar himoyalangan."}
          </div>

          {/* Social Icons matching user links */}
          <div className="flex items-center gap-4 text-slate-400">
            {/* Telegram */}
            <a 
              href="https://t.me/iftikhordev" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-amber-400 hover:scale-110 transition-all"
              title="Telegram: @iftikhordev"
            >
              <Send className="w-4 h-4" />
            </a>
            {/* Instagram */}
            <a 
              href="https://instagram.com/iftikhordev" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-amber-400 hover:scale-110 transition-all"
              title="Instagram: @iftikhordev"
            >
              <Instagram className="w-4 h-4" />
            </a>
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/iftikhorturamuradov" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-amber-400 hover:scale-110 transition-all"
              title="LinkedIn: iftikhorturamuradov"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            {/* X */}
            <a 
              href="https://x.com/iftikhordev" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-amber-400 hover:scale-110 transition-all"
              title="X: @iftikhordev"
            >
              <Twitter className="w-4 h-4" />
            </a>
            {/* YouTube */}
            <a 
              href="https://youtube.com/@iftikhorvlogs" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-amber-400 hover:scale-110 transition-all"
              title="YouTube: @iftikhorvlogs"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>

          {/* Legal info */}
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span className="hover:text-slate-300 transition-colors">
              {lang === 'en' ? "Privacy Protected" : "Maxfiylik Kafolatlangan"}
            </span>
            <span>·</span>
            <span className="hover:text-slate-300 transition-colors">
              {lang === 'en' ? "Standard SLA & NDA" : "SLA & NDA Kafolati"}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
