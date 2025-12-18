
export interface Skill {
  name: string;
  category: 'maintenance' | 'infographie' | 'os' | 'logiciels' | 'ia';
  icon?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
