import React from 'react';
import { Bell, Tag, Clock } from 'lucide-react';

interface PromotionalUpdateProps {
  type: 'latest' | 'offer' | 'treatment';
  className?: string;
}

export function PromotionalUpdate({ type, className = '' }: PromotionalUpdateProps) {
  const getContent = () => {
    switch (type) {
      case 'latest':
        return {
          icon: Clock,
          text: 'Latest Update',
          subtext: 'New features available'
        };
      case 'offer':
        return {
          icon: Tag,
          text: 'Special Offer',
          subtext: 'Book today 20% off'
        };
      case 'treatment':
        return {
          icon: Bell,
          text: 'New Treatments',
          subtext: 'Just added to our services'
        };
    }
  };

  const content = getContent();
  const Icon = content.icon;

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      <div className="text-white">
        <p className="font-medium">{content.text}</p>
        <p className="text-sm opacity-80">{content.subtext}</p>
      </div>
      <Icon className="w-5 h-5 text-white/80" />
    </div>
  );
}