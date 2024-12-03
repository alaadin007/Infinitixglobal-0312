import React from 'react';
import { HeaderContainer } from './HeaderContainer';
import { Search, Heart, Scale, Smile, Home, Sparkles } from 'lucide-react';
import { IndustrySearchBar } from './IndustrySearchBar';
import { PromotionalUpdate } from './PromotionalUpdate';

export function WebsiteHeaders() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
          Example Website Integrations
        </h2>
        <p className="mt-3 text-sky-700">
          Your website can be powered by AI to convert traffic and establish you as the industry expert
        </p>
      </div>

      {/* MediCare Plus */}
      <HeaderContainer 
        className="bg-gradient-to-r from-blue-500 to-blue-600"
        searchSection={
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="flex items-center">
              <Search className="w-5 h-5 text-white/70" />
              <input
                type="text"
                placeholder="Search medical services..."
                className="w-full ml-3 bg-transparent text-white placeholder-white/70 focus:outline-none"
              />
            </div>
          </div>
        }
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Heart className="w-8 h-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">MediCare Plus</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-white/90">
              <a href="#services">Services</a>
              <a href="#doctors">Doctors</a>
              <a href="#appointments">Appointments</a>
            </nav>
          </div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-full font-medium hover:bg-white/90">
            Book Appointment
          </button>
        </div>
      </HeaderContainer>

      {/* Justice & Associates */}
      <HeaderContainer 
        className="bg-gradient-to-r from-gray-900 to-blue-900"
        searchSection={
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="flex items-center">
              <Search className="w-5 h-5 text-white/70" />
              <input
                type="text"
                placeholder="Search legal resources..."
                className="w-full ml-3 bg-transparent text-white placeholder-white/70 focus:outline-none"
              />
            </div>
          </div>
        }
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Scale className="w-8 h-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Justice & Associates</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-white/90">
              <a href="#practice-areas">Practice Areas</a>
              <a href="#attorneys">Attorneys</a>
              <a href="#resources">Resources</a>
            </nav>
          </div>
          <button className="bg-amber-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-400">
            Free Consultation
          </button>
        </div>
      </HeaderContainer>

      {/* Bright Smile Dental */}
      <HeaderContainer 
        className="bg-white border border-gray-200"
        searchSection={
          <div className="bg-gray-100 rounded-lg px-4 py-2">
            <div className="flex items-center">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search dental services..."
                className="w-full ml-3 bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
              />
            </div>
          </div>
        }
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Smile className="w-8 h-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gray-900">Bright Smile Dental</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-gray-600">
              <a href="#treatments">Treatments</a>
              <a href="#our-team">Our Team</a>
              <a href="#patient-info">Patient Info</a>
            </nav>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-400">
            Schedule Visit
          </button>
        </div>
      </HeaderContainer>

      {/* Premier Properties */}
      <HeaderContainer 
        className="bg-gradient-to-r from-emerald-600 to-green-700"
        searchSection={
          <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
            <div className="flex items-center">
              <Search className="w-5 h-5 text-white/70" />
              <input
                type="text"
                placeholder="Search properties..."
                className="w-full ml-3 bg-transparent text-white placeholder-white/70 focus:outline-none"
              />
            </div>
          </div>
        }
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Home className="w-8 h-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Premier Properties</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-white/90">
              <a href="#buy">Buy</a>
              <a href="#sell">Sell</a>
              <a href="#rent">Rent</a>
              <a href="#agents">Agents</a>
            </nav>
          </div>
          <button className="bg-white text-emerald-600 px-4 py-2 rounded-full font-medium hover:bg-white/90">
            List Property
          </button>
        </div>
      </HeaderContainer>

      {/* Serenity Spa & Beauty */}
      <HeaderContainer 
        className="bg-gradient-to-r from-pink-400 to-purple-500"
        searchSection={
          <div className="flex items-center justify-between">
            <div className="flex-1 mr-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <div className="flex items-center">
                  <Search className="w-5 h-5 text-white/70" />
                  <input
                    type="text"
                    placeholder="Ask about beauty treatments..."
                    className="w-full ml-3 bg-transparent text-white placeholder-white/70 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <PromotionalUpdate type="latest" />
              <PromotionalUpdate type="offer" />
              <PromotionalUpdate type="treatment" />
            </div>
          </div>
        }
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <Sparkles className="w-8 h-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">Serenity Spa & Beauty</span>
            </div>
            <nav className="hidden md:flex space-x-6 text-white/90">
              <a href="#treatments">Treatments</a>
              <a href="#services">Services</a>
              <a href="#specialists">Specialists</a>
              <a href="#booking">Booking</a>
            </nav>
          </div>
          <button className="bg-white text-pink-500 px-4 py-2 rounded-full font-medium hover:bg-white/90">
            Book Appointment
          </button>
        </div>
      </HeaderContainer>
    </div>
  );
}