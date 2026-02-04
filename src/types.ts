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
