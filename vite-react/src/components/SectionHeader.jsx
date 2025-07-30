import React from "react";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-6"></div>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
} 