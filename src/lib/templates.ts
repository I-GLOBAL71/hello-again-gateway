import type { Template } from './types';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

export const templates: Template[] = [
  {
    id: 'modern',
    name: 'Modern',
    description: 'A sleek, contemporary design for the modern professional.',
    previewImage: getImage('template-modern'),
    isNew: true,
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'A timeless and elegant template for any industry.',
    previewImage: getImage('template-classic'),
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Showcase your personality with this stylish template.',
    previewImage: getImage('template-creative'),
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'A clean, simple layout that focuses on your content.',
    previewImage: getImage('template-minimalist'),
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'A sharp, corporate-friendly design for serious business.',
    previewImage: getImage('template-professional'),
    isNew: true,
  },
  {
    id: 'academic',
    name: 'Academic',
    description: 'Perfect for scholars, researchers, and educators.',
    previewImage: getImage('template-academic'),
  },
  {
    id: 'tech',
    name: 'Tech',
    description: 'A modern design tailored for the tech industry.',
    previewImage: getImage('template-tech'),
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'A powerful and authoritative design for leaders.',
    previewImage: getImage('template-executive'),
  },
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'A sophisticated design with beautiful typography.',
    previewImage: getImage('template-elegant'),
  },
  {
    id: 'bold',
    name: 'Bold',
    description: 'Make a strong impression with this confident layout.',
    previewImage: getImage('template-bold'),
  },
];
