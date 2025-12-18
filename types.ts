
import React from 'react';

export interface Skill {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface EducationItem {
  year: string;
  degree: string;
  school: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  sources?: { uri: string; title: string }[];
}
