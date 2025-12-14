import React from 'react';
import Navigation from '@/components/portfolio/Navigation';
import HeroSection from '@/components/portfolio/HeroSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import AboutSection from '@/components/portfolio/AboutSection';
import CertificatesSection from '@/components/portfolio/CertificatesSection';
import ContactSection from '@/components/portfolio/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#0d1410] to-[#0a0a0a] text-[#f8f9fa] font-sans antialiased selection:bg-[#2e8b57]/40 selection:text-[#f8f9fa]">
      {/* Custom Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #2e8b57;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #4ade80;
        }
      `}</style>

      <Navigation />
      
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <CertificatesSection />
        <ContactSection />
      </main>
    </div>
  );
}