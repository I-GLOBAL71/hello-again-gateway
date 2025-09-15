
import type { CVData } from '../types';

export const sharp: CVData = {
  personalInfo: {
    name: 'David Chen',
    title: 'Management Consultant',
    email: 'd.chen@consulting.com',
    phone: '555-0112',
    address: 'Singapore',
    photo: 'https://i.pravatar.cc/150?u=david-chen'
  },
  summary: 'A strategic and highly analytical Management Consultant with a proven record of helping clients in the technology and financial services sectors solve their most complex business problems. I specialize in market entry strategy, operational efficiency, and digital transformation. I combine rigorous, data-driven analysis with pragmatic, actionable solutions to drive sustainable growth, optimize performance, and create a lasting competitive advantage for my clients.',
  experience: [
    { id: 'exp1', company: 'Stratagem Consulting Group', role: 'Senior Consultant', startDate: '2019', endDate: 'Present', description: '• Advised a top-tier regional bank on its digital transformation roadmap, identifying over $50M in potential annual cost savings through process automation and platform consolidation.\n• Led a comprehensive market entry analysis for a European fintech firm\'s expansion into Southeast Asia, resulting in a successful launch and exceeding first-year revenue targets by 25%.\n• Developed a new, data-driven pricing strategy for a SaaS client, which increased their average revenue per user (ARPU) by 18% within six months and reduced churn by 5%.\n• Managed client relationships and led a team of 3 analysts to deliver high-quality project outcomes.' },
    { id: 'exp2', company: 'Lion City Bank', role: 'Corporate Strategy Analyst', startDate: '2017', endDate: '2018', description: '• Worked in the corporate strategy team to analyze business unit performance, identify growth opportunities, and prepare briefing materials for the executive board.\n• Created comprehensive financial models for internal valuation projects and potential acquisition targets, assisting in two major due diligence processes.\n• Presented findings and recommendations to senior leadership.' },
    { id: 'exp3', company: 'Deloitte', role: 'Summer Analyst', startDate: '2016', endDate: '2016', description: '• Supported the M&A advisory team on due diligence for a major telecommunications merger.\n• Conducted industry research and competitive benchmarking.' },
  ],
  education: [
    { id: 'edu1', institution: 'INSEAD', degree: 'Master of Business Administration (MBA)', startDate: '2018', endDate: '2019', description: '• Graduated with Distinction and was placed on the Dean\'s List for academic excellence.\n• President of the Consulting Club.' },
    { id: 'edu2', institution: 'National University of Singapore (NUS)', degree: 'Bachelor of Business Administration, First Class Honours', startDate: '2013', endDate: '2017', description: '• Specialization in Finance and Operations Management.\n• Recipient of the NUS Business School Leadership Award.' },
  ],
  skills: 'Strategic Planning, Business Analysis, Financial Modeling & Valuation, Market Research, Project Management, Change Management, Due Diligence, Data Visualization (Tableau, PowerBI), Advanced PowerPoint & Excel',
};
