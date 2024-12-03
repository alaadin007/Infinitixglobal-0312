import React from 'react';
import * as LucideIcons from 'lucide-react';
import type { IconName } from './types';

interface IconProviderProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  className?: string;
  size?: number | string;
}

export function IconProvider({ name, className = '', size = 24, ...props }: IconProviderProps) {
  const Icon = LucideIcons[name];
  return Icon ? <Icon className={className} size={size} {...props} /> : null;
}