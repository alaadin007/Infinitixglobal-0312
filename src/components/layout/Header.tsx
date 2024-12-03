import React from 'react';
import { Logo } from '../Logo';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-sky-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
      </div>
    </header>
  );
}