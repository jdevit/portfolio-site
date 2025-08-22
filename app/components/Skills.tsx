"use client";
import { useState } from "react";
import Container from "./Container";

export type SkillCategory = {
  id: number;
  name: string;
  icon: React.ReactNode;
  skills: string[];
};

const SkillsSection = ({ categories }: { categories: SkillCategory[] }) => {
  const [activeCategory, setActiveCategory] = useState<number>(1);

  return (
    <section id="skills" className="">
      <Container className="py-24">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Categories */}
          <div className="md:w-1/4 flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-indigo-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.icon}
                <span className="truncate">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Active Skills Content */}
          <div className="md:flex-1 bg-white border-1 border-gray-300 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              {categories.find((c) => c.id === activeCategory)?.icon}
              {categories.find((c) => c.id === activeCategory)?.name}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {categories
                .find((c) => c.id === activeCategory)
                ?.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SkillsSection;
