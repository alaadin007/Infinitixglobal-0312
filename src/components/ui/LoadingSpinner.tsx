import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex justify-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-gray-900" />
    </div>
  );
}