import React, { useState } from 'react';
import { Shield, Zap, Phone, Mail, Globe, Palette, Video, Search, Laptop } from 'lucide-react';
import { IndustrySearchBar } from './components/IndustrySearchBar';
import { WebsiteHeaders } from './components/WebsiteHeaders';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Logo } from './components/Logo';
import { MainSearchBar } from './components/MainSearchBar';
import { WebsitePricingModal } from './components/modals/WebsitePricingModal';
import { BrandingDesignModal } from './components/modals/BrandingDesignModal';
import { VideoEditingModal } from './components/modals/VideoEditingModal';
import { AIIntegrationModal } from './components/modals/AIIntegrationModal';
import { DigitalMarketingModal } from './components/modals/DigitalMarketingModal';

export default function App() {
  const [isWebsitePricingOpen, setIsWebsitePricingOpen] = useState(false);
  const [isBrandingDesignOpen, setIsBrandingDesignOpen] = useState(false);
  const [isVideoEditingOpen, setIsVideoEditingOpen] = useState(false);
  const [isAIIntegrationOpen, setIsAIIntegrationOpen] = useState(false);
  const [isDigitalMarketingOpen, setIsDigitalMarketingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-sky-950 mb-6">
            Transform Your Website with AI-Powered Search
          </h1>
          <p className="text-xl text-sky-700 mb-12">
            Intelligent search bars tailored to your industry, matched to your website design and integrated with no change to website code
          </p>
          <MainSearchBar />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sky-50/50 to-indigo-50/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-sky-950 text-center mb-4">Our Services</h2>
          <div className="text-center mb-12">
            <p className="text-xl text-sky-700">
              Click each for more info or <span className="text-sky-950 font-semibold">WhatsApp us</span> for quick response
            </p>
            <p className="text-sky-600 mt-2">Time is not on our side in business</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Service Cards */}
            <div 
              className="group relative bg-white/80 backdrop-blur-xl rounded-xl p-6 cursor-pointer border border-sky-100 hover:bg-sky-50/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsWebsitePricingOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-indigo-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Globe className="w-12 h-12 text-sky-600 mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-sky-950 mb-2 relative z-10">Modern Websites</h3>
              <p className="text-sky-700 mb-4 relative z-10">Responsive, fast-loading websites built with the latest technologies</p>
              <p className="text-sky-950 font-semibold relative z-10">from £500</p>
            </div>
            
            <div 
              className="group relative bg-white/80 backdrop-blur-xl rounded-xl p-6 cursor-pointer border border-sky-100 hover:bg-sky-50/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsBrandingDesignOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-indigo-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Palette className="w-12 h-12 text-sky-600 mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-sky-950 mb-2 relative z-10">Branding & Design</h3>
              <p className="text-sky-700 mb-4 relative z-10">Logo design, brand identity, and visual storytelling</p>
              <p className="text-sky-950 font-semibold relative z-10">from £250</p>
            </div>
            
            <div 
              className="group relative bg-white/80 backdrop-blur-xl rounded-xl p-6 cursor-pointer border border-sky-100 hover:bg-sky-50/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsVideoEditingOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-indigo-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Video className="w-12 h-12 text-sky-600 mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-sky-950 mb-2 relative z-10">Video Editing</h3>
              <p className="text-sky-700 mb-4 relative z-10">Professional video editing for social media</p>
              <p className="text-sky-950 font-semibold relative z-10">from £500/month</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div 
              className="group relative bg-white/80 backdrop-blur-xl rounded-xl p-6 cursor-pointer border border-sky-100 hover:bg-sky-50/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsAIIntegrationOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-indigo-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Search className="w-12 h-12 text-sky-600 mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-sky-950 mb-2 relative z-10">AI Integration</h3>
              <p className="text-sky-700 mb-4 relative z-10">Smart search solutions and AI-powered features</p>
              <p className="text-sky-950 font-semibold relative z-10">from £1000</p>
            </div>
            
            <div 
              className="group relative bg-white/80 backdrop-blur-xl rounded-xl p-6 cursor-pointer border border-sky-100 hover:bg-sky-50/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsDigitalMarketingOpen(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 to-indigo-100/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <Laptop className="w-12 h-12 text-sky-600 mb-4 relative z-10" />
              <h3 className="text-xl font-bold text-sky-950 mb-2 relative z-10">Digital Marketing</h3>
              <p className="text-sky-700 mb-4 relative z-10">Full-service digital marketing and SEO optimization</p>
              <p className="text-sky-950 font-semibold relative z-10">Custom Packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Web Search Bar Section */}
      <section id="solutions" className="py-16 bg-gradient-to-r from-sky-50 to-indigo-50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-sky-950 text-center mb-12">AI Web Search Bar - Upgrade Your Site</h2>
          
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-sky-100">
              <ul className="text-sky-700 space-y-3">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                  Attract more visitors
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                  Increase user engagement
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                  Build trust instantly
                </li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-sky-100">
              <ul className="text-sky-700 space-y-3">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                  Capture more leads
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                  Reduce support workload
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                  Highlight expertise
                </li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur-xl rounded-xl p-6 shadow-lg border border-sky-100">
              <ul className="text-sky-700 space-y-3">
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                  Encourage repeat visits
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                  Boost SEO ranking
                </li>
                <li className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                  Drive upsell opportunities
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <IndustrySearchBar industry="legal" showUpdates />
            <IndustrySearchBar industry="medical" showUpdates />
            <IndustrySearchBar industry="aesthetics" showUpdates />
            <IndustrySearchBar industry="dental" showUpdates />
            <IndustrySearchBar industry="financial" showUpdates />
            <IndustrySearchBar industry="realestate" showUpdates />
            <IndustrySearchBar industry="fitness" showUpdates />
            <IndustrySearchBar industry="education" showUpdates />
            <IndustrySearchBar industry="tech" showUpdates />
            <IndustrySearchBar industry="hospitality" showUpdates />
          </div>
        </div>
      </section>

      {/* Website Headers Section */}
      <section id="examples" className="py-16 bg-gradient-to-r from-sky-100 to-indigo-100 backdrop-blur-lg">
        <WebsiteHeaders />
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-gradient-to-b from-sky-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-sky-100">
            <h2 className="text-3xl font-bold text-sky-950 text-center mb-8">Ready to Transform Your Website?</h2>
            
            <div className="max-w-2xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Email Contact */}
                <a href="mailto:hello@infinitixglobal.com" 
                   className="flex items-center justify-center gap-3 bg-sky-50 hover:bg-sky-100 transition-colors rounded-xl p-4 text-sky-950 border border-sky-100">
                  <Mail className="w-6 h-6" />
                  <span>hello@infinitixglobal.com</span>
                </a>

                {/* WhatsApp Contact */}
                <a href="https://wa.me/447466219342" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="flex items-center justify-center gap-3 bg-sky-50 hover:bg-sky-100 transition-colors rounded-xl p-4 text-sky-950 border border-sky-100">
                  <Phone className="w-6 h-6" />
                  <span>+44 7466 219342</span>
                </a>
              </div>

              <div className="mt-8 text-center">
                <button className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white px-8 py-3 rounded-full font-medium hover:from-sky-500 hover:to-indigo-500 transition-colors shadow-lg">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <WebsitePricingModal 
        isOpen={isWebsitePricingOpen}
        onClose={() => setIsWebsitePricingOpen(false)}
      />

      <BrandingDesignModal
        isOpen={isBrandingDesignOpen}
        onClose={() => setIsBrandingDesignOpen(false)}
      />

      <VideoEditingModal
        isOpen={isVideoEditingOpen}
        onClose={() => setIsVideoEditingOpen(false)}
      />

      <AIIntegrationModal
        isOpen={isAIIntegrationOpen}
        onClose={() => setIsAIIntegrationOpen(false)}
      />

      <DigitalMarketingModal
        isOpen={isDigitalMarketingOpen}
        onClose={() => setIsDigitalMarketingOpen(false)}
      />
    </div>
  );
}