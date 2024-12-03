import React from 'react';
import { Search } from 'lucide-react';
import { DEFAULT_PLACEHOLDER } from '../config/prompts';

interface SearchInputProps {
  query: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export function SearchInput({ query, onChange, onSubmit }: SearchInputProps) {
  return (
    <form onSubmit={onSubmit} className="flex-1 mx-3">
      <div className="flex items-center">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder={DEFAULT_PLACEHOLDER}
          className="w-full outline-none text-lg ml-3"
          autoFocus
        />
      </div>
    </form>
  );
}