
import type { CVData } from '../types';

export const impact: CVData = {
  personalInfo: {
    name: 'Alex Jordan',
    title: 'Non-Profit Program Director',
    email: 'alex.jordan@impact.org',
    phone: '555-0114',
    address: 'Nairobi, Kenya',
    photo: 'https://i.pravatar.cc/150?u=alex-jordan'
  },
  summary: 'A dedicated and resourceful Non-Profit Program Director with over 12 years of experience designing, funding, and managing high-impact community development programs across East Africa. Proven success in securing multi-million dollar grants, building strategic partnerships with government and private sector stakeholders, and leading diverse, cross-cultural teams. Passionate about creating scalable and sustainable solutions for education, public health, and economic empowerment in underserved communities.',
  experience: [
    { id: 'exp1', company: 'Global Action Foundation', role: 'Program Director, East Africa', startDate: '2017', endDate: 'Present', description: '• Secured over $8M in funding from international donors (USAID, DFID, Gates Foundation) for a new girls\' education and empowerment initiative, reaching over 25,000 children in Kenya and Uganda.\n• Managed a cross-cultural team of 50+ staff and over 100 volunteers, fostering a collaborative and results-driven environment that exceeded all program targets for two consecutive years.\n• Developed and implemented a robust Monitoring & Evaluation (M&E) framework using digital data collection tools (CommCare) to track program outcomes in real-time and ensure accountability to stakeholders.' },
    { id: 'exp2', company: 'Hope for Tomorrow (NGO)', role: 'Program Manager, Water & Sanitation', startDate: '2012', endDate: '2017', description: '• Managed a portfolio of community health and sanitation (WASH) projects in rural Tanzania, improving access to clean water and sanitation facilities for over 50,000 people.\n• Built strong relationships with local government officials and community leaders, which was critical in establishing a community-led maintenance model, increasing project sustainability by 80%.\n• Authored successful grant proposals totaling $1.5M to expand program activities.' },
    { id: 'exp3', company: 'Peace Corps, Rwanda', role: 'Community Health Volunteer', startDate: '2010', endDate: '2012', description: '• Implemented health education workshops and initiatives in a rural village.\n• Worked with local schools to establish health and hygiene clubs.'},
  ],
  education: [
    { id: 'edu1', institution: 'University of Cape Town', degree: 'Master of Social Science in Development Studies', startDate: '2008', endDate: '2010', description: '• Conducted extensive field research on the socio-economic impact of microfinance programs on women entrepreneurs in urban slums, which was later published.' },
    { id: 'edu2', institution: 'McGill University', degree: 'B.A. in International Development & Political Science', startDate: '2004', endDate: '2008', description: '• Graduated with First Class Honours and was awarded the International Development Prize for an undergraduate thesis on post-conflict reconciliation.' },
  ],
  skills: 'Non-Profit Program Management, Grant Writing & Reporting, Community Organizing & Mobilization, Monitoring & Evaluation (M&E), Budgeting & Financial Oversight, Non-Profit Leadership, Stakeholder Engagement, Strategic Partnerships, Swahili (fluent), Kinyarwanda (proficient)',
};
