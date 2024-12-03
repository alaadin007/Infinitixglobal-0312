import React from 'react';

interface KeyboardShortcutProps {
  keys: string[];
}

export function KeyboardShortcut({ keys }: KeyboardShortcutProps) {
  return (
    <div className="flex items-center gap-1">
      {keys.map((key, index) => (
        <kbd key={index} className="px-2 py-1 text-xs bg-gray-100 rounded">
          {key}
        </kbd>
      ))}
    </div>
  );
}