import { useState, useCallback } from 'react';
import { aiSearch } from '../services/aiSearch';
import type { SearchResponse } from '../types/search';
import type { Industry } from '../config/industries';
import { getSearchContext } from '../utils/search';

interface UseAISearchOptions {
  industry?: Industry;
  context?: string;
}

export function useAISearch(options: UseAISearchOptions = {}) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SearchResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!query.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const searchContext = getSearchContext(options.industry, options.context);
      const response = await aiSearch(query, {
        industry: options.industry,
        context: searchContext
      });
      setResult(response);
    } catch (err: any) {
      setError(err.message || 'An error occurred while searching');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  }, [query, options.industry, options.context]);

  return {
    query,
    setQuery,
    isLoading,
    result,
    error,
    handleSearch
  };
}