import React from 'react';
import { X, Check, MessageSquare } from 'lucide-react';

interface VideoEditingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VideoEditingModal({ isOpen, onClose }: VideoEditingModalProps) {
  if (!isOpen) return null;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/447466219342', '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#1a1a1a] rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Video Editing</h2>
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
            {/* Starter Package */}
            <div className="bg-[#2D1B69] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Starter Package</h3>
              <div className="text-3xl font-bold text-white mb-4">£500/month</div>
              <p className="text-gray-300 mb-4">5 videos per month</p>
              
              <ul className="space-y-3 mb-6">
                {[
                  '30-60 second reels/shorts',
                  'Custom transitions',
                  'Background music',
                  'Basic color grading',
                  'Platform optimization',
                  '2 revisions per video'
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

            {/* Professional Package */}
            <div className="bg-[#2D1B69] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Professional Package</h3>
              <div className="text-3xl font-bold text-white mb-4">£900/month</div>
              <p className="text-gray-300 mb-4">10 videos per month</p>
              
              <ul className="space-y-3 mb-6">
                {[
                  'All Starter features',
                  'Advanced effects',
                  'Animated graphics',
                  'Subtitles/captions',
                  '3 revisions per video',
                  'Rush delivery option'
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

            {/* Premium Package */}
            <div className="bg-[#2D1B69] rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-2">Premium Package</h3>
              <div className="text-3xl font-bold text-white mb-4">£1300/month</div>
              <p className="text-gray-300 mb-4">15 videos per month</p>
              
              <ul className="space-y-3 mb-6">
                {[
                  'All Professional features',
                  'Custom animations',
                  'Voice-over integration',
                  'Multi-platform formats',
                  'Unlimited revisions',
                  'Priority support'
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

          {/* Pay As You Go */}
          <div className="mt-8">
            <div className="bg-[#2D1B69] rounded-xl p-6 max-w-md">
              <h3 className="text-xl font-bold text-white mb-2">Pay As You Go</h3>
              <div className="text-3xl font-bold text-white mb-4">£50/video</div>
              <p className="text-gray-300 mb-4">Single video production</p>
              
              <ul className="space-y-3 mb-6">
                {[
                  '30-60 second video',
                  'Basic editing',
                  'Music selection',
                  'One revision',
                  'Quick turnaround',
                  'Standard delivery'
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