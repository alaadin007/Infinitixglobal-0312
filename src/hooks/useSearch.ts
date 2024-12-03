import { useState, useCallback } from 'react';
import { searchAPI } from '../services/api/search';
import type { Industry } from '../config/industries';

interface UseSearchOptions {
  industry: Industry;
  context?: string;
}

export function useSearch({ industry, context }: UseSearchOptions) {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = useCallback(async (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (!query.trim()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await searchAPI({
        query,
        industry,
        context
      });
      
      setResult(response.text);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  }, [query, industry, context]);

  return {
    query,
    setQuery,
    isLoading,
    result,
    error,
    handleSearch
  };
}