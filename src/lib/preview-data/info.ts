
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
  summary: 'An insightful and analytical Data Scientist with deep expertise in machine learning, statistical analysis, and data visualization. Passionate about uncovering hidden patterns in large datasets to drive business decisions, optimize products, and foster innovation. A proven ability to translate complex data into compelling stories and actionable strategies for technical and non-technical stakeholders alike.',
  experience: [
    { id: 'exp1', company: 'Data Insights Co.', role: 'Senior Data Scientist', startDate: '2018', endDate: 'Present', description: '• Built and deployed a suite of predictive models (e.g., for customer churn, LTV) that improved sales forecasts by 20% and reduced customer churn by 15%.\n• Created interactive, real-time dashboards using Tableau and PowerBI for business intelligence and stakeholder reporting, providing key insights to leadership.\n• Mentored a team of three junior data scientists in machine learning best practices, experimental design, and coding standards.' },
    { id: 'exp2', company: 'Analytics Hub', role: 'Data Analyst', startDate: '2016', endDate: '2018', description: '• Performed exploratory data analysis on user behavior data to identify key business trends and product opportunities.\n• Generated regular, automated reports on marketing campaign performance, leading to a 10% more efficient ad spend.' },
  ],
  education: [
    { id: 'edu1', institution: 'Indian Institute of Technology Bombay', degree: 'M.Tech in Computer Science', startDate: '2014', endDate: '2016', description: '• Specialization in Artificial Intelligence and Machine Learning. Published a paper on anomaly detection algorithms.' },
    { id: 'edu2', institution: 'University of Delhi', degree: 'B.Sc. in Statistics (Honours)', startDate: '2011', endDate: '2014', description: '• Awarded the University Gold Medal for outstanding academic excellence and topping the department.' },
  ],
  skills: 'Python (Pandas, Scikit-learn, NumPy), R, SQL, TensorFlow, PyTorch, Tableau, PowerBI, Machine Learning, Statistical Analysis, Big Data Technologies (Spark, Hadoop)',
};
