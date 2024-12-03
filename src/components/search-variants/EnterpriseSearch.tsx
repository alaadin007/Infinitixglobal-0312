import React, { useState } from 'react';
import { Search, Bell, Users, Calendar } from 'lucide-react';
import { useSearch } from '../../hooks/useSearch';
import { SearchOverlay } from '../SearchOverlay';

export function EnterpriseSearch() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const { query, setQuery } = useSearch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOverlayOpen(true);
  };

  return (
    <>
      <div className="bg-white border rounded-xl shadow-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 mr-8">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="w-5 h-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search across all departments..."
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>
            </form>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">Company Updates</p>
              <div className="flex items-center mt-1 space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="w-4 h-4 mr-1" />
                  <span>New team members</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Q1 Review</span>
                </div>
              </div>
            </div>
            <Bell className="w-5 h-5 text-gray-500" />
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