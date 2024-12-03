import React from 'react';
import {
  Search,
  Heart,
  Home,
  Scale,
  Bell,
  Calendar,
  Users,
  Phone,
  Command,
  ArrowRight,
  X,
  MessageCircle,
  Sparkles,
  Shield,
  Zap,
  Palette,
  Tag,
  Clock,
  Smile,
  Activity,
  GraduationCap,
  Cpu,
  DollarSign,
  UtensilsCrossed,
  CalendarCheck,
  BedDouble,
  Bath,
  Maximize
} from 'lucide-react';

const icons = {
  Search,
  Heart,
  Home,
  Scale,
  Bell,
  Calendar,
  Users,
  Phone,
  Command,
  ArrowRight,
  X,
  MessageCircle,
  Sparkles,
  Shield,
  Zap,
  Palette,
  Tag,
  Clock,
  Smile,
  Activity,
  GraduationCap,
  Cpu,
  DollarSign,
  UtensilsCrossed,
  CalendarCheck,
  BedDouble,
  Bath,
  Maximize
} as const;

export type IconName = keyof typeof icons;

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const IconComponent = icons[name];
  return <IconComponent {...props} />;
}

// Export individual icons for direct usage
export {
  Search,
  Heart,
  Home,
  Scale,
  Bell,
  Calendar,
  Users,
  Phone,
  Command,
  ArrowRight,
  X,
  MessageCircle,
  Sparkles,
  Shield,
  Zap,
  Palette,
  Tag,
  Clock,
  Smile,
  Activity,
  GraduationCap,
  Cpu,
  DollarSign,
  UtensilsCrossed,
  CalendarCheck,
  BedDouble,
  Bath,
  Maximize
};