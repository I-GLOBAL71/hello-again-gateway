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
  summary: 'Innovative and detail-oriented Architect with a passion for sustainable design and geometric forms. Experience in residential and commercial projects, transforming client needs into functional and aesthetically pleasing structures. Committed to creating spaces that are both environmentally responsible and contextually significant.',
  experience: [
    { id: 'exp1', company: 'Urban Forms Architects', role: 'Project Architect', startDate: '2017', endDate: 'Present', description: '• Led the design of a LEED Platinum certified office building, which won the National Architecture Award.\n• Managed projects from schematic design through construction administration, ensuring adherence to budget and timeline.\n• Utilized parametric design tools to explore complex geometries and optimize building performance.' },
    { id: 'exp2', company: 'García Schmidt Arquitectos', role: 'Intern Architect', startDate: '2016', endDate: '2017', description: '• Produced construction documents and 3D models for various residential projects.\n• Assisted in site visits and material selection processes.' },
  ],
  education: [
    { id: 'edu1', institution: 'Escola Tècnica Superior d\'Arquitectura de Barcelona (ETSAB)', degree: 'Master of Architecture (M.Arch)', startDate: '2011', endDate: '2017', description: '• Final thesis on computational design in urban planning, awarded with honors.' },
  ],
  skills: 'AutoCAD, Revit, Rhino, Grasshopper, Sustainable Design (LEED), Building Codes, Project Management, 3D Rendering (V-Ray)',
};
