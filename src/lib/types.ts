export type CVData = {
  personalInfo: {
    name: string;
    title: string;
    email: string;
    phone: string;
    address: string;
    photo?: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Education = {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type Template = {
  id: string;
  name: string;
  description: string;
  isNew?: boolean;
};
