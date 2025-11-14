import { LucideIcon } from 'lucide-react';

export interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
  items?: SubNavItem[];
  type?: 'ADMIN' | 'MARKETING_USER';
  isActive: boolean;
}

export interface SubNavItem {
  title: string;
  url: string;
  type?: 'ADMIN' | 'MARKETING_USER';
}
