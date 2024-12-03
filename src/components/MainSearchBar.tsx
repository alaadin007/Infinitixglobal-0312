import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { SearchOverlay } from './SearchOverlay';
import { useAISearch } from '../hooks/useAISearch';

export function MainSearchBar() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const {
    query,
    setQuery,
    handleSearch,
    ...searchProps
  } = useAISearch({
    context: 'You are an AI assistant helping businesses grow online. Provide practical, actionable advice about digital marketing, web design, and business growth strategies.'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOverlayOpen(true);
      handleSearch(e);
    }
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-200/50 to-indigo-200/50 rounded-full blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-xl rounded-full border border-sky-100 overflow-hidden shadow-lg">
              <div className="flex items-center px-6 py-4">
                <Search className="w-6 h-6 text-sky-600" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Ask anything about growing your business online..."
                  className="flex-1 ml-4 bg-transparent text-sky-950 placeholder-sky-500 focus:outline-none text-lg"
                />
                <button
                  type="submit"
                  className="ml-4 px-6 py-2 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-full text-white font-semibold hover:from-sky-500 hover:to-indigo-500 transition-colors shadow-lg"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <SearchOverlay 
        isOpen={isOverlayOpen}
        onClose={() => setIsOverlayOpen(false)}
        initialQuery={query}
        {...searchProps}
      />
    </>
  );
}