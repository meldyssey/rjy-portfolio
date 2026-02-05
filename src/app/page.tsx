import Experiences from "@/components/Experiences";
import Projects from "@/components/Projects";

export default async function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="flex flex-col items-start min-h-screen justify-center">
        <h1 className="mb-4 text-7xl font-bold">류정윤</h1>
        <p className="mb-8 text-4xl font-bold text-primary">
          프론트엔드 개발자
        </p>
        <p className="text-lg max-w-2xl">간단한 자기소개 문구</p>
        <button className="mt-4 rounded-full bg-primary px-6 py-3 text-md font-bold text-white hover:bg-primary/90 hover:scale-105 transition-all">
          Contact Me
        </button>
      </section>

      {/* About */}
      <section id="about" className="mb-32">
        <h2 className="mb-12 text-4xl font-bold">About</h2>
        <p>소개 내용</p>
      </section>

      {/* Experiences */}
      <Experiences />

      {/* Projects */}
      <Projects />
    </div>
  );
}
