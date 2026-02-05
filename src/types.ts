// Experience 타입
export interface ExperienceMetadata {
  company: string;
  position: string;
  period: string;
  order: number;
  summary: string[];
  techStack: string[];
}

export interface ExperienceData {
  metadata: ExperienceMetadata;
  content: string;
  slug: string;
}

export interface ExperienceProps extends ExperienceMetadata {
  slug: string;
}

// Project 타입
export interface ProjectMetadata {
  title: string;
  description: string;
  period: string;
  image?: string;
  github?: string;
  demo?: string;
  order: number;
  summary: string[];
  techStack: string[];
}

export interface ProjectData {
  metadata: ProjectMetadata;
  content: string;
  slug: string;
}

export interface ProjectProps extends ProjectMetadata {
  slug: string;
}
