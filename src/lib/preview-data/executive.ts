
import type { CVData } from '../types';

export const executive: CVData = {
  personalInfo: {
    name: 'Marcus Thorne',
    title: 'Chief Executive Officer',
    email: 'm.thorne@executive.com',
    phone: '555-0107',
    address: 'London, UK',
    photo: 'https://i.pravatar.cc/150?u=marcus-thorne'
  },
  summary: 'Visionary and results-oriented CEO with a 20-year track record of driving exponential growth, innovation, and profitability in the competitive technology sector. Adept at strategic planning, corporate governance, and building high-performance executive teams. A proven leader with extensive experience in M&A, capital raising, and navigating complex market dynamics to deliver exceptional shareholder value and sustainable growth.',
  experience: [
    { id: 'exp1', company: 'Apex Innovations PLC', role: 'Chief Executive Officer', startDate: '2018', endDate: 'Present', description: '• Grew company revenue from $50M to $250M in 4 years through a combination of strategic acquisitions and organic market expansion into APAC.\n• Led the company through a successful IPO on the London Stock Exchange, raising £150M and increasing valuation by 300% post-listing.\n• Established a culture of innovation, launching three new enterprise SaaS product lines that now account for 40% of total revenue.' },
    { id: 'exp2', company: 'Future Systems Ltd.', role: 'Chief Operating Officer', startDate: '2012', endDate: '2018', description: '• Overhauled and streamlined global operations across 5 countries, improving operational efficiency by 40% and increasing profit margins by 12%.\n• Scaled the organization from 200 to over 1000 employees while maintaining a strong corporate culture and high employee retention rates.' },
    { id: 'exp3', company: 'TechGeniuses Inc.', role: 'VP of Business Development', startDate: '2005', endDate: '2012', description: '• Forged key strategic partnerships with industry leaders that drove a 50% year-over-year growth in enterprise sales for three consecutive years.' },
  ],
  education: [
    { id: 'edu1', institution: 'London Business School', degree: 'Executive MBA, Strategy', startDate: '2005', endDate: '2007', description: '• Graduated with Distinction and was a member of the Dean\'s List.' },
    { id: 'edu2', institution: 'University of Cambridge', degree: 'B.Sc. in Engineering, First Class Honours', startDate: '1998', endDate: '2002', description: '• Specialized in systems engineering and computational modeling.' },
  ],
  skills: 'Strategic Leadership, P&L Management, Mergers & Acquisitions (M&A), Corporate Governance, Investor Relations, Capital Raising, Go-to-Market Strategy, Global Operations',
};
