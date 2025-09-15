
import type { CVData } from '../types';

export const info: CVData = {
  personalInfo: {
    name: 'Priya Patel',
    title: 'Lead Data Scientist',
    email: 'priya.patel@data.com',
    phone: '555-0111',
    address: 'Bangalore, India',
    photo: 'https://i.pravatar.cc/150?u=priya-patel'
  },
  summary: 'An insightful and results-focused Lead Data Scientist with deep expertise in machine learning, statistical analysis, and data visualization. Passionate about uncovering hidden patterns in large, complex datasets to drive business decisions, optimize products, and foster innovation. A proven ability to translate complex data into compelling stories and actionable strategies for both technical and non-technical stakeholders. Experienced in leading data science teams and mentoring junior members.',
  experience: [
    { id: 'exp1', company: 'Data Insights Co.', role: 'Lead Data Scientist', startDate: '2018', endDate: 'Present', description: '• Built and deployed a suite of predictive models (e.g., for customer churn, lifetime value, and demand forecasting) that improved sales forecasts by 25% and reduced customer churn by 18%.\n• Led a team of 4 data scientists, overseeing project roadmaps, code reviews, and professional development.\n• Created interactive, real-time dashboards using Tableau and PowerBI for executive-level business intelligence and stakeholder reporting, providing key insights that led to a 10% increase in marketing ROI.\n• Architected and implemented a new data pipeline using Airflow and Spark, reducing data processing times by 60%.' },
    { id: 'exp2', company: 'Analytics Hub Inc.', role: 'Data Analyst', startDate: '2016', endDate: '2018', description: '• Performed exploratory data analysis on user behavior data from a 10M+ user base to identify key business trends and product opportunities.\n• Generated regular, automated reports on marketing campaign performance, leading to a 15% more efficient ad spend through channel optimization.\n• Used SQL and Python to clean and analyze large datasets for ad-hoc analysis requests from the product team.' },
    { id: 'exp3', company: 'Flipkart', role: 'Data Science Intern', startDate: '2015', endDate: '2015', description: '• Worked on a project to analyze customer purchase history to provide product recommendations.\n• Gained experience with large-scale data warehousing and SQL.'},
  ],
  education: [
    { id: 'edu1', institution: 'Indian Institute of Technology Bombay (IITB)', degree: 'M.Tech in Computer Science', startDate: '2014', endDate: '2016', description: '• Specialization in Artificial Intelligence and Machine Learning. Published a conference paper on novel anomaly detection algorithms.' },
    { id: 'edu2', institution: 'University of Delhi, St. Stephen\'s College', degree: 'B.Sc. in Statistics (Honours)', startDate: '2011', endDate: '2014', description: '• Awarded the University Gold Medal for outstanding academic excellence and topping the department.' },
  ],
  skills: 'Python (Pandas, Scikit-learn, NumPy), R, SQL, TensorFlow, PyTorch, Tableau, PowerBI, Machine Learning (Classification, Regression, Clustering), Statistical Analysis, Big Data Technologies (Apache Spark, Hadoop, Hive), AWS (S3, EC2, SageMaker), Airflow',
};
