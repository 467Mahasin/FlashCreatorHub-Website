import React from 'react';

export interface ClientLogoItem {
  id: string;
  name: string;
  category: string;
  imageSrc: string;
  alt: string;
}

export const CLIENT_PICTURE_LOGOS: ClientLogoItem[] = [
  {
    id: 'client-1',
    name: 'The Hyderabad Hustlers',
    category: 'Media & Creator Community',
    imageSrc: '/1.png',
    alt: 'The Hyderabad Hustlers Logo',
  },
  {
    id: 'client-2',
    name: 'GridPOS',
    category: 'SaaS & Retail Systems',
    imageSrc: '/2.png',
    alt: 'GridPOS Logo',
  },
  {
    id: 'client-3',
    name: 'AeroFold Ventures',
    category: 'Aviation & Logistics',
    imageSrc: '/3.png',
    alt: 'Origami Paper Airplane Logo',
  },
  {
    id: 'client-4',
    name: 'ZilVox STUDIO',
    category: 'Creative & Audio Production',
    imageSrc: '/4.png',
    alt: 'ZilVox STUDIO Logo',
  },
  {
    id: 'client-5',
    name: 'M-Media',
    category: 'Talent & Entertainment',
    imageSrc: '/5.png',
    alt: 'M Brand Circle Logo',
  },
  {
    id: 'client-6',
    name: 'EDVIFY',
    category: 'EdTech & Learning',
    imageSrc: '/6.png',
    alt: 'EDVIFY Logo',
  },
  {
    id: 'client-7',
    name: 'Vector North',
    category: 'Navigation & AI Systems',
    imageSrc: '/7.png',
    alt: 'Navigation Compass Logo',
  },
  {
    id: 'client-8',
    name: 'Iqbal Jewellers',
    category: 'Fine Jewelry (Est. 1975)',
    imageSrc: '/8.png',
    alt: 'Iqbal Jewellers Logo',
  },
  {
    id: 'client-9',
    name: 'neo HOMEO',
    category: 'Holistic Healthcare',
    imageSrc: '/9.png',
    alt: 'neo HOMEO Logo',
  },
];
