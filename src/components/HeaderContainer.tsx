import React, { ReactNode } from 'react';

interface HeaderContainerProps {
  children: ReactNode;
  searchSection?: ReactNode;
  className?: string;
}

export function HeaderContainer({ children, searchSection, className = '' }: HeaderContainerProps) {
  return (
    <div className={`mb-8 overflow-hidden rounded-2xl ${className}`}>
      <header className="p-6">
        {children}
      </header>
      {searchSection && (
        <div className="px-6 pb-6">
          {searchSection}
        </div>
      )}
    </div>
  );
}