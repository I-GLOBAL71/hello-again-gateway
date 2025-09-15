
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
  summary: 'A fearless and creative UX/UI Developer who lives at the intersection of design and technology. Expert in crafting intuitive, dynamic, and visually stunning user interfaces with an obsessive focus on performance and accessibility. I don’t just build pages, I build experiences. Constantly pushing the boundaries with modern web technologies to create something truly memorable and impactful.',
  experience: [
    { id: 'exp1', company: 'Digital Mayhem', role: 'Senior UX/UI Developer', startDate: '2019', endDate: 'Present', description: '• Architected and developed a comprehensive component library in React & TypeScript that standardized the UI across all company products, improving development velocity by 30%.\n• Implemented complex, fluid animations and micro-interactions using GSAP and Framer Motion, which increased user engagement metrics by 15%.\n• Championed and enforced accessibility standards (WCAG 2.1 AA), leading to a more inclusive and robust user experience for all users.' },
    { id: 'exp2', company: 'Creative Coders', role: 'Frontend Developer', startDate: '2017', endDate: '2019', description: '• Translated complex Figma mockups into pixel-perfect, responsive, and performant web pages using Vue.js and Tailwind CSS.\n• Collaborated closely with backend developers to integrate APIs and ensure seamless data flow, reducing load times by 20%.' },
  ],
  education: [
    { id: 'edu1', institution: 'Code Academy Bootcamp', degree: 'Full-Stack Development Certificate', startDate: '2016', endDate: '2017', description: '• Intensive, project-based program focused on modern MERN stack development and agile methodologies.' },
    { id: 'edu2', institution: 'University of Texas at Austin', degree: 'B.A. in Digital Media & Design', startDate: '2012', endDate: '2016', description: '• Specialization in interactive design and a minor in Computer Science.' },
  ],
  skills: 'React, Vue.js, TypeScript, JavaScript (ES6+), WebGL, GSAP, Figma, Framer Motion, WCAG Accessibility, Storybook, Jest, Next.js, Performance Optimization, UI/UX Design',
};
