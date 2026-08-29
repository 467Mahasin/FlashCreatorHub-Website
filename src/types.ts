export interface ClientLogo {
  id: string;
  name: string;
  category: string;
  initials: string;
  svgIconName?: string;
  tagline?: string;
}

export interface VideoShowcaseItem {
  id: string;
  title: string;
  clientName: string;
  clientRole: string;
  category: string;
  metric: string;
  videoUrl: string;
  posterUrl: string;
  aspectRatio: 'vertical' | 'widescreen';
  duration: string;
  description: string;
  highlights: string[];
}

export interface ContactMethod {
  id: string;
  name: string;
  actionLabel: string;
  detail: string;
  url: string;
  icon: 'whatsapp' | 'email' | 'calendar';
  isExternal?: boolean;
}
