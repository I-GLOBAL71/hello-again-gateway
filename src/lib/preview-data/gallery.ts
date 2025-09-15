
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
  summary: 'Passionate and award-winning photographer with a keen eye for capturing emotion and telling powerful stories through images. Specializes in portrait, event, and documentary photography with a distinct, candid style. My work seeks to find the beauty in the everyday and create lasting visual narratives that resonate with the human experience. I am proficient in both digital and analog mediums, offering a full-service approach from concept to final print and exhibition.',
  experience: [
    { id: 'exp1', company: 'Freelance Photographer', role: 'Owner & Lead Photographer', startDate: '2016', endDate: 'Present', description: '• Collaborated with a diverse range of clients, from non-profits and editorial magazines (The Guardian, National Geographic) to corporate brands and private commissions for portraiture.\n• Published a notable photo series on "Modern Mexico City" in "National Geographic Traveler" and had work exhibited in galleries in Mexico City, New York, and Berlin.\n• Managed all aspects of a thriving business, including client acquisition, creative direction, on-location shooting, advanced post-production, and print sales.\n• Directed and shot a documentary short film that was selected for the Morelia International Film Festival.' },
    { id: 'exp2', company: 'Luz Studios', role: 'Photography Assistant', startDate: '2015', endDate: '2016', description: '• Assisted lead photographers on high-profile commercial and fashion shoots for clients like Vogue Mexico and Palacio de Hierro.\n• Managed complex lighting setups, digital workflow with Capture One, and high-end camera systems (Phase One, Hasselblad).\n• Gained extensive hands-on experience in a fast-paced professional studio environment.' },
    { id: 'exp3', company: 'Magnum Photos, New York', role: 'Intern', startDate: '2014', endDate: '2014', description: '• Assisted the agency with archival research and preparing materials for exhibitions.\n• Gained insight into the world of documentary photography and photojournalism.'},
  ],
  education: [
    { id: 'edu1', institution: 'School of Visual Arts, New York', degree: 'BFA in Photography and Video', startDate: '2012', endDate: '2016', description: '• Graduated with honors and was the recipient of the SVA Rhodes Family Award for Outstanding Achievement in Photography.\n• Thesis project was a documentary series on street performers in NYC.' },
    { id: 'edu2', institution: 'International Center of Photography (ICP)', degree: 'Advanced Darkroom & Printing Workshop', startDate: '2017', endDate: '2017', description: '• Intensive workshop focused on advanced black and white and alternative process printing techniques, including platinum and palladium printing.' },
  ],
  skills: 'Digital & Film Photography, Adobe Lightroom (Expert), Adobe Photoshop (Advanced Retouching), Capture One Pro, Portraiture, Photojournalism, Advanced Studio & Location Lighting, Videography (DSLR), DaVinci Resolve, Color Grading, Print Production',
};
