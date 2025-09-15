
import type { CVData } from '../types';

export const creative: CVData = {
  personalInfo: {
    name: 'Chloe Dubois',
    title: 'Art Director & Illustrator',
    email: 'chloe.dubois@email.com',
    phone: '555-0103',
    address: 'Paris, France',
    photo: 'https://i.pravatar.cc/150?u=chloe-dubois'
  },
  summary: 'Highly imaginative and versatile Art Director with a strong background in graphic design and illustration. Passionate about creating compelling visual stories that connect with audiences and elevate brands. Expert in branding, digital illustration, and UI/UX with over 7 years of agency and in-house experience. Thrives in collaborative environments to bring creative concepts to life from ideation to final execution. Always looking for new ways to blend art, technology, and narrative in meaningful ways.',
  experience: [
    { id: 'exp1', company: 'Visionary Design Studio', role: 'Lead Graphic Designer & Art Director', startDate: '2019', endDate: 'Present', description: '• Led a complete rebranding for a major international lifestyle client, which increased their market presence and social media engagement by over 50%.\n• Created custom illustrations and motion graphics for award-winning marketing campaigns, resulting in a 30% higher click-through rate.\n• Directed photo and video shoots, ensuring a cohesive and high-quality visual output across all channels.\n• Mentored a team of junior designers, fostering a culture of creativity, collaboration, and continuous skill development.' },
    { id: 'exp2', company: 'Artbox Agency', role: 'Graphic Designer', startDate: '2017', endDate: '2019', description: '• Designed responsive websites, engaging social media content, and print materials for a variety of clients in the fashion, beauty, and tech industries.\n• Collaborated with copywriters and marketing managers to ensure brand consistency and powerful storytelling across all platforms.\n• Developed brand identity systems, including logos, color palettes, and typography guidelines for new startups.' },
    { id: 'exp3', company: 'Freelance Illustrator', role: 'Illustrator', startDate: '2016', endDate: '2017', description: '• Provided editorial illustrations for magazines and online publications.\n• Created custom artwork for packaging and merchandise.' },
  ],
  education: [
    { id: 'edu1', institution: 'Gobelins, l\'école de l\'image', degree: 'Master in Graphic & Motion Design', startDate: '2015', endDate: '2017', description: '• Specialization in Motion Graphics and Interactive Design. Project "Anima" won the "Best of Year" student award.' },
    { id: 'edu2', institution: 'École des Beaux-Arts de Paris', degree: 'Bachelor of Fine Arts (BFA)', startDate: '2012', endDate: '2015', description: '• Focused on classical drawing, printmaking, and the history of digital art.' },
  ],
  skills: 'Adobe Creative Suite (Expert in Illustrator, Photoshop, InDesign), Art Direction, Branding & Identity Systems, Digital Illustration, Typography, UI/UX Principles, Figma, Web Design, After Effects, Motion Graphics, Print Design, Concept Development',
};
