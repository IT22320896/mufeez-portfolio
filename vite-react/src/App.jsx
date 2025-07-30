import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 text-gray-800 dark:text-gray-100 transition-all duration-500">
      
      <Navigation />
      <ThemeToggle />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      
      {/* Floating background elements */}
      <div className="fixed top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-pulse"></div>
      <div className="fixed bottom-20 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
    </div>
  );
}