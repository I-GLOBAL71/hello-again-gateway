
import type { CVData } from '../types';

export const classic: CVData = {
  personalInfo: {
    name: 'James Smith',
    title: 'Financial Analyst',
    email: 'james.smith@email.com',
    phone: '555-0102',
    address: 'New York, NY',
  },
  summary: 'Detail-oriented and highly analytical Financial Analyst with over 6 years of experience in financial modeling, forecasting, and quantitative analysis. Seeking to leverage strong analytical skills and a deep understanding of financial markets to contribute to a challenging financial environment. Proven ability to deliver actionable insights that drive strategic decisions and improve financial performance.',
  experience: [
    { id: 'exp1', company: 'Capital Investments Inc.', role: 'Senior Financial Analyst', startDate: '2018', endDate: 'Present', description: '• Developed and maintained complex financial models to support strategic planning, valuation, and M&A activities, influencing over $200M in transactions.\n• Prepared and presented quarterly financial reports to senior management, highlighting key trends, variances, and actionable insights.\n• Automated several key reporting processes using VBA and Python, reducing manual effort by 40% and improving accuracy.' },
    { id: 'exp2', company: 'Global Finance Group', role: 'Financial Analyst', startDate: '2016', endDate: '2018', description: '• Assisted in the preparation of annual budgets and five-year forecasts for multiple business units.\n• Conducted in-depth industry and competitor analysis to support investment decisions and strategic positioning.' },
  ],
  education: [
    { id: 'edu1', institution: 'University of Pennsylvania, Wharton School', degree: 'B.S. in Economics, Finance', startDate: '2012', endDate: '2016', description: '• Graduated magna cum laude.\n• Concentration in Corporate Finance and Accounting.\n• Member of the Wharton Investment and Trading Group.' },
  ],
  skills: 'Financial Modeling, DCF Valuation, Excel (Pivot Tables, VBA), Bloomberg Terminal, Risk Management, Data Analysis, SQL, PowerPoint, Financial Reporting, SAP',
};
