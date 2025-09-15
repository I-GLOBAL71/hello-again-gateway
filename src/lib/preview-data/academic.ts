
import type { CVData } from '../types';

export const academic: CVData = {
  personalInfo: {
    name: 'Dr. Eleanor Vance',
    title: 'Professor of History',
    email: 'eleanor.vance@university.edu',
    phone: '555-0106',
    address: 'Cambridge, MA',
  },
  summary: 'Accomplished Professor of History with a focus on 19th-century European social movements. Extensive experience in archival research, undergraduate and graduate teaching, and academic publishing. Recipient of the prestigious Historical Research Grant for work on transatlantic political discourse. Seeking to continue contributing to the field through rigorous scholarship and dedicated mentorship at a leading academic institution.',
  experience: [
    { id: 'exp1', company: 'Harvard University, Department of History', role: 'Professor', startDate: '2012', endDate: 'Present', description: '• Published over 15 peer-reviewed articles in leading historical journals and two scholarly books with university presses.\n• Supervised 5 doctoral theses to completion and served on numerous dissertation committees.\n• Designed and taught a wide range of courses, from introductory surveys to advanced graduate seminars on historical methodology.' },
    { id: 'exp2', company: 'The National Archives, UK', role: 'Visiting Research Fellow', startDate: '2018', endDate: '2019', description: '• Conducted extensive archival research for a forthcoming book project on Anglo-French relations during the Napoleonic era.\n• Presented findings at institutional seminars and several international conferences, contributing to the academic discourse.' },
  ],
  education: [
    { id: 'edu1', institution: 'Yale University', degree: 'Ph.D. in History', startDate: '2007', endDate: '2012', description: '• Dissertation: "The Republic of Letters: Communication and Political Ideology in Post-Napoleonic Europe, 1815-1848".' },
    { id: 'edu2', institution: 'University of Oxford', degree: 'M.St. in European History', startDate: '2006', endDate: '2007', description: '• Focused on Early Modern Political Thought and historiography.' },
    { id: 'edu3', institution: 'Swarthmore College', degree: 'B.A. in History, with High Honors', startDate: '2002', endDate: '2006', description: '• Phi Beta Kappa Society inductee for outstanding academic achievement.' },
  ],
  skills: 'Historical Research & Archival Analysis, Grant Writing & Fundraising, Public Speaking & Lecturing, Curriculum Development, French (fluent), German (proficient), Paleography, Digital Humanities',
};
