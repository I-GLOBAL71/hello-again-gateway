import type { CVData } from '../types';

export const classic: CVData = {
  personalInfo: {
    name: 'James Smith',
    title: 'Financial Analyst',
    email: 'james.smith@email.com',
    phone: '555-0102',
    address: 'New York, NY',
  },
  summary: 'Detail-oriented and highly analytical Financial Analyst with over 6 years of experience in financial modeling, forecasting, and data analysis. Seeking to leverage strong analytical skills and a deep understanding of financial markets to contribute to a challenging financial environment. Proven ability to deliver actionable insights that drive strategic decisions.',
  experience: [
    { id: 'exp1', company: 'Capital Investments', role: 'Financial Analyst', startDate: '2018', endDate: 'Present', description: '• Developed complex financial models to support strategic planning, valuation, and M&A activities.\n• Prepared and presented quarterly financial reports to senior management, highlighting key trends and variances.\n• Automated several reporting processes, reducing manual effort by 30%.' },
    { id: 'exp2', company: 'Global Finance Group', role: 'Junior Financial Analyst', startDate: '2016', endDate: '2018', description: '• Assisted in the preparation of annual budgets and forecasts.\n• Conducted industry and competitor analysis to support investment decisions.' },
  ],
  education: [
    { id: 'edu1', institution: 'University of Pennsylvania, Wharton School', degree: 'B.S. in Finance, magna cum laude', startDate: '2012', endDate: '2016', description: '• Concentration in Corporate Finance and Accounting.\n• Member of the Wharton Investment and Trading Group.' },
  ],
  skills: 'Financial Modeling, Excel, VBA, Bloomberg Terminal, Risk Management, Data Analysis, SQL, PowerPoint, Financial Reporting',
};
