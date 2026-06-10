export type Project = {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  image: string;
};

export type Tool = {
  id: number;
  name: string;
  iconClass?: string;
  shortName?: string;
};

export type Experience = {
  id: number;
  role: string;
  company: string;
  website: string;
  date: string;
  description: string;
  keyResponsibilities: string[];
  techStack: string[];
};

export type EducationRecord = {
  id: number;
  degree: string;
  institution: string;
  date: string;
};

export type Certification = {
  id: number;
  title: string;
  issuer: string;
  link: string;
  date: string;
};

export type EducationContent = {
  education: EducationRecord[];
  certifications: Certification[];
};
