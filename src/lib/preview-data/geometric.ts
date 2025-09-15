
import type { CVData } from '../types';

export const geometric: CVData = {
  personalInfo: {
    name: 'Leo Valdez',
    title: 'Architect',
    email: 'leo.valdez@arch.com',
    phone: '555-0110',
    address: 'Barcelona, Spain',
    photo: 'https://i.pravatar.cc/150?u=leo-valdez'
  },
  summary: 'An innovative and detail-oriented Architect with a passion for sustainable design, modular construction, and the exploration of geometric forms. Extensive experience in both residential and commercial projects, with a talent for transforming complex client needs into functional and aesthetically pleasing structures. Committed to creating spaces that are both environmentally responsible and contextually significant.',
  experience: [
    { id: 'exp1', company: 'Urban Forms Architects', role: 'Project Architect', startDate: '2017', endDate: 'Present', description: '• Led the design and development of a LEED Platinum certified mixed-use building, which won the National Architecture Award for Sustainable Design.\n• Managed projects from schematic design through construction administration, ensuring strict adherence to budget, schedule, and design intent.\n• Utilized parametric design tools (Grasshopper) to explore complex geometries and optimize building facade performance, resulting in a 20% increase in energy efficiency.' },
    { id: 'exp2', company: 'García Schmidt Arquitectos', role: 'Intern Architect', startDate: '2016', endDate: '2017', description: '• Produced detailed construction documents and 3D models for various high-end residential projects.\n• Assisted in site visits, coordination with engineers, and material selection processes, gaining foundational project experience.' },
  ],
  education: [
    { id: 'edu1', institution: 'Escola Tècnica Superior d\'Arquitectura de Barcelona (ETSAB-UPC)', degree: 'Master of Architecture (M.Arch)', startDate: '2011', endDate: '2017', description: '• Final thesis on the application of computational design in urban planning and housing, awarded with honors.' },
    { id: 'edu2', institution: 'Autodesk Certified Training', degree: 'Revit Professional Certification', startDate: '2018', endDate: '2018', description: '• Completed advanced certification for Revit Architecture.' },
  ],
  skills: 'AutoCAD, Revit, Rhinoceros 3D, Grasshopper, Parametric Design, Sustainable Design (LEED AP), Building Information Modeling (BIM), Project Management, 3D Rendering (V-Ray)',
};
