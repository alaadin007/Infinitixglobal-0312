import React, { useState } from 'react';
import { Command } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { SearchOverlay } from '../SearchOverlay';

export function CommandSearch() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { query, setQuery } = useSearch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOverlayOpen(true);
  };

  return (
    <>
      <div className="bg-gray-900 p-4 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center space-x-3">
            <div className="flex-1 bg-gray-800 rounded-md flex items-center px-3 py-2">
              <Command className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command..."
                className="w-full bg-transparent outline-none text-gray-200 placeholder-gray-500 ml-2"
              />
              <div className="flex items-center space-x-1">
                <kbd className="px-2 py-1 text-xs bg-gray-700 text-gray-400 rounded">⌘</kbd>
                <kbd className="px-2 py-1 text-xs bg-gray-700 text-gray-400 rounded">K</kbd>
              </div>
            </div>
          </div>
        </form>
      </div>

      <SearchOverlay 
        isOpen={isOverlayOpen} 
        onClose={() => setIsOverlayOpen(false)} 
      />
    </>
  );
}