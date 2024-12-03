import React from 'react';
import '../styles/logo.css';

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="logo-container">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="infinity-logo"
        >
          <path
            d="M16,32 C16,27.5817 19.5817,24 24,24 C28.4183,24 32,27.5817 32,32 C32,36.4183 28.4183,40 24,40 C19.5817,40 16,36.4183 16,32 Z M48,32 C48,27.5817 44.4183,24 40,24 C35.5817,24 32,27.5817 32,32 C32,36.4183 35.5817,40 40,40 C44.4183,40 48,36.4183 48,32 Z"
            stroke="white"
            strokeWidth="3"
            className="infinity-path"
          />
        </svg>
      </div>
      <span className="ml-4 text-4xl font-bold text-white glow-text">Infinitix Global</span>
    </div>
  );
}