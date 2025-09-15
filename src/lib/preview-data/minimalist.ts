
import type { CVData } from '../types';

export const minimalist: CVData = {
  personalInfo: {
    name: 'Kenji Tanaka',
    title: 'Software Engineer',
    email: 'kenji.tanaka@email.com',
    phone: '555-0104',
    address: 'Tokyo, Japan',
  },
  summary: 'An efficient and pragmatic Software Engineer specializing in backend development and distributed systems architecture. Focused on writing clean, scalable, and maintainable code with a strong emphasis on performance. Enjoys solving complex problems with simple, elegant solutions. Committed to best practices, test-driven development, and continuous improvement in all aspects of the software development lifecycle.',
  experience: [
    { id: 'exp1', company: 'TechFlow', role: 'Senior Backend Developer', startDate: '2021', endDate: 'Present', description: '• Designed and implemented a new microservices architecture for a high-traffic e-commerce platform, improving system resilience and scalability.\n• Optimized database performance by rewriting critical queries and introducing a caching layer, reducing average API response latency by 50% under load.\n• Led code reviews and established new coding standards for the backend team, improving code quality and consistency.' },
    { id: 'exp2', company: 'CodeWorks Japan', role: 'Software Engineer', startDate: '2019', endDate: '2021', description: '• Developed and maintained a suite of RESTful APIs for B2B SaaS products using Go and PostgreSQL.\n• Wrote extensive unit and integration tests, improving overall code coverage from 70% to over 95%.'},
  ],
  education: [
    { id: 'edu1', institution: 'University of Tokyo', degree: 'B.S. in Computer Science', startDate: '2015', endDate: '2019', description: '• Graduated with honors, with a research focus on distributed systems and concurrent algorithms.\n• Was a teaching and research assistant for the AI Lab during final year.' },
    { id: 'edu2', institution: 'Online Courses', degree: 'Advanced Go & Kubernetes', startDate: '2020', endDate: 'Present', description: '• Completed multiple advanced courses on platforms like Coursera and Udemy.' },
  ],
  skills: 'Go (Golang), Python, Django, PostgreSQL, Redis, Docker, Kubernetes, AWS, System Design & Architecture, REST APIs, Microservices, CI/CD, TDD',
};
