import type { CVData } from '../types';

export const info: CVData = {
  personalInfo: {
    name: 'Priya Patel',
    title: 'Data Scientist',
    email: 'priya.patel@data.com',
    phone: '555-0111',
    address: 'Bangalore, India',
    photo: 'https://i.pravatar.cc/150?u=priya-patel'
  },
  summary: 'Insightful and analytical Data Scientist with deep expertise in machine learning, statistical analysis, and data visualization. Passionate about uncovering hidden patterns in data to drive business decisions and product innovation. Proven ability to translate complex data into compelling stories and actionable strategies.',
  experience: [
    { id: 'exp1', company: 'Data Insights Co.', role: 'Senior Data Scientist', startDate: '2018', endDate: 'Present', description: '• Built and deployed predictive models that improved sales forecasts by 20% and reduced customer churn by 15%.\n• Created interactive dashboards using Tableau for business intelligence and stakeholder reporting.\n• Mentored junior data scientists in machine learning best practices.' },
    { id: 'exp2', company: 'Analytics Hub', role: 'Data Analyst', startDate: '2016', endDate: '2018', description: '• Performed exploratory data analysis to identify key business trends.\n• Generated regular reports on marketing campaign performance and user behavior.' },
  ],
  education: [
    { id: 'edu1', institution: 'Indian Institute of Technology Bombay', degree: 'M.Tech in Computer Science', startDate: '2014', endDate: '2016', description: '• Specialization in Artificial Intelligence and Machine Learning.' },
    { id: 'edu2', institution: 'University of Delhi', degree: 'B.Sc. in Statistics', startDate: '2011', endDate: '2014', description: '• Gold Medalist for academic excellence.' },
  ],
  skills: 'Python (Pandas, Scikit-learn, NumPy), R, SQL, TensorFlow, PyTorch, Tableau, Machine Learning, Statistical Analysis, Big Data (Spark)',
};
