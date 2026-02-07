import Image from "next/image";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  // 이미지 컴포넌트
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const src = typeof props.src === "string" ? props.src : "";
    return (
      <Image
        src={src}
        width={800}
        height={600}
        className="rounded-lg my-8"
        alt={props.alt || ""}
        priority={false}
      />
    );
  },
};
