export default function Skills() {
  const skills = [
    { name: "HTML", level: 99 },
    { name: "CSS/Tailwind", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 70 },
    { name: "Node.js", level: 10 },
    { name: "", level: 70 },
    { name: "PHP", level: 80 },
    { name: "MYSQL", level: 80 },
    { name: "Git", level: 80 },
    { name: "VSCODE", level: 100 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {skill.name}
                </span>
                <span className="text-gray-500 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-6 text-center">
            Tools & Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "VS Code",
              "GitHub",
              "Figma",
              "Postman",
              "Netlify",
              "Vercel",
              "Firebase",
              "Docker",
            ].map((tool, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
