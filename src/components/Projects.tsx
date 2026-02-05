import { getAllProjects } from "@/lib/mdx";
import { ProjectProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ProjectItem({ ...project }: ProjectProps) {
  return (
    <article className="mb-5 rounded-lg border border-gray-200 overflow-hidden hover:border-primary transition-colors">
      <div className="flex flex-col md:flex-row relative">
        {/* 이미지 - 모바일: 위, 데스크톱: 오른쪽 (배경) */}
        {project.image && (
          <div className="relative w-full h-48 md:hidden bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* 내용 */}
        <div className="flex-1 p-6 relative z-10">
          {/* 제목 & 기간 */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              {project.title}
            </h3>
            <p className="text-sm text-neutral">{project.period}</p>
          </div>

          {/* 설명 */}
          <p className="text-neutral mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* 요약 */}
          <ul className="space-y-2 mb-4">
            {project.summary.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
                <span className="text-neutral">{item}</span>
              </li>
            ))}
          </ul>

          {/* 기술 스택 */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* 상세보기 링크 - 왼쪽 영역 */}
          <div className="mt-4">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:opacity-80 transition-all"
            >
              상세보기 →
            </Link>
          </div>
        </div>

        {/* 이미지 - 오른쪽 (데스크톱에서만 표시, 배경) */}
        {project.image && (
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-64 bg-gray-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* GitHub & Demo 버튼 - 이미지 위에 표시 */}
        <div className="absolute bottom-4 right-4 z-20 flex gap-2">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:opacity-80 transition-all"
            >
              GitHub →
            </Link>
          )}
          {project.demo && (
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-medium bg-black text-white rounded-full hover:opacity-80 transition-all"
            >
              Demo →
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const projectData = getAllProjects();
  const projects = projectData.map((proj) => ({
    title: proj.metadata.title,
    description: proj.metadata.description,
    period: proj.metadata.period,
    image: proj.metadata.image,
    github: proj.metadata.github,
    demo: proj.metadata.demo,
    order: proj.metadata.order,
    summary: proj.metadata.summary,
    techStack: proj.metadata.techStack,
    slug: proj.slug,
  }));
  return (
    <section id="projects" className="mb-32">
      <h2 className="mb-12 text-4xl font-bold">Projects</h2>
      {projects.map((experience) => (
        <ProjectItem {...experience} key={experience.order} />
      ))}
    </section>
  );
}
