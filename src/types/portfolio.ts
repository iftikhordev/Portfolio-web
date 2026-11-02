export interface ProjectItem {
  id: string;
  title: string;
  category: 'fullstack' | 'frontend' | 'ai' | 'mobile' | 'all';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  metrics?: { label: string; value: string };
  features: string[];
  gradientTheme: string; // Tailwind gradient classes for preview
  accentColor: string;
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'architecture';
  level: number; // 0 - 100
  badge: 'Boshlang\'ich' | 'O\'rta' | 'Ilg\'or' | 'Ekspert';
  icon: string;
  projectsCount: number;
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  type: string; // Masofaviy / To'liq stavka / Gibrid
  achievements: string[];
  technologies: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  avatarColor: string;
}

export interface ProfileData {
  name: string;
  title: string;
  roles: string[];
  bio: string;
  aboutDetails: string[];
  email: string;
  telegram: string;
  github: string;
  linkedin: string;
  phone: string;
  location: string;
  yearsOfExperience: number;
  completedProjects: number;
  happyClients: number;
  availability: 'available' | 'busy' | 'selective';
}

export interface PortfolioState {
  profile: ProfileData;
  projects: ProjectItem[];
  skills: SkillItem[];
  experiences: ExperienceItem[];
  testimonials: TestimonialItem[];
}
