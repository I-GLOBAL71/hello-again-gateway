import type { CVData } from '../types';

export const creative: CVData = {
  personalInfo: {
    name: 'Chloe Dubois',
    title: 'Graphic Designer & Illustrator',
    email: 'chloe.dubois@email.com',
    phone: '555-0103',
    address: 'Paris, France',
    photo: 'https://i.pravatar.cc/150?u=chloe-dubois'
  },
  summary: 'Imaginative and versatile Graphic Designer with a passion for creating compelling visual stories. Expert in branding, illustration, and digital media. Thrives in collaborative environments to bring creative concepts to life from ideation to final execution. Always looking for new ways to blend art and technology.',
  experience: [
    { id: 'exp1', company: 'Visionary Design Studio', role: 'Lead Graphic Designer', startDate: '2019', endDate: 'Present', description: '• Led a complete rebranding for a major client, increasing their market presence by 30%.\n• Created custom illustrations for international marketing campaigns, both digital and print.\n• Mentored a team of junior designers, fostering a culture of creativity and excellence.' },
    { id: 'exp2', company: 'Artbox Agency', role: 'Graphic Designer', startDate: '2017', endDate: '2019', description: '• Designed websites, social media content, and print materials for a variety of clients.\n• Collaborated with copywriters and marketing managers to ensure brand consistency.' },
  ],
  education: [
    { id: 'edu1', institution: 'Gobelins, l\'école de l\'image', degree: 'Master in Graphic Design', startDate: '2015', endDate: '2017', description: '• Specialization in Motion Graphics and Interactive Design.' },
    { id: 'edu2', institution: 'École des Beaux-Arts de Paris', degree: 'Bachelor of Fine Arts (BFA)', startDate: '2012', endDate: '2015', description: '• Focused on drawing and printmaking.' },
  ],
  skills: 'Adobe Creative Suite, Branding & Identity, Illustration, Typography, UI/UX Principles, Figma, Web Design, Motion Graphics',
};
