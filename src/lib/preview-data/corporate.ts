
import type { CVData } from '../types';

export const corporate: CVData = {
  personalInfo: {
    name: 'Susan J. Miller',
    title: 'Marketing Director',
    email: 's.miller@email.com',
    phone: '555-0105',
    address: 'Chicago, IL',
    photo: 'https://i.pravatar.cc/150?u=susan-miller'
  },
  summary: 'Results-driven Marketing Director with over 15 years of progressive experience in developing and executing successful, data-driven marketing strategies for Fortune 500 companies in the CPG and tech sectors. Expertise in go-to-market strategy, brand management, digital transformation, and leading high-performance teams to exceed ambitious revenue targets. A strategic thinker with a talent for optimizing marketing spend and delivering measurable ROI.',
  experience: [
    { id: 'exp1', company: 'Global Consumer Brands Corp.', role: 'Marketing Director', startDate: '2015', endDate: 'Present', description: '• Grew market share by 18% in a competitive landscape through targeted, multi-channel campaigns with a focus on personalization and customer lifecycle management.\n• Managed a team of 25 marketing professionals and an annual budget of $30M, consistently achieving a 15% year-over-year increase in marketing-qualified leads (MQLs).\n• Spearheaded the company\'s digital transformation, leading to a 350% increase in e-commerce revenue and a 50% improvement in customer conversion rates.' },
    { id: 'exp2', company: 'Innovatech Solutions', role: 'Senior Marketing Manager', startDate: '2010', endDate: '2015', description: '• Launched a new flagship SaaS product line that generated over $12M in revenue in its first year, exceeding targets by 30%.\n• Developed and managed the company’s content marketing and social media strategies, doubling the online follower base and increasing engagement by 80%.\n• Implemented a marketing automation platform (HubSpot) which improved lead nurturing and qualification.' },
    { id: 'exp3', company: 'MarketMinds Agency', role: 'Marketing Coordinator', startDate: '2008', endDate: '2010', description: '• Supported campaign execution for multiple B2B and B2C clients, including email marketing, event planning, and media buying.\n• Analyzed campaign performance metrics to provide actionable insights for optimization.' },
  ],
  education: [
    { id: 'edu1', institution: 'Northwestern University, Kellogg School of Management', degree: 'MBA, Marketing & Strategy', startDate: '2006', endDate: '2008', description: '• Graduated with Honors.\n• President of the Kellogg Marketing Club and Siebel Scholar.' },
    { id: 'edu2', institution: 'University of Michigan, Ann Arbor', degree: 'B.A. in Communications', startDate: '2002', endDate: '2006', description: '• Graduated with Distinction and was a member of the Communications Honor Society.' },
  ],
  skills: 'Marketing Strategy, Brand Management, Digital Marketing, SEO/SEM, Go-to-Market Strategy, Market Research, Team Leadership, Budget Management, P&L Analysis, Salesforce CRM, HubSpot, Google Analytics, Adobe Analytics',
};
