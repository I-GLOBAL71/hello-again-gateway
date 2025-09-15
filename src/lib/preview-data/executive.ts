
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
  summary: 'Visionary and results-oriented CEO with a 20-year track record of driving exponential growth, innovation, and profitability in the competitive technology and SaaS sectors. Adept at strategic planning, corporate governance, and building high-performance executive teams. A proven leader with extensive experience in M&A, capital raising ($500M+), and navigating complex market dynamics to deliver exceptional shareholder value and sustainable, long-term growth.',
  experience: [
    { id: 'exp1', company: 'Apex Innovations PLC', role: 'Chief Executive Officer', startDate: '2018', endDate: 'Present', description: '• Grew company revenue from $50M to $300M in 4 years through a combination of strategic acquisitions and organic market expansion into North American and APAC regions.\n• Led the company through a successful IPO on the London Stock Exchange, raising £150M and increasing company valuation by 300% post-listing.\n• Established a culture of innovation, launching three new enterprise SaaS product lines that now account for 45% of total annual recurring revenue (ARR).\n• Championed a customer-centric transformation that improved Net Promoter Score (NPS) from 30 to 55.' },
    { id: 'exp2', company: 'Future Systems Ltd.', role: 'Chief Operating Officer', startDate: '2012', endDate: '2018', description: '• Overhauled and streamlined global operations across 8 countries, improving operational efficiency by 40% and increasing EBITDA margins by 15%.\n• Scaled the organization from 200 to over 1200 employees while maintaining a strong corporate culture and high employee retention rates (90%+).\n• Led the post-merger integration of a key acquisition, realizing cost synergies of $20M annually.' },
    { id: 'exp3', company: 'TechGeniuses Inc.', role: 'VP of Business Development', startDate: '2005', endDate: '2012', description: '• Forged key strategic partnerships with industry leaders such as Microsoft, Salesforce, and SAP, which drove a 50% year-over-year growth in enterprise sales for four consecutive years.\n• Built and led a global sales team of 50+ members.' },
  ],
  education: [
    { id: 'edu1', institution: 'London Business School', degree: 'Executive MBA, Strategy & Finance', startDate: '2005', endDate: '2007', description: '• Graduated with Distinction and was a member of the Dean\'s List for outstanding academic performance.' },
    { id: 'edu2', institution: 'University of Cambridge', degree: 'B.Sc. in Engineering, First Class Honours', startDate: '1998', endDate: '2002', description: '• Specialized in systems engineering and computational modeling.' },
  ],
  skills: 'Strategic Leadership, P&L Management, Mergers & Acquisitions (M&A), Corporate Governance, Investor Relations, Capital Raising (IPO & Private Equity), Go-to-Market Strategy, SaaS business models, Global Operations Management, Board-level Communication',
};
