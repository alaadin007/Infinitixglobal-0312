import React from 'react';
import type { SearchResponse } from '../types/search';
import { PropertyResults } from './PropertyResults';
import { AestheticsResults } from './AestheticsResults';

interface SearchResultsProps {
  result: SearchResponse | null;
  error: string | null;
  query: string;
}

export function SearchResults({ result, error, query }: SearchResultsProps) {
  if (error) {
    return (
      <div className="p-6 bg-red-50 rounded-lg">
        <p className="text-red-600 font-medium">Error: {error}</p>
        <p className="text-sm text-red-500 mt-2">
          Please try again or contact support if the issue persists.
        </p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-sky-700">Enter your question above to get started!</p>
        <p className="text-sm text-sky-600 mt-2">
          Try asking about specific topics related to your industry
        </p>
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none">
      <div className="space-y-6 text-sky-950">
        {result.text.split('\n\n').map((paragraph, index) => (
          <p key={index} className="leading-relaxed whitespace-pre-wrap">
            {paragraph}
          </p>
        ))}
      </div>
      
      <PropertyResults searchQuery={query} />
      <AestheticsResults searchQuery={query} />
      
      <div className="mt-8 pt-6 border-t border-sky-200">
        <div className="bg-sky-50 rounded-lg p-4">
          <p className="text-sm text-sky-700">
            Need more specific information? Try asking a follow-up question or explore related topics.
          </p>
        </div>
      </div>
    </div>
  );
}