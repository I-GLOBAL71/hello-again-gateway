import type { CVData } from './types';

export const previewDataSets: { [key: string]: CVData } = {
  default: {
    personalInfo: {
      name: 'Your Name',
      title: 'Professional Title',
      email: 'your.email@example.com',
      phone: '123-456-7890',
      address: 'City, Country',
    },
    summary: 'A brief professional summary about yourself, your skills, and your career goals.',
    experience: [
      {
        id: 'exp1',
        company: 'Company Name',
        role: 'Job Title',
        startDate: 'YYYY',
        endDate: 'YYYY',
        description: '• Key responsibilities and achievements.',
      },
    ],
    education: [
      {
        id: 'edu1',
        institution: 'University Name',
        degree: 'Degree',
        startDate: 'YYYY',
        endDate: 'YYYY',
        description: '• Relevant coursework or honors.',
      },
    ],
    skills: 'Skill 1, Skill 2, Skill 3',
  },
  modern: {
    personalInfo: {
      name: 'Olivia Chen',
      title: 'Product Manager',
      email: 'olivia.chen@email.com',
      phone: '555-0101',
      address: 'San Francisco, CA',
      photo: 'https://i.pravatar.cc/150?u=olivia-chen'
    },
    summary: 'Dynamic and user-centric Product Manager with 8 years of experience in fast-paced tech environments. Proven ability to lead cross-functional teams to deliver innovative products from concept to launch.',
    experience: [
      { id: 'exp1', company: 'Innovate Solutions Inc.', role: 'Senior Product Manager', startDate: '2020', endDate: 'Present', description: '• Led the development of a new mobile-first platform, resulting in a 40% increase in user engagement.\n• Managed product roadmap and prioritized features based on market research and user feedback.' },
      { id: 'exp2', company: 'NextGen Apps', role: 'Product Manager', startDate: '2016', endDate: '2020', description: '• Successfully launched three major product updates, contributing to a 25% growth in user base.' },
    ],
    education: [
      { id: 'edu1', institution: 'Stanford University', degree: 'M.S. in Human-Computer Interaction', startDate: '2014', endDate: '2016', description: '• Thesis on user-centered design methodologies.' },
    ],
    skills: 'Product Strategy, Agile Methodologies, User Research, Roadmapping, A/B Testing, JIRA, SQL',
  },
  classic: {
    personalInfo: {
      name: 'James Smith',
      title: 'Financial Analyst',
      email: 'james.smith@email.com',
      phone: '555-0102',
      address: 'New York, NY',
    },
    summary: 'Detail-oriented Financial Analyst with a strong background in financial modeling, forecasting, and data analysis. Seeking to leverage analytical skills to contribute to a challenging financial environment.',
    experience: [
      { id: 'exp1', company: 'Capital Investments', role: 'Financial Analyst', startDate: '2018', endDate: 'Present', description: '• Developed complex financial models to support strategic planning.\n• Prepared and presented quarterly financial reports to senior management.' },
    ],
    education: [
      { id: 'edu1', institution: 'University of Pennsylvania', degree: 'B.S. in Finance, magna cum laude', startDate: '2014', endDate: '2018', description: '' },
    ],
    skills: 'Financial Modeling, Excel, VBA, Bloomberg Terminal, Risk Management, Data Analysis',
  },
  creative: {
    personalInfo: {
      name: 'Chloe Dubois',
      title: 'Graphic Designer & Illustrator',
      email: 'chloe.dubois@email.com',
      phone: '555-0103',
      address: 'Paris, France',
      photo: 'https://i.pravatar.cc/150?u=chloe-dubois'
    },
    summary: 'Imaginative Graphic Designer with a passion for creating compelling visual stories. Expert in branding, illustration, and digital media. Thrives in collaborative environments to bring creative concepts to life.',
    experience: [
      { id: 'exp1', company: 'Visionary Design Studio', role: 'Lead Graphic Designer', startDate: '2019', endDate: 'Present', description: '• Led a complete rebranding for a major client, increasing their market presence by 30%.\n• Created custom illustrations for marketing campaigns.' },
    ],
    education: [
      { id: 'edu1', institution: 'Gobelins, l\'école de l\'image', degree: 'Master in Graphic Design', startDate: '2017', endDate: '2019', description: '' },
    ],
    skills: 'Adobe Creative Suite (Photoshop, Illustrator, InDesign), Branding, Illustration, Typography, UI/UX Principles',
  },
  minimalist: {
    personalInfo: {
      name: 'Kenji Tanaka',
      title: 'Software Engineer',
      email: 'kenji.tanaka@email.com',
      phone: '555-0104',
      address: 'Tokyo, Japan',
    },
    summary: 'Efficient Software Engineer specializing in backend development and system architecture. Focused on writing clean, scalable, and maintainable code. Enjoys solving complex problems.',
    experience: [
      { id: 'exp1', company: 'TechFlow', role: 'Backend Developer', startDate: '2019', endDate: 'Present', description: '• Designed and implemented RESTful APIs for a high-traffic web application.\n• Optimized database performance, reducing query times by 50%.' },
    ],
    education: [
      { id: 'edu1', institution: 'University of Tokyo', degree: 'B.S. in Computer Science', startDate: '2015', endDate: '2019', description: '' },
    ],
    skills: 'Python, Django, PostgreSQL, Docker, AWS, System Design, REST APIs',
  },
  corporate: {
    personalInfo: {
      name: 'Susan Miller',
      title: 'Marketing Director',
      email: 's.miller@email.com',
      phone: '555-0105',
      address: 'Chicago, IL',
      photo: 'https://i.pravatar.cc/150?u=susan-miller'
    },
    summary: 'Results-driven Marketing Director with over 15 years of experience in developing and executing successful marketing strategies for Fortune 500 companies. Expertise in market analysis, brand management, and digital marketing.',
    experience: [
      { id: 'exp1', company: 'Global Corp.', role: 'Marketing Director', startDate: '2015', endDate: 'Present', description: '• Grew market share by 15% in two years through targeted campaigns.\n• Managed a team of 20 marketing professionals.' },
      { id: 'exp2', company: 'Innovatech', role: 'Senior Marketing Manager', startDate: '2008', endDate: '2015', description: '• Launched a product line that generated $10M in its first year.' },
    ],
    education: [
      { id: 'edu1', institution: 'Northwestern University, Kellogg School of Management', degree: 'MBA in Marketing', startDate: '2006', endDate: '2008', description: '' },
    ],
    skills: 'Marketing Strategy, Brand Management, Digital Marketing, SEO/SEM, Market Research, Team Leadership',
  },
  academic: {
    personalInfo: {
      name: 'Dr. Eleanor Vance',
      title: 'Professor of History',
      email: 'eleanor.vance@university.edu',
      phone: '555-0106',
      address: 'Cambridge, MA',
    },
    summary: 'Accomplished Professor of History with a focus on 19th-century European social movements. Extensive experience in teaching, research, and academic publishing. Recipient of the Historical Research Grant.',
    experience: [
      { id: 'exp1', company: 'Harvard University', role: 'Professor', startDate: '2012', endDate: 'Present', description: '• Published 15+ peer-reviewed articles and two books.\n• Supervised 5 doctoral theses to completion.' },
    ],
    education: [
      { id: 'edu1', institution: 'Yale University', degree: 'Ph.D. in History', startDate: '2007', endDate: '2012', description: '' },
    ],
    skills: 'Historical Research, Archival Analysis, Grant Writing, Public Speaking, Curriculum Development',
  },
  executive: {
    personalInfo: {
      name: 'Marcus Thorne',
      title: 'Chief Executive Officer',
      email: 'm.thorne@executive.com',
      phone: '555-0107',
      address: 'London, UK',
      photo: 'https://i.pravatar.cc/150?u=marcus-thorne'
    },
    summary: 'Visionary CEO with a 20-year track record of driving growth, innovation, and profitability in the technology sector. Adept at strategic planning, corporate governance, and building high-performance executive teams.',
    experience: [
      { id: 'exp1', company: 'Apex Innovations', role: 'Chief Executive Officer', startDate: '2018', endDate: 'Present', description: '• Increased company revenue by 200% through strategic acquisitions and market expansion.\n• Led the company through a successful IPO.' },
      { id: 'exp2', company: 'Future Systems', role: 'Chief Operating Officer', startDate: '2010', endDate: '2018', description: '• Streamlined operations, improving efficiency by 40%.' },
    ],
    education: [
      { id: 'edu1', institution: 'London Business School', degree: 'Executive MBA', startDate: '2005', endDate: '2007', description: '' },
    ],
    skills: 'Strategic Leadership, P&L Management, Mergers & Acquisitions, Corporate Governance, Investor Relations',
  },
  elegant: {
    personalInfo: {
      name: 'Isabella Rossi',
      title: 'Interior Designer',
      email: 'isabella.r@design.com',
      phone: '555-0108',
      address: 'Milan, Italy',
      photo: 'https://i.pravatar.cc/150?u=isabella-rossi'
    },
    summary: 'Sophisticated Interior Designer known for creating timeless, elegant spaces that blend classic principles with modern aesthetics. Specializes in luxury residential and boutique hotel projects.',
    experience: [
      { id: 'exp1', company: 'Rossi Designs', role: 'Founder & Principal Designer', startDate: '2015', endDate: 'Present', description: '• Designed award-winning interiors for high-profile clients.\n• Featured in "Architectural Digest" and "Elle Decor".' },
    ],
    education: [
      { id: 'edu1', institution: 'Politecnico di Milano', degree: 'Master in Interior Design', startDate: '2012', endDate: '2014', description: '' },
    ],
    skills: 'Space Planning, Material Selection, Custom Furniture Design, Project Management, AutoCAD, SketchUp',
  },
  bold: {
    personalInfo: {
      name: 'Jax Ryder',
      title: 'UX/UI Developer',
      email: 'jax.ryder@dev.io',
      phone: '555-0109',
      address: 'Austin, TX',
      photo: 'https://i.pravatar.cc/150?u=jax-ryder'
    },
    summary: 'Fearless UX/UI Developer who bridges the gap between design and technology. Expert in creating intuitive, dynamic, and visually stunning user interfaces with a focus on performance and accessibility.',
    experience: [
      { id: 'exp1', company: 'Digital Mayhem', role: 'Senior UX/UI Developer', startDate: '2019', endDate: 'Present', description: '• Developed a component library in React that standardized the UI across all products.\n• Implemented complex animations and micro-interactions.' },
    ],
    education: [
      { id: 'edu1', institution: 'Code Academy Bootcamp', degree: 'Full-Stack Development Certificate', startDate: '2018', endDate: '2019', description: '' },
    ],
    skills: 'React, Vue.js, TypeScript, WebGL, Figma, Framer, WCAG Accessibility',
  },
  geometric: {
    personalInfo: {
      name: 'Leo Valdez',
      title: 'Architect',
      email: 'leo.valdez@arch.com',
      phone: '555-0110',
      address: 'Barcelona, Spain',
      photo: 'https://i.pravatar.cc/150?u=leo-valdez'
    },
    summary: 'Innovative Architect with a passion for sustainable design and geometric forms. Experience in residential and commercial projects, transforming client needs into functional and aesthetically pleasing structures.',
    experience: [
      { id: 'exp1', company: 'Urban Forms Architects', role: 'Project Architect', startDate: '2017', endDate: 'Present', description: '• Led the design of a LEED Platinum certified office building.\n• Managed projects from schematic design through construction administration.' },
    ],
    education: [
      { id: 'edu1', institution: 'ETSAB', degree: 'Master of Architecture', startDate: '2011', endDate: '2017', description: '' },
    ],
    skills: 'AutoCAD, Revit, Rhino, Sustainable Design, Building Codes, Project Management',
  },
  info: {
    personalInfo: {
      name: 'Priya Patel',
      title: 'Data Scientist',
      email: 'priya.patel@data.com',
      phone: '555-0111',
      address: 'Bangalore, India',
      photo: 'https://i.pravatar.cc/150?u=priya-patel'
    },
    summary: 'Insightful Data Scientist with expertise in machine learning, statistical analysis, and data visualization. Passionate about uncovering hidden patterns in data to drive business decisions and product innovation.',
    experience: [
      { id: 'exp1', company: 'Data Insights Co.', role: 'Senior Data Scientist', startDate: '2018', endDate: 'Present', description: '• Built predictive models that improved sales forecasts by 20%.\n• Created interactive dashboards for business intelligence.' },
    ],
    education: [
      { id: 'edu1', institution: 'Indian Institute of Technology Bombay', degree: 'M.Tech in Computer Science', startDate: '2016', endDate: '2018', description: 'Specialization in AI and Machine Learning' },
    ],
    skills: 'Python (Pandas, Scikit-learn), R, SQL, TensorFlow, Tableau, Machine Learning, Statistical Analysis',
  },
  sharp: {
    personalInfo: {
      name: 'David Chen',
      title: 'Management Consultant',
      email: 'd.chen@consulting.com',
      phone: '555-0112',
      address: 'Singapore',
    },
    summary: 'Strategic Management Consultant with a proven record of helping clients in the tech and finance sectors solve complex business problems. Specializes in market entry strategy, operational efficiency, and digital transformation.',
    experience: [
      { id: 'exp1', company: 'Stratagem Consulting', role: 'Senior Consultant', startDate: '2019', endDate: 'Present', description: '• Advised a top bank on its digital transformation roadmap, identifying $50M in potential cost savings.\n• Led a market analysis for a tech firm\'s expansion into Southeast Asia.' },
    ],
    education: [
      { id: 'edu1', institution: 'INSEAD', degree: 'MBA', startDate: '2018', endDate: '2019', description: '' },
    ],
    skills: 'Strategic Planning, Business Analysis, Financial Modeling, Market Research, Project Management',
  },
  gallery: {
    personalInfo: {
      name: 'Sofia Alvarez',
      title: 'Photographer',
      email: 'sofia.a@photo.net',
      phone: '555-0113',
      address: 'Mexico City, Mexico',
      photo: 'https://i.pravatar.cc/150?u=sofia-alvarez'
    },
    summary: 'Passionate and creative photographer with a keen eye for capturing emotion and telling stories through images. Specializes in portrait, event, and documentary photography. My work seeks to find the beauty in the everyday.',
    experience: [
      { id: 'exp1', company: 'Freelance Photographer', role: 'Owner', startDate: '2016', endDate: 'Present', description: '• Worked with a diverse range of clients, from non-profits to corporate brands.\n• Published a photo series in "National Geographic Traveler".' },
    ],
    education: [
      { id: 'edu1', institution: 'School of Visual Arts', degree: 'BFA in Photography', startDate: '2012', endDate: '2016', description: '' },
    ],
    skills: 'Digital & Film Photography, Adobe Lightroom, Photoshop, Portraiture, Photojournalism, Lighting Techniques',
  },
  impact: {
    personalInfo: {
      name: 'Alex Jordan',
      title: 'Non-Profit Program Director',
      email: 'alex.jordan@impact.org',
      phone: '555-0114',
      address: 'Nairobi, Kenya',
      photo: 'https://i.pravatar.cc/150?u=alex-jordan'
    },
    summary: 'Dedicated Non-Profit Program Director with over 10 years of experience designing and managing high-impact community development programs in East Africa. Proven success in grant writing, stakeholder engagement, and team leadership.',
    experience: [
      { id: 'exp1', company: 'Global Action Foundation', role: 'Program Director', startDate: '2017', endDate: 'Present', description: '• Secured $5M in funding for a new education initiative, reaching over 10,000 children.\n• Managed a cross-cultural team of 50+ staff and volunteers.' },
    ],
    education: [
      { id: 'edu1', institution: 'University of Cape Town', degree: 'Master of Social Science in Development Studies', startDate: '2010', endDate: '2012', description: '' },
    ],
    skills: 'Program Management, Grant Writing, Community Organizing, Monitoring & Evaluation, Budgeting, Leadership',
  },
};
