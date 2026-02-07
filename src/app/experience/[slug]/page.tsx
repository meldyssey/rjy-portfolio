import { getExperienceBySlug } from "@/lib/mdx";
import { mdxComponents } from "@/lib/mdx-components";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  const { metadata, content } = experience;

  return (
    <article className="prose pt-20 py-12">
      {/* 헤더 */}
      <div className="mb-8 pb-6 border-b border-gray-200">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {metadata.company}
        </h1>
        <p className="text-xl text-primary font-medium mb-2">
          {metadata.position}
        </p>
        <p className="text-sm text-neutral">{metadata.period}</p>
        {/* 기술 스택 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {metadata.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* MDX 본문 */}
      <div className="mt-8">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </article>
  );
}
