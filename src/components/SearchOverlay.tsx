import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { SearchResults } from './SearchResults';
import { SearchInput } from './SearchInput';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { useAISearch } from '../hooks/useAISearch';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
  query?: string;
  setQuery?: (query: string) => void;
  isLoading?: boolean;
  result?: any;
  error?: string | null;
  handleSearch?: (e?: React.FormEvent) => void;
}

export function SearchOverlay({ 
  isOpen, 
  onClose, 
  initialQuery,
  query: externalQuery,
  setQuery: externalSetQuery,
  isLoading: externalIsLoading,
  result: externalResult,
  error: externalError,
  handleSearch: externalHandleSearch
}: SearchOverlayProps) {
  const {
    query: internalQuery,
    setQuery: internalSetQuery,
    isLoading: internalIsLoading,
    result: internalResult,
    error: internalError,
    handleSearch: internalHandleSearch,
  } = useAISearch();

  // Use external props if provided, otherwise use internal state
  const query = externalQuery ?? internalQuery;
  const setQuery = externalSetQuery ?? internalSetQuery;
  const isLoading = externalIsLoading ?? internalIsLoading;
  const result = externalResult ?? internalResult;
  const error = externalError ?? internalError;
  const handleSearch = externalHandleSearch ?? internalHandleSearch;

  useEffect(() => {
    if (isOpen && initialQuery) {
      setQuery(initialQuery);
      handleSearch();
    }
  }, [isOpen, initialQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50">
      <div className="container max-w-3xl mx-auto px-4 pt-20">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="p-4 border-b border-gray-200 flex items-center">
            <SearchInput 
              query={query}
              onChange={setQuery}
              onSubmit={handleSearch}
            />
            <button
              onClick={onClose}
              className="ml-2 p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          
          <div className="max-h-[60vh] overflow-y-auto p-6">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <SearchResults 
                result={result} 
                error={error} 
                query={query}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}