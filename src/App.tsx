import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CompanyStats } from './components/CompanyStats';
import { ServicesSection } from './components/ServicesSection';
import { WhyDevixa } from './components/WhyDevixa';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { TechnologiesSection } from './components/TechnologiesSection';
import { IndustriesSection } from './components/IndustriesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectInquiryModal } from './components/ProjectInquiryModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'why-devixa', 'portfolio', 'solutions', 'about', 'process', 'technologies', 'testimonials', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartProject = (serviceName = '') => {
    setPreselectedService(serviceName);
    setIsInquiryModalOpen(true);
  };

  const handleExploreWork = () => {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAskQuestion = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0C10] text-[#E0E0E0] selection:bg-blue-600/30 selection:text-blue-200">
      {/* Top Fixed Sticky Navigation Bar */}
      <Navbar
        onStartProject={() => handleStartProject()}
        activeSection={activeSection}
      />

      {/* 2. Hero Section */}
      <main>
        <Hero
          onStartProject={() => handleStartProject()}
          onExploreWork={handleExploreWork}
        />

        {/* 3. Trust / Company Stats Credibility Section */}
        <CompanyStats />

        {/* 4. Services Section (No App Dev, Full Suite + Learn More Modals) */}
        <ServicesSection
          onStartProjectForService={(service) => handleStartProject(service)}
        />

        {/* 5. Why Businesses Choose Devixa Tech */}
        <WhyDevixa />

        {/* 6. Portfolio / Selected Work & 7. Detailed Case Studies */}
        <PortfolioSection
          onStartProject={() => handleStartProject()}
        />

        {/* 8. How We Work / 6-Stage Process */}
        <ProcessSection />

        {/* 9. Technologies We Build With */}
        <TechnologiesSection />

        {/* 10. Industries We Serve */}
        <IndustriesSection
          onStartProject={() => handleStartProject()}
        />

        {/* 11. About Devixa Tech (Who We Are, Mission, Vision, Values) */}
        <AboutSection />

        {/* 12. Client Testimonials */}
        <TestimonialsSection />

        {/* 13. FAQ Section */}
        <FaqSection
          onAskQuestion={handleAskQuestion}
        />

        {/* 14. Final Call To Action */}
        <FinalCta
          onStartProject={() => handleStartProject()}
        />

        {/* 15. Contact Section & Web3Forms Project Inquiry */}
        <ContactSection
          initialService={preselectedService}
        />
      </main>

      {/* 16. Footer */}
      <Footer
        onStartProject={() => handleStartProject()}
      />

      {/* Quick Project Inquiry Modal */}
      <ProjectInquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => {
          setIsInquiryModalOpen(false);
          setPreselectedService('');
        }}
        preselectedService={preselectedService}
      />
    </div>
  );
}
