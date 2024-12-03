import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { SearchOverlay } from '../SearchOverlay';

export function MinimalSearch() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { query, setQuery } = useSearch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOverlayOpen(true);
  };

  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 border-b border-gray-200 pb-2">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search knowledge base..."
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </form>
      </div>

      <SearchOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
      />
    </>
  );
}