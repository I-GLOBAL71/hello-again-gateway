
import type { CVData } from '../types';

export const gallery: CVData = {
  personalInfo: {
    name: 'Sofia Alvarez',
    title: 'Photographer & Visual Storyteller',
    email: 'sofia.a@photo.net',
    phone: '555-0113',
    address: 'Mexico City, Mexico',
    photo: 'https://i.pravatar.cc/150?u=sofia-alvarez'
  },
  summary: 'Passionate and creative photographer with a keen eye for capturing emotion and telling powerful stories through images. Specializes in portrait, event, and documentary photography. My work seeks to find the beauty in the everyday and create lasting visual narratives that resonate with the human experience. I am proficient in both digital and analog mediums, offering a full-service approach from concept to final print.',
  experience: [
    { id: 'exp1', company: 'Freelance Photographer', role: 'Owner & Lead Photographer', startDate: '2016', endDate: 'Present', description: '• Collaborated with a diverse range of clients, from non-profits and editorial magazines to corporate brands and private commissions for portraiture.\n• Published a notable photo series in "National Geographic Traveler" and had work exhibited in galleries in Mexico City, New York, and Berlin.\n• Managed all aspects of a thriving business, including client acquisition, creative direction, on-location shooting, post-production, and print sales.' },
    { id: 'exp2', company: 'Luz Studios', role: 'Photography Assistant', startDate: '2015', endDate: '2016', description: '• Assisted lead photographers on high-profile commercial and fashion shoots, managing lighting setups, equipment, and digital workflow.\n• Gained extensive hands-on experience with high-end digital cameras (Phase One, Hasselblad) and advanced post-production software.' },
  ],
  education: [
    { id: 'edu1', institution: 'School of Visual Arts, New York', degree: 'BFA in Photography and Video', startDate: '2012', endDate: '2016', description: '• Graduated with honors and was the recipient of the SVA Rhodes Family Award for Outstanding Achievement in Photography.' },
    { id: 'edu2', institution: 'International Center of Photography', degree: 'Advanced Darkroom & Printing Workshop', startDate: '2017', endDate: '2017', description: '• Intensive workshop focused on advanced black and white and alternative process printing techniques.' },
  ],
  skills: 'Digital & Film Photography, Adobe Lightroom, Adobe Photoshop, Capture One, Portraiture, Photojournalism, Advanced Lighting Techniques, Videography, Color Grading',
};
