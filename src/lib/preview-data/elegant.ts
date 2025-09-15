
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
  summary: 'A sophisticated and creative Interior Designer renowned for creating timeless, elegant spaces that seamlessly blend classic principles with modern aesthetics. Specializing in luxury residential and boutique hotel projects, with a strong focus on bespoke details, quality materials, and deep client collaboration. My philosophy is to craft environments that are not only beautiful but also deeply personal and functional.',
  experience: [
    { id: 'exp1', company: 'Rossi Designs', role: 'Founder & Principal Designer', startDate: '2015', endDate: 'Present', description: '• Designed award-winning interiors for high-profile private residences and commercial spaces in Milan, London, and New York.\n• Work has been featured in "Architectural Digest", "Elle Decor", and "Vogue Living" for its unique blend of sophistication and comfort.\n• Managed all project phases from initial concept and space planning through to procurement and final installation, ensuring flawless execution.' },
    { id: 'exp2', company: 'Studio Bellini Associates', role: 'Junior Interior Designer', startDate: '2013', endDate: '2015', description: '• Assisted senior designers on large-scale hospitality projects, including the redesign of a historic hotel in Florence.\n• Was responsible for sourcing unique materials, creating detailed mood boards, and preparing technical drawings using AutoCAD and SketchUp.' },
  ],
  education: [
    { id: 'edu1', institution: 'Politecnico di Milano', degree: 'Master in Interior Design', startDate: '2011', endDate: '2013', description: '• Graduated with distinction, with a thesis on the use of light in contemporary Italian design.' },
    { id: 'edu2', institution: 'Accademia di Belle Arti di Brera', degree: 'B.A. in History of Art', startDate: '2008', endDate: '2011', description: '• Focused on Renaissance architecture and its influence on modern and post-modern design philosophies.' },
  ],
  skills: 'Luxury Residential Design, Space Planning, Material & Finish Selection, Custom Furniture Design, Project Management, AutoCAD, SketchUp, Client Relations, FF&E Specification',
};
