import { useState, useEffect } from "react";
import { profile } from "../data/portfolioData";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-12 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Profile Image with Animation */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <img
              src={profile.photo}
              alt="Profile"
              className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full shadow-2xl object-cover border-4 border-white dark:border-gray-800 transform group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <div className="mb-6">
              <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-2 animate-fade-in-up animation-delay-300">
                Hello, I'm
              </p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in-up animation-delay-500">
                {profile.name}
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-4 animate-fade-in-up animation-delay-700">
                {profile.title}
              </p>
              <p className="text-xl italic text-gray-500 dark:text-gray-400 mb-8 animate-fade-in-up animation-delay-900">
                {profile.slogan}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-1100">
              <a
                href={profile.cv}
                download
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                aria-label="Download CV"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </span>
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-full hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-300 transform hover:scale-105"
                aria-label="Scroll to Contact section"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
