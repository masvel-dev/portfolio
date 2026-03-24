export interface Experience {
  title: string;
  company: string;
  years: string;
  description: string;
  achievements: string[];
  responsibilities: string[];
  tech: {
    primary: string[];
    experience: string[];
  };
}