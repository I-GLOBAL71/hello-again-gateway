
import type { CVData } from '../types';

export const modern: CVData = {
  personalInfo: {
    name: 'Olivia Chen',
    title: 'Senior Product Manager',
    email: 'olivia.chen@email.com',
    phone: '555-0101',
    address: 'San Francisco, CA',
    photo: 'https://i.pravatar.cc/150?u=olivia-chen'
  },
  summary: 'Dynamic and user-centric Senior Product Manager with 8+ years of experience leading cross-functional teams in fast-paced, high-growth tech environments. Proven ability to take innovative products from concept to successful launch and scale, driving both user adoption and revenue growth. Passionate about leveraging data, user research, and market insights to drive decision-making and create intuitive, delightful user experiences that solve real-world problems.',
  experience: [
    { id: 'exp1', company: 'Innovate Solutions Inc.', role: 'Senior Product Manager', startDate: '2020', endDate: 'Present', description: '• Led the development and launch of a new mobile-first B2B SaaS platform, resulting in a 40% increase in user engagement and capturing a 15% market share within the first year.\n• Defined and managed the product roadmap, prioritizing features based on market research, user feedback (NPS, surveys), and business value, leading to a 20% YoY revenue increase.\n• Collaborated with UX/UI teams to completely redesign the user onboarding flow, conducting extensive usability testing and reducing drop-off rates by 30%.\n• Managed a team of 2 product managers and worked with a dedicated engineering team of 15.' },
    { id: 'exp2', company: 'NextGen Apps', role: 'Product Manager', startDate: '2018', endDate: '2020', description: '• Successfully launched three major product updates for a consumer-facing app with over 2M active users, contributing to a 30% growth in the user base.\n• Conducted extensive A/B testing and data analysis (using SQL and Mixpanel) to optimize feature adoption and monetization strategies, increasing ARPU by 10%.\n• Wrote detailed product requirement documents (PRDs) and user stories for the engineering team.' },
    { id: 'exp3', company: 'Connectly', role: 'Associate Product Manager', startDate: '2016', endDate: '2018', description: '• Supported senior PMs in market research, competitive analysis, and feature specification.\n• Managed the product backlog and coordinated sprint planning ceremonies with the development team.' },
  ],
  education: [
    { id: 'edu1', institution: 'Stanford University', degree: 'M.S. in Human-Computer Interaction (HCI)', startDate: '2014', endDate: '2016', description: '• Thesis on user-centered design methodologies for enterprise SaaS platforms.\n• Awarded the Stanford Innovation Fellowship for a project on collaborative real-time software.' },
    { id: 'edu2', institution: 'University of California, Berkeley', degree: 'B.A. in Cognitive Science, with Honors', startDate: '2010', endDate: '2014', description: '• Graduated with High Honors, focusing on human perception, decision-making, and behavioral economics.' },
  ],
  skills: 'Product Strategy & Vision, Agile & Scrum Methodologies, User Research & Interviews, Roadmapping & Prioritization, A/B Testing, Data Analysis, JIRA & Confluence, SQL, Mixpanel, Figma, Prototyping, Go-to-Market Strategy',
};
