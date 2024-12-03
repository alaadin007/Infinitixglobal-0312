import React from 'react';

interface SearchResultsProps {
  query: string;
  result: string | null;
  error: string | null;
}

export function SearchResults({ query, result, error }: SearchResultsProps) {
  if (error) {
    return (
      <div className="bg-red-50 rounded-lg p-4">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No results found for "{query}"</p>
      </div>
    );
  }

  return (
    <div className="prose prose-lg max-w-none">
      <div className="space-y-4">
        {result.split('\n\n').map((paragraph, index) => (
          <p key={index} className="text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}