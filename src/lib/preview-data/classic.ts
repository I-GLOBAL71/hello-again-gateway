
import type { CVData } from '../types';

export const classic: CVData = {
  personalInfo: {
    name: 'James P. Smith',
    title: 'Senior Financial Analyst',
    email: 'james.smith@email.com',
    phone: '555-0102',
    address: 'New York, NY',
  },
  summary: 'Detail-oriented and highly analytical Senior Financial Analyst with over 8 years of experience in financial modeling, forecasting, and quantitative analysis within high-stakes corporate environments. Seeking to leverage strong analytical skills and a deep understanding of financial markets to contribute to a challenging financial environment. Proven ability to deliver actionable insights that drive strategic decisions, improve financial performance, and enhance shareholder value.',
  experience: [
    { id: 'exp1', company: 'Capital Investments Inc.', role: 'Senior Financial Analyst', startDate: '2018', endDate: 'Present', description: '• Developed and maintained complex financial models to support strategic planning, valuation, and M&A activities, directly influencing over $250M in successful transactions.\n• Prepared and presented quarterly financial reports and board materials to senior management, highlighting key trends, variances, and providing actionable insights.\n• Automated several key reporting processes using VBA and Python, reducing manual effort by 40% and significantly improving accuracy and turnaround time.\n• Mentored a team of junior analysts on financial modeling best practices.' },
    { id: 'exp2', company: 'Global Finance Group', role: 'Financial Analyst', startDate: '2016', endDate: '2018', description: '• Assisted in the preparation of annual budgets and rolling five-year forecasts for multiple international business units.\n• Conducted in-depth industry and competitor analysis to support investment decisions and strategic positioning in emerging markets.\n• Analyzed the financial performance of key business segments, providing monthly variance reports to management.' },
    { id: 'exp3', company: 'Morgan Stanley', role: 'Finance Intern', startDate: '2015', endDate: '2015', description: '• Supported the investment banking division with market research and data gathering for pitch books.\n• Assisted in creating valuation models for potential IPO candidates.' },
  ],
  education: [
    { id: 'edu1', institution: 'University of Pennsylvania, The Wharton School', degree: 'B.S. in Economics, Finance Concentration', startDate: '2012', endDate: '2016', description: '• Graduated magna cum laude.\n• Concentration in Corporate Finance and Accounting.\n• Member of the Wharton Investment and Trading Group.' },
    { id: 'edu2', institution: 'CFA Institute', degree: 'Chartered Financial Analyst (CFA) Charterholder', startDate: '2018', endDate: '2021', description: '• Passed all three levels on the first attempt, demonstrating mastery of investment tools, asset valuation, portfolio management, and wealth management.'}
  ],
  skills: 'Financial Modeling (DCF, LBO), Valuation Analysis, Excel (Advanced, incl. Pivot Tables, VBA), Python (Pandas, NumPy), Bloomberg Terminal, Capital IQ, Risk Management, Data Analysis, SQL, PowerPoint, Financial Reporting, SAP, IFRS Standards',
};
