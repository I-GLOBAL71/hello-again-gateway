import type { CVData } from '../types';

export const modern: CVData = {
  personalInfo: {
    name: 'Olivia Chen',
    title: 'Product Manager',
    email: 'olivia.chen@email.com',
    phone: '555-0101',
    address: 'San Francisco, CA',
    photo: 'https://i.pravatar.cc/150?u=olivia-chen'
  },
  summary: 'Dynamic and user-centric Product Manager with 8 years of experience in fast-paced tech environments. Proven ability to lead cross-functional teams to deliver innovative products from concept to launch. Passionate about leveraging data to drive decision-making and create intuitive user experiences that solve real-world problems.',
  experience: [
    { id: 'exp1', company: 'Innovate Solutions Inc.', role: 'Senior Product Manager', startDate: '2020', endDate: 'Present', description: '• Led the development of a new mobile-first platform, resulting in a 40% increase in user engagement.\n• Managed product roadmap and prioritized features based on market research and user feedback, leading to a 15% revenue increase.\n• Collaborated with UX/UI teams to redesign the user onboarding flow, reducing drop-off rates by 20%.' },
    { id: 'exp2', company: 'NextGen Apps', role: 'Product Manager', startDate: '2018', endDate: '2020', description: '• Successfully launched three major product updates, contributing to a 25% growth in user base.\n• Conducted extensive A/B testing to optimize feature adoption and monetization strategies.' },
  ],
  education: [
    { id: 'edu1', institution: 'Stanford University', degree: 'M.S. in Human-Computer Interaction', startDate: '2014', endDate: '2016', description: '• Thesis on user-centered design methodologies for SaaS platforms.\n• Awarded the Stanford Innovation Fellowship.' },
    { id: 'edu2', institution: 'University of California, Berkeley', degree: 'B.A. in Cognitive Science', startDate: '2010', endDate: '2014', description: '• Graduated with High Honors.' },
  ],
  skills: 'Product Strategy, Agile Methodologies, User Research, Roadmapping, A/B Testing, JIRA, SQL, Data Analysis, Prototyping',
};
