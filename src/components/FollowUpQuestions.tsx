import React from 'react';
import { MessageCircle } from 'lucide-react';
import type { Industry } from '../config/industries';
import { FOLLOW_UP_QUESTIONS } from '../config/followUpQuestions';

interface FollowUpQuestionsProps {
  industry: Industry;
  onQuestionClick: (question: string) => void;
}

export function FollowUpQuestions({ industry, onQuestionClick }: FollowUpQuestionsProps) {
  const questions = FOLLOW_UP_QUESTIONS[industry] || [];

  const getIndustrySpecificStyles = () => {
    switch (industry) {
      case 'legal':
        return 'hover:bg-indigo-400/20';
      case 'medical':
        return 'hover:bg-emerald-400/20';
      case 'aesthetics':
        return 'hover:bg-pink-400/20';
      case 'dental':
        return 'hover:bg-sky-400/20';
      case 'realestate':
        return 'hover:bg-amber-400/20';
      default:
        return 'hover:bg-gray-400/20';
    }
  };

  if (questions.length === 0) return null;

  return (
    <div className="mt-4">
      <div className="flex items-center text-white/80 mb-2">
        <MessageCircle className="w-4 h-4 mr-2" />
        <span className="text-sm">Related Questions</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <button
            key={index}
            onClick={() => onQuestionClick(question)}
            className={`text-sm px-3 py-1.5 bg-white/10 rounded-full text-white/90 transition-colors ${getIndustrySpecificStyles()}`}
          >
            {question}
          </button>
        ))}
      </div>
    </div>
  );
}