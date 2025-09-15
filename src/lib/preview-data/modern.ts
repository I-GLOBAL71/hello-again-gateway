
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
  summary: 'Dynamic and user-centric Product Manager with 8 years of experience leading cross-functional teams in fast-paced tech environments. Proven ability to take innovative products from concept to successful launch and scale. Passionate about leveraging data and user research to drive decision-making and create intuitive, delightful user experiences that solve real-world problems and achieve business goals.',
  experience: [
    { id: 'exp1', company: 'Innovate Solutions Inc.', role: 'Senior Product Manager', startDate: '2020', endDate: 'Present', description: '• Led the development and launch of a new mobile-first B2B SaaS platform, resulting in a 40% increase in user engagement and capturing a 10% market share within the first year.\n• Defined and managed the product roadmap, prioritizing features based on market research, user feedback, and business value, leading to a 15% YoY revenue increase.\n• Collaborated with UX/UI teams to completely redesign the user onboarding flow, reducing drop-off rates by 25%.' },
    { id: 'exp2', company: 'NextGen Apps', role: 'Product Manager', startDate: '2018', endDate: '2020', description: '• Successfully launched three major product updates for a consumer-facing app with 1M+ active users, contributing to a 25% growth in the user base.\n• Conducted extensive A/B testing and data analysis to optimize feature adoption and monetization strategies.' },
  ],
  education: [
    { id: 'edu1', institution: 'Stanford University', degree: 'M.S. in Human-Computer Interaction', startDate: '2014', endDate: '2016', description: '• Thesis on user-centered design methodologies for SaaS platforms.\n• Awarded the Stanford Innovation Fellowship for a project on collaborative software.' },
    { id: 'edu2', institution: 'University of California, Berkeley', degree: 'B.A. in Cognitive Science', startDate: '2010', endDate: '2014', description: '• Graduated with High Honors, focusing on human perception and decision-making.' },
  ],
  skills: 'Product Strategy, Agile & Scrum Methodologies, User Research & Interviews, Roadmapping & Prioritization, A/B Testing, JIRA, SQL, Data Analysis, Prototyping (Figma)',
};
