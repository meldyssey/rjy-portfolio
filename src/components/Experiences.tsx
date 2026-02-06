import { getAllExperiences } from "@/lib/mdx";
import { ExperienceData, ExperienceMetadata, ExperienceProps } from "@/types";
import Link from "next/link";
import React from "react";

export function ExperienceItem({ ...experience }: ExperienceProps) {
  return (
    <article className="relative pl-8 border-l-2 border-gray-200">
      {/* 타임라인 점 */}
      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary border-4 border-white"></div>

      {/* 내용 */}
      <div className="pb-8">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900">
            {experience.company}
          </h3>
          <span className="text-sm text-neutral">{experience.period}</span>
        </div>

        <p className="text-lg font-medium text-primary mb-4">
          {experience.position}
        </p>

        {/* 요약 */}
        <ul className="space-y-2 mb-4">
          {experience.summary.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400"></span>
              <span className="text-neutral">{item}</span>
            </li>
          ))}
        </ul>

        {/* 기술 스택 */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {experience.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 상세보기 링크 */}
        <Link
          href={`/experience/${experience.slug}`}
          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:opacity-80 transition-all"
        >
          상세보기 →
        </Link>
      </div>
    </article>
  );
}

export default function Experiences() {
  const experiencesData = getAllExperiences();
  const experiences = experiencesData.map((exp) => ({
    company: exp.metadata.company,
    position: exp.metadata.position,
    period: exp.metadata.period,
    order: exp.metadata.order,
    summary: exp.metadata.summary,
    techStack: exp.metadata.techStack,
    slug: exp.slug,
  }));
  return (
    <section id="experience" className="mb-32">
      <h2 className="mb-12 text-4xl font-bold">Work Experiences</h2>
      {experiences.map((experience) => (
        <ExperienceItem {...experience} key={experience.order} />
      ))}
    </section>
  );
}
