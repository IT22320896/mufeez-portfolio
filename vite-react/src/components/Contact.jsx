import SectionHeader from "./SectionHeader";
import { contact } from "../data/portfolioData";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
      <div className="max-w-3xl mx-auto">
        <div className="transition-all duration-1000 transform translate-y-0 opacity-100">
          <SectionHeader title="Contact" subtitle="Let's get in touch!" />
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 mt-8">
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12v1a4 4 0 01-8 0v-1m8 0V8a4 4 0 00-8 0v4m8 0H8" /></svg>
                </span>
                <a href={`mailto:${contact.email}`} className="text-lg font-medium text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors" aria-label="Email">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm12-12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 12a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                </span>
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300" aria-label="Phone">
                  {contact.phone}
                </span>
              </li>
              <li className="flex items-center gap-4">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 01-12 0V6a6 6 0 0112 0v2zm0 0v2a6 6 0 01-12 0V8" /></svg>
                </span>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300 transition-colors" aria-label="LinkedIn">
                  {contact.linkedin}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
