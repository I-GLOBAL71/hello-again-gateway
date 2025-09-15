
import type { CVData } from '../types';

export const academic: CVData = {
  personalInfo: {
    name: 'Dr. Eleanor Vance',
    title: 'Professor of Modern History',
    email: 'eleanor.vance@university.edu',
    phone: '555-0106',
    address: 'Cambridge, MA',
  },
  summary: 'Accomplished Professor of History with 15 years of experience specializing in 19th-century European social movements and transatlantic political discourse. Extensive background in archival research, undergraduate and graduate teaching, and academic publishing. Recipient of the prestigious Historical Research Grant for groundbreaking work on political discourse. Seeking to continue contributing to the field through rigorous scholarship and dedicated mentorship at a leading academic institution renowned for its historical studies program.',
  experience: [
    { id: 'exp1', company: 'Harvard University, Department of History', role: 'Full Professor', startDate: '2012', endDate: 'Present', description: '• Published over 20 peer-reviewed articles in leading historical journals, including the "American Historical Review" and "Past & Present".\n• Authored two critically acclaimed scholarly books with Oxford University Press.\n• Supervised 8 doctoral theses to completion and served on numerous dissertation committees.\n• Designed and taught a wide range of courses, from introductory surveys to advanced graduate seminars on historical methodology and 19th-century history.' },
    { id: 'exp2', company: 'The National Archives, Kew, UK', role: 'Visiting Research Fellow', startDate: '2018', endDate: '2019', description: '• Conducted extensive archival research for a forthcoming book project on Anglo-French relations during the Napoleonic era.\n• Digitized and cataloged a collection of previously unexamined diplomatic correspondences.\n• Presented initial findings at institutional seminars and several international conferences, contributing to the academic discourse.' },
    { id: 'exp3', company: 'Princeton University', role: 'Assistant Professor', startDate: '2008', endDate: '2012', description: '• Taught undergraduate courses on European history and historiography.\n• Developed a new course on the history of political revolutions which became one of the department\'s most popular electives.\n• Published first academic monograph and secured initial research grants.' },
  ],
  education: [
    { id: 'edu1', institution: 'Yale University', degree: 'Ph.D. in History', startDate: '2003', endDate: '2008', description: '• Dissertation: "The Republic of Letters: Communication and Political Ideology in Post-Napoleonic Europe, 1815-1848".\n• Awarded the Sterling Prize Fellowship for outstanding scholarship.' },
    { id: 'edu2', institution: 'University of Oxford', degree: 'M.St. in European History', startDate: '2002', endDate: '2003', description: '• Focused on Early Modern Political Thought and historiography, with a thesis on Machiavelli\'s reception in France.' },
    { id: 'edu3', institution: 'Swarthmore College', degree: 'B.A. in History, with High Honors', startDate: '1998', endDate: '2002', description: '• Phi Beta Kappa Society inductee for outstanding academic achievement.\n• Graduated summa cum laude.' },
  ],
  skills: 'Historical Research & Archival Analysis, Grant Writing & Fundraising, Public Speaking & Lecturing, Curriculum Development, Academic Publishing, Peer Review, French (fluent), German (reading proficiency), Latin (reading proficiency), Paleography, Digital Humanities (Omeka, Zotero)',
};
