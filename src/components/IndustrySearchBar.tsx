import React, { useState } from 'react';
import { SearchContainer } from './search/SearchContainer';
import { SearchOverlay } from './SearchOverlay';
import { FollowUpQuestions } from './FollowUpQuestions';
import { useSearch } from '../hooks/useSearch';
import { INDUSTRY_CONFIGS, type Industry } from '../config/industries';

interface IndustrySearchBarProps {
  industry: Industry;
  className?: string;
}

export function IndustrySearchBar({ industry, className = '' }: IndustrySearchBarProps) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const config = INDUSTRY_CONFIGS[industry];
  
  const {
    query,
    setQuery,
    handleSearch,
    ...searchProps
  } = useSearch({ industry });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOverlayOpen(true);
      handleSearch(e);
    }
  };

  const handleQuestionClick = (question: string) => {
    setQuery(question);
    setIsOverlayOpen(true);
    handleSearch();
  };

  return (
    <div className={`bg-gradient-to-br ${config.gradient} rounded-xl p-6 ${className}`}>
      <SearchContainer
        industry={industry}
        title={config.title}
        placeholder={config.placeholder}
        value={query}
        onChange={setQuery}
        onSubmit={handleSubmit}
      />

      <FollowUpQuestions 
        industry={industry}
        onQuestionClick={handleQuestionClick}
      />

      <SearchOverlay 
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        initialQuery={query}
        {...searchProps}
      />
    </div>
  );
}