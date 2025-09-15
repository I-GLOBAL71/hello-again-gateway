
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
  summary: 'A dedicated and resourceful Non-Profit Program Director with over 10 years of experience designing, funding, and managing high-impact community development programs across East Africa. Proven success in grant writing, strategic partnerships, and leading cross-cultural teams. Passionate about creating scalable and sustainable solutions for education, public health, and economic empowerment in underserved communities.',
  experience: [
    { id: 'exp1', company: 'Global Action Foundation', role: 'Program Director, East Africa', startDate: '2017', endDate: 'Present', description: '• Secured over $5M in funding from international donors (USAID, DFID) for a new girls\' education initiative, reaching over 10,000 children in Kenya and Uganda.\n• Managed a cross-cultural team of 50+ staff and volunteers, fostering a collaborative and results-driven environment.\n• Developed and implemented a robust Monitoring & Evaluation (M&E) framework to track program outcomes and ensure accountability to stakeholders.' },
    { id: 'exp2', company: 'Hope for Tomorrow (NGO)', role: 'Program Manager', startDate: '2012', endDate: '2017', description: '• Managed a portfolio of community health and sanitation projects in rural Tanzania, improving access to clean water for over 25,000 people.\n• Built strong relationships with local government officials and community leaders, leading to a 50% increase in community participation and project ownership.' },
  ],
  education: [
    { id: 'edu1', institution: 'University of Cape Town', degree: 'Master of Social Science in Development Studies', startDate: '2010', endDate: '2012', description: '• Conducted field research on the socio-economic impact of microfinance programs on women entrepreneurs in urban slums.' },
    { id: 'edu2', institution: 'McGill University', degree: 'B.A. in International Development & Political Science', startDate: '2006', endDate: '2010', description: '• Graduated with First Class Honours and was awarded the International Development prize.' },
  ],
  skills: 'Program Management, Grant Writing & Reporting, Community Organizing, Monitoring & Evaluation (M&E), Budgeting & Financial Oversight, Non-Profit Leadership, Stakeholder Engagement, Swahili (fluent)',
};
