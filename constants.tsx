
import React from 'react';
import { 
  Wrench, 
  Palette, 
  BrainCircuit, 
  Code2,
  Database,
  MonitorSmartphone,
  Layers,
  Sparkles
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Mohamed Faye",
  title: "Architecte Digital & Expert en Solutions IT",
  email: "mohamedeyaf820@gmail.com",
  phone: "+221 77 303 75 60",
  linkedin: "https://www.linkedin.com/in/mohamed-faye-56078b1bb/",
  website: "www.mohamedfaye.sendigitour.com",
  location: "Dakar, Sénégal",
  bio: "Mathématicien de formation, j'allie la rigueur analytique à la créativité numérique. Spécialisé en infrastructure IT, design visuel et intégration d'IA, je conçois des systèmes performants et esthétiques."
};

export const SKILLS = [
  { 
    title: "Support & Infrastructure", 
    icon: <Wrench className="w-6 h-6" />, 
    description: "Maintenance préventive, diagnostic hardware avancé, déploiement réseaux et virtualisation."
  },
  { 
    title: "Infographie & Design", 
    icon: <Palette className="w-6 h-6" />, 
    description: "UI/UX moderne, Motion Design, montage vidéo 4K et branding corporatif haute fidélité."
  },
  { 
    title: "IA & Automation", 
    icon: <BrainCircuit className="w-6 h-6" />, 
    description: "Déploiement de chatbots, ingénierie de prompts et automatisation de processus métiers via LLM."
  },
  { 
    title: "Développement Web", 
    icon: <Code2 className="w-6 h-6" />, 
    description: "Interfaces React réactives, API performantes et solutions sur mesure avec technologies modernes."
  }
];

export const PROJECTS = [
  {
    title: "Optimisation Parc Informatique",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1591405351990-4726e33df58d?auto=format&fit=crop&q=80&w=800",
    description: "Restructuration complète du réseau et maintenance préventive pour un centre d'affaires."
  },
  {
    title: "Charte Graphique Sendigitour",
    category: "Infographie",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    description: "Conception de l'identité visuelle globale incluant logos, affiches et assets digitaux."
  },
  {
    title: "IA Assistant Personnel",
    category: "IA",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    description: "Interface de chat intelligente intégrée exploitant Gemini pour la gestion de CV."
  },
  {
    title: "Plateforme de Portfolio React",
    category: "Développement",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    description: "Application web ultra-rapide avec animations fluides et design responsive haute performance."
  },
  {
    title: "Système de Monitoring Linux",
    category: "Maintenance",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    description: "Dashboard de surveillance temps réel des ressources serveurs pour une PME."
  },
  {
    title: "Automation Marketing IA",
    category: "IA",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    description: "Scripts de génération de contenu automatisés basés sur des prompts optimisés."
  }
];

export const EXPERIENCES = [
  {
    role: "Architecte Solutions IT Freelance",
    company: "Dakar Tech Solutions",
    period: "2023 - Présent",
    description: "Conception d'architectures réseau, maintenance de parcs informatiques et intégration de services Cloud."
  },
  {
    role: "Designer & Monteur Vidéo",
    company: "Creative Pulse Studio",
    period: "2022 - 2023",
    description: "Production de contenus multimédias pour marques de luxe et entreprises technologiques."
  },
  {
    role: "Formateur en Mathématiques",
    company: "Établissements Privés",
    period: "2021 - 2022",
    description: "Vulgarisation de concepts mathématiques complexes par l'approche algorithmique."
  }
];

export const EDUCATION = [
  {
    year: "2021 - 2022",
    degree: "Licence Mathématiques Appliquées",
    school: "FST UCAD",
    description: "Spécialisation en Analyse Numérique et Probabilités."
  },
  {
    year: "2022 - 2023",
    degree: "Certification Expert Web & Graphisme",
    school: "Simplon / Sendigitour",
    description: "Approfondissement des stacks technologiques modernes et UI Design."
  }
];

export const TESTIMONIALS = [
  {
    name: "Abdoulaye Diop",
    role: "CEO, Innov'Sud",
    content: "L'approche de Mohamed est unique. Sa rigueur mathématique se ressent dans chaque ligne de code et chaque montage."
  },
  {
    name: "Awa Ndiaye",
    role: "Art Director",
    content: "Un talent créatif exceptionnel capable de traduire des concepts complexes en visuels épurés et percutants."
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
- IA : Intégration d'API GenAI, Prompt Engineering expert, Automation.
- Développement : React, Tailwind CSS, Python pour l'automatisation.

Réponds aux questions en analysant ces données. Sois toujours courtois et vante subtilement sa double compétence unique.
`;
