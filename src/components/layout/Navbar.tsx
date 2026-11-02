import React, { useState, useEffect } from 'react';
import { soundFx } from '../../services/soundFx';
import { 
  Sun, 
  Moon, 
  Volume2, 
  VolumeX, 
  ArrowRight, 
  Menu, 
  X,
  Languages
} from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
  lang: 'en' | 'uz';
  onToggleLang: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDarkMode,
  onToggleTheme,
  lang,
  onToggleLang,
  onOpenContact
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFx.getMuted());
  const [activeSection, setActiveSection] = useState('contact');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }

      // Check current section
      const sections = ['contact', 'office', 'faq', 'about', 'services', 'work', 'home'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: lang === 'en' ? 'Home' : 'Bosh sahifa', href: '#home', id: 'home' },
    { label: lang === 'en' ? 'About' : 'Biz haqimizda', href: '#about', id: 'about' },
    { label: lang === 'en' ? 'Services' : 'Xizmatlar', href: '#services', id: 'services' },
    { label: lang === 'en' ? 'Work' : 'Loyihalar', href: '#work', id: 'work' },
    { label: lang === 'en' ? 'Blog' : 'Blog', href: '#faq', id: 'faq' },
    { label: lang === 'en' ? 'Contact' : 'Aloqa', href: '#contact', id: 'contact' },
  ];

  const handleAudioToggle = () => {
    const next = soundFx.toggleMute();
    setIsMuted(next);
  };

  const scrollTo = (href: string) => {
    soundFx.playClick();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at the top */}
      <div className="fixed top-0 left-0 right-0 h-1 z-[70] bg-slate-200/40 dark:bg-slate-900/40 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 shadow-sm shadow-amber-400/50 transition-[width] duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 dark:bg-[#070A14]/90 border-b border-slate-200/80 dark:border-slate-800/80 shadow-lg backdrop-blur-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo: IT monogram emblem + Iftikhor Turamuradov */}
            <a 
              href="#home" 
              onClick={() => soundFx.playClick()}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative w-11 h-11 flex items-center justify-center p-1 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-amber-400/40 shadow-lg shadow-amber-400/10 group-hover:border-amber-400 transition-all">
                <img 
                  src="/assets/aistudio/_________-1_322dc622.png" 
                  alt="IT Logo" 
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-transform" 
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="font-extrabold text-lg tracking-tight text-slate-900 dark:text-white font-sans">
                    IT
                  </span>
                  <span className="font-light text-lg tracking-tight text-slate-800 dark:text-slate-200">
                    Digital
                  </span>
                </div>
                <span className="text-[10px] text-amber-500 dark:text-amber-400 font-mono -mt-1 font-semibold tracking-wide">
                  Iftikhor Turamuradov • Lead Engineer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id || (link.id === 'contact' && activeSection === 'contact');
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.href)}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`relative py-1 transition-colors cursor-pointer ${
                      isActive 
                        ? 'text-amber-500 dark:text-amber-400 font-semibold' 
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Controls */}
            <div className="flex items-center gap-3">
              {/* Language Switcher (EN / UZ) */}
              <button
                onClick={onToggleLang}
                className="px-2.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center gap-1 cursor-pointer"
                title="Tilni o'zgartirish (EN / UZ)"
              >
                <Languages className="w-3.5 h-3.5 text-amber-500" />
                <span className="uppercase">{lang}</span>
              </button>

              {/* Dark / Light Mode Toggle Button */}
              <button
                onClick={onToggleTheme}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                title={isDarkMode ? "Kun rejimiga o'tish" : "Tun rejimiga o'tish"}
                aria-label="Toggle theme"
              >
                {isDarkMode ? (
                  <Sun className="w-4 h-4 text-amber-400 hover:rotate-90 transition-transform duration-300" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600 hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>

              {/* Audio Toggle */}
              <button
                onClick={handleAudioToggle}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer hidden sm:flex"
                title={isMuted ? "Ovozni yoqish" : "Ovozni o'chirish"}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-amber-500" />}
              </button>

              {/* Available Developer Status Pill */}
              <div className="hidden xl:flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-xs">
                <div className="relative">
                  <img 
                    src="/assets/aistudio/Midnight_Developer_Workspace_de10e08d.png" 
                    alt="Iftikhor Turamuradov" 
                    className="w-6 h-6 rounded-full object-cover ring-1 ring-amber-400" 
                  />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 rounded-full ring-1 ring-white dark:ring-slate-950" />
                </div>
                <span className="font-mono text-[11px] text-slate-700 dark:text-slate-300 font-medium">Available</span>
              </div>

              {/* Primary "Let's Talk →" Button (matching exact golden pill in mockup) */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenContact();
                }}
                className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-400/20 hover:shadow-lg hover:shadow-amber-400/30 transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>{lang === 'en' ? "Let's Talk" : "Bog'lanish"}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => {
                  soundFx.playClick();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white flex items-center justify-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <div className="flex flex-col gap-1 items-center justify-center">
                    <span className="w-4 h-[2px] bg-slate-900 dark:bg-white rounded-full" />
                    <span className="w-4 h-[2px] bg-slate-900 dark:bg-white rounded-full" />
                    <span className="w-4 h-[2px] bg-slate-900 dark:bg-white rounded-full" />
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile / Full Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="bg-white/95 dark:bg-[#070A14]/98 border-b border-slate-200 dark:border-slate-800 px-6 pt-4 pb-6 shadow-2xl backdrop-blur-xl mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2 max-w-7xl mx-auto">
              {/* Profile Card in Mobile Menu */}
              <div className="flex items-center gap-3.5 p-3.5 bg-slate-100 dark:bg-slate-900/90 rounded-2xl border border-slate-200 dark:border-slate-800 mb-2">
                <div className="w-12 h-12 flex items-center justify-center p-1 rounded-xl bg-slate-950 border border-amber-400/50 shadow-md shrink-0">
                  <img 
                    src="/assets/aistudio/_________-1_322dc622.png" 
                    alt="IT Logo" 
                    className="w-full h-full object-contain filter drop-shadow" 
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-slate-900 dark:text-white truncate">
                    Iftikhor Turamuradov
                  </div>
                  <div className="text-xs text-amber-500 dark:text-amber-400 font-mono">
                    IT Digital • Lead Engineer
                  </div>
                </div>
                <img 
                  src="/assets/aistudio/Midnight_Developer_Workspace_de10e08d.png" 
                  alt="Iftikhor Portrait" 
                  className="w-10 h-10 rounded-xl object-cover ring-2 ring-amber-400/80 shrink-0" 
                />
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 mt-2 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  {lang === 'en' ? 'Digital Agency & Engineering' : 'Raqamli Agentlik & Dasturiy Muhandislik'}
                </span>
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setIsMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="px-4 py-2 rounded-full bg-amber-400 text-slate-950 font-bold text-xs"
                >
                  {lang === 'en' ? "Get in Touch →" : "Xabar Yuborish →"}
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
