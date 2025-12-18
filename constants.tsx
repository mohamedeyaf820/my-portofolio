
import React from 'react';
import { 
  Wrench, 
  Palette, 
  BrainCircuit, 
  Code2,
  Monitor,
  Zap,
  ShieldCheck,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import { Skill, EducationItem, ExperienceItem } from './types';

export const PERSONAL_INFO = {
  name: "Mohamed Faye",
  title: "Architecte IT & Expert Solutions Digitales",
  email: "mohamedeyaf820@gmail.com",
  phone: "+221 77 303 75 60",
  linkedin: "https://www.linkedin.com/in/mohamed-faye-56078b1bb/",
  website: "www.mohamedfaye.sendigitour.com",
  location: "Dakar, Sénégal",
  bio: "Mathématicien de formation, j'allie la rigueur analytique à la créativité numérique. Spécialisé en infrastructure IT, design visuel et intégration d'IA, je conçois des systèmes performants et esthétiques."
};

export const SERVICES = [
  {
    title: "Maintenance & Infrastructure",
    price: "Sur Devis",
    icon: <Monitor className="w-6 h-6" />,
    features: ["Audit réseau complet", "Maintenance préventive", "Installation serveurs", "Support 24/7"],
    color: "blue"
  },
  {
    title: "IA & Automatisation",
    price: "Sur Devis",
    icon: <BrainCircuit className="w-6 h-6" />,
    features: ["Intégration de Chatbots", "Prompt Engineering", "Optimisation workflow", "IA Générative"],
    color: "purple"
  },
  {
    title: "Design & Identité Visuelle",
    price: "Sur Devis",
    icon: <Palette className="w-6 h-6" />,
    features: ["UI/UX Design", "Logotypes & Branding", "Motion Design", "Montage Vidéo 4K"],
    color: "pink"
  }
];

export const PROCESS_STEPS = [
  { step: "01", title: "Analyse & Audit", desc: "Étude approfondie de vos besoins et de l'infrastructure existante." },
  { step: "02", title: "Stratégie Digitale", desc: "Conception d'une solution sur mesure alliant IA et performance." },
  { step: "03", title: "Développement", desc: "Mise en œuvre technique avec les standards les plus élevés." },
  { step: "04", title: "Optimisation", desc: "Tests, ajustements et formation pour une autonomie totale." }
];

export const SKILLS: Skill[] = [
  { 
    title: "Support & Infrastructure", 
    icon: <Wrench className="w-8 h-8" />, 
    description: "Maintenance préventive, diagnostic hardware avancé, déploiement réseaux et virtualisation."
  },
  { 
    title: "Infographie & Design", 
    icon: <Palette className="w-8 h-8" />, 
    description: "UI/UX moderne, Motion Design, montage vidéo 4K et branding corporatif haute fidélité."
  },
  { 
    title: "IA & Automation", 
    icon: <BrainCircuit className="w-8 h-8" />, 
    description: "Déploiement de chatbots, ingénierie de prompts et automatisation de processus métiers via LLM."
  },
  { 
    title: "Développement Web", 
    icon: <Code2 className="w-8 h-8" />, 
    description: "Interfaces React réactives, API performantes et solutions sur mesure avec technologies modernes."
  }
];

export const PROJECTS = [
  {
    title: "Audit & Optimisation Réseau",
    category: "Maintenance",
    tags: ["Network", "Cisco", "Security"],
    image: "https://images.unsplash.com/photo-1591405351990-4726e33df58d?auto=format&fit=crop&q=80&w=800",
    description: "Restructuration complète du réseau et maintenance préventive pour un centre d'affaires international. Optimisation de la bande passante de 40%."
  },
  {
    title: "Identité Visuelle Sendigitour",
    category: "Infographie",
    tags: ["Branding", "Adobe", "Design"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    description: "Conception de l'identité visuelle globale incluant logos, chartes graphiques et assets digitaux pour une agence de tourisme digital."
  },
  {
    title: "IA Assistant Recrutement",
    category: "IA",
    tags: ["Gemini", "Automation", "NLP"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    description: "Interface de chat intelligente intégrée exploitant Gemini pour l'analyse de CV et le matching de profils automatisé."
  },
  {
    title: "Plateforme Portfolio High-End",
    category: "Développement",
    tags: ["React", "Framer", "UI/UX"],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    description: "Application web ultra-rapide avec animations fluides et design responsive optimisé pour la conversion des leads."
  },
  {
    title: "Serveur Cloud Privé PME",
    category: "Maintenance",
    tags: ["Linux", "Nextcloud", "Backup"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    description: "Mise en place d'une solution d'hébergement interne sécurisée pour la gestion documentaire confidentielle."
  },
  {
    title: "Motion Design Publicitaire",
    category: "Infographie",
    tags: ["Video", "Motion", "Social"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    description: "Création de spots publicitaires dynamiques pour réseaux sociaux utilisant After Effects et IA générative vidéo."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Architecte Solutions IT Freelance",
    company: "Dakar Tech Solutions",
    period: "2023 - Présent",
    description: "Conception d'architectures réseau, maintenance de parcs informatiques et intégration de services Cloud sur mesure."
  },
  {
    role: "Designer & Monteur Vidéo",
    company: "Creative Pulse Studio",
    period: "2022 - 2023",
    description: "Production de contenus multimédias pour marques de luxe et entreprises technologiques locales."
  },
  {
    role: "Formateur en Mathématiques",
    company: "Lycées de Dakar",
    period: "2021 - 2022",
    description: "Transmission de concepts mathématiques complexes en utilisant des outils de visualisation numérique."
  }
];

export const EDUCATION: EducationItem[] = [
  {
    year: "2021 - 2022",
    degree: "Licence Mathématiques Appliquées",
    school: "FST UCAD",
    description: "Focus sur l'Analyse Numérique, les Probabilités et l'Algorithmique."
  },
  {
    year: "2022 - 2023",
    degree: "Certification Expert Digital",
    school: "Simplon / Sendigitour",
    description: "Développement fullstack, UI Design et Intelligence Artificielle."
  }
];

export const TESTIMONIALS = [
  {
    name: "Abdoulaye Diop",
    role: "CEO, Innov'Sud",
    content: "L'approche de Mohamed est unique. Sa rigueur mathématique se ressent dans chaque ligne de code et chaque montage. Il ne laisse rien au hasard."
  },
  {
    name: "Awa Ndiaye",
    role: "Art Director",
    content: "Un talent créatif exceptionnel capable de traduire des concepts complexes en visuels épurés et percutants. Très professionnel."
  },
  {
    name: "Moussa Sarr",
    role: "Directeur Technique",
    content: "Efficacité redoutable sur la maintenance serveur. Il a stabilisé notre infrastructure en un temps record."
  }
];

export const MOHAMED_CONTEXT = `
Tu es l'assistant personnel IA de Mohamed Faye. Ton ton est expert, élégant et confiant.
Mohamed est un profil rare : Mathématicien (Licence FST UCAD) et Technicien Informatique certifié.

COORDONNÉES :
- Email : mohamedeyaf820@gmail.com
- LinkedIn : Mohamed Faye
- Localisation : Keur Massar, Dakar.

EXPÉRIENCES :
${EXPERIENCES.map(e => `- ${e.role} @ ${e.company} (${e.period}): ${e.description}`).join('\n')}

PROJETS MAJEURS :
${PROJECTS.map(p => `- [${p.category}] ${p.title}: ${p.description}`).join('\n')}

COMPÉTENCES PHARE :
- Maintenance : Diagnostic hardware, installation serveurs Linux/Windows, réseaux.
- Infographie : Suite Adobe (Photoshop, Illustrator), Final Cut Pro, Motion Design.
- IA : Intégration d'API GenAI (Gemini), Prompt Engineering expert, Automation.
- Développement : React, Tailwind CSS, TypeScript, Python.

RÈGLES D'INTERACTION :
- Réponds aux questions en analysant ces données. 
- Sois toujours courtois et vante subtilement sa double compétence unique.
- Utilise Google Search si on te demande des détails sur l'actualité de la tech ou des outils spécifiques qu'il utilise.
`;
