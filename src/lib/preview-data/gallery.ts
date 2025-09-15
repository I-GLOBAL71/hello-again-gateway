import type { CVData } from '../types';

export const gallery: CVData = {
  personalInfo: {
    name: 'Sofia Alvarez',
    title: 'Photographer',
    email: 'sofia.a@photo.net',
    phone: '555-0113',
    address: 'Mexico City, Mexico',
    photo: 'https://i.pravatar.cc/150?u=sofia-alvarez'
  },
  summary: 'Passionate and creative photographer with a keen eye for capturing emotion and telling stories through images. Specializes in portrait, event, and documentary photography. My work seeks to find the beauty in the everyday and create lasting visual narratives. I am proficient in both digital and analog mediums, with a full-service approach from concept to final print.',
  experience: [
    { id: 'exp1', company: 'Freelance Photographer', role: 'Owner & Lead Photographer', startDate: '2016', endDate: 'Present', description: '• Worked with a diverse range of clients, from non-profits and editorial magazines to corporate brands and private commissions.\n• Published a photo series in "National Geographic Traveler" and had work exhibited in galleries in Mexico City and New York.\n• Managed all aspects of the business, including client acquisition, shooting, post-production, and print sales.' },
    { id: 'exp2', company: 'Luz Studios', role: 'Photography Assistant', startDate: '2015', endDate: '2016', description: '• Assisted lead photographers on commercial shoots, managing lighting and equipment.\n• Gained hands-on experience with high-end digital cameras and post-production software.' },
  ],
  education: [
    { id: 'edu1', institution: 'School of Visual Arts, New York', degree: 'BFA in Photography and Video', startDate: '2012', endDate: '2016', description: '• Recipient of the SVA Rhodes Family Award for Outstanding Achievement.' },
    { id: 'edu2', institution: 'International Center of Photography', degree: 'Advanced Darkroom Workshop', startDate: '2017', endDate: '2017', description: '• Focused on advanced black and white printing techniques.' },
  ],
  skills: 'Digital & Film Photography, Adobe Lightroom, Photoshop, Capture One, Portraiture, Photojournalism, Advanced Lighting, Videography',
};
