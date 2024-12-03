import React from 'react';
import { X, Check, MessageSquare } from 'lucide-react';

interface WebsitePricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WebsitePricingModal({ isOpen, onClose }: WebsitePricingModalProps) {
  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447466219342', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Modern Websites</h2>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-400" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Single Page Website */}
            <div className="bg-[#2D1B69] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Single Page Website</h3>
              <div className="text-3xl font-bold text-white mb-4">£500</div>
              <p className="text-gray-300 mb-4">Perfect for small businesses and personal brands</p>
              
              <ul className="space-y-3 mb-6">
                {[
                  'One-page design with multiple sections',
                  'Integrated blog functionality',
                  'Contact form',
                  'Mobile responsive design',
                  'Basic SEO setup',
                  'Analytics integration'
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

            {/* E-commerce Starter */}
            <div className="bg-[#2D1B69] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">E-commerce Starter</h3>
              <div className="text-3xl font-bold text-white mb-4">£1000</div>
              <p className="text-gray-300 mb-4">Single page website with e-commerce functionality</p>
              
              <ul className="space-y-3 mb-6">
                {[
                  'All features from Single Page',
                  'E-commerce integration',
                  'Product catalog',
                  'Secure payment processing',
                  'Order management',
                  'Inventory tracking'
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

            {/* Business Pro */}
            <div className="bg-[#2D1B69] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Business Pro</h3>
              <div className="text-3xl font-bold text-white mb-4">£1500</div>
              <p className="text-gray-300 mb-4">Complete business website with e-commerce</p>
              
              <ul className="space-y-3 mb-6">
                {[
                  '5 custom pages',
                  'E-commerce functionality',
                  'Blog integration',
                  'Advanced SEO setup',
                  'Social media integration',
                  'Email marketing setup'
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

          {/* AI Search Add-on */}
          <div className="mt-8">
            <div className="bg-[#2D1B69] rounded-xl p-6 max-w-md">
              <h3 className="text-xl font-bold text-white mb-2">AI Search Add-on</h3>
              <div className="text-3xl font-bold text-white mb-4">+£500</div>
              <p className="text-gray-300 mb-4">Add intelligent search to any package</p>
              
              <ul className="space-y-3 mb-6">
                {[
                  'Custom knowledge base integration',
                  'Natural language processing',
                  'Smart autocomplete',
                  'Search analytics',
                  'Content recommendations',
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