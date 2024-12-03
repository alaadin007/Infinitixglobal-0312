import React from 'react';
import { Sparkles } from 'lucide-react';
import { SearchInput } from './SearchInput';
import { CopyEmbedButton } from '../CopyEmbedButton';
import type { Industry } from '../../config/industries';

interface SearchContainerProps {
  industry: Industry;
  title: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  className?: string;
}

export function SearchContainer({
  industry,
  title,
  placeholder,
  value,
  onChange,
  onSubmit,
  className = ''
}: SearchContainerProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <CopyEmbedButton industry={industry} />
      </div>

      <form onSubmit={onSubmit}>
        <div className="relative">
          <SearchInput
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-white/70">
            <span className="text-sm mr-2">AI-powered search</span>
            <Sparkles className="w-4 h-4" />
          </div>
        </div>
      </form>
    </div>
  );
}