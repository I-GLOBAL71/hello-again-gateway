import type { CVData } from '../types';

export const defaultValue: CVData = {
  personalInfo: {
    name: 'Your Name',
    title: 'Professional Title',
    email: 'your.email@example.com',
    phone: '123-456-7890',
    address: 'City, Country',
  },
  summary: 'A brief professional summary about yourself, your skills, and your career goals. This should be a few sentences long.',
  experience: [
    {
      id: 'exp1',
      company: 'Company Name',
      role: 'Job Title',
      startDate: 'YYYY',
      endDate: 'YYYY',
      description: '• Key responsibilities and notable achievements.\n• For instance, you could mention a project you led or a target you exceeded.',
    },
  ],
  education: [
    {
      id: 'edu1',
      institution: 'University Name',
      degree: 'Degree',
      startDate: 'YYYY',
      endDate: 'YYYY',
      description: '• Relevant coursework or honors, if applicable.',
    },
  ],
  skills: 'Skill 1, Skill 2, Skill 3, Skill 4, Skill 5',
};
