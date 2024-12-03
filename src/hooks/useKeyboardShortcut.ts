import { useEffect } from 'react';

interface KeyboardShortcutOptions {
  metaKey?: boolean;
  ctrlKey?: boolean;
  key: string;
}

export function useKeyboardShortcut(
  callback: () => void,
  { metaKey, ctrlKey, key }: KeyboardShortcutOptions
) {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const metaKeyMatch = metaKey ? event.metaKey : true;
      const ctrlKeyMatch = ctrlKey ? event.ctrlKey : true;
      
      if (metaKeyMatch && ctrlKeyMatch && event.key.toLowerCase() === key.toLowerCase()) {
        event.preventDefault();
        callback();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [callback, metaKey, ctrlKey, key]);
}