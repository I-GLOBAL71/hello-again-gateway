
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
  summary: 'Imaginative and versatile Graphic Designer with a passion for creating compelling visual stories that connect with audiences. Expert in branding, digital illustration, and UI/UX. Thrives in collaborative environments to bring creative concepts to life from ideation to final execution. Always looking for new ways to blend art, technology, and narrative in meaningful ways.',
  experience: [
    { id: 'exp1', company: 'Visionary Design Studio', role: 'Lead Graphic Designer', startDate: '2019', endDate: 'Present', description: '• Led a complete rebranding for a major lifestyle client, which increased their market presence and social media engagement by 40%.\n• Created custom illustrations and animations for international marketing campaigns, resulting in a 25% higher click-through rate.\n• Mentored a team of junior designers, fostering a culture of creativity, collaboration, and continuous skill development.' },
    { id: 'exp2', company: 'Artbox Agency', role: 'Graphic Designer', startDate: '2017', endDate: '2019', description: '• Designed responsive websites, engaging social media content, and print materials for a variety of clients in the fashion and tech industries.\n• Collaborated with copywriters and marketing managers to ensure brand consistency and powerful storytelling across all platforms.' },
  ],
  education: [
    { id: 'edu1', institution: 'Gobelins, l\'école de l\'image', degree: 'Master in Graphic & Motion Design', startDate: '2015', endDate: '2017', description: '• Specialization in Motion Graphics and Interactive Design. Project "anima" won the student of the year award.' },
    { id: 'edu2', institution: 'École des Beaux-Arts de Paris', degree: 'Bachelor of Fine Arts (BFA)', startDate: '2012', endDate: '2015', description: '• Focused on classical drawing, printmaking, and digital art foundations.' },
  ],
  skills: 'Adobe Creative Suite (Expert), Branding & Identity, Digital Illustration, Typography, UI/UX Principles, Figma, Web Design, After Effects, Motion Graphics',
};
