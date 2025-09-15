
import type { CVData } from '../types';

export const geometric: CVData = {
  personalInfo: {
    name: 'Leo Valdez',
    title: 'Computational Architect',
    email: 'leo.valdez@arch.com',
    phone: '555-0110',
    address: 'Barcelona, Spain',
    photo: 'https://i.pravatar.cc/150?u=leo-valdez'
  },
  summary: 'An innovative and detail-oriented Architect with a passion for sustainable design, modular construction, and the exploration of geometric forms through computational design. Extensive experience in both residential and large-scale commercial projects, with a talent for transforming complex client needs into functional and aesthetically pleasing structures. Committed to creating spaces that are both environmentally responsible and contextually significant, pushing the boundaries of modern architecture.',
  experience: [
    { id: 'exp1', company: 'Urban Forms Architects', role: 'Project Architect', startDate: '2018', endDate: 'Present', description: '• Led the design and development of a LEED Platinum certified mixed-use building, which won the National Architecture Award for Sustainable Design in 2021.\n• Managed projects from schematic design through construction administration, ensuring strict adherence to budget, schedule, and design intent.\n• Utilized parametric design tools (Grasshopper, Dynamo) to explore complex geometries and optimize building facade performance, resulting in a 25% increase in energy efficiency compared to baseline.\n• Coordinated with a multidisciplinary team of engineers, consultants, and contractors.' },
    { id: 'exp2', company: 'García Schmidt Arquitectos', role: 'Intern Architect', startDate: '2016', endDate: '2017', description: '• Produced detailed construction documents, 3D models, and visualizations for various high-end residential projects in the Costa Brava region.\n• Assisted in site visits, coordination with structural engineers, and material selection processes, gaining foundational project experience.\n• Was responsible for preparing client presentation packages and physical models.' },
    { id: 'exp3', company: 'Institute for Advanced Architecture of Catalonia (IAAC)', role: 'Research Assistant', startDate: '2015', endDate: '2016', description: '• Assisted in research on robotic fabrication and digital construction techniques.\n• Contributed to a published paper on the use of drones in site surveying.'},
  ],
  education: [
    { id: 'edu1', institution: 'Escola Tècnica Superior d\'Arquitectura de Barcelona (ETSAB-UPC)', degree: 'Master of Architecture (M.Arch)', startDate: '2011', endDate: '2017', description: '• Final thesis on the application of computational design in urban planning and social housing, awarded with honors.' },
    { id: 'edu2', institution: 'Autodesk Certified Training Center', degree: 'Revit Professional Certification', startDate: '2018', endDate: '2018', description: '• Completed advanced professional certification for Revit Architecture, focusing on BIM management.' },
  ],
  skills: 'AutoCAD, Revit (BIM Management), Rhinoceros 3D, Grasshopper, Dynamo, Parametric Design, Sustainable Design (LEED AP), Project Management, Construction Documentation, 3D Rendering (V-Ray, Enscape), Adobe Creative Suite',
};
