export default function Skills() {
  const skills = {
    Frontend: [
      { name: "React", color: "bg-[#61DAFB] text-black" }, // React 브랜드 색상
      { name: "Vue.js", color: "bg-[#42B883]" }, // Vue 브랜드 색상
      { name: "TypeScript", color: "bg-[#3178C6]" }, // TS 브랜드 색상
      { name: "JavaScript (ES6+)", color: "bg-[#F7DF1E] text-black" }, // JS 브랜드 색상
      { name: "jQuery", color: "bg-[#0769AD]" }, // jQuery 브랜드 색상
      { name: "HTML5", color: "bg-[#E34F26]" }, // HTML5 브랜드 색상
      { name: "CSS3", color: "bg-[#1572B6]" }, // CSS3 브랜드 색상
      { name: "SCSS", color: "bg-[#CC6699]" }, // Sass 브랜드 색상
      { name: "TailwindCSS", color: "bg-[#06B6D4]" }, // Tailwind 브랜드 색상
    ],
    "State Management": [
      { name: "Redux", color: "bg-[#764ABC]" }, // Redux 브랜드 색상
    ],
    "Backend & Database": [
      { name: "Node.js", color: "bg-[#339933]" }, // Node.js 브랜드 색상
      { name: "MariaDB", color: "bg-[#003545]" }, // MariaDB 브랜드 색상
      { name: "Firebase", color: "bg-[#FFCA28] text-black" }, // Firebase 브랜드 색상
    ],
    "Tools & Collaboration": [
      { name: "Git", color: "bg-[#F05032]" }, // Git 브랜드 색상
      { name: "GitHub", color: "bg-[#181717]" }, // GitHub 브랜드 색상
      { name: "SVN", color: "bg-[#809CC9]" }, // SVN 브랜드 색상
      { name: "Slack", color: "bg-[#4A154B]" }, // Slack 브랜드 색상
      { name: "Notion", color: "bg-black" }, // Notion 브랜드 색상
    ],
    Others: [
      { name: "MQTT", color: "bg-[#660066]" }, // MQTT 브랜드 색상
      { name: "Chart.js", color: "bg-[#FF6384]" }, // Chart.js 브랜드 색상
    ],
  };

  const categoryIcons = {
    Frontend: "🎨",
    "State Management": "📦",
    "Backend & Database": "⚙️",
    "Tools & Collaboration": "🔧",
    Others: "🔌",
  };

  return (
    <section id="skills" className="mb-20 scroll-mt-5">
      <h2 className="mb-12 text-4xl font-bold">Skills</h2>

      {/* 스킬 카드 */}
      <div>
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 space-y-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="flex flex-col md:flex-row gap-4 md:items-start"
            >
              {/* 카테고리 */}
              <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
                <span className="text-4xl">
                  {categoryIcons[category as keyof typeof categoryIcons]}
                </span>
                <h3 className="text-xl text-secondary font-bold">{category}</h3>
              </div>

              {/* 배지들 */}
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${skill.color} shadow-md hover:shadow-lg transition-shadow`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
