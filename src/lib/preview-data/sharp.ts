import type { CVData } from '../types';

export const sharp: CVData = {
  personalInfo: {
    name: 'David Chen',
    title: 'Management Consultant',
    email: 'd.chen@consulting.com',
    phone: '555-0112',
    address: 'Singapore',
  },
  summary: 'Strategic and analytical Management Consultant with a proven record of helping clients in the tech and finance sectors solve complex business problems. Specializes in market entry strategy, operational efficiency, and digital transformation. I combine rigorous analysis with pragmatic solutions to drive sustainable growth and competitive advantage.',
  experience: [
    { id: 'exp1', company: 'Stratagem Consulting', role: 'Senior Consultant', startDate: '2019', endDate: 'Present', description: '• Advised a top-tier bank on its digital transformation roadmap, identifying $50M in potential annual cost savings.\n• Led a market entry analysis for a tech firm\'s expansion into Southeast Asia, resulting in a successful launch.\n• Developed a new pricing strategy for a SaaS client, increasing their average revenue per user (ARPU) by 18%.' },
    { id: 'exp2', company: 'Lion City Bank', role: 'Business Analyst', startDate: '2017', endDate: '2018', description: '• Worked in the corporate strategy team to analyze performance and identify growth opportunities.\n• Created comprehensive financial models for internal valuation projects.' },
  ],
  education: [
    { id: 'edu1', institution: 'INSEAD', degree: 'Master of Business Administration (MBA)', startDate: '2018', endDate: '2019', description: '• Graduated with Distinction. Dean\'s List.' },
    { id: 'edu2', institution: 'National University of Singapore', degree: 'Bachelor of Business Administration', startDate: '2013', endDate: '2017', description: '• First Class Honours.' },
  ],
  skills: 'Strategic Planning, Business Analysis, Financial Modeling, Market Research, Project Management, Change Management, Due Diligence, Data Visualization',
};
