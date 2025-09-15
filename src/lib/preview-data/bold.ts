import type { CVData } from '../types';

export const bold: CVData = {
  personalInfo: {
    name: 'Jax Ryder',
    title: 'UX/UI Developer',
    email: 'jax.ryder@dev.io',
    phone: '555-0109',
    address: 'Austin, TX',
    photo: 'https://i.pravatar.cc/150?u=jax-ryder'
  },
  summary: 'Fearless and creative UX/UI Developer who bridges the gap between design and technology. Expert in creating intuitive, dynamic, and visually stunning user interfaces with a focus on performance and accessibility. I build experiences, not just pages. Always pushing the boundaries with modern web technologies.',
  experience: [
    { id: 'exp1', company: 'Digital Mayhem', role: 'Senior UX/UI Developer', startDate: '2019', endDate: 'Present', description: '• Developed and maintained a component library in React/TypeScript that standardized the UI across all company products, improving development velocity by 25%.\n• Implemented complex animations and micro-interactions using GSAP and Framer Motion.\n• Championed accessibility (WCAG 2.1 AA), leading to a more inclusive user experience.' },
    { id: 'exp2', company: 'Creative Coders', role: 'Frontend Developer', startDate: '2017', endDate: '2019', description: '• Translated Figma mockups into pixel-perfect, responsive web pages using Vue.js and Tailwind CSS.\n• Collaborated with backend developers to integrate APIs and ensure seamless data flow.' },
  ],
  education: [
    { id: 'edu1', institution: 'Code Academy Bootcamp', degree: 'Full-Stack Development Certificate', startDate: '2016', endDate: '2017', description: '• Intensive program focused on modern MERN stack development.' },
    { id: 'edu2', institution: 'University of Texas at Austin', degree: 'B.A. in Digital Media', startDate: '2012', endDate: '2016', description: '• Minor in Computer Science.' },
  ],
  skills: 'React, Vue.js, TypeScript, WebGL, GSAP, Figma, Framer, WCAG Accessibility, Storybook, Jest, Next.js, Performance Optimization',
};
