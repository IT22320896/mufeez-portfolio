import { useState, useEffect, useRef } from "react";
import { education } from "../data/portfolioData";
import SectionHeader from "./SectionHeader";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
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

  return (
    <section
      id="education"
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
          <SectionHeader title="Education Journey" subtitle="My academic journey and the knowledge that shapes my expertise" />
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex items-center transition-all duration-1000 transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  } ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                  style={{ transitionDelay: `${index * 300 + 200}ms` }}
                  onMouseEnter={() => setActiveItem(index)}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 lg:left-1/2 transform -translate-x-1/2 z-10">
                    <div
                      className={`w-6 h-6 rounded-full border-4 transition-all duration-300 ${
                        activeItem === index
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 border-white dark:border-gray-900 scale-125"
                          : "bg-white dark:bg-gray-800 border-blue-600"
                      } shadow-lg`}
                    ></div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-20 lg:ml-0 lg:w-5/12 ${
                      index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"
                    }`}
                  >
                    <div
                      className={`group bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                        activeItem === index ? "scale-105" : "hover:scale-105"
                      }`}
                    >
                      {/* Institution Badge */}
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-300">
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
                              d="M12 14l9-5-9-5-9 5 9 5z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                            {edu.duration}
                          </span>
                        </div>
                      </div>

                      {/* Degree */}
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {edu.degree}
                      </h3>

                      {/* Institute */}
                      <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                        <svg
                          className="w-5 h-5 mr-2 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {edu.institute}
                      </p>

                      {/* CGPA */}
                      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center">
                          <svg
                            className="w-5 h-5 text-yellow-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            CGPA
                          </span>
                        </div>
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                          {edu.cgpa}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Year */}
                  <div
                    className={`hidden lg:block absolute ${
                      index % 2 === 0 ? "right-0" : "left-0"
                    } top-1/2 transform -translate-y-1/2 ${
                      index % 2 === 0 ? "translate-x-4" : "-translate-x-4"
                    }`}
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                      {edu.duration.split(" - ")[0]}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic Achievements */}
          <div
            className={`mt-20 transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
            style={{ transitionDelay: `${education.length * 300 + 400}ms` }}
          >
            <div className="grid md:grid-cols-3 gap-8">
              {/* Achievement Cards */}
              {[
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  ),
                  title: "Academic Excellence",
                  description:
                    "Maintained high CGPA throughout academic journey",
                  color: "from-green-600 to-green-700",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  ),
                  title: "Continuous Learning",
                  description:
                    "Always staying updated with latest technologies and methodologies",
                  color: "from-blue-600 to-blue-700",
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  ),
                  title: "Team Leadership",
                  description:
                    "Led multiple academic projects and study groups",
                  color: "from-purple-600 to-purple-700",
                },
              ].map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {achievement.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
