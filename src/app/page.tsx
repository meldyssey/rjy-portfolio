import Image from "next/image";

export default function Home() {
  return (
    <div className="py-24">
      {/* Hero */}
      <section className="mb-32">
        <h1 className="mb-4 text-7xl font-bold">류정윤</h1>
        <p className="mb-8 text-4xl font-bold">프론트엔드 개발자</p>
        <p className="text-lg">간단하 자기소개 문구</p>
      </section>

      {/* About */}
      <section id="about" className="mb-32">
        <h2 className="mb-12 text-4xl font-bold">About</h2>
        <p>소개 내용</p>
      </section>

      {/* Experience */}
      <section id="experience" className="mb-32">
        <h2 className="mb-12 text-4xl font-bold">Work Experience</h2>
        <p>경력</p>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-32">
        <h2 className="mb-12 text-4xl font-bold">Projects</h2>
        <p>프로젝트 내용</p>
      </section>
    </div>
  );
}
