
import type { CVData } from '../types';

export const corporate: CVData = {
  personalInfo: {
    name: 'Susan Miller',
    title: 'Marketing Director',
    email: 's.miller@email.com',
    phone: '555-0105',
    address: 'Chicago, IL',
    photo: 'https://i.pravatar.cc/150?u=susan-miller'
  },
  summary: 'Results-driven Marketing Director with over 15 years of experience in developing and executing successful, data-driven marketing strategies for Fortune 500 companies. Expertise in market analysis, brand management, digital transformation, and leading high-performance teams to exceed ambitious revenue targets. A strategic thinker with a talent for optimizing marketing spend and delivering measurable ROI.',
  experience: [
    { id: 'exp1', company: 'Global Corp.', role: 'Marketing Director', startDate: '2015', endDate: 'Present', description: '• Grew market share by 15% in a competitive landscape through targeted, multi-channel campaigns with a focus on personalization.\n• Managed a team of 20 marketing professionals and an annual budget of $25M, consistently achieving a 10% year-over-year increase in marketing-qualified leads.\n• Spearheaded the company\'s digital transformation, leading to a 300% increase in online leads and a 50% improvement in conversion rates.' },
    { id: 'exp2', company: 'Innovatech', role: 'Senior Marketing Manager', startDate: '2010', endDate: '2015', description: '• Launched a new flagship product line that generated over $10M in revenue in its first year, exceeding targets by 25%.\n• Developed and managed the company’s content marketing and social media strategies, doubling the online follower base.' },
    { id: 'exp3', company: 'MarketMinds Agency', role: 'Marketing Coordinator', startDate: '2008', endDate: '2010', description: '• Supported campaign execution for multiple B2B clients and analyzed performance metrics to provide actionable insights for optimization.' },
  ],
  education: [
    { id: 'edu1', institution: 'Northwestern University, Kellogg School of Management', degree: 'MBA in Marketing & Strategy', startDate: '2006', endDate: '2008', description: '• Graduated with Honors.\n• President of the Kellogg Marketing Club.' },
    { id: 'edu2', institution: 'University of Michigan', degree: 'B.A. in Communications', startDate: '2002', endDate: '2006', description: '• Graduated with Distinction and was a member of the Communications Honor Society.' },
  ],
  skills: 'Marketing Strategy, Brand Management, Digital Marketing, SEO/SEM, Market Research, Team Leadership, Budget Management, P&L Analysis, Salesforce, Google Analytics',
};
