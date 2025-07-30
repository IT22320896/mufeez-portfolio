import { useState, useEffect, useRef } from "react";
import { skills, tools } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillCard = ({ items, title, colorFrom, colorTo, icon }) => (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex items-center mb-6">
        <div
          className={`w-12 h-12 bg-gradient-to-r ${colorFrom} ${colorTo} rounded-full flex items-center justify-center mr-4`}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          {title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <span
            key={i}
            onMouseEnter={() => setHoveredSkill(`${title}-${i}`)}
            onMouseLeave={() => setHoveredSkill(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer transform hover:scale-105 ${
              hoveredSkill === `${title}-${i}`
                ? `bg-gradient-to-r ${colorFrom} ${colorTo} text-white shadow-lg`
                : `bg-gradient-to-r ${colorFrom
                    .replace("from-", "from-")
                    .replace("-600", "-100")} ${colorTo
                    .replace("to-", "to-")
                    .replace("-600", "-100")} dark:${colorFrom
                    .replace("from-", "from-")
                    .replace("-600", "-800")} dark:${colorTo
                    .replace("to-", "to-")
                    .replace("-600", "-800")} text-gray-700 dark:text-gray-300`
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Section Header */}
          <SectionHeader title="Skills & Expertise" subtitle="Here are the technologies and tools I work with to bring ideas to life" />
          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Technical Skills */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <SkillCard
                items={skills}
                title="Technical Skills"
                colorFrom="from-blue-600"
                colorTo="to-blue-700"
                icon={
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                }
              />
            </div>

            {/* Tools & Technologies */}
            <div
              className={`transition-all duration-1000 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <SkillCard
                items={tools}
                title="Tools & Technologies"
                colorFrom="from-purple-600"
                colorTo="to-purple-700"
                icon={
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          {/* Skill Progression Visualization */}
          <div
            className={`mt-16 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
                Proficiency Levels
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Frontend */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">
                    Frontend Development
                  </h4>
                  <div className="space-y-4">
                    {[
                      { name: "React.js", level: 80 },
                      { name: "JavaScript/TypeScript", level: 85 },
                      { name: "CSS/Tailwind", level: 75 },
                      { name: "HTML5", level: 90 },
                    ].map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-blue-600 to-blue-700 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${800 + i * 200}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-purple-600 dark:text-purple-400">
                    Backend Development
                  </h4>
                  <div className="space-y-4">
                    {[
                      { name: "Node.js/Express", level: 80 },
                      { name: "Java", level: 70 },
                      { name: "Database Design", level: 80 },
                      { name: "API Development", level: 75 },
                    ].map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {skill.name}
                          </span>
                          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-600 to-purple-700 h-2 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${800 + i * 200}ms`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
