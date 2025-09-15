import type { CVData } from '../types';

export const elegant: CVData = {
  personalInfo: {
    name: 'Isabella Rossi',
    title: 'Interior Designer',
    email: 'isabella.r@design.com',
    phone: '555-0108',
    address: 'Milan, Italy',
    photo: 'https://i.pravatar.cc/150?u=isabella-rossi'
  },
  summary: 'Sophisticated and creative Interior Designer known for creating timeless, elegant spaces that blend classic principles with modern aesthetics. Specializes in luxury residential and boutique hotel projects, with a strong focus on bespoke details, quality materials, and client collaboration. My philosophy is to create environments that are both beautiful and deeply personal.',
  experience: [
    { id: 'exp1', company: 'Rossi Designs', role: 'Founder & Principal Designer', startDate: '2015', endDate: 'Present', description: '• Designed award-winning interiors for high-profile clients in Milan, London, and New York.\n• Featured in "Architectural Digest", "Elle Decor", and "Vogue Living".\n• Managed all project phases from initial concept and space planning to final installation.' },
    { id: 'exp2', company: 'Studio Bellini', role: 'Junior Interior Designer', startDate: '2014', endDate: '2015', description: '• Assisted senior designers on large-scale hospitality projects.\n• Sourced materials, created mood boards, and prepared technical drawings using AutoCAD.' },
  ],
  education: [
    { id: 'edu1', institution: 'Politecnico di Milano', degree: 'Master in Interior Design', startDate: '2012', endDate: '2014', description: '• Graduated with distinction.' },
    { id: 'edu2', institution: 'Accademia di Belle Arti di Brera', degree: 'B.A. in History of Art', startDate: '2009', endDate: '2012', description: '• Thesis on Renaissance architecture and its influence on modern design.' },
  ],
  skills: 'Space Planning, Material Selection, Custom Furniture Design, Project Management, AutoCAD, SketchUp, Client Relations, FF&E Specification',
};
