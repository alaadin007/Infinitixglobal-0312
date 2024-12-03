import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { SearchOverlay } from '../SearchOverlay';

export function FloatingSearch() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { query, setQuery } = useSearch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOverlayOpen(true);
  };

  return (
    <>
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
        <div className="relative bg-white rounded-lg p-4">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search documentation..."
                className="flex-1 outline-none ml-3 text-gray-700"
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-2 rounded-lg flex items-center"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <SearchOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
      />
    </>
  );
}