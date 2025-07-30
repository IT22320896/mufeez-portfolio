import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () =>
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.theme = dark ? "dark" : "light";
  }, [dark]);

  return (
    <button
      onClick={() => {
        setDark(!dark);
        // For debugging: console.log('ThemeToggle clicked');
      }}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-4 right-4 z-50 inline-flex items-center justify-center p-2 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-800 shadow-md hover:scale-110 focus:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600"
    >
      <span className="sr-only">Toggle theme</span>
      <span className="transition-transform duration-300 text-yellow-400 dark:text-blue-300">
        {dark ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71" /></svg>
        )}
      </span>
    </button>
  );
}
