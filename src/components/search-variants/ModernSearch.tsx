import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { SearchOverlay } from '../SearchOverlay';

export function ModernSearch() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { query, setQuery } = useSearch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOverlayOpen(true);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex-1 mr-8">
            <form onSubmit={handleSubmit}>
              <div className="bg-white/10 backdrop-blur-sm rounded-full flex items-center px-4 py-2">
                <Search className="w-5 h-5 text-white" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Explore resources..."
                  className="w-full bg-transparent outline-none text-white placeholder-white/70 ml-3"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center space-x-4 text-white">
            <div className="text-sm">
              <p className="font-semibold">Latest Update</p>
              <p className="opacity-80">New feature release v2.1</p>
            </div>
            <Bell className="w-5 h-5" />
          </div>
        </div>
      </div>

      <SearchOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
      />
    </>
  );
}