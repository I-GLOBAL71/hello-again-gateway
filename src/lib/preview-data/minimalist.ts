import type { CVData } from '../types';

export const minimalist: CVData = {
  personalInfo: {
    name: 'Kenji Tanaka',
    title: 'Software Engineer',
    email: 'kenji.tanaka@email.com',
    phone: '555-0104',
    address: 'Tokyo, Japan',
  },
  summary: 'Efficient and pragmatic Software Engineer specializing in backend development and system architecture. Focused on writing clean, scalable, and maintainable code. Enjoys solving complex problems with simple, elegant solutions. Committed to best practices and continuous improvement in all aspects of software development.',
  experience: [
    { id: 'exp1', company: 'TechFlow', role: 'Senior Backend Developer', startDate: '2021', endDate: 'Present', description: '• Designed and implemented microservices architecture for a high-traffic e-commerce platform.\n• Optimized database performance, reducing query latency by 50% under load.\n• Led code reviews and established new coding standards for the backend team.' },
    { id: 'exp2', company: 'CodeWorks Japan', role: 'Software Engineer', startDate: '2019', endDate: '2021', description: '• Developed and maintained RESTful APIs for a suite of B2B SaaS products.\n• Wrote extensive unit and integration tests, improving code coverage to over 90%.'},
  ],
  education: [
    { id: 'edu1', institution: 'University of Tokyo', degree: 'B.S. in Computer Science', startDate: '2015', endDate: '2019', description: '• Graduated with honors, focusing on distributed systems and algorithms.\n• Research assistant for the AI Lab.' },
  ],
  skills: 'Python, Django, Go, PostgreSQL, Docker, Kubernetes, AWS, System Design, REST APIs, Microservices, CI/CD',
};
