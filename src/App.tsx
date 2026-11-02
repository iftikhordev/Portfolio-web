import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { MockupHero } from './components/sections/MockupHero';
import { MockupAboutSection } from './components/sections/MockupAboutSection';
import { MockupServicesSection } from './components/sections/MockupServicesSection';
import { MockupWorkSection, type CaseStudy } from './components/sections/MockupWorkSection';
import { MockupContactSection } from './components/sections/MockupContactSection';
import { MockupOfficeSection } from './components/sections/MockupOfficeSection';
import { MockupFaqSection } from './components/sections/MockupFaqSection';
import { MockupCtaBanner } from './components/sections/MockupCtaBanner';
import { MockupFooter } from './components/sections/MockupFooter';
import { VideoStoryModal } from './components/modals/VideoStoryModal';
import { GoogleMapModal } from './components/modals/GoogleMapModal';
import { CaseStudyDetailModal } from './components/modals/CaseStudyDetailModal';
import { AmbientMusicPlayer } from './components/layout/AmbientMusicPlayer';
import { soundFx } from './services/soundFx';

export default function App() {
  // Theme state
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    return saved !== null ? saved === 'dark' : true;
  });

  // Language state (EN / UZ, default EN to match exact mockup)
  const [lang, setLang] = useState<'en' | 'uz'>('en');

  // Modals state
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isMapModalOpen, setIsMapModalOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Active service selection for contact form
  const [selectedService, setSelectedService] = useState<string>('Web Development');

  // Sync dark class on document element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('portfolio_theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleToggleTheme = () => {
    soundFx.playClick();
    setIsDarkMode((prev) => !prev);
  };

  const handleToggleLang = () => {
    soundFx.playClick();
    setLang((prev) => (prev === 'en' ? 'uz' : 'en'));
  };

  const scrollToContact = () => {
    soundFx.playClick();
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectService = (serviceName: string) => {
    soundFx.playClick();
    setSelectedService(serviceName);
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenCaseStudy = (study: CaseStudy) => {
    soundFx.playClick();
    setSelectedCaseStudy(study);
  };

  const handleStartSimilarProject = (title: string) => {
    soundFx.playSuccess();
    setSelectedCaseStudy(null);
    setSelectedService(title);
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050710] text-slate-900 dark:text-slate-100 selection:bg-amber-400 selection:text-slate-950 transition-colors duration-300 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navigation Bar with exact AS Digital branding */}
      <Navbar
        isDarkMode={isDarkMode}
        onToggleTheme={handleToggleTheme}
        lang={lang}
        onToggleLang={handleToggleLang}
        onOpenContact={scrollToContact}
      />

      {/* Main Sections matching the exact mockup flow + expanded content */}
      <main>
        {/* Section 1: Hero */}
        <MockupHero
          lang={lang}
          onOpenMessage={scrollToContact}
          onOpenVideo={() => setIsVideoModalOpen(true)}
        />

        {/* Section 2: About AS Digital */}
        <MockupAboutSection
          lang={lang}
          onContactClick={scrollToContact}
        />

        {/* Section 3: High-Impact Services */}
        <MockupServicesSection
          lang={lang}
          onSelectService={handleSelectService}
        />

        {/* Section 4: Featured Portfolio / Case Studies */}
        <MockupWorkSection
          lang={lang}
          onSelectCaseStudy={handleOpenCaseStudy}
        />

        {/* Section 5: Contact Info & Interactive Form */}
        <MockupContactSection 
          lang={lang} 
          initialService={selectedService}
        />

        {/* Section 6: Visit Our Office & Location Map */}
        <MockupOfficeSection
          lang={lang}
          onOpenMapModal={() => setIsMapModalOpen(true)}
        />

        {/* Section 7: Common Questions Answered (FAQ) */}
        <MockupFaqSection
          lang={lang}
          onContactClick={scrollToContact}
        />

        {/* Section 8: Pre-Footer CTA Banner */}
        <MockupCtaBanner
          lang={lang}
          onGetStarted={scrollToContact}
        />
      </main>

      {/* Section 9: Footer */}
      <MockupFooter lang={lang} />

      {/* Floating Calm Ambient Music Player */}
      <AmbientMusicPlayer lang={lang} />

      {/* Interactive Modals */}
      {isVideoModalOpen && (
        <VideoStoryModal
          lang={lang}
          onClose={() => setIsVideoModalOpen(false)}
        />
      )}

      {isMapModalOpen && (
        <GoogleMapModal
          lang={lang}
          onClose={() => setIsMapModalOpen(false)}
        />
      )}

      {selectedCaseStudy && (
        <CaseStudyDetailModal
          study={selectedCaseStudy}
          lang={lang}
          onClose={() => setSelectedCaseStudy(null)}
          onStartSimilarProject={handleStartSimilarProject}
        />
      )}
    </div>
  );
}
