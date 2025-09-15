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
  summary: 'Visionary and results-oriented CEO with a 20-year track record of driving exponential growth, innovation, and profitability in the technology sector. Adept at strategic planning, corporate governance, and building high-performance executive teams. Proven leader with experience in M&A, capital raising, and navigating complex market dynamics to deliver shareholder value.',
  experience: [
    { id: 'exp1', company: 'Apex Innovations PLC', role: 'Chief Executive Officer', startDate: '2018', endDate: 'Present', description: '• Increased company revenue from $50M to $250M through strategic acquisitions and organic market expansion.\n• Led the company through a successful IPO on the London Stock Exchange, raising £150M.\n• Established a culture of innovation, launching three new product lines that now account for 40% of total revenue.' },
    { id: 'exp2', company: 'Future Systems Ltd.', role: 'Chief Operating Officer', startDate: '2012', endDate: '2018', description: '• Streamlined global operations, improving operational efficiency by 40% and increasing profit margins by 12%.\n• Scaled the organization from 200 to over 1000 employees across three continents.' },
    { id: 'exp3', company: 'TechGeniuses', role: 'VP of Business Development', startDate: '2005', endDate: '2012', description: '• Forged key strategic partnerships that drove a 50% year-over-year growth in enterprise sales.' },
  ],
  education: [
    { id: 'edu1', institution: 'London Business School', degree: 'Executive MBA', startDate: '2005', endDate: '2007', description: '• Graduated with Distinction.' },
    { id: 'edu2', institution: 'University of Cambridge', degree: 'B.Sc. in Engineering', startDate: '1998', endDate: '2002', description: '• First Class Honours.' },
  ],
  skills: 'Strategic Leadership, P&L Management, Mergers & Acquisitions, Corporate Governance, Investor Relations, Capital Raising, Go-to-Market Strategy',
};
