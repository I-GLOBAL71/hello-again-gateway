
import type { CVData } from '../types';

export const minimalist: CVData = {
  personalInfo: {
    name: 'Kenji Tanaka',
    title: 'Senior Software Engineer',
    email: 'kenji.tanaka@email.com',
    phone: '555-0104',
    address: 'Tokyo, Japan',
  },
  summary: 'An efficient and pragmatic Senior Software Engineer specializing in backend development and distributed systems architecture. Focused on writing clean, scalable, and maintainable code with a strong emphasis on performance and reliability. Enjoys solving complex problems with simple, elegant solutions. Deeply committed to best practices, test-driven development (TDD), and continuous improvement in all aspects of the software development lifecycle.',
  experience: [
    { id: 'exp1', company: 'TechFlow Solutions', role: 'Senior Backend Engineer', startDate: '2021', endDate: 'Present', description: '• Designed and implemented a new microservices architecture using Go for a high-traffic e-commerce platform, improving system resilience, scalability, and reducing latency by 40%.\n• Optimized database performance by rewriting critical queries, introducing a Redis caching layer, and implementing connection pooling, reducing average API response times by 60% under load.\n• Led code reviews and established new coding standards and CI/CD pipelines for the backend team, improving code quality and deployment frequency.\n• Mentored two mid-level engineers, helping them grow into senior roles.' },
    { id: 'exp2', company: 'CodeWorks Japan', role: 'Software Engineer', startDate: '2019', endDate: '2021', description: '• Developed and maintained a suite of RESTful APIs for B2B SaaS products using Go and PostgreSQL.\n• Wrote extensive unit and integration tests using the standard library testing package, improving overall code coverage from 70% to over 95%.\n• Collaborated with front-end developers to design and implement efficient API contracts.'},
    { id: 'exp3', company: 'Rakuten', role: 'Software Engineering Intern', startDate: '2018', endDate: '2018', description: '• Worked on the core services team, fixing bugs and implementing small features for the main e-commerce platform.\n• Gained experience with large-scale systems and agile development processes.'},
  ],
  education: [
    { id: 'edu1', institution: 'University of Tokyo', degree: 'B.S. in Computer Science & Engineering', startDate: '2015', endDate: '2019', description: '• Graduated with honors, with a research focus on distributed systems and concurrent algorithms.\n• Was a teaching and research assistant for the Advanced AI Lab during final year.' },
    { id: 'edu2', institution: 'Online Certifications', degree: 'Certified Kubernetes Application Developer (CKAD)', startDate: '2021', endDate: '2021', description: '• Completed professional certification demonstrating expertise in designing, building, and deploying cloud-native applications on Kubernetes.' },
  ],
  skills: 'Go (Golang), Python, PostgreSQL, Redis, gRPC, Docker, Kubernetes, AWS (EC2, S3, RDS), System Design & Architecture, Microservices, CI/CD (Jenkins, GitLab CI), Test-Driven Development (TDD), Prometheus, Grafana',
};
