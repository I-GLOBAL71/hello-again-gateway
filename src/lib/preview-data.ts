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
    summary: 'Dynamic and user-centric Product Manager with 8 years of experience in fast-paced tech environments. Proven ability to lead cross-functional teams to deliver innovative products from concept to launch. Passionate about leveraging data to drive decision-making and create intuitive user experiences that solve real-world problems.',
    experience: [
      { id: 'exp1', company: 'Innovate Solutions Inc.', role: 'Senior Product Manager', startDate: '2020', endDate: 'Present', description: '• Led the development of a new mobile-first platform, resulting in a 40% increase in user engagement.\n• Managed product roadmap and prioritized features based on market research and user feedback, leading to a 15% revenue increase.\n• Collaborated with UX/UI teams to redesign the user onboarding flow, reducing drop-off rates by 20%.' },
      { id: 'exp2', company: 'NextGen Apps', role: 'Product Manager', startDate: '2018', endDate: '2020', description: '• Successfully launched three major product updates, contributing to a 25% growth in user base.\n• Conducted extensive A/B testing to optimize feature adoption and monetization strategies.' },
      { id: 'exp3', company: 'Data Corp', role: 'Associate Product Manager', startDate: '2016', endDate: '2018', description: '• Supported product planning and sprint execution for a B2B analytics tool.\n• Analyzed user data to generate insights for product improvements.' },
    ],
    education: [
      { id: 'edu1', institution: 'Stanford University', degree: 'M.S. in Human-Computer Interaction', startDate: '2014', endDate: '2016', description: '• Thesis on user-centered design methodologies for SaaS platforms.\n• Awarded the Stanford Innovation Fellowship.' },
      { id: 'edu2', institution: 'University of California, Berkeley', degree: 'B.A. in Cognitive Science', startDate: '2010', endDate: '2014', description: '• Graduated with High Honors.' },
    ],
    skills: 'Product Strategy, Agile Methodologies, User Research, Roadmapping, A/B Testing, JIRA, SQL, Data Analysis, Prototyping',
  },
  classic: {
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
    summary: 'Imaginative and versatile Graphic Designer with a passion for creating compelling visual stories. Expert in branding, illustration, and digital media. Thrives in collaborative environments to bring creative concepts to life from ideation to final execution. Always looking for new ways to blend art and technology.',
    experience: [
      { id: 'exp1', company: 'Visionary Design Studio', role: 'Lead Graphic Designer', startDate: '2019', endDate: 'Present', description: '• Led a complete rebranding for a major client, increasing their market presence by 30%.\n• Created custom illustrations for international marketing campaigns, both digital and print.\n• Mentored a team of junior designers, fostering a culture of creativity and excellence.' },
      { id: 'exp2', company: 'Artbox Agency', role: 'Graphic Designer', startDate: '2017', endDate: '2019', description: '• Designed websites, social media content, and print materials for a variety of clients.\n• Collaborated with copywriters and marketing managers to ensure brand consistency.' },
    ],
    education: [
      { id: 'edu1', institution: 'Gobelins, l\'école de l\'image', degree: 'Master in Graphic Design', startDate: '2015', endDate: '2017', description: '• Specialization in Motion Graphics and Interactive Design.' },
      { id: 'edu2', institution: 'École des Beaux-Arts de Paris', degree: 'Bachelor of Fine Arts (BFA)', startDate: '2012', endDate: '2015', description: '• Focused on drawing and printmaking.' },
    ],
    skills: 'Adobe Creative Suite (Photoshop, Illustrator, InDesign, After Effects), Branding & Identity, Illustration, Typography, UI/UX Principles, Figma, Web Design',
  },
  minimalist: {
    personalInfo: {
      name: 'Kenji Tanaka',
      title: 'Software Engineer',
      email: 'kenji.tanaka@email.com',
      phone: '555-0104',
      address: 'Tokyo, Japan',
    },
    summary: 'Efficient and pragmatic Software Engineer specializing in backend development and system architecture. Focused on writing clean, scalable, and maintainable code. Enjoys solving complex problems with simple, elegant solutions. Committed to best practices and continuous improvement.',
    experience: [
      { id: 'exp1', company: 'TechFlow', role: 'Senior Backend Developer', startDate: '2021', endDate: 'Present', description: '• Designed and implemented microservices architecture for a high-traffic e-commerce platform.\n• Optimized database performance, reducing query latency by 50% under load.\n• Led code reviews and established new coding standards for the backend team.' },
      { id: 'exp2', company: 'CodeWorks Japan', role: 'Software Engineer', startDate: '2019', endDate: '2021', description: '• Developed and maintained RESTful APIs for a suite of B2B SaaS products.\n• Wrote extensive unit and integration tests, improving code coverage to over 90%.'},
    ],
    education: [
      { id: 'edu1', institution: 'University of Tokyo', degree: 'B.S. in Computer Science', startDate: '2015', endDate: '2019', description: '• Graduated with honors, focusing on distributed systems and algorithms.' },
    ],
    skills: 'Python, Django, Go, PostgreSQL, Docker, Kubernetes, AWS, System Design, REST APIs, Microservices',
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
    summary: 'Results-driven Marketing Director with over 15 years of experience in developing and executing successful marketing strategies for Fortune 500 companies. Expertise in market analysis, brand management, and leading high-performance teams to exceed ambitious revenue targets. A strategic thinker with a talent for data-driven optimization.',
    experience: [
      { id: 'exp1', company: 'Global Corp.', role: 'Marketing Director', startDate: '2015', endDate: 'Present', description: '• Grew market share by 15% in two years through targeted, multi-channel campaigns.\n• Managed a team of 20 marketing professionals and a budget of $25M.\n• Spearheaded the company\'s digital transformation, leading to a 300% increase in online leads.' },
      { id: 'exp2', company: 'Innovatech', role: 'Senior Marketing Manager', startDate: '2010', endDate: '2015', description: '• Launched a new product line that generated over $10M in revenue in its first year.\n• Developed and managed the company’s content marketing and social media strategies.' },
      { id: 'exp3', company: 'MarketMinds', role: 'Marketing Coordinator', startDate: '2008', endDate: '2010', description: '• Supported campaign execution and analyzed performance metrics to provide actionable insights.' },
    ],
    education: [
      { id: 'edu1', institution: 'Northwestern University, Kellogg School of Management', degree: 'MBA in Marketing & Strategy', startDate: '2006', endDate: '2008', description: '• President of the Kellogg Marketing Club.' },
      { id: 'edu2', institution: 'University of Michigan', degree: 'B.A. in Communications', startDate: '2002', endDate: '2006', description: '' },
    ],
    skills: 'Marketing Strategy, Brand Management, Digital Marketing, SEO/SEM, Market Research, Team Leadership, Budget Management, P&L Analysis',
  },
  academic: {
    personalInfo: {
      name: 'Dr. Eleanor Vance',
      title: 'Professor of History',
      email: 'eleanor.vance@university.edu',
      phone: '555-0106',
      address: 'Cambridge, MA',
    },
    summary: 'Accomplished Professor of History with a focus on 19th-century European social movements. Extensive experience in archival research, undergraduate and graduate teaching, and academic publishing. Recipient of the prestigious Historical Research Grant for work on transatlantic political discourse. Seeking to continue contributing to the field through rigorous scholarship and dedicated mentorship.',
    experience: [
      { id: 'exp1', company: 'Harvard University, Department of History', role: 'Professor', startDate: '2012', endDate: 'Present', description: '• Published 15+ peer-reviewed articles in leading historical journals and two scholarly books with university presses.\n• Supervised 5 doctoral theses to completion and served on numerous dissertation committees.\n• Designed and taught a range of courses, from introductory surveys to advanced graduate seminars.' },
      { id: 'exp2', company: 'The National Archives, UK', role: 'Visiting Research Fellow', startDate: '2018', endDate: '2019', description: '• Conducted extensive archival research for a forthcoming book project on Anglo-French relations.\n• Presented findings at institutional seminars and international conferences.' },
    ],
    education: [
      { id: 'edu1', institution: 'Yale University', degree: 'Ph.D. in History', startDate: '2007', endDate: '2012', description: '• Dissertation: "The Republic of Letters: Communication and Political Ideology, 1815-1848".' },
      { id: 'edu2', institution: 'University of Oxford', degree: 'M.St. in European History', startDate: '2006', endDate: '2007', description: '' },
      { id: 'edu3', institution: 'Swarthmore College', degree: 'B.A. in History, with High Honors', startDate: '2002', endDate: '2006', description: '' },
    ],
    skills: 'Historical Research, Archival Analysis, Grant Writing, Public Speaking, Curriculum Development, French, German, Paleography',
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
    summary: 'Visionary and results-oriented CEO with a 20-year track record of driving exponential growth, innovation, and profitability in the technology sector. Adept at strategic planning, corporate governance, and building high-performance executive teams. Proven leader with experience in M&A, capital raising, and navigating complex market dynamics to deliver shareholder value.',
    experience: [
      { id: 'exp1', company: 'Apex Innovations PLC', role: 'Chief Executive Officer', startDate: '2018', endDate: 'Present', description: '• Increased company revenue from $50M to $250M through strategic acquisitions and organic market expansion.\n• Led the company through a successful IPO on the London Stock Exchange, raising £150M.\n• Established a culture of innovation, launching three new product lines that now account for 40% of total revenue.' },
      { id: 'exp2', company: 'Future Systems Ltd.', role: 'Chief Operating Officer', startDate: '2012', endDate: '2018', description: '• Streamlined global operations, improving operational efficiency by 40% and increasing profit margins by 12%.\n• Scaled the organization from 200 to over 1000 employees across three continents.' },
      { id: 'exp3', company: 'TechGeniuses', role: 'VP of Business Development', startDate: '2005', endDate: '2012', description: '• Forged key strategic partnerships that drove a 50% year-over-year growth in enterprise sales.' },
    ],
    education: [
      { id: 'edu1', institution: 'London Business School', degree: 'Executive MBA', startDate: '2005', endDate: '2007', description: '' },
      { id: 'edu2', institution: 'University of Cambridge', degree: 'B.Sc. in Engineering', startDate: '1998', endDate: '2002', description: '' },
    ],
    skills: 'Strategic Leadership, P&L Management, Mergers & Acquisitions (M&A), Corporate Governance, Investor Relations, Capital Raising, Go-to-Market Strategy',
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
    summary: 'Sophisticated and creative Interior Designer known for creating timeless, elegant spaces that blend classic principles with modern aesthetics. Specializes in luxury residential and boutique hotel projects, with a strong focus on bespoke details, quality materials, and client collaboration. My philosophy is to create environments that are both beautiful and deeply personal.',
    experience: [
      { id: 'exp1', company: 'Rossi Designs', role: 'Founder & Principal Designer', startDate: '2015', endDate: 'Present', description: '• Designed award-winning interiors for high-profile clients in Milan, London, and New York.\n• Featured in "Architectural Digest", "Elle Decor", and "Vogue Living".\n• Managed all project phases from initial concept and space planning to final installation.' },
      { id: 'exp2', company: 'Studio Bellini', role: 'Junior Interior Designer', startDate: '2014', endDate: '2015', description: '• Assisted senior designers on large-scale hospitality projects.\n• Sourced materials, created mood boards, and prepared technical drawings.' },
    ],
    education: [
      { id: 'edu1', institution: 'Politecnico di Milano', degree: 'Master in Interior Design', startDate: '2012', endDate: '2014', description: '• Graduated with distinction.' },
      { id: 'edu2', institution: 'Accademia di Belle Arti di Brera', degree: 'B.A. in History of Art', startDate: '2009', endDate: '2012', description: '' },
    ],
    skills: 'Space Planning, Material Selection, Custom Furniture Design, Project Management, AutoCAD, SketchUp, Client Relations, FF&E Specification',
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
    summary: 'Fearless and creative UX/UI Developer who bridges the gap between design and technology. Expert in creating intuitive, dynamic, and visually stunning user interfaces with a focus on performance and accessibility. I build experiences, not just pages. Always pushing the boundaries with modern web technologies.',
    experience: [
      { id: 'exp1', company: 'Digital Mayhem', role: 'Senior UX/UI Developer', startDate: '2019', endDate: 'Present', description: '• Developed and maintained a component library in React/TypeScript that standardized the UI across all company products.\n• Implemented complex animations and micro-interactions using GSAP and Framer Motion.\n• Championed accessibility (WCAG 2.1 AA), leading to a more inclusive user experience.' },
      { id: 'exp2', company: 'Creative Coders', role: 'Frontend Developer', startDate: '2017', endDate: '2019', description: '• Translated Figma mockups into pixel-perfect, responsive web pages using Vue.js and Tailwind CSS.\n• Collaborated with backend developers to integrate APIs and ensure seamless data flow.' },
    ],
    education: [
      { id: 'edu1', institution: 'Code Academy Bootcamp', degree: 'Full-Stack Development Certificate', startDate: '2016', endDate: '2017', description: '• Intensive program focused on modern MERN stack development.' },
      { id: 'edu2', institution: 'University of Texas at Austin', degree: 'B.A. in Digital Media', startDate: '2012', endDate: '2016', description: '' },
    ],
    skills: 'React, Vue.js, TypeScript, WebGL, GSAP, Figma, Framer, WCAG Accessibility, Storybook, Jest, Next.js',
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
    summary: 'Innovative and detail-oriented Architect with a passion for sustainable design and geometric forms. Experience in residential and commercial projects, transforming client needs into functional and aesthetically pleasing structures. Committed to creating spaces that are both environmentally responsible and contextually significant.',
    experience: [
      { id: 'exp1', company: 'Urban Forms Architects', role: 'Project Architect', startDate: '2017', endDate: 'Present', description: '• Led the design of a LEED Platinum certified office building, which won the National Architecture Award.\n• Managed projects from schematic design through construction administration, ensuring adherence to budget and timeline.\n• Utilized parametric design tools to explore complex geometries and optimize building performance.' },
      { id: 'exp2', company: 'García Schmidt Arquitectos', role: 'Intern Architect', startDate: '2016', endDate: '2017', description: '• Produced construction documents and 3D models for various residential projects.\n• Assisted in site visits and material selection.' },
    ],
    education: [
      { id: 'edu1', institution: 'Escola Tècnica Superior d\'Arquitectura de Barcelona (ETSAB)', degree: 'Master of Architecture (M.Arch)', startDate: '2011', endDate: '2017', description: '• Final thesis on computational design in urban planning.' },
    ],
    skills: 'AutoCAD, Revit, Rhino, Grasshopper, Sustainable Design (LEED), Building Codes, Project Management, 3D Rendering (V-Ray)',
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
    summary: 'Insightful and analytical Data Scientist with deep expertise in machine learning, statistical analysis, and data visualization. Passionate about uncovering hidden patterns in data to drive business decisions and product innovation. Proven ability to translate complex data into compelling stories and actionable strategies.',
    experience: [
      { id: 'exp1', company: 'Data Insights Co.', role: 'Senior Data Scientist', startDate: '2018', endDate: 'Present', description: '• Built and deployed predictive models that improved sales forecasts by 20% and reduced customer churn by 15%.\n• Created interactive dashboards using Tableau for business intelligence and stakeholder reporting.\n• Mentored junior data scientists in machine learning best practices.' },
      { id: 'exp2', company: 'Analytics Hub', role: 'Data Analyst', startDate: '2016', endDate: '2018', description: '• Performed exploratory data analysis to identify key business trends.\n• Generated regular reports on marketing campaign performance and user behavior.' },
    ],
    education: [
      { id: 'edu1', institution: 'Indian Institute of Technology Bombay', degree: 'M.Tech in Computer Science', startDate: '2014', endDate: '2016', description: '• Specialization in Artificial Intelligence and Machine Learning.' },
      { id: 'edu2', institution: 'University of Delhi', degree: 'B.Sc. in Statistics', startDate: '2011', endDate: '2014', description: '' },
    ],
    skills: 'Python (Pandas, Scikit-learn, NumPy), R, SQL, TensorFlow, PyTorch, Tableau, Machine Learning, Statistical Analysis, Big Data Technologies (Spark)',
  },
  sharp: {
    personalInfo: {
      name: 'David Chen',
      title: 'Management Consultant',
      email: 'd.chen@consulting.com',
      phone: '555-0112',
      address: 'Singapore',
    },
    summary: 'Strategic and analytical Management Consultant with a proven record of helping clients in the tech and finance sectors solve complex business problems. Specializes in market entry strategy, operational efficiency, and digital transformation. I combine rigorous analysis with pragmatic solutions to drive sustainable growth and competitive advantage.',
    experience: [
      { id: 'exp1', company: 'Stratagem Consulting', role: 'Senior Consultant', startDate: '2019', endDate: 'Present', description: '• Advised a top-tier bank on its digital transformation roadmap, identifying $50M in potential annual cost savings.\n• Led a market entry analysis for a tech firm\'s expansion into Southeast Asia, resulting in a successful launch.\n• Developed a new pricing strategy for a SaaS client, increasing their average revenue per user (ARPU) by 18%.' },
      { id: 'exp2', company: 'Lion City Bank', role: 'Business Analyst', startDate: '2017', endDate: '2018', description: '• Worked in the corporate strategy team to analyze performance and identify growth opportunities.' },
    ],
    education: [
      { id: 'edu1', institution: 'INSEAD', degree: 'Master of Business Administration (MBA)', startDate: '2018', endDate: '2019', description: '• Graduated with Distinction. Dean\'s List.' },
      { id: 'edu2', institution: 'National University of Singapore', degree: 'Bachelor of Business Administration', startDate: '2013', endDate: '2017', description: '• First Class Honours.' },
    ],
    skills: 'Strategic Planning, Business Analysis, Financial Modeling, Market Research, Project Management, Change Management, Due Diligence',
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
    summary: 'Passionate and creative photographer with a keen eye for capturing emotion and telling stories through images. Specializes in portrait, event, and documentary photography. My work seeks to find the beauty in the everyday and create lasting visual narratives. I am proficient in both digital and analog mediums, with a full-service approach from concept to final print.',
    experience: [
      { id: 'exp1', company: 'Freelance Photographer', role: 'Owner & Lead Photographer', startDate: '2016', endDate: 'Present', description: '• Worked with a diverse range of clients, from non-profits and editorial magazines to corporate brands and private commissions.\n• Published a photo series in "National Geographic Traveler" and had work exhibited in galleries in Mexico City and New York.\n• Managed all aspects of the business, including client acquisition, shooting, post-production, and print sales.' },
    ],
    education: [
      { id: 'edu1', institution: 'School of Visual Arts, New York', degree: 'BFA in Photography and Video', startDate: '2012', endDate: '2016', description: '• Recipient of the SVA Rhodes Family Award for Outstanding Achievement.' },
      { id: 'edu2', institution: 'International Center of Photography', degree: 'Advanced Darkroom Workshop', startDate: '2017', endDate: '2017', description: '' },
    ],
    skills: 'Digital & Film Photography, Adobe Lightroom, Photoshop, Capture One, Portraiture, Photojournalism, Advanced Lighting Techniques, Videography, Printmaking',
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
    summary: 'Dedicated and resourceful Non-Profit Program Director with over 10 years of experience designing, funding, and managing high-impact community development programs in East Africa. Proven success in grant writing, stakeholder engagement, and team leadership. Passionate about creating sustainable solutions for education and economic empowerment.',
    experience: [
      { id: 'exp1', company: 'Global Action Foundation', role: 'Program Director, East Africa', startDate: '2017', endDate: 'Present', description: '• Secured over $5M in funding from international donors for a new education initiative, reaching over 10,000 children.\n• Managed a cross-cultural team of 50+ staff and volunteers across three countries.\n• Developed and implemented a robust Monitoring & Evaluation framework to track program outcomes and ensure accountability.' },
      { id: 'exp2', company: 'Hope for Tomorrow (NGO)', role: 'Program Manager', startDate: '2012', endDate: '2017', description: '• Managed a portfolio of community health and sanitation projects.\n• Built strong relationships with local government and community leaders.' },
    ],
    education: [
      { id: 'edu1', institution: 'University of Cape Town', degree: 'Master of Social Science in Development Studies', startDate: '2010', endDate: '2012', description: '' },
      { id: 'edu2', institution: 'McGill University', degree: 'B.A. in International Development Studies', startDate: '2006', endDate: '2010', description: '' },
    ],
    skills: 'Program Management, Grant Writing, Community Organizing, Monitoring & Evaluation (M&E), Budgeting, Non-Profit Leadership, Stakeholder Engagement, Swahili (fluent)',
  },
};

    