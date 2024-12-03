import React from 'react';
import { X } from 'lucide-react';
import { SearchResults } from './SearchResults';
import { LoadingSpinner } from '../ui/LoadingSpinner';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  query: string;
  isLoading: boolean;
  result: string | null;
  error: string | null;
}

export function SearchOverlay({ 
  isOpen, 
  onClose,
  query,
  isLoading,
  result,
  error
}: SearchOverlayProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Search Results</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-5rem)]">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <SearchResults 
              query={query}
              result={result}
              error={error}
            />
          )}
        </div>
      </div>
    </div>
  );
}