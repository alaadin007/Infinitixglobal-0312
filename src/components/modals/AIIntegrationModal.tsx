import React from 'react';
import { X, Check, MessageSquare } from 'lucide-react';

interface AIIntegrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIIntegrationModal({ isOpen, onClose }: AIIntegrationModalProps) {
  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447466219342', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">AI Integration</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Smart Search */}
            <div className="bg-[#2D1B69] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Smart Search</h3>
              <div className="text-3xl font-bold text-white mb-4">£1000</div>
              <p className="text-gray-300 mb-4">AI-powered search for your website</p>
              
              <ul className="space-y-3 mb-6">
                {[
                  'Custom knowledge base',
                  'Natural language search',
                  'Auto-suggestions',
                  'Analytics dashboard',
                  'Content indexing',
                  'Monthly updates'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3 px-4 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Discuss on WhatsApp
              </button>
            </div>

            {/* AI Assistant */}
            <div className="bg-[#2D1B69] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">AI Assistant</h3>
              <div className="text-3xl font-bold text-white mb-4">£2000</div>
              <p className="text-gray-300 mb-4">Custom AI chatbot for your business</p>
              
              <ul className="space-y-3 mb-6">
                {[
                  'Trained on your data',
                  '24/7 customer support',
                  'Multi-language support',
                  'Analytics & insights',
                  'Admin dashboard',
                  'Regular updates'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={handleWhatsAppClick}
                className="w-full flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-full py-3 px-4 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                Discuss on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}