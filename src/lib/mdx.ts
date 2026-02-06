import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  ExperienceData,
  ExperienceMetadata,
  ProjectData,
  ProjectMetadata,
} from "@/types";

// Experiences
const experienceDirectory = path.join(process.cwd(), "src/content/experiences");

export function getAllExperiences(): ExperienceData[] {
  if (!fs.existsSync(experienceDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(experienceDirectory);

  const experiences = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(experienceDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        metadata: data as ExperienceMetadata,
        content,
        slug,
      };
    });
  return experiences.sort((a, b) => a.metadata.order - b.metadata.order);
}

export function getExperienceBySlug(slug: string): ExperienceData | null {
  const fullPath = path.join(experienceDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  console.log(data);

  return {
    metadata: data as ExperienceMetadata,
    content,
    slug,
  };
}

// Projects
const projectDirectory = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): ProjectData[] {
  if (!fs.existsSync(projectDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectDirectory);

  const projects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(projectDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        metadata: data as ProjectMetadata,
        content,
        slug,
      };
    });
  return projects.sort((a, b) => a.metadata.order - b.metadata.order);
}

export function getPorjectBySlug(slug: string): ProjectData | null {
  const fullPath = path.join(projectDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(fileContents);

  return {
    metadata: data as ProjectMetadata,
    content,
    slug,
  };
}
