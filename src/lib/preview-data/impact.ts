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
  summary: 'Dedicated and resourceful Non-Profit Program Director with over 10 years of experience designing, funding, and managing high-impact community development programs in East Africa. Proven success in grant writing, stakeholder engagement, and team leadership. Passionate about creating sustainable solutions for education and economic empowerment.',
  experience: [
    { id: 'exp1', company: 'Global Action Foundation', role: 'Program Director, East Africa', startDate: '2017', endDate: 'Present', description: '• Secured over $5M in funding from international donors for a new education initiative, reaching over 10,000 children.\n• Managed a cross-cultural team of 50+ staff and volunteers across three countries.\n• Developed and implemented a robust Monitoring & Evaluation framework to track program outcomes and ensure accountability.' },
    { id: 'exp2', company: 'Hope for Tomorrow (NGO)', role: 'Program Manager', startDate: '2012', endDate: '2017', description: '• Managed a portfolio of community health and sanitation projects.\n• Built strong relationships with local government and community leaders, leading to a 50% increase in community participation.' },
  ],
  education: [
    { id: 'edu1', institution: 'University of Cape Town', degree: 'Master of Social Science in Development Studies', startDate: '2010', endDate: '2012', description: '• Field research on the impact of microfinance in rural communities.' },
    { id: 'edu2', institution: 'McGill University', degree: 'B.A. in International Development Studies', startDate: '2006', endDate: '2010', description: '• Graduated with First Class Honours.' },
  ],
  skills: 'Program Management, Grant Writing, Community Organizing, Monitoring & Evaluation (M&E), Budgeting, Non-Profit Leadership, Stakeholder Engagement, Swahili',
};
