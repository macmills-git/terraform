export type PageType = 'home' | 'solutions' | 'request';

export interface NavItem {
  id: string;
  label: string;
  page?: PageType;
  href?: string;
}

export interface MetricItem {
  value: string;
  label: string;
  description?: string;
  trend?: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  badge?: string;
  isActive?: boolean;
  ctaText: string;
}

export interface BentoCard {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  tag?: string;
}

