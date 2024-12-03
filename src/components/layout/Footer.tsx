import React from 'react';
import { Logo } from '../Logo';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-100 to-indigo-100 text-sky-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />
          <p className="text-sky-700">© 2024 Infinitix Global. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}